System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/widgets/Editor","esri/core/reactiveUtils"],(function(e,t){var i={},a={},o={},r={},l={};return{setters:[function(e){i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.Button=e.Button,o.Checkbox=e.Checkbox,o.Loading=e.Loading,o.TextInput=e.TextInput},function(e){r.default=e.default},function(e){l.watch=e.watch}],execute:function(){e((()=>{var e={2243:e=>{"use strict";e.exports=l},8816:e=>{"use strict";e.exports=r},2686:e=>{"use strict";e.exports=a},9244:e=>{"use strict";e.exports=i},4321:e=>{"use strict";e.exports=o}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var s={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(s),n.d(s,{__set_webpack_public_path__:()=>I,default:()=>V});var e=n(9244),t=n(2686),i=n(4321),a=n(8816),o=n(2243);const r={parcelFolioField:"FOLIO",editFolioField:"FOLIO",joinFormat:"space",maxUniqueValues:2e3,autoZoom:!0,autoHighlight:!0,templateStartMode:"first-template",editTemplateName:"",editorLayerVisibility:{},editorLayerAliases:{},editorTemplateAliases:{},autoCleanEditorLabels:!0,restrictEditorToEditLayer:!0,allowUpdateExisting:!1,allowDeleteExisting:!1,enableAttachments:!0,enableRelatedRecords:!0,showTemplateFilter:!0,enableSnapping:!0,enableTooltips:!0,autoSyncFolioToSmartForm:!0};var l=function(e,t,i,a){return new(i||(i=Promise))((function(o,r){function l(e){try{s(a.next(e))}catch(e){r(e)}}function n(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,n)}s((a=a.apply(e,t||[])).next())}))};const c=()=>e.css`
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
`;function d(e,t){if(!e||!t)return{};const i=e.jimuLayerViews||{};let a=null;t.jimuLayerViewId&&i[t.jimuLayerViewId]&&(a=i[t.jimuLayerViewId]),a||(a=Object.values(i).find((e=>{const i=null==e?void 0:e.layer;return(null==e?void 0:e.layerDataSourceId)===t.layerDataSourceId||(null==i?void 0:i.id)===t.layerId||(null==i?void 0:i.title)===t.layerTitle||(null==i?void 0:i.__pscOriginalTitle)===t.layerTitle})));return{layerView:a,layer:null==a?void 0:a.layer}}function p(e,t,i){const a=e;return(null==t?void 0:t.layerDataSourceId)||(null==i?void 0:i.layerDataSourceId)||(null==a?void 0:a.id)||(null==i?void 0:i.layerId)||(null==a?void 0:a.__pscOriginalTitle)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||(null==i?void 0:i.layerTitle)||(null==t?void 0:t.id)||(null==i?void 0:i.jimuLayerViewId)||""}function u(e,t,i){const a=e;return j([null==t?void 0:t.layerDataSourceId,null==i?void 0:i.layerDataSourceId,null==a?void 0:a.id,null==i?void 0:i.layerId,null==a?void 0:a.__pscOriginalTitle,null==a?void 0:a.title,null==a?void 0:a.name,null==i?void 0:i.layerTitle,null==t?void 0:t.id,null==i?void 0:i.jimuLayerViewId].filter(Boolean).map((e=>String(e))))}function m(e,t){if(!e||!t)return!1;const i=e,a=t;return e===t||!!i.id&&i.id===a.id||!!i.title&&i.title===a.title||!!i.__pscOriginalTitle&&i.__pscOriginalTitle===a.title||!!a.__pscOriginalTitle&&a.__pscOriginalTitle===i.title||!!i.__pscOriginalTitle&&!!a.__pscOriginalTitle&&i.__pscOriginalTitle===a.__pscOriginalTitle}function f(e){var t,i,a;if(!(null==e?void 0:e.view))return[];const o=[],r={},l=(e,t)=>{if(!e||"feature"!==e.type)return;const i=p(e,t)||o.length+"";r[i]||(r[i]=!0,o.push({layer:e,layerView:t}))};((null===(a=null===(i=null===(t=e.view.map)||void 0===t?void 0:t.allLayers)||void 0===i?void 0:i.toArray)||void 0===a?void 0:a.call(i))||[]).forEach((t=>l(t,function(e,t){return Object.values((null==e?void 0:e.jimuLayerViews)||{}).find((e=>m(null==e?void 0:e.layer,t)))}(e,t))));return Object.values(e.jimuLayerViews||{}).forEach((e=>l(null==e?void 0:e.layer,e))),o}function g(e){return String(e||"").replace(/_/g," ").replace(/\s+/g," ").trim()}function v(e,t,i){const a=i.editorTemplateAliases||{},o=function(e,t){return u(e.layer,e.layerView).map((e=>`${e}::${t}`))}(e,t),r=o.find((e=>{var t;return null===(t=a[e])||void 0===t?void 0:t.trim()})),l=r?a[r].trim():"";return l||(!1===i.autoCleanEditorLabels?t:g(t))}function h(e,t,i){const a=String(t||"").trim(),o=String(i||"").trim();a&&o&&a!==o&&(e[a]||(e[a]=o))}function b(e,t){const i={};return e.forEach((e=>{const a=e.layer;if(!a)return;const o=a,r=function(e,t){const i=e.layer,a=i,o=(null==a?void 0:a.__pscOriginalTitle)||(null==a?void 0:a.title)||(null==a?void 0:a.name)||"",r=t.editorLayerAliases||{},l=u(i,e.layerView).find((e=>{var t;return null===(t=r[e])||void 0===t?void 0:t.trim()}));return(l?r[l].trim():"")||(!1===t.autoCleanEditorLabels?o:g(o))}(e,t),l=E(a);h(i,l,r),h(i,o.title,r),h(i,o.name,r),O(a).forEach((a=>{j([T(a),null==a?void 0:a.name,null==a?void 0:a.label,null==a?void 0:a.displayName,null==a?void 0:a.title].filter(Boolean).map((e=>String(e)))).forEach((a=>{const o=v(e,a,t);h(i,a,o)}))}))})),i}function x(e,t){var i,a;const o=t[String(e||"").trim()];if(!o)return e;return`${(null===(i=e.match(/^\s*/))||void 0===i?void 0:i[0])||""}${o}${(null===(a=e.match(/\s*$/))||void 0===a?void 0:a[0])||""}`}function y(e,t){if(!e||0===Object.keys(t).length)return;const i=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),a=[];let o=i.nextNode();for(;o;)a.push(o),o=i.nextNode();a.forEach((e=>{const i=e.parentElement;if(!i||"true"===i.getAttribute("data-psc-alias-applied"))return;const a=e.textContent||"",o=x(a,t);o!==a&&(e.textContent=o,i.setAttribute("data-psc-alias-applied","true"))}));e.querySelectorAll("[title], [aria-label]").forEach((e=>{["title","aria-label"].forEach((i=>{const a=e.getAttribute(i);if(!a||"true"===e.getAttribute(`data-psc-${i}-alias-applied`))return;const o=x(a,t);o!==a&&(e.setAttribute(i,o),e.setAttribute(`data-psc-${i}-alias-applied`,"true"))}))}))}function w(e){return null==e?"":String(e).trim()}function j(e){const t={},i=[];return e.forEach((e=>{const a=w(e);a&&!t[a]&&(t[a]=!0,i.push(a))})),i}function k(e){return j((e||"").split(/[\s,;]+/g))}function _(e,t,i){const a=function(e,t){var i;return null===(i=null==e?void 0:e.fields)||void 0===i?void 0:i.find((e=>e.name===t||e.alias===t))}(e,t),o=function(e){return["oid","small-integer","integer","single","double","long","big-integer"].includes(null==e?void 0:e.type)}(a),r=(null==a?void 0:a.name)||t,l=j(i).map((e=>function(e,t){return t&&""!==e&&!isNaN(Number(e))?e:`'${String(e).replace(/'/g,"''")}'`}(e,o)));return 0===l.length?"1=0":`${r} IN (${l.join(",")})`}function N(e,t){return(null==e?void 0:e.title)||(null==e?void 0:e.name)||t||"Not selected"}function E(e){const t=e;return t?(void 0===t.__pscOriginalTitle&&(t.__pscOriginalTitle=t.title||t.name||""),t.__pscOriginalTitle||t.title||t.name||""):""}function T(e){return e?(void 0===e.__pscOriginalName&&(e.__pscOriginalName=e.name||e.label||""),e.__pscOriginalName||e.name||e.label||""):""}function C(e,t,i){const a=null==e?void 0:e.layer;if(!a)return;const o=a;E(a);const r=e=>{T(e)};Array.isArray(o.templates)&&o.templates.forEach(r),Array.isArray(o.types)&&o.types.forEach((e=>{!function(e){e&&(void 0===e.__pscOriginalName&&(e.__pscOriginalName=e.name||e.label||""),e.__pscOriginalName||e.name||e.label)}(e),Array.isArray(null==e?void 0:e.templates)&&e.templates.forEach(r)}))}function S(e){const t=null==e?void 0:e.formTemplate;return(null==t?void 0:t.clone)?t.clone():t}function F(e){let t=0,i=0;const a=e=>{(e||[]).forEach((e=>{t+=1,"relationship"===(null==e?void 0:e.type)&&(i+=1),(null==e?void 0:e.elements)&&a(e.elements)}))};return a(e||[]),{total:t,relationships:i}}function R(e){const t=e,i=((null==t?void 0:t.templates)||[]).length,a=((null==t?void 0:t.types)||[]).reduce(((e,t)=>e+((null==t?void 0:t.templates)||[]).length),0);return i||a||0}function O(e){const t=e,i=[];Array.isArray(null==t?void 0:t.templates)&&i.push(...t.templates),Array.isArray(null==t?void 0:t.types)&&t.types.forEach((e=>{Array.isArray(null==e?void 0:e.templates)&&i.push(...e.templates)}));const a={};return i.filter((e=>{var t;const i=(null==e?void 0:e.name)||(null==e?void 0:e.label)||JSON.stringify((null===(t=null==e?void 0:e.prototype)||void 0===t?void 0:t.attributes)||{});return!a[i]&&(a[i]=!0,!0)}))}function A(e,t){var i;const a=e,o=null===(i=null==a?void 0:a.capabilities)||void 0===i?void 0:i.operations;return o&&Object.prototype.hasOwnProperty.call(o,t)?!1!==o[t]:!1!==(null==a?void 0:a.editingEnabled)}function L(e,t,i){return{layer:e,formTemplate:t?S(e):void 0,enabled:t,addEnabled:t&&A(e,"supportsAdd"),updateEnabled:t&&i.allowUpdateExisting&&A(e,"supportsUpdate"),deleteEnabled:t&&i.allowDeleteExisting&&A(e,"supportsDelete"),attributeUpdatesEnabled:t,geometryUpdatesEnabled:t&&i.allowUpdateExisting,attachmentsOnCreateEnabled:t&&i.enableAttachments,attachmentsOnUpdateEnabled:t&&i.enableAttachments&&i.allowUpdateExisting}}function M(e,t,i,a,o){var r,l,n;if(!a.enableRelatedRecords)return[];if(0===F((null==t?void 0:t.elements)||[]).relationships)return[];const s=(null==e?void 0:e.relationships)||[],c=(null===(n=null===(l=null===(r=null==i?void 0:i.map)||void 0===r?void 0:r.allTables)||void 0===l?void 0:l.toArray)||void 0===n?void 0:n.call(l))||[],d=[];return s.forEach((e=>{const t=c.find((t=>t.layerId===e.relatedTableId)),i=p(t)||(null==t?void 0:t.id)||(null==t?void 0:t.title);t&&!o[i]&&(o[i]=!0,d.push({layer:t,enabled:!0,addEnabled:!0,updateEnabled:a.allowUpdateExisting,deleteEnabled:a.allowDeleteExisting,attributeUpdatesEnabled:!0,attachmentsOnCreateEnabled:a.enableAttachments,attachmentsOnUpdateEnabled:a.enableAttachments&&a.allowUpdateExisting,formTemplate:S(t)}))})),d}function $(e,t,i,a,o){const r=[],l={},n={};if(e.forEach((e=>{const s=e.layer;if(!s||"feature"!==s.type)return;const c=p(s,e.layerView)||N(s);if(l[c])return;l[c]=!0;const d=function(e,t,i){const a=e.layer;if(!a)return!1;if(m(a,t))return!0;const o=i.editorLayerVisibility||{},r=u(a,e.layerView),l=Object.keys(o).length>0,n=r.find((e=>Object.prototype.hasOwnProperty.call(o,e)));return n?!0===o[n]:!l&&!1===i.restrictEditorToEditLayer}(e,t,a);C(e);const f=L(s,d,o);r.push(f),d&&r.push(...M(s,f.formTemplate,i,o,n))})),t&&!r.some((e=>m(e.layer,t)))){C({layer:t},0,a.editLayer);const e=L(t,!0,o);r.unshift(e),r.push(...M(t,e.formTemplate,i,o,n))}return r}const V=n=>{var s,p;const{config:u,useMapWidgetIds:m}=n,g=function(e){return Object.assign(Object.assign({},r),e||{})}(u),v=null==m?void 0:m[0],h=g.parcelFolioField||r.parcelFolioField,x=g.editFolioField||r.editFolioField,E=g.joinFormat||r.joinFormat,T=g.maxUniqueValues||r.maxUniqueValues,[C,S]=e.React.useState(null),[A,L]=e.React.useState([]),[M,V]=e.React.useState([]),[I,z]=e.React.useState([]),[U,D]=e.React.useState(""),[W,B]=e.React.useState(!1),[P,q]=e.React.useState(!1),[H,J]=e.React.useState(""),[Q,Z]=e.React.useState(!1),[G,K]=e.React.useState(0),[X,Y]=e.React.useState({type:"",text:"Select folios, apply the selection, then start the create workflow and drop a new development point on the map."}),ee=e.React.useRef(null),te=e.React.useRef(null),ie=e.React.useRef(null),ae=e.React.useRef(""),oe=e.React.useRef(""),re=e.React.useMemo((()=>d(C,g.parcelLayer)),[C,g.parcelLayer]),le=e.React.useMemo((()=>d(C,g.editLayer)),[C,g.editLayer]),ne=re.layer,se=le.layer,ce=e.React.useMemo((()=>function(e,t){const i=j(e);return"comma"===t?i.join(", "):"semicolon"===t?i.join("; "):"newline"===t?i.join("\n"):i.join(" ")}(M,E)),[M,E]),de=e.React.useMemo((()=>{var e;return F((null===(e=null==se?void 0:se.formTemplate)||void 0===e?void 0:e.elements)||[])}),[se]),pe=!!(v&&ne&&se&&h&&x),ue=e.React.useMemo((()=>C?b(f(C),g):{}),[C,g.autoCleanEditorLabels,g.editorLayerAliases,g.editorTemplateAliases]);e.React.useEffect((()=>{ae.current=ce}),[ce]),e.React.useEffect((()=>{const e=ee.current;if(!e)return;y(e,ue);const t=new MutationObserver((()=>{y(e,ue)}));return t.observe(e,{childList:!0,subtree:!0,characterData:!0}),()=>{t.disconnect()}}),[ue,G]);const me=e.React.useCallback((()=>{ie.current&&(ie.current.remove(),ie.current=null)}),[]),fe=e.React.useCallback((()=>{te.current&&!te.current.destroyed&&te.current.destroy(),te.current=null,ee.current&&(ee.current.innerHTML=""),J(""),Z(!1)}),[]),ge=e.React.useCallback((e=>l(void 0,void 0,void 0,(function*(){if((null==C?void 0:C.view)&&0!==e.length)try{let t=null;e.forEach((e=>{var i;const a=null===(i=e.geometry)||void 0===i?void 0:i.extent;a&&(t=t?t.union(a):a.clone())})),t?yield C.view.goTo(t.expand(1.18)):yield C.view.goTo(e)}catch(e){console.warn("Unable to zoom to selected parcels.",e)}}))),[C]),ve=e.React.useCallback((e=>l(void 0,void 0,void 0,(function*(){if(me(),!1!==g.autoHighlight&&(null==C?void 0:C.view)&&ne&&0!==e.length)try{const t=yield C.view.whenLayerView(ne);ie.current=t.highlight(e)}catch(e){console.warn("Unable to highlight selected parcels.",e)}}))),[g.autoHighlight,me,C,ne]),he=e.React.useCallback(((e=!1)=>{var t,i,a,o,r;const l=te.current,n=ae.current;if(!(l&&se&&x&&n))return!1;const s=l.viewModel,c=(null==s?void 0:s.featureFormViewModel)||(null==s?void 0:s.formViewModel),d=(null==c?void 0:c.feature)||(null===(i=null===(t=null==s?void 0:s.activeWorkflow)||void 0===t?void 0:t.data)||void 0===i?void 0:i.feature)||(null===(o=null===(a=null==s?void 0:s.activeWorkflow)||void 0===a?void 0:a.data)||void 0===o?void 0:o.editFeature);let p=!1;if(d&&(d.attributes=Object.assign(Object.assign({},d.attributes||{}),{[x]:n}),p=!0),c){const e=c.layer||(null==d?void 0:d.layer);if(!e||e===se||(null==e?void 0:e.id)===se.id)try{null===(r=c.setValue)||void 0===r||r.call(c,x,n),p=!0}catch(e){console.warn("Could not set form value through FeatureFormViewModel.",e)}}return p&&(e||oe.current!==n)&&(oe.current=n,Y({type:"ok",text:`Smart form is active. ${x} was populated with: ${n}`})),p}),[x,se]),be=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){var e;if((null==C?void 0:C.view)&&se&&ee.current)try{yield se.load();const t={allowUpdateExisting:!0===g.allowUpdateExisting,allowDeleteExisting:!0===g.allowDeleteExisting,enableAttachments:!1!==g.enableAttachments,enableRelatedRecords:!1!==g.enableRelatedRecords},i=f(C);yield Promise.all(i.map((e=>l(void 0,void 0,void 0,(function*(){var t,i;try{yield null===(i=null===(t=e.layer)||void 0===t?void 0:t.load)||void 0===i?void 0:i.call(t)}catch(e){console.warn("Editor layer could not be loaded.",e)}})))));const o=$(i,se,C.view,g,t);fe(),Z(!1);const r=document.createElement("div");r.className="psc-editor-inner",ee.current.appendChild(r);const n=new a.default({container:r,view:C.view,layerInfos:o});n.layerInfos=o;const s=t.allowUpdateExisting||t.allowDeleteExisting;n.visibleElements=Object.assign(Object.assign({},n.visibleElements||{}),{createFeaturesSection:!0,editFeaturesSection:s,settingsMenu:!1!==g.enableSnapping||!1!==g.enableTooltips,snappingControls:!1!==g.enableSnapping,snappingControlsElements:{enabledToggle:!1!==g.enableSnapping,selfEnabledToggle:!1!==g.enableSnapping,featureEnabledToggle:!1!==g.enableSnapping,layerList:!1!==g.enableSnapping,layerListToggleLayersButton:!1!==g.enableSnapping},tooltipsToggle:!1!==g.enableTooltips});try{n.tooltipOptions.enabled=!1!==g.enableTooltips,n.snappingOptions.enabled=!1!==g.enableSnapping,n.snappingOptions.selfEnabled=!1!==g.enableSnapping,n.snappingOptions.featureEnabled=!1!==g.enableSnapping}catch(e){console.warn("Editor snapping or tooltip options could not be applied.",e)}n.supportingWidgetDefaults={featureTemplates:{visibleElements:{filter:!1!==g.showTemplateFilter}},featureForm:{groupDisplay:"sequential"}},te.current=n,K((e=>e+1));const c=F((null===(e=null==se?void 0:se.formTemplate)||void 0===e?void 0:e.elements)||[]),d=o.filter((e=>(null==e?void 0:e.enabled)&&(null==e?void 0:e.layer)&&"feature"===e.layer.type)).length;Y({type:"ok",text:`Connected to ${N(se)}. Editor is showing ${d} checked layer${1===d?"":"s"} and hiding unchecked web map layers. Primary smart form has ${c.total} elements, feature templates (${R(se)}), and layer symbology.`})}catch(e){console.error(e),Y({type:"error",text:"Could not initialize the embedded Esri Editor from the selected web map layer."})}}))),[g.allowDeleteExisting,g.allowUpdateExisting,g.autoCleanEditorLabels,g.editorLayerAliases,g.editorLayerVisibility,g.editorTemplateAliases,g.enableAttachments,g.enableRelatedRecords,g.enableSnapping,g.enableTooltips,g.restrictEditorToEditLayer,g.showTemplateFilter,fe,se,C]);e.React.useEffect((()=>(be(),()=>{fe()})),[be,fe]),e.React.useEffect((()=>{var e;const t=te.current;if(!t)return;const i=[],a=()=>{window.setTimeout((()=>{he(!1)}),30),window.setTimeout((()=>{he(!1)}),250)};try{i.push(o.watch((()=>{var e;return null===(e=t.viewModel)||void 0===e?void 0:e.state}),(e=>{J(e||""),["awaiting-feature-creation-info","creating-features","editing-attributes","editing-new-feature"].includes(e)&&a()}),{initial:!0})),i.push(o.watch((()=>{var e;return null===(e=t.viewModel)||void 0===e?void 0:e.featureFormViewModel}),(e=>{e&&a()}),{initial:!0})),i.push(o.watch((()=>t.activeWorkflow),(e=>{Z(!!e),a()}),{initial:!0}));const r=null===(e=t.on)||void 0===e?void 0:e.call(t,"sketch-create",(e=>{const t=function(e){var t,i,a,o;return(null===(t=null==e?void 0:e.detail)||void 0===t?void 0:t.graphic)||(null==e?void 0:e.graphic)||(null===(a=null===(i=null==e?void 0:e.detail)||void 0===i?void 0:i.graphics)||void 0===a?void 0:a[0])||(null===(o=null==e?void 0:e.graphics)||void 0===o?void 0:o[0])}(e),i=ae.current;t&&i&&(t.attributes=Object.assign(Object.assign({},t.attributes||{}),{[x]:i})),a()}));r&&i.push(r)}catch(e){console.warn("Editor form watchers could not be registered.",e)}return()=>{i.forEach((e=>{var t;return null===(t=null==e?void 0:e.remove)||void 0===t?void 0:t.call(e)}))}}),[x,G,he]),e.React.useEffect((()=>{he(!1)}),[ce,he]);const xe=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){const e=te.current;if(e&&se)if(ae.current)try{if(yield se.load(),e.activeWorkflow)try{yield e.cancelWorkflow()}catch(e){console.warn(e)}const t=g.templateStartMode||r.templateStartMode;if("template-picker"===t){const t=e.viewModel;return(null==t?void 0:t.startCreateFeaturesWorkflowAtFeatureTypeSelection)?yield t.startCreateFeaturesWorkflowAtFeatureTypeSelection():(null==e?void 0:e.startCreateFeaturesWorkflowAtFeatureTypeSelection)&&(yield e.startCreateFeaturesWorkflowAtFeatureTypeSelection()),Y({type:"warn",text:`Choose the ${N(se)} template in the Editor panel, then click the map to drop the new development point. ${x} will auto-populate with ${ae.current}.`}),void window.setTimeout((()=>{he(!1)}),250)}const i=function(e,t,i){const a=O(e);if(0===a.length)return null;if("configured-template"===t&&i){const e=a.find((e=>{const t=null==e?void 0:e.__pscOriginalName;return(null==e?void 0:e.name)===i||(null==e?void 0:e.label)===i||t===i}));if(e)return e}return a[0]}(se,t,g.editTemplateName);if(i&&(null==e?void 0:e.startCreateFeaturesWorkflowAtFeatureCreation)){const t=function(e,t,i){if(!e)return e;const a=e.clone?e.clone():e,o=a.prototype||{},r=Object.assign(Object.assign({},o.attributes||{}),{[t]:i});try{a.prototype||(a.prototype={}),a.prototype.attributes=r}catch(e){try{a.prototype.attributes[t]=i}catch(e){}}return a}(i,x,ae.current);return yield e.startCreateFeaturesWorkflowAtFeatureCreation({layer:se,template:t,maxFeatures:1}),Y({type:"warn",text:`Click the map to drop the new development point. ${x} is preloaded with ${ae.current}.`}),void window.setTimeout((()=>{he(!1)}),250)}const a=e.viewModel;(null==a?void 0:a.startCreateFeaturesWorkflowAtFeatureTypeSelection)?yield a.startCreateFeaturesWorkflowAtFeatureTypeSelection():(null==e?void 0:e.startCreateFeaturesWorkflowAtFeatureTypeSelection)&&(yield e.startCreateFeaturesWorkflowAtFeatureTypeSelection()),Y({type:"warn",text:`No feature template was detected, so the template picker opened. Choose a template and drop the point on the map. ${x} will auto-populate with ${ae.current}.`}),window.setTimeout((()=>{he(!1)}),250)}catch(e){console.error(e),Y({type:"error",text:"Could not start the create workflow. Check that the edit layer allows Add Features and is visible/editable in the web map."})}else Y({type:"warn",text:"Select at least one folio first. The folio string will auto-fill the smart form."});else Y({type:"warn",text:"Select an editable point layer in the widget settings first."})}))),[g.editTemplateName,g.templateStartMode,x,se,he]),ye=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){if(ne&&h){B(!0);try{yield ne.load();const e=ne.createQuery();e.where="1=1",e.outFields=[h],e.returnGeometry=!1,e.num=T,e.returnDistinctValues=!0,e.orderByFields=[h];let t=[];try{const i=yield ne.queryFeatures(e);t=(null==i?void 0:i.features)||[]}catch(e){const i=ne.createQuery();i.where="1=1",i.outFields=[h],i.returnGeometry=!1,i.num=T;const a=yield ne.queryFeatures(i);t=(null==a?void 0:a.features)||[]}const i=function(e){return[...e].sort(((e,t)=>e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})))}(j(t.map((e=>{var t;return w(null===(t=e.attributes)||void 0===t?void 0:t[h])}))));L(i),Y({type:"ok",text:`Loaded ${i.length} folio values from ${N(ne)}.`})}catch(e){console.error(e),Y({type:"error",text:"Could not load folio values from the parcel layer. Check the widget settings and layer permissions."})}finally{B(!1)}}}))),[T,h,ne]);e.React.useEffect((()=>{L([]),V([]),z([]),me(),pe&&ye()}),[ne,h]),e.React.useEffect((()=>()=>{me(),fe()}),[me,fe]);const we=e.React.useCallback((e=>{const t=j(e);0!==t.length&&V((e=>j(e.concat(t))))}),[]),je=e.React.useCallback((e=>{V((t=>t.filter((t=>t!==e))))}),[]),ke=e.React.useCallback(((e,t)=>{t?we([e]):je(e)}),[we,je]),_e=e.React.useCallback((()=>l(void 0,void 0,void 0,(function*(){if(!ne||0===M.length)return z([]),me(),void Y({type:"warn",text:"Select one or more folios before applying."});q(!0);try{yield ne.load();const e=ne.createQuery();e.where=_(ne,h,M),e.outFields=["*"],e.returnGeometry=!0;const t=yield ne.queryFeatures(e),i=(null==t?void 0:t.features)||[];z(i),yield ve(i),!1!==g.autoZoom&&(yield ge(i)),he(!1),Y({type:"ok",text:`Selected ${i.length} parcel feature${1===i.length?"":"s"} for ${M.length} folio${1===M.length?"":"s"}. Folio string: ${ae.current}`})}catch(e){console.error(e),Y({type:"error",text:"Could not query selected parcels. Check the folio field and layer query capability."})}finally{q(!1)}}))),[g.autoZoom,me,ve,he,h,ne,M,ge]),Ne=e.React.useMemo((()=>{const e=U.trim().toLowerCase();return(e?A.filter((t=>t.toLowerCase().includes(e))):A).slice(0,250)}),[A,U]),Ee=e.React.useMemo((()=>{const e={};return M.forEach((t=>{e[t]=!0})),e}),[M]);return v?(0,e.jsx)("div",{className:"jimu-widget psc-widget",css:c()},(0,e.jsx)("div",{className:"psc-app"},(0,e.jsx)("div",{className:"psc-topbar"},(0,e.jsx)("div",{className:"psc-brand"},(0,e.jsx)("div",{className:"psc-brand-icon"},"ID"),(0,e.jsx)("div",{className:"min-w-0"},(0,e.jsx)("div",{className:"psc-brand-title"},"Input Developments"),(0,e.jsx)("div",{className:"psc-brand-subtitle"},"Query multiple folios, review parcels, and use your web map smart form to create a development point."))),(0,e.jsx)("div",{className:"psc-top-actions"},(0,e.jsx)("div",{className:"psc-connected"},(0,e.jsx)("span",{className:"psc-dot"}),pe?"Web map connected":"Needs settings"),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",onClick:()=>{V([]),z([]),me(),Y({type:"",text:"Cleared selected folios and parcel highlight."})}},"Clear All"))),(0,e.jsx)("div",{className:"psc-shell"},(0,e.jsx)("div",{className:"psc-left"},(0,e.jsx)("div",{className:"psc-card"},(0,e.jsx)("div",{className:"psc-card-header"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"psc-title"},"1. Search and select folios"),(0,e.jsx)("div",{className:"psc-subtitle"},"Multi-select folios from the parcel layer.")),W&&(0,e.jsx)("span",{className:"psc-loading"},(0,e.jsx)(i.Loading,{type:"DONUT",width:14,height:14})," Loading")),(0,e.jsx)("div",{className:"psc-card-body"},(0,e.jsx)("div",{className:"psc-layer-status"},(0,e.jsx)("div",{className:"psc-chip"},(0,e.jsx)("span",null,"Parcel layer: ",N(ne,null===(s=g.parcelLayer)||void 0===s?void 0:s.layerTitle))),(0,e.jsx)("div",{className:"psc-chip"},(0,e.jsx)("span",null,"Folio field: ",h))),!pe&&(0,e.jsx)("div",{className:"psc-empty"},"Finish widget settings: select parcel layer, edit layer, and both FOLIO fields."),pe&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"psc-input-row"},(0,e.jsx)(i.TextInput,{value:U,placeholder:"Search or type folio number(s)...",allowClear:!0,onChange:e=>{D(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&we(k(U))}}),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",onClick:()=>{we(k(U))}},"Add")),(0,e.jsx)("div",{className:"psc-row-spread mb-2"},(0,e.jsx)("span",{className:"psc-subtitle"},M.length," selected"),(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",onClick:ye},"Refresh values")),(0,e.jsx)("div",{className:"psc-options"},0===Ne.length&&(0,e.jsx)("div",{className:"psc-empty",style:{margin:8}},"No folios to display. Type a value above and click Add."),Ne.map((t=>{const a=!!Ee[t];return(0,e.jsx)("label",{key:t,className:"psc-option "+(a?"is-selected":"")},(0,e.jsx)(i.Checkbox,{checked:a,onChange:e=>{ke(t,e.target.checked)}}),(0,e.jsx)("span",{className:"psc-option-label"},t))}))),(0,e.jsx)("div",{className:"psc-row mt-3"},(0,e.jsx)(i.Button,{type:"primary",disabled:0===M.length||P,onClick:_e},P?"Applying...":`Apply Selection (${M.length})`),(0,e.jsx)(i.Button,{type:"secondary",disabled:0===M.length,onClick:()=>{V([]),z([]),me()}},"Clear"))))),(0,e.jsx)("div",{className:"psc-card"},(0,e.jsx)("div",{className:"psc-card-header"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"psc-title"},"2. Selected folios (",M.length,")"),(0,e.jsx)("div",{className:"psc-subtitle"},I.length," parcel feature",1===I.length?"":"s"," selected on the map.")),(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",disabled:!ce,onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(ce)}},"Copy")),(0,e.jsx)("div",{className:"psc-card-body"},0===M.length&&(0,e.jsx)("div",{className:"psc-empty"},"Selected folios will show here."),M.length>0&&(0,e.jsx)("div",{className:"psc-table-wrap"},(0,e.jsx)("table",{className:"psc-table"},(0,e.jsx)("thead",null,(0,e.jsx)("tr",null,(0,e.jsx)("th",{style:{width:50}},"#"),(0,e.jsx)("th",null,"FOLIO"),(0,e.jsx)("th",{style:{width:74}}))),(0,e.jsx)("tbody",null,M.map(((t,a)=>(0,e.jsx)("tr",{key:t},(0,e.jsx)("td",null,a+1),(0,e.jsx)("td",{className:"code"},t),(0,e.jsx)("td",null,(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",onClick:()=>{je(t)}},"Remove")))))))),(0,e.jsx)("div",{className:"psc-folio-string"},(0,e.jsx)("div",{className:"psc-row-spread"},(0,e.jsx)("strong",null,"Folio String auto-created"),(0,e.jsx)("span",{className:"psc-subtitle"},E)),(0,e.jsx)("div",{className:"psc-string-box"},(0,e.jsx)("div",{className:"psc-string-value",title:ce},ce||"No folios selected"),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",disabled:!ce,onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(ce)}},"Copy")),(0,e.jsx)("div",{className:"psc-footer-note"},"This exact string is pushed into the Editor smart form field: ",x)),(0,e.jsx)("div",{className:"psc-row mt-3"},(0,e.jsx)(i.Button,{type:"primary",disabled:0===I.length,onClick:()=>{ge(I)}},"Zoom to Selected Parcels"),(0,e.jsx)(i.Button,{type:"secondary",disabled:!ce,onClick:()=>{he(!0)}},"Push Folio to Form"))))),(0,e.jsx)("div",{className:"psc-card psc-editor-card "+(Q?"is-workflow-active-card":"is-template-picker-card")},(0,e.jsx)("div",{className:"psc-card-header"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"psc-title"},"3. Create feature with web map smart form"),(0,e.jsx)("div",{className:"psc-subtitle"},"Embedded Esri Editor using the selected layer from your web map.")),(0,e.jsx)("div",{className:"psc-chip green"},(0,e.jsx)("span",null,"Auto-fill ",x))),(0,e.jsx)("div",{className:"psc-editor-toolbar"},(0,e.jsx)("div",{className:"psc-layer-status"},(0,e.jsx)("div",{className:"psc-chip"},(0,e.jsx)("span",null,"Edit layer: ",N(se,null===(p=g.editLayer)||void 0===p?void 0:p.layerTitle))),(0,e.jsx)("div",{className:"psc-chip neutral"},(0,e.jsx)("span",null,"Smart form: ",de.total," elements, ",de.relationships," relationships")),(0,e.jsx)("div",{className:"psc-chip neutral"},(0,e.jsx)("span",null,"Templates: ",R(se)," | State: ",H||"loading"))),(0,e.jsx)("div",{className:"psc-folio-string",style:{marginTop:0}},(0,e.jsx)("strong",null,x),(0,e.jsx)("div",{className:"psc-string-box"},(0,e.jsx)("div",{className:"psc-string-value",title:ce},ce||"Select folios first"),(0,e.jsx)(i.Button,{size:"sm",type:"secondary",disabled:!ce,onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(ce)}},"Copy"))),(0,e.jsx)("div",{className:"psc-row"},(0,e.jsx)(i.Button,{type:"primary",disabled:!pe||!ce,onClick:xe},"Start New Development Point"),(0,e.jsx)(i.Button,{type:"secondary",disabled:!ce,onClick:()=>{he(!0)}},"Re-apply Folio String")),(0,e.jsx)("div",{className:`psc-status ${X.type}`,style:{margin:0}},X.text)),(0,e.jsx)("div",{className:"psc-editor-container "+(Q?"is-workflow-active":"is-template-picker")},!pe&&(0,e.jsx)("div",{className:"psc-empty psc-editor-empty"},"Configure the widget settings before using the smart form."),(0,e.jsx)("div",{className:"psc-editor-host",ref:ee})))),(0,e.jsx)("div",{className:"psc-workflow-strip"},(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Search"),"Select multiple folios from the web map parcel layer."),(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Review"),"Highlight and zoom the selected parcels in the Map widget."),(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Create"),"Use Editor to pick the template and drop the point on the map."),(0,e.jsx)("div",{className:"psc-step-pill"},(0,e.jsx)("strong",null,"Smart form"),"The web map form, domains, templates, relationships, and symbology stay intact."))),(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:v,onActiveViewChange:e=>l(void 0,void 0,void 0,(function*(){e&&(yield e.whenJimuMapViewLoaded(),yield e.whenAllJimuLayerViewLoaded()),S(e)}))})):(0,e.jsx)("div",{className:"jimu-widget psc-widget",css:c()},(0,e.jsx)("div",{className:"psc-empty",style:{margin:12}},"Configure this widget by selecting the Map widget that contains your parcel layer and development point edit layer."))};function I(e){n.p=e}})(),s})())}}}));