System.register(["jimu-core","jimu-arcgis","esri/layers/FeatureLayer","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/Polyline","esri/request","esri/geometry/Point","esri/geometry/SpatialReference","esri/geometry/operators/geodesicProximityOperator","esri/geometry/operators/projectOperator","esri/geometry/operators/proximityOperator"],(function(e,t){var i={},o={},r={},n={},a={},l={},s={},u={},d={},c={},p={},m={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(p,"__esModule",{value:!0}),Object.defineProperty(m,"__esModule",{value:!0}),{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.React=e.React,i.ReactRedux=e.ReactRedux,i.css=e.css,i.jsx=e.jsx},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.default=e.default},function(e){n.default=e.default},function(e){a.default=e.default},function(e){l.default=e.default},function(e){s.default=e.default},function(e){u.default=e.default},function(e){d.default=e.default},function(e){Object.keys(e).forEach((function(t){c[t]=e[t]}))},function(e){Object.keys(e).forEach((function(t){p[t]=e[t]}))},function(e){Object.keys(e).forEach((function(t){m[t]=e[t]}))}],execute:function(){e((()=>{var e={89:e=>{"use strict";e.exports=n},422:e=>{"use strict";e.exports=u},196:e=>{"use strict";e.exports=l},205:e=>{"use strict";e.exports=d},142:e=>{"use strict";e.exports=c},835:e=>{"use strict";e.exports=p},983:e=>{"use strict";e.exports=m},633:e=>{"use strict";e.exports=r},620:e=>{"use strict";e.exports=a},640:e=>{"use strict";e.exports=s},686:e=>{"use strict";e.exports=o},244:e=>{"use strict";e.exports=i}},t={};function g(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,g),r.exports}g.d=(e,t)=>{for(var i in t)g.o(t,i)&&!g.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="";var f={};return g.p=window.jimuConfig.baseUrl,(()=>{"use strict";g.r(f),g.d(f,{__set_webpack_public_path__:()=>ce,default:()=>de});var e=g(244),t=g(686),i=g(633),o=g(89),r=g(620),n=g(196);const a={_widgetLabel:"Route Milepoint 1.17",title:"Route Milepoint 1.17",noMapConfigured:"Map widget is not configured. Connect this widget to a map before clicking to locate a milepoint.",noRouteLayerConfigured:"Route layer is not configured. Open the widget settings and select a route layer.",noRouteSelected:"No route is selected. Select exactly one route in the app or choose a route below.",multipleRoutesSelected:"More than one unique route is selected. Reduce the selection to one route or choose a route below.",clickMapInstruction:"With one route active, click anywhere on the map to return the nearest milepoint on that route.",searchPlaceholder:"Search route ID or route name",searchButton:"Search",clearManualRoute:"Use app selection",clearResult:"Clear result",loading:"Finding nearest milepoint\u2026",searching:"Searching\u2026",selectedRouteId:"Route ID",rawMeasure:"Raw measure",formattedMilepoint:"Formatted milepoint",snappedPoint:"Snapped point",distanceFromClick:"Distance from click",locatingStrategy:"Locating strategy",diagnostics:"Diagnostics",routeSearch:"Find a route",searchHelp:"Use route search only when the app does not already provide exactly one selected route.",clickedPoint:"Clicked point",approximate:"Approximate",approximateBadge:"Approximate",yes:"Yes",no:"No",routeName:"Route label",noSearchResults:"No routes matched the search text.",searchDisabled:"Select a route layer and route ID field in the widget settings before searching.",milepointLabel:"Milepoint",offsetLabel:"Offset",measureLabel:"Measure",readyToLocate:"Click the map to snap to the selected route and return the nearest milepoint.",chooseRoute:"Choose route",changeRoute:"Change route",hideRouteSearch:"Hide route search",viewDetails:"View details"},l=e.css`
  width: 100%;
  height: 100%;
  overflow: auto;

  .route-milepoint-widget {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0.875rem;
    background: var(--light-100);
    color: var(--black-800);
  }

  .route-milepoint-widget__shell {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .route-milepoint-widget__hero,
  .route-milepoint-widget__panel,
  .route-milepoint-widget__result-card {
    border: 1px solid var(--light-300);
    border-radius: 0.875rem;
    background: var(--white);
    box-shadow: 0 6px 18px rgba(17, 24, 39, 0.06);
  }

  .route-milepoint-widget__hero {
    padding: 1rem;
    background: linear-gradient(180deg, var(--primary-100) 0%, var(--white) 55%);
  }

  .route-milepoint-widget__eyebrow {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--dark-600);
  }

  .route-milepoint-widget__route-chip {
    display: inline-flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 0.75rem;
    padding: 0.7rem 0.8rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .route-milepoint-widget__route-chip-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--dark-500);
  }

  .route-milepoint-widget__route-chip-value {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.15;
  }

  .route-milepoint-widget__route-name {
    margin: 0.625rem 0 0;
    font-size: 0.9rem;
    color: var(--dark-700);
  }

  .route-milepoint-widget__status {
    margin: 0.75rem 0 0;
    font-size: 0.9rem;
    line-height: 1.45;
    color: var(--dark-700);
  }

  .route-milepoint-widget__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.875rem;
  }

  .route-milepoint-widget__panel,
  .route-milepoint-widget__result-card {
    padding: 1rem;
  }

  .route-milepoint-widget__panel-label {
    display: block;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--dark-600);
  }

  .route-milepoint-widget__panel-help,
  .route-milepoint-widget__result-help,
  .route-milepoint-widget__result-caption {
    margin: 0.5rem 0 0;
    font-size: 0.88rem;
    line-height: 1.45;
    color: var(--dark-600);
  }

  .route-milepoint-widget__search-form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.5rem;
    margin-top: 0.75rem;
    align-items: center;
  }

  .route-milepoint-widget__input,
  .route-milepoint-widget__button,
  .route-milepoint-widget__list-button {
    font: inherit;
  }

  .route-milepoint-widget__input {
    width: 100%;
    min-width: 0;
    padding: 0.625rem 0.75rem;
    border: 1px solid var(--light-400);
    border-radius: 0.75rem;
    background: var(--white);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .route-milepoint-widget__input:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.12);
  }

  .route-milepoint-widget__button,
  .route-milepoint-widget__list-button {
    border-radius: 0.75rem;
    border: 1px solid var(--primary-500);
    background: var(--primary-500);
    color: var(--white);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  }

  .route-milepoint-widget__button {
    padding: 0.625rem 0.85rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .route-milepoint-widget__button:hover,
  .route-milepoint-widget__list-button:hover {
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  .route-milepoint-widget__button[disabled],
  .route-milepoint-widget__list-button[disabled] {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .route-milepoint-widget__button--secondary {
    background: var(--white);
    color: var(--primary-600);
  }

  .route-milepoint-widget__message {
    margin: 0.75rem 0 0;
    padding: 0.75rem 0.85rem;
    border-radius: 0.75rem;
    font-size: 0.88rem;
    line-height: 1.4;
    background: var(--light-100);
    border: 1px solid var(--light-300);
  }

  .route-milepoint-widget__message--error {
    background: #fff1f0;
    border-color: #ffccc7;
    color: #a8071a;
  }

  .route-milepoint-widget__message--warning {
    background: #fffbe6;
    border-color: #ffe58f;
    color: #614700;
  }

  .route-milepoint-widget__results {
    margin-top: 0.75rem;
  }

  .route-milepoint-widget__results-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
  }

  .route-milepoint-widget__list-button {
    width: 100%;
    padding: 0.75rem 0.85rem;
    text-align: left;
    border-color: var(--light-300);
    background: var(--white);
    color: var(--black-800);
  }

  .route-milepoint-widget__list-title {
    display: block;
    font-size: 0.92rem;
    font-weight: 700;
  }

  .route-milepoint-widget__list-meta {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.82rem;
    color: var(--dark-600);
  }

  .route-milepoint-widget__result-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .route-milepoint-widget__result-label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--dark-600);
  }

  .route-milepoint-widget__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
    background: #fffbe6;
    border: 1px solid #ffe58f;
    color: #614700;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .route-milepoint-widget__loading {
    margin-top: 0.75rem;
    padding: 0.9rem 0.95rem;
    border-radius: 0.75rem;
    background: var(--light-100);
    border: 1px solid var(--light-300);
    font-size: 0.9rem;
    color: var(--dark-700);
  }

  .route-milepoint-widget__milepoint {
    margin: 0.75rem 0 0;
    font-size: clamp(2rem, 10vw, 3rem);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    color: var(--black-800);
  }

  .route-milepoint-widget__milepoint--placeholder {
    color: var(--dark-400);
  }

  .route-milepoint-widget__metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    gap: 0.625rem;
    margin-top: 0.875rem;
  }

  .route-milepoint-widget__metric-card {
    padding: 0.8rem;
    border-radius: 0.8rem;
    border: 1px solid var(--light-300);
    background: var(--light-100);
  }

  .route-milepoint-widget__metric-label {
    display: block;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--dark-500);
  }

  .route-milepoint-widget__metric-value {
    display: block;
    margin-top: 0.3rem;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .route-milepoint-widget__details {
    margin-top: 0.9rem;
  }

  .route-milepoint-widget__details summary {
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary-700);
  }

  .route-milepoint-widget__details-grid {
    display: grid;
    grid-template-columns: minmax(7rem, auto) 1fr;
    gap: 0.5rem 0.75rem;
    margin-top: 0.75rem;
  }

  .route-milepoint-widget__details-grid dt {
    margin: 0;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--dark-600);
  }

  .route-milepoint-widget__details-grid dd {
    margin: 0;
    font-size: 0.88rem;
    color: var(--black-800);
    word-break: break-word;
  }

  .route-milepoint-widget__diagnostics-list {
    margin: 0.75rem 0 0;
    padding-left: 1rem;
    font-size: 0.82rem;
    line-height: 1.45;
    color: var(--dark-700);
  }

  @media (max-width: 480px) {
    .route-milepoint-widget__search-form {
      grid-template-columns: 1fr;
    }

    .route-milepoint-widget__details-grid {
      grid-template-columns: 1fr;
    }
  }
`;var s=g(640),u=g(422),d=g(205),c=g(142),p=g(835),m=g(983);function h(e){return null==e||0===e.trim().length}function w(e,t=3){return Number.isFinite(e)?Math.max(0,Math.min(6,Math.trunc(e))):t}function v(e,t){const i="number"==typeof e?e:null!=e?Number(e):Number.NaN;return Number.isFinite(i)&&i>0?i:t}function y(e,t=3){const i=w(t);return Number.isFinite(e)?e.toFixed(i):"--"}function _(e,t=3){return`MP ${y(e,t)}`}function x(e,t=3){return`${y(e,t)} m`}function b(e){var t;return null!==(t=null==e?void 0:e.type)&&void 0!==t?t:""}function R(e){return e.replace(/'/g,"''")}function M(e){const t=b(e);return"string"===t||"guid"===t||"global-id"===t}function N(e,t,i){if(!e)return null;if(function(e){const t=b(e);return"small-integer"===t||"integer"===t||"single"===t||"double"===t||"oid"===t||"big-integer"===t}(i)){const i=Number(t);return Number.isFinite(i)?`${e} = ${i}`:null}return`${e} = '${R(t)}'`}function S(e,t,i){if(!e||!M(i))return null;return`${e} LIKE '${R(t)}%'`}function I(e,t,i){if(!e||!M(i))return null;return`${e} LIKE '%${R(t)}%'`}class k extends Error{constructor(e,t,i=[]){super(t),this.name="RouteMilepointError",this.code=e,this.diagnostics=i}}var j=function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))};const L=new d.default({wkid:3857}),D=.01,F=1e-4,O=1e-6,$=200;function C(e){return j(this,void 0,void 0,(function*(){var t;const{clickedPoint:i,selectedRoute:o,options:r}=e,a=null===(t=r.routeIdField)||void 0===t?void 0:t.trim();if(!i)throw new k("INVALID_CONFIG","A clicked point is required.");if(!(null==o?void 0:o.routeId))throw new k("NO_ROUTE_SELECTED","Exactly one route must be selected before clicking the map.");if(!a)throw new k("INVALID_CONFIG","Route ID field is required in the widget configuration.");return yield r.layer.load(),E(r.layer),h(r.lrsNetworkLayerUrl)?function(e){return j(this,void 0,void 0,(function*(){var t,i;const{clickedPoint:o,selectedRoute:r,options:a}=e,l=[],s=function(e,t,i){var o,r;const n=null!==(r=null===(o=e.fieldsIndex)||void 0===o?void 0:o.get(t))&&void 0!==r?r:null,a=N(t,i,n);if(!a)throw new k("INVALID_CONFIG",`Unable to build a route query for field ${t}. Confirm that the field exists and the route ID is valid.`);return a}(a.layer,a.routeIdField,r.routeId),u=K([a.routeIdField,a.routeDisplayField,a.layer.objectIdField]),d=yield function(e,t,i,o,r,n){return j(this,void 0,void 0,(function*(){const a=e.createQuery();a.where=t,a.returnGeometry=!1,a.outFields=[],H(a,n);const l=yield e.queryObjectIds(a);if(!l||0===l.length)return[];const s=[...l].sort(((e,t)=>e-t)),u=[];for(let t=0;t<s.length;t+=$){const a=s.slice(t,t+$),l=e.createQuery();l.objectIds=a,l.returnGeometry=o,l.returnM=r,l.returnZ=!0,l.outFields=i,H(l,n);const d=yield e.queryFeatures(l);u.push(...d.features)}return u.sort(((t,i)=>{var o,r,n,a;return Number(null!==(r=null===(o=t.attributes)||void 0===o?void 0:o[e.objectIdField])&&void 0!==r?r:0)-Number(null!==(a=null===(n=i.attributes)||void 0===n?void 0:n[e.objectIdField])&&void 0!==a?a:0)})),u}))}(a.layer,s,u,!0,!0,a.gdbVersion);if(0===d.length)throw new k("ROUTE_NOT_FOUND",`Route ${r.routeId} was not found in the configured route layer.`,l);l.push(`Route feature count=${d.length}.`);const p=yield function(e,t,i,o,r){return j(this,void 0,void 0,(function*(){var t;const a=[];let l=!1,s=!1,u=o.displayName;for(const o of e){const e=o.geometry;e&&0!==e.paths.length&&(!u&&i&&(u=Y(null===(t=o.attributes)||void 0===t?void 0:t[i])),l=l||Boolean(e.hasM),s=s||Boolean(e.hasZ),a.push(e))}if(0===a.length)throw new k("EMPTY_GEOMETRY",`Route ${o.routeId} was found, but its geometry is empty.`,r);const d=a[0].spatialReference,c=[];for(const e of a){if(!G(d,e.spatialReference))throw new k("PROJECTION_ERROR",`Route ${o.routeId} includes geometries with inconsistent spatial references.`,r);for(const t of e.paths)t.length>0&&c.push(t.map((e=>[...e])))}const p=new n.default({spatialReference:d,hasZ:s,hasM:l,paths:c});return p.routeName=u,r.push(`Combined path count=${p.paths.length}.`),r.push(`Combined hasM=${Boolean(p.hasM)}.`),p}))}(d,a.routeIdField,a.routeDisplayField,r,l),g=yield V(o,p.spatialReference);let f,h,w;if(p.spatialReference.isGeographic){yield B(c);const e=c.getNearestCoordinate(p,g);if(!(null==e?void 0:e.coordinate))throw new k("SERVICE_ERROR","Failed to compute the nearest point on the selected route.",l);f=U(e.coordinate,p.spatialReference),h=yield function(e,t){return j(this,void 0,void 0,(function*(){const i=yield z(e,t);if(!e.hasM&&!e.hasZ||i.paths.length!==e.paths.length)return i;const o=i.paths.map(((t,i)=>{var o;const r=null!==(o=e.paths[i])&&void 0!==o?o:[];return t.map(((t,i)=>{var o,n;const a=W(null!==(o=r[i])&&void 0!==o?o:[],e.hasZ,e.hasM),l=e.hasZ?null!==(n=a.z)&&void 0!==n?n:0:void 0,s=e.hasM?a.m:void 0;return e.hasZ&&e.hasM?[t[0],t[1],null!=l?l:0,null!=s?s:null]:e.hasZ?[t[0],t[1],null!=l?l:0]:e.hasM?[t[0],t[1],null!=s?s:null]:[t[0],t[1]]}))}));return new n.default({spatialReference:t,hasZ:e.hasZ,hasM:e.hasM,paths:o})}))}(p,L),w=yield V(f,L),l.push("Nearest-point operator=geodesicProximityOperator."),l.push("Analysis geometry projected to WKID 3857 to interpolate between route vertices.")}else{yield B(m);const e=m.getNearestCoordinate(p,g);if(!(null==e?void 0:e.coordinate))throw new k("SERVICE_ERROR","Failed to compute the nearest point on the selected route.",l);f=U(e.coordinate,p.spatialReference),h=p,w=f,l.push("Nearest-point operator=proximityOperator.")}const y=yield V(f,null!==(t=o.spatialReference)&&void 0!==t?t:f.spatialReference),_=yield q(o,y),x=v(a.maxSnapDistanceMeters);if(l.push(`Computed distanceMeters=${_}.`),null!=x&&_>x)throw new k("TOO_FAR",`The clicked point is ${_.toFixed(2)} meters from the selected route, which exceeds the configured maximum snap distance of ${x.toFixed(2)} meters.`,l);const b=function(e,t,i){const o=[],r=[];let n=0,a=!1,l=!1;for(let o=0;o<e.paths.length;o+=1){const s=e.paths[o];for(let u=0;u<s.length-1;u+=1){const d=W(s[u],e.hasZ,e.hasM),c=W(s[u+1],e.hasZ,e.hasM),p=c.x-d.x,m=c.y-d.y,g=Math.hypot(p,m);if(g<=0)continue;const f=Z(((t.x-d.x)*p+(t.y-d.y)*m)/(g*g)),h=d.x+p*f,w=d.y+m*f,v=(t.x-h)*(t.x-h)+(t.y-w)*(t.y-w),y=d.m,_=c.m;Number.isFinite(y)&&Number.isFinite(_)?(a=!0,r.push({rawMeasure:y+(_-y)*f,approximate:!1,squaredDistance:v,pathIndex:o,segmentIndex:u,t:f})):i?(l=!0,r.push({rawMeasure:n+g*f,approximate:!0,squaredDistance:v,pathIndex:o,segmentIndex:u,t:f})):e.hasM&&(l=!0),n+=g}}if(0===r.length){const t=i?"The selected route does not contain valid M values, and approximate fallback could not be computed.":"The selected route does not contain valid M values at the snapped location. Configure an LRS network layer or enable approximate fallback if rough values are acceptable.";throw e.hasM||o.push("Route geometry is not flagged as M-aware."),l&&o.push("One or more snapped segments contained null or missing M values."),new k("ROUTE_NOT_M_AWARE",t,o)}r.sort(((e,t)=>e.squaredDistance!==t.squaredDistance?e.squaredDistance-t.squaredDistance:e.approximate!==t.approximate?e.approximate?1:-1:e.pathIndex!==t.pathIndex?e.pathIndex-t.pathIndex:e.segmentIndex-t.segmentIndex));const s=r[0],u=r.filter((e=>Math.abs(e.squaredDistance-s.squaredDistance)<=F)).filter((e=>e.approximate===s.approximate));if(u.some((e=>Math.abs(e.rawMeasure-s.rawMeasure)>O)))throw new k("AMBIGUOUS_RESULT","Multiple coincident route segments produced different measures at the clicked location. Use an LRS network layer or disambiguate the route selection.",o.concat([`Tied candidate count=${u.length}.`,`Best path=${s.pathIndex}, segment=${s.segmentIndex}.`]));o.push(`Selected path=${s.pathIndex}.`),o.push(`Selected segment=${s.segmentIndex}.`),o.push(`Interpolation t=${s.t}.`),o.push(`Used official M values=${!s.approximate}.`),!a&&i&&o.push("No finite M values were found. Approximate fallback used total shape length from the start of the merged route geometry.");return{rawMeasure:s.rawMeasure,approximate:s.approximate,diagnostics:o}}(h,w,Boolean(a.allowApproximateFallback)),R=b.approximate?"approximate-shape-length":"m-aware-route-geometry",M=b.approximate?"Approximate fallback is in use. The returned value is based on route shape length and is not an official LRS milepoint.":void 0;return T({routeId:r.routeId,routeName:null!==(i=p.routeName)&&void 0!==i?i:r.displayName,rawMeasure:b.rawMeasure,clickedPoint:o,snappedPoint:y,distanceMeters:_,strategy:R,approximate:b.approximate,warning:M,diagnostics:l.concat(b.diagnostics),options:a})}))}(e):function(e){return j(this,void 0,void 0,(function*(){var t,i,o,r,n,a,l,u,d;const{clickedPoint:c,selectedRoute:p,options:m}=e,g=[],f=function(e){const t=e.trim().split("?")[0].split("#")[0].replace(/\/+$/,"");if(!t)throw new k("INVALID_CONFIG","An LRS network layer URL is configured, but the value is blank.");if(/\/geometrytomeasure$/i.test(t)){const e=t.replace(/\/geometrytomeasure$/i,"");return P(e),`${e}/geometryToMeasure`}return P(t),`${t}/geometryToMeasure`}(m.lrsNetworkLayerUrl);g.push(`LRS request URL=${f}.`);const w=function(e){if(!1!==e.useCurrentDate)return Date.now();if(h(e.temporalViewDate))return;const t=new Date(e.temporalViewDate).getTime();return Number.isFinite(t)?t:void 0}(m),y={f:"json",locations:JSON.stringify([{routeId:p.routeId,geometry:c.toJSON()}]),inSR:A(null!==(t=c.spatialReference)&&void 0!==t?t:m.layer.spatialReference),outSR:A(null!==(i=c.spatialReference)&&void 0!==i?i:m.layer.spatialReference)};let _;null!=w&&(y.temporalViewDate=w,g.push(`LRS temporalViewDate=${w}.`)),h(m.gdbVersion)||(y.gdbVersion=m.gdbVersion,g.push(`LRS gdbVersion=${m.gdbVersion}.`));try{_=null!==(o=(yield(0,s.default)(f,{query:y,responseType:"json"})).data)&&void 0!==o?o:{}}catch(e){throw new k("SERVICE_ERROR","geometryToMeasure request failed. Confirm that the URL points to an LRServer network layer, that authentication is valid, and that the service exposes geometryToMeasure.",g.concat(Q(e)))}const x=null===(r=_.locations)||void 0===r?void 0:r[0];if(!x)throw new k("LRS_NO_RESULT","The LRS service returned no location results.",g);const b=(null!=(R=x.status)?R:"").replace(/[^a-zA-Z]/g,"").toLowerCase();var R;if(g.push(`LRS status=${null!==(n=x.status)&&void 0!==n?n:"UNKNOWN"}.`),"esrilocatingcannotfindroute"===b)throw new k("ROUTE_NOT_FOUND",`Route ${p.routeId} was not found by the configured LRS network layer.`,g);if("esrilocatingrouteshapeempty"===b)throw new k("EMPTY_GEOMETRY",`Route ${p.routeId} exists, but the LRS service reports that its shape is empty.`,g);if("esrilocatingroutemeasuresnull"===b)throw new k("ROUTE_NOT_M_AWARE",`Route ${p.routeId} exists, but the LRS service reports that route measures are null.`,g);const M=null!==(a=x.results)&&void 0!==a?a:[];if(0===M.length)throw new k("LRS_NO_RESULT",`No measure was returned for route ${p.routeId} at the clicked location.`,g);const N=[];for(const e of M){if(!Number.isFinite(e.measure)||!e.geometry)continue;const t=U(e.geometry,null!==(l=c.spatialReference)&&void 0!==l?l:m.layer.spatialReference),i=yield V(t,null!==(u=c.spatialReference)&&void 0!==u?u:t.spatialReference),o=yield q(c,i);N.push({rawMeasure:e.measure,snappedPoint:i,routeId:null!==(d=e.routeId)&&void 0!==d?d:p.routeId,distanceMeters:o})}if(0===N.length)throw new k("LRS_NO_RESULT",`The LRS service returned results for route ${p.routeId}, but none contained both geometry and measure values.`,g);N.sort(((e,t)=>e.distanceMeters!==t.distanceMeters?e.distanceMeters-t.distanceMeters:e.rawMeasure-t.rawMeasure));const S=N[0],I=v(m.maxSnapDistanceMeters);if(null!=I&&S.distanceMeters>I)throw new k("TOO_FAR",`The clicked point is ${S.distanceMeters.toFixed(2)} meters from the selected route, which exceeds the configured maximum snap distance of ${I.toFixed(2)} meters.`,g);let j;if(N.length>1){const e=N[1];if(e&&Math.abs(e.distanceMeters-S.distanceMeters)<=D&&Math.abs(e.rawMeasure-S.rawMeasure)>O)throw new k("AMBIGUOUS_RESULT",`The LRS service returned multiple equally close measures for route ${p.routeId}. The click location is ambiguous.`,g);j=`The LRS service returned ${N.length} candidate locations. The nearest candidate was used.`}return T({routeId:p.routeId,routeName:p.displayName,rawMeasure:S.rawMeasure,clickedPoint:c,snappedPoint:S.snappedPoint,distanceMeters:S.distanceMeters,strategy:"lrs-geometry-to-measure",approximate:!1,warning:j,diagnostics:g.concat([`LRS candidate count=${N.length}.`,`Selected measure=${S.rawMeasure}.`,`Selected routeId=${S.routeId}.`,`Computed distanceMeters=${S.distanceMeters}.`]),options:m})}))}(e)}))}function T(e){var t;const i=w(e.options.decimalPrecision,3),o=null!==(t=v(e.options.measureToMilepointFactor,1))&&void 0!==t?t:1,r=e.rawMeasure*o;return{routeId:e.routeId,routeName:e.routeName,rawMeasure:e.rawMeasure,milepointValue:r,formattedMilepointText:_(r,i),clickedPoint:e.clickedPoint,snappedPoint:e.snappedPoint,distanceMeters:e.distanceMeters,strategy:e.strategy,approximate:e.approximate,warning:e.warning,diagnostics:e.diagnostics}}function E(e){if("polyline"!==e.geometryType)throw new k("UNSUPPORTED_LAYER","The configured route layer must be a polyline feature layer.")}function P(e){if(!/\/MapServer\/exts\/LRServer\/networkLayers\/[^/]+$/i.test(e)&&!/\/LRServer\/networkLayers\/[^/]+$/i.test(e)){if(/\/(FeatureServer|MapServer)(\/\d+)?$/i.test(e))throw new k("INVALID_CONFIG","The configured LRS network layer URL points to a feature or map layer. Use the ArcGIS Location Referencing network layer URL, for example .../MapServer/exts/LRServer/networkLayers/NETWORK_LAYER_ID.");throw new k("INVALID_CONFIG","The configured LRS network layer URL must point to an ArcGIS Location Referencing network layer endpoint, for example .../MapServer/exts/LRServer/networkLayers/NETWORK_LAYER_ID or .../geometryToMeasure.")}}function A(e){return e?Number.isFinite(e.wkid)?e.wkid:Number.isFinite(e.latestWkid)?e.latestWkid:JSON.stringify(e.toJSON()):L.wkid}function U(e,t){var i,o;return e instanceof u.default?e:new u.default(Object.assign(Object.assign({},e),{spatialReference:null!==(o=null!==(i=e.spatialReference)&&void 0!==i?i:t)&&void 0!==o?o:L}))}function V(e,t){return j(this,void 0,void 0,(function*(){return!t||G(e.spatialReference,t)?e:yield z(e,t)}))}function z(e,t){return j(this,void 0,void 0,(function*(){try{return yield B(p),p.execute(e,t)}catch(e){throw new k("PROJECTION_ERROR","A geometry projection failed. Confirm that the runtime supports projectOperator and that both spatial references are valid.",Q(e))}}))}function q(e,t){return j(this,void 0,void 0,(function*(){const i=yield V(e,L),o=yield V(t,L);return Math.hypot(i.x-o.x,i.y-o.y)}))}function G(e,t){if(!e||!t)return!1;const i=[e.wkid,e.latestWkid].filter((e=>Number.isFinite(e))),o=[t.wkid,t.latestWkid].filter((e=>Number.isFinite(e)));return i.length>0&&o.length>0?i.some((e=>o.includes(e))):e.wkt===t.wkt}function B(e){return j(this,void 0,void 0,(function*(){"function"==typeof e.load&&("function"==typeof e.isLoaded&&e.isLoaded()||(yield e.load()))}))}function W(e,t,i){return t&&i?{x:e[0],y:e[1],z:e[2],m:Number.isFinite(e[3])?e[3]:void 0}:t?{x:e[0],y:e[1],z:e[2]}:i?{x:e[0],y:e[1],m:Number.isFinite(e[2])?e[2]:void 0}:{x:e[0],y:e[1]}}function Z(e){return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function J(e){return null==e?"":String(e).trim()}function Y(e){if(null==e)return;const t=String(e).trim();return t.length>0?t:void 0}function K(e){const t=new Set;for(const i of e)i&&t.add(i);return Array.from(t)}function H(e,t){h(t)||(e.gdbVersion=t)}function Q(e){return e instanceof k?[e.message,...e.diagnostics]:e instanceof Error?[e.message]:[String(e)]}var X=function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))};const ee={type:"simple-marker",style:"circle",size:8,color:[33,150,243,.9],outline:{color:[255,255,255,1],width:1.5}},te={type:"simple-marker",style:"diamond",size:10,color:[40,167,69,.95],outline:{color:[255,255,255,1],width:1.5}},ie={type:"simple-line",style:"dash",width:1.5,color:[97,97,97,.95]};function oe(t){return(0,e.jsx)("div",{className:"route-milepoint-widget__metric-card"},(0,e.jsx)("span",{className:"route-milepoint-widget__metric-label"},t.label),(0,e.jsx)("strong",{className:"route-milepoint-widget__metric-value"},t.value))}function re(e){return Array.isArray(e)?e.filter(Boolean):[]}function ne(e,t){var i,o,r;if(!t)return;const n=null===(o=null===(i=e.getData)||void 0===i?void 0:i.call(e))||void 0===o?void 0:o[t];return void 0!==n?n:null===(r=e.getFieldValue)||void 0===r?void 0:r.call(e,t)}function ae(e){return null==e?"":String(e).trim()}function le(e){if(null==e)return;const t=String(e).trim();return t.length>0?t:void 0}function se(e,t){return`${y(e.x,t)}, ${y(e.y,t)}`}function ue(e){return e instanceof k?{message:e.message,diagnostics:e.diagnostics}:e instanceof Error?{message:e.message,diagnostics:[]}:{message:String(e),diagnostics:[]}}const de=function(s){var u,d,c,p,m,g,f,h,w,_;const b=null!==(d=null===(u=s.config.routeIdField)||void 0===u?void 0:u.trim())&&void 0!==d?d:"",R=(null===(c=s.config.routeDisplayField)||void 0===c?void 0:c.trim())||void 0,[M,L]=e.React.useState(null),[D,F]=e.React.useState(null),[O,$]=e.React.useState([]),[T,P]=e.React.useState(null),[A,U]=e.React.useState(!1),[V,z]=e.React.useState(""),[q,G]=e.React.useState([]),[B,W]=e.React.useState(!1),[Z,Q]=e.React.useState(!1),[de,ce]=e.React.useState(null),[pe,me]=e.React.useState(null),[ge,fe]=e.React.useState(null),he=e.React.useRef(null),we=e.React.useRef(null),ve=e.React.useRef(null),ye=e.React.useRef(0),_e=e.React.useRef(0),xe=e.React.useCallback((e=>{var t,i;return null!==(i=null===(t=s.intl)||void 0===t?void 0:t.formatMessage({id:e,defaultMessage:a[e]}))&&void 0!==i?i:a[e]}),[s.intl]),be=e.ReactRedux.useSelector((e=>{var t,i,o,r;const n=null===(i=null===(t=s.useDataSources)||void 0===t?void 0:t[0])||void 0===i?void 0:i.dataSourceId;return n&&null!==(r=null===(o=null==e?void 0:e.dataSourcesInfo)||void 0===o?void 0:o[n])&&void 0!==r?r:null})),Re=e.React.useMemo((()=>{const e=null==be?void 0:be.selectedIds;return Array.isArray(e)?e.map((e=>String(e))):[]}),[be]),Me=e.React.useMemo((()=>Re.join("|")),[Re]),Ne="string"==typeof(null==be?void 0:be.gdbVersion)?be.gdbVersion:void 0,Se=null===(p=s.useMapWidgetIds)||void 0===p?void 0:p[0],Ie=`${s.id}-route-milepoint-graphics`,ke=null!==(m=s.config.decimalPrecision)&&void 0!==m?m:3;e.React.useEffect((()=>{he.current=null,we.current=null,P(null),U(!1),z(""),G([]),me(null),ce(null),fe(null)}),[null===(f=null===(g=s.useDataSources)||void 0===g?void 0:g[0])||void 0===f?void 0:f.dataSourceId]),e.React.useEffect((()=>{var t,i;const o=null===(i=null===(t=s.useDataSources)||void 0===t?void 0:t[0])||void 0===i?void 0:i.dataSourceId;if(!o)return F(null),void $([]);const r=e.DataSourceManager.getInstance().getDataSource(o);r&&F(r)}),[s.useDataSources]),e.React.useEffect((()=>{if(!D)return void $([]);const e=function(e,t){var i,o,r,n;const a=re(null===(o=(i=e).getSelectedRecords)||void 0===o?void 0:o.call(i));if(a.length>0)return a;const l=re(null===(n=(r=e).getRecordsWithSelection)||void 0===n?void 0:n.call(r));if(0===t.length||0===l.length)return a;const s=new Set(t);return l.filter((e=>{var t,i;const o=null===(i=(t=e).getId)||void 0===i?void 0:i.call(t);return null!=o&&s.has(String(o))}))}(D,Re);$(e)}),[D,Me]);const je=e.React.useMemo((()=>function(e,t,i){var o,r,n;if(!t)return[];const a=new Map;for(const l of e){const e=ae(ne(l,t));e&&!a.has(e)&&a.set(e,{routeId:e,displayName:le(i?ne(l,i):void 0),objectId:null!==(n=null===(r=(o=l).getId)||void 0===r?void 0:r.call(o))&&void 0!==n?n:ne(l,"OBJECTID"),source:"selection"})}return Array.from(a.values())}(O,b,R)),[O,b,R]),Le=e.React.useMemo((()=>T||(1===je.length?je[0]:null)),[T,je]),De=e.React.useMemo((()=>{var e,t;return Le?`${Le.routeId}|${null!==(e=Le.displayName)&&void 0!==e?e:""}|${null!==(t=Le.source)&&void 0!==t?t:""}`:""}),[Le]),Fe=e.React.useMemo((()=>{var e;return(null===(e=s.useDataSources)||void 0===e?void 0:e.length)?je.length>1&&!T?xe("multipleRoutesSelected"):Le?void 0:xe("noRouteSelected"):xe("noRouteLayerConfigured")}),[Le,T,s.useDataSources,je.length,xe]);e.React.useEffect((()=>{Le?T||U(!1):U(!0)}),[Le,T]);const Oe=Boolean(D&&b),$e=e.React.useCallback((()=>X(this,void 0,void 0,(function*(){if(he.current)return he.current;if(we.current)return we.current;if(!D)throw new k("INVALID_CONFIG","Route layer is not configured. Select a route layer in the widget settings.");we.current=(()=>X(this,void 0,void 0,(function*(){var e,t,o;const r=null!==(e=D.layer)&&void 0!==e?e:null,n=null!=r?r:yield null===(o=(t=D).createJSAPILayerByDataSource)||void 0===o?void 0:o.call(t);if(!(n instanceof i.default))throw new k("UNSUPPORTED_LAYER","The configured route layer must resolve to a feature layer.");return yield n.load(),he.current=n,n})))();try{return yield we.current}finally{we.current=null}}))),[D]),Ce=e.React.useCallback((()=>{ce(null),me(null),fe(null)}),[]);e.React.useEffect((()=>{Ce()}),[Ce,De]);const Te=e.React.useCallback((()=>{var e;const t=ve.current;if(!t)return;t.removeAll();const i=null!==(e=null==pe?void 0:pe.clickedPoint)&&void 0!==e?e:de;i&&t.add(new o.default({geometry:i,symbol:ee})),pe&&(!1!==s.config.showConnectorLine&&t.add(new o.default({geometry:new n.default({spatialReference:pe.clickedPoint.spatialReference,paths:[[[pe.clickedPoint.x,pe.clickedPoint.y],[pe.snappedPoint.x,pe.snappedPoint.y]]]}),symbol:ie})),t.add(new o.default({geometry:pe.snappedPoint,symbol:te})))}),[de,s.config.showConnectorLine,pe]);e.React.useEffect((()=>{const e=null==M?void 0:M.view;if(!e)return void(ve.current=null);let t=e.map.findLayerById(Ie);return t||(t=new r.default({id:Ie,listMode:"hide"}),e.map.add(t)),ve.current=t,Te(),()=>{t.removeAll(),e.map.findLayerById(Ie)===t&&e.map.remove(t),ve.current===t&&(ve.current=null)}}),[M,Ie,Te]),e.React.useEffect((()=>{Te()}),[Te]);const Ee=e.React.useCallback((e=>X(this,void 0,void 0,(function*(){var t;if(!Le)return;const i=++ye.current;ce(e.clone()),me(null),fe(null),Q(!0);try{const o=yield $e(),r=yield C({clickedPoint:e,selectedRoute:Le,options:{layer:o,routeIdField:b,routeDisplayField:R,lrsNetworkLayerUrl:(null===(t=s.config.lrsNetworkLayerUrl)||void 0===t?void 0:t.trim())||void 0,maxSnapDistanceMeters:v(s.config.maxSnapDistance),decimalPrecision:s.config.decimalPrecision,measureToMilepointFactor:s.config.measureToMilepointFactor,useCurrentDate:!1!==s.config.useCurrentDate,temporalViewDate:s.config.temporalViewDate,allowApproximateFallback:!0===s.config.allowApproximateFallback,gdbVersion:Ne}});if(i!==ye.current)return;ce(r.clickedPoint),me(r)}catch(e){if(i!==ye.current)return;fe(ue(e))}finally{i===ye.current&&Q(!1)}}))),[Le,Ne,$e,s.config.allowApproximateFallback,s.config.decimalPrecision,s.config.lrsNetworkLayerUrl,s.config.maxSnapDistance,s.config.measureToMilepointFactor,s.config.temporalViewDate,s.config.useCurrentDate,R,b]);e.React.useEffect((()=>{const e=null==M?void 0:M.view;if(!e||!Le||!b)return;const t=e.on("click",(e=>{(null==e?void 0:e.mapPoint)&&Ee(e.mapPoint.clone())}));return()=>{t.remove()}}),[M,Le,Ee,b]);const Pe=e.React.useCallback((e=>X(this,void 0,void 0,(function*(){if(null==e||e.preventDefault(),!Oe||!V.trim())return void G([]);const t=++_e.current;W(!0),fe(null);try{const e=yield $e(),i=yield function(e){return j(this,void 0,void 0,(function*(){var t,i,o,r,n,a,l,s,u,d,c,p;const m=e.layer,g=null===(t=e.routeIdField)||void 0===t?void 0:t.trim(),f=null!==(o=null===(i=e.searchText)||void 0===i?void 0:i.trim())&&void 0!==o?o:"";if(!g)throw new k("INVALID_CONFIG","Route ID field is required before searching for routes.");if(!f)return[];yield m.load(),E(m);const h=null!==(n=null===(r=m.fieldsIndex)||void 0===r?void 0:r.get(g))&&void 0!==n?n:null,w=(null===(a=e.routeDisplayField)||void 0===a?void 0:a.trim())||void 0,v=w&&null!==(s=null===(l=m.fieldsIndex)||void 0===l?void 0:l.get(w))&&void 0!==s?s:null,y=[],_=N(g,f,h),x=S(g,f,h),b=I(g,f,h);if(_&&y.push(_),x&&y.push(x),b&&y.push(b),w&&w!==g){const e=S(w,f,v),t=I(w,f,v);e&&y.push(e),t&&y.push(t)}const R=y.length>0?y.map((e=>`(${e})`)).join(" OR "):"1=1",M=K([g,w,m.objectIdField]),j=m.createQuery();j.where=R,j.returnGeometry=!1,j.outFields=M,j.orderByFields=[null!=w?w:g],j.num=Math.max(1,Math.min(null!==(u=e.limit)&&void 0!==u?u:10,50)),j.returnDistinctValues=!0,H(j,e.gdbVersion);const L=yield m.queryFeatures(j),D=new Map;for(const e of L.features){const t=J(null===(d=e.attributes)||void 0===d?void 0:d[g]);t&&!D.has(t)&&D.set(t,{routeId:t,displayName:w?Y(null===(c=e.attributes)||void 0===c?void 0:c[w]):void 0,objectId:null===(p=e.attributes)||void 0===p?void 0:p[m.objectIdField]})}return Array.from(D.values())}))}({layer:e,routeIdField:b,routeDisplayField:R,searchText:V,limit:10,gdbVersion:Ne});if(t!==_e.current)return;G(i.map((e=>Object.assign(Object.assign({},e),{source:"manual"}))))}catch(e){if(t!==_e.current)return;G([]),fe(ue(e))}finally{t===_e.current&&W(!1)}}))),[Oe,Ne,$e,R,b,V]),Ae=e.React.useCallback((e=>{P(Object.assign(Object.assign({},e),{source:"manual"})),U(!1),fe(null),me(null),ce(null),G([])}),[]),Ue=e.React.useCallback((()=>{P(null),G([]),U(1!==je.length),fe(null),me(null),ce(null)}),[je.length]),Ve=e.React.useMemo((()=>Se?Fe||xe(Z?"loading":"clickMapInstruction"):xe("noMapConfigured")),[Se,Z,Fe,xe]),ze=null!==(h=null==pe?void 0:pe.routeName)&&void 0!==h?h:null==Le?void 0:Le.displayName;return(0,e.jsx)("div",{className:"route-milepoint-widget jimu-widget",css:l},(null===(w=s.useDataSources)||void 0===w?void 0:w[0])&&(0,e.jsx)(e.DataSourceComponent,{useDataSource:s.useDataSources[0],widgetId:s.id,onDataSourceCreated:e=>{F(e)}},(()=>null)),Se&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:Se,onActiveViewChange:e=>{L(null!=e?e:null)}}),(0,e.jsx)("div",{className:"route-milepoint-widget__shell"},(0,e.jsx)("section",{className:"route-milepoint-widget__hero"},(0,e.jsx)("p",{className:"route-milepoint-widget__eyebrow"},xe("title")),(0,e.jsx)("div",{className:"route-milepoint-widget__route-chip"},(0,e.jsx)("span",{className:"route-milepoint-widget__route-chip-label"},xe("selectedRouteId")),(0,e.jsx)("strong",{className:"route-milepoint-widget__route-chip-value"},null!==(_=null==Le?void 0:Le.routeId)&&void 0!==_?_:"--")),(null==Le?void 0:Le.displayName)&&(0,e.jsx)("p",{className:"route-milepoint-widget__route-name"},Le.displayName),(0,e.jsx)("p",{className:"route-milepoint-widget__status"},Ve),(0,e.jsx)("div",{className:"route-milepoint-widget__actions"},Oe&&(0,e.jsx)("button",{className:"route-milepoint-widget__button route-milepoint-widget__button--secondary",type:"button",onClick:()=>{U((e=>!e))}},xe(A?"hideRouteSearch":Le?"changeRoute":"chooseRoute")),T&&(0,e.jsx)("button",{className:"route-milepoint-widget__button route-milepoint-widget__button--secondary",type:"button",onClick:Ue},xe("clearManualRoute")),(pe||de||ge)&&(0,e.jsx)("button",{className:"route-milepoint-widget__button route-milepoint-widget__button--secondary",type:"button",onClick:Ce},xe("clearResult")))),A&&(0,e.jsx)("section",{className:"route-milepoint-widget__panel"},(0,e.jsx)("label",{className:"route-milepoint-widget__panel-label",htmlFor:`${s.id}-route-search`},xe("routeSearch")),(0,e.jsx)("p",{className:"route-milepoint-widget__panel-help"},xe("searchHelp")),(0,e.jsx)("form",{className:"route-milepoint-widget__search-form",onSubmit:e=>{Pe(e)}},(0,e.jsx)("input",{id:`${s.id}-route-search`,className:"route-milepoint-widget__input",type:"text",value:V,placeholder:xe("searchPlaceholder"),onChange:e=>{z(e.currentTarget.value)},disabled:!Oe||B}),(0,e.jsx)("button",{className:"route-milepoint-widget__button",type:"submit",disabled:!Oe||B||!V.trim()},xe(B?"searching":"searchButton"))),!Oe&&(0,e.jsx)("div",{className:"route-milepoint-widget__message route-milepoint-widget__message--warning"},xe("searchDisabled")),q.length>0&&(0,e.jsx)("div",{className:"route-milepoint-widget__results"},(0,e.jsx)("ul",{className:"route-milepoint-widget__results-list"},q.map((t=>{var i;return(0,e.jsx)("li",{key:`${t.routeId}|${null!==(i=t.objectId)&&void 0!==i?i:""}`},(0,e.jsx)("button",{className:"route-milepoint-widget__list-button",type:"button",onClick:()=>{Ae(t)}},(0,e.jsx)("span",{className:"route-milepoint-widget__list-title"},t.routeId),t.displayName&&(0,e.jsx)("span",{className:"route-milepoint-widget__list-meta"},t.displayName)))})))),Oe&&V.trim().length>0&&!B&&0===q.length&&!ge&&(0,e.jsx)("p",{className:"route-milepoint-widget__panel-help"},xe("noSearchResults"))),(0,e.jsx)("section",{className:"route-milepoint-widget__result-card"},(0,e.jsx)("div",{className:"route-milepoint-widget__result-head"},(0,e.jsx)("p",{className:"route-milepoint-widget__result-label"},xe("milepointLabel")),(null==pe?void 0:pe.approximate)&&(0,e.jsx)("span",{className:"route-milepoint-widget__badge"},xe("approximateBadge"))),Z&&(0,e.jsx)("div",{className:"route-milepoint-widget__loading"},xe("loading")),!Z&&ge&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"route-milepoint-widget__message route-milepoint-widget__message--error"},ge.message),ge.diagnostics.length>0&&(0,e.jsx)("details",{className:"route-milepoint-widget__details"},(0,e.jsx)("summary",null,xe("diagnostics")),(0,e.jsx)("ul",{className:"route-milepoint-widget__diagnostics-list"},ge.diagnostics.map(((t,i)=>(0,e.jsx)("li",{key:`${i}-${t}`},t)))))),!Z&&!ge&&pe&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("p",{className:"route-milepoint-widget__milepoint"},pe.formattedMilepointText),pe.warning&&(0,e.jsx)("div",{className:"route-milepoint-widget__message route-milepoint-widget__message--warning"},pe.warning),(0,e.jsx)("div",{className:"route-milepoint-widget__metric-grid"},(0,e.jsx)(oe,{label:xe("selectedRouteId"),value:pe.routeId}),(0,e.jsx)(oe,{label:xe("offsetLabel"),value:x(pe.distanceMeters,ke)}),(0,e.jsx)(oe,{label:xe("measureLabel"),value:y(pe.rawMeasure,ke)})),ze&&(0,e.jsx)("p",{className:"route-milepoint-widget__result-caption"},ze),(0,e.jsx)("details",{className:"route-milepoint-widget__details"},(0,e.jsx)("summary",null,xe("viewDetails")),(0,e.jsx)("dl",{className:"route-milepoint-widget__details-grid"},(0,e.jsx)("dt",null,xe("selectedRouteId")),(0,e.jsx)("dd",null,pe.routeId),(0,e.jsx)("dt",null,xe("formattedMilepoint")),(0,e.jsx)("dd",null,pe.formattedMilepointText),(0,e.jsx)("dt",null,xe("rawMeasure")),(0,e.jsx)("dd",null,y(pe.rawMeasure,ke)),(0,e.jsx)("dt",null,xe("distanceFromClick")),(0,e.jsx)("dd",null,x(pe.distanceMeters,ke)),ze&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("dt",null,xe("routeName")),(0,e.jsx)("dd",null,ze)),(0,e.jsx)("dt",null,xe("locatingStrategy")),(0,e.jsx)("dd",null,pe.strategy),(0,e.jsx)("dt",null,xe("approximate")),(0,e.jsx)("dd",null,pe.approximate?xe("yes"):xe("no")),(0,e.jsx)("dt",null,xe("clickedPoint")),(0,e.jsx)("dd",null,se(pe.clickedPoint,ke)),(0,e.jsx)("dt",null,xe("snappedPoint")),(0,e.jsx)("dd",null,se(pe.snappedPoint,ke))),pe.diagnostics.length>0&&(0,e.jsx)("ul",{className:"route-milepoint-widget__diagnostics-list"},pe.diagnostics.map(((t,i)=>(0,e.jsx)("li",{key:`${i}-${t}`},t)))))),!Z&&!ge&&!pe&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("p",{className:"route-milepoint-widget__milepoint route-milepoint-widget__milepoint--placeholder"},"--"),(0,e.jsx)("p",{className:"route-milepoint-widget__result-help"},Le?xe("readyToLocate"):null!=Fe?Fe:xe("noRouteSelected"))))))};function ce(e){g.p=e}})(),f})())}}}));