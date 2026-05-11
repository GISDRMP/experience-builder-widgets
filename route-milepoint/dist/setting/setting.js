System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector"],(function(e,t){var i={},a={},o={};return{setters:[function(e){i.AllDataSourceTypes=e.AllDataSourceTypes,i.Immutable=e.Immutable,i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){a.MapWidgetSelector=e.MapWidgetSelector},function(e){o.DataSourceSelector=e.DataSourceSelector}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=i},470:e=>{"use strict";e.exports=o},298:e=>{"use strict";e.exports=a}},t={};function l(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,l),o.exports}l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var r={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(r),l.d(r,{__set_webpack_public_path__:()=>p,default:()=>c});var e=l(244),t=l(298),i=l(470);const a={_widgetLabel:"Route Milepoint 1.17",mapWidget:"Map widget",routeLayer:"Route layer",routeIdField:"Route ID field",routeDisplayField:"Route display field",lrsNetworkLayerUrl:"LRS network layer URL",maxSnapDistance:"Maximum snap distance (meters)",decimalPrecision:"Decimal precision",measureToMilepointFactor:"Measure-to-milepoint factor",useCurrentDate:"Use current date for time-aware LRS",temporalViewDate:"Temporal view date",allowApproximateFallback:"Allow approximate fallback when no LRS URL is configured",showConnectorLine:"Show connector line between clicked and snapped point",helperRouteLayer:"Choose the polyline route layer that represents the selectable routes.",helperLrs:"Use the ArcGIS Location Referencing network layer URL, for example .../MapServer/exts/LRServer/networkLayers/NETWORK_LAYER_ID. The widget appends /geometryToMeasure automatically. If blank, the widget falls back to M-aware route geometry.",helperFactor:"Use 1 when measures are already milepoints. Example: use 0.0001893939 when route M values are feet and the displayed milepoint should be miles.",helperApproximate:"This remains off by default because shape-length approximation is not an official LRS milepoint.",selectField:"Select a field",fieldFallbackPlaceholder:"FIELD_NAME",urlPlaceholder:"https://SERVER/arcgis/rest/services/SERVICE_NAME/MapServer/exts/LRServer/networkLayers/NETWORK_LAYER_ID",routeLayerRequired:"Select a route layer to populate fields.",schemaHint:"Field choices are read from the selected data source schema when available."},o=e.css`
  .route-milepoint-setting {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem;
  }

  .route-milepoint-setting__card {
    border: 1px solid var(--light-300);
    border-radius: 0.5rem;
    padding: 0.75rem;
    background: var(--white);
  }

  .route-milepoint-setting__title {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .route-milepoint-setting__help {
    margin: 0.375rem 0 0;
    font-size: 0.8125rem;
    line-height: 1.4;
    color: var(--dark-600);
  }

  .route-milepoint-setting__field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    margin-top: 0.75rem;
  }

  .route-milepoint-setting__label {
    font-size: 0.875rem;
    font-weight: 600;
  }

  .route-milepoint-setting__input,
  .route-milepoint-setting__select {
    width: 100%;
    min-width: 0;
    padding: 0.5rem 0.625rem;
    border: 1px solid var(--light-400);
    border-radius: 0.375rem;
    background: var(--white);
    font: inherit;
  }

  .route-milepoint-setting__checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }

  .route-milepoint-setting__note {
    margin: 0.375rem 0 0;
    font-size: 0.8125rem;
    color: var(--dark-500);
  }
