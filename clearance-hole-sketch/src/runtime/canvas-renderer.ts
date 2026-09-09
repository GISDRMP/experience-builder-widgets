import { SketchElement, Point } from './types'
import { getSymbol, SymbolDefinition } from './symbols'

export const CANVAS_WIDTH = 1200
export const CANVAS_HEIGHT = 1000

export interface RenderOptions {
  showGrid: boolean
  gridSize: number
  selectedId?: string
}

const imageCache = new Map<string, HTMLImageElement>()

export async function preloadImages (elements: SketchElement[]): Promise<void> {
  const urls = elements.filter((element) => element.type === 'image').map((element) => element.dataUrl)
  await Promise.all(urls.map((url) => new Promise<void>((resolve, reject) => {
    let image = imageCache.get(url)
    if (image?.complete && image.naturalWidth > 0) { resolve(); return }
    if (!image) {
      image = new Image()
      image.src = url
      imageCache.set(url, image)
    }
    image.addEventListener('load', () => resolve(), { once: true })
    image.addEventListener('error', () => reject(new Error('An imported image could not be loaded.')), { once: true })
  })))
}

interface MastArmGeometry {
  left: number
  centerLeft: number
  centerRight: number
  right: number
  top: number
  armTop: number
  armBottom: number
  bottom: number
}

function getGridStep (size: number): number {
  if (!Number.isFinite(size)) return 10
  return Math.max(10, Math.round(size))
}

function snapToGrid (value: number, step: number): number {
  return Math.round(value / step) * step
}

function getMastArmGeometry (step: number): MastArmGeometry {
  return {
    left: snapToGrid(160, step),
    centerLeft: snapToGrid(480, step),
    centerRight: snapToGrid(720, step),
    right: snapToGrid(1040, step),
    top: snapToGrid(80, step),
    armTop: snapToGrid(370, step),
    armBottom: snapToGrid(600, step),
    bottom: snapToGrid(920, step)
  }
}

export function drawScene (ctx: CanvasRenderingContext2D, elements: SketchElement[], options: RenderOptions): void {
  ctx.save()
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  const step = getGridStep(options.gridSize)
  const geometry = getMastArmGeometry(step)

  drawMastArmTemplateFill(ctx, geometry)
  if (options.showGrid) drawGrid(ctx, step)
  drawMastArmTemplateDetails(ctx, geometry, step)

  elements.forEach((element) => drawElement(ctx, element, element.id === options.selectedId))
  ctx.restore()
}

function drawGrid (ctx: CanvasRenderingContext2D, step: number): void {
  ctx.save()

  for (let column = 0; column * step <= CANVAS_WIDTH; column++) {
    const x = column * step
    const isMajor = column % 5 === 0
    ctx.beginPath()
    ctx.strokeStyle = isMajor ? '#b2bcc1' : '#d8dddf'
    ctx.lineWidth = isMajor ? 1.4 : 0.7
    ctx.moveTo(x, 0)
    ctx.lineTo(x, CANVAS_HEIGHT)
    ctx.stroke()
  }

  for (let row = 0; row * step <= CANVAS_HEIGHT; row++) {
    const y = row * step
    const isMajor = row % 5 === 0
    ctx.beginPath()
    ctx.strokeStyle = isMajor ? '#b2bcc1' : '#d8dddf'
    ctx.lineWidth = isMajor ? 1.4 : 0.7
    ctx.moveTo(0, y)
    ctx.lineTo(CANVAS_WIDTH, y)
    ctx.stroke()
  }

  ctx.restore()
}

function traceMastArmTemplate (ctx: CanvasRenderingContext2D, geometry: MastArmGeometry): void {
  const { left, centerLeft, centerRight, right, top, armTop, armBottom, bottom } = geometry

  ctx.beginPath()
  ctx.moveTo(centerLeft, top)
  ctx.lineTo(centerRight, top)
  ctx.lineTo(centerRight, armTop)
  ctx.lineTo(right, armTop)
  ctx.lineTo(right, armBottom)
  ctx.lineTo(centerRight, armBottom)
  ctx.lineTo(centerRight, bottom)
  ctx.lineTo(centerLeft, bottom)
  ctx.lineTo(centerLeft, armBottom)
  ctx.lineTo(left, armBottom)
  ctx.lineTo(left, armTop)
  ctx.lineTo(centerLeft, armTop)
  ctx.closePath()
}

