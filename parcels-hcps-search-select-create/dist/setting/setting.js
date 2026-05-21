System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var a={},l={},i={},s={};return{setters:[function(e){a.React=e.React,a.css=e.css,a.jsx=e.jsx},function(e){l.JimuMapViewComponent=e.JimuMapViewComponent},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Checkbox=e.Checkbox,i.Label=e.Label,i.Loading=e.Loading,i.Select=e.Select,i.TextInput=e.TextInput},function(e){s.MapWidgetSelector=e.MapWidgetSelector,s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={2686:e=>{"use strict";e.exports=l},9244:e=>{"use strict";e.exports=a},4321:e=>{"use strict";e.exports=i},9298:e=>{"use strict";e.exports=s}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var n={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(n),o.d(n,{__set_webpack_public_path__:()=>w,default:()=>b});var e=o(9244),t=o(2686),a=o(4321),l=o(9298);const i={parcelFolioField:"FOLIO",editFolioField:"FOLIO",joinFormat:"space",maxUniqueValues:2e3,autoZoom:!0,autoHighlight:!0,templateStartMode:"first-template",editTemplateName:"",editorLayerVisibility:{},editorLayerAliases:{},editorTemplateAliases:{},autoCleanEditorLabels:!0,restrictEditorToEditLayer:!0,allowUpdateExisting:!1,allowDeleteExisting:!1,enableAttachments:!0,enableRelatedRecords:!0,showTemplateFilter:!0,enableSnapping:!0,enableTooltips:!0,autoSyncFolioToSmartForm:!0};var s=function(e,t,a,l){return new(a||(a=Promise))((function(i,s){function o(e){try{r(l.next(e))}catch(e){s(e)}}function n(e){try{r(l.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,n)}r((l=l.apply(e,t||[])).next())}))};function r(e,t){return!!t&&(e.jimuLayerViewId===t.jimuLayerViewId||e.layerDataSourceId===t.layerDataSourceId||e.layerId===t.layerId||e.layerTitle===t.layerTitle)}function d(e){return{jimuLayerViewId:e.jimuLayerViewId,layerDataSourceId:e.layerDataSourceId,layerId:e.layerId,layerTitle:e.layerTitle}}function c(e,t){var a;if(t&&e.some((e=>e.name===t)))return t;const l=e.find((e=>"FOLIO"===e.name.toUpperCase()));if(l)return l.name;const i=e.find((e=>e.name.toUpperCase().includes("FOLIO")||(e.alias||"").toUpperCase().includes("FOLIO")));return i?i.name:(null===(a=e[0])||void 0===a?void 0:a.name)||t||"FOLIO"}function p(e){const t=e.geometryType?` (${e.geometryType})`:"";return`${e.layerTitle}${t}`}function m(e){return e.layerDataSourceId||e.layerId||e.layerTitle||e.jimuLayerViewId}function u(e){return String(e||"").replace(/_/g," ").replace(/\s+/g," ").trim()}function g(e,t){return`${m(e)}::${t}`}function y(e,t){return(t.editorLayerAliases||{})[m(e)]||""}function x(e,t,a){return(a.editorTemplateAliases||{})[g(e,t)]||""}function f(e){const t=(null==e?void 0:e.elements)||[];let a=0;const l=e=>{e.forEach((e=>{"relationship"===e.type&&(a+=1),e.elements&&l(e.elements)}))};return l(t),a}function j(e){const t=e,a=[];Array.isArray(t.templates)&&a.push(...t.templates),Array.isArray(t.types)&&t.types.forEach((e=>{Array.isArray(e.templates)&&a.push(...e.templates)}));const l={};return a.map((e=>({name:(null==e?void 0:e.name)||(null==e?void 0:e.label)||"Unnamed template",description:null==e?void 0:e.description}))).filter((e=>!l[e.name]&&(l[e.name]=!0,!0)))}function h(e){if(!e)return"";if(!e.hasFormTemplate)return"No web map smart form detected. The Editor will still display editable layer fields.";const t=[`${e.formElementCount||0} form element${1===e.formElementCount?"":"s"}`];return e.expressionCount&&t.push(`${e.expressionCount} Arcade expression${1===e.expressionCount?"":"s"}`),e.relationshipElementCount&&t.push(`${e.relationshipElementCount} relationship element${1===e.relationshipElementCount?"":"s"}`),t.join(" \u2022 ")}const b=o=>{var n,b,w;const{id:v,config:S,useMapWidgetIds:C,onSettingChange:L}=o,k=function(e){return Object.assign(Object.assign({},i),e||{})}(S),[F,T]=e.React.useState([]),[R,N]=e.React.useState(!1),[E,I]=e.React.useState(""),O=(null==C?void 0:C.length)>0,A=e.React.useMemo((()=>F.find((e=>r(e,k.parcelLayer)))),[k.parcelLayer,F]),V=e.React.useMemo((()=>F.find((e=>r(e,k.editLayer)))),[k.editLayer,F]),M=null===(n=null==V?void 0:V.templates)||void 0===n?void 0:n.some((e=>e.name===k.editTemplateName)),z=e.React.useCallback((e=>{let t=S;Object.keys(e).forEach((a=>{t=t.set(a,e[a])})),L({id:v,config:t})}),[S,v,L]),P=e.React.useCallback((e=>{T([]),I("");const t=S.set("parcelLayer",void 0).set("editLayer",void 0).set("editorLayerVisibility",{}).set("editorLayerAliases",{}).set("editorTemplateAliases",{}).set("autoCleanEditorLabels",!0).set("parcelFolioField",k.parcelFolioField||i.parcelFolioField).set("editFolioField",k.editFolioField||i.editFolioField).set("editTemplateName","");L({id:v,config:t,useMapWidgetIds:e})}),[k.editFolioField,k.parcelFolioField,S,v,L]),$=e.React.useCallback((e=>s(void 0,void 0,void 0,(function*(){var t,a,l;if(e){N(!0),I("");try{yield e.whenJimuMapViewLoaded();const i=yield e.whenAllJimuLayerViewLoaded(),s=[],o=Object.values(i||{});for(const e of o){const i=null==e?void 0:e.layer;if(!i||"feature"!==i.type)continue;try{yield i.load()}catch(e){console.warn("Could not load layer for settings list.",e)}const o=(i.fields||[]).map((e=>({name:e.name,alias:e.alias,type:e.type,editable:e.editable}))),n=j(i),r=i.formTemplate;s.push({jimuLayerViewId:e.id,layerDataSourceId:e.layerDataSourceId,layerId:i.id,layerTitle:i.title||i.name||e.id,geometryType:i.geometryType,rendererType:null===(t=i.renderer)||void 0===t?void 0:t.type,editingEnabled:i.editingEnabled,hasFormTemplate:!!r,formElementCount:(null===(a=null==r?void 0:r.elements)||void 0===a?void 0:a.length)||0,expressionCount:(null===(l=null==r?void 0:r.expressionInfos)||void 0===l?void 0:l.length)||0,relationshipElementCount:f(r),templateCount:n.length,fields:o,templates:n})}s.sort(((e,t)=>e.layerTitle.localeCompare(t.layerTitle))),T(s)}catch(e){console.error(e),I("The selected map could not be read. Make sure the Map widget contains a web map with feature layers.")}finally{N(!1)}}}))),[]),U=e.React.useCallback((e=>{const t=Object.values(e||{})[0];t&&$(t)}),[$]),D=e.React.useCallback((e=>{const t=F.find((t=>t.jimuLayerViewId===e.target.value));t&&z({parcelLayer:d(t),parcelFolioField:c(t.fields,k.parcelFolioField)})}),[k.parcelFolioField,F,z]),_=e.React.useCallback((e=>{var t;const a=F.find((t=>t.jimuLayerViewId===e.target.value));if(!a)return;const l=m(a);z({editLayer:d(a),editFolioField:c(a.fields,k.editFolioField),editTemplateName:(null===(t=a.templates[0])||void 0===t?void 0:t.name)||"",editorLayerVisibility:Object.assign(Object.assign({},k.editorLayerVisibility||{}),{[l]:!0}),restrictEditorToEditLayer:!0})}),[k.editFolioField,k.editorLayerVisibility,F,z]),W=e.React.useCallback(((e,t)=>{const a=m(e),l=Object.assign(Object.assign({},k.editorLayerVisibility||{}),{[a]:t});V&&(l[m(V)]=!0),z({editorLayerVisibility:l,restrictEditorToEditLayer:!0})}),[k.editorLayerVisibility,V,z]),q=e.React.useCallback((()=>{const e={};F.forEach((t=>{e[m(t)]=!!V&&r(t,d(V))})),z({editorLayerVisibility:e,restrictEditorToEditLayer:!0})}),[F,V,z]),H=e.React.useCallback((()=>{const e={};F.forEach((t=>{e[m(t)]=!1!==t.editingEnabled})),V&&(e[m(V)]=!0),z({editorLayerVisibility:e,restrictEditorToEditLayer:!0})}),[F,V,z]),B=e.React.useCallback(((e,t)=>{const a=m(e);z({editorLayerAliases:Object.assign(Object.assign({},k.editorLayerAliases||{}),{[a]:t})})}),[k.editorLayerAliases,z]),J=e.React.useCallback(((e,t,a)=>{const l=g(e,t);z({editorTemplateAliases:Object.assign(Object.assign({},k.editorTemplateAliases||{}),{[l]:a})})}),[k.editorTemplateAliases,z]),Z=e.React.useCallback((()=>{const e={},t={};F.forEach((a=>{e[m(a)]=u(a.layerTitle),(a.templates||[]).forEach((e=>{t[g(a,e.name)]=u(e.name)}))})),z({autoCleanEditorLabels:!0,editorLayerAliases:e,editorTemplateAliases:t})}),[F,z]),G=e.React.useCallback((()=>{z({editorLayerAliases:{},editorTemplateAliases:{}})}),[z]);return(0,e.jsx)("div",{className:"jimu-widget-setting psc-widget-setting",css:e.css`
  .psc-setting-help {
    color: #64748b;
    font-size: 12px;
    line-height: 1.35;
  }

  .psc-layer-note {
    border: 1px solid #d9e2f2;
    border-radius: 6px;
    padding: 8px 10px;
    background: #f8fafc;
    color: #334155;
    font-size: 12px;
    width: 100%;
    line-height: 1.35;
  }

  .psc-layer-note strong {
    color: #0f172a;
  }

  .psc-loading-row {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #52637a;
    font-size: 12px;
  }

  .psc-setting-list {
    display: grid;
    gap: 5px;
    margin-top: 6px;
  }

  .psc-editor-layer-list {
    display: grid;
    gap: 6px;
    width: 100%;
  }

  .psc-editor-layer-row {
    border: 1px solid #d9e2f2;
    border-radius: 6px;
    padding: 8px;
    background: #fff;
    width: 100%;
  }

  .psc-editor-layer-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #0f172a;
    line-height: 1.3;
  }

  .psc-editor-layer-meta {
    margin-left: 24px;
    margin-top: 4px;
    color: #64748b;
    font-size: 11px;
    line-height: 1.35;
  }

  .psc-layer-badge {
    display: inline-flex;
    align-items: center;
    border-radius: 10px;
    padding: 1px 6px;
    background: #eef4ff;
    color: #164da8;
    font-size: 10px;
    white-space: nowrap;
  }

  .psc-layer-badge.primary {
    background: #e9f9ed;
    color: #176b2c;
  }

  .psc-layer-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    width: 100%;
  }

  .psc-alias-box {
    margin-left: 24px;
    margin-top: 7px;
    display: grid;
    gap: 6px;
  }

  .psc-alias-row {
    display: grid;
    grid-template-columns: 130px minmax(0, 1fr);
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: #52637a;
  }

  .psc-template-aliases {
    display: grid;
    gap: 4px;
    padding-left: 8px;
    border-left: 2px solid #eef4ff;
  }

  .psc-alias-preview {
    color: #0f172a;
    font-size: 11px;
  }

  .psc-template-original {
    color: #334155;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`},(0,e.jsx)(l.SettingSection,{title:"Web map source"},(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(l.MapWidgetSelector,{useMapWidgetIds:C,onSelect:P})),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-setting-help"},"Select the Map widget that contains your Parcels HCPS polygon layer and New Project Points editable layer. This widget reads the actual web map layers, renderer/symbology, feature templates, fields, and smart form from that map.")),O&&R&&(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-loading-row"},(0,e.jsx)(a.Loading,{type:"DONUT",width:14,height:14})," Reading web map layers, templates, and smart forms")),O&&E&&(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Alert,{type:"error",text:E,open:!0})),O&&!R&&0===F.length&&!E&&(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Alert,{type:"warning",text:"No feature layers were found in the selected web map.",open:!0}))),(0,e.jsx)(l.SettingSection,{title:"Parcel query layer"},(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Parcel layer"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:(null==A?void 0:A.jimuLayerViewId)||"",onChange:D},(0,e.jsx)("option",{value:"",disabled:!0},"Select parcel layer..."),F.map((t=>(0,e.jsx)("option",{key:t.jimuLayerViewId,value:t.jimuLayerViewId},p(t)))))),(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Parcel FOLIO field"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:k.parcelFolioField||"",disabled:!A,onChange:e=>{z({parcelFolioField:e.target.value})}},(0,e.jsx)("option",{value:"",disabled:!0},"Select field..."),((null==A?void 0:A.fields)||[]).map((t=>(0,e.jsx)("option",{key:t.name,value:t.name},t.alias?`${t.alias} (${t.name})`:t.name))))),A&&(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-layer-note"},(0,e.jsx)("strong",null,"Selected:")," ",A.layerTitle,". Runtime dropdown loads distinct values from ",(0,e.jsx)("strong",null,k.parcelFolioField||"the selected field"),"."))),(0,e.jsx)(l.SettingSection,{title:"Editable layer and full smart form"},(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Edit layer"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:(null==V?void 0:V.jimuLayerViewId)||"",onChange:_},(0,e.jsx)("option",{value:"",disabled:!0},"Select editable point layer..."),F.map((t=>(0,e.jsx)("option",{key:t.jimuLayerViewId,value:t.jimuLayerViewId},p(t)))))),(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Edit FOLIO field"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:k.editFolioField||"",disabled:!V,onChange:e=>{z({editFolioField:e.target.value})}},(0,e.jsx)("option",{value:"",disabled:!0},"Select field..."),((null==V?void 0:V.fields)||[]).map((t=>(0,e.jsx)("option",{key:t.name,value:t.name},t.alias?`${t.alias} (${t.name})`:t.name))))),V&&(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-layer-note"},(0,e.jsx)("strong",null,"Layer:")," ",V.layerTitle,(0,e.jsx)("br",null),(0,e.jsx)("strong",null,"Geometry:")," ",V.geometryType||"unknown",(0,e.jsx)("br",null),(0,e.jsx)("strong",null,"Renderer:")," ",V.rendererType||"map layer renderer",(0,e.jsx)("br",null),(0,e.jsx)("strong",null,"Templates:")," ",V.templateCount||0,(0,e.jsx)("br",null),(0,e.jsx)("strong",null,"Smart form:")," ",h(V)))),(0,e.jsx)(l.SettingSection,{title:"Layers and aliases shown in the Editor"},(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-setting-help"},"Choose exactly which web map layers appear inside the embedded Esri Editor. Unchecked layers are explicitly disabled in ",(0,e.jsx)("strong",null,"Editor.layerInfos"),", so layers like school zones, FutureSites, Parcels HCPS, or other map layers will not show unless you turn them on here.")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-layer-actions"},(0,e.jsx)(a.Button,{size:"sm",type:"secondary",disabled:!V,onClick:q},"Only primary edit layer"),(0,e.jsx)(a.Button,{size:"sm",type:"tertiary",disabled:0===F.length,onClick:H},"Show editable layers"),(0,e.jsx)(a.Button,{size:"sm",type:"tertiary",disabled:0===F.length,onClick:Z},"Clean underscore aliases"),(0,e.jsx)(a.Button,{size:"sm",type:"tertiary",disabled:0===F.length,onClick:G},"Clear aliases"))),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.autoCleanEditorLabels,onChange:e=>{z({autoCleanEditorLabels:e.target.checked})}}),"Automatically show underscores as spaces in the embedded Editor")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-editor-layer-list"},F.map((t=>{const l=!!V&&r(t,d(V)),i=function(e,t,a){if(a&&r(e,d(a)))return!0;const l=t.editorLayerVisibility||{},i=m(e);return Object.prototype.hasOwnProperty.call(l,i)?!0===l[i]:!1===t.restrictEditorToEditLayer}(t,k,V);return(0,e.jsx)("div",{key:t.jimuLayerViewId,className:"psc-editor-layer-row"},(0,e.jsx)("label",{className:"psc-editor-layer-title"},(0,e.jsx)(a.Checkbox,{checked:i,disabled:l,onChange:e=>{W(t,e.target.checked)}}),(0,e.jsx)("span",{className:"text-truncate"},t.layerTitle),l&&(0,e.jsx)("span",{className:"psc-layer-badge primary"},"primary"),r(t,k.parcelLayer)&&(0,e.jsx)("span",{className:"psc-layer-badge"},"parcel query")),(0,e.jsx)("div",{className:"psc-editor-layer-meta"},function(e){const t=[];return e.geometryType&&t.push(e.geometryType),t.push(!1===e.editingEnabled?"editing not advertised":"editable"),void 0!==e.templateCount&&t.push(`${e.templateCount} template${1===e.templateCount?"":"s"}`),e.hasFormTemplate?t.push(h(e)):t.push("no smart form detected"),t.join(" \u2022 ")}(t)),(0,e.jsx)("div",{className:"psc-alias-box"},(0,e.jsx)("div",{className:"psc-alias-row"},(0,e.jsx)("span",null,"Layer alias"),(0,e.jsx)(a.TextInput,{size:"sm",value:y(t,k),placeholder:u(t.layerTitle),onChange:e=>{B(t,e.target.value)}})),(0,e.jsx)("div",{className:"psc-alias-preview"},"Editor will show: ",(0,e.jsx)("strong",null,function(e,t){const a=y(e,t).trim();return a||(!1===t.autoCleanEditorLabels?e.layerTitle:u(e.layerTitle))}(t,k))),(t.templates||[]).length>0&&(0,e.jsx)("div",{className:"psc-template-aliases"},(t.templates||[]).map((l=>(0,e.jsx)("div",{key:l.name,className:"psc-alias-row"},(0,e.jsx)("span",{className:"psc-template-original",title:l.name},l.name),(0,e.jsx)(a.TextInput,{size:"sm",value:x(t,l.name,k),placeholder:u(l.name),onChange:e=>{J(t,l.name,e.target.value)}})))))))})))),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)("div",{className:"psc-layer-note"},(0,e.jsx)("strong",null,"Recommended for your workflow:")," keep ",(0,e.jsx)("strong",null,(null==V?void 0:V.layerTitle)||"New Project Points")," on, and leave Parcels HCPS, school zones, and reference layers off unless you intentionally want to edit them."))),(0,e.jsx)(l.SettingSection,{title:"Editor create workflow"},(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Start create with"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:k.templateStartMode||i.templateStartMode,onChange:e=>{z({templateStartMode:e.target.value})}},(0,e.jsx)("option",{value:"first-template"},"First feature template"),(0,e.jsx)("option",{value:"configured-template"},"Selected feature template"),(0,e.jsx)("option",{value:"template-picker"},"Open template picker first"))),"configured-template"===k.templateStartMode&&(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Feature template"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:M?k.editTemplateName:(null===(w=null===(b=null==V?void 0:V.templates)||void 0===b?void 0:b[0])||void 0===w?void 0:w.name)||"",disabled:!V||0===V.templates.length,onChange:e=>{z({editTemplateName:e.target.value})}},(0,e.jsx)("option",{value:"",disabled:!0},"Select template..."),((null==V?void 0:V.templates)||[]).map((t=>(0,e.jsx)("option",{key:t.name,value:t.name},t.name))))),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.autoSyncFolioToSmartForm,onChange:e=>{z({autoSyncFolioToSmartForm:e.target.checked})}}),"Auto-fill the smart form FOLIO field from selected folios")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.enableAttachments,onChange:e=>{z({enableAttachments:e.target.checked})}}),"Preserve Editor attachments controls when supported")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.enableRelatedRecords,onChange:e=>{z({enableRelatedRecords:e.target.checked})}}),"Preserve relationship elements from the web map smart form")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.enableSnapping,onChange:e=>{z({enableSnapping:e.target.checked})}}),"Enable Editor snapping controls")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.enableTooltips,onChange:e=>{z({enableTooltips:e.target.checked})}}),"Enable Editor map tooltips")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!0===k.allowUpdateExisting,onChange:e=>{z({allowUpdateExisting:e.target.checked})}}),"Allow updating existing project points")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!0===k.allowDeleteExisting,onChange:e=>{z({allowDeleteExisting:e.target.checked})}}),"Allow deleting existing project points"))),(0,e.jsx)(l.SettingSection,{title:"Folio string and map behavior"},(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Join selected folios as"},(0,e.jsx)(a.Select,{size:"sm",className:"w-100",value:k.joinFormat||i.joinFormat,onChange:e=>{z({joinFormat:e.target.value})}},(0,e.jsx)("option",{value:"space"},"Space separated: 0000080000 0000080100"),(0,e.jsx)("option",{value:"comma"},"Comma separated: 0000080000, 0000080100"),(0,e.jsx)("option",{value:"semicolon"},"Semicolon separated: 0000080000; 0000080100"),(0,e.jsx)("option",{value:"newline"},"One folio per line"))),(0,e.jsx)(l.SettingRow,{flow:"wrap",label:"Max folio values to load"},(0,e.jsx)(a.TextInput,{size:"sm",type:"number",className:"w-100",value:String(k.maxUniqueValues||i.maxUniqueValues),onChange:e=>{const t=Math.max(1,parseInt(e.target.value,10)||i.maxUniqueValues);z({maxUniqueValues:t})}})),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.autoZoom,onChange:e=>{z({autoZoom:e.target.checked})}}),"Zoom to selected parcels after Apply")),(0,e.jsx)(l.SettingRow,null,(0,e.jsx)(a.Label,{className:"d-flex align-items-center"},(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:!1!==k.autoHighlight,onChange:e=>{z({autoHighlight:e.target.checked})}}),"Highlight selected parcels after Apply"))),O&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null==C?void 0:C[0],onViewsCreate:U}))};function w(e){o.p=e}})(),n})())}}}));