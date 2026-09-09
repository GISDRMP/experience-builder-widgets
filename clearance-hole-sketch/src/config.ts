import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  attachmentNamePrefix: string
  showGrid: boolean
  gridSize: number
  defaultStrokeColor: string
  defaultStrokeWidth: number
}

export type IMConfig = ImmutableObject<Config>
