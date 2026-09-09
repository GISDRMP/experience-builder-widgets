/** @jsx jsx */
import { React, jsx, AllWidgetProps, DataSource, DataSourceComponent, FeatureLayerDataSource, FeatureDataRecord } from 'jimu-core'
import { Button, TextInput, Select, Option, Alert } from 'jimu-ui'
import FeatureLayer from 'esri/layers/FeatureLayer'
import esriRequest from 'esri/request'
import { fabric } from 'fabric'
import { IMConfig } from '../config'
import { SYMBOLS, SymbolDefinition } from './symbols'
import {
  addTemplate,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  createLegendObject,
  createSaveState,
  makeArrow,
  parseSaveState,
  SketchSaveState,
  STATE_FILE_SUFFIX,
  TemplateOptions,
  userObjectOptions
} from './fabric-editor'
import defaultMessages from './translations/default'
import './style.scss'

const { useCallback, useEffect, useMemo, useRef, useState } = React

type Props = AllWidgetProps<IMConfig>
type Tool = 'select' | 'pen' | 'line' | 'arrow' | 'rect' | 'ellipse' | 'text'
type Notice = { type: 'success' | 'warning' | 'error', text: string }

type ActiveDrawing =
  | { tool: 'rect', startX: number, startY: number, object: fabric.Rect }
  | { tool: 'ellipse', startX: number, startY: number, object: fabric.Ellipse }
  | { tool: 'line' | 'arrow', startX: number, startY: number, object: fabric.Line }

interface FabricPathEvent extends fabric.IEvent<Event> {
  path?: fabric.Path
}

const CUSTOM_PROPERTIES = ['data']
const MAX_STATE_FILE_BYTES = 30 * 1024 * 1024

