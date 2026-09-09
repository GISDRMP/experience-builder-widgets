import { fabric } from 'fabric'
import { SymbolDefinition } from './symbols'

export const CANVAS_WIDTH = 1600
export const CANVAS_HEIGHT = 1200
export const STATE_SCHEMA_VERSION = 1
export const STATE_FILE_SUFFIX = '-editable.json'

const CUSTOM_PROPERTIES = ['data']
// Fabric serializes each child in a Group, including the Text labels used by legend symbols.
// Keep the standard v5 object family loadable so states remain forward-compatible with tools
// that may later add polygons or IText without weakening the external-image safeguard.
const ALLOWED_TYPES = new Set([
  'object',
  'activeSelection',
  'circle',
  'ellipse',
  'group',
  'image',
  'i-text',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
  'text',
  'textbox',
  'triangle'
].map((type) => type.toLowerCase()))

export interface TemplateOptions {
  showGrid: boolean
  gridSize: number
}

interface MastArmGeometry {
  centerX: number
  centerY: number
  innerLeft: number
  innerRight: number
  outerLeft: number
  outerRight: number
  top: number
  shoulderTop: number
  shoulderBottom: number
  bottom: number
}

export interface SketchSaveState {
  schemaVersion: number
  application: 'clearance-hole-sketch'
  createdAt: string
  canvas: {
    width: number
    height: number
  }
  template: TemplateOptions
  fabric: {
    version?: string
    objects: Array<Record<string, unknown>>
    [key: string]: unknown
  }
}

export function createSaveState (canvas: fabric.Canvas, template: TemplateOptions): SketchSaveState {
  return {
    schemaVersion: STATE_SCHEMA_VERSION,
    application: 'clearance-hole-sketch',
    createdAt: new Date().toISOString(),
    canvas: { width: CANVAS_WIDTH, height: CANVAS_HEIGHT },
    template,
    fabric: canvas.toJSON(CUSTOM_PROPERTIES) as unknown as SketchSaveState['fabric']
  }
}

export function parseSaveState (value: string): SketchSaveState {
  let parsed: unknown
  try {
    parsed = JSON.parse(value)
  } catch {
    throw new Error('This file is not valid JSON.')
  }
  if (!isRecord(parsed) || parsed.application !== 'clearance-hole-sketch') {
    throw new Error('This is not a Clearance Hole Sketch save-state file.')
  }
  if (parsed.schemaVersion !== STATE_SCHEMA_VERSION) {
    throw new Error(`Save-state version ${String(parsed.schemaVersion)} is not supported.`)
  }
  if (!isRecord(parsed.fabric) || !Array.isArray(parsed.fabric.objects)) {
    throw new Error('The save state does not contain a Fabric drawing.')
  }
  validateObjects(parsed.fabric.objects)
  const template = isRecord(parsed.template) ? parsed.template : {}
  return {
    schemaVersion: STATE_SCHEMA_VERSION,
    application: 'clearance-hole-sketch',
    createdAt: typeof parsed.createdAt === 'string' ? parsed.createdAt : new Date().toISOString(),
    canvas: { width: CANVAS_WIDTH, height: CANVAS_HEIGHT },
    template: {
      showGrid: template.showGrid !== false,
      gridSize: typeof template.gridSize === 'number' ? Math.max(12, Math.min(60, template.gridSize)) : 25
    },
    fabric: parsed.fabric as SketchSaveState['fabric']
  }
}

function validateObjects (objects: unknown[]): void {
  if (objects.length > 2000) throw new Error('The save state contains too many drawing objects.')
  objects.forEach((item) => {
    const type = isRecord(item) && typeof item.type === 'string' ? item.type.toLowerCase() : ''
    if (!type || !ALLOWED_TYPES.has(type)) {
      throw new Error(`The save state contains an unsupported drawing object${type ? `: ${type}` : ''}.`)
    }
    if (type === 'image' && (typeof item.src !== 'string' || !item.src.startsWith('data:image/'))) {
      throw new Error('Save-state images must be embedded data images.')
    }
    if (Array.isArray(item.objects)) validateObjects(item.objects)
  })
}

