/** @jsx jsx */
import { React, jsx, Immutable, AllDataSourceTypes, UseDataSource } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow, MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { TextInput, NumericInput, Switch } from 'jimu-ui'
import { IMConfig } from '../config'

export default function Setting (props: AllWidgetSettingProps<IMConfig>): React.ReactElement {
  const updateConfig = (name: string, value: string | number | boolean): void => {
    props.onSettingChange({ id: props.id, config: props.config.set(name, value) })
  }

  const onDataSourceChange = (useDataSources: UseDataSource[]): void => {
    props.onSettingChange({ id: props.id, useDataSources: Immutable(useDataSources) })
  }

  return <div className='widget-setting-clearance-hole-sketch p-3'>
    <SettingSection title='Map and feature layer'>
      <SettingRow label='Map widget' flow='wrap'>
        <MapWidgetSelector
          useMapWidgetIds={props.useMapWidgetIds}
          onSelect={(useMapWidgetIds) => props.onSettingChange({ id: props.id, useMapWidgetIds })}
        />
      </SettingRow>
      <SettingRow flow='wrap'>
        <p className='text-muted small'>Choose the same feature layer used by the Map widget. Saving requires exactly one selected feature and attachments enabled on the layer.</p>
        <DataSourceSelector
          types={Immutable([AllDataSourceTypes.FeatureLayer])}
          mustUseDataSource
          isMultiple={false}
          useDataSources={props.useDataSources}
          onChange={onDataSourceChange}
          widgetId={props.id}
        />
      </SettingRow>
    </SettingSection>
    <SettingSection title='Sketch defaults'>
      <SettingRow> 
        Attachment filename prefix
      </SettingRow>
      <SettingRow>
        <TextInput size='sm' value={props.config.attachmentNamePrefix} onChange={(event) => updateConfig('attachmentNamePrefix', event.target.value)} />
      </SettingRow>
      <SettingRow>
        Show grid
      </SettingRow>
      <SettingRow>
        <Switch checked={props.config.showGrid} onChange={(event) => updateConfig('showGrid', event.target.checked)} />
      </SettingRow>
      <SettingRow>
        Grid spacing
      </SettingRow>
      <SettingRow>
        <NumericInput size='sm' min={12} max={60} value={props.config.gridSize} onChange={(value) => updateConfig('gridSize', value)} />
      </SettingRow>
      <SettingRow>
         Default line width
      </SettingRow>
      <SettingRow>
        <NumericInput size='sm' min={1} max={14} value={props.config.defaultStrokeWidth} onChange={(value) => updateConfig('defaultStrokeWidth', value)} />
      </SettingRow>
      <SettingRow>
        Default line color
      </SettingRow>
      <SettingRow>
        <input type='color' value={props.config.defaultStrokeColor} onChange={(event) => updateConfig('defaultStrokeColor', event.target.value)} aria-label='Default line color' />
      </SettingRow>
    </SettingSection>
  </div>
}