function drawMastArmTemplateFill (ctx: CanvasRenderingContext2D, geometry: MastArmGeometry): void {
  ctx.save()
  ctx.fillStyle = '#ffffff'
  traceMastArmTemplate(ctx, geometry)
  ctx.fill()
  ctx.restore()
}

function drawMastArmTemplateDetails (ctx: CanvasRenderingContext2D, geometry: MastArmGeometry, step: number): void {
  const { left, centerLeft, centerRight, right, top, armTop, armBottom, bottom } = geometry
  const centerX = snapToGrid((centerLeft + centerRight) / 2, step)
  const centerY = snapToGrid((armTop + armBottom) / 2, step)
  const leftDimensionX = snapToGrid(left - 85, step)
  const rightDimensionX = snapToGrid(right + 85, step)
  const horizontalDimensionY = Math.min(CANVAS_HEIGHT - 40, snapToGrid(bottom + 40, step))

  ctx.save()
  ctx.strokeStyle = '#1e2427'
  ctx.lineWidth = 5
  ctx.lineJoin = 'miter'
  traceMastArmTemplate(ctx, geometry)
  ctx.stroke()

  drawVerticalDimension(ctx, leftDimensionX, top, bottom, leftDimensionX - 40, snapToGrid((top + bottom) / 2, step))
  drawVerticalDimension(ctx, rightDimensionX, armTop, armBottom, rightDimensionX - 40, centerY)
  drawHorizontalDimension(ctx, left, right, horizontalDimensionY, centerX, horizontalDimensionY - 40)

  ctx.fillStyle = '#111111'
  ctx.fillRect(centerX - 11, centerY - 11, 22, 22)
  ctx.restore()
}

function drawVerticalDimension (ctx: CanvasRenderingContext2D, x: number, y1: number, y2: number, boxX: number, boxCenterY: number): void {
  ctx.save()
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#1e2427'
  ctx.beginPath()
  ctx.moveTo(x, y1)
  ctx.lineTo(x, y2)
  ctx.moveTo(x - 25, y1); ctx.lineTo(x + 25, y1)
  ctx.moveTo(x - 25, y2); ctx.lineTo(x + 25, y2)
  ctx.stroke()
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(boxX, boxCenterY - 40, 80, 80)
  ctx.strokeRect(boxX, boxCenterY - 40, 80, 80)
  ctx.restore()
}

function drawHorizontalDimension (ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number, boxCenterX: number, boxY: number): void {
  ctx.save()
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#1e2427'
  ctx.beginPath()
  ctx.moveTo(x1, y); ctx.lineTo(x2, y)
  ctx.moveTo(x1, y - 25); ctx.lineTo(x1, y + 25)
  ctx.moveTo(x2, y - 25); ctx.lineTo(x2, y + 25)
  ctx.stroke()
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(boxCenterX - 45, boxY, 90, 80)
  ctx.strokeRect(boxCenterX - 45, boxY, 90, 80)
  ctx.restore()
}

