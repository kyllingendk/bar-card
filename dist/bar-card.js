function e(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${a}`);class r{constructor(e,t){this.parts=[],this.element=t;const i=[],a=[],r=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:g}}=e;for(;p<g;){const e=r.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)s(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=u[p],i=d.exec(t)[2],n=i.toLowerCase()+"$lit$",a=e.getAttribute(n);e.removeAttribute(n);const r=a.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:r}),p+=r.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,a=t.split(o),r=a.length-1;for(let t=0;t<r;t++){let i,o=a[t];if(""===o)i=l();else{const e=d.exec(o);null!==e&&s(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}n.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===a[r]?(n.insertBefore(l(),e),i.push(e)):e.data=a[r],p+=r}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(l(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),p++}}else r.currentNode=a.pop()}for(const e of i)e.parentNode.removeChild(e)}}const s=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:n}=e,a=document.createTreeWalker(i,133,null,!1);let o=u(n),r=n[o],s=-1,c=0;const l=[];let d=null;for(;a.nextNode();){s++;const e=a.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==r&&r.index===s;)r.index=null!==d?-1:r.index-c,o=u(n,o),r=n[o]}l.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},u=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(c(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,m=e=>"function"==typeof e&&g.has(e),f={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let o,r=0,s=0,l=a.nextNode();for(;r<n.length;)if(o=n[r],c(o)){for(;s<o.index;)s++,"TEMPLATE"===l.nodeName&&(i.push(l),a.currentNode=l.content),null===(l=a.nextNode())&&(a.currentNode=i.pop(),l=a.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${n} `;class ${constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const s=d.exec(e);t+=null===s?e+(i?_:a):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new A(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let n="";for(let a=0;a<t;a++){n+=e[a];const t=i[a];if(void 0!==t){const e=t.value;if(w(e)||!x(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||w(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof $?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const a of e)i=t[n],void 0===i&&(i=new k(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(a),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class E extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends A{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class P{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function j(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(n);return i=t.keyString.get(a),void 0===i&&(i=new r(e,e.getTemplateElement()),t.keyString.set(a,i)),t.stringsArray.set(e.strings,i),i}const V=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const a=t[0];if("."===a){return new E(e,t.slice(1),i).parts}if("@"===a)return[new P(e,t.slice(1),n.eventContext)];if("?"===a)return[new C(e,t.slice(1),i)];return new S(e,t,i).parts}handleTextExpression(e){return new k(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const z=(e,...t)=>new $(e,t,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,M=(e,t)=>`${e}--${t}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const L=e=>t=>{const i=M(t.type,e);let a=V.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},V.set(i,a));let o=a.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(n);if(o=a.keyString.get(s),void 0===o){const i=t.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(i,e),o=new r(t,i),a.keyString.set(s,o)}return a.stringsArray.set(t.strings,o),o},B=["html","svg"],D=new Set,H=(e,t,i)=>{D.add(e);const n=i?i.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:o}=a;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const r=document.createElement("style");for(let e=0;e<o;e++){const t=a[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{B.forEach(t=>{const i=V.get(M(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const s=n.content;i?function(e,t,i=null){const{element:{content:n},parts:a}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let r=u(a),s=0,c=-1;for(;o.nextNode();){c++;for(o.currentNode===i&&(s=p(t),i.parentNode.insertBefore(t,i));-1!==r&&a[r].index===c;){if(s>0){for(;-1!==r;)a[r].index+=s,r=u(a,r);return}r=u(a,r)}}}(i,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){s.insertBefore(r,s.firstChild);const e=new Set;e.add(r),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const a=this[e];this[t]=n,this.requestUpdateInternal(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||q,a="function"==typeof n?n:n.fromAttribute;return a?a(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||q.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const n=this.constructor,a=n._attributeNameForProperty(e,i);if(void 0!==a){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const a=this.constructor;i=i||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Y=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function G(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Y(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class Z{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof Z)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new Z(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const te={};class ie extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Z(String(t),Q)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}var ne,ae,oe;function re(e){return e.substr(0,e.indexOf("."))}ie.finalized=!0,ie.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const a=n.scopeName,o=I.has(t),r=R&&11===t.nodeType&&!!t.host,s=r&&!D.has(a),c=s?document.createDocumentFragment():t;if(((e,t,n)=>{let a=I.get(t);void 0===a&&(i(t,t.firstChild),I.set(t,a=new k(Object.assign({templateFactory:j},n))),a.appendInto(t)),a.setValue(e),a.commit()})(e,c,Object.assign({templateFactory:L(a)},n)),s){const e=I.get(c);I.delete(c);const n=e.value instanceof b?e.value.template:void 0;H(a,c,n),i(t,t.firstChild),t.appendChild(c),I.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)},ie.shadowRootOptions={mode:"open"},(oe=ne||(ne={})).language="language",oe.system="system",oe.comma_decimal="comma_decimal",oe.decimal_comma="decimal_comma",oe.space_comma="space_comma",oe.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ae||(ae={}));var se=["closed","locked","off"],ce=function(e,t,i,n){n=n||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,e.dispatchEvent(a),a},le={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function de(e,t){if(e in le)return le[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var he=function(e){ce(window,"haptic",e)},pe=function(e,t){return function(e,t,i){void 0===i&&(i=!0);var n,a=re(t),o="group"===a?"homeassistant":a;switch(a){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return e.callService(o,n,{entity_id:t})}(e,t,se.includes(e.states[t].state))},ue=function(e,t,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(he("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&ce(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),ce(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(pe(t,i.entity),he("success"));break;case"call-service":if(!n.service)return void he("failure");var a=n.service.split(".",2);t.callService(a[0],a[1],n.service_data,n.target),he("success");break;case"fire-dom-event":ce(e,"ll-custom",n)}};function ge(e){return void 0!==e&&"none"!==e.action}function me(...e){const t=e=>e&&"object"==typeof e;return e.reduce((e,i)=>(Object.keys(i).forEach(n=>{const a=e[n],o=i[n];Array.isArray(a)&&Array.isArray(o)?e[n]=a.concat(...o):t(a)&&t(o)?e[n]=me(a,o):e[n]=o}),e),{})}function fe(e,t){if("number"==typeof t)return t;if(void 0===e)return 0;if(e.states[t]){const i=parseInt(e.states[t].state);return isNaN(i)?0:i}return 0}function ve(e,t,i){if(t.has("config")||i)return!0;for(const i of e._configArray)if(i.entity){const n=t.get("hass");if(n){if(n.states[i.entity]!==e.hass.states[i.entity])return!0;continue}return!0}return!1}function be(e,t,i){const n=e[t],a=e.slice();return a.splice(t,1),a.splice(i,0,n),a}let ye=class extends ie{constructor(){super(...arguments),this._configArray=[],this._entityOptionsArray=[]}shouldUpdate(e){return ve(this,e,!0)}setConfig(e){this._config=Object.assign({},e),e.entity||e.entities||(this._config.entity="none"),this._config.entity&&(this._configArray.push({entity:e.entity}),this._config.entities=[{entity:e.entity}],delete this._config.entity),this._configArray=function(e){const t=[];if(e.entities){for(const i of e.entities)if("string"==typeof i){const e=me({},{entity:i});t.push(e)}else if("object"==typeof i){const e=me({},i);t.push(e)}}else t.push(e);return t}(this._config),this._config.animation&&0===Object.entries(this._config.animation).length&&(delete this._config.animation,ce(this,"config-changed",{config:this._config})),this._config.positions&&0===Object.entries(this._config.positions).length&&(delete this._config.positions,ce(this,"config-changed",{config:this._config}));for(const e of this._configArray)e.animation&&0===Object.entries(e.animation).length&&delete e.animation,e.positions&&0===Object.entries(e.positions).length&&delete e.positions;this._config.entities=this._configArray,ce(this,"config-changed",{config:this._config});const t={icon:"format-list-numbered",name:"Bar",secondary:"Bar settings.",show:!1},i={icon:"numeric",name:"Value",secondary:"Value settings.",show:!1},n={icon:"card-bulleted",name:"Card",secondary:"Card settings.",show:!1},a={icon:"arrow-expand-horizontal",name:"Positions",secondary:"Set positions of card elements.",show:!1},o={icon:"exclamation-thick",name:"Severity",secondary:"Define bar colors based on value.",show:!1},r={icon:"animation",name:"Animation",secondary:"Define animation settings.",show:!1},s={show:!1,options:{positions:Object.assign({},a),bar:Object.assign({},t),value:Object.assign({},i),severity:Object.assign({},o),actions:Object.assign({},{icon:"gesture-tap",name:"Actions",secondary:"Coming soon... Use code editor for Actions.",show:!1}),animation:Object.assign({},r)}};for(const e of this._configArray)this._entityOptionsArray.push(Object.assign({},s));this._options||(this._options={entities:{icon:"tune",name:"Entities",secondary:"Manage card entities.",show:!0,options:{entities:this._entityOptionsArray}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the global name, icon, etc.",show:!1,options:{positions:a,bar:t,value:i,card:n,severity:o,animation:r}}})}render(){return z`
      ${this._createEntitiesElement()} ${this._createAppearanceElement()}
    `}_createActionsElement(e){const t=this._options.entities.options.entities[e].options.actions;return z`
      <div class="sub-category" style="opacity: 0.5;">
        <div>
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
      </div>
    `}_createEntitiesValues(){if(!this.hass||!this._config)return[z``];const e=this._options.entities,t=(Object.keys(this.hass.states),[]);for(const i of this._configArray){const n=this._configArray.indexOf(i);t.push(z`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div style="display: flex; align-items: center; flex-direction: column;">
            <div
              style="font-size: 10px; margin-bottom: -8px; opacity: 0.5;"
              @click=${this._toggleThing}
              .options=${e.options.entities[n]}
              .optionsTarget=${e.options.entities}
              .index=${n}
            >
              options
            </div>
            <ha-icon
              icon="mdi:chevron-${e.options.entities[n].show?"up":"down"}"
              @click=${this._toggleThing}
              .options=${e.options.entities[n]}
              .optionsTarget=${e.options.entities}
              .index=${n}
            ></ha-icon>
          </div>
          <div class="value" style="flex-grow: 1;">
            <paper-input
              label="Entity"
              @value-changed=${this._valueChanged}
              .configAttribute=${"entity"}
              .configObject=${this._configArray[n]}
              .value=${i.entity}
            >
            </paper-input>
          </div>
          ${0!==n?z`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-up"
                  @click=${this._moveEntity}
                  .configDirection=${"up"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${n}
                ></ha-icon>
              `:z`
                <ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
              `}
          ${n!==this._configArray.length-1?z`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-down"
                  @click=${this._moveEntity}
                  .configDirection=${"down"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${n}
                ></ha-icon>
              `:z`
                <ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
              `}
          <ha-icon
            class="ha-icon-large"
            icon="mdi:close"
            @click=${this._removeEntity}
            .configAttribute=${"entity"}
            .configArray=${"entities"}
            .configIndex=${n}
          ></ha-icon>
        </div>
        ${e.options.entities[n].show?z`
              <div class="options">
                ${this._createBarElement(n)} ${this._createValueElement(n)}
                ${this._createPositionsElement(n)} ${this._createSeverityElement(n)}
                ${this._createAnimationElement(n)} ${this._createActionsElement(n)}
              </div>
            `:""}
      `)}return t}_createEntitiesElement(){if(!this.hass||!this._config)return z``;const e=this._options.entities;return z`
      <div class="card-config">
        <div class="option" @click=${this._toggleThing} .options=${e} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?z`
              <div class="card-background" style="max-height: 400px; overflow: auto;">
                ${this._createEntitiesValues()}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab
                    mini
                    icon="mdi:plus"
                    @click=${this._addEntity}
                    .configArray=${this._configArray}
                    .configAddValue=${"entity"}
                    .sourceArray=${this._config.entities}
                  ></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createAppearanceElement(){if(!this.hass)return z``;const e=this._options.appearance;return z`
        <div class="option" @click=${this._toggleThing} .options=${e} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+e.icon}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon
              .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"}
              style="margin-left: auto;"
            ></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?z`
                <div class="card-background">
                  ${this._createCardElement()} ${this._createBarElement(null)} ${this._createValueElement(null)}
                  ${this._createPositionsElement(null)} ${this._createSeverityElement(null)}
                  ${this._createAnimationElement(null)}
                </div>
              `:""}
      </div>`}_createBarElement(e){let t,i;return null!==e?(t=this._options.entities.options.entities[e].options.bar,i=this._configArray[e]):(t=this._options.appearance.options.bar,i=this._config),z`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?z`
              <div class="value">
                <div>
                  <paper-dropdown-menu
                    label="Direction"
                    @selected-item-changed=${this._valueChanged}
                    .configObject=${i}
                    .configAttribute=${"direction"}
                    .ignoreNull=${!0}
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      attr-for-selected="item-name"
                      selected="${i.direction?i.direction:null}"
                    >
                      <paper-item item-name="right">right</paper-item>
                      <paper-item item-name="up">up</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                  ${i.direction?z`
                        <ha-icon
                          class="ha-icon-large"
                          icon="mdi:close"
                          @click=${this._valueChanged}
                          .value=${""}
                          .configAttribute=${"direction"}
                          .configObject=${i}
                        ></ha-icon>
                      `:""}
                </div>
                ${null!==e?z`
                      <paper-input
                        label="Name"
                        .value="${i.name?i.name:""}"
                        editable
                        .configAttribute=${"name"}
                        .configObject=${i}
                        @value-changed=${this._valueChanged}
                      ></paper-input>
                    `:""}
                <paper-input
                  label="Icon"
                  .value="${i.icon?i.icon:""}"
                  editable
                  .configAttribute=${"icon"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Height"
                  .value="${i.height?i.height:""}"
                  editable
                  .configAttribute=${"height"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Width"
                  .value="${i.width?i.width:""}"
                  editable
                  .configAttribute=${"width"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Color"
                  .value="${i.color?i.color:""}"
                  editable
                  .configAttribute=${"color"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_createAnimationElement(e){let t,i;return null!==e?(t=this._options.entities.options.entities[e].options.animation,i=this._configArray[e]):(t=this._options.appearance.options.animation,i=this._config),i.animation=Object.assign({},i.animation),z`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?i.animation?z`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configAttribute=${"state"}
                      .configObject=${i.animation}
                      .index=${e}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox
                        slot="dropdown-content"
                        attr-for-selected="item-name"
                        selected="${i.animation.state?i.animation.state:null}"
                      >
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                    ${i.animation.state?z`
                          <ha-icon
                            class="ha-icon-large"
                            icon="mdi:close"
                            @click=${this._valueChanged}
                            .value=${""}
                            .configAttribute=${"state"}
                            .configObject=${i.animation}
                            .index=${e}
                          ></ha-icon>
                        `:""}
                  </div>
                  <paper-input
                    label="Speed"
                    .value="${i.animation.speed?i.animation.speed:""}"
                    editable
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i.animation}
                    .index=${e}
                  ></paper-input>
                </div>
              `:z`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configObject=${i}
                      .configAttribute=${"state"}
                      .configAdd=${"animation"}
                      .index=${e}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox slot="dropdown-content" attr-for-selected="item-name">
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                  </div>
                  <paper-input
                    label="Speed"
                    editable
                    .value=${""}
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i}
                    .configAdd=${"animation"}
                    .index=${e}
                  ></paper-input>
                </div>
              `:""}
      </div>
    `}_createSeverityElement(e){let t,i;null!==e?(t=this._options.entities.options.entities[e].options.severity,i=this._configArray[e]):(t=this._options.appearance.options.severity,i=this._config);const n=i.severity?i.severity.length:0;return z`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?z`
              <div class="card-background" style="overflow: auto; max-height: 420px;">
                ${n>0?z`
                      ${this._createSeverityValues(e)}
                    `:""}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab mini icon="mdi:plus" @click=${this._addSeverity} .index=${e}></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createSeverityValues(e){let t;t=null===e?this._config:this._configArray[e];const i=[];for(const n of t.severity){const a=t.severity.indexOf(n);i.push(z`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div class="value">
            <div style="display:flex;">
              <paper-input
                label="From"
                type="number"
                .value="${n.from||0===n.from?n.from:""}"
                editable
                .severityAttribute=${"from"}
                .index=${e}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="To"
                type="number"
                .value="${n.to?n.to:""}"
                editable
                .severityAttribute=${"to"}
                .index=${e}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            <div style="display:flex;">
              <paper-input
                label="Color"
                .value="${n.color?n.color:""}"
                editable
                .severityAttribute=${"color"}
                .index=${e}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="Icon"
                .value="${n.icon?n.icon:""}"
                editable
                .severityAttribute=${"icon"}
                .index=${e}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            ${n.hide?z`
                  <ha-switch
                    checked
                    .severityAttribute=${"hide"}
                    .index=${e}
                    .severityIndex=${a}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `:z`
                  <ha-switch
                    unchecked
                    .severityAttribute=${"hide"}
                    .index=${e}
                    .severityIndex=${a}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `}
          </div>
          <div style="display: flex;">
            ${0!==a?z`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-up"
                    @click=${this._moveSeverity}
                    .configDirection=${"up"}
                    .index=${e}
                    .severityIndex=${a}
                  ></ha-icon>
                `:z`
                  <ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            ${a!==t.severity.length-1?z`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-down"
                    @click=${this._moveSeverity}
                    .configDirection=${"down"}
                    .index=${e}
                    .severityIndex=${a}
                  ></ha-icon>
                `:z`
                  <ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._removeSeverity}
              .index=${e}
              .severityIndex=${a}
            ></ha-icon>
          </div>
        </div>
      `)}return i}_createCardElement(){if(!this.hass)return z``;const e=this._config,t=this._options.appearance.options.card;return z`
      <div class="category" id="card">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?z`
              <div class="value-container">
                <paper-input
                  editable
                  label="Header Title"
                  .value="${e.title?e.title:""}"
                  .configObject=${e}
                  .configAttribute=${"title"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Columns"
                  .value=${e.columns?e.columns:""}
                  .configObject=${e}
                  .configAttribute=${"columns"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div>
                  ${e.entity_row?z`
                        <ha-switch
                          checked
                          .configAttribute=${"entity_row"}
                          .configObject=${e}
                          .value=${!e.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `:z`
                        <ha-switch
                          unchecked
                          .configAttribute=${"entity_row"}
                          .configObject=${e}
                          .value=${!e.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `}
                </div>
              </div>
            `:""}
      </div>
    `}_createPositionsValues(e){let t;t=null===e?this._config:this._configArray[e],t.positions=Object.assign({},t.positions);const i=[],n=Object.keys({icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"});for(const e of n)t.positions[e]?i.push(z`
          <div class="value">
            <paper-dropdown-menu
              label="${e}"
              @value-changed=${this._valueChanged}
              .configAttribute=${e}
              .configObject=${t.positions}
              .ignoreNull=${!0}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${t.positions[e]}
              >
                <paper-item item-name="inside">inside</paper-item>
                <paper-item item-name="outside">outside</paper-item>
                <paper-item item-name="off">off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._valueChanged}
              .value=${""}
              .configAttribute=${e}
              .configObject=${t.positions}
            ></ha-icon>
          </div>
        `):i.push(z`
          <div class="value">
            <paper-dropdown-menu
              label="${e}"
              @value-changed=${this._valueChanged}
              .configAttribute=${e}
              .configObject=${t.positions}
            >
              <paper-listbox slot="dropdown-content" .selected=${null}>
                <paper-item>inside</paper-item>
                <paper-item>outside</paper-item>
                <paper-item>off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        `);return i}_createPositionsElement(e){if(!this.hass)return z``;let t,i;return null===e?(t=this._options.appearance.options.positions,i=this._config):(t=this._options.entities.options.entities[e].options.positions,i=this._configArray[e]),z`
      <div class="category">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?z`
              ${this._createPositionsValues(e)}
            `:""}
      </div>
    `}_createValueElement(e){if(!this.hass)return z``;let t,i;return null!==e?(t=this._options.entities.options.entities[e].options.value,i=this._configArray[e]):(t=this._options.appearance.options.value,i=this._config),z`
      <div class="category" id="value">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${t}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?z`
              <div class="value">
                ${i.limit_value?z`
                      <ha-switch
                        checked
                        .configAttribute=${"limit_value"}
                        .configObject=${i}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `:z`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"limit_value"}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `}
                ${i.complementary?z`
                      <ha-switch
                        checked
                        .configAttribute=${"complementary"}
                        .configObject=${i}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `:z`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"complementary"}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `}
                <paper-input
                  class="value-number"
                  label="Decimal"
                  type="number"
                  .value="${i.decimal?i.decimal:""}"
                  editable
                  .configAttribute=${"decimal"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Min"
                  .value="${i.min?i.min:""}"
                  editable
                  .configAttribute=${"min"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Max"
                  .value="${i.max?i.max:""}"
                  editable
                  .configAttribute=${"max"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Target"
                  .value="${i.target?i.target:""}"
                  editable
                  .configAttribute=${"target"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Unit of Measurement"
                  .value="${i.unit_of_measurement?i.unit_of_measurement:""}"
                  editable
                  .configAttribute=${"unit_of_measurement"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Attribute"
                  .value="${i.attribute?i.attribute:""}"
                  editable
                  .configAttribute=${"attribute"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_toggleThing(e){const t=e.target.options,i=!t.show;if(e.target.optionsTarget)if(Array.isArray(e.target.optionsTarget))for(const t of e.target.optionsTarget)t.show=!1;else for(const[t]of Object.entries(e.target.optionsTarget))e.target.optionsTarget[t].show=!1;t.show=i,this._toggle=!this._toggle}_addEntity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=t.configAddObject?t.configAddObject:{[t.configAddValue]:""};const n=t.configArray.slice();n.push(i),this._config.entities=n,ce(this,"config-changed",{config:this._config})}_moveEntity(e){if(!this._config||!this.hass)return;const t=e.target;let i=t.configArray.slice();"up"==t.configDirection?i=be(i,t.index,t.index-1):"down"==t.configDirection&&(i=be(i,t.index,t.index+1)),this._config.entities=i,ce(this,"config-changed",{config:this._config})}_removeEntity(e){if(!this._config||!this.hass)return;const t=e.target,i=[];let n=0;for(const e of this._configArray)t.configIndex!==n&&i.push(e),n++;const a={[t.configArray]:i};this._config=Object.assign(this._config,a),ce(this,"config-changed",{config:this._config})}_addSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=null===t.index?this._config.severity:this._config.entities[t.index].severity,i||(i=[]);const n=i.slice();n.push({from:"",to:"",color:""}),null===t.index?this._config.severity=n:this._configArray[t.index].severity=n,this._config.entities=this._configArray,ce(this,"config-changed",{config:this._config})}_moveSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=null===t.index?this._config.severity:this._config.entities[t.index].severity;let n=i.slice();"up"==t.configDirection?n=be(n,t.severityIndex,t.severityIndex-1):"down"==t.configDirection&&(n=be(n,t.severityIndex,t.severityIndex+1)),null===t.index?this._config.severity=n:this._configArray[t.index].severity=n,this._config.entities=this._configArray,ce(this,"config-changed",{config:this._config})}_removeSeverity(e){if(!this._config||!this.hass)return;const t=e.target;let i;i=null===t.index?this._config.severity:this._configArray[t.index].severity;const n=i.slice(),a=[];let o=0;for(const e of n)t.severityIndex!==o&&a.push(n[o]),o++;null===t.index?0===a.length?delete this._config.severity:this._config.severity=a:0===a.length?delete this._configArray[t.index].severity:this._configArray[t.index].severity=a,this._config.entities=this._configArray,ce(this,"config-changed",{config:this._config})}_updateSeverity(e){const t=e.target;let i;i=null===t.index?this._config.severity:this._configArray[t.index].severity;const n=[];for(const e in i)if(t.severityIndex==e){const a=Object.assign({},i[e]),o={[t.severityAttribute]:t.value},r=Object.assign(a,o);""==t.value&&delete r[t.severityAttribute],n.push(r)}else n.push(i[e]);null===t.index?this._config.severity=n:this._configArray[t.index].severity=n,this._config.entities=this._configArray,ce(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(t.configObject[t.configAttribute]!=t.value){if(t.configAdd&&""!==t.value&&(t.configObject=Object.assign(t.configObject,{[t.configAdd]:{[t.configAttribute]:t.value}})),t.configAttribute&&t.configObject&&!t.configAdd)if(""==t.value||!1===t.value){if(1==t.ignoreNull)return;delete t.configObject[t.configAttribute]}else console.log(t.configObject),t.configObject[t.configAttribute]=t.value;this._config.entities=this._configArray,ce(this,"config-changed",{config:this._config})}}static get styles(){return ee`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .options {
        background: var(--primary-background-color);
        border-radius: var(--ha-card-border-radius);
        cursor: pointer;
        padding: 8px;
      }
      .sub-category {
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
        margin-top: 14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .value {
        padding: 0px 8px;
      }
      .value-container {
        padding: 0px 8px;
        transition: all 0.5s ease-in-out;
      }
      .value-container:target {
        height: 50px;
      }
      .value-number {
        width: 100px;
      }
      ha-fab {
        margin: 8px;
      }
      ha-switch {
        padding: 16px 0;
      }
      .card-background {
        background: var(--paper-card-background-color);
        border-radius: var(--ha-card-border-radius);
        padding: 8px;
      }
      .category {
        background: #0000;
      }
      .ha-icon-large {
        cursor: pointer;
        margin: 0px 4px;
      }
    `}};e([G()],ye.prototype,"hass",void 0),e([G()],ye.prototype,"_config",void 0),e([G()],ye.prototype,"_toggle",void 0),ye=e([X("bar-card-editor")],ye),window.customCards=window.customCards||[],window.customCards.push({type:"bar-card",name:"Bar Card",preview:!1,description:"A customizable bar card."});const _e="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class $e extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:_e?"100px":"50px",height:_e?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>{const t=e||window.event;t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1});const i=e=>{if(this.cooldownStart)return;let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,i),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?ce(e,"action",{action:"hold"}):t.hasDoubleTap?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout(()=>{ce(e,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),ce(e,"action",{action:"double_tap"})):ce(e,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),e.addEventListener("keyup",e=>{if(13===e.keyCode)return n(e)});/iPhone OS 13_/.test(window.navigator.userAgent)||(e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",n))}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-bar",$e);const we=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-bar"))return e.querySelector("action-handler-bar");const t=document.createElement("action-handler-bar");return e.appendChild(t),t})();i&&i.bind(e,t)},xe=(Se=(e={})=>t=>{we(t.committer.element,e)},(...e)=>{const t=Se(...e);return g.set(t,!0),t});var Se;var Ae={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"},ke={common:Ae},Ce={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ee={common:Ce},Oe={en:Object.freeze({__proto__:null,common:Ae,default:ke}),nb:Object.freeze({__proto__:null,common:Ce,default:Ee})};function Ne(e,t="",i=""){const n=e.split(".")[0],a=e.split(".")[1],o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var r;try{r=Oe[o][n][a]}catch(e){r=Oe.en[n][a]}return void 0===r&&(r=Oe.en[n][a]),""!==t&&""!==i&&(r=r.replace(t,i)),r}const Pe=z`
  <style>
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    #states > * {
      margin-bottom: 8px;
    }
    #states > :last-child {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    #states > :first-child {
      margin-top: 0px;
    }
    ha-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    bar-card-row {
      display: flex;
      flex-grow: 1;
    }
    bar-card-row > div {
      flex-basis: 100%;
    }
    bar-card-row:empty {
      display: none;
    }
    bar-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 8px;
    }
    bar-card-card:last-child {
      margin-right: 0px;
    }
    bar-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
    }
    bar-card-iconbar {
      color: var(--icon-color, var(--paper-item-icon-color));
      align-items: center;
      align-self: center;
      display: flex;
      height: 40px;
      justify-content: center;
      position: relative;
      width: 40px;
    }
    bar-card-currentbar,
    bar-card-currentthumb,
    bar-card-backgroundbar,
    bar-card-contentbar,
    bar-card-targetbar,
    bar-card-animationbar {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: var(--bar-card-border-radius, var(--ha-card-border-radius));
    }
    bar-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: flex-start;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    .contentbar-direction-up {
      flex-direction: column;
    }
    bar-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    bar-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    bar-card-currentthumb {
      left: calc( var(--bar-percent) - 20px );
      width: 40px;
      background: none;
      background-color: white;
      opacity: 1;
      z-index: 5;
      border: 2px solid;
      top: -2px;
    }
    bar-card-targetbar {
      background: linear-gradient(
        to var(--bar-direction),
        #0000 var(--bar-percent),
        var(--bar-color) var(--bar-percent),
        var(--bar-color) var(--bar-target-percent),
        #0000 var(--bar-target-percent)
      );
      display: var(--target-display);
      filter: brightness(0.66);
      opacity: 0.33;
    }
    bar-card-markerbar {
      background: var(--bar-color);
      filter: brightness(0.75);
      opacity: 50%;
      position: absolute;
    }
    bar-card-animationbar {
      background-repeat: no-repeat;
      filter: brightness(0.75);
      opacity: 0%;
    }
    .animationbar-horizontal {
      background: linear-gradient(to var(--animation-direction), var(--bar-color) 0%, var(--bar-color) 1%, #0000 1%);
    }
    .animationbar-vertical {
      background: linear-gradient(to var(--animation-direction), #0000 0%, #0000 1%, var(--bar-color) 1%);
    }
    @keyframes animation-increase {
      0% {
        opacity: 50%;
        background-size: var(--bar-percent) 100%;
      }
      100% {
        opacity: 0%;
        background-size: 10000% 100%;
      }
    }
    @keyframes animation-decrease {
      0% {
        opacity: 0%;
        background-size: 10000%;
      }
      100% {
        opacity: 50%;
        background-size: var(--bar-percent);
      }
    }
    @keyframes animation-increase-vertical {
      0% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
      100% {
        background-size: 100% 0%;
        opacity: 0%;
      }
    }
    @keyframes animation-decrease-vertical {
      0% {
        background-size: 100% 100%;
        opacity: 0%;
      }
      100% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
    }
    bar-card-indicator {
      align-self: center;
      color: var(--bar-color);
      filter: brightness(0.75);
      height: 16px;
      width: 16px;
      position: relative;
      text-align: center;
    }
    .indicator-direction-right {
      margin-right: -16px;
      left: -6px;
    }
    .indicator-direction-up {
      margin: 4px;
    }
    bar-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    .name-outside {
      margin-left: 16px;
    }
    bar-card-value,
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      align-self: center;
      position: relative;
    }
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      font-size: 10px;
      margin: 2px;
      opacity: 0.5;
    }
    .min-direction-up {
      margin-top: auto;
    }
    .min-direction-right {
      margin-left: auto;
    }
    bar-card-divider {
      margin-left: 0px;
      margin-right: 0px;
    }
    bar-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
    .value-direction-up {
      margin-top: auto;
    }
  </style>
`;console.info(`%c  BAR-CARD \n%c  ${Ne("common.version")} 3.1.8    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Te=class extends ie{constructor(){super(...arguments),this._configArray=[],this._stateArray=[],this._animationState=[],this._rowAmount=1}static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{}}shouldUpdate(e){return ve(this,e,!1)}setConfig(e){if(!e)throw new Error(Ne("common.invalid_configuration"));this._config=me({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"}},e),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=function(e){const t=[];if(e.entities){for(const i of e.entities)if("string"==typeof i){const n=me({},e);delete n.entities;const a=me(n,{entity:i});t.push(a)}else if("object"==typeof i){const n=me({},e);delete n.entities;const a=me(n,i);t.push(a)}}else t.push(e);return t}(this._config),this._rowAmount=this._configArray.length/this._config.columns}render(){return this._config&&this.hass?z`
      <ha-card
        .header=${this._config.title?this._config.title:null}
        style="${this._config.entity_row?"background: #0000; box-shadow: none;":""}"
      >
        <div
          id="states"
          class="card-content"
          style="${this._config.entity_row?"padding: 0px;":""} ${"up"==this._config.direction?"":"flex-grow: 0;"}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${Pe}
    `:z``}_createBarArray(){var e;const t=[];for(let e=0;e<this._configArray.length;e++)(t.length+1)*this._config.columns==e&&t.push(this._config.columns),this._configArray.length==e+1&&t.push(this._configArray.length-t.length*this._config.columns);const i=[];for(let n=0;n<t.length;n++){const a=[];for(let i=0;i<t[n];i++){const t=n*this._config.columns+i,o=this._configArray[t],r=this.hass.states[o.entity];if(!r){a.push(z`
            <div class="warning" style="margin-bottom: 8px;">
              ${Ne("common.entity_not_available")}: ${o.entity}
            </div>
          `);continue}let s;if(s=o.attribute?r.attributes[o.attribute]:r.state,o.severity&&this._computeSeverityVisibility(s,t))continue;const c=fe(this.hass,o.max),l=fe(this.hass,o.min);o.limit_value&&(s=Math.min(s,c),s=Math.max(s,l));const d=fe(this.hass,o.rangemax),h=fe(this.hass,o.rangemin);!o.limit_valuetorange||0==d&&0==h||(s=Math.min(s,d),s=Math.max(s,h)),isNaN(Number(s))||(0==o.decimal?s=Number(s).toFixed(0):o.decimal&&(s=Number(s).toFixed(o.decimal)));let p=40;o.height&&(p=o.height);let u,g,m,f="stretch",v="0px 0px 0px 13px",b="right",y="row",_="left",$="height: 100%; width: 2px;";switch(o.direction){case"right":b="right",_="left";break;case"up":v="0px",b="top",y="column-reverse",_="bottom",$="height: 2px; width: 100%;"}switch(m=this._computeSeverityIcon(s,t)?this._computeSeverityIcon(s,t):o.icon?o.icon:r.attributes.icon?r.attributes.icon:de(re(o.entity),s),o.positions.icon){case"outside":u=z`
              <bar-card-iconbar>
                <ha-icon icon="${m}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":g=z`
              <bar-card-iconbar>
                <ha-icon icon="${m}"></ha-icon>
              </bar-card-iconbar>
            `,v="0px";break;case"off":v="0px"}const w=o.name?o.name:r.attributes.friendly_name;let x,S,A,k,C,E,O,N;switch(o.positions.name){case"outside":x=z`
              <bar-card-name
                class="${o.entity_row?"name-outside":""}"
                style="${"up"==o.direction?"":o.width?`width: calc(100% - ${o.width});`:""}"
                >${w}</bar-card-name
              >
            `,v="0px";break;case"inside":S=z`
              <bar-card-name>${w}</bar-card-name>
            `}switch(A=isNaN(Number(s))?"":o.unit_of_measurement?o.unit_of_measurement:r.attributes.unit_of_measurement,o.positions.minmax){case"bothsides":k=z`
              <bar-card-min>${l}${A}</bar-card-min>
            `,C=z`
              <bar-card-max>${c}${A}</bar-card-max>
            `;break;case"outside":C=z`
              <bar-card-min>${l}${A}</bar-card-min>
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max>${c}${A}</bar-card-max>
            `;break;case"inside":E=z`
              <bar-card-min class="${"up"==o.direction?"min-direction-up":"min-direction-right"}"
                >${l}${A}</bar-card-min
              >
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max> ${c}${A}</bar-card-max>
            `}switch(o.positions.value){case"outside":O=z`
              <bar-card-value class="${"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?c-s:s} ${A}</bar-card-value
              >
            `;break;case"inside":N=z`
              <bar-card-value
                class="${"inside"==o.positions.minmax?"":"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?c-s:s} ${A}</bar-card-value
              >
            `;break;case"off":v="0px"}let P="";s>this._stateArray[t]?(P="▲","up"==o.direction?this._animationState[t]="animation-increase-vertical":this._animationState[t]="animation-increase"):s<this._stateArray[t]?(P="▼","up"==o.direction?this._animationState[t]="animation-decrease-vertical":this._animationState[t]="animation-decrease"):this._animationState[t]=this._animationState[t],isNaN(Number(s))&&(P="");const T=this._computeBarColor(s,t);let j,V;switch(o.positions.indicator){case"outside":j=z`
              <bar-card-indicator
                class="${"up"==o.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${T};"
                >${P}</bar-card-indicator
              >
            `;break;case"inside":V=z`
              <bar-card-indicator style="--bar-color: ${T};">${P}</bar-card-indicator>
            `}const I=this._computePercent(s,t,c,l),U=fe(this.hass,null!==(e=o.target)&&void 0!==e?e:0);this._computePercent(U,t,c,l);let M=I,R=this._computePercent(U,t,c,l);R<M&&(M=R,R=I);let L="";o.width&&(f="center",L="width: "+o.width);const B=this._animationState[t];let D="right",H=100*I,q="animationbar-horizontal";"animation-increase-vertical"!=B&&"animation-decrease-vertical"!=B||(D="bottom",q="animationbar-vertical",H=100*(100-I)),a.push(z`
          <bar-card-card
            style="flex-direction: ${y}; align-items: ${f};"
            @action=${this._handleAction}
            .config=${o}
            .actionHandler=${xe({hasHold:ge(o.hold_action),hasDoubleClick:ge(o.double_tap_action)})}
          >
            ${u} ${j} ${x} ${k}
            <bar-card-background
              style="margin: ${v}; height: ${p}${"number"==typeof p?"px":""}; ${L}"
            >
              <bar-card-backgroundbar style="--bar-color: ${T};"></bar-card-backgroundbar>
              ${"on"==o.animation.state?z`
                    <bar-card-animationbar
                      style="animation: ${B} ${o.animation.speed}s infinite ease-out; --bar-percent: ${H}%; --bar-color: ${T}; --animation-direction: ${D};"
                      class="${q}"
                    ></bar-card-animationbar>
                  `:""}
              ${o.value_as_thumb?z`
                    <bar-card-currentthumb
                      style="--bar-color: ${T}; --bar-percent: ${I}%; --bar-direction: ${b}"
                    >
                      ${o.complementary?c-s:s}
                    </bar-card-currentthumb>
                  `:z`
                    <bar-card-currentbar
                      style="--bar-color: ${T}; --bar-percent: ${I}%; --bar-direction: ${b}"
                    ></bar-card-currentbar>
                  `}
              ${o.target?z`
                    <bar-card-targetbar
                      style="--bar-color: ${T}; --bar-percent: ${M}%; --bar-target-percent: ${R}%; --bar-direction: ${b};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${T}; --bar-target-percent: ${R}%; ${_}: calc(var(--bar-target-percent) - 1px); ${$}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-contentbar
                class="${"up"==o.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${g} ${V} ${S} ${E} ${N}
              </bar-card-contentbar>
            </bar-card-background>
            ${C} ${O}
          </bar-card-card>
        `),s!==this._stateArray[t]&&(this._stateArray[t]=s)}i.push(a)}let n="column";(this._config.columns||this._config.stack)&&(n="row");const a=[];for(const e of i)a.push(z`
        <bar-card-row style="flex-direction: ${n};">${e}</bar-card-row>
      `);return a}_computeBarColor(e,t){const i=this._configArray[t];let n;return n=i.severity?this._computeSeverityColor(e,t):"unavailable"==e?`var(--bar-card-disabled-color, ${i.color})`:i.color,n}_computeSeverityColor(e,t){const i=this._configArray[t],n=Number(e),a=i.severity;let o;return isNaN(n)?a.forEach(t=>{e==t.text&&(o=t.color)}):a.forEach(e=>{n>=e.from&&n<=e.to&&(o=e.color)}),null==o&&(o=i.color),o}_computeSeverityVisibility(e,t){const i=this._configArray[t],n=Number(e),a=i.severity;let o=!1;return isNaN(n)?a.forEach(t=>{e==t.text&&(o=t.hide)}):a.forEach(e=>{n>=e.from&&n<=e.to&&(o=e.hide)}),o}_computeSeverityIcon(e,t){const i=this._configArray[t],n=Number(e),a=i.severity;let o=!1;return!!a&&(isNaN(n)?a.forEach(t=>{e==t.text&&(o=t.icon)}):a.forEach(e=>{n>=e.from&&n<=e.to&&(o=e.icon)}),o)}_computePercent(e,t,i,n){const a=this._configArray[t],o=Number(e);if("unavailable"==e)return 0;if(isNaN(o))return 100;switch(a.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(o-n)/(i-n);default:return 100*(o-n)/(i-n)}}_handleAction(e){this.hass&&e.target.config&&e.detail.action&&function(e,t,i,n){var a;"double_tap"===n&&i.double_tap_action?a=i.double_tap_action:"hold"===n&&i.hold_action?a=i.hold_action:"tap"===n&&i.tap_action&&(a=i.tap_action),ue(e,t,i,a)}(this,this.hass,e.target.config,e.detail.action)}getCardSize(){if(this._config.height){const e=this._config.height.toString();return Math.trunc(Number(e.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}};e([G()],Te.prototype,"hass",void 0),e([G()],Te.prototype,"_config",void 0),e([G()],Te.prototype,"_configArray",void 0),Te=e([X("bar-card")],Te);export{Te as BarCard};
