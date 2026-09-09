export type SymbolStyle = 'box' | 'circle' | 'pole' | 'signal' | 'tree' | 'valve' | 'manhole' | 'meter' | 'post' | 'line' | 'north' | 'hole'

export interface SymbolDefinition {
  id: string
  label: string
  category: string
  style: SymbolStyle
  color: string
  code?: string
}

const make = (category: string, style: SymbolStyle, color: string, labels: Array<string | [string, string]>): SymbolDefinition[] =>
  labels.map((value) => {
    const label = typeof value === 'string' ? value : value[0]
    const code = typeof value === 'string' ? undefined : value[1]
    return { id: label.toLowerCase().replace(/[^a-z0-9]+/g, '-'), label, category, style, color, code }
  })

const utilityLines: SymbolDefinition[] = [
  ['Buried electric line', 'BE', '#e3272b'], ['Fiber optic cable', 'FOC', '#ff7a3d'],
  ['Buried telephone', 'BT', '#f08a1c'], ['Cable television', 'CATV', '#ef811a'],
  ['Gas line', 'GAS', '#d7d700'], ['Water line', 'WL', '#2149e5'],
  ['Non-potable water line', 'NPWL', '#8a188c'], ['Force main line', 'FM', '#168b2d'],
  ['Sanitary sewer line', 'SS', '#168b2d'], ['Storm line', 'ST', '#bd5c00'],
  ['Unknown utility line', 'UNK', '#ed1978']
].map<SymbolDefinition>(([label, code, color]) => ({
  id: label.toLowerCase().replace(/[^a-z0-9]+/g, '-'), label, code, color,
  category: 'Utility lines', style: 'line'
}))

export const SYMBOLS: SymbolDefinition[] = [
  ...make('Survey and signs', 'box', '#e3272b', [
    ['Test hole (TH)', 'TH'], 'Commercial sign', 'Street name sign', 'Swing tie',
    ['Single-support sign (SSS)', 'SSS'], ['Multi-support sign (MSS)', 'MSS'], 'Service cabinet',
    'Wire pull box - electric', 'Wire pull box - FOC/communications', 'Legend note box'
  ]),
  ...make('Survey and signs', 'north', '#5f686d', [['North arrow', 'N']]),
  ...make('Survey and signs', 'hole', '#222222', [['Clearance hole cross-section', 'CH-TH']]),
  ...make('Signals and poles', 'signal', '#e3272b', [
    'Traffic signal with mast arm', 'Pedestrian signal', 'Light pole - single',
    'Light pole - double', 'Mast arm or high-mast light pole'
  ]),
  ...make('Power and communications', 'pole', '#e3272b', [
    'Electric transformer', 'Power pole', 'Power pole with transformer', 'Shared pole',
    'Shared pole with transformer', 'Telephone or FOC service cabinet', 'Cable TV service box',
    'Telephone pedestal', 'Guy anchor'
  ]),
  ...make('Meters', 'meter', '#2456d8', [
    ['Water meter', 'WATER'], ['Electric meter', 'ELEC'], ['Gas meter', 'GAS'], ['Unknown meter', 'UNK']
  ]),
  ...make('Drainage and structures', 'box', '#b55a00', [
    ['Miscellaneous structure (MES)', 'MES'], 'Underdrain box', 'Catch basin or storm inlet'
  ]),
  ...make('Valves and covers', 'valve', '#138a2a', [
    ['Force main valve', 'FM'], 'Cleanout', 'Fire hydrant', 'Backflow preventer',
    ['Gas valve cover', 'GAS'], ['Water valve cover', 'WATER'], ['Raw water valve cover', 'RAW'],
    ['Non-potable water valve cover', 'NPW'], ['Sanitary sewer valve cover', 'SAN'],
    ['Water valve', 'WATER'], ['Gas valve', 'GAS'], ['Force main valve - inline', 'FM'],
    ['Non-potable water valve', 'NPW'], ['Unknown valve', 'UNK']
  ]),
  ...make('Manholes', 'manhole', '#9c4a00', [
    ['Communications manhole', 'COMM'], ['Telephone or FOC manhole', 'TELE'],
    ['Electric manhole', 'ELEC'], ['Water manhole', 'WATER'], ['Gas manhole', 'GAS'],
    ['Non-potable water manhole', 'NPW'], ['Sanitary sewer manhole', 'SAN'],
    ['Stormwater manhole', 'SD'], ['Unknown manhole', 'UNK']
  ]),
  ...make('Posts and site features', 'post', '#8c159f', [
    'Delineator post', 'Utility marker post', 'Flag or flagpole', 'Mailbox'
  ]),
  ...make('Vegetation', 'tree', '#168b2d', ['Tree', 'Palm tree', 'Pine tree', 'Cypress tree']),
  ...utilityLines
]

export const getSymbol = (id: string): SymbolDefinition | undefined => SYMBOLS.find((item) => item.id === id)