`;function n(t){return t.fieldOptions.length>0?(0,e.jsx)("select",{id:t.id,className:"route-milepoint-setting__select",value:t.value,onChange:e=>{t.onChange(e.currentTarget.value)}},(0,e.jsx)("option",{value:""},t.allowEmpty?t.emptyLabel:`-- ${t.emptyLabel} --`),t.fieldOptions.map((t=>(0,e.jsx)("option",{key:t.name,value:t.name},t.alias?`${t.alias} (${t.name})`:t.name)))):(0,e.jsx)("input",{id:t.id,className:"route-milepoint-setting__input",type:"text",value:t.value,placeholder:t.placeholder,onChange:e=>{t.onChange(e.currentTarget.value)}})}function s(e,t){if(!e||0===e.length)return e;const i=u(t);return e.map((e=>Object.assign(Object.assign({},e),{fields:i})))}function u(e){const t=new Set;for(const i of e){if(!i)continue;const e=i.trim();e&&t.add(e)}return Array.from(t)}const c=function(l){var r,c,p,m,d,g,h;const f=e.React.useCallback((e=>{var t,i;return null!==(i=null===(t=l.intl)||void 0===t?void 0:t.formatMessage({id:e,defaultMessage:a[e]}))&&void 0!==i?i:a[e]}),[l.intl]),_=e.React.useMemo((()=>function(e,t){var i,a;const o=null==t?void 0:t[0];if(!o)return[];const l=u([o.dataSourceId,o.mainDataSourceId,o.rootDataSourceId]);for(const t of l){const o=null===(i=null==e?void 0:e.dataSources)||void 0===i?void 0:i[t],l=null===(a=null==o?void 0:o.schema)||void 0===a?void 0:a.fields;if(!l)continue;const r=Object.values(l).map((e=>{var t;return{name:e.name,alias:null!==(t=e.alias)&&void 0!==t?t:e.name}}));return r.sort(((e,t)=>{const i=`${e.alias}|${e.name}`.toLowerCase(),a=`${t.alias}|${t.name}`.toLowerCase();return i.localeCompare(a)})),r}return[]}(l.appConfig,l.useDataSources)),[l.appConfig,l.useDataSources]),x=e.React.useCallback(((e,t)=>{l.onSettingChange({id:l.id,config:l.config.set(e,t)})}),[l]),v=e.React.useCallback((e=>{l.onSettingChange({id:l.id,useDataSources:e,config:l.config.set("routeIdField","").set("routeDisplayField","")})}),[l]),b=e.React.useCallback(((e,t)=>{var i,a;const o=l.config.set(e,t),r=u(["routeIdField"===e?t:null!==(i=l.config.routeIdField)&&void 0!==i?i:"","routeDisplayField"===e?t:null!==(a=l.config.routeDisplayField)&&void 0!==a?a:""]);l.onSettingChange({id:l.id,config:o,useDataSources:s(l.useDataSources,r)})}),[l]);return(0,e.jsx)("div",{className:"route-milepoint-setting",css:o},(0,e.jsx)("div",{className:"route-milepoint-setting__card"},(0,e.jsx)("h4",{className:"route-milepoint-setting__title"},f("mapWidget")),(0,e.jsx)(t.MapWidgetSelector,{useMapWidgetIds:l.useMapWidgetIds,onSelect:t=>{l.onSettingChange({id:l.id,useMapWidgetIds:(0,e.Immutable)(null!=t?t:[])})}})),(0,e.jsx)("div",{className:"route-milepoint-setting__card"},(0,e.jsx)("h4",{className:"route-milepoint-setting__title"},f("routeLayer")),(0,e.jsx)(i.DataSourceSelector,{types:(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer]),useDataSources:l.useDataSources,onChange:v,widgetId:l.id,mustUseDataSource:!0}),(0,e.jsx)("p",{className:"route-milepoint-setting__help"},f("helperRouteLayer")),(0,e.jsx)("p",{className:"route-milepoint-setting__note"},f("schemaHint")),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("label",{className:"route-milepoint-setting__label",htmlFor:"route-milepoint-route-id-field"},f("routeIdField")),(0,e.jsx)(n,{id:"route-milepoint-route-id-field",value:null!==(r=l.config.routeIdField)&&void 0!==r?r:"",placeholder:f("fieldFallbackPlaceholder"),emptyLabel:f("selectField"),fieldOptions:_,allowEmpty:!1,onChange:e=>{b("routeIdField",e)}})),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("label",{className:"route-milepoint-setting__label",htmlFor:"route-milepoint-route-display-field"},f("routeDisplayField")),(0,e.jsx)(n,{id:"route-milepoint-route-display-field",value:null!==(c=l.config.routeDisplayField)&&void 0!==c?c:"",placeholder:f("fieldFallbackPlaceholder"),emptyLabel:f("selectField"),fieldOptions:_,allowEmpty:!0,onChange:e=>{b("routeDisplayField",e)}})),0===_.length&&(0,e.jsx)("p",{className:"route-milepoint-setting__note"},f("routeLayerRequired"))),(0,e.jsx)("div",{className:"route-milepoint-setting__card"},(0,e.jsx)("h4",{className:"route-milepoint-setting__title"},f("lrsNetworkLayerUrl")),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("input",{id:"route-milepoint-lrs-url",className:"route-milepoint-setting__input",type:"text",value:null!==(p=l.config.lrsNetworkLayerUrl)&&void 0!==p?p:"",placeholder:f("urlPlaceholder"),onChange:e=>{x("lrsNetworkLayerUrl",e.currentTarget.value)}})),(0,e.jsx)("p",{className:"route-milepoint-setting__help"},f("helperLrs"))),(0,e.jsx)("div",{className:"route-milepoint-setting__card"},(0,e.jsx)("h4",{className:"route-milepoint-setting__title"},"Behavior"),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("label",{className:"route-milepoint-setting__label",htmlFor:"route-milepoint-max-snap-distance"},f("maxSnapDistance")),(0,e.jsx)("input",{id:"route-milepoint-max-snap-distance",className:"route-milepoint-setting__input",type:"number",min:"0",step:"0.1",value:null!==(m=l.config.maxSnapDistance)&&void 0!==m?m:30,onChange:e=>{x("maxSnapDistance",Number(e.currentTarget.value))}})),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("label",{className:"route-milepoint-setting__label",htmlFor:"route-milepoint-decimal-precision"},f("decimalPrecision")),(0,e.jsx)("input",{id:"route-milepoint-decimal-precision",className:"route-milepoint-setting__input",type:"number",min:"0",max:"6",step:"1",value:null!==(d=l.config.decimalPrecision)&&void 0!==d?d:3,onChange:e=>{x("decimalPrecision",Number(e.currentTarget.value))}})),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("label",{className:"route-milepoint-setting__label",htmlFor:"route-milepoint-factor"},f("measureToMilepointFactor")),(0,e.jsx)("input",{id:"route-milepoint-factor",className:"route-milepoint-setting__input",type:"number",min:"0",step:"any",value:null!==(g=l.config.measureToMilepointFactor)&&void 0!==g?g:1,onChange:e=>{x("measureToMilepointFactor",Number(e.currentTarget.value))}}),(0,e.jsx)("p",{className:"route-milepoint-setting__help"},f("helperFactor"))),(0,e.jsx)("label",{className:"route-milepoint-setting__checkbox"},(0,e.jsx)("input",{type:"checkbox",checked:!1!==l.config.useCurrentDate,onChange:e=>{x("useCurrentDate",e.currentTarget.checked)}}),(0,e.jsx)("span",null,f("useCurrentDate"))),(0,e.jsx)("div",{className:"route-milepoint-setting__field"},(0,e.jsx)("label",{className:"route-milepoint-setting__label",htmlFor:"route-milepoint-temporal-view-date"},f("temporalViewDate")),(0,e.jsx)("input",{id:"route-milepoint-temporal-view-date",className:"route-milepoint-setting__input",type:"datetime-local",value:null!==(h=l.config.temporalViewDate)&&void 0!==h?h:"",disabled:!1!==l.config.useCurrentDate,onChange:e=>{x("temporalViewDate",e.currentTarget.value)}})),(0,e.jsx)("label",{className:"route-milepoint-setting__checkbox"},(0,e.jsx)("input",{type:"checkbox",checked:!0===l.config.allowApproximateFallback,onChange:e=>{x("allowApproximateFallback",e.currentTarget.checked)}}),(0,e.jsx)("span",null,f("allowApproximateFallback"))),(0,e.jsx)("p",{className:"route-milepoint-setting__help"},f("helperApproximate")),(0,e.jsx)("label",{className:"route-milepoint-setting__checkbox"},(0,e.jsx)("input",{type:"checkbox",checked:!1!==l.config.showConnectorLine,onChange:e=>{x("showConnectorLine",e.currentTarget.checked)}}),(0,e.jsx)("span",null,f("showConnectorLine")))))};function p(e){l.p=e}})(),r})())}}}));