export default function Widget (props: Props): React.ReactElement {
  const canvasElementRef = useRef<HTMLCanvasElement>(null)
  const canvasRef = useRef<fabric.Canvas>()
  const imageInputRef = useRef<HTMLInputElement>(null)
  const stateInputRef = useRef<HTMLInputElement>(null)
  const dataSourceRef = useRef<FeatureLayerDataSource>()
  const mountedRef = useRef(true)
  const drawingRef = useRef<ActiveDrawing>()
  const historyLockedRef = useRef(false)
  const undoRef = useRef<string[]>([])
  const redoRef = useRef<string[]>([])
  const lastSnapshotRef = useRef('')
  const templateRef = useRef<TemplateOptions>({
    showGrid: props.config.showGrid !== false,
    gridSize: props.config.gridSize || 25
  })
  const toolRef = useRef<Tool>('select')
  const activeSymbolRef = useRef<string>()
  const colorRef = useRef(props.config.defaultStrokeColor || '#17202a')
  const strokeWidthRef = useRef(props.config.defaultStrokeWidth || 4)
  const symbolScaleRef = useRef(1)

  const [tool, setTool] = useState<Tool>('select')
  const [activeSymbolId, setActiveSymbolId] = useState<string>()
  const [color, setColor] = useState(colorRef.current)
  const [strokeWidth, setStrokeWidth] = useState(strokeWidthRef.current)
  const [symbolScale, setSymbolScale] = useState(1)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [dataSource, setDataSource] = useState<FeatureLayerDataSource>()
  const [selectedRecords, setSelectedRecords] = useState<FeatureDataRecord[]>([])
  const [notice, setNotice] = useState<Notice>()
  const [saving, setSaving] = useState(false)
  const [loadingState, setLoadingState] = useState(false)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [hasSelection, setHasSelection] = useState(false)

  useEffect(() => { toolRef.current = tool }, [tool])
  useEffect(() => { activeSymbolRef.current = activeSymbolId }, [activeSymbolId])
  useEffect(() => { colorRef.current = color }, [color])
  useEffect(() => { strokeWidthRef.current = strokeWidth }, [strokeWidth])
  useEffect(() => { symbolScaleRef.current = symbolScale }, [symbolScale])

  const updateHistoryButtons = (): void => {
    setCanUndo(undoRef.current.length > 0)
    setCanRedo(redoRef.current.length > 0)
  }

  const fabricSnapshot = (canvas = canvasRef.current): string => {
    return canvas ? JSON.stringify(canvas.toJSON(CUSTOM_PROPERTIES)) : ''
  }

  const captureHistory = useCallback((): void => {
    const canvas = canvasRef.current
    if (!canvas || historyLockedRef.current) return
    const next = fabricSnapshot(canvas)
    if (next === lastSnapshotRef.current) return
    if (lastSnapshotRef.current) undoRef.current = [...undoRef.current.slice(-49), lastSnapshotRef.current]
    lastSnapshotRef.current = next
    redoRef.current = []
    updateHistoryButtons()
  }, [])

  const normalizeUserObjects = (canvas: fabric.Canvas): void => {
    canvas.getObjects().forEach((object) => {
      if (object.excludeFromExport) return
      object.set({ ...userObjectOptions(), selectable: true, evented: true })
      object.setCoords()
    })
  }

  const loadFabricJson = useCallback((json: object, template: TemplateOptions, resetHistory: boolean): Promise<void> => {
    const canvas = canvasRef.current
    if (!canvas) return Promise.reject(new Error('The drawing canvas is not ready.'))
    historyLockedRef.current = true
    canvas.discardActiveObject()
    return new Promise<void>((resolve, reject) => {
      try {
        canvas.loadFromJSON(json, () => {
          try {
            templateRef.current = template
            normalizeUserObjects(canvas)
            addTemplate(canvas, template)
            canvas.requestRenderAll()
            lastSnapshotRef.current = fabricSnapshot(canvas)
            if (resetHistory) {
              undoRef.current = []
              redoRef.current = []
            }
            historyLockedRef.current = false
            updateHistoryButtons()
            setHasSelection(false)
            resolve()
          } catch (error) {
            historyLockedRef.current = false
            reject(error)
          }
        })
      } catch (error) {
        historyLockedRef.current = false
        reject(error)
      }
    })
  }, [])

  useEffect(() => {
    if (!canvasElementRef.current) return
    mountedRef.current = true
    const canvas = new fabric.Canvas(canvasElementRef.current, {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      preserveObjectStacking: true,
      selection: true,
      fireRightClick: false,
      stopContextMenu: true,
      enableRetinaScaling: true
    })
    canvasRef.current = canvas
    historyLockedRef.current = true
    addTemplate(canvas, templateRef.current)
    historyLockedRef.current = false
    lastSnapshotRef.current = fabricSnapshot(canvas)

    const selectionChanged = (): void => setHasSelection(canvas.getActiveObjects().length > 0)
    const objectModified = (): void => captureHistory()
    const pathCreated = (event: FabricPathEvent): void => {
      const path = event.path
      if (path) {
        path.set({ ...userObjectOptions(), data: { role: 'user' } })
        path.setCoords()
      }
      captureHistory()
    }

    canvas.on('selection:created', selectionChanged)
    canvas.on('selection:updated', selectionChanged)
    canvas.on('selection:cleared', selectionChanged)
    canvas.on('object:modified', objectModified)
    canvas.on('path:created', pathCreated)

    return () => {
      mountedRef.current = false
      canvas.off()
      canvas.dispose()
      canvasRef.current = undefined
    }
  }, [captureHistory])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.isDrawingMode = tool === 'pen'
    canvas.selection = tool === 'select' && !activeSymbolId
    canvas.defaultCursor = tool === 'select' && !activeSymbolId ? 'default' : 'crosshair'
    canvas.freeDrawingBrush.color = color
    canvas.freeDrawingBrush.width = strokeWidth
    canvas.getObjects().forEach((object) => {
      if (!object.excludeFromExport) object.set({ selectable: canvas.selection, evented: canvas.selection })
    })
    if (!canvas.selection) canvas.discardActiveObject()
    canvas.requestRenderAll()
  }, [activeSymbolId, color, strokeWidth, tool])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mouseDown = (event: fabric.IEvent<Event>): void => {
      const pointer = canvas.getPointer(event.e)
      const symbolId = activeSymbolRef.current
      if (symbolId) {
        const definition = SYMBOLS.find((item) => item.id === symbolId)
        if (definition) {
          const object = createLegendObject(definition, symbolScaleRef.current)
          object.set({ left: pointer.x, top: pointer.y })
          canvas.add(object)
          canvas.setActiveObject(object)
          canvas.requestRenderAll()
          captureHistory()
        }
        setActiveSymbolId(undefined)
        setTool('select')
        return
      }

      if (toolRef.current === 'text') {
        const value = window.prompt('Enter sketch text')
        if (value?.trim()) {
          const text = new fabric.Textbox(value.trim(), {
            left: pointer.x, top: pointer.y, width: 260,
            fill: colorRef.current, fontFamily: 'Arial', fontSize: 34,
            fontWeight: '600', ...userObjectOptions()
          })
          canvas.add(text)
          canvas.setActiveObject(text)
          captureHistory()
        }
        setTool('select')
        return
      }

      if (!['line', 'arrow', 'rect', 'ellipse'].includes(toolRef.current)) return
      historyLockedRef.current = true
      if (toolRef.current === 'rect') {
        const object = new fabric.Rect({ left: pointer.x, top: pointer.y, width: 1, height: 1, fill: 'rgba(255,255,255,0)', stroke: colorRef.current, strokeWidth: strokeWidthRef.current, ...userObjectOptions(), selectable: false, evented: false })
        canvas.add(object)
        drawingRef.current = { tool: 'rect', startX: pointer.x, startY: pointer.y, object }
      } else if (toolRef.current === 'ellipse') {
        const object = new fabric.Ellipse({ left: pointer.x, top: pointer.y, rx: 1, ry: 1, fill: 'rgba(255,255,255,0)', stroke: colorRef.current, strokeWidth: strokeWidthRef.current, originX: 'left', originY: 'top', ...userObjectOptions(), selectable: false, evented: false })
        canvas.add(object)
        drawingRef.current = { tool: 'ellipse', startX: pointer.x, startY: pointer.y, object }
      } else {
        const object = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], { stroke: colorRef.current, strokeWidth: strokeWidthRef.current, ...userObjectOptions(), selectable: false, evented: false })
        canvas.add(object)
        drawingRef.current = { tool: toolRef.current, startX: pointer.x, startY: pointer.y, object }
      }
    }

    const mouseMove = (event: fabric.IEvent<Event>): void => {
      const drawing = drawingRef.current
      if (!drawing) return
      const pointer = canvas.getPointer(event.e)
      if (drawing.tool === 'rect') {
        drawing.object.set({ left: Math.min(drawing.startX, pointer.x), top: Math.min(drawing.startY, pointer.y), width: Math.abs(pointer.x - drawing.startX), height: Math.abs(pointer.y - drawing.startY) })
      } else if (drawing.tool === 'ellipse') {
        drawing.object.set({ left: Math.min(drawing.startX, pointer.x), top: Math.min(drawing.startY, pointer.y), rx: Math.abs(pointer.x - drawing.startX) / 2, ry: Math.abs(pointer.y - drawing.startY) / 2 })
      } else {
        drawing.object.set({ x2: pointer.x, y2: pointer.y })
      }
      drawing.object.setCoords()
      canvas.requestRenderAll()
    }

    const mouseUp = (event: fabric.IEvent<Event>): void => {
      const drawing = drawingRef.current
      if (!drawing) return
      const pointer = canvas.getPointer(event.e)
      if (drawing.tool === 'arrow') {
        canvas.remove(drawing.object)
        const arrow = makeArrow(drawing.startX, drawing.startY, pointer.x, pointer.y, colorRef.current, strokeWidthRef.current)
        canvas.add(arrow)
        canvas.setActiveObject(arrow)
      } else {
        drawing.object.set({ selectable: true, evented: true })
        drawing.object.setCoords()
        canvas.setActiveObject(drawing.object)
      }
      drawingRef.current = undefined
      historyLockedRef.current = false
      captureHistory()
      setTool('select')
    }

    canvas.on('mouse:down', mouseDown)
    canvas.on('mouse:move', mouseMove)
    canvas.on('mouse:up', mouseUp)
    return () => {
      canvas.off('mouse:down', mouseDown)
      canvas.off('mouse:move', mouseMove)
      canvas.off('mouse:up', mouseUp)
    }
  }, [captureHistory])

  const syncSelection = useCallback(() => {
    const ds = dataSourceRef.current
    if (ds) setSelectedRecords(ds.getSelectedRecords() as FeatureDataRecord[])
  }, [])

  const onDataSourceCreated = useCallback((ds: DataSource) => {
    const featureDs = ds as FeatureLayerDataSource
    dataSourceRef.current = featureDs
    setDataSource(featureDs)
    syncSelection()
  }, [syncSelection])

  const filteredSymbols = useMemo(() => SYMBOLS.filter((symbol) => {
    const matchesCategory = category === 'All' || symbol.category === category
    const query = search.trim().toLowerCase()
    return matchesCategory && (!query || symbol.label.toLowerCase().includes(query) || (symbol.code || '').toLowerCase().includes(query))
  }), [category, search])
  const categories = useMemo(() => ['All', ...Array.from(new Set(SYMBOLS.map((item) => item.category)))], [])

  const selectTool = (next: Tool): void => {
    setTool(next)
    setActiveSymbolId(undefined)
  }

  const modifySelection = (operation: 'smaller' | 'larger' | 'left' | 'right'): void => {
    const canvas = canvasRef.current
    const object = canvas?.getActiveObject()
    if (!canvas || !object) return
    if (operation === 'smaller') object.set({ scaleX: object.scaleX * 0.85, scaleY: object.scaleY * 0.85 })
    if (operation === 'larger') object.set({ scaleX: object.scaleX * 1.18, scaleY: object.scaleY * 1.18 })
    if (operation === 'left') object.rotate((object.angle || 0) - 15)
    if (operation === 'right') object.rotate((object.angle || 0) + 15)
    object.setCoords()
    canvas.requestRenderAll()
    captureHistory()
  }

  const deleteSelection = (): void => {
    const canvas = canvasRef.current
    if (!canvas) return
    const selected = canvas.getActiveObjects()
    if (!selected.length) return
    historyLockedRef.current = true
    canvas.discardActiveObject()
    selected.forEach((object) => canvas.remove(object))
    historyLockedRef.current = false
    canvas.requestRenderAll()
    setHasSelection(false)
    captureHistory()
  }

  const clearSketch = (): void => {
    const canvas = canvasRef.current
    if (!canvas || !window.confirm('Clear all added sketch items? The mast-arm template will remain.')) return
    historyLockedRef.current = true
    canvas.discardActiveObject()
    canvas.getObjects().filter((object) => !object.excludeFromExport).forEach((object) => canvas.remove(object))
    historyLockedRef.current = false
    canvas.requestRenderAll()
    setHasSelection(false)
    captureHistory()
  }

  const undo = async (): Promise<void> => {
    const previous = undoRef.current.pop()
    if (!previous) return
    redoRef.current.push(lastSnapshotRef.current)
    await loadFabricJson(JSON.parse(previous) as object, templateRef.current, false)
  }

  const redo = async (): Promise<void> => {
    const next = redoRef.current.pop()
    if (!next) return
    undoRef.current = [...undoRef.current.slice(-49), lastSnapshotRef.current]
    await loadFabricJson(JSON.parse(next) as object, templateRef.current, false)
  }

  const addImageFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) { setNotice({ type: 'error', text: 'Choose an image file.' }); return }
    const reader = new FileReader()
    reader.onload = () => {
      fabric.Image.fromURL(String(reader.result), (image) => {
        if (!mountedRef.current || !canvasRef.current) return
        const ratio = Math.min(1, 480 / Math.max(image.width || 1, image.height || 1))
        image.set({ left: CANVAS_WIDTH / 2, top: CANVAS_HEIGHT / 2, originX: 'center', originY: 'center', scaleX: ratio, scaleY: ratio, ...userObjectOptions() })
        canvasRef.current.add(image)
        canvasRef.current.setActiveObject(image)
        canvasRef.current.requestRenderAll()
        captureHistory()
      })
    }
    reader.onerror = () => setNotice({ type: 'error', text: 'The image could not be read.' })
    reader.readAsDataURL(file)
  }

  const startSymbolDrag = (event: React.DragEvent<HTMLButtonElement>, symbol: SymbolDefinition): void => {
    event.dataTransfer.setData('text/sue-symbol', symbol.id)
    event.dataTransfer.effectAllowed = 'copy'
  }

  const dropSymbol = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
    const canvas = canvasRef.current
    const symbolId = event.dataTransfer.getData('text/sue-symbol')
    const definition = SYMBOLS.find((item) => item.id === symbolId)
    if (!canvas || !definition) return
    const pointer = canvas.getPointer(event.nativeEvent)
    const object = createLegendObject(definition, symbolScaleRef.current)
    object.set({ left: pointer.x, top: pointer.y })
    canvas.add(object)
    canvas.setActiveObject(object)
    canvas.requestRenderAll()
    captureHistory()
  }

  const currentSaveState = (): SketchSaveState => {
    const canvas = canvasRef.current
    if (!canvas) throw new Error('The drawing canvas is not ready.')
    canvas.discardActiveObject()
    canvas.requestRenderAll()
    return createSaveState(canvas, templateRef.current)
  }

  const downloadBlob = (blob: Blob, name: string): void => {
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = name
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const dataUrlToBlob = (dataUrl: string): Blob => {
    const parts = dataUrl.split(',')
    if (parts.length !== 2) throw new Error('The drawing could not be encoded as an image.')
    const binary = atob(parts[1])
    const bytes = new Uint8Array(binary.length)
    for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index)
    return new Blob([bytes], { type: 'image/png' })
  }

  const canvasPngDataUrl = (): string => {
    const canvas = canvasRef.current
    if (!canvas) throw new Error('The drawing canvas is not ready.')
    canvas.discardActiveObject()
    canvas.requestRenderAll()
    return canvas.toDataURL({ format: 'png', multiplier: 1, enableRetinaScaling: false })
  }

  const downloadPng = (): void => {
    try {
      downloadBlob(dataUrlToBlob(canvasPngDataUrl()), 'clearance-hole-sketch.png')
    } catch (error) { showError(error, 'PNG export failed.') }
  }

  const downloadState = (): void => {
    try {
      const state = currentSaveState()
      downloadBlob(new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }), `clearance-hole-sketch${STATE_FILE_SUFFIX}`)
    } catch (error) { showError(error, 'Save-state export failed.') }
  }

  const applySaveState = async (state: SketchSaveState, successText: string): Promise<void> => {
    setLoadingState(true)
    try {
      await loadFabricJson(state.fabric, state.template, true)
      if (mountedRef.current) setNotice({ type: 'success', text: successText })
    } catch (error) {
      showError(error, 'The save state could not be loaded.')
    } finally { if (mountedRef.current) setLoadingState(false) }
  }

  const loadStateFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (file.size > MAX_STATE_FILE_BYTES) { setNotice({ type: 'error', text: 'The save-state file is larger than 30 MB.' }); return }
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const state = parseSaveState(String(reader.result))
        void applySaveState(state, `Loaded save state from ${file.name}.`)
      } catch (error) { showError(error, 'The save-state file is invalid.') }
    }
    reader.onerror = () => setNotice({ type: 'error', text: 'The save-state file could not be read.' })
    reader.readAsText(file)
  }

  const getFeatureLayer = async (): Promise<FeatureLayer> => {
    const ds = dataSourceRef.current
    if (!ds) throw new Error('The feature layer data source is unavailable.')
    const layer = await ds.createJSAPILayerByDataSource()
    if (!layer && ds.layer) return ds.layer
    if (!layer || layer.type !== 'feature') throw new Error('The configured data source is not an editable feature layer.')
    return layer as FeatureLayer
  }

  const selectedFeature = async (layer: FeatureLayer): Promise<{ objectId: number, graphic: __esri.Graphic }> => {
    if (selectedRecords.length !== 1) throw new Error('Select exactly one feature on the map.')
    const objectId = Number(selectedRecords[0].getId())
    if (!Number.isFinite(objectId)) throw new Error('The selected record does not have a numeric object ID.')
    const query = layer.createQuery()
    query.objectIds = [objectId]
    query.returnGeometry = true
    query.outFields = ['*']
    const result = await layer.queryFeatures(query)
    if (!result.features[0]) throw new Error('The selected feature could not be retrieved from the layer.')
    return { objectId, graphic: result.features[0] }
  }

  const addAttachment = async (layer: FeatureLayer, graphic: __esri.Graphic, file: File): Promise<void> => {
    const form = new FormData()
    form.set('attachment', file)
    form.set('f', 'json')
    const edit = await layer.addAttachment(graphic, form)
    if (edit.error) throw edit.error
  }

  const canvasPngBlob = async (): Promise<Blob> => {
    return dataUrlToBlob(canvasPngDataUrl())
  }

  const saveToFeature = async (): Promise<void> => {
    setSaving(true)
    setNotice(undefined)
    try {
      const layer = await getFeatureLayer()
      await layer.load()
      if (!layer.capabilities?.data?.supportsAttachment) throw new Error('Attachments are not enabled for this feature layer.')
      const { objectId, graphic } = await selectedFeature(layer)
      const state = currentSaveState()
      const prefix = (props.config.attachmentNamePrefix || 'clearance-hole-sketch').replace(/[^a-z0-9_-]+/gi, '-')
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const base = `${prefix}-${objectId}-${timestamp}`
      const jsonFile = new File([JSON.stringify(state)], `${base}${STATE_FILE_SUFFIX}`, { type: 'application/json' })
      const pngFile = new File([await canvasPngBlob()], `${base}.png`, { type: 'image/png' })
      await addAttachment(layer, graphic, jsonFile)
      try {
        await addAttachment(layer, graphic, pngFile)
      } catch (error) {
        throw new Error(`The editable JSON was saved, but the PNG failed: ${errorMessage(error)}`)
      }
      if (mountedRef.current) setNotice({ type: 'success', text: `PNG and editable state attached to feature ${objectId}.` })
    } catch (error) { showError(error, 'The sketch could not be saved.') } finally { if (mountedRef.current) setSaving(false) }
  }

  const loadFromFeature = async (): Promise<void> => {
    setLoadingState(true)
    setNotice(undefined)
    try {
      const layer = await getFeatureLayer()
      await layer.load()
      if (!layer.capabilities?.data?.supportsAttachment) throw new Error('Attachments are not enabled for this feature layer.')
      const { objectId } = await selectedFeature(layer)
      const result = await layer.queryAttachments({ objectIds: [objectId] })
      const attachments = result[String(objectId)] || []
      const prefix = (props.config.attachmentNamePrefix || 'clearance-hole-sketch').replace(/[^a-z0-9_-]+/gi, '-')
      const candidates = attachments
        .filter((item) => item.name.startsWith(`${prefix}-${objectId}-`) && item.name.endsWith(STATE_FILE_SUFFIX))
        .sort((left, right) => right.id - left.id)
      if (!candidates[0]) throw new Error('No editable clearance-hole save state was found on the selected feature.')
      const response = await esriRequest(candidates[0].url, { responseType: 'json' })
      const state = parseSaveState(JSON.stringify(response.data))
      await loadFabricJson(state.fabric, state.template, true)
      if (mountedRef.current) setNotice({ type: 'success', text: `Loaded ${candidates[0].name} from feature ${objectId}.` })
    } catch (error) { showError(error, 'The feature save state could not be loaded.') } finally { if (mountedRef.current) setLoadingState(false) }
  }

  const errorMessage = (error: unknown): string => error instanceof Error ? error.message : String(error)
  const showError = (error: unknown, fallback: string): void => {
    if (mountedRef.current) setNotice({ type: 'error', text: error instanceof Error && error.message ? error.message : fallback })
  }

  const sourceConfigured = Boolean(props.useDataSources?.length)
  const oneFeatureSelected = selectedRecords.length === 1
  const selectionText = !sourceConfigured
    ? 'Configure a feature layer in widget settings.'
    : oneFeatureSelected
      ? `Ready: feature ${selectedRecords[0].getId()} selected`
      : selectedRecords.length > 1
        ? 'Select only one feature on the map.'
        : 'Select a feature on the map to save or load.'

  return <div className='clearance-hole-sketch' role='region' aria-label={props.intl.formatMessage({ id: 'widgetLabel', defaultMessage: defaultMessages.widgetLabel })}>
    {sourceConfigured && <DataSourceComponent
      useDataSource={props.useDataSources[0]}
      onDataSourceCreated={onDataSourceCreated}
      onDataSourceInfoChange={syncSelection}
      onSelectionChange={syncSelection}
      onCreateDataSourceFailed={() => setNotice({ type: 'error', text: 'The configured feature layer could not be opened.' })}
    />}

    <div className='chs-header'>
      <div>
        <h2>Clearance hole sketch</h2>
        <div className={`chs-selection ${oneFeatureSelected ? 'is-ready' : ''}`} aria-live='polite'>{selectionText}</div>
      </div>
      <div className='chs-save-actions'>
        <Button size='sm' type='tertiary' onClick={downloadPng}>PNG</Button>
        <Button size='sm' type='tertiary' onClick={downloadState}>Download state</Button>
        <Button size='sm' type='tertiary' disabled={loadingState} onClick={() => stateInputRef.current?.click()}>Load state</Button>
        <Button size='sm' type='tertiary' disabled={loadingState || !oneFeatureSelected || !dataSource} onClick={() => { void loadFromFeature() }}>Load from feature</Button>
        <Button size='sm' type='primary' disabled={saving || !oneFeatureSelected || !dataSource} onClick={() => { void saveToFeature() }}>
          {saving ? 'Saving...' : 'Save to feature'}
        </Button>
        <input ref={stateInputRef} className='chs-hidden' type='file' accept='.json,application/json' onChange={loadStateFile} />
      </div>
    </div>

    {notice && <Alert className='chs-alert' type={notice.type} text={notice.text} closable onClose={() => setNotice(undefined)} />}

    <div className='chs-workspace'>
      <aside className='chs-palette' aria-label='Legend symbols'>
        <div className='chs-palette-title'>Legend items</div>
        <TextInput size='sm' value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search legend' aria-label='Search legend symbols' />
        <Select size='sm' value={category} onChange={(event) => setCategory(event.target.value)} aria-label='Filter legend category'>
          {categories.map((item) => <Option key={item} value={item}>{item}</Option>)}
        </Select>
        <div className='chs-symbol-list'>
          {filteredSymbols.map((symbol) => <button
            key={symbol.id}
            type='button'
            className={`chs-symbol ${activeSymbolId === symbol.id ? 'is-active' : ''}`}
            draggable
            onDragStart={(event) => startSymbolDrag(event, symbol)}
            onClick={() => { setActiveSymbolId(symbol.id); setTool('select') }}
            title={`Drag to the grid, or tap then tap the grid: ${symbol.label}`}
          >
            <span className='chs-symbol-preview' style={{ color: symbol.color }}>{symbol.code || symbol.label.slice(0, 2).toUpperCase()}</span>
            <span>{symbol.label}</span>
          </button>)}
          {!filteredSymbols.length && <div className='chs-empty'>No matching legend items.</div>}
        </div>
      </aside>

      <main className='chs-editor'>
        <div className='chs-tools' role='toolbar' aria-label='Sketch tools'>
          {(['select', 'pen', 'line', 'arrow', 'rect', 'ellipse', 'text'] as Tool[]).map((item) => <button
            key={item} type='button' className={tool === item && !activeSymbolId ? 'is-active' : ''}
            onClick={() => selectTool(item)} aria-pressed={tool === item && !activeSymbolId}
          >{item === 'rect' ? 'Box' : item[0].toUpperCase() + item.slice(1)}</button>)}
          <button type='button' onClick={() => imageInputRef.current?.click()}>Add image</button>
          <input ref={imageInputRef} className='chs-hidden' type='file' accept='image/*' onChange={addImageFile} />
          <label className='chs-color'>Color<input type='color' value={color} onChange={(event) => setColor(event.target.value)} /></label>
          <label className='chs-width'>Width<input type='range' min='1' max='14' value={strokeWidth} onChange={(event) => setStrokeWidth(Number(event.target.value))} /></label>
        </div>

        <div className='chs-canvas-wrap' onDragOver={(event) => event.preventDefault()} onDrop={dropSymbol}>
          {activeSymbolId && <div className='chs-place-hint'>Tap the grid to place the selected legend item</div>}
          {loadingState && <div className='chs-loading'>Loading drawing...</div>}
          <canvas ref={canvasElementRef} aria-label='Mast arm clearance hole Fabric drawing canvas' />
        </div>

        <div className='chs-editbar' role='toolbar' aria-label='Edit selected item'>
          <button type='button' disabled={!canUndo} onClick={() => { void undo() }}>Undo</button>
          <button type='button' disabled={!canRedo} onClick={() => { void redo() }}>Redo</button>
          <span className='chs-divider' />
          <button type='button' disabled={!hasSelection} onClick={() => modifySelection('smaller')}>Smaller</button>
          <button type='button' disabled={!hasSelection} onClick={() => modifySelection('larger')}>Larger</button>
          <button type='button' disabled={!hasSelection} onClick={() => modifySelection('left')}>Rotate left</button>
          <button type='button' disabled={!hasSelection} onClick={() => modifySelection('right')}>Rotate right</button>
          <button type='button' disabled={!hasSelection} onClick={deleteSelection}>Delete</button>
          <button type='button' className='chs-clear' onClick={clearSketch}>Clear added items</button>
          <label className='chs-symbol-size'>New symbol size<input type='range' min='0.6' max='2.2' step='0.1' value={symbolScale} onChange={(event) => setSymbolScale(Number(event.target.value))} /></label>
        </div>
      </main>
    </div>
  </div>
}
