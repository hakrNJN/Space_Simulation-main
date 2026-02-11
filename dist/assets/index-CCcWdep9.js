(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function R_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Cm={exports:{}},jl={},bm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),C_=Symbol.for("react.portal"),b_=Symbol.for("react.fragment"),P_=Symbol.for("react.strict_mode"),L_=Symbol.for("react.profiler"),D_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),U_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),F_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),zh=Symbol.iterator;function z_(n){return n===null||typeof n!="object"?null:(n=zh&&n[zh]||n["@@iterator"],typeof n=="function"?n:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Dm={};function Xs(n,e,t){this.props=n,this.context=e,this.refs=Dm,this.updater=t||Pm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Im(){}Im.prototype=Xs.prototype;function Rd(n,e,t){this.props=n,this.context=e,this.refs=Dm,this.updater=t||Pm}var Cd=Rd.prototype=new Im;Cd.constructor=Rd;Lm(Cd,Xs.prototype);Cd.isPureReactComponent=!0;var Bh=Array.isArray,Um=Object.prototype.hasOwnProperty,bd={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Fm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,i)&&!Nm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:n,key:s,ref:o,props:r,_owner:bd.current}}function B_(n,e){return{$$typeof:ea,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Pd(n){return typeof n=="object"&&n!==null&&n.$$typeof===ea}function k_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var kh=/\/+/g;function _c(n,e){return typeof n=="object"&&n!==null&&n.key!=null?k_(""+n.key):e.toString(36)}function tl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ea:case C_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+_c(o,0):i,Bh(r)?(t="",n!=null&&(t=n.replace(kh,"$&/")+"/"),tl(r,e,t,"",function(c){return c})):r!=null&&(Pd(r)&&(r=B_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(kh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+_c(s,a);o+=tl(s,e,t,l,r)}else if(l=z_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+_c(s,a++),o+=tl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(n,e,t){if(n==null)return n;var i=[],r=0;return tl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function H_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},nl={transition:null},G_={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:nl,ReactCurrentOwner:bd};function Om(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:ca,forEach:function(n,e,t){ca(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ca(n,function(){e++}),e},toArray:function(n){return ca(n,function(e){return e})||[]},only:function(n){if(!Pd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=Xs;je.Fragment=b_;je.Profiler=L_;je.PureComponent=Rd;je.StrictMode=P_;je.Suspense=N_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G_;je.act=Om;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Lm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Um.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ea,type:n.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(n){return n={$$typeof:I_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:D_,_context:n},n.Consumer=n};je.createElement=Fm;je.createFactory=function(n){var e=Fm.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:U_,render:n}};je.isValidElement=Pd;je.lazy=function(n){return{$$typeof:O_,_payload:{_status:-1,_result:n},_init:H_}};je.memo=function(n,e){return{$$typeof:F_,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=nl.transition;nl.transition={};try{n()}finally{nl.transition=e}};je.unstable_act=Om;je.useCallback=function(n,e){return on.current.useCallback(n,e)};je.useContext=function(n){return on.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return on.current.useDeferredValue(n)};je.useEffect=function(n,e){return on.current.useEffect(n,e)};je.useId=function(){return on.current.useId()};je.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return on.current.useMemo(n,e)};je.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};je.useRef=function(n){return on.current.useRef(n)};je.useState=function(n){return on.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return on.current.useTransition()};je.version="18.3.1";bm.exports=je;var Er=bm.exports;const V_=R_(Er);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=Er,X_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),Y_=Object.prototype.hasOwnProperty,q_=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$_={key:!0,ref:!0,__self:!0,__source:!0};function zm(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Y_.call(e,i)&&!$_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:X_,type:n,key:s,ref:o,props:r,_owner:q_.current}}jl.Fragment=j_;jl.jsx=zm;jl.jsxs=zm;Cm.exports=jl;var Ee=Cm.exports,Su={},Bm={exports:{}},wn={},km={exports:{}},Hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,O){var B=I.length;I.push(O);e:for(;0<B;){var q=B-1>>>1,Z=I[q];if(0<r(Z,O))I[q]=O,I[B]=Z,B=q;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],B=I.pop();if(B!==O){I[0]=B;e:for(var q=0,Z=I.length,j=Z>>>1;q<j;){var K=2*(q+1)-1,le=I[K],he=K+1,me=I[he];if(0>r(le,B))he<Z&&0>r(me,le)?(I[q]=me,I[he]=B,q=he):(I[q]=le,I[K]=B,q=K);else if(he<Z&&0>r(me,B))I[q]=me,I[he]=B,q=he;else break e}}return O}function r(I,O){var B=I.sortIndex-O.sortIndex;return B!==0?B:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var O=t(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=I)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(c)}}function y(I){if(x=!1,_(I),!v)if(t(l)!==null)v=!0,X(R);else{var O=t(c);O!==null&&Y(y,O.startTime-I)}}function R(I,O){v=!1,x&&(x=!1,d(b),b=-1),p=!0;var B=f;try{for(_(O),h=t(l);h!==null&&(!(h.expirationTime>O)||I&&!N());){var q=h.callback;if(typeof q=="function"){h.callback=null,f=h.priorityLevel;var Z=q(h.expirationTime<=O);O=n.unstable_now(),typeof Z=="function"?h.callback=Z:h===t(l)&&i(l),_(O)}else i(l);h=t(l)}if(h!==null)var j=!0;else{var K=t(c);K!==null&&Y(y,K.startTime-O),j=!1}return j}finally{h=null,f=B,p=!1}}var w=!1,A=null,b=-1,M=5,S=-1;function N(){return!(n.unstable_now()-S<M)}function z(){if(A!==null){var I=n.unstable_now();S=I;var O=!0;try{O=A(!0,I)}finally{O?$():(w=!1,A=null)}}else w=!1}var $;if(typeof g=="function")$=function(){g(z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,F=D.port2;D.port1.onmessage=z,$=function(){F.postMessage(null)}}else $=function(){m(z,0)};function X(I){A=I,w||(w=!0,$())}function Y(I,O){b=m(function(){I(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,X(R))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var B=f;f=O;try{return I()}finally{f=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=f;f=I;try{return O()}finally{f=B}},n.unstable_scheduleCallback=function(I,O,B){var q=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?q+B:q):B=q,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,I={id:u++,callback:O,priorityLevel:I,startTime:B,expirationTime:Z,sortIndex:-1},B>q?(I.sortIndex=B,e(c,I),t(l)===null&&I===t(c)&&(x?(d(b),b=-1):x=!0,Y(y,B-q))):(I.sortIndex=Z,e(l,I),v||p||(v=!0,X(R))),I},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(I){var O=f;return function(){var B=f;f=O;try{return I.apply(this,arguments)}finally{f=B}}}})(Hm);km.exports=Hm;var K_=km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=Er,En=K_;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,Io={};function kr(n,e){Is(n,e),Is(n+"Capture",e)}function Is(n,e){for(Io[n]=e,n=0;n<e.length;n++)Gm.add(e[n])}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,Q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hh={},Gh={};function J_(n){return Eu.call(Gh,n)?!0:Eu.call(Hh,n)?!1:Q_.test(n)?Gh[n]=!0:(Hh[n]=!0,!1)}function ev(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function tv(n,e,t,i){if(e===null||typeof e>"u"||ev(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){kt[n]=new an(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];kt[e]=new an(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){kt[n]=new an(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){kt[n]=new an(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){kt[n]=new an(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){kt[n]=new an(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){kt[n]=new an(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){kt[n]=new an(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){kt[n]=new an(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Dd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ld,Dd);kt[e]=new an(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ld,Dd);kt[e]=new an(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ld,Dd);kt[e]=new an(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){kt[n]=new an(n,1,!1,n.toLowerCase(),null,!1,!1)});kt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){kt[n]=new an(n,1,!1,n.toLowerCase(),null,!0,!0)});function Id(n,e,t,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tv(e,t,r,i)&&(t=null),i||r===null?J_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var bi=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Qs(n){return n===null||typeof n!="object"?null:(n=Vh&&n[Vh]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,vc;function _o(n){if(vc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+n}var xc=!1;function yc(n,e){if(!n||xc)return"";xc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{xc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_o(n):""}function nv(n){switch(n.tag){case 5:return _o(n.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return n=yc(n.type,!1),n;case 11:return n=yc(n.type.render,!1),n;case 1:return n=yc(n.type,!0),n;default:return""}}function Ru(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fs:return"Fragment";case hs:return"Portal";case wu:return"Profiler";case Ud:return"StrictMode";case Tu:return"Suspense";case Au:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Wm:return(n.displayName||"Context")+".Consumer";case Vm:return(n._context.displayName||"Context")+".Provider";case Nd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Fd:return e=n.displayName||null,e!==null?e:Ru(n.type)||"Memo";case Fi:e=n._payload,n=n._init;try{return Ru(n(e))}catch{}}return null}function iv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function jm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rv(n){var e=jm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function da(n){n._valueTracker||(n._valueTracker=rv(n))}function Ym(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=jm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function pl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cu(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Wh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=tr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(n,e){e=e.checked,e!=null&&Id(n,"checked",e,!1)}function bu(n,e){qm(n,e);var t=tr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Pu(n,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Xh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Pu(n,e,t){(e!=="number"||pl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var vo=Array.isArray;function As(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+tr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Lu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jh(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(vo(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:tr(t)}}function $m(n,e){var t=tr(e.value),i=tr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Yh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Km(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Km(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ha,Zm=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Uo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(n){sv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Mo[e]=Mo[n]})});function Qm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Mo.hasOwnProperty(n)&&Mo[n]?(""+e).trim():e+"px"}function Jm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Qm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ov=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(n,e){if(e){if(ov[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Uu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function Od(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fu=null,Rs=null,Cs=null;function qh(n){if(n=ia(n)){if(typeof Fu!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Zl(e),Fu(n.stateNode,n.type,e))}}function e0(n){Rs?Cs?Cs.push(n):Cs=[n]:Rs=n}function t0(){if(Rs){var n=Rs,e=Cs;if(Cs=Rs=null,qh(n),e)for(n=0;n<e.length;n++)qh(e[n])}}function n0(n,e){return n(e)}function i0(){}var Mc=!1;function r0(n,e,t){if(Mc)return n(e,t);Mc=!0;try{return n0(n,e,t)}finally{Mc=!1,(Rs!==null||Cs!==null)&&(i0(),t0())}}function No(n,e){var t=n.stateNode;if(t===null)return null;var i=Zl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Ou=!1;if(Ei)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Ou=!1}function av(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var So=!1,ml=null,gl=!1,zu=null,lv={onError:function(n){So=!0,ml=n}};function cv(n,e,t,i,r,s,o,a,l){So=!1,ml=null,av.apply(lv,arguments)}function uv(n,e,t,i,r,s,o,a,l){if(cv.apply(this,arguments),So){if(So){var c=ml;So=!1,ml=null}else throw Error(ee(198));gl||(gl=!0,zu=c)}}function Hr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function s0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function $h(n){if(Hr(n)!==n)throw Error(ee(188))}function dv(n){var e=n.alternate;if(!e){if(e=Hr(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return $h(r),n;if(s===i)return $h(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function o0(n){return n=dv(n),n!==null?a0(n):null}function a0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=a0(n);if(e!==null)return e;n=n.sibling}return null}var l0=En.unstable_scheduleCallback,Kh=En.unstable_cancelCallback,hv=En.unstable_shouldYield,fv=En.unstable_requestPaint,wt=En.unstable_now,pv=En.unstable_getCurrentPriorityLevel,zd=En.unstable_ImmediatePriority,c0=En.unstable_UserBlockingPriority,_l=En.unstable_NormalPriority,mv=En.unstable_LowPriority,u0=En.unstable_IdlePriority,Yl=null,ni=null;function gv(n){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Yl,n,void 0,(n.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:xv,_v=Math.log,vv=Math.LN2;function xv(n){return n>>>=0,n===0?32:31-(_v(n)/vv|0)|0}var fa=64,pa=4194304;function xo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=xo(a):(s&=o,s!==0&&(i=xo(s)))}else o=t&~r,o!==0?i=xo(o):s!==0&&(i=xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Yn(e),r=1<<t,i|=n[t],e&=~r;return i}function yv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=yv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Bu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function d0(){var n=fa;return fa<<=1,!(fa&4194240)&&(fa=64),n}function Sc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ta(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Yn(e),n[e]=t}function Sv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Yn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Bd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Yn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var et=0;function h0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var f0,kd,p0,m0,g0,ku=!1,ma=[],Wi=null,Xi=null,ji=null,Fo=new Map,Oo=new Map,zi=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(n,e){switch(n){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function eo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&kd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function wv(n,e,t,i,r){switch(e){case"focusin":return Wi=eo(Wi,n,e,t,i,r),!0;case"dragenter":return Xi=eo(Xi,n,e,t,i,r),!0;case"mouseover":return ji=eo(ji,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,eo(Fo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oo.set(s,eo(Oo.get(s)||null,n,e,t,i,r)),!0}return!1}function _0(n){var e=wr(n.target);if(e!==null){var t=Hr(e);if(t!==null){if(e=t.tag,e===13){if(e=s0(t),e!==null){n.blockedOn=e,g0(n.priority,function(){p0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function il(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Hu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Nu=i,t.target.dispatchEvent(i),Nu=null}else return e=ia(t),e!==null&&kd(e),n.blockedOn=t,!1;e.shift()}return!0}function Qh(n,e,t){il(n)&&t.delete(e)}function Tv(){ku=!1,Wi!==null&&il(Wi)&&(Wi=null),Xi!==null&&il(Xi)&&(Xi=null),ji!==null&&il(ji)&&(ji=null),Fo.forEach(Qh),Oo.forEach(Qh)}function to(n,e){n.blockedOn===e&&(n.blockedOn=null,ku||(ku=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Tv)))}function zo(n){function e(r){return to(r,n)}if(0<ma.length){to(ma[0],n);for(var t=1;t<ma.length;t++){var i=ma[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Wi!==null&&to(Wi,n),Xi!==null&&to(Xi,n),ji!==null&&to(ji,n),Fo.forEach(e),Oo.forEach(e),t=0;t<zi.length;t++)i=zi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<zi.length&&(t=zi[0],t.blockedOn===null);)_0(t),t.blockedOn===null&&zi.shift()}var bs=bi.ReactCurrentBatchConfig,xl=!0;function Av(n,e,t,i){var r=et,s=bs.transition;bs.transition=null;try{et=1,Hd(n,e,t,i)}finally{et=r,bs.transition=s}}function Rv(n,e,t,i){var r=et,s=bs.transition;bs.transition=null;try{et=4,Hd(n,e,t,i)}finally{et=r,bs.transition=s}}function Hd(n,e,t,i){if(xl){var r=Hu(n,e,t,i);if(r===null)Dc(n,e,i,yl,t),Zh(n,i);else if(wv(r,n,e,t,i))i.stopPropagation();else if(Zh(n,i),e&4&&-1<Ev.indexOf(n)){for(;r!==null;){var s=ia(r);if(s!==null&&f0(s),s=Hu(n,e,t,i),s===null&&Dc(n,e,i,yl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dc(n,e,i,null,t)}}var yl=null;function Hu(n,e,t,i){if(yl=null,n=Od(i),n=wr(n),n!==null)if(e=Hr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=s0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yl=n,null}function v0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case zd:return 1;case c0:return 4;case _l:case mv:return 16;case u0:return 536870912;default:return 16}default:return 16}}var ki=null,Gd=null,rl=null;function x0(){if(rl)return rl;var n,e=Gd,t=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return rl=r.slice(n,1<i?1-i:void 0)}function sl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function Jh(){return!1}function Tn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Jh,this.isPropagationStopped=Jh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Tn(js),na=xt({},js,{view:0,detail:0}),Cv=Tn(na),Ec,wc,no,ql=xt({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==no&&(no&&n.type==="mousemove"?(Ec=n.screenX-no.screenX,wc=n.screenY-no.screenY):wc=Ec=0,no=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),ef=Tn(ql),bv=xt({},ql,{dataTransfer:0}),Pv=Tn(bv),Lv=xt({},na,{relatedTarget:0}),Tc=Tn(Lv),Dv=xt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Tn(Dv),Uv=xt({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nv=Tn(Uv),Fv=xt({},js,{data:0}),tf=Tn(Fv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Bv[n])?!!e[n]:!1}function Wd(){return kv}var Hv=xt({},na,{key:function(n){if(n.key){var e=Ov[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(n){return n.type==="keypress"?sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gv=Tn(Hv),Vv=xt({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=Tn(Vv),Wv=xt({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),Xv=Tn(Wv),jv=xt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Tn(jv),qv=xt({},ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=Tn(qv),Kv=[9,13,27,32],Xd=Ei&&"CompositionEvent"in window,Eo=null;Ei&&"documentMode"in document&&(Eo=document.documentMode);var Zv=Ei&&"TextEvent"in window&&!Eo,y0=Ei&&(!Xd||Eo&&8<Eo&&11>=Eo),rf=" ",sf=!1;function M0(n,e){switch(n){case"keyup":return Kv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function Qv(n,e){switch(n){case"compositionend":return S0(e);case"keypress":return e.which!==32?null:(sf=!0,rf);case"textInput":return n=e.data,n===rf&&sf?null:n;default:return null}}function Jv(n,e){if(ps)return n==="compositionend"||!Xd&&M0(n,e)?(n=x0(),rl=Gd=ki=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y0&&e.locale!=="ko"?null:e.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ex[n.type]:e==="textarea"}function E0(n,e,t,i){e0(i),e=Ml(e,"onChange"),0<e.length&&(t=new Vd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var wo=null,Bo=null;function tx(n){U0(n,0)}function $l(n){var e=_s(n);if(Ym(e))return n}function nx(n,e){if(n==="change")return e}var w0=!1;if(Ei){var Ac;if(Ei){var Rc="oninput"in document;if(!Rc){var af=document.createElement("div");af.setAttribute("oninput","return;"),Rc=typeof af.oninput=="function"}Ac=Rc}else Ac=!1;w0=Ac&&(!document.documentMode||9<document.documentMode)}function lf(){wo&&(wo.detachEvent("onpropertychange",T0),Bo=wo=null)}function T0(n){if(n.propertyName==="value"&&$l(Bo)){var e=[];E0(e,Bo,n,Od(n)),r0(tx,e)}}function ix(n,e,t){n==="focusin"?(lf(),wo=e,Bo=t,wo.attachEvent("onpropertychange",T0)):n==="focusout"&&lf()}function rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $l(Bo)}function sx(n,e){if(n==="click")return $l(e)}function ox(n,e){if(n==="input"||n==="change")return $l(e)}function ax(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var $n=typeof Object.is=="function"?Object.is:ax;function ko(n,e){if($n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Eu.call(e,r)||!$n(n[r],e[r]))return!1}return!0}function cf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function uf(n,e){var t=cf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cf(t)}}function A0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?A0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var n=window,e=pl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=pl(n.document)}return e}function jd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function lx(n){var e=R0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&A0(t.ownerDocument.documentElement,t)){if(i!==null&&jd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=uf(t,s);var o=uf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cx=Ei&&"documentMode"in document&&11>=document.documentMode,ms=null,Gu=null,To=null,Vu=!1;function df(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vu||ms==null||ms!==pl(i)||(i=ms,"selectionStart"in i&&jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),To&&ko(To,i)||(To=i,i=Ml(Gu,"onSelect"),0<i.length&&(e=new Vd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ms)))}function _a(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var gs={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},Cc={},C0={};Ei&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Kl(n){if(Cc[n])return Cc[n];if(!gs[n])return n;var e=gs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in C0)return Cc[n]=e[t];return n}var b0=Kl("animationend"),P0=Kl("animationiteration"),L0=Kl("animationstart"),D0=Kl("transitionend"),I0=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,e){I0.set(n,e),kr(e,[n])}for(var bc=0;bc<hf.length;bc++){var Pc=hf[bc],ux=Pc.toLowerCase(),dx=Pc[0].toUpperCase()+Pc.slice(1);ar(ux,"on"+dx)}ar(b0,"onAnimationEnd");ar(P0,"onAnimationIteration");ar(L0,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(D0,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function ff(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uv(i,e,void 0,n),n.currentTarget=null}function U0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ff(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ff(r,a,c),s=l}}}if(gl)throw n=zu,gl=!1,zu=null,n}function ut(n,e){var t=e[qu];t===void 0&&(t=e[qu]=new Set);var i=n+"__bubble";t.has(i)||(N0(e,n,2,!1),t.add(i))}function Lc(n,e,t){var i=0;e&&(i|=4),N0(t,n,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[va]){n[va]=!0,Gm.forEach(function(t){t!=="selectionchange"&&(hx.has(t)||Lc(t,!1,n),Lc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[va]||(e[va]=!0,Lc("selectionchange",!1,e))}}function N0(n,e,t,i){switch(v0(e)){case 1:var r=Av;break;case 4:r=Rv;break;default:r=Hd}t=r.bind(null,e,t,n),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Dc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}r0(function(){var c=s,u=Od(t),h=[];e:{var f=I0.get(n);if(f!==void 0){var p=Vd,v=n;switch(n){case"keypress":if(sl(t)===0)break e;case"keydown":case"keyup":p=Gv;break;case"focusin":v="focus",p=Tc;break;case"focusout":v="blur",p=Tc;break;case"beforeblur":case"afterblur":p=Tc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xv;break;case b0:case P0:case L0:p=Iv;break;case D0:p=Yv;break;case"scroll":p=Cv;break;case"wheel":p=$v;break;case"copy":case"cut":case"paste":p=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=nf}var x=(e&4)!==0,m=!x&&n==="scroll",d=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=No(g,d),y!=null&&x.push(Go(g,y,_)))),m)break;g=g.return}0<x.length&&(f=new p(f,v,null,t,u),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Nu&&(v=t.relatedTarget||t.fromElement)&&(wr(v)||v[wi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?wr(v):null,v!==null&&(m=Hr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=ef,y="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(x=nf,y="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?f:_s(p),_=v==null?f:_s(v),f=new x(y,g+"leave",p,t,u),f.target=m,f.relatedTarget=_,y=null,wr(u)===c&&(x=new x(d,g+"enter",v,t,u),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,d=v,g=0,_=x;_;_=Wr(_))g++;for(_=0,y=d;y;y=Wr(y))_++;for(;0<g-_;)x=Wr(x),g--;for(;0<_-g;)d=Wr(d),_--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Wr(x),d=Wr(d)}x=null}else x=null;p!==null&&pf(h,f,p,x,!1),v!==null&&m!==null&&pf(h,m,v,x,!0)}}e:{if(f=c?_s(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=nx;else if(of(f))if(w0)R=ox;else{R=rx;var w=ix}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=sx);if(R&&(R=R(n,c))){E0(h,R,t,u);break e}w&&w(n,f,c),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Pu(f,"number",f.value)}switch(w=c?_s(c):window,n){case"focusin":(of(w)||w.contentEditable==="true")&&(ms=w,Gu=c,To=null);break;case"focusout":To=Gu=ms=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,df(h,t,u);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":df(h,t,u)}var A;if(Xd)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ps?M0(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(y0&&t.locale!=="ko"&&(ps||b!=="onCompositionStart"?b==="onCompositionEnd"&&ps&&(A=x0()):(ki=u,Gd="value"in ki?ki.value:ki.textContent,ps=!0)),w=Ml(c,b),0<w.length&&(b=new tf(b,n,null,t,u),h.push({event:b,listeners:w}),A?b.data=A:(A=S0(t),A!==null&&(b.data=A)))),(A=Zv?Qv(n,t):Jv(n,t))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(u=new tf("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}U0(h,e)})}function Go(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ml(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=No(n,t),s!=null&&i.unshift(Go(n,s,r)),s=No(n,e),s!=null&&i.push(Go(n,s,r))),n=n.return}return i}function Wr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=No(t,s),l!=null&&o.unshift(Go(t,l,a))):r||(l=No(t,s),l!=null&&o.push(Go(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var fx=/\r\n?/g,px=/\u0000|\uFFFD/g;function mf(n){return(typeof n=="string"?n:""+n).replace(fx,`
`).replace(px,"")}function xa(n,e,t){if(e=mf(e),mf(n)!==e&&t)throw Error(ee(425))}function Sl(){}var Wu=null,Xu=null;function ju(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,gf=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof gf<"u"?function(n){return gf.resolve(null).then(n).catch(_x)}:Yu;function _x(n){setTimeout(function(){throw n})}function Ic(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zo(e)}function Yi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function _f(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ei="__reactFiber$"+Ys,Vo="__reactProps$"+Ys,wi="__reactContainer$"+Ys,qu="__reactEvents$"+Ys,vx="__reactListeners$"+Ys,xx="__reactHandles$"+Ys;function wr(n){var e=n[ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[wi]||t[ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=_f(n);n!==null;){if(t=n[ei])return t;n=_f(n)}return e}n=t,t=n.parentNode}return null}function ia(n){return n=n[ei]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Zl(n){return n[Vo]||null}var $u=[],vs=-1;function lr(n){return{current:n}}function ht(n){0>vs||(n.current=$u[vs],$u[vs]=null,vs--)}function lt(n,e){vs++,$u[vs]=n.current,n.current=e}var nr={},qt=lr(nr),un=lr(!1),Dr=nr;function Us(n,e){var t=n.type.contextTypes;if(!t)return nr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function dn(n){return n=n.childContextTypes,n!=null}function El(){ht(un),ht(qt)}function vf(n,e,t){if(qt.current!==nr)throw Error(ee(168));lt(qt,e),lt(un,t)}function F0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,iv(n)||"Unknown",r));return xt({},t,i)}function wl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Dr=qt.current,lt(qt,n),lt(un,un.current),!0}function xf(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=F0(n,e,Dr),i.__reactInternalMemoizedMergedChildContext=n,ht(un),ht(qt),lt(qt,n)):ht(un),lt(un,t)}var mi=null,Ql=!1,Uc=!1;function O0(n){mi===null?mi=[n]:mi.push(n)}function yx(n){Ql=!0,O0(n)}function cr(){if(!Uc&&mi!==null){Uc=!0;var n=0,e=et;try{var t=mi;for(et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}mi=null,Ql=!1}catch(r){throw mi!==null&&(mi=mi.slice(n+1)),l0(zd,cr),r}finally{et=e,Uc=!1}}return null}var xs=[],ys=0,Tl=null,Al=0,Cn=[],bn=0,Ir=null,gi=1,_i="";function _r(n,e){xs[ys++]=Al,xs[ys++]=Tl,Tl=n,Al=e}function z0(n,e,t){Cn[bn++]=gi,Cn[bn++]=_i,Cn[bn++]=Ir,Ir=n;var i=gi;n=_i;var r=32-Yn(i)-1;i&=~(1<<r),t+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-Yn(e)+r|t<<r|i,_i=s+n}else gi=1<<s|t<<r|i,_i=n}function Yd(n){n.return!==null&&(_r(n,1),z0(n,1,0))}function qd(n){for(;n===Tl;)Tl=xs[--ys],xs[ys]=null,Al=xs[--ys],xs[ys]=null;for(;n===Ir;)Ir=Cn[--bn],Cn[bn]=null,_i=Cn[--bn],Cn[bn]=null,gi=Cn[--bn],Cn[bn]=null}var Mn=null,yn=null,ft=!1,Wn=null;function B0(n,e){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function yf(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mn=n,yn=Yi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mn=n,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ir!==null?{id:gi,overflow:_i}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mn=n,yn=null,!0):!1;default:return!1}}function Ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zu(n){if(ft){var e=yn;if(e){var t=e;if(!yf(n,e)){if(Ku(n))throw Error(ee(418));e=Yi(t.nextSibling);var i=Mn;e&&yf(n,e)?B0(i,t):(n.flags=n.flags&-4097|2,ft=!1,Mn=n)}}else{if(Ku(n))throw Error(ee(418));n.flags=n.flags&-4097|2,ft=!1,Mn=n}}}function Mf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mn=n}function ya(n){if(n!==Mn)return!1;if(!ft)return Mf(n),ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ju(n.type,n.memoizedProps)),e&&(e=yn)){if(Ku(n))throw k0(),Error(ee(418));for(;e;)B0(n,e),e=Yi(e.nextSibling)}if(Mf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yn=Yi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yn=null}}else yn=Mn?Yi(n.stateNode.nextSibling):null;return!0}function k0(){for(var n=yn;n;)n=Yi(n.nextSibling)}function Ns(){yn=Mn=null,ft=!1}function $d(n){Wn===null?Wn=[n]:Wn.push(n)}var Mx=bi.ReactCurrentBatchConfig;function io(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function Ma(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Sf(n){var e=n._init;return e(n._payload)}function H0(n){function e(d,g){if(n){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Zi(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,n?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,_,y){return g===null||g.tag!==6?(g=Hc(_,d.mode,y),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,y){var R=_.type;return R===fs?u(d,g,_.props.children,y,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Sf(R)===g.type)?(y=r(g,_.props),y.ref=io(d,g,_),y.return=d,y):(y=hl(_.type,_.key,_.props,null,d.mode,y),y.ref=io(d,g,_),y.return=d,y)}function c(d,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Gc(_,d.mode,y),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function u(d,g,_,y,R){return g===null||g.tag!==7?(g=Cr(_,d.mode,y,R),g.return=d,g):(g=r(g,_),g.return=d,g)}function h(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hc(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ua:return _=hl(g.type,g.key,g.props,null,d.mode,_),_.ref=io(d,null,g),_.return=d,_;case hs:return g=Gc(g,d.mode,_),g.return=d,g;case Fi:var y=g._init;return h(d,y(g._payload),_)}if(vo(g)||Qs(g))return g=Cr(g,d.mode,_,null),g.return=d,g;Ma(d,g)}return null}function f(d,g,_,y){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(d,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ua:return _.key===R?l(d,g,_,y):null;case hs:return _.key===R?c(d,g,_,y):null;case Fi:return R=_._init,f(d,g,R(_._payload),y)}if(vo(_)||Qs(_))return R!==null?null:u(d,g,_,y,null);Ma(d,_)}return null}function p(d,g,_,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(g,d,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:return d=d.get(y.key===null?_:y.key)||null,l(g,d,y,R);case hs:return d=d.get(y.key===null?_:y.key)||null,c(g,d,y,R);case Fi:var w=y._init;return p(d,g,_,w(y._payload),R)}if(vo(y)||Qs(y))return d=d.get(_)||null,u(g,d,y,R,null);Ma(g,y)}return null}function v(d,g,_,y){for(var R=null,w=null,A=g,b=g=0,M=null;A!==null&&b<_.length;b++){A.index>b?(M=A,A=null):M=A.sibling;var S=f(d,A,_[b],y);if(S===null){A===null&&(A=M);break}n&&A&&S.alternate===null&&e(d,A),g=s(S,g,b),w===null?R=S:w.sibling=S,w=S,A=M}if(b===_.length)return t(d,A),ft&&_r(d,b),R;if(A===null){for(;b<_.length;b++)A=h(d,_[b],y),A!==null&&(g=s(A,g,b),w===null?R=A:w.sibling=A,w=A);return ft&&_r(d,b),R}for(A=i(d,A);b<_.length;b++)M=p(A,d,b,_[b],y),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?b:M.key),g=s(M,g,b),w===null?R=M:w.sibling=M,w=M);return n&&A.forEach(function(N){return e(d,N)}),ft&&_r(d,b),R}function x(d,g,_,y){var R=Qs(_);if(typeof R!="function")throw Error(ee(150));if(_=R.call(_),_==null)throw Error(ee(151));for(var w=R=null,A=g,b=g=0,M=null,S=_.next();A!==null&&!S.done;b++,S=_.next()){A.index>b?(M=A,A=null):M=A.sibling;var N=f(d,A,S.value,y);if(N===null){A===null&&(A=M);break}n&&A&&N.alternate===null&&e(d,A),g=s(N,g,b),w===null?R=N:w.sibling=N,w=N,A=M}if(S.done)return t(d,A),ft&&_r(d,b),R;if(A===null){for(;!S.done;b++,S=_.next())S=h(d,S.value,y),S!==null&&(g=s(S,g,b),w===null?R=S:w.sibling=S,w=S);return ft&&_r(d,b),R}for(A=i(d,A);!S.done;b++,S=_.next())S=p(A,d,b,S.value,y),S!==null&&(n&&S.alternate!==null&&A.delete(S.key===null?b:S.key),g=s(S,g,b),w===null?R=S:w.sibling=S,w=S);return n&&A.forEach(function(z){return e(d,z)}),ft&&_r(d,b),R}function m(d,g,_,y){if(typeof _=="object"&&_!==null&&_.type===fs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ua:e:{for(var R=_.key,w=g;w!==null;){if(w.key===R){if(R=_.type,R===fs){if(w.tag===7){t(d,w.sibling),g=r(w,_.props.children),g.return=d,d=g;break e}}else if(w.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Sf(R)===w.type){t(d,w.sibling),g=r(w,_.props),g.ref=io(d,w,_),g.return=d,d=g;break e}t(d,w);break}else e(d,w);w=w.sibling}_.type===fs?(g=Cr(_.props.children,d.mode,y,_.key),g.return=d,d=g):(y=hl(_.type,_.key,_.props,null,d.mode,y),y.ref=io(d,g,_),y.return=d,d=y)}return o(d);case hs:e:{for(w=_.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){t(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=Gc(_,d.mode,y),g.return=d,d=g}return o(d);case Fi:return w=_._init,m(d,g,w(_._payload),y)}if(vo(_))return v(d,g,_,y);if(Qs(_))return x(d,g,_,y);Ma(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,_),g.return=d,d=g):(t(d,g),g=Hc(_,d.mode,y),g.return=d,d=g),o(d)):t(d,g)}return m}var Fs=H0(!0),G0=H0(!1),Rl=lr(null),Cl=null,Ms=null,Kd=null;function Zd(){Kd=Ms=Cl=null}function Qd(n){var e=Rl.current;ht(Rl),n._currentValue=e}function Qu(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ps(n,e){Cl=n,Kd=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(cn=!0),n.firstContext=null)}function Fn(n){var e=n._currentValue;if(Kd!==n)if(n={context:n,memoizedValue:e,next:null},Ms===null){if(Cl===null)throw Error(ee(308));Ms=n,Cl.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return e}var Tr=null;function Jd(n){Tr===null?Tr=[n]:Tr.push(n)}function V0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Jd(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ti(n,i)}function Ti(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Oi=!1;function eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(n,t)}return r=i.interleaved,r===null?(e.next=e,Jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(n,t)}function ol(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bd(n,t)}}function Ef(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function bl(n,e,t,i){var r=n.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,x=a;switch(f=e,p=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=xt({},h,f);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=o,n.lanes=o,n.memoizedState=h}}function wf(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var ra={},ii=lr(ra),Wo=lr(ra),Xo=lr(ra);function Ar(n){if(n===ra)throw Error(ee(174));return n}function th(n,e){switch(lt(Xo,e),lt(Wo,n),lt(ii,ra),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Du(e,n)}ht(ii),lt(ii,e)}function Os(){ht(ii),ht(Wo),ht(Xo)}function X0(n){Ar(Xo.current);var e=Ar(ii.current),t=Du(e,n.type);e!==t&&(lt(Wo,n),lt(ii,t))}function nh(n){Wo.current===n&&(ht(ii),ht(Wo))}var _t=lr(0);function Pl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function ih(){for(var n=0;n<Nc.length;n++)Nc[n]._workInProgressVersionPrimary=null;Nc.length=0}var al=bi.ReactCurrentDispatcher,Fc=bi.ReactCurrentBatchConfig,Ur=0,vt=null,Ct=null,Nt=null,Ll=!1,Ao=!1,jo=0,Sx=0;function Gt(){throw Error(ee(321))}function rh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!$n(n[t],e[t]))return!1;return!0}function sh(n,e,t,i,r,s){if(Ur=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=n===null||n.memoizedState===null?Ax:Rx,n=t(i,r),Ao){s=0;do{if(Ao=!1,jo=0,25<=s)throw Error(ee(301));s+=1,Nt=Ct=null,e.updateQueue=null,al.current=Cx,n=t(i,r)}while(Ao)}if(al.current=Dl,e=Ct!==null&&Ct.next!==null,Ur=0,Nt=Ct=vt=null,Ll=!1,e)throw Error(ee(300));return n}function oh(){var n=jo!==0;return jo=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?vt.memoizedState=Nt=n:Nt=Nt.next=n,Nt}function On(){if(Ct===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=Nt===null?vt.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=n;else{if(n===null)throw Error(ee(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?vt.memoizedState=Nt=n:Nt=Nt.next=n}return Nt}function Yo(n,e){return typeof e=="function"?e(n):e}function Oc(n){var e=On(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ur&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=u,Nr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Nr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function zc(n){var e=On(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function j0(){}function Y0(n,e){var t=vt,i=On(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,ah(K0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(t.flags|=2048,qo(9,$0.bind(null,t,i,r,e),void 0,null),Ft===null)throw Error(ee(349));Ur&30||q0(t,e,r)}return r}function q0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function $0(n,e,t,i){e.value=t,e.getSnapshot=i,Z0(e)&&Q0(n)}function K0(n,e,t){return t(function(){Z0(e)&&Q0(n)})}function Z0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!$n(n,t)}catch{return!0}}function Q0(n){var e=Ti(n,1);e!==null&&qn(e,n,1,-1)}function Tf(n){var e=Qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:n},e.queue=n,n=n.dispatch=Tx.bind(null,vt,n),[e.memoizedState,n]}function qo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function J0(){return On().memoizedState}function ll(n,e,t,i){var r=Qn();vt.flags|=n,r.memoizedState=qo(1|e,t,void 0,i===void 0?null:i)}function Jl(n,e,t,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&rh(i,o.deps)){r.memoizedState=qo(e,t,s,i);return}}vt.flags|=n,r.memoizedState=qo(1|e,t,s,i)}function Af(n,e){return ll(8390656,8,n,e)}function ah(n,e){return Jl(2048,8,n,e)}function eg(n,e){return Jl(4,2,n,e)}function tg(n,e){return Jl(4,4,n,e)}function ng(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ig(n,e,t){return t=t!=null?t.concat([n]):null,Jl(4,4,ng.bind(null,e,n),t)}function lh(){}function rg(n,e){var t=On();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&rh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function sg(n,e){var t=On();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&rh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function og(n,e,t){return Ur&21?($n(t,e)||(t=d0(),vt.lanes|=t,Nr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,cn=!0),n.memoizedState=t)}function Ex(n,e){var t=et;et=t!==0&&4>t?t:4,n(!0);var i=Fc.transition;Fc.transition={};try{n(!1),e()}finally{et=t,Fc.transition=i}}function ag(){return On().memoizedState}function wx(n,e,t){var i=Ki(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},lg(n))cg(e,t);else if(t=V0(n,e,t,i),t!==null){var r=sn();qn(t,n,i,r),ug(t,e,i)}}function Tx(n,e,t){var i=Ki(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(lg(n))cg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=V0(n,e,r,i),t!==null&&(r=sn(),qn(t,n,i,r),ug(t,e,i))}}function lg(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function cg(n,e){Ao=Ll=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ug(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bd(n,t)}}var Dl={readContext:Fn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Ax={readContext:Fn,useCallback:function(n,e){return Qn().memoizedState=[n,e===void 0?null:e],n},useContext:Fn,useEffect:Af,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ll(4194308,4,ng.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ll(4194308,4,n,e)},useInsertionEffect:function(n,e){return ll(4,2,n,e)},useMemo:function(n,e){var t=Qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Qn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=wx.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=Qn();return n={current:n},e.memoizedState=n},useState:Tf,useDebugValue:lh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Tf(!1),e=n[0];return n=Ex.bind(null,n[1]),Qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=Qn();if(ft){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Ft===null)throw Error(ee(349));Ur&30||q0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Af(K0.bind(null,i,s,n),[n]),i.flags|=2048,qo(9,$0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Qn(),e=Ft.identifierPrefix;if(ft){var t=_i,i=gi;t=(i&~(1<<32-Yn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=jo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Sx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:Fn,useCallback:rg,useContext:Fn,useEffect:ah,useImperativeHandle:ig,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:sg,useReducer:Oc,useRef:J0,useState:function(){return Oc(Yo)},useDebugValue:lh,useDeferredValue:function(n){var e=On();return og(e,Ct.memoizedState,n)},useTransition:function(){var n=Oc(Yo)[0],e=On().memoizedState;return[n,e]},useMutableSource:j0,useSyncExternalStore:Y0,useId:ag,unstable_isNewReconciler:!1},Cx={readContext:Fn,useCallback:rg,useContext:Fn,useEffect:ah,useImperativeHandle:ig,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:sg,useReducer:zc,useRef:J0,useState:function(){return zc(Yo)},useDebugValue:lh,useDeferredValue:function(n){var e=On();return Ct===null?e.memoizedState=n:og(e,Ct.memoizedState,n)},useTransition:function(){var n=zc(Yo)[0],e=On().memoizedState;return[n,e]},useMutableSource:j0,useSyncExternalStore:Y0,useId:ag,unstable_isNewReconciler:!1};function Gn(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ju(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ec={isMounted:function(n){return(n=n._reactInternals)?Hr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=Ki(n),s=yi(i,r);s.payload=e,t!=null&&(s.callback=t),e=qi(n,s,r),e!==null&&(qn(e,n,r,i),ol(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=Ki(n),s=yi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=qi(n,s,r),e!==null&&(qn(e,n,r,i),ol(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=Ki(n),r=yi(t,i);r.tag=2,e!=null&&(r.callback=e),e=qi(n,r,i),e!==null&&(qn(e,n,i,t),ol(e,n,i))}};function Rf(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(t,i)||!ko(r,s):!0}function dg(n,e,t){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=dn(e)?Dr:qt.current,i=e.contextTypes,s=(i=i!=null)?Us(n,r):nr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Cf(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ec.enqueueReplaceState(e,e.state,null)}function ed(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},eh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=dn(e)?Dr:qt.current,r.context=Us(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),bl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,e){try{var t="",i=e;do t+=nv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Bc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function td(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function hg(n,e,t){t=yi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ul||(Ul=!0,dd=i),td(n,e)},t}function fg(n,e,t){t=yi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){td(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){td(n,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function bf(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Vx.bind(null,n,e,t),e.then(n,n))}function Pf(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Lf(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=yi(-1,1),e.tag=2,qi(t,e,1))),t.lanes|=1),n)}var Px=bi.ReactCurrentOwner,cn=!1;function tn(n,e,t,i){e.child=n===null?G0(e,null,t,i):Fs(e,n.child,t,i)}function Df(n,e,t,i,r){t=t.render;var s=e.ref;return Ps(e,r),i=sh(n,e,t,i,s,r),t=oh(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ai(n,e,r)):(ft&&t&&Yd(e),e.flags|=1,tn(n,e,i,r),e.child)}function If(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!gh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,pg(n,e,s,i,r)):(n=hl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ko,t(o,i)&&n.ref===e.ref)return Ai(n,e,r)}return e.flags|=1,n=Zi(s,i),n.ref=e.ref,n.return=e,e.child=n}function pg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ko(s,i)&&n.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(cn=!0);else return e.lanes=n.lanes,Ai(n,e,r)}return nd(n,e,t,i,r)}function mg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Es,_n),_n|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(Es,_n),_n|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(Es,_n),_n|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(Es,_n),_n|=i;return tn(n,e,r,t),e.child}function gg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function nd(n,e,t,i,r){var s=dn(t)?Dr:qt.current;return s=Us(e,s),Ps(e,r),t=sh(n,e,t,i,s,r),i=oh(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ai(n,e,r)):(ft&&i&&Yd(e),e.flags|=1,tn(n,e,t,r),e.child)}function Uf(n,e,t,i,r){if(dn(t)){var s=!0;wl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)cl(n,e),dg(e,t,i),ed(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=dn(t)?Dr:qt.current,c=Us(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Cf(e,o,i,c),Oi=!1;var f=e.memoizedState;o.state=f,bl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||un.current||Oi?(typeof u=="function"&&(Ju(e,t,u,i),l=e.memoizedState),(a=Oi||Rf(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,W0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=dn(t)?Dr:qt.current,l=Us(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Cf(e,o,i,l),Oi=!1,f=e.memoizedState,o.state=f,bl(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||un.current||Oi?(typeof p=="function"&&(Ju(e,t,p,i),v=e.memoizedState),(c=Oi||Rf(e,t,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return id(n,e,t,i,s,r)}function id(n,e,t,i,r,s){gg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xf(e,t,!1),Ai(n,e,s);i=e.stateNode,Px.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Fs(e,n.child,null,s),e.child=Fs(e,null,a,s)):tn(n,e,a,s),e.memoizedState=i.state,r&&xf(e,t,!0),e.child}function _g(n){var e=n.stateNode;e.pendingContext?vf(n,e.pendingContext,e.pendingContext!==e.context):e.context&&vf(n,e.context,!1),th(n,e.containerInfo)}function Nf(n,e,t,i,r){return Ns(),$d(r),e.flags|=256,tn(n,e,t,i),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(n){return{baseLanes:n,cachePool:null,transitions:null}}function vg(n,e,t){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(_t,r&1),n===null)return Zu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,i,0,null),n=Cr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=sd(t),e.memoizedState=rd,n):ch(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Lx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Cr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?sd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=rd,i}return s=n.child,n=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ch(n,e){return e=ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Sa(n,e,t,i){return i!==null&&$d(i),Fs(e,n.child,null,t),n=ch(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Lx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Bc(Error(ee(422))),Sa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,n.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=rd,s);if(!(e.mode&1))return Sa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Bc(s,i,void 0),Sa(n,e,o,i)}if(a=(o&n.childLanes)!==0,cn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(n,r),qn(i,n,r,-1))}return mh(),i=Bc(Error(ee(421))),Sa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Wx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yn=Yi(r.nextSibling),Mn=e,ft=!0,Wn=null,n!==null&&(Cn[bn++]=gi,Cn[bn++]=_i,Cn[bn++]=Ir,gi=n.id,_i=n.overflow,Ir=e),e=ch(e,i.children),e.flags|=4096,e)}function Ff(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Qu(n.return,e,t)}function kc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function xg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(n,e,i.children,t),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ff(n,t,e);else if(n.tag===19)Ff(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Pl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),kc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Pl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}kc(e,!0,t,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ai(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Nr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=Zi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Dx(n,e,t){switch(e.tag){case 3:_g(e),Ns();break;case 5:X0(e);break;case 1:dn(e.type)&&wl(e);break;case 4:th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(_t,_t.current&1),e.flags|=128,null):t&e.child.childLanes?vg(n,e,t):(lt(_t,_t.current&1),n=Ai(n,e,t),n!==null?n.sibling:null);lt(_t,_t.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return xg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,mg(n,e,t)}return Ai(n,e,t)}var yg,od,Mg,Sg;yg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};od=function(){};Mg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ar(ii.current);var s=null;switch(t){case"input":r=Cu(n,r),i=Cu(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(n,r),i=Lu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Sl)}Iu(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sg=function(n,e,t,i){t!==i&&(e.flags|=4)};function ro(n,e){if(!ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Vt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Ix(n,e,t){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return dn(e.type)&&El(),Vt(e),null;case 3:return i=e.stateNode,Os(),ht(un),ht(qt),ih(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ya(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(pd(Wn),Wn=null))),od(n,e),Vt(e),null;case 5:nh(e);var r=Ar(Xo.current);if(t=e.type,n!==null&&e.stateNode!=null)Mg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Vt(e),null}if(n=Ar(ii.current),ya(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Vo]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<yo.length;r++)ut(yo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Wh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":jh(i,s),ut("invalid",i)}Iu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,n),r=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(t){case"input":da(i),Xh(i,s,!0);break;case"textarea":da(i),Yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Km(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ei]=e,n[Vo]=i,yg(n,e,!1,!1),e.stateNode=n;e:{switch(o=Uu(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<yo.length;r++)ut(yo[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":Wh(n,i),r=Cu(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":jh(n,i),r=Lu(n,i),ut("invalid",n);break;default:r=i}Iu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Uo(n,l):typeof l=="number"&&Uo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&Id(n,s,l,o))}switch(t){case"input":da(n),Xh(n,i,!1);break;case"textarea":da(n),Yh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+tr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?As(n,!!i.multiple,s,!1):i.defaultValue!=null&&As(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Sl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(n&&e.stateNode!=null)Sg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Ar(Xo.current),Ar(ii.current),ya(e)){if(i=e.stateNode,t=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==t)&&(n=Mn,n!==null))switch(n.tag){case 3:xa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Vt(e),null;case 13:if(ht(_t),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ft&&yn!==null&&e.mode&1&&!(e.flags&128))k0(),Ns(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ei]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Wn!==null&&(pd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||_t.current&1?bt===0&&(bt=3):mh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Os(),od(n,e),n===null&&Ho(e.stateNode.containerInfo),Vt(e),null;case 10:return Qd(e.type._context),Vt(e),null;case 17:return dn(e.type)&&El(),Vt(e),null;case 19:if(ht(_t),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Pl(n),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(_t,_t.current&1|2),e.child}n=n.sibling}s.tail!==null&&wt()>Bs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(n=Pl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Vt(e),null}else 2*wt()-s.renderingStartTime>Bs&&t!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,t=_t.current,lt(_t,i?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return ph(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Ux(n,e){switch(qd(e),e.tag){case 1:return dn(e.type)&&El(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Os(),ht(un),ht(qt),ih(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return nh(e),null;case 13:if(ht(_t),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ns()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(_t),null;case 4:return Os(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var Ea=!1,jt=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,de=null;function Ss(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function ad(n,e,t){try{t()}catch(i){St(n,e,i)}}var Of=!1;function Fx(n,e){if(Wu=xl,n=R0(),jd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xu={focusedElem:n,selectionRange:t},xl=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Gn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){St(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return v=Of,Of=!1,v}function Ro(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ad(e,t,s)}r=r.next}while(r!==i)}}function tc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ld(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Eg(n){var e=n.alternate;e!==null&&(n.alternate=null,Eg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ei],delete e[Vo],delete e[qu],delete e[vx],delete e[xx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wg(n){return n.tag===5||n.tag===3||n.tag===4}function zf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(n=n.child,n!==null))for(cd(n,e,t),n=n.sibling;n!==null;)cd(n,e,t),n=n.sibling}function ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ud(n,e,t),n=n.sibling;n!==null;)ud(n,e,t),n=n.sibling}var Ot=null,Vn=!1;function Pi(n,e,t){for(t=t.child;t!==null;)Tg(n,e,t),t=t.sibling}function Tg(n,e,t){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Yl,t)}catch{}switch(t.tag){case 5:jt||Ss(t,e);case 6:var i=Ot,r=Vn;Ot=null,Pi(n,e,t),Ot=i,Vn=r,Ot!==null&&(Vn?(n=Ot,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ot.removeChild(t.stateNode));break;case 18:Ot!==null&&(Vn?(n=Ot,t=t.stateNode,n.nodeType===8?Ic(n.parentNode,t):n.nodeType===1&&Ic(n,t),zo(n)):Ic(Ot,t.stateNode));break;case 4:i=Ot,r=Vn,Ot=t.stateNode.containerInfo,Vn=!0,Pi(n,e,t),Ot=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(t,e,o),r=r.next}while(r!==i)}Pi(n,e,t);break;case 1:if(!jt&&(Ss(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){St(t,e,a)}Pi(n,e,t);break;case 21:Pi(n,e,t);break;case 22:t.mode&1?(jt=(i=jt)||t.memoizedState!==null,Pi(n,e,t),jt=i):Pi(n,e,t);break;default:Pi(n,e,t)}}function Bf(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Nx),e.forEach(function(i){var r=Xx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function zn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Vn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ot===null)throw Error(ee(160));Tg(s,o,r),Ot=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ag(e,n),e=e.sibling}function Ag(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zn(e,n),Zn(n),i&4){try{Ro(3,n,n.return),tc(3,n)}catch(x){St(n,n.return,x)}try{Ro(5,n,n.return)}catch(x){St(n,n.return,x)}}break;case 1:zn(e,n),Zn(n),i&512&&t!==null&&Ss(t,t.return);break;case 5:if(zn(e,n),Zn(n),i&512&&t!==null&&Ss(t,t.return),n.flags&32){var r=n.stateNode;try{Uo(r,"")}catch(x){St(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),Uu(a,o);var c=Uu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Jm(r,h):u==="dangerouslySetInnerHTML"?Zm(r,h):u==="children"?Uo(r,h):Id(r,u,h,c)}switch(a){case"input":bu(r,s);break;case"textarea":$m(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Vo]=s}catch(x){St(n,n.return,x)}}break;case 6:if(zn(e,n),Zn(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){St(n,n.return,x)}}break;case 3:if(zn(e,n),Zn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){St(n,n.return,x)}break;case 4:zn(e,n),Zn(n);break;case 13:zn(e,n),Zn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hh=wt())),i&4&&Bf(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(jt=(c=jt)||u,zn(e,n),jt=c):zn(e,n),Zn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(de=n,u=n.child;u!==null;){for(h=de=u;de!==null;){switch(f=de,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ro(4,f,f.return);break;case 1:Ss(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){St(i,t,x)}}break;case 5:Ss(f,f.return);break;case 22:if(f.memoizedState!==null){Hf(h);continue}}p!==null?(p.return=f,de=p):Hf(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qm("display",o))}catch(x){St(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){St(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zn(e,n),Zn(n),i&4&&Bf(n);break;case 21:break;default:zn(e,n),Zn(n)}}function Zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(wg(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=zf(n);ud(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zf(n);cd(n,a,o);break;default:throw Error(ee(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ox(n,e,t){de=n,Rg(n)}function Rg(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=Ea;var c=jt;if(Ea=o,(jt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Gf(r):l!==null?(l.return=o,de=l):Gf(r);for(;s!==null;)de=s,Rg(s),s=s.sibling;de=r,Ea=a,jt=c}kf(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):kf(n)}}function kf(n){for(;de!==null;){var e=de;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Gn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}wf(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}jt||e.flags&512&&ld(e)}catch(f){St(e,e.return,f)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Hf(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Gf(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tc(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{ld(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{ld(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var zx=Math.ceil,Il=bi.ReactCurrentDispatcher,uh=bi.ReactCurrentOwner,Un=bi.ReactCurrentBatchConfig,Ke=0,Ft=null,At=null,Bt=0,_n=0,Es=lr(0),bt=0,$o=null,Nr=0,nc=0,dh=0,Co=null,ln=null,hh=0,Bs=1/0,pi=null,Ul=!1,dd=null,$i=null,wa=!1,Hi=null,Nl=0,bo=0,hd=null,ul=-1,dl=0;function sn(){return Ke&6?wt():ul!==-1?ul:ul=wt()}function Ki(n){return n.mode&1?Ke&2&&Bt!==0?Bt&-Bt:Mx.transition!==null?(dl===0&&(dl=d0()),dl):(n=et,n!==0||(n=window.event,n=n===void 0?16:v0(n.type)),n):1}function qn(n,e,t,i){if(50<bo)throw bo=0,hd=null,Error(ee(185));ta(n,t,i),(!(Ke&2)||n!==Ft)&&(n===Ft&&(!(Ke&2)&&(nc|=t),bt===4&&Bi(n,Bt)),hn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Bs=wt()+500,Ql&&cr()))}function hn(n,e){var t=n.callbackNode;Mv(n,e);var i=vl(n,n===Ft?Bt:0);if(i===0)t!==null&&Kh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Kh(t),e===1)n.tag===0?yx(Vf.bind(null,n)):O0(Vf.bind(null,n)),gx(function(){!(Ke&6)&&cr()}),t=null;else{switch(h0(i)){case 1:t=zd;break;case 4:t=c0;break;case 16:t=_l;break;case 536870912:t=u0;break;default:t=_l}t=Ng(t,Cg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Cg(n,e){if(ul=-1,dl=0,Ke&6)throw Error(ee(327));var t=n.callbackNode;if(Ls()&&n.callbackNode!==t)return null;var i=vl(n,n===Ft?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Fl(n,i);else{e=i;var r=Ke;Ke|=2;var s=Pg();(Ft!==n||Bt!==e)&&(pi=null,Bs=wt()+500,Rr(n,e));do try{Hx();break}catch(a){bg(n,a)}while(!0);Zd(),Il.current=s,Ke=r,At!==null?e=0:(Ft=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=Bu(n),r!==0&&(i=r,e=fd(n,r))),e===1)throw t=$o,Rr(n,0),Bi(n,i),hn(n,wt()),t;if(e===6)Bi(n,i);else{if(r=n.current.alternate,!(i&30)&&!Bx(r)&&(e=Fl(n,i),e===2&&(s=Bu(n),s!==0&&(i=s,e=fd(n,s))),e===1))throw t=$o,Rr(n,0),Bi(n,i),hn(n,wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:vr(n,ln,pi);break;case 3:if(Bi(n,i),(i&130023424)===i&&(e=hh+500-wt(),10<e)){if(vl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yu(vr.bind(null,n,ln,pi),e);break}vr(n,ln,pi);break;case 4:if(Bi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zx(i/1960))-i,10<i){n.timeoutHandle=Yu(vr.bind(null,n,ln,pi),i);break}vr(n,ln,pi);break;case 5:vr(n,ln,pi);break;default:throw Error(ee(329))}}}return hn(n,wt()),n.callbackNode===t?Cg.bind(null,n):null}function fd(n,e){var t=Co;return n.current.memoizedState.isDehydrated&&(Rr(n,e).flags|=256),n=Fl(n,e),n!==2&&(e=ln,ln=t,e!==null&&pd(e)),n}function pd(n){ln===null?ln=n:ln.push.apply(ln,n)}function Bx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(n,e){for(e&=~dh,e&=~nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Yn(e),i=1<<t;n[t]=-1,e&=~i}}function Vf(n){if(Ke&6)throw Error(ee(327));Ls();var e=vl(n,0);if(!(e&1))return hn(n,wt()),null;var t=Fl(n,e);if(n.tag!==0&&t===2){var i=Bu(n);i!==0&&(e=i,t=fd(n,i))}if(t===1)throw t=$o,Rr(n,0),Bi(n,e),hn(n,wt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,vr(n,ln,pi),hn(n,wt()),null}function fh(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Bs=wt()+500,Ql&&cr())}}function Fr(n){Hi!==null&&Hi.tag===0&&!(Ke&6)&&Ls();var e=Ke;Ke|=1;var t=Un.transition,i=et;try{if(Un.transition=null,et=1,n)return n()}finally{et=i,Un.transition=t,Ke=e,!(Ke&6)&&cr()}}function ph(){_n=Es.current,ht(Es)}function Rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,mx(t)),At!==null)for(t=At.return;t!==null;){var i=t;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:Os(),ht(un),ht(qt),ih();break;case 5:nh(i);break;case 4:Os();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:Qd(i.type._context);break;case 22:case 23:ph()}t=t.return}if(Ft=n,At=n=Zi(n.current,null),Bt=_n=e,bt=0,$o=null,dh=nc=Nr=0,ln=Co=null,Tr!==null){for(e=0;e<Tr.length;e++)if(t=Tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Tr=null}return n}function bg(n,e){do{var t=At;try{if(Zd(),al.current=Dl,Ll){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Ur=0,Nt=Ct=vt=null,Ao=!1,jo=0,uh.current=null,t===null||t.return===null){bt=1,$o=e,At=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Pf(o);if(p!==null){p.flags&=-257,Lf(p,o,a,s,e),p.mode&1&&bf(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){bf(s,c,e),mh();break e}l=Error(ee(426))}}else if(ft&&a.mode&1){var m=Pf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lf(m,o,a,s,e),$d(zs(l,a));break e}}s=l=zs(l,a),bt!==4&&(bt=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=hg(s,l,e);Ef(s,d);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&($i===null||!$i.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=fg(s,a,e);Ef(s,y);break e}}s=s.return}while(s!==null)}Dg(t)}catch(R){e=R,At===t&&t!==null&&(At=t=t.return);continue}break}while(!0)}function Pg(){var n=Il.current;return Il.current=Dl,n===null?Dl:n}function mh(){(bt===0||bt===3||bt===2)&&(bt=4),Ft===null||!(Nr&268435455)&&!(nc&268435455)||Bi(Ft,Bt)}function Fl(n,e){var t=Ke;Ke|=2;var i=Pg();(Ft!==n||Bt!==e)&&(pi=null,Rr(n,e));do try{kx();break}catch(r){bg(n,r)}while(!0);if(Zd(),Ke=t,Il.current=i,At!==null)throw Error(ee(261));return Ft=null,Bt=0,bt}function kx(){for(;At!==null;)Lg(At)}function Hx(){for(;At!==null&&!hv();)Lg(At)}function Lg(n){var e=Ug(n.alternate,n,_n);n.memoizedProps=n.pendingProps,e===null?Dg(n):At=e,uh.current=null}function Dg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Ux(t,e),t!==null){t.flags&=32767,At=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,At=null;return}}else if(t=Ix(t,e,_n),t!==null){At=t;return}if(e=e.sibling,e!==null){At=e;return}At=e=n}while(e!==null);bt===0&&(bt=5)}function vr(n,e,t){var i=et,r=Un.transition;try{Un.transition=null,et=1,Gx(n,e,t,i)}finally{Un.transition=r,et=i}return null}function Gx(n,e,t,i){do Ls();while(Hi!==null);if(Ke&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Sv(n,s),n===Ft&&(At=Ft=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wa||(wa=!0,Ng(_l,function(){return Ls(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=et;et=1;var a=Ke;Ke|=4,uh.current=null,Fx(n,t),Ag(t,n),lx(Xu),xl=!!Wu,Xu=Wu=null,n.current=t,Ox(t),fv(),Ke=a,et=o,Un.transition=s}else n.current=t;if(wa&&(wa=!1,Hi=n,Nl=r),s=n.pendingLanes,s===0&&($i=null),gv(t.stateNode),hn(n,wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,n=dd,dd=null,n;return Nl&1&&n.tag!==0&&Ls(),s=n.pendingLanes,s&1?n===hd?bo++:(bo=0,hd=n):bo=0,cr(),null}function Ls(){if(Hi!==null){var n=h0(Nl),e=Un.transition,t=et;try{if(Un.transition=null,et=16>n?16:n,Hi===null)var i=!1;else{if(n=Hi,Hi=null,Nl=0,Ke&6)throw Error(ee(331));var r=Ke;for(Ke|=4,de=n.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:Ro(8,u,s)}var h=u.child;if(h!==null)h.return=u,de=h;else for(;de!==null;){u=de;var f=u.sibling,p=u.return;if(Eg(u),u===c){de=null;break}if(f!==null){f.return=p,de=f;break}de=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,de=d;break e}de=s.return}}var g=n.current;for(de=g;de!==null;){o=de;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,de=_;else e:for(o=g;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(R){St(a,a.return,R)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(Ke=r,cr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Yl,n)}catch{}i=!0}return i}finally{et=t,Un.transition=e}}return!1}function Wf(n,e,t){e=zs(t,e),e=hg(n,e,1),n=qi(n,e,1),e=sn(),n!==null&&(ta(n,1,e),hn(n,e))}function St(n,e,t){if(n.tag===3)Wf(n,n,t);else for(;e!==null;){if(e.tag===3){Wf(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){n=zs(t,n),n=fg(e,n,1),e=qi(e,n,1),n=sn(),e!==null&&(ta(e,1,n),hn(e,n));break}}e=e.return}}function Vx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,Ft===n&&(Bt&t)===t&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>wt()-hh?Rr(n,0):dh|=t),hn(n,e)}function Ig(n,e){e===0&&(n.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var t=sn();n=Ti(n,e),n!==null&&(ta(n,e,t),hn(n,t))}function Wx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Ig(n,t)}function Xx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Ig(n,t)}var Ug;Ug=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return cn=!1,Dx(n,e,t);cn=!!(n.flags&131072)}else cn=!1,ft&&e.flags&1048576&&z0(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(n,e),n=e.pendingProps;var r=Us(e,qt.current);Ps(e,t),r=sh(null,e,i,n,r,t);var s=oh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,eh(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,ed(e,i,n,t),e=id(null,e,i,!0,s,t)):(e.tag=0,ft&&s&&Yd(e),tn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yx(i),n=Gn(i,n),r){case 0:e=nd(null,e,i,n,t);break e;case 1:e=Uf(null,e,i,n,t);break e;case 11:e=Df(null,e,i,n,t);break e;case 14:e=If(null,e,i,Gn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),nd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Uf(n,e,i,r,t);case 3:e:{if(_g(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W0(n,e),bl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(ee(423)),e),e=Nf(n,e,i,t,r);break e}else if(i!==r){r=zs(Error(ee(424)),e),e=Nf(n,e,i,t,r);break e}else for(yn=Yi(e.stateNode.containerInfo.firstChild),Mn=e,ft=!0,Wn=null,t=G0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ns(),i===r){e=Ai(n,e,t);break e}tn(n,e,i,t)}e=e.child}return e;case 5:return X0(e),n===null&&Zu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ju(i,r)?o=null:s!==null&&ju(i,s)&&(e.flags|=32),gg(n,e),tn(n,e,o,t),e.child;case 6:return n===null&&Zu(e),null;case 13:return vg(n,e,t);case 4:return th(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Fs(e,null,i,t):tn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Df(n,e,i,r,t);case 7:return tn(n,e,e.pendingProps,t),e.child;case 8:return tn(n,e,e.pendingProps.children,t),e.child;case 12:return tn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Rl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!un.current){e=Ai(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Qu(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Qu(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,t),r=Fn(r),i=i(r),e.flags|=1,tn(n,e,i,t),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),If(n,e,i,r,t);case 15:return pg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),cl(n,e),e.tag=1,dn(i)?(n=!0,wl(e)):n=!1,Ps(e,t),dg(e,i,r),ed(e,i,r,t),id(null,e,i,!0,n,t);case 19:return xg(n,e,t);case 22:return mg(n,e,t)}throw Error(ee(156,e.tag))};function Ng(n,e){return l0(n,e)}function jx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,e,t,i){return new jx(n,e,t,i)}function gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yx(n){if(typeof n=="function")return gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Nd)return 11;if(n===Fd)return 14}return 2}function Zi(n,e){var t=n.alternate;return t===null?(t=In(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function hl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")gh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fs:return Cr(t.children,r,s,e);case Ud:o=8,r|=8;break;case wu:return n=In(12,t,e,r|2),n.elementType=wu,n.lanes=s,n;case Tu:return n=In(13,t,e,r),n.elementType=Tu,n.lanes=s,n;case Au:return n=In(19,t,e,r),n.elementType=Au,n.lanes=s,n;case Xm:return ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Vm:o=10;break e;case Wm:o=9;break e;case Nd:o=11;break e;case Fd:o=14;break e;case Fi:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=In(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Cr(n,e,t,i){return n=In(7,n,i,e),n.lanes=t,n}function ic(n,e,t,i){return n=In(22,n,i,e),n.elementType=Xm,n.lanes=t,n.stateNode={isHidden:!1},n}function Hc(n,e,t){return n=In(6,n,null,e),n.lanes=t,n}function Gc(n,e,t){return e=In(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function qx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _h(n,e,t,i,r,s,o,a,l){return n=new qx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(s),n}function $x(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Fg(n){if(!n)return nr;n=n._reactInternals;e:{if(Hr(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(dn(t))return F0(n,t,e)}return e}function Og(n,e,t,i,r,s,o,a,l){return n=_h(t,i,!0,n,r,s,o,a,l),n.context=Fg(null),t=n.current,i=sn(),r=Ki(t),s=yi(i,r),s.callback=e??null,qi(t,s,r),n.current.lanes=r,ta(n,r,i),hn(n,i),n}function rc(n,e,t,i){var r=e.current,s=sn(),o=Ki(r);return t=Fg(t),e.context===null?e.context=t:e.pendingContext=t,e=yi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=qi(r,e,o),n!==null&&(qn(n,r,o,s),ol(n,r,o)),o}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xf(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function vh(n,e){Xf(n,e),(n=n.alternate)&&Xf(n,e)}function Kx(){return null}var zg=typeof reportError=="function"?reportError:function(n){console.error(n)};function xh(n){this._internalRoot=n}sc.prototype.render=xh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));rc(n,e,null,null)};sc.prototype.unmount=xh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Fr(function(){rc(null,n,null,null)}),e[wi]=null}};function sc(n){this._internalRoot=n}sc.prototype.unstable_scheduleHydration=function(n){if(n){var e=m0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<zi.length&&e!==0&&e<zi[t].priority;t++);zi.splice(t,0,n),t===0&&_0(n)}};function yh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jf(){}function Zx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ol(o);s.call(c)}}var o=Og(e,i,n,0,null,!1,!1,"",jf);return n._reactRootContainer=o,n[wi]=o.current,Ho(n.nodeType===8?n.parentNode:n),Fr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ol(l);a.call(c)}}var l=_h(n,0,!1,null,null,!1,!1,"",jf);return n._reactRootContainer=l,n[wi]=l.current,Ho(n.nodeType===8?n.parentNode:n),Fr(function(){rc(e,l,t,i)}),l}function ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}rc(e,o,n,r)}else o=Zx(t,e,n,r,i);return Ol(o)}f0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=xo(e.pendingLanes);t!==0&&(Bd(e,t|1),hn(e,wt()),!(Ke&6)&&(Bs=wt()+500,cr()))}break;case 13:Fr(function(){var i=Ti(n,1);if(i!==null){var r=sn();qn(i,n,1,r)}}),vh(n,1)}};kd=function(n){if(n.tag===13){var e=Ti(n,134217728);if(e!==null){var t=sn();qn(e,n,134217728,t)}vh(n,134217728)}};p0=function(n){if(n.tag===13){var e=Ki(n),t=Ti(n,e);if(t!==null){var i=sn();qn(t,n,e,i)}vh(n,e)}};m0=function(){return et};g0=function(n,e){var t=et;try{return et=n,e()}finally{et=t}};Fu=function(n,e,t){switch(e){case"input":if(bu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zl(i);if(!r)throw Error(ee(90));Ym(i),bu(i,r)}}}break;case"textarea":$m(n,t);break;case"select":e=t.value,e!=null&&As(n,!!t.multiple,e,!1)}};n0=fh;i0=Fr;var Qx={usingClientEntryPoint:!1,Events:[ia,_s,Zl,e0,t0,fh]},so={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=o0(n),n===null?null:n.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Yl=Ta.inject(Jx),ni=Ta}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(e))throw Error(ee(200));return $x(n,e,null,t)};wn.createRoot=function(n,e){if(!yh(n))throw Error(ee(299));var t=!1,i="",r=zg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_h(n,1,!1,null,null,t,!1,i,r),n[wi]=e.current,Ho(n.nodeType===8?n.parentNode:n),new xh(e)};wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=o0(e),n=n===null?null:n.stateNode,n};wn.flushSync=function(n){return Fr(n)};wn.hydrate=function(n,e,t){if(!oc(e))throw Error(ee(200));return ac(null,n,e,!0,t)};wn.hydrateRoot=function(n,e,t){if(!yh(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=zg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Og(e,null,n,1,t??null,r,!1,s,o),n[wi]=e.current,Ho(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new sc(e)};wn.render=function(n,e,t){if(!oc(e))throw Error(ee(200));return ac(null,n,e,!1,t)};wn.unmountComponentAtNode=function(n){if(!oc(n))throw Error(ee(40));return n._reactRootContainer?(Fr(function(){ac(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1};wn.unstable_batchedUpdates=fh;wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!oc(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return ac(n,e,t,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function Bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg)}catch(n){console.error(n)}}Bg(),Bm.exports=wn;var ey=Bm.exports,Yf=ey;Su.createRoot=Yf.createRoot,Su.hydrateRoot=Yf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="160",ty=0,qf=1,ny=2,kg=1,iy=2,fi=3,ir=0,Yt=1,xn=2,Qi=0,Mi=1,Ye=2,$f=3,Kf=4,ry=5,Mr=100,sy=101,oy=102,Zf=103,Qf=104,ay=200,ly=201,cy=202,uy=203,md=204,gd=205,dy=206,hy=207,fy=208,py=209,my=210,gy=211,_y=212,vy=213,xy=214,yy=0,My=1,Sy=2,zl=3,Ey=4,wy=5,Ty=6,Ay=7,Hg=0,Ry=1,Cy=2,Ji=0,by=1,Py=2,Ly=3,Gg=4,Dy=5,Iy=6,Vg=300,ks=301,Hs=302,_d=303,vd=304,lc=306,xd=1e3,Xn=1001,yd=1002,nn=1003,Jf=1004,Vc=1005,Pn=1006,Uy=1007,Ko=1008,er=1009,Ny=1010,Fy=1011,Sh=1012,Wg=1013,Gi=1014,Vi=1015,Zo=1016,Xg=1017,jg=1018,br=1020,Oy=1021,jn=1023,zy=1024,By=1025,Pr=1026,Gs=1027,ky=1028,Yg=1029,Hy=1030,qg=1031,$g=1033,Wc=33776,Xc=33777,jc=33778,Yc=33779,ep=35840,tp=35841,np=35842,ip=35843,Kg=36196,rp=37492,sp=37496,op=37808,ap=37809,lp=37810,cp=37811,up=37812,dp=37813,hp=37814,fp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,qc=36492,yp=36494,Mp=36495,Gy=36283,Sp=36284,Ep=36285,wp=36286,Zg=3e3,Lr=3001,Vy=3200,Wy=3201,Qg=0,Xy=1,Dn="",zt="srgb",Ri="srgb-linear",Eh="display-p3",cc="display-p3-linear",Bl="linear",dt="srgb",kl="rec709",Hl="p3",Xr=7680,Tp=519,jy=512,Yy=513,qy=514,Jg=515,$y=516,Ky=517,Zy=518,Qy=519,Md=35044,Ap="300 es",Sd=1035,vi=2e3,Gl=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rp=1234567;const Po=Math.PI/180,Qo=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function wh(n,e){return(n%e+e)%e}function Jy(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function eM(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function tM(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function nM(n,e=1){return e-Math.abs(wh(n,e*2)-e)}function iM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function oM(n,e){return n+Math.random()*(e-n)}function aM(n){return n*(.5-Math.random())}function lM(n){n!==void 0&&(Rp=n);let e=Rp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cM(n){return n*Po}function uM(n){return n*Qo}function Ed(n){return(n&n-1)===0&&n!==0}function dM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fM={DEG2RAD:Po,RAD2DEG:Qo,generateUUID:Si,clamp:rn,euclideanModulo:wh,mapLinear:Jy,inverseLerp:eM,lerp:Lo,damp:tM,pingpong:nM,smoothstep:iM,smootherstep:rM,randInt:sM,randFloat:oM,randFloatSpread:aM,seededRandom:lM,degToRad:cM,radToDeg:uM,isPowerOfTwo:Ed,ceilPowerOfTwo:dM,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:hM,normalize:nt,denormalize:ti};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],x=r[0],m=r[3],d=r[6],g=r[1],_=r[4],y=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*x+a*g+l*R,s[3]=o*m+a*_+l*w,s[6]=o*d+a*y+l*A,s[1]=c*x+u*g+h*R,s[4]=c*m+u*_+h*w,s[7]=c*d+u*y+h*A,s[2]=f*x+p*g+v*R,s[5]=f*m+p*_+v*w,s[8]=f*d+p*y+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=t*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new We;function e_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pM(){const n=Wl("canvas");return n.style.display="block",n}const Cp={};function Do(n){n in Cp||(Cp[n]=!0,console.warn(n))}const bp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Ri]:{transfer:Bl,primaries:kl,toReference:n=>n,fromReference:n=>n},[zt]:{transfer:dt,primaries:kl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cc]:{transfer:Bl,primaries:Hl,toReference:n=>n.applyMatrix3(Pp),fromReference:n=>n.applyMatrix3(bp)},[Eh]:{transfer:dt,primaries:Hl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pp),fromReference:n=>n.applyMatrix3(bp).convertLinearToSRGB()}},mM=new Set([Ri,cc]),it={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Aa[e].toReference,r=Aa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Aa[n].primaries},getTransfer:function(n){return n===Dn?Bl:Aa[n].transfer}};function Ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jr;class t_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=Wl("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gM=0;class n_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?t_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class fn extends qs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Xn,r=Xn,s=Pn,o=Ko,a=jn,l=er,c=fn.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Si(),this.name="",this.source=new n_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Lr?zt:Dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Lr:Zg}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?zt:Dn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Vg;fn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(p+1)/2,R=(d+1)/2,w=(u+f)/4,A=(h+x)/4,b=(v+m)/4;return _>y&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=b/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-x)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Lr?zt:Dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new n_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends vM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class i_ extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xM extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==v){let m=1-a;const d=l*f+c*p+u*v+h*x,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const R=Math.sqrt(_),w=Math.atan2(R,d*g);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const y=a*g;if(l=l*m+f*y,c=c*m+p*y,u=u*m+v*y,h=h*m+x*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*p-c*f,e[t+1]=l*v+u*f+c*h-a*p,e[t+2]=c*v+u*p+a*f-l*h,e[t+3]=u*v-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new P,Lp=new zr;class Gr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Ca.subVectors(this.max,oo),Yr.subVectors(e.a,oo),qr.subVectors(e.b,oo),$r.subVectors(e.c,oo),Li.subVectors(qr,Yr),Di.subVectors($r,qr),fr.subVectors(Yr,$r);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-fr.z,fr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,fr.z,0,-fr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-fr.y,fr.x,0];return!Jc(t,Yr,qr,$r,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Jc(t,Yr,qr,$r,Ca))?!1:(ba.crossVectors(Li,Di),t=[ba.x,ba.y,ba.z],Jc(t,Yr,qr,$r,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,Ra=new Gr,Yr=new P,qr=new P,$r=new P,Li=new P,Di=new P,fr=new P,oo=new P,Ca=new P,ba=new P,pr=new P;function Jc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){pr.fromArray(n,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yM=new Gr,ao=new P,eu=new P;class Vr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(eu)),this.expandByPoint(ao.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new P,tu=new P,Pa=new P,Ii=new P,nu=new P,La=new P,iu=new P;class Th{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tu.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(tu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pa),a=Ii.dot(this.direction),l=-Ii.dot(Pa),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,p,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(tu).addScaledVector(Pa,f),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,s){nu.subVectors(t,e),La.subVectors(i,e),iu.crossVectors(nu,La);let o=this.direction.dot(iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Ii,La));if(l<0)return null;const c=a*this.direction.dot(nu.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(iu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,v,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,v,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,x=c*h;t[0]=f+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,SM)}lookAt(e,t,i){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ui.crossVectors(i,mn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ui.crossVectors(i,mn)),Ui.normalize(),Da.crossVectors(mn,Ui),r[0]=Ui.x,r[4]=Da.x,r[8]=mn.x,r[1]=Ui.y,r[5]=Da.y,r[9]=mn.y,r[2]=Ui.z,r[6]=Da.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],d=i[14],g=i[3],_=i[7],y=i[11],R=i[15],w=r[0],A=r[4],b=r[8],M=r[12],S=r[1],N=r[5],z=r[9],$=r[13],D=r[2],F=r[6],X=r[10],Y=r[14],I=r[3],O=r[7],B=r[11],q=r[15];return s[0]=o*w+a*S+l*D+c*I,s[4]=o*A+a*N+l*F+c*O,s[8]=o*b+a*z+l*X+c*B,s[12]=o*M+a*$+l*Y+c*q,s[1]=u*w+h*S+f*D+p*I,s[5]=u*A+h*N+f*F+p*O,s[9]=u*b+h*z+f*X+p*B,s[13]=u*M+h*$+f*Y+p*q,s[2]=v*w+x*S+m*D+d*I,s[6]=v*A+x*N+m*F+d*O,s[10]=v*b+x*z+m*X+d*B,s[14]=v*M+x*$+m*Y+d*q,s[3]=g*w+_*S+y*D+R*I,s[7]=g*A+_*N+y*F+R*O,s[11]=g*b+_*z+y*X+R*B,s[15]=g*M+_*$+y*Y+R*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],d=e[15],g=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,_=v*f*c-u*m*c-v*l*p+o*m*p+u*l*d-o*f*d,y=u*x*c-v*h*c+v*a*p-o*x*p-u*a*d+o*h*d,R=v*h*l-u*x*l-v*a*f+o*x*f+u*a*m-o*h*m,w=t*g+i*_+r*y+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*d-i*f*d)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*m*s-v*f*s+v*r*p-t*m*p-u*r*d+t*f*d)*A,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(v*h*s-u*x*s-v*i*p+t*x*p+u*i*d-t*h*d)*A,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*d+t*a*d)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*A,e[12]=R*A,e[13]=(u*x*r-v*h*r+v*i*f-t*x*f-u*i*m+t*h*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,v=s*h,x=o*u,m=o*h,d=a*h,g=l*c,_=l*u,y=l*h,R=i.x,w=i.y,A=i.z;return r[0]=(1-(x+d))*R,r[1]=(p+y)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+d))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,h=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,v;if(a===vi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Gl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let v,x;if(a===vi)v=(o+s)*h,x=-2*h;else if(a===Gl)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Kr=new P,kn=new ct,MM=new P(0,0,0),SM=new P(1,1,1),Ui=new P,Da=new P,mn=new P,Dp=new ct,Ip=new zr;class sa{constructor(e=0,t=0,i=0,r=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const Up=new P,Zr=new zr,ui=new ct,Ia=new P,lo=new P,wM=new P,TM=new zr,Np=new P(1,0,0),Fp=new P(0,1,0),Op=new P(0,0,1),AM={type:"added"},RM={type:"removed"};class Rt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new P,t=new sa,i=new zr,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,t){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(lo,Ia,this.up):ui.lookAt(Ia,lo,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(ui),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(AM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new P(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new P,di=new P,ru=new P,hi=new P,Qr=new P,Jr=new P,zp=new P,su=new P,ou=new P,au=new P;let Ua=!1;class Ln{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),di.subVectors(i,t),ru.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(di),l=Hn.dot(ru),c=di.dot(di),u=di.dot(ru),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),di.subVectors(e,t),Hn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Hn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),Jr.subVectors(s,i),su.subVectors(e,i);const l=Qr.dot(su),c=Jr.dot(su);if(l<=0&&c<=0)return t.copy(i);ou.subVectors(e,r);const u=Qr.dot(ou),h=Jr.dot(ou);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qr,o);au.subVectors(e,s);const p=Qr.dot(au),v=Jr.dot(au);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Jr,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return zp.subVectors(s,r),a=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(zp,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Qr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Na={h:0,s:0,l:0};function lu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=wh(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=lu(o,s,e+1/3),this.g=lu(o,s,e),this.b=lu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return it.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){it.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Na);const i=Lo(Ni.h,Na.h,t),r=Lo(Ni.s,Na.s,t),s=Lo(Ni.l,Na.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new se;se.NAMES=s_;let CM=0;class ur extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Mi,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ri extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new P,Fa=new be;class ge{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Md&&(e.usage=this.usage),e}}class o_ extends ge{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a_ extends ge{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $e extends ge{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bM=0;const Rn=new ct,cu=new Rt,es=new P,gn=new Gr,co=new Gr,Ut=new P;class Pe extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?a_:o_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(gn.min,co.min),gn.expandByPoint(Ut),Ut.addVectors(gn.max,co.max),gn.expandByPoint(Ut)):(gn.expandByPoint(co.min),gn.expandByPoint(co.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Ut.add(es)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new P,u[S]=new P;const h=new P,f=new P,p=new P,v=new be,x=new be,m=new be,d=new P,g=new P;function _(S,N,z){h.fromArray(r,S*3),f.fromArray(r,N*3),p.fromArray(r,z*3),v.fromArray(o,S*2),x.fromArray(o,N*2),m.fromArray(o,z*2),f.sub(h),p.sub(h),x.sub(v),m.sub(v);const $=1/(x.x*m.y-m.x*x.y);isFinite($)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar($),g.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar($),c[S].add(d),c[N].add(d),c[z].add(d),u[S].add(g),u[N].add(g),u[z].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,N=y.length;S<N;++S){const z=y[S],$=z.start,D=z.count;for(let F=$,X=$+D;F<X;F+=3)_(i[F+0],i[F+1],i[F+2])}const R=new P,w=new P,A=new P,b=new P;function M(S){A.fromArray(s,S*3),b.copy(A);const N=c[S];R.copy(N),R.sub(A.multiplyScalar(A.dot(N))).normalize(),w.crossVectors(b,N);const $=w.dot(u[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=$}for(let S=0,N=y.length;S<N;++S){const z=y[S],$=z.start,D=z.count;for(let F=$,X=$+D;F<X;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ge(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new ge(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bp=new ct,mr=new Th,Oa=new Vr,kp=new P,ts=new P,ns=new P,is=new P,uu=new P,za=new P,Ba=new be,ka=new be,Ha=new be,Hp=new P,Gp=new P,Vp=new P,Ga=new P,Va=new P;class rt extends Rt{constructor(e=new Pe,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(uu.fromBufferAttribute(h,e),o?za.addScaledVector(uu,u):za.addScaledVector(uu.sub(t),u))}t.add(za)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Oa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Oa,kp)===null||mr.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(Bp.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Bp),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=_;y<R;y+=3){const w=a.getX(y),A=a.getX(y+1),b=a.getX(y+2);r=Wa(this,d,e,i,c,u,h,w,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const g=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Wa(this,o,e,i,c,u,h,g,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,R=_;y<R;y+=3){const w=y,A=y+1,b=y+2;r=Wa(this,d,e,i,c,u,h,w,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const g=m,_=m+1,y=m+2;r=Wa(this,o,e,i,c,u,h,g,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function PM(n,e,t,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;Va.copy(a),Va.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:n}}function Wa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ts),n.getVertexPosition(l,ns),n.getVertexPosition(c,is);const u=PM(n,e,t,i,ts,ns,is,Ga);if(u){r&&(Ba.fromBufferAttribute(r,a),ka.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),u.uv=Ln.getInterpolation(Ga,ts,ns,is,Ba,ka,Ha,new be)),s&&(Ba.fromBufferAttribute(s,a),ka.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),u.uv1=Ln.getInterpolation(Ga,ts,ns,is,Ba,ka,Ha,new be),u.uv2=u.uv1),o&&(Hp.fromBufferAttribute(o,a),Gp.fromBufferAttribute(o,l),Vp.fromBufferAttribute(o,c),u.normal=Ln.getInterpolation(Ga,ts,ns,is,Hp,Gp,Vp,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};Ln.getNormal(ts,ns,is,h.normal),u.face=h}return u}class $s extends Pe{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function v(x,m,d,g,_,y,R,w,A,b,M){const S=y/A,N=R/b,z=y/2,$=R/2,D=w/2,F=A+1,X=b+1;let Y=0,I=0;const O=new P;for(let B=0;B<X;B++){const q=B*N-$;for(let Z=0;Z<F;Z++){const j=Z*S-z;O[x]=j*g,O[m]=q*_,O[d]=D,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[d]=w>0?1:-1,u.push(O.x,O.y,O.z),h.push(Z/A),h.push(1-B/b),Y+=1}}for(let B=0;B<b;B++)for(let q=0;q<A;q++){const Z=f+q+F*B,j=f+q+F*(B+1),K=f+(q+1)+F*(B+1),le=f+(q+1)+F*B;l.push(Z,j,le),l.push(j,K,le),I+=6}a.addGroup(p,I,M),p+=I,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function LM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function l_(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}const DM={clone:Vs,merge:en};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class c_ extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends c_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,ss=1;class NM extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(rs,ss,e,t);r.layers=this.layers,this.add(r);const s=new vn(rs,ss,e,t);s.layers=this.layers,this.add(s);const o=new vn(rs,ss,e,t);o.layers=this.layers,this.add(o);const a=new vn(rs,ss,e,t);a.layers=this.layers,this.add(a);const l=new vn(rs,ss,e,t);l.layers=this.layers,this.add(l);const c=new vn(rs,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class u_ extends fn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FM extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?zt:Dn),this.texture=new u_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $s(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Qi});s.uniforms.tEquirect.value=t;const o=new rt(r,s),a=t.minFilter;return t.minFilter===Ko&&(t.minFilter=Pn),new NM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const du=new P,OM=new P,zM=new We;class xr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=du.subVectors(i,t).cross(OM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zM.getNormalMatrix(e),r=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Vr,Xa=new P;class Ah{constructor(e=new xr,t=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],x=r[10],m=r[11],d=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-d).normalize(),i[1].setComponents(l+s,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+v,y+g).normalize(),i[3].setComponents(l-o,f-u,m-v,y-g).normalize(),i[4].setComponents(l-a,f-h,m-x,y-_).normalize(),t===vi)i[5].setComponents(l+a,f+h,m+x,y+_).normalize();else if(t===Gl)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const f=u.array,p=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&v.length===0&&n.bufferSubData(h,0,f),v.length!==0){for(let x=0,m=v.length;x<m;x++){const d=v[x];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Rh extends Pe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const g=d*f-o;for(let _=0;_<c;_++){const y=_*h-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const _=g+c*d,y=g+c*(d+1),R=g+1+c*(d+1),w=g+1+c*d;p.push(_,y,w),p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.width,e.height,e.widthSegments,e.heightSegments)}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
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
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,KM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JM=`#ifdef USE_IRIDESCENCE
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
#endif`,eS=`#ifdef USE_BUMPMAP
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
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cS=`#define PI 3.141592653589793
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
} // validated`,uS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dS=`vec3 transformedNormal = objectNormal;
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
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`
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
}`,vS=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RS=`#ifdef USE_GRADIENTMAP
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
}`,CS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DS=`uniform bool receiveShadow;
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
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
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
#endif`,BS=`struct PhysicalMaterial {
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
}`,kS=`
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
#endif`,HS=`#if defined( RE_IndirectDiffuse )
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KS=`#if defined( USE_POINTS_UV )
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
#endif`,ZS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
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
#endif`,tE=`#ifdef USE_MORPHTARGETS
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
#endif`,nE=`#ifdef USE_MORPHTARGETS
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
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
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
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,jE=`#if DEPTH_PACKING == 3200
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
}`,YE=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define MATCAP
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
}`,r1=`#define MATCAP
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
}`,s1=`#define NORMAL
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
}`,o1=`#define NORMAL
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
}`,a1=`#define PHONG
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
}`,l1=`#define PHONG
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
}`,c1=`#define STANDARD
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
}`,u1=`#define STANDARD
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
}`,d1=`#define TOON
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
}`,h1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 color;
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
}`,_1=`uniform float rotation;
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
}`,v1=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:kM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:WM,alphatest_pars_fragment:XM,aomap_fragment:jM,aomap_pars_fragment:YM,batching_pars_vertex:qM,batching_vertex:$M,begin_vertex:KM,beginnormal_vertex:ZM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:eS,clipping_planes_fragment:tS,clipping_planes_pars_fragment:nS,clipping_planes_pars_vertex:iS,clipping_planes_vertex:rS,color_fragment:sS,color_pars_fragment:oS,color_pars_vertex:aS,color_vertex:lS,common:cS,cube_uv_reflection_fragment:uS,defaultnormal_vertex:dS,displacementmap_pars_vertex:hS,displacementmap_vertex:fS,emissivemap_fragment:pS,emissivemap_pars_fragment:mS,colorspace_fragment:gS,colorspace_pars_fragment:_S,envmap_fragment:vS,envmap_common_pars_fragment:xS,envmap_pars_fragment:yS,envmap_pars_vertex:MS,envmap_physical_pars_fragment:IS,envmap_vertex:SS,fog_vertex:ES,fog_pars_vertex:wS,fog_fragment:TS,fog_pars_fragment:AS,gradientmap_pars_fragment:RS,lightmap_fragment:CS,lightmap_pars_fragment:bS,lights_lambert_fragment:PS,lights_lambert_pars_fragment:LS,lights_pars_begin:DS,lights_toon_fragment:US,lights_toon_pars_fragment:NS,lights_phong_fragment:FS,lights_phong_pars_fragment:OS,lights_physical_fragment:zS,lights_physical_pars_fragment:BS,lights_fragment_begin:kS,lights_fragment_maps:HS,lights_fragment_end:GS,logdepthbuf_fragment:VS,logdepthbuf_pars_fragment:WS,logdepthbuf_pars_vertex:XS,logdepthbuf_vertex:jS,map_fragment:YS,map_pars_fragment:qS,map_particle_fragment:$S,map_particle_pars_fragment:KS,metalnessmap_fragment:ZS,metalnessmap_pars_fragment:QS,morphcolor_vertex:JS,morphnormal_vertex:eE,morphtarget_pars_vertex:tE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:oE,normal_vertex:aE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:hE,opaque_fragment:fE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:gE,dithering_fragment:_E,dithering_pars_fragment:vE,roughnessmap_fragment:xE,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:SE,shadowmap_vertex:EE,shadowmask_pars_fragment:wE,skinbase_vertex:TE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:bE,specularmap_pars_fragment:PE,tonemapping_fragment:LE,tonemapping_pars_fragment:DE,transmission_fragment:IE,transmission_pars_fragment:UE,uv_pars_fragment:NE,uv_pars_vertex:FE,uv_vertex:OE,worldpos_vertex:zE,background_vert:BE,background_frag:kE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:WE,depth_vert:XE,depth_frag:jE,distanceRGBA_vert:YE,distanceRGBA_frag:qE,equirect_vert:$E,equirect_frag:KE,linedashed_vert:ZE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:e1,meshlambert_vert:t1,meshlambert_frag:n1,meshmatcap_vert:i1,meshmatcap_frag:r1,meshnormal_vert:s1,meshnormal_frag:o1,meshphong_vert:a1,meshphong_frag:l1,meshphysical_vert:c1,meshphysical_frag:u1,meshtoon_vert:d1,meshtoon_frag:h1,points_vert:f1,points_frag:p1,shadow_vert:m1,shadow_frag:g1,sprite_vert:_1,sprite_frag:v1},re={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Jn={basic:{uniforms:en([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new se(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new se(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:en([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:en([re.lights,re.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Jn.physical={uniforms:en([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const ja={r:0,b:0,g:0};function x1(n,e,t,i,r,s,o){const a=new se(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function v(m,d){let g=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lc)?(u===void 0&&(u=new rt(new $s(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Vs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=it.getTransfer(_.colorSpace)!==dt,(h!==_||f!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new rt(new Rh(2,2),new rr({name:"BackgroundMaterial",uniforms:Vs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=it.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(ja,l_(n)),i.buffers.color.setClear(ja.r,ja.g,ja.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function y1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,F,X,Y,I){let O=!1;if(o){const B=x(Y,X,F);c!==B&&(c=B,p(c.object)),O=d(D,Y,X,I),O&&g(D,Y,X,I)}else{const B=F.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==B)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=B,O=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,b(D,F,X,Y),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,F,X){const Y=X.wireframe===!0;let I=a[D.id];I===void 0&&(I={},a[D.id]=I);let O=I[F.id];O===void 0&&(O={},I[F.id]=O);let B=O[Y];return B===void 0&&(B=m(f()),O[Y]=B),B}function m(D){const F=[],X=[],Y=[];for(let I=0;I<r;I++)F[I]=0,X[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:Y,object:D,attributes:{},index:null}}function d(D,F,X,Y){const I=c.attributes,O=F.attributes;let B=0;const q=X.getAttributes();for(const Z in q)if(q[Z].location>=0){const K=I[Z];let le=O[Z];if(le===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;B++}return c.attributesNum!==B||c.index!==Y}function g(D,F,X,Y){const I={},O=F.attributes;let B=0;const q=X.getAttributes();for(const Z in q)if(q[Z].location>=0){let K=O[Z];K===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),I[Z]=le,B++}c.attributes=I,c.attributesNum=B,c.index=Y}function _(){const D=c.newAttributes;for(let F=0,X=D.length;F<X;F++)D[F]=0}function y(D){R(D,0)}function R(D,F){const X=c.newAttributes,Y=c.enabledAttributes,I=c.attributeDivisors;X[D]=1,Y[D]===0&&(n.enableVertexAttribArray(D),Y[D]=1),I[D]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),I[D]=F)}function w(){const D=c.newAttributes,F=c.enabledAttributes;for(let X=0,Y=F.length;X<Y;X++)F[X]!==D[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function A(D,F,X,Y,I,O,B){B===!0?n.vertexAttribIPointer(D,F,X,I,O):n.vertexAttribPointer(D,F,X,Y,I,O)}function b(D,F,X,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Y.attributes,O=X.getAttributes(),B=F.defaultAttributeValues;for(const q in O){const Z=O[q];if(Z.location>=0){let j=I[q];if(j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const K=j.normalized,le=j.itemSize,he=t.get(j);if(he===void 0)continue;const me=he.buffer,Ue=he.type,Fe=he.bytesPerElement,Ae=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||j.gpuType===Wg);if(j.isInterleavedBufferAttribute){const qe=j.data,k=qe.stride,Kt=j.offset;if(qe.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)R(Z.location+Me,qe.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Me=0;Me<Z.locationSize;Me++)y(Z.location+Me);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Me=0;Me<Z.locationSize;Me++)A(Z.location+Me,le/Z.locationSize,Ue,K,k*Fe,(Kt+le/Z.locationSize*Me)*Fe,Ae)}else{if(j.isInstancedBufferAttribute){for(let qe=0;qe<Z.locationSize;qe++)R(Z.location+qe,j.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let qe=0;qe<Z.locationSize;qe++)y(Z.location+qe);n.bindBuffer(n.ARRAY_BUFFER,me);for(let qe=0;qe<Z.locationSize;qe++)A(Z.location+qe,le/Z.locationSize,Ue,K,le*Fe,le/Z.locationSize*qe*Fe,Ae)}}else if(B!==void 0){const K=B[q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Z.location,K);break;case 3:n.vertexAttrib3fv(Z.location,K);break;case 4:n.vertexAttrib4fv(Z.location,K);break;default:n.vertexAttrib1fv(Z.location,K)}}}}w()}function M(){z();for(const D in a){const F=a[D];for(const X in F){const Y=F[X];for(const I in Y)v(Y[I].object),delete Y[I];delete F[X]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const X in F){const Y=F[X];for(const I in Y)v(Y[I].object),delete Y[I];delete F[X]}delete a[D.id]}function N(D){for(const F in a){const X=a[F];if(X[D.id]===void 0)continue;const Y=X[D.id];for(const I in Y)v(Y[I].object),delete Y[I];delete X[D.id]}}function z(){$(),u=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function M1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f;v++)this.render(u[v],h[v]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=h[x];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function S1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||e.has("OES_texture_float"),R=_&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:w}}function E1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new xr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let y=d.clippingState||null;l.value=y,y=u(v,f,_,p);for(let R=0;R!==_;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function w1(n){let e=new WeakMap;function t(o,a){return a===_d?o.mapping=ks:a===vd&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_d||a===vd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new FM(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class T1 extends c_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,Wp=[.125,.215,.35,.446,.526,.582],Sr=20,hu=new T1,Xp=new se;let fu=null,pu=0,mu=0;const yr=(1+Math.sqrt(5))/2,os=1/yr,jp=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,yr,os),new P(0,yr,-os),new P(os,0,yr),new P(-os,0,yr),new P(yr,os,0),new P(-yr,os,0)];class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Zo,format:jn,colorSpace:Ri,depthBuffer:!1},r=qp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(s)),this._blurMaterial=R1(s,e,t)}return r}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,hu)}_sceneToCubeUV(e,t,i,r){const a=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xp),u.toneMapping=Ji,u.autoClear=!1;const p=new ri({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new rt(new $s,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Xp),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;Ya(r,g*_,d>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ks||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jp[(r-1)%jp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const d=[];let g=0;for(let A=0;A<Sr;++A){const b=A/x,M=Math.exp(-b*b/2);d.push(M),A===0?g+=M:A<m&&(g+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const y=this._sizeLods[r],R=3*y*(r>_-ws?r-_+ws:0),w=4*(this._cubeSize-y);Ya(t,R,w,3*y,2*y),l.setRenderTarget(t),l.render(h,hu)}}function A1(n){const e=[],t=[],i=[];let r=n;const s=n-ws+1+Wp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ws?l=Wp[o-n+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,d=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(d*v*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,b=w>2?0:-1,M=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(M,x*v*w),_.set(f,m*v*w);const S=[w,w,w,w,w,w];y.set(S,d*v*w)}const R=new Pe;R.setAttribute("position",new ge(g,x)),R.setAttribute("uv",new ge(_,m)),R.setAttribute("faceIndex",new ge(y,d)),e.push(R),r>ws&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qp(n,e,t){const i=new Or(n,e,t);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function R1(n,e,t){const i=new Float32Array(Sr),r=new P(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function $p(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Kp(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function C1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_d||l===vd,u=l===ks||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Yp(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Yp(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function b1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P1(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){const R=g[_+0],w=g[_+1],A=g[_+2];f.push(R,w,w,A,A,R)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const R=_+0,w=_+1,A=_+2;f.push(R,w,w,A,A,R)}}else return;const m=new(e_(f)?a_:o_)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function L1(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){n.drawElements(s,v,a,p*l),t.update(v,s,1)}function h(p,v,x){if(x===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,v,a,p*l,x),t.update(v,s,x)}function f(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/l,v[d]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let d=0;for(let g=0;g<x;g++)d+=v[g];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function D1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function I1(n,e){return n[0]-e[0]}function U1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function N1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==x){let F=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),R===!0&&(M=3);let S=u.attributes.position.count*M,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const z=new Float32Array(S*N*4*x),$=new i_(z,S,N,x);$.type=Vi,$.needsUpdate=!0;const D=M*4;for(let X=0;X<x;X++){const Y=w[X],I=A[X],O=b[X],B=S*N*4*X;for(let q=0;q<Y.count;q++){const Z=q*D;_===!0&&(o.fromBufferAttribute(Y,q),z[B+Z+0]=o.x,z[B+Z+1]=o.y,z[B+Z+2]=o.z,z[B+Z+3]=0),y===!0&&(o.fromBufferAttribute(I,q),z[B+Z+4]=o.x,z[B+Z+5]=o.y,z[B+Z+6]=o.z,z[B+Z+7]=0),R===!0&&(o.fromBufferAttribute(O,q),z[B+Z+8]=o.x,z[B+Z+9]=o.y,z[B+Z+10]=o.z,z[B+Z+11]=O.itemSize===4?o.w:1)}}m={count:x,texture:$,size:new be(S,N)},s.set(u,m),u.addEventListener("dispose",F)}let d=0;for(let _=0;_<f.length;_++)d+=f[_];const g=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let x=i[u.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[u.id]=x}for(let y=0;y<v;y++){const R=x[y];R[0]=y,R[1]=f[y]}x.sort(U1);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(I1);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const R=a[y],w=R[0],A=R[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[w]&&u.setAttribute("morphTarget"+y,m[w]),d&&u.getAttribute("morphNormal"+y)!==d[w]&&u.setAttribute("morphNormal"+y,d[w]),r[y]=A,g+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function F1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class h_ extends fn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Pr,u!==Pr&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=Gi),i===void 0&&u===Gs&&(i=br),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const f_=new fn,p_=new h_(1,1);p_.compareFunction=Jg;const m_=new i_,g_=new xM,__=new u_,Zp=[],Qp=[],Jp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Zp[r];if(s===void 0&&(s=new Float32Array(r),Zp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uc(n,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function B1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function H1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;tm.set(i),n.uniformMatrix2fv(this.addr,!1,tm),Lt(t,i)}}function G1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;em.set(i),n.uniformMatrix3fv(this.addr,!1,em),Lt(t,i)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Jp.set(i),n.uniformMatrix4fv(this.addr,!1,Jp),Lt(t,i)}}function W1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function X1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function q1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Q1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?p_:f_;t.setTexture2D(e||s,r)}function J1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||g_,r)}function ew(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||__,r)}function tw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||m_,r)}function nw(n){switch(n){case 5126:return O1;case 35664:return z1;case 35665:return B1;case 35666:return k1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return W1;case 35667:case 35671:return X1;case 35668:case 35672:return j1;case 35669:case 35673:return Y1;case 5125:return q1;case 36294:return $1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(n,e){n.uniform1fv(this.addr,e)}function rw(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function sw(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function ow(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function aw(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lw(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cw(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uw(n,e){n.uniform1iv(this.addr,e)}function dw(n,e){n.uniform2iv(this.addr,e)}function hw(n,e){n.uniform3iv(this.addr,e)}function fw(n,e){n.uniform4iv(this.addr,e)}function pw(n,e){n.uniform1uiv(this.addr,e)}function mw(n,e){n.uniform2uiv(this.addr,e)}function gw(n,e){n.uniform3uiv(this.addr,e)}function _w(n,e){n.uniform4uiv(this.addr,e)}function vw(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||f_,s[o])}function xw(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||g_,s[o])}function yw(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||__,s[o])}function Mw(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||m_,s[o])}function Sw(n){switch(n){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return fw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Mw}}class Ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nw(t.type)}}class ww{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sw(t.type)}}class Tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function nm(n,e){n.seq.push(e),n.map[e.id]=e}function Aw(n,e,t){const i=n.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nm(t,c===void 0?new Ew(a,n,e):new ww(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Tw(a),nm(t,h)),t=h}}}class fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Aw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function im(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rw=37297;let Cw=0;function bw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Pw(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===Hl&&t===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&t===Hl&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case cc:return[i,"LinearTransferOETF"];case zt:case Eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bw(n.getShaderSource(e),o)}else return r}function Lw(n,e){const t=Pw(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dw(n,e){let t;switch(e){case by:t="Linear";break;case Py:t="Reinhard";break;case Ly:t="OptimizedCineon";break;case Gg:t="ACESFilmic";break;case Iy:t="AgX";break;case Dy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Iw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Uw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function Nw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ts(n){return n!==""}function sm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function om(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(n){return n.replace(Ow,Bw)}const zw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bw(n,e){let t=ze[e];if(t===void 0){const i=zw.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}const kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(n){return n.replace(kw,Hw)}function Hw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Hs:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ww(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ry:e="ENVMAP_BLENDING_MIX";break;case Cy:e="ENVMAP_BLENDING_ADD";break}return e}function jw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gw(t),c=Vw(t),u=Ww(t),h=Xw(t),f=jw(t),p=t.isWebGL2?"":Iw(t),v=Uw(t),x=Nw(s),m=r.createProgram();let d,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ts).join(`
`),d.length>0&&(d+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ts).join(`
`),g.length>0&&(g+=`
`)):(d=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),g=[p,lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Dw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Lw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=wd(o),o=sm(o,t),o=om(o,t),a=wd(a),a=sm(a,t),a=om(a,t),o=am(o),a=am(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+d+o,R=_+g+a,w=im(r,r.VERTEX_SHADER,y),A=im(r,r.FRAGMENT_SHADER,R);r.attachShader(m,w),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function b(z){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(A).trim();let X=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,A);else{const I=rm(r,w,"vertex"),O=rm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+I+`
`+O)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||F==="")&&(Y=!1);Y&&(z.diagnostics={runnable:X,programLog:$,vertexShader:{log:D,prefix:d},fragmentShader:{log:F,prefix:g}})}r.deleteShader(w),r.deleteShader(A),M=new fl(r,m),S=Fw(r,m)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,Rw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let qw=0;class $w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kw(e),t.set(e,i)),i}}class Kw{constructor(e){this.id=qw++,this.code=e,this.usedTimes=0}}function Zw(n,e,t,i,r,s,o){const a=new r_,l=new $w,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,S,N,z,$){const D=z.fog,F=$.geometry,X=M.isMeshStandardMaterial?z.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),I=Y&&Y.mapping===lc?Y.image.height:null,O=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=B!==void 0?B.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let j,K,le,he;if(O){const Zt=Jn[O];j=Zt.vertexShader,K=Zt.fragmentShader}else j=M.vertexShader,K=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const me=n.getRenderTarget(),Ue=$.isInstancedMesh===!0,Fe=$.isBatchedMesh===!0,Ae=!!M.map,qe=!!M.matcap,k=!!Y,Kt=!!M.aoMap,Me=!!M.lightMap,De=!!M.bumpMap,_e=!!M.normalMap,mt=!!M.displacementMap,Be=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,G=M.anisotropy>0,te=M.clearcoat>0,J=M.iridescence>0,ne=M.sheen>0,ve=M.transmission>0,ce=G&&!!M.anisotropyMap,fe=te&&!!M.clearcoatMap,Te=te&&!!M.clearcoatNormalMap,ke=te&&!!M.clearcoatRoughnessMap,Q=J&&!!M.iridescenceMap,tt=J&&!!M.iridescenceThicknessMap,Xe=ne&&!!M.sheenColorMap,Le=ne&&!!M.sheenRoughnessMap,ye=!!M.specularMap,pe=!!M.specularColorMap,Oe=!!M.specularIntensityMap,Ze=ve&&!!M.transmissionMap,yt=ve&&!!M.thicknessMap,Ge=!!M.gradientMap,ie=!!M.alphaMap,L=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,Re=!!F.attributes.uv1,Se=!!F.attributes.uv2,st=!!F.attributes.uv3;let ot=Ji;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ot=n.toneMapping),{isWebGL2:u,shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:K,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ri,map:Ae,matcap:qe,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:I,aoMap:Kt,lightMap:Me,bumpMap:De,normalMap:_e,displacementMap:f&&mt,emissiveMap:Be,normalMapObjectSpace:_e&&M.normalMapType===Xy,normalMapTangentSpace:_e&&M.normalMapType===Qg,metalnessMap:C,roughnessMap:E,anisotropy:G,anisotropyMap:ce,clearcoat:te,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ke,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:tt,sheen:ne,sheenColorMap:Xe,sheenRoughnessMap:Le,specularMap:ye,specularColorMap:pe,specularIntensityMap:Oe,transmission:ve,transmissionMap:Ze,thicknessMap:yt,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===Mi,alphaMap:ie,alphaTest:L,alphaHash:oe,combine:M.combine,mapUv:Ae&&x(M.map.channel),aoMapUv:Kt&&x(M.aoMap.channel),lightMapUv:Me&&x(M.lightMap.channel),bumpMapUv:De&&x(M.bumpMap.channel),normalMapUv:_e&&x(M.normalMap.channel),displacementMapUv:mt&&x(M.displacementMap.channel),emissiveMapUv:Be&&x(M.emissiveMap.channel),metalnessMapUv:C&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ce&&x(M.anisotropyMap.channel),clearcoatMapUv:fe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:pe&&x(M.specularColorMap.channel),specularIntensityMapUv:Oe&&x(M.specularIntensityMap.channel),transmissionMapUv:Ze&&x(M.transmissionMap.channel),thicknessMapUv:yt&&x(M.thicknessMap.channel),alphaMapUv:ie&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Se,vertexUv3s:st,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(Ae||ie),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Z,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(g(S,M),_(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const S=v[M.type];let N;if(S){const z=Jn[S];N=DM.clone(z.uniforms)}else N=M.uniforms;return N}function R(M,S){let N;for(let z=0,$=c.length;z<$;z++){const D=c[z];if(D.cacheKey===S){N=D,++N.usedTimes;break}}return N===void 0&&(N=new Yw(n,S,M,s),c.push(N)),N}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:b}}function Qw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Jw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function um(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,v,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,v,x,m){const d=o(h,f,p,v,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,v,x,m){const d=o(h,f,p,v,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Jw),i.length>1&&i.sort(f||cm),r.length>1&&r.sort(f||cm)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function eT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new um,n.set(i,[o])):r>=s.length?(o=new um,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new se};break;case"SpotLight":t={position:new P,direction:new P,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function nT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iT=0;function rT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sT(n,e){const t=new tT,i=nT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,o=new ct,a=new ct;function l(u,h){let f=0,p=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let x=0,m=0,d=0,g=0,_=0,y=0,R=0,w=0,A=0,b=0,M=0;u.sort(rT);const S=h===!0?Math.PI:1;for(let z=0,$=u.length;z<$;z++){const D=u[z],F=D.color,X=D.intensity,Y=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*X*S,p+=F.g*X*S,v+=F.b*X*S;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],X);M++}else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const B=D.shadow,q=i.get(D);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,r.directionalShadow[x]=q,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=O,x++}else if(D.isSpotLight){const O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(F).multiplyScalar(X*S),O.distance=Y,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[d]=O;const B=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,B.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[d]=B.matrix,D.castShadow){const q=i.get(D);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,r.spotShadow[d]=q,r.spotShadowMap[d]=I,w++}d++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy(F).multiplyScalar(X),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=O,g++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*S),O.distance=D.distance,O.decay=D.decay,D.castShadow){const B=D.shadow,q=i.get(D);q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=D.shadow.matrix,R++}r.point[m]=O,m++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(X*S),O.groundColor.copy(D.groundColor).multiplyScalar(X*S),r.hemi[_]=O,_++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;const N=r.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==g||N.hemiLength!==_||N.numDirectionalShadows!==y||N.numPointShadows!==R||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+A-b,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=d,N.rectAreaLength=g,N.hemiLength=_,N.numDirectionalShadows=y,N.numPointShadows=R,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=M,r.version=iT++)}function c(u,h){let f=0,p=0,v=0,x=0,m=0;const d=h.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const y=u[g];if(y.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),f++}else if(y.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function dm(n,e){const t=new sT(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function oT(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new dm(n,e),t.set(s,[l])):o>=a.length?(l=new dm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class aT extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lT extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uT=`uniform sampler2D shadow_pass;
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
}`;function dT(n,e,t){let i=new Ah;const r=new be,s=new be,o=new pt,a=new aT({depthPacking:Wy}),l=new lT,c={},u=t.maxTextureSize,h={[ir]:Yt,[Yt]:ir,[xn]:xn},f=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:cT,fragmentShader:uT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Pe;v.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let d=this.type;this.render=function(w,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Qi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=d!==fi&&this.type===fi,D=d===fi&&this.type!==fi;for(let F=0,X=w.length;F<X;F++){const Y=w[F],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,I.mapSize.y=s.y)),I.map===null||$===!0||D===!0){const q=this.type!==fi?{minFilter:nn,magFilter:nn}:{};I.map!==null&&I.map.dispose(),I.map=new Or(r.x,r.y,q),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const B=I.getViewportCount();for(let q=0;q<B;q++){const Z=I.getViewport(q);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),z.viewport(o),I.updateMatrices(Y,q),i=I.getFrustum(),y(A,b,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===fi&&g(I,b),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,N)};function g(w,A){const b=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,b,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,b,p,x,null)}function _(w,A,b,M){let S=null;const N=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,$=A.uuid;let D=c[z];D===void 0&&(D={},c[z]=D);let F=D[$];F===void 0&&(F=S.clone(),D[$]=F,A.addEventListener("dispose",R)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===fi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=b}return S}function y(w,A,b,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===fi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const $=e.update(w),D=w.material;if(Array.isArray(D)){const F=$.groups;for(let X=0,Y=F.length;X<Y;X++){const I=F[X],O=D[I.materialIndex];if(O&&O.visible){const B=_(w,O,M,S);w.onBeforeShadow(n,w,A,b,$,B,I),n.renderBufferDirect(b,null,$,B,w,I),w.onAfterShadow(n,w,A,b,$,B,I)}}}else if(D.visible){const F=_(w,D,M,S);w.onBeforeShadow(n,w,A,b,$,F,null),n.renderBufferDirect(b,null,$,F,w,null),w.onAfterShadow(n,w,A,b,$,F,null)}}const z=w.children;for(let $=0,D=z.length;$<D;$++)y(z[$],A,b,M,S)}function R(w){w.target.removeEventListener("dispose",R);for(const b in c){const M=c[b],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function hT(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const oe=new pt;let ae=null;const Re=new pt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!L&&(n.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){L=Se},setClear:function(Se,st,ot,Dt,Zt){Zt===!0&&(Se*=Dt,st*=Dt,ot*=Dt),oe.set(Se,st,ot,Dt),Re.equals(oe)===!1&&(n.clearColor(Se,st,ot,Dt),Re.copy(oe))},reset:function(){L=!1,ae=null,Re.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ae=null,Re=null;return{setTest:function(Se){Se?Fe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!L&&(n.depthMask(Se),oe=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case yy:n.depthFunc(n.NEVER);break;case My:n.depthFunc(n.ALWAYS);break;case Sy:n.depthFunc(n.LESS);break;case zl:n.depthFunc(n.LEQUAL);break;case Ey:n.depthFunc(n.EQUAL);break;case wy:n.depthFunc(n.GEQUAL);break;case Ty:n.depthFunc(n.GREATER);break;case Ay:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Se}},setLocked:function(Se){L=Se},setClear:function(Se){Re!==Se&&(n.clearDepth(Se),Re=Se)},reset:function(){L=!1,oe=null,ae=null,Re=null}}}function o(){let L=!1,oe=null,ae=null,Re=null,Se=null,st=null,ot=null,Dt=null,Zt=null;return{setTest:function(at){L||(at?Fe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(at){oe!==at&&!L&&(n.stencilMask(at),oe=at)},setFunc:function(at,Qt,Kn){(ae!==at||Re!==Qt||Se!==Kn)&&(n.stencilFunc(at,Qt,Kn),ae=at,Re=Qt,Se=Kn)},setOp:function(at,Qt,Kn){(st!==at||ot!==Qt||Dt!==Kn)&&(n.stencilOp(at,Qt,Kn),st=at,ot=Qt,Dt=Kn)},setLocked:function(at){L=at},setClear:function(at){Zt!==at&&(n.clearStencil(at),Zt=at)},reset:function(){L=!1,oe=null,ae=null,Re=null,Se=null,st=null,ot=null,Dt=null,Zt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},v=new WeakMap,x=[],m=null,d=!1,g=null,_=null,y=null,R=null,w=null,A=null,b=null,M=new se(0,0,0),S=0,N=!1,z=null,$=null,D=null,F=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=O>=2);let q=null,Z={};const j=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),le=new pt().fromArray(j),he=new pt().fromArray(K);function me(L,oe,ae,Re){const Se=new Uint8Array(4),st=n.createTexture();n.bindTexture(L,st),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<ae;ot++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(oe+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return st}const Ue={};Ue[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(zl),Be(!1),C(qf),Fe(n.CULL_FACE),_e(Qi);function Fe(L){f[L]!==!0&&(n.enable(L),f[L]=!0)}function Ae(L){f[L]!==!1&&(n.disable(L),f[L]=!1)}function qe(L,oe){return p[L]!==oe?(n.bindFramebuffer(L,oe),p[L]=oe,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=oe),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function k(L,oe){let ae=x,Re=!1;if(L)if(ae=v.get(oe),ae===void 0&&(ae=[],v.set(oe,ae)),L.isWebGLMultipleRenderTargets){const Se=L.texture;if(ae.length!==Se.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let st=0,ot=Se.length;st<ot;st++)ae[st]=n.COLOR_ATTACHMENT0+st;ae.length=Se.length,Re=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Re=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Kt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const Me={[Mr]:n.FUNC_ADD,[sy]:n.FUNC_SUBTRACT,[oy]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[Zf]=n.MIN,Me[Qf]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[Zf]=L.MIN_EXT,Me[Qf]=L.MAX_EXT)}const De={[ay]:n.ZERO,[ly]:n.ONE,[cy]:n.SRC_COLOR,[md]:n.SRC_ALPHA,[my]:n.SRC_ALPHA_SATURATE,[fy]:n.DST_COLOR,[dy]:n.DST_ALPHA,[uy]:n.ONE_MINUS_SRC_COLOR,[gd]:n.ONE_MINUS_SRC_ALPHA,[py]:n.ONE_MINUS_DST_COLOR,[hy]:n.ONE_MINUS_DST_ALPHA,[gy]:n.CONSTANT_COLOR,[_y]:n.ONE_MINUS_CONSTANT_COLOR,[vy]:n.CONSTANT_ALPHA,[xy]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(L,oe,ae,Re,Se,st,ot,Dt,Zt,at){if(L===Qi){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(Fe(n.BLEND),d=!0),L!==ry){if(L!==g||at!==N){if((_!==Mr||w!==Mr)&&(n.blendEquation(n.FUNC_ADD),_=Mr,w=Mr),at)switch(L){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ye:n.blendFunc(n.ONE,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ye:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,R=null,A=null,b=null,M.set(0,0,0),S=0,g=L,N=at}return}Se=Se||oe,st=st||ae,ot=ot||Re,(oe!==_||Se!==w)&&(n.blendEquationSeparate(Me[oe],Me[Se]),_=oe,w=Se),(ae!==y||Re!==R||st!==A||ot!==b)&&(n.blendFuncSeparate(De[ae],De[Re],De[st],De[ot]),y=ae,R=Re,A=st,b=ot),(Dt.equals(M)===!1||Zt!==S)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Zt),M.copy(Dt),S=Zt),g=L,N=!1}function mt(L,oe){L.side===xn?Ae(n.CULL_FACE):Fe(n.CULL_FACE);let ae=L.side===Yt;oe&&(ae=!ae),Be(ae),L.blending===Mi&&L.transparent===!1?_e(Qi):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Re=L.stencilWrite;c.setTest(Re),Re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){z!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),z=L)}function C(L){L!==ty?(Fe(n.CULL_FACE),L!==$&&(L===qf?n.cullFace(n.BACK):L===ny?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),$=L}function E(L){L!==D&&(I&&n.lineWidth(L),D=L)}function G(L,oe,ae){L?(Fe(n.POLYGON_OFFSET_FILL),(F!==oe||X!==ae)&&(n.polygonOffset(oe,ae),F=oe,X=ae)):Ae(n.POLYGON_OFFSET_FILL)}function te(L){L?Fe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function J(L){L===void 0&&(L=n.TEXTURE0+Y-1),q!==L&&(n.activeTexture(L),q=L)}function ne(L,oe,ae){ae===void 0&&(q===null?ae=n.TEXTURE0+Y-1:ae=q);let Re=Z[ae];Re===void 0&&(Re={type:void 0,texture:void 0},Z[ae]=Re),(Re.type!==L||Re.texture!==oe)&&(q!==ae&&(n.activeTexture(ae),q=ae),n.bindTexture(L,oe||Ue[L]),Re.type=L,Re.texture=oe)}function ve(){const L=Z[q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){le.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function Ze(L){he.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function yt(L,oe){let ae=h.get(oe);ae===void 0&&(ae=new WeakMap,h.set(oe,ae));let Re=ae.get(L);Re===void 0&&(Re=n.getUniformBlockIndex(oe,L.name),ae.set(L,Re))}function Ge(L,oe){const Re=h.get(oe).get(L);u.get(oe)!==Re&&(n.uniformBlockBinding(oe,Re,L.__bindingPointIndex),u.set(oe,Re))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},q=null,Z={},p={},v=new WeakMap,x=[],m=null,d=!1,g=null,_=null,y=null,R=null,w=null,A=null,b=null,M=new se(0,0,0),S=0,N=!1,z=null,$=null,D=null,F=null,X=null,le.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Ae,bindFramebuffer:qe,drawBuffers:k,useProgram:Kt,setBlending:_e,setMaterial:mt,setFlipSided:Be,setCullFace:C,setLineWidth:E,setPolygonOffset:G,setScissorTest:te,activeTexture:J,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:ce,compressedTexImage3D:fe,texImage2D:ye,texImage3D:pe,updateUBOMapping:yt,uniformBlockBinding:Ge,texStorage2D:Xe,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:ke,compressedTexSubImage2D:Q,compressedTexSubImage3D:tt,scissor:Oe,viewport:Ze,reset:ie}}function fT(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return p?new OffscreenCanvas(C,E):Wl("canvas")}function x(C,E,G,te){let J=1;if((C.width>te||C.height>te)&&(J=te/Math.max(C.width,C.height)),J<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=E?Vl:Math.floor,ve=ne(J*C.width),ce=ne(J*C.height);h===void 0&&(h=v(ve,ce));const fe=G?v(ve,ce):h;return fe.width=ve,fe.height=ce,fe.getContext("2d").drawImage(C,0,0,ve,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+ce+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Ed(C.width)&&Ed(C.height)}function d(C){return a?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==nn&&C.minFilter!==Pn}function g(C,E){return C.generateMipmaps&&E&&C.minFilter!==nn&&C.minFilter!==Pn}function _(C){n.generateMipmap(C)}function y(C,E,G,te,J=!1){if(a===!1)return E;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=E;if(E===n.RED&&(G===n.FLOAT&&(ne=n.R32F),G===n.HALF_FLOAT&&(ne=n.R16F),G===n.UNSIGNED_BYTE&&(ne=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.R8UI),G===n.UNSIGNED_SHORT&&(ne=n.R16UI),G===n.UNSIGNED_INT&&(ne=n.R32UI),G===n.BYTE&&(ne=n.R8I),G===n.SHORT&&(ne=n.R16I),G===n.INT&&(ne=n.R32I)),E===n.RG&&(G===n.FLOAT&&(ne=n.RG32F),G===n.HALF_FLOAT&&(ne=n.RG16F),G===n.UNSIGNED_BYTE&&(ne=n.RG8)),E===n.RGBA){const ve=J?Bl:it.getTransfer(te);G===n.FLOAT&&(ne=n.RGBA32F),G===n.HALF_FLOAT&&(ne=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ne=ve===dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(C,E,G){return g(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){return C===nn||C===Jf||C===Vc?n.NEAREST:n.LINEAR}function A(C){const E=C.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&u.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),N(E)}function M(C){const E=i.get(C);if(E.__webglInit===void 0)return;const G=C.source,te=f.get(G);if(te){const J=te[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys(te).length===0&&f.delete(G)}i.remove(C)}function S(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const G=C.source,te=f.get(G);delete te[E.__cacheKey],o.memory.textures--}function N(C){const E=C.texture,G=i.get(C),te=i.get(E);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(G.__webglFramebuffer[J]))for(let ne=0;ne<G.__webglFramebuffer[J].length;ne++)n.deleteFramebuffer(G.__webglFramebuffer[J][ne]);else n.deleteFramebuffer(G.__webglFramebuffer[J]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[J])}else{if(Array.isArray(G.__webglFramebuffer))for(let J=0;J<G.__webglFramebuffer.length;J++)n.deleteFramebuffer(G.__webglFramebuffer[J]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let J=0;J<G.__webglColorRenderbuffer.length;J++)G.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[J]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ne=E.length;J<ne;J++){const ve=i.get(E[J]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(E[J])}i.remove(E),i.remove(C)}let z=0;function $(){z=0}function D(){const C=z;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),z+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){const G=i.get(C);if(C.isVideoTexture&&mt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,C,E);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function Y(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){le(G,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function I(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){le(G,C,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function O(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){he(G,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const B={[xd]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[yd]:n.MIRRORED_REPEAT},q={[nn]:n.NEAREST,[Jf]:n.NEAREST_MIPMAP_NEAREST,[Vc]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Uy]:n.LINEAR_MIPMAP_NEAREST,[Ko]:n.LINEAR_MIPMAP_LINEAR},Z={[jy]:n.NEVER,[Qy]:n.ALWAYS,[Yy]:n.LESS,[Jg]:n.LEQUAL,[qy]:n.EQUAL,[Zy]:n.GEQUAL,[$y]:n.GREATER,[Ky]:n.NOTEQUAL};function j(C,E,G){if(G?(n.texParameteri(C,n.TEXTURE_WRAP_S,B[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,B[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,B[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[E.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==nn&&E.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===nn||E.minFilter!==Vc&&E.minFilter!==Ko||E.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Zo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function K(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const te=E.source;let J=f.get(te);J===void 0&&(J={},f.set(te,J));const ne=F(E);if(ne!==C.__cacheKey){J[ne]===void 0&&(J[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[ne].usedTimes++;const ve=J[C.__cacheKey];ve!==void 0&&(J[C.__cacheKey].usedTimes--,ve.usedTimes===0&&S(E)),C.__cacheKey=ne,C.__webglTexture=J[ne].texture}return G}function le(C,E,G){let te=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=n.TEXTURE_3D);const J=K(C,E),ne=E.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+G);const ve=i.get(ne);if(ne.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const ce=it.getPrimaries(it.workingColorSpace),fe=E.colorSpace===Dn?null:it.getPrimaries(E.colorSpace),Te=E.colorSpace===Dn||ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ke=d(E)&&m(E.image)===!1;let Q=x(E.image,ke,!1,r.maxTextureSize);Q=Be(E,Q);const tt=m(Q)||a,Xe=s.convert(E.format,E.colorSpace);let Le=s.convert(E.type),ye=y(E.internalFormat,Xe,Le,E.colorSpace,E.isVideoTexture);j(te,E,tt);let pe;const Oe=E.mipmaps,Ze=a&&E.isVideoTexture!==!0&&ye!==Kg,yt=ve.__version===void 0||J===!0,Ge=R(E,Q,tt);if(E.isDepthTexture)ye=n.DEPTH_COMPONENT,a?E.type===Vi?ye=n.DEPTH_COMPONENT32F:E.type===Gi?ye=n.DEPTH_COMPONENT24:E.type===br?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:E.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Pr&&ye===n.DEPTH_COMPONENT&&E.type!==Sh&&E.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Gi,Le=s.convert(E.type)),E.format===Gs&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,Le=s.convert(E.type))),yt&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,Xe,Le,null));else if(E.isDataTexture)if(Oe.length>0&&tt){Ze&&yt&&t.texStorage2D(n.TEXTURE_2D,Ge,ye,Oe[0].width,Oe[0].height);for(let ie=0,L=Oe.length;ie<L;ie++)pe=Oe[ie],Ze?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Xe,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ie,ye,pe.width,pe.height,0,Xe,Le,pe.data);E.generateMipmaps=!1}else Ze?(yt&&t.texStorage2D(n.TEXTURE_2D,Ge,ye,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Xe,Le,Q.data)):t.texImage2D(n.TEXTURE_2D,0,ye,Q.width,Q.height,0,Xe,Le,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,ye,Oe[0].width,Oe[0].height,Q.depth);for(let ie=0,L=Oe.length;ie<L;ie++)pe=Oe[ie],E.format!==jn?Xe!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,Xe,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,Xe,Le,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ye,pe.width,pe.height,Q.depth,0,Xe,Le,pe.data)}else{Ze&&yt&&t.texStorage2D(n.TEXTURE_2D,Ge,ye,Oe[0].width,Oe[0].height);for(let ie=0,L=Oe.length;ie<L;ie++)pe=Oe[ie],E.format!==jn?Xe!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Xe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,Xe,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ie,ye,pe.width,pe.height,0,Xe,Le,pe.data)}else if(E.isDataArrayTexture)Ze?(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xe,Le,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,Xe,Le,Q.data);else if(E.isData3DTexture)Ze?(yt&&t.texStorage3D(n.TEXTURE_3D,Ge,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xe,Le,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,Xe,Le,Q.data);else if(E.isFramebufferTexture){if(yt)if(Ze)t.texStorage2D(n.TEXTURE_2D,Ge,ye,Q.width,Q.height);else{let ie=Q.width,L=Q.height;for(let oe=0;oe<Ge;oe++)t.texImage2D(n.TEXTURE_2D,oe,ye,ie,L,0,Xe,Le,null),ie>>=1,L>>=1}}else if(Oe.length>0&&tt){Ze&&yt&&t.texStorage2D(n.TEXTURE_2D,Ge,ye,Oe[0].width,Oe[0].height);for(let ie=0,L=Oe.length;ie<L;ie++)pe=Oe[ie],Ze?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Xe,Le,pe):t.texImage2D(n.TEXTURE_2D,ie,ye,Xe,Le,pe);E.generateMipmaps=!1}else Ze?(yt&&t.texStorage2D(n.TEXTURE_2D,Ge,ye,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,Le,Q)):t.texImage2D(n.TEXTURE_2D,0,ye,Xe,Le,Q);g(E,tt)&&_(te),ve.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function he(C,E,G){if(E.image.length!==6)return;const te=K(C,E),J=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const ne=i.get(J);if(J.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const ve=it.getPrimaries(it.workingColorSpace),ce=E.colorSpace===Dn?null:it.getPrimaries(E.colorSpace),fe=E.colorSpace===Dn||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!Te&&!ke?Q[ie]=x(E.image[ie],!1,!0,r.maxCubemapSize):Q[ie]=ke?E.image[ie].image:E.image[ie],Q[ie]=Be(E,Q[ie]);const tt=Q[0],Xe=m(tt)||a,Le=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),pe=y(E.internalFormat,Le,ye,E.colorSpace),Oe=a&&E.isVideoTexture!==!0,Ze=ne.__version===void 0||te===!0;let yt=R(E,tt,Xe);j(n.TEXTURE_CUBE_MAP,E,Xe);let Ge;if(Te){Oe&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,pe,tt.width,tt.height);for(let ie=0;ie<6;ie++){Ge=Q[ie].mipmaps;for(let L=0;L<Ge.length;L++){const oe=Ge[L];E.format!==jn?Le!==null?Oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,oe.width,oe.height,Le,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,pe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,oe.width,oe.height,Le,ye,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,pe,oe.width,oe.height,0,Le,ye,oe.data)}}}else{Ge=E.mipmaps,Oe&&Ze&&(Ge.length>0&&yt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,pe,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(ke){Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Le,ye,Q[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Q[ie].width,Q[ie].height,0,Le,ye,Q[ie].data);for(let L=0;L<Ge.length;L++){const ae=Ge[L].image[ie].image;Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,ae.width,ae.height,Le,ye,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,pe,ae.width,ae.height,0,Le,ye,ae.data)}}else{Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,ye,Q[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Le,ye,Q[ie]);for(let L=0;L<Ge.length;L++){const oe=Ge[L];Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,Le,ye,oe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,pe,Le,ye,oe.image[ie])}}}g(E,Xe)&&_(n.TEXTURE_CUBE_MAP),ne.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function me(C,E,G,te,J,ne){const ve=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),fe=y(G.internalFormat,ve,ce,G.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>ne),Q=Math.max(1,E.height>>ne);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,fe,ke,Q,E.depth,0,ve,ce,null):t.texImage2D(J,ne,fe,ke,Q,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),_e(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,i.get(G).__webglTexture,0,De(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,J,i.get(G).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||_e(E)){const J=E.depthTexture;J&&J.isDepthTexture&&(J.type===Vi?te=n.DEPTH_COMPONENT32F:J.type===Gi&&(te=n.DEPTH_COMPONENT24));const ne=De(E);_e(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,te,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,te,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const te=De(E);G&&_e(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,E.width,E.height):_e(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0;J<te.length;J++){const ne=te[J],ve=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),fe=y(ne.internalFormat,ve,ce,ne.colorSpace),Te=De(E);G&&_e(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,fe,E.width,E.height):_e(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,J=De(E);if(E.depthTexture.format===Pr)_e(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(E.depthTexture.format===Gs)_e(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Fe(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=n.createRenderbuffer(),Ue(E.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ue(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(C,E,G){const te=i.get(C);E!==void 0&&me(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ae(C)}function k(C){const E=C.texture,G=i.get(C),te=i.get(E);C.addEventListener("dispose",b),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=E.version,o.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,ve=m(C)||a;if(J){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let fe=0;fe<E.mipmaps.length;fe++)G.__webglFramebuffer[ce][fe]=n.createFramebuffer()}else G.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)G.__webglFramebuffer[ce]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const ce=C.texture;for(let fe=0,Te=ce.length;fe<Te;fe++){const ke=i.get(ce[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&_e(C)===!1){const ce=ne?E:[E];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const Te=ce[fe];G.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const ke=s.convert(Te.format,Te.colorSpace),Q=s.convert(Te.type),tt=y(Te.internalFormat,ke,Q,Te.colorSpace,C.isXRRenderTarget===!0),Xe=De(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,tt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),j(n.TEXTURE_CUBE_MAP,E,ve);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)me(G.__webglFramebuffer[ce][fe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else me(G.__webglFramebuffer[ce],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(E,ve)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ce=C.texture;for(let fe=0,Te=ce.length;fe<Te;fe++){const ke=ce[fe],Q=i.get(ke);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),j(n.TEXTURE_2D,ke,ve),me(G.__webglFramebuffer,C,ke,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(ke,ve)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ce=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),j(ce,E,ve),a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)me(G.__webglFramebuffer[fe],C,E,n.COLOR_ATTACHMENT0,ce,fe);else me(G.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,ce,0);g(E,ve)&&_(ce),t.unbindTexture()}C.depthBuffer&&Ae(C)}function Kt(C){const E=m(C)||a,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,J=G.length;te<J;te++){const ne=G[te];if(g(ne,E)){const ve=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(ne).__webglTexture;t.bindTexture(ve,ce),_(ve),t.unbindTexture()}}}function Me(C){if(a&&C.samples>0&&_e(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,te=C.height;let J=n.COLOR_BUFFER_BIT;const ne=[],ve=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){ne.push(n.COLOR_ATTACHMENT0+Te),C.depthBuffer&&ne.push(ve);const ke=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ke===!1&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Te]),ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),fe){const Q=i.get(E[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,G,te,0,0,G,te,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Te]);const ke=i.get(E[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function De(C){return Math.min(r.maxSamples,C.samples)}function _e(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function mt(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Be(C,E){const G=C.colorSpace,te=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Sd||G!==Ri&&G!==Dn&&(it.getTransfer(G)===dt?a===!1?e.has("EXT_sRGB")===!0&&te===jn?(C.format=Sd,C.minFilter=Pn,C.generateMipmaps=!1):E=t_.sRGBToLinear(E):(te!==jn||J!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=qe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function pT(n,e,t){const i=t.isWebGL2;function r(s,o=Dn){let a;const l=it.getTransfer(o);if(s===er)return n.UNSIGNED_BYTE;if(s===Xg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===jg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Ny)return n.BYTE;if(s===Fy)return n.SHORT;if(s===Sh)return n.UNSIGNED_SHORT;if(s===Wg)return n.INT;if(s===Gi)return n.UNSIGNED_INT;if(s===Vi)return n.FLOAT;if(s===Zo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Oy)return n.ALPHA;if(s===jn)return n.RGBA;if(s===zy)return n.LUMINANCE;if(s===By)return n.LUMINANCE_ALPHA;if(s===Pr)return n.DEPTH_COMPONENT;if(s===Gs)return n.DEPTH_STENCIL;if(s===Sd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ky)return n.RED;if(s===Yg)return n.RED_INTEGER;if(s===Hy)return n.RG;if(s===qg)return n.RG_INTEGER;if(s===$g)return n.RGBA_INTEGER;if(s===Wc||s===Xc||s===jc||s===Yc)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ep||s===tp||s===np||s===ip)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ep)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===np)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ip)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rp||s===sp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rp)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===op||s===ap||s===lp||s===cp||s===up||s===dp||s===hp||s===fp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===op)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ap)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===up)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qc||s===yp||s===Mp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qc)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gy||s===Sp||s===Ep||s===wp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ep)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class mT extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gT={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _T extends qs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const x=t.getContextAttributes();let m=null,d=null;const g=[],_=[],y=new be;let R=null;const w=new vn;w.layers.enable(1),w.viewport=new pt;const A=new vn;A.layers.enable(2),A.viewport=new pt;const b=[w,A],M=new mT;M.layers.enable(1),M.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=g[j];return K===void 0&&(K=new _u,g[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=g[j];return K===void 0&&(K=new _u,g[j]=K),K.getGripSpace()},this.getHand=function(j){let K=g[j];return K===void 0&&(K=new _u,g[j]=K),K.getHandSpace()};function z(j){const K=_.indexOf(j.inputSource);if(K===-1)return;const le=g[K];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",D);for(let j=0;j<g.length;j++){const K=_[j];K!==null&&(_[j]=null,g[j].disconnect(K))}S=null,N=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Or(p.framebufferWidth,p.framebufferHeight,{format:jn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,le=null,he=null;x.depth&&(he=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=x.stencil?Gs:Pr,le=x.stencil?br:Gi);const me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Or(f.textureWidth,f.textureHeight,{format:jn,type:er,depthTexture:new h_(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ue=e.properties.get(d);Ue.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(j){for(let K=0;K<j.removed.length;K++){const le=j.removed[K],he=_.indexOf(le);he>=0&&(_[he]=null,g[he].disconnect(le))}for(let K=0;K<j.added.length;K++){const le=j.added[K];let he=_.indexOf(le);if(he===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=_.length){_.push(le),he=Ue;break}else if(_[Ue]===null){_[Ue]=le,he=Ue;break}if(he===-1)break}const me=g[he];me&&me.connect(le)}}const F=new P,X=new P;function Y(j,K,le){F.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const he=F.distanceTo(X),me=K.projectionMatrix.elements,Ue=le.projectionMatrix.elements,Fe=me[14]/(me[10]-1),Ae=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],k=(me[9]-1)/me[5],Kt=(me[8]-1)/me[0],Me=(Ue[8]+1)/Ue[0],De=Fe*Kt,_e=Fe*Me,mt=he/(-Kt+Me),Be=mt*-Kt;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const C=Fe+mt,E=Ae+mt,G=De-Be,te=_e+(he-Be),J=qe*Ae/E*C,ne=k*Ae/E*C;j.projectionMatrix.makePerspective(G,te,J,ne,C,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function I(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;M.near=A.near=w.near=j.near,M.far=A.far=w.far=j.far,(S!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,N=M.far);const K=j.parent,le=M.cameras;I(M,K);for(let he=0;he<le.length;he++)I(le[he],K);le.length===2?Y(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),O(j,M,K)};function O(j,K,le){le===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Qo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let B=null;function q(j,K){if(u=K.getViewerPose(c||o),v=K,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let he=!1;le.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let me=0;me<le.length;me++){const Ue=le[me];let Fe=null;if(p!==null)Fe=p.getViewport(Ue);else{const qe=h.getViewSubImage(f,Ue);Fe=qe.viewport,me===0&&(e.setRenderTargetTextures(d,qe.colorTexture,f.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(d))}let Ae=b[me];Ae===void 0&&(Ae=new vn,Ae.layers.enable(me),Ae.viewport=new pt,b[me]=Ae),Ae.matrix.fromArray(Ue.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ue.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Ae)}}for(let le=0;le<g.length;le++){const he=_[le],me=g[le];he!==null&&me!==void 0&&me.update(he,K,c||o)}B&&B(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const Z=new d_;Z.setAnimationLoop(q),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}function vT(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,l_(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xT(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(v(g),y=u(g),r[g.id]=y,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const w=e.render.frame;s[g.id]!==w&&(f(g),s[g.id]=w)}function u(g){const _=h();g.__bindingPointIndex=_;const y=n.createBuffer(),R=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],y=g.uniforms,R=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,A=y.length;w<A;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=b.length;M<S;M++){const N=b[M];if(p(N,w,M,R)===!0){const z=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let D=0;for(let F=0;F<$.length;F++){const X=$[F],Y=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+D,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,_,y,R){const w=g.value,A=_+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const b=R[A];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return R[A]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function v(g){const _=g.uniforms;let y=0;const R=16;for(let A=0,b=_.length;A<b;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,N=M.length;S<N;S++){const z=M[S],$=Array.isArray(z.value)?z.value:[z.value];for(let D=0,F=$.length;D<F;D++){const X=$[D],Y=x(X),I=y%R;I!==0&&R-I<Y.boundary&&(y+=R-I),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Y.storage}}}const w=y%R;return w>0&&(y+=R-w),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class v_{constructor(e={}){const{canvas:t=pM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const _=this;let y=!1,R=0,w=0,A=null,b=-1,M=null;const S=new pt,N=new pt;let z=null;const $=new se(0);let D=0,F=t.width,X=t.height,Y=1,I=null,O=null;const B=new pt(0,0,F,X),q=new pt(0,0,F,X);let Z=!1;const j=new Ah;let K=!1,le=!1,he=null;const me=new ct,Ue=new be,Fe=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return A===null?Y:1}let k=i;function Kt(T,U){for(let V=0;V<T.length;V++){const W=T[V],H=t.getContext(W,U);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mh}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),k=Kt(U,T),k===null)throw Kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,De,_e,mt,Be,C,E,G,te,J,ne,ve,ce,fe,Te,ke,Q,tt,Xe,Le,ye,pe,Oe,Ze;function yt(){Me=new b1(k),De=new S1(k,Me,e),Me.init(De),pe=new pT(k,Me,De),_e=new hT(k,Me,De),mt=new D1(k),Be=new Qw,C=new fT(k,Me,_e,Be,De,pe,mt),E=new w1(_),G=new C1(_),te=new BM(k,De),Oe=new y1(k,Me,te,De),J=new P1(k,te,mt,Oe),ne=new F1(k,J,te,mt),Xe=new N1(k,De,C),ke=new E1(Be),ve=new Zw(_,E,G,Me,De,Oe,ke),ce=new vT(_,Be),fe=new eT,Te=new oT(Me,De),tt=new x1(_,E,G,_e,ne,f,l),Q=new dT(_,ne,De),Ze=new xT(k,mt,De,_e),Le=new M1(k,Me,mt,De),ye=new L1(k,Me,mt,De),mt.programs=ve.programs,_.capabilities=De,_.extensions=Me,_.properties=Be,_.renderLists=fe,_.shadowMap=Q,_.state=_e,_.info=mt}yt();const Ge=new _T(_,k);this.xr=Ge,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(F,X,!1))},this.getSize=function(T){return T.set(F,X)},this.setSize=function(T,U,V=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,X=U,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),V===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(F*Y,X*Y).floor()},this.setDrawingBufferSize=function(T,U,V){F=T,X=U,Y=V,t.width=Math.floor(T*V),t.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,U,V,W){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,U,V,W),_e.viewport(S.copy(B).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,U,V,W){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,U,V,W),_e.scissor(N.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){_e.setScissorTest(Z=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let H=!1;if(A!==null){const ue=A.texture.format;H=ue===$g||ue===qg||ue===Yg}if(H){const ue=A.texture.type,xe=ue===er||ue===Gi||ue===Sh||ue===br||ue===Xg||ue===jg,we=tt.getClearColor(),Ce=tt.getClearAlpha(),He=we.r,Ie=we.g,Ne=we.b;xe?(p[0]=He,p[1]=Ie,p[2]=Ne,p[3]=Ce,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=He,v[1]=Ie,v[2]=Ne,v[3]=Ce,k.clearBufferiv(k.COLOR,0,v))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT),V&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),fe.dispose(),Te.dispose(),Be.dispose(),E.dispose(),G.dispose(),ne.dispose(),Oe.dispose(),Ze.dispose(),ve.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Zt),Ge.removeEventListener("sessionend",at),he&&(he.dispose(),he=null),Qt.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=mt.autoReset,U=Q.enabled,V=Q.autoUpdate,W=Q.needsUpdate,H=Q.type;yt(),mt.autoReset=T,Q.enabled=U,Q.autoUpdate=V,Q.needsUpdate=W,Q.type=H}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const U=T.target;U.removeEventListener("dispose",ae),Re(U)}function Re(T){Se(T),Be.remove(T)}function Se(T){const U=Be.get(T).programs;U!==void 0&&(U.forEach(function(V){ve.releaseProgram(V)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,H,ue){U===null&&(U=Ae);const xe=H.isMesh&&H.matrixWorld.determinant()<0,we=E_(T,U,V,W,H);_e.setMaterial(W,xe);let Ce=V.index,He=1;if(W.wireframe===!0){if(Ce=J.getWireframeAttribute(V),Ce===void 0)return;He=2}const Ie=V.drawRange,Ne=V.attributes.position;let Et=Ie.start*He,pn=(Ie.start+Ie.count)*He;ue!==null&&(Et=Math.max(Et,ue.start*He),pn=Math.min(pn,(ue.start+ue.count)*He)),Ce!==null?(Et=Math.max(Et,0),pn=Math.min(pn,Ce.count)):Ne!=null&&(Et=Math.max(Et,0),pn=Math.min(pn,Ne.count));const It=pn-Et;if(It<0||It===1/0)return;Oe.setup(H,W,we,V,Ce);let ai,gt=Le;if(Ce!==null&&(ai=te.get(Ce),gt=ye,gt.setIndex(ai)),H.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*qe()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(H.isLine){let Ve=W.linewidth;Ve===void 0&&(Ve=1),_e.setLineWidth(Ve*qe()),H.isLineSegments?gt.setMode(k.LINES):H.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else H.isPoints?gt.setMode(k.POINTS):H.isSprite&&gt.setMode(k.TRIANGLES);if(H.isBatchedMesh)gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)gt.renderInstances(Et,It,H.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fc=Math.min(V.instanceCount,Ve);gt.renderInstances(Et,It,fc)}else gt.render(Et,It)};function st(T,U,V){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,la(T,U,V),T.side=ir,T.needsUpdate=!0,la(T,U,V),T.side=xn):la(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),m=Te.get(V),m.init(),g.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const W=new Set;return T.traverse(function(H){const ue=H.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const we=ue[xe];st(we,V,H),W.add(we)}else st(ue,V,H),W.add(ue)}),g.pop(),m=null,W},this.compileAsync=function(T,U,V=null){const W=this.compile(T,U,V);return new Promise(H=>{function ue(){if(W.forEach(function(xe){Be.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){H(T);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ot=null;function Dt(T){ot&&ot(T)}function Zt(){Qt.stop()}function at(){Qt.start()}const Qt=new d_;Qt.setAnimationLoop(Dt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(T){ot=T,Ge.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},Ge.addEventListener("sessionstart",Zt),Ge.addEventListener("sessionend",at),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(U),U=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,A),m=Te.get(T,g.length),m.init(),g.push(m),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(me),le=this.localClippingEnabled,K=ke.init(this.clippingPlanes,le),x=fe.get(T,d.length),x.init(),d.push(x),Kn(T,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(I,O),this.info.render.frame++,K===!0&&ke.beginShadows();const V=m.state.shadowsArray;if(Q.render(V,T,U),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(x,T),m.setupLights(_._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let H=0,ue=W.length;H<ue;H++){const xe=W[H];Dh(x,T,xe,xe.viewport)}}else Dh(x,T,U);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,U),Oe.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Kn(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){W&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const xe=ne.update(T),we=T.material;we.visible&&x.push(T,xe,we,V,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const xe=ne.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Fe.copy(xe.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(we)){const Ce=xe.groups;for(let He=0,Ie=Ce.length;He<Ie;He++){const Ne=Ce[He],Et=we[Ne.materialIndex];Et&&Et.visible&&x.push(T,xe,Et,V,Fe.z,Ne)}}else we.visible&&x.push(T,xe,we,V,Fe.z,null)}}const ue=T.children;for(let xe=0,we=ue.length;xe<we;xe++)Kn(ue[xe],U,V,W)}function Dh(T,U,V,W){const H=T.opaque,ue=T.transmissive,xe=T.transparent;m.setupLightsView(V),K===!0&&ke.setGlobalState(_.clippingPlanes,V),ue.length>0&&S_(H,ue,U,V),W&&_e.viewport(S.copy(W)),H.length>0&&aa(H,U,V),ue.length>0&&aa(ue,U,V),xe.length>0&&aa(xe,U,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function S_(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ue=De.isWebGL2;he===null&&(he=new Or(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Zo:er,minFilter:Ko,samples:ue?4:0})),_.getDrawingBufferSize(Ue),ue?he.setSize(Ue.x,Ue.y):he.setSize(Vl(Ue.x),Vl(Ue.y));const xe=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor($),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const we=_.toneMapping;_.toneMapping=Ji,aa(T,V,W),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he);let Ce=!1;for(let He=0,Ie=U.length;He<Ie;He++){const Ne=U[He],Et=Ne.object,pn=Ne.geometry,It=Ne.material,ai=Ne.group;if(It.side===xn&&Et.layers.test(W.layers)){const gt=It.side;It.side=Yt,It.needsUpdate=!0,Ih(Et,V,W,pn,It,ai),It.side=gt,It.needsUpdate=!0,Ce=!0}}Ce===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he)),_.setRenderTarget(xe),_.setClearColor($,D),_.toneMapping=we}function aa(T,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ue=T.length;H<ue;H++){const xe=T[H],we=xe.object,Ce=xe.geometry,He=W===null?xe.material:W,Ie=xe.group;we.layers.test(V.layers)&&Ih(we,U,V,Ce,He,Ie)}}function Ih(T,U,V,W,H,ue){T.onBeforeRender(_,U,V,W,H,ue),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,U,V,W,T,ue),H.transparent===!0&&H.side===xn&&H.forceSinglePass===!1?(H.side=Yt,H.needsUpdate=!0,_.renderBufferDirect(V,U,W,H,T,ue),H.side=ir,H.needsUpdate=!0,_.renderBufferDirect(V,U,W,H,T,ue),H.side=xn):_.renderBufferDirect(V,U,W,H,T,ue),T.onAfterRender(_,U,V,W,H,ue)}function la(T,U,V){U.isScene!==!0&&(U=Ae);const W=Be.get(T),H=m.state.lights,ue=m.state.shadowsArray,xe=H.state.version,we=ve.getParameters(T,H.state,ue,U,V),Ce=ve.getProgramCacheKey(we);let He=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||W.environment),He===void 0&&(T.addEventListener("dispose",ae),He=new Map,W.programs=He);let Ie=He.get(Ce);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===xe)return Nh(T,we),Ie}else we.uniforms=ve.getUniforms(T),T.onBuild(V,we,_),T.onBeforeCompile(we,_),Ie=ve.acquireProgram(we,Ce),He.set(Ce,Ie),W.uniforms=we.uniforms;const Ne=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),Nh(T,we),W.needsLights=T_(T),W.lightsStateVersion=xe,W.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function Uh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=fl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Nh(T,U){const V=Be.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function E_(T,U,V,W,H){U.isScene!==!0&&(U=Ae),C.resetTextureUnits();const ue=U.fog,xe=W.isMeshStandardMaterial?U.environment:null,we=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ri,Ce=(W.isMeshStandardMaterial?G:E).get(W.envMap||xe),He=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!V.morphAttributes.position,Et=!!V.morphAttributes.normal,pn=!!V.morphAttributes.color;let It=Ji;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(It=_.toneMapping);const ai=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=ai!==void 0?ai.length:0,Ve=Be.get(W),fc=m.state.lights;if(K===!0&&(le===!0||T!==M)){const An=T===M&&W.id===b;ke.setState(W,T,An)}let Mt=!1;W.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==fc.state.version||Ve.outputColorSpace!==we||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||Ve.envMap!==Ce||W.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ke.numPlanes||Ve.numIntersection!==ke.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ie||Ve.morphTargets!==Ne||Ve.morphNormals!==Et||Ve.morphColors!==pn||Ve.toneMapping!==It||De.isWebGL2===!0&&Ve.morphTargetsCount!==gt)&&(Mt=!0):(Mt=!0,Ve.__version=W.version);let dr=Ve.currentProgram;Mt===!0&&(dr=la(W,U,H));let Fh=!1,Zs=!1,pc=!1;const Ht=dr.getUniforms(),hr=Ve.uniforms;if(_e.useProgram(dr.program)&&(Fh=!0,Zs=!0,pc=!0),W.id!==b&&(b=W.id,Zs=!0),Fh||M!==T){Ht.setValue(k,"projectionMatrix",T.projectionMatrix),Ht.setValue(k,"viewMatrix",T.matrixWorldInverse);const An=Ht.map.cameraPosition;An!==void 0&&An.setValue(k,Fe.setFromMatrixPosition(T.matrixWorld)),De.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Zs=!0,pc=!0)}if(H.isSkinnedMesh){Ht.setOptional(k,H,"bindMatrix"),Ht.setOptional(k,H,"bindMatrixInverse");const An=H.skeleton;An&&(De.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Ht.setValue(k,"boneTexture",An.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ht.setOptional(k,H,"batchingTexture"),Ht.setValue(k,"batchingTexture",H._matricesTexture,C));const mc=V.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0&&De.isWebGL2===!0)&&Xe.update(H,V,dr),(Zs||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,Ht.setValue(k,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hr.envMap.value=Ce,hr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Zs&&(Ht.setValue(k,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&w_(hr,pc),ue&&W.fog===!0&&ce.refreshFogUniforms(hr,ue),ce.refreshMaterialUniforms(hr,W,Y,X,he),fl.upload(k,Uh(Ve),hr,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fl.upload(k,Uh(Ve),hr,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ht.setValue(k,"center",H.center),Ht.setValue(k,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(k,"normalMatrix",H.normalMatrix),Ht.setValue(k,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const An=W.uniformsGroups;for(let gc=0,A_=An.length;gc<A_;gc++)if(De.isWebGL2){const Oh=An[gc];Ze.update(Oh,dr),Ze.bind(Oh,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function w_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function T_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,U,V){Be.get(T.texture).__webglTexture=U,Be.get(T.depthTexture).__webglTexture=V;const W=Be.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const V=Be.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){A=T,R=U,w=V;let W=!0,H=null,ue=!1,xe=!1;if(T){const Ce=Be.get(T);Ce.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Ce.__webglFramebuffer===void 0?C.setupRenderTarget(T):Ce.__hasExternalTextures&&C.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(xe=!0);const Ie=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?H=Ie[U][V]:H=Ie[U],ue=!0):De.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?H=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[V]:H=Ie,S.copy(T.viewport),N.copy(T.scissor),z=T.scissorTest}else S.copy(B).multiplyScalar(Y).floor(),N.copy(q).multiplyScalar(Y).floor(),z=Z;if(_e.bindFramebuffer(k.FRAMEBUFFER,H)&&De.drawBuffers&&W&&_e.drawBuffers(T,H),_e.viewport(S),_e.scissor(N),_e.setScissorTest(z),ue){const Ce=Be.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,V)}else if(xe){const Ce=Be.get(T.texture),He=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,V||0,He)}b=-1},this.readRenderTargetPixels=function(T,U,V,W,H,ue,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){_e.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ce=T.texture,He=Ce.format,Ie=Ce.type;if(He!==jn&&pe.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===Zo&&(Me.has("EXT_color_buffer_half_float")||De.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==er&&pe.convert(Ie)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Vi&&(De.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-H&&k.readPixels(U,V,W,H,pe.convert(He),pe.convert(Ie),ue)}finally{const Ce=A!==null?Be.get(A).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,U,V=0){const W=Math.pow(2,-V),H=Math.floor(U.image.width*W),ue=Math.floor(U.image.height*W);C.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,T.x,T.y,H,ue),_e.unbindTexture()},this.copyTextureToTexture=function(T,U,V,W=0){const H=U.image.width,ue=U.image.height,xe=pe.convert(V.format),we=pe.convert(V.type);C.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,T.x,T.y,H,ue,xe,we,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,T.x,T.y,xe,we,U.image),W===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Ce=pe.convert(W.format),He=pe.convert(W.type);let Ie;if(W.isData3DTexture)C.setTexture3D(W,0),Ie=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)C.setTexture2DArray(W,0),Ie=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ne=k.getParameter(k.UNPACK_ROW_LENGTH),Et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),pn=k.getParameter(k.UNPACK_SKIP_PIXELS),It=k.getParameter(k.UNPACK_SKIP_ROWS),ai=k.getParameter(k.UNPACK_SKIP_IMAGES),gt=V.isCompressedTexture?V.mipmaps[H]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Ie,H,U.x,U.y,U.z,ue,xe,we,Ce,He,gt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ie,H,U.x,U.y,U.z,ue,xe,we,Ce,gt.data)):k.texSubImage3D(Ie,H,U.x,U.y,U.z,ue,xe,we,Ce,He,gt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ne),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,It),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),H===0&&W.generateMipmaps&&k.generateMipmap(Ie),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,_e.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eh?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Lr:Zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?zt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class yT extends v_{}yT.prototype.isWebGL1Renderer=!0;class bh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(e),this.density=t}clone(){return new bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class MT extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ST{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Md,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new P;class Xl{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ws extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const uo=new P,ls=new P,cs=new P,us=new be,ho=new be,x_=new ct,qa=new P,fo=new P,$a=new P,hm=new be,vu=new be,fm=new be;class Jo extends Rt{constructor(e=new Ws){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Pe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ST(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Xl(i,3,0,!1)),as.setAttribute("uv",new Xl(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),x_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ka(qa.set(-.5,-.5,0),cs,o,ls,r,s),Ka(fo.set(.5,-.5,0),cs,o,ls,r,s),Ka($a.set(.5,.5,0),cs,o,ls,r,s),hm.set(0,0),vu.set(1,0),fm.set(1,1);let a=e.ray.intersectTriangle(qa,fo,$a,!1,uo);if(a===null&&(Ka(fo.set(-.5,.5,0),cs,o,ls,r,s),vu.set(0,1),a=e.ray.intersectTriangle(qa,$a,fo,!1,uo),a===null))return;const l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||t.push({distance:l,point:uo.clone(),uv:Ln.getInterpolation(uo,qa,fo,$a,hm,vu,fm,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ka(n,e,t,i,r,s){us.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ho.x=s*us.x-r*us.y,ho.y=r*us.x+s*us.y):ho.copy(us),n.copy(e),n.x+=ho.x,n.y+=ho.y,n.applyMatrix4(x_)}class pm extends ge{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new ct,mm=new ct,Za=[],gm=new Gr,ET=new ct,po=new rt,mo=new Vr;class Td extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ET)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),gm.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(gm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),mo.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),e.ray.intersectsSphere(mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),mm.multiplyMatrices(i,ds),po.matrixWorld=mm,po.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){const l=Za[o];l.instanceId=s,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class y_ extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _m=new P,vm=new P,xm=new ct,xu=new Th,Qa=new Vr;class wT extends Rt{constructor(e=new Pe,t=new y_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)_m.fromBufferAttribute(t,r-1),vm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=_m.distanceTo(vm);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;xm.copy(r).invert(),xu.copy(e.ray).applyMatrix4(xm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,f=new P,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const d=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let _=d,y=g-1;_<y;_+=p){const R=v.getX(_),w=v.getX(_+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,w),xu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=d,y=g-1;_<y;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),xu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ym=new P,Mm=new P;class TT extends wT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ym.fromBufferAttribute(t,r),Mm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ym.distanceTo(Mm);e.setAttribute("lineDistance",new $e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qe extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sm=new ct,Ad=new Th,Ja=new Vr,el=new P;class Je extends Rt{constructor(e=new Pe,t=new Qe){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Sm.copy(r).invert(),Ad.copy(e.ray).applyMatrix4(Sm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);el.fromBufferAttribute(h,m),Em(el,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,x=p;v<x;v++)el.fromBufferAttribute(h,v),Em(el,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Em(n,e,t,i,r,s,o){const a=Ad.distanceSqToPoint(n);if(a<t){const l=new P;Ad.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Br extends fn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ph extends Pe{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const x=[],m=i/2;let d=0;g(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(p,2));function g(){const y=new P,R=new P;let w=0;const A=(t-e)/i;for(let b=0;b<=s;b++){const M=[],S=b/s,N=S*(t-e)+e;for(let z=0;z<=r;z++){const $=z/r,D=$*l+a,F=Math.sin(D),X=Math.cos(D);R.x=N*F,R.y=-S*i+m,R.z=N*X,h.push(R.x,R.y,R.z),y.set(F,A,X).normalize(),f.push(y.x,y.y,y.z),p.push($,1-S),M.push(v++)}x.push(M)}for(let b=0;b<r;b++)for(let M=0;M<s;M++){const S=x[M][b],N=x[M+1][b],z=x[M+1][b+1],$=x[M][b+1];u.push(S,N,$),u.push(N,z,$),w+=6}c.addGroup(d,w,0),d+=w}function _(y){const R=v,w=new be,A=new P;let b=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),v++;const N=v;for(let z=0;z<=r;z++){const D=z/r*l+a,F=Math.cos(D),X=Math.sin(D);A.x=M*X,A.y=m*S,A.z=M*F,h.push(A.x,A.y,A.z),f.push(0,S,0),w.x=F*.5+.5,w.y=X*.5*S+.5,p.push(w.x,w.y),v++}for(let z=0;z<r;z++){const $=R+z,D=N+z;y===!0?u.push(D,D+1,$):u.push(D+1,D,$),b+=3}c.addGroup(d,b,y===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dc extends Pe{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(s.slice(),3)),this.setAttribute("uv",new $e(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new P,y=new P,R=new P;for(let w=0;w<t.length;w+=3)p(t[w+0],_),p(t[w+1],y),p(t[w+2],R),l(_,y,R,g)}function l(g,_,y,R){const w=R+1,A=[];for(let b=0;b<=w;b++){A[b]=[];const M=g.clone().lerp(y,b/w),S=_.clone().lerp(y,b/w),N=w-b;for(let z=0;z<=N;z++)z===0&&b===w?A[b][z]=M:A[b][z]=M.clone().lerp(S,z/N)}for(let b=0;b<w;b++)for(let M=0;M<2*(w-b)-1;M++){const S=Math.floor(M/2);M%2===0?(f(A[b][S+1]),f(A[b+1][S]),f(A[b][S])):(f(A[b][S+1]),f(A[b+1][S+1]),f(A[b+1][S]))}}function c(g){const _=new P;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const g=new P;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=m(g)/2/Math.PI+.5,R=d(g)/Math.PI+.5;o.push(y,1-R)}v(),h()}function h(){for(let g=0;g<o.length;g+=6){const _=o[g+0],y=o[g+2],R=o[g+4],w=Math.max(_,y,R),A=Math.min(_,y,R);w>.9&&A<.1&&(_<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),R<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const g=new P,_=new P,y=new P,R=new P,w=new be,A=new be,b=new be;for(let M=0,S=0;M<s.length;M+=9,S+=6){g.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),R.copy(g).add(_).add(y).divideScalar(3);const N=m(R);x(w,S+0,g,N),x(A,S+2,_,N),x(b,S+4,y,N)}}function x(g,_,y,R){R<0&&g.x===1&&(o[_]=g.x-1),y.x===0&&y.z===0&&(o[_]=R/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.vertices,e.indices,e.radius,e.details)}}class hc extends dc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hc(e.radius,e.detail)}}class Lh extends dc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lh(e.radius,e.detail)}}class oa extends Pe{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,p=new P,v=new be;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}h+=f}for(let x=0;x<r;x++){const m=x*(i+1);for(let d=0;d<i;d++){const g=d+m,_=g,y=g+i+1,R=g+i+2,w=g+1;a.push(_,y,w),a.push(y,R,w)}}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sn extends Pe{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,f=new P,p=[],v=[],x=[],m=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const w=R/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(w+y,1-_),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){const _=u[d][g+1],y=u[d][g],R=u[d+1][g],w=u[d+1][g+1];(d!==0||o>0)&&p.push(_,y,w),(d!==i-1||l<Math.PI)&&p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class si extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M_ extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yu=new ct,wm=new P,Tm=new P;class AT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(wm),Tm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tm),t.updateMatrixWorld(),yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Am=new ct,go=new P,Mu=new P;class RT extends AT{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),i.position.copy(go),Mu.copy(i.position),Mu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mu),i.updateMatrixWorld(),r.makeTranslation(-go.x,-go.y,-go.z),Am.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Am)}}class sr extends M_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new RT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class CT extends M_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);function oi(n,e,t){const r=document.createElement("canvas");r.width=512,r.height=512;const s=r.getContext("2d"),o=s.createImageData(512,512),a=new Uint32Array(o.data.buffer),l=new se(e),c=new se(t);for(let u=0;u<a.length;u++){const h=Math.random();let f,p,v;if(n==="asteroid"){const x=Math.random(),m=x>.6?.3:x<.2?.8:.5;f=l.r*m+c.r*(1-m),p=l.g*m+c.g*(1-m),v=l.b*m+c.b*(1-m)}else if(n==="gas"){const x=Math.floor(u/512),d=(Math.sin(x*.05)*.5+.5)*h;f=l.r*d+c.r*(1-d),p=l.g*d+c.g*(1-d),v=l.b*d+c.b*(1-d)}else{const x=h;f=l.r*x+c.r*(1-x),p=l.g*x+c.g*(1-x),v=l.b*x+c.b*(1-x)}a[u]=255<<24|v*255<<16|p*255<<8|f*255}return s.putImageData(o,0,0),new Br(r)}function Ci(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=128/2,r=t.createRadialGradient(i,i,0,i,i,i);return r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.2,"rgba(255, 255, 255, 0.8)"),r.addColorStop(.5,"rgba(255, 255, 255, 0.2)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=r,t.fillRect(0,0,128,128),new Br(e)}function or(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),i=64/2,r=t.createRadialGradient(i,i,0,i,i,i);return r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.3,"rgba(255, 255, 255, 0.9)"),r.addColorStop(.6,"rgba(255, 255, 255, 0.3)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=r,t.fillRect(0,0,64,64),new Br(e)}function PT(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=128/2;t.globalAlpha=.4;for(let r=0;r<5;r++){const s=(Math.random()-.5)*30,o=(Math.random()-.5)*30,a=20+Math.random()*25,l=t.createRadialGradient(i+s,i+o,0,i+s,i+o,a);l.addColorStop(0,"rgba(255, 255, 255, 0.8)"),l.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=l,t.beginPath(),t.arc(i+s,i+o,a,0,Math.PI*2),t.fill()}return new Br(e)}class $t{constructor(e,t){this.name=e,this.position=t instanceof P?t:new P(t.x||0,t.y||0,t.z||0),this.group=new xi,this.group.position.copy(this.position),this.group.userData={name:this.name,isSystem:!0},this.targetables=[],this.initialized=!1}init(e,t){this.initialized||(this.build(t),e.add(this.group),this.initialized=!0)}build(e){}update(e,t){}getTargetables(){return this.targetables}getDistanceFrom(e){return this.position.distanceTo(e)}isInRange(e,t=5e4){return this.getDistanceFrom(e)<t}createStar(e,t,i=6){const r=new xi,s=new Sn(e,64,64),o=new ri({color:t}),a=new rt(s,o);r.add(a);const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d"),u=c.createRadialGradient(128,128,0,128,128,128);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.2,`rgba(${t>>16&255},${t>>8&255},${t&255},0.8)`),u.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=u,c.fillRect(0,0,256,256);const h=new Br(l),f=new Ws({map:h,color:t,blending:Ye,transparent:!0}),p=new Jo(f);return p.scale.set(e*i,e*i,1),r.add(p),r}createPlanet(e,t,i,r,s){const o=new Sn(e,64,64),a=s.createNoiseTexture("rock",i,r),l=new si({map:a,roughness:.7,metalness:.1}),c=new rt(o,l),u=Math.random()*Math.PI*2;return c.position.set(Math.cos(u)*t,0,Math.sin(u)*t),c.userData={angle:u,distance:t,speed:1/Math.sqrt(t)*300,rotSpeed:.5+Math.random()},c}}const Nn={SGR_A_STAR:{x:0,y:0,z:0},SOLAR:{x:815625,y:0,z:1125e3},PROXIMA:{x:1096875,y:14062,z:1406250},SIRIUS:{x:562500,y:-16875,z:871875},VEGA:{x:1575e3,y:3375,z:1125e3},TRAPPIST:{x:-843750,y:2250,z:-1406250},KEPLER22:{x:225e4,y:-2812,z:-562500},CRAB_NEBULA:{x:-75e4,y:11250,z:225e4},ANDROMEDA:{x:15e6,y:45e5,z:-12e6}};class LT extends $t{constructor(){super("SOLAR",Nn.SOLAR)}build(e){or();const t=oi("asteroid","#666666","#222222"),i=this.createStar(2e3,16755200,6);i.userData={name:"SUN",isSystem:!0,baseScale:2e3},this.group.add(i),this.targetables.push(i);const r=new sr(16777215,28.75,5e6,.5);this.group.add(r);const s=[{size:50,dist:4e3,c1:"#8c8c8c",c2:"#5a5a5a",name:"MERCURY"},{size:120,dist:6e3,c1:"#e8cda0",c2:"#c9a84c",name:"VENUS"},{size:130,dist:8e3,c1:"#1a6fdb",c2:"#2d8f4e",name:"EARTH"},{size:70,dist:1e4,c1:"#c1440e",c2:"#8b3a0e",name:"MARS"},{size:1400,dist:16e3,c1:"#d4a56a",c2:"#a0744a",name:"JUPITER"},{size:1200,dist:22e3,c1:"#e8d191",c2:"#c4a35a",name:"SATURN",hasRings:!0},{size:500,dist:28e3,c1:"#a8e0e8",c2:"#6bb8c4",name:"URANUS"},{size:480,dist:32e3,c1:"#3355cc",c2:"#1a2d8f",name:"NEPTUNE"}];this.planets=[],s.forEach(o=>{const a=this.createPlanetMesh(o.size,o.dist,o.c1,o.c2,o.name);o.hasRings&&this.addSaturnRings(a,o.size),this.group.add(a),this.planets.push(a),this.targetables.push(a)}),this.createAsteroidBelt(3e3,12e3,14e3,t)}createPlanetMesh(e,t,i,r,s){const o=new Sn(e,64,64),a=oi("rock",i,r),l=new si({map:a,roughness:.7,metalness:.1}),c=new rt(o,l),u=Math.random()*Math.PI*2;return c.position.set(Math.cos(u)*t,0,Math.sin(u)*t),c.userData={name:s,type:"planet",angle:u,distance:t,speed:1/Math.sqrt(t)*300,rotSpeed:.5+Math.random()},c}addSaturnRings(e,t){const i=new oa(t*1.4,t*2.2,64),r=oi("gas","#aa8855","#554433"),s=new si({map:r,side:xn,transparent:!0,opacity:.8}),o=new rt(i,s);o.rotation.x=Math.PI/2,e.add(o)}createAsteroidBelt(e,t,i,r){const s=new hc(20,1),o=new si({map:r,roughness:.8,color:new se("#aaaaaa").multiplyScalar(3),emissive:new se(2236962)}),a=new Td(s,o,e),l=new Rt;this.beltData=[];for(let c=0;c<e;c++){const u=Math.random()*Math.PI*2,h=t+Math.random()*(i-t),f=(Math.random()-.5)*1e3;l.position.set(Math.cos(u)*h,f,Math.sin(u)*h),l.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const p=Math.random()*2+.5;l.scale.set(p,p,p),l.updateMatrix(),a.setMatrixAt(c,l.matrix),this.beltData.push({angle:u,dist:h,y:f,speed:1/Math.sqrt(h)*200,rotSpeed:Math.random()})}this.asteroidMesh=a,this.asteroidDummy=l,this.group.add(a)}update(e,t){if(this.planets&&this.planets.forEach(i=>{const r=i.userData;r.angle+=r.speed*e*.1,i.position.x=Math.cos(r.angle)*r.distance,i.position.z=Math.sin(r.angle)*r.distance,i.rotation.y+=r.rotSpeed*e}),this.asteroidMesh&&this.beltData){for(let i=0;i<this.beltData.length;i++){const r=this.beltData[i];r.angle+=r.speed*e*.1,this.asteroidDummy.position.set(Math.cos(r.angle)*r.dist,r.y,Math.sin(r.angle)*r.dist),this.asteroidDummy.rotation.set(t*r.rotSpeed,t*r.rotSpeed,0),this.asteroidDummy.scale.set(i%3+.5,i%3+.5,i%3+.5),this.asteroidDummy.updateMatrix(),this.asteroidMesh.setMatrixAt(i,this.asteroidDummy.matrix)}this.asteroidMesh.instanceMatrix.needsUpdate=!0}}}class DT extends $t{constructor(){super("SAGITTARIUS A*",Nn.SGR_A_STAR),this.group.rotation.x=0,this.group.rotation.z=0}build(e){const t=`
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
            #define DISK_OUTER 16.8
            #define DISK_HEIGHT 0.25
            
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
                return col * intensity * 18.0;
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
                    float bendStrength = 0.45; // 3x lensing for stronger pull
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
                        
                        // Clean smooth disk - no noise, pure radial gradient
                        float dens = radialFade; // Smooth gradient, no noise
                        
                        // Rocks orbit around the black hole - visible rotation
                        float rockOrbitSpeed = 4.0 / (distToCenter + 0.3);
                        float rockAngle = angle + iTime * rockOrbitSpeed * 6.0; // 6x orbital speed
                        vec3 rockPos = vec3(cos(rockAngle)*distToCenter, sin(rockAngle)*distToCenter, pos.y * 2.0);
                        float rocks = voronoi(rockPos * 2.0 + 10.0); // Slightly larger rocks
                        float rockSolid = smoothstep(0.65, 0.85, rocks); // More visible
                        
                        float rockStart = DISK_INNER + 1.5; // Rocks start closer to center
                        float rockFade = smoothstep(rockStart, rockStart + 2.0, distToCenter);
                        rockSolid *= rockFade;

                        float verticalFade = exp(-pow(distToPlane / (DISK_HEIGHT), 2.0));
                        float intensity = dens * verticalFade;
                        
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
                            
                            float absorption = 0.35 * intensity; // Denser disk
                            col += particleCol * absorption * (2.5 - length(col) * 0.3);
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
                    col += vec3(1.0, 0.95, 0.8) * pow(ringIntensity, 3.0) * 15.0; // Brighter ring
                }

                // Inner edge warm glow
                if (!hitBH && closestDistToBH < BH_RADIUS + 0.5) {
                    float edgeGlow = 1.0 - smoothstep(BH_RADIUS, BH_RADIUS + 0.5, closestDistToBH);
                    col += vec3(1.0, 0.7, 0.3) * edgeGlow * 8.0; // Brighter edge
                }

                // Glow
                vec3 glowColor = vec3(1.0, 0.6, 0.2); 
                float glowStrength = hitBH ? 0.0 : 1.8 / (closestDistToBH - BH_RADIUS + 0.3); // Stronger glow
                col += glowColor * glowStrength * 1.2;

                // Tone Mapping (ACES)
                col *= 4.0; // Higher exposure
                const float a = 2.51;
                const float b = 0.03;
                const float c = 2.43;
                const float d = 0.59;
                const float e = 0.14;
                col = clamp((col * (a * col + b)) / (col * (c * col + d) + e), 0.0, 1.0);
                
                col = pow(col, vec3(1.0 / 2.2));
                
                // Force full opacity inside event horizon
                if (hitBH) {
                    col = vec3(0.0);
                    accumulatedAlpha = 1.0;
                }
                
                gl_FragColor = vec4(col, clamp(accumulatedAlpha + glowStrength * 0.5, 0.0, 1.0));
            }
        `;this.bhMaterial=new rr({vertexShader:t,fragmentShader:i,uniforms:{iTime:{value:0},iResolution:{value:new be(window.innerWidth,window.innerHeight)},cameraPos:{value:new P},bhPos:{value:this.position.clone()}},transparent:!0,side:Yt,blending:Mi,depthWrite:!1});const r=new rt(new $s(15e4,15e4,15e4),this.bhMaterial);r.position.copy(this.position),r.userData={name:"SAGITTARIUS A*",isSystem:!0,baseScale:5e3},r.renderOrder=999,this.group.add(r),this.targetables.push(r),window.addEventListener("resize",()=>{this.bhMaterial&&this.bhMaterial.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight)})}update(e,t,i){this.bhMaterial&&(this.bhMaterial.uniforms.iTime.value=t*.3,i&&this.bhMaterial.uniforms.cameraPos.value.copy(i))}}class IT extends $t{constructor(){super("PROXIMA CENTAURI",Nn.PROXIMA)}build(e){const t=this.createStar(800,16724736,8);t.userData={name:"PROXIMA",isSystem:!0,baseScale:800},this.group.add(t),this.targetables.push(t);const i=new sr(16729088,8,2e5,.5);this.group.add(i);const r=this.createProximaB();this.group.add(r),this.targetables.push(r),this.planet=r}createProximaB(){const e=new Sn(100,64,64),t=oi("rock","#664422","#332211"),i=new si({map:t,roughness:.8,metalness:.2}),r=new rt(e,i);return r.position.set(3e3,0,0),r.userData={name:"PROXIMA B",type:"planet",angle:0,distance:3e3,speed:150,rotSpeed:.8},r}update(e,t){if(this.planet){const i=this.planet.userData;i.angle+=i.speed*e*.1,this.planet.position.x=Math.cos(i.angle)*i.distance,this.planet.position.z=Math.sin(i.angle)*i.distance,this.planet.rotation.y+=i.rotSpeed*e}}}class UT extends $t{constructor(){super("SIRIUS",Nn.SIRIUS)}build(e){this.orbitRadius=2e3,this.orbitSpeed=.5,this.orbitAngle=0,this.siriusA=this.createStar(1500,11193599,8),this.siriusA.userData={name:"SIRIUS A",isSystem:!0,baseScale:1500},this.group.add(this.siriusA),this.targetables.push(this.siriusA),this.lightA=new sr(11193599,30,5e5,.5),this.siriusA.add(this.lightA),this.siriusB=this.createStar(200,16777215,4),this.siriusB.userData={name:"SIRIUS B",type:"star",baseScale:200},this.group.add(this.siriusB),this.targetables.push(this.siriusB),this.lightB=new sr(16777215,5,1e5,.5),this.siriusB.add(this.lightB);const t=new oa(this.orbitRadius-50,this.orbitRadius+50,64),i=new ri({color:4491519,transparent:!0,opacity:.15,side:xn}),r=new rt(t,i);r.rotation.x=Math.PI/2,this.group.add(r)}update(e,t){this.orbitAngle+=this.orbitSpeed*e,this.siriusA.position.x=Math.cos(this.orbitAngle)*this.orbitRadius*.3,this.siriusA.position.z=Math.sin(this.orbitAngle)*this.orbitRadius*.3,this.siriusB.position.x=-Math.cos(this.orbitAngle)*this.orbitRadius,this.siriusB.position.z=-Math.sin(this.orbitAngle)*this.orbitRadius}}class NT extends $t{constructor(){super("TRAPPIST-1",Nn.TRAPPIST)}build(e){const t=this.createStar(400,16720384,6);t.userData={name:"TRAPPIST-1",isSystem:!0,baseScale:400},this.group.add(t),this.targetables.push(t);const i=new sr(16724736,3,1e5,.5);this.group.add(i);const r=[{name:"TRAPPIST-1b",size:80,dist:800,c1:"#553322",c2:"#221100"},{name:"TRAPPIST-1c",size:85,dist:1100,c1:"#664433",c2:"#332211"},{name:"TRAPPIST-1d",size:60,dist:1400,c1:"#445566",c2:"#223344"},{name:"TRAPPIST-1e",size:75,dist:1700,c1:"#224488",c2:"#113355"},{name:"TRAPPIST-1f",size:90,dist:2e3,c1:"#336699",c2:"#224466"},{name:"TRAPPIST-1g",size:95,dist:2300,c1:"#4477aa",c2:"#335588"},{name:"TRAPPIST-1h",size:55,dist:2600,c1:"#556688",c2:"#334455"}];this.planets=[],r.forEach((s,o)=>{const a=this.createPlanetMesh(s);a.userData.angle=o/7*Math.PI*2,a.position.x=Math.cos(a.userData.angle)*s.dist,a.position.z=Math.sin(a.userData.angle)*s.dist,this.group.add(a),this.planets.push(a),this.targetables.push(a)})}createPlanetMesh(e){const t=new Sn(e.size,64,64),i=oi("rock",e.c1,e.c2),r=new si({map:i,roughness:.7,metalness:.1}),s=new rt(t,r);return s.userData={name:e.name,type:"planet",angle:0,distance:e.dist,speed:1/Math.sqrt(e.dist)*500,rotSpeed:.3+Math.random()*.5},s}update(e,t){this.planets.forEach(i=>{const r=i.userData;r.angle+=r.speed*e*.1,i.position.x=Math.cos(r.angle)*r.distance,i.position.z=Math.sin(r.angle)*r.distance,i.rotation.y+=r.rotSpeed*e})}}class FT extends $t{constructor(){super("VEGA",Nn.VEGA)}build(e){const t=this.createStar(2500,10079487,10);t.userData={name:"VEGA",isSystem:!0,baseScale:2500},this.group.add(t),this.targetables.push(t);const i=new sr(11197951,40,8e5,.5);this.group.add(i),this.createDebrisDisk()}createDebrisDisk(){const e=new Pe,t=5e3,i=new Float32Array(t*3),r=new Float32Array(t*3);for(let a=0;a<t;a++){const l=Math.random()*Math.PI*2,c=8e3+Math.random()*12e3,u=(Math.random()-.5)*500;i[a*3]=Math.cos(l)*c,i[a*3+1]=u,i[a*3+2]=Math.sin(l)*c;const h=new se().setHSL(.08,.6,.3+Math.random()*.2);r[a*3]=h.r,r[a*3+1]=h.g,r[a*3+2]=h.b}e.setAttribute("position",new ge(i,3)),e.setAttribute("color",new ge(r,3));const s=new Qe({size:400,map:Ci(),vertexColors:!0,transparent:!0,opacity:.8,blending:Ye,depthWrite:!1}),o=new Je(e,s);o.rotation.x=Math.PI/6,this.debrisDisk=o,this.group.add(o)}update(e,t){this.debrisDisk&&(this.debrisDisk.rotation.y+=e*.02)}}class OT extends $t{constructor(){super("KEPLER-22",Nn.KEPLER22)}build(e){const t=this.createStar(1800,16768392,7);t.userData={name:"KEPLER-22",isSystem:!0,baseScale:1800},this.group.add(t),this.targetables.push(t);const i=new sr(16772761,20,4e5,.5);this.group.add(i),this.kepler22b=this.createKepler22b(),this.group.add(this.kepler22b),this.targetables.push(this.kepler22b),this.planets=[this.kepler22b];const r=this.createPlanet(80,3e3,"#aa8866","#665544","KEPLER-22c");this.group.add(r),this.planets.push(r),this.targetables.push(r);const s=this.createPlanet(600,12e3,"#ddbb88","#aa8855","KEPLER-22d");this.group.add(s),this.planets.push(s),this.targetables.push(s)}createKepler22b(){const e=new Sn(200,64,64),t=oi("atmosphere","#4488cc","#225588"),i=new si({map:t,roughness:.3,metalness:.1}),r=new rt(e,i);r.position.set(7e3,0,0),r.userData={name:"KEPLER-22b",type:"planet",angle:0,distance:7e3,speed:80,rotSpeed:.4};const s=new Sn(220,32,32),o=new ri({color:4491468,transparent:!0,opacity:.15,side:Yt}),a=new rt(s,o);return r.add(a),r}createPlanet(e,t,i,r,s){const o=new Sn(e,64,64),a=oi("rock",i,r),l=new si({map:a,roughness:.7,metalness:.1}),c=new rt(o,l),u=Math.random()*Math.PI*2;return c.position.set(Math.cos(u)*t,0,Math.sin(u)*t),c.userData={name:s,type:"planet",angle:u,distance:t,speed:1/Math.sqrt(t)*200,rotSpeed:.5+Math.random()},c}update(e,t){this.planets.forEach(i=>{const r=i.userData;r.angle+=r.speed*e*.1,i.position.x=Math.cos(r.angle)*r.distance,i.position.z=Math.sin(r.angle)*r.distance,i.rotation.y+=r.rotSpeed*e})}}class zT extends $t{constructor(){super("CRAB NEBULA",Nn.CRAB_NEBULA)}build(e){const t=Ci(),i=this.createPulsar();this.group.add(i),this.targetables.push(i),this.pulsar=i,this.pulsarLight=new sr(11197951,60,4e5,.5),i.add(this.pulsarLight),this.createSynchrotronGlow(),this.createInnerFilaments(t),this.createOuterFilaments(t),this.createEmissionFringe(t),this.createWispyTendrils(t)}createPulsar(){const e=new Sn(50,32,32),t=new ri({color:16777215}),i=new rt(e,t);i.userData={name:"CRAB PULSAR",isSystem:!0,baseScale:50};const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),o=s.createRadialGradient(128,128,0,128,128,128);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.1,"rgba(200,220,255,0.9)"),o.addColorStop(.4,"rgba(100,150,255,0.4)"),o.addColorStop(.7,"rgba(50,80,200,0.1)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(0,0,256,256);const a=new Br(r),l=new Ws({map:a,blending:Ye,transparent:!0}),c=new Jo(l);c.scale.set(5e3,5e3,1),i.add(c);const u=new Ph(50,250,25e3,16,1,!0),h=new ri({color:8956671,transparent:!0,opacity:.35,side:xn}),f=new rt(u,h);f.position.y=12500,i.add(f);const p=new rt(u,h);return p.position.y=-12500,p.rotation.x=Math.PI,i.add(p),i}createSynchrotronGlow(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);i.addColorStop(0,"rgba(180,200,255,0.7)"),i.addColorStop(.2,"rgba(120,160,255,0.4)"),i.addColorStop(.5,"rgba(80,100,200,0.15)"),i.addColorStop(.8,"rgba(40,50,120,0.05)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,256,256);const r=new Br(e),s=new Ws({map:r,blending:Ye,transparent:!0,opacity:.8}),o=new Jo(s);o.scale.set(2e4,15e3,1),this.group.add(o)}createInnerFilaments(e){const t=new Pe,i=22e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let a=0;a<i;a++){const l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),u=1+Math.sin(l*2.3)*.5+Math.cos(c*1.7)*.3,h=.55+Math.cos(l*3.1+c*.8)*.25,f=1.15+Math.sin(l*1.5+c*2.4)*.45,p=Math.pow(Math.random(),.5)*22e3,v=Math.sin(l*5.3+c*2.7)*.35,x=Math.cos(l*3.1-c*4.2)*.2,m=Math.sin(l*7.8+c*1.3)*.12,d=p*(1+v+x+m);r[a*3]=d*Math.sin(c)*Math.cos(l)*u,r[a*3+1]=d*Math.sin(c)*Math.sin(l)*h,r[a*3+2]=d*Math.cos(c)*f;const g=new se,_=p/22e3;_<.2?g.setHSL(.6,.7,.75+Math.random()*.2):_<.4?g.setHSL(.58+Math.random()*.06,.75,.6+Math.random()*.15):_<.65?g.setHSL(.45+Math.random()*.1,.7,.45+Math.random()*.15):g.setHSL(.03+Math.random()*.05,.85,.4+Math.random()*.15),s[a*3]=g.r,s[a*3+1]=g.g,s[a*3+2]=g.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const o=new Qe({size:800,map:e,vertexColors:!0,transparent:!0,opacity:.75,blending:Ye,depthWrite:!1});this.group.add(new Je(t,o))}createOuterFilaments(e){const t=new Pe,i=5e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let a=0;a<i;a++){const l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),u=15e3+Math.random()*22e3,h=Math.sin(l*3.7)*Math.cos(c*2.9)*8e3+Math.sin(l*6.1+c*1.8)*4e3,f=u+h,p=1.35+Math.sin(l*.7)*.2,v=.65,x=.85+Math.cos(l*1.3)*.15;r[a*3]=f*Math.sin(c)*Math.cos(l)*p,r[a*3+1]=f*Math.sin(c)*Math.sin(l)*v,r[a*3+2]=f*Math.cos(c)*x;const m=new se().setHSL(.82+Math.random()*.08,.6+Math.random()*.2,.3+Math.random()*.15);s[a*3]=m.r,s[a*3+1]=m.g,s[a*3+2]=m.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const o=new Qe({size:2500,map:e,vertexColors:!0,transparent:!0,opacity:.3,blending:Ye,depthWrite:!1});this.group.add(new Je(t,o))}createEmissionFringe(e){const t=new Pe,i=3e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let a=0;a<i;a++){const l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),u=18e3+Math.random()*15e3,h=Math.sin(l*4.3+c*2.1)*5e3;r[a*3]=(u+h)*Math.sin(c)*Math.cos(l)*1.3,r[a*3+1]=(u+h)*Math.sin(c)*Math.sin(l)*.6,r[a*3+2]=(u+h)*Math.cos(c)*.9;const f=new se;Math.random()<.6?f.setHSL(0+Math.random()*.03,.8,.3+Math.random()*.15):f.setHSL(.42+Math.random()*.05,.7,.3+Math.random()*.12),s[a*3]=f.r,s[a*3+1]=f.g,s[a*3+2]=f.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const o=new Qe({size:1500,map:e,vertexColors:!0,transparent:!0,opacity:.25,blending:Ye,depthWrite:!1});this.group.add(new Je(t,o))}createWispyTendrils(e){const t=new Pe,i=12,r=200,s=i*r,o=new Float32Array(s*3),a=new Float32Array(s*3);for(let c=0;c<i;c++){const u=Math.random()*Math.PI*2,h=Math.random()*Math.PI;let f=Math.sin(h)*Math.cos(u)*15e3,p=Math.sin(h)*Math.sin(u)*8e3,v=Math.cos(h)*12e3;const x=f/15e3,m=p/15e3,d=v/15e3;for(let g=0;g<r;g++){const _=c*r+g;f+=x*(300+Math.random()*800)+(Math.random()-.5)*400,p+=m*(200+Math.random()*500)+(Math.random()-.5)*300,v+=d*(300+Math.random()*800)+(Math.random()-.5)*400,o[_*3]=f,o[_*3+1]=p,o[_*3+2]=v;const y=g/r,R=new se().setHSL(.05+y*.02,.6-y*.3,.35-y*.2);a[_*3]=R.r,a[_*3+1]=R.g,a[_*3+2]=R.b}}t.setAttribute("position",new ge(o,3)),t.setAttribute("color",new ge(a,3));const l=new Qe({size:600,map:e,vertexColors:!0,transparent:!0,opacity:.35,blending:Ye,depthWrite:!1});this.group.add(new Je(t,l))}update(e,t){this.pulsar&&(this.pulsar.rotation.y+=e*5,this.pulsar.rotation.x+=e*.5),this.pulsarLight&&(this.pulsarLight.intensity=40+Math.sin(t*50)*25)}}class BT extends $t{constructor(){super("SPACE DEBRIS",{x:0,y:0,z:0})}build(e){const t=oi("asteroid","#888888","#444444");[{x:5e4,y:1e4,z:5e4},{x:-6e4,y:-5e3,z:4e4},{x:3e4,y:15e3,z:-7e4},{x:-4e4,y:8e3,z:-6e4},{x:12e4,y:-2e4,z:8e4},{x:-15e4,y:3e4,z:-5e4},{x:8e4,y:-1e4,z:15e4}].forEach((r,s)=>{this.createDebrisCluster(r,200+Math.floor(Math.random()*300),t)}),this.createScatteredRocks(t)}createDebrisCluster(e,t,i){const r=new hc(50,0),s=new si({map:i,roughness:.9,metalness:.3,color:new se("#aaaaaa")}),o=new Td(r,s,t),a=new Rt;for(let l=0;l<t;l++){const c=Math.pow(Math.random(),.5)*5e3,u=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1);a.position.set(e.x+c*Math.sin(h)*Math.cos(u),e.y+c*Math.sin(h)*Math.sin(u),e.z+c*Math.cos(h)),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const f=.5+Math.random()*3;a.scale.set(f,f*(.5+Math.random()*.5),f*(.5+Math.random()*.5)),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}this.group.add(o)}createScatteredRocks(e){const t=new Lh(200,1),i=new si({map:e,roughness:.85,metalness:.4,color:new se("#666666")}),r=100,s=new Td(t,i,r),o=new Rt;for(let a=0;a<r;a++){const l=3e4+Math.random()*17e4,c=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1);o.position.set(l*Math.sin(u)*Math.cos(c),l*Math.sin(u)*Math.sin(c),l*Math.cos(u)),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const h=1+Math.random()*5;o.scale.set(h,h*.7,h*.8),o.updateMatrix(),s.setMatrixAt(a,o.matrix)}this.group.add(s)}update(e,t){}}class kT extends $t{constructor(){super("NEBULA CLOUDS",{x:0,y:0,z:0})}build(e){const t=Ci(),i=PT();[{pos:{x:-8e4,y:2e3,z:3e4},hue:.8,stretch:{x:1.5,y:.6,z:1.2}},{pos:{x:2e5,y:-1e3,z:15e4},hue:.55,stretch:{x:.8,y:1.3,z:1}},{pos:{x:6e4,y:1500,z:1e5},hue:.08,stretch:{x:1.2,y:.7,z:1.4}},{pos:{x:-12e4,y:-800,z:-1e5},hue:.9,stretch:{x:1,y:1.5,z:.6}},{pos:{x:18e4,y:500,z:-12e4},hue:.6,stretch:{x:1.4,y:.8,z:1.1}},{pos:{x:-3e5,y:1200,z:18e4},hue:.75,stretch:{x:1.1,y:.9,z:1.3}},{pos:{x:-5e4,y:-500,z:-4e4},hue:.02,stretch:{x:.9,y:1.2,z:.8}},{pos:{x:32e4,y:800,z:-25e4},hue:.45,stretch:{x:1.3,y:.6,z:1}}].forEach(s=>{this.createRealisticNebulaCloud(s.pos,s.hue,s.stretch,t,i)})}createRealisticNebulaCloud(e,t,i,r,s){const o=new xi;o.position.set(e.x,e.y,e.z);const a=new Pe,l=3e3,c=new Float32Array(l*3),u=new Float32Array(l*3);for(let b=0;b<l;b++){const M=Math.random()*Math.PI*2,S=Math.acos(Math.random()*2-1),N=Math.pow(Math.random(),.6)*7e3,z=Math.sin(M*2.7+S*1.3)*.35,$=Math.cos(M*4.1-S*2.8)*.2,D=Math.sin(M*1.1+S*5.2)*.15,F=1+z+$+D,X=N*F;c[b*3]=X*Math.sin(S)*Math.cos(M)*i.x,c[b*3+1]=X*Math.sin(S)*Math.sin(M)*i.y,c[b*3+2]=X*Math.cos(S)*i.z;const Y=N/7e3,I=t+(Y-.5)*.12,O=.7-Y*.2,B=.5-Y*.2,q=new se().setHSL(I+(Math.random()-.5)*.08,O,B+Math.random()*.15);u[b*3]=q.r,u[b*3+1]=q.g,u[b*3+2]=q.b}a.setAttribute("position",new ge(c,3)),a.setAttribute("color",new ge(u,3));const h=new Qe({size:1800,map:r,vertexColors:!0,transparent:!0,opacity:.6,blending:Ye,depthWrite:!1});o.add(new Je(a,h));const f=new Pe,p=1500,v=new Float32Array(p*3),x=new Float32Array(p*3),m=6+Math.floor(Math.random()*5),d=[];for(let b=0;b<m;b++)d.push({theta:Math.random()*Math.PI*2,phi:Math.random()*Math.PI,length:8e3+Math.random()*12e3,width:1500+Math.random()*2500});for(let b=0;b<p;b++){const M=d[Math.floor(Math.random()*m)],S=Math.pow(Math.random(),.7),N=S*M.length,z=M.width*(1-S*.5)*(Math.random()-.5),$=M.width*.4*(Math.random()-.5),D=Math.sin(M.phi)*Math.cos(M.theta),F=Math.cos(M.phi),X=Math.sin(M.phi)*Math.sin(M.theta),Y=-Math.sin(M.theta),I=Math.cos(M.theta);v[b*3]=(D*N+Y*z)*i.x,v[b*3+1]=(F*N+$)*i.y,v[b*3+2]=(X*N+I*z)*i.z;const O=1-S,B=new se().setHSL(t+O*.1,.5+O*.2,.2+O*.15);x[b*3]=B.r,x[b*3+1]=B.g,x[b*3+2]=B.b}f.setAttribute("position",new ge(v,3)),f.setAttribute("color",new ge(x,3));const g=new Qe({size:2200,map:s,vertexColors:!0,transparent:!0,opacity:.3,blending:Ye,depthWrite:!1});o.add(new Je(f,g));const _=new Pe,y=600,R=new Float32Array(y*3),w=new Float32Array(y*3);for(let b=0;b<y;b++){const M=Math.random()*Math.PI*2,S=Math.acos(Math.random()*2-1),N=6e3+Math.random()*1e4,z=Math.sin(M*1.7)*Math.cos(S*2.3)*3e3;R[b*3]=(N+z)*Math.sin(S)*Math.cos(M)*i.x,R[b*3+1]=(N+z)*Math.sin(S)*Math.sin(M)*i.y*.7,R[b*3+2]=(N+z)*Math.cos(S)*i.z;const $=new se().setHSL(t+.05,.4,.15);w[b*3]=$.r,w[b*3+1]=$.g,w[b*3+2]=$.b}_.setAttribute("position",new ge(R,3)),_.setAttribute("color",new ge(w,3));const A=new Qe({size:5e3,map:r,vertexColors:!0,transparent:!0,opacity:.12,blending:Ye,depthWrite:!1});o.add(new Je(_,A)),this.group.add(o)}update(e,t){this.group.rotation.y+=e*.002}}function HT(n,e,t){var i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}class GT extends $t{constructor(){super("MILKY WAY",{x:0,y:0,z:0})}build(e){const t=or(),i=Ci();this.group.rotation.x=0,this.group.rotation.z=0,this.createArmDustFill(i),this.createSpiralArms(t),this.createGalacticRing(i),this.createDiskStars(t),this.createCoreStars(t),this.createCoreDust(i)}_getArms(){return[{offset:0,tightness:.18,strength:1},{offset:Math.PI*.55,tightness:.17,strength:.9},{offset:Math.PI*1.05,tightness:.2,strength:.85},{offset:Math.PI*1.55,tightness:.19,strength:.75}]}_armPoint(e,t,i){const r=1181250+t*5484375,s=e.offset+Math.log(r/1181250)/e.tightness,l=(354e4*Math.pow(1-t,3)+6e4)*e.strength*i,c=l/r,u=(Math.random()-.5)*c,h=.35+t*.5,f=(Math.random()-.5)*l*h,p=s+u,v=r+f,m=(3e4+1312500*Math.pow(1-t,1.2))*.5*(Math.random()+Math.random()+Math.random()-1.5)*.67;return{x:Math.cos(p)*v,y:m,z:Math.sin(p)*v}}createArmDustFill(e){const t=new Pe,i=3e4,r=new Float32Array(i*3),s=new Float32Array(i*3),o=this._getArms(),a=Object.values(Nn);for(let c=0;c<i;c++){const u=o[c%4],h=Math.pow(Math.random(),.4),f=this._armPoint(u,h,1.1);let p=!1;for(const m of a){const d=f.x-m.x,g=f.y-m.y,_=f.z-m.z;if(d*d+g*g+_*_<140625e6){p=!0;break}}if(p){r[c*3]=0,r[c*3+1]=0,r[c*3+2]=0;continue}r[c*3]=f.x,r[c*3+1]=f.y,r[c*3+2]=f.z;const v=(1-h*.8)*.3,x=new se().setHSL(.08+Math.random()*.06,.4,v);s[c*3]=x.r,s[c*3+1]=x.g,s[c*3+2]=x.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const l=new Qe({size:45e3,map:e,vertexColors:!0,transparent:!0,opacity:.25,blending:Ye,depthWrite:!1});this.group.add(new Je(t,l))}createSpiralArms(e){const t=new Pe,i=6e4,r=new Float32Array(i*3),s=new Float32Array(i*3),o=this._getArms();for(let l=0;l<i;l++){const c=o[l%4],u=Math.pow(Math.random(),3),h=this._armPoint(c,u,.8);r[l*3]=h.x,r[l*3+1]=h.y,r[l*3+2]=h.z;const f=new se;if(u<.15)f.setHSL(.12,.8,.8-u*2);else{const p=HT(1,.7,u),v=.42*(1-(u-.15)*1.1)*p;if(f.setHSL(.6,.6,Math.max(0,v)),v<.01&&Math.random()>.1){s[l*3]=0,s[l*3+1]=0,s[l*3+2]=0;continue}}s[l*3]=f.r,s[l*3+1]=f.g,s[l*3+2]=f.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const a=new Qe({size:5e3,map:e,vertexColors:!0,transparent:!0,opacity:.56,blending:Ye,depthWrite:!1});this.group.add(new Je(t,a))}createGalacticRing(e){const t=new Pe,i=37500,r=new Float32Array(i*3),s=new Float32Array(i*3),o=885937,a=4218750;for(let c=0;c<i;c++){const u=Math.random(),h=Math.random()*Math.PI*2,f=Math.sin(h*3)*.2+Math.cos(h*7)*.1,p=a*(1+f),v=o+Math.pow(u,1.8)*(p-o),m=(1e5+5e5*Math.pow(1-u,1.2))*.5*(Math.random()+Math.random()+Math.random()-1.5)*.67;r[c*3]=Math.cos(h)*v,r[c*3+1]=m,r[c*3+2]=Math.sin(h)*v;const d=new se().setHSL(.12+Math.random()*.05,.8,.5+Math.random()*.4);s[c*3]=d.r,s[c*3+1]=d.g,s[c*3+2]=d.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const l=new Qe({size:9e3,map:e,vertexColors:!0,transparent:!0,opacity:.6,blending:Ye,depthWrite:!1});this.group.add(new Je(t,l))}createInterArmGas(e){const t=new Pe,i=7500,r=new Float32Array(i*3),s=new Float32Array(i*3),o=Object.values(Nn);let a=0;for(let c=0;c<i;c++){const u=12e5+Math.random()*42e5,h=Math.random()*Math.PI*2,f=Math.cos(h)*u,p=Math.sin(h)*u,v=u/54e5,x=6e4+12e4*Math.exp(-v*3),m=(Math.random()-.5)*x;let d=!1;for(const _ of o){const y=f-_.x,R=m-_.y,w=p-_.z;if(y*y+R*R+w*w<140625e6){d=!0;break}}if(d)continue;r[a*3]=f,r[a*3+1]=m,r[a*3+2]=p;const g=new se().setHSL(.7+Math.random()*.1,.6,.05+Math.random()*.1);s[a*3]=g.r,s[a*3+1]=g.g,s[a*3+2]=g.b,a++}t.setAttribute("position",new ge(r.slice(0,a*3),3)),t.setAttribute("color",new ge(s.slice(0,a*3),3));const l=new Qe({size:35e3,map:e,vertexColors:!0,transparent:!0,opacity:.15,blending:Ye,depthWrite:!1});this.group.add(new Je(t,l))}createCentralBar(e){const t=new Pe,i=12e3,r=new Float32Array(i*3),s=new Float32Array(i*3),o=Math.PI*.15,a=45e3,l=13e4,c=45e3;for(let h=0;h<i;h++){const f=Math.random()>.5?1:-1,p=(a+Math.random()*(l-a))*f,v=(Math.random()-.5)*c;r[h*3]=Math.cos(o)*p-Math.sin(o)*v,r[h*3+1]=(Math.random()-.5)*4e3,r[h*3+2]=Math.sin(o)*p+Math.cos(o)*v;const x=new se().setHSL(.1,.6,.6);s[h*3]=x.r,s[h*3+1]=x.g,s[h*3+2]=x.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const u=new Qe({size:5e3,map:e,vertexColors:!0,transparent:!0,opacity:.6,blending:Ye,depthWrite:!1});this.group.add(new Je(t,u))}createCoreStars(e){const t=new Pe,i=12e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let a=0;a<i;a++){const l=675e3+Math.pow(Math.random(),1.5)*2025e3,c=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),h=l*Math.sin(u)*Math.cos(c),f=l*Math.sin(u)*Math.sin(c)*.4,p=l*Math.cos(u);r[a*3]=h,r[a*3+1]=f,r[a*3+2]=p;const v=new se().setHSL(.08+Math.random()*.08,.8,.6+Math.random()*.4);s[a*3]=v.r,s[a*3+1]=v.g,s[a*3+2]=v.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const o=new Qe({size:6e3,map:e,vertexColors:!0,transparent:!0,opacity:.8,blending:Ye,depthWrite:!1});this.group.add(new Je(t,o))}createCoreDust(e){const t=new Pe,i=6e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let a=0;a<i;a++){const l=225e4+Math.random()*225e4,c=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),h=l*Math.sin(u)*Math.cos(c),f=l*Math.sin(u)*Math.sin(c)*.4,p=l*Math.cos(u);r[a*3]=h,r[a*3+1]=f,r[a*3+2]=p;const v=new se().setHSL(.04+Math.random()*.02,.6+Math.random()*.2,.1+Math.random()*.1);s[a*3]=v.r,s[a*3+1]=v.g,s[a*3+2]=v.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const o=new Qe({size:5e4,map:e,vertexColors:!0,transparent:!0,opacity:.2,blending:Ye,depthWrite:!1});this.group.add(new Je(t,o))}createDiskStars(e){const t=new Pe,i=18e3,r=new Float32Array(i*3),s=new Float32Array(i*3),o=Object.values(Nn);let a=0;for(let c=0;c<i;c++){const u=1181250+Math.random()*5484375,h=Math.random()*Math.PI*2;if(Math.random()>Math.exp(-u/3375e3)*3)continue;const f=(u-1181250)/5484375,p=3e4+1312500*Math.pow(1-f,1.2),v=Math.cos(h)*u,x=Math.sin(h)*u,m=p*.5*(Math.random()+Math.random()+Math.random()-1.5)*.67;let d=!1;for(const _ of o){const y=v-_.x,R=m-_.y,w=x-_.z;if(y*y+R*R+w*w<140625e6){d=!0;break}}if(d)continue;r[a*3]=v,r[a*3+1]=m,r[a*3+2]=x;const g=new se().setHSL(.6,.2,.4);s[a*3]=g.r,s[a*3+1]=g.g,s[a*3+2]=g.b,a++}t.setAttribute("position",new ge(r.slice(0,a*3),3)),t.setAttribute("color",new ge(s.slice(0,a*3),3));const l=new Qe({size:3500,map:e,vertexColors:!0,transparent:!0,opacity:.3,blending:Ye,depthWrite:!1});this.group.add(new Je(t,l))}update(e,t){this.group.rotation.y+=e*.005}}function VT(n,e,t){var i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}class WT extends $t{constructor(){super("ANDROMEDA",Nn.ANDROMEDA)}build(e){const t=or(),i=Ci();this.group.rotation.x=0,this.group.rotation.z=0,this.createArmDustFill(i),this.createInterArmGas(oi("gas","#cc4444","#000000")),this.createSpiralArms(t),this.createGalacticRing(i),this.createDiskStars(t),this.createCentralBlackHole();const r=new rt(new Sn(5e3,16,16),new ri({visible:!1}));r.userData={name:"ANDROMEDA",isSystem:!0,baseScale:5e3},this.group.add(r),this.targetables.push(r)}_getArms(){return[{offset:0,tightness:.18,strength:1},{offset:Math.PI*.55,tightness:.17,strength:.9},{offset:Math.PI*1.05,tightness:.2,strength:.85},{offset:Math.PI*1.55,tightness:.19,strength:.75}]}_armPoint(e,t,i){const r=2e5+t*8e5,s=e.offset+Math.log(r/2e5)/e.tightness,o=(2e5*(1-t*.92)+15e3)*e.strength*i,a=o/r,l=(Math.random()-.5)*a,c=.35+t*.5,u=(Math.random()-.5)*o*c,h=s+l,f=r+u,p=(Math.random()-.5)*(1e4*(1-t*.6));return{x:Math.cos(h)*f,y:p,z:Math.sin(h)*f}}createArmDustFill(e){const t=new Pe,i=2e4,r=new Float32Array(i*3),s=new Float32Array(i*3),o=this._getArms();for(let l=0;l<i;l++){const c=o[l%4],u=Math.pow(Math.random(),.4),h=this._armPoint(c,u,1.1);r[l*3]=h.x,r[l*3+1]=h.y,r[l*3+2]=h.z;const f=(1-u*.8)*.3,p=new se().setHSL(.08+Math.random()*.06,.4,f);s[l*3]=p.r,s[l*3+1]=p.g,s[l*3+2]=p.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const a=new Qe({size:45e3,map:e,vertexColors:!0,transparent:!0,opacity:.12,blending:Ye,depthWrite:!1});this.group.add(new Je(t,a))}createSpiralArms(e){const t=new Pe,i=4e4,r=new Float32Array(i*3),s=new Float32Array(i*3),o=this._getArms();for(let l=0;l<i;l++){const c=o[l%4],u=Math.pow(Math.random(),.5),h=this._armPoint(c,u,.8);r[l*3]=h.x,r[l*3+1]=h.y,r[l*3+2]=h.z;const f=new se;if(u<.15)f.setHSL(.12,.8,.8-u*2);else{const p=VT(1,.7,u),v=.3*(1-(u-.15)*1.1)*p;if(f.setHSL(.6,.6,Math.max(0,v)),v<.01&&Math.random()>.1){s[l*3]=0,s[l*3+1]=0,s[l*3+2]=0;continue}}s[l*3]=f.r,s[l*3+1]=f.g,s[l*3+2]=f.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const a=new Qe({size:5e3,map:e,vertexColors:!0,transparent:!0,opacity:.35,blending:Ye,depthWrite:!1});this.group.add(new Je(t,a))}createGalacticRing(e){const t=new Pe,i=25e3,r=new Float32Array(i*3),s=new Float32Array(i*3),o=15e4,a=65e4;for(let c=0;c<i;c++){const u=Math.random(),h=Math.random()*Math.PI*2,f=Math.sin(h*3)*.2+Math.cos(h*7)*.1,p=a*(1+f),v=o+Math.pow(u,1.8)*(p-o),x=(Math.random()-.5)*2e4*Math.sin(Math.PI*u);r[c*3]=Math.cos(h)*v,r[c*3+1]=x,r[c*3+2]=Math.sin(h)*v;const m=new se().setHSL(.12+Math.random()*.05,.8,.5+Math.random()*.4);s[c*3]=m.r,s[c*3+1]=m.g,s[c*3+2]=m.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const l=new Qe({size:9e3,map:e,vertexColors:!0,transparent:!0,opacity:.3,blending:Ye,depthWrite:!1});this.group.add(new Je(t,l))}createInterArmGas(e){const t=new Pe,i=5e3,r=new Float32Array(i*3),s=new Float32Array(i*3);let o=0;for(let l=0;l<i;l++){const c=Math.random()*3e5,u=Math.random()*Math.PI*2,h=Math.cos(u)*c,f=Math.sin(u)*c,p=(Math.random()-.5)*25e3;r[o*3]=h,r[o*3+1]=p,r[o*3+2]=f;const v=new se().setHSL(.7+Math.random()*.1,.6,.05+Math.random()*.1);s[o*3]=v.r,s[o*3+1]=v.g,s[o*3+2]=v.b,o++}t.setAttribute("position",new ge(r.slice(0,o*3),3)),t.setAttribute("color",new ge(s.slice(0,o*3),3));const a=new Qe({size:35e3,map:e,vertexColors:!0,transparent:!0,opacity:.08,blending:Ye,depthWrite:!1});this.group.add(new Je(t,a))}createDiskStars(e){const t=new Pe,i=12e3,r=new Float32Array(i*3),s=new Float32Array(i*3);let o=0;for(let l=0;l<i;l++){const c=2e5+Math.random()*8e5,u=Math.random()*Math.PI*2;if(Math.random()>Math.exp(-c/5e5)*3)continue;r[o*3]=Math.cos(u)*c,r[o*3+1]=(Math.random()-.5)*12500,r[o*3+2]=Math.sin(u)*c;const h=new se().setHSL(.6,.2,.4);s[o*3]=h.r,s[o*3+1]=h.g,s[o*3+2]=h.b,o++}t.setAttribute("position",new ge(r.slice(0,o*3),3)),t.setAttribute("color",new ge(s.slice(0,o*3),3));const a=new Qe({size:3500,map:e,vertexColors:!0,transparent:!0,opacity:.15,blending:Ye,depthWrite:!1});this.group.add(new Je(t,a))}update(e,t){this.group.rotation.y+=e*.005}createCentralBlackHole(){const e=new Sn(8e3,32,32),t=new ri({color:0,transparent:!1}),i=new rt(e,t);this.group.add(i);const r=new oa(1e4,25e3,64),s=new ri({color:16737826,transparent:!0,opacity:.3,side:xn,blending:Ye,depthWrite:!1}),o=new rt(r,s);o.rotation.x=Math.PI*.5,this.group.add(o)}}class XT extends $t{constructor(){super("CONSTELLATIONS",{x:0,y:0,z:0})}build(){const e=new y_({color:16777096,transparent:!0,opacity:.25,blending:Ye,depthWrite:!1}),t=[];for(let c=0;c<5;c++){const u=4+Math.floor(Math.random()*4),h=(Math.random()-.5)*8e6,f=(Math.random()-.5)*8e6,p=(Math.random()-.5)*5e5;let v=h,x=p,m=f;for(let d=0;d<u;d++){const g=v+(Math.random()-.5)*15e5,_=x+(Math.random()-.5)*2e5,y=m+(Math.random()-.5)*15e5;t.push(v,x,m),t.push(g,_,y),v=g,x=_,m=y}}for(let c=0;c<5;c++){const u=5+Math.floor(Math.random()*5),h=25e6+Math.random()*2e7,f=Math.random()*Math.PI*2,p=Math.acos(Math.random()*2-1),v=h*Math.sin(p)*Math.cos(f),x=h*Math.sin(p)*Math.sin(f),m=h*Math.cos(p);let d=v,g=x,_=m;for(let y=0;y<u;y++){const R=d+(Math.random()-.5)*4e6,w=g+(Math.random()-.5)*4e6,A=_+(Math.random()-.5)*4e6;t.push(d,g,_),t.push(R,w,A),d=R,g=w,_=A}}const i=new Pe;i.setAttribute("position",new $e(t,3));const r=new TT(i,e);r.renderOrder=-1,this.group.add(r);const s=new Pe,o=[],a=[];for(let c=0;c<t.length;c+=3){const u=t[c],h=t[c+1],f=t[c+2];if(o.push(u,h,f),u*u+f*f<1e14){const v=new se().setHSL(.6,.2,.8+Math.random()*.2);a.push(v.r,v.g,v.b)}else{const v=Math.random()>.5?.1:.6,x=new se().setHSL(v,.8,.7);a.push(x.r,x.g,x.b)}}s.setAttribute("position",new $e(o,3)),s.setAttribute("color",new $e(a,3));const l=new Qe({size:6e4,map:or(),transparent:!0,vertexColors:!0,opacity:.9,blending:Ye,depthWrite:!1});this.group.add(new Je(s,l))}update(e,t){}}class jT extends $t{constructor(){super("BACKGROUND_GALAXIES",{x:0,y:0,z:0})}build(e){const t=["Spiral","Barred","Elliptical","Irregular","Ring","Lenticular"],i=or(),r=[new P(1,.5,1),new P(-1,.2,-1),new P(.5,-1,.5),new P(-.5,1,-.5),new P(1,-.5,-1),new P(-1,.5,1)];t.forEach((s,o)=>{const a=r[o].normalize(),l=45e6+Math.random()*2e7,c=a.multiplyScalar(l),u=Math.random(),h=2e5+Math.random()*3e5;this.createGalaxy(s,c,h,u,i)})}createGalaxy(e,t,i,r,s){const o=new Pe;let a=5e3,l=[],c=[];e==="Spiral"?this.generateSpiral(l,c,a,i,r):e==="Barred"?this.generateBarred(l,c,a,i,r):e==="Elliptical"?this.generateElliptical(l,c,a,i,r):e==="Irregular"?this.generateIrregular(l,c,a,i,r):e==="Ring"?this.generateRing(l,c,a,i,r):e==="Lenticular"&&this.generateLenticular(l,c,a,i,r),o.setAttribute("position",new $e(l,3)),o.setAttribute("color",new $e(c,3));const u=new Qe({size:i*.05,map:s,vertexColors:!0,transparent:!0,opacity:.8,blending:Ye,depthWrite:!1}),h=new Je(o,u);h.position.copy(t),h.lookAt(0,0,0),h.rotation.z=Math.random()*Math.PI*2,h.rotation.x+=Math.random()-.5,this.group.add(h)}generateSpiral(e,t,i,r,s){const o=2+Math.floor(Math.random()*3),a=Math.PI*2/o;for(let l=0;l<i;l++){const c=Math.random()*r,u=c/r,f=l%o*a+Math.log(c/(r*.1))*3,p=(Math.random()-.5)*(c*.5),v=Math.cos(f)*c+Math.cos(f)*p,x=Math.sin(f)*c+Math.sin(f)*p,m=(Math.random()-.5)*(r*.2*(1-u));e.push(v,m,x);const d=new se().setHSL(s+u*.1,.8,.8-u*.5);t.push(d.r,d.g,d.b)}}generateBarred(e,t,i,r,s){const o=r*.4,a=r*.1;for(let l=0;l<i/3;l++){const c=(Math.random()-.5)*2*o,u=(Math.random()-.5)*a,h=(Math.random()-.5)*a;e.push(c,h,u);const f=new se().setHSL(s,1,.7);t.push(f.r,f.g,f.b)}for(let l=0;l<i*.66;l++){const c=l%2===0?1:-1,u=Math.random(),h=o+u*(r-o),f=(c>0?0:Math.PI)+u*4,p=Math.cos(f)*h+(Math.random()-.5)*a*2,v=Math.sin(f)*h+(Math.random()-.5)*a*2,x=(Math.random()-.5)*a;e.push(p,x,v);const m=new se().setHSL(s+.1,.8,.5);t.push(m.r,m.g,m.b)}}generateElliptical(e,t,i,r,s){for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=Math.pow(Math.random(),3)*r,u=c*Math.sin(l)*Math.cos(a),h=c*Math.sin(l)*Math.sin(a)*.8,f=c*Math.cos(l);e.push(u,h,f);const p=new se().setHSL(.1+Math.random()*.1,.6,1-c/r);t.push(p.r,p.g,p.b)}}generateIrregular(e,t,i,r,s){for(let o=0;o<i;o++){const a=Math.random()*r,l=Math.random()*Math.PI*2,c=Math.random()*Math.PI,u=Math.sin(l*3)*r*.3,h=a*Math.sin(c)*Math.cos(l)+u,f=a*Math.sin(c)*Math.sin(l)*.5,p=a*Math.cos(c);e.push(h,f,p);const v=new se().setHSL(s,.9,.6);t.push(v.r,v.g,v.b)}}generateRing(e,t,i,r,s){for(let o=0;o<i*.3;o++){const a=Math.random()*r*.2,l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);e.push(a*Math.sin(c)*Math.cos(l),a*Math.sin(c)*Math.sin(l),a*Math.cos(c)),t.push(1,1,.8)}for(let o=0;o<i*.7;o++){const a=Math.random()*Math.PI*2,l=r*.8+Math.random()*r*.2,c=Math.cos(a)*l,u=Math.sin(a)*l,h=(Math.random()-.5)*r*.1;e.push(c,h,u);const f=new se().setHSL(s,.8,.7);t.push(f.r,f.g,f.b)}}generateLenticular(e,t,i,r,s){for(let o=0;o<i;o++){const a=Math.pow(Math.random(),2)*r,l=Math.random()*Math.PI*2,c=Math.cos(l)*a,u=Math.sin(l)*a,h=(Math.random()-.5)*r*.4*(1-a/r);e.push(c,h,u);const f=new se().setHSL(.1,.4,.9-a/r*.8);t.push(f.r,f.g,f.b)}}update(e,t){}}class YT extends $t{constructor(){super("DEEP_SPACE",{x:0,y:0,z:0})}build(e){const t=or(),i=Ci();this.createGodsHand(new P(12e6,3e6,12e6),i,t),this.createGlobularCluster(new P(0,6e6,0),t)}createGodsHand(e,t,i){const r=new xi;r.position.copy(e),r.lookAt(0,0,0);const s=new Pe,o=8e3,a=[],l=[];for(let m=0;m<o;m++){const d=4e5+Math.random()*4e5,g=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1);a.push(d*Math.sin(_)*Math.cos(g),d*Math.sin(_)*Math.sin(g)*.8,d*Math.cos(_));const y=new se().setHSL(.8+Math.random()*.1,.6,.05+Math.random()*.1);l.push(y.r,y.g,y.b)}s.setAttribute("position",new $e(a,3)),s.setAttribute("color",new $e(l,3));const c=new Qe({size:6e4,map:t,vertexColors:!0,transparent:!0,opacity:.15,blending:Ye,depthWrite:!1});r.add(new Je(s,c));const u=new Pe,h=[],f=[],p=6e3;for(let m=0;m<3;m++){const d=(m-1)*.5;for(let g=0;g<p/3;g++){const _=Math.random()*8e5,y=6e4+Math.random()*1e5*(1-_/8e5),R=Math.random()*Math.PI*2;let w=Math.cos(R)*y,A=Math.sin(R)*y,b=_+2e5;const M=w*Math.cos(d)-A*Math.sin(d),S=.3*(_/8e5),N=M,z=b*Math.cos(S)-A*Math.sin(S),$=b*Math.sin(S)+A*Math.cos(S),D=N+(m-1)*3e5;h.push(D,z,$);const F=new se().setHSL(.9+Math.random()*.1,.7,.1+Math.random()*.1);f.push(F.r,F.g,F.b)}}u.setAttribute("position",new $e(h,3)),u.setAttribute("color",new $e(f,3)),r.add(new Je(u,c));const v=new Pe;v.setAttribute("position",new $e([0,1e6,2e5],3));const x=new Qe({size:2e5,map:i,color:65535,transparent:!0,opacity:1,blending:Ye,depthWrite:!1});r.add(new Je(v,x)),this.group.add(r)}createGlobularCluster(e,t){const i=new Pe,r=1e4,s=[],o=[];for(let l=0;l<r;l++){const c=2e5*Math.pow(Math.random(),3)+5e4*Math.random(),u=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);s.push(e.x+c*Math.sin(h)*Math.cos(u),e.y+c*Math.sin(h)*Math.sin(u),e.z+c*Math.cos(h));const f=Math.random(),p=new se;f>.7?p.setHSL(.15,.8,.7):f>.3?p.setHSL(.05,.8,.6):p.setHSL(.6,0,.9),o.push(p.r,p.g,p.b)}i.setAttribute("position",new $e(s,3)),i.setAttribute("color",new $e(o,3));const a=new Qe({size:4e3,map:t,vertexColors:!0,transparent:!0,opacity:.8,blending:Ye,depthWrite:!1});this.group.add(new Je(i,a))}update(e,t){}}class qT extends $t{constructor(){super("GALAXY_LOD",{x:0,y:0,z:0}),this.materials=[],this.darkSprites=[]}_getArms(){return[{offset:0,tightness:.18,strength:1},{offset:Math.PI*.55,tightness:.17,strength:.9},{offset:Math.PI*1.05,tightness:.2,strength:.85},{offset:Math.PI*1.55,tightness:.19,strength:.75}]}_armPoint(e,t,i){const r=1181250+t*5484375,s=e.offset+Math.log(r/1181250)/e.tightness,l=(354e4*Math.pow(1-t,3)+6e4)*e.strength*i,c=l/r,u=(Math.random()-.5)*c,h=s+u,p=(3e4+1312500*Math.pow(1-t,1.2))*.5*(Math.random()+Math.random()+Math.random()-1.5)*.4;return{x:Math.cos(h)*r,y:p,z:Math.sin(h)*r,width:l}}build(e){const t=Ci(),i=this._getArms(),r=new Ws({map:t,color:16768426,transparent:!0,opacity:0,blending:Ye,depthWrite:!1});this.materials.push(r);const s=new Jo(r);s.scale.set(16e6,4e6,1),this.group.add(s);const o=300;for(let a=0;a<o;a++){const l=i[a%4],c=.05+Math.random()*.9,u=this._armPoint(l,c,.85),h=new Ws({map:t,transparent:!0,opacity:0,blending:Mi,depthWrite:!1});Math.random()>.4?h.color.setHSL(.04,.4,.05):h.color.setHSL(.1,.1,.02);const p=new Jo(h);p.position.set(u.x,u.y,u.z);const v=u.width*1.5;p.scale.set(v,v,1),this.group.add(p),this.darkSprites.push(p),this.materials.push(h)}}update(e,t,i){if(!i)return;const r=i.length();let s=0;r>1e7&&(s=(r-1e7)/4e7,s=Math.max(0,Math.min(1,s))),this.group.visible=s>.01,this.group.visible&&(this.materials.forEach(o=>{const l=o.blending===Mi?.35:.6;o.opacity=s*l}),this.group.rotation.y=t*.005)}}function $T(){return[new GT,new XT,new jT,new YT,new qT,new DT,new LT,new IT,new UT,new NT,new FT,new OT,new zT,new WT,new BT,new kT]}class KT{constructor(e,t){this.container=e,this.onUpdate=t,this.width=e.clientWidth,this.height=e.clientHeight,this.config={friction:.95,turnSpeedMax:1.5,dragSensitivity:.003,maxSpeed:1e6,acceleration:1e4,steerSmoothing:.12,steerSensitivity:.0015},this.state={time:0,speed:0,baseSpeed:5e3,sprintSpeed:35e3,turnSpeed:1.5,pitch:0,yaw:0,roll:0,paused:!1,keys:{w:!1,s:!1,shift:!1},isDragging:!1,dragDeltaX:0,dragDeltaY:0,lastDragX:0,lastDragY:0,rotVelocityX:0,rotVelocityY:0,targetRotX:0,targetRotY:0},this.scene=null,this.camera=null,this.renderer=null,this.clock=new bT,this.euler=new sa(0,0,0,"YXZ"),this.systems=[],this.allTargetables=[],this.init()}init(){this.initScene(),this.initSystems(),this.initBackdrop(),this.initInput(),this.animate=this.animate.bind(this),this.animate()}initScene(){this.scene=new MT,this.scene.background=new se(131589),this.scene.fog=new bh(0,5e-10),this.camera=new vn(55,this.width/this.height,.1,2e9),this.camera.position.set(85e4,15e3,116e4),this.camera.lookAt(new P(0,0,0)),this.renderer=new v_({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Gg,this.renderer.toneMappingExposure=1.2,this.container.appendChild(this.renderer.domElement),this.scene.add(new CT(8947848))}initSystems(){const e={createNoiseTexture:oi,createStarTexture:or,createRadialTexture:Ci};this.systems=$T(),this.systems.forEach(t=>{t.init(this.scene,e),this.allTargetables.push(...t.getTargetables())}),console.log(`Loaded ${this.systems.length} star systems with ${this.allTargetables.length} targetable objects`)}initBackdrop(){const e=or();this.starBackdrop=new xi,this.scene.add(this.starBackdrop);const t=new Pe,i=8e3,r=new Float32Array(i*3),s=new Float32Array(i*3);for(let a=0;a<i;a++){const l=8e5+Math.random()*5e6,c=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1);r[a*3]=l*Math.sin(u)*Math.cos(c),r[a*3+1]=l*Math.sin(u)*Math.sin(c),r[a*3+2]=l*Math.cos(u);const h=Math.random(),f=new se;h<.6?f.setHSL(.1,.1,.7+Math.random()*.3):h<.8?f.setHSL(.6,.3,.6+Math.random()*.3):f.setHSL(.08,.6,.5+Math.random()*.3),s[a*3]=f.r,s[a*3+1]=f.g,s[a*3+2]=f.b}t.setAttribute("position",new ge(r,3)),t.setAttribute("color",new ge(s,3));const o=new Qe({size:8e3,map:e,vertexColors:!0,transparent:!0,opacity:.9,blending:Ye,depthWrite:!1});this.starBackdrop.add(new Je(t,o)),this.createDustLayer()}createDustLayer(){const e=new Pe,t=5e3,i=new Float32Array(t*3),r=new Float32Array(t*3);for(let o=0;o<t;o++){const a=2e5+Math.random()*3e6,l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);i[o*3]=a*Math.sin(c)*Math.cos(l),i[o*3+1]=a*Math.sin(c)*Math.sin(l),i[o*3+2]=a*Math.cos(c);const u=.3+Math.random()*.4,h=new se(u,u,u);r[o*3]=h.r,r[o*3+1]=h.g,r[o*3+2]=h.b}e.setAttribute("position",new ge(i,3)),e.setAttribute("color",new ge(r,3));const s=new Qe({size:3e3,map:Ci(),vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1});this.starBackdrop.add(new Je(e,s))}initInput(){window.addEventListener("keydown",e=>{(e.key==="w"||e.key==="W")&&(this.state.keys.w=!0),(e.key==="s"||e.key==="S")&&(this.state.keys.s=!0),e.key==="Shift"&&(this.state.keys.shift=!0)}),window.addEventListener("keyup",e=>{(e.key==="w"||e.key==="W")&&(this.state.keys.w=!1),(e.key==="s"||e.key==="S")&&(this.state.keys.s=!1),e.key==="Shift"&&(this.state.keys.shift=!1)}),this.container.addEventListener("mousedown",e=>{this.state.isDragging=!0,this.state.lastDragX=e.clientX,this.state.lastDragY=e.clientY,this.state.dragDeltaX=0,this.state.dragDeltaY=0}),window.addEventListener("mousemove",e=>{this.state.isDragging&&(this.state.dragDeltaX=e.clientX-this.state.lastDragX,this.state.dragDeltaY=e.clientY-this.state.lastDragY,this.state.lastDragX=e.clientX,this.state.lastDragY=e.clientY)}),window.addEventListener("mouseup",()=>{this.state.isDragging=!1}),this.container.addEventListener("touchstart",e=>{e.touches.length===1&&(this.state.isDragging=!0,this.state.lastDragX=e.touches[0].clientX,this.state.lastDragY=e.touches[0].clientY,this.state.dragDeltaX=0,this.state.dragDeltaY=0)},{passive:!0}),window.addEventListener("touchmove",e=>{this.state.isDragging&&e.touches.length===1&&(this.state.dragDeltaX=e.touches[0].clientX-this.state.lastDragX,this.state.dragDeltaY=e.touches[0].clientY-this.state.lastDragY,this.state.lastDragX=e.touches[0].clientX,this.state.lastDragY=e.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",()=>{this.state.isDragging=!1}),window.addEventListener("resize",()=>{this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)})}getNearestSystem(){let e=null,t=1/0;return this.systems.forEach(i=>{const r=i.getDistanceFrom(this.camera.position);r<t&&(t=r,e=i)}),{system:e,distance:t}}getNearbySystems(e=6e5){return this.systems.map(t=>({name:t.name,position:t.position.clone(),distance:t.getDistanceFrom(this.camera.position)})).filter(t=>t.distance<e).sort((t,i)=>t.distance-i.distance)}animate(){requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.1);this.state.time+=e;const t=this.state.keys.shift?10:1;if(this.state.keys.w?this.state.speed+=this.config.acceleration*t*e:this.state.keys.s?this.state.speed-=this.config.acceleration*t*e:this.state.speed*=this.config.friction,this.state.speed=Math.max(-this.config.maxSpeed,Math.min(this.config.maxSpeed,this.state.speed)),this.state.isDragging){const s=this.state.dragDeltaX,o=this.state.dragDeltaY,l=1+Math.sqrt(s*s+o*o)*.02;this.state.targetRotY+=s*this.config.steerSensitivity*l,this.state.targetRotX+=o*this.config.steerSensitivity*l,this.state.dragDeltaX=0,this.state.dragDeltaY=0}else this.state.targetRotX*=.85,this.state.targetRotY*=.85;const i=this.config.steerSmoothing;if(this.state.rotVelocityX+=(this.state.targetRotX-this.state.rotVelocityX)*i,this.state.rotVelocityY+=(this.state.targetRotY-this.state.rotVelocityY)*i,this.state.targetRotX*=.92,this.state.targetRotY*=.92,Math.abs(this.state.rotVelocityX)>5e-5||Math.abs(this.state.rotVelocityY)>5e-5){const s=-this.state.rotVelocityX,o=-this.state.rotVelocityY,a=new zr().setFromAxisAngle(new P(1,0,0).applyQuaternion(this.camera.quaternion),s),l=new zr().setFromAxisAngle(new P(0,1,0),o);this.camera.quaternion.multiplyQuaternions(l,this.camera.quaternion),this.camera.quaternion.multiplyQuaternions(this.camera.quaternion,a),this.camera.quaternion.normalize()}const r=new P(0,0,-1).applyQuaternion(this.camera.quaternion);if(this.camera.position.addScaledVector(r,this.state.speed*e),this.systems.forEach(s=>{s.update(e,this.state.time,this.camera.position)}),this.starBackdrop&&this.starBackdrop.position.copy(this.camera.position),this.renderer.render(this.scene,this.camera),this.onUpdate){const s=this.getNearestSystem(),o=this.getNearbySystems();this.onUpdate({speed:Math.abs(this.state.speed),altitude:this.camera.position.length(),heading:fM.radToDeg(this.euler.setFromQuaternion(this.camera.quaternion).y),position:this.camera.position.clone(),rotation:this.camera.rotation.clone(),nearestSystem:s.system?s.system.name:"VOID",nearestDistance:s.distance,nearbySystems:o,planets:this.allTargetables})}}cleanup(){this.renderer.dispose(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}const ZT=()=>{const n=Er.useRef(null),e=Er.useRef(null),[t,i]=Er.useState({speed:0,coords:{x:0,y:0,z:0},targetName:"SOLAR",targetDist:0,heading:0,nearbySystems:[]});Er.useEffect(()=>{if(n.current)return e.current=new KT(n.current,o=>{i({speed:Math.abs(o.speed).toFixed(0),coords:{x:o.position.x.toFixed(0),y:o.position.y.toFixed(0),z:o.position.z.toFixed(0)},targetName:o.nearestSystem||"VOID",targetDist:(o.nearestDistance/1e3).toFixed(1),heading:o.heading||0,nearbySystems:o.nearbySystems||[]})}),()=>{e.current&&e.current.cleanup()}},[]);const s=(t.heading%360+360)%360*8;return Ee.jsxs(Ee.Fragment,{children:[Ee.jsx("div",{id:"canvas-container",ref:n}),Ee.jsxs("div",{className:"controls-hint",children:["DRAG: Look/Steer",Ee.jsx("br",{}),"W: Cruise Forward",Ee.jsx("br",{}),"S: Reverse/Brake",Ee.jsx("br",{}),"SHIFT: Boost (10x)"]}),Ee.jsx("div",{id:"btn-cruise",className:"touch-btn",onTouchStart:()=>{e.current&&(e.current.state.keys.w=!0)},onTouchEnd:()=>{e.current&&(e.current.state.keys.w=!1)},onMouseDown:()=>{e.current&&(e.current.state.keys.w=!0)},onMouseUp:()=>{e.current&&(e.current.state.keys.w=!1)},children:"▲ CRUISE"}),Ee.jsx("div",{id:"btn-brake",className:"touch-btn",onTouchStart:()=>{e.current&&(e.current.state.keys.s=!0)},onTouchEnd:()=>{e.current&&(e.current.state.keys.s=!1)},onMouseDown:()=>{e.current&&(e.current.state.keys.s=!0)},onMouseUp:()=>{e.current&&(e.current.state.keys.s=!1)},children:"▼ BACK"}),Ee.jsxs("div",{id:"cockpit-ui",children:[Ee.jsx("div",{className:"top-bar",children:Ee.jsx("div",{className:"compass-container",children:Ee.jsxs("div",{className:"compass-tape",style:{transform:`translateX(-${s}px)`},children:[Array.from({length:72}).map((o,a)=>{const l=a*5,c=l%45===0;return Ee.jsx("div",{className:`tick ${c?"major":""}`,children:c&&Ee.jsx("span",{children:l})},l)}),Array.from({length:72}).map((o,a)=>{const l=a*5,c=l%45===0;return Ee.jsx("div",{className:`tick ${c?"major":""}`,children:c&&Ee.jsx("span",{children:l})},`dup-${l}`)})]})})}),Ee.jsx("div",{className:"reticle"}),Ee.jsx("div",{className:"dashboard-container",children:Ee.jsxs("div",{className:"dashboard-glass",children:[Ee.jsxs("div",{className:"screen-section screen-left",children:[Ee.jsxs("div",{className:"data-row",children:[Ee.jsx("div",{className:"label",children:"COORDS"}),Ee.jsxs("div",{className:"data-value",children:[t.coords.x,", ",t.coords.y,", ",t.coords.z]})]}),Ee.jsxs("div",{className:"data-row",children:[Ee.jsx("div",{className:"label",children:"STATUS"}),Ee.jsx("div",{className:"data-value",style:{color:"#0f0"},children:"NOMINAL"})]})]}),Ee.jsx("div",{className:"screen-section screen-center",children:Ee.jsxs("div",{className:"radar-display",children:[Ee.jsx("div",{className:"radar-title",children:"SYSTEM RADAR"}),Ee.jsxs("div",{className:"radar-grid",children:[Ee.jsx("div",{className:"radar-center"}),t.nearbySystems.slice(0,5).map((o,a)=>{const u=o.position.x/3e5*35,h=o.position.z/3e5*35;return Ee.jsx("div",{className:"radar-blip",style:{left:`calc(50% + ${Math.max(-35,Math.min(35,u))}px)`,top:`calc(50% + ${Math.max(-35,Math.min(35,h))}px)`},title:`${o.name}: ${(o.distance/1e3).toFixed(0)}km`},o.name)})]}),Ee.jsx("div",{className:"radar-systems-list",children:t.nearbySystems.slice(0,3).map(o=>Ee.jsxs("div",{className:"radar-system-item",children:[Ee.jsx("span",{className:"system-name",children:o.name}),Ee.jsxs("span",{className:"system-dist",children:[(o.distance/1e3).toFixed(0)," km"]})]},o.name))})]})}),Ee.jsxs("div",{className:"screen-section screen-right",children:[Ee.jsxs("div",{className:"data-row",style:{justifyContent:"flex-end"},children:[Ee.jsx("div",{className:"data-value",style:{color:"#0ff"},children:t.targetName}),Ee.jsx("div",{className:"label",children:"NEAREST"})]}),Ee.jsxs("div",{className:"data-row",style:{justifyContent:"flex-end"},children:[Ee.jsx("div",{className:"data-value",children:t.targetDist}),Ee.jsx("div",{className:"unit",children:"KM"})]}),Ee.jsxs("div",{className:"data-row",style:{justifyContent:"flex-end"},children:[Ee.jsx("div",{className:"data-value data-big",children:t.speed}),Ee.jsx("div",{className:"unit",style:{alignSelf:"flex-end",marginBottom:"5px"},children:"KM/S"})]})]})]})})]})]})};Su.createRoot(document.getElementById("root")).render(Ee.jsx(V_.StrictMode,{children:Ee.jsx(ZT,{})}));
