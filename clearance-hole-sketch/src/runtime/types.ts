export type Tool = 'select' | 'pen' | 'line' | 'arrow' | 'rect' | 'ellipse' | 'text'

export interface Point {
  x: number
  y: number
}

export interface BaseElement {
  id: string
  color: string
  width: number
  rotation: number
}

export interface PathElement extends BaseElement {
  type: 'path'
  points: Point[]
}

export interface ShapeElement extends BaseElement {
  type: 'line' | 'arrow' | 'rect' | 'ellipse'
  start: Point
  end: Point
}

export interface TextElement extends BaseElement {
  type: 'text'
  point: Point
  text: string
  fontSize: number
}

export interface SymbolElement extends BaseElement {
  type: 'symbol'
  point: Point
  symbolId: string
  scale: number
}

export interface ImageElement extends BaseElement {
  type: 'image'
  point: Point
  dataUrl: string
  imageWidth: number
  imageHeight: number
}

export type SketchElement = PathElement | ShapeElement | TextElement | SymbolElement | ImageElement
