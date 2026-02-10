(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function x_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ym={exports:{}},Wl={},Mm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),y_=Symbol.for("react.portal"),M_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),A_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),C_=Symbol.for("react.memo"),b_=Symbol.for("react.lazy"),Ff=Symbol.iterator;function P_(t){return t===null||typeof t!="object"?null:(t=Ff&&t[Ff]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,wm={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Sm}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=Gs.prototype;function Td(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Sm}var Ad=Td.prototype=new Tm;Ad.constructor=Td;Em(Ad,Gs.prototype);Ad.isPureReactComponent=!0;var Of=Array.isArray,Am=Object.prototype.hasOwnProperty,Rd={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Am.call(e,i)&&!Rm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Qa,type:t,key:s,ref:a,props:r,_owner:Rd.current}}function L_(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function D_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zf=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D_(""+t.key):e.toString(36)}function Qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Qa:case y_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+gc(a,0):i,Of(r)?(n="",t!=null&&(n=t.replace(zf,"$&/")+"/"),Qo(r,e,n,"",function(c){return c})):r!=null&&(Cd(r)&&(r=L_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(zf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Of(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+gc(s,o);a+=Qo(s,e,n,l,r)}else if(l=P_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+gc(s,o++),a+=Qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return Qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function I_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Jo={transition:null},U_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:Rd};function bm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!Cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Gs;Xe.Fragment=M_;Xe.Profiler=E_;Xe.PureComponent=Td;Xe.StrictMode=S_;Xe.Suspense=R_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_;Xe.act=bm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Em({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Rd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Am.call(e,l)&&!Rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Qa,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:T_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:w_,_context:t},t.Consumer=t};Xe.createElement=Cm;Xe.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:A_,render:t}};Xe.isValidElement=Cd;Xe.lazy=function(t){return{$$typeof:b_,_payload:{_status:-1,_result:t},_init:I_}};Xe.memo=function(t,e){return{$$typeof:C_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Jo.transition;Jo.transition={};try{t()}finally{Jo.transition=e}};Xe.unstable_act=bm;Xe.useCallback=function(t,e){return sn.current.useCallback(t,e)};Xe.useContext=function(t){return sn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return sn.current.useEffect(t,e)};Xe.useId=function(){return sn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return sn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Xe.useRef=function(t){return sn.current.useRef(t)};Xe.useState=function(t){return sn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return sn.current.useTransition()};Xe.version="18.3.1";Mm.exports=Xe;var yr=Mm.exports;const N_=x_(yr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=yr,O_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),B_=Object.prototype.hasOwnProperty,k_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)B_.call(e,i)&&!H_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:O_,type:t,key:s,ref:a,props:r,_owner:k_.current}}Wl.Fragment=z_;Wl.jsx=Pm;Wl.jsxs=Pm;ym.exports=Wl;var Te=ym.exports,yu={},Lm={exports:{}},Mn={},Dm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,F){var z=I.length;I.push(F);e:for(;0<z;){var q=z-1>>>1,Z=I[q];if(0<r(Z,F))I[q]=F,I[z]=Z,z=q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var F=I[0],z=I.pop();if(z!==F){I[0]=z;e:for(var q=0,Z=I.length,j=Z>>>1;q<j;){var $=2*(q+1)-1,oe=I[$],fe=$+1,me=I[fe];if(0>r(oe,z))fe<Z&&0>r(me,oe)?(I[q]=me,I[fe]=z,q=fe):(I[q]=oe,I[$]=z,q=$);else if(fe<Z&&0>r(me,z))I[q]=me,I[fe]=z,q=fe;else break e}}return F}function r(I,F){var z=I.sortIndex-F.sortIndex;return z!==0?z:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,p=!1,x=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=I)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(I){if(v=!1,_(I),!x)if(n(l)!==null)x=!0,X(C);else{var F=n(c);F!==null&&Y(y,F.startTime-I)}}function C(I,F){x=!1,v&&(v=!1,u(b),b=-1),p=!0;var z=h;try{for(_(F),f=n(l);f!==null&&(!(f.expirationTime>F)||I&&!N());){var q=f.callback;if(typeof q=="function"){f.callback=null,h=f.priorityLevel;var Z=q(f.expirationTime<=F);F=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),_(F)}else i(l);f=n(l)}if(f!==null)var j=!0;else{var $=n(c);$!==null&&Y(y,$.startTime-F),j=!1}return j}finally{f=null,h=z,p=!1}}var w=!1,A=null,b=-1,M=5,S=-1;function N(){return!(t.unstable_now()-S<M)}function B(){if(A!==null){var I=t.unstable_now();S=I;var F=!0;try{F=A(!0,I)}finally{F?K():(w=!1,A=null)}}else w=!1}var K;if(typeof g=="function")K=function(){g(B)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=B,K=function(){O.postMessage(null)}}else K=function(){m(B,0)};function X(I){A=I,w||(w=!0,K())}function Y(I,F){b=m(function(){I(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,X(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var z=h;h=F;try{return I()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var z=h;h=I;try{return F()}finally{h=z}},t.unstable_scheduleCallback=function(I,F,z){var q=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?q+z:q):z=q,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,I={id:d++,callback:F,priorityLevel:I,startTime:z,expirationTime:Z,sortIndex:-1},z>q?(I.sortIndex=z,e(c,I),n(l)===null&&I===n(c)&&(v?(u(b),b=-1):v=!0,Y(y,z-q))):(I.sortIndex=Z,e(l,I),x||p||(x=!0,X(C))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var F=h;return function(){var z=h;h=F;try{return I.apply(this,arguments)}finally{h=z}}}})(Im);Dm.exports=Im;var G_=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=yr,yn=G_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,Pa={};function Or(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Pa[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,W_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf={},kf={};function X_(t){return Mu.call(kf,t)?!0:Mu.call(Bf,t)?!1:W_.test(t)?kf[t]=!0:(Bf[t]=!0,!1)}function j_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y_(t,e,n,i){if(e===null||typeof e>"u"||j_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Pd);kt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Pd);kt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Pd);kt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ld(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Y_(e,n,r,i)&&(n=null),i||r===null?X_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),Hf=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,_c;function pa(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var vc=!1;function xc(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function q_(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case cs:return"Portal";case Su:return"Profiler";case Dd:return"StrictMode";case Eu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ud:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function $_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function K_(t){var e=zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=K_(t))}function Bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=zm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Au(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Ld(t,"checked",e,!1)}function Ru(t,e){km(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cu(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cu(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ma(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function Hm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){Z_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function Xm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Q_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lu(t,e){if(e){if(Q_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,ws=null,Ts=null;function jf(t){if(t=to(t)){if(typeof Uu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=$l(e),Uu(t.stateNode,t.type,e))}}function jm(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function Ym(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,jf(t),e)for(t=0;t<e.length;t++)jf(e[t])}}function qm(t,e){return t(e)}function $m(){}var yc=!1;function Km(t,e,n){if(yc)return t(e,n);yc=!0;try{return qm(t,e,n)}finally{yc=!1,(ws!==null||Ts!==null)&&($m(),Ym())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var i=$l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Nu=!1;if(xi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Nu=!1}function J_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var xa=!1,fl=null,hl=!1,Fu=null,ev={onError:function(t){xa=!0,fl=t}};function tv(t,e,n,i,r,s,a,o,l){xa=!1,fl=null,J_.apply(ev,arguments)}function nv(t,e,n,i,r,s,a,o,l){if(tv.apply(this,arguments),xa){if(xa){var c=fl;xa=!1,fl=null}else throw Error(ee(198));hl||(hl=!0,Fu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yf(t){if(zr(t)!==t)throw Error(ee(188))}function iv(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yf(r),t;if(s===i)return Yf(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Qm(t){return t=iv(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var e0=yn.unstable_scheduleCallback,qf=yn.unstable_cancelCallback,rv=yn.unstable_shouldYield,sv=yn.unstable_requestPaint,St=yn.unstable_now,av=yn.unstable_getCurrentPriorityLevel,Fd=yn.unstable_ImmediatePriority,t0=yn.unstable_UserBlockingPriority,pl=yn.unstable_NormalPriority,ov=yn.unstable_LowPriority,n0=yn.unstable_IdlePriority,Xl=null,ti=null;function lv(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:dv,cv=Math.log,uv=Math.LN2;function dv(t){return t>>>=0,t===0?32:31-(cv(t)/uv|0)|0}var uo=64,fo=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function fv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=fv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i0(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function pv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,zd,a0,o0,l0,zu=!1,ho=[],Gi=null,Vi=null,Wi=null,Ia=new Map,Ua=new Map,Ni=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=to(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gv(t,e,n,i,r){switch(e){case"focusin":return Gi=Qs(Gi,t,e,n,i,r),!0;case"dragenter":return Vi=Qs(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=Qs(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,Qs(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ua.set(s,Qs(Ua.get(s)||null,t,e,n,i,r)),!0}return!1}function c0(t){var e=Mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,l0(t.priority,function(){a0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Iu=i,n.target.dispatchEvent(i),Iu=null}else return e=to(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Kf(t,e,n){el(t)&&n.delete(e)}function _v(){zu=!1,Gi!==null&&el(Gi)&&(Gi=null),Vi!==null&&el(Vi)&&(Vi=null),Wi!==null&&el(Wi)&&(Wi=null),Ia.forEach(Kf),Ua.forEach(Kf)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,zu||(zu=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,_v)))}function Na(t){function e(r){return Js(r,t)}if(0<ho.length){Js(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Js(Gi,t),Vi!==null&&Js(Vi,t),Wi!==null&&Js(Wi,t),Ia.forEach(e),Ua.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&Ni.shift()}var As=Ti.ReactCurrentBatchConfig,gl=!0;function vv(t,e,n,i){var r=Ke,s=As.transition;As.transition=null;try{Ke=1,Bd(t,e,n,i)}finally{Ke=r,As.transition=s}}function xv(t,e,n,i){var r=Ke,s=As.transition;As.transition=null;try{Ke=4,Bd(t,e,n,i)}finally{Ke=r,As.transition=s}}function Bd(t,e,n,i){if(gl){var r=Bu(t,e,n,i);if(r===null)Lc(t,e,i,_l,n),$f(t,i);else if(gv(r,t,e,n,i))i.stopPropagation();else if($f(t,i),e&4&&-1<mv.indexOf(t)){for(;r!==null;){var s=to(r);if(s!==null&&s0(s),s=Bu(t,e,n,i),s===null&&Lc(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var _l=null;function Bu(t,e,n,i){if(_l=null,t=Nd(i),t=Mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case Fd:return 1;case t0:return 4;case pl:case ov:return 16;case n0:return 536870912;default:return 16}default:return 16}}var Oi=null,kd=null,tl=null;function d0(){if(tl)return tl;var t,e=kd,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return tl=r.slice(t,1<i?1-i:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function Zf(){return!1}function Sn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Zf,this.isPropagationStopped=Zf,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=Sn(Vs),eo=gt({},Vs,{view:0,detail:0}),yv=Sn(eo),Sc,Ec,ea,jl=gt({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Sc=t.screenX-ea.screenX,Ec=t.screenY-ea.screenY):Ec=Sc=0,ea=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Qf=Sn(jl),Mv=gt({},jl,{dataTransfer:0}),Sv=Sn(Mv),Ev=gt({},eo,{relatedTarget:0}),wc=Sn(Ev),wv=gt({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=Sn(wv),Av=gt({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rv=Sn(Av),Cv=gt({},Vs,{data:0}),Jf=Sn(Cv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lv[t])?!!e[t]:!1}function Gd(){return Dv}var Iv=gt({},eo,{key:function(t){if(t.key){var e=bv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Uv=Sn(Iv),Nv=gt({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=Sn(Nv),Fv=gt({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),Ov=Sn(Fv),zv=gt({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Sn(zv),kv=gt({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=Sn(kv),Gv=[9,13,27,32],Vd=xi&&"CompositionEvent"in window,ya=null;xi&&"documentMode"in document&&(ya=document.documentMode);var Vv=xi&&"TextEvent"in window&&!ya,f0=xi&&(!Vd||ya&&8<ya&&11>=ya),th=" ",nh=!1;function h0(t,e){switch(t){case"keyup":return Gv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Wv(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(nh=!0,th);case"textInput":return t=e.data,t===th&&nh?null:t;default:return null}}function Xv(t,e){if(ds)return t==="compositionend"||!Vd&&h0(t,e)?(t=d0(),tl=kd=Oi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f0&&e.locale!=="ko"?null:e.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jv[t.type]:e==="textarea"}function m0(t,e,n,i){jm(i),e=vl(e,"onChange"),0<e.length&&(n=new Hd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Fa=null;function Yv(t){A0(t,0)}function Yl(t){var e=ps(t);if(Bm(e))return t}function qv(t,e){if(t==="change")return e}var g0=!1;if(xi){var Tc;if(xi){var Ac="oninput"in document;if(!Ac){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),Ac=typeof rh.oninput=="function"}Tc=Ac}else Tc=!1;g0=Tc&&(!document.documentMode||9<document.documentMode)}function sh(){Ma&&(Ma.detachEvent("onpropertychange",_0),Fa=Ma=null)}function _0(t){if(t.propertyName==="value"&&Yl(Fa)){var e=[];m0(e,Fa,t,Nd(t)),Km(Yv,e)}}function $v(t,e,n){t==="focusin"?(sh(),Ma=e,Fa=n,Ma.attachEvent("onpropertychange",_0)):t==="focusout"&&sh()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Fa)}function Zv(t,e){if(t==="click")return Yl(e)}function Qv(t,e){if(t==="input"||t==="change")return Yl(e)}function Jv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Jv;function Oa(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oh(t,e){var n=ah(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ah(n)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x0(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ex(t){var e=x0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(i!==null&&Wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=oh(n,s);var a=oh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tx=xi&&"documentMode"in document&&11>=document.documentMode,fs=null,ku=null,Sa=null,Hu=!1;function lh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||fs==null||fs!==dl(i)||(i=fs,"selectionStart"in i&&Wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Oa(Sa,i)||(Sa=i,i=vl(ku,"onSelect"),0<i.length&&(e=new Hd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Rc={},y0={};xi&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function ql(t){if(Rc[t])return Rc[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y0)return Rc[t]=e[n];return t}var M0=ql("animationend"),S0=ql("animationiteration"),E0=ql("animationstart"),w0=ql("transitionend"),T0=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){T0.set(t,e),Or(e,[t])}for(var Cc=0;Cc<ch.length;Cc++){var bc=ch[Cc],nx=bc.toLowerCase(),ix=bc[0].toUpperCase()+bc.slice(1);sr(nx,"on"+ix)}sr(M0,"onAnimationEnd");sr(S0,"onAnimationIteration");sr(E0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(w0,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nv(i,e,void 0,t),t.currentTarget=null}function A0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;uh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;uh(r,o,c),s=l}}}if(hl)throw t=Fu,hl=!1,Fu=null,t}function rt(t,e){var n=e[ju];n===void 0&&(n=e[ju]=new Set);var i=t+"__bubble";n.has(i)||(R0(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),R0(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[go]){t[go]=!0,Um.forEach(function(n){n!=="selectionchange"&&(rx.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Pc("selectionchange",!1,e))}}function R0(t,e,n,i){switch(u0(e)){case 1:var r=vv;break;case 4:r=xv;break;default:r=Bd}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Km(function(){var c=s,d=Nd(n),f=[];e:{var h=T0.get(t);if(h!==void 0){var p=Hd,x=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":p=Uv;break;case"focusin":x="focus",p=wc;break;case"focusout":x="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ov;break;case M0:case S0:case E0:p=Tv;break;case w0:p=Bv;break;case"scroll":p=yv;break;case"wheel":p=Hv;break;case"copy":case"cut":case"paste":p=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=eh}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=Da(g,u),y!=null&&v.push(Ba(g,y,_)))),m)break;g=g.return}0<v.length&&(h=new p(h,x,null,n,d),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Iu&&(x=n.relatedTarget||n.fromElement)&&(Mr(x)||x[yi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Mr(x):null,x!==null&&(m=zr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(v=Qf,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=eh,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:ps(p),_=x==null?h:ps(x),h=new v(y,g+"leave",p,n,d),h.target=m,h.relatedTarget=_,y=null,Mr(d)===c&&(v=new v(u,g+"enter",x,n,d),v.target=_,v.relatedTarget=m,y=v),m=y,p&&x)t:{for(v=p,u=x,g=0,_=v;_;_=Hr(_))g++;for(_=0,y=u;y;y=Hr(y))_++;for(;0<g-_;)v=Hr(v),g--;for(;0<_-g;)u=Hr(u),_--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=Hr(v),u=Hr(u)}v=null}else v=null;p!==null&&dh(f,h,p,v,!1),x!==null&&m!==null&&dh(f,m,x,v,!0)}}e:{if(h=c?ps(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=qv;else if(ih(h))if(g0)C=Qv;else{C=Kv;var w=$v}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Zv);if(C&&(C=C(t,c))){m0(f,C,n,d);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Cu(h,"number",h.value)}switch(w=c?ps(c):window,t){case"focusin":(ih(w)||w.contentEditable==="true")&&(fs=w,ku=c,Sa=null);break;case"focusout":Sa=ku=fs=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,lh(f,n,d);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":lh(f,n,d)}var A;if(Vd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ds?h0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(f0&&n.locale!=="ko"&&(ds||b!=="onCompositionStart"?b==="onCompositionEnd"&&ds&&(A=d0()):(Oi=d,kd="value"in Oi?Oi.value:Oi.textContent,ds=!0)),w=vl(c,b),0<w.length&&(b=new Jf(b,t,null,n,d),f.push({event:b,listeners:w}),A?b.data=A:(A=p0(n),A!==null&&(b.data=A)))),(A=Vv?Wv(t,n):Xv(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(d=new Jf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}A0(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(t,n),s!=null&&i.unshift(Ba(t,s,r)),s=Da(t,e),s!=null&&i.push(Ba(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Da(n,s),l!=null&&a.unshift(Ba(n,l,o))):r||(l=Da(n,s),l!=null&&a.push(Ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var sx=/\r\n?/g,ax=/\u0000|\uFFFD/g;function fh(t){return(typeof t=="string"?t:""+t).replace(sx,`
`).replace(ax,"")}function _o(t,e,n){if(e=fh(e),fh(t)!==e&&n)throw Error(ee(425))}function xl(){}var Gu=null,Vu=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,lx=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(t){return hh.resolve(null).then(t).catch(cx)}:Xu;function cx(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ws,ka="__reactProps$"+Ws,yi="__reactContainer$"+Ws,ju="__reactEvents$"+Ws,ux="__reactListeners$"+Ws,dx="__reactHandles$"+Ws;function Mr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ph(t);t!==null;){if(n=t[Jn])return n;t=ph(t)}return e}t=n,n=t.parentNode}return null}function to(t){return t=t[Jn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function $l(t){return t[ka]||null}var Yu=[],ms=-1;function ar(t){return{current:t}}function ot(t){0>ms||(t.current=Yu[ms],Yu[ms]=null,ms--)}function it(t,e){ms++,Yu[ms]=t.current,t.current=e}var er={},qt=ar(er),cn=ar(!1),Pr=er;function Ls(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function yl(){ot(cn),ot(qt)}function mh(t,e,n){if(qt.current!==er)throw Error(ee(168));it(qt,e),it(cn,n)}function C0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,$_(t)||"Unknown",r));return gt({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Pr=qt.current,it(qt,t),it(cn,cn.current),!0}function gh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=C0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,ot(cn),ot(qt),it(qt,t)):ot(cn),it(cn,n)}var fi=null,Kl=!1,Ic=!1;function b0(t){fi===null?fi=[t]:fi.push(t)}function fx(t){Kl=!0,b0(t)}function or(){if(!Ic&&fi!==null){Ic=!0;var t=0,e=Ke;try{var n=fi;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Kl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),e0(Fd,or),r}finally{Ke=e,Ic=!1}}return null}var gs=[],_s=0,Sl=null,El=0,Tn=[],An=0,Lr=null,hi=1,pi="";function pr(t,e){gs[_s++]=El,gs[_s++]=Sl,Sl=t,El=e}function P0(t,e,n){Tn[An++]=hi,Tn[An++]=pi,Tn[An++]=Lr,Lr=t;var i=hi;t=pi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,hi=1<<32-jn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Xd(t){t.return!==null&&(pr(t,1),P0(t,1,0))}function jd(t){for(;t===Sl;)Sl=gs[--_s],gs[_s]=null,El=gs[--_s],gs[_s]=null;for(;t===Lr;)Lr=Tn[--An],Tn[An]=null,pi=Tn[--An],Tn[An]=null,hi=Tn[--An],Tn[An]=null}var xn=null,vn=null,ut=!1,Vn=null;function L0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $u(t){if(ut){var e=vn;if(e){var n=e;if(!_h(t,e)){if(qu(t))throw Error(ee(418));e=Xi(n.nextSibling);var i=xn;e&&_h(t,e)?L0(i,n):(t.flags=t.flags&-4097|2,ut=!1,xn=t)}}else{if(qu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ut=!1,xn=t}}}function vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function vo(t){if(t!==xn)return!1;if(!ut)return vh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=vn)){if(qu(t))throw D0(),Error(ee(418));for(;e;)L0(t,e),e=Xi(e.nextSibling)}if(vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?Xi(t.stateNode.nextSibling):null;return!0}function D0(){for(var t=vn;t;)t=Xi(t.nextSibling)}function Ds(){vn=xn=null,ut=!1}function Yd(t){Vn===null?Vn=[t]:Vn.push(t)}var hx=Ti.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xh(t){var e=t._init;return e(t._payload)}function I0(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,_,y){return g===null||g.tag!==6?(g=kc(_,u.mode,y),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,y){var C=_.type;return C===us?d(u,g,_.props.children,y,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ii&&xh(C)===g.type)?(y=r(g,_.props),y.ref=ta(u,g,_),y.return=u,y):(y=cl(_.type,_.key,_.props,null,u.mode,y),y.ref=ta(u,g,_),y.return=u,y)}function c(u,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Hc(_,u.mode,y),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function d(u,g,_,y,C){return g===null||g.tag!==7?(g=Tr(_,u.mode,y,C),g.return=u,g):(g=r(g,_),g.return=u,g)}function f(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=kc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return _=cl(g.type,g.key,g.props,null,u.mode,_),_.ref=ta(u,null,g),_.return=u,_;case cs:return g=Hc(g,u.mode,_),g.return=u,g;case Ii:var y=g._init;return f(u,y(g._payload),_)}if(ma(g)||Ks(g))return g=Tr(g,u.mode,_,null),g.return=u,g;xo(u,g)}return null}function h(u,g,_,y){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:o(u,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:return _.key===C?l(u,g,_,y):null;case cs:return _.key===C?c(u,g,_,y):null;case Ii:return C=_._init,h(u,g,C(_._payload),y)}if(ma(_)||Ks(_))return C!==null?null:d(u,g,_,y,null);xo(u,_)}return null}function p(u,g,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,o(g,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oo:return u=u.get(y.key===null?_:y.key)||null,l(g,u,y,C);case cs:return u=u.get(y.key===null?_:y.key)||null,c(g,u,y,C);case Ii:var w=y._init;return p(u,g,_,w(y._payload),C)}if(ma(y)||Ks(y))return u=u.get(_)||null,d(g,u,y,C,null);xo(g,y)}return null}function x(u,g,_,y){for(var C=null,w=null,A=g,b=g=0,M=null;A!==null&&b<_.length;b++){A.index>b?(M=A,A=null):M=A.sibling;var S=h(u,A,_[b],y);if(S===null){A===null&&(A=M);break}t&&A&&S.alternate===null&&e(u,A),g=s(S,g,b),w===null?C=S:w.sibling=S,w=S,A=M}if(b===_.length)return n(u,A),ut&&pr(u,b),C;if(A===null){for(;b<_.length;b++)A=f(u,_[b],y),A!==null&&(g=s(A,g,b),w===null?C=A:w.sibling=A,w=A);return ut&&pr(u,b),C}for(A=i(u,A);b<_.length;b++)M=p(A,u,b,_[b],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?b:M.key),g=s(M,g,b),w===null?C=M:w.sibling=M,w=M);return t&&A.forEach(function(N){return e(u,N)}),ut&&pr(u,b),C}function v(u,g,_,y){var C=Ks(_);if(typeof C!="function")throw Error(ee(150));if(_=C.call(_),_==null)throw Error(ee(151));for(var w=C=null,A=g,b=g=0,M=null,S=_.next();A!==null&&!S.done;b++,S=_.next()){A.index>b?(M=A,A=null):M=A.sibling;var N=h(u,A,S.value,y);if(N===null){A===null&&(A=M);break}t&&A&&N.alternate===null&&e(u,A),g=s(N,g,b),w===null?C=N:w.sibling=N,w=N,A=M}if(S.done)return n(u,A),ut&&pr(u,b),C;if(A===null){for(;!S.done;b++,S=_.next())S=f(u,S.value,y),S!==null&&(g=s(S,g,b),w===null?C=S:w.sibling=S,w=S);return ut&&pr(u,b),C}for(A=i(u,A);!S.done;b++,S=_.next())S=p(A,u,b,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),g=s(S,g,b),w===null?C=S:w.sibling=S,w=S);return t&&A.forEach(function(B){return e(u,B)}),ut&&pr(u,b),C}function m(u,g,_,y){if(typeof _=="object"&&_!==null&&_.type===us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:e:{for(var C=_.key,w=g;w!==null;){if(w.key===C){if(C=_.type,C===us){if(w.tag===7){n(u,w.sibling),g=r(w,_.props.children),g.return=u,u=g;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ii&&xh(C)===w.type){n(u,w.sibling),g=r(w,_.props),g.ref=ta(u,w,_),g.return=u,u=g;break e}n(u,w);break}else e(u,w);w=w.sibling}_.type===us?(g=Tr(_.props.children,u.mode,y,_.key),g.return=u,u=g):(y=cl(_.type,_.key,_.props,null,u.mode,y),y.ref=ta(u,g,_),y.return=u,u=y)}return a(u);case cs:e:{for(w=_.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Hc(_,u.mode,y),g.return=u,u=g}return a(u);case Ii:return w=_._init,m(u,g,w(_._payload),y)}if(ma(_))return x(u,g,_,y);if(Ks(_))return v(u,g,_,y);xo(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=kc(_,u.mode,y),g.return=u,u=g),a(u)):n(u,g)}return m}var Is=I0(!0),U0=I0(!1),wl=ar(null),Tl=null,vs=null,qd=null;function $d(){qd=vs=Tl=null}function Kd(t){var e=wl.current;ot(wl),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Tl=t,qd=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(qd!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Tl===null)throw Error(ee(308));vs=t,Tl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Sr=null;function Zd(t){Sr===null?Sr=[t]:Sr.push(t)}function N0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Zd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function Qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Zd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Od(t,n)}}function yh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,v=o;switch(h=e,p=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=gt({},f,h);break e;case 2:Ui=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=f}}function Mh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var no={},ni=ar(no),Ha=ar(no),Ga=ar(no);function Er(t){if(t===no)throw Error(ee(174));return t}function Jd(t,e){switch(it(Ga,e),it(Ha,t),it(ni,no),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}ot(ni),it(ni,e)}function Us(){ot(ni),ot(Ha),ot(Ga)}function O0(t){Er(Ga.current);var e=Er(ni.current),n=Pu(e,t.type);e!==n&&(it(Ha,t),it(ni,n))}function ef(t){Ha.current===t&&(ot(ni),ot(Ha))}var pt=ar(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function tf(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var rl=Ti.ReactCurrentDispatcher,Nc=Ti.ReactCurrentBatchConfig,Dr=0,mt=null,At=null,Nt=null,Cl=!1,Ea=!1,Va=0,px=0;function Gt(){throw Error(ee(321))}function nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function rf(t,e,n,i,r,s){if(Dr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?vx:xx,t=n(i,r),Ea){s=0;do{if(Ea=!1,Va=0,25<=s)throw Error(ee(301));s+=1,Nt=At=null,e.updateQueue=null,rl.current=yx,t=n(i,r)}while(Ea)}if(rl.current=bl,e=At!==null&&At.next!==null,Dr=0,Nt=At=mt=null,Cl=!1,e)throw Error(ee(300));return t}function sf(){var t=Va!==0;return Va=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Nn(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Nt===null?mt.memoizedState:Nt.next;if(e!==null)Nt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Wa(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,mt.lanes|=d,Ir|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,qn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);qn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function z0(){}function B0(t,e){var n=mt,i=Nn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,af(G0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Xa(9,H0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ee(349));Dr&30||k0(n,e,r)}return r}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H0(t,e,n,i){e.value=n,e.getSnapshot=i,V0(e)&&W0(t)}function G0(t,e,n){return n(function(){V0(e)&&W0(t)})}function V0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function W0(t){var e=Mi(t,1);e!==null&&Yn(e,t,1,-1)}function Sh(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=_x.bind(null,mt,t),[e.memoizedState,t]}function Xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function X0(){return Nn().memoizedState}function sl(t,e,n,i){var r=Zn();mt.flags|=t,r.memoizedState=Xa(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&nf(i,a.deps)){r.memoizedState=Xa(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Xa(1|e,n,s,i)}function Eh(t,e){return sl(8390656,8,t,e)}function af(t,e){return Zl(2048,8,t,e)}function j0(t,e){return Zl(4,2,t,e)}function Y0(t,e){return Zl(4,4,t,e)}function q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $0(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,q0.bind(null,e,t),n)}function of(){}function K0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Z0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Q0(t,e,n){return Dr&21?(qn(n,e)||(n=i0(),mt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function mx(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{Ke=n,Nc.transition=i}}function J0(){return Nn().memoizedState}function gx(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},eg(t))tg(e,n);else if(n=N0(t,e,n,i),n!==null){var r=rn();Yn(n,t,i,r),ng(n,e,i)}}function _x(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(eg(t))tg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,qn(o,a)){var l=e.interleaved;l===null?(r.next=r,Zd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=N0(t,e,r,i),n!==null&&(r=rn(),Yn(n,t,i,r),ng(n,e,i))}}function eg(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function tg(t,e){Ea=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ng(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Od(t,n)}}var bl={readContext:Un,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},vx={readContext:Un,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Eh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=gx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Sh,useDebugValue:of,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Sh(!1),e=t[0];return t=mx.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Zn();if(ut){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ft===null)throw Error(ee(349));Dr&30||k0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Eh(G0.bind(null,i,s,t),[t]),i.flags|=2048,Xa(9,H0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ft.identifierPrefix;if(ut){var n=pi,i=hi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xx={readContext:Un,useCallback:K0,useContext:Un,useEffect:af,useImperativeHandle:$0,useInsertionEffect:j0,useLayoutEffect:Y0,useMemo:Z0,useReducer:Fc,useRef:X0,useState:function(){return Fc(Wa)},useDebugValue:of,useDeferredValue:function(t){var e=Nn();return Q0(e,At.memoizedState,t)},useTransition:function(){var t=Fc(Wa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:B0,useId:J0,unstable_isNewReconciler:!1},yx={readContext:Un,useCallback:K0,useContext:Un,useEffect:af,useImperativeHandle:$0,useInsertionEffect:j0,useLayoutEffect:Y0,useMemo:Z0,useReducer:Oc,useRef:X0,useState:function(){return Oc(Wa)},useDebugValue:of,useDeferredValue:function(t){var e=Nn();return At===null?e.memoizedState=t:Q0(e,At.memoizedState,t)},useTransition:function(){var t=Oc(Wa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:z0,useSyncExternalStore:B0,useId:J0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=qi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Yn(e,t,r,i),il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=qi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Yn(e,t,r,i),il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=qi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Yn(e,t,i,n),il(e,t,i))}};function wh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,i)||!Oa(r,s):!0}function ig(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=un(e)?Pr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Th(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=un(e)?Pr:qt.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=q_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function rg(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,cd=i),Ju(t,e)},n}function sg(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Mx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function Rh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ch(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Sx=Ti.ReactCurrentOwner,ln=!1;function en(t,e,n,i){e.child=t===null?U0(e,null,n,i):Is(e,t.child,n,i)}function bh(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=rf(t,e,n,i,s,r),n=sf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ut&&n&&Xd(e),e.flags|=1,en(t,e,i,r),e.child)}function Ph(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ag(t,e,s,i,r)):(t=cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(a,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function ag(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oa(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Si(t,e,r)}return ed(t,e,n,i,r)}function og(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ys,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ys,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ys,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ys,gn),gn|=i;return en(t,e,r,n),e.child}function lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,i,r){var s=un(n)?Pr:qt.current;return s=Ls(e,s),Rs(e,r),n=rf(t,e,n,i,s,r),i=sf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ut&&i&&Xd(e),e.flags|=1,en(t,e,n,r),e.child)}function Lh(t,e,n,i,r){if(un(n)){var s=!0;Ml(e)}else s=!1;if(Rs(e,r),e.stateNode===null)al(t,e),ig(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=un(n)?Pr:qt.current,c=Ls(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Th(e,a,i,c),Ui=!1;var h=e.memoizedState;a.state=h,Al(e,i,a,r),l=e.memoizedState,o!==i||h!==l||cn.current||Ui?(typeof d=="function"&&(Zu(e,n,d,i),l=e.memoizedState),(o=Ui||wh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,F0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Hn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=un(n)?Pr:qt.current,l=Ls(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Th(e,a,i,l),Ui=!1,h=e.memoizedState,a.state=h,Al(e,i,a,r);var x=e.memoizedState;o!==f||h!==x||cn.current||Ui?(typeof p=="function"&&(Zu(e,n,p,i),x=e.memoizedState),(c=Ui||wh(e,n,c,i,h,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return td(t,e,n,i,s,r)}function td(t,e,n,i,r,s){lg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&gh(e,n,!1),Si(t,e,s);i=e.stateNode,Sx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&gh(e,n,!0),e.child}function cg(t){var e=t.stateNode;e.pendingContext?mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mh(t,e.context,!1),Jd(t,e.containerInfo)}function Dh(t,e,n,i,r){return Ds(),Yd(r),e.flags|=256,en(t,e,n,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function ug(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(pt,r&1),t===null)return $u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tc(a,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=nd,t):lf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ex(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$i(o,s):(s=Tr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?id(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=nd,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lf(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,i){return i!==null&&Yd(i),Is(e,t.child,null,n),t=lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ex(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(ee(422))),yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tc({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,a),e.child.memoizedState=id(a),e.memoizedState=nd,s);if(!(e.mode&1))return yo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=zc(s,i,void 0),yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,ln||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),Yn(i,t,r,-1))}return pf(),i=zc(Error(ee(421))),yo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Fx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Xi(r.nextSibling),xn=e,ut=!0,Vn=null,t!==null&&(Tn[An++]=hi,Tn[An++]=pi,Tn[An++]=Lr,hi=t.id,pi=t.overflow,Lr=e),e=lf(e,i.children),e.flags|=4096,e)}function Ih(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ku(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ih(t,n,e);else if(t.tag===19)Ih(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wx(t,e,n){switch(e.tag){case 3:cg(e),Ds();break;case 5:O0(e);break;case 1:un(e.type)&&Ml(e);break;case 4:Jd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?ug(t,e,n):(it(pt,pt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);it(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,og(t,e,n)}return Si(t,e,n)}var fg,rd,hg,pg;fg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};hg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ni.current);var s=null;switch(n){case"input":r=Au(t,r),i=Au(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Lu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pg=function(t,e,n,i){n!==i&&(e.flags|=4)};function na(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Tx(t,e,n){var i=e.pendingProps;switch(jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&yl(),Vt(e),null;case 3:return i=e.stateNode,Us(),ot(cn),ot(qt),tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(fd(Vn),Vn=null))),rd(t,e),Vt(e),null;case 5:ef(e);var r=Er(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)hg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Vt(e),null}if(t=Er(ni.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)rt(_a[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Gf(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Wf(i,s),rt("invalid",i)}Lu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&_o(i.textContent,o,t),r=["children",""+o]):Pa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":lo(i),Vf(i,s,!0);break;case"textarea":lo(i),Xf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Jn]=e,t[ka]=i,fg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Du(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)rt(_a[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Gf(t,i),r=Au(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Wf(t,i),r=bu(t,i),rt("invalid",t);break;default:r=i}Lu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Xm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&La(t,l):typeof l=="number"&&La(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Ld(t,s,l,a))}switch(n){case"input":lo(t),Vf(t,i,!1);break;case"textarea":lo(t),Xf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)pg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Er(Ga.current),Er(ni.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:_o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Vt(e),null;case 13:if(ot(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&vn!==null&&e.mode&1&&!(e.flags&128))D0(),Ds(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Jn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Vn!==null&&(fd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):pf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Us(),rd(t,e),t===null&&za(e.stateNode.containerInfo),Vt(e),null;case 10:return Kd(e.type._context),Vt(e),null;case 17:return un(e.type)&&yl(),Vt(e),null;case 19:if(ot(pt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)na(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,na(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Fs&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ut)return Vt(e),null}else 2*St()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,it(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return hf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Ax(t,e){switch(jd(e),e.tag){case 1:return un(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),ot(cn),ot(qt),tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ef(e),null;case 13:if(ot(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(pt),null;case 4:return Us(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Mo=!1,jt=!1,Rx=typeof WeakSet=="function"?WeakSet:Set,ue=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function sd(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Uh=!1;function Cx(t,e){if(Gu=gl,t=x0(),Wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},gl=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){e=ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,m=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Hn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return x=Uh,Uh=!1,x}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sd(e,n,s)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mg(t){var e=t.alternate;e!==null&&(t.alternate=null,mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[ka],delete e[ju],delete e[ux],delete e[dx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gg(t){return t.tag===5||t.tag===3||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Ot=null,Gn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)_g(t,e,n),n=n.sibling}function _g(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:jt||xs(n,e);case 6:var i=Ot,r=Gn;Ot=null,Ri(t,e,n),Ot=i,Gn=r,Ot!==null&&(Gn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Gn?(t=Ot,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),Na(t)):Dc(Ot,n.stateNode));break;case 4:i=Ot,r=Gn,Ot=n.stateNode.containerInfo,Gn=!0,Ri(t,e,n),Ot=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&sd(n,e,a),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!jt&&(xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ri(t,e,n),jt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Fh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rx),e.forEach(function(i){var r=Ox.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ot=o.stateNode,Gn=!1;break e;case 3:Ot=o.stateNode.containerInfo,Gn=!0;break e;case 4:Ot=o.stateNode.containerInfo,Gn=!0;break e}o=o.return}if(Ot===null)throw Error(ee(160));_g(s,a,r),Ot=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vg(e,t),e=e.sibling}function vg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Kn(t),i&4){try{wa(3,t,t.return),Jl(3,t)}catch(v){xt(t,t.return,v)}try{wa(5,t,t.return)}catch(v){xt(t,t.return,v)}}break;case 1:On(e,t),Kn(t),i&512&&n!==null&&xs(n,n.return);break;case 5:if(On(e,t),Kn(t),i&512&&n!==null&&xs(n,n.return),t.flags&32){var r=t.stateNode;try{La(r,"")}catch(v){xt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),Du(o,a);var c=Du(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Xm(r,f):d==="dangerouslySetInnerHTML"?Vm(r,f):d==="children"?La(r,f):Ld(r,d,f,c)}switch(o){case"input":Ru(r,s);break;case"textarea":Hm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Es(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(v){xt(t,t.return,v)}}break;case 6:if(On(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){xt(t,t.return,v)}}break;case 3:if(On(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(v){xt(t,t.return,v)}break;case 4:On(e,t),Kn(t);break;case 13:On(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(df=St())),i&4&&Fh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,On(e,t),jt=c):On(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ue=t,d=t.child;d!==null;){for(f=ue=d;ue!==null;){switch(h=ue,p=h.child,h.tag){case 0:case 11:case 14:case 15:wa(4,h,h.return);break;case 1:xs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){xt(i,n,v)}}break;case 5:xs(h,h.return);break;case 22:if(h.memoizedState!==null){zh(f);continue}}p!==null?(p.return=h,ue=p):zh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Wm("display",a))}catch(v){xt(t,t.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){xt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Kn(t),i&4&&Fh(t);break;case 21:break;default:On(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(La(r,""),i.flags&=-33);var s=Nh(t);ld(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Nh(t);od(t,o,a);break;default:throw Error(ee(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bx(t,e,n){ue=t,xg(t)}function xg(t,e,n){for(var i=(t.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=Mo;var c=jt;if(Mo=a,(jt=l)&&!c)for(ue=r;ue!==null;)a=ue,l=a.child,a.tag===22&&a.memoizedState!==null?Bh(r):l!==null?(l.return=a,ue=l):Bh(r);for(;s!==null;)ue=s,xg(s),s=s.sibling;ue=r,Mo=o,jt=c}Oh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ue=s):Oh(t)}}function Oh(t){for(;ue!==null;){var e=ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}jt||e.flags&512&&ad(e)}catch(h){xt(e,e.return,h)}}if(e===t){ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function zh(t){for(;ue!==null;){var e=ue;if(e===t){ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ue=n;break}ue=e.return}}function Bh(t){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{ad(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){ue=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ue=o;break}ue=e.return}}var Px=Math.ceil,Pl=Ti.ReactCurrentDispatcher,cf=Ti.ReactCurrentOwner,Dn=Ti.ReactCurrentBatchConfig,qe=0,Ft=null,Tt=null,Bt=0,gn=0,ys=ar(0),Rt=0,ja=null,Ir=0,ec=0,uf=0,Ta=null,on=null,df=0,Fs=1/0,di=null,Ll=!1,cd=null,Yi=null,So=!1,zi=null,Dl=0,Aa=0,ud=null,ol=-1,ll=0;function rn(){return qe&6?St():ol!==-1?ol:ol=St()}function qi(t){return t.mode&1?qe&2&&Bt!==0?Bt&-Bt:hx.transition!==null?(ll===0&&(ll=i0()),ll):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function Yn(t,e,n,i){if(50<Aa)throw Aa=0,ud=null,Error(ee(185));Ja(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(ec|=n),Rt===4&&Fi(t,Bt)),dn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Fs=St()+500,Kl&&or()))}function dn(t,e){var n=t.callbackNode;hv(t,e);var i=ml(t,t===Ft?Bt:0);if(i===0)n!==null&&qf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qf(n),e===1)t.tag===0?fx(kh.bind(null,t)):b0(kh.bind(null,t)),lx(function(){!(qe&6)&&or()}),n=null;else{switch(r0(i)){case 1:n=Fd;break;case 4:n=t0;break;case 16:n=pl;break;case 536870912:n=n0;break;default:n=pl}n=Rg(n,yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yg(t,e){if(ol=-1,ll=0,qe&6)throw Error(ee(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var i=ml(t,t===Ft?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=qe;qe|=2;var s=Sg();(Ft!==t||Bt!==e)&&(di=null,Fs=St()+500,wr(t,e));do try{Ix();break}catch(o){Mg(t,o)}while(!0);$d(),Pl.current=s,qe=r,Tt!==null?e=0:(Ft=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=Ou(t),r!==0&&(i=r,e=dd(t,r))),e===1)throw n=ja,wr(t,0),Fi(t,i),dn(t,St()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Lx(r)&&(e=Il(t,i),e===2&&(s=Ou(t),s!==0&&(i=s,e=dd(t,s))),e===1))throw n=ja,wr(t,0),Fi(t,i),dn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:mr(t,on,di);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=df+500-St(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xu(mr.bind(null,t,on,di),e);break}mr(t,on,di);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Px(i/1960))-i,10<i){t.timeoutHandle=Xu(mr.bind(null,t,on,di),i);break}mr(t,on,di);break;case 5:mr(t,on,di);break;default:throw Error(ee(329))}}}return dn(t,St()),t.callbackNode===n?yg.bind(null,t):null}function dd(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=on,on=n,e!==null&&fd(e)),t}function fd(t){on===null?on=t:on.push.apply(on,t)}function Lx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~uf,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function kh(t){if(qe&6)throw Error(ee(327));Cs();var e=ml(t,0);if(!(e&1))return dn(t,St()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Ou(t);i!==0&&(e=i,n=dd(t,i))}if(n===1)throw n=ja,wr(t,0),Fi(t,e),dn(t,St()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,on,di),dn(t,St()),null}function ff(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Fs=St()+500,Kl&&or())}}function Ur(t){zi!==null&&zi.tag===0&&!(qe&6)&&Cs();var e=qe;qe|=1;var n=Dn.transition,i=Ke;try{if(Dn.transition=null,Ke=1,t)return t()}finally{Ke=i,Dn.transition=n,qe=e,!(qe&6)&&or()}}function hf(){gn=ys.current,ot(ys)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ox(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Us(),ot(cn),ot(qt),tf();break;case 5:ef(i);break;case 4:Us();break;case 13:ot(pt);break;case 19:ot(pt);break;case 10:Kd(i.type._context);break;case 22:case 23:hf()}n=n.return}if(Ft=t,Tt=t=$i(t.current,null),Bt=gn=e,Rt=0,ja=null,uf=ec=Ir=0,on=Ta=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Sr=null}return t}function Mg(t,e){do{var n=Tt;try{if($d(),rl.current=bl,Cl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Dr=0,Nt=At=mt=null,Ea=!1,Va=0,cf.current=null,n===null||n.return===null){Rt=1,ja=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Rh(a);if(p!==null){p.flags&=-257,Ch(p,a,o,s,e),p.mode&1&&Ah(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Ah(s,c,e),pf();break e}l=Error(ee(426))}}else if(ut&&o.mode&1){var m=Rh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ch(m,a,o,s,e),Yd(Ns(l,o));break e}}s=l=Ns(l,o),Rt!==4&&(Rt=2),Ta===null?Ta=[s]:Ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=rg(s,l,e);yh(s,u);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Yi===null||!Yi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=sg(s,o,e);yh(s,y);break e}}s=s.return}while(s!==null)}wg(n)}catch(C){e=C,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Sg(){var t=Pl.current;return Pl.current=bl,t===null?bl:t}function pf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(Ir&268435455)&&!(ec&268435455)||Fi(Ft,Bt)}function Il(t,e){var n=qe;qe|=2;var i=Sg();(Ft!==t||Bt!==e)&&(di=null,wr(t,e));do try{Dx();break}catch(r){Mg(t,r)}while(!0);if($d(),qe=n,Pl.current=i,Tt!==null)throw Error(ee(261));return Ft=null,Bt=0,Rt}function Dx(){for(;Tt!==null;)Eg(Tt)}function Ix(){for(;Tt!==null&&!rv();)Eg(Tt)}function Eg(t){var e=Ag(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?wg(t):Tt=e,cf.current=null}function wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ax(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=Tx(n,e,gn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function mr(t,e,n){var i=Ke,r=Dn.transition;try{Dn.transition=null,Ke=1,Ux(t,e,n,i)}finally{Dn.transition=r,Ke=i}return null}function Ux(t,e,n,i){do Cs();while(zi!==null);if(qe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pv(t,s),t===Ft&&(Tt=Ft=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,Rg(pl,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=Ke;Ke=1;var o=qe;qe|=4,cf.current=null,Cx(t,n),vg(n,t),ex(Vu),gl=!!Gu,Vu=Gu=null,t.current=n,bx(n),sv(),qe=o,Ke=a,Dn.transition=s}else t.current=n;if(So&&(So=!1,zi=t,Dl=r),s=t.pendingLanes,s===0&&(Yi=null),lv(n.stateNode),dn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=cd,cd=null,t;return Dl&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===ud?Aa++:(Aa=0,ud=t):Aa=0,or(),null}function Cs(){if(zi!==null){var t=r0(Dl),e=Dn.transition,n=Ke;try{if(Dn.transition=null,Ke=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Dl=0,qe&6)throw Error(ee(331));var r=qe;for(qe|=4,ue=t.current;ue!==null;){var s=ue,a=s.child;if(ue.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ue=c;ue!==null;){var d=ue;switch(d.tag){case 0:case 11:case 15:wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,ue=f;else for(;ue!==null;){d=ue;var h=d.sibling,p=d.return;if(mg(d),d===c){ue=null;break}if(h!==null){h.return=p,ue=h;break}ue=p}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ue=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ue=a;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ue=u;break e}ue=s.return}}var g=t.current;for(ue=g;ue!==null;){a=ue;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ue=_;else e:for(a=g;ue!==null;){if(o=ue,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Jl(9,o)}}catch(C){xt(o,o.return,C)}if(o===a){ue=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ue=y;break e}ue=o.return}}if(qe=r,or(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{Ke=n,Dn.transition=e}}return!1}function Hh(t,e,n){e=Ns(n,e),e=rg(t,e,1),t=ji(t,e,1),e=rn(),t!==null&&(Ja(t,1,e),dn(t,e))}function xt(t,e,n){if(t.tag===3)Hh(t,t,n);else for(;e!==null;){if(e.tag===3){Hh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=Ns(n,t),t=sg(e,t,1),e=ji(e,t,1),t=rn(),e!==null&&(Ja(e,1,t),dn(e,t));break}}e=e.return}}function Nx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Bt&n)===n&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>St()-df?wr(t,0):uf|=n),dn(t,e)}function Tg(t,e){e===0&&(t.mode&1?(e=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):e=1);var n=rn();t=Mi(t,e),t!==null&&(Ja(t,e,n),dn(t,n))}function Fx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tg(t,n)}function Ox(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Tg(t,n)}var Ag;Ag=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,wx(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ut&&e.flags&1048576&&P0(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Ls(e,qt.current);Rs(e,n),r=rf(null,e,i,t,r,n);var s=sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qd(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=td(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&Xd(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Bx(i),t=Hn(i,t),r){case 0:e=ed(null,e,i,t,n);break e;case 1:e=Lh(null,e,i,t,n);break e;case 11:e=bh(null,e,i,t,n);break e;case 14:e=Ph(null,e,i,Hn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Lh(t,e,i,r,n);case 3:e:{if(cg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,F0(t,e),Al(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(ee(423)),e),e=Dh(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(ee(424)),e),e=Dh(t,e,i,n,r);break e}else for(vn=Xi(e.stateNode.containerInfo.firstChild),xn=e,ut=!0,Vn=null,n=U0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=Si(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return O0(e),t===null&&$u(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Wu(i,r)?a=null:s!==null&&Wu(i,s)&&(e.flags|=32),lg(t,e),en(t,e,a,n),e.child;case 6:return t===null&&$u(e),null;case 13:return ug(t,e,n);case 4:return Jd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),bh(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(wl,i._currentValue),i._currentValue=a,s!==null)if(qn(s.value,a)){if(s.children===r.children&&!cn.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ku(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ku(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Un(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Ph(t,e,i,r,n);case 15:return ag(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),al(t,e),e.tag=1,un(i)?(t=!0,Ml(e)):t=!1,Rs(e,n),ig(e,i,r),Qu(e,i,r,n),td(null,e,i,!0,t,n);case 19:return dg(t,e,n);case 22:return og(t,e,n)}throw Error(ee(156,e.tag))};function Rg(t,e){return e0(t,e)}function zx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new zx(t,e,n,i)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bx(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===Ud)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")mf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case us:return Tr(n.children,r,s,e);case Dd:a=8,r|=8;break;case Su:return t=Ln(12,n,e,r|2),t.elementType=Su,t.lanes=s,t;case Eu:return t=Ln(13,n,e,r),t.elementType=Eu,t.lanes=s,t;case wu:return t=Ln(19,n,e,r),t.elementType=wu,t.lanes=s,t;case Om:return tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:a=10;break e;case Fm:a=9;break e;case Id:a=11;break e;case Ud:a=14;break e;case Ii:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function tc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gf(t,e,n,i,r,s,a,o,l){return t=new kx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qd(s),t}function Hx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cg(t){if(!t)return er;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(un(n))return C0(t,n,e)}return e}function bg(t,e,n,i,r,s,a,o,l){return t=gf(n,i,!0,t,r,s,a,o,l),t.context=Cg(null),n=t.current,i=rn(),r=qi(n),s=gi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Ja(t,r,i),dn(t,i),t}function nc(t,e,n,i){var r=e.current,s=rn(),a=qi(r);return n=Cg(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,a),t!==null&&(Yn(t,r,a,s),il(t,r,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){Gh(t,e),(t=t.alternate)&&Gh(t,e)}function Gx(){return null}var Pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function vf(t){this._internalRoot=t}ic.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));nc(t,e,null,null)};ic.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){nc(null,t,null,null)}),e[yi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&c0(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vh(){}function Vx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ul(a);s.call(c)}}var a=bg(e,i,t,0,null,!1,!1,"",Vh);return t._reactRootContainer=a,t[yi]=a.current,za(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ul(l);o.call(c)}}var l=gf(t,0,!1,null,null,!1,!1,"",Vh);return t._reactRootContainer=l,t[yi]=l.current,za(t.nodeType===8?t.parentNode:t),Ur(function(){nc(e,l,n,i)}),l}function sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ul(a);o.call(l)}}nc(e,a,t,r)}else a=Vx(n,e,t,r,i);return Ul(a)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Od(e,n|1),dn(e,St()),!(qe&6)&&(Fs=St()+500,or()))}break;case 13:Ur(function(){var i=Mi(t,1);if(i!==null){var r=rn();Yn(i,t,1,r)}}),_f(t,1)}};zd=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=rn();Yn(e,t,134217728,n)}_f(t,134217728)}};a0=function(t){if(t.tag===13){var e=qi(t),n=Mi(t,e);if(n!==null){var i=rn();Yn(n,t,e,i)}_f(t,e)}};o0=function(){return Ke};l0=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Uu=function(t,e,n){switch(e){case"input":if(Ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$l(i);if(!r)throw Error(ee(90));Bm(i),Ru(i,r)}}}break;case"textarea":Hm(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};qm=ff;$m=Ur;var Wx={usingClientEntryPoint:!1,Events:[to,ps,$l,jm,Ym,ff]},ia={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xx={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qm(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||Gx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Xl=Eo.inject(Xx),ti=Eo}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(ee(200));return Hx(t,e,null,n)};Mn.createRoot=function(t,e){if(!xf(t))throw Error(ee(299));var n=!1,i="",r=Pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gf(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,za(t.nodeType===8?t.parentNode:t),new vf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Qm(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Ur(t)};Mn.hydrate=function(t,e,n){if(!rc(e))throw Error(ee(200));return sc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=bg(e,null,t,1,n??null,r,!1,s,a),t[yi]=e.current,za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ic(e)};Mn.render=function(t,e,n){if(!rc(e))throw Error(ee(200));return sc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!rc(t))throw Error(ee(40));return t._reactRootContainer?(Ur(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};Mn.unstable_batchedUpdates=ff;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rc(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return sc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function Lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lg)}catch(t){console.error(t)}}Lg(),Lm.exports=Mn;var jx=Lm.exports,Wh=jx;yu.createRoot=Wh.createRoot,yu.hydrateRoot=Wh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yf="160",Yx=0,Xh=1,qx=2,Dg=1,$x=2,ui=3,tr=0,Yt=1,bn=2,Ki=0,Ar=1,at=2,jh=3,Yh=4,Kx=5,vr=100,Zx=101,Qx=102,qh=103,$h=104,Jx=200,ey=201,ty=202,ny=203,hd=204,pd=205,iy=206,ry=207,sy=208,ay=209,oy=210,ly=211,cy=212,uy=213,dy=214,fy=0,hy=1,py=2,Nl=3,my=4,gy=5,_y=6,vy=7,Ig=0,xy=1,yy=2,Zi=0,My=1,Sy=2,Ey=3,Ug=4,wy=5,Ty=6,Ng=300,Os=301,zs=302,md=303,gd=304,ac=306,_d=1e3,Wn=1001,vd=1002,tn=1003,Kh=1004,Gc=1005,Rn=1006,Ay=1007,Ya=1008,Qi=1009,Ry=1010,Cy=1011,Mf=1012,Fg=1013,Bi=1014,ki=1015,qa=1016,Og=1017,zg=1018,Rr=1020,by=1021,Xn=1023,Py=1024,Ly=1025,Cr=1026,Bs=1027,Dy=1028,Bg=1029,Iy=1030,kg=1031,Hg=1033,Vc=33776,Wc=33777,Xc=33778,jc=33779,Zh=35840,Qh=35841,Jh=35842,ep=35843,Gg=36196,tp=37492,np=37496,ip=37808,rp=37809,sp=37810,ap=37811,op=37812,lp=37813,cp=37814,up=37815,dp=37816,fp=37817,hp=37818,pp=37819,mp=37820,gp=37821,Yc=36492,_p=36494,vp=36495,Uy=36283,xp=36284,yp=36285,Mp=36286,Vg=3e3,br=3001,Ny=3200,Fy=3201,Wg=0,Oy=1,Pn="",zt="srgb",Ei="srgb-linear",Sf="display-p3",oc="display-p3-linear",Fl="linear",st="srgb",Ol="rec709",zl="p3",Gr=7680,Sp=519,zy=512,By=513,ky=514,Xg=515,Hy=516,Gy=517,Vy=518,Wy=519,xd=35044,Ep="300 es",yd=1035,mi=2e3,Bl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wp=1234567;const Ra=Math.PI/180,$a=180/Math.PI;function _i(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function Ef(t,e){return(t%e+e)%e}function Xy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function jy(t,e,n){return t!==e?(n-t)/(e-t):0}function Ca(t,e,n){return(1-n)*t+n*e}function Yy(t,e,n,i){return Ca(t,e,1-Math.exp(-n*i))}function qy(t,e=1){return e-Math.abs(Ef(t,e*2)-e)}function $y(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Ky(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Zy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Qy(t,e){return t+Math.random()*(e-t)}function Jy(t){return t*(.5-Math.random())}function eM(t){t!==void 0&&(wp=t);let e=wp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tM(t){return t*Ra}function nM(t){return t*$a}function Md(t){return(t&t-1)===0&&t!==0}function iM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function kl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*x,l*p,o*c);break;case"YXY":t.set(l*p,o*d,l*x,o*c);break;case"ZYZ":t.set(l*x,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const sM={DEG2RAD:Ra,RAD2DEG:$a,generateUUID:_i,clamp:nn,euclideanModulo:Ef,mapLinear:Xy,inverseLerp:jy,lerp:Ca,damp:Yy,pingpong:qy,smoothstep:$y,smootherstep:Ky,randInt:Zy,randFloat:Qy,randFloatSpread:Jy,seededRandom:eM,degToRad:tM,radToDeg:nM,isPowerOfTwo:Md,ceilPowerOfTwo:iM,floorPowerOfTwo:kl,setQuaternionFromProperEuler:rM,normalize:Qe,denormalize:ei};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],x=i[8],v=r[0],m=r[3],u=r[6],g=r[1],_=r[4],y=r[7],C=r[2],w=r[5],A=r[8];return s[0]=a*v+o*g+l*C,s[3]=a*m+o*_+l*w,s[6]=a*u+o*y+l*A,s[1]=c*v+d*g+f*C,s[4]=c*m+d*_+f*w,s[7]=c*u+d*y+f*A,s[2]=h*v+p*g+x*C,s[5]=h*m+p*_+x*w,s[8]=h*u+p*y+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,p=c*s-a*l,x=n*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(d*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(qc.makeScale(e,n)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new Ve;function jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aM(){const t=Hl("canvas");return t.style.display="block",t}const Tp={};function ba(t){t in Tp||(Tp[t]=!0,console.warn(t))}const Ap=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[Ei]:{transfer:Fl,primaries:Ol,toReference:t=>t,fromReference:t=>t},[zt]:{transfer:st,primaries:Ol,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[oc]:{transfer:Fl,primaries:zl,toReference:t=>t.applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Ap)},[Sf]:{transfer:st,primaries:zl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Ap).convertLinearToSRGB()}},oM=new Set([Ei,oc]),Je={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!oM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===Pn?Fl:wo[t].transfer}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class Yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Hl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lM=0;class qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kc(r[a].image)):s.push(Kc(r[a]))}else s=Kc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cM=0;class fn extends Xs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Wn,r=Wn,s=Rn,a=Ya,o=Xn,l=Qi,c=fn.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=_i(),this.name="",this.source=new qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===br?zt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?br:Vg}set encoding(e){ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?zt:Pn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ng;fn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],x=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(u+1)/2,w=(d+h)/4,A=(f+v)/4,b=(x+m)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(f-v)/g,this.z=(h-d)/g,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends Xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?zt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends uM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $g extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dM extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=v;return}if(f!==v||l!==h||c!==p||d!==x){let m=1-o;const u=l*h+c*p+d*x+f*v,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,u*g);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const y=o*g;if(l=l*m+h*y,c=c*m+p*y,d=d*m+x*y,f=f*m+v*y,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+d*f+l*p-c*h,e[n+1]=l*x+d*h+c*f-o*p,e[n+2]=c*x+d*p+o*h-l*f,e[n+3]=d*x-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f-h*p*x;break;case"YXZ":this._x=h*d*f+c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f+h*p*x;break;case"ZXY":this._x=h*d*f-c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f-h*p*x;break;case"ZYX":this._x=h*d*f-c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f+h*p*x;break;case"YZX":this._x=h*d*f+c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f-h*p*x;break;case"XZY":this._x=h*d*f-c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new D,Cp=new Fr;class Br{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ao.subVectors(this.max,ra),Wr.subVectors(e.a,ra),Xr.subVectors(e.b,ra),jr.subVectors(e.c,ra),Ci.subVectors(Xr,Wr),bi.subVectors(jr,Xr),ur.subVectors(Wr,jr);let n=[0,-Ci.z,Ci.y,0,-bi.z,bi.y,0,-ur.z,ur.y,Ci.z,0,-Ci.x,bi.z,0,-bi.x,ur.z,0,-ur.x,-Ci.y,Ci.x,0,-bi.y,bi.x,0,-ur.y,ur.x,0];return!Qc(n,Wr,Xr,jr,Ao)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,Wr,Xr,jr,Ao))?!1:(Ro.crossVectors(Ci,bi),n=[Ro.x,Ro.y,Ro.z],Qc(n,Wr,Xr,jr,Ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,To=new Br,Wr=new D,Xr=new D,jr=new D,Ci=new D,bi=new D,ur=new D,ra=new D,Ao=new D,Ro=new D,dr=new D;function Qc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),d=i.dot(dr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const fM=new Br,sa=new D,Jc=new D;class js{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):fM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Jc)),this.expandByPoint(sa.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new D,eu=new D,Co=new D,Pi=new D,tu=new D,bo=new D,nu=new D;class Kg{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){eu.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(eu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Pi.dot(this.direction),l=-Pi.dot(Co),c=Pi.lengthSq(),d=Math.abs(1-a*a);let f,h,p,x;if(d>0)if(f=a*l-o,h=a*o-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const v=1/d;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(eu).addScaledVector(Co,h),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){tu.subVectors(n,e),bo.subVectors(i,e),nu.crossVectors(tu,bo);let a=this.direction.dot(nu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(Pi,bo));if(l<0)return null;const c=o*this.direction.dot(tu.cross(Pi));if(c<0||l+c>a)return null;const d=-o*Pi.dot(nu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,a,o,l,c,d,f,h,p,x,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,p,x,v,m)}set(e,n,i,r,s,a,o,l,c,d,f,h,p,x,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=x,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,p=a*f,x=o*d,v=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,x=c*d,v=c*f;n[0]=h+v*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-x,n[6]=v+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,x=c*d,v=c*f;n[0]=h-v*o,n[4]=-a*f,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*d,n[9]=v-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*f,x=o*d,v=o*f;n[0]=l*d,n[4]=x*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,x=o*l,v=o*c;n[0]=l*d,n[4]=v-h*f,n[8]=x*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+x,n[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,p=a*c,x=o*l,v=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+v,n[5]=a*d,n[9]=p*f-x,n[2]=x*f-p,n[6]=o*d,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hM,e,pM)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Li.crossVectors(i,pn),Li.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Li.crossVectors(i,pn)),Li.normalize(),Po.crossVectors(pn,Li),r[0]=Li.x,r[4]=Po.x,r[8]=pn.x,r[1]=Li.y,r[5]=Po.y,r[9]=pn.y,r[2]=Li.z,r[6]=Po.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],x=i[2],v=i[6],m=i[10],u=i[14],g=i[3],_=i[7],y=i[11],C=i[15],w=r[0],A=r[4],b=r[8],M=r[12],S=r[1],N=r[5],B=r[9],K=r[13],L=r[2],O=r[6],X=r[10],Y=r[14],I=r[3],F=r[7],z=r[11],q=r[15];return s[0]=a*w+o*S+l*L+c*I,s[4]=a*A+o*N+l*O+c*F,s[8]=a*b+o*B+l*X+c*z,s[12]=a*M+o*K+l*Y+c*q,s[1]=d*w+f*S+h*L+p*I,s[5]=d*A+f*N+h*O+p*F,s[9]=d*b+f*B+h*X+p*z,s[13]=d*M+f*K+h*Y+p*q,s[2]=x*w+v*S+m*L+u*I,s[6]=x*A+v*N+m*O+u*F,s[10]=x*b+v*B+m*X+u*z,s[14]=x*M+v*K+m*Y+u*q,s[3]=g*w+_*S+y*L+C*I,s[7]=g*A+_*N+y*O+C*F,s[11]=g*b+_*B+y*X+C*z,s[15]=g*M+_*K+y*Y+C*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],x=e[3],v=e[7],m=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+v*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*d-s*l*d)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],x=e[12],v=e[13],m=e[14],u=e[15],g=f*m*c-v*h*c+v*l*p-o*m*p-f*l*u+o*h*u,_=x*h*c-d*m*c-x*l*p+a*m*p+d*l*u-a*h*u,y=d*v*c-x*f*c+x*o*p-a*v*p-d*o*u+a*f*u,C=x*f*l-d*v*l-x*o*h+a*v*h+d*o*m-a*f*m,w=n*g+i*_+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*u-i*h*u)*A,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*u+i*l*u)*A,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*A,e[4]=_*A,e[5]=(d*m*s-x*h*s+x*r*p-n*m*p-d*r*u+n*h*u)*A,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*u-n*l*u)*A,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*p+n*l*p)*A,e[8]=y*A,e[9]=(x*f*s-d*v*s-x*i*p+n*v*p+d*i*u-n*f*u)*A,e[10]=(a*v*s-x*o*s+x*i*c-n*v*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*p-n*o*p)*A,e[12]=C*A,e[13]=(d*v*r-x*f*r+x*i*h-n*v*h-d*i*m+n*f*m)*A,e[14]=(x*o*r-a*v*r-x*i*l+n*v*l+a*i*m-n*o*m)*A,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,p=s*d,x=s*f,v=a*d,m=a*f,u=o*f,g=l*c,_=l*d,y=l*f,C=i.x,w=i.y,A=i.z;return r[0]=(1-(v+u))*C,r[1]=(p+y)*C,r[2]=(x-_)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+u))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(x+_)*A,r[9]=(m-g)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const a=Yr.set(r[4],r[5],r[6]).length(),o=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/a,f=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=mi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(o===mi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Bl)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=mi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,p=(i+r)*d;let x,v;if(o===mi)x=(a+s)*f,v=-2*f;else if(o===Bl)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new D,Bn=new ct,hM=new D(0,0,0),pM=new D(1,1,1),Li=new D,Po=new D,pn=new D,bp=new ct,Pp=new Fr;class io{constructor(e=0,n=0,i=0,r=io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}io.DEFAULT_ORDER="XYZ";class Zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const Lp=new D,qr=new Fr,oi=new ct,Lo=new D,aa=new D,gM=new D,_M=new Fr,Dp=new D(1,0,0),Ip=new D(0,1,0),Up=new D(0,0,1),vM={type:"added"},xM={type:"removed"};class Ct extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,n=new io,i=new Fr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ve}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,n){return Lp.copy(e).applyQuaternion(this.quaternion),this.position.add(Lp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(aa,Lo,this.up):oi.lookAt(Lo,aa,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(oi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,_M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new D,li=new D,iu=new D,ci=new D,$r=new D,Kr=new D,Np=new D,ru=new D,su=new D,au=new D;let Do=!1;class Cn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),li.subVectors(i,n),iu.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(li),l=kn.dot(iu),c=li.dot(li),d=li.dot(iu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,x=(a*d-o*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,a,o,l){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),li.subVectors(e,n),kn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Do===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Do=!0),Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;$r.subVectors(r,i),Kr.subVectors(s,i),ru.subVectors(e,i);const l=$r.dot(ru),c=Kr.dot(ru);if(l<=0&&c<=0)return n.copy(i);su.subVectors(e,r);const d=$r.dot(su),f=Kr.dot(su);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector($r,a);au.subVectors(e,s);const p=$r.dot(au),x=Kr.dot(au);if(x>=0&&p<=x)return n.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Kr,o);const m=d*x-p*f;if(m<=0&&f-d>=0&&p-x>=0)return Np.subVectors(s,r),o=(f-d)/(f-d+(p-x)),n.copy(r).addScaledVector(Np,o);const u=1/(m+v+h);return a=v*u,o=h*u,n.copy(i).addScaledVector($r,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Io={h:0,s:0,l:0};function ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class de{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Ef(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ou(a,s,e+1/3),this.g=ou(a,s,e),this.b=ou(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=Qg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Je.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){Je.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Io);const i=Ca(Di.h,Io.h,n),r=Ca(Di.s,Io.s,n),s=Ca(Di.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new de;de.NAMES=Qg;let yM=0;class kr extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Ar,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hd&&(i.blendSrc=this.blendSrc),this.blendDst!==pd&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nr extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new D,Uo=new be;class xe{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xd&&(e.usage=this.usage),e}}class Jg extends xe{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e_ extends xe{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bt extends xe{constructor(e,n,i){super(new Float32Array(e),n,i)}}let MM=0;const wn=new ct,lu=new Ct,Zr=new D,mn=new Br,oa=new Br,Ut=new D;class je extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?e_:Jg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(mn.min,oa.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,oa.max),mn.expandByPoint(Ut)):(mn.expandByPoint(oa.min),mn.expandByPoint(oa.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ut.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(e,c),Ut.add(Zr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let S=0;S<o;S++)c[S]=new D,d[S]=new D;const f=new D,h=new D,p=new D,x=new be,v=new be,m=new be,u=new D,g=new D;function _(S,N,B){f.fromArray(r,S*3),h.fromArray(r,N*3),p.fromArray(r,B*3),x.fromArray(a,S*2),v.fromArray(a,N*2),m.fromArray(a,B*2),h.sub(f),p.sub(f),v.sub(x),m.sub(x);const K=1/(v.x*m.y-m.x*v.y);isFinite(K)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(K),g.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(K),c[S].add(u),c[N].add(u),c[B].add(u),d[S].add(g),d[N].add(g),d[B].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,N=y.length;S<N;++S){const B=y[S],K=B.start,L=B.count;for(let O=K,X=K+L;O<X;O+=3)_(i[O+0],i[O+1],i[O+2])}const C=new D,w=new D,A=new D,b=new D;function M(S){A.fromArray(s,S*3),b.copy(A);const N=c[S];C.copy(N),C.sub(A.multiplyScalar(A.dot(N))).normalize(),w.crossVectors(b,N);const K=w.dot(d[S])<0?-1:1;l[S*4]=C.x,l[S*4+1]=C.y,l[S*4+2]=C.z,l[S*4+3]=K}for(let S=0,N=y.length;S<N;++S){const B=y[S],K=B.start,L=B.count;for(let O=K,X=K+L;O<X;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xe(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,d=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let u=0;u<d;u++)h[x++]=c[p++]}return new xe(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new je,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fp=new ct,fr=new Kg,No=new js,Op=new D,Qr=new D,Jr=new D,es=new D,cu=new D,Fo=new D,Oo=new be,zo=new be,Bo=new be,zp=new D,Bp=new D,kp=new D,ko=new D,Ho=new D;class lt extends Ct{constructor(e=new je,n=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(cu.fromBufferAttribute(f,e),a?Fo.addScaledVector(cu,d):Fo.addScaledVector(cu.sub(n),d))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(No.containsPoint(fr.origin)===!1&&(fr.intersectSphere(No,Op)===null||fr.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Fp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Fp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const m=h[x],u=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=_;y<C;y+=3){const w=o.getX(y),A=o.getX(y+1),b=o.getX(y+2);r=Go(this,u,e,i,c,d,f,w,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);r=Go(this,a,e,i,c,d,f,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const m=h[x],u=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=_;y<C;y+=3){const w=y,A=y+1,b=y+2;r=Go(this,u,e,i,c,d,f,w,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){const g=m,_=m+1,y=m+2;r=Go(this,a,e,i,c,d,f,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function SM(t,e,n,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ho);return c<n.near||c>n.far?null:{distance:c,point:Ho.clone(),object:t}}function Go(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Qr),t.getVertexPosition(l,Jr),t.getVertexPosition(c,es);const d=SM(t,e,n,i,Qr,Jr,es,ko);if(d){r&&(Oo.fromBufferAttribute(r,o),zo.fromBufferAttribute(r,l),Bo.fromBufferAttribute(r,c),d.uv=Cn.getInterpolation(ko,Qr,Jr,es,Oo,zo,Bo,new be)),s&&(Oo.fromBufferAttribute(s,o),zo.fromBufferAttribute(s,l),Bo.fromBufferAttribute(s,c),d.uv1=Cn.getInterpolation(ko,Qr,Jr,es,Oo,zo,Bo,new be),d.uv2=d.uv1),a&&(zp.fromBufferAttribute(a,o),Bp.fromBufferAttribute(a,l),kp.fromBufferAttribute(a,c),d.normal=Cn.getInterpolation(ko,Qr,Jr,es,zp,Bp,kp,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Cn.getNormal(Qr,Jr,es,f.normal),d.face=f}return d}class Ys extends je{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function x(v,m,u,g,_,y,C,w,A,b,M){const S=y/A,N=C/b,B=y/2,K=C/2,L=w/2,O=A+1,X=b+1;let Y=0,I=0;const F=new D;for(let z=0;z<X;z++){const q=z*N-K;for(let Z=0;Z<O;Z++){const j=Z*S-B;F[v]=j*g,F[m]=q*_,F[u]=L,c.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[u]=w>0?1:-1,d.push(F.x,F.y,F.z),f.push(Z/A),f.push(1-z/b),Y+=1}}for(let z=0;z<b;z++)for(let q=0;q<A;q++){const Z=h+q+O*z,j=h+q+O*(z+1),$=h+(q+1)+O*(z+1),oe=h+(q+1)+O*z;l.push(Z,j,oe),l.push(j,$,oe),I+=6}o.addGroup(p,I,M),p+=I,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function EM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t_(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const wM={clone:ks,merge:Jt};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n_ extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends n_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ts=-90,ns=1;class RM extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new _n(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new _n(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new _n(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new _n(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new _n(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class i_ extends fn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CM extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?zt:Pn),this.texture=new i_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ys(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Ki});s.uniforms.tEquirect.value=n;const a=new lt(r,s),o=n.minFilter;return n.minFilter===Ya&&(n.minFilter=Rn),new RM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const uu=new D,bM=new D,PM=new Ve;class gr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uu.subVectors(i,n).cross(bM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PM.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new js,Vo=new D;class wf{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],x=r[9],v=r[10],m=r[11],u=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-u).normalize(),i[1].setComponents(l+s,h+c,m+p,y+u).normalize(),i[2].setComponents(l+a,h+d,m+x,y+g).normalize(),i[3].setComponents(l-a,h-d,m-x,y-g).normalize(),i[4].setComponents(l-o,h-f,m-v,y-_).normalize(),n===mi)i[5].setComponents(l+o,h+f,m+v,y+_).normalize();else if(n===Bl)i[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,p=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,f){const h=d.array,p=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let v=0,m=x.length;v<m;v++){const u=x[v];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class Tf extends je{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,p=[],x=[],v=[],m=[];for(let u=0;u<d;u++){const g=u*h-a;for(let _=0;_<c;_++){const y=_*f-s;x.push(y,-g,0),v.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,y=g+c*(u+1),C=g+1+c*(u+1),w=g+1+c*u;p.push(_,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.width,e.height,e.widthSegments,e.heightSegments)}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,US=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,YS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:DM,alphahash_pars_fragment:IM,alphamap_fragment:UM,alphamap_pars_fragment:NM,alphatest_fragment:FM,alphatest_pars_fragment:OM,aomap_fragment:zM,aomap_pars_fragment:BM,batching_pars_vertex:kM,batching_vertex:HM,begin_vertex:GM,beginnormal_vertex:VM,bsdfs:WM,iridescence_fragment:XM,bumpmap_pars_fragment:jM,clipping_planes_fragment:YM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:KM,color_fragment:ZM,color_pars_fragment:QM,color_pars_vertex:JM,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:rS,displacementmap_vertex:sS,emissivemap_fragment:aS,emissivemap_pars_fragment:oS,colorspace_fragment:lS,colorspace_pars_fragment:cS,envmap_fragment:uS,envmap_common_pars_fragment:dS,envmap_pars_fragment:fS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:TS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:_S,fog_pars_fragment:vS,gradientmap_pars_fragment:xS,lightmap_fragment:yS,lightmap_pars_fragment:MS,lights_lambert_fragment:SS,lights_lambert_pars_fragment:ES,lights_pars_begin:wS,lights_toon_fragment:AS,lights_toon_pars_fragment:RS,lights_phong_fragment:CS,lights_phong_pars_fragment:bS,lights_physical_fragment:PS,lights_physical_pars_fragment:LS,lights_fragment_begin:DS,lights_fragment_maps:IS,lights_fragment_end:US,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:zS,map_fragment:BS,map_pars_fragment:kS,map_particle_fragment:HS,map_particle_pars_fragment:GS,metalnessmap_fragment:VS,metalnessmap_pars_fragment:WS,morphcolor_vertex:XS,morphnormal_vertex:jS,morphtarget_pars_vertex:YS,morphtarget_vertex:qS,normal_fragment_begin:$S,normal_fragment_maps:KS,normal_pars_fragment:ZS,normal_pars_vertex:QS,normal_vertex:JS,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:aE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:_E,skinning_pars_vertex:vE,skinning_vertex:xE,skinnormal_vertex:yE,specularmap_fragment:ME,specularmap_pars_fragment:SE,tonemapping_fragment:EE,tonemapping_pars_fragment:wE,transmission_fragment:TE,transmission_pars_fragment:AE,uv_pars_fragment:RE,uv_pars_vertex:CE,uv_vertex:bE,worldpos_vertex:PE,background_vert:LE,background_frag:DE,backgroundCube_vert:IE,backgroundCube_frag:UE,cube_vert:NE,cube_frag:FE,depth_vert:OE,depth_frag:zE,distanceRGBA_vert:BE,distanceRGBA_frag:kE,equirect_vert:HE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:WE,meshbasic_vert:XE,meshbasic_frag:jE,meshlambert_vert:YE,meshlambert_frag:qE,meshmatcap_vert:$E,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:r1,points_vert:s1,points_frag:a1,shadow_vert:o1,shadow_frag:l1,sprite_vert:c1,sprite_frag:u1},re={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new de(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Jt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Jt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new de(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Jt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Jt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Jt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Jt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Jt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Jt([re.lights,re.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Wo={r:0,b:0,g:0};function d1(t,e,n,i,r,s,a){const o=new de(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function x(m,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ac)?(d===void 0&&(d=new lt(new Ys(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:ks(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Je.getTransfer(_.colorSpace)!==st,(f!==_||h!==_.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=_,h=_.version,p=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new lt(new Tf(2,2),new ir({name:"BackgroundMaterial",uniforms:ks(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(Wo,t_(t)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function f1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function f(L,O,X,Y,I){let F=!1;if(a){const z=v(Y,X,O);c!==z&&(c=z,p(c.object)),F=u(L,Y,X,I),F&&g(L,Y,X,I)}else{const z=O.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==z)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=z,F=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,b(L,O,X,Y),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,O,X){const Y=X.wireframe===!0;let I=o[L.id];I===void 0&&(I={},o[L.id]=I);let F=I[O.id];F===void 0&&(F={},I[O.id]=F);let z=F[Y];return z===void 0&&(z=m(h()),F[Y]=z),z}function m(L){const O=[],X=[],Y=[];for(let I=0;I<r;I++)O[I]=0,X[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:Y,object:L,attributes:{},index:null}}function u(L,O,X,Y){const I=c.attributes,F=O.attributes;let z=0;const q=X.getAttributes();for(const Z in q)if(q[Z].location>=0){const $=I[Z];let oe=F[Z];if(oe===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;z++}return c.attributesNum!==z||c.index!==Y}function g(L,O,X,Y){const I={},F=O.attributes;let z=0;const q=X.getAttributes();for(const Z in q)if(q[Z].location>=0){let $=F[Z];$===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),I[Z]=oe,z++}c.attributes=I,c.attributesNum=z,c.index=Y}function _(){const L=c.newAttributes;for(let O=0,X=L.length;O<X;O++)L[O]=0}function y(L){C(L,0)}function C(L,O){const X=c.newAttributes,Y=c.enabledAttributes,I=c.attributeDivisors;X[L]=1,Y[L]===0&&(t.enableVertexAttribArray(L),Y[L]=1),I[L]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),I[L]=O)}function w(){const L=c.newAttributes,O=c.enabledAttributes;for(let X=0,Y=O.length;X<Y;X++)O[X]!==L[X]&&(t.disableVertexAttribArray(X),O[X]=0)}function A(L,O,X,Y,I,F,z){z===!0?t.vertexAttribIPointer(L,O,X,I,F):t.vertexAttribPointer(L,O,X,Y,I,F)}function b(L,O,X,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Y.attributes,F=X.getAttributes(),z=O.defaultAttributeValues;for(const q in F){const Z=F[q];if(Z.location>=0){let j=I[q];if(j===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const $=j.normalized,oe=j.itemSize,fe=n.get(j);if(fe===void 0)continue;const me=fe.buffer,Ie=fe.type,Ne=fe.bytesPerElement,Ae=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||j.gpuType===Fg);if(j.isInterleavedBufferAttribute){const Ye=j.data,k=Ye.stride,$t=j.offset;if(Ye.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)C(Z.location+Me,Ye.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Me=0;Me<Z.locationSize;Me++)y(Z.location+Me);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Me=0;Me<Z.locationSize;Me++)A(Z.location+Me,oe/Z.locationSize,Ie,$,k*Ne,($t+oe/Z.locationSize*Me)*Ne,Ae)}else{if(j.isInstancedBufferAttribute){for(let Ye=0;Ye<Z.locationSize;Ye++)C(Z.location+Ye,j.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ye=0;Ye<Z.locationSize;Ye++)y(Z.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Ye=0;Ye<Z.locationSize;Ye++)A(Z.location+Ye,oe/Z.locationSize,Ie,$,oe*Ne,oe/Z.locationSize*Ye*Ne,Ae)}}else if(z!==void 0){const $=z[q];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(Z.location,$);break;case 3:t.vertexAttrib3fv(Z.location,$);break;case 4:t.vertexAttrib4fv(Z.location,$);break;default:t.vertexAttrib1fv(Z.location,$)}}}}w()}function M(){B();for(const L in o){const O=o[L];for(const X in O){const Y=O[X];for(const I in Y)x(Y[I].object),delete Y[I];delete O[X]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const X in O){const Y=O[X];for(const I in Y)x(Y[I].object),delete Y[I];delete O[X]}delete o[L.id]}function N(L){for(const O in o){const X=o[O];if(X[L.id]===void 0)continue;const Y=X[L.id];for(const I in Y)x(Y[I].object),delete Y[I];delete X[L.id]}}function B(){K(),d=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function h1(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let p,x;if(r)p=t,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{p.multiDrawArraysWEBGL(s,d,0,f,0,h);let x=0;for(let v=0;v<h;v++)x+=f[v];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function p1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=a||e.has("OES_texture_float"),C=_&&y,w=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:w}}function m1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new gr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,_=g*4;let y=u.clippingState||null;l.value=y,y=d(x,h,_,p);for(let C=0;C!==_;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,x){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const u=p+v*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==v;++_,y+=4)a.copy(f[_]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function g1(t){let e=new WeakMap;function n(a,o){return o===md?a.mapping=Os:o===gd&&(a.mapping=zs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===md||o===gd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new CM(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _1 extends n_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ms=4,Hp=[.125,.215,.35,.446,.526,.582],xr=20,du=new _1,Gp=new de;let fu=null,hu=0,pu=0;const _r=(1+Math.sqrt(5))/2,is=1/_r,Vp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_r,is),new D(0,_r,-is),new D(is,0,_r),new D(-is,0,_r),new D(_r,is,0),new D(-_r,is,0)];class Wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,hu,pu),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:qa,format:Xn,colorSpace:Ei,depthBuffer:!1},r=Xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v1(s)),this._blurMaterial=x1(s,e,n)}return r}_compileMaterial(e){const n=new lt(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Gp),d.toneMapping=Zi,d.autoClear=!1;const p=new nr({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),x=new lt(new Ys,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Gp),v=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;Xo(r,g*_,u>2?_:0,_,_),d.setRenderTarget(r),v&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vp[(r-1)%Vp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new lt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),v=s/x,m=isFinite(s)?1+Math.floor(d*v):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const u=[];let g=0;for(let A=0;A<xr;++A){const b=A/v,M=Math.exp(-b*b/2);u.push(M),A===0?g+=M:A<m&&(g+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-Ms?r-_+Ms:0),w=4*(this._cubeSize-y);Xo(n,C,w,3*y,2*y),l.setRenderTarget(n),l.render(f,du)}}function v1(t){const e=[],n=[],i=[];let r=t;const s=t-Ms+1+Hp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ms?l=Hp[a-t+Ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,v=3,m=2,u=1,g=new Float32Array(v*x*p),_=new Float32Array(m*x*p),y=new Float32Array(u*x*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,b=w>2?0:-1,M=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(M,v*x*w),_.set(h,m*x*w);const S=[w,w,w,w,w,w];y.set(S,u*x*w)}const C=new je;C.setAttribute("position",new xe(g,v)),C.setAttribute("uv",new xe(_,m)),C.setAttribute("faceIndex",new xe(y,u)),e.push(C),r>Ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xp(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function x1(t,e,n){const i=new Float32Array(xr),r=new D(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function jp(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Yp(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===md||l===gd,d=l===Os||l===zs;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Wp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Wp(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function M1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function S1(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const v=p[x];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,x=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,y=g.length;_<y;_+=3){const C=g[_+0],w=g[_+1],A=g[_+2];h.push(C,w,w,A,A,C)}}else if(x!==void 0){const g=x.array;v=x.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const C=_+0,w=_+1,A=_+2;h.push(C,w,w,A,A,C)}}else return;const m=new(jg(h)?e_:Jg)(h,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function E1(t,e,n,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,x){t.drawElements(s,x,o,p*l),n.update(x,s,1)}function f(p,x,v){if(v===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,x,o,p*l,v),n.update(x,s,v)}function h(p,x,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<v;u++)this.render(p[u]/l,x[u]);else{m.multiDrawElementsWEBGL(s,x,0,o,p,0,v);let u=0;for(let g=0;g<v;g++)u+=x[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function w1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function T1(t,e){return t[0]-e[0]}function A1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function R1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let m=s.get(d);if(m===void 0||m.count!==v){let O=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let S=d.attributes.position.count*M,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const B=new Float32Array(S*N*4*v),K=new $g(B,S,N,v);K.type=ki,K.needsUpdate=!0;const L=M*4;for(let X=0;X<v;X++){const Y=w[X],I=A[X],F=b[X],z=S*N*4*X;for(let q=0;q<Y.count;q++){const Z=q*L;_===!0&&(a.fromBufferAttribute(Y,q),B[z+Z+0]=a.x,B[z+Z+1]=a.y,B[z+Z+2]=a.z,B[z+Z+3]=0),y===!0&&(a.fromBufferAttribute(I,q),B[z+Z+4]=a.x,B[z+Z+5]=a.y,B[z+Z+6]=a.z,B[z+Z+7]=0),C===!0&&(a.fromBufferAttribute(F,q),B[z+Z+8]=a.x,B[z+Z+9]=a.y,B[z+Z+10]=a.z,B[z+Z+11]=F.itemSize===4?a.w:1)}}m={count:v,texture:K,size:new be(S,N)},s.set(d,m),d.addEventListener("dispose",O)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let v=i[d.id];if(v===void 0||v.length!==x){v=[];for(let y=0;y<x;y++)v[y]=[y,0];i[d.id]=v}for(let y=0;y<x;y++){const C=v[y];C[0]=y,C[1]=h[y]}v.sort(A1);for(let y=0;y<8;y++)y<x&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(T1);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=o[y],w=C[0],A=C[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+y)!==m[w]&&d.setAttribute("morphTarget"+y,m[w]),u&&d.getAttribute("morphNormal"+y)!==u[w]&&d.setAttribute("morphNormal"+y,u[w]),r[y]=A,g+=A):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const _=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function C1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class s_ extends fn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Cr,d!==Cr&&d!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Cr&&(i=Bi),i===void 0&&d===Bs&&(i=Rr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new fn,o_=new s_(1,1);o_.compareFunction=Xg;const l_=new $g,c_=new dM,u_=new i_,qp=[],$p=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Qp=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lc(t,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function I1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Qp.set(i),t.uniformMatrix2fv(this.addr,!1,Qp),Lt(n,i)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Zp.set(i),t.uniformMatrix3fv(this.addr,!1,Zp),Lt(n,i)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Kp.set(i),t.uniformMatrix4fv(this.addr,!1,Kp),Lt(n,i)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function k1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?o_:a_;n.setTexture2D(e||s,r)}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u_,r)}function Y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l_,r)}function q1(t){switch(t){case 5126:return b1;case 35664:return P1;case 35665:return L1;case 35666:return D1;case 35674:return I1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return z1;case 35669:case 35673:return B1;case 5125:return k1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Y1}}function $1(t,e){t.uniform1fv(this.addr,e)}function K1(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function Z1(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function Q1(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ew(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tw(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nw(t,e){t.uniform1iv(this.addr,e)}function iw(t,e){t.uniform2iv(this.addr,e)}function rw(t,e){t.uniform3iv(this.addr,e)}function sw(t,e){t.uniform4iv(this.addr,e)}function aw(t,e){t.uniform1uiv(this.addr,e)}function ow(t,e){t.uniform2uiv(this.addr,e)}function lw(t,e){t.uniform3uiv(this.addr,e)}function cw(t,e){t.uniform4uiv(this.addr,e)}function uw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||a_,s[a])}function dw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||c_,s[a])}function fw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||u_,s[a])}function hw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||l_,s[a])}function pw(t){switch(t){case 5126:return $1;case 35664:return K1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return aw;case 36294:return ow;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return hw}}class mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=q1(n.type)}}class gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pw(n.type)}}class _w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Jp(t,e){t.seq.push(e),t.map[e.id]=e}function vw(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),a=mu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Jp(n,c===void 0?new mw(o,t,e):new gw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new _w(o),Jp(n,f)),n=f}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);vw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xw=37297;let yw=0;function Mw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Sw(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case oc:return[i,"LinearTransferOETF"];case zt:case Sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function tm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Mw(t.getShaderSource(e),a)}else return r}function Ew(t,e){const n=Sw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ww(t,e){let n;switch(e){case My:n="Linear";break;case Sy:n="Reinhard";break;case Ey:n="OptimizedCineon";break;case Ug:n="ACESFilmic";break;case Ty:n="AgX";break;case wy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Tw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function Aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function Rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Cw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ss(t){return t!==""}function nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(t){return t.replace(bw,Lw)}const Pw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lw(t,e){let n=Oe[e];if(n===void 0){const i=Pw.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(n)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(t){return t.replace(Dw,Iw)}function Iw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$x?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Nw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case zs:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ow(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case xy:e="ENVMAP_BLENDING_MIX";break;case yy:e="ENVMAP_BLENDING_ADD";break}return e}function zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Bw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Uw(n),c=Nw(n),d=Fw(n),f=Ow(n),h=zw(n),p=n.isWebGL2?"":Tw(n),x=Aw(n),v=Rw(s),m=r.createProgram();let u,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ss).join(`
`),u.length>0&&(u+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ss).join(`
`),g.length>0&&(g+=`
`)):(u=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),g=[p,sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Zi?ww("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Ew("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Sd(a),a=nm(a,n),a=im(a,n),o=Sd(o),o=nm(o,n),o=im(o,n),a=rm(a),o=rm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+u+a,C=_+g+o,w=em(r,r.VERTEX_SHADER,y),A=em(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(B){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(A).trim();let X=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,A);else{const I=tm(r,w,"vertex"),F=tm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+I+`
`+F)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||O==="")&&(Y=!1);Y&&(B.diagnostics={runnable:X,programLog:K,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:g}})}r.deleteShader(w),r.deleteShader(A),M=new ul(r,m),S=Cw(r,m)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,xw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let kw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gw(e),n.set(e,i)),i}}class Gw{constructor(e){this.id=kw++,this.code=e,this.usedTimes=0}}function Vw(t,e,n,i,r,s,a){const o=new Zg,l=new Hw,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,S,N,B,K){const L=B.fog,O=K.geometry,X=M.isMeshStandardMaterial?B.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||X),I=Y&&Y.mapping===ac?Y.image.height:null,F=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,q=z!==void 0?z.length:0;let Z=0;O.morphAttributes.position!==void 0&&(Z=1),O.morphAttributes.normal!==void 0&&(Z=2),O.morphAttributes.color!==void 0&&(Z=3);let j,$,oe,fe;if(F){const Kt=Qn[F];j=Kt.vertexShader,$=Kt.fragmentShader}else j=M.vertexShader,$=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const me=t.getRenderTarget(),Ie=K.isInstancedMesh===!0,Ne=K.isBatchedMesh===!0,Ae=!!M.map,Ye=!!M.matcap,k=!!Y,$t=!!M.aoMap,Me=!!M.lightMap,Le=!!M.bumpMap,ge=!!M.normalMap,ft=!!M.displacementMap,ze=!!M.emissiveMap,R=!!M.metalnessMap,E=!!M.roughnessMap,G=M.anisotropy>0,te=M.clearcoat>0,J=M.iridescence>0,ne=M.sheen>0,_e=M.transmission>0,le=G&&!!M.anisotropyMap,he=te&&!!M.clearcoatMap,we=te&&!!M.clearcoatNormalMap,Be=te&&!!M.clearcoatRoughnessMap,Q=J&&!!M.iridescenceMap,Ze=J&&!!M.iridescenceThicknessMap,We=ne&&!!M.sheenColorMap,Pe=ne&&!!M.sheenRoughnessMap,ye=!!M.specularMap,pe=!!M.specularColorMap,Fe=!!M.specularIntensityMap,$e=_e&&!!M.transmissionMap,_t=_e&&!!M.thicknessMap,He=!!M.gradientMap,ie=!!M.alphaMap,P=M.alphaTest>0,se=!!M.alphaHash,ae=!!M.extensions,Re=!!O.attributes.uv1,Se=!!O.attributes.uv2,et=!!O.attributes.uv3;let tt=Zi;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:d,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:$,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ei,map:Ae,matcap:Ye,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:I,aoMap:$t,lightMap:Me,bumpMap:Le,normalMap:ge,displacementMap:h&&ft,emissiveMap:ze,normalMapObjectSpace:ge&&M.normalMapType===Oy,normalMapTangentSpace:ge&&M.normalMapType===Wg,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:le,clearcoat:te,clearcoatMap:he,clearcoatNormalMap:we,clearcoatRoughnessMap:Be,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Ze,sheen:ne,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:ye,specularColorMap:pe,specularIntensityMap:Fe,transmission:_e,transmissionMap:$e,thicknessMap:_t,gradientMap:He,opaque:M.transparent===!1&&M.blending===Ar,alphaMap:ie,alphaTest:P,alphaHash:se,combine:M.combine,mapUv:Ae&&v(M.map.channel),aoMapUv:$t&&v(M.aoMap.channel),lightMapUv:Me&&v(M.lightMap.channel),bumpMapUv:Le&&v(M.bumpMap.channel),normalMapUv:ge&&v(M.normalMap.channel),displacementMapUv:ft&&v(M.displacementMap.channel),emissiveMapUv:ze&&v(M.emissiveMap.channel),metalnessMapUv:R&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:le&&v(M.anisotropyMap.channel),clearcoatMapUv:he&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(M.sheenRoughnessMap.channel),specularMapUv:ye&&v(M.specularMap.channel),specularColorMapUv:pe&&v(M.specularColorMap.channel),specularIntensityMapUv:Fe&&v(M.specularIntensityMap.channel),transmissionMapUv:$e&&v(M.transmissionMap.channel),thicknessMapUv:_t&&v(M.thicknessMap.channel),alphaMapUv:ie&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Se,vertexUv3s:et,pointsUvs:K.isPoints===!0&&!!O.attributes.uv&&(Ae||ie),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(g(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const S=x[M.type];let N;if(S){const B=Qn[S];N=wM.clone(B.uniforms)}else N=M.uniforms;return N}function C(M,S){let N;for(let B=0,K=c.length;B<K;B++){const L=c[B];if(L.cacheKey===S){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Bw(t,S,M,s),c.push(N)),N}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:b}}function Ww(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Xw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,x,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function o(f,h,p,x,v,m){const u=a(f,h,p,x,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,x,v,m){const u=a(f,h,p,x,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||Xw),i.length>1&&i.sort(h||am),r.length>1&&r.sort(h||am)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function jw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new om,t.set(i,[a])):r>=s.length?(a=new om,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Yw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new de};break;case"SpotLight":n={position:new D,direction:new D,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new de,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new de,groundColor:new de};break;case"RectAreaLight":n={color:new de,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $w=0;function Kw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Zw(t,e){const n=new Yw,i=qw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new D);const s=new D,a=new ct,o=new ct;function l(d,f){let h=0,p=0,x=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let v=0,m=0,u=0,g=0,_=0,y=0,C=0,w=0,A=0,b=0,M=0;d.sort(Kw);const S=f===!0?Math.PI:1;for(let B=0,K=d.length;B<K;B++){const L=d[B],O=L.color,X=L.intensity,Y=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*X*S,p+=O.g*X*S,x+=O.b*X*S;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],X);M++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const z=L.shadow,q=i.get(L);q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,r.directionalShadow[v]=q,r.directionalShadowMap[v]=I,r.directionalShadowMatrix[v]=L.shadow.matrix,y++}r.directional[v]=F,v++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(O).multiplyScalar(X*S),F.distance=Y,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[u]=F;const z=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[u]=z.matrix,L.castShadow){const q=i.get(L);q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,r.spotShadow[u]=q,r.spotShadowMap[u]=I,w++}u++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(O).multiplyScalar(X),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=F,g++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*S),F.distance=L.distance,F.decay=L.decay,L.castShadow){const z=L.shadow,q=i.get(L);q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=L.shadow.matrix,C++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(X*S),F.groundColor.copy(L.groundColor).multiplyScalar(X*S),r.hemi[_]=F,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const N=r.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==u||N.rectAreaLength!==g||N.hemiLength!==_||N.numDirectionalShadows!==y||N.numPointShadows!==C||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+A-b,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=M,N.directionalLength=v,N.pointLength=m,N.spotLength=u,N.rectAreaLength=g,N.hemiLength=_,N.numDirectionalShadows=y,N.numPointShadows=C,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=M,r.version=$w++)}function c(d,f){let h=0,p=0,x=0,v=0,m=0;const u=f.matrixWorldInverse;for(let g=0,_=d.length;g<_;g++){const y=d[g];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(y.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),o.identity(),a.copy(y.matrixWorld),a.premultiply(u),o.extractRotation(a),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),p++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function lm(t,e){const n=new Zw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new lm(t,e),n.set(s,[l])):a>=o.length?(l=new lm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Jw extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iT(t,e,n){let i=new wf;const r=new be,s=new be,a=new dt,o=new Jw({depthPacking:Fy}),l=new eT,c={},d=n.maxTextureSize,f={[tr]:Yt,[Yt]:tr,[bn]:bn},h=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:tT,fragmentShader:nT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new je;x.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let u=this.type;this.render=function(w,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=u!==ui&&this.type===ui,L=u===ui&&this.type!==ui;for(let O=0,X=w.length;O<X;O++){const Y=w[O],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const F=I.getFrameExtents();if(r.multiply(F),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,I.mapSize.y=s.y)),I.map===null||K===!0||L===!0){const q=this.type!==ui?{minFilter:tn,magFilter:tn}:{};I.map!==null&&I.map.dispose(),I.map=new Nr(r.x,r.y,q),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const z=I.getViewportCount();for(let q=0;q<z;q++){const Z=I.getViewport(q);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),B.viewport(a),I.updateMatrices(Y,q),i=I.getFrustum(),y(A,b,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===ui&&g(I,b),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(M,S,N)};function g(w,A){const b=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,b,p,v,null)}function _(w,A,b,M){let S=null;const N=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=b.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=S.uuid,K=A.uuid;let L=c[B];L===void 0&&(L={},c[B]=L);let O=L[K];O===void 0&&(O=S.clone(),L[K]=O,A.addEventListener("dispose",C)),S=O}if(S.visible=A.visible,S.wireframe=A.wireframe,M===ui?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=b}return S}function y(w,A,b,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const K=e.update(w),L=w.material;if(Array.isArray(L)){const O=K.groups;for(let X=0,Y=O.length;X<Y;X++){const I=O[X],F=L[I.materialIndex];if(F&&F.visible){const z=_(w,F,M,S);w.onBeforeShadow(t,w,A,b,K,z,I),t.renderBufferDirect(b,null,K,z,w,I),w.onAfterShadow(t,w,A,b,K,z,I)}}}else if(L.visible){const O=_(w,L,M,S);w.onBeforeShadow(t,w,A,b,K,O,null),t.renderBufferDirect(b,null,K,O,w,null),w.onAfterShadow(t,w,A,b,K,O,null)}}const B=w.children;for(let K=0,L=B.length;K<L;K++)y(B[K],A,b,M,S)}function C(w){w.target.removeEventListener("dispose",C);for(const b in c){const M=c[b],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function rT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const se=new dt;let ae=null;const Re=new dt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!P&&(t.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){P=Se},setClear:function(Se,et,tt,Dt,Kt){Kt===!0&&(Se*=Dt,et*=Dt,tt*=Dt),se.set(Se,et,tt,Dt),Re.equals(se)===!1&&(t.clearColor(Se,et,tt,Dt),Re.copy(se))},reset:function(){P=!1,ae=null,Re.set(-1,0,0,0)}}}function s(){let P=!1,se=null,ae=null,Re=null;return{setTest:function(Se){Se?Ne(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Se){se!==Se&&!P&&(t.depthMask(Se),se=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case fy:t.depthFunc(t.NEVER);break;case hy:t.depthFunc(t.ALWAYS);break;case py:t.depthFunc(t.LESS);break;case Nl:t.depthFunc(t.LEQUAL);break;case my:t.depthFunc(t.EQUAL);break;case gy:t.depthFunc(t.GEQUAL);break;case _y:t.depthFunc(t.GREATER);break;case vy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){P=Se},setClear:function(Se){Re!==Se&&(t.clearDepth(Se),Re=Se)},reset:function(){P=!1,se=null,ae=null,Re=null}}}function a(){let P=!1,se=null,ae=null,Re=null,Se=null,et=null,tt=null,Dt=null,Kt=null;return{setTest:function(nt){P||(nt?Ne(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(nt){se!==nt&&!P&&(t.stencilMask(nt),se=nt)},setFunc:function(nt,Zt,$n){(ae!==nt||Re!==Zt||Se!==$n)&&(t.stencilFunc(nt,Zt,$n),ae=nt,Re=Zt,Se=$n)},setOp:function(nt,Zt,$n){(et!==nt||tt!==Zt||Dt!==$n)&&(t.stencilOp(nt,Zt,$n),et=nt,tt=Zt,Dt=$n)},setLocked:function(nt){P=nt},setClear:function(nt){Kt!==nt&&(t.clearStencil(nt),Kt=nt)},reset:function(){P=!1,se=null,ae=null,Re=null,Se=null,et=null,tt=null,Dt=null,Kt=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},p={},x=new WeakMap,v=[],m=null,u=!1,g=null,_=null,y=null,C=null,w=null,A=null,b=null,M=new de(0,0,0),S=0,N=!1,B=null,K=null,L=null,O=null,X=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=F>=1):z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=F>=2);let q=null,Z={};const j=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),oe=new dt().fromArray(j),fe=new dt().fromArray($);function me(P,se,ae,Re){const Se=new Uint8Array(4),et=t.createTexture();t.bindTexture(P,et),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<ae;tt++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(se+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return et}const Ie={};Ie[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(t.DEPTH_TEST),l.setFunc(Nl),ze(!1),R(Xh),Ne(t.CULL_FACE),ge(Ki);function Ne(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Ae(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ye(P,se){return p[P]!==se?(t.bindFramebuffer(P,se),p[P]=se,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=se),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function k(P,se){let ae=v,Re=!1;if(P)if(ae=x.get(se),ae===void 0&&(ae=[],x.set(se,ae)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(ae.length!==Se.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Se.length;et<tt;et++)ae[et]=t.COLOR_ATTACHMENT0+et;ae.length=Se.length,Re=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,Re=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function $t(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Me={[vr]:t.FUNC_ADD,[Zx]:t.FUNC_SUBTRACT,[Qx]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[qh]=t.MIN,Me[$h]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Me[qh]=P.MIN_EXT,Me[$h]=P.MAX_EXT)}const Le={[Jx]:t.ZERO,[ey]:t.ONE,[ty]:t.SRC_COLOR,[hd]:t.SRC_ALPHA,[oy]:t.SRC_ALPHA_SATURATE,[sy]:t.DST_COLOR,[iy]:t.DST_ALPHA,[ny]:t.ONE_MINUS_SRC_COLOR,[pd]:t.ONE_MINUS_SRC_ALPHA,[ay]:t.ONE_MINUS_DST_COLOR,[ry]:t.ONE_MINUS_DST_ALPHA,[ly]:t.CONSTANT_COLOR,[cy]:t.ONE_MINUS_CONSTANT_COLOR,[uy]:t.CONSTANT_ALPHA,[dy]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(P,se,ae,Re,Se,et,tt,Dt,Kt,nt){if(P===Ki){u===!0&&(Ae(t.BLEND),u=!1);return}if(u===!1&&(Ne(t.BLEND),u=!0),P!==Kx){if(P!==g||nt!==N){if((_!==vr||w!==vr)&&(t.blendEquation(t.FUNC_ADD),_=vr,w=vr),nt)switch(P){case Ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case at:t.blendFunc(t.ONE,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case at:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,C=null,A=null,b=null,M.set(0,0,0),S=0,g=P,N=nt}return}Se=Se||se,et=et||ae,tt=tt||Re,(se!==_||Se!==w)&&(t.blendEquationSeparate(Me[se],Me[Se]),_=se,w=Se),(ae!==y||Re!==C||et!==A||tt!==b)&&(t.blendFuncSeparate(Le[ae],Le[Re],Le[et],Le[tt]),y=ae,C=Re,A=et,b=tt),(Dt.equals(M)===!1||Kt!==S)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Kt),M.copy(Dt),S=Kt),g=P,N=!1}function ft(P,se){P.side===bn?Ae(t.CULL_FACE):Ne(t.CULL_FACE);let ae=P.side===Yt;se&&(ae=!ae),ze(ae),P.blending===Ar&&P.transparent===!1?ge(Ki):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Re=P.stencilWrite;c.setTest(Re),Re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),G(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(P){B!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),B=P)}function R(P){P!==Yx?(Ne(t.CULL_FACE),P!==K&&(P===Xh?t.cullFace(t.BACK):P===qx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),K=P}function E(P){P!==L&&(I&&t.lineWidth(P),L=P)}function G(P,se,ae){P?(Ne(t.POLYGON_OFFSET_FILL),(O!==se||X!==ae)&&(t.polygonOffset(se,ae),O=se,X=ae)):Ae(t.POLYGON_OFFSET_FILL)}function te(P){P?Ne(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function J(P){P===void 0&&(P=t.TEXTURE0+Y-1),q!==P&&(t.activeTexture(P),q=P)}function ne(P,se,ae){ae===void 0&&(q===null?ae=t.TEXTURE0+Y-1:ae=q);let Re=Z[ae];Re===void 0&&(Re={type:void 0,texture:void 0},Z[ae]=Re),(Re.type!==P||Re.texture!==se)&&(q!==ae&&(t.activeTexture(ae),q=ae),t.bindTexture(P,se||Ie[P]),Re.type=P,Re.texture=se)}function _e(){const P=Z[q];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){oe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function $e(P){fe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),fe.copy(P))}function _t(P,se){let ae=f.get(se);ae===void 0&&(ae=new WeakMap,f.set(se,ae));let Re=ae.get(P);Re===void 0&&(Re=t.getUniformBlockIndex(se,P.name),ae.set(P,Re))}function He(P,se){const Re=f.get(se).get(P);d.get(se)!==Re&&(t.uniformBlockBinding(se,Re,P.__bindingPointIndex),d.set(se,Re))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},q=null,Z={},p={},x=new WeakMap,v=[],m=null,u=!1,g=null,_=null,y=null,C=null,w=null,A=null,b=null,M=new de(0,0,0),S=0,N=!1,B=null,K=null,L=null,O=null,X=null,oe.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Ae,bindFramebuffer:Ye,drawBuffers:k,useProgram:$t,setBlending:ge,setMaterial:ft,setFlipSided:ze,setCullFace:R,setLineWidth:E,setPolygonOffset:G,setScissorTest:te,activeTexture:J,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:ye,texImage3D:pe,updateUBOMapping:_t,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Pe,texSubImage2D:we,texSubImage3D:Be,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ze,scissor:Fe,viewport:$e,reset:ie}}function sT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return p?new OffscreenCanvas(R,E):Hl("canvas")}function v(R,E,G,te){let J=1;if((R.width>te||R.height>te)&&(J=te/Math.max(R.width,R.height)),J<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=E?kl:Math.floor,_e=ne(J*R.width),le=ne(J*R.height);f===void 0&&(f=x(_e,le));const he=G?x(_e,le):f;return he.width=_e,he.height=le,he.getContext("2d").drawImage(R,0,0,_e,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+le+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Md(R.width)&&Md(R.height)}function u(R){return o?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==tn&&R.minFilter!==Rn}function g(R,E){return R.generateMipmaps&&E&&R.minFilter!==tn&&R.minFilter!==Rn}function _(R){t.generateMipmap(R)}function y(R,E,G,te,J=!1){if(o===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=E;if(E===t.RED&&(G===t.FLOAT&&(ne=t.R32F),G===t.HALF_FLOAT&&(ne=t.R16F),G===t.UNSIGNED_BYTE&&(ne=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.R8UI),G===t.UNSIGNED_SHORT&&(ne=t.R16UI),G===t.UNSIGNED_INT&&(ne=t.R32UI),G===t.BYTE&&(ne=t.R8I),G===t.SHORT&&(ne=t.R16I),G===t.INT&&(ne=t.R32I)),E===t.RG&&(G===t.FLOAT&&(ne=t.RG32F),G===t.HALF_FLOAT&&(ne=t.RG16F),G===t.UNSIGNED_BYTE&&(ne=t.RG8)),E===t.RGBA){const _e=J?Fl:Je.getTransfer(te);G===t.FLOAT&&(ne=t.RGBA32F),G===t.HALF_FLOAT&&(ne=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ne=_e===st?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(R,E,G){return g(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===tn||R===Kh||R===Gc?t.NEAREST:t.LINEAR}function A(R){const E=R.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&d.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),N(E)}function M(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,te=h.get(G);if(te){const J=te[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(R),Object.keys(te).length===0&&h.delete(G)}i.remove(R)}function S(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const G=R.source,te=h.get(G);delete te[E.__cacheKey],a.memory.textures--}function N(R){const E=R.texture,G=i.get(R),te=i.get(E);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(G.__webglFramebuffer[J]))for(let ne=0;ne<G.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(G.__webglFramebuffer[J]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[J])}else{if(Array.isArray(G.__webglFramebuffer))for(let J=0;J<G.__webglFramebuffer.length;J++)t.deleteFramebuffer(G.__webglFramebuffer[J]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let J=0;J<G.__webglColorRenderbuffer.length;J++)G.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[J]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,ne=E.length;J<ne;J++){const _e=i.get(E[J]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(E[J])}i.remove(E),i.remove(R)}let B=0;function K(){B=0}function L(){const R=B;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),B+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const G=i.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,R,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function Y(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){oe(G,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function I(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){oe(G,R,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function F(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){fe(G,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const z={[_d]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[vd]:t.MIRRORED_REPEAT},q={[tn]:t.NEAREST,[Kh]:t.NEAREST_MIPMAP_NEAREST,[Gc]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[Ay]:t.LINEAR_MIPMAP_NEAREST,[Ya]:t.LINEAR_MIPMAP_LINEAR},Z={[zy]:t.NEVER,[Wy]:t.ALWAYS,[By]:t.LESS,[Xg]:t.LEQUAL,[ky]:t.EQUAL,[Vy]:t.GEQUAL,[Hy]:t.GREATER,[Gy]:t.NOTEQUAL};function j(R,E,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,z[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,z[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,z[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==tn&&E.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===tn||E.minFilter!==Gc&&E.minFilter!==Ya||E.type===ki&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===qa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function $(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const te=E.source;let J=h.get(te);J===void 0&&(J={},h.set(te,J));const ne=O(E);if(ne!==R.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[ne].usedTimes++;const _e=J[R.__cacheKey];_e!==void 0&&(J[R.__cacheKey].usedTimes--,_e.usedTimes===0&&S(E)),R.__cacheKey=ne,R.__webglTexture=J[ne].texture}return G}function oe(R,E,G){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const J=$(R,E),ne=E.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+G);const _e=i.get(ne);if(ne.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const le=Je.getPrimaries(Je.workingColorSpace),he=E.colorSpace===Pn?null:Je.getPrimaries(E.colorSpace),we=E.colorSpace===Pn||le===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Be=u(E)&&m(E.image)===!1;let Q=v(E.image,Be,!1,r.maxTextureSize);Q=ze(E,Q);const Ze=m(Q)||o,We=s.convert(E.format,E.colorSpace);let Pe=s.convert(E.type),ye=y(E.internalFormat,We,Pe,E.colorSpace,E.isVideoTexture);j(te,E,Ze);let pe;const Fe=E.mipmaps,$e=o&&E.isVideoTexture!==!0&&ye!==Gg,_t=_e.__version===void 0||J===!0,He=C(E,Q,Ze);if(E.isDepthTexture)ye=t.DEPTH_COMPONENT,o?E.type===ki?ye=t.DEPTH_COMPONENT32F:E.type===Bi?ye=t.DEPTH_COMPONENT24:E.type===Rr?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:E.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Cr&&ye===t.DEPTH_COMPONENT&&E.type!==Mf&&E.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Bi,Pe=s.convert(E.type)),E.format===Bs&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,E.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Rr,Pe=s.convert(E.type))),_t&&($e?n.texStorage2D(t.TEXTURE_2D,1,ye,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ye,Q.width,Q.height,0,We,Pe,null));else if(E.isDataTexture)if(Fe.length>0&&Ze){$e&&_t&&n.texStorage2D(t.TEXTURE_2D,He,ye,Fe[0].width,Fe[0].height);for(let ie=0,P=Fe.length;ie<P;ie++)pe=Fe[ie],$e?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,Pe,pe.data):n.texImage2D(t.TEXTURE_2D,ie,ye,pe.width,pe.height,0,We,Pe,pe.data);E.generateMipmaps=!1}else $e?(_t&&n.texStorage2D(t.TEXTURE_2D,He,ye,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,We,Pe,Q.data)):n.texImage2D(t.TEXTURE_2D,0,ye,Q.width,Q.height,0,We,Pe,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ye,Fe[0].width,Fe[0].height,Q.depth);for(let ie=0,P=Fe.length;ie<P;ie++)pe=Fe[ie],E.format!==Xn?We!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,We,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,We,Pe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,Q.depth,0,We,Pe,pe.data)}else{$e&&_t&&n.texStorage2D(t.TEXTURE_2D,He,ye,Fe[0].width,Fe[0].height);for(let ie=0,P=Fe.length;ie<P;ie++)pe=Fe[ie],E.format!==Xn?We!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,We,Pe,pe.data):n.texImage2D(t.TEXTURE_2D,ie,ye,pe.width,pe.height,0,We,Pe,pe.data)}else if(E.isDataArrayTexture)$e?(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,ye,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,We,Pe,Q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,We,Pe,Q.data);else if(E.isData3DTexture)$e?(_t&&n.texStorage3D(t.TEXTURE_3D,He,ye,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,We,Pe,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,We,Pe,Q.data);else if(E.isFramebufferTexture){if(_t)if($e)n.texStorage2D(t.TEXTURE_2D,He,ye,Q.width,Q.height);else{let ie=Q.width,P=Q.height;for(let se=0;se<He;se++)n.texImage2D(t.TEXTURE_2D,se,ye,ie,P,0,We,Pe,null),ie>>=1,P>>=1}}else if(Fe.length>0&&Ze){$e&&_t&&n.texStorage2D(t.TEXTURE_2D,He,ye,Fe[0].width,Fe[0].height);for(let ie=0,P=Fe.length;ie<P;ie++)pe=Fe[ie],$e?n.texSubImage2D(t.TEXTURE_2D,ie,0,0,We,Pe,pe):n.texImage2D(t.TEXTURE_2D,ie,ye,We,Pe,pe);E.generateMipmaps=!1}else $e?(_t&&n.texStorage2D(t.TEXTURE_2D,He,ye,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Pe,Q)):n.texImage2D(t.TEXTURE_2D,0,ye,We,Pe,Q);g(E,Ze)&&_(te),_e.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function fe(R,E,G){if(E.image.length!==6)return;const te=$(R,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const _e=Je.getPrimaries(Je.workingColorSpace),le=E.colorSpace===Pn?null:Je.getPrimaries(E.colorSpace),he=E.colorSpace===Pn||_e===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!we&&!Be?Q[ie]=v(E.image[ie],!1,!0,r.maxCubemapSize):Q[ie]=Be?E.image[ie].image:E.image[ie],Q[ie]=ze(E,Q[ie]);const Ze=Q[0],We=m(Ze)||o,Pe=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),pe=y(E.internalFormat,Pe,ye,E.colorSpace),Fe=o&&E.isVideoTexture!==!0,$e=ne.__version===void 0||te===!0;let _t=C(E,Ze,We);j(t.TEXTURE_CUBE_MAP,E,We);let He;if(we){Fe&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_t,pe,Ze.width,Ze.height);for(let ie=0;ie<6;ie++){He=Q[ie].mipmaps;for(let P=0;P<He.length;P++){const se=He[P];E.format!==Xn?Pe!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,0,0,se.width,se.height,Pe,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,0,0,se.width,se.height,Pe,ye,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P,pe,se.width,se.height,0,Pe,ye,se.data)}}}else{He=E.mipmaps,Fe&&$e&&(He.length>0&&_t++,n.texStorage2D(t.TEXTURE_CUBE_MAP,_t,pe,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(Be){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Pe,ye,Q[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Q[ie].width,Q[ie].height,0,Pe,ye,Q[ie].data);for(let P=0;P<He.length;P++){const ae=He[P].image[ie].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,0,0,ae.width,ae.height,Pe,ye,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,pe,ae.width,ae.height,0,Pe,ye,ae.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,ye,Q[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Pe,ye,Q[ie]);for(let P=0;P<He.length;P++){const se=He[P];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,0,0,Pe,ye,se.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,P+1,pe,Pe,ye,se.image[ie])}}}g(E,We)&&_(t.TEXTURE_CUBE_MAP),ne.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function me(R,E,G,te,J,ne){const _e=s.convert(G.format,G.colorSpace),le=s.convert(G.type),he=y(G.internalFormat,_e,le,G.colorSpace);if(!i.get(E).__hasExternalTextures){const Be=Math.max(1,E.width>>ne),Q=Math.max(1,E.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,he,Be,Q,E.depth,0,_e,le,null):n.texImage2D(J,ne,he,Be,Q,0,_e,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ge(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(G).__webglTexture,0,Le(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(G).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||ge(E)){const J=E.depthTexture;J&&J.isDepthTexture&&(J.type===ki?te=t.DEPTH_COMPONENT32F:J.type===Bi&&(te=t.DEPTH_COMPONENT24));const ne=Le(E);ge(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const te=Le(E);G&&ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<te.length;J++){const ne=te[J],_e=s.convert(ne.format,ne.colorSpace),le=s.convert(ne.type),he=y(ne.internalFormat,_e,le,ne.colorSpace),we=Le(E);G&&ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,he,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,he,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,he,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,J=Le(E);if(E.depthTexture.format===Cr)ge(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(E.depthTexture.format===Bs)ge(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ne(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=t.createRenderbuffer(),Ie(E.__webglDepthbuffer[te],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Ie(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,E,G){const te=i.get(R);E!==void 0&&me(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ae(R)}function k(R){const E=R.texture,G=i.get(R),te=i.get(E);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,a.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,_e=m(R)||o;if(J){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let he=0;he<E.mipmaps.length;he++)G.__webglFramebuffer[le][he]=t.createFramebuffer()}else G.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[le]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const le=R.texture;for(let he=0,we=le.length;he<we;he++){const Be=i.get(le[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ge(R)===!1){const le=ne?E:[E];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const we=le[he];G.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Be=s.convert(we.format,we.colorSpace),Q=s.convert(we.type),Ze=y(we.internalFormat,Be,Q,we.colorSpace,R.isXRRenderTarget===!0),We=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,G.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),j(t.TEXTURE_CUBE_MAP,E,_e);for(let le=0;le<6;le++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)me(G.__webglFramebuffer[le][he],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else me(G.__webglFramebuffer[le],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E,_e)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const le=R.texture;for(let he=0,we=le.length;he<we;he++){const Be=le[he],Q=i.get(Be);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),j(t.TEXTURE_2D,Be,_e),me(G.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),g(Be,_e)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,te.__webglTexture),j(le,E,_e),o&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)me(G.__webglFramebuffer[he],R,E,t.COLOR_ATTACHMENT0,le,he);else me(G.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,le,0);g(E,_e)&&_(le),n.unbindTexture()}R.depthBuffer&&Ae(R)}function $t(R){const E=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,J=G.length;te<J;te++){const ne=G[te];if(g(ne,E)){const _e=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ne).__webglTexture;n.bindTexture(_e,le),_(_e),n.unbindTexture()}}}function Me(R){if(o&&R.samples>0&&ge(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,te=R.height;let J=t.COLOR_BUFFER_BIT;const ne=[],_e=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),he=R.isWebGLMultipleRenderTargets===!0;if(he)for(let we=0;we<E.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let we=0;we<E.length;we++){ne.push(t.COLOR_ATTACHMENT0+we),R.depthBuffer&&ne.push(_e);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),he&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[we]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),he){const Q=i.get(E[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,G,te,0,0,G,te,J,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<E.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,le.__webglColorRenderbuffer[we]);const Be=i.get(E[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const E=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function ze(R,E){const G=R.colorSpace,te=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===yd||G!==Ei&&G!==Pn&&(Je.getTransfer(G)===st?o===!1?e.has("EXT_sRGB")===!0&&te===Xn?(R.format=yd,R.minFilter=Rn,R.generateMipmaps=!1):E=Yg.sRGBToLinear(E):(te!==Xn||J!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=I,this.setTextureCube=F,this.rebindTextures=Ye,this.setupRenderTarget=k,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function aT(t,e,n){const i=n.isWebGL2;function r(s,a=Pn){let o;const l=Je.getTransfer(a);if(s===Qi)return t.UNSIGNED_BYTE;if(s===Og)return t.UNSIGNED_SHORT_4_4_4_4;if(s===zg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ry)return t.BYTE;if(s===Cy)return t.SHORT;if(s===Mf)return t.UNSIGNED_SHORT;if(s===Fg)return t.INT;if(s===Bi)return t.UNSIGNED_INT;if(s===ki)return t.FLOAT;if(s===qa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===by)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===Py)return t.LUMINANCE;if(s===Ly)return t.LUMINANCE_ALPHA;if(s===Cr)return t.DEPTH_COMPONENT;if(s===Bs)return t.DEPTH_STENCIL;if(s===yd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Dy)return t.RED;if(s===Bg)return t.RED_INTEGER;if(s===Iy)return t.RG;if(s===kg)return t.RG_INTEGER;if(s===Hg)return t.RGBA_INTEGER;if(s===Vc||s===Wc||s===Xc||s===jc)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Qh||s===Jh||s===ep)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Zh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ep)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tp||s===np)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===tp)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===np)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up||s===dp||s===fp||s===hp||s===pp||s===mp||s===gp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ip)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ap)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===op)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===up)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gp)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yc||s===_p||s===vp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Yc)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_p)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Uy||s===xp||s===yp||s===Mp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Yc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class oT extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lT={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cT extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,x=null;const v=n.getContextAttributes();let m=null,u=null;const g=[],_=[],y=new be;let C=null;const w=new _n;w.layers.enable(1),w.viewport=new dt;const A=new _n;A.layers.enable(2),A.viewport=new dt;const b=[w,A],M=new oT;M.layers.enable(1),M.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=g[j];return $===void 0&&($=new gu,g[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=g[j];return $===void 0&&($=new gu,g[j]=$),$.getGripSpace()},this.getHand=function(j){let $=g[j];return $===void 0&&($=new gu,g[j]=$),$.getHandSpace()};function B(j){const $=_.indexOf(j.inputSource);if($===-1)return;const oe=g[$];oe!==void 0&&(oe.update(j.inputSource,j.frame,c||a),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let j=0;j<g.length;j++){const $=_[j];$!==null&&(_[j]=null,g[j].disconnect($))}S=null,N=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Nr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,oe=null,fe=null;v.depth&&(fe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=v.stencil?Bs:Cr,oe=v.stencil?Rr:Bi);const me={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Nr(h.textureWidth,h.textureHeight,{format:Xn,type:Qi,depthTexture:new s_(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ie=e.properties.get(u);Ie.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let $=0;$<j.removed.length;$++){const oe=j.removed[$],fe=_.indexOf(oe);fe>=0&&(_[fe]=null,g[fe].disconnect(oe))}for(let $=0;$<j.added.length;$++){const oe=j.added[$];let fe=_.indexOf(oe);if(fe===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=_.length){_.push(oe),fe=Ie;break}else if(_[Ie]===null){_[Ie]=oe,fe=Ie;break}if(fe===-1)break}const me=g[fe];me&&me.connect(oe)}}const O=new D,X=new D;function Y(j,$,oe){O.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const fe=O.distanceTo(X),me=$.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,Ne=me[14]/(me[10]-1),Ae=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],k=(me[9]-1)/me[5],$t=(me[8]-1)/me[0],Me=(Ie[8]+1)/Ie[0],Le=Ne*$t,ge=Ne*Me,ft=fe/(-$t+Me),ze=ft*-$t;$.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ze),j.translateZ(ft),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Ne+ft,E=Ae+ft,G=Le-ze,te=ge+(fe-ze),J=Ye*Ae/E*R,ne=k*Ae/E*R;j.projectionMatrix.makePerspective(G,te,J,ne,R,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function I(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;M.near=A.near=w.near=j.near,M.far=A.far=w.far=j.far,(S!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,N=M.far);const $=j.parent,oe=M.cameras;I(M,$);for(let fe=0;fe<oe.length;fe++)I(oe[fe],$);oe.length===2?Y(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),F(j,M,$)};function F(j,$,oe){oe===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$a*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let z=null;function q(j,$){if(d=$.getViewerPose(c||a),x=$,d!==null){const oe=d.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let fe=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let me=0;me<oe.length;me++){const Ie=oe[me];let Ne=null;if(p!==null)Ne=p.getViewport(Ie);else{const Ye=f.getViewSubImage(h,Ie);Ne=Ye.viewport,me===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Ae=b[me];Ae===void 0&&(Ae=new _n,Ae.layers.enable(me),Ae.viewport=new dt,b[me]=Ae),Ae.matrix.fromArray(Ie.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ie.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ae)}}for(let oe=0;oe<g.length;oe++){const fe=_[oe],me=g[oe];fe!==null&&me!==void 0&&me.update(fe,$,c||a)}z&&z(j,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const Z=new r_;Z.setAnimationLoop(q),this.setAnimationLoop=function(j){z=j},this.dispose=function(){}}}function uT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,t_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Yt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(x(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(g,C);const w=e.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function d(g){const _=f();g.__bindingPointIndex=_;const y=t.createBuffer(),C=g.__size,w=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,A=y.length;w<A;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=b.length;M<S;M++){const N=b[M];if(p(N,w,M,C)===!0){const B=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let L=0;for(let O=0;O<K.length;O++){const X=K[O],Y=v(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,B+L,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,y,C){const w=g.value,A=_+"_"+y;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const b=C[A];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[A]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function x(g){const _=g.uniforms;let y=0;const C=16;for(let A=0,b=_.length;A<b;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,N=M.length;S<N;S++){const B=M[S],K=Array.isArray(B.value)?B.value:[B.value];for(let L=0,O=K.length;L<O;L++){const X=K[L],Y=v(X),I=y%C;I!==0&&C-I<Y.boundary&&(y+=C-I),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Y.storage}}}const w=y%C;return w>0&&(y+=C-w),g.__size=y,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class d_{constructor(e={}){const{canvas:n=aM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let y=!1,C=0,w=0,A=null,b=-1,M=null;const S=new dt,N=new dt;let B=null;const K=new de(0);let L=0,O=n.width,X=n.height,Y=1,I=null,F=null;const z=new dt(0,0,O,X),q=new dt(0,0,O,X);let Z=!1;const j=new wf;let $=!1,oe=!1,fe=null;const me=new ct,Ie=new be,Ne=new D,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?Y:1}let k=i;function $t(T,U){for(let V=0;V<T.length;V++){const W=T[V],H=n.getContext(W,U);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yf}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",se,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),k=$t(U,T),k===null)throw $t(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Le,ge,ft,ze,R,E,G,te,J,ne,_e,le,he,we,Be,Q,Ze,We,Pe,ye,pe,Fe,$e;function _t(){Me=new M1(k),Le=new p1(k,Me,e),Me.init(Le),pe=new aT(k,Me,Le),ge=new rT(k,Me,Le),ft=new w1(k),ze=new Ww,R=new sT(k,Me,ge,ze,Le,pe,ft),E=new g1(_),G=new y1(_),te=new LM(k,Le),Fe=new f1(k,Me,te,Le),J=new S1(k,te,ft,Fe),ne=new C1(k,J,te,ft),We=new R1(k,Le,R),Be=new m1(ze),_e=new Vw(_,E,G,Me,Le,Fe,Be),le=new uT(_,ze),he=new jw,we=new Qw(Me,Le),Ze=new d1(_,E,G,ge,ne,h,l),Q=new iT(_,ne,Le),$e=new dT(k,ft,Le,ge),Pe=new h1(k,Me,ft,Le),ye=new E1(k,Me,ft,Le),ft.programs=_e.programs,_.capabilities=Le,_.extensions=Me,_.properties=ze,_.renderLists=he,_.shadowMap=Q,_.state=ge,_.info=ft}_t();const He=new cT(_,k);this.xr=He,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(O,X,!1))},this.getSize=function(T){return T.set(O,X)},this.setSize=function(T,U,V=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,X=U,n.width=Math.floor(T*Y),n.height=Math.floor(U*Y),V===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(O*Y,X*Y).floor()},this.setDrawingBufferSize=function(T,U,V){O=T,X=U,Y=V,n.width=Math.floor(T*V),n.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,U,V,W){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,U,V,W),ge.viewport(S.copy(z).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,U,V,W){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,U,V,W),ge.scissor(N.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ge.setScissorTest(Z=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let H=!1;if(A!==null){const ce=A.texture.format;H=ce===Hg||ce===kg||ce===Bg}if(H){const ce=A.texture.type,ve=ce===Qi||ce===Bi||ce===Mf||ce===Rr||ce===Og||ce===zg,Ee=Ze.getClearColor(),Ce=Ze.getClearAlpha(),ke=Ee.r,De=Ee.g,Ue=Ee.b;ve?(p[0]=ke,p[1]=De,p[2]=Ue,p[3]=Ce,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=ke,x[1]=De,x[2]=Ue,x[3]=Ce,k.clearBufferiv(k.COLOR,0,x))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT),V&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),we.dispose(),ze.dispose(),E.dispose(),G.dispose(),ne.dispose(),Fe.dispose(),$e.dispose(),_e.dispose(),He.dispose(),He.removeEventListener("sessionstart",Kt),He.removeEventListener("sessionend",nt),fe&&(fe.dispose(),fe=null),Zt.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ft.autoReset,U=Q.enabled,V=Q.autoUpdate,W=Q.needsUpdate,H=Q.type;_t(),ft.autoReset=T,Q.enabled=U,Q.autoUpdate=V,Q.needsUpdate=W,Q.type=H}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const U=T.target;U.removeEventListener("dispose",ae),Re(U)}function Re(T){Se(T),ze.remove(T)}function Se(T){const U=ze.get(T).programs;U!==void 0&&(U.forEach(function(V){_e.releaseProgram(V)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,H,ce){U===null&&(U=Ae);const ve=H.isMesh&&H.matrixWorld.determinant()<0,Ee=m_(T,U,V,W,H);ge.setMaterial(W,ve);let Ce=V.index,ke=1;if(W.wireframe===!0){if(Ce=J.getWireframeAttribute(V),Ce===void 0)return;ke=2}const De=V.drawRange,Ue=V.attributes.position;let Mt=De.start*ke,hn=(De.start+De.count)*ke;ce!==null&&(Mt=Math.max(Mt,ce.start*ke),hn=Math.min(hn,(ce.start+ce.count)*ke)),Ce!==null?(Mt=Math.max(Mt,0),hn=Math.min(hn,Ce.count)):Ue!=null&&(Mt=Math.max(Mt,0),hn=Math.min(hn,Ue.count));const It=hn-Mt;if(It<0||It===1/0)return;Fe.setup(H,W,Ee,V,Ce);let ri,ht=Pe;if(Ce!==null&&(ri=te.get(Ce),ht=ye,ht.setIndex(ri)),H.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*Ye()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(H.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*Ye()),H.isLineSegments?ht.setMode(k.LINES):H.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else H.isPoints?ht.setMode(k.POINTS):H.isSprite&&ht.setMode(k.TRIANGLES);if(H.isBatchedMesh)ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ht.renderInstances(Mt,It,H.count);else if(V.isInstancedBufferGeometry){const Ge=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fc=Math.min(V.instanceCount,Ge);ht.renderInstances(Mt,It,fc)}else ht.render(Mt,It)};function et(T,U,V){T.transparent===!0&&T.side===bn&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,so(T,U,V),T.side=tr,T.needsUpdate=!0,so(T,U,V),T.side=bn):so(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),m=we.get(V),m.init(),g.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const W=new Set;return T.traverse(function(H){const ce=H.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Ee=ce[ve];et(Ee,V,H),W.add(Ee)}else et(ce,V,H),W.add(ce)}),g.pop(),m=null,W},this.compileAsync=function(T,U,V=null){const W=this.compile(T,U,V);return new Promise(H=>{function ce(){if(W.forEach(function(ve){ze.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){H(T);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tt=null;function Dt(T){tt&&tt(T)}function Kt(){Zt.stop()}function nt(){Zt.start()}const Zt=new r_;Zt.setAnimationLoop(Dt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){tt=T,He.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},He.addEventListener("sessionstart",Kt),He.addEventListener("sessionend",nt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(U),U=He.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,A),m=we.get(T,g.length),m.init(),g.push(m),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(me),oe=this.localClippingEnabled,$=Be.init(this.clippingPlanes,oe),v=he.get(T,u.length),v.init(),u.push(v),$n(T,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(I,F),this.info.render.frame++,$===!0&&Be.beginShadows();const V=m.state.shadowsArray;if(Q.render(V,T,U),$===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(v,T),m.setupLights(_._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let H=0,ce=W.length;H<ce;H++){const ve=W[H];Pf(v,T,ve,ve.viewport)}}else Pf(v,T,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,U),Fe.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function $n(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){W&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const ve=ne.update(T),Ee=T.material;Ee.visible&&v.push(T,ve,Ee,V,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const ve=ne.update(T),Ee=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ne.copy(ve.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Ee)){const Ce=ve.groups;for(let ke=0,De=Ce.length;ke<De;ke++){const Ue=Ce[ke],Mt=Ee[Ue.materialIndex];Mt&&Mt.visible&&v.push(T,ve,Mt,V,Ne.z,Ue)}}else Ee.visible&&v.push(T,ve,Ee,V,Ne.z,null)}}const ce=T.children;for(let ve=0,Ee=ce.length;ve<Ee;ve++)$n(ce[ve],U,V,W)}function Pf(T,U,V,W){const H=T.opaque,ce=T.transmissive,ve=T.transparent;m.setupLightsView(V),$===!0&&Be.setGlobalState(_.clippingPlanes,V),ce.length>0&&p_(H,ce,U,V),W&&ge.viewport(S.copy(W)),H.length>0&&ro(H,U,V),ce.length>0&&ro(ce,U,V),ve.length>0&&ro(ve,U,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function p_(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ce=Le.isWebGL2;fe===null&&(fe=new Nr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?qa:Qi,minFilter:Ya,samples:ce?4:0})),_.getDrawingBufferSize(Ie),ce?fe.setSize(Ie.x,Ie.y):fe.setSize(kl(Ie.x),kl(Ie.y));const ve=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(K),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=Zi,ro(T,V,W),R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe);let Ce=!1;for(let ke=0,De=U.length;ke<De;ke++){const Ue=U[ke],Mt=Ue.object,hn=Ue.geometry,It=Ue.material,ri=Ue.group;if(It.side===bn&&Mt.layers.test(W.layers)){const ht=It.side;It.side=Yt,It.needsUpdate=!0,Lf(Mt,V,W,hn,It,ri),It.side=ht,It.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe)),_.setRenderTarget(ve),_.setClearColor(K,L),_.toneMapping=Ee}function ro(T,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ce=T.length;H<ce;H++){const ve=T[H],Ee=ve.object,Ce=ve.geometry,ke=W===null?ve.material:W,De=ve.group;Ee.layers.test(V.layers)&&Lf(Ee,U,V,Ce,ke,De)}}function Lf(T,U,V,W,H,ce){T.onBeforeRender(_,U,V,W,H,ce),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,U,V,W,T,ce),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=Yt,H.needsUpdate=!0,_.renderBufferDirect(V,U,W,H,T,ce),H.side=tr,H.needsUpdate=!0,_.renderBufferDirect(V,U,W,H,T,ce),H.side=bn):_.renderBufferDirect(V,U,W,H,T,ce),T.onAfterRender(_,U,V,W,H,ce)}function so(T,U,V){U.isScene!==!0&&(U=Ae);const W=ze.get(T),H=m.state.lights,ce=m.state.shadowsArray,ve=H.state.version,Ee=_e.getParameters(T,H.state,ce,U,V),Ce=_e.getProgramCacheKey(Ee);let ke=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||W.environment),ke===void 0&&(T.addEventListener("dispose",ae),ke=new Map,W.programs=ke);let De=ke.get(Ce);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===ve)return If(T,Ee),De}else Ee.uniforms=_e.getUniforms(T),T.onBuild(V,Ee,_),T.onBeforeCompile(Ee,_),De=_e.acquireProgram(Ee,Ce),ke.set(Ce,De),W.uniforms=Ee.uniforms;const Ue=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Be.uniform),If(T,Ee),W.needsLights=__(T),W.lightsStateVersion=ve,W.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=De,W.uniformsList=null,De}function Df(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=ul.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function If(T,U){const V=ze.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function m_(T,U,V,W,H){U.isScene!==!0&&(U=Ae),R.resetTextureUnits();const ce=U.fog,ve=W.isMeshStandardMaterial?U.environment:null,Ee=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ei,Ce=(W.isMeshStandardMaterial?G:E).get(W.envMap||ve),ke=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!V.morphAttributes.position,Mt=!!V.morphAttributes.normal,hn=!!V.morphAttributes.color;let It=Zi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(It=_.toneMapping);const ri=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=ri!==void 0?ri.length:0,Ge=ze.get(W),fc=m.state.lights;if($===!0&&(oe===!0||T!==M)){const En=T===M&&W.id===b;Be.setState(W,T,En)}let vt=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==fc.state.version||Ge.outputColorSpace!==Ee||H.isBatchedMesh&&Ge.batching===!1||!H.isBatchedMesh&&Ge.batching===!0||H.isInstancedMesh&&Ge.instancing===!1||!H.isInstancedMesh&&Ge.instancing===!0||H.isSkinnedMesh&&Ge.skinning===!1||!H.isSkinnedMesh&&Ge.skinning===!0||H.isInstancedMesh&&Ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ge.instancingColor===!1&&H.instanceColor!==null||Ge.envMap!==Ce||W.fog===!0&&Ge.fog!==ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==ke||Ge.vertexTangents!==De||Ge.morphTargets!==Ue||Ge.morphNormals!==Mt||Ge.morphColors!==hn||Ge.toneMapping!==It||Le.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,Ge.__version=W.version);let lr=Ge.currentProgram;vt===!0&&(lr=so(W,U,H));let Uf=!1,$s=!1,hc=!1;const Ht=lr.getUniforms(),cr=Ge.uniforms;if(ge.useProgram(lr.program)&&(Uf=!0,$s=!0,hc=!0),W.id!==b&&(b=W.id,$s=!0),Uf||M!==T){Ht.setValue(k,"projectionMatrix",T.projectionMatrix),Ht.setValue(k,"viewMatrix",T.matrixWorldInverse);const En=Ht.map.cameraPosition;En!==void 0&&En.setValue(k,Ne.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,$s=!0,hc=!0)}if(H.isSkinnedMesh){Ht.setOptional(k,H,"bindMatrix"),Ht.setOptional(k,H,"bindMatrixInverse");const En=H.skeleton;En&&(Le.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Ht.setValue(k,"boneTexture",En.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ht.setOptional(k,H,"batchingTexture"),Ht.setValue(k,"batchingTexture",H._matricesTexture,R));const pc=V.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0&&Le.isWebGL2===!0)&&We.update(H,V,lr),($s||Ge.receiveShadow!==H.receiveShadow)&&(Ge.receiveShadow=H.receiveShadow,Ht.setValue(k,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(cr.envMap.value=Ce,cr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$s&&(Ht.setValue(k,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&g_(cr,hc),ce&&W.fog===!0&&le.refreshFogUniforms(cr,ce),le.refreshMaterialUniforms(cr,W,Y,X,fe),ul.upload(k,Df(Ge),cr,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ul.upload(k,Df(Ge),cr,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ht.setValue(k,"center",H.center),Ht.setValue(k,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(k,"normalMatrix",H.normalMatrix),Ht.setValue(k,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const En=W.uniformsGroups;for(let mc=0,v_=En.length;mc<v_;mc++)if(Le.isWebGL2){const Nf=En[mc];$e.update(Nf,lr),$e.bind(Nf,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function g_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function __(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,V){ze.get(T.texture).__webglTexture=U,ze.get(T.depthTexture).__webglTexture=V;const W=ze.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const V=ze.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){A=T,C=U,w=V;let W=!0,H=null,ce=!1,ve=!1;if(T){const Ce=ze.get(T);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ce.__hasExternalTextures&&R.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const De=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[U])?H=De[U][V]:H=De[U],ce=!0):Le.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?H=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[V]:H=De,S.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else S.copy(z).multiplyScalar(Y).floor(),N.copy(q).multiplyScalar(Y).floor(),B=Z;if(ge.bindFramebuffer(k.FRAMEBUFFER,H)&&Le.drawBuffers&&W&&ge.drawBuffers(T,H),ge.viewport(S),ge.scissor(N),ge.setScissorTest(B),ce){const Ce=ze.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,V)}else if(ve){const Ce=ze.get(T.texture),ke=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,V||0,ke)}b=-1},this.readRenderTargetPixels=function(T,U,V,W,H,ce,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){ge.bindFramebuffer(k.FRAMEBUFFER,Ee);try{const Ce=T.texture,ke=Ce.format,De=Ce.type;if(ke!==Xn&&pe.convert(ke)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===qa&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(De!==Qi&&pe.convert(De)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ki&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-H&&k.readPixels(U,V,W,H,pe.convert(ke),pe.convert(De),ce)}finally{const Ce=A!==null?ze.get(A).__webglFramebuffer:null;ge.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,U,V=0){const W=Math.pow(2,-V),H=Math.floor(U.image.width*W),ce=Math.floor(U.image.height*W);R.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,T.x,T.y,H,ce),ge.unbindTexture()},this.copyTextureToTexture=function(T,U,V,W=0){const H=U.image.width,ce=U.image.height,ve=pe.convert(V.format),Ee=pe.convert(V.type);R.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,T.x,T.y,H,ce,ve,Ee,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,T.x,T.y,ve,Ee,U.image),W===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,Ee=T.max.z-T.min.z+1,Ce=pe.convert(W.format),ke=pe.convert(W.type);let De;if(W.isData3DTexture)R.setTexture3D(W,0),De=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),De=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ue=k.getParameter(k.UNPACK_ROW_LENGTH),Mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),hn=k.getParameter(k.UNPACK_SKIP_PIXELS),It=k.getParameter(k.UNPACK_SKIP_ROWS),ri=k.getParameter(k.UNPACK_SKIP_IMAGES),ht=V.isCompressedTexture?V.mipmaps[H]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(De,H,U.x,U.y,U.z,ce,ve,Ee,Ce,ke,ht.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(De,H,U.x,U.y,U.z,ce,ve,Ee,Ce,ht.data)):k.texSubImage3D(De,H,U.x,U.y,U.z,ce,ve,Ee,Ce,ke,ht),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ue),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,hn),k.pixelStorei(k.UNPACK_SKIP_ROWS,It),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ri),H===0&&W.generateMipmaps&&k.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,ge.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?br:Vg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?zt:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fT extends d_{}fT.prototype.isWebGL1Renderer=!0;class Rf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=n}clone(){return new Rf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hT extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class pT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=xd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new D;class Gl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new xe(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ka extends kr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const la=new D,ss=new D,as=new D,os=new be,ca=new be,f_=new ct,jo=new D,ua=new D,Yo=new D,cm=new be,_u=new be,um=new be;class Vl extends Ct{constructor(e=new Ka){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new je;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pT(n,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Gl(i,3,0,!1)),rs.setAttribute("uv",new Gl(i,2,3,!1))}this.geometry=rs,this.material=e,this.center=new be(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),f_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-as.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;qo(jo.set(-.5,-.5,0),as,a,ss,r,s),qo(ua.set(.5,-.5,0),as,a,ss,r,s),qo(Yo.set(.5,.5,0),as,a,ss,r,s),cm.set(0,0),_u.set(1,0),um.set(1,1);let o=e.ray.intersectTriangle(jo,ua,Yo,!1,la);if(o===null&&(qo(ua.set(-.5,.5,0),as,a,ss,r,s),_u.set(0,1),o=e.ray.intersectTriangle(jo,Yo,ua,!1,la),o===null))return;const l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||n.push({distance:l,point:la.clone(),uv:Cn.getInterpolation(la,jo,ua,Yo,cm,_u,um,new be),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qo(t,e,n,i,r,s){os.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ca.x=s*os.x-r*os.y,ca.y=r*os.x+s*os.y):ca.copy(os),t.copy(e),t.x+=ca.x,t.y+=ca.y,t.applyMatrix4(f_)}class dm extends xe{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new ct,fm=new ct,$o=[],hm=new Br,mT=new ct,da=new lt,fa=new js;class Ed extends lt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new dm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,mT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ls),hm.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(hm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ls),fa.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(fa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),fm.multiplyMatrices(i,ls),da.matrixWorld=fm,da.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){const l=$o[a];l.instanceId=s,l.object=this,n.push(l)}$o.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new dm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class yt extends kr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pm=new ct,wd=new Kg,Ko=new js,Zo=new D;class Et extends Ct{constructor(e=new je,n=new yt){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;pm.copy(r).invert(),wd.copy(e.ray).applyMatrix4(pm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,v=p;x<v;x++){const m=c.getX(x);Zo.fromBufferAttribute(f,m),mm(Zo,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,v=p;x<v;x++)Zo.fromBufferAttribute(f,x),mm(Zo,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function mm(t,e,n,i,r,s,a){const o=wd.distanceSqToPoint(t);if(o<n){const l=new D;wd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class rr extends fn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cf extends je{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let x=0;const v=[],m=i/2;let u=0;g(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new bt(f,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(p,2));function g(){const y=new D,C=new D;let w=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const M=[],S=b/s,N=S*(n-e)+e;for(let B=0;B<=r;B++){const K=B/r,L=K*l+o,O=Math.sin(L),X=Math.cos(L);C.x=N*O,C.y=-S*i+m,C.z=N*X,f.push(C.x,C.y,C.z),y.set(O,A,X).normalize(),h.push(y.x,y.y,y.z),p.push(K,1-S),M.push(x++)}v.push(M)}for(let b=0;b<r;b++)for(let M=0;M<s;M++){const S=v[M][b],N=v[M+1][b],B=v[M+1][b+1],K=v[M][b+1];d.push(S,N,K),d.push(N,B,K),w+=6}c.addGroup(u,w,0),u+=w}function _(y){const C=x,w=new be,A=new D;let b=0;const M=y===!0?e:n,S=y===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*S,0),h.push(0,S,0),p.push(.5,.5),x++;const N=x;for(let B=0;B<=r;B++){const L=B/r*l+o,O=Math.cos(L),X=Math.sin(L);A.x=M*X,A.y=m*S,A.z=M*O,f.push(A.x,A.y,A.z),h.push(0,S,0),w.x=O*.5+.5,w.y=X*.5*S+.5,p.push(w.x,w.y),x++}for(let B=0;B<r;B++){const K=C+B,L=N+B;y===!0?d.push(L,L+1,K):d.push(L+1,L,K),b+=3}c.addGroup(u,b,y===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cc extends je{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new D,y=new D,C=new D;for(let w=0;w<n.length;w+=3)p(n[w+0],_),p(n[w+1],y),p(n[w+2],C),l(_,y,C,g)}function l(g,_,y,C){const w=C+1,A=[];for(let b=0;b<=w;b++){A[b]=[];const M=g.clone().lerp(y,b/w),S=_.clone().lerp(y,b/w),N=w-b;for(let B=0;B<=N;B++)B===0&&b===w?A[b][B]=M:A[b][B]=M.clone().lerp(S,B/N)}for(let b=0;b<w;b++)for(let M=0;M<2*(w-b)-1;M++){const S=Math.floor(M/2);M%2===0?(h(A[b][S+1]),h(A[b+1][S]),h(A[b][S])):(h(A[b][S+1]),h(A[b+1][S+1]),h(A[b+1][S]))}}function c(g){const _=new D;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function d(){const g=new D;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=m(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;a.push(y,1-C)}x(),f()}function f(){for(let g=0;g<a.length;g+=6){const _=a[g+0],y=a[g+2],C=a[g+4],w=Math.max(_,y,C),A=Math.min(_,y,C);w>.9&&A<.1&&(_<.2&&(a[g+0]+=1),y<.2&&(a[g+2]+=1),C<.2&&(a[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function x(){const g=new D,_=new D,y=new D,C=new D,w=new be,A=new be,b=new be;for(let M=0,S=0;M<s.length;M+=9,S+=6){g.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),b.set(a[S+4],a[S+5]),C.copy(g).add(_).add(y).divideScalar(3);const N=m(C);v(w,S+0,g,N),v(A,S+2,_,N),v(b,S+4,y,N)}}function v(g,_,y,C){C<0&&g.x===1&&(a[_]=g.x-1),y.x===0&&y.z===0&&(a[_]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.vertices,e.indices,e.radius,e.details)}}class uc extends cc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new uc(e.radius,e.detail)}}class bf extends cc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new bf(e.radius,e.detail)}}class dc extends je{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,p=new D,x=new be;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const u=s+m/i*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/n+1)/2,x.y=(p.y/n+1)/2,d.push(x.x,x.y)}f+=h}for(let v=0;v<r;v++){const m=v*(i+1);for(let u=0;u<i;u++){const g=u+m,_=g,y=g+i+1,C=g+i+2,w=g+1;o.push(_,y,w),o.push(y,C,w)}}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class In extends je{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new D,h=new D,p=[],x=[],v=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let y=0;u===0&&a===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const w=C/n;f.x=-e*Math.cos(r+w*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+_*o),x.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(w+y,1-_),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=d[u][g+1],y=d[u][g],C=d[u+1][g],w=d[u+1][g+1];(u!==0||a>0)&&p.push(_,y,w),(u!==i-1||l<Math.PI)&&p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wg,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h_ extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const vu=new ct,gm=new D,_m=new D;class gT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wf,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(gm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vm=new ct,ha=new D,xu=new D;class _T extends gT{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),xu.copy(i.position),xu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(xu),i.updateMatrixWorld(),r.makeTranslation(-ha.x,-ha.y,-ha.z),vm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vm)}}class wi extends h_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _T}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vT extends h_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class xT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);function vi(t,e,n){const r=document.createElement("canvas");r.width=512,r.height=512;const s=r.getContext("2d"),a=s.createImageData(512,512),o=new Uint32Array(a.data.buffer),l=new de(e),c=new de(n);for(let d=0;d<o.length;d++){const f=Math.random();let h,p,x;if(t==="asteroid"){const v=Math.random(),m=v>.6?.3:v<.2?.8:.5;h=l.r*m+c.r*(1-m),p=l.g*m+c.g*(1-m),x=l.b*m+c.b*(1-m)}else if(t==="gas"){const v=Math.floor(d/512),u=(Math.sin(v*.05)*.5+.5)*f;h=l.r*u+c.r*(1-u),p=l.g*u+c.g*(1-u),x=l.b*u+c.b*(1-u)}else{const v=f;h=l.r*v+c.r*(1-v),p=l.g*v+c.g*(1-v),x=l.b*v+c.b*(1-v)}o[d]=255<<24|x*255<<16|p*255<<8|h*255}return s.putImageData(a,0,0),new rr(r)}function Hs(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=128/2,r=n.createRadialGradient(i,i,0,i,i,i);return r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.2,"rgba(255, 255, 255, 0.8)"),r.addColorStop(.5,"rgba(255, 255, 255, 0.2)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=r,n.fillRect(0,0,128,128),new rr(e)}function Za(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=64/2,r=n.createRadialGradient(i,i,0,i,i,i);return r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.3,"rgba(255, 255, 255, 0.9)"),r.addColorStop(.6,"rgba(255, 255, 255, 0.3)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=r,n.fillRect(0,0,64,64),new rr(e)}function yT(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=128/2;n.globalAlpha=.4;for(let r=0;r<5;r++){const s=(Math.random()-.5)*30,a=(Math.random()-.5)*30,o=20+Math.random()*25,l=n.createRadialGradient(i+s,i+a,0,i+s,i+a,o);l.addColorStop(0,"rgba(255, 255, 255, 0.8)"),l.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=l,n.beginPath(),n.arc(i+s,i+a,o,0,Math.PI*2),n.fill()}return new rr(e)}class Fn{constructor(e,n){this.name=e,this.position=n instanceof D?n:new D(n.x||0,n.y||0,n.z||0),this.group=new Hi,this.group.position.copy(this.position),this.group.userData={name:this.name,isSystem:!0},this.targetables=[],this.initialized=!1}init(e,n){this.initialized||(this.build(n),e.add(this.group),this.initialized=!0)}build(e){}update(e,n){}getTargetables(){return this.targetables}getDistanceFrom(e){return this.position.distanceTo(e)}isInRange(e,n=5e4){return this.getDistanceFrom(e)<n}createStar(e,n,i=6){const r=new Hi,s=new In(e,64,64),a=new nr({color:n}),o=new lt(s,a);r.add(o);const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d"),d=c.createRadialGradient(128,128,0,128,128,128);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.2,`rgba(${n>>16&255},${n>>8&255},${n&255},0.8)`),d.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=d,c.fillRect(0,0,256,256);const f=new rr(l),h=new Ka({map:f,color:n,blending:at,transparent:!0}),p=new Vl(h);return p.scale.set(e*i,e*i,1),r.add(p),r}createPlanet(e,n,i,r,s){const a=new In(e,64,64),o=s.createNoiseTexture("rock",i,r),l=new ii({map:o,roughness:.7,metalness:.1}),c=new lt(a,l),d=Math.random()*Math.PI*2;return c.position.set(Math.cos(d)*n,0,Math.sin(d)*n),c.userData={angle:d,distance:n,speed:1/Math.sqrt(n)*300,rotSpeed:.5+Math.random()},c}}class MT extends Fn{constructor(){super("SOLAR",Ai.SOLAR)}build(e){Za();const n=vi("asteroid","#666666","#222222"),i=this.createStar(2e3,16755200,6);i.userData={name:"SUN",isSystem:!0,baseScale:2e3},this.group.add(i),this.targetables.push(i);const r=new wi(16777215,25,5e6,.5);this.group.add(r);const s=[{size:50,dist:4e3,c1:"#8c8c8c",c2:"#5a5a5a",name:"MERCURY"},{size:120,dist:6e3,c1:"#e8cda0",c2:"#c9a84c",name:"VENUS"},{size:130,dist:8e3,c1:"#1a6fdb",c2:"#2d8f4e",name:"EARTH"},{size:70,dist:1e4,c1:"#c1440e",c2:"#8b3a0e",name:"MARS"},{size:1400,dist:16e3,c1:"#d4a56a",c2:"#a0744a",name:"JUPITER"},{size:1200,dist:22e3,c1:"#e8d191",c2:"#c4a35a",name:"SATURN",hasRings:!0},{size:500,dist:28e3,c1:"#a8e0e8",c2:"#6bb8c4",name:"URANUS"},{size:480,dist:32e3,c1:"#3355cc",c2:"#1a2d8f",name:"NEPTUNE"}];this.planets=[],s.forEach(a=>{const o=this.createPlanetMesh(a.size,a.dist,a.c1,a.c2,a.name);a.hasRings&&this.addSaturnRings(o,a.size),this.group.add(o),this.planets.push(o),this.targetables.push(o)}),this.createAsteroidBelt(3e3,12e3,14e3,n)}createPlanetMesh(e,n,i,r,s){const a=new In(e,64,64),o=vi("rock",i,r),l=new ii({map:o,roughness:.7,metalness:.1}),c=new lt(a,l),d=Math.random()*Math.PI*2;return c.position.set(Math.cos(d)*n,0,Math.sin(d)*n),c.userData={name:s,type:"planet",angle:d,distance:n,speed:1/Math.sqrt(n)*300,rotSpeed:.5+Math.random()},c}addSaturnRings(e,n){const i=new dc(n*1.4,n*2.2,64),r=vi("gas","#aa8855","#554433"),s=new ii({map:r,side:bn,transparent:!0,opacity:.8}),a=new lt(i,s);a.rotation.x=Math.PI/2,e.add(a)}createAsteroidBelt(e,n,i,r){const s=new uc(20,0),a=new ii({map:r,roughness:.8,color:new de("#aaaaaa").multiplyScalar(3),emissive:new de(2236962)}),o=new Ed(s,a,e),l=new Ct;this.beltData=[];for(let c=0;c<e;c++){const d=Math.random()*Math.PI*2,f=n+Math.random()*(i-n),h=(Math.random()-.5)*1e3;l.position.set(Math.cos(d)*f,h,Math.sin(d)*f),l.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const p=Math.random()*2+.5;l.scale.set(p,p,p),l.updateMatrix(),o.setMatrixAt(c,l.matrix),this.beltData.push({angle:d,dist:f,y:h,speed:1/Math.sqrt(f)*200,rotSpeed:Math.random()})}this.asteroidMesh=o,this.asteroidDummy=l,this.group.add(o)}update(e,n){if(this.planets&&this.planets.forEach(i=>{const r=i.userData;r.angle+=r.speed*e*.1,i.position.x=Math.cos(r.angle)*r.distance,i.position.z=Math.sin(r.angle)*r.distance,i.rotation.y+=r.rotSpeed*e}),this.asteroidMesh&&this.beltData){for(let i=0;i<this.beltData.length;i++){const r=this.beltData[i];r.angle+=r.speed*e*.1,this.asteroidDummy.position.set(Math.cos(r.angle)*r.dist,r.y,Math.sin(r.angle)*r.dist),this.asteroidDummy.rotation.set(n*r.rotSpeed,n*r.rotSpeed,0),this.asteroidDummy.scale.set(i%3+.5,i%3+.5,i%3+.5),this.asteroidDummy.updateMatrix(),this.asteroidMesh.setMatrixAt(i,this.asteroidDummy.matrix)}this.asteroidMesh.instanceMatrix.needsUpdate=!0}}}class ST extends Fn{constructor(){super("SAGITTARIUS A*",Ai.SGR_A_STAR)}build(e){const n=`
            varying vec3 vWorldPosition;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPosition.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPosition;
            }
        `,i=`
            uniform float iTime;
            uniform vec2 iResolution;
            uniform vec3 cameraPos;
            uniform vec3 bhPos;
            
            varying vec3 vWorldPosition;
            varying vec2 vUv;

            #define MAX_STEPS 120
            #define BH_RADIUS 1.5
            #define EVENT_HORIZON_FADE 1.55 
            #define DISK_INNER 2.6
            #define DISK_OUTER 14.0
            #define DISK_HEIGHT 0.15
            
            // --- Noise Functions ---
            float hash(vec3 p) {
                p = fract(p * 0.3183099 + .1);
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }
            
            float hash2(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float noise(in vec3 x) {
                vec3 i = floor(x);
                vec3 f = fract(x);
                f = f * f * (3.0 - 2.0 * f);
                return mix(mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
            }

            float fbm(vec3 p) {
                float v = 0.0;
                float a = 0.5;
                vec3 shift = vec3(100.0);
                for (int i = 0; i < 5; ++i) {
                    v += a * noise(p);
                    p = p * 2.0 + shift;
                    a *= 0.5;
                }
                return v;
            }

            float voronoi(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                float res = 0.0;
                for(int z=-1; z<=1; z++) {
                    for(int y=-1; y<=1; y++) {
                        for(int x=-1; x<=1; x++) {
                            vec3 b = vec3(float(x), float(y), float(z));
                            vec3 r = vec3(b) - f + hash(i + b);
                            float d = dot(r,r);
                            res += exp( -16.0*d );
                        }
                    }
                }
                return res;
            }

            vec3 getDiskColor(float intensity, float temp) {
                vec3 colorLow = vec3(0.8, 0.08, 0.0);
                vec3 colorMid = vec3(1.0, 0.55, 0.08);
                vec3 colorHigh = vec3(1.0, 0.92, 0.85);
                vec3 col = mix(colorLow, colorMid, smoothstep(0.0, 0.35, temp));
                col = mix(col, colorHigh, smoothstep(0.35, 1.0, temp));
                return col * intensity * 12.0; 
            }

            void main() {
                // Calculate ray from camera through this fragment
                vec3 ro = cameraPos;
                vec3 rd = normalize(vWorldPosition - ro);
                
                // Transform to black hole local space
                vec3 pos = (ro - bhPos) / 5000.0;
                vec3 dir = rd;
                
                // Dithering
                float dither = hash2(vUv + iTime) * 0.08; 
                pos += dir * dither; 

                vec3 col = vec3(0.0);
                float totalDist = 0.0;
                bool hitBH = false;
                float closestDistToBH = 9999.0;
                float accumulatedAlpha = 0.0;

                // --- Ray Marching ---
                for(int i = 0; i < MAX_STEPS; i++) {
                    float distToCenter = length(pos);
                    closestDistToBH = min(closestDistToBH, distToCenter);
                    
                    // Gravitational Lensing
                    float bendStrength = 0.15; 
                    vec3 toCenter = normalize(-pos);
                    float grav = bendStrength / (distToCenter * distToCenter + 0.01); 
                    dir = normalize(dir + toCenter * grav);
                    
                    float stepSize = max(0.02, distToCenter * 0.03); 
                    if (distToCenter < BH_RADIUS * 2.0) stepSize = 0.05; 
                    if (distToCenter < BH_RADIUS * 1.2) stepSize = 0.02;

                    pos += dir * stepSize;
                    totalDist += stepSize;

                    // --- Volumetric Disk Sampling ---
                    float distToPlane = abs(pos.y);
                    
                    if(distToPlane < DISK_HEIGHT * 4.0 && distToCenter > DISK_INNER && distToCenter < DISK_OUTER) {
                        float radialFade = smoothstep(DISK_INNER, DISK_INNER + 0.5, distToCenter) * (1.0 - smoothstep(DISK_OUTER - 4.0, DISK_OUTER, distToCenter));
                        
                        float angle = atan(pos.z, pos.x);
                        float rotSpeed = 5.0 / (distToCenter + 0.1);
                        float animAngle = angle + iTime * rotSpeed;
                        
                        vec3 noisePos = vec3(cos(animAngle)*distToCenter, sin(animAngle)*distToCenter, pos.y * 1.5);
                        float dens = fbm(noisePos * 0.9);
                        
                        float rocks = voronoi(noisePos * 2.5 + 10.0);
                        float rockSolid = smoothstep(0.7, 0.9, rocks); 
                        
                        float rockStart = DISK_INNER + 2.5; 
                        float rockFade = smoothstep(rockStart, rockStart + 3.0, distToCenter);
                        rockSolid *= rockFade;

                        float verticalFade = exp(-pow(distToPlane / (DISK_HEIGHT), 2.0));
                        float intensity = dens * radialFade * verticalFade;
                        
                        if (intensity > 0.001 || rockSolid > 0.1) {
                            vec3 diskVel = normalize(vec3(-pos.z, 0.0, pos.x));
                            float doppler = dot(diskVel, -normalize(pos - (ro - bhPos) / 5000.0));
                            
                            float beam = pow(1.0 + doppler * 0.85, 2.5); 
                            float temperature = intensity + (doppler * 0.4);
                            
                            vec3 particleCol = vec3(0.0);
                            
                            if (rockSolid > 0.1) {
                                particleCol = vec3(0.02, 0.01, 0.0);
                                intensity += rockSolid * 2.0; 
                            } else {
                                particleCol = getDiskColor(intensity, clamp(temperature, 0.0, 1.2));
                            }
                            
                            particleCol *= beam;
                            
                            float absorption = 0.18 * intensity;
                            col += particleCol * absorption * (2.0 - length(col) * 0.4);
                            accumulatedAlpha += absorption;
                        }
                    }

                    // --- Volumetric Event Horizon ---
                    if(distToCenter < EVENT_HORIZON_FADE) {
                        float voidDensity = smoothstep(EVENT_HORIZON_FADE, BH_RADIUS, distToCenter);
                        float voidAbsorption = voidDensity * 10.0 * stepSize;
                        accumulatedAlpha += voidAbsorption;
                    }

                    if(accumulatedAlpha >= 1.0) {
                        hitBH = (distToCenter < BH_RADIUS * 1.2); 
                        break;
                    }
                    
                    if(distToCenter < BH_RADIUS * 0.8) {
                        hitBH = true;
                        break;
                    }

                    if(totalDist > 60.0) break;
                }

                // --- Post-Process ---
                
                // Photon Ring
                float ringWidth = 0.18;
                if (!hitBH && closestDistToBH < BH_RADIUS + ringWidth) {
                    float ringIntensity = 1.0 - smoothstep(BH_RADIUS, BH_RADIUS + ringWidth, closestDistToBH);
                    col += vec3(1.0, 0.95, 0.8) * pow(ringIntensity, 3.0) * 7.0;
                }

                // Inner edge warm glow
                if (!hitBH && closestDistToBH < BH_RADIUS + 0.5) {
                    float edgeGlow = 1.0 - smoothstep(BH_RADIUS, BH_RADIUS + 0.5, closestDistToBH);
                    col += vec3(1.0, 0.7, 0.3) * edgeGlow * 3.0;
                }

                // Glow
                vec3 glowColor = vec3(1.0, 0.6, 0.2); 
                float glowStrength = hitBH ? 0.0 : 0.8 / (closestDistToBH - BH_RADIUS + 0.3);
                col += glowColor * glowStrength * 0.8;

                // Tone Mapping (ACES)
                col *= 2.5; 
                const float a = 2.51;
                const float b = 0.03;
                const float c = 2.43;
                const float d = 0.59;
                const float e = 0.14;
                col = clamp((col * (a * col + b)) / (col * (c * col + d) + e), 0.0, 1.0);
                
                col = pow(col, vec3(1.0 / 2.2));
                
                gl_FragColor = vec4(col, min(accumulatedAlpha + glowStrength * 0.5, 1.0));
            }
        `;this.bhMaterial=new ir({vertexShader:n,fragmentShader:i,uniforms:{iTime:{value:0},iResolution:{value:new be(window.innerWidth,window.innerHeight)},cameraPos:{value:new D},bhPos:{value:this.position.clone()}},transparent:!0,side:Yt,blending:Ar,depthWrite:!1});const r=new lt(new Ys(15e4,15e4,15e4),this.bhMaterial);r.position.copy(this.position),r.userData={name:"GARGANTUA",isSystem:!0,baseScale:5e3},this.group.add(r),this.targetables.push(r),window.addEventListener("resize",()=>{this.bhMaterial&&this.bhMaterial.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight)})}update(e,n,i){this.bhMaterial&&(this.bhMaterial.uniforms.iTime.value=n*.3,i&&this.bhMaterial.uniforms.cameraPos.value.copy(i))}}class ET extends Fn{constructor(){super("PROXIMA CENTAURI",Ai.PROXIMA)}build(e){const n=this.createStar(800,16724736,8);n.userData={name:"PROXIMA",isSystem:!0,baseScale:800},this.group.add(n),this.targetables.push(n);const i=new wi(16729088,8,2e5,.5);this.group.add(i);const r=this.createProximaB();this.group.add(r),this.targetables.push(r),this.planet=r}createProximaB(){const e=new In(100,64,64),n=vi("rock","#664422","#332211"),i=new ii({map:n,roughness:.8,metalness:.2}),r=new lt(e,i);return r.position.set(3e3,0,0),r.userData={name:"PROXIMA B",type:"planet",angle:0,distance:3e3,speed:150,rotSpeed:.8},r}update(e,n){if(this.planet){const i=this.planet.userData;i.angle+=i.speed*e*.1,this.planet.position.x=Math.cos(i.angle)*i.distance,this.planet.position.z=Math.sin(i.angle)*i.distance,this.planet.rotation.y+=i.rotSpeed*e}}}class wT extends Fn{constructor(){super("SIRIUS",Ai.SIRIUS)}build(e){this.orbitRadius=2e3,this.orbitSpeed=.5,this.orbitAngle=0,this.siriusA=this.createStar(1500,11193599,8),this.siriusA.userData={name:"SIRIUS A",isSystem:!0,baseScale:1500},this.group.add(this.siriusA),this.targetables.push(this.siriusA),this.lightA=new wi(11193599,30,5e5,.5),this.siriusA.add(this.lightA),this.siriusB=this.createStar(200,16777215,4),this.siriusB.userData={name:"SIRIUS B",type:"star",baseScale:200},this.group.add(this.siriusB),this.targetables.push(this.siriusB),this.lightB=new wi(16777215,5,1e5,.5),this.siriusB.add(this.lightB);const n=new dc(this.orbitRadius-50,this.orbitRadius+50,64),i=new nr({color:4491519,transparent:!0,opacity:.15,side:bn}),r=new lt(n,i);r.rotation.x=Math.PI/2,this.group.add(r)}update(e,n){this.orbitAngle+=this.orbitSpeed*e,this.siriusA.position.x=Math.cos(this.orbitAngle)*this.orbitRadius*.3,this.siriusA.position.z=Math.sin(this.orbitAngle)*this.orbitRadius*.3,this.siriusB.position.x=-Math.cos(this.orbitAngle)*this.orbitRadius,this.siriusB.position.z=-Math.sin(this.orbitAngle)*this.orbitRadius}}class TT extends Fn{constructor(){super("TRAPPIST-1",Ai.TRAPPIST)}build(e){const n=this.createStar(400,16720384,6);n.userData={name:"TRAPPIST-1",isSystem:!0,baseScale:400},this.group.add(n),this.targetables.push(n);const i=new wi(16724736,3,1e5,.5);this.group.add(i);const r=[{name:"TRAPPIST-1b",size:80,dist:800,c1:"#553322",c2:"#221100"},{name:"TRAPPIST-1c",size:85,dist:1100,c1:"#664433",c2:"#332211"},{name:"TRAPPIST-1d",size:60,dist:1400,c1:"#445566",c2:"#223344"},{name:"TRAPPIST-1e",size:75,dist:1700,c1:"#224488",c2:"#113355"},{name:"TRAPPIST-1f",size:90,dist:2e3,c1:"#336699",c2:"#224466"},{name:"TRAPPIST-1g",size:95,dist:2300,c1:"#4477aa",c2:"#335588"},{name:"TRAPPIST-1h",size:55,dist:2600,c1:"#556688",c2:"#334455"}];this.planets=[],r.forEach((s,a)=>{const o=this.createPlanetMesh(s);o.userData.angle=a/7*Math.PI*2,o.position.x=Math.cos(o.userData.angle)*s.dist,o.position.z=Math.sin(o.userData.angle)*s.dist,this.group.add(o),this.planets.push(o),this.targetables.push(o)})}createPlanetMesh(e){const n=new In(e.size,64,64),i=vi("rock",e.c1,e.c2),r=new ii({map:i,roughness:.7,metalness:.1}),s=new lt(n,r);return s.userData={name:e.name,type:"planet",angle:0,distance:e.dist,speed:1/Math.sqrt(e.dist)*500,rotSpeed:.3+Math.random()*.5},s}update(e,n){this.planets.forEach(i=>{const r=i.userData;r.angle+=r.speed*e*.1,i.position.x=Math.cos(r.angle)*r.distance,i.position.z=Math.sin(r.angle)*r.distance,i.rotation.y+=r.rotSpeed*e})}}class AT extends Fn{constructor(){super("VEGA",Ai.VEGA)}build(e){const n=this.createStar(2500,10079487,10);n.userData={name:"VEGA",isSystem:!0,baseScale:2500},this.group.add(n),this.targetables.push(n);const i=new wi(11197951,40,8e5,.5);this.group.add(i),this.createDebrisDisk()}createDebrisDisk(){const e=new je,n=5e3,i=new Float32Array(n*3),r=new Float32Array(n*3);for(let o=0;o<n;o++){const l=Math.random()*Math.PI*2,c=8e3+Math.random()*12e3,d=(Math.random()-.5)*500;i[o*3]=Math.cos(l)*c,i[o*3+1]=d,i[o*3+2]=Math.sin(l)*c;const f=new de().setHSL(.08,.6,.3+Math.random()*.2);r[o*3]=f.r,r[o*3+1]=f.g,r[o*3+2]=f.b}e.setAttribute("position",new xe(i,3)),e.setAttribute("color",new xe(r,3));const s=new yt({size:200,vertexColors:!0,transparent:!0,opacity:.6,blending:at,depthWrite:!1}),a=new Et(e,s);a.rotation.x=Math.PI/6,this.debrisDisk=a,this.group.add(a)}update(e,n){this.debrisDisk&&(this.debrisDisk.rotation.y+=e*.02)}}class RT extends Fn{constructor(){super("KEPLER-22",Ai.KEPLER22)}build(e){const n=this.createStar(1800,16768392,7);n.userData={name:"KEPLER-22",isSystem:!0,baseScale:1800},this.group.add(n),this.targetables.push(n);const i=new wi(16772761,20,4e5,.5);this.group.add(i),this.kepler22b=this.createKepler22b(),this.group.add(this.kepler22b),this.targetables.push(this.kepler22b),this.planets=[this.kepler22b];const r=this.createPlanet(80,3e3,"#aa8866","#665544","KEPLER-22c");this.group.add(r),this.planets.push(r),this.targetables.push(r);const s=this.createPlanet(600,12e3,"#ddbb88","#aa8855","KEPLER-22d");this.group.add(s),this.planets.push(s),this.targetables.push(s)}createKepler22b(){const e=new In(200,64,64),n=vi("atmosphere","#4488cc","#225588"),i=new ii({map:n,roughness:.3,metalness:.1}),r=new lt(e,i);r.position.set(7e3,0,0),r.userData={name:"KEPLER-22b",type:"planet",angle:0,distance:7e3,speed:80,rotSpeed:.4};const s=new In(220,32,32),a=new nr({color:4491468,transparent:!0,opacity:.15,side:Yt}),o=new lt(s,a);return r.add(o),r}createPlanet(e,n,i,r,s){const a=new In(e,64,64),o=vi("rock",i,r),l=new ii({map:o,roughness:.7,metalness:.1}),c=new lt(a,l),d=Math.random()*Math.PI*2;return c.position.set(Math.cos(d)*n,0,Math.sin(d)*n),c.userData={name:s,type:"planet",angle:d,distance:n,speed:1/Math.sqrt(n)*200,rotSpeed:.5+Math.random()},c}update(e,n){this.planets.forEach(i=>{const r=i.userData;r.angle+=r.speed*e*.1,i.position.x=Math.cos(r.angle)*r.distance,i.position.z=Math.sin(r.angle)*r.distance,i.rotation.y+=r.rotSpeed*e})}}class CT extends Fn{constructor(){super("CRAB NEBULA",Ai.CRAB_NEBULA)}build(e){const n=Hs(),i=this.createPulsar();this.group.add(i),this.targetables.push(i),this.pulsar=i,this.pulsarLight=new wi(11197951,60,4e5,.5),i.add(this.pulsarLight),this.createSynchrotronGlow(),this.createInnerFilaments(n),this.createOuterFilaments(n),this.createEmissionFringe(n),this.createWispyTendrils(n)}createPulsar(){const e=new In(50,32,32),n=new nr({color:16777215}),i=new lt(e,n);i.userData={name:"CRAB PULSAR",isSystem:!0,baseScale:50};const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=s.createRadialGradient(128,128,0,128,128,128);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.1,"rgba(200,220,255,0.9)"),a.addColorStop(.4,"rgba(100,150,255,0.4)"),a.addColorStop(.7,"rgba(50,80,200,0.1)"),a.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=a,s.fillRect(0,0,256,256);const o=new rr(r),l=new Ka({map:o,blending:at,transparent:!0}),c=new Vl(l);c.scale.set(5e3,5e3,1),i.add(c);const d=new Cf(50,250,25e3,16,1,!0),f=new nr({color:8956671,transparent:!0,opacity:.35,side:bn}),h=new lt(d,f);h.position.y=12500,i.add(h);const p=new lt(d,f);return p.position.y=-12500,p.rotation.x=Math.PI,i.add(p),i}createSynchrotronGlow(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(180,200,255,0.7)"),i.addColorStop(.2,"rgba(120,160,255,0.4)"),i.addColorStop(.5,"rgba(80,100,200,0.15)"),i.addColorStop(.8,"rgba(40,50,120,0.05)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,256,256);const r=new rr(e),s=new Ka({map:r,blending:at,transparent:!0,opacity:.8}),a=new Vl(s);a.scale.set(2e4,15e3,1),this.group.add(a)}createInnerFilaments(e){const n=new je,i=22e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),d=1+Math.sin(l*2.3)*.5+Math.cos(c*1.7)*.3,f=.55+Math.cos(l*3.1+c*.8)*.25,h=1.15+Math.sin(l*1.5+c*2.4)*.45,p=Math.pow(Math.random(),.5)*22e3,x=Math.sin(l*5.3+c*2.7)*.35,v=Math.cos(l*3.1-c*4.2)*.2,m=Math.sin(l*7.8+c*1.3)*.12,u=p*(1+x+v+m);r[o*3]=u*Math.sin(c)*Math.cos(l)*d,r[o*3+1]=u*Math.sin(c)*Math.sin(l)*f,r[o*3+2]=u*Math.cos(c)*h;const g=new de,_=p/22e3;_<.2?g.setHSL(.6,.7,.75+Math.random()*.2):_<.4?g.setHSL(.58+Math.random()*.06,.75,.6+Math.random()*.15):_<.65?g.setHSL(.45+Math.random()*.1,.7,.45+Math.random()*.15):g.setHSL(.03+Math.random()*.05,.85,.4+Math.random()*.15),s[o*3]=g.r,s[o*3+1]=g.g,s[o*3+2]=g.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:800,map:e,vertexColors:!0,transparent:!0,opacity:.75,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createOuterFilaments(e){const n=new je,i=5e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),d=15e3+Math.random()*22e3,f=Math.sin(l*3.7)*Math.cos(c*2.9)*8e3+Math.sin(l*6.1+c*1.8)*4e3,h=d+f,p=1.35+Math.sin(l*.7)*.2,x=.65,v=.85+Math.cos(l*1.3)*.15;r[o*3]=h*Math.sin(c)*Math.cos(l)*p,r[o*3+1]=h*Math.sin(c)*Math.sin(l)*x,r[o*3+2]=h*Math.cos(c)*v;const m=new de().setHSL(.82+Math.random()*.08,.6+Math.random()*.2,.3+Math.random()*.15);s[o*3]=m.r,s[o*3+1]=m.g,s[o*3+2]=m.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:2500,map:e,vertexColors:!0,transparent:!0,opacity:.3,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createEmissionFringe(e){const n=new je,i=3e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),d=18e3+Math.random()*15e3,f=Math.sin(l*4.3+c*2.1)*5e3;r[o*3]=(d+f)*Math.sin(c)*Math.cos(l)*1.3,r[o*3+1]=(d+f)*Math.sin(c)*Math.sin(l)*.6,r[o*3+2]=(d+f)*Math.cos(c)*.9;const h=new de;Math.random()<.6?h.setHSL(0+Math.random()*.03,.8,.3+Math.random()*.15):h.setHSL(.42+Math.random()*.05,.7,.3+Math.random()*.12),s[o*3]=h.r,s[o*3+1]=h.g,s[o*3+2]=h.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:1500,map:e,vertexColors:!0,transparent:!0,opacity:.25,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createWispyTendrils(e){const n=new je,i=12,r=200,s=i*r,a=new Float32Array(s*3),o=new Float32Array(s*3);for(let c=0;c<i;c++){const d=Math.random()*Math.PI*2,f=Math.random()*Math.PI;let h=Math.sin(f)*Math.cos(d)*15e3,p=Math.sin(f)*Math.sin(d)*8e3,x=Math.cos(f)*12e3;const v=h/15e3,m=p/15e3,u=x/15e3;for(let g=0;g<r;g++){const _=c*r+g;h+=v*(300+Math.random()*800)+(Math.random()-.5)*400,p+=m*(200+Math.random()*500)+(Math.random()-.5)*300,x+=u*(300+Math.random()*800)+(Math.random()-.5)*400,a[_*3]=h,a[_*3+1]=p,a[_*3+2]=x;const y=g/r,C=new de().setHSL(.05+y*.02,.6-y*.3,.35-y*.2);o[_*3]=C.r,o[_*3+1]=C.g,o[_*3+2]=C.b}}n.setAttribute("position",new xe(a,3)),n.setAttribute("color",new xe(o,3));const l=new yt({size:600,map:e,vertexColors:!0,transparent:!0,opacity:.35,blending:at,depthWrite:!1});this.group.add(new Et(n,l))}update(e,n){this.pulsar&&(this.pulsar.rotation.y+=e*5,this.pulsar.rotation.x+=e*.5),this.pulsarLight&&(this.pulsarLight.intensity=40+Math.sin(n*50)*25)}}class bT extends Fn{constructor(){super("SPACE DEBRIS",{x:0,y:0,z:0})}build(e){const n=vi("asteroid","#888888","#444444");[{x:5e4,y:1e4,z:5e4},{x:-6e4,y:-5e3,z:4e4},{x:3e4,y:15e3,z:-7e4},{x:-4e4,y:8e3,z:-6e4},{x:12e4,y:-2e4,z:8e4},{x:-15e4,y:3e4,z:-5e4},{x:8e4,y:-1e4,z:15e4}].forEach((r,s)=>{this.createDebrisCluster(r,200+Math.floor(Math.random()*300),n)}),this.createScatteredRocks(n)}createDebrisCluster(e,n,i){const r=new uc(50,0),s=new ii({map:i,roughness:.9,metalness:.3,color:new de("#aaaaaa")}),a=new Ed(r,s,n),o=new Ct;for(let l=0;l<n;l++){const c=Math.pow(Math.random(),.5)*5e3,d=Math.random()*Math.PI*2,f=Math.acos(Math.random()*2-1);o.position.set(e.x+c*Math.sin(f)*Math.cos(d),e.y+c*Math.sin(f)*Math.sin(d),e.z+c*Math.cos(f)),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const h=.5+Math.random()*3;o.scale.set(h,h*(.5+Math.random()*.5),h*(.5+Math.random()*.5)),o.updateMatrix(),a.setMatrixAt(l,o.matrix)}this.group.add(a)}createScatteredRocks(e){const n=new bf(200,1),i=new ii({map:e,roughness:.85,metalness:.4,color:new de("#666666")}),r=100,s=new Ed(n,i,r),a=new Ct;for(let o=0;o<r;o++){const l=3e4+Math.random()*17e4,c=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);a.position.set(l*Math.sin(d)*Math.cos(c),l*Math.sin(d)*Math.sin(c),l*Math.cos(d)),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const f=1+Math.random()*5;a.scale.set(f,f*.7,f*.8),a.updateMatrix(),s.setMatrixAt(o,a.matrix)}this.group.add(s)}update(e,n){}}class PT extends Fn{constructor(){super("NEBULA CLOUDS",{x:0,y:0,z:0})}build(e){const n=Hs(),i=yT();[{pos:{x:-8e4,y:2e3,z:3e4},hue:.8,stretch:{x:1.5,y:.6,z:1.2}},{pos:{x:2e5,y:-1e3,z:15e4},hue:.55,stretch:{x:.8,y:1.3,z:1}},{pos:{x:6e4,y:1500,z:1e5},hue:.08,stretch:{x:1.2,y:.7,z:1.4}},{pos:{x:-12e4,y:-800,z:-1e5},hue:.9,stretch:{x:1,y:1.5,z:.6}},{pos:{x:18e4,y:500,z:-12e4},hue:.6,stretch:{x:1.4,y:.8,z:1.1}},{pos:{x:-3e5,y:1200,z:18e4},hue:.75,stretch:{x:1.1,y:.9,z:1.3}},{pos:{x:-5e4,y:-500,z:-4e4},hue:.02,stretch:{x:.9,y:1.2,z:.8}},{pos:{x:32e4,y:800,z:-25e4},hue:.45,stretch:{x:1.3,y:.6,z:1}}].forEach(s=>{this.createRealisticNebulaCloud(s.pos,s.hue,s.stretch,n,i)})}createRealisticNebulaCloud(e,n,i,r,s){const a=new Hi;a.position.set(e.x,e.y,e.z);const o=new je,l=3e3,c=new Float32Array(l*3),d=new Float32Array(l*3);for(let b=0;b<l;b++){const M=Math.random()*Math.PI*2,S=Math.acos(Math.random()*2-1),N=Math.pow(Math.random(),.6)*7e3,B=Math.sin(M*2.7+S*1.3)*.35,K=Math.cos(M*4.1-S*2.8)*.2,L=Math.sin(M*1.1+S*5.2)*.15,O=1+B+K+L,X=N*O;c[b*3]=X*Math.sin(S)*Math.cos(M)*i.x,c[b*3+1]=X*Math.sin(S)*Math.sin(M)*i.y,c[b*3+2]=X*Math.cos(S)*i.z;const Y=N/7e3,I=n+(Y-.5)*.12,F=.7-Y*.2,z=.5-Y*.2,q=new de().setHSL(I+(Math.random()-.5)*.08,F,z+Math.random()*.15);d[b*3]=q.r,d[b*3+1]=q.g,d[b*3+2]=q.b}o.setAttribute("position",new xe(c,3)),o.setAttribute("color",new xe(d,3));const f=new yt({size:1800,map:r,vertexColors:!0,transparent:!0,opacity:.6,blending:at,depthWrite:!1});a.add(new Et(o,f));const h=new je,p=1500,x=new Float32Array(p*3),v=new Float32Array(p*3),m=6+Math.floor(Math.random()*5),u=[];for(let b=0;b<m;b++)u.push({theta:Math.random()*Math.PI*2,phi:Math.random()*Math.PI,length:8e3+Math.random()*12e3,width:1500+Math.random()*2500});for(let b=0;b<p;b++){const M=u[Math.floor(Math.random()*m)],S=Math.pow(Math.random(),.7),N=S*M.length,B=M.width*(1-S*.5)*(Math.random()-.5),K=M.width*.4*(Math.random()-.5),L=Math.sin(M.phi)*Math.cos(M.theta),O=Math.cos(M.phi),X=Math.sin(M.phi)*Math.sin(M.theta),Y=-Math.sin(M.theta),I=Math.cos(M.theta);x[b*3]=(L*N+Y*B)*i.x,x[b*3+1]=(O*N+K)*i.y,x[b*3+2]=(X*N+I*B)*i.z;const F=1-S,z=new de().setHSL(n+F*.1,.5+F*.2,.2+F*.15);v[b*3]=z.r,v[b*3+1]=z.g,v[b*3+2]=z.b}h.setAttribute("position",new xe(x,3)),h.setAttribute("color",new xe(v,3));const g=new yt({size:2200,map:s,vertexColors:!0,transparent:!0,opacity:.3,blending:at,depthWrite:!1});a.add(new Et(h,g));const _=new je,y=600,C=new Float32Array(y*3),w=new Float32Array(y*3);for(let b=0;b<y;b++){const M=Math.random()*Math.PI*2,S=Math.acos(Math.random()*2-1),N=6e3+Math.random()*1e4,B=Math.sin(M*1.7)*Math.cos(S*2.3)*3e3;C[b*3]=(N+B)*Math.sin(S)*Math.cos(M)*i.x,C[b*3+1]=(N+B)*Math.sin(S)*Math.sin(M)*i.y*.7,C[b*3+2]=(N+B)*Math.cos(S)*i.z;const K=new de().setHSL(n+.05,.4,.15);w[b*3]=K.r,w[b*3+1]=K.g,w[b*3+2]=K.b}_.setAttribute("position",new xe(C,3)),_.setAttribute("color",new xe(w,3));const A=new yt({size:5e3,map:r,vertexColors:!0,transparent:!0,opacity:.12,blending:at,depthWrite:!1});a.add(new Et(_,A)),this.group.add(a)}update(e,n){this.group.rotation.y+=e*.002}}class LT extends Fn{constructor(){super("MILKY WAY",{x:0,y:0,z:0})}build(e){const n=Za(),i=Hs();this.group.rotation.x=Math.PI/10,this.group.rotation.z=Math.PI/14,this.createArmDustFill(i),this.createSpiralArms(n),this.createCentralBar(n),this.createGalacticRing(i),this.createDiskStars(n)}_getArms(){return[{offset:0,tightness:.18,strength:1},{offset:Math.PI*.55,tightness:.17,strength:.9},{offset:Math.PI*1.05,tightness:.2,strength:.85},{offset:Math.PI*1.55,tightness:.19,strength:.75}]}_armPoint(e,n,i){const r=14e4+n*65e4,s=e.offset+Math.log(r/14e4)/e.tightness,a=(14e4*(1-n*.92)+12e3)*e.strength*i,o=a/r,l=(Math.random()-.5)*o,c=.35+n*.5,d=(Math.random()-.5)*a*c,f=s+l,h=r+d,p=(Math.random()-.5)*(7e3*(1-n*.6));return{x:Math.cos(f)*h,y:p,z:Math.sin(f)*h}}createArmDustFill(e){const n=new je,i=2e4,r=new Float32Array(i*3),s=new Float32Array(i*3),a=this._getArms();for(let l=0;l<i;l++){const c=a[l%4],d=Math.pow(Math.random(),.4),f=this._armPoint(c,d,1.1);r[l*3]=f.x,r[l*3+1]=f.y,r[l*3+2]=f.z;const h=(1-d*.8)*.3,p=new de().setHSL(.08+Math.random()*.06,.4,h);s[l*3]=p.r,s[l*3+1]=p.g,s[l*3+2]=p.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const o=new yt({size:45e3,map:e,vertexColors:!0,transparent:!0,opacity:.25,blending:at,depthWrite:!1});this.group.add(new Et(n,o))}createSpiralArms(e){const n=new je,i=4e4,r=new Float32Array(i*3),s=new Float32Array(i*3),a=this._getArms();for(let l=0;l<i;l++){const c=a[l%4],d=Math.pow(Math.random(),.5),f=this._armPoint(c,d,.8);r[l*3]=f.x,r[l*3+1]=f.y,r[l*3+2]=f.z;const h=new de;if(d<.15)h.setHSL(.12,.8,.8-d*2);else{const p=.6*(1-(d-.15)*1.1);h.setHSL(.6,.6,Math.max(.05,p))}s[l*3]=h.r,s[l*3+1]=h.g,s[l*3+2]=h.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const o=new yt({size:5e3,map:e,vertexColors:!0,transparent:!0,opacity:.8,blending:at,depthWrite:!1});this.group.add(new Et(n,o))}createGalacticRing(e){const n=new je,i=15e3,r=new Float32Array(i*3),s=new Float32Array(i*3),a=45e3,o=135e3;for(let c=0;c<i;c++){const d=Math.random(),f=a+Math.pow(d,1.5)*(o-a),h=Math.random()*Math.PI*2,p=(Math.random()-.5)*6e3*Math.sin(Math.PI*d);r[c*3]=Math.cos(h)*f,r[c*3+1]=p,r[c*3+2]=Math.sin(h)*f;const x=new de().setHSL(.12,.8,.5+Math.random()*.4);s[c*3]=x.r,s[c*3+1]=x.g,s[c*3+2]=x.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const l=new yt({size:8e3,map:e,vertexColors:!0,transparent:!0,opacity:.75,blending:at,depthWrite:!1});this.group.add(new Et(n,l))}createCentralBar(e){const n=new je,i=12e3,r=new Float32Array(i*3),s=new Float32Array(i*3),a=Math.PI*.15,o=45e3,l=13e4,c=45e3;for(let f=0;f<i;f++){const h=Math.random()>.5?1:-1,p=(o+Math.random()*(l-o))*h,x=(Math.random()-.5)*c;r[f*3]=Math.cos(a)*p-Math.sin(a)*x,r[f*3+1]=(Math.random()-.5)*4e3,r[f*3+2]=Math.sin(a)*p+Math.cos(a)*x;const v=new de().setHSL(.1,.6,.6);s[f*3]=v.r,s[f*3+1]=v.g,s[f*3+2]=v.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const d=new yt({size:5e3,map:e,vertexColors:!0,transparent:!0,opacity:.6,blending:at,depthWrite:!1});this.group.add(new Et(n,d))}createDiskStars(e){const n=new je,i=12e3,r=new Float32Array(i*3),s=new Float32Array(i*3);let a=0;for(let l=0;l<i;l++){const c=14e4+Math.random()*65e4,d=Math.random()*Math.PI*2;if(Math.random()>Math.exp(-c/4e5)*3)continue;r[a*3]=Math.cos(d)*c,r[a*3+1]=(Math.random()-.5)*5e3,r[a*3+2]=Math.sin(d)*c;const f=new de().setHSL(.6,.2,.4);s[a*3]=f.r,s[a*3+1]=f.g,s[a*3+2]=f.b,a++}n.setAttribute("position",new xe(r.slice(0,a*3),3)),n.setAttribute("color",new xe(s.slice(0,a*3),3));const o=new yt({size:3500,map:e,vertexColors:!0,transparent:!0,opacity:.3,blending:at,depthWrite:!1});this.group.add(new Et(n,o))}update(e,n){this.group.rotation.y+=e*2e-4}}class DT extends Fn{constructor(){super("ANDROMEDA",Ai.ANDROMEDA)}build(e){const n=Za(),i=Hs();this.createGalacticBulge(i),this.createSpiralArms(n),this.createInterArmStars(n),this.createHIIRegions(i),this.createDustLanes(),this.createOuterHalo(i),this.createCoreGlow();const r=new lt(new In(5e3,16,16),new nr({visible:!1}));r.userData={name:"ANDROMEDA",isSystem:!0,baseScale:5e3},this.group.add(r),this.targetables.push(r);const s=new wi(16772829,8,6e5,.5);this.group.add(s)}createGalacticBulge(e){const n=new je,i=12e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=Math.pow(Math.random(),3)*18e3,c=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);r[o*3]=l*Math.sin(d)*Math.cos(c),r[o*3+1]=l*Math.sin(d)*Math.sin(c)*.25,r[o*3+2]=l*Math.cos(d);const f=l/18e3,h=new de().setHSL(.1+f*.05,.5-f*.3,.7+(1-f)*.25);s[o*3]=h.r,s[o*3+1]=h.g,s[o*3+2]=h.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:2500,map:e,vertexColors:!0,transparent:!0,opacity:.9,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createSpiralArms(e){const n=new je,i=35e3,r=new Float32Array(i*3),s=new Float32Array(i*3),a=[{offset:0,tightness:.3,strength:1},{offset:Math.PI*.5,tightness:.28,strength:.85},{offset:Math.PI,tightness:.32,strength:.9},{offset:Math.PI*1.5,tightness:.26,strength:.7}];for(let l=0;l<i;l++){const c=l%4,d=a[c],f=Math.pow(Math.random(),.6),h=4e3+f*65e3,p=d.offset+Math.log(h/4e3)/d.tightness,x=(18e3*(1-f*.83)+3e3)*d.strength,v=x/h,m=(Math.random()-.5)*v,u=(Math.random()-.5)*x*.25,g=p+m,_=h+u,y=(Math.random()-.5)*1500*(1-f*.7);r[l*3]=Math.cos(g)*_,r[l*3+1]=y,r[l*3+2]=Math.sin(g)*_;const C=h/65e3,w=new de;C<.3?w.setHSL(.6+Math.random()*.08,.5,.5+Math.random()*.3):C<.7?w.setHSL(.58+Math.random()*.1,.6,.4+Math.random()*.3):w.setHSL(.6+Math.random()*.05,.4,.3+Math.random()*.2),s[l*3]=w.r,s[l*3+1]=w.g,s[l*3+2]=w.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const o=new yt({size:1800,map:e,vertexColors:!0,transparent:!0,opacity:.75,blending:at,depthWrite:!1});this.group.add(new Et(n,o))}createInterArmStars(e){const n=new je,i=8e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=3e3+Math.random()*6e4,c=Math.random()*Math.PI*2,d=(Math.random()-.5)*2500,f=Math.exp(-l/3e4);if(Math.random()>f*2){r[o*3]=0,r[o*3+1]=0,r[o*3+2]=0,s[o*3]=0,s[o*3+1]=0,s[o*3+2]=0;continue}r[o*3]=Math.cos(c)*l,r[o*3+1]=d,r[o*3+2]=Math.sin(c)*l;const h=new de().setHSL(.12+Math.random()*.08,.3,.3+Math.random()*.2);s[o*3]=h.r,s[o*3+1]=h.g,s[o*3+2]=h.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:1200,map:e,vertexColors:!0,transparent:!0,opacity:.4,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createHIIRegions(e){const n=new je,i=2e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=Math.floor(Math.random()*4),c=[0,Math.PI*.5,Math.PI,Math.PI*1.5],f=1e4+(.2+Math.random()*.6)*45e3,h=c[l]+Math.log(f/4e3)/.3,p=1500+Math.random()*2e3,x=Math.cos(h)*f+(Math.random()-.5)*p,v=Math.sin(h)*f+(Math.random()-.5)*p;r[o*3]=x,r[o*3+1]=(Math.random()-.5)*800,r[o*3+2]=v;const m=new de().setHSL(.95+Math.random()*.1,.8,.35+Math.random()*.2);s[o*3]=m.r,s[o*3+1]=m.g,s[o*3+2]=m.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:3e3,map:e,vertexColors:!0,transparent:!0,opacity:.25,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createDustLanes(){const e=new je,n=6e3,i=new Float32Array(n*3),r=new Float32Array(n*3);for(let a=0;a<n;a++){const l=6e3+Math.random()*55e3,c=Math.floor(Math.random()*4),f=[0,Math.PI*.5,Math.PI,Math.PI*1.5][c]+Math.log(l/4e3)/.3-.15,h=(Math.random()-.5)*3e3;i[a*3]=Math.cos(f)*l+h,i[a*3+1]=(Math.random()-.5)*800,i[a*3+2]=Math.sin(f)*l+h;const p=new de().setHSL(.06,.5,.06+Math.random()*.04);r[a*3]=p.r,r[a*3+1]=p.g,r[a*3+2]=p.b}e.setAttribute("position",new xe(i,3)),e.setAttribute("color",new xe(r,3));const s=new yt({size:3500,vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1});this.group.add(new Et(e,s))}createOuterHalo(e){const n=new je,i=2500,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=5e4+Math.random()*35e3,c=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);r[o*3]=l*Math.sin(d)*Math.cos(c),r[o*3+1]=l*Math.sin(d)*Math.sin(c)*.35,r[o*3+2]=l*Math.cos(d);const f=new de().setHSL(.12,.2,.2+Math.random()*.1);s[o*3]=f.r,s[o*3+1]=f.g,s[o*3+2]=f.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:6e3,map:e,vertexColors:!0,transparent:!0,opacity:.12,blending:at,depthWrite:!1});this.group.add(new Et(n,a))}createCoreGlow(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=n.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(255, 240, 220, 1)"),i.addColorStop(.1,"rgba(255, 220, 180, 0.8)"),i.addColorStop(.3,"rgba(255, 180, 120, 0.4)"),i.addColorStop(.6,"rgba(200, 150, 100, 0.1)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=i,n.fillRect(0,0,256,256);const r=new rr(e),s=new Ka({map:r,blending:at,transparent:!0,opacity:.9}),a=new Vl(s);a.scale.set(3e4,3e4,1),this.group.add(a)}gaussianRandom(){let e=0,n=0;for(;e===0;)e=Math.random();for(;n===0;)n=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*n)}update(e,n){this.group.rotation.y+=e*.008}}const Ai={SGR_A_STAR:{x:0,y:0,z:0},SOLAR:{x:25e4,y:0,z:12e4},PROXIMA:{x:3e5,y:800,z:14e4},SIRIUS:{x:32e4,y:-500,z:9e4},VEGA:{x:28e4,y:600,z:2e5},TRAPPIST:{x:-15e4,y:400,z:-25e4},KEPLER22:{x:4e5,y:-500,z:-1e5},CRAB_NEBULA:{x:-1e5,y:2e3,z:35e4},ANDROMEDA:{x:3e6,y:9e5,z:-25e5}};function IT(){return[new LT,new ST,new MT,new ET,new wT,new TT,new AT,new RT,new CT,new DT,new bT,new PT]}class UT{constructor(e,n){this.container=e,this.onUpdate=n,this.width=e.clientWidth,this.height=e.clientHeight,this.config={friction:.95,turnSpeedMax:1.5,dragSensitivity:.003,maxSpeed:5e7,acceleration:5e5},this.state={time:0,speed:0,baseSpeed:5e3,sprintSpeed:35e3,turnSpeed:1.5,pitch:0,yaw:0,roll:0,paused:!1,keys:{w:!1,s:!1,shift:!1},isDragging:!1,dragDeltaX:0,dragDeltaY:0,lastDragX:0,lastDragY:0,rotVelocityX:0,rotVelocityY:0},this.scene=null,this.camera=null,this.renderer=null,this.clock=new xT,this.euler=new io(0,0,0,"YXZ"),this.systems=[],this.allTargetables=[],this.init()}init(){this.initScene(),this.initSystems(),this.initBackdrop(),this.initInput(),this.animate=this.animate.bind(this),this.animate()}initScene(){this.scene=new hT,this.scene.background=new de(131589),this.scene.fog=new Rf(0,5e-10),this.camera=new _n(55,this.width/this.height,.1,2e9),this.camera.position.set(25e4,5e3,175e3),this.camera.lookAt(new D(25e4,0,12e4)),this.renderer=new d_({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Ug,this.renderer.toneMappingExposure=1.2,this.container.appendChild(this.renderer.domElement),this.scene.add(new vT(8947848))}initSystems(){const e={createNoiseTexture:vi,createStarTexture:Za,createRadialTexture:Hs};this.systems=IT(),this.systems.forEach(n=>{n.init(this.scene,e),this.allTargetables.push(...n.getTargetables())}),console.log(`Loaded ${this.systems.length} star systems with ${this.allTargetables.length} targetable objects`)}initBackdrop(){const e=Za();this.starBackdrop=new Hi,this.scene.add(this.starBackdrop);const n=new je,i=8e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let o=0;o<i;o++){const l=8e5+Math.random()*5e6,c=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);r[o*3]=l*Math.sin(d)*Math.cos(c),r[o*3+1]=l*Math.sin(d)*Math.sin(c),r[o*3+2]=l*Math.cos(d);const f=Math.random(),h=new de;f<.6?h.setHSL(.1,.1,.7+Math.random()*.3):f<.8?h.setHSL(.6,.3,.6+Math.random()*.3):h.setHSL(.08,.6,.5+Math.random()*.3),s[o*3]=h.r,s[o*3+1]=h.g,s[o*3+2]=h.b}n.setAttribute("position",new xe(r,3)),n.setAttribute("color",new xe(s,3));const a=new yt({size:8e3,map:e,vertexColors:!0,transparent:!0,opacity:.9,blending:at,depthWrite:!1});this.starBackdrop.add(new Et(n,a)),this.createDustLayer()}createDustLayer(){const e=new je,n=5e3,i=new Float32Array(n*3),r=new Float32Array(n*3);for(let a=0;a<n;a++){const o=2e5+Math.random()*3e6,l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);i[a*3]=o*Math.sin(c)*Math.cos(l),i[a*3+1]=o*Math.sin(c)*Math.sin(l),i[a*3+2]=o*Math.cos(c);const d=.3+Math.random()*.4,f=new de(d,d,d);r[a*3]=f.r,r[a*3+1]=f.g,r[a*3+2]=f.b}e.setAttribute("position",new xe(i,3)),e.setAttribute("color",new xe(r,3));const s=new yt({size:3e3,map:Hs(),vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1});this.starBackdrop.add(new Et(e,s))}initInput(){window.addEventListener("keydown",e=>{(e.key==="w"||e.key==="W")&&(this.state.keys.w=!0),(e.key==="s"||e.key==="S")&&(this.state.keys.s=!0),e.key==="Shift"&&(this.state.keys.shift=!0)}),window.addEventListener("keyup",e=>{(e.key==="w"||e.key==="W")&&(this.state.keys.w=!1),(e.key==="s"||e.key==="S")&&(this.state.keys.s=!1),e.key==="Shift"&&(this.state.keys.shift=!1)}),this.container.addEventListener("mousedown",e=>{this.state.isDragging=!0,this.state.lastDragX=e.clientX,this.state.lastDragY=e.clientY,this.state.dragDeltaX=0,this.state.dragDeltaY=0}),window.addEventListener("mousemove",e=>{this.state.isDragging&&(this.state.dragDeltaX=e.clientX-this.state.lastDragX,this.state.dragDeltaY=e.clientY-this.state.lastDragY,this.state.lastDragX=e.clientX,this.state.lastDragY=e.clientY)}),window.addEventListener("mouseup",()=>{this.state.isDragging=!1}),this.container.addEventListener("touchstart",e=>{e.touches.length===1&&(this.state.isDragging=!0,this.state.lastDragX=e.touches[0].clientX,this.state.lastDragY=e.touches[0].clientY,this.state.dragDeltaX=0,this.state.dragDeltaY=0)},{passive:!0}),window.addEventListener("touchmove",e=>{this.state.isDragging&&e.touches.length===1&&(this.state.dragDeltaX=e.touches[0].clientX-this.state.lastDragX,this.state.dragDeltaY=e.touches[0].clientY-this.state.lastDragY,this.state.lastDragX=e.touches[0].clientX,this.state.lastDragY=e.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",()=>{this.state.isDragging=!1}),window.addEventListener("resize",()=>{this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)})}getNearestSystem(){let e=null,n=1/0;return this.systems.forEach(i=>{const r=i.getDistanceFrom(this.camera.position);r<n&&(n=r,e=i)}),{system:e,distance:n}}getNearbySystems(e=6e5){return this.systems.map(n=>({name:n.name,position:n.position.clone(),distance:n.getDistanceFrom(this.camera.position)})).filter(n=>n.distance<e).sort((n,i)=>n.distance-i.distance)}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.1);this.state.time+=e;const n=this.state.keys.shift?10:1;if(this.state.keys.w?this.state.speed+=this.config.acceleration*n*e:this.state.keys.s?this.state.speed-=this.config.acceleration*n*e:this.state.speed*=this.config.friction,this.state.speed=Math.max(-this.config.maxSpeed,Math.min(this.config.maxSpeed,this.state.speed)),this.state.isDragging&&(this.state.rotVelocityY+=this.state.dragDeltaX*this.config.dragSensitivity,this.state.rotVelocityX+=this.state.dragDeltaY*this.config.dragSensitivity,this.state.dragDeltaX=0,this.state.dragDeltaY=0),this.state.rotVelocityX*=.9,this.state.rotVelocityY*=.9,Math.abs(this.state.rotVelocityX)>1e-4||Math.abs(this.state.rotVelocityY)>1e-4){const r=-this.state.rotVelocityX,s=-this.state.rotVelocityY,a=new Fr().setFromAxisAngle(new D(1,0,0).applyQuaternion(this.camera.quaternion),r),o=new Fr().setFromAxisAngle(new D(0,1,0),s);this.camera.quaternion.multiplyQuaternions(o,this.camera.quaternion),this.camera.quaternion.multiplyQuaternions(this.camera.quaternion,a),this.camera.quaternion.normalize()}const i=new D(0,0,-1).applyQuaternion(this.camera.quaternion);if(this.camera.position.addScaledVector(i,this.state.speed*e),this.systems.forEach(r=>{r.update(e,this.state.time,this.camera.position)}),this.starBackdrop&&this.starBackdrop.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera),this.onUpdate){const r=this.getNearestSystem(),s=this.getNearbySystems();this.onUpdate({speed:Math.abs(this.state.speed),altitude:this.camera.position.length(),heading:sM.radToDeg(this.euler.setFromQuaternion(this.camera.quaternion).y),position:this.camera.position.clone(),rotation:this.camera.rotation.clone(),nearestSystem:r.system?r.system.name:"VOID",nearestDistance:r.distance,nearbySystems:s,planets:this.allTargetables})}}cleanup(){this.renderer.dispose(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}}const NT=()=>{const t=yr.useRef(null),e=yr.useRef(null),[n,i]=yr.useState({speed:0,coords:{x:0,y:0,z:0},targetName:"SOLAR",targetDist:0,heading:0,nearbySystems:[]});yr.useEffect(()=>{if(t.current)return e.current=new UT(t.current,a=>{i({speed:Math.abs(a.speed).toFixed(0),coords:{x:a.position.x.toFixed(0),y:a.position.y.toFixed(0),z:a.position.z.toFixed(0)},targetName:a.nearestSystem||"VOID",targetDist:(a.nearestDistance/1e3).toFixed(1),heading:a.heading||0,nearbySystems:a.nearbySystems||[]})}),()=>{e.current&&e.current.cleanup()}},[]);const s=(n.heading%360+360)%360*8;return Te.jsxs(Te.Fragment,{children:[Te.jsx("div",{id:"canvas-container",ref:t}),Te.jsxs("div",{className:"controls-hint",children:["DRAG: Look/Steer",Te.jsx("br",{}),"W: Warp Drive",Te.jsx("br",{}),"S: Brake",Te.jsx("br",{}),"SHIFT: Boost (10x)"]}),Te.jsxs("div",{id:"cockpit-ui",children:[Te.jsx("div",{className:"top-bar",children:Te.jsx("div",{className:"compass-container",children:Te.jsxs("div",{className:"compass-tape",style:{transform:`translateX(-${s}px)`},children:[Array.from({length:72}).map((a,o)=>{const l=o*5,c=l%45===0;return Te.jsx("div",{className:`tick ${c?"major":""}`,children:c&&Te.jsx("span",{children:l})},l)}),Array.from({length:72}).map((a,o)=>{const l=o*5,c=l%45===0;return Te.jsx("div",{className:`tick ${c?"major":""}`,children:c&&Te.jsx("span",{children:l})},`dup-${l}`)})]})})}),Te.jsx("div",{className:"reticle"}),Te.jsx("div",{className:"dashboard-container",children:Te.jsxs("div",{className:"dashboard-glass",children:[Te.jsxs("div",{className:"screen-section screen-left",children:[Te.jsxs("div",{className:"data-row",children:[Te.jsx("div",{className:"label",children:"COORDS"}),Te.jsxs("div",{className:"data-value",children:[n.coords.x,", ",n.coords.y,", ",n.coords.z]})]}),Te.jsxs("div",{className:"data-row",children:[Te.jsx("div",{className:"label",children:"STATUS"}),Te.jsx("div",{className:"data-value",style:{color:"#0f0"},children:"NOMINAL"})]})]}),Te.jsx("div",{className:"screen-section screen-center",children:Te.jsxs("div",{className:"radar-display",children:[Te.jsx("div",{className:"radar-title",children:"SYSTEM RADAR"}),Te.jsxs("div",{className:"radar-grid",children:[Te.jsx("div",{className:"radar-center"}),n.nearbySystems.slice(0,5).map((a,o)=>{const d=a.position.x/3e5*35,f=a.position.z/3e5*35;return Te.jsx("div",{className:"radar-blip",style:{left:`calc(50% + ${Math.max(-35,Math.min(35,d))}px)`,top:`calc(50% + ${Math.max(-35,Math.min(35,f))}px)`},title:`${a.name}: ${(a.distance/1e3).toFixed(0)}km`},a.name)})]}),Te.jsx("div",{className:"radar-systems-list",children:n.nearbySystems.slice(0,3).map(a=>Te.jsxs("div",{className:"radar-system-item",children:[Te.jsx("span",{className:"system-name",children:a.name}),Te.jsxs("span",{className:"system-dist",children:[(a.distance/1e3).toFixed(0)," km"]})]},a.name))})]})}),Te.jsxs("div",{className:"screen-section screen-right",children:[Te.jsxs("div",{className:"data-row",style:{justifyContent:"flex-end"},children:[Te.jsx("div",{className:"data-value",style:{color:"#0ff"},children:n.targetName}),Te.jsx("div",{className:"label",children:"NEAREST"})]}),Te.jsxs("div",{className:"data-row",style:{justifyContent:"flex-end"},children:[Te.jsx("div",{className:"data-value",children:n.targetDist}),Te.jsx("div",{className:"unit",children:"KM"})]}),Te.jsxs("div",{className:"data-row",style:{justifyContent:"flex-end"},children:[Te.jsx("div",{className:"data-value data-big",children:n.speed}),Te.jsx("div",{className:"unit",style:{alignSelf:"flex-end",marginBottom:"5px"},children:"KM/S"})]})]})]})})]})]})};yu.createRoot(document.getElementById("root")).render(Te.jsx(N_.StrictMode,{children:Te.jsx(NT,{})}));