export function drawElement (ctx: CanvasRenderingContext2D, element: SketchElement, selected: boolean): void {
  ctx.save()
  ctx.strokeStyle = element.color
  ctx.fillStyle = element.color
  ctx.lineWidth = element.width
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (element.type === 'path') {
    const bounds = elementBounds(element)
    const centerX = bounds.x + bounds.width / 2
    const centerY = bounds.y + bounds.height / 2
    ctx.translate(centerX, centerY)
    ctx.rotate(element.rotation * Math.PI / 180)
    ctx.beginPath()
    element.points.forEach((point, index) => index === 0 ? ctx.moveTo(point.x - centerX, point.y - centerY) : ctx.lineTo(point.x - centerX, point.y - centerY))
    ctx.stroke()
  } else if (element.type === 'text') {
    ctx.translate(element.point.x, element.point.y)
    ctx.rotate(element.rotation * Math.PI / 180)
    ctx.font = `600 ${element.fontSize}px Arial, sans-serif`
    ctx.textBaseline = 'top'
    ctx.fillText(element.text, 0, 0)
  } else if (element.type === 'symbol') {
    const definition = getSymbol(element.symbolId)
    if (definition) {
      ctx.translate(element.point.x, element.point.y)
      ctx.rotate(element.rotation * Math.PI / 180)
      drawLegendSymbol(ctx, definition, element.scale)
    }
  } else if (element.type === 'image') {
    let image = imageCache.get(element.dataUrl)
    if (!image) {
      image = new Image()
      image.src = element.dataUrl
      image.onload = () => ctx.canvas.dispatchEvent(new CustomEvent('sketch-image-loaded'))
      imageCache.set(element.dataUrl, image)
    }
    if (image.complete) {
      ctx.translate(element.point.x, element.point.y)
      ctx.rotate(element.rotation * Math.PI / 180)
      ctx.drawImage(image, -element.imageWidth / 2, -element.imageHeight / 2, element.imageWidth, element.imageHeight)
    }
  } else {
    const { start, end } = element
    const centerX = (start.x + end.x) / 2
    const centerY = (start.y + end.y) / 2
    ctx.translate(centerX, centerY)
    ctx.rotate(element.rotation * Math.PI / 180)
    const localStart = { x: start.x - centerX, y: start.y - centerY }
    const localEnd = { x: end.x - centerX, y: end.y - centerY }
    if (element.type === 'rect') {
      ctx.strokeRect(localStart.x, localStart.y, localEnd.x - localStart.x, localEnd.y - localStart.y)
    } else if (element.type === 'ellipse') {
      ctx.beginPath()
      ctx.ellipse(0, 0, Math.abs(end.x - start.x) / 2, Math.abs(end.y - start.y) / 2, 0, 0, Math.PI * 2)
      ctx.stroke()
    } else {
      ctx.beginPath(); ctx.moveTo(localStart.x, localStart.y); ctx.lineTo(localEnd.x, localEnd.y); ctx.stroke()
      if (element.type === 'arrow') drawArrowHead(ctx, localStart, localEnd)
    }
  }

  ctx.restore()
  if (selected) drawSelection(ctx, element)
}

function drawArrowHead (ctx: CanvasRenderingContext2D, start: Point, end: Point): void {
  const angle = Math.atan2(end.y - start.y, end.x - start.x)
  const size = 22
  ctx.beginPath()
  ctx.moveTo(end.x, end.y)
  ctx.lineTo(end.x - size * Math.cos(angle - Math.PI / 6), end.y - size * Math.sin(angle - Math.PI / 6))
  ctx.moveTo(end.x, end.y)
  ctx.lineTo(end.x - size * Math.cos(angle + Math.PI / 6), end.y - size * Math.sin(angle + Math.PI / 6))
  ctx.stroke()
}

