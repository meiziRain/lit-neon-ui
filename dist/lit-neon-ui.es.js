var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s;import{LitElement as l,html as h,css as a}from"lit-element/lit-element.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol();class p{constructor(t,e){if(e!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return c&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const u=new Map,v=t=>(t=>{let e=u.get(t);return void 0===e&&u.set(t,e=new p(t,d)),e})("string"==typeof t?t:t+""),y=c?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return v(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var f,m,g,b;const w={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},S=(t,e)=>e!==t&&(e==e||t==t),x={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:S};class P extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||x}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(y(t))}else void 0!==t&&e.push(y(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{c?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=x){var s,o;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:w.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,e){var i,s,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:w.fromAttribute;this.Πh=r,this[r]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||S)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(s){throw e=!1,this.Π$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k,C,O,U;P.finalized=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},null===(m=(f=globalThis).reactiveElementPlatformSupport)||void 0===m||m.call(f,{ReactiveElement:P}),(null!==(g=(b=globalThis).reactiveElementVersions)&&void 0!==g?g:b.reactiveElementVersions=[]).push("1.0.0-rc.2");const $=globalThis.trustedTypes,A=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,E="?"+H,N=`<${E}>`,T=document,j=(t="")=>T.createComment(t),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,L=/>/g,B=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,D=/"/g,W=/^(?:script|style|textarea)$/i,q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),K=new WeakMap,J=T.createTreeWalker(T,129,null,!1);class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=M;for(let h=0;h<i;h++){const e=t[h];let i,l,a=-1,c=0;for(;c<e.length&&(r.lastIndex=c,l=r.exec(e),null!==l);)c=r.lastIndex,r===M?"!--"===l[1]?r=z:void 0!==l[1]?r=L:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=null!=o?o:M,a=-1):void 0===l[1]?a=-2:(a=r.lastIndex-l[2].length,i=l[1],r=void 0===l[3]?B:'"'===l[3]?D:I):r===D||r===I?r=B:r===z||r===L?r=M:(r=B,o=void 0);const d=r===B&&t[h+1].startsWith("/>")?" ":"";n+=r===M?e+N:a>=0?(s.push(i),e.slice(0,a)+"$lit$"+e.slice(a)+H+d):e+H+(-2===a?(s.push(void 0),h):d)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==A?A.createHTML(l):l,s]})(t,e);if(this.el=Z.createElement(h,i),J.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=J.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(H)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(H),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?tt:"@"===e[1]?et:X})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(W.test(s.tagName)){const t=s.textContent.split(H),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],j()),J.nextNode(),l.push({type:2,index:++o});s.append(t[e],j())}}}else if(8===s.nodeType)if(s.data===E)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(H,t+1));)l.push({type:7,index:o}),t+=H.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var o,n,r,l;if(e===q)return e;let h=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const a=R(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h.O)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=F(t,h.S(t,e.values),h,s)),e}class G{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(i,!0);J.currentNode=o;let n=J.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new Q(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new it(n,this,t)),this.l.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(n=J.nextNode(),r++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class Q{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=F(this,t,e),R(t)?t===V||null==t||""===t?(this.H!==V&&this.R(),this.H=V):t!==this.H&&t!==q&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return _(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(T.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=Z.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new G(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Z(t)),e}g(t){_(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.k(j()),this.k(j()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class X{constructor(t,e,i,s,o){this.type=1,this.H=V,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(V),this.strings=i):this.H=V}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,e,0),n=!R(t)||t!==this.H&&t!==q,n&&(this.H=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=F(this,s[i+r],e,r),l===q&&(l=this.H[r]),n||(n=!R(l)||l!==this.H[r]),l===V?t=V:t!==V&&(t+=(null!=l?l:"")+o[r+1]),this.H[r]=l}n&&!s&&this.W(t)}W(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===V?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}W(t){t&&t!==V?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class et extends X{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:V)===q)return;const s=this.H,o=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){F(this,t)}}null===(C=(k=globalThis).litHtmlPlatformSupport)||void 0===C||C.call(k,Z,Q),(null!==(O=(U=globalThis).litHtmlVersions)&&void 0!==O?O:U.litHtmlVersions=[]).push("2.0.0-rc.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>{return"function"==typeof e?(i=t,s=e,window.customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i,s},ot=(t,l)=>{return"method"===l.kind&&l.descriptor&&!("value"in l.descriptor)?(h=((t,e)=>{for(var i in e||(e={}))o.call(e,i)&&r(t,i,e[i]);if(s)for(var i of s(e))n.call(e,i)&&r(t,i,e[i]);return t})({},l),e(h,i({finisher(e){e.createProperty(l.key,t)}}))):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:l.key,initializer(){"function"==typeof l.initializer&&(this[l.key]=l.initializer.call(this))},finisher(e){e.createProperty(l.key,t)}};var h};function nt(t){return(e,i)=>{return void 0!==i?(s=t,o=i,void e.constructor.createProperty(o,s)):ot(t,e);var s,o}}class rt extends l{}rt.styles=[{"tk-halyard-display":"_tk-halyard-display_m2qj4_1","tk-moret":"_tk-moret_m2qj4_1"}];var lt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,at=(t,e,i,s)=>{for(var o,n=s>1?void 0:s?ht(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&lt(e,i,n),n};let ct=class extends rt{constructor(){super(...arguments),this.disabled=!1,this.round=!1,this.typo="plain"}render(){return h`
      <button class="${this.disabled?"disabled":""} ${this.round?"round":""}" typo="${this.typo}"
        @click=${this._click} part="button">
        <slot></slot>
      </button>
    `}_click(){}};ct.styles=[".disabled {\n  opacity: 0.8;\n  filter: grayscale(0.7);\n  cursor: not-allowed;\n}\n\n.round {\n  border-radius: var(--neon-border-radius);\n}",a`
      button {
        display: inline-block;
        line-height: 1;
        font-size: 16px;
        white-space: nowrap;
        text-align: center;
        -webkit-appearance: none;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-family: Monoton;
        letter-spacing: 3px;
      }
      button[typo='plain'] {
        background-color: var(--neon-background-color);
        color: var(--neon-text-color);
      }

      button[typo='primary'] {
        background-color: var(--neon-text-color);
        color: var(--neon-el-text-color);
      }
    `],at([nt({type:Boolean,reflect:!0})],ct.prototype,"disabled",2),at([nt({type:Boolean,reflect:!0})],ct.prototype,"round",2),at([nt({type:String,reflect:!0})],ct.prototype,"typo",2),ct=at([st("neon-button")],ct);var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(t,e,i,s)=>{for(var o,n=s>1?void 0:s?pt(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&dt(e,i,n),n};let vt=class extends l{constructor(){super(...arguments),this.name="World",this.count=0}render(){return h`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};vt.styles=[a`
    :host {
      padding: 22px;
    }
  `],ut([nt()],vt.prototype,"name",2),ut([nt({type:Number})],vt.prototype,"count",2),vt=ut([st("my-element")],vt);export{vt as MyElement,ct as NeonButton};
