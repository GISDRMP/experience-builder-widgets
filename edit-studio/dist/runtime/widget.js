System.register(["jimu-core","jimu-ui","esri/form/FormTemplate","esri/rest/support/Query","esri/form/elements/FieldElement","esri/form/elements/GroupElement","esri/widgets/FeatureForm","esri/Graphic","jimu-arcgis","esri/core/reactiveUtils","esri/widgets/Editor"],(function(e,t){var a={},i={},o={},r={},n={},s={},l={},d={},c={},u={},p={};return{setters:[function(e){a.DataSourceComponent=e.DataSourceComponent,a.DataSourceManager=e.DataSourceManager,a.DataSourceTypes=e.DataSourceTypes,a.ExBAddedJSAPIProperties=e.ExBAddedJSAPIProperties,a.Immutable=e.Immutable,a.JSAPILayerTypes=e.JSAPILayerTypes,a.React=e.React,a.ReactRedux=e.ReactRedux,a.ServiceManager=e.ServiceManager,a.SessionManager=e.SessionManager,a.SupportedLayerServiceTypes=e.SupportedLayerServiceTypes,a.WidgetState=e.WidgetState,a.WidgetVersionManager=e.WidgetVersionManager,a.classNames=e.classNames,a.css=e.css,a.dataSourceUtils=e.dataSourceUtils,a.defaultMessages=e.defaultMessages,a.esri=e.esri,a.hooks=e.hooks,a.jsx=e.jsx,a.privilegeUtils=e.privilegeUtils,a.useIntl=e.useIntl},function(e){i.Button=e.Button,i.ConfirmDialog=e.ConfirmDialog,i.Loading=e.Loading,i.Select=e.Select,i.TextInput=e.TextInput,i.WidgetPlaceholder=e.WidgetPlaceholder,i.defaultMessages=e.defaultMessages},function(e){o.default=e.default},function(e){r.default=e.default},function(e){n.default=e.default},function(e){s.default=e.default},function(e){l.default=e.default},function(e){d.default=e.default},function(e){c.JimuMapViewComponent=e.JimuMapViewComponent,c.SnappingUtils=e.SnappingUtils},function(e){u.watch=e.watch},function(e){p.default=e.default}],execute:function(){e((()=>{var e={3662:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},170:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},5508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},8996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"></path></svg>'},5514:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 400 400"><path fill="#A8A8A8" fill-rule="evenodd" d="M193 10H10v28h183zm197 53H10v2h380zM10 299h380v2H10zm142-196H25v22h127zm235.99-11H12.01v44h375.98zM10 90v48h380V90zm348 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14M25 171h127v22H25zm-12.99-11h375.98v44H12.01zM10 206v-48h380v48zm362-24c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14m-220 57H25v22h127zm235.99-11H12.01v44h375.98zM10 226v48h380v-48zm348 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14m-188 62H10v22h160zm209 2h-18a9 9 0 0 0-9 9 9 9 0 0 0 9 9h18a9 9 0 0 0 9-9 9 9 0 0 0-9-9m-18-2c-6.075 0-11 4.925-11 11s4.925 11 11 11h18c6.075 0 11-4.925 11-11s-4.925-11-11-11zm25 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0M10 367h160v22H10zm351 2h18a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-18a9 9 0 0 1-9-9 9 9 0 0 1 9-9m-11 9c0-6.075 4.925-11 11-11h18c6.075 0 11 4.925 11 11s-4.925 11-11 11h-18c-6.075 0-11-4.925-11-11m29 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},2089:e=>{"use strict";e.exports=d},2243:e=>{"use strict";e.exports=u},8410:e=>{"use strict";e.exports=o},2228:e=>{"use strict";e.exports=n},277:e=>{"use strict";e.exports=s},6510:e=>{"use strict";e.exports=r},8816:e=>{"use strict";e.exports=p},3387:e=>{"use strict";e.exports=l},2686:e=>{"use strict";e.exports=c},9244:e=>{"use strict";e.exports=a},4321:e=>{"use strict";e.exports=i}},t={};function f(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,f),o.exports}f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},f.d=(e,t)=>{for(var a in t)f.o(t,a)&&!f.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="";var g={};return f.p=window.jimuConfig.baseUrl,(()=>{"use strict";f.r(g),f.d(g,{__set_webpack_public_path__:()=>Qe,default:()=>Xe});var e,t,a,i,o=f(9244);!function(e){e.Attribute="ATTRIBUTE",e.Geometry="GEOMETRY"}(e||(e={})),function(e){e.Webmap="WEBMAP",e.Custom="CUSTOM"}(t||(t={})),function(e){e.NoMap="NOMAP",e.NoLayer="NOEDITABLE"}(a||(a={})),function(e){e.Prescriptive="PRESCRIPTIVE",e.Flexible="FLEXIBLE"}(i||(i={}));var r=f(4321),n=f(8410);const s={_widgetLabel:"Edit Studio",initAttEmptyMessage:"Please add an editable source.",noRecordTips:"No valid record is selected, select one or add one.",addFeature:"Add feature",selfSnapping:"Geometry guides",featureSnapping:"Feature to feature",update:"Update",deleteRecord:"Delete this record?",deleteRecordTips:"This record will be permanently removed.",keepRecord:"Keep record",_action_edit_label:"Edit Studio",selectionChangeConfirmTitle:"Discard the edits?",selectionChangeConfirmTips:"You have unsaved edits that could be lost.",discardConfirm:"Discard edits",discardCancel:"Continue editing"},l=["CreationDate","Creator","EditDate","Editor","GlobalID"],d=[o.JSAPILayerTypes.FeatureLayer,o.JSAPILayerTypes.SceneLayer,o.JSAPILayerTypes.BuildingComponentSublayer,o.JSAPILayerTypes.OrientedImageryLayer,o.JSAPILayerTypes.SubtypeSublayer],c=(0,o.Immutable)([o.DataSourceTypes.FeatureLayer,o.DataSourceTypes.SceneLayer,o.DataSourceTypes.BuildingComponentSubLayer,o.DataSourceTypes.OrientedImageryLayer,o.DataSourceTypes.SubtypeSublayer]),u=(e,t)=>!!e&&(Array.isArray(e)?null==e?void 0:e.join().toLowerCase().includes(t):null==e?void 0:e.toLowerCase().includes(t)),p=e=>{const t=null==e?void 0:e.allowGeometryUpdates,a=null==e?void 0:e.capabilities;return{allowGeometryUpdates:t,create:u(a,"create"),update:u(a,"update"),deletable:u(a,"delete")}};function m(e){if(!e)return[];const t=e.objectIdField,{creationDateField:a,creatorField:i,editDateField:o,editorField:r}=e.editFieldsInfo||{},{shapeAreaFieldName:n,shapeLengthFieldName:s}=e.geometryProperties||{};return[t,a,i,o,r,n,s].filter(Boolean)}const v=e=>o.DataSourceManager.getInstance().getDataSource(e),b=e=>{const t=(null==e?void 0:e.type)===o.DataSourceTypes.SceneLayer||(null==e?void 0:e.type)===o.DataSourceTypes.BuildingComponentSubLayer;null==e||e.type,o.DataSourceTypes.OrientedImageryLayer;let a;return a=t?e.getAssociatedDataSource():e,a};var h=f(6510),y=f(2228),x=f(277),w=function(e,t,a,i){return new(a||(a=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}l((i=i.apply(e,t||[])).next())}))};const S="esri-item-list",j="esri-widget",_="esri-editor__header",C="esri-feature-form__form-header",R="esri-feature-form__description-text",I="esri-button--disabled",k="esri-widget__heading",E="esri-feature-form",N="esri-editor__scroller",T="esri-editor__content",D="esri-item-list__list",O="esri-item-list__group",F="esri-item-list__no-matches-message",L="esri-item-list__list-item-label",M="esri-item-list__list-item-container",A="esri-item-list__list-item",P="esri-item-list__group-header",V="esri-editor__back-button",U="esri-widget__heading",B="esri-editor__warning-option",z="esri-editor__warning-option--primary",W="esri-editor__warning-option--positive",G="esri-editor__prompt--danger",J="esri-editor__prompt__header",H="esri-editor__prompt__header__heading",$="esri-editor__prompt__message",q="esri-editor__prompt__divider",K="esri-editor__prompt__actions",Y=e=>{const t=[];for(const a in e)(null==e?void 0:e[a])&&t.push(...e[a]);return t};const X=e=>w(void 0,void 0,void 0,(function*(){if(!e)return!1;const t=o.esri.restRequest.request;try{const a=yield t(`${e}?f=json`);return!Object.keys(a).includes("error")}catch(e){return!1}})),Q=e=>w(void 0,void 0,void 0,(function*(){var t;const a=yield null==e?void 0:e.fetchItemInfo().then((e=>e)).catch((e=>{console.error(e)}));if(!a||!a.url)return!1;const i=null===(t=o.ServiceManager.getInstance().getServerInfoByServiceUrl(a.url))||void 0===t?void 0:t.owningSystemUrl;if(!i)return!1;const r=o.SessionManager.getInstance().getSessionByUrl(i);if(!r)return!1;const n=yield r.getUser(),s="org_admin"===(null==n?void 0:n.role)&&(null==a?void 0:a.isOrgItem),l=a.owner===(null==n?void 0:n.username),d=yield o.privilegeUtils.isItemInTheUpdatedGroup(a.id,r);return s||l||d})),Z=e=>o.dataSourceUtils.getTimezoneAPIFromRuntime(e.getTimezone()),ee=(e,t)=>Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every(((e,a)=>t[a]===e)),te=e=>{var t;const a=null==e?void 0:e.getLayerDefinition(),i=null===(t=e.belongToDataSource)||void 0===t?void 0:t.getLayerDefinition();return(null==a?void 0:a.displayField)||(null==i?void 0:i.displayField)||(null==a?void 0:a.objectIdField)||(null==i?void 0:i.objectIdField)||"OBJECTID"},ae=e=>({layer:e,enabled:!1,addEnabled:!1,updateEnabled:!1,deleteEnabled:!1,attributeUpdatesEnabled:!1,geometryUpdatesEnabled:!1,attachmentsOnUpdateEnabled:!1}),ie=(e,t)=>e.filter((e=>!t.includes(e.jimuName))).map((e=>e.children?new x.default({label:e.name,description:e.subDescription||(null==e?void 0:e.description),elements:e.children.filter((e=>!t.includes(e.jimuName))).map((e=>new y.default({fieldName:e.jimuName,label:e.alias||e.name,description:e.subDescription||e.description,editableExpression:e.editAuthority?"true":"false"})))}):new y.default({fieldName:e.jimuName,label:(null==e?void 0:e.alias)||(null==e?void 0:e.name),description:e.subDescription||(null==e?void 0:e.description),editableExpression:e.editAuthority?"true":"false"}))),oe=(e,t)=>w(void 0,void 0,void 0,(function*(){const a=[];for(const i in t){const o=v(i),r=b(o).getIdField(),n=t[i];if((null==n?void 0:n.length)>0){const o=`${r} IN (${t[i].map((e=>{var t;return(null===(t=e)||void 0===t?void 0:t.feature).attributes[r]})).join()})`,n=e.getJimuLayerViewByDataSourceId(i),s=null==n?void 0:n.layer;if(!s)continue;const l=new h.default({where:o,outFields:["*"],returnGeometry:!0});a.push(s.queryFeatures(l))}}return(yield Promise.all(a)).reduce(((e,t)=>Array.isArray(t.features)?e.concat(t.features):e),[])})),re=(e,a,i,r,s)=>w(void 0,void 0,void 0,(function*(){let l,d=!1;const c=i.layer,u=null==c?void 0:c.userHasFullEditingPrivileges,f=yield Q(e),g=c.editingEnabled;let v=a;v||(v=((e,a)=>{var i,r,n,s,l;const d=e.getLayerDefinition(),{allowGeometryUpdates:c,create:u,update:f,deletable:g}=p(d),v=(null===(n=null===(r=null===(i=e.getSchema())||void 0===i?void 0:i.fields)||void 0===r?void 0:r.asMutable)||void 0===n?void 0:n.call(r,{deep:!0}))||{};let b=Object.values(v);b=b.filter((e=>!m(d).includes(e.name)));const h=null===(s=a.formTemplate)||void 0===s?void 0:s.elements;if(h){const e=[];h.forEach((t=>{"group"===t.type?t.elements.forEach((t=>{"field"===t.type&&e.push(t.fieldName)})):"field"===t.type&&e.push(t.fieldName)})),b=b.filter((t=>e.includes(t.name)))}(null==b?void 0:b.length)>50&&(b=b.slice(0,50));const y=(null==d?void 0:d.fields)||[],x=b.map((e=>{const t=y.find((t=>t.name===e.jimuName)),a=null==t?void 0:t.editable;return Object.assign(Object.assign({},e),{editAuthority:a,subDescription:(null==e?void 0:e.description)||"",editable:a})})),w={dataSourceId:e.id,mainDataSourceId:e.id,dataViewId:e.dataViewId,rootDataSourceId:null===(l=e.getRootDataSource())||void 0===l?void 0:l.id};return{id:e.id,name:e.getLabel(),useDataSource:(0,o.Immutable)(w),addRecords:u,deleteRecords:g,updateRecords:f,updateAttributes:f,updateGeometries:c&&f,showFields:b,groupedFields:x,layerHonorMode:t.Webmap}})(e,c));const b=e.getLayerDefinition(),h=m(b),y=((e,a,i,o)=>{const{groupedFields:r,layerHonorMode:s}=a,l=e.formTemplate,d=l?l.clone():new n.default;if(s===t.Custom&&(d.elements=ie(r,o)),!i&&d.elements)for(const e of d.elements)"relationship"===e.type&&(e.editableExpression="false");return d.title=(null==l?void 0:l.title)||e.title,d})(c,v,r,h),{allowGeometryUpdates:x,create:w,update:S,deletable:j}=p(b),{addRecords:_,deleteRecords:C,updateRecords:R,updateAttributes:I,updateGeometries:k}=v;if(f||u)d=R||C,l={layer:c,formTemplate:y,enabled:_||R||C,addEnabled:_&&w,updateEnabled:R&&S,deleteEnabled:C&&j,attributeUpdatesEnabled:I&&S,geometryUpdatesEnabled:k&&x};else if(g&&e){(f||(R||C))&&(d=!0);l={layer:c,formTemplate:y,enabled:((yield X(null==c?void 0:c.url))||s)&&(_||R||C),addEnabled:_&&w,updateEnabled:R&&S,deleteEnabled:C&&j,attributeUpdatesEnabled:I&&S,geometryUpdatesEnabled:k&&x}}else l=ae(c);return{showUpdateBtn:d,editorLayerInfo:l}})),ne=(e,t)=>{var a;const{addFeatures:i=[],updateFeatures:o=[],deleteFeatures:r=[]}=t;for(const t of i){const a=e.buildRecord(t);e.afterAddRecord(a)}const n=e.getIdField();for(const t of o){const i=t.attributes[n],o=null===(a=e.getRecordById(i))||void 0===a?void 0:a.feature,r=(null==o?void 0:o.attributes)||{},s=Object.assign(r,null==t?void 0:t.attributes);t.attributes=s;const l=e.buildRecord(t);e.afterUpdateRecord(l)}for(const t of r){const a=e.buildRecord(t);e.afterDeleteRecordById(a.getId())}},se=(e,t)=>w(void 0,void 0,void 0,(function*(){const a=e.dataSource,i=e.layer,o=a.getGDBVersion();return i.applyEdits(t,{gdbVersion:o})}));var le=f(5508),de=f.n(le),ce=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(a[i[o]]=e[i[o]])}return a};const ue=e=>{const t=window.SVG,{className:a}=e,i=ce(e,["className"]),r=(0,o.classNames)("jimu-icon jimu-icon-component",a);return t?o.React.createElement(t,Object.assign({className:r,src:de()},i)):o.React.createElement("svg",Object.assign({className:r},i))},pe=e=>{const{emptyTips:t}=e;return(0,o.jsx)("div",{className:"surface-1 border-0 h-100",css:o.css`
    .edit-blank {
      min-height: 300px;
      background:
        radial-gradient(circle at top, rgba(125, 211, 252, 0.18), transparent 35%),
        linear-gradient(180deg, rgba(248, 250, 252, 0.96), rgba(255, 255, 255, 0.98));
      border: 1px dashed rgba(148, 163, 184, 0.34);
      border-radius: 20px;
      margin: 12px;
      .placeholder-icon{
        color: #2563eb;
        background: rgba(219, 234, 254, 0.88);
        border-radius: 999px;
        padding: 12px;
      }
      & > div{
        top: calc(50% + 20px);
        transform: translateY(-50%);
      }
      p{
        font-size: 14px;
        margin-top: 16px;
        line-height: 22px;
        color: #334155;
        max-width: 280px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `},(0,o.jsx)("div",{className:"w-100 text-center edit-blank"},(0,o.jsx)("div",{className:"position-absolute edit-blank-content w-100"},(0,o.jsx)(ue,{size:32,className:"placeholder-icon"}),(0,o.jsx)("p",null,t))))};var fe=f(8996),ge=f.n(fe),me=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(a[i[o]]=e[i[o]])}return a};const ve=e=>{const t=window.SVG,{className:a}=e,i=me(e,["className"]),r=(0,o.classNames)("jimu-icon jimu-icon-component",a);return t?o.React.createElement(t,Object.assign({className:r,src:ge()},i)):o.React.createElement("svg",Object.assign({className:r},i))},be=e=>{const{title:t,message:a,confirmText:i,cancelText:n,onConfirm:s,onCancel:l}=e;return(0,o.jsx)(o.React.Fragment,null,(0,o.jsx)("div",{className:"confirm-scrim",css:o.css`
    &.confirm-scrim{
      position: absolute;
      background-color: var(--calcite-scrim-background);
      width: 100%;
      height: 100%;
      top: 0;
    }
  `}),(0,o.jsx)("div",{className:G,css:o.css`
    &.confirm-scrim{
      position: absolute;
      background-color: var(--calcite-scrim-background);
      width: 100%;
      height: 100%;
      top: 0;
    }
    .esri-editor__prompt__actions{
      .esri-editor__warning-option--primary,
      .esri-editor__warning-option--positive{
        text-align: center;
        padding: 4px 16px;
        line-height: 22px;
        border: 1px solid var(--calcite-ui-danger);
        border-radius: 0;
        flex: 1;
      }
      .esri-editor__warning-option--primary{
        background-color: transparent;
        color: var(--calcite-ui-danger);
        :hover{
          border-color: var(--calcite-ui-danger-hover);
          color: var(--calcite-ui-danger-hover);
          box-shadow: inset 0 0 0 1px var(--calcite-ui-danger-hover);
        }
      }
      .esri-editor__warning-option--positive{
        background-color: var(--calcite-ui-danger);
        color: var(--ref-palette-white);
        :hover{
          border-color: var(--calcite-ui-danger-hover);
          background-color: var(--calcite-ui-danger-hover);
        }
      }
    }
  `},(0,o.jsx)("div",{className:J},(0,o.jsx)(ve,{width:24,height:24}),(0,o.jsx)("h4",{className:(0,o.classNames)(U,H)},t)),(0,o.jsx)("div",{className:$},a),(0,o.jsx)("div",{className:q}),(0,o.jsx)("div",{className:K},(0,o.jsx)(r.Button,{className:(0,o.classNames)(B,z),onClick:l},n),(0,o.jsx)(r.Button,{className:(0,o.classNames)(B,W),onClick:s},i))))};var he=f(3662),ye=f.n(he),xe=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(a[i[o]]=e[i[o]])}return a};const we=e=>{const t=window.SVG,{className:a}=e,i=xe(e,["className"]),r=(0,o.classNames)("jimu-icon jimu-icon-component",a);return t?o.React.createElement(t,Object.assign({className:r,src:ye()},i)):o.React.createElement("svg",Object.assign({className:r},i))},Se=e=>{const{activeLayerInfo:t,widgetLabel:a,description:i,activeFeature:n,editCount:l,hasTableLayerAdd:d,featureFormStep:c,onBack:u,onNew:p}=e,f="list"===c||"empty"===c,g="form"===c||"new"===c;let m="";const v=o.hooks.useTranslation(s);if("new"===c)m=v("addFeature");else if("form"===c&&t&&n){const{dataSource:e}=t,a=te(e);m=n.attributes[a]||""}const b=(0,o.useIntl)(),h=l>1?` (${b.formatNumber(l)})`:"";return(0,o.jsx)("div",{className:(0,o.classNames)({"d-flex":g}),css:o.css`
    position: relative;
    padding: 10px 14px 12px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.2);
    background:
      linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(255, 255, 255, 0.95));
    .esri-feature-form__input:focus,
    calcite-input:focus{
      outline: unset !important;
      outline-offset: unset !important;
    }
    .esri-feature-form{
      background-color: unset;
      .esri-feature-form__form-header{
        margin: 0;
        padding-right: 56px;
        .esri-feature-form__description-text{
          font-weight: 500;
          font-size: 13px;
          margin: 6px 0 0;
          line-height: 1.45;
          color: #475569;
        }
      }
    }
    .esri-editor__header{
      min-height: 56px;
      display: flex;
      align-items: center;
      .esri-widget__heading{
        font-weight: 700;
        font-size: 18px;
        margin: 0 8px;
        text-align: left;
        padding: 1px 0;
        height: auto;
        line-height: 1.3;
        color: #0f172a;
      }
    }
    .back-button{
      width: 40px;
      height: 40px;
      border-radius: 12px;
      margin-right: 10px;
      line-height: 16px;
      color: #0f172a;
      border: 1px solid rgba(148, 163, 184, 0.28);
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 18px rgba(15, 23, 42, 0.05);
    }
    .add-feature-btn {
      position: absolute;
      right: 14px;
      top: 14px;
      button{
        min-width: 42px;
        height: 38px;
        border-radius: 999px;
        padding: 0 14px;
        font-weight: 600;
        color: #0f172a;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.26);
        box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
      }
    }
  `},g&&(0,o.jsx)("button",{id:"back_home",className:(0,o.classNames)("back-button surface-1",V),title:v("back"),onClick:u},"<"),f&&(0,o.jsx)("div",{className:E},(0,o.jsx)("div",{className:C},(0,o.jsx)("h2",{className:k},a+h),i&&(0,o.jsx)("p",{className:(0,o.classNames)(`text-truncate ${R}`),title:i},i))),g&&(0,o.jsx)("header",{className:_},(0,o.jsx)("h4",{className:(0,o.classNames)("text-truncate",k),title:m},m)),d&&f&&(0,o.jsx)(r.Button,{size:"sm",icon:!0,type:"tertiary",className:"add-feature-btn",onClick:p,title:v("addFeature"),"aria-label":v("addFeature")},(0,o.jsx)(we,{className:"mr-1"}),v("add")))},je=e=>{const{buttons:t}=e;return(0,o.jsx)("div",{className:"d-flex justify-content-between form-buttons",css:o.css`
  &.form-buttons{
    border-top: 1px solid rgba(148, 163, 184, 0.22);
    padding: 14px 16px 16px;
    display: flex;
    gap: 12px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(241, 245, 249, 0.96));
    .single-button {
      flex: 1;
    }
    .multi-buttons {
      flex: 1;
    }
    button {
      min-height: 42px;
      border-radius: 14px;
      font-weight: 600;
      box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);
    }
    .btn-primary {
      background: linear-gradient(135deg, #2563eb, #0f766e);
      border-color: transparent;
    }
    .btn-default {
      border-color: rgba(239, 68, 68, 0.45);
      color: #b91c1c;
      background: rgba(255, 255, 255, 0.96);
    }
  }
`},t.map((({disabled:e=!1,label:a,type:i,clickHandler:n},s)=>(0,o.jsx)(r.Button,{key:s,className:(0,o.classNames)({"single-button":1===t.length,"multi-buttons":t.length>1,[I]:e}),type:i,disabled:e,onClick:n},a))))};var _e=f(170),Ce=f.n(_e),Re=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(a[i[o]]=e[i[o]])}return a};const Ie=e=>{const t=window.SVG,{className:a}=e,i=Re(e,["className"]),r=(0,o.classNames)("jimu-icon jimu-icon-component",a);return t?o.React.createElement(t,Object.assign({className:r,src:Ce()},i)):o.React.createElement("svg",Object.assign({className:r},i))},ke=e=>{const{editFeatures:t,layersOrder:a,layersInfo:i,onClickItem:n}=e,[s,l]=o.React.useState(""),d=o.hooks.useTranslation(o.defaultMessages),{count:c,groupedSelectedFeatures:u}=o.React.useMemo((()=>{var e;let o=0;const r=[];for(const a in t){const n=t[a];if(0===n.length||!i[a])continue;const l=null===(e=i[a])||void 0===e?void 0:e.dataSource,d=l.getLabel(),c=te(l),u=l.getIdField(),p={id:a,dsId:a,label:d,items:n.filter((e=>{var t,a,i,o;const r=(null===(t=e.feature.attributes)||void 0===t?void 0:t[c])||(null===(a=e.feature.attributes)||void 0===a?void 0:a[u])||(null===(i=e.feature.attributes)||void 0===i?void 0:i.objectid),n=s.toLowerCase();return!n||(null===(o=null==r?void 0:r.toString())||void 0===o?void 0:o.toLowerCase().indexOf(n))>-1})).map((e=>{var t,a,i;return{label:(null===(t=e.feature.attributes)||void 0===t?void 0:t[c])||(null===(a=e.feature.attributes)||void 0===a?void 0:a[u])||(null===(i=e.feature.attributes)||void 0===i?void 0:i.objectid),data:e.feature}}))};o+=p.items.length,r.push(p)}return r.sort(((e,t)=>a.findIndex((t=>t===e.id))-a.findIndex((e=>e===t.id)))),{count:o,groupedSelectedFeatures:r}}),[t,s,i,a]);return 0===c?(0,o.jsx)("div",{className:F,key:"no-matches"},d("noItemsFound")):(0,o.jsx)("div",{className:"surface-1 border-0",css:o.css`
    flex: 1;
    height: 0;
    .esri-editor__content{
      padding: 10px 12px 16px;
    }
    .feature-list{
      background: transparent;
      max-height: unset;
      .esri-item-list{
        background-color: unset;
      }
      .esri-widget__heading {
        font-size: 0.86rem;
        font-weight: 700;
        color: #334155;
        margin: 14px 0 8px;
      }
      .esri-item-list__list-item{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
        border: 1px solid rgba(148, 163, 184, 0.18);
        border-radius: 16px;
        box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);
        :hover{
          cursor: pointer;
          background: linear-gradient(180deg, rgba(239, 246, 255, 0.98), rgba(255, 255, 255, 0.98));
          border-color: rgba(37, 99, 235, 0.24);
        }
      }
      .esri-item-list__group{
        padding: 0 6px 6px;
      }
      .esri-item-list__list-item{
        :focus,
        :focus-visible {
          outline-offset: -2px !important;
        }
      }
      .esri-item-list__list{
        list-style: none;
        margin: 0;
        padding: 0;
        .esri-item-list__list-item{
          cursor: pointer;
          margin-bottom: 10px;
          min-height: 60px;
          transition: border 250ms ease-in-out;
          display: flex;
          justify-content: space-between;
          .esri-item-list__list-item-container{
            display: flex;
            margin: 10px 4px;
            width: 100%;
            .esri-item-list__list-item-label{
              flex: 1;
              margin: 0;
              display: flex;
              align-items: center;
              word-break: break-word;
              padding-left: 18px;
              color: #0f172a;
              font-weight: 600;
            }
          }
        }
      }
      .esri-editor__scroller{
        overflow-y: auto;
        max-height: unset;
      }
    }
    .esri-editor__scroller{
      overflow-y: auto;
      max-height: unset;
      .esri-item-list__scroller{
        max-height: unset;
      }
    }
  `},(0,o.jsx)("div",{className:(0,o.classNames)("feature-list h-100 overflow-auto",T,N)},(0,o.jsx)("div",{className:(0,o.classNames)(S,j)},(0,o.jsx)("div",{className:"d-flex align-items-center mx-2 mt-2 mb-3"},(0,o.jsx)(r.TextInput,{className:"w-100",placeholder:d("search"),onChange:e=>{l(e.target.value)},value:s,prefix:(0,o.jsx)(Ie,{color:"var(--ref-palette-neutral-700)"}),allowClear:!0,title:s})),(0,o.jsx)("div",{key:"content",className:N},(0,o.jsx)("div",{key:"item-container"},u.map((e=>(0,o.jsx)("div",{role:"group","aria-label":e.label,className:O,key:e.id},(0,o.jsx)("h4",{className:(0,o.classNames)(P,k)},(0,o.jsx)("span",{className:L},e.label)),(0,o.jsx)("div",{className:D,role:"listbox"},e.items.map(((t,a)=>(0,o.jsx)(r.Button,{key:`${e.dsId}__${t.label}_${a}`,role:"option",className:(0,o.classNames)(`w-100 border-0 ${A}`),onClick:()=>{n(e.dsId,t.data)}},(0,o.jsx)("div",{className:M},(0,o.jsx)("span",{className:L},t.label))))))))))))))},Ee=e=>{const{activeId:t,addLayersConfig:a,onChange:i}=e,n=o.hooks.useTranslation(r.defaultMessages),s=o.React.useCallback((e=>{var t;const a=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;i(a)}),[i]);return(0,o.jsx)("div",{className:"layer-selector",css:o.css`
    &.layer-selector{
      padding: 14px 6px 4px;
      margin: 10px;
      border-radius: 18px;
      background: rgba(248, 250, 252, 0.96);
      border: 1px solid rgba(148, 163, 184, 0.18);
      box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);
    }
    .esri-feature-form__label {
      display: block;
      margin-bottom: 8px;
      color: #334155;
      font-weight: 600;
    }
    select {
      min-height: 42px;
      border-radius: 12px;
      border: 1px solid rgba(148, 163, 184, 0.34);
    }
  `},(0,o.jsx)("label",{className:"esri-feature-form__label"},n("selectLayer")),(0,o.jsx)(r.Select,{value:t,onChange:s},a.map((e=>(0,o.jsx)("option",{key:e.id,value:e.id},e.name)))))};class Ne extends o.React.PureComponent{constructor(){super(...arguments),this.onDataSourceCreated=e=>{var t,a;null===(a=null===(t=this.props)||void 0===t?void 0:t.onDataSourceCreated)||void 0===a||a.call(t,this.props.useDataSource.dataSourceId,e)},this.onSelectionChange=(e,t)=>{var a,i;!ee(e,t)&&(0!==(null==e?void 0:e.length)||0!==(null==t?void 0:t.length))&&(null===(i=(a=this.props).onSelectionChange)||void 0===i||i.call(a,this.props.useDataSource.dataSourceId))}}render(){const{useDataSource:e}=this.props;return(0,o.jsx)(o.DataSourceComponent,{useDataSource:e,onDataSourceCreated:this.onDataSourceCreated,onSelectionChange:this.onSelectionChange})}}const Te=e=>{const{useDataSources:t,unsavedChange:a,onDataSourceCreated:i,onSelectionChange:n}=e,[l,d]=o.React.useState(!1),c=o.React.useRef([]),u=o.React.useRef(null),p=o.React.useCallback((()=>{c.current.length>0&&(null!==u.current&&window.clearTimeout(u.current),u.current=window.setTimeout((()=>{null==n||n(c.current),c.current=[]}),500))}),[n]),f=o.React.useCallback((e=>{c.current.includes(e)||c.current.push(e),a?d(!0):p()}),[p,a]),g=o.React.useCallback((()=>{d(!1),p()}),[p]),m=o.React.useCallback((()=>{d(!1)}),[]);o.React.useEffect((()=>{a||p()}),[p,a]);const v=o.hooks.useTranslation(s);return(0,o.jsx)(o.React.Fragment,null,null==t?void 0:t.map((e=>(0,o.jsx)(Ne,{key:e.dataSourceId,useDataSource:e,onDataSourceCreated:i,onSelectionChange:f}))),l&&(0,o.jsx)(r.ConfirmDialog,{level:"warning",title:v("selectionChangeConfirmTitle"),hasNotShowAgainOption:!1,content:v("selectionChangeConfirmTips"),confirmLabel:v("discardConfirm"),cancelLabel:v("discardCancel"),onConfirm:g,onClose:m}))};var De=f(3387),Oe=f(2089),Fe=function(e,t,a,i){return new(a||(a=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}l((i=i.apply(e,t||[])).next())}))};const Le=e=>{const{activeId:t,activeLayer:a,activeFeature:i,formTemplate:r,editContainer:n,onValueChange:s}=e,l=o.React.useRef(null),d=o.React.useCallback((()=>{var e,t;(null===(e=l.current)||void 0===e?void 0:e.destroy)&&!(null===(t=l.current)||void 0===t?void 0:t.destroyed)&&l.current.destroy()}),[]),c=o.React.useCallback((()=>Fe(void 0,void 0,void 0,(function*(){var e;try{d();const c=v(t),u=b(c),p=document&&document.createElement("div");let f;if(n.current.appendChild(p),i){const t=u.getIdField()||"OBJECTID",a=`${t} IN (${i.attributes[t]})`,r=yield u.query({where:a,returnGeometry:!0,notAddFieldsToClient:!0,outFields:["*"]}),n=null===(e=null==r?void 0:r.records)||void 0===e?void 0:e[0];if(!n)return;f=yield o.dataSourceUtils.changeToJSAPIGraphic(n.feature)}else f=new Oe.default({layer:a});a.fields||(yield a.load()),l.current=new De.default({container:p,feature:f,layer:a,formTemplate:r,timeZone:Z(u)}),l.current.on("value-change",(e=>{const t=u.getIdField(),{feature:a,fieldName:i}=e;if(i===t)return;const o=l.current.viewModel.submittable,r=a.attributes,n=l.current.viewModel.getValues();let d=!1;if(n)for(const e in n)if((null==r?void 0:r[e])!==n[e]){d=!0;break}s(d,o)}))}catch(e){console.error(e)}}))),[i,t,a,d,n,r,s]),u=o.React.useRef(null);return o.React.useEffect((()=>{window.clearTimeout(u.current),u.current=window.setTimeout((()=>{t&&a&&n.current?c():d()}),500)}),[t,a,n,d,c]),l};var Me=function(e,t,a,i){return new(a||(a=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}l((i=i.apply(e,t||[])).next())}))};const Ae=e=>{var a,i;const{label:l,config:d,canEditFeature:c,useDataSources:u}=e,{description:f,layersConfig:g,noDataMessage:h}=d,[y,x]=o.React.useState(null),[w,S]=o.React.useState(null),[j,_]=o.React.useState({}),[C,R]=o.React.useState({}),[I,k]=o.React.useState((0,o.Immutable)([])),[E,N]=o.React.useState(!1),[T,D]=o.React.useState(!1),[O,F]=o.React.useState(!1),[L,M]=o.React.useState(!1),[A,P]=o.React.useState(!1),V=o.React.useRef(),U=o.React.useMemo((()=>C[y]),[y,C]),B=o.hooks.useTranslation(s,o.defaultMessages,r.defaultMessages);o.React.useEffect((()=>{const e=Object.assign({},j);let t=!1;for(const a in j){g.find((e=>e.id===a))||(delete e[a],t=!0)}t&&_(e)}),[j,g]);const z=o.React.useCallback((e=>Me(void 0,void 0,void 0,(function*(){const t=e.feature;if(!t)return;(null==t?void 0:t.geometry)&&(t.geometry=null);const a=e.getValues();Object.keys(a).forEach((e=>{t.attributes[e]=a[e]}));const i={updateFeatures:[t]};P(!0),yield se(U,i),ne(U.dataSource,i),F(!1),P(!1)}))),[U]),W=o.React.useCallback(((e,t)=>{F(e),M(t)}),[]),G=Le({activeId:y,activeFeature:w,activeLayer:null==U?void 0:U.layer,formTemplate:null==U?void 0:U.formTemplate,editContainer:V,onValueChange:W}),J="full"===(null==U?void 0:U.privilege),H="normal"===(null==U?void 0:U.privilege),$=null==U?void 0:U.editable,q=g.find((e=>e.id===y)),K=null===(i=null===(a=null==U?void 0:U.dataSource)||void 0===a?void 0:a.getLayerDefinition)||void 0===i?void 0:i.call(a),{create:Z,update:ee,deletable:ae}=p(K),oe=(null==q?void 0:q.updateRecords)&&ee,re=(null==q?void 0:q.deleteRecords)&&ae,le=(null==q?void 0:q.addRecords)&&Z,de=(null==K?void 0:K.type)===o.SupportedLayerServiceTypes.Table,ce=!!(null==q?void 0:q.updateRecords)&&(J||H&&oe),ue=!!(null==q?void 0:q.deleteRecords)&&(J||H&&re),fe=!!(null==q?void 0:q.addRecords)&&de&&(J||H&&le),ge=[],me=o.React.useCallback((()=>{var e;const t=null===(e=G.current)||void 0===e?void 0:e.viewModel;(null==t?void 0:t.submittable)&&z(G.current)}),[G,z]);ce&&ge.push({label:B("update"),type:"primary",disabled:!(O&&L),clickHandler:me});const ve=o.React.useCallback((()=>{N(!0)}),[]),he=o.React.useCallback((()=>{N(!1)}),[]),ye=o.React.useCallback((()=>Me(void 0,void 0,void 0,(function*(){var e;const t=null==U?void 0:U.dataSource,a=null===(e=null==t?void 0:t.getSelectedRecords())||void 0===e?void 0:e[0],i=null==a?void 0:a.feature;if(i){const e={deleteFeatures:[i]};P(!0),yield se(U,e),ne(U.dataSource,e),F(!1),P(!1)}N(!1)}))),[U]);ue&&ge.push({label:B("delete"),type:"default",clickHandler:ve});const xe=[],we=o.React.useCallback((()=>Me(void 0,void 0,void 0,(function*(){var e;const t=null===(e=G.current)||void 0===e?void 0:e.viewModel;if(null==t?void 0:t.submittable){const e=null==t?void 0:t.feature;if(e){const t=G.current.getValues();e.attributes=t;const a={addFeatures:[e]};P(!0),yield se(U,a),ne(U.dataSource,a),x(null),F(!1),P(!1)}}}))),[U,G]);fe&&xe.push({label:B("add"),type:"primary",disabled:!1,clickHandler:we});const _e=o.React.useCallback((()=>{const e=Y(j);if(1===e.length){let t=!0;const a=e[0],i=a.dataSource,o=i.getSelectedRecordIds();(o.length>1||!o.includes(a.getId()))&&(t=!1),i&&t&&i.clearSelection()}F(!1),D(!1),x(null),S(null)}),[j]),Ce=o.React.useCallback((()=>{O?D(!0):_e()}),[O,_e]),Re=o.React.useCallback((()=>{D(!1)}),[]),Ie=o.React.useCallback(((e,t)=>{x(e),S(t)}),[]);o.React.useEffect((()=>{const e=g.filter((e=>{const t=C[e.id];if(!t)return!1;const a=t.dataSource.getLayerDefinition(),i=(null==a?void 0:a.type)===o.SupportedLayerServiceTypes.Table;return t.editable&&i&&("full"===t.privilege||"normal"===t.privilege&&e.addRecords)}));k(e)}),[g,C]);const Ne=o.React.useCallback((()=>{const e=I[0].id;x(e),S(null)}),[I]),De=o.React.useCallback((e=>Me(void 0,void 0,void 0,(function*(){var a;try{const i=v(e),o=b(i),r=yield o.createJSAPILayerByDataSource();let s;const l=g.filter((t=>t.id===e))[0];if(!l)return;if(l.layerHonorMode===t.Webmap)s=r.formTemplate;else{const e=m(o.getLayerDefinition()),t=ie(l.groupedFields.asMutable({deep:!0}),e);s=new n.default({elements:t})}const d=yield Q(o),u=r.userHasFullEditingPrivileges,p=null===(a=r.editingEnabled)||void 0===a||a;let f;f=d||u&&p?"full":p?"normal":"none";const h=(yield X(r.url))||c;return{id:l.id,dataSource:o,layer:r,formTemplate:s,editable:h,privilege:f}}catch(e){console.error(e)}}))),[c,g]),Oe=o.React.useCallback((e=>Me(void 0,void 0,void 0,(function*(){const t=yield De(e);R((a=>{const i={};for(const o of g)o.id===e?i[o.id]=t:a[o.id]&&(i[o.id]=a[o.id]);return i}))}))),[De,g]);o.React.useEffect((()=>{Me(void 0,void 0,void 0,(function*(){const e={};for(const t of g){const a=t.id;v(a)&&(e[t.id]=yield De(t.id))}R(e)}))}),[g,De]);const Fe=o.hooks.useLatest(j),Ae=o.React.useCallback((e=>Me(void 0,void 0,void 0,(function*(){const t=Object.assign({},Fe.current);for(const a of e){const e=v(a);if(!e)return;let i=e.getSelectedRecords();const o=Object.keys(e.getSchema().fields||{}),r=e.getIdField(),n=te(e);if(i.length>0&&!i[0].getFieldValue(n)&&o.includes(n))try{const t=i.map((e=>e.getId())),a=yield e.query({outFields:[r,n],where:`${r} in (${t.join(",")})`});a.records&&(i=a.records)}catch(e){console.error(e)}t[a]=i}_(t),F(!1);if(1===Y(t).length){const[e,a]=Object.entries(t).find((([e,t])=>t.length>0));x(e),S(a[0].feature)}else x(null),S(null)}))),[Fe]),Pe=o.React.useMemo((()=>g.map((e=>e.id)).asMutable()),[g]),Ve=Y(j).length,Ue=g.length>0,Be=B("initAttEmptyMessage"),ze=Ue?h||B("noRecordTips"):Be;let We;return We=y?w?"form":"new":Ve>0?"list":"empty",(0,o.jsx)("div",{className:"jimu-widget widget-edit esri-widget",css:o.css`
    &.widget-edit {
      height: 100%;
      padding: 12px;
      background:
        radial-gradient(circle at top right, rgba(19, 108, 185, 0.14), transparent 34%),
        linear-gradient(180deg, #f7fbff 0%, #eef4fb 100%);

      .jimu-loading {
        z-index: 1;
      }
      .edit-con {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        border: 1px solid rgba(31, 111, 180, 0.14);
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.96);
        box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
      }
      .attr-height {
        overflow-y: auto;
        height: calc(100% - 113px);
        padding: 0 10px 10px;
      }
      .esri-feature-form {
        background-color: transparent;
      }
      .esri-feature-form__group,
      .esri-feature-form__field {
        border-radius: 16px;
        background: rgba(247, 250, 255, 0.96);
        border: 1px solid rgba(148, 163, 184, 0.18);
        box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);
      }
      .esri-feature-form__group {
        padding: 8px;
        margin-bottom: 12px;
      }
      .esri-feature-form__field {
        padding: 12px;
        margin-bottom: 10px;
      }
      .esri-feature-form__label {
        color: #0f172a;
        font-weight: 600;
      }
      .esri-input,
      calcite-input,
      calcite-text-area,
      calcite-input-date-picker,
      calcite-input-time-picker {
        --calcite-color-border-input: rgba(148, 163, 184, 0.5);
        --calcite-color-brand: #1d4ed8;
        --calcite-color-focus: #2563eb;
      }
    }
  `},A&&(0,o.jsx)(r.Loading,null),(0,o.jsx)("div",{className:"edit-con surface-1 border-0 h-100"},(0,o.jsx)(Se,{widgetLabel:l,description:f,hasTableLayerAdd:I.length>0,featureFormStep:We,activeLayerInfo:U,activeFeature:w,editCount:Ve,onBack:Ce,onNew:Ne}),(0,o.jsx)("div",{className:(0,o.classNames)("attr-height",{"d-none":"form"!==We&&"new"!==We}),ref:V},"new"===We&&(0,o.jsx)(Ee,{addLayersConfig:I,activeId:y,onChange:x})),"list"===We&&(0,o.jsx)(ke,{editFeatures:j,layersInfo:C,layersOrder:Pe,onClickItem:Ie}),"empty"===We&&(0,o.jsx)(pe,{emptyTips:ze}),"form"===We&&ge.length>0&&$&&(0,o.jsx)(je,{buttons:ge}),"new"===We&&xe.length>0&&(0,o.jsx)(je,{buttons:xe})),E&&(0,o.jsx)(be,{title:B("deleteRecord"),message:B("deleteRecordTips"),confirmText:B("delete"),cancelText:B("keepRecord"),onConfirm:ye,onCancel:he}),T&&(0,o.jsx)(be,{title:B("selectionChangeConfirmTitle"),message:B("selectionChangeConfirmTips"),confirmText:B("discardConfirm"),cancelText:B("discardCancel"),onConfirm:_e,onCancel:Re}),(0,o.jsx)(Te,{useDataSources:u,unsavedChange:O,onDataSourceCreated:Oe,onSelectionChange:Ae}))};var Pe=f(2686),Ve=f(5514),Ue=f.n(Ve),Be=f(2243),ze=f(8816),We=function(e,t,a,i){return new(a||(a=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}l((i=i.apply(e,t||[])).next())}))};const Ge=e=>{const{config:t,jimuMapView:a,editContainer:r,canEditFeature:n}=e,{mapViewsConfig:s,relatedRecords:l,liveDataEditing:c}=t,u=o.React.useRef(null),p=o.React.useCallback((()=>{u.current&&!u.current.destroyed&&u.current.destroy()}),[]);o.React.useEffect((()=>()=>{p()}),[p]);const[f,g]=o.React.useState([]),[m,h]=o.React.useState(!1),y=o.React.useCallback((()=>{var e,t,i,r;if(!a)return;let u=a.getAllJimuLayerViews();const p=null==s?void 0:s[a.id],f=null==p?void 0:p.customizeLayers,m=null==p?void 0:p.customJimuLayerViewIds,v=(null==p?void 0:p.layersConfig)||(0,o.Immutable)([]);f&&(u=u.sort(((e,t)=>v.findIndex((t=>t.id===e.layerDataSourceId))-v.findIndex((e=>e.id===t.layerDataSourceId)))));const y=((null===(r=null===(i=null===(t=null===(e=a.view)||void 0===e?void 0:e.map)||void 0===t?void 0:t.allLayers)||void 0===i?void 0:i.toArray)||void 0===r?void 0:r.call(i))||[]).filter((e=>{const t=d.includes(e.type),a=!u.find((t=>t.layer===e));return t&&a})),x=u.filter((e=>{const t=e.layer;return d.includes(t.type)})),w=[];x.forEach((e=>{const t=function(e,t,a,i){const r=e.layer,n=!!r.url,s=r.id.toString().includes("jimu-draw-measurements-layer"),l=r[o.ExBAddedJSAPIProperties.EXB_NOT_EDITABLE];let d=!0;d=e.fromRuntime?i:!t||a.includes(e.id);const c=e.isLayerVisible();return n&&!s&&!l&&d&&c}(e,f,m,c);t?w.push(e):y.push(e.layer)}));const S=y.map((e=>ae(e))),j=w.map((e=>We(void 0,void 0,void 0,(function*(){var t,a,i;const o=yield e.getOrCreateLayerDataSource(),r=null===(i=null===(a=null===(t=v.filter((e=>e.id===(null==o?void 0:o.id))))||void 0===t?void 0:t[0])||void 0===a?void 0:a.asMutable)||void 0===i?void 0:i.call(a,{deep:!0}),s=b(o);return re(s,r,e,l,n)}))));Promise.all(j).then((e=>{var t;h(e.some((e=>e.showUpdateBtn)));const i=e.map((e=>e.editorLayerInfo)).concat(S),o=[],r=a.view.map.allTables.toArray()||[];for(const e of i){if(!((null===(t=e.formTemplate)||void 0===t?void 0:t.elements)||[]).some((e=>"relationship"===e.type)))continue;const a=e.layer.relationships;for(const t of a){const a=t.relatedTableId,i=r.find((e=>e.layerId===a));if(!i)continue;o.find((e=>e.layer===i))||o.push({layer:i,enabled:!0,addEnabled:e.addEnabled,updateEnabled:e.updateEnabled,deleteEnabled:e.deleteEnabled})}}g(i.concat(o))}))}),[n,a,c,s,l]);o.React.useEffect((()=>{y()}),[y]);const x=o.hooks.useLatest(s),w=o.hooks.useLatest(y);o.React.useEffect((()=>{var e,t;if(!(null===(t=null===(e=null==a?void 0:a.view)||void 0===e?void 0:e.map)||void 0===t?void 0:t.layers))return;const i=()=>{w.current()};a.addJimuLayerViewsVisibleChangeListener(i);let o=-1;const r=a.view.map.layers.on("after-changes",(()=>{window.clearTimeout(o),o=window.setTimeout(w.current,100)}));return()=>{var e,t;null===(e=null==a?void 0:a.removeJimuLayerViewsVisibleChangeListener)||void 0===e||e.call(a,i),null===(t=null==r?void 0:r.remove)||void 0===t||t.call(r),window.clearTimeout(o)}}),[a,x,w]);const S=o.React.useCallback((()=>We(void 0,void 0,void 0,(function*(){const e=u.current,{selfSnapping:o,featureSnapping:r,gridSnapping:n=!1,defaultSelfEnabled:s,defaultFeatureEnabled:l,defaultGridEnabled:d=!1,defaultTooltipEnabled:c,snapSettingMode:p,defaultSnapLayers:f,tooltip:g,templateFilter:m,initialReshapeMode:v}=t;e.tooltipOptions.enabled=c,e.snappingOptions.enabled=s||l||d,e.snappingOptions.selfEnabled=s,e.snappingOptions.featureEnabled=l,e.snappingOptions.gridEnabled=d&&n,e.snappingOptions.featureSources=yield Pe.SnappingUtils.getSnappingFeatureSourcesCollection(a,f);const b=p===i.Flexible&&(o||r||n);e.visibleElements.snappingControls=b,e.visibleElements.snappingControlsElements={enabledToggle:o||r||n,selfEnabledToggle:o,featureEnabledToggle:r,layerList:r,layerListToggleLayersButton:r,gridEnabledToggle:n,gridControls:n},e.visibleElements.tooltipsToggle=g;const h=b||g;e.visibleElements.settingsMenu=h,e.supportingWidgetDefaults={featureTemplates:{visibleElements:{filter:m}},sketch:{defaultUpdateOptions:{tool:v?"reshape":"transform"}}}}))),[t,a]),j=o.hooks.usePrevious(a),_=o.hooks.usePrevious(f),C=o.hooks.usePrevious(t),R=o.React.useCallback(((e,t)=>We(void 0,void 0,void 0,(function*(){const i=a.getDataSourceIdByAPILayer(e),o=v(i),r=o.getIdField(),n=t.addedFeatures.map((e=>e.objectId));let s=[];if(n.length>0){const t=yield e.queryFeatures({where:`${r} IN (${n.join(",")})`,outFields:["*"],returnGeometry:!1});s=(null==t?void 0:t.features)||[]}const l=t.updatedFeatures.map((e=>e.objectId));let d=[];if(l.length>0){const t=yield e.queryFeatures({where:`${r} IN (${l.join(",")})`,outFields:["*"],returnGeometry:!1});d=(null==t?void 0:t.features)||[]}const c=t.deletedFeatures.map((e=>new Oe.default({attributes:{[r]:e.objectId}})));ne(o,{addFeatures:s,updateFeatures:d,deleteFeatures:c})}))),[a]);return o.React.useEffect((()=>{if(!a||!r.current)return;if(!u.current||a!==j){p();const e=document.createElement("div");e.className="h-100",r.current.appendChild(e),u.current=new ze.default({container:e,view:a.view}),S()}const e=u.current,i=[];if(f!==_){for(const e of f){if(!e.enabled)continue;const t=e.layer;if("subtype-sublayer"===t.type){const e=t.parent,a=e.on("edits",(t=>{R(e,t)}));i.push(a)}else{const e=t,a=e.on("edits",(t=>{R(e,t)}));i.push(a)}}e.layerInfos=f,e.visibleElements.editFeaturesSection=m}return t!==C&&S(),()=>{for(const e of i)e.remove()}}),[t,p,r,f,a,C,_,j,m,R,S]),u.current};var Je=function(e,t,a,i){return new(a||(a=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}l((i=i.apply(e,t||[])).next())}))};const He=e=>{var t;const{widgetId:a,config:i,canEditFeature:n,useMapWidgetIds:s}=e,{mapViewsConfig:l}=i,[d,u]=o.React.useState(null),[p,f]=o.React.useState(),[g,m]=o.React.useState({}),b=o.React.useRef(null),h=Ge({config:i,jimuMapView:d,editContainer:b,canEditFeature:n}),y=o.React.useCallback((e=>Je(void 0,void 0,void 0,(function*(){if(!e||e.isDestroyed())return;const t=null==l?void 0:l[e.id],a=null==t?void 0:t.customizeLayers,i=null==t?void 0:t.customJimuLayerViewIds,r=[],n=e.jimuLayerViews;for(const e in n){const t=n[e];if(!t.isLayerVisible())continue;if(a&&!(null==i?void 0:i.includes(e)))continue;const s=yield t.getOrCreateLayerDataSource();if(!s||!c.includes(s.type))continue;const l=s.getMainDataSource(),d=s.getRootDataSource(),u=(0,o.Immutable)({dataSourceId:s.id,mainDataSourceId:null==l?void 0:l.id,dataViewId:s.dataViewId,rootDataSourceId:null==d?void 0:d.id});r.push(u)}f(r)}))),[l]),x=o.React.useCallback((e=>Je(void 0,void 0,void 0,(function*(){e&&(yield e.whenJimuMapViewLoaded(),yield e.whenAllJimuLayerViewLoaded()),u(e),y(e)}))),[y]);o.React.useEffect((()=>{s&&0!==s.length||u(null)}),[s]);const w=o.React.useCallback((e=>{const t=Object.assign({},g);for(const a of e){const e=v(a);if(!e)continue;const i=e.getSelectedRecords();t[a]=i}m(t);0===Y(t).length&&(null==h?void 0:h.activeWorkflow)&&h.cancelWorkflow()}),[g,h]),S=o.React.useRef(!1),j=null===(t=o.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo))[a])||void 0===t?void 0:t.state,_=o.React.useCallback((e=>Je(void 0,void 0,void 0,(function*(){if(!h||S.current)return;const t=((e,t)=>{const a=[],i=null==t?void 0:t.dataSourceId;for(const t in e)0===t.indexOf(i)&&(null==e?void 0:e[t])&&a.push(...e[t]);return a})(e,d);if(j!==o.WidgetState.Closed&&0!==t.length||!h.activeWorkflow){if(1===t.length){const t=(yield oe(d,e))[0];h.startUpdateWorkflowAtFeatureEdit(t)}else if(t.length>1){const t=yield oe(d,e);h.startUpdateWorkflowAtMultipleFeatureSelection(t)}}else h.cancelWorkflow()}))),[h,d,j]);o.React.useEffect((()=>{_(g)}),[_,g]);const[C,R]=o.React.useState(!1),I=o.hooks.useLatest(g);return o.React.useEffect((()=>{if(!h)return;const e=Be.watch((()=>h.viewModel.state),((e,t)=>{var a;if("ready"===e&&!h.viewModel.updating)for(const e of Object.keys(I.current))if(I.current[e].length>0){v(e).clearSelection()}if(["awaiting-update-feature-candidate","editing-attributes"].includes(e)&&"candidates"in((null===(a=h.viewModel.activeWorkflow)||void 0===a?void 0:a.data)||{})){const e=h.viewModel.activeWorkflow.data.candidates||[],t=[],a={};for(const i of e)a[i.layer.id]||(a[i.layer.id]=[],t.push(i.layer)),a[i.layer.id].push(i);S.current=!0;for(const e of t){const t=d.getMapDataSource(),i=o.dataSourceUtils.getDataSourceIdByJSAPILayer(t,e),r=v(i);if(r){const t=a[e.id],i=[],o=[];for(const e of t){const t=r.buildRecord(e);o.push(t),i.push(t.getId())}const n=r.getSelectedRecordIds();ee(n,i)||0===n.length&&0===i.length||r.selectRecordsByIds(i,o)}}window.setTimeout((()=>{S.current=!1}),50)}})),t=Be.watch((()=>h.viewModel.updating),(e=>{var t,a;!e&&["editing-existing-feature"].includes(h.viewModel.state)&&!h.viewModel.featureFormViewModel&&h.activeWorkflow&&(null===(a=null===(t=h.activeWorkflow)||void 0===t?void 0:t.start)||void 0===a||a.call(t))})),a=Be.watch((()=>{var e;return null===(e=h.activeWorkflow)||void 0===e?void 0:e.hasPendingEdits}),(e=>{var t;"create-features"===(null===(t=h.viewModel.activeWorkflow)||void 0===t?void 0:t.type)?R(!0):R(!!e)}));return()=>{e.remove(),t.remove(),a.remove()}}),[I,h,d]),s&&0!==s.length?(0,o.jsx)("div",{className:"jimu-widget widget-edit esri-widget",css:o.css`
  &.widget-edit {
    height: 100%;
    padding: 12px;
    background:
      radial-gradient(circle at top right, rgba(19, 108, 185, 0.14), transparent 34%),
      linear-gradient(180deg, #f7fbff 0%, #eef4fb 100%);
  }

  .edit-con {
    height: 100%;
    overflow: hidden;
    border-radius: 22px;
    border: 1px solid rgba(31, 111, 180, 0.14);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  }

  .edit-con .esri-editor {
    background: transparent;
  }

  .edit-con .esri-editor__header,
  .edit-con .esri-feature-form__form-header,
  .edit-con .esri-editor__controls {
    background:
      linear-gradient(135deg, rgba(219, 234, 254, 0.9), rgba(255, 255, 255, 0.95));
  }

  .edit-con .esri-editor__header {
    border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  }

  .edit-con .esri-widget__heading {
    color: #0f172a;
    font-weight: 700;
  }

  .edit-con .esri-editor__content,
  .edit-con .esri-editor__scroller {
    background: transparent;
  }

  .edit-con .esri-item-list__list-item,
  .edit-con .esri-feature-form__field,
  .edit-con .esri-editor__warning-card,
  .edit-con calcite-panel {
    border-radius: 16px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    box-shadow: 0 10px 22px rgba(15, 23, 42, 0.05);
  }
`},(0,o.jsx)("div",{className:"edit-con h-100",ref:b}),(0,o.jsx)(Pe.JimuMapViewComponent,{useMapWidgetId:null==s?void 0:s[0],onActiveViewChange:x}),s.length>0&&!d&&(0,o.jsx)("div",{className:"jimu-secondary-loading"}),(0,o.jsx)(Te,{useDataSources:p,unsavedChange:C,onSelectionChange:w})):(0,o.jsx)(r.WidgetPlaceholder,{autoFlip:!0,iconSize:"large",style:{position:"absolute",left:0,top:0},icon:Ue(),"data-testid":"editPlaceholder"})};var $e=function(e,t,a,i){return new(a||(a=Promise))((function(o,r){function n(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}l((i=i.apply(e,t||[])).next())}))};class qe extends o.WidgetVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.7.0",description:"Add layerHonorMode to config for support smart form.",upgrader:e=>$e(this,void 0,void 0,(function*(){let a=e;const i=(e,t)=>{const a=[],i=e=>(e.forEach((e=>{if(e.groupKey)i(e.children);else{const i=t.find((t=>t.name===e.jimuName));l.includes(e.jimuName)||a.push(Object.assign(Object.assign({},e),{editable:null==i?void 0:i.editable,editAuthority:!!(null==i?void 0:i.editable)&&(null==e?void 0:e.editAuthority)}))}})),a);return i(e)};return yield Promise.all(a.layersConfig.map((e=>new Promise((t=>{o.DataSourceManager.getInstance().createDataSourceByUseDataSource(e.useDataSource).then((a=>{const o=null==a?void 0:a.getLayerDefinition(),r=(null==o?void 0:o.fields)||[],n=e.groupedFields.map((e=>{var t;const a=r.find((t=>t.name===e.jimuName));return e.groupKey?Object.assign(Object.assign({},e),{editable:!0,editAuthority:!(null===(t=null==e?void 0:e.children)||void 0===t?void 0:t.some((e=>!1===e.editAuthority))),children:i(null==e?void 0:e.children,r)}):Object.assign(Object.assign({},e),{editable:null==a?void 0:a.editable,editAuthority:!!(null==a?void 0:a.editable)&&(null==e?void 0:e.editAuthority)})})).filter((e=>!l.includes(e.jimuName)));t(n)})).catch((()=>{t([])}))}))))).then((e=>(e.forEach(((e,i)=>{const r=a.layersConfig[i].showFields.filter((e=>!l.includes(e.jimuName)));let n=[];const s=e.asMutable({deep:!0});e.forEach((e=>{e.groupKey?n=n.concat(e.children):n.push(e)})),r.forEach((e=>{n.find((t=>t.jimuName===e.jimuName))||s.push(e)})),a=a.setIn(["layersConfig",i,"groupedFields"],(0,o.Immutable)(s)),a=a.setIn(["layersConfig",i,"layerHonorMode"],t.Custom)})),Promise.resolve(a)))).catch((()=>Promise.resolve(a)))}))},{version:"1.10.0",description:"Set old app default snapping to true",upgrader:e=>{let t=e;return t=t.set("selfSnapping",!0).set("featureSnapping",!0),t}},{version:"1.12.0",description:'Set "undefined" option to "false", and remove not editable layer',upgrader:t=>$e(this,void 0,void 0,(function*(){var a,i,r;let n=t;const s=n.editMode===e.Geometry,l=o.DataSourceManager.getInstance(),d=[];for(const e of n.layersConfig){let t;try{t=yield l.createDataSourceByUseDataSource(null==e?void 0:e.useDataSource)}catch(e){console.error(e)}if(!t){d.push(e);continue}const n=null==t?void 0:t.getLayerDefinition(),c=(null===(a=null==t?void 0:t.layer)||void 0===a?void 0:a.isTable)||(null==n?void 0:n.type)===o.SupportedLayerServiceTypes.Table;if(s&&c)continue;const u=null==n?void 0:n.allowGeometryUpdates;if(null===(r=null===(i=null==t?void 0:t.layer)||void 0===i?void 0:i.editingEnabled)||void 0===r||r){let t;t=e.updateGeometries?Object.assign(Object.assign({},e),{updateRecords:!0,updateAttributes:!0,updateGeometries:u&&!0}):Object.assign(Object.assign({},e),{updateRecords:!1,updateAttributes:!1,updateGeometries:!1}),d.push(t)}}return n=n.setIn(["layersConfig"],d),n}))},{version:"1.13.0",description:"Update snap options",upgrader:e=>{let t=e;return t.selfSnapping&&(t=t.set("defaultSelfEnabled",!0)),t.featureSnapping&&(t=t.set("defaultFeatureEnabled",!0)),t}},{version:"1.14.0",description:"Add predefine snapping options",upgrader:e=>{let t=e;return t=t.set("snapSettingMode",i.Flexible),t}},{version:"1.15.0",description:"Add general setting options",upgrader:e=>{let t=e;return t=t.set("tooltip",!0).set("templateFilter",!0).set("relatedRecords",!0),t}},{version:"1.16.0",description:"Update map mode config",upgradeFullInfo:!0,upgrader:t=>$e(this,void 0,void 0,(function*(){const a=t.widgetJson,i=a.config;if(!i)return t;let r=i;const{editMode:n,layersConfig:s}=i,l={},d=(e,t,a)=>$e(this,void 0,void 0,(function*(){try{const i=yield o.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,o.Immutable)({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:t}));if(!i)return console.error("Cannot create layer data source.",e),null;return`${a}-${i.jimuLayerId}`}catch(e){return console.error("Cannot create layer data source.",e),null}}));if(n===e.Geometry){const e=a.useMapWidgetIds[0];for(const t of s){const a=t.id,i=a.indexOf("-"),o=t.id.substring(0,i),r=`${e}-${o}`,n=yield d(a,o,r);if(!n)continue;const s=t.asMutable({deep:!0});if(l[r]){l[r].customJimuLayerViewIds.push(n);const e=l[r].layersConfig;e.push(s),l[r].layersConfig=e}else{const e={customizeLayers:!0,customJimuLayerViewIds:[n],layersConfig:[s]};l[r]=e}}r=r.set("mapViewsConfig",l)}const c=a.set("config",(0,o.Immutable)(r));return Object.assign(Object.assign({},t),{widgetJson:c})}))}]}}const Ke=new qe,Ye=t=>{const{id:a,label:i,config:r,useDataSources:n,useMapWidgetIds:s}=t,l=r.editMode===e.Attribute,[d,c]=o.React.useState(!1);return o.React.useEffect((()=>{w(void 0,void 0,void 0,(function*(){var e;const t=yield o.privilegeUtils.checkExbAccess(o.privilegeUtils.CheckTarget.Experience);return null===(e=null==t?void 0:t.capabilities)||void 0===e?void 0:e.canEditFeature})).then((e=>{c(e)}))}),[]),l?(0,o.jsx)(Ae,{label:i,config:r,canEditFeature:d,useDataSources:n}):(0,o.jsx)(He,{widgetId:a,config:r,canEditFeature:d,useMapWidgetIds:s})};Ye.versionManager=Ke;const Xe=Ye;function Qe(e){f.p=e}})(),g})())}}}));