System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/widgets/Editor","esri/core/reactiveUtils"],(function(e,t){var i={},a={},o={},r={},l={};return{setters:[function(e){i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.Button=e.Button,o.Checkbox=e.Checkbox,o.Loading=e.Loading,o.TextInput=e.TextInput},function(e){r.default=e.default},function(e){l.watch=e.watch}],execute:function(){e((()=>{var e={2243:e=>{"use strict";e.exports=l},8816:e=>{"use strict";e.exports=r},2686:e=>{"use strict";e.exports=a},9244:e=>{"use strict";e.exports=i},4321:e=>{"use strict";e.exports=o}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var s={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(s),n.d(s,{__set_webpack_public_path__:()=>Q,default:()=>H});var e=n(9244),t=n(2686),i=n(4321),a=n(8816),o=n(2243);const r={parcelFolioField:"FOLIO",editFolioField:"FOLIO",joinFormat:"space",maxUniqueValues:2e3,autoZoom:!0,autoHighlight:!0,templateStartMode:"first-template",editTemplateName:"",editorLayerVisibility:{},editorLayerAliases:{},editorTemplateAliases:{},autoCleanEditorLabels:!0,restrictEditorToEditLayer:!0,allowUpdateExisting:!1,allowDeleteExisting:!1,enableAttachments:!0,enableRelatedRecords:!0,showTemplateFilter:!0,enableSnapping:!0,enableTooltips:!0,autoSyncFolioToSmartForm:!0};var l=function(e,t,i,a){return new(i||(i=Promise))((function(o,r){function l(e){try{s(a.next(e))}catch(e){r(e)}}function n(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,n)}s((a=a.apply(e,t||[])).next())}))};const c=()=>e.css`
  &.psc-widget {
    height: 100%;
    min-height: 560px;
    background: #f6f9fd;
    color: #0f172a;
    overflow: hidden;
    border-radius: 8px;
  }

  .psc-app {
    height: 100%;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
  }

  .psc-topbar {
    min-height: 58px;
    padding: 10px 14px;
    box-sizing: border-box;
    background: linear-gradient(90deg, #071b43 0%, #0b234e 60%, #0c2a63 100%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .psc-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .psc-brand-icon {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: #0f62fe;
    display: grid;
    place-items: center;
    font-weight: 800;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25);
  }

  .psc-brand-title {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .psc-brand-subtitle {
    font-size: 12px;
    color: #cbd5e1;
    margin-top: 3px;
  }

  .psc-top-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .psc-connected {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.09);
    color: #fff;
    border-radius: 7px;
    padding: 7px 10px;
    font-size: 12px;
  }

  .psc-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    display: inline-block;
  }

  .psc-shell {
    display: grid;
    grid-template-columns: minmax(300px, 0.88fr) minmax(380px, 1.12fr);
    gap: 10px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .psc-card {
    background: #fff;
    border: 1px solid #dbe5f3;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
    overflow: hidden;
  }

  .psc-left {
    display: grid;
    grid-template-rows: minmax(265px, 1fr) auto;
    gap: 10px;
    min-width: 0;
    min-height: 0;
  }

  .psc-editor-card {
    display: grid;
    grid-template-rows: auto auto minmax(0, 1fr);
    min-width: 0;
    min-height: 0;
  }

  .psc-editor-card.is-template-picker-card {
    grid-template-rows: auto auto auto;
    align-self: start;
    height: auto;
    max-height: none;
  }

  .psc-editor-card.is-workflow-active-card {
    grid-template-rows: auto auto minmax(0, 1fr);
    align-self: stretch;
    min-height: 0;
  }

  .psc-card-header {
    padding: 12px 14px;
    border-bottom: 1px solid #edf2fa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .psc-title {
    color: #0957d8;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  .psc-subtitle {
    font-size: 12px;
    color: #52637a;
    margin-top: 3px;
    line-height: 1.3;
  }

  .psc-card-body {
    padding: 12px 14px;
    min-height: 0;
  }

  .psc-layer-status {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;
    margin-bottom: 10px;
  }

  .psc-chip {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    border-radius: 14px;
    background: #eef4ff;
    color: #164da8;
    font-size: 12px;
    padding: 2px 9px;
    max-width: 100%;
  }

  .psc-chip.green {
    background: #e9f9ed;
    color: #176b2c;
  }

  .psc-chip.neutral {
    background: #f1f5f9;
    color: #334155;
  }

  .psc-chip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .psc-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .psc-row-spread {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .psc-input-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
    margin: 8px 0;
  }

  .psc-options {
    border: 1px solid #d9e2f2;
    border-radius: 6px;
    max-height: 210px;
    overflow: auto;
    background: #fff;
  }

  .psc-option {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 10px;
    border-bottom: 1px solid #edf2fa;
    font-size: 13px;
  }

  .psc-option:last-child {
    border-bottom: 0;
  }

  .psc-option.is-selected {
    background: #eaf1ff;
  }

  .psc-option-label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .psc-table-wrap {
    border: 1px solid #edf2fa;
    border-radius: 6px;
    overflow: hidden;
  }

  .psc-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }

  .psc-table th,
  .psc-table td {
    padding: 8px 8px;
    border-bottom: 1px solid #edf2fa;
    text-align: left;
  }

  .psc-table tbody tr:last-child td {
    border-bottom: 0;
  }

  .psc-table th {
    color: #334155;
    font-weight: 700;
    background: #f8fafc;
  }

  .psc-table td.code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  }

  .psc-empty {
    color: #64748b;
    font-size: 13px;
    padding: 12px;
    border: 1px dashed #cbd5e1;
    border-radius: 6px;
    background: #f8fafc;
    line-height: 1.4;
  }

  .psc-folio-string {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #b7e2bf;
    border-radius: 7px;
    background: #f0fff3;
  }

  .psc-string-box {
    margin-top: 8px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
    align-items: center;
  }

  .psc-string-value {
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    background: #fff;
    color: #0f172a;
    font-weight: 700;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .psc-status {
    margin: 10px 14px 0 14px;
    padding: 8px 10px;
    border-radius: 6px;
    font-size: 12px;
    border: 1px solid #d9e2f2;
    background: #f8fafc;
    color: #334155;
    line-height: 1.35;
  }

  .psc-status.ok {
    border-color: #b7e2bf;
    background: #f0fff3;
    color: #176b2c;
  }

  .psc-status.warn {
    border-color: #fed7aa;
    background: #fff7ed;
    color: #9a3412;
  }

  .psc-status.error {
    border-color: #fecaca;
    background: #fff1f2;
    color: #b91c1c;
  }

  .psc-footer-note {
    color: #64748b;
    font-size: 12px;
    margin-top: 7px;
    line-height: 1.35;
  }

  .psc-loading {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #52637a;
    font-size: 12px;
  }

  .psc-editor-toolbar {
    padding: 12px 14px;
    border-bottom: 1px solid #edf2fa;
    background: #fff;
    display: grid;
    gap: 10px;
  }

  .psc-editor-container {
    min-height: 0;
    overflow: hidden;
    background: #fff;
  }

  .psc-editor-container.is-template-picker {
    height: auto;
    min-height: 0;
    max-height: none;
    overflow: visible;
    background: #fff;
  }

  .psc-editor-container.is-workflow-active {
    height: 100%;
    min-height: 0;
    overflow: auto;
    background: #fff;
  }

  .psc-editor-container .esri-editor,
  .psc-editor-container .esri-widget,
  .psc-editor-container .esri-editor__content {
    background: #fff;
  }

  /* Tighten the embedded Editor's template picker so the New Project Points row does not sit in a large blank white well. */
  .psc-editor-container .esri-editor__content,
  .psc-editor-container .esri-editor__scroller,
  .psc-editor-container .esri-feature-templates,
  .psc-editor-container .esri-feature-templates__content,
  .psc-editor-container .esri-item-list,
  .psc-editor-container .esri-item-list__scroller {
    padding: 0 !important;
    margin: 0 !important;
  }

  .psc-editor-container .esri-feature-templates__group,
  .psc-editor-container .esri-item-list__group {
    padding: 0 !important;
    margin: 0 !important;
  }

  .psc-editor-container .esri-feature-templates__group-title,
  .psc-editor-container .esri-item-list__group-header {
    margin: 0 !important;
    padding: 9px 12px 6px 12px !important;
    background: #fff !important;
    border: 0 !important;
  }

  .psc-editor-container .esri-feature-templates__list,
  .psc-editor-container .esri-item-list__list {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .psc-editor-container .esri-feature-templates__list-item,
  .psc-editor-container .esri-feature-templates__template,
  .psc-editor-container .esri-template-item,
  .psc-editor-container .esri-item-list__list-item {
    display: flex !important;
    width: 100% !important;
    max-width: none !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 10px 12px !important;
    background: #fff !important;
    border-radius: 0 !important;
  }

  .psc-editor-container .esri-feature-templates__list-item:hover,
  .psc-editor-container .esri-feature-templates__template:hover,
  .psc-editor-container .esri-template-item:hover,
  .psc-editor-container .esri-item-list__list-item:hover {
    background: #f4f8ff !important;
  }

  .psc-editor-container.is-template-picker .esri-editor,
  .psc-editor-container.is-template-picker .esri-widget,
  .psc-editor-container.is-template-picker .esri-editor__content,
  .psc-editor-container.is-template-picker .esri-editor__scroller,
  .psc-editor-container.is-template-picker .esri-feature-templates,
  .psc-editor-container.is-template-picker .esri-feature-templates__content,
  .psc-editor-container.is-template-picker .esri-item-list,
  .psc-editor-container.is-template-picker .esri-item-list__scroller {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
  }

  .psc-editor-container.is-template-picker .esri-editor__scroller::-webkit-scrollbar,
  .psc-editor-container.is-template-picker .esri-item-list__scroller::-webkit-scrollbar,
  .psc-editor-container.is-template-picker .psc-editor-inner::-webkit-scrollbar {
    display: none;
  }

  .psc-editor-host,
  .psc-editor-inner {
    height: 100%;
    min-height: 280px;
  }

  .psc-editor-container.is-template-picker .psc-editor-host,
  .psc-editor-container.is-template-picker .psc-editor-inner {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
    background: #fff;
  }

  .psc-editor-container.is-workflow-active .psc-editor-host,
  .psc-editor-container.is-workflow-active .psc-editor-inner {
    height: 100%;
    min-height: 0;
  }

  .psc-editor-empty {
    margin: 12px 14px;
  }

  .psc-workflow-strip {
    border-top: 1px solid #e5edf8;
    background: #f8fbff;
    padding: 9px 12px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    font-size: 12px;
    color: #334155;
  }

  .psc-step-pill {
    background: #fff;
    border: 1px solid #dbe5f3;
    border-radius: 7px;
    padding: 8px;
    min-width: 0;
  }

  .psc-step-pill strong {
    display: block;
    color: #0957d8;
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  @media (max-width: 900px) {
    .psc-shell {
      grid-template-columns: 1fr;
      grid-template-rows: auto minmax(420px, 1fr);
      overflow: auto;
    }
    .psc-workflow-strip {
      grid-template-columns: 1fr 1fr;
    }
  }
`;function d(e,t){if(!e||!t)return{};const i=e.jimuLayerViews||{};let a=null;t.jimuLayerViewId&&i[t.jimuLayerViewId]&&(a=i[t.jimuLayerViewId]),a||(a=Object.values(i).find((e=>{const i=null==e?void 0:e.layer;return(null==e?void 0:e.layerDataSourceId)===t.layerDataSourceId||(null==i?void 0:i.id)===t.layerId||(null==i?void 0:i.title)===t.layerTitle||(null==i?void 0:i.__pscOriginalTitle)===t.layerTitle})));return{layerView:a,layer:null==a?void 0:a.layer}}function p(e,t,i){const a=e;return(null==t?void 0:t.layerDataSourceId)||(null==i?void 0:i.layerDataSourceId)||(null==a?void 0:a.id)||(null==i?void 0:i.layerId)||(null==a?void 0:a.__pscOriginalTitle)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||(null==i?void 0:i.layerTitle)||(null==t?void 0:t.id)||(null==i?void 0:i.jimuLayerViewId)||""}function u(e,t,i){const a=e;return j([null==t?void 0:t.layerDataSourceId,null==i?void 0:i.layerDataSourceId,null==a?void 0:a.id,null==i?void 0:i.layerId,null==a?void 0:a.__pscOriginalTitle,null==a?void 0:a.title,null==a?void 0:a.name,null==i?void 0:i.layerTitle,null==t?void 0:t.id,null==i?void 0:i.jimuLayerViewId].filter(Boolean).map((e=>String(e))))}function m(e,t){if(!e||!t)return!1;const i=e,a=t;return e===t||!!i.id&&i.id===a.id||!!i.title&&i.title===a.title||!!i.__pscOriginalTitle&&i.__pscOriginalTitle===a.title||!!a.__pscOriginalTitle&&a.__pscOriginalTitle===i.title||!!i.__pscOriginalTitle&&!!a.__pscOriginalTitle&&i.__pscOriginalTitle===a.__pscOriginalTitle}function f(e){var t,i,a;if(!(null==e?void 0:e.view))return[];const o=[],r={},l=(e,t)=>{if(!e||"feature"!==e.type)return;const i=p(e,t)||o.length+"";r[i]||(r[i]=!0,o.push({layer:e,layerView:t}))};((null===(a=null===(i=null===(t=e.view.map)||void 0===t?void 0:t.allLayers)||void 0===i?void 0:i.toArray)||void 0===a?void 0:a.call(i))||[]).forEach((t=>l(t,function(e,t){return Object.values((null==e?void 0:e.jimuLayerViews)||{}).find((e=>m(null==e?void 0:e.layer,t)))}(e,t))));return Object.values(e.jimuLayerViews||{}).forEach((e=>l(null==e?void 0:e.layer,e))),o}function g(e){return String(e||"").replace(/_/g," ").replace(/\s+/g," ").trim()}function h(e,t,i){const a=i.editorTemplateAliases||{},o=function(e,t){return u(e.layer,e.layerView).map((e=>`${e}::${t}`))}(e,t),r=o.find((e=>{var t;return null===(t=a[e])||void 0===t?void 0:t.trim()})),l=r?a[r].trim():"";return l||(!1===i.autoCleanEditorLabels?t:g(t))}function v(e,t,i){const a=String(t||"").trim(),o=String(i||"").trim();a&&o&&a!==o&&(e[a]||(e[a]=o))}function x(e,t){const i={};return e.forEach((e=>{const a=e.layer;if(!a)return;const o=a,r=function(e,t){const i=e.layer,a=i,o=(null==a?void 0:a.__pscOriginalTitle)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||"",r=t.editorLayerAliases||{},l=u(i,e.layerView).find((e=>{var t;return null===(t=r[e])||void 0===t?void 0:t.trim()}));return(l?r[l].trim():"")||(!1===t.autoCleanEditorLabels?o:g(o))}(e,t),l=$(a);v(i,l,r),v(i,o.title,r),v(i,o.name,r),W(a).forEach((a=>{j([V(a),null==a?void 0:a.name,null==a?void 0:a.label,null==a?void 0:a.displayName,null==a?void 0:a.title].filter(Boolean).map((e=>String(e)))).forEach((a=>{const o=h(e,a,t);v(i,a,o)}))}))})),i}function y(e,t){var i,a;const o=t[String(e||"").trim()];if(!o)return e;return`${(null===(i=e.match(/^\s*/))||void 0===i?void 0:i[0])||""}${o}${(null===(a=e.match(/\s*$/))||void 0===a?void 0:a[0])||""}`}function b(e,t){if(!e||0===Object.keys(t).length)return;const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),a=[];let o=i.nextNode();for(;o;)a.push(o),o=i.nextNode();a.forEach((e=>{const i=e.parentElement;if(!i||"true"===i.getAttribute("data-psc-alias-applied"))return;const a=e.textContent||"",o=y(a,t);o!==a&&(e.textContent=o,i.setAttribute("data-psc-alias-applied","true"))}));e.querySelectorAll("[title], [aria-label]").forEach((e=>{["title","aria-label"].forEach((i=>{const a=e.getAttribute(i);if(!a||"true"===e.getAttribute(`data-psc-${i}-alias-applied`))return;const o=y(a,t);o!==a&&(e.setAttribute(i,o),e.setAttribute(`data-psc-${i}-alias-applied`,"true"))}))}))}function w(e){return null==e?"":String(e).trim()}function j(e){const t={},i=[];return e.forEach((e=>{const a=w(e);a&&!t[a]&&(t[a]=!0,i.push(a))})),i}function k(e){return j((e||"").split(/[\s,;]+/g))}function N(e){const t=(e||"").split(/[\s,;]+/g).map((e=>e.trim())).filter(Boolean);return t[t.length-1]||""}function _(e,t){var i;return null===(i=null==e?void 0:e.fields)||void 0===i?void 0:i.find((e=>e.name===t||e.alias===t))}function E(e){return["oid","small-integer","integer","single","double","long","big-integer"].includes(null==e?void 0:e.type)}function T(e,t){return t&&""!==e&&!isNaN(Number(e))?e:`'${String(e).replace(/'/g,"''")}'`}function C(e,t,i){const a=_(e,t),o=(null==a?void 0:a.name)||t,r=w(i);return r?E(a)?`${o} = ${T(r,!0)}`:`${o} LIKE '${l=r,String(l||"").replace(/[%_]/g,"").replace(/'/g,"''")}%'`:"1=1";var l}function S(e){return[...e].sort(((e,t)=>e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})))}function R(e){const t=Number(e);return Number.isFinite(t)&&t>0?t:0}function F(e,t){var i,a,o;const r=e,l=[null===(a=null===(i=null==r?void 0:r.capabilities)||void 0===i?void 0:i.query)||void 0===a?void 0:a.maxRecordCount,null==r?void 0:r.maxRecordCount,null===(o=null==r?void 0:r.sourceJSON)||void 0===o?void 0:o.maxRecordCount].map(R).find((e=>e>0))||2e3;return Math.max(1,Math.min(Math.floor(l),t))}function O(e,t,i,a,o){const r=e.length;return i.forEach((i=>{var r;if(e.length>=o)return;const l=w(null===(r=i.attributes)||void 0===r?void 0:r[a]);l&&!t[l]&&(t[l]=!0,e.push(l))})),e.length-r}function A(e,t,i){return l(this,arguments,void 0,(function*(e,t,i,a="1=1"){const o=[],r={},l=e.createQuery();l.where=a;const n=(yield e.queryObjectIds(l))||[],s=F(e,i);for(let a=0;a<n.length&&o.length<i;a+=s){const l=e.createQuery();l.objectIds=n.slice(a,a+s),l.outFields=[t],l.returnGeometry=!1;const c=yield e.queryFeatures(l);O(o,r,(null==c?void 0:c.features)||[],t,i)}return S(o)}))}function M(e,t,i){return l(this,arguments,void 0,(function*(e,t,i,a="1=1"){const o=Math.max(1,Math.floor(i||r.maxUniqueValues)),n=F(e,o);try{const i=yield function(e,t,i){return l(this,arguments,void 0,(function*(e,t,i,a="1=1"){const o=[],r={},l=F(e,i),n=Math.ceil(i/l)+2;let s=0;for(let c=0;c<n&&o.length<i;c+=1){const n=e.createQuery();n.where=a,n.outFields=[t],n.returnGeometry=!1,n.num=Math.min(l,i-o.length),n.start=s,n.resultOffset=s,n.resultRecordCount=n.num,n.returnDistinctValues=!0,n.orderByFields=[t];const c=yield e.queryFeatures(n),d=(null==c?void 0:c.features)||[];if(0===d.length)break;const p=O(o,r,d,t,i);if(s+=d.length,0===p)throw new Error("The folio query did not advance to a new page of distinct values.")}return S(o)}))}(e,t,o,a);return i.length<o&&i.length>=n-1?yield A(e,t,o,a):i}catch(i){return console.warn("Paged distinct folio query failed; falling back to object ID paging.",i),A(e,t,o,a)}}))}function L(e,t){return(null==e?void 0:e.title)||(null==e?void 0:e.name)||t||"Not selected"}function $(e){const t=e;return t?(void 0===t.__pscOriginalTitle&&(t.__pscOriginalTitle=t.title||t.name||""),t.__pscOriginalTitle||t.title||t.name||""):""}function V(e){return e?(void 0===e.__pscOriginalName&&(e.__pscOriginalName=e.name||e.label||""),e.__pscOriginalName||e.name||e.label||""):""}function I(e,t,i){const a=null==e?void 0:e.layer;if(!a)return;const o=a;$(a);const r=e=>{V(e)};Array.isArray(o.templates)&&o.templates.forEach(r),Array.isArray(o.types)&&o.types.forEach((e=>{!function(e){e&&(void 0===e.__pscOriginalName&&(e.__pscOriginalName=e.name||e.label||""),e.__pscOriginalName||e.name||e.label)}(e),Array.isArray(null==e?void 0:e.templates)&&e.templates.forEach(r)}))}function z(e){const t=null==e?void 0:e.formTemplate;return(null==t?void 0:t.clone)?t.clone():t}function U(e){let t=0,i=0;const a=e=>{(e||[]).forEach((e=>{t+=1,"relationship"===(null==e?void 0:e.type)&&(i+=1),(null==e?void 0:e.elements)&&a(e.elements)}))};return a(e||[]),{total:t,relationships:i}}function D(e){const t=e,i=((null==t?void 0:t.templates)||[]).length,a=((null==t?void 0:t.types)||[]).reduce(((e,t)=>e+((null==t?void 0:t.templates)||[]).length),0);return i||a||0}function W(e){const t=e,i=[];Array.isArray(null==t?void 0:t.templates)&&i.push(...t.templates),Array.isArray(null==t?void 0:t.types)&&t.types.forEach((e=>{Array.isArray(null==e?void 0:e.templates)&&i.push(...e.templates)}));const a={};return i.filter((e=>{var t;const i=(null==e?void 0:e.name)||(null==e?void 0:e.label)||JSON.stringify((null===(t=null==e?void 0:e.prototype)||void 0===t?void 0:t.attributes)||{});return!a[i]&&(a[i]=!0,!0)}))}function B(e,t){var i;const a=e,o=null===(i=null==a?void 0:a.capabilities)||void 0===i?void 0:i.operations;return o&&Object.prototype.hasOwnProperty.call(o,t)?!1!==o[t]:!1!==(null==a?void 0:a.editingEnabled)}function q(e,t,i){return{layer:e,formTemplate:t?z(e):void 0,enabled:t,addEnabled:t&&B(e,"supportsAdd"),updateEnabled:t&&i.allowUpdateExisting&&B(e,"supportsUpdate"),deleteEnabled:t&&i.allowDeleteExisting&&B(e,"supportsDelete"),attributeUpdatesEnabled:t,geometryUpdatesEnabled:t&&i.allowUpdateExisting,attachmentsOnCreateEnabled:t&&i.enableAttachments,attachmentsOnUpdateEnabled:t&&i.enableAttachments&&i.allowUpdateExisting}}function P(e,t,i,a,o){var r,l,n;if(!a.enableRelatedRecords)return[];if(0===U((null==t?void 0:t.elements)||[]).relationships)return[];const s=(null==e?void 0:e.relationships)||[],c=(null===(n=null===(l=null===(r=null==i?void 0:i.map)||void 0===r?void 0:r.allTables)||void 0===l?void 0:l.toArray)||void 0===n?void 0:n.call(l))||[],d=[];return s.forEach((e=>{const t=c.find((t=>t.layerId===e.relatedTableId)),i=p(t)||(null==t?void 0:t.id)||(null==t?void 0:t.title);t&&!o[i]&&(o[i]=!0,d.push({layer:t,enabled:!0,addEnabled:!0,updateEnabled:a.allowUpdateExisting,deleteEnabled:a.allowDeleteExisting,attributeUpdatesEnabled:!0,attachmentsOnCreateEnabled:a.enableAttachments,attachmentsOnUpdateEnabled:a.enableAttachments&&a.allowUpdateExisting,formTemplate:z(t)}))})),d}function J(e,t,i,a,o){const r=[],l={},n={};if(e.forEach((e=>{const s=e.layer;if(!s||"feature"!==s.type)return;const c=p(s,e.layerView)||L(s);if(l[c])return;l[c]=!0;const d=function(e,t,i){const a=e.layer;if(!a)return!1;if(m(a,t))return!0;const o=i.editorLayerVisibility||{},r=u(a,e.layerView),l=Object.keys(o).length>0,n=r.find((e=>Object.prototype.hasOwnProperty.call(o,e)));return n?!0===o[n]:!l&&!1===i.restrictEditorToEditLayer}(e,t,a);I(e);const f=q(s,d,o);r.push(f),d&&r.push(...P(s,f.formTemplate,i,o,n))})),t&&!r.some((e=>m(e.layer,t)))){I({layer:t},0,a.editLayer);const e=q(t,!0,o);r.unshift(e),r.push(...P(t,e.formTemplate,i,o,n))}return r}const H=n=>{var s,p;const{config:u,useMapWidgetIds:m}=n,g=function(e){return Object.assign(Object.assign({},r),e||{})}(u),h=null==m?void 0:m[0],v=g.parcelFolioField||r.parcelFolioField,y=g.editFolioField||r.editFolioField,w=g.joinFormat||r.joinFormat,S=g.maxUniqueValues||r.maxUniqueValues,[R,F]=e.React.useState(null),[O,A]=e.React.useState([]),[$,V]=e.React.useState([]),[I,z]=e.React.useState([]),[B,q]=e.React.useState(""),[P,H]=e.React.useState(!1),[Q,Z]=e.React.useState(!1),[G,K]=e.React.useState(""),[X,Y]=e.React.useState(!1),[ee,te]=e.React.useState(0),[ie,ae]=e.React.useState({type:"",text:"Select folios, apply the selection, then start the create workflow and drop a new development point on the map."}),oe=e.React.useRef(null),re=e.React.useRef(null),le=e.React.useRef(null),ne=e.React.useRef(""),se=e.React.useRef(""),ce=e.React.useRef(0),de=e.React.useMemo((()=>d(R,g.parcelLayer)),[R,g.parcelLayer]),pe=e.React.useMemo((()=>d(R,g.editLayer)),[R,g.editLayer]),ue=de.layer,me=pe.layer,fe=e.React.useMemo((()=>function(e,t){const i=j(e);return"comma"===t?i.join(", "):"semicolon"===t?i.join("; "):"newline"===t?i.join("\n"):i.join(" ")}($,w)),[$,w]),ge=e.React.useMemo((()=>{var e;return U((null===(e=null==me?void 0:me.formTemplate)||void 0===e?void 0:e.elements)||[])}),[me]),he=!!(h&&ue&&me&&v&&y),ve=e.React.useMemo((()=>R?x(f(R),g):{}),[R,g.autoCleanEditorLabels,g.editorLayerAliases,g.editorTemplateAliases]);e.React.useEffect((()=>{ne.current=fe}),[fe]),e.React.useEffect((()=>{const e=oe.current;if(!e)return;b(e,ve);const t=new MutationObserver((()=>{b(e,ve)}));return t.observe(e,{childList:!0,subtree:!0,characterData:!0}),()=>{t.disconnect()}}),[ve,ee]);const xe=e.React.useCallback((()=>{le.current&&(le.current.remove(),le.current=null)}),[]),ye=e.React.useCallback((()=>{re.current&&!re.current.destroyed&&re.current.destroy(),re.current=null,oe.current&&(oe.current.innerHTML=""),K(""),Y(!1)}),[]),be=e.React.useCallback((e=>l(void 0,void 0,void 0,(function*(){if((null==R?void 0:R.view)&&0!==e.length)try{let t=null;e.forEach((e=>{var i;const a=null===(i=e.geometry)||void 0===i?void 0:i.extent;a&&(t=t?t.union(a):a.clone())})),t?yield R.view.goTo(t.expand(1.18)):yield R.view.goTo(e)}catch(e){console.warn("Unable to zoom to selected parcels.",e)}}))),[R]),we=e.React.useCallback((e=>l(void 0,void 0,void 0,(function*(){if(xe(),!1!==g.autoHighlight&&(null==R?void 0:R.view)&&ue&&0!==e.length)try{const t=yield R.view.whenLayerView(ue);le.current=t.highlight(e)}catch(e){console.warn("Unable to highlight selected parcels.",e)}}))),[g.autoHighlight,xe,R,ue]),je=e.React.useCallback(((e=!1)=>{var t,i,a,o,r;const l=re.current,n=ne.current;if(!(l&&me&&y&&n))return!1;const s=l.viewModel,c=(null==s?void 0:s.featureFormViewModel)||(null==s?void 0:s.formViewModel),d=(null==c?void 0:c.feature)||(null===(i=null===(t=null==s?void 0:s.activeWorkflow)||void 0===t?void 0:t.data)||void 0===i?void 0:i.feature)||(null===(o=null===(a=null==s?void 0:s.activeWorkflow)||void 0===a?void 0:a.data)||void 0===o?void 0:o.editFeature);let p=!1;if(d&&(d.attributes=Object.assign(Object.assign({},d.attributes||{}),{[y]:n}),p=!0),c){const e=c.layer||(null==d?void 0:d.layer);if(!e||e===me||(null==e?void 0:e.id)===me.id)try{null===(r=c.setValue)||void 0===r||r.call(c,y,n),p=!0}catch(e){console.warn("Could not set form value through FeatureFormViewModel.",e)}}return p&&(e||se.current!==n)&&(se.current=n,ae({type:"ok",text:`Smart form is active. ${y} was populated with: ${n}`})),p}),[y,me]),ke=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){var e;if((null==R?void 0:R.view)&&me&&oe.current)try{yield me.load();const t={allowUpdateExisting:!0===g.allowUpdateExisting,allowDeleteExisting:!0===g.allowDeleteExisting,enableAttachments:!1!==g.enableAttachments,enableRelatedRecords:!1!==g.enableRelatedRecords},i=f(R);yield Promise.all(i.map((e=>l(void 0,void 0,void 0,(function*(){var t,i;try{yield null===(i=null===(t=e.layer)||void 0===t?void 0:t.load)||void 0===i?void 0:i.call(t)}catch(e){console.warn("Editor layer could not be loaded.",e)}})))));const o=J(i,me,R.view,g,t);ye(),Y(!1);const r=document.createElement("div");r.className="psc-editor-inner",oe.current.appendChild(r);const n=new a.default({container:r,view:R.view,layerInfos:o});n.layerInfos=o;const s=t.allowUpdateExisting||t.allowDeleteExisting;n.visibleElements=Object.assign(Object.assign({},n.visibleElements||{}),{createFeaturesSection:!0,editFeaturesSection:s,settingsMenu:!1!==g.enableSnapping||!1!==g.enableTooltips,snappingControls:!1!==g.enableSnapping,snappingControlsElements:{enabledToggle:!1!==g.enableSnapping,selfEnabledToggle:!1!==g.enableSnapping,featureEnabledToggle:!1!==g.enableSnapping,layerList:!1!==g.enableSnapping,layerListToggleLayersButton:!1!==g.enableSnapping},tooltipsToggle:!1!==g.enableTooltips});try{n.tooltipOptions.enabled=!1!==g.enableTooltips,n.snappingOptions.enabled=!1!==g.enableSnapping,n.snappingOptions.selfEnabled=!1!==g.enableSnapping,n.snappingOptions.featureEnabled=!1!==g.enableSnapping}catch(e){console.warn("Editor snapping or tooltip options could not be applied.",e)}n.supportingWidgetDefaults={featureTemplates:{visibleElements:{filter:!1!==g.showTemplateFilter}},featureForm:{groupDisplay:"sequential"}},re.current=n,te((e=>e+1));const c=U((null===(e=null==me?void 0:me.formTemplate)||void 0===e?void 0:e.elements)||[]),d=o.filter((e=>(null==e?void 0:e.enabled)&&(null==e?void 0:e.layer)&&"feature"===e.layer.type)).length;ae({type:"ok",text:`Connected to ${L(me)}. Editor is showing ${d} checked layer${1===d?"":"s"} and hiding unchecked web map layers. Primary smart form has ${c.total} elements, feature templates (${D(me)}), and layer symbology.`})}catch(e){console.error(e),ae({type:"error",text:"Could not initialize the embedded Esri Editor from the selected web map layer."})}}))),[g.allowDeleteExisting,g.allowUpdateExisting,g.autoCleanEditorLabels,g.editorLayerAliases,g.editorLayerVisibility,g.editorTemplateAliases,g.enableAttachments,g.enableRelatedRecords,g.enableSnapping,g.enableTooltips,g.restrictEditorToEditLayer,g.showTemplateFilter,ye,me,R]);e.React.useEffect((()=>(ke(),()=>{ye()})),[ke,ye]),e.React.useEffect((()=>{var e;const t=re.current;if(!t)return;const i=[],a=()=>{window.setTimeout((()=>{je(!1)}),30),window.setTimeout((()=>{je(!1)}),250)};try{i.push(o.watch((()=>{var e;return null===(e=t.viewModel)||void 0===e?void 0:e.state}),(e=>{K(e||""),["awaiting-feature-creation-info","creating-features","editing-attributes","editing-new-feature"].includes(e)&&a()}),{initial:!0})),i.push(o.watch((()=>{var e;return null===(e=t.viewModel)||void 0===e?void 0:e.featureFormViewModel}),(e=>{e&&a()}),{initial:!0})),i.push(o.watch((()=>t.activeWorkflow),(e=>{Y(!!e),a()}),{initial:!0}));const r=null===(e=t.on)||void 0===e?void 0:e.call(t,"sketch-create",(e=>{const t=function(e){var t,i,a,o;return(null===(t=null==e?void 0:e.detail)||void 0===t?void 0:t.graphic)||(null==e?void 0:e.graphic)||(null===(a=null===(i=null==e?void 0:e.detail)||void 0===i?void 0:i.graphics)||void 0===a?void 0:a[0])||(null===(o=null==e?void 0:e.graphics)||void 0===o?void 0:o[0])}(e),i=ne.current;t&&i&&(t.attributes=Object.assign(Object.assign({},t.attributes||{}),{[y]:i})),a()}));r&&i.push(r)}catch(e){console.warn("Editor form watchers could not be registered.",e)}return()=>{i.forEach((e=>{var t;return null===(t=null==e?void 0:e.remove)||void 0===t?void 0:t.call(e)}))}}),[y,ee,je]),e.React.useEffect((()=>{je(!1)}),[fe,je]);const Ne=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){const e=re.current;if(e&&me)if(ne.current)try{if(yield me.load(),e.activeWorkflow)try{yield e.cancelWorkflow()}catch(e){console.warn(e)}const t=g.templateStartMode||r.templateStartMode;if("template-picker"===t){const t=e.viewModel;return(null==t?void 0:t.startCreateFeaturesWorkflowAtFeatureTypeSelection)?yield t.startCreateFeaturesWorkflowAtFeatureTypeSelection():(null==e?void 0:e.startCreateFeaturesWorkflowAtFeatureTypeSelection)&&(yield e.startCreateFeaturesWorkflowAtFeatureTypeSelection()),ae({type:"warn",text:`Choose the ${L(me)} template in the Editor panel, then click the map to drop the new development point. ${y} will auto-populate with ${ne.current}.`}),void window.setTimeout((()=>{je(!1)}),250)}const i=function(e,t,i){const a=W(e);if(0===a.length)return null;if("configured-template"===t&&i){const e=a.find((e=>{const t=null==e?void 0:e.__pscOriginalName;return(null==e?void 0:e.name)===i||(null==e?void 0:e.label)===i||t===i}));if(e)return e}return a[0]}(me,t,g.editTemplateName);if(i&&(null==e?void 0:e.startCreateFeaturesWorkflowAtFeatureCreation)){const t=function(e,t,i){if(!e)return e;const a=e.clone?e.clone():e,o=a.prototype||{},r=Object.assign(Object.assign({},o.attributes||{}),{[t]:i});try{a.prototype||(a.prototype={}),a.prototype.attributes=r}catch(e){try{a.prototype.attributes[t]=i}catch(e){}}return a}(i,y,ne.current);return yield e.startCreateFeaturesWorkflowAtFeatureCreation({layer:me,template:t,maxFeatures:1}),ae({type:"warn",text:`Click the map to drop the new development point. ${y} is preloaded with ${ne.current}.`}),void window.setTimeout((()=>{je(!1)}),250)}const a=e.viewModel;(null==a?void 0:a.startCreateFeaturesWorkflowAtFeatureTypeSelection)?yield a.startCreateFeaturesWorkflowAtFeatureTypeSelection():(null==e?void 0:e.startCreateFeaturesWorkflowAtFeatureTypeSelection)&&(yield e.startCreateFeaturesWorkflowAtFeatureTypeSelection()),ae({type:"warn",text:`No feature template was detected, so the template picker opened. Choose a template and drop the point on the map. ${y} will auto-populate with ${ne.current}.`}),window.setTimeout((()=>{je(!1)}),250)}catch(e){console.error(e),ae({type:"error",text:"Could not start the create workflow. Check that the edit layer allows Add Features and is visible/editable in the web map."})}else ae({type:"warn",text:"Select at least one folio first. The folio string will auto-fill the smart form."});else ae({type:"warn",text:"Select an editable point layer in the widget settings first."})}))),[g.editTemplateName,g.templateStartMode,y,me,je]),_e=e.React.useCallback(((...e)=>l(void 0,[...e],void 0,(function*(e=""){if(!ue||!v)return;const t=ce.current+1;ce.current=t;const i=N(e);if(i.length>0&&i.length<2)return H(!1),A([]),void ae({type:"",text:"Type at least 2 characters to search folios, or type/paste exact folios and click Add."});const a=i.length>=2,o=Math.max(1,Math.min(a?250:100,S||r.maxUniqueValues)),l=a?C(ue,v,i):"1=1";H(!0);try{yield ue.load();const e=yield M(ue,v,o,l);if(t!==ce.current)return;if(A(e),a){const t=e.length>=o?" Refine the search to narrow the list.":"";ae({type:"ok",text:`Loaded ${e.length} folio match${1===e.length?"":"es"} for "${i}" from ${L(ue)}.${t}`})}else ae({type:"ok",text:`Loaded the first ${e.length} folio values from ${L(ue)}. Type at least 2 characters to search more.`})}catch(e){if(t!==ce.current)return;console.error(e),ae({type:"error",text:"Could not load folio values from the parcel layer. Check the widget settings and layer permissions."})}finally{t===ce.current&&H(!1)}}))),[S,v,ue]);e.React.useEffect((()=>{A([]),V([]),z([]),xe(),ce.current+=1}),[ue,v]),e.React.useEffect((()=>{if(!he)return;const e=N(B);if(e.length>0&&e.length<2)return ce.current+=1,H(!1),A([]),void ae({type:"",text:"Type at least 2 characters to search folios, or type/paste exact folios and click Add."});const t=window.setTimeout((()=>{_e(e)}),e?300:0);return()=>{window.clearTimeout(t)}}),[he,_e,B]),e.React.useEffect((()=>()=>{xe(),ye()}),[xe,ye]);const Ee=e.React.useCallback((e=>{const t=j(e);0!==t.length&&V((e=>j(e.concat(t))))}),[]),Te=e.React.useCallback((e=>{V((t=>t.filter((t=>t!==e))))}),[]),Ce=e.React.useCallback(((e,t)=>{t?Ee([e]):Te(e)}),[Ee,Te]),Se=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){if(!ue||0===$.length)return z([]),xe(),void ae({type:"warn",text:"Select one or more folios before applying."});Z(!0);try{yield ue.load();const e=ue.createQuery();e.where=function(e,t,i){const a=_(e,t),o=E(a),r=(null==a?void 0:a.name)||t,l=j(i).map((e=>T(e,o)));return 0===l.length?"1=0":`${r} IN (${l.join(",")})`}(ue,v,$),e.outFields=["*"],e.returnGeometry=!0;const t=yield ue.queryFeatures(e),i=(null==t?void 0:t.features)||[];z(i),yield we(i),!1!==g.autoZoom&&(yield be(i)),je(!1),ae({type:"ok",text:`Selected ${i.length} parcel feature${1===i.length?"":"s"} for ${$.length} folio${1===$.length?"":"s"}. Folio string: ${ne.current}`})}catch(e){console.error(e),ae({type:"error",text:"Could not query selected parcels. Check the folio field and layer query capability."})}finally{Z(!1)}}))),[g.autoZoom,xe,we,je,v,ue,$,be]),Re=e.React.useMemo((()=>N(B)),[B]),Fe=e.React.useMemo((()=>O.slice(0,250)),[O]),Oe=e.React.useMemo((()=>Re.length>0&&Re.length<2?"Type at least 2 characters to search folios, or type/paste exact folios and click Add.":Re.length>=2?"No matching folios found. Try a different prefix or type the full folio and click Add.":"Showing an initial sample. Type at least 2 characters to search the parcel layer."),[Re]),Ae=e.React.useMemo((()=>{const e={};return $.forEach((t=>{e[t]=!0})),e}),[$]);return h?(0,e.jsx)("div",{className:"jimu-widget psc-widget",css:c()},(0,e.jsx)("div",{className:"psc-app"},(0,e.jsx)("div",{className:"psc-topbar"},(0,e.jsx)("div",{className:"psc-brand"},(0,e.jsx)("div",{className:"psc-brand-icon"},"ID"),(0,e.jsx)("div",{className:"min-w-0"},(0,e.jsx)("div",{className:"psc-brand-title"},"Input Developments"),(0,e.jsx)("div",{className:"psc-brand-subtitle"},"Query multiple folios, review parcels, and use your web map smart form to create a development point."))),(0,e.jsx)("div",{className:"psc-top-actions"},(0,e.jsx)("div",{className:"psc-connected"},(0,e.jsx)("span",{className:"psc-dot"}),he?"Web map connected":"Needs settings"),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",onClick:()=>{V([]),z([]),xe(),ae({type:"",text:"Cleared selected folios and parcel highlight."})}},"Clear All"))),(0,e.jsx)("div",{className:"psc-shell"},(0,e.jsx)("div",{className:"psc-left"},(0,e.jsx)("div",{className:"psc-card"},(0,e.jsx)("div",{className:"psc-card-header"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"psc-title"},"1. Search and select folios"),(0,e.jsx)("div",{className:"psc-subtitle"},"Multi-select folios from the parcel layer.")),P&&(0,e.jsx)("span",{className:"psc-loading"},(0,e.jsx)(i.Loading,{type:"DONUT",width:14,height:14})," Loading")),(0,e.jsx)("div",{className:"psc-card-body"},(0,e.jsx)("div",{className:"psc-layer-status"},(0,e.jsx)("div",{className:"psc-chip"},(0,e.jsx)("span",null,"Parcel layer: ",L(ue,null===(s=g.parcelLayer)||void 0===s?void 0:s.layerTitle))),(0,e.jsx)("div",{className:"psc-chip"},(0,e.jsx)("span",null,"Folio field: ",v))),!he&&(0,e.jsx)("div",{className:"psc-empty"},"Finish widget settings: select parcel layer, edit layer, and both FOLIO fields."),he&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"psc-input-row"},(0,e.jsx)(i.TextInput,{value:B,placeholder:"Search by folio prefix or type exact folio(s)...",allowClear:!0,onChange:e=>{q(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&Ee(k(B))}}),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",onClick:()=>{Ee(k(B))}},"Add")),(0,e.jsx)("div",{className:"psc-row-spread mb-2"},(0,e.jsx)("span",{className:"psc-subtitle"},$.length," selected | ",Fe.length," shown"),(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",onClick:()=>{_e(B)}},"Refresh values")),(0,e.jsx)("div",{className:"psc-options"},0===Fe.length&&(0,e.jsx)("div",{className:"psc-empty",style:{margin:8}},Oe),Fe.map((t=>{const a=!!Ae[t];return(0,e.jsx)("label",{key:t,className:"psc-option "+(a?"is-selected":"")},(0,e.jsx)(i.Checkbox,{checked:a,onChange:e=>{Ce(t,e.target.checked)}}),(0,e.jsx)("span",{className:"psc-option-label"},t))}))),(0,e.jsx)("div",{className:"psc-row mt-3"},(0,e.jsx)(i.Button,{type:"primary",disabled:0===$.length||Q,onClick:Se},Q?"Applying...":`Apply Selection (${$.length})`),(0,e.jsx)(i.Button,{type:"secondary",disabled:0===$.length,onClick:()=>{V([]),z([]),xe()}},"Clear"))))),(0,e.jsx)("div",{className:"psc-card"},(0,e.jsx)("div",{className:"psc-card-header"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"psc-title"},"2. Selected folios (",$.length,")"),(0,e.jsx)("div",{className:"psc-subtitle"},I.length," parcel feature",1===I.length?"":"s"," selected on the map.")),(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",disabled:!fe,onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(fe)}},"Copy")),(0,e.jsx)("div",{className:"psc-card-body"},0===$.length&&(0,e.jsx)("div",{className:"psc-empty"},"Selected folios will show here."),$.length>0&&(0,e.jsx)("div",{className:"psc-table-wrap"},(0,e.jsx)("table",{className:"psc-table"},(0,e.jsx)("thead",null,(0,e.jsx)("tr",null,(0,e.jsx)("th",{style:{width:50}},"#"),(0,e.jsx)("th",null,"FOLIO"),(0,e.jsx)("th",{style:{width:74}}))),(0,e.jsx)("tbody",null,$.map(((t,a)=>(0,e.jsx)("tr",{key:t},(0,e.jsx)("td",null,a+1),(0,e.jsx)("td",{className:"code"},t),(0,e.jsx)("td",null,(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",onClick:()=>{Te(t)}},"Remove")))))))),(0,e.jsx)("div",{className:"psc-folio-string"},(0,e.jsx)("div",{className:"psc-row-spread"},(0,e.jsx)("strong",null,"Folio String auto-created"),(0,e.jsx)("span",{className:"psc-subtitle"},w)),(0,e.jsx)("div",{className:"psc-string-box"},(0,e.jsx)("div",{className:"psc-string-value",title:fe},fe||"No folios selected"),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",disabled:!fe,onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(fe)}},"Copy")),(0,e.jsx)("div",{className:"psc-footer-note"},"This exact string is pushed into the Editor smart form field: ",y)),(0,e.jsx)("div",{className:"psc-row mt-3"},(0,e.jsx)(i.Button,{type:"primary",disabled:0===I.length,onClick:()=>{be(I)}},"Zoom to Selected Parcels"),(0,e.jsx)(i.Button,{type:"secondary",disabled:!fe,onClick:()=>{je(!0)}},"Push Folio to Form"))))),(0,e.jsx)("div",{className:"psc-card psc-editor-card "+(X?"is-workflow-active-card":"is-template-picker-card")},(0,e.jsx)("div",{className:"psc-card-header"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"psc-title"},"3. Create feature with web map smart form"),(0,e.jsx)("div",{className:"psc-subtitle"},"Embedded Esri Editor using the selected layer from your web map.")),(0,e.jsx)("div",{className:"psc-chip green"},(0,e.jsx)("span",null,"Auto-fill ",y))),(0,e.jsx)("div",{className:"psc-editor-toolbar"},(0,e.jsx)("div",{className:"psc-layer-status"},(0,e.jsx)("div",{className:"psc-chip"},(0,e.jsx)("span",null,"Edit layer: ",L(me,null===(p=g.editLayer)||void 0===p?void 0:p.layerTitle))),(0,e.jsx)("div",{className:"psc-chip neutral"},(0,e.jsx)("span",null,"Smart form: ",ge.total," elements, ",ge.relationships," relationships")),(0,e.jsx)("div",{className:"psc-chip neutral"},(0,e.jsx)("span",null,"Templates: ",D(me)," | State: ",G||"loading"))),(0,e.jsx)("div",{className:"psc-folio-string",style:{marginTop:0}},(0,e.jsx)("strong",null,y),(0,e.jsx)("div",{className:"psc-string-box"},(0,e.jsx)("div",{className:"psc-string-value",title:fe},fe||"Select folios first"),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",disabled:!fe,onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(fe)}},"Copy"))),(0,e.jsx)("div",{className:"psc-row"},(0,e.jsx)(i.Button,{type:"primary",disabled:!he||!fe,onClick:Ne},"Start New Development Point"),(0,e.jsx)(i.Button,{type:"secondary",disabled:!fe,onClick:()=>{je(!0)}},"Re-apply Folio String")),(0,e.jsx)("div",{className:`psc-status ${ie.type}`,style:{margin:0}},ie.text)),(0,e.jsx)("div",{className:"psc-editor-container "+(X?"is-workflow-active":"is-template-picker")},!he&&(0,e.jsx)("div",{className:"psc-empty psc-editor-empty"},"Configure the widget settings before using the smart form."),(0,e.jsx)("div",{className:"psc-editor-host",ref:oe})))),(0,e.jsx)("div",{className:"psc-workflow-strip"},(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Search"),"Select multiple folios from the web map parcel layer."),(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Review"),"Highlight and zoom the selected parcels in the Map widget."),(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Create"),"Use Editor to pick the template and drop the point on the map."),(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Smart form"),"The web map form, domains, templates, relationships, and symbology stay intact."))),(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:h,onActiveViewChange:e=>l(void 0,void 0,void 0,(function*(){e&&(yield e.whenJimuMapViewLoaded(),yield e.whenAllJimuLayerViewLoaded()),F(e)}))})):(0,e.jsx)("div",{className:"jimu-widget psc-widget",css:c()},(0,e.jsx)("div",{className:"psc-empty",style:{margin:12}},"Configure this widget by selecting the Map widget that contains your parcel layer and development point edit layer."))};function Q(e){n.p=e}})(),s})())}}}));