function drawLegendSymbol (ctx: CanvasRenderingContext2D, definition: SymbolDefinition, scale: number): void {
  const s = 34 * scale
  ctx.strokeStyle = definition.color
  ctx.fillStyle = definition.color
  ctx.lineWidth = Math.max(2.5, 3 * scale)
  ctx.font = `bold ${Math.max(9, 11 * scale)}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const code = definition.code || definition.label.split(' ').slice(0, 2).map((word) => word[0]).join('').toUpperCase()

  if (definition.style === 'north') {
    ctx.beginPath(); ctx.moveTo(0, -s); ctx.lineTo(-s * 0.42, s * 0.55); ctx.lineTo(0, s * 0.26); ctx.lineTo(s * 0.42, s * 0.55); ctx.closePath(); ctx.stroke()
    ctx.fillText('N', 0, s * 0.72)
  } else if (definition.style === 'hole') {
    ctx.beginPath(); ctx.ellipse(0, -s * 0.55, s * 0.42, s * 0.16, 0, 0, Math.PI * 2); ctx.stroke()
    ctx.strokeRect(-s * 0.42, -s * 0.55, s * 0.84, s * 1.15)
    ctx.beginPath(); ctx.arc(0, s * 0.42, s * 0.16, 0, Math.PI * 2); ctx.stroke()
    ctx.fillText('CH', 0, 0)
  } else if (definition.style === 'line') {
    ctx.beginPath(); ctx.moveTo(-s * 1.5, 0); ctx.lineTo(s * 1.5, 0); ctx.stroke()
    ctx.fillStyle = '#ffffff'; ctx.fillRect(-s * 0.45, -s * 0.28, s * 0.9, s * 0.56)
    ctx.fillStyle = definition.color; ctx.fillText(code, 0, 0)
    drawArrowHead(ctx, { x: s * 0.9, y: 0 }, { x: s * 1.5, y: 0 })
    drawArrowHead(ctx, { x: -s * 0.9, y: 0 }, { x: -s * 1.5, y: 0 })
  } else if (definition.style === 'tree') {
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4
      ctx.beginPath(); ctx.ellipse(Math.cos(a) * s * 0.35, Math.sin(a) * s * 0.35, s * 0.18, s * 0.42, a, 0, Math.PI * 2); ctx.stroke()
    }
    ctx.beginPath(); ctx.arc(0, 0, s * 0.12, 0, Math.PI * 2); ctx.fill()
  } else if (definition.style === 'manhole') {
    ctx.beginPath(); ctx.arc(0, 0, s * 0.62, 0, Math.PI * 2); ctx.stroke()
    ctx.beginPath(); ctx.arc(0, 0, s * 0.48, 0, Math.PI * 2); ctx.stroke()
    ctx.fillText(code, 0, 0)
  } else if (definition.style === 'valve') {
    ctx.beginPath(); ctx.moveTo(-s * 0.72, -s * 0.35); ctx.lineTo(0, 0); ctx.lineTo(-s * 0.72, s * 0.35); ctx.closePath(); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(s * 0.72, -s * 0.35); ctx.lineTo(0, 0); ctx.lineTo(s * 0.72, s * 0.35); ctx.closePath(); ctx.stroke()
    ctx.fillText(code, 0, 10)
  } else if (definition.style === 'meter') {
    ctx.strokeRect(-s * 0.7, -s * 0.42, s * 1.4, s * 0.84)
    ctx.fillText(code, 0, 0)
  } else if (definition.style === 'signal') {
    ctx.beginPath(); ctx.moveTo(-s, 0); ctx.lineTo(s * 0.55, 0); ctx.stroke()
    ctx.beginPath(); ctx.arc(-s, 0, s * 0.18, 0, Math.PI * 2); ctx.stroke()
    ctx.strokeRect(s * 0.35, -s * 0.4, s * 0.35, s * 0.8)
  } else if (definition.style === 'pole') {
    ctx.beginPath(); ctx.moveTo(-s, 0); ctx.lineTo(s, 0); ctx.stroke()
    ctx.save(); ctx.rotate(Math.PI / 4); ctx.strokeRect(-s * 0.35, -s * 0.35, s * 0.7, s * 0.7); ctx.restore()
    ctx.fillText(code, 0, 6)
  } else if (definition.style === 'post') {
    ctx.beginPath(); ctx.moveTo(0, -s); ctx.lineTo(0, s); ctx.stroke()
    ctx.strokeRect(-s * 0.45, -s * 0.55, s * 0.9, s * 0.5)
  } else if (definition.style === 'circle') {
    ctx.beginPath(); ctx.arc(0, 0, s * 0.6, 0, Math.PI * 2); ctx.stroke(); ctx.fillText(code, 0, 0)
  } else {
    ctx.strokeRect(-s * 0.65, -s * 0.48, s * 1.3, s * 0.96)
    if (definition.label.toLowerCase().includes('catch basin')) {
      ctx.beginPath(); ctx.moveTo(-s * 0.65, 0); ctx.lineTo(s * 0.65, 0); ctx.moveTo(0, -s * 0.48); ctx.lineTo(0, s * 0.48); ctx.stroke()
    }
    ctx.fillText(code, 0, 0)
  }
}

function drawSelection (ctx: CanvasRenderingContext2D, element: SketchElement): void {
  const bounds = elementBounds(element)
  ctx.save()
  ctx.strokeStyle = '#007ac2'
  ctx.lineWidth = 2
  ctx.setLineDash([8, 5])
  ctx.strokeRect(bounds.x - 10, bounds.y - 10, bounds.width + 20, bounds.height + 20)
  ctx.setLineDash([])
  ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#007ac2'
  ;[[bounds.x - 10, bounds.y - 10], [bounds.x + bounds.width + 10, bounds.y + bounds.height + 10]].forEach(([x, y]) => {
    ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke()
  })
  ctx.restore()
}

export function elementBounds (element: SketchElement): { x: number, y: number, width: number, height: number } {
  if (element.type === 'path') return pointsBounds(element.points)
  if (element.type === 'text') return { x: element.point.x, y: element.point.y, width: Math.max(80, element.text.length * element.fontSize * 0.62), height: element.fontSize * 1.3 }
  if (element.type === 'symbol') return { x: element.point.x - 65 * element.scale, y: element.point.y - 55 * element.scale, width: 130 * element.scale, height: 110 * element.scale }
  if (element.type === 'image') return { x: element.point.x - element.imageWidth / 2, y: element.point.y - element.imageHeight / 2, width: element.imageWidth, height: element.imageHeight }
  return pointsBounds([element.start, element.end])
}

function pointsBounds (points: Point[]): { x: number, y: number, width: number, height: number } {
  const xs = points.map((p) => p.x); const ys = points.map((p) => p.y)
  const x = Math.min(...xs); const y = Math.min(...ys)
  return { x, y, width: Math.max(2, Math.max(...xs) - x), height: Math.max(2, Math.max(...ys) - y) }
}

export function hitTest (elements: SketchElement[], point: Point): SketchElement | undefined {
  return [...elements].reverse().find((element) => {
    const b = elementBounds(element)
    return point.x >= b.x - 18 && point.x <= b.x + b.width + 18 && point.y >= b.y - 18 && point.y <= b.y + b.height + 18
  })
}

export function moveElement (element: SketchElement, dx: number, dy: number): SketchElement {
  if (element.type === 'path') return { ...element, points: element.points.map((p) => ({ x: p.x + dx, y: p.y + dy })) }
  if (element.type === 'text' || element.type === 'symbol' || element.type === 'image') return { ...element, point: { x: element.point.x + dx, y: element.point.y + dy } }
  return { ...element, start: { x: element.start.x + dx, y: element.start.y + dy }, end: { x: element.end.x + dx, y: element.end.y + dy } }
}

export function scaleElement (element: SketchElement, factor: number): SketchElement {
  if (element.type === 'symbol') return { ...element, scale: Math.max(0.45, Math.min(3, element.scale * factor)) }
  if (element.type === 'text') return { ...element, fontSize: Math.max(14, Math.min(96, element.fontSize * factor)) }
  if (element.type === 'image') return { ...element, imageWidth: element.imageWidth * factor, imageHeight: element.imageHeight * factor }
  const bounds = elementBounds(element)
  const center = { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 }
  const scalePoint = (point: Point): Point => ({ x: center.x + (point.x - center.x) * factor, y: center.y + (point.y - center.y) * factor })
  if (element.type === 'path') return { ...element, points: element.points.map(scalePoint) }
  return { ...element, start: scalePoint(element.start), end: scalePoint(element.end) }
}