function isRecord (value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function addTemplate (canvas: fabric.Canvas, options: TemplateOptions): void {
  const objects = createTemplateObjects(options)
  objects.slice().reverse().forEach((object) => {
    canvas.add(object)
    canvas.sendToBack(object)
  })
  canvas.requestRenderAll()
}

function templateObject<T extends fabric.Object> (object: T): T {
  object.set({
    selectable: false,
    evented: false,
    excludeFromExport: true,
    hoverCursor: 'default',
    data: { role: 'template' }
  })
  return object
}


function getMastArmGeometry (step: number): MastArmGeometry {
  const snap = (value: number): number => Math.round(value / step) * step
  const centerX = snap(CANVAS_WIDTH / 2)
  const centerY = snap(CANVAS_HEIGHT / 2)

  // Approximate distances from the center.
  const innerHalfWidth = Math.max(step, snap(100))
  const outerHalfWidth = Math.max(innerHalfWidth + step, snap(250))
  const fullHalfHeight = Math.max(step * 2, snap(225))
  const shoulderHalfHeight = Math.max(step, snap(75))

  return {
    centerX,
    centerY,
    innerLeft: centerX - innerHalfWidth,
    innerRight: centerX + innerHalfWidth,
    outerLeft: centerX - outerHalfWidth,
    outerRight: centerX + outerHalfWidth,
    top: centerY - fullHalfHeight,
    shoulderTop: centerY - shoulderHalfHeight,
    shoulderBottom: centerY + shoulderHalfHeight,
    bottom: centerY + fullHalfHeight
  }
}

function createTemplateObjects (options: TemplateOptions): fabric.Object[] {
  const step = Math.max(12, options.gridSize)
  const geometry = getMastArmGeometry(step)
  const objects: fabric.Object[] = [templateObject(new fabric.Rect({
    left: 0, top: 0, width: CANVAS_WIDTH, height: CANVAS_HEIGHT,
    fill: '#ffffff', strokeWidth: 0, originX: 'left', originY: 'top'
  }))]
  if (options.showGrid) {
    for (let x = 0; x <= CANVAS_WIDTH; x += step) {
      objects.push(templateObject(new fabric.Line([x, 0, x, CANVAS_HEIGHT], {
        stroke: x % (step * 5) === 0 ? '#b2bcc1' : '#d8dddf',
        strokeWidth: x % (step * 5) === 0 ? 1.4 : 0.7
      })))
    }
    for (let y = 0; y <= CANVAS_HEIGHT; y += step) {
      objects.push(templateObject(new fabric.Line([0, y, CANVAS_WIDTH, y], {
        stroke: y % (step * 5) === 0 ? '#b2bcc1' : '#d8dddf',
        strokeWidth: y % (step * 5) === 0 ? 1.4 : 0.7
      })))
    }
  }

  const outline = [
    `M ${geometry.innerLeft} ${geometry.top}`,
    `L ${geometry.innerRight} ${geometry.top}`,
    `L ${geometry.innerRight} ${geometry.shoulderTop}`,
    `L ${geometry.outerRight} ${geometry.shoulderTop}`,
    `L ${geometry.outerRight} ${geometry.shoulderBottom}`,
    `L ${geometry.innerRight} ${geometry.shoulderBottom}`,
    `L ${geometry.innerRight} ${geometry.bottom}`,
    `L ${geometry.innerLeft} ${geometry.bottom}`,
    `L ${geometry.innerLeft} ${geometry.shoulderBottom}`,
    `L ${geometry.outerLeft} ${geometry.shoulderBottom}`,
    `L ${geometry.outerLeft} ${geometry.shoulderTop}`,
    `L ${geometry.innerLeft} ${geometry.shoulderTop} Z`
  ].join(' ')
  objects.push(templateObject(new fabric.Path(outline, {
    fill: 'rgba(255,255,255,0)', stroke: '#1e2427', strokeWidth: 6,
    strokeLineJoin: 'miter', objectCaching: false
  })))
  objects.push(...createDimensions(step, geometry))
  objects.push(templateObject(new fabric.Rect({
    left: geometry.centerX, top: geometry.centerY, width: 20, height: 20,
    fill: '#111111', strokeWidth: 0, originX: 'center', originY: 'center'
  })))
  return objects
}

function createDimensions (step: number, geometry: MastArmGeometry): fabric.Object[] {
  if (!geometry) {
    throw new Error('createDimensions requires mast-arm geometry. Call createDimensions(step, geometry).')
  }

  const snap = (value: number): number => Math.round(value / step) * step
  const line = (points: [number, number, number, number]): fabric.Line => templateObject(new fabric.Line(points, { stroke: '#1e2427', strokeWidth: 2.5 }))
  const box = (centerX: number, centerY: number, halfWidth: number, halfHeight: number): fabric.Rect => templateObject(new fabric.Rect({
    left: centerX - halfWidth, top: centerY - halfHeight,
    width: halfWidth * 2, height: halfHeight * 2,
    fill: '#ffffff', stroke: '#1e2427', strokeWidth: 2.5
  }))

  const gap = Math.max(step, snap(75))
  const tickHalf = Math.max(step, snap(25))
  const boxHalfWidth = Math.max(step, snap(50))
  const boxHalfHeight = Math.max(step, snap(50))
  const leftDimensionX = geometry.outerLeft - gap
  const rightDimensionX = geometry.outerRight + gap
  const bottomDimensionY = geometry.bottom + gap

  return [
    line([leftDimensionX, geometry.top, leftDimensionX, geometry.bottom]),
    line([leftDimensionX - tickHalf, geometry.top, leftDimensionX + tickHalf, geometry.top]),
    line([leftDimensionX - tickHalf, geometry.bottom, leftDimensionX + tickHalf, geometry.bottom]),
    box(leftDimensionX, geometry.centerY, boxHalfWidth, boxHalfHeight),
    line([rightDimensionX, geometry.shoulderTop, rightDimensionX, geometry.shoulderBottom]),
    line([rightDimensionX - tickHalf, geometry.shoulderTop, rightDimensionX + tickHalf, geometry.shoulderTop]),
    line([rightDimensionX - tickHalf, geometry.shoulderBottom, rightDimensionX + tickHalf, geometry.shoulderBottom]),
    box(rightDimensionX, geometry.centerY, boxHalfWidth, boxHalfHeight),
    line([geometry.outerLeft, bottomDimensionY, geometry.outerRight, bottomDimensionY]),
    line([geometry.outerLeft, bottomDimensionY - tickHalf, geometry.outerLeft, bottomDimensionY + tickHalf]),
    line([geometry.outerRight, bottomDimensionY - tickHalf, geometry.outerRight, bottomDimensionY + tickHalf]),
    box(geometry.centerX, bottomDimensionY, boxHalfWidth, boxHalfHeight)
  ]
}

export function createLegendObject (definition: SymbolDefinition, scale: number): fabric.Group {
  const color = definition.color
  const code = definition.code || definition.label.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase()
  const items: fabric.Object[] = []
  const stroke = { stroke: color, strokeWidth: 3, fill: 'rgba(255,255,255,0)', originX: 'center' as const, originY: 'center' as const }
  const text = (): fabric.Text => new fabric.Text(code, { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 12, fill: color, originX: 'center', originY: 'center' })

  if (definition.style === 'line') {
    items.push(new fabric.Line([-58, 0, 58, 0], { stroke: color, strokeWidth: 3 }))
    items.push(new fabric.Triangle({ left: 61, top: 0, width: 14, height: 18, angle: 90, fill: color, originX: 'center', originY: 'center' }))
    items.push(new fabric.Triangle({ left: -61, top: 0, width: 14, height: 18, angle: -90, fill: color, originX: 'center', originY: 'center' }))
    items.push(new fabric.Rect({ left: 0, top: 0, width: 44, height: 20, fill: '#ffffff', originX: 'center', originY: 'center' }), text())
  } else if (definition.style === 'tree') {
    for (let index = 0; index < 8; index++) {
      const angle = index * 45
      const radians = angle * Math.PI / 180
      items.push(new fabric.Ellipse({ left: Math.cos(radians) * 17, top: Math.sin(radians) * 17, rx: 8, ry: 20, angle, ...stroke }))
    }
    items.push(new fabric.Circle({ left: 0, top: 0, radius: 4, fill: color, originX: 'center', originY: 'center' }))
  } else if (definition.style === 'manhole') {
    items.push(new fabric.Circle({ left: 0, top: 0, radius: 28, ...stroke }), new fabric.Circle({ left: 0, top: 0, radius: 21, ...stroke }), text())
  } else if (definition.style === 'valve') {
    items.push(new fabric.Triangle({ left: -14, top: 0, width: 30, height: 30, angle: 90, ...stroke }), new fabric.Triangle({ left: 14, top: 0, width: 30, height: 30, angle: -90, ...stroke }), text())
  } else if (definition.style === 'signal') {
    items.push(new fabric.Line([-42, 0, 26, 0], { stroke: color, strokeWidth: 3 }), new fabric.Circle({ left: -42, top: 0, radius: 8, ...stroke }), new fabric.Rect({ left: 34, top: 0, width: 16, height: 34, ...stroke }))
  } else if (definition.style === 'pole') {
    items.push(new fabric.Line([-42, 0, 42, 0], { stroke: color, strokeWidth: 3 }), new fabric.Rect({ left: 0, top: 0, width: 27, height: 27, angle: 45, ...stroke }), text())
  } else if (definition.style === 'post' || definition.style === 'north') {
    items.push(new fabric.Line([0, -38, 0, 38], { stroke: color, strokeWidth: 3 }), new fabric.Triangle({ left: 0, top: -22, width: 28, height: 34, fill: 'rgba(255,255,255,0)', stroke: color, strokeWidth: 3, originX: 'center', originY: 'center' }), text())
  } else if (definition.style === 'hole') {
    items.push(new fabric.Ellipse({ left: 0, top: -27, rx: 20, ry: 7, ...stroke }), new fabric.Rect({ left: 0, top: 5, width: 40, height: 64, ...stroke }), new fabric.Circle({ left: 0, top: 25, radius: 8, ...stroke }), text())
  } else if (definition.style === 'meter') {
    items.push(new fabric.Rect({ left: 0, top: 0, width: 62, height: 38, ...stroke }), text())
  } else {
    items.push(new fabric.Rect({ left: 0, top: 0, width: 58, height: 42, ...stroke }), text())
  }

  return new fabric.Group(items, {
    left: CANVAS_WIDTH / 2,
    top: CANVAS_HEIGHT / 2,
    originX: 'center',
    originY: 'center',
    scaleX: scale,
    scaleY: scale,
    data: { role: 'user', symbolId: definition.id },
    transparentCorners: false,
    cornerColor: '#ffffff',
    cornerStrokeColor: '#007ac2',
    borderColor: '#007ac2',
    cornerSize: 18,
    touchCornerSize: 28
  })
}

export function userObjectOptions (): Partial<fabric.IObjectOptions> {
  return {
    transparentCorners: false,
    cornerColor: '#ffffff',
    cornerStrokeColor: '#007ac2',
    borderColor: '#007ac2',
    cornerSize: 18,
    touchCornerSize: 28,
    data: { role: 'user' }
  }
}

export function makeArrow (startX: number, startY: number, endX: number, endY: number, color: string, width: number): fabric.Group {
  const dx = endX - startX
  const dy = endY - startY
  const length = Math.max(1, Math.sqrt(dx * dx + dy * dy))
  const angle = Math.atan2(dy, dx) * 180 / Math.PI
  return new fabric.Group([
    new fabric.Line([-length / 2, 0, length / 2, 0], { stroke: color, strokeWidth: width, originX: 'center', originY: 'center' }),
    new fabric.Triangle({ left: length / 2, top: 0, width: 18 + width, height: 22 + width, angle: 90, fill: color, originX: 'center', originY: 'center' })
  ], {
    left: (startX + endX) / 2, top: (startY + endY) / 2, angle,
    originX: 'center', originY: 'center', ...userObjectOptions()
  })
}
