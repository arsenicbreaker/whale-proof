function gp(n,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(t,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ec(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lc={exports:{}},Aa={},Oc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=Symbol.for("react.element"),yp=Symbol.for("react.portal"),bp=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Ep=Symbol.for("react.suspense"),Lp=Symbol.for("react.memo"),Op=Symbol.for("react.lazy"),Ki=Symbol.iterator;function Tp(n){return n===null||typeof n!="object"?null:(n=Ki&&n[Ki]||n["@@iterator"],typeof n=="function"?n:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Ic={};function wr(n,e,r){this.props=n,this.context=e,this.refs=Ic,this.updater=r||Tc}wr.prototype.isReactComponent={};wr.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};wr.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Mc(){}Mc.prototype=wr.prototype;function jl(n,e,r){this.props=n,this.context=e,this.refs=Ic,this.updater=r||Tc}var Hl=jl.prototype=new Mc;Hl.constructor=jl;Pc(Hl,wr.prototype);Hl.isPureReactComponent=!0;var $i=Array.isArray,Rc=Object.prototype.hasOwnProperty,Dl={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function Ac(n,e,r){var t,a={},s=null,l=null;if(e!=null)for(t in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)Rc.call(e,t)&&!Nc.hasOwnProperty(t)&&(a[t]=e[t]);var o=arguments.length-2;if(o===1)a.children=r;else if(1<o){for(var i=Array(o),c=0;c<o;c++)i[c]=arguments[c+2];a.children=i}if(n&&n.defaultProps)for(t in o=n.defaultProps,o)a[t]===void 0&&(a[t]=o[t]);return{$$typeof:wt,type:n,key:s,ref:l,props:a,_owner:Dl.current}}function Pp(n,e){return{$$typeof:wt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Bl(n){return typeof n=="object"&&n!==null&&n.$$typeof===wt}function Ip(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(r){return e[r]})}var Qi=/\/+/g;function os(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ip(""+n.key):e.toString(36)}function $t(n,e,r,t,a){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case wt:case yp:l=!0}}if(l)return l=n,a=a(l),n=t===""?"."+os(l,0):t,$i(a)?(r="",n!=null&&(r=n.replace(Qi,"$&/")+"/"),$t(a,e,r,"",function(c){return c})):a!=null&&(Bl(a)&&(a=Pp(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Qi,"$&/")+"/")+n)),e.push(a)),1;if(l=0,t=t===""?".":t+":",$i(n))for(var o=0;o<n.length;o++){s=n[o];var i=t+os(s,o);l+=$t(s,e,r,i,a)}else if(i=Tp(n),typeof i=="function")for(n=i.call(n),o=0;!(s=n.next()).done;)s=s.value,i=t+os(s,o++),l+=$t(s,e,r,i,a);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ot(n,e,r){if(n==null)return n;var t=[],a=0;return $t(n,t,"","",function(s){return e.call(r,s,a++)}),t}function Mp(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(r){(n._status===0||n._status===-1)&&(n._status=1,n._result=r)},function(r){(n._status===0||n._status===-1)&&(n._status=2,n._result=r)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var pn={current:null},Qt={transition:null},Rp={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Qt,ReactCurrentOwner:Dl};function jc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Ot,forEach:function(n,e,r){Ot(n,function(){e.apply(this,arguments)},r)},count:function(n){var e=0;return Ot(n,function(){e++}),e},toArray:function(n){return Ot(n,function(e){return e})||[]},only:function(n){if(!Bl(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};M.Component=wr;M.Fragment=bp;M.Profiler=Cp;M.PureComponent=jl;M.StrictMode=wp;M.Suspense=Ep;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;M.act=jc;M.cloneElement=function(n,e,r){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=Pc({},n.props),a=n.key,s=n.ref,l=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=Dl.current),e.key!==void 0&&(a=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(i in e)Rc.call(e,i)&&!Nc.hasOwnProperty(i)&&(t[i]=e[i]===void 0&&o!==void 0?o[i]:e[i])}var i=arguments.length-2;if(i===1)t.children=r;else if(1<i){o=Array(i);for(var c=0;c<i;c++)o[c]=arguments[c+2];t.children=o}return{$$typeof:wt,type:n.type,key:a,ref:s,props:t,_owner:l}};M.createContext=function(n){return n={$$typeof:Sp,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:kp,_context:n},n.Consumer=n};M.createElement=Ac;M.createFactory=function(n){var e=Ac.bind(null,n);return e.type=n,e};M.createRef=function(){return{current:null}};M.forwardRef=function(n){return{$$typeof:xp,render:n}};M.isValidElement=Bl;M.lazy=function(n){return{$$typeof:Op,_payload:{_status:-1,_result:n},_init:Mp}};M.memo=function(n,e){return{$$typeof:Lp,type:n,compare:e===void 0?null:e}};M.startTransition=function(n){var e=Qt.transition;Qt.transition={};try{n()}finally{Qt.transition=e}};M.unstable_act=jc;M.useCallback=function(n,e){return pn.current.useCallback(n,e)};M.useContext=function(n){return pn.current.useContext(n)};M.useDebugValue=function(){};M.useDeferredValue=function(n){return pn.current.useDeferredValue(n)};M.useEffect=function(n,e){return pn.current.useEffect(n,e)};M.useId=function(){return pn.current.useId()};M.useImperativeHandle=function(n,e,r){return pn.current.useImperativeHandle(n,e,r)};M.useInsertionEffect=function(n,e){return pn.current.useInsertionEffect(n,e)};M.useLayoutEffect=function(n,e){return pn.current.useLayoutEffect(n,e)};M.useMemo=function(n,e){return pn.current.useMemo(n,e)};M.useReducer=function(n,e,r){return pn.current.useReducer(n,e,r)};M.useRef=function(n){return pn.current.useRef(n)};M.useState=function(n){return pn.current.useState(n)};M.useSyncExternalStore=function(n,e,r){return pn.current.useSyncExternalStore(n,e,r)};M.useTransition=function(){return pn.current.useTransition()};M.version="18.3.1";Oc.exports=M;var k=Oc.exports;const Np=Ec(k),Ap=gp({__proto__:null,default:Np},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=k,Hp=Symbol.for("react.element"),Dp=Symbol.for("react.fragment"),Bp=Object.prototype.hasOwnProperty,zp=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function Hc(n,e,r){var t,a={},s=null,l=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)Bp.call(e,t)&&!Fp.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:Hp,type:n,key:s,ref:l,props:a,_owner:zp.current}}Aa.Fragment=Dp;Aa.jsx=Hc;Aa.jsxs=Hc;Lc.exports=Aa;var Ln=Lc.exports,Dc={exports:{}},xn={},Bc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(x,T){var P=x.length;x.push(T);n:for(;0<P;){var Z=P-1>>>1,q=x[Z];if(0<a(q,T))x[Z]=T,x[P]=q,P=Z;else break n}}function r(x){return x.length===0?null:x[0]}function t(x){if(x.length===0)return null;var T=x[0],P=x.pop();if(P!==T){x[0]=P;n:for(var Z=0,q=x.length,Et=q>>>1;Z<Et;){var Ie=2*(Z+1)-1,is=x[Ie],Me=Ie+1,Lt=x[Me];if(0>a(is,P))Me<q&&0>a(Lt,is)?(x[Z]=Lt,x[Me]=P,Z=Me):(x[Z]=is,x[Ie]=P,Z=Ie);else if(Me<q&&0>a(Lt,P))x[Z]=Lt,x[Me]=P,Z=Me;else break n}}return T}function a(x,T){var P=x.sortIndex-T.sortIndex;return P!==0?P:x.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();n.unstable_now=function(){return l.now()-o}}var i=[],c=[],u=1,p=null,v=3,y=!1,_=!1,h=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var T=r(c);T!==null;){if(T.callback===null)t(c);else if(T.startTime<=x)t(c),T.sortIndex=T.expirationTime,e(i,T);else break;T=r(c)}}function g(x){if(h=!1,m(x),!_)if(r(i)!==null)_=!0,ss(C);else{var T=r(c);T!==null&&ls(g,T.startTime-x)}}function C(x,T){_=!1,h&&(h=!1,f(O),O=-1),y=!0;var P=v;try{for(m(T),p=r(i);p!==null&&(!(p.expirationTime>T)||x&&!Nn());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,v=p.priorityLevel;var q=Z(p.expirationTime<=T);T=n.unstable_now(),typeof q=="function"?p.callback=q:p===r(i)&&t(i),m(T)}else t(i);p=r(i)}if(p!==null)var Et=!0;else{var Ie=r(c);Ie!==null&&ls(g,Ie.startTime-T),Et=!1}return Et}finally{p=null,v=P,y=!1}}var E=!1,L=null,O=-1,V=5,R=-1;function Nn(){return!(n.unstable_now()-R<V)}function Lr(){if(L!==null){var x=n.unstable_now();R=x;var T=!0;try{T=L(!0,x)}finally{T?Or():(E=!1,L=null)}}else E=!1}var Or;if(typeof d=="function")Or=function(){d(Lr)};else if(typeof MessageChannel<"u"){var Gi=new MessageChannel,_p=Gi.port2;Gi.port1.onmessage=Lr,Or=function(){_p.postMessage(null)}}else Or=function(){b(Lr,0)};function ss(x){L=x,E||(E=!0,Or())}function ls(x,T){O=b(function(){x(n.unstable_now())},T)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(x){x.callback=null},n.unstable_continueExecution=function(){_||y||(_=!0,ss(C))},n.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return r(i)},n.unstable_next=function(x){switch(v){case 1:case 2:case 3:var T=3;break;default:T=v}var P=v;v=T;try{return x()}finally{v=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(x,T){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var P=v;v=x;try{return T()}finally{v=P}},n.unstable_scheduleCallback=function(x,T,P){var Z=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Z+P:Z):P=Z,x){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=P+q,x={id:u++,callback:T,priorityLevel:x,startTime:P,expirationTime:q,sortIndex:-1},P>Z?(x.sortIndex=P,e(c,x),r(i)===null&&x===r(c)&&(h?(f(O),O=-1):h=!0,ls(g,P-Z))):(x.sortIndex=q,e(i,x),_||y||(_=!0,ss(C))),x},n.unstable_shouldYield=Nn,n.unstable_wrapCallback=function(x){var T=v;return function(){var P=v;v=T;try{return x.apply(this,arguments)}finally{v=P}}}})(zc);Bc.exports=zc;var Up=Bc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp=k,Sn=Up;function w(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,et={};function Ye(n,e){mr(n,e),mr(n+"Capture",e)}function mr(n,e){for(et[n]=e,n=0;n<e.length;n++)Fc.add(e[n])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=Object.prototype.hasOwnProperty,Vp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xi={},qi={};function Zp(n){return Ds.call(qi,n)?!0:Ds.call(Xi,n)?!1:Vp.test(n)?qi[n]=!0:(Xi[n]=!0,!1)}function Yp(n,e,r,t){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Gp(n,e,r,t){if(e===null||typeof e>"u"||Yp(n,e,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,r,t,a,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){tn[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];tn[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){tn[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){tn[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){tn[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){tn[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){tn[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){tn[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){tn[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var zl=/[\-:]([a-z])/g;function Fl(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(zl,Fl);tn[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(zl,Fl);tn[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(zl,Fl);tn[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){tn[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});tn.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){tn[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ul(n,e,r,t){var a=tn.hasOwnProperty(e)?tn[e]:null;(a!==null?a.type!==0:t||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gp(e,r,a,t)&&(r=null),t||a===null?Zp(e)&&(r===null?n.removeAttribute(e):n.setAttribute(e,""+r)):a.mustUseProperty?n[a.propertyName]=r===null?a.type===3?!1:"":r:(e=a.attributeName,t=a.attributeNamespace,r===null?n.removeAttribute(e):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,t?n.setAttributeNS(t,e,r):n.setAttribute(e,r))))}var te=Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tt=Symbol.for("react.element"),Qe=Symbol.for("react.portal"),Xe=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Bs=Symbol.for("react.profiler"),Uc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Vl=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Zl=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),Ji=Symbol.iterator;function Tr(n){return n===null||typeof n!="object"?null:(n=Ji&&n[Ji]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,cs;function Br(n){if(cs===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);cs=e&&e[1]||""}return`
`+cs+n}var us=!1;function ds(n,e){if(!n||us)return"";us=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var t=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){t=c}n.call(e.prototype)}else{try{throw Error()}catch(c){t=c}n()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),s=t.stack.split(`
`),l=a.length-1,o=s.length-1;1<=l&&0<=o&&a[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(a[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||a[l]!==s[o]){var i=`
`+a[l].replace(" at new "," at ");return n.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",n.displayName)),i}while(1<=l&&0<=o);break}}}finally{us=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?Br(n):""}function Kp(n){switch(n.tag){case 5:return Br(n.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return n=ds(n.type,!1),n;case 11:return n=ds(n.type.render,!1),n;case 1:return n=ds(n.type,!0),n;default:return""}}function Us(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Xe:return"Fragment";case Qe:return"Portal";case Bs:return"Profiler";case Wl:return"StrictMode";case zs:return"Suspense";case Fs:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Wc:return(n.displayName||"Context")+".Consumer";case Uc:return(n._context.displayName||"Context")+".Provider";case Vl:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Zl:return e=n.displayName||null,e!==null?e:Us(n.type)||"Memo";case se:e=n._payload,n=n._init;try{return Us(n(e))}catch{}}return null}function $p(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(e);case 8:return e===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Zc(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qp(n){var e=Zc(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),t=""+n[e];if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(l){t=""+l,s.call(this,l)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Qp(n))}function Yc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),t="";return n&&(t=Zc(n)?n.checked?"true":"false":n.value),n=t,n!==r?(e.setValue(n),!0):!1}function oa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ws(n,e){var r=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function no(n,e){var r=e.defaultValue==null?"":e.defaultValue,t=e.checked!=null?e.checked:e.defaultChecked;r=we(e.value!=null?e.value:r),n._wrapperState={initialChecked:t,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gc(n,e){e=e.checked,e!=null&&Ul(n,"checked",e,!1)}function Vs(n,e){Gc(n,e);var r=we(e.value),t=e.type;if(r!=null)t==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Zs(n,e.type,r):e.hasOwnProperty("defaultValue")&&Zs(n,e.type,we(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function eo(n,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var t=e.type;if(!(t!=="submit"&&t!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,r||e===n.value||(n.value=e),n.defaultValue=e}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function Zs(n,e,r){(e!=="number"||oa(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var zr=Array.isArray;function or(n,e,r,t){if(n=n.options,e){e={};for(var a=0;a<r.length;a++)e["$"+r[a]]=!0;for(r=0;r<n.length;r++)a=e.hasOwnProperty("$"+n[r].value),n[r].selected!==a&&(n[r].selected=a),a&&t&&(n[r].defaultSelected=!0)}else{for(r=""+we(r),e=null,a=0;a<n.length;a++){if(n[a].value===r){n[a].selected=!0,t&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Ys(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ro(n,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(w(92));if(zr(r)){if(1<r.length)throw Error(w(93));r=r[0]}e=r}e==null&&(e=""),r=e}n._wrapperState={initialValue:we(r)}}function Kc(n,e){var r=we(e.value),t=we(e.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),e.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),t!=null&&(n.defaultValue=""+t)}function to(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function $c(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?$c(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var It,Qc=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,t,a){MSApp.execUnsafeLocalFunction(function(){return n(e,r,t,a)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(It=It||document.createElement("div"),It.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=It.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function rt(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xp=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(n){Xp.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vr[e]=Vr[n]})});function Xc(n,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Vr.hasOwnProperty(n)&&Vr[n]?(""+e).trim():e+"px"}function qc(n,e){n=n.style;for(var r in e)if(e.hasOwnProperty(r)){var t=r.indexOf("--")===0,a=Xc(r,e[r],t);r==="float"&&(r="cssFloat"),t?n.setProperty(r,a):n[r]=a}}var qp=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(n,e){if(e){if(qp[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function $s(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function Yl(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xs=null,cr=null,ur=null;function ao(n){if(n=St(n)){if(typeof Xs!="function")throw Error(w(280));var e=n.stateNode;e&&(e=za(e),Xs(n.stateNode,n.type,e))}}function Jc(n){cr?ur?ur.push(n):ur=[n]:cr=n}function nu(){if(cr){var n=cr,e=ur;if(ur=cr=null,ao(n),e)for(n=0;n<e.length;n++)ao(e[n])}}function eu(n,e){return n(e)}function ru(){}var ps=!1;function tu(n,e,r){if(ps)return n(e,r);ps=!0;try{return eu(n,e,r)}finally{ps=!1,(cr!==null||ur!==null)&&(ru(),nu())}}function tt(n,e){var r=n.stateNode;if(r===null)return null;var t=za(r);if(t===null)return null;r=t[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(w(231,e,typeof r));return r}var qs=!1;if(Jn)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{qs=!1}function Jp(n,e,r,t,a,s,l,o,i){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(u){this.onError(u)}}var Zr=!1,ca=null,ua=!1,Js=null,n1={onError:function(n){Zr=!0,ca=n}};function e1(n,e,r,t,a,s,l,o,i){Zr=!1,ca=null,Jp.apply(n1,arguments)}function r1(n,e,r,t,a,s,l,o,i){if(e1.apply(this,arguments),Zr){if(Zr){var c=ca;Zr=!1,ca=null}else throw Error(w(198));ua||(ua=!0,Js=c)}}function Ge(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function au(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function so(n){if(Ge(n)!==n)throw Error(w(188))}function t1(n){var e=n.alternate;if(!e){if(e=Ge(n),e===null)throw Error(w(188));return e!==n?null:n}for(var r=n,t=e;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(t=a.return,t!==null){r=t;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return so(a),n;if(s===t)return so(a),e;s=s.sibling}throw Error(w(188))}if(r.return!==t.return)r=a,t=s;else{for(var l=!1,o=a.child;o;){if(o===r){l=!0,r=a,t=s;break}if(o===t){l=!0,t=a,r=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===r){l=!0,r=s,t=a;break}if(o===t){l=!0,t=s,r=a;break}o=o.sibling}if(!l)throw Error(w(189))}}if(r.alternate!==t)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?n:e}function su(n){return n=t1(n),n!==null?lu(n):null}function lu(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=lu(n);if(e!==null)return e;n=n.sibling}return null}var iu=Sn.unstable_scheduleCallback,lo=Sn.unstable_cancelCallback,a1=Sn.unstable_shouldYield,s1=Sn.unstable_requestPaint,Y=Sn.unstable_now,l1=Sn.unstable_getCurrentPriorityLevel,Gl=Sn.unstable_ImmediatePriority,ou=Sn.unstable_UserBlockingPriority,da=Sn.unstable_NormalPriority,i1=Sn.unstable_LowPriority,cu=Sn.unstable_IdlePriority,ja=null,Yn=null;function o1(n){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(ja,n,void 0,(n.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:d1,c1=Math.log,u1=Math.LN2;function d1(n){return n>>>=0,n===0?32:31-(c1(n)/u1|0)|0}var Mt=64,Rt=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pa(n,e){var r=n.pendingLanes;if(r===0)return 0;var t=0,a=n.suspendedLanes,s=n.pingedLanes,l=r&268435455;if(l!==0){var o=l&~a;o!==0?t=Fr(o):(s&=l,s!==0&&(t=Fr(s)))}else l=r&~a,l!==0?t=Fr(l):s!==0&&(t=Fr(s));if(t===0)return 0;if(e!==0&&e!==t&&!(e&a)&&(a=t&-t,s=e&-e,a>=s||a===16&&(s&4194240)!==0))return e;if(t&4&&(t|=r&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=t;0<e;)r=31-Bn(e),a=1<<r,t|=n[r],e&=~a;return t}function p1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f1(n,e){for(var r=n.suspendedLanes,t=n.pingedLanes,a=n.expirationTimes,s=n.pendingLanes;0<s;){var l=31-Bn(s),o=1<<l,i=a[l];i===-1?(!(o&r)||o&t)&&(a[l]=p1(o,e)):i<=e&&(n.expiredLanes|=o),s&=~o}}function nl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function uu(){var n=Mt;return Mt<<=1,!(Mt&4194240)&&(Mt=64),n}function fs(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function Ct(n,e,r){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Bn(e),n[e]=r}function m1(n,e){var r=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<r;){var a=31-Bn(r),s=1<<a;e[a]=0,t[a]=-1,n[a]=-1,r&=~s}}function Kl(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var t=31-Bn(r),a=1<<t;a&e|n[t]&e&&(n[t]|=e),r&=~a}}var A=0;function du(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var pu,$l,fu,mu,vu,el=!1,Nt=[],pe=null,fe=null,me=null,at=new Map,st=new Map,ie=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function io(n,e){switch(n){case"focusin":case"focusout":pe=null;break;case"dragenter":case"dragleave":fe=null;break;case"mouseover":case"mouseout":me=null;break;case"pointerover":case"pointerout":at.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":st.delete(e.pointerId)}}function Ir(n,e,r,t,a,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:r,eventSystemFlags:t,nativeEvent:s,targetContainers:[a]},e!==null&&(e=St(e),e!==null&&$l(e)),n):(n.eventSystemFlags|=t,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function h1(n,e,r,t,a){switch(e){case"focusin":return pe=Ir(pe,n,e,r,t,a),!0;case"dragenter":return fe=Ir(fe,n,e,r,t,a),!0;case"mouseover":return me=Ir(me,n,e,r,t,a),!0;case"pointerover":var s=a.pointerId;return at.set(s,Ir(at.get(s)||null,n,e,r,t,a)),!0;case"gotpointercapture":return s=a.pointerId,st.set(s,Ir(st.get(s)||null,n,e,r,t,a)),!0}return!1}function hu(n){var e=je(n.target);if(e!==null){var r=Ge(e);if(r!==null){if(e=r.tag,e===13){if(e=au(r),e!==null){n.blockedOn=e,vu(n.priority,function(){fu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xt(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=rl(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var t=new r.constructor(r.type,r);Qs=t,r.target.dispatchEvent(t),Qs=null}else return e=St(r),e!==null&&$l(e),n.blockedOn=r,!1;e.shift()}return!0}function oo(n,e,r){Xt(n)&&r.delete(e)}function _1(){el=!1,pe!==null&&Xt(pe)&&(pe=null),fe!==null&&Xt(fe)&&(fe=null),me!==null&&Xt(me)&&(me=null),at.forEach(oo),st.forEach(oo)}function Mr(n,e){n.blockedOn===e&&(n.blockedOn=null,el||(el=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,_1)))}function lt(n){function e(a){return Mr(a,n)}if(0<Nt.length){Mr(Nt[0],n);for(var r=1;r<Nt.length;r++){var t=Nt[r];t.blockedOn===n&&(t.blockedOn=null)}}for(pe!==null&&Mr(pe,n),fe!==null&&Mr(fe,n),me!==null&&Mr(me,n),at.forEach(e),st.forEach(e),r=0;r<ie.length;r++)t=ie[r],t.blockedOn===n&&(t.blockedOn=null);for(;0<ie.length&&(r=ie[0],r.blockedOn===null);)hu(r),r.blockedOn===null&&ie.shift()}var dr=te.ReactCurrentBatchConfig,fa=!0;function g1(n,e,r,t){var a=A,s=dr.transition;dr.transition=null;try{A=1,Ql(n,e,r,t)}finally{A=a,dr.transition=s}}function y1(n,e,r,t){var a=A,s=dr.transition;dr.transition=null;try{A=4,Ql(n,e,r,t)}finally{A=a,dr.transition=s}}function Ql(n,e,r,t){if(fa){var a=rl(n,e,r,t);if(a===null)ks(n,e,t,ma,r),io(n,t);else if(h1(a,n,e,r,t))t.stopPropagation();else if(io(n,t),e&4&&-1<v1.indexOf(n)){for(;a!==null;){var s=St(a);if(s!==null&&pu(s),s=rl(n,e,r,t),s===null&&ks(n,e,t,ma,r),s===a)break;a=s}a!==null&&t.stopPropagation()}else ks(n,e,t,null,r)}}var ma=null;function rl(n,e,r,t){if(ma=null,n=Yl(t),n=je(n),n!==null)if(e=Ge(n),e===null)n=null;else if(r=e.tag,r===13){if(n=au(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ma=n,null}function _u(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Gl:return 1;case ou:return 4;case da:case i1:return 16;case cu:return 536870912;default:return 16}default:return 16}}var ce=null,Xl=null,qt=null;function gu(){if(qt)return qt;var n,e=Xl,r=e.length,t,a="value"in ce?ce.value:ce.textContent,s=a.length;for(n=0;n<r&&e[n]===a[n];n++);var l=r-n;for(t=1;t<=l&&e[r-t]===a[s-t];t++);return qt=a.slice(n,1<t?1-t:void 0)}function Jt(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function At(){return!0}function co(){return!1}function En(n){function e(r,t,a,s,l){this._reactName=r,this._targetInst=a,this.type=t,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(r=n[o],this[o]=r?r(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?At:co,this.isPropagationStopped=co,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=At)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=At)},persist:function(){},isPersistent:At}),e}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=En(Cr),kt=U({},Cr,{view:0,detail:0}),b1=En(kt),ms,vs,Rr,Ha=U({},kt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Rr&&(Rr&&n.type==="mousemove"?(ms=n.screenX-Rr.screenX,vs=n.screenY-Rr.screenY):vs=ms=0,Rr=n),ms)},movementY:function(n){return"movementY"in n?n.movementY:vs}}),uo=En(Ha),w1=U({},Ha,{dataTransfer:0}),C1=En(w1),k1=U({},kt,{relatedTarget:0}),hs=En(k1),S1=U({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),x1=En(S1),E1=U({},Cr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),L1=En(E1),O1=U({},Cr,{data:0}),po=En(O1),T1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=I1[n])?!!e[n]:!1}function Jl(){return M1}var R1=U({},kt,{key:function(n){if(n.key){var e=T1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Jt(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?P1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(n){return n.type==="keypress"?Jt(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jt(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),N1=En(R1),A1=U({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fo=En(A1),j1=U({},kt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),H1=En(j1),D1=U({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=En(D1),z1=U({},Ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=En(z1),U1=[9,13,27,32],ni=Jn&&"CompositionEvent"in window,Yr=null;Jn&&"documentMode"in document&&(Yr=document.documentMode);var W1=Jn&&"TextEvent"in window&&!Yr,yu=Jn&&(!ni||Yr&&8<Yr&&11>=Yr),mo=" ",vo=!1;function bu(n,e){switch(n){case"keyup":return U1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qe=!1;function V1(n,e){switch(n){case"compositionend":return wu(e);case"keypress":return e.which!==32?null:(vo=!0,mo);case"textInput":return n=e.data,n===mo&&vo?null:n;default:return null}}function Z1(n,e){if(qe)return n==="compositionend"||!ni&&bu(n,e)?(n=gu(),qt=Xl=ce=null,qe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yu&&e.locale!=="ko"?null:e.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Y1[n.type]:e==="textarea"}function Cu(n,e,r,t){Jc(t),e=va(e,"onChange"),0<e.length&&(r=new ql("onChange","change",null,r,t),n.push({event:r,listeners:e}))}var Gr=null,it=null;function G1(n){Ru(n,0)}function Da(n){var e=er(n);if(Yc(e))return n}function K1(n,e){if(n==="change")return e}var ku=!1;if(Jn){var _s;if(Jn){var gs="oninput"in document;if(!gs){var _o=document.createElement("div");_o.setAttribute("oninput","return;"),gs=typeof _o.oninput=="function"}_s=gs}else _s=!1;ku=_s&&(!document.documentMode||9<document.documentMode)}function go(){Gr&&(Gr.detachEvent("onpropertychange",Su),it=Gr=null)}function Su(n){if(n.propertyName==="value"&&Da(it)){var e=[];Cu(e,it,n,Yl(n)),tu(G1,e)}}function $1(n,e,r){n==="focusin"?(go(),Gr=e,it=r,Gr.attachEvent("onpropertychange",Su)):n==="focusout"&&go()}function Q1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Da(it)}function X1(n,e){if(n==="click")return Da(e)}function q1(n,e){if(n==="input"||n==="change")return Da(e)}function J1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Fn=typeof Object.is=="function"?Object.is:J1;function ot(n,e){if(Fn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),t=Object.keys(e);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var a=r[t];if(!Ds.call(e,a)||!Fn(n[a],e[a]))return!1}return!0}function yo(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bo(n,e){var r=yo(n);n=0;for(var t;r;){if(r.nodeType===3){if(t=n+r.textContent.length,n<=e&&t>=e)return{node:r,offset:e-n};n=t}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=yo(r)}}function xu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?xu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Eu(){for(var n=window,e=oa();e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=oa(n.document)}return e}function ei(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function nf(n){var e=Eu(),r=n.focusedElem,t=n.selectionRange;if(e!==r&&r&&r.ownerDocument&&xu(r.ownerDocument.documentElement,r)){if(t!==null&&ei(r)){if(e=t.start,n=t.end,n===void 0&&(n=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(n,r.value.length);else if(n=(e=r.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=r.textContent.length,s=Math.min(t.start,a);t=t.end===void 0?s:Math.min(t.end,a),!n.extend&&s>t&&(a=t,t=s,s=a),a=bo(r,s);var l=bo(r,t);a&&l&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),s>t?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}}for(e=[],n=r;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)n=e[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ef=Jn&&"documentMode"in document&&11>=document.documentMode,Je=null,tl=null,Kr=null,al=!1;function wo(n,e,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;al||Je==null||Je!==oa(t)||(t=Je,"selectionStart"in t&&ei(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Kr&&ot(Kr,t)||(Kr=t,t=va(tl,"onSelect"),0<t.length&&(e=new ql("onSelect","select",null,e,r),n.push({event:e,listeners:t}),e.target=Je)))}function jt(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var nr={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionend:jt("Transition","TransitionEnd")},ys={},Lu={};Jn&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Ba(n){if(ys[n])return ys[n];if(!nr[n])return n;var e=nr[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in Lu)return ys[n]=e[r];return n}var Ou=Ba("animationend"),Tu=Ba("animationiteration"),Pu=Ba("animationstart"),Iu=Ba("transitionend"),Mu=new Map,Co="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ke(n,e){Mu.set(n,e),Ye(e,[n])}for(var bs=0;bs<Co.length;bs++){var ws=Co[bs],rf=ws.toLowerCase(),tf=ws[0].toUpperCase()+ws.slice(1);ke(rf,"on"+tf)}ke(Ou,"onAnimationEnd");ke(Tu,"onAnimationIteration");ke(Pu,"onAnimationStart");ke("dblclick","onDoubleClick");ke("focusin","onFocus");ke("focusout","onBlur");ke(Iu,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Ye("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ye("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ye("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ye("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ye("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ye("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function ko(n,e,r){var t=n.type||"unknown-event";n.currentTarget=r,r1(t,e,void 0,n),n.currentTarget=null}function Ru(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var t=n[r],a=t.event;t=t.listeners;n:{var s=void 0;if(e)for(var l=t.length-1;0<=l;l--){var o=t[l],i=o.instance,c=o.currentTarget;if(o=o.listener,i!==s&&a.isPropagationStopped())break n;ko(a,o,c),s=i}else for(l=0;l<t.length;l++){if(o=t[l],i=o.instance,c=o.currentTarget,o=o.listener,i!==s&&a.isPropagationStopped())break n;ko(a,o,c),s=i}}}if(ua)throw n=Js,ua=!1,Js=null,n}function H(n,e){var r=e[cl];r===void 0&&(r=e[cl]=new Set);var t=n+"__bubble";r.has(t)||(Nu(e,n,2,!1),r.add(t))}function Cs(n,e,r){var t=0;e&&(t|=4),Nu(r,n,t,e)}var Ht="_reactListening"+Math.random().toString(36).slice(2);function ct(n){if(!n[Ht]){n[Ht]=!0,Fc.forEach(function(r){r!=="selectionchange"&&(af.has(r)||Cs(r,!1,n),Cs(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ht]||(e[Ht]=!0,Cs("selectionchange",!1,e))}}function Nu(n,e,r,t){switch(_u(e)){case 1:var a=g1;break;case 4:a=y1;break;default:a=Ql}r=a.bind(null,e,r,n),a=void 0,!qs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),t?a!==void 0?n.addEventListener(e,r,{capture:!0,passive:a}):n.addEventListener(e,r,!0):a!==void 0?n.addEventListener(e,r,{passive:a}):n.addEventListener(e,r,!1)}function ks(n,e,r,t,a){var s=t;if(!(e&1)&&!(e&2)&&t!==null)n:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var o=t.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(l===4)for(l=t.return;l!==null;){var i=l.tag;if((i===3||i===4)&&(i=l.stateNode.containerInfo,i===a||i.nodeType===8&&i.parentNode===a))return;l=l.return}for(;o!==null;){if(l=je(o),l===null)return;if(i=l.tag,i===5||i===6){t=s=l;continue n}o=o.parentNode}}t=t.return}tu(function(){var c=s,u=Yl(r),p=[];n:{var v=Mu.get(n);if(v!==void 0){var y=ql,_=n;switch(n){case"keypress":if(Jt(r)===0)break n;case"keydown":case"keyup":y=N1;break;case"focusin":_="focus",y=hs;break;case"focusout":_="blur",y=hs;break;case"beforeblur":case"afterblur":y=hs;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=H1;break;case Ou:case Tu:case Pu:y=x1;break;case Iu:y=B1;break;case"scroll":y=b1;break;case"wheel":y=F1;break;case"copy":case"cut":case"paste":y=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fo}var h=(e&4)!==0,b=!h&&n==="scroll",f=h?v!==null?v+"Capture":null:v;h=[];for(var d=c,m;d!==null;){m=d;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,f!==null&&(g=tt(d,f),g!=null&&h.push(ut(d,g,m)))),b)break;d=d.return}0<h.length&&(v=new y(v,_,null,r,u),p.push({event:v,listeners:h}))}}if(!(e&7)){n:{if(v=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",v&&r!==Qs&&(_=r.relatedTarget||r.fromElement)&&(je(_)||_[ne]))break n;if((y||v)&&(v=u.window===u?u:(v=u.ownerDocument)?v.defaultView||v.parentWindow:window,y?(_=r.relatedTarget||r.toElement,y=c,_=_?je(_):null,_!==null&&(b=Ge(_),_!==b||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=c),y!==_)){if(h=uo,g="onMouseLeave",f="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(h=fo,g="onPointerLeave",f="onPointerEnter",d="pointer"),b=y==null?v:er(y),m=_==null?v:er(_),v=new h(g,d+"leave",y,r,u),v.target=b,v.relatedTarget=m,g=null,je(u)===c&&(h=new h(f,d+"enter",_,r,u),h.target=m,h.relatedTarget=b,g=h),b=g,y&&_)e:{for(h=y,f=_,d=0,m=h;m;m=Ke(m))d++;for(m=0,g=f;g;g=Ke(g))m++;for(;0<d-m;)h=Ke(h),d--;for(;0<m-d;)f=Ke(f),m--;for(;d--;){if(h===f||f!==null&&h===f.alternate)break e;h=Ke(h),f=Ke(f)}h=null}else h=null;y!==null&&So(p,v,y,h,!1),_!==null&&b!==null&&So(p,b,_,h,!0)}}n:{if(v=c?er(c):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var C=K1;else if(ho(v))if(ku)C=q1;else{C=Q1;var E=$1}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(C=X1);if(C&&(C=C(n,c))){Cu(p,C,r,u);break n}E&&E(n,v,c),n==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&Zs(v,"number",v.value)}switch(E=c?er(c):window,n){case"focusin":(ho(E)||E.contentEditable==="true")&&(Je=E,tl=c,Kr=null);break;case"focusout":Kr=tl=Je=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,wo(p,r,u);break;case"selectionchange":if(ef)break;case"keydown":case"keyup":wo(p,r,u)}var L;if(ni)n:{switch(n){case"compositionstart":var O="onCompositionStart";break n;case"compositionend":O="onCompositionEnd";break n;case"compositionupdate":O="onCompositionUpdate";break n}O=void 0}else qe?bu(n,r)&&(O="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(O="onCompositionStart");O&&(yu&&r.locale!=="ko"&&(qe||O!=="onCompositionStart"?O==="onCompositionEnd"&&qe&&(L=gu()):(ce=u,Xl="value"in ce?ce.value:ce.textContent,qe=!0)),E=va(c,O),0<E.length&&(O=new po(O,n,null,r,u),p.push({event:O,listeners:E}),L?O.data=L:(L=wu(r),L!==null&&(O.data=L)))),(L=W1?V1(n,r):Z1(n,r))&&(c=va(c,"onBeforeInput"),0<c.length&&(u=new po("onBeforeInput","beforeinput",null,r,u),p.push({event:u,listeners:c}),u.data=L))}Ru(p,e)})}function ut(n,e,r){return{instance:n,listener:e,currentTarget:r}}function va(n,e){for(var r=e+"Capture",t=[];n!==null;){var a=n,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=tt(n,r),s!=null&&t.unshift(ut(n,s,a)),s=tt(n,e),s!=null&&t.push(ut(n,s,a))),n=n.return}return t}function Ke(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function So(n,e,r,t,a){for(var s=e._reactName,l=[];r!==null&&r!==t;){var o=r,i=o.alternate,c=o.stateNode;if(i!==null&&i===t)break;o.tag===5&&c!==null&&(o=c,a?(i=tt(r,s),i!=null&&l.unshift(ut(r,i,o))):a||(i=tt(r,s),i!=null&&l.push(ut(r,i,o)))),r=r.return}l.length!==0&&n.push({event:e,listeners:l})}var sf=/\r\n?/g,lf=/\u0000|\uFFFD/g;function xo(n){return(typeof n=="string"?n:""+n).replace(sf,`
`).replace(lf,"")}function Dt(n,e,r){if(e=xo(e),xo(n)!==e&&r)throw Error(w(425))}function ha(){}var sl=null,ll=null;function il(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,of=typeof clearTimeout=="function"?clearTimeout:void 0,Eo=typeof Promise=="function"?Promise:void 0,cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Eo<"u"?function(n){return Eo.resolve(null).then(n).catch(uf)}:ol;function uf(n){setTimeout(function(){throw n})}function Ss(n,e){var r=e,t=0;do{var a=r.nextSibling;if(n.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(t===0){n.removeChild(a),lt(e);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=a}while(r);lt(e)}function ve(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Lo(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return n;e--}else r==="/$"&&e++}n=n.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Zn="__reactFiber$"+kr,dt="__reactProps$"+kr,ne="__reactContainer$"+kr,cl="__reactEvents$"+kr,df="__reactListeners$"+kr,pf="__reactHandles$"+kr;function je(n){var e=n[Zn];if(e)return e;for(var r=n.parentNode;r;){if(e=r[ne]||r[Zn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=Lo(n);n!==null;){if(r=n[Zn])return r;n=Lo(n)}return e}n=r,r=n.parentNode}return null}function St(n){return n=n[Zn]||n[ne],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function er(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(w(33))}function za(n){return n[dt]||null}var ul=[],rr=-1;function Se(n){return{current:n}}function D(n){0>rr||(n.current=ul[rr],ul[rr]=null,rr--)}function j(n,e){rr++,ul[rr]=n.current,n.current=e}var Ce={},cn=Se(Ce),_n=Se(!1),Fe=Ce;function vr(n,e){var r=n.type.contextTypes;if(!r)return Ce;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===e)return t.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=e[s];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=a),a}function gn(n){return n=n.childContextTypes,n!=null}function _a(){D(_n),D(cn)}function Oo(n,e,r){if(cn.current!==Ce)throw Error(w(168));j(cn,e),j(_n,r)}function Au(n,e,r){var t=n.stateNode;if(e=e.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var a in t)if(!(a in e))throw Error(w(108,$p(n)||"Unknown",a));return U({},r,t)}function ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ce,Fe=cn.current,j(cn,n),j(_n,_n.current),!0}function To(n,e,r){var t=n.stateNode;if(!t)throw Error(w(169));r?(n=Au(n,e,Fe),t.__reactInternalMemoizedMergedChildContext=n,D(_n),D(cn),j(cn,n)):D(_n),j(_n,r)}var $n=null,Fa=!1,xs=!1;function ju(n){$n===null?$n=[n]:$n.push(n)}function ff(n){Fa=!0,ju(n)}function xe(){if(!xs&&$n!==null){xs=!0;var n=0,e=A;try{var r=$n;for(A=1;n<r.length;n++){var t=r[n];do t=t(!0);while(t!==null)}$n=null,Fa=!1}catch(a){throw $n!==null&&($n=$n.slice(n+1)),iu(Gl,xe),a}finally{A=e,xs=!1}}return null}var tr=[],ar=0,ya=null,ba=0,On=[],Tn=0,Ue=null,Qn=1,Xn="";function Re(n,e){tr[ar++]=ba,tr[ar++]=ya,ya=n,ba=e}function Hu(n,e,r){On[Tn++]=Qn,On[Tn++]=Xn,On[Tn++]=Ue,Ue=n;var t=Qn;n=Xn;var a=32-Bn(t)-1;t&=~(1<<a),r+=1;var s=32-Bn(e)+a;if(30<s){var l=a-a%5;s=(t&(1<<l)-1).toString(32),t>>=l,a-=l,Qn=1<<32-Bn(e)+a|r<<a|t,Xn=s+n}else Qn=1<<s|r<<a|t,Xn=n}function ri(n){n.return!==null&&(Re(n,1),Hu(n,1,0))}function ti(n){for(;n===ya;)ya=tr[--ar],tr[ar]=null,ba=tr[--ar],tr[ar]=null;for(;n===Ue;)Ue=On[--Tn],On[Tn]=null,Xn=On[--Tn],On[Tn]=null,Qn=On[--Tn],On[Tn]=null}var kn=null,Cn=null,B=!1,Dn=null;function Du(n,e){var r=Pn(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=n,e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)}function Po(n,e){switch(n.tag){case 5:var r=n.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,kn=n,Cn=ve(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,kn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ue!==null?{id:Qn,overflow:Xn}:null,n.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Pn(18,null,null,0),r.stateNode=e,r.return=n,n.child=r,kn=n,Cn=null,!0):!1;default:return!1}}function dl(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pl(n){if(B){var e=Cn;if(e){var r=e;if(!Po(n,e)){if(dl(n))throw Error(w(418));e=ve(r.nextSibling);var t=kn;e&&Po(n,e)?Du(t,r):(n.flags=n.flags&-4097|2,B=!1,kn=n)}}else{if(dl(n))throw Error(w(418));n.flags=n.flags&-4097|2,B=!1,kn=n}}}function Io(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Bt(n){if(n!==kn)return!1;if(!B)return Io(n),B=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!il(n.type,n.memoizedProps)),e&&(e=Cn)){if(dl(n))throw Bu(),Error(w(418));for(;e;)Du(n,e),e=ve(e.nextSibling)}if(Io(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(w(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(e===0){Cn=ve(n.nextSibling);break n}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=kn?ve(n.stateNode.nextSibling):null;return!0}function Bu(){for(var n=Cn;n;)n=ve(n.nextSibling)}function hr(){Cn=kn=null,B=!1}function ai(n){Dn===null?Dn=[n]:Dn.push(n)}var mf=te.ReactCurrentBatchConfig;function Nr(n,e,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var t=r.stateNode}if(!t)throw Error(w(147,n));var a=t,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var o=a.refs;l===null?delete o[s]:o[s]=l},e._stringRef=s,e)}if(typeof n!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,n))}return n}function zt(n,e){throw n=Object.prototype.toString.call(e),Error(w(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Mo(n){var e=n._init;return e(n._payload)}function zu(n){function e(f,d){if(n){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function r(f,d){if(!n)return null;for(;d!==null;)e(f,d),d=d.sibling;return null}function t(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=ye(f,d),f.index=0,f.sibling=null,f}function s(f,d,m){return f.index=m,n?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,d,m,g){return d===null||d.tag!==6?(d=Ms(m,f.mode,g),d.return=f,d):(d=a(d,m),d.return=f,d)}function i(f,d,m,g){var C=m.type;return C===Xe?u(f,d,m.props.children,g,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===se&&Mo(C)===d.type)?(g=a(d,m.props),g.ref=Nr(f,d,m),g.return=f,g):(g=la(m.type,m.key,m.props,null,f.mode,g),g.ref=Nr(f,d,m),g.return=f,g)}function c(f,d,m,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Rs(m,f.mode,g),d.return=f,d):(d=a(d,m.children||[]),d.return=f,d)}function u(f,d,m,g,C){return d===null||d.tag!==7?(d=ze(m,f.mode,g,C),d.return=f,d):(d=a(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ms(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Tt:return m=la(d.type,d.key,d.props,null,f.mode,m),m.ref=Nr(f,null,d),m.return=f,m;case Qe:return d=Rs(d,f.mode,m),d.return=f,d;case se:var g=d._init;return p(f,g(d._payload),m)}if(zr(d)||Tr(d))return d=ze(d,f.mode,m,null),d.return=f,d;zt(f,d)}return null}function v(f,d,m,g){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:o(f,d,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tt:return m.key===C?i(f,d,m,g):null;case Qe:return m.key===C?c(f,d,m,g):null;case se:return C=m._init,v(f,d,C(m._payload),g)}if(zr(m)||Tr(m))return C!==null?null:u(f,d,m,g,null);zt(f,m)}return null}function y(f,d,m,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(m)||null,o(d,f,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tt:return f=f.get(g.key===null?m:g.key)||null,i(d,f,g,C);case Qe:return f=f.get(g.key===null?m:g.key)||null,c(d,f,g,C);case se:var E=g._init;return y(f,d,m,E(g._payload),C)}if(zr(g)||Tr(g))return f=f.get(m)||null,u(d,f,g,C,null);zt(d,g)}return null}function _(f,d,m,g){for(var C=null,E=null,L=d,O=d=0,V=null;L!==null&&O<m.length;O++){L.index>O?(V=L,L=null):V=L.sibling;var R=v(f,L,m[O],g);if(R===null){L===null&&(L=V);break}n&&L&&R.alternate===null&&e(f,L),d=s(R,d,O),E===null?C=R:E.sibling=R,E=R,L=V}if(O===m.length)return r(f,L),B&&Re(f,O),C;if(L===null){for(;O<m.length;O++)L=p(f,m[O],g),L!==null&&(d=s(L,d,O),E===null?C=L:E.sibling=L,E=L);return B&&Re(f,O),C}for(L=t(f,L);O<m.length;O++)V=y(L,f,O,m[O],g),V!==null&&(n&&V.alternate!==null&&L.delete(V.key===null?O:V.key),d=s(V,d,O),E===null?C=V:E.sibling=V,E=V);return n&&L.forEach(function(Nn){return e(f,Nn)}),B&&Re(f,O),C}function h(f,d,m,g){var C=Tr(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var E=C=null,L=d,O=d=0,V=null,R=m.next();L!==null&&!R.done;O++,R=m.next()){L.index>O?(V=L,L=null):V=L.sibling;var Nn=v(f,L,R.value,g);if(Nn===null){L===null&&(L=V);break}n&&L&&Nn.alternate===null&&e(f,L),d=s(Nn,d,O),E===null?C=Nn:E.sibling=Nn,E=Nn,L=V}if(R.done)return r(f,L),B&&Re(f,O),C;if(L===null){for(;!R.done;O++,R=m.next())R=p(f,R.value,g),R!==null&&(d=s(R,d,O),E===null?C=R:E.sibling=R,E=R);return B&&Re(f,O),C}for(L=t(f,L);!R.done;O++,R=m.next())R=y(L,f,O,R.value,g),R!==null&&(n&&R.alternate!==null&&L.delete(R.key===null?O:R.key),d=s(R,d,O),E===null?C=R:E.sibling=R,E=R);return n&&L.forEach(function(Lr){return e(f,Lr)}),B&&Re(f,O),C}function b(f,d,m,g){if(typeof m=="object"&&m!==null&&m.type===Xe&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Tt:n:{for(var C=m.key,E=d;E!==null;){if(E.key===C){if(C=m.type,C===Xe){if(E.tag===7){r(f,E.sibling),d=a(E,m.props.children),d.return=f,f=d;break n}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===se&&Mo(C)===E.type){r(f,E.sibling),d=a(E,m.props),d.ref=Nr(f,E,m),d.return=f,f=d;break n}r(f,E);break}else e(f,E);E=E.sibling}m.type===Xe?(d=ze(m.props.children,f.mode,g,m.key),d.return=f,f=d):(g=la(m.type,m.key,m.props,null,f.mode,g),g.ref=Nr(f,d,m),g.return=f,f=g)}return l(f);case Qe:n:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(f,d.sibling),d=a(d,m.children||[]),d.return=f,f=d;break n}else{r(f,d);break}else e(f,d);d=d.sibling}d=Rs(m,f.mode,g),d.return=f,f=d}return l(f);case se:return E=m._init,b(f,d,E(m._payload),g)}if(zr(m))return _(f,d,m,g);if(Tr(m))return h(f,d,m,g);zt(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(f,d.sibling),d=a(d,m),d.return=f,f=d):(r(f,d),d=Ms(m,f.mode,g),d.return=f,f=d),l(f)):r(f,d)}return b}var _r=zu(!0),Fu=zu(!1),wa=Se(null),Ca=null,sr=null,si=null;function li(){si=sr=Ca=null}function ii(n){var e=wa.current;D(wa),n._currentValue=e}function fl(n,e,r){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),n===r)break;n=n.return}}function pr(n,e){Ca=n,si=sr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function Mn(n){var e=n._currentValue;if(si!==n)if(n={context:n,memoizedValue:e,next:null},sr===null){if(Ca===null)throw Error(w(308));sr=n,Ca.dependencies={lanes:0,firstContext:n}}else sr=sr.next=n;return e}var He=null;function oi(n){He===null?He=[n]:He.push(n)}function Uu(n,e,r,t){var a=e.interleaved;return a===null?(r.next=r,oi(e)):(r.next=a.next,a.next=r),e.interleaved=r,ee(n,t)}function ee(n,e){n.lanes|=e;var r=n.alternate;for(r!==null&&(r.lanes|=e),r=n,n=n.return;n!==null;)n.childLanes|=e,r=n.alternate,r!==null&&(r.childLanes|=e),r=n,n=n.return;return r.tag===3?r.stateNode:null}var le=!1;function ci(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function he(n,e,r){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,N&2){var a=t.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e,ee(n,r)}return a=t.interleaved,a===null?(e.next=e,oi(t)):(e.next=a.next,a.next=e),t.interleaved=e,ee(n,r)}function na(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var t=e.lanes;t&=n.pendingLanes,r|=t,e.lanes=r,Kl(n,r)}}function Ro(n,e){var r=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?a=s=e:s=s.next=e}else a=s=e;r={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:t.shared,effects:t.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}function ka(n,e,r,t){var a=n.updateQueue;le=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var i=o,c=i.next;i.next=null,l===null?s=c:l.next=c,l=i;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==l&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=i))}if(s!==null){var p=a.baseState;l=0,u=c=i=null,o=s;do{var v=o.lane,y=o.eventTime;if((t&v)===v){u!==null&&(u=u.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});n:{var _=n,h=o;switch(v=e,y=r,h.tag){case 1:if(_=h.payload,typeof _=="function"){p=_.call(y,p,v);break n}p=_;break n;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,v=typeof _=="function"?_.call(y,p,v):_,v==null)break n;p=U({},p,v);break n;case 2:le=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,v=a.effects,v===null?a.effects=[o]:v.push(o))}else y={eventTime:y,lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=y,i=p):u=u.next=y,l|=v;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);if(u===null&&(i=p),a.baseState=i,a.firstBaseUpdate=c,a.lastBaseUpdate=u,e=a.shared.interleaved,e!==null){a=e;do l|=a.lane,a=a.next;while(a!==e)}else s===null&&(a.shared.lanes=0);Ve|=l,n.lanes=l,n.memoizedState=p}}function No(n,e,r){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var t=n[e],a=t.callback;if(a!==null){if(t.callback=null,t=r,typeof a!="function")throw Error(w(191,a));a.call(t)}}}var xt={},Gn=Se(xt),pt=Se(xt),ft=Se(xt);function De(n){if(n===xt)throw Error(w(174));return n}function ui(n,e){switch(j(ft,e),j(pt,n),j(Gn,xt),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gs(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Gs(e,n)}D(Gn),j(Gn,e)}function gr(){D(Gn),D(pt),D(ft)}function Vu(n){De(ft.current);var e=De(Gn.current),r=Gs(e,n.type);e!==r&&(j(pt,n),j(Gn,r))}function di(n){pt.current===n&&(D(Gn),D(pt))}var z=Se(0);function Sa(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Es=[];function pi(){for(var n=0;n<Es.length;n++)Es[n]._workInProgressVersionPrimary=null;Es.length=0}var ea=te.ReactCurrentDispatcher,Ls=te.ReactCurrentBatchConfig,We=0,F=null,Q=null,J=null,xa=!1,$r=!1,mt=0,vf=0;function sn(){throw Error(w(321))}function fi(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!Fn(n[r],e[r]))return!1;return!0}function mi(n,e,r,t,a,s){if(We=s,F=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ea.current=n===null||n.memoizedState===null?yf:bf,n=r(t,a),$r){s=0;do{if($r=!1,mt=0,25<=s)throw Error(w(301));s+=1,J=Q=null,e.updateQueue=null,ea.current=wf,n=r(t,a)}while($r)}if(ea.current=Ea,e=Q!==null&&Q.next!==null,We=0,J=Q=F=null,xa=!1,e)throw Error(w(300));return n}function vi(){var n=mt!==0;return mt=0,n}function Vn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?F.memoizedState=J=n:J=J.next=n,J}function Rn(){if(Q===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=Q.next;var e=J===null?F.memoizedState:J.next;if(e!==null)J=e,Q=n;else{if(n===null)throw Error(w(310));Q=n,n={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?F.memoizedState=J=n:J=J.next=n}return J}function vt(n,e){return typeof e=="function"?e(n):e}function Os(n){var e=Rn(),r=e.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=n;var t=Q,a=t.baseQueue,s=r.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}t.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,t=t.baseState;var o=l=null,i=null,c=s;do{var u=c.lane;if((We&u)===u)i!==null&&(i=i.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:n(t,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};i===null?(o=i=p,l=t):i=i.next=p,F.lanes|=u,Ve|=u}c=c.next}while(c!==null&&c!==s);i===null?l=t:i.next=o,Fn(t,e.memoizedState)||(hn=!0),e.memoizedState=t,e.baseState=l,e.baseQueue=i,r.lastRenderedState=t}if(n=r.interleaved,n!==null){a=n;do s=a.lane,F.lanes|=s,Ve|=s,a=a.next;while(a!==n)}else a===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ts(n){var e=Rn(),r=e.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=n;var t=r.dispatch,a=r.pending,s=e.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do s=n(s,l.action),l=l.next;while(l!==a);Fn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,t]}function Zu(){}function Yu(n,e){var r=F,t=Rn(),a=e(),s=!Fn(t.memoizedState,a);if(s&&(t.memoizedState=a,hn=!0),t=t.queue,hi($u.bind(null,r,t,n),[n]),t.getSnapshot!==e||s||J!==null&&J.memoizedState.tag&1){if(r.flags|=2048,ht(9,Ku.bind(null,r,t,a,e),void 0,null),nn===null)throw Error(w(349));We&30||Gu(r,e,a)}return a}function Gu(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=F.updateQueue,e===null?(e={lastEffect:null,stores:null},F.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function Ku(n,e,r,t){e.value=r,e.getSnapshot=t,Qu(e)&&Xu(n)}function $u(n,e,r){return r(function(){Qu(e)&&Xu(n)})}function Qu(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!Fn(n,r)}catch{return!0}}function Xu(n){var e=ee(n,1);e!==null&&zn(e,n,1,-1)}function Ao(n){var e=Vn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vt,lastRenderedState:n},e.queue=n,n=n.dispatch=gf.bind(null,F,n),[e.memoizedState,n]}function ht(n,e,r,t){return n={tag:n,create:e,destroy:r,deps:t,next:null},e=F.updateQueue,e===null?(e={lastEffect:null,stores:null},F.updateQueue=e,e.lastEffect=n.next=n):(r=e.lastEffect,r===null?e.lastEffect=n.next=n:(t=r.next,r.next=n,n.next=t,e.lastEffect=n)),n}function qu(){return Rn().memoizedState}function ra(n,e,r,t){var a=Vn();F.flags|=n,a.memoizedState=ht(1|e,r,void 0,t===void 0?null:t)}function Ua(n,e,r,t){var a=Rn();t=t===void 0?null:t;var s=void 0;if(Q!==null){var l=Q.memoizedState;if(s=l.destroy,t!==null&&fi(t,l.deps)){a.memoizedState=ht(e,r,s,t);return}}F.flags|=n,a.memoizedState=ht(1|e,r,s,t)}function jo(n,e){return ra(8390656,8,n,e)}function hi(n,e){return Ua(2048,8,n,e)}function Ju(n,e){return Ua(4,2,n,e)}function nd(n,e){return Ua(4,4,n,e)}function ed(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function rd(n,e,r){return r=r!=null?r.concat([n]):null,Ua(4,4,ed.bind(null,e,n),r)}function _i(){}function td(n,e){var r=Rn();e=e===void 0?null:e;var t=r.memoizedState;return t!==null&&e!==null&&fi(e,t[1])?t[0]:(r.memoizedState=[n,e],n)}function ad(n,e){var r=Rn();e=e===void 0?null:e;var t=r.memoizedState;return t!==null&&e!==null&&fi(e,t[1])?t[0]:(n=n(),r.memoizedState=[n,e],n)}function sd(n,e,r){return We&21?(Fn(r,e)||(r=uu(),F.lanes|=r,Ve|=r,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=r)}function hf(n,e){var r=A;A=r!==0&&4>r?r:4,n(!0);var t=Ls.transition;Ls.transition={};try{n(!1),e()}finally{A=r,Ls.transition=t}}function ld(){return Rn().memoizedState}function _f(n,e,r){var t=ge(n);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},id(n))od(e,r);else if(r=Uu(n,e,r,t),r!==null){var a=dn();zn(r,n,t,a),cd(r,e,t)}}function gf(n,e,r){var t=ge(n),a={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(id(n))od(e,a);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,o=s(l,r);if(a.hasEagerState=!0,a.eagerState=o,Fn(o,l)){var i=e.interleaved;i===null?(a.next=a,oi(e)):(a.next=i.next,i.next=a),e.interleaved=a;return}}catch{}finally{}r=Uu(n,e,a,t),r!==null&&(a=dn(),zn(r,n,t,a),cd(r,e,t))}}function id(n){var e=n.alternate;return n===F||e!==null&&e===F}function od(n,e){$r=xa=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function cd(n,e,r){if(r&4194240){var t=e.lanes;t&=n.pendingLanes,r|=t,e.lanes=r,Kl(n,r)}}var Ea={readContext:Mn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},yf={readContext:Mn,useCallback:function(n,e){return Vn().memoizedState=[n,e===void 0?null:e],n},useContext:Mn,useEffect:jo,useImperativeHandle:function(n,e,r){return r=r!=null?r.concat([n]):null,ra(4194308,4,ed.bind(null,e,n),r)},useLayoutEffect:function(n,e){return ra(4194308,4,n,e)},useInsertionEffect:function(n,e){return ra(4,2,n,e)},useMemo:function(n,e){var r=Vn();return e=e===void 0?null:e,n=n(),r.memoizedState=[n,e],n},useReducer:function(n,e,r){var t=Vn();return e=r!==void 0?r(e):e,t.memoizedState=t.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},t.queue=n,n=n.dispatch=_f.bind(null,F,n),[t.memoizedState,n]},useRef:function(n){var e=Vn();return n={current:n},e.memoizedState=n},useState:Ao,useDebugValue:_i,useDeferredValue:function(n){return Vn().memoizedState=n},useTransition:function(){var n=Ao(!1),e=n[0];return n=hf.bind(null,n[1]),Vn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,r){var t=F,a=Vn();if(B){if(r===void 0)throw Error(w(407));r=r()}else{if(r=e(),nn===null)throw Error(w(349));We&30||Gu(t,e,r)}a.memoizedState=r;var s={value:r,getSnapshot:e};return a.queue=s,jo($u.bind(null,t,s,n),[n]),t.flags|=2048,ht(9,Ku.bind(null,t,s,r,e),void 0,null),r},useId:function(){var n=Vn(),e=nn.identifierPrefix;if(B){var r=Xn,t=Qn;r=(t&~(1<<32-Bn(t)-1)).toString(32)+r,e=":"+e+"R"+r,r=mt++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=vf++,e=":"+e+"r"+r.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},bf={readContext:Mn,useCallback:td,useContext:Mn,useEffect:hi,useImperativeHandle:rd,useInsertionEffect:Ju,useLayoutEffect:nd,useMemo:ad,useReducer:Os,useRef:qu,useState:function(){return Os(vt)},useDebugValue:_i,useDeferredValue:function(n){var e=Rn();return sd(e,Q.memoizedState,n)},useTransition:function(){var n=Os(vt)[0],e=Rn().memoizedState;return[n,e]},useMutableSource:Zu,useSyncExternalStore:Yu,useId:ld,unstable_isNewReconciler:!1},wf={readContext:Mn,useCallback:td,useContext:Mn,useEffect:hi,useImperativeHandle:rd,useInsertionEffect:Ju,useLayoutEffect:nd,useMemo:ad,useReducer:Ts,useRef:qu,useState:function(){return Ts(vt)},useDebugValue:_i,useDeferredValue:function(n){var e=Rn();return Q===null?e.memoizedState=n:sd(e,Q.memoizedState,n)},useTransition:function(){var n=Ts(vt)[0],e=Rn().memoizedState;return[n,e]},useMutableSource:Zu,useSyncExternalStore:Yu,useId:ld,unstable_isNewReconciler:!1};function jn(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var r in n)e[r]===void 0&&(e[r]=n[r]);return e}return e}function ml(n,e,r,t){e=n.memoizedState,r=r(t,e),r=r==null?e:U({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Wa={isMounted:function(n){return(n=n._reactInternals)?Ge(n)===n:!1},enqueueSetState:function(n,e,r){n=n._reactInternals;var t=dn(),a=ge(n),s=qn(t,a);s.payload=e,r!=null&&(s.callback=r),e=he(n,s,a),e!==null&&(zn(e,n,a,t),na(e,n,a))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var t=dn(),a=ge(n),s=qn(t,a);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=he(n,s,a),e!==null&&(zn(e,n,a,t),na(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=dn(),t=ge(n),a=qn(r,t);a.tag=2,e!=null&&(a.callback=e),e=he(n,a,t),e!==null&&(zn(e,n,t,r),na(e,n,t))}};function Ho(n,e,r,t,a,s,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,s,l):e.prototype&&e.prototype.isPureReactComponent?!ot(r,t)||!ot(a,s):!0}function ud(n,e,r){var t=!1,a=Ce,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(a=gn(e)?Fe:cn.current,t=e.contextTypes,s=(t=t!=null)?vr(n,a):Ce),e=new e(r,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wa,n.stateNode=e,e._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=s),e}function Do(n,e,r,t){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,t),e.state!==n&&Wa.enqueueReplaceState(e,e.state,null)}function vl(n,e,r,t){var a=n.stateNode;a.props=r,a.state=n.memoizedState,a.refs={},ci(n);var s=e.contextType;typeof s=="object"&&s!==null?a.context=Mn(s):(s=gn(e)?Fe:cn.current,a.context=vr(n,s)),a.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ml(n,e,s,r),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&Wa.enqueueReplaceState(a,a.state,null),ka(n,r,a,t),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function yr(n,e){try{var r="",t=e;do r+=Kp(t),t=t.return;while(t);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:a,digest:null}}function Ps(n,e,r){return{value:n,source:null,stack:r??null,digest:e??null}}function hl(n,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function dd(n,e,r){r=qn(-1,r),r.tag=3,r.payload={element:null};var t=e.value;return r.callback=function(){Oa||(Oa=!0,El=t),hl(n,e)},r}function pd(n,e,r){r=qn(-1,r),r.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var a=e.value;r.payload=function(){return t(a)},r.callback=function(){hl(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){hl(n,e),typeof t!="function"&&(_e===null?_e=new Set([this]):_e.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Bo(n,e,r){var t=n.pingCache;if(t===null){t=n.pingCache=new Cf;var a=new Set;t.set(e,a)}else a=t.get(e),a===void 0&&(a=new Set,t.set(e,a));a.has(r)||(a.add(r),n=jf.bind(null,n,e,r),e.then(n,n))}function zo(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Fo(n,e,r,t,a){return n.mode&1?(n.flags|=65536,n.lanes=a,n):(n===e?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=qn(-1,1),e.tag=2,he(r,e,1))),r.lanes|=1),n)}var kf=te.ReactCurrentOwner,hn=!1;function un(n,e,r,t){e.child=n===null?Fu(e,null,r,t):_r(e,n.child,r,t)}function Uo(n,e,r,t,a){r=r.render;var s=e.ref;return pr(e,a),t=mi(n,e,r,t,s,a),r=vi(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,re(n,e,a)):(B&&r&&ri(e),e.flags|=1,un(n,e,t,a),e.child)}function Wo(n,e,r,t,a){if(n===null){var s=r.type;return typeof s=="function"&&!xi(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,fd(n,e,s,t,a)):(n=la(r.type,null,t,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&a)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:ot,r(l,t)&&n.ref===e.ref)return re(n,e,a)}return e.flags|=1,n=ye(s,t),n.ref=e.ref,n.return=e,e.child=n}function fd(n,e,r,t,a){if(n!==null){var s=n.memoizedProps;if(ot(s,t)&&n.ref===e.ref)if(hn=!1,e.pendingProps=t=s,(n.lanes&a)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,re(n,e,a)}return _l(n,e,r,t,a)}function md(n,e,r){var t=e.pendingProps,a=t.children,s=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(ir,wn),wn|=r;else{if(!(r&1073741824))return n=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,j(ir,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:r,j(ir,wn),wn|=t}else s!==null?(t=s.baseLanes|r,e.memoizedState=null):t=r,j(ir,wn),wn|=t;return un(n,e,a,r),e.child}function vd(n,e){var r=e.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function _l(n,e,r,t,a){var s=gn(r)?Fe:cn.current;return s=vr(e,s),pr(e,a),r=mi(n,e,r,t,s,a),t=vi(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,re(n,e,a)):(B&&t&&ri(e),e.flags|=1,un(n,e,r,a),e.child)}function Vo(n,e,r,t,a){if(gn(r)){var s=!0;ga(e)}else s=!1;if(pr(e,a),e.stateNode===null)ta(n,e),ud(e,r,t),vl(e,r,t,a),t=!0;else if(n===null){var l=e.stateNode,o=e.memoizedProps;l.props=o;var i=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=Mn(c):(c=gn(r)?Fe:cn.current,c=vr(e,c));var u=r.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==t||i!==c)&&Do(e,l,t,c),le=!1;var v=e.memoizedState;l.state=v,ka(e,t,l,a),i=e.memoizedState,o!==t||v!==i||_n.current||le?(typeof u=="function"&&(ml(e,r,u,t),i=e.memoizedState),(o=le||Ho(e,r,o,t,v,i,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=i),l.props=t,l.state=i,l.context=c,t=o):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{l=e.stateNode,Wu(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),l.props=c,p=e.pendingProps,v=l.context,i=r.contextType,typeof i=="object"&&i!==null?i=Mn(i):(i=gn(r)?Fe:cn.current,i=vr(e,i));var y=r.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||v!==i)&&Do(e,l,t,i),le=!1,v=e.memoizedState,l.state=v,ka(e,t,l,a);var _=e.memoizedState;o!==p||v!==_||_n.current||le?(typeof y=="function"&&(ml(e,r,y,t),_=e.memoizedState),(c=le||Ho(e,r,c,t,v,_,i)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,_,i),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,_,i)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&v===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&v===n.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=_),l.props=t,l.state=_,l.context=i,t=c):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&v===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&v===n.memoizedState||(e.flags|=1024),t=!1)}return gl(n,e,r,t,s,a)}function gl(n,e,r,t,a,s){vd(n,e);var l=(e.flags&128)!==0;if(!t&&!l)return a&&To(e,r,!1),re(n,e,s);t=e.stateNode,kf.current=e;var o=l&&typeof r.getDerivedStateFromError!="function"?null:t.render();return e.flags|=1,n!==null&&l?(e.child=_r(e,n.child,null,s),e.child=_r(e,null,o,s)):un(n,e,o,s),e.memoizedState=t.state,a&&To(e,r,!0),e.child}function hd(n){var e=n.stateNode;e.pendingContext?Oo(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Oo(n,e.context,!1),ui(n,e.containerInfo)}function Zo(n,e,r,t,a){return hr(),ai(a),e.flags|=256,un(n,e,r,t),e.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function bl(n){return{baseLanes:n,cachePool:null,transitions:null}}function _d(n,e,r){var t=e.pendingProps,a=z.current,s=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=n!==null&&n.memoizedState===null?!1:(a&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),j(z,a&1),n===null)return pl(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=t.children,n=t.fallback,s?(t=e.mode,s=e.child,l={mode:"hidden",children:l},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ya(l,t,0,null),n=ze(n,t,r,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bl(r),e.memoizedState=yl,n):gi(e,l));if(a=n.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return Sf(n,e,l,t,o,a,r);if(s){s=t.fallback,l=e.mode,a=n.child,o=a.sibling;var i={mode:"hidden",children:t.children};return!(l&1)&&e.child!==a?(t=e.child,t.childLanes=0,t.pendingProps=i,e.deletions=null):(t=ye(a,i),t.subtreeFlags=a.subtreeFlags&14680064),o!==null?s=ye(o,s):(s=ze(s,l,r,null),s.flags|=2),s.return=e,t.return=e,t.sibling=s,e.child=t,t=s,s=e.child,l=n.child.memoizedState,l=l===null?bl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=n.childLanes&~r,e.memoizedState=yl,t}return s=n.child,n=s.sibling,t=ye(s,{mode:"visible",children:t.children}),!(e.mode&1)&&(t.lanes=r),t.return=e,t.sibling=null,n!==null&&(r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)),e.child=t,e.memoizedState=null,t}function gi(n,e){return e=Ya({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ft(n,e,r,t){return t!==null&&ai(t),_r(e,n.child,null,r),n=gi(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Sf(n,e,r,t,a,s,l){if(r)return e.flags&256?(e.flags&=-257,t=Ps(Error(w(422))),Ft(n,e,l,t)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=t.fallback,a=e.mode,t=Ya({mode:"visible",children:t.children},a,0,null),s=ze(s,a,l,null),s.flags|=2,t.return=e,s.return=e,t.sibling=s,e.child=t,e.mode&1&&_r(e,n.child,null,l),e.child.memoizedState=bl(l),e.memoizedState=yl,s);if(!(e.mode&1))return Ft(n,e,l,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var o=t.dgst;return t=o,s=Error(w(419)),t=Ps(s,t,void 0),Ft(n,e,l,t)}if(o=(l&n.childLanes)!==0,hn||o){if(t=nn,t!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,ee(n,a),zn(t,n,a,-1))}return Si(),t=Ps(Error(w(421))),Ft(n,e,l,t)}return a.data==="$?"?(e.flags|=128,e.child=n.child,e=Hf.bind(null,n),a._reactRetry=e,null):(n=s.treeContext,Cn=ve(a.nextSibling),kn=e,B=!0,Dn=null,n!==null&&(On[Tn++]=Qn,On[Tn++]=Xn,On[Tn++]=Ue,Qn=n.id,Xn=n.overflow,Ue=e),e=gi(e,t.children),e.flags|=4096,e)}function Yo(n,e,r){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),fl(n.return,e,r)}function Is(n,e,r,t,a){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:a}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=r,s.tailMode=a)}function gd(n,e,r){var t=e.pendingProps,a=t.revealOrder,s=t.tail;if(un(n,e,t.children,r),t=z.current,t&2)t=t&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yo(n,r,e);else if(n.tag===19)Yo(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(j(z,t),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(r=e.child,a=null;r!==null;)n=r.alternate,n!==null&&Sa(n)===null&&(a=r),r=r.sibling;r=a,r===null?(a=e.child,e.child=null):(a=r.sibling,r.sibling=null),Is(e,!1,a,r,s);break;case"backwards":for(r=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Sa(n)===null){e.child=a;break}n=a.sibling,a.sibling=r,r=a,a=n}Is(e,!0,r,null,s);break;case"together":Is(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ta(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function re(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),Ve|=e.lanes,!(r&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(w(153));if(e.child!==null){for(n=e.child,r=ye(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=ye(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function xf(n,e,r){switch(e.tag){case 3:hd(e),hr();break;case 5:Vu(e);break;case 1:gn(e.type)&&ga(e);break;case 4:ui(e,e.stateNode.containerInfo);break;case 10:var t=e.type._context,a=e.memoizedProps.value;j(wa,t._currentValue),t._currentValue=a;break;case 13:if(t=e.memoizedState,t!==null)return t.dehydrated!==null?(j(z,z.current&1),e.flags|=128,null):r&e.child.childLanes?_d(n,e,r):(j(z,z.current&1),n=re(n,e,r),n!==null?n.sibling:null);j(z,z.current&1);break;case 19:if(t=(r&e.childLanes)!==0,n.flags&128){if(t)return gd(n,e,r);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),j(z,z.current),t)break;return null;case 22:case 23:return e.lanes=0,md(n,e,r)}return re(n,e,r)}var yd,wl,bd,wd;yd=function(n,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};wl=function(){};bd=function(n,e,r,t){var a=n.memoizedProps;if(a!==t){n=e.stateNode,De(Gn.current);var s=null;switch(r){case"input":a=Ws(n,a),t=Ws(n,t),s=[];break;case"select":a=U({},a,{value:void 0}),t=U({},t,{value:void 0}),s=[];break;case"textarea":a=Ys(n,a),t=Ys(n,t),s=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=ha)}Ks(r,t);var l;r=null;for(c in a)if(!t.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var o=a[c];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(et.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in t){var i=t[c];if(o=a!=null?a[c]:void 0,t.hasOwnProperty(c)&&i!==o&&(i!=null||o!=null))if(c==="style")if(o){for(l in o)!o.hasOwnProperty(l)||i&&i.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in i)i.hasOwnProperty(l)&&o[l]!==i[l]&&(r||(r={}),r[l]=i[l])}else r||(s||(s=[]),s.push(c,r)),r=i;else c==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(s=s||[]).push(c,i)):c==="children"?typeof i!="string"&&typeof i!="number"||(s=s||[]).push(c,""+i):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(et.hasOwnProperty(c)?(i!=null&&c==="onScroll"&&H("scroll",n),s||o===i||(s=[])):(s=s||[]).push(c,i))}r&&(s=s||[]).push("style",r);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wd=function(n,e,r,t){r!==t&&(e.flags|=4)};function Ar(n,e){if(!B)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function ln(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,t=0;if(e)for(var a=n.child;a!==null;)r|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)r|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=t,n.childLanes=r,e}function Ef(n,e,r){var t=e.pendingProps;switch(ti(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return gn(e.type)&&_a(),ln(e),null;case 3:return t=e.stateNode,gr(),D(_n),D(cn),pi(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Bt(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Tl(Dn),Dn=null))),wl(n,e),ln(e),null;case 5:di(e);var a=De(ft.current);if(r=e.type,n!==null&&e.stateNode!=null)bd(n,e,r,t,a),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!t){if(e.stateNode===null)throw Error(w(166));return ln(e),null}if(n=De(Gn.current),Bt(e)){t=e.stateNode,r=e.type;var s=e.memoizedProps;switch(t[Zn]=e,t[dt]=s,n=(e.mode&1)!==0,r){case"dialog":H("cancel",t),H("close",t);break;case"iframe":case"object":case"embed":H("load",t);break;case"video":case"audio":for(a=0;a<Ur.length;a++)H(Ur[a],t);break;case"source":H("error",t);break;case"img":case"image":case"link":H("error",t),H("load",t);break;case"details":H("toggle",t);break;case"input":no(t,s),H("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},H("invalid",t);break;case"textarea":ro(t,s),H("invalid",t)}Ks(r,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?t.textContent!==o&&(s.suppressHydrationWarning!==!0&&Dt(t.textContent,o,n),a=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Dt(t.textContent,o,n),a=["children",""+o]):et.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&H("scroll",t)}switch(r){case"input":Pt(t),eo(t,s,!0);break;case"textarea":Pt(t),to(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=ha)}t=a,e.updateQueue=t,t!==null&&(e.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$c(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=l.createElement(r,{is:t.is}):(n=l.createElement(r),r==="select"&&(l=n,t.multiple?l.multiple=!0:t.size&&(l.size=t.size))):n=l.createElementNS(n,r),n[Zn]=e,n[dt]=t,yd(n,e,!1,!1),e.stateNode=n;n:{switch(l=$s(r,t),r){case"dialog":H("cancel",n),H("close",n),a=t;break;case"iframe":case"object":case"embed":H("load",n),a=t;break;case"video":case"audio":for(a=0;a<Ur.length;a++)H(Ur[a],n);a=t;break;case"source":H("error",n),a=t;break;case"img":case"image":case"link":H("error",n),H("load",n),a=t;break;case"details":H("toggle",n),a=t;break;case"input":no(n,t),a=Ws(n,t),H("invalid",n);break;case"option":a=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},a=U({},t,{value:void 0}),H("invalid",n);break;case"textarea":ro(n,t),a=Ys(n,t),H("invalid",n);break;default:a=t}Ks(r,a),o=a;for(s in o)if(o.hasOwnProperty(s)){var i=o[s];s==="style"?qc(n,i):s==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&Qc(n,i)):s==="children"?typeof i=="string"?(r!=="textarea"||i!=="")&&rt(n,i):typeof i=="number"&&rt(n,""+i):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(et.hasOwnProperty(s)?i!=null&&s==="onScroll"&&H("scroll",n):i!=null&&Ul(n,s,i,l))}switch(r){case"input":Pt(n),eo(n,t,!1);break;case"textarea":Pt(n),to(n);break;case"option":t.value!=null&&n.setAttribute("value",""+we(t.value));break;case"select":n.multiple=!!t.multiple,s=t.value,s!=null?or(n,!!t.multiple,s,!1):t.defaultValue!=null&&or(n,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=ha)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}}t&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(n&&e.stateNode!=null)wd(n,e,n.memoizedProps,t);else{if(typeof t!="string"&&e.stateNode===null)throw Error(w(166));if(r=De(ft.current),De(Gn.current),Bt(e)){if(t=e.stateNode,r=e.memoizedProps,t[Zn]=e,(s=t.nodeValue!==r)&&(n=kn,n!==null))switch(n.tag){case 3:Dt(t.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Dt(t.nodeValue,r,(n.mode&1)!==0)}s&&(e.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[Zn]=e,e.stateNode=t}return ln(e),null;case 13:if(D(z),t=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(B&&Cn!==null&&e.mode&1&&!(e.flags&128))Bu(),hr(),e.flags|=98560,s=!1;else if(s=Bt(e),t!==null&&t.dehydrated!==null){if(n===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Zn]=e}else hr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else Dn!==null&&(Tl(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(e.child.flags|=8192,e.mode&1&&(n===null||z.current&1?X===0&&(X=3):Si())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return gr(),wl(n,e),n===null&&ct(e.stateNode.containerInfo),ln(e),null;case 10:return ii(e.type._context),ln(e),null;case 17:return gn(e.type)&&_a(),ln(e),null;case 19:if(D(z),s=e.memoizedState,s===null)return ln(e),null;if(t=(e.flags&128)!==0,l=s.rendering,l===null)if(t)Ar(s,!1);else{if(X!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(l=Sa(n),l!==null){for(e.flags|=128,Ar(s,!1),t=l.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),e.subtreeFlags=0,t=r,r=e.child;r!==null;)s=r,n=t,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,n=l.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return j(z,z.current&1|2),e.child}n=n.sibling}s.tail!==null&&Y()>br&&(e.flags|=128,t=!0,Ar(s,!1),e.lanes=4194304)}else{if(!t)if(n=Sa(l),n!==null){if(e.flags|=128,t=!0,r=n.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Ar(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!B)return ln(e),null}else 2*Y()-s.renderingStartTime>br&&r!==1073741824&&(e.flags|=128,t=!0,Ar(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(r=s.last,r!==null?r.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Y(),e.sibling=null,r=z.current,j(z,t?r&1|2:r&1),e):(ln(e),null);case 22:case 23:return ki(),t=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(e.flags|=8192),t&&e.mode&1?wn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Lf(n,e){switch(ti(e),e.tag){case 1:return gn(e.type)&&_a(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return gr(),D(_n),D(cn),pi(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return di(e),null;case 13:if(D(z),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(w(340));hr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return D(z),null;case 4:return gr(),null;case 10:return ii(e.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var Ut=!1,on=!1,Of=typeof WeakSet=="function"?WeakSet:Set,S=null;function lr(n,e){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){W(n,e,t)}else r.current=null}function Cl(n,e,r){try{r()}catch(t){W(n,e,t)}}var Go=!1;function Tf(n,e){if(sl=fa,n=Eu(),ei(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var a=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break n}var l=0,o=-1,i=-1,c=0,u=0,p=n,v=null;e:for(;;){for(var y;p!==r||a!==0&&p.nodeType!==3||(o=l+a),p!==s||t!==0&&p.nodeType!==3||(i=l+t),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)v=p,p=y;for(;;){if(p===n)break e;if(v===r&&++c===a&&(o=l),v===s&&++u===t&&(i=l),(y=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=y}r=o===-1||i===-1?null:{start:o,end:i}}else r=null}r=r||{start:0,end:0}}else r=null;for(ll={focusedElem:n,selectionRange:r},fa=!1,S=e;S!==null;)if(e=S,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,S=n;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,b=_.memoizedState,f=e.stateNode,d=f.getSnapshotBeforeUpdate(e.elementType===e.type?h:jn(e.type,h),b);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){W(e,e.return,g)}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}return _=Go,Go=!1,_}function Qr(n,e,r){var t=e.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&n)===n){var s=a.destroy;a.destroy=void 0,s!==void 0&&Cl(e,r,s)}a=a.next}while(a!==t)}}function Va(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&n)===n){var t=r.create;r.destroy=t()}r=r.next}while(r!==e)}}function kl(n){var e=n.ref;if(e!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof e=="function"?e(n):e.current=n}}function Cd(n){var e=n.alternate;e!==null&&(n.alternate=null,Cd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Zn],delete e[dt],delete e[cl],delete e[df],delete e[pf])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kd(n){return n.tag===5||n.tag===3||n.tag===4}function Ko(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||kd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sl(n,e,r){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(n,e):r.insertBefore(n,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(n,r)):(e=r,e.appendChild(n)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ha));else if(t!==4&&(n=n.child,n!==null))for(Sl(n,e,r),n=n.sibling;n!==null;)Sl(n,e,r),n=n.sibling}function xl(n,e,r){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(xl(n,e,r),n=n.sibling;n!==null;)xl(n,e,r),n=n.sibling}var en=null,Hn=!1;function ae(n,e,r){for(r=r.child;r!==null;)Sd(n,e,r),r=r.sibling}function Sd(n,e,r){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(ja,r)}catch{}switch(r.tag){case 5:on||lr(r,e);case 6:var t=en,a=Hn;en=null,ae(n,e,r),en=t,Hn=a,en!==null&&(Hn?(n=en,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):en.removeChild(r.stateNode));break;case 18:en!==null&&(Hn?(n=en,r=r.stateNode,n.nodeType===8?Ss(n.parentNode,r):n.nodeType===1&&Ss(n,r),lt(n)):Ss(en,r.stateNode));break;case 4:t=en,a=Hn,en=r.stateNode.containerInfo,Hn=!0,ae(n,e,r),en=t,Hn=a;break;case 0:case 11:case 14:case 15:if(!on&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Cl(r,e,l),a=a.next}while(a!==t)}ae(n,e,r);break;case 1:if(!on&&(lr(r,e),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(o){W(r,e,o)}ae(n,e,r);break;case 21:ae(n,e,r);break;case 22:r.mode&1?(on=(t=on)||r.memoizedState!==null,ae(n,e,r),on=t):ae(n,e,r);break;default:ae(n,e,r)}}function $o(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new Of),e.forEach(function(t){var a=Df.bind(null,n,t);r.has(t)||(r.add(t),t.then(a,a))})}}function An(n,e){var r=e.deletions;if(r!==null)for(var t=0;t<r.length;t++){var a=r[t];try{var s=n,l=e,o=l;n:for(;o!==null;){switch(o.tag){case 5:en=o.stateNode,Hn=!1;break n;case 3:en=o.stateNode.containerInfo,Hn=!0;break n;case 4:en=o.stateNode.containerInfo,Hn=!0;break n}o=o.return}if(en===null)throw Error(w(160));Sd(s,l,a),en=null,Hn=!1;var i=a.alternate;i!==null&&(i.return=null),a.return=null}catch(c){W(a,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xd(e,n),e=e.sibling}function xd(n,e){var r=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(e,n),Wn(n),t&4){try{Qr(3,n,n.return),Va(3,n)}catch(h){W(n,n.return,h)}try{Qr(5,n,n.return)}catch(h){W(n,n.return,h)}}break;case 1:An(e,n),Wn(n),t&512&&r!==null&&lr(r,r.return);break;case 5:if(An(e,n),Wn(n),t&512&&r!==null&&lr(r,r.return),n.flags&32){var a=n.stateNode;try{rt(a,"")}catch(h){W(n,n.return,h)}}if(t&4&&(a=n.stateNode,a!=null)){var s=n.memoizedProps,l=r!==null?r.memoizedProps:s,o=n.type,i=n.updateQueue;if(n.updateQueue=null,i!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Gc(a,s),$s(o,l);var c=$s(o,s);for(l=0;l<i.length;l+=2){var u=i[l],p=i[l+1];u==="style"?qc(a,p):u==="dangerouslySetInnerHTML"?Qc(a,p):u==="children"?rt(a,p):Ul(a,u,p,c)}switch(o){case"input":Vs(a,s);break;case"textarea":Kc(a,s);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?or(a,!!s.multiple,y,!1):v!==!!s.multiple&&(s.defaultValue!=null?or(a,!!s.multiple,s.defaultValue,!0):or(a,!!s.multiple,s.multiple?[]:"",!1))}a[dt]=s}catch(h){W(n,n.return,h)}}break;case 6:if(An(e,n),Wn(n),t&4){if(n.stateNode===null)throw Error(w(162));a=n.stateNode,s=n.memoizedProps;try{a.nodeValue=s}catch(h){W(n,n.return,h)}}break;case 3:if(An(e,n),Wn(n),t&4&&r!==null&&r.memoizedState.isDehydrated)try{lt(e.containerInfo)}catch(h){W(n,n.return,h)}break;case 4:An(e,n),Wn(n);break;case 13:An(e,n),Wn(n),a=n.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(wi=Y())),t&4&&$o(n);break;case 22:if(u=r!==null&&r.memoizedState!==null,n.mode&1?(on=(c=on)||u,An(e,n),on=c):An(e,n),Wn(n),t&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(S=n,u=n.child;u!==null;){for(p=S=u;S!==null;){switch(v=S,y=v.child,v.tag){case 0:case 11:case 14:case 15:Qr(4,v,v.return);break;case 1:lr(v,v.return);var _=v.stateNode;if(typeof _.componentWillUnmount=="function"){t=v,r=v.return;try{e=t,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){W(t,r,h)}}break;case 5:lr(v,v.return);break;case 22:if(v.memoizedState!==null){Xo(p);continue}}y!==null?(y.return=v,S=y):Xo(p)}u=u.sibling}n:for(u=null,p=n;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,c?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,i=p.memoizedProps.style,l=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=Xc("display",l))}catch(h){W(n,n.return,h)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(h){W(n,n.return,h)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break n;for(;p.sibling===null;){if(p.return===null||p.return===n)break n;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:An(e,n),Wn(n),t&4&&$o(n);break;case 21:break;default:An(e,n),Wn(n)}}function Wn(n){var e=n.flags;if(e&2){try{n:{for(var r=n.return;r!==null;){if(kd(r)){var t=r;break n}r=r.return}throw Error(w(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(rt(a,""),t.flags&=-33);var s=Ko(n);xl(n,s,a);break;case 3:case 4:var l=t.stateNode.containerInfo,o=Ko(n);Sl(n,o,l);break;default:throw Error(w(161))}}catch(i){W(n,n.return,i)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Pf(n,e,r){S=n,Ed(n)}function Ed(n,e,r){for(var t=(n.mode&1)!==0;S!==null;){var a=S,s=a.child;if(a.tag===22&&t){var l=a.memoizedState!==null||Ut;if(!l){var o=a.alternate,i=o!==null&&o.memoizedState!==null||on;o=Ut;var c=on;if(Ut=l,(on=i)&&!c)for(S=a;S!==null;)l=S,i=l.child,l.tag===22&&l.memoizedState!==null?qo(a):i!==null?(i.return=l,S=i):qo(a);for(;s!==null;)S=s,Ed(s),s=s.sibling;S=a,Ut=o,on=c}Qo(n)}else a.subtreeFlags&8772&&s!==null?(s.return=a,S=s):Qo(n)}}function Qo(n){for(;S!==null;){var e=S;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Va(5,e);break;case 1:var t=e.stateNode;if(e.flags&4&&!on)if(r===null)t.componentDidMount();else{var a=e.elementType===e.type?r.memoizedProps:jn(e.type,r.memoizedProps);t.componentDidUpdate(a,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&No(e,s,t);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}No(e,l,r)}break;case 5:var o=e.stateNode;if(r===null&&e.flags&4){r=o;var i=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break;case"img":i.src&&(r.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&lt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}on||e.flags&512&&kl(e)}catch(v){W(e,e.return,v)}}if(e===n){S=null;break}if(r=e.sibling,r!==null){r.return=e.return,S=r;break}S=e.return}}function Xo(n){for(;S!==null;){var e=S;if(e===n){S=null;break}var r=e.sibling;if(r!==null){r.return=e.return,S=r;break}S=e.return}}function qo(n){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Va(4,e)}catch(i){W(e,r,i)}break;case 1:var t=e.stateNode;if(typeof t.componentDidMount=="function"){var a=e.return;try{t.componentDidMount()}catch(i){W(e,a,i)}}var s=e.return;try{kl(e)}catch(i){W(e,s,i)}break;case 5:var l=e.return;try{kl(e)}catch(i){W(e,l,i)}}}catch(i){W(e,e.return,i)}if(e===n){S=null;break}var o=e.sibling;if(o!==null){o.return=e.return,S=o;break}S=e.return}}var If=Math.ceil,La=te.ReactCurrentDispatcher,yi=te.ReactCurrentOwner,In=te.ReactCurrentBatchConfig,N=0,nn=null,K=null,rn=0,wn=0,ir=Se(0),X=0,_t=null,Ve=0,Za=0,bi=0,Xr=null,vn=null,wi=0,br=1/0,Kn=null,Oa=!1,El=null,_e=null,Wt=!1,ue=null,Ta=0,qr=0,Ll=null,aa=-1,sa=0;function dn(){return N&6?Y():aa!==-1?aa:aa=Y()}function ge(n){return n.mode&1?N&2&&rn!==0?rn&-rn:mf.transition!==null?(sa===0&&(sa=uu()),sa):(n=A,n!==0||(n=window.event,n=n===void 0?16:_u(n.type)),n):1}function zn(n,e,r,t){if(50<qr)throw qr=0,Ll=null,Error(w(185));Ct(n,r,t),(!(N&2)||n!==nn)&&(n===nn&&(!(N&2)&&(Za|=r),X===4&&oe(n,rn)),yn(n,t),r===1&&N===0&&!(e.mode&1)&&(br=Y()+500,Fa&&xe()))}function yn(n,e){var r=n.callbackNode;f1(n,e);var t=pa(n,n===nn?rn:0);if(t===0)r!==null&&lo(r),n.callbackNode=null,n.callbackPriority=0;else if(e=t&-t,n.callbackPriority!==e){if(r!=null&&lo(r),e===1)n.tag===0?ff(Jo.bind(null,n)):ju(Jo.bind(null,n)),cf(function(){!(N&6)&&xe()}),r=null;else{switch(du(t)){case 1:r=Gl;break;case 4:r=ou;break;case 16:r=da;break;case 536870912:r=cu;break;default:r=da}r=Nd(r,Ld.bind(null,n))}n.callbackPriority=e,n.callbackNode=r}}function Ld(n,e){if(aa=-1,sa=0,N&6)throw Error(w(327));var r=n.callbackNode;if(fr()&&n.callbackNode!==r)return null;var t=pa(n,n===nn?rn:0);if(t===0)return null;if(t&30||t&n.expiredLanes||e)e=Pa(n,t);else{e=t;var a=N;N|=2;var s=Td();(nn!==n||rn!==e)&&(Kn=null,br=Y()+500,Be(n,e));do try{Nf();break}catch(o){Od(n,o)}while(!0);li(),La.current=s,N=a,K!==null?e=0:(nn=null,rn=0,e=X)}if(e!==0){if(e===2&&(a=nl(n),a!==0&&(t=a,e=Ol(n,a))),e===1)throw r=_t,Be(n,0),oe(n,t),yn(n,Y()),r;if(e===6)oe(n,t);else{if(a=n.current.alternate,!(t&30)&&!Mf(a)&&(e=Pa(n,t),e===2&&(s=nl(n),s!==0&&(t=s,e=Ol(n,s))),e===1))throw r=_t,Be(n,0),oe(n,t),yn(n,Y()),r;switch(n.finishedWork=a,n.finishedLanes=t,e){case 0:case 1:throw Error(w(345));case 2:Ne(n,vn,Kn);break;case 3:if(oe(n,t),(t&130023424)===t&&(e=wi+500-Y(),10<e)){if(pa(n,0)!==0)break;if(a=n.suspendedLanes,(a&t)!==t){dn(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=ol(Ne.bind(null,n,vn,Kn),e);break}Ne(n,vn,Kn);break;case 4:if(oe(n,t),(t&4194240)===t)break;for(e=n.eventTimes,a=-1;0<t;){var l=31-Bn(t);s=1<<l,l=e[l],l>a&&(a=l),t&=~s}if(t=a,t=Y()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*If(t/1960))-t,10<t){n.timeoutHandle=ol(Ne.bind(null,n,vn,Kn),t);break}Ne(n,vn,Kn);break;case 5:Ne(n,vn,Kn);break;default:throw Error(w(329))}}}return yn(n,Y()),n.callbackNode===r?Ld.bind(null,n):null}function Ol(n,e){var r=Xr;return n.current.memoizedState.isDehydrated&&(Be(n,e).flags|=256),n=Pa(n,e),n!==2&&(e=vn,vn=r,e!==null&&Tl(e)),n}function Tl(n){vn===null?vn=n:vn.push.apply(vn,n)}function Mf(n){for(var e=n;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var a=r[t],s=a.getSnapshot;a=a.value;try{if(!Fn(s(),a))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oe(n,e){for(e&=~bi,e&=~Za,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var r=31-Bn(e),t=1<<r;n[r]=-1,e&=~t}}function Jo(n){if(N&6)throw Error(w(327));fr();var e=pa(n,0);if(!(e&1))return yn(n,Y()),null;var r=Pa(n,e);if(n.tag!==0&&r===2){var t=nl(n);t!==0&&(e=t,r=Ol(n,t))}if(r===1)throw r=_t,Be(n,0),oe(n,e),yn(n,Y()),r;if(r===6)throw Error(w(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ne(n,vn,Kn),yn(n,Y()),null}function Ci(n,e){var r=N;N|=1;try{return n(e)}finally{N=r,N===0&&(br=Y()+500,Fa&&xe())}}function Ze(n){ue!==null&&ue.tag===0&&!(N&6)&&fr();var e=N;N|=1;var r=In.transition,t=A;try{if(In.transition=null,A=1,n)return n()}finally{A=t,In.transition=r,N=e,!(N&6)&&xe()}}function ki(){wn=ir.current,D(ir)}function Be(n,e){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,of(r)),K!==null)for(r=K.return;r!==null;){var t=r;switch(ti(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&_a();break;case 3:gr(),D(_n),D(cn),pi();break;case 5:di(t);break;case 4:gr();break;case 13:D(z);break;case 19:D(z);break;case 10:ii(t.type._context);break;case 22:case 23:ki()}r=r.return}if(nn=n,K=n=ye(n.current,null),rn=wn=e,X=0,_t=null,bi=Za=Ve=0,vn=Xr=null,He!==null){for(e=0;e<He.length;e++)if(r=He[e],t=r.interleaved,t!==null){r.interleaved=null;var a=t.next,s=r.pending;if(s!==null){var l=s.next;s.next=a,t.next=l}r.pending=t}He=null}return n}function Od(n,e){do{var r=K;try{if(li(),ea.current=Ea,xa){for(var t=F.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}xa=!1}if(We=0,J=Q=F=null,$r=!1,mt=0,yi.current=null,r===null||r.return===null){X=1,_t=e,K=null;break}n:{var s=n,l=r.return,o=r,i=e;if(e=rn,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var c=i,u=o,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var v=u.alternate;v?(u.updateQueue=v.updateQueue,u.memoizedState=v.memoizedState,u.lanes=v.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=zo(l);if(y!==null){y.flags&=-257,Fo(y,l,o,s,e),y.mode&1&&Bo(s,c,e),e=y,i=c;var _=e.updateQueue;if(_===null){var h=new Set;h.add(i),e.updateQueue=h}else _.add(i);break n}else{if(!(e&1)){Bo(s,c,e),Si();break n}i=Error(w(426))}}else if(B&&o.mode&1){var b=zo(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Fo(b,l,o,s,e),ai(yr(i,o));break n}}s=i=yr(i,o),X!==4&&(X=2),Xr===null?Xr=[s]:Xr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=dd(s,i,e);Ro(s,f);break n;case 1:o=i;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_e===null||!_e.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=pd(s,o,e);Ro(s,g);break n}}s=s.return}while(s!==null)}Id(r)}catch(C){e=C,K===r&&r!==null&&(K=r=r.return);continue}break}while(!0)}function Td(){var n=La.current;return La.current=Ea,n===null?Ea:n}function Si(){(X===0||X===3||X===2)&&(X=4),nn===null||!(Ve&268435455)&&!(Za&268435455)||oe(nn,rn)}function Pa(n,e){var r=N;N|=2;var t=Td();(nn!==n||rn!==e)&&(Kn=null,Be(n,e));do try{Rf();break}catch(a){Od(n,a)}while(!0);if(li(),N=r,La.current=t,K!==null)throw Error(w(261));return nn=null,rn=0,X}function Rf(){for(;K!==null;)Pd(K)}function Nf(){for(;K!==null&&!a1();)Pd(K)}function Pd(n){var e=Rd(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?Id(n):K=e,yi.current=null}function Id(n){var e=n;do{var r=e.alternate;if(n=e.return,e.flags&32768){if(r=Lf(r,e),r!==null){r.flags&=32767,K=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{X=6,K=null;return}}else if(r=Ef(r,e,wn),r!==null){K=r;return}if(e=e.sibling,e!==null){K=e;return}K=e=n}while(e!==null);X===0&&(X=5)}function Ne(n,e,r){var t=A,a=In.transition;try{In.transition=null,A=1,Af(n,e,r,t)}finally{In.transition=a,A=t}return null}function Af(n,e,r,t){do fr();while(ue!==null);if(N&6)throw Error(w(327));r=n.finishedWork;var a=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(w(177));n.callbackNode=null,n.callbackPriority=0;var s=r.lanes|r.childLanes;if(m1(n,s),n===nn&&(K=nn=null,rn=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Wt||(Wt=!0,Nd(da,function(){return fr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=In.transition,In.transition=null;var l=A;A=1;var o=N;N|=4,yi.current=null,Tf(n,r),xd(r,n),nf(ll),fa=!!sl,ll=sl=null,n.current=r,Pf(r),s1(),N=o,A=l,In.transition=s}else n.current=r;if(Wt&&(Wt=!1,ue=n,Ta=a),s=n.pendingLanes,s===0&&(_e=null),o1(r.stateNode),yn(n,Y()),e!==null)for(t=n.onRecoverableError,r=0;r<e.length;r++)a=e[r],t(a.value,{componentStack:a.stack,digest:a.digest});if(Oa)throw Oa=!1,n=El,El=null,n;return Ta&1&&n.tag!==0&&fr(),s=n.pendingLanes,s&1?n===Ll?qr++:(qr=0,Ll=n):qr=0,xe(),null}function fr(){if(ue!==null){var n=du(Ta),e=In.transition,r=A;try{if(In.transition=null,A=16>n?16:n,ue===null)var t=!1;else{if(n=ue,ue=null,Ta=0,N&6)throw Error(w(331));var a=N;for(N|=4,S=n.current;S!==null;){var s=S,l=s.child;if(S.flags&16){var o=s.deletions;if(o!==null){for(var i=0;i<o.length;i++){var c=o[i];for(S=c;S!==null;){var u=S;switch(u.tag){case 0:case 11:case 15:Qr(8,u,s)}var p=u.child;if(p!==null)p.return=u,S=p;else for(;S!==null;){u=S;var v=u.sibling,y=u.return;if(Cd(u),u===c){S=null;break}if(v!==null){v.return=y,S=v;break}S=y}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var b=h.sibling;h.sibling=null,h=b}while(h!==null)}}S=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,S=l;else n:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,S=f;break n}S=s.return}}var d=n.current;for(S=d;S!==null;){l=S;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,S=m;else n:for(l=d;S!==null;){if(o=S,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Va(9,o)}}catch(C){W(o,o.return,C)}if(o===l){S=null;break n}var g=o.sibling;if(g!==null){g.return=o.return,S=g;break n}S=o.return}}if(N=a,xe(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(ja,n)}catch{}t=!0}return t}finally{A=r,In.transition=e}}return!1}function nc(n,e,r){e=yr(r,e),e=dd(n,e,1),n=he(n,e,1),e=dn(),n!==null&&(Ct(n,1,e),yn(n,e))}function W(n,e,r){if(n.tag===3)nc(n,n,r);else for(;e!==null;){if(e.tag===3){nc(e,n,r);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(_e===null||!_e.has(t))){n=yr(r,n),n=pd(e,n,1),e=he(e,n,1),n=dn(),e!==null&&(Ct(e,1,n),yn(e,n));break}}e=e.return}}function jf(n,e,r){var t=n.pingCache;t!==null&&t.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&r,nn===n&&(rn&r)===r&&(X===4||X===3&&(rn&130023424)===rn&&500>Y()-wi?Be(n,0):bi|=r),yn(n,e)}function Md(n,e){e===0&&(n.mode&1?(e=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):e=1);var r=dn();n=ee(n,e),n!==null&&(Ct(n,e,r),yn(n,r))}function Hf(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),Md(n,r)}function Df(n,e){var r=0;switch(n.tag){case 13:var t=n.stateNode,a=n.memoizedState;a!==null&&(r=a.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(w(314))}t!==null&&t.delete(e),Md(n,r)}var Rd;Rd=function(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)hn=!0;else{if(!(n.lanes&r)&&!(e.flags&128))return hn=!1,xf(n,e,r);hn=!!(n.flags&131072)}else hn=!1,B&&e.flags&1048576&&Hu(e,ba,e.index);switch(e.lanes=0,e.tag){case 2:var t=e.type;ta(n,e),n=e.pendingProps;var a=vr(e,cn.current);pr(e,r),a=mi(null,e,t,n,a,r);var s=vi();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(t)?(s=!0,ga(e)):s=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ci(e),a.updater=Wa,e.stateNode=a,a._reactInternals=e,vl(e,t,n,r),e=gl(null,e,t,!0,s,r)):(e.tag=0,B&&s&&ri(e),un(null,e,a,r),e=e.child),e;case 16:t=e.elementType;n:{switch(ta(n,e),n=e.pendingProps,a=t._init,t=a(t._payload),e.type=t,a=e.tag=zf(t),n=jn(t,n),a){case 0:e=_l(null,e,t,n,r);break n;case 1:e=Vo(null,e,t,n,r);break n;case 11:e=Uo(null,e,t,n,r);break n;case 14:e=Wo(null,e,t,jn(t.type,n),r);break n}throw Error(w(306,t,""))}return e;case 0:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:jn(t,a),_l(n,e,t,a,r);case 1:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:jn(t,a),Vo(n,e,t,a,r);case 3:n:{if(hd(e),n===null)throw Error(w(387));t=e.pendingProps,s=e.memoizedState,a=s.element,Wu(n,e),ka(e,t,null,r);var l=e.memoizedState;if(t=l.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){a=yr(Error(w(423)),e),e=Zo(n,e,t,r,a);break n}else if(t!==a){a=yr(Error(w(424)),e),e=Zo(n,e,t,r,a);break n}else for(Cn=ve(e.stateNode.containerInfo.firstChild),kn=e,B=!0,Dn=null,r=Fu(e,null,t,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hr(),t===a){e=re(n,e,r);break n}un(n,e,t,r)}e=e.child}return e;case 5:return Vu(e),n===null&&pl(e),t=e.type,a=e.pendingProps,s=n!==null?n.memoizedProps:null,l=a.children,il(t,a)?l=null:s!==null&&il(t,s)&&(e.flags|=32),vd(n,e),un(n,e,l,r),e.child;case 6:return n===null&&pl(e),null;case 13:return _d(n,e,r);case 4:return ui(e,e.stateNode.containerInfo),t=e.pendingProps,n===null?e.child=_r(e,null,t,r):un(n,e,t,r),e.child;case 11:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:jn(t,a),Uo(n,e,t,a,r);case 7:return un(n,e,e.pendingProps,r),e.child;case 8:return un(n,e,e.pendingProps.children,r),e.child;case 12:return un(n,e,e.pendingProps.children,r),e.child;case 10:n:{if(t=e.type._context,a=e.pendingProps,s=e.memoizedProps,l=a.value,j(wa,t._currentValue),t._currentValue=l,s!==null)if(Fn(s.value,l)){if(s.children===a.children&&!_n.current){e=re(n,e,r);break n}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var i=o.firstContext;i!==null;){if(i.context===t){if(s.tag===1){i=qn(-1,r&-r),i.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?i.next=i:(i.next=u.next,u.next=i),c.pending=i}}s.lanes|=r,i=s.alternate,i!==null&&(i.lanes|=r),fl(s.return,r,e),o.lanes|=r;break}i=i.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(w(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),fl(l,r,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}un(n,e,a.children,r),e=e.child}return e;case 9:return a=e.type,t=e.pendingProps.children,pr(e,r),a=Mn(a),t=t(a),e.flags|=1,un(n,e,t,r),e.child;case 14:return t=e.type,a=jn(t,e.pendingProps),a=jn(t.type,a),Wo(n,e,t,a,r);case 15:return fd(n,e,e.type,e.pendingProps,r);case 17:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:jn(t,a),ta(n,e),e.tag=1,gn(t)?(n=!0,ga(e)):n=!1,pr(e,r),ud(e,t,a),vl(e,t,a,r),gl(null,e,t,!0,n,r);case 19:return gd(n,e,r);case 22:return md(n,e,r)}throw Error(w(156,e.tag))};function Nd(n,e){return iu(n,e)}function Bf(n,e,r,t){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,r,t){return new Bf(n,e,r,t)}function xi(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zf(n){if(typeof n=="function")return xi(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Vl)return 11;if(n===Zl)return 14}return 2}function ye(n,e){var r=n.alternate;return r===null?(r=Pn(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function la(n,e,r,t,a,s){var l=2;if(t=n,typeof n=="function")xi(n)&&(l=1);else if(typeof n=="string")l=5;else n:switch(n){case Xe:return ze(r.children,a,s,e);case Wl:l=8,a|=8;break;case Bs:return n=Pn(12,r,e,a|2),n.elementType=Bs,n.lanes=s,n;case zs:return n=Pn(13,r,e,a),n.elementType=zs,n.lanes=s,n;case Fs:return n=Pn(19,r,e,a),n.elementType=Fs,n.lanes=s,n;case Vc:return Ya(r,a,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Uc:l=10;break n;case Wc:l=9;break n;case Vl:l=11;break n;case Zl:l=14;break n;case se:l=16,t=null;break n}throw Error(w(130,n==null?n:typeof n,""))}return e=Pn(l,r,e,a),e.elementType=n,e.type=t,e.lanes=s,e}function ze(n,e,r,t){return n=Pn(7,n,t,e),n.lanes=r,n}function Ya(n,e,r,t){return n=Pn(22,n,t,e),n.elementType=Vc,n.lanes=r,n.stateNode={isHidden:!1},n}function Ms(n,e,r){return n=Pn(6,n,null,e),n.lanes=r,n}function Rs(n,e,r){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ff(n,e,r,t,a){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fs(0),this.expirationTimes=fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ei(n,e,r,t,a,s,l,o,i){return n=new Ff(n,e,r,o,i),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ci(s),n}function Uf(n,e,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qe,key:t==null?null:""+t,children:n,containerInfo:e,implementation:r}}function Ad(n){if(!n)return Ce;n=n._reactInternals;n:{if(Ge(n)!==n||n.tag!==1)throw Error(w(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(w(171))}if(n.tag===1){var r=n.type;if(gn(r))return Au(n,r,e)}return e}function jd(n,e,r,t,a,s,l,o,i){return n=Ei(r,t,!0,n,a,s,l,o,i),n.context=Ad(null),r=n.current,t=dn(),a=ge(r),s=qn(t,a),s.callback=e??null,he(r,s,a),n.current.lanes=a,Ct(n,a,t),yn(n,t),n}function Ga(n,e,r,t){var a=e.current,s=dn(),l=ge(a);return r=Ad(r),e.context===null?e.context=r:e.pendingContext=r,e=qn(s,l),e.payload={element:n},t=t===void 0?null:t,t!==null&&(e.callback=t),n=he(a,e,l),n!==null&&(zn(n,a,l,s),na(n,a,l)),l}function Ia(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ec(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function Li(n,e){ec(n,e),(n=n.alternate)&&ec(n,e)}function Wf(){return null}var Hd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Oi(n){this._internalRoot=n}Ka.prototype.render=Oi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(w(409));Ga(n,e,null,null)};Ka.prototype.unmount=Oi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ze(function(){Ga(null,n,null,null)}),e[ne]=null}};function Ka(n){this._internalRoot=n}Ka.prototype.unstable_scheduleHydration=function(n){if(n){var e=mu();n={blockedOn:null,target:n,priority:e};for(var r=0;r<ie.length&&e!==0&&e<ie[r].priority;r++);ie.splice(r,0,n),r===0&&hu(n)}};function Ti(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function rc(){}function Vf(n,e,r,t,a){if(a){if(typeof t=="function"){var s=t;t=function(){var c=Ia(l);s.call(c)}}var l=jd(e,t,n,0,null,!1,!1,"",rc);return n._reactRootContainer=l,n[ne]=l.current,ct(n.nodeType===8?n.parentNode:n),Ze(),l}for(;a=n.lastChild;)n.removeChild(a);if(typeof t=="function"){var o=t;t=function(){var c=Ia(i);o.call(c)}}var i=Ei(n,0,!1,null,null,!1,!1,"",rc);return n._reactRootContainer=i,n[ne]=i.current,ct(n.nodeType===8?n.parentNode:n),Ze(function(){Ga(e,i,r,t)}),i}function Qa(n,e,r,t,a){var s=r._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var o=a;a=function(){var i=Ia(l);o.call(i)}}Ga(e,l,n,a)}else l=Vf(r,e,n,a,t);return Ia(l)}pu=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var r=Fr(e.pendingLanes);r!==0&&(Kl(e,r|1),yn(e,Y()),!(N&6)&&(br=Y()+500,xe()))}break;case 13:Ze(function(){var t=ee(n,1);if(t!==null){var a=dn();zn(t,n,1,a)}}),Li(n,1)}};$l=function(n){if(n.tag===13){var e=ee(n,134217728);if(e!==null){var r=dn();zn(e,n,134217728,r)}Li(n,134217728)}};fu=function(n){if(n.tag===13){var e=ge(n),r=ee(n,e);if(r!==null){var t=dn();zn(r,n,e,t)}Li(n,e)}};mu=function(){return A};vu=function(n,e){var r=A;try{return A=n,e()}finally{A=r}};Xs=function(n,e,r){switch(e){case"input":if(Vs(n,r),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var t=r[e];if(t!==n&&t.form===n.form){var a=za(t);if(!a)throw Error(w(90));Yc(t),Vs(t,a)}}}break;case"textarea":Kc(n,r);break;case"select":e=r.value,e!=null&&or(n,!!r.multiple,e,!1)}};eu=Ci;ru=Ze;var Zf={usingClientEntryPoint:!1,Events:[St,er,za,Jc,nu,Ci]},jr={findFiberByHostInstance:je,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yf={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=su(n),n===null?null:n.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vt.isDisabled&&Vt.supportsFiber)try{ja=Vt.inject(Yf),Yn=Vt}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf;xn.createPortal=function(n,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ti(e))throw Error(w(200));return Uf(n,e,null,r)};xn.createRoot=function(n,e){if(!Ti(n))throw Error(w(299));var r=!1,t="",a=Hd;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Ei(n,1,!1,null,null,r,!1,t,a),n[ne]=e.current,ct(n.nodeType===8?n.parentNode:n),new Oi(e)};xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(w(188)):(n=Object.keys(n).join(","),Error(w(268,n)));return n=su(e),n=n===null?null:n.stateNode,n};xn.flushSync=function(n){return Ze(n)};xn.hydrate=function(n,e,r){if(!$a(e))throw Error(w(200));return Qa(null,n,e,!0,r)};xn.hydrateRoot=function(n,e,r){if(!Ti(n))throw Error(w(405));var t=r!=null&&r.hydratedSources||null,a=!1,s="",l=Hd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=jd(e,null,n,1,r??null,a,!1,s,l),n[ne]=e.current,ct(n),t)for(n=0;n<t.length;n++)r=t[n],a=r._getVersion,a=a(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,a]:e.mutableSourceEagerHydrationData.push(r,a);return new Ka(e)};xn.render=function(n,e,r){if(!$a(e))throw Error(w(200));return Qa(null,n,e,!1,r)};xn.unmountComponentAtNode=function(n){if(!$a(n))throw Error(w(40));return n._reactRootContainer?(Ze(function(){Qa(null,null,n,!1,function(){n._reactRootContainer=null,n[ne]=null})}),!0):!1};xn.unstable_batchedUpdates=Ci;xn.unstable_renderSubtreeIntoContainer=function(n,e,r,t){if(!$a(r))throw Error(w(200));if(n==null||n._reactInternals===void 0)throw Error(w(38));return Qa(n,e,r,!1,t)};xn.version="18.3.1-next-f1338f8080-20240426";function Dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dd)}catch(n){console.error(n)}}Dd(),Dc.exports=xn;var Gf=Dc.exports,Bd,tc=Gf;Bd=tc.createRoot,tc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gt(){return gt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},gt.apply(this,arguments)}var de;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(de||(de={}));const ac="popstate";function Kf(n){n===void 0&&(n={});function e(t,a){let{pathname:s,search:l,hash:o}=t.location;return Pl("",{pathname:s,search:l,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(t,a){return typeof a=="string"?a:Ma(a)}return Qf(e,r,null,n)}function G(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Pi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $f(){return Math.random().toString(36).substr(2,8)}function sc(n,e){return{usr:n.state,key:n.key,idx:e}}function Pl(n,e,r,t){return r===void 0&&(r=null),gt({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Sr(e):e,{state:r,key:e&&e.key||t||$f()})}function Ma(n){let{pathname:e="/",search:r="",hash:t=""}=n;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function Sr(n){let e={};if(n){let r=n.indexOf("#");r>=0&&(e.hash=n.substr(r),n=n.substr(0,r));let t=n.indexOf("?");t>=0&&(e.search=n.substr(t),n=n.substr(0,t)),n&&(e.pathname=n)}return e}function Qf(n,e,r,t){t===void 0&&(t={});let{window:a=document.defaultView,v5Compat:s=!1}=t,l=a.history,o=de.Pop,i=null,c=u();c==null&&(c=0,l.replaceState(gt({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function p(){o=de.Pop;let b=u(),f=b==null?null:b-c;c=b,i&&i({action:o,location:h.location,delta:f})}function v(b,f){o=de.Push;let d=Pl(h.location,b,f);c=u()+1;let m=sc(d,c),g=h.createHref(d);try{l.pushState(m,"",g)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(g)}s&&i&&i({action:o,location:h.location,delta:1})}function y(b,f){o=de.Replace;let d=Pl(h.location,b,f);c=u();let m=sc(d,c),g=h.createHref(d);l.replaceState(m,"",g),s&&i&&i({action:o,location:h.location,delta:0})}function _(b){let f=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof b=="string"?b:Ma(b);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let h={get action(){return o},get location(){return n(a,l)},listen(b){if(i)throw new Error("A history only accepts one active listener");return a.addEventListener(ac,p),i=b,()=>{a.removeEventListener(ac,p),i=null}},createHref(b){return e(a,b)},createURL:_,encodeLocation(b){let f=_(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:v,replace:y,go(b){return l.go(b)}};return h}var lc;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(lc||(lc={}));function Xf(n,e,r){return r===void 0&&(r="/"),qf(n,e,r)}function qf(n,e,r,t){let a=typeof e=="string"?Sr(e):e,s=Ii(a.pathname||"/",r);if(s==null)return null;let l=zd(n);Jf(l);let o=null;for(let i=0;o==null&&i<l.length;++i){let c=dm(s);o=om(l[i],c)}return o}function zd(n,e,r,t){e===void 0&&(e=[]),r===void 0&&(r=[]),t===void 0&&(t="");let a=(s,l,o)=>{let i={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};i.relativePath.startsWith("/")&&(G(i.relativePath.startsWith(t),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(t.length));let c=be([t,i.relativePath]),u=r.concat(i);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zd(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:lm(c,s.index),routesMeta:u})};return n.forEach((s,l)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))a(s,l);else for(let i of Fd(s.path))a(s,l,i)}),e}function Fd(n){let e=n.split("/");if(e.length===0)return[];let[r,...t]=e,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(t.length===0)return a?[s,""]:[s];let l=Fd(t.join("/")),o=[];return o.push(...l.map(i=>i===""?s:[s,i].join("/"))),a&&o.push(...l),o.map(i=>n.startsWith("/")&&i===""?"/":i)}function Jf(n){n.sort((e,r)=>e.score!==r.score?r.score-e.score:im(e.routesMeta.map(t=>t.childrenIndex),r.routesMeta.map(t=>t.childrenIndex)))}const nm=/^:[\w-]+$/,em=3,rm=2,tm=1,am=10,sm=-2,ic=n=>n==="*";function lm(n,e){let r=n.split("/"),t=r.length;return r.some(ic)&&(t+=sm),e&&(t+=rm),r.filter(a=>!ic(a)).reduce((a,s)=>a+(nm.test(s)?em:s===""?tm:am),t)}function im(n,e){return n.length===e.length&&n.slice(0,-1).every((t,a)=>t===e[a])?n[n.length-1]-e[e.length-1]:0}function om(n,e,r){let{routesMeta:t}=n,a={},s="/",l=[];for(let o=0;o<t.length;++o){let i=t[o],c=o===t.length-1,u=s==="/"?e:e.slice(s.length)||"/",p=cm({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u),v=i.route;if(!p)return null;Object.assign(a,p.params),l.push({params:a,pathname:be([s,p.pathname]),pathnameBase:hm(be([s,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(s=be([s,p.pathnameBase]))}return l}function cm(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,t]=um(n.path,n.caseSensitive,n.end),a=e.match(r);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:t.reduce((c,u,p)=>{let{paramName:v,isOptional:y}=u;if(v==="*"){let h=o[p]||"";l=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}const _=o[p];return y&&!_?c[v]=void 0:c[v]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:l,pattern:n}}function um(n,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),Pi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let t=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,i)=>(t.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(t.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),t]}function dm(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pi(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ii(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,t=n.charAt(r);return t&&t!=="/"?null:n.slice(r)||"/"}const pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fm=n=>pm.test(n);function mm(n,e){e===void 0&&(e="/");let{pathname:r,search:t="",hash:a=""}=typeof n=="string"?Sr(n):n,s;if(r)if(fm(r))s=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),Pi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?s=oc(r.substring(1),"/"):s=oc(r,e)}else s=e;return{pathname:s,search:_m(t),hash:gm(a)}}function oc(n,e){let r=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ns(n,e,r,t){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vm(n){return n.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Mi(n,e){let r=vm(n);return e?r.map((t,a)=>a===r.length-1?t.pathname:t.pathnameBase):r.map(t=>t.pathnameBase)}function Ri(n,e,r,t){t===void 0&&(t=!1);let a;typeof n=="string"?a=Sr(n):(a=gt({},n),G(!a.pathname||!a.pathname.includes("?"),Ns("?","pathname","search",a)),G(!a.pathname||!a.pathname.includes("#"),Ns("#","pathname","hash",a)),G(!a.search||!a.search.includes("#"),Ns("#","search","hash",a)));let s=n===""||a.pathname==="",l=s?"/":a.pathname,o;if(l==null)o=r;else{let p=e.length-1;if(!t&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}o=p>=0?e[p]:"/"}let i=mm(a,o),c=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&r.endsWith("/");return!i.pathname.endsWith("/")&&(c||u)&&(i.pathname+="/"),i}const be=n=>n.join("/").replace(/\/\/+/g,"/"),hm=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_m=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,gm=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ym(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Ud=["post","put","patch","delete"];new Set(Ud);const bm=["get",...Ud];new Set(bm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yt(){return yt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},yt.apply(this,arguments)}const Ni=k.createContext(null),wm=k.createContext(null),Ee=k.createContext(null),Xa=k.createContext(null),Le=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Wd=k.createContext(null);function Cm(n,e){let{relative:r}=e===void 0?{}:e;xr()||G(!1);let{basename:t,navigator:a}=k.useContext(Ee),{hash:s,pathname:l,search:o}=Yd(n,{relative:r}),i=l;return t!=="/"&&(i=l==="/"?t:be([t,l])),a.createHref({pathname:i,search:o,hash:s})}function xr(){return k.useContext(Xa)!=null}function Er(){return xr()||G(!1),k.useContext(Xa).location}function Vd(n){k.useContext(Ee).static||k.useLayoutEffect(n)}function Zd(){let{isDataRoute:n}=k.useContext(Le);return n?Am():km()}function km(){xr()||G(!1);let n=k.useContext(Ni),{basename:e,future:r,navigator:t}=k.useContext(Ee),{matches:a}=k.useContext(Le),{pathname:s}=Er(),l=JSON.stringify(Mi(a,r.v7_relativeSplatPath)),o=k.useRef(!1);return Vd(()=>{o.current=!0}),k.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){t.go(c);return}let p=Ri(c,JSON.parse(l),s,u.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:be([e,p.pathname])),(u.replace?t.replace:t.push)(p,u.state,u)},[e,t,l,s,n])}function Yd(n,e){let{relative:r}=e===void 0?{}:e,{future:t}=k.useContext(Ee),{matches:a}=k.useContext(Le),{pathname:s}=Er(),l=JSON.stringify(Mi(a,t.v7_relativeSplatPath));return k.useMemo(()=>Ri(n,JSON.parse(l),s,r==="path"),[n,l,s,r])}function Sm(n,e){return xm(n,e)}function xm(n,e,r,t){xr()||G(!1);let{navigator:a}=k.useContext(Ee),{matches:s}=k.useContext(Le),l=s[s.length-1],o=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let c=Er(),u;if(e){var p;let b=typeof e=="string"?Sr(e):e;i==="/"||(p=b.pathname)!=null&&p.startsWith(i)||G(!1),u=b}else u=c;let v=u.pathname||"/",y=v;if(i!=="/"){let b=i.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(b.length).join("/")}let _=Xf(n,{pathname:y}),h=Pm(_&&_.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:be([i,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?i:be([i,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,r,t);return e&&h?k.createElement(Xa.Provider,{value:{location:yt({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:de.Pop}},h):h}function Em(){let n=Nm(),e=ym(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),r?k.createElement("pre",{style:a},r):null,null)}const Lm=k.createElement(Em,null);class Om extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?k.createElement(Le.Provider,{value:this.props.routeContext},k.createElement(Wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tm(n){let{routeContext:e,match:r,children:t}=n,a=k.useContext(Ni);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(Le.Provider,{value:e},t)}function Pm(n,e,r,t){var a;if(e===void 0&&(e=[]),r===void 0&&(r=null),t===void 0&&(t=null),n==null){var s;if(!r)return null;if(r.errors)n=r.matches;else if((s=t)!=null&&s.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let l=n,o=(a=r)==null?void 0:a.errors;if(o!=null){let u=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);u>=0||G(!1),l=l.slice(0,Math.min(l.length,u+1))}let i=!1,c=-1;if(r&&t&&t.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=u),p.route.id){let{loaderData:v,errors:y}=r,_=p.route.loader&&v[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||_){i=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((u,p,v)=>{let y,_=!1,h=null,b=null;r&&(y=o&&p.route.id?o[p.route.id]:void 0,h=p.route.errorElement||Lm,i&&(c<0&&v===0?(jm("route-fallback"),_=!0,b=null):c===v&&(_=!0,b=p.route.hydrateFallbackElement||null)));let f=e.concat(l.slice(0,v+1)),d=()=>{let m;return y?m=h:_?m=b:p.route.Component?m=k.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=u,k.createElement(Tm,{match:p,routeContext:{outlet:u,matches:f,isDataRoute:r!=null},children:m})};return r&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?k.createElement(Om,{location:r.location,revalidation:r.revalidation,component:h,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Gd=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Gd||{}),Kd=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Kd||{});function Im(n){let e=k.useContext(Ni);return e||G(!1),e}function Mm(n){let e=k.useContext(wm);return e||G(!1),e}function Rm(n){let e=k.useContext(Le);return e||G(!1),e}function $d(n){let e=Rm(),r=e.matches[e.matches.length-1];return r.route.id||G(!1),r.route.id}function Nm(){var n;let e=k.useContext(Wd),r=Mm(),t=$d();return e!==void 0?e:(n=r.errors)==null?void 0:n[t]}function Am(){let{router:n}=Im(Gd.UseNavigateStable),e=$d(Kd.UseNavigateStable),r=k.useRef(!1);return Vd(()=>{r.current=!0}),k.useCallback(function(a,s){s===void 0&&(s={}),r.current&&(typeof a=="number"?n.navigate(a):n.navigate(a,yt({fromRouteId:e},s)))},[n,e])}const cc={};function jm(n,e,r){cc[n]||(cc[n]=!0)}function Hm(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function uc(n){let{to:e,replace:r,state:t,relative:a}=n;xr()||G(!1);let{future:s,static:l}=k.useContext(Ee),{matches:o}=k.useContext(Le),{pathname:i}=Er(),c=Zd(),u=Ri(e,Mi(o,s.v7_relativeSplatPath),i,a==="path"),p=JSON.stringify(u);return k.useEffect(()=>c(JSON.parse(p),{replace:r,state:t,relative:a}),[c,p,a,r,t]),null}function ia(n){G(!1)}function Dm(n){let{basename:e="/",children:r=null,location:t,navigationType:a=de.Pop,navigator:s,static:l=!1,future:o}=n;xr()&&G(!1);let i=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:i,navigator:s,static:l,future:yt({v7_relativeSplatPath:!1},o)}),[i,o,s,l]);typeof t=="string"&&(t=Sr(t));let{pathname:u="/",search:p="",hash:v="",state:y=null,key:_="default"}=t,h=k.useMemo(()=>{let b=Ii(u,i);return b==null?null:{location:{pathname:b,search:p,hash:v,state:y,key:_},navigationType:a}},[i,u,p,v,y,_,a]);return h==null?null:k.createElement(Ee.Provider,{value:c},k.createElement(Xa.Provider,{children:r,value:h}))}function Bm(n){let{children:e,location:r}=n;return Sm(Il(e),r)}new Promise(()=>{});function Il(n,e){e===void 0&&(e=[]);let r=[];return k.Children.forEach(n,(t,a)=>{if(!k.isValidElement(t))return;let s=[...e,a];if(t.type===k.Fragment){r.push.apply(r,Il(t.props.children,s));return}t.type!==ia&&G(!1),!t.props.index||!t.props.children||G(!1);let l={id:t.props.id||s.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=Il(t.props.children,s)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},Ml.apply(this,arguments)}function zm(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,s;for(s=0;s<t.length;s++)a=t[s],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function Fm(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Um(n,e){return n.button===0&&(!e||e==="_self")&&!Fm(n)}const Wm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vm="6";try{window.__reactRouterVersion=Vm}catch{}const Zm="startTransition",dc=Ap[Zm];function Ym(n){let{basename:e,children:r,future:t,window:a}=n,s=k.useRef();s.current==null&&(s.current=Kf({window:a,v5Compat:!0}));let l=s.current,[o,i]=k.useState({action:l.action,location:l.location}),{v7_startTransition:c}=t||{},u=k.useCallback(p=>{c&&dc?dc(()=>i(p)):i(p)},[i,c]);return k.useLayoutEffect(()=>l.listen(u),[l,u]),k.useEffect(()=>Hm(t),[t]),k.createElement(Dm,{basename:e,children:r,location:o.location,navigationType:o.action,navigator:l,future:t})}const Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$m=k.forwardRef(function(e,r){let{onClick:t,relative:a,reloadDocument:s,replace:l,state:o,target:i,to:c,preventScrollReset:u,viewTransition:p}=e,v=zm(e,Wm),{basename:y}=k.useContext(Ee),_,h=!1;if(typeof c=="string"&&Km.test(c)&&(_=c,Gm))try{let m=new URL(window.location.href),g=c.startsWith("//")?new URL(m.protocol+c):new URL(c),C=Ii(g.pathname,y);g.origin===m.origin&&C!=null?c=C+g.search+g.hash:h=!0}catch{}let b=Cm(c,{relative:a}),f=Qm(c,{replace:l,state:o,target:i,preventScrollReset:u,relative:a,viewTransition:p});function d(m){t&&t(m),m.defaultPrevented||f(m)}return k.createElement("a",Ml({},v,{href:_||b,onClick:h||s?t:d,ref:r,target:i}))});var pc;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var fc;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(fc||(fc={}));function Qm(n,e){let{target:r,replace:t,state:a,preventScrollReset:s,relative:l,viewTransition:o}=e===void 0?{}:e,i=Zd(),c=Er(),u=Yd(n,{relative:l});return k.useCallback(p=>{if(Um(p,r)){p.preventDefault();let v=t!==void 0?t:Ma(c)===Ma(u);i(n,{replace:v,state:a,preventScrollReset:s,relative:l,viewTransition:o})}},[c,i,u,t,a,r,n,s,l,o])}var Ra={},Ai={},ji={},Oe={},Hi={},Di={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Doctype=n.CDATA=n.Tag=n.Style=n.Script=n.Comment=n.Directive=n.Text=n.Root=n.isTag=n.ElementType=void 0;var e;(function(t){t.Root="root",t.Text="text",t.Directive="directive",t.Comment="comment",t.Script="script",t.Style="style",t.Tag="tag",t.CDATA="cdata",t.Doctype="doctype"})(e=n.ElementType||(n.ElementType={}));function r(t){return t.type===e.Tag||t.type===e.Script||t.type===e.Style}n.isTag=r,n.Root=e.Root,n.Text=e.Text,n.Directive=e.Directive,n.Comment=e.Comment,n.Script=e.Script,n.Style=e.Style,n.Tag=e.Tag,n.CDATA=e.CDATA,n.Doctype=e.Doctype})(Di);var I={},Te=$&&$.__extends||function(){var n=function(e,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},n(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");n(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}}(),Jr=$&&$.__assign||function(){return Jr=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},Jr.apply(this,arguments)};Object.defineProperty(I,"__esModule",{value:!0});I.cloneNode=I.hasChildren=I.isDocument=I.isDirective=I.isComment=I.isText=I.isCDATA=I.isTag=I.Element=I.Document=I.CDATA=I.NodeWithChildren=I.ProcessingInstruction=I.Comment=I.Text=I.DataNode=I.Node=void 0;var bn=Di,Bi=function(){function n(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(n.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),n.prototype.cloneNode=function(e){return e===void 0&&(e=!1),zi(this,e)},n}();I.Node=Bi;var qa=function(n){Te(e,n);function e(r){var t=n.call(this)||this;return t.data=r,t}return Object.defineProperty(e.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),e}(Bi);I.DataNode=qa;var Qd=function(n){Te(e,n);function e(){var r=n!==null&&n.apply(this,arguments)||this;return r.type=bn.ElementType.Text,r}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),e}(qa);I.Text=Qd;var Xd=function(n){Te(e,n);function e(){var r=n!==null&&n.apply(this,arguments)||this;return r.type=bn.ElementType.Comment,r}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),e}(qa);I.Comment=Xd;var qd=function(n){Te(e,n);function e(r,t){var a=n.call(this,t)||this;return a.name=r,a.type=bn.ElementType.Directive,a}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),e}(qa);I.ProcessingInstruction=qd;var Ja=function(n){Te(e,n);function e(r){var t=n.call(this)||this;return t.children=r,t}return Object.defineProperty(e.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),e}(Bi);I.NodeWithChildren=Ja;var Jd=function(n){Te(e,n);function e(){var r=n!==null&&n.apply(this,arguments)||this;return r.type=bn.ElementType.CDATA,r}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),e}(Ja);I.CDATA=Jd;var np=function(n){Te(e,n);function e(){var r=n!==null&&n.apply(this,arguments)||this;return r.type=bn.ElementType.Root,r}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),e}(Ja);I.Document=np;var ep=function(n){Te(e,n);function e(r,t,a,s){a===void 0&&(a=[]),s===void 0&&(s=r==="script"?bn.ElementType.Script:r==="style"?bn.ElementType.Style:bn.ElementType.Tag);var l=n.call(this,a)||this;return l.name=r,l.attribs=t,l.type=s,l}return Object.defineProperty(e.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(t){var a,s;return{name:t,value:r.attribs[t],namespace:(a=r["x-attribsNamespace"])===null||a===void 0?void 0:a[t],prefix:(s=r["x-attribsPrefix"])===null||s===void 0?void 0:s[t]}})},enumerable:!1,configurable:!0}),e}(Ja);I.Element=ep;function rp(n){return(0,bn.isTag)(n)}I.isTag=rp;function tp(n){return n.type===bn.ElementType.CDATA}I.isCDATA=tp;function ap(n){return n.type===bn.ElementType.Text}I.isText=ap;function sp(n){return n.type===bn.ElementType.Comment}I.isComment=sp;function lp(n){return n.type===bn.ElementType.Directive}I.isDirective=lp;function ip(n){return n.type===bn.ElementType.Root}I.isDocument=ip;function Xm(n){return Object.prototype.hasOwnProperty.call(n,"children")}I.hasChildren=Xm;function zi(n,e){e===void 0&&(e=!1);var r;if(ap(n))r=new Qd(n.data);else if(sp(n))r=new Xd(n.data);else if(rp(n)){var t=e?As(n.children):[],a=new ep(n.name,Jr({},n.attribs),t);t.forEach(function(i){return i.parent=a}),n.namespace!=null&&(a.namespace=n.namespace),n["x-attribsNamespace"]&&(a["x-attribsNamespace"]=Jr({},n["x-attribsNamespace"])),n["x-attribsPrefix"]&&(a["x-attribsPrefix"]=Jr({},n["x-attribsPrefix"])),r=a}else if(tp(n)){var t=e?As(n.children):[],s=new Jd(t);t.forEach(function(c){return c.parent=s}),r=s}else if(ip(n)){var t=e?As(n.children):[],l=new np(t);t.forEach(function(c){return c.parent=l}),n["x-mode"]&&(l["x-mode"]=n["x-mode"]),r=l}else if(lp(n)){var o=new qd(n.name,n.data);n["x-name"]!=null&&(o["x-name"]=n["x-name"],o["x-publicId"]=n["x-publicId"],o["x-systemId"]=n["x-systemId"]),r=o}else throw new Error("Not implemented yet: ".concat(n.type));return r.startIndex=n.startIndex,r.endIndex=n.endIndex,n.sourceCodeLocation!=null&&(r.sourceCodeLocation=n.sourceCodeLocation),r}I.cloneNode=zi;function As(n){for(var e=n.map(function(t){return zi(t,!0)}),r=1;r<e.length;r++)e[r].prev=e[r-1],e[r-1].next=e[r];return e}(function(n){var e=$&&$.__createBinding||(Object.create?function(o,i,c,u){u===void 0&&(u=c);var p=Object.getOwnPropertyDescriptor(i,c);(!p||("get"in p?!i.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return i[c]}}),Object.defineProperty(o,u,p)}:function(o,i,c,u){u===void 0&&(u=c),o[u]=i[c]}),r=$&&$.__exportStar||function(o,i){for(var c in o)c!=="default"&&!Object.prototype.hasOwnProperty.call(i,c)&&e(i,o,c)};Object.defineProperty(n,"__esModule",{value:!0}),n.DomHandler=void 0;var t=Di,a=I;r(I,n);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},l=function(){function o(i,c,u){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof c=="function"&&(u=c,c=s),typeof i=="object"&&(c=i,i=void 0),this.callback=i??null,this.options=c??s,this.elementCB=u??null}return o.prototype.onparserinit=function(i){this.parser=i},o.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},o.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},o.prototype.onerror=function(i){this.handleCallback(i)},o.prototype.onclosetag=function(){this.lastNode=null;var i=this.tagStack.pop();this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(i)},o.prototype.onopentag=function(i,c){var u=this.options.xmlMode?t.ElementType.Tag:void 0,p=new a.Element(i,c,void 0,u);this.addNode(p),this.tagStack.push(p)},o.prototype.ontext=function(i){var c=this.lastNode;if(c&&c.type===t.ElementType.Text)c.data+=i,this.options.withEndIndices&&(c.endIndex=this.parser.endIndex);else{var u=new a.Text(i);this.addNode(u),this.lastNode=u}},o.prototype.oncomment=function(i){if(this.lastNode&&this.lastNode.type===t.ElementType.Comment){this.lastNode.data+=i;return}var c=new a.Comment(i);this.addNode(c),this.lastNode=c},o.prototype.oncommentend=function(){this.lastNode=null},o.prototype.oncdatastart=function(){var i=new a.Text(""),c=new a.CDATA([i]);this.addNode(c),i.parent=c,this.lastNode=i},o.prototype.oncdataend=function(){this.lastNode=null},o.prototype.onprocessinginstruction=function(i,c){var u=new a.ProcessingInstruction(i,c);this.addNode(u)},o.prototype.handleCallback=function(i){if(typeof this.callback=="function")this.callback(i,this.dom);else if(i)throw i},o.prototype.addNode=function(i){var c=this.tagStack[this.tagStack.length-1],u=c.children[c.children.length-1];this.options.withStartIndices&&(i.startIndex=this.parser.startIndex),this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),c.children.push(i),u&&(i.prev=u,u.next=i),i.parent=c,this.lastNode=null},o}();n.DomHandler=l,n.default=l})(Hi);var op={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.CARRIAGE_RETURN_PLACEHOLDER_REGEX=n.CARRIAGE_RETURN_PLACEHOLDER=n.CARRIAGE_RETURN_REGEX=n.CARRIAGE_RETURN=n.CASE_SENSITIVE_TAG_NAMES_MAP=n.CASE_SENSITIVE_TAG_NAMES=void 0,n.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],n.CASE_SENSITIVE_TAG_NAMES_MAP=n.CASE_SENSITIVE_TAG_NAMES.reduce(function(e,r){return e[r.toLowerCase()]=r,e},{}),n.CARRIAGE_RETURN="\r",n.CARRIAGE_RETURN_REGEX=new RegExp(n.CARRIAGE_RETURN,"g"),n.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(),"__"),n.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(n.CARRIAGE_RETURN_PLACEHOLDER,"g")})(op);Object.defineProperty(Oe,"__esModule",{value:!0});Oe.formatAttributes=cp;Oe.hasOpenTag=nv;Oe.escapeSpecialCharacters=ev;Oe.revertEscapedCharacters=up;Oe.formatDOM=dp;var Zt=Hi,bt=op;function qm(n){return bt.CASE_SENSITIVE_TAG_NAMES_MAP[n]}function cp(n){for(var e={},r=0,t=n.length;r<t;r++){var a=n[r];e[a.name]=a.value}return e}function Jm(n){n=n.toLowerCase();var e=qm(n);return e||n}function nv(n,e){var r="<"+e,t=n.toLowerCase().indexOf(r);if(t===-1)return!1;var a=n[t+r.length];return a===">"||a===" "||a==="	"||a===`
`||a==="\r"||a==="/"}function ev(n){return n.replace(bt.CARRIAGE_RETURN_REGEX,bt.CARRIAGE_RETURN_PLACEHOLDER)}function up(n){return n.replace(bt.CARRIAGE_RETURN_PLACEHOLDER_REGEX,bt.CARRIAGE_RETURN)}function dp(n,e,r){var t,a,s,l;e===void 0&&(e=null);for(var o=[],i,c=0,u=n.length;c<u;c++){var p=n[c];switch(p.nodeType){case 1:{var v=Jm(p.nodeName);i=new Zt.Element(v,cp(p.attributes)),i.children=dp(v==="template"?p.content.childNodes:p.childNodes,i);break}case 3:i=new Zt.Text(up((t=p.nodeValue)!==null&&t!==void 0?t:""));break;case 8:i=new Zt.Comment((a=p.nodeValue)!==null&&a!==void 0?a:"");break;default:continue}var y=(s=o[c-1])!==null&&s!==void 0?s:null;y&&(y.next=i),i.parent=e,i.prev=y,i.next=null,o.push(i)}return r&&(i=new Zt.ProcessingInstruction(r.substring(0,r.indexOf(" ")).toLowerCase(),r),i.next=(l=o[0])!==null&&l!==void 0?l:null,i.parent=e,o.unshift(i),o[1]&&(o[1].prev=o[0])),o}Object.defineProperty(ji,"__esModule",{value:!0});ji.default=sv;var Hr=Oe,mc="html",Yt="head",$e="body",rv=/<([a-zA-Z]+[0-9]?)/,Na=function(n,e){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Rl=function(n,e){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},vc=typeof window=="object"&&window.DOMParser;if(typeof vc=="function"){var tv=new vc,av="text/html";Rl=function(n,e){return e&&(n="<".concat(e,">").concat(n,"</").concat(e,">")),tv.parseFromString(n,av)},Na=Rl}if(typeof document=="object"&&document.implementation){var Gt=document.implementation.createHTMLDocument();Na=function(n,e){if(e){var r=Gt.documentElement.querySelector(e);return r&&(r.innerHTML=n),Gt}return Gt.documentElement.innerHTML=n,Gt}}var Kt=typeof document=="object"&&document.createElement("template"),Nl;Kt&&Kt.content&&(Nl=function(n){return Kt.innerHTML=n,Kt.content.childNodes});var hc=function(){return document.createDocumentFragment().childNodes};function sv(n){var e,r,t,a,s,l;n=(0,Hr.escapeSpecialCharacters)(n);var o=rv.exec(n),i=(e=o==null?void 0:o[1])===null||e===void 0?void 0:e.toLowerCase();switch(i){case mc:{var c=Rl(n);if(!(0,Hr.hasOpenTag)(n,Yt)){var u=c.querySelector(Yt);(r=u==null?void 0:u.parentNode)===null||r===void 0||r.removeChild(u)}if(!(0,Hr.hasOpenTag)(n,$e)){var u=c.querySelector($e);(t=u==null?void 0:u.parentNode)===null||t===void 0||t.removeChild(u)}return c.querySelectorAll(mc)}case Yt:case $e:{var p=Na(n).querySelectorAll(i);return(0,Hr.hasOpenTag)(n,$e)&&(0,Hr.hasOpenTag)(n,Yt)?(s=(a=p[0].parentNode)===null||a===void 0?void 0:a.childNodes)!==null&&s!==void 0?s:hc():p}default:{if(Nl)return Nl(n);var u=Na(n,$e).querySelector($e);return(l=u==null?void 0:u.childNodes)!==null&&l!==void 0?l:hc()}}}var lv=$&&$.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ai,"__esModule",{value:!0});Ai.default=uv;var iv=lv(ji),ov=Oe,cv=/<(![a-zA-Z\s]+)>/;function uv(n){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];var e=cv.exec(n),r=e?e[1]:void 0;return(0,ov.formatDOM)((0,iv.default)(n),null,r)}var ns={},Un={},es={},dv=0;es.SAME=dv;var pv=1;es.CAMELCASE=pv;es.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const pp=0,Pe=1,rs=2,ts=3,Fi=4,fp=5,mp=6;function fv(n){return an.hasOwnProperty(n)?an[n]:null}function mn(n,e,r,t,a,s,l){this.acceptsBooleans=e===rs||e===ts||e===Fi,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}const an={},mv=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];mv.forEach(n=>{an[n]=new mn(n,pp,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([n,e])=>{an[n]=new mn(n,Pe,!1,e,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(n=>{an[n]=new mn(n,rs,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(n=>{an[n]=new mn(n,rs,!1,n,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(n=>{an[n]=new mn(n,ts,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(n=>{an[n]=new mn(n,ts,!0,n,null,!1,!1)});["capture","download"].forEach(n=>{an[n]=new mn(n,Fi,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(n=>{an[n]=new mn(n,mp,!1,n,null,!1,!1)});["rowSpan","start"].forEach(n=>{an[n]=new mn(n,fp,!1,n.toLowerCase(),null,!1,!1)});const Ui=/[\-\:]([a-z])/g,Wi=n=>n[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(n=>{const e=n.replace(Ui,Wi);an[e]=new mn(e,Pe,!1,n,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(n=>{const e=n.replace(Ui,Wi);an[e]=new mn(e,Pe,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(n=>{const e=n.replace(Ui,Wi);an[e]=new mn(e,Pe,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(n=>{an[n]=new mn(n,Pe,!1,n.toLowerCase(),null,!1,!1)});const vv="xlinkHref";an[vv]=new mn("xlinkHref",Pe,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(n=>{an[n]=new mn(n,Pe,!1,n.toLowerCase(),null,!0,!0)});const{CAMELCASE:hv,SAME:_v,possibleStandardNames:_c}=es,gv=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",yv=gv+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",bv=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+yv+"]*$")),wv=Object.keys(_c).reduce((n,e)=>{const r=_c[e];return r===_v?n[e]=e:r===hv?n[e.toLowerCase()]=e:n[e]=r,n},{});Un.BOOLEAN=ts;Un.BOOLEANISH_STRING=rs;Un.NUMERIC=fp;Un.OVERLOADED_BOOLEAN=Fi;Un.POSITIVE_NUMERIC=mp;Un.RESERVED=pp;Un.STRING=Pe;Un.getPropertyInfo=fv;Un.isCustomAttribute=bv;Un.possibleStandardNames=wv;var Vi={},Zi={},gc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Cv=/\n/g,kv=/^\s*/,Sv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,xv=/^:\s*/,Ev=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Lv=/^[;\s]*/,Ov=/^\s+|\s+$/g,Tv=`
`,yc="/",bc="*",Ae="",Pv="comment",Iv="declaration";function Mv(n,e){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var r=1,t=1;function a(_){var h=_.match(Cv);h&&(r+=h.length);var b=_.lastIndexOf(Tv);t=~b?_.length-b:t+_.length}function s(){var _={line:r,column:t};return function(h){return h.position=new l(_),c(),h}}function l(_){this.start=_,this.end={line:r,column:t},this.source=e.source}l.prototype.content=n;function o(_){var h=new Error(e.source+":"+r+":"+t+": "+_);if(h.reason=_,h.filename=e.source,h.line=r,h.column=t,h.source=n,!e.silent)throw h}function i(_){var h=_.exec(n);if(h){var b=h[0];return a(b),n=n.slice(b.length),h}}function c(){i(kv)}function u(_){var h;for(_=_||[];h=p();)h!==!1&&_.push(h);return _}function p(){var _=s();if(!(yc!=n.charAt(0)||bc!=n.charAt(1))){for(var h=2;Ae!=n.charAt(h)&&(bc!=n.charAt(h)||yc!=n.charAt(h+1));)++h;if(h+=2,Ae===n.charAt(h-1))return o("End of comment missing");var b=n.slice(2,h-2);return t+=2,a(b),n=n.slice(h),t+=2,_({type:Pv,comment:b})}}function v(){var _=s(),h=i(Sv);if(h){if(p(),!i(xv))return o("property missing ':'");var b=i(Ev),f=_({type:Iv,property:wc(h[0].replace(gc,Ae)),value:b?wc(b[0].replace(gc,Ae)):Ae});return i(Lv),f}}function y(){var _=[];u(_);for(var h;h=v();)h!==!1&&(_.push(h),u(_));return _}return c(),y()}function wc(n){return n?n.replace(Ov,Ae):Ae}var Rv=Mv,Nv=$&&$.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Zi,"__esModule",{value:!0});Zi.default=jv;const Av=Nv(Rv);function jv(n,e){let r=null;if(!n||typeof n!="string")return r;const t=(0,Av.default)(n),a=typeof e=="function";return t.forEach(s=>{if(s.type!=="declaration")return;const{property:l,value:o}=s;a?e(l,o,s):o&&(r=r||{},r[l]=o)}),r}var as={};Object.defineProperty(as,"__esModule",{value:!0});as.camelCase=void 0;var Hv=/^--[a-zA-Z0-9_-]+$/,Dv=/-([a-z])/g,Bv=/^[^-]+$/,zv=/^-(webkit|moz|ms|o|khtml)-/,Fv=/^-(ms)-/,Uv=function(n){return!n||Bv.test(n)||Hv.test(n)},Wv=function(n,e){return e.toUpperCase()},Cc=function(n,e){return"".concat(e,"-")},Vv=function(n,e){return e===void 0&&(e={}),Uv(n)?n:(n=n.toLowerCase(),e.reactCompat?n=n.replace(Fv,Cc):n=n.replace(zv,Cc),n.replace(Dv,Wv))};as.camelCase=Vv;var Zv=$&&$.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},Yv=Zv(Zi),Gv=as;function Al(n,e){var r={};return!n||typeof n!="string"||(0,Yv.default)(n,function(t,a){t&&a&&(r[(0,Gv.camelCase)(t,e)]=a)}),r}Al.default=Al;var Kv=Al;(function(n){var e=$&&$.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(n,"__esModule",{value:!0}),n.returnFirstArg=n.canTextBeChildOfNode=n.ELEMENTS_WITH_NO_TEXT_CHILDREN=n.PRESERVE_CUSTOM_ATTRIBUTES=void 0,n.isCustomComponent=s,n.setStyleProp=o;var r=k,t=e(Kv),a=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function s(u,p){return u.includes("-")?!a.has(u):!!(p&&typeof p.is=="string")}var l={reactCompat:!0};function o(u,p){if(typeof u=="string"){if(!u.trim()){p.style={};return}try{p.style=(0,t.default)(u,l)}catch{p.style={}}}}n.PRESERVE_CUSTOM_ATTRIBUTES=Number(r.version.split(".")[0])>=16,n.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var i=function(u){return!n.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(u.name)};n.canTextBeChildOfNode=i;var c=function(u){return u};n.returnFirstArg=c})(Vi);Object.defineProperty(ns,"__esModule",{value:!0});ns.default=qv;var Wr=Un,kc=Vi,$v=["checked","value"],Qv=["input","select","textarea"],Xv={reset:!0,submit:!0};function qv(n,e){n===void 0&&(n={});var r={},t=!!(n.type&&Xv[n.type]);for(var a in n){var s=n[a];if((0,Wr.isCustomAttribute)(a)){r[a]=s;continue}var l=a.toLowerCase(),o=Sc(l);if(o){var i=(0,Wr.getPropertyInfo)(o);switch($v.includes(o)&&Qv.includes(e)&&!t&&(o=Sc("default"+l)),r[o]=s,i==null?void 0:i.type){case Wr.BOOLEAN:r[o]=!0;break;case Wr.OVERLOADED_BOOLEAN:s===""&&(r[o]=!0);break}continue}kc.PRESERVE_CUSTOM_ATTRIBUTES&&(r[a]=s)}return(0,kc.setStyleProp)(n.style,r),r}function Sc(n){return Wr.possibleStandardNames[n]}var Yi={},Jv=$&&$.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Yi,"__esModule",{value:!0});Yi.default=vp;var js=k,n2=Jv(ns),nt=Vi,e2={cloneElement:js.cloneElement,createElement:js.createElement,isValidElement:js.isValidElement};function vp(n,e){var r,t,a,s,l;e===void 0&&(e={});for(var o=[],i=typeof e.replace=="function",c=(r=e.transform)!==null&&r!==void 0?r:nt.returnFirstArg,u=(t=e.library)!==null&&t!==void 0?t:e2,p=u.cloneElement,v=u.createElement,y=u.isValidElement,_=n.length,h=0;h<_;h++){var b=n[h];if(i){var f=(a=e.replace)===null||a===void 0?void 0:a.call(e,b,h);if(y(f)){_>1&&(f=p(f,{key:(s=f.key)!==null&&s!==void 0?s:h})),o.push(c(f,b,h));continue}}if(b.type==="text"){var d=!b.data.trim().length;if(d&&b.parent&&!(0,nt.canTextBeChildOfNode)(b.parent)||e.trim&&d)continue;o.push(c(b.data,b,h));continue}var m=b,g={};r2(m)?((0,nt.setStyleProp)(m.attribs.style,m.attribs),g=m.attribs):m.attribs&&(g=(0,n2.default)(m.attribs,m.name));var C=void 0;switch(b.type){case"script":case"style":b.children[0]&&(g.dangerouslySetInnerHTML={__html:b.children[0].data});break;case"tag":b.name==="textarea"&&b.children[0]?g.defaultValue=b.children[0].data:!((l=b.children)===null||l===void 0)&&l.length&&(C=vp(b.children,e));break;default:continue}_>1&&(g.key=h),o.push(c(v(b.name,g,C),b,h))}return o.length===1?o[0]:o}function r2(n){return nt.PRESERVE_CUSTOM_ATTRIBUTES&&n.type==="tag"&&(0,nt.isCustomComponent)(n.name,n.attribs)}(function(n){var e=$&&$.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(n,"__esModule",{value:!0}),n.htmlToDOM=n.domToReact=n.attributesToProps=n.Text=n.ProcessingInstruction=n.Element=n.Comment=void 0,n.default=o;var r=e(Ai);n.htmlToDOM=r.default;var t=e(ns);n.attributesToProps=t.default;var a=e(Yi);n.domToReact=a.default;var s=Hi;Object.defineProperty(n,"Comment",{enumerable:!0,get:function(){return s.Comment}}),Object.defineProperty(n,"Element",{enumerable:!0,get:function(){return s.Element}}),Object.defineProperty(n,"ProcessingInstruction",{enumerable:!0,get:function(){return s.ProcessingInstruction}}),Object.defineProperty(n,"Text",{enumerable:!0,get:function(){return s.Text}});var l={lowerCaseAttributeNames:!1};function o(i,c){var u;if(typeof i!="string")throw new TypeError("First argument must be a string");return i?(0,a.default)((0,r.default)(i,(u=c==null?void 0:c.htmlparser2)!==null&&u!==void 0?u:l),c):[]}})(Ra);const xc=Ec(Ra),t2=xc.default||xc,a2=["/assets/js/jquery.min.js","/assets/js/popper.min.js","/assets/js/bootstrap.min.js","/assets/js/bootstrap-dropdown-ml-hack.min.js","/assets/js/cursor.js","/assets/js/gsap.js","/assets/js/gsap-scroll-trigger.js","/assets/js/gsap-split-text.js","/assets/js/smooth-scroll.js","/assets/js/aos.js","/assets/js/countdown.js","/assets/js/swiper-bundle.min.js","/assets/js/magnific-popup.min.js","/assets/js/appear.min.js","/assets/js/odometer.min.js"],s2="/assets/js/main.js";let Hs;function hp(n,e={}){return new Promise((r,t)=>{const a=`script[src="${n}"]`,s=document.querySelector(a);if((s==null?void 0:s.dataset.loaded)==="true"){r();return}if(s){s.addEventListener("load",()=>r(),{once:!0}),s.addEventListener("error",()=>t(new Error(`Failed to load ${n}`)),{once:!0});return}const l=document.createElement("script");l.src=n,l.async=!1,Object.entries(e).forEach(([o,i])=>{i!==void 0&&l.setAttribute(o,i)}),l.onload=()=>{l.dataset.loaded="true",r()},l.onerror=()=>t(new Error(`Failed to load ${n}`)),document.body.appendChild(l)})}function l2(){const n=window.jQuery;n&&(n(window).off("scroll"),n(window).off("load"),n(".scroll").off("click"),n(".mobile_menu_btn").off("click"),n('.scrollspy_btn[href^="#"]').off("click"),n(".ico_roadmap_flexbox .roadmap_block").off("mouseover"),n(".roadmap_carousel .swiper-slide .roadmap_block").off("mouseover mouseleave"),n(".copy_btn").off("click"))}async function i2(){Hs||(Hs=(async()=>{for(const n of a2)await hp(n)})()),await Hs}async function o2(){var e;(e=document.querySelector('[data-template-main="true"]'))==null||e.remove();const n=`${s2}?route=${Date.now()}`;await hp(n,{"data-template-main":"true"}),document.readyState==="complete"&&window.dispatchEvent(new Event("load"))}async function c2(){var n;l2(),await i2(),(n=window.AOS)!=null&&n.refreshHard&&window.AOS.refreshHard(),await o2()}const u2={"index.html":"/","index_ico.html":"/index_ico","index_memecoin.html":"/index_memecoin","index_pepecoin.html":"/index_pepecoin","blog.html":"/blog","blog_details.html":"/blog_details","contact.html":"/contact","sign_in.html":"/sign_in","sign_up.html":"/sign_up"},d2=["#","mailto:","tel:","javascript:"];function p2(n){if(!n)return null;const e=n.trim();if(!e||e==="#!"||d2.some(a=>e.startsWith(a)))return null;const r=e.match(/^(?:\.\/)?\/?([^?#]+\.html)(.*)?$/i);if(!r)return null;const t=u2[r[1]];return t?`${t}${r[2]??""}`:null}function f2({bodyClass:n,html:e,title:r}){const t=Er(),a=k.useMemo(()=>{const s={replace(l){var c;if(l.type!=="tag"||l.name!=="a"||!((c=l.attribs)!=null&&c.href))return;const o=p2(l.attribs.href);if(!o)return;const i=Ra.attributesToProps(l.attribs);return delete i.href,Ln.jsx($m,{...i,to:o,children:Ra.domToReact(l.children,s)})}};return s},[]);return k.useEffect(()=>{document.body.className=n,document.title=r,(async()=>{if(await c2(),t.hash){requestAnimationFrame(()=>{var l;(l=document.querySelector(t.hash))==null||l.scrollIntoView()});return}window.scrollTo(0,0)})().catch(l=>{console.error("Template route refresh failed.",l)})},[n,t.hash,t.pathname,r]),Ln.jsx(Ln.Fragment,{children:t2(e,a)})}const m2=`<!-- Body Wrap - Start -->\r
    <div class="page_wrapper">\r
\r
      <!-- Back To Top - Start -->\r
      <div class="backtotop">\r
        <a href="#" class="scroll">\r
          <i class="fa-solid fa-arrow-up"></i>\r
        </a>\r
      </div>\r
      <!-- Back To Top - End -->\r
\r
      <!-- Preloader - Start -->\r
      <div id="preloader">\r
        <div class="line-1"></div> \r
        <div class="line-2"></div> \r
        <div class="line-3"></div> \r
        <div class="line-4"></div> \r
      </div>\r
      <!-- Preloader - End -->\r
\r
      <!-- Site Header - Start\r
      ================================================== -->\r
      <header class="site_header">\r
        <div class="nav_wrapper">\r
          <div class="container">\r
            <div class="row align-items-center">\r
              <div class="col-lg-3 col-5 d-flex align-items-center">\r
                <div class="site_logo">\r
                  <a class="site_link" href="index.html">\r
                    <img loading="lazy" src="assets/images/site_logo/site_logo_1.svg" alt="ICO Site Logo">\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-6 col-2">\r
                <nav class="main_menu navbar navbar-expand-lg">\r
                  <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">\r
                    <ul class="main_menu_list unordered_list text-uppercase">\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="homes_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Home">Home</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="homes_submenu">\r
                          <li>\r
                            <a class="dropdown-item" href="index_ico.html">\r
                              <span class="nav_link_label">Coinpay ICO</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_memecoin.html">\r
                              <span class="nav_link_label">Memecoin</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_pepecoin.html">\r
                              <span class="nav_link_label">Pepecoin</span>\r
                            </a>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_about_section">\r
                          <span class="nav_link_label" data-text="About ICO">About ICO</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_service_section">\r
                          <span class="nav_link_label" data-text="Features">Features</span>\r
                        </a>\r
                      </li>\r
                      <li class="dropdown active">\r
                        <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Help">Help</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="help_submenu">\r
                          <li>\r
                            <a class="dropdown-item scrollspy_btn" href="#id_ico_roadmap_section">\r
                              <span class="nav_link_label">Roadmap</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown active">\r
                            <a class="dropdown-item" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">Blog</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="blog_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="blog.html">\r
                                  <span class="nav_link_label">Blogs</span>\r
                                </a>\r
                              </li>\r
                              <li class="active">\r
                                <a class="dropdown-item" href="blog_details.html">\r
                                  <span class="nav_link_label">Blog Details</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="contact.html">\r
                              <span class="nav_link_label">Help Center</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="register_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">My Account</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="register_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="sign_in.html">\r
                                  <span class="nav_link_label">Sign In</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="sign_up.html">\r
                                  <span class="nav_link_label">Sign Up</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link" href="contact.html">\r
                          <span class="nav_link_label" data-text="Contact">Contact</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </nav>\r
              </div>\r
              <div class="col-lg-3 col-5">\r
                <ul class="btns_group unordered_list p-0 justify-content-end">\r
                  <li class="d-lg-none">\r
                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">\r
                      <i class="far fa-bars"></i>\r
                    </button>\r
                  </li>\r
                  <li>\r
                    <a class="ico_btn_outline" href="sign_in.html">\r
                      <span class="btn_icon">\r
                        <i class="fa-solid fa-user"></i>\r
                      </span>\r
                      <span class="btn_label">Login</span>\r
                    </a>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
      <!-- Site Header - End\r
      ================================================== -->\r
\r
      <!-- Main Body - Start\r
      ================================================== -->\r
      <main class="page_content">\r
\r
        <!-- Hero Section - Start\r
        ================================================== -->\r
        <section class="page_header text-center">\r
          <div class="container">\r
            <h1 class="page_title">\r
              Blog Details\r
            </h1>\r
            <ol class="breadcrumb justify-content-center">\r
              <li class="breadcrumb-item"><a href="index.html">Coinpay</a></li>\r
              <li class="breadcrumb-item active" aria-current="page">Blog Details</li>\r
            </ol>\r
          </div>\r
        </section>\r
        <!-- Hero Section - End\r
        ================================================== -->\r
\r
        <!-- Blog Section - Start\r
        ================================================== -->\r
        <section class="blog_details_section">\r
          <div class="container">\r
            <div class="details_image">\r
              <img src="assets/images/blogs/blog_details_image_1.webp" alt="Blog Details Image">\r
            </div>\r
            <div class="details_content">\r
              <ul class="post_meta style_2 unordered_list">\r
                <li>\r
                  <a class="post_category" href="#!">#blockchain</a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-regular fa-calendar-days"></i>\r
                    Last Update: 02/12/2025\r
                  </a>\r
                </li>\r
              </ul>\r
              <h2 class="details_title">\r
                What Makes ICOs a Revolutionary Game-Changer for Bitcoin and Cryptocurrency Investors?\r
              </h2>\r
              <p>\r
                ICOs have revolutionized the crypto space by offering a unique way to fund blockchain projects while providing early investment opportunities to Bitcoin and cryptocurrency enthusiasts. They enable investors to support innovative ideas and gain access to tokens with potential for significant growth. \r
              </p>\r
              <ul class="post_meta unordered_list">\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-regular fa-user"></i>\r
                    by Madura\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-regular fa-comments"></i>\r
                    50 Comments\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-regular fa-eye"></i>\r
                    20k Views\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
            <hr>\r
            <div class="row justify-content-lg-between">\r
              <div class="col-lg-8">\r
                <div class="details_content">\r
                  <div class="post_audio">\r
                    <button class="audio_play_btn" type="button">\r
                      <i class="fa-solid fa-play"></i>\r
                      <span>6:24</span>\r
                      <span>Listen to this article!</span>\r
                    </button>\r
                  </div>\r
                  <h3 class="details_info_title">\r
                    Revolutionizing Crypto Investment Navigating Growth with ICO Innovation in Bitcoin and Blockchain.\r
                  </h3>\r
                  <div class="row mb-4">\r
                    <div class="col-md-6 col-sm-6">\r
                      <div class="details_image m-0">\r
                        <img src="assets/images/blogs/blog_details_image_2.webp" alt="Blog Details Image">\r
                      </div>\r
                    </div>\r
                    <div class="col-md-6 col-sm-6">\r
                      <div class="details_image m-0">\r
                        <img src="assets/images/blogs/blog_details_image_3.webp" alt="Blog Details Image">\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <p>\r
                    ICOs are transforming the landscape of crypto investment by offering innovative opportunities that fuel growth within the Bitcoin and blockchain space. They allow investors to engage early with emerging projects, providing access to groundbreaking technologies and potentially high-reward investments. Through ICOs, investors can support the development of new blockchain, while also benefiting from the growth and expansion of the ecosystem. This shift is reshaping how capital is raised, making ICOs a key driver of innovation in the industry.\r
                  </p>\r
                  <p>\r
                    As blockchain continues to revolutionize industries from finance to supply chain management, ICOs are emerging as a vital tool for project funding and development. Investors who engage in ICOs not only get the chance to be part of cutting-edge technology but also stand to benefit from early-stage growth, which could lead to significant returns. This evolving model is driving both innovation and the expansion of the cryptocurrency.\r
                  </p>\r
                  <div class="iframe_block">\r
                    <iframe src="https://www.youtube.com/embed/VYWc9dFqROI" title="Explain Crypto To COMPLETE Beginners: Coin Bureau Guide!!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\r
                  </div>\r
                  <h3 class="details_info_title">Optimizing Growth with ICOs.</h3>\r
                  <p>\r
                    Optimizing growth with ICOs offers investors and blockchain projects a powerful way to accelerate development and maximize returns. By allowing projects to raise capital directly from the public, ICOs streamline funding while providing early investors with the potential for significant gains. This model enables faster scalability for blockchain technologies, as it bypasses traditional financing routes. For investors, ICOs present an opportunity to engage in the growth of groundbreaking projects from the start, positioning them for long-term.\r
                  </p>\r
                  <div class="row mb-4 align-items-center">\r
                    <div class="col-md-6">\r
                      <div class="details_image m-0">\r
                        <img src="assets/images/blogs/blog_details_image_4.webp" alt="Blog Image">\r
                      </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                      <ul class="iconlist_block unordered_list_block">\r
                        <li>\r
                          <span class="iconlist_icon">\r
                            <i class="fa-solid fa-circle"></i>\r
                          </span>\r
                          <span class="iconlist_label">\r
                            Direct Public Funding for Global Investment.\r
                          </span>\r
                        </li>\r
                        <li>\r
                          <span class="iconlist_icon">\r
                            <i class="fa-solid fa-circle"></i>\r
                          </span>\r
                          <span class="iconlist_label">\r
                            Early Investment with High Growth Potential.\r
                          </span>\r
                        </li>\r
                        <li>\r
                          <span class="iconlist_icon">\r
                            <i class="fa-solid fa-circle"></i>\r
                          </span>\r
                          <span class="iconlist_label">\r
                            Global Reach for Enhanced Exposure.\r
                          </span>\r
                        </li>\r
                        <li>\r
                          <span class="iconlist_icon">\r
                            <i class="fa-solid fa-circle"></i>\r
                          </span>\r
                          <span class="iconlist_label">\r
                            Increased Transparency with Clear Roadmaps.\r
                          </span>\r
                        </li>\r
                        <li>\r
                          <span class="iconlist_icon">\r
                            <i class="fa-solid fa-circle"></i>\r
                          </span>\r
                          <span class="iconlist_label">\r
                            Token Utility for Long-Term Value.\r
                          </span>\r
                        </li>\r
                        <li>\r
                          <span class="iconlist_icon">\r
                            <i class="fa-solid fa-circle"></i>\r
                          </span>\r
                          <span class="iconlist_label">\r
                            Accelerated Development through Funding.\r
                          </span>\r
                        </li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                  <h3 class="details_info_title">3 Reasons ICOs Revolutionize Crypto.</h3>\r
                  <p>\r
                    Here are 3 key reasons emphasizing how ICOs are revolutionizing the cryptocurrency landscape and reshaping the future of blockchain technology:\r
                  </p>\r
                  <ul class="iconlist_block unordered_list_block">\r
                    <li>\r
                      <span class="iconlist_label">\r
                        1. Democratizing Investment Opportunities.\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_label">\r
                        2. Efficient Fundraising Model.\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_label">\r
                        3. Driving Innovation and Growth.\r
                      </span>\r
                    </li>\r
                  </ul>\r
                  <div class="postabmin_block">\r
                    <div class="admin_image">\r
                      <img src="assets/images/avatars/avatar_9.webp" alt="Avatar Image">\r
                    </div>\r
                    <div class="admin_content">\r
                      <h4 class="admin_name">About Anderson</h4>\r
                      <span class="admin_designation">Content Editor</span>\r
                      <p class="mb-4">\r
                        A content editor plays a pivotal role in shaping and refining the narrative and quality of digital content. This role involves.\r
                      </p>\r
                      <ul class="social_block style_3 unordered_list">\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-facebook-f"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-twitter"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-linkedin-in"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-instagram"></i>\r
                          </a>\r
                        </li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                  <hr>\r
                  <div class="row">\r
                    <div class="col-md-6">\r
                      <ul class="tags_block unordered_list">\r
                        <li><a href="#!">Blockchain</a></li>\r
                        <li><a href="#!">Investments</a></li>\r
                        <li><a href="#!">ICO</a></li>\r
                      </ul>\r
                    </div>\r
                    <div class="col-md-6">\r
                      <ul class="social_block style_4 unordered_list justify-content-lg-end">\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-facebook-f"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-twitter"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-linkedin-in"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!">\r
                            <i class="fa-brands fa-instagram"></i>\r
                          </a>\r
                        </li>\r
                        <li>\r
                          <a href="#!"><i class="fa-solid fa-share-nodes"></i></a>\r
                        </li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                  <div class="other_post_nav">\r
                    <div class="post_nav_prev">\r
                      <a class="arrow" href="blog_details.html">\r
                        <i class="fa-solid fa-arrow-left-long"></i>\r
                      </a>\r
                      <div class="blog_post_info">\r
                        <h3 class="blog_post_title">\r
                          <a href="blog_details.html">\r
                            10 Reasons Our ICO Is ..Poised for Success\r
                          </a>\r
                        </h3>\r
                        <a class="post_admin" href="#!">\r
                          <i class="fa-regular fa-circle-user"></i> Christopher\r
                        </a>\r
                      </div>\r
                    </div>\r
                    <a class="blog_page_link" href="#!">\r
                      <i class="fa-solid fa-grid"></i>\r
                    </a>\r
                    <div class="post_nav_next">\r
                      <a class="arrow" href="blog_details.html">\r
                        <i class="fa-solid fa-arrow-right-long"></i>\r
                      </a>\r
                      <div class="blog_post_info">\r
                        <h3 class="blog_post_title">\r
                          <a href="blog_details.html">\r
                            The Role of Our ICO in Driving Financial..\r
                          </a>\r
                        </h3>\r
                        <a class="post_admin" href="#!">\r
                          <i class="fa-regular fa-circle-user"></i> Michael\r
                        </a>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <hr>\r
                  <div class="comment_area">\r
                    <h3 class="details_info_title">Comments (3)</h3>\r
                    <ul class="comments_list unordered_list_block">\r
                      <li>\r
                        <div class="comment_item">\r
                          <div class="comment_author_thumbnail">\r
                            <img src="assets/images/avatars/avatar_10.webp" alt="Coinpay - Comment Author Avatar">\r
                          </div>\r
                          <div class="comment_author_content">\r
                            <h4 class="comment_author_name">John Smith</h4>\r
                            <div class="comment_time">Dec 24, 2024 at 10:21am</div>\r
                            <p class="mb-0">\r
                              "Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"\r
                            </p>\r
                            <a class="comment_reply_btn" href="#!">Reply</a>\r
                          </div>\r
                        </div>\r
                        <ul class="comments_list unordered_list_block">\r
                          <li>\r
                            <div class="comment_item">\r
                              <div class="comment_author_thumbnail">\r
                                <img src="assets/images/avatars/avatar_11.webp" alt="Coinpay - Comment Author Avatar">\r
                              </div>\r
                              <div class="comment_author_content">\r
                                <h4 class="comment_author_name">Daniel Garcia</h4>\r
                                <div class="comment_time">Dec 24, 2024 at 10:21am</div>\r
                                <p class="mb-0">\r
                                  "Our experience with Techco has been exceptional. Their commitment to customer satisfaction stands out. Grateful for their partnership."\r
                                </p>\r
                                <a class="comment_reply_btn" href="#!">Reply</a>\r
                              </div>\r
                            </div>\r
                          </li>\r
                          <li>\r
                            <div class="comment_item">\r
                              <div class="comment_author_thumbnail">\r
                                <img src="assets/images/avatars/avatar_10.webp" alt="Coinpay - Comment Author Avatar">\r
                              </div>\r
                              <div class="comment_author_content">\r
                                <h4 class="comment_author_name">John Smith</h4>\r
                                <div class="comment_time">Dec 24, 2024 at 10:21am</div>\r
                                <p class="mb-0">\r
                                  "Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"\r
                                </p>\r
                                <a class="comment_reply_btn" href="#!">Reply</a>\r
                              </div>\r
                            </div>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <div class="comment_item">\r
                          <div class="comment_author_thumbnail">\r
                            <img src="assets/images/avatars/avatar_12.webp" alt="Coinpay - Comment Author Avatar">\r
                          </div>\r
                          <div class="comment_author_content">\r
                            <h4 class="comment_author_name">John Smith</h4>\r
                            <div class="comment_time">Dec 24, 2024 at 10:21am</div>\r
                            <p class="mb-0">\r
                              "Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"\r
                            </p>\r
                            <a class="comment_reply_btn" href="#!">Reply</a>\r
                          </div>\r
                        </div>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                  <div class="comment_form">\r
                    <h3 class="details_info_title">\r
                      Leave a reply\r
                    </h3>\r
                    <p>\r
                      Your email address will not be published. Required fields are marked * \r
                    </p>\r
                    <form action="#">\r
                      <div class="row">\r
                        <div class="col-md-6">\r
                          <div class="form-group">\r
                            <label class="input_title" for="input_name">Name<sup>*</sup></label>\r
                            <input id="input_name" class="form-control" type="text" name="name" placeholder="Carlo Castillo" required>\r
                          </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                          <div class="form-group">\r
                            <label class="input_title" for="input_email">Email<sup>*</sup></label>\r
                            <input id="input_email" class="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required>\r
                          </div>\r
                        </div>\r
                        <div class="col-12">\r
                          <div class="form-group">\r
                            <label class="input_title" for="input_message">Cover Letter<sup>*</sup></label>\r
                            <textarea id="input_message" class="form-control" name="message" placeholder="Write about your self..." required></textarea>\r
                          </div>\r
                          <div class="form-check mb-5">\r
                            <input class="form-check-input" type="checkbox" id="checkbox_save">\r
                            <label class="form-check-label" for="checkbox_save">\r
                              Save my name, email, and website in this browser for the next time I comment.\r
                            </label>\r
                          </div>\r
                          <button class="btn" type="submit">\r
                            <span class="btn_label">Post Comment</span>\r
                            <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          </button>\r
                        </div>\r
                      </div>\r
                    </form>\r
                  </div>\r
                  <div class="subscribe_box">\r
                    <div class="bell_icon">\r
                      <i class="fa-solid fa-bell"></i>\r
                    </div>\r
                    <h3 class="heading_text">Subscribe to Our Updates</h3>\r
                    <p class="mb-4">\r
                      Stay up to date! Get all of our resources and news delivered straight to your inbox.\r
                    </p>\r
                    <form class="ico_newsletter_form" action="#">\r
                      <input type="email" name="email" placeholder="coinpay@example.com">\r
                      <button class="submit_btn" type="submit">Subscribe</button>\r
                    </form>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-lg-4">\r
                <aside class="sidebar pt-5 pt-lg-0 ps-lg-5">\r
                  <div class="sidebar_search_block">\r
                    <h3 class="sidebar_title">Search</h3>\r
                    <form class="search_input" action="#">\r
                      <input type="search" name="search" placeholder="Search Anything...">\r
                      <button type="submit">\r
                        <img src="assets/icons/icon_search.svg" alt="Icon Search">\r
                      </button>\r
                    </form>\r
                  </div>\r
\r
                  <div class="recent_post_block">\r
                    <h3 class="sidebar_title">Related Posts</h3>\r
                    <ul class="recent_post_list unordered_list_block">\r
                      <li>\r
                        <a class="recent_post_item" href="blog_details.html">\r
                          <span class="blog_post_title">\r
                            10 Reasons Our ICO Is Poised for Success the Blockchain..\r
                          </span>\r
                          <span class="blog_post_admin">\r
                            <i class="fa-regular fa-circle-user"></i>\r
                            By Michael david\r
                          </span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="recent_post_item" href="blog_details.html">\r
                          <span class="blog_post_title">\r
                            How Blockchain Is Changing the World and Where Our..\r
                          </span>\r
                          <span class="blog_post_admin">\r
                            <i class="fa-regular fa-circle-user"></i>\r
                            By William thomas\r
                          </span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="recent_post_item" href="blog_details.html">\r
                          <span class="blog_post_title">\r
                            The Role of Our ICO in Driving Financial Inclusion Through..\r
                          </span>\r
                          <span class="blog_post_admin">\r
                            <i class="fa-regular fa-circle-user"></i>\r
                            By Christopher\r
                          </span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
\r
                  <div class="sidebar_category_list">\r
                    <h3 class="sidebar_title">Categories</h3>\r
                    <ul class="category_list_block unordered_list_block">\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Cybersecurity</span>\r
                          <span class="value">(05)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Blockchain Trends</span>\r
                          <span class="value">(02)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Digital Transformation</span>\r
                          <span class="value">(02)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Exchange Listings</span>\r
                          <span class="value">(04)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Security Alerts</span>\r
                          <span class="value">(03)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Investor Highlights</span>\r
                          <span class="value">(07)</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
\r
                  <div class="sidebar_tags">\r
                    <h3 class="sidebar_title">Popular Tags</h3>\r
                    <ul class="tags_block unordered_list">\r
                      <li><a href="#!">Blockchain</a></li>\r
                      <li><a href="#!">Investments</a></li>\r
                      <li><a href="#!">Web</a></li>\r
                      <li><a href="#!">Currency</a></li>\r
                      <li><a href="#!">Crypto Trading</a></li>\r
                      <li><a href="#!">ICO</a></li>\r
                      <li><a href="#!">ICO Blockchain</a></li>\r
                      <li><a href="#!">Crypto Advisor</a></li>\r
                      <li><a href="#!">Exchange</a></li>\r
                      <li><a href="#!">ICO Tokens</a></li>\r
                    </ul>\r
                  </div>\r
                </aside>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Blog Section - End\r
        ================================================== -->\r
\r
        <!-- Related Post Section - Start\r
        ================================================== -->\r
        <section class="related_post_section section_space">\r
          <div class="container">\r
            <div class="ico_heading_block">\r
              <h2 class="heading_text">\r
                Browse Related Blog\r
              </h2>\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-lg-4">\r
                <div class="blog_card_block">\r
                  <a class="blog_post_image" href="blog_details.html">\r
                    <img src="assets/images/blogs/blog_post_image_6.webp" alt="Blog Post Image">\r
                  </a>\r
                  <ul class="post_meta style_2 unordered_list">\r
                    <li>\r
                      <a class="post_category" href="#!">#investment</a>\r
                    </li>\r
                    <li>\r
                      <a href="#!">\r
                        By Christopher\r
                      </a>\r
                    </li>\r
                  </ul>\r
                  <h3 class="blog_post_title">\r
                    <a href="blog_details.html">\r
                      How We Ensure Security and Protect Your Investment..\r
                    </a>\r
                  </h3>\r
                  <a class="btn_link" href="blog_details.html">\r
                    <span class="btn_label">Read More</span>\r
                    <span class="btn_icon">\r
                      <i class="fa-solid fa-arrow-right"></i>\r
                    </span>\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-4">\r
                <div class="blog_card_block">\r
                  <a class="blog_post_image" href="blog_details.html">\r
                    <img src="assets/images/blogs/blog_post_image_7.webp" alt="Blog Post Image">\r
                  </a>\r
                  <ul class="post_meta style_2 unordered_list">\r
                    <li>\r
                      <a class="post_category" href="#!">#ICO Tips</a>\r
                    </li>\r
                    <li>\r
                      <a href="#!">\r
                        By Emily Grace\r
                      </a>\r
                    </li>\r
                  </ul>\r
                  <h3 class="blog_post_title">\r
                    <a href="blog_details.html">\r
                      Why ICOs are the Key to the Next Big Crypto Innovation..\r
                    </a>\r
                  </h3>\r
                  <a class="btn_link" href="blog_details.html">\r
                    <span class="btn_label">Read More</span>\r
                    <span class="btn_icon">\r
                      <i class="fa-solid fa-arrow-right"></i>\r
                    </span>\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-4">\r
                <div class="blog_card_block">\r
                  <a class="blog_post_image" href="blog_details.html">\r
                    <img src="assets/images/blogs/blog_post_image_8.webp" alt="Blog Post Image">\r
                  </a>\r
                  <ul class="post_meta style_2 unordered_list">\r
                    <li>\r
                      <a class="post_category" href="#!">#investment</a>\r
                    </li>\r
                    <li>\r
                      <a href="#!">\r
                        By John Michael\r
                      </a>\r
                    </li>\r
                  </ul>\r
                  <h3 class="blog_post_title">\r
                    <a href="blog_details.html">\r
                      Crypto Investments and Shaping the Future of Blockchain..\r
                    </a>\r
                  </h3>\r
                  <a class="btn_link" href="blog_details.html">\r
                    <span class="btn_label">Read More</span>\r
                    <span class="btn_icon">\r
                      <i class="fa-solid fa-arrow-right"></i>\r
                    </span>\r
                  </a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Related Post Section - End\r
        ================================================== -->\r
\r
      </main>\r
      <!-- Main Body - End\r
      ================================================== -->\r
\r
      <!-- Site Footer - Start\r
      ================================================== -->\r
      <footer class="ico_site_footer section_decoration section_shadow_top">\r
        <div class="decoration_item shape_top">\r
          <img src="assets/images/shapes/shape_ico_hero_section_bottom.svg" alt="Bottom Line Shape">\r
        </div>\r
        <div class="container">\r
          <ul class="pagelist_block unordered_list justify-content-center text-uppercase">\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  About ICO\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Features\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Tokenomics\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Roadmap\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Team\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Whitepaper\r
                </span>\r
              </a>\r
            </li>\r
          </ul>\r
          <div class="middle_area">\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Join our social group</h3>\r
              <ul class="social_block style_2 unordered_list justify-content-center">\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M12.1817 2.34636C10.5036 3.04236 7.14877 4.48456 2.11879 6.67146C1.30201 6.99576 0.873436 7.31296 0.834656 7.62286C0.768491 8.14806 1.42705 8.35476 2.32148 8.63456C2.44372 8.67336 2.57025 8.71206 2.69969 8.75516C3.58123 9.04066 4.76611 9.37506 5.38149 9.38796C5.9409 9.39946 6.56497 9.16986 7.25381 8.69916C11.9531 5.53206 14.379 3.93206 14.5314 3.89756C14.6393 3.87316 14.7888 3.84166 14.8894 3.93206C14.9901 4.02106 14.9801 4.19036 14.97 4.23626C14.9038 4.51326 12.3241 6.90826 10.9868 8.14806C10.5698 8.53416 10.2749 8.80826 10.2146 8.87136C10.0794 9.01056 9.94141 9.14396 9.80908 9.27176C8.98941 10.0581 8.37683 10.6494 9.84356 11.6137C10.5482 12.0772 11.1119 12.4604 11.6741 12.8421C12.2882 13.2597 12.9008 13.6758 13.6945 14.1953C13.8959 14.3273 14.0886 14.4636 14.2769 14.5971C14.9916 15.1065 15.6343 15.5628 16.4281 15.4911C16.8883 15.448 17.3656 15.0161 17.6072 13.726C18.1781 10.6752 19.3026 4.06836 19.5629 1.34476C19.5788 1.11856 19.5691 0.891358 19.5341 0.667358C19.5132 0.486458 19.425 0.320058 19.2868 0.201058C19.0812 0.0331581 18.7619 -0.002742 18.6182 0.000158001C17.9696 0.011558 16.9746 0.357458 12.1817 2.34636Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M14.7876 14L9.31558 5.8405L9.32498 5.8482L14.2588 0H12.6101L8.59076 4.76L5.39902 0H1.07488L6.18362 7.6179L0.794922 14H2.44366L6.91214 8.7042L10.4635 14H14.7876ZM4.74576 1.2727L12.4234 12.7273H11.1168L3.43295 1.2727H4.74576Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-brands fa-github"></i>\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Subscribe to our newslatter</h3>\r
              <form class="ico_newsletter_form" action="#">\r
                <input type="email" name="email" placeholder="Enter your email">\r
                <button class="submit_btn" type="submit">Submit</button>\r
              </form>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Let’s coinpay great together.</h3>\r
              <a class="ico_creative_btn" href="#!">\r
                <span class="btn_wrapper">\r
                  <span class="btn_icon_left">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                      <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                      <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                    </svg>\r
                  </span>\r
                  <span class="btn_label">Purchase a Token</span>\r
                  <span class="btn_icon_right">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                      <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                      <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                    </svg>\r
                  </span>\r
                </span>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="footer_bottom text-center">\r
            <p class="copyright_text m-0 text-secondary">Copyright© 2025 Coinpay. All rights reserved.</p>\r
          </div>\r
        </div>\r
      </footer>\r
      <!-- Site Footer - End\r
      ================================================== -->\r
\r
    </div>\r
    <!-- Body Wrap - End -->
`,v2=`<!-- Body Wrap - Start -->\r
    <div class="page_wrapper">\r
\r
      <!-- Back To Top - Start -->\r
      <div class="backtotop">\r
        <a href="#" class="scroll">\r
          <i class="fa-solid fa-arrow-up"></i>\r
        </a>\r
      </div>\r
      <!-- Back To Top - End -->\r
\r
      <!-- Preloader - Start -->\r
      <div id="preloader">\r
        <div class="line-1"></div> \r
        <div class="line-2"></div> \r
        <div class="line-3"></div> \r
        <div class="line-4"></div> \r
      </div>\r
      <!-- Preloader - End -->\r
\r
      <!-- Site Header - Start\r
      ================================================== -->\r
      <header class="site_header">\r
        <div class="nav_wrapper">\r
          <div class="container">\r
            <div class="row align-items-center">\r
              <div class="col-lg-3 col-5 d-flex align-items-center">\r
                <div class="site_logo">\r
                  <a class="site_link" href="index.html">\r
                    <img loading="lazy" src="assets/images/site_logo/site_logo_1.svg" alt="ICO Site Logo">\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-6 col-2">\r
                <nav class="main_menu navbar navbar-expand-lg">\r
                  <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">\r
                    <ul class="main_menu_list unordered_list text-uppercase">\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="homes_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Home">Home</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="homes_submenu">\r
                          <li>\r
                            <a class="dropdown-item" href="index_ico.html">\r
                              <span class="nav_link_label">Coinpay ICO</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_memecoin.html">\r
                              <span class="nav_link_label">Memecoin</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_pepecoin.html">\r
                              <span class="nav_link_label">Pepecoin</span>\r
                            </a>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_about_section">\r
                          <span class="nav_link_label" data-text="About ICO">About ICO</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_service_section">\r
                          <span class="nav_link_label" data-text="Features">Features</span>\r
                        </a>\r
                      </li>\r
                      <li class="dropdown active">\r
                        <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Help">Help</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="help_submenu">\r
                          <li>\r
                            <a class="dropdown-item scrollspy_btn" href="#id_ico_roadmap_section">\r
                              <span class="nav_link_label">Roadmap</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown active">\r
                            <a class="dropdown-item" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">Blog</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="blog_submenu">\r
                              <li class="active">\r
                                <a class="dropdown-item" href="blog.html">\r
                                  <span class="nav_link_label">Blogs</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="blog_details.html">\r
                                  <span class="nav_link_label">Blog Details</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="contact.html">\r
                              <span class="nav_link_label">Help Center</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="register_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">My Account</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="register_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="sign_in.html">\r
                                  <span class="nav_link_label">Sign In</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="sign_up.html">\r
                                  <span class="nav_link_label">Sign Up</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link" href="contact.html">\r
                          <span class="nav_link_label" data-text="Contact">Contact</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </nav>\r
              </div>\r
              <div class="col-lg-3 col-5">\r
                <ul class="btns_group unordered_list p-0 justify-content-end">\r
                  <li class="d-lg-none">\r
                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">\r
                      <i class="far fa-bars"></i>\r
                    </button>\r
                  </li>\r
                  <li>\r
                    <a class="ico_btn_outline" href="sign_in.html">\r
                      <span class="btn_icon">\r
                        <i class="fa-solid fa-user"></i>\r
                      </span>\r
                      <span class="btn_label">Login</span>\r
                    </a>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
      <!-- Site Header - End\r
      ================================================== -->\r
\r
      <!-- Main Body - Start\r
      ================================================== -->\r
      <main class="page_content">\r
\r
        <!-- Hero Section - Start\r
        ================================================== -->\r
        <section class="page_header text-center">\r
          <div class="container">\r
            <h1 class="page_title">\r
              Our Blog\r
            </h1>\r
            <ol class="breadcrumb justify-content-center">\r
              <li class="breadcrumb-item"><a href="index.html">Coinpay</a></li>\r
              <li class="breadcrumb-item active" aria-current="page">Our Blogs</li>\r
            </ol>\r
          </div>\r
        </section>\r
        <!-- Hero Section - End\r
        ================================================== -->\r
\r
        <!-- Blog Section - Start\r
        ================================================== -->\r
        <section class="blog_section section_space pt-0">\r
          <div class="container">\r
            <div class="blog_carousel_block swiper">\r
              <div class="swiper-wrapper">\r
                <div class="swiper-slide" style="background-image: url('assets/images/blogs/blog_post_image_1.webp');">\r
                  <div class="post_info">\r
                    <div class="badge"># ICO Groth</div>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        How Our Unique Tokenomics Ensures Sustainable Growth and Value?\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description mb-0">\r
                      Our unique tokenomics is designed to ensure sustainable growth and long-term value by balancing token supply and demand, rewarding community participation.\r
                    </p>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide" style="background-image: url('assets/images/blogs/blog_post_image_2.webp');">\r
                  <div class="post_info">\r
                    <div class="badge"># Ethereum ICO</div>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        Why Ethereum is the Ideal Blockchain Platform for Successful ICO..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description mb-0">\r
                      Ethereum is the ideal blockchain for ICOs due to its secure smart contracts and decentralization. It enables transparent, direct fundraising from global.\r
                    </p>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide" style="background-image: url('assets/images/blogs/blog_post_image_1.webp');">\r
                  <div class="post_info">\r
                    <div class="badge"># ICO Groth</div>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        How Our Unique Tokenomics Ensures Sustainable Growth and Value?\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description mb-0">\r
                      Our unique tokenomics is designed to ensure sustainable growth and long-term value by balancing token supply and demand, rewarding community participation.\r
                    </p>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide" style="background-image: url('assets/images/blogs/blog_post_image_2.webp');">\r
                  <div class="post_info">\r
                    <div class="badge"># Ethereum ICO</div>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        Why Ethereum is the Ideal Blockchain Platform for Successful ICO..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description mb-0">\r
                      Ethereum is the ideal blockchain for ICOs due to its secure smart contracts and decentralization. It enables transparent, direct fundraising from global.\r
                    </p>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="bc-pagination"></div>\r
              <button class="bc-button-prev" type="button" style="background-image: url('assets/images/shapes/shape_left.svg');">\r
                <i class="fa-solid fa-angles-left"></i>\r
              </button>\r
              <button class="bc-button-next" type="button" style="background-image: url('assets/images/shapes/shape_right.svg');">\r
                <i class="fa-solid fa-angles-right"></i>\r
              </button>\r
            </div>\r
            <div class="row justify-content-lg-between">\r
              <div class="col-lg-8">\r
                <div class="blog_post_left_image">\r
                  <a class="post_image" href="blog_details.html">\r
                    <img src="assets/images/blogs/blog_post_image_3.webp" alt="Post Image">\r
                  </a>\r
                  <div class="post_info">\r
                    <a class="blog_post_category" href="#!">#blockchain</a>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        What Makes ICOs a Game-Changer for Bitcoin and Crypto Investors?..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description">\r
                      Our ICO pioneers blockchain innovation, shaping the future.\r
                    </p>\r
                    <a class="btn" href="blog_details.html">\r
                      <span class="btn_label">Read More</span>\r
                      <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="blog_post_left_image">\r
                  <div class="post_info">\r
                    <a class="blog_post_category" href="#!">#ico tips</a>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        The Importance of Decentralization and How Our ICO Embraces It..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description">\r
                      Our ICO champions the principles of decentralization, creating a system that prioritizes fairness, ensures transparency, and empowers users to have greater.\r
                    </p>\r
                    <a class="btn" href="blog_details.html">\r
                      <span class="btn_label">Read More</span>\r
                      <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="blog_post_left_image">\r
                  <a class="post_image" href="blog_details.html">\r
                    <img src="assets/images/blogs/blog_post_image_4.webp" alt="Post Image">\r
                  </a>\r
                  <div class="post_info">\r
                    <a class="blog_post_category" href="#!">#ico</a>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        Behind the Scenes of Our ICO Insights into Project..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description">\r
                      Our ICO focuses on strategic planning, partnerships.\r
                    </p>\r
                    <a class="btn" href="blog_details.html">\r
                      <span class="btn_label">Read More</span>\r
                      <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="blog_post_left_image">\r
                  <div class="post_info">\r
                    <a class="blog_post_category" href="#!">#blockchain</a>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        Our Vision for a Blockchain-Powered Future and How You Can Join Us..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description">\r
                      Our vision is to build a blockchain-powered future, and we invite you to join us in revolutionizing the industry through innovation and decentralization.\r
                    </p>\r
                    <a class="btn" href="blog_details.html">\r
                      <span class="btn_label">Read More</span>\r
                      <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="blog_post_left_image">\r
                  <a class="post_image" href="blog_details.html">\r
                    <img src="assets/images/blogs/blog_post_image_5.webp" alt="Post Image">\r
                  </a>\r
                  <div class="post_info">\r
                    <a class="blog_post_category" href="#!">#investment</a>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        How We Ensure Security and Protect Your Investment in Our ICO..\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description">\r
                      We ensure security with blockchain, encryption, and audits.\r
                    </p>\r
                    <a class="btn" href="blog_details.html">\r
                      <span class="btn_label">Read More</span>\r
                      <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="blog_post_left_image">\r
                  <div class="post_info">\r
                    <a class="blog_post_category" href="#!">#ico investment</a>\r
                    <h3 class="blog_post_title">\r
                      <a href="blog_details.html">\r
                        Why Joining Our ICO Is More Than an Investment—It’s a Revolution..?\r
                      </a>\r
                    </h3>\r
                    <p class="blog_post_description">\r
                      Joining our ICO is more than an investment; it's a chance to be part of a revolutionary shift towards decentralization and blockchain innovation.\r
                    </p>\r
                    <a class="btn" href="blog_details.html">\r
                      <span class="btn_label">Read More</span>\r
                      <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <ul class="pagination_nav pt-3 unordered_list justify-content-center">\r
                  <li><a href="#!"><i class="fa-solid fa-angles-left"></i></a></li>\r
                  <li class="active"><a href="#!">1</a></li>\r
                  <li><a href="#!">2</a></li>\r
                  <li><a href="#!">3</a></li>\r
                  <li><a href="#!">...</a></li>\r
                  <li><a href="#!">9</a></li>\r
                  <li><a href="#!"><i class="fa-solid fa-angles-right"></i></a></li>\r
                </ul>\r
              </div>\r
              <div class="col-lg-4">\r
                <aside class="sidebar pt-5 pt-lg-0 ps-lg-5">\r
                  <div class="sidebar_search_block">\r
                    <h3 class="sidebar_title">Search</h3>\r
                    <form class="search_input" action="#">\r
                      <input type="search" name="search" placeholder="Search Anything...">\r
                      <button type="submit">\r
                        <img src="assets/icons/icon_search.svg" alt="Icon Search">\r
                      </button>\r
                    </form>\r
                  </div>\r
\r
                  <div class="recent_post_block">\r
                    <h3 class="sidebar_title">Related Posts</h3>\r
                    <ul class="recent_post_list unordered_list_block">\r
                      <li>\r
                        <a class="recent_post_item" href="blog_details.html">\r
                          <span class="blog_post_title">\r
                            10 Reasons Our ICO Is Poised for Success the Blockchain..\r
                          </span>\r
                          <span class="blog_post_admin">\r
                            <i class="fa-regular fa-circle-user"></i>\r
                            By Michael david\r
                          </span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="recent_post_item" href="blog_details.html">\r
                          <span class="blog_post_title">\r
                            How Blockchain Is Changing the World and Where Our..\r
                          </span>\r
                          <span class="blog_post_admin">\r
                            <i class="fa-regular fa-circle-user"></i>\r
                            By William thomas\r
                          </span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="recent_post_item" href="blog_details.html">\r
                          <span class="blog_post_title">\r
                            The Role of Our ICO in Driving Financial Inclusion Through..\r
                          </span>\r
                          <span class="blog_post_admin">\r
                            <i class="fa-regular fa-circle-user"></i>\r
                            By Christopher\r
                          </span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
\r
                  <div class="sidebar_category_list">\r
                    <h3 class="sidebar_title">Categories</h3>\r
                    <ul class="category_list_block unordered_list_block">\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Cybersecurity</span>\r
                          <span class="value">(05)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Blockchain Trends</span>\r
                          <span class="value">(02)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Digital Transformation</span>\r
                          <span class="value">(02)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Exchange Listings</span>\r
                          <span class="value">(04)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Security Alerts</span>\r
                          <span class="value">(03)</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a href="#!">\r
                          <span class="icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                          <span class="label">Investor Highlights</span>\r
                          <span class="value">(07)</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
\r
                  <div class="sidebar_tags">\r
                    <h3 class="sidebar_title">Popular Tags</h3>\r
                    <ul class="tags_block unordered_list">\r
                      <li><a href="#!">Blockchain</a></li>\r
                      <li><a href="#!">Investments</a></li>\r
                      <li><a href="#!">Web</a></li>\r
                      <li><a href="#!">Currency</a></li>\r
                      <li><a href="#!">Crypto Trading</a></li>\r
                      <li><a href="#!">ICO</a></li>\r
                      <li><a href="#!">ICO Blockchain</a></li>\r
                      <li><a href="#!">Crypto Advisor</a></li>\r
                      <li><a href="#!">Exchange</a></li>\r
                      <li><a href="#!">ICO Tokens</a></li>\r
                    </ul>\r
                  </div>\r
                </aside>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Blog Section - End\r
        ================================================== -->\r
\r
      </main>\r
      <!-- Main Body - End\r
      ================================================== -->\r
\r
      <!-- Site Footer - Start\r
      ================================================== -->\r
      <footer class="ico_site_footer section_decoration section_shadow_top">\r
        <div class="decoration_item shape_top">\r
          <img src="assets/images/shapes/shape_ico_hero_section_bottom.svg" alt="Bottom Line Shape">\r
        </div>\r
        <div class="container">\r
          <ul class="pagelist_block unordered_list justify-content-center text-uppercase">\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  About ICO\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Features\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Tokenomics\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Roadmap\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Team\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#!">\r
                <span class="pagelist_label">\r
                  Whitepaper\r
                </span>\r
              </a>\r
            </li>\r
          </ul>\r
          <div class="middle_area">\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Join our social group</h3>\r
              <ul class="social_block style_2 unordered_list justify-content-center">\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M12.1817 2.34636C10.5036 3.04236 7.14877 4.48456 2.11879 6.67146C1.30201 6.99576 0.873436 7.31296 0.834656 7.62286C0.768491 8.14806 1.42705 8.35476 2.32148 8.63456C2.44372 8.67336 2.57025 8.71206 2.69969 8.75516C3.58123 9.04066 4.76611 9.37506 5.38149 9.38796C5.9409 9.39946 6.56497 9.16986 7.25381 8.69916C11.9531 5.53206 14.379 3.93206 14.5314 3.89756C14.6393 3.87316 14.7888 3.84166 14.8894 3.93206C14.9901 4.02106 14.9801 4.19036 14.97 4.23626C14.9038 4.51326 12.3241 6.90826 10.9868 8.14806C10.5698 8.53416 10.2749 8.80826 10.2146 8.87136C10.0794 9.01056 9.94141 9.14396 9.80908 9.27176C8.98941 10.0581 8.37683 10.6494 9.84356 11.6137C10.5482 12.0772 11.1119 12.4604 11.6741 12.8421C12.2882 13.2597 12.9008 13.6758 13.6945 14.1953C13.8959 14.3273 14.0886 14.4636 14.2769 14.5971C14.9916 15.1065 15.6343 15.5628 16.4281 15.4911C16.8883 15.448 17.3656 15.0161 17.6072 13.726C18.1781 10.6752 19.3026 4.06836 19.5629 1.34476C19.5788 1.11856 19.5691 0.891358 19.5341 0.667358C19.5132 0.486458 19.425 0.320058 19.2868 0.201058C19.0812 0.0331581 18.7619 -0.002742 18.6182 0.000158001C17.9696 0.011558 16.9746 0.357458 12.1817 2.34636Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M14.7876 14L9.31558 5.8405L9.32498 5.8482L14.2588 0H12.6101L8.59076 4.76L5.39902 0H1.07488L6.18362 7.6179L0.794922 14H2.44366L6.91214 8.7042L10.4635 14H14.7876ZM4.74576 1.2727L12.4234 12.7273H11.1168L3.43295 1.2727H4.74576Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-brands fa-github"></i>\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Subscribe to our newslatter</h3>\r
              <form class="ico_newsletter_form" action="#">\r
                <input type="email" name="email" placeholder="Enter your email">\r
                <button class="submit_btn" type="submit">Submit</button>\r
              </form>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Let’s coinpay great together.</h3>\r
              <a class="ico_creative_btn" href="#!">\r
                <span class="btn_wrapper">\r
                  <span class="btn_icon_left">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                      <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                      <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                    </svg>\r
                  </span>\r
                  <span class="btn_label">Purchase a Token</span>\r
                  <span class="btn_icon_right">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                      <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                      <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                    </svg>\r
                  </span>\r
                </span>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="footer_bottom text-center">\r
            <p class="copyright_text m-0 text-secondary">Copyright© 2025 Coinpay. All rights reserved.</p>\r
          </div>\r
        </div>\r
      </footer>\r
      <!-- Site Footer - End\r
      ================================================== -->\r
\r
    </div>\r
    <!-- Body Wrap - End -->
`,h2=`<!-- Body Wrap - Start -->\r
    <div class="page_wrapper">\r
\r
      <!-- Back To Top - Start -->\r
      <div class="backtotop">\r
        <a href="#" class="scroll">\r
          <i class="fa-solid fa-arrow-up"></i>\r
        </a>\r
      </div>\r
      <!-- Back To Top - End -->\r
\r
      <!-- Preloader - Start -->\r
      <div id="preloader">\r
        <div class="line-1"></div> \r
        <div class="line-2"></div> \r
        <div class="line-3"></div> \r
        <div class="line-4"></div> \r
      </div>\r
      <!-- Preloader - End -->\r
\r
      <!-- Site Header - Start\r
      ================================================== -->\r
      <header class="site_header">\r
        <div class="nav_wrapper">\r
          <div class="container">\r
            <div class="row align-items-center">\r
              <div class="col-lg-3 col-5 d-flex align-items-center">\r
                <div class="site_logo">\r
                  <a class="site_link" href="index.html">\r
                    <img loading="lazy" src="assets/images/site_logo/site_logo_1.svg" alt="ICO Site Logo">\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-6 col-2">\r
                <nav class="main_menu navbar navbar-expand-lg">\r
                  <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">\r
                    <ul class="main_menu_list unordered_list text-uppercase">\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="homes_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Home">Home</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="homes_submenu">\r
                          <li>\r
                            <a class="dropdown-item" href="index_ico.html">\r
                              <span class="nav_link_label">Coinpay ICO</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_memecoin.html">\r
                              <span class="nav_link_label">Memecoin</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_pepecoin.html">\r
                              <span class="nav_link_label">Pepecoin</span>\r
                            </a>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_about_section">\r
                          <span class="nav_link_label" data-text="About ICO">About ICO</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_service_section">\r
                          <span class="nav_link_label" data-text="Features">Features</span>\r
                        </a>\r
                      </li>\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Help">Help</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="help_submenu">\r
                          <li>\r
                            <a class="dropdown-item scrollspy_btn" href="#id_ico_roadmap_section">\r
                              <span class="nav_link_label">Roadmap</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">Blog</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="blog_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="blog.html">\r
                                  <span class="nav_link_label">Blogs</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="blog_details.html">\r
                                  <span class="nav_link_label">Blog Details</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                          <li class="active">\r
                            <a class="dropdown-item" href="contact.html">\r
                              <span class="nav_link_label">Help Center</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="register_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">My Account</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="register_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="sign_in.html">\r
                                  <span class="nav_link_label">Sign In</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="sign_up.html">\r
                                  <span class="nav_link_label">Sign Up</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li class="active">\r
                        <a class="nav-link" href="contact.html">\r
                          <span class="nav_link_label" data-text="Contact">Contact</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </nav>\r
              </div>\r
              <div class="col-lg-3 col-5">\r
                <ul class="btns_group unordered_list p-0 justify-content-end">\r
                  <li class="d-lg-none">\r
                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">\r
                      <i class="far fa-bars"></i>\r
                    </button>\r
                  </li>\r
                  <li>\r
                    <a class="ico_btn_outline" href="sign_in.html">\r
                      <span class="btn_icon">\r
                        <i class="fa-solid fa-user"></i>\r
                      </span>\r
                      <span class="btn_label">Login</span>\r
                    </a>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
      <!-- Site Header - End\r
      ================================================== -->\r
\r
      <!-- Main Body - Start\r
      ================================================== -->\r
      <main class="page_content">\r
\r
        <!-- Hero Section - Start\r
        ================================================== -->\r
        <section class="page_header text-center">\r
          <div class="container">\r
            <h1 class="page_title">\r
              Contact Us\r
            </h1>\r
            <ol class="breadcrumb justify-content-center">\r
              <li class="breadcrumb-item"><a href="index.html">Coinpay</a></li>\r
              <li class="breadcrumb-item active" aria-current="page">Contact Us</li>\r
            </ol>\r
          </div>\r
        </section>\r
        <!-- Hero Section - End\r
        ================================================== -->\r
\r
        <!-- Contact Section - Start\r
        ================================================== -->\r
        <section class="contact_section section_space pt-0">\r
          <div class="container">\r
            <div class="row">\r
              <div class="col-lg-8">\r
                <div class="comment_form mb-0">\r
                  <h3 class="details_info_title">\r
                    Send Us a Message\r
                  </h3>\r
                  <p>\r
                    Got a question? Fill out the form, and we’ll get back to you shortly!\r
                  </p>\r
                  <form action="#">\r
                    <div class="row">\r
                      <div class="col-md-6">\r
                        <div class="form-group">\r
                          <label class="input_title" for="input_name">Name<sup>*</sup></label>\r
                          <input id="input_name" class="form-control" type="text" name="name" placeholder="Carlo Castillo" required>\r
                        </div>\r
                      </div>\r
                      <div class="col-md-6">\r
                        <div class="form-group">\r
                          <label class="input_title" for="input_email">Email<sup>*</sup></label>\r
                          <input id="input_email" class="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required>\r
                        </div>\r
                      </div>\r
                      <div class="col-12">\r
                        <div class="form-group">\r
                          <label class="input_title" for="input_phone">Phone<sup>*</sup></label>\r
                          <input id="input_phone" class="form-control" type="tel" name="phone" placeholder="(+880) 1680-6361-89" required>\r
                        </div>\r
                        <div class="form-group">\r
                          <label class="input_title" for="input_message">Cover Letter<sup>*</sup></label>\r
                          <textarea id="input_message" class="form-control" name="message" placeholder="Write about your self..." required></textarea>\r
                        </div>\r
                        <button class="btn" type="submit">\r
                          <span class="btn_label">Post Comment</span>\r
                          <span class="btn_icon"><i class="fa-solid fa-arrow-up-right"></i></span>\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </form>\r
                </div>\r
              </div>\r
\r
              <div class="col-lg-4">\r
                <div class="contact_info_box">\r
                  <ul class="contact_info_list unordered_list_block">\r
                    <li>\r
                      <a href="#!">\r
                        <span class="icon">\r
                          <i class="fa-solid fa-phone-volume"></i>\r
                        </span>\r
                        <span class="label">+(1) 1230 452 8597</span>\r
                      </a>\r
                    </li>\r
                    <li>\r
                      <a href="#!">\r
                        <span class="icon">\r
                          <i class="fa-solid fa-envelope"></i>\r
                        </span>\r
                        <span class="label">Coinpay@example.com</span>\r
                      </a>\r
                    </li>\r
                  </ul>\r
                  <ul class="social_block style_4 unordered_list">\r
                    <li>\r
                      <a href="#!">\r
                        <i class="fa-brands fa-facebook-f"></i>\r
                      </a>\r
                    </li>\r
                    <li>\r
                      <a href="#!">\r
                        <i class="fa-brands fa-twitter"></i>\r
                      </a>\r
                    </li>\r
                    <li>\r
                      <a href="#!">\r
                        <i class="fa-brands fa-linkedin-in"></i>\r
                      </a>\r
                    </li>\r
                  </ul>\r
                  <hr>\r
                  <ul class="iconlist_block unordered_list_block">\r
                    <li>\r
                      <span class="iconlist_label">\r
                        United States Office\r
                        <small class="iconlist_info">\r
                          Sunshine example park, Floor No 05A,Sector-94,\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_label">\r
                        United Kingdom Office\r
                        <small class="iconlist_info">\r
                          12 Buckingham Rd, example Thwaite, HG3 4 TY, UK Contact\r
                        </small>\r
                      </span>\r
                    </li>\r
                  </ul>\r
                  <hr>\r
                  <ul class="iconlist_block unordered_list_block">\r
                    <li>\r
                      <span class="iconlist_label">\r
                        Our Office Open Time\r
                        <small class="iconlist_info d-block">\r
                          Mon - Sat: 08.00 AM - 05.00 PM\r
                        </small>\r
                        <small class="iconlist_info d-block">\r
                          Sunday: Closed\r
                        </small>\r
                      </span>\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="gmap_canvas">\r
              <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Contact Section - End\r
        ================================================== -->\r
\r
      </main>\r
      <!-- Main Body - End\r
      ================================================== -->\r
\r
      <!-- Site Footer - Start\r
      ================================================== -->\r
      <footer class="ico_site_footer section_decoration section_shadow_top">\r
        <div class="decoration_item shape_top">\r
          <img src="assets/images/shapes/shape_ico_hero_section_bottom.svg" alt="Bottom Line Shape">\r
        </div>\r
        <div class="container">\r
          <ul class="pagelist_block unordered_list justify-content-center text-uppercase">\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_about_section">\r
                <span class="pagelist_label">\r
                  About ICO\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_service_section">\r
                <span class="pagelist_label">\r
                  Features\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_tokenomics_section">\r
                <span class="pagelist_label">\r
                  Tokenomics\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_roadmap_section">\r
                <span class="pagelist_label">\r
                  Roadmap\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_team_section">\r
                <span class="pagelist_label">\r
                  Team\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_whitepaper_section">\r
                <span class="pagelist_label">\r
                  Whitepaper\r
                </span>\r
              </a>\r
            </li>\r
          </ul>\r
          <div class="middle_area">\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Join our social group</h3>\r
              <ul class="social_block style_2 unordered_list justify-content-center">\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M12.1817 2.34636C10.5036 3.04236 7.14877 4.48456 2.11879 6.67146C1.30201 6.99576 0.873436 7.31296 0.834656 7.62286C0.768491 8.14806 1.42705 8.35476 2.32148 8.63456C2.44372 8.67336 2.57025 8.71206 2.69969 8.75516C3.58123 9.04066 4.76611 9.37506 5.38149 9.38796C5.9409 9.39946 6.56497 9.16986 7.25381 8.69916C11.9531 5.53206 14.379 3.93206 14.5314 3.89756C14.6393 3.87316 14.7888 3.84166 14.8894 3.93206C14.9901 4.02106 14.9801 4.19036 14.97 4.23626C14.9038 4.51326 12.3241 6.90826 10.9868 8.14806C10.5698 8.53416 10.2749 8.80826 10.2146 8.87136C10.0794 9.01056 9.94141 9.14396 9.80908 9.27176C8.98941 10.0581 8.37683 10.6494 9.84356 11.6137C10.5482 12.0772 11.1119 12.4604 11.6741 12.8421C12.2882 13.2597 12.9008 13.6758 13.6945 14.1953C13.8959 14.3273 14.0886 14.4636 14.2769 14.5971C14.9916 15.1065 15.6343 15.5628 16.4281 15.4911C16.8883 15.448 17.3656 15.0161 17.6072 13.726C18.1781 10.6752 19.3026 4.06836 19.5629 1.34476C19.5788 1.11856 19.5691 0.891358 19.5341 0.667358C19.5132 0.486458 19.425 0.320058 19.2868 0.201058C19.0812 0.0331581 18.7619 -0.002742 18.6182 0.000158001C17.9696 0.011558 16.9746 0.357458 12.1817 2.34636Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M14.7876 14L9.31558 5.8405L9.32498 5.8482L14.2588 0H12.6101L8.59076 4.76L5.39902 0H1.07488L6.18362 7.6179L0.794922 14H2.44366L6.91214 8.7042L10.4635 14H14.7876ZM4.74576 1.2727L12.4234 12.7273H11.1168L3.43295 1.2727H4.74576Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-brands fa-github"></i>\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Subscribe to our newslatter</h3>\r
              <form class="ico_newsletter_form" action="#">\r
                <input type="email" name="email" placeholder="Enter your email">\r
                <button class="submit_btn" type="submit">Submit</button>\r
              </form>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Let’s coinpay great together.</h3>\r
              <a class="ico_creative_btn" href="#!">\r
                <span class="btn_wrapper">\r
                  <span class="btn_icon_left">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                      <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                      <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                    </svg>\r
                  </span>\r
                  <span class="btn_label">Purchase a Token</span>\r
                  <span class="btn_icon_right">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                      <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                      <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                    </svg>\r
                  </span>\r
                </span>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="footer_bottom text-center">\r
            <p class="copyright_text m-0 text-secondary">Copyright© 2025 Coinpay. All rights reserved.</p>\r
          </div>\r
        </div>\r
      </footer>\r
      <!-- Site Footer - End\r
      ================================================== -->\r
\r
    </div>\r
    <!-- Body Wrap - End -->
`,Dr=`<!-- Body Wrap - Start -->\r
    <div class="page_wrapper">\r
\r
      <!-- Back To Top - Start -->\r
      <div class="backtotop">\r
        <a href="#" class="scroll">\r
          <i class="fa-solid fa-arrow-up"></i>\r
        </a>\r
      </div>\r
      <!-- Back To Top - End -->\r
\r
      <!-- Preloader - Start -->\r
      <div id="preloader">\r
        <div class="line-1"></div> \r
        <div class="line-2"></div> \r
        <div class="line-3"></div> \r
        <div class="line-4"></div> \r
      </div>\r
      <!-- Preloader - End -->\r
\r
      <!-- Site Header - Start\r
      ================================================== -->\r
      <header class="site_header">\r
        <div class="nav_wrapper">\r
          <div class="container">\r
            <div class="row align-items-center">\r
              <div class="col-lg-3 col-5 d-flex align-items-center">\r
                <div class="site_logo">\r
                  <a class="site_link" href="index.html">\r
                    <img loading="lazy" src="assets/images/site_logo/site_logo_1.svg" alt="ICO Site Logo">\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-6 col-2">\r
                <nav class="main_menu navbar navbar-expand-lg">\r
                  <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">\r
                    <ul class="main_menu_list unordered_list text-uppercase">\r
                      <li class="dropdown active">\r
                        <a class="nav-link" href="#" id="homes_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Home">Home</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="homes_submenu">\r
                          <li class="active">\r
                            <a class="dropdown-item" href="index_ico.html">\r
                              <span class="nav_link_label">Coinpay ICO</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_memecoin.html">\r
                              <span class="nav_link_label">Memecoin</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_pepecoin.html">\r
                              <span class="nav_link_label">Pepecoin</span>\r
                            </a>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_about_section">\r
                          <span class="nav_link_label" data-text="About ICO">About ICO</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_service_section">\r
                          <span class="nav_link_label" data-text="Features">Features</span>\r
                        </a>\r
                      </li>\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Help">Help</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="help_submenu">\r
                          <li>\r
                            <a class="dropdown-item scrollspy_btn" href="#id_ico_roadmap_section">\r
                              <span class="nav_link_label">Roadmap</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">Blog</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="blog_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="blog.html">\r
                                  <span class="nav_link_label">Blogs</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="blog_details.html">\r
                                  <span class="nav_link_label">Blog Details</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="contact.html">\r
                              <span class="nav_link_label">Help Center</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="register_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">My Account</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="register_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="sign_in.html">\r
                                  <span class="nav_link_label">Sign In</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="sign_up.html">\r
                                  <span class="nav_link_label">Sign Up</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link" href="contact.html">\r
                          <span class="nav_link_label" data-text="Contact">Contact</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </nav>\r
              </div>\r
              <div class="col-lg-3 col-5">\r
                <ul class="btns_group unordered_list p-0 justify-content-end">\r
                  <li class="d-lg-none">\r
                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">\r
                      <i class="far fa-bars"></i>\r
                    </button>\r
                  </li>\r
                  <li>\r
                    <a class="ico_btn_outline" href="sign_in.html">\r
                      <span class="btn_icon">\r
                        <i class="fa-solid fa-user"></i>\r
                      </span>\r
                      <span class="btn_label">Login</span>\r
                    </a>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
      <!-- Site Header - End\r
      ================================================== -->\r
\r
      <!-- Main Body - Start\r
      ================================================== -->\r
      <main class="page_content">\r
\r
        <!-- Hero Section - Start\r
        ================================================== -->\r
        <section class="ico_hero_section section_decoration text-center" style="background-image: url('assets/images/shapes/shape_net_ico_hero_section_bg.svg');">\r
          <div class="container">\r
            <h1 class="hero_title" data-aos="fade-up" data-aos-duration="800">\r
              ICO Token Sale at a Glance\r
            </h1>\r
            <ul class="btns_group unordered_list justify-content-center p-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">\r
              <li>\r
                <a class="ico_creative_btn" href="#!">\r
                  <span class="btn_wrapper">\r
                    <span class="btn_icon_left">\r
                      <small class="dot_top"></small>\r
                      <small class="dot_bottom"></small>\r
                      <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                        <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                        <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                      </svg>\r
                    </span>\r
                    <span class="btn_label">Purchase a Token</span>\r
                    <span class="btn_icon_right">\r
                      <small class="dot_top"></small>\r
                      <small class="dot_bottom"></small>\r
                      <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                        <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                        <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                      </svg>\r
                    </span>\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a class="ico_creative_btn" href="#!">\r
                  <span class="btn_wrapper">\r
                    <span class="btn_icon_left">\r
                      <small class="dot_top"></small>\r
                      <small class="dot_bottom"></small>\r
                      <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                        <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                        <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                      </svg>\r
                    </span>\r
                    <span class="btn_label">Read Documents</span>\r
                    <span class="btn_icon_right">\r
                      <small class="dot_top"></small>\r
                      <small class="dot_bottom"></small>\r
                      <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                        <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                        <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                      </svg>\r
                    </span>\r
                  </span>\r
                </a>\r
              </li>\r
            </ul>\r
            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
              <div class="ico_countdown_progress_box">\r
                <div class="ico_heading_block text-center mb-0">\r
                  <h2 class="highlight_title mb-0">\r
                    Start buy coinpay now!\r
                  </h2>\r
                </div>\r
                <ul class="countdown_timer_block unordered_list justify-content-center" data-countdown="2026/3/24" style="background-image: url('assets/images/shapes/shape_bg_ico_countdown.svg')"></ul>\r
                <div class="ico_progress">\r
                  <ul class="progress_range_step unordered_list justify-content-between">\r
                    <li>Soft Cap: $1.75m</li>\r
                    <li>Hard Cap: $4.75m</li>\r
                    <li>Bonus</li>\r
                  </ul>\r
                  <div class="progress">\r
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>\r
                  </div>\r
                  <ul class="progress_value unordered_list justify-content-between">\r
                    <li>Minimum Purchase: 200 ICOX</li>\r
                    <li>Raised so far: $1,830,985</li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="shape_bottom">\r
            <img src="assets/images/shapes/shape_ico_hero_section_bottom.svg" alt="Bottom Line Shape">\r
          </div>\r
          <div class="decoration_item shape_globe">\r
            <img src="assets/images/shapes/shape_globe.webp" alt="Shape Globe">\r
          </div>\r
          <div class="decoration_item shape_coin">\r
            <img src="assets/images/shapes/shape_coin.webp" alt="Shape Coin">\r
          </div>\r
        </section>\r
        <!-- Hero Section - End\r
        ================================================== -->\r
\r
        <!-- Partner Section - Start\r
        ================================================== -->\r
        <section class="partner_section">\r
          <div class="container">\r
            <div class="ico_heading_block text-center">\r
              <h2 class="highlight_title mb-0" data-aos="fade-up" data-aos-duration="600">\r
                Our top Partner\r
              </h2>\r
            </div>\r
\r
            <div class="partner_logo_carousel z-2 position-relative" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
              <div class="swiper-wrapper">\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_1.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_2.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_3.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_4.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_5.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_6.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_7.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_1.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_2.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_3.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_4.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_5.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_6.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_7.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
                <div class="swiper-slide">\r
                  <div class="ico_partner_logo">\r
                    <a class="logo_wrap" href="#!">\r
                      <img src="assets/images/partners/partner_logo_2.svg" alt="Partner Logo">\r
                      <span class="dot_1"></span>\r
                      <span class="dot_2"></span>\r
                      <span class="dot_3"></span>\r
                      <span class="dot_4"></span>\r
                    </a>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Partner Section - End\r
        ================================================== -->\r
\r
        <!-- About Section - Start\r
        ================================================== -->\r
        <section id="id_ico_about_section" class="ico_about_section section_space pb-0 section_decoration">\r
          <div class="container">\r
            <div class="row justify-content-lg-between">\r
              <div class="col-lg-6">\r
                <div class="ico_heading_block" data-aos="fade-up" data-aos-duration="600">\r
                  <h2 class="heading_text mb-0">\r
                    Introducing Coinpay ICO\r
                  </h2>\r
                </div>\r
                <ul class="about_ico_block unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                    <h3 class="title_text">\r
                      What is an Coinpay ICO?\r
                    </h3>\r
                    <p class="info_description mb-0">\r
                      Coinpay is a decentralized digital currency enabling peer-to-peer transactions without intermediaries. Introduced in 2022 by Satoshi Nakamoto, it is the first cryptocurrency, known for secure and borderless exchanges.\r
                    </p>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
                    <h3 class="title_text">\r
                      Why it’s need?\r
                    </h3>\r
                    <p class="info_description mb-0">\r
                      Coinpay is needed to provide a decentralized alternative to traditional financial systems. It allows secure, transparent, and borderless transactions without relying on banks or governments. This empowers individuals with financial freedom, \r
                    </p>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">\r
                    <h3 class="title_text">\r
                      Why wealth?\r
                    </h3>\r
                    <p class="info_description mb-0">\r
                      Coinpay is considered a form of wealth due to its scarcity, decentralization, and potential for long-term value growth. Its limited supply (21 million coins) makes it a store of value, while its global accessibility offers financial independence. \r
                    </p>\r
                  </li>\r
                </ul>\r
              </div>\r
              <div class="col-lg-5 d-lg-flex flex-lg-column-reverse">\r
                <ul class="about_ico_block unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                    <h3 class="title_text">\r
                      Market Opportunity\r
                    </h3>\r
                    <p class="info_description mb-0">\r
                      Coinpay's market opportunity stems from its growing adoption as a digital asset and payment method. As interest from investors, businesses, and institutions increases, It’s finance and retail is expanding, boosting its value and utility.\r
                    </p>\r
                  </li>\r
                </ul>\r
                <div class="ico_about_image text-center">\r
                  <div class="ripple_shape mb-lg-5">\r
                    <svg viewBox="0 0 501 455" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M500.5 227.5C500.5 352.824 388.618 454.5 250.5 454.5C112.382 454.5 0.5 352.824 0.5 227.5C0.5 102.176 112.382 0.5 250.5 0.5C388.618 0.5 500.5 102.176 500.5 227.5Z" stroke="url(#sro_paint0)"/>\r
                      <path d="M463.5 247.5C463.5 361.81 368.15 454.5 250.5 454.5C132.85 454.5 37.5 361.81 37.5 247.5C37.5 133.19 132.85 40.5 250.5 40.5C368.15 40.5 463.5 133.19 463.5 247.5Z" stroke="url(#sro_paint1)"/>\r
                      <path d="M425.5 268C425.5 371.031 347.12 454.5 250.5 454.5C153.88 454.5 75.5 371.031 75.5 268C75.5 164.969 153.88 81.5 250.5 81.5C347.12 81.5 425.5 164.969 425.5 268Z" stroke="url(#sro_paint2)"/>\r
                      <path d="M379.5 268C379.5 343.97 321.715 405.5 250.5 405.5C179.285 405.5 121.5 343.97 121.5 268C121.5 192.03 179.285 130.5 250.5 130.5C321.715 130.5 379.5 192.03 379.5 268Z" stroke="url(#sro_paint3)"/>\r
                      <defs>\r
                        <linearGradient id="sro_paint0" x1="250.5" y1="0" x2="250.5" y2="455" gradientUnits="userSpaceOnUse">\r
                          <stop offset="0" stop-color="#2A246D"/>\r
                          <stop offset="1" stop-color="#2A246D" stop-opacity="0"/>\r
                        </linearGradient>\r
                        <linearGradient id="sro_paint1" x1="250.5" y1="40" x2="250.5" y2="455" gradientUnits="userSpaceOnUse">\r
                          <stop offset="0" stop-color="#2A246D"/>\r
                          <stop offset="1" stop-color="#2A246D" stop-opacity="0"/>\r
                        </linearGradient>\r
                        <linearGradient id="sro_paint2" x1="250.5" y1="81" x2="250.5" y2="455" gradientUnits="userSpaceOnUse">\r
                          <stop offset="0" stop-color="#2A246D"/>\r
                          <stop offset="1" stop-color="#2A246D" stop-opacity="0"/>\r
                        </linearGradient>\r
                        <linearGradient id="sro_paint3" x1="250.5" y1="130" x2="250.5" y2="406" gradientUnits="userSpaceOnUse">\r
                          <stop offset="0" stop-color="#2A246D"/>\r
                          <stop offset="1" stop-color="#2A246D" stop-opacity="0"/>\r
                        </linearGradient>\r
                      </defs>\r
                    </svg>\r
                  </div>\r
                  <div class="coin_image">\r
                    <img src="assets/images/about/about_image.svg" alt="About Image">\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="decoration_item shape_shadow_1">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
          <div class="decoration_item shape_shadow_2">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
        </section>\r
        <!-- About Section - End\r
        ================================================== -->\r
\r
        <!-- Problem and Solution Section - Start\r
        ================================================== -->\r
        <section class="problem_solution_section section_space pb-0">\r
          <div class="container">\r
            <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="600">\r
              <h2 class="heading_text mb-0">\r
                Coinpay ICO Problem & Solution\r
              </h2>\r
            </div>\r
            <div class="ico_problem_solution_table" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
              <div class="column_wrapper">\r
                <div class="column_problem">\r
                  <h3 class="heading_text">\r
                    <span class="icon">\r
                      <img src="assets/icons/icon_man_question.svg" alt="Icon Man With Question">\r
                    </span>\r
                    <span class="text">ICO Problem</span>\r
                  </h3>\r
                  <ul class="iconlist_block unordered_list_block">\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Identify the Issue.\r
                        <small class="iconlist_info">\r
                          We ensure transparency with clear updates.\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Impact of the Problem.\r
                        <small class="iconlist_info">\r
                          The Problem in an ICO attracts investor confidence.\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Reduced Investment.\r
                        <small class="iconlist_info">\r
                          Less trust means fewer investments.\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Scaling and Absolete Tool.\r
                        <small class="iconlist_info">\r
                          Limited scalability hinders growth and expansion.\r
                        </small>\r
                      </span>\r
                    </li>\r
                  </ul>\r
                </div>\r
                <div class="column_solution">\r
                  <h3 class="heading_text">\r
                    <span class="icon">\r
                      <img src="assets/icons/icon_bulb.svg" alt="Icon Bulb">\r
                    </span>\r
                    <span class="text">ICO Solution</span>\r
                  </h3>\r
                  <ul class="iconlist_block unordered_list_block">\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Introduce the Project and Token.\r
                        <small class="iconlist_info">\r
                          Our ICO Vision building a Decentralized Ad Network.\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Key Features or Innovations.\r
                        <small class="iconlist_info">\r
                          Advanced tech, top security, and smooth scalability.\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Benefits to Users and Investors.\r
                        <small class="iconlist_info">\r
                          Transparency, security, and growth potential.\r
                        </small>\r
                      </span>\r
                    </li>\r
                    <li>\r
                      <span class="iconlist_icon">\r
                        <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                      </span>\r
                      <span class="iconlist_label">\r
                        Global Single-Platform.\r
                        <small class="iconlist_info">\r
                          Seamless access and transactions worldwide.\r
                        </small>\r
                      </span>\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Problem and Solution Section - End\r
        ================================================== -->\r
\r
        <!-- Ico Feature Section - Start\r
        ================================================== -->\r
        <section class="ico_feature_section section_space section_decoration">\r
          <div class="container">\r
            <div class="row justify-content-lg-between">\r
              <div class="col-lg-5">\r
                <div class="ico_heading_block" data-aos="fade-up" data-aos-duration="600">\r
                  <h2 class="heading_text mb-0">\r
                    Why Coinpay is Worth Buying Today?\r
                  </h2>\r
                </div>\r
                <ul class="ico_features_group unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_dollar.svg" alt="Icon Dollar">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Expected Investment Value</h3>\r
                        <p class="iconbox_description mb-0">180,000 $ ROI = 360%</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_chart.svg" alt="Icon Chart">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Expected Investment Value</h3>\r
                        <p class="iconbox_description mb-0">180,000 $ ROI = 360%</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_gift.svg" alt="Icon Gift">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Expected Investment Value</h3>\r
                        <p class="iconbox_description mb-0">180,000 $ ROI = 360%</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                </ul>\r
              </div>\r
              <div class="col-lg-6">\r
                <ul class="ico_investment_value unordered_list justify-content-md-between" data-aos="fade-up" data-aos-duration="600">\r
                  <li>\r
                    <h4 class="heading_text">Amount invested</h4>\r
                    <div class="investment_value">\r
                      <span class="odometer" data-count="60000">0</span>\r
                      <span>$</span>\r
                    </div>\r
                  </li>\r
                  <li>\r
                    <h4 class="heading_text">Quantity Coinpay</h4>\r
                    <div class="investment_value">\r
                      <span class="odometer" data-count="600000">0</span>\r
                      <span>Coinpay</span>\r
                    </div>\r
                  </li>\r
                </ul>\r
\r
                <div class="ico_coin_purchase_price" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                  <p class="purchase_price_rate mb-0 text-secondary">\r
                    Purchase Price Coinpay <strong>0.166$</strong>\r
                  </p>\r
                  <div class="chart_image">\r
                    <img src="assets/images/shapes/shape_chart.svg" alt="Shape Chart">\r
                  </div>\r
                  <div class="live_values">\r
                    <span>100$</span>\r
                    <span>100.000$</span>\r
                  </div>\r
                </div>\r
\r
                <div class="ico_calculation_range" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
                  <div class="live_values">\r
                    <span>Calculation Time</span>\r
                    <span>Q3 2025</span>\r
                  </div>\r
                  <div class="range_image">\r
                    <img src="assets/images/shapes/shape_range.svg" alt="Shape Range">\r
                  </div>\r
                  <div class="live_values">\r
                    <span>100$</span>\r
                    <span>100.000$</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="decoration_item shape_shadow_1">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
          <div class="decoration_item shape_shadow_2">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
        </section>\r
        <!-- Ico Feature Section - End\r
        ================================================== -->\r
\r
        <!-- Service Section - Start\r
        ================================================== -->\r
        <section id="id_ico_service_section" class="ico_service_section section_space pb-0 section_decoration section_shadow_top">\r
          <div class="decoration_item shape_divider_1">\r
            <img src="assets/images/shapes/shape_section_divider_1.svg" alt="Shape Divider">\r
          </div>\r
          <div class="container">\r
            <div class="ico_heading_block text-center mt-lg-4" data-aos="fade-up" data-aos-duration="600">\r
              <h2 class="heading_text mb-0">\r
                Why You Choose Coinpay?\r
              </h2>\r
            </div>\r
            <div class="row m-lg-0 justify-content-center">\r
              <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                <div class="ico_service_image">\r
                  <img src="assets/images/services/ico_service_image.webp" alt="ICO Service Icon">\r
                </div>\r
              </div>\r
              <div class="col-lg-4 p-lg-0 order-lg-first" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
                <div class="ico_iconbox_block">\r
                  <div class="iconbox_icon">\r
                    <img src="assets/icons/icon_dollar_2.svg" alt="Icon Dollar">\r
                  </div>\r
                  <div class="iconbox_info">\r
                    <h3 class="iconbox_title">\r
                      Universal ATM\r
                    </h3>\r
                    <p class="iconbox_description mb-0">\r
                      ATM for stable currency unicast any other currencies. \r
                    </p>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">\r
                <div class="ico_iconbox_block">\r
                  <div class="iconbox_icon">\r
                    <img src="assets/icons/icon_bank_building.svg" alt="Icon Bank Building">\r
                  </div>\r
                  <div class="iconbox_info">\r
                    <h3 class="iconbox_title">\r
                      Smart Banking Branch\r
                    </h3>\r
                    <p class="iconbox_description mb-0">\r
                      kyc handles lender negotiation or insurance procedures.\r
                    </p>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">\r
                <div class="ico_iconbox_block">\r
                  <div class="iconbox_icon">\r
                    <img src="assets/icons/icon_scan.svg" alt="Icon Scan">\r
                  </div>\r
                  <div class="iconbox_info">\r
                    <h3 class="iconbox_title">\r
                      Automation\r
                    </h3>\r
                    <p class="iconbox_description mb-0">\r
                      Payment of invoices, create, deposited or integration for betting offices. \r
                    </p>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">\r
                <div class="ico_iconbox_block">\r
                  <div class="iconbox_icon">\r
                    <img src="assets/images/services/icon_pinpoint.png" alt="Icon Pinpoint">\r
                  </div>\r
                  <div class="iconbox_info">\r
                    <h3 class="iconbox_title">\r
                      Decentralization\r
                    </h3>\r
                    <p class="iconbox_description mb-0">\r
                      All transactions are in a blockchain, each machine is a network builder.\r
                    </p>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="decoration_item shape_shadow_1">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
          <div class="decoration_item shape_shadow_2">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
        </section>\r
        <!-- Service Section - End\r
        ================================================== -->\r
\r
        <!-- Tokenomics Section - Start\r
        ================================================== -->\r
        <section id="id_ico_tokenomics_section" class="ico_tokenomics_section section_space pb-0">\r
          <div class="container">\r
            <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="600">\r
              <h2 class="heading_text mb-0">\r
                Coinpay Tokenomics\r
              </h2>\r
            </div>\r
\r
            <div class="row align-items-center">\r
              <div class="col-lg-4 position-relative z-1">\r
                <ul class="tokenomics_block unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                    <div class="percent">15%</div>\r
                    <div class="info">\r
                      <h4 class="heading_text">Presale</h4>\r
                      <div class="value">\r
                        [<span class="odometer" data-count="1200000000">0</span><span>$</span>]\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
                    <div class="percent">22%</div>\r
                    <div class="info">\r
                      <h4 class="heading_text">CEX & DEX Liquidity</h4>\r
                      <div class="value">\r
                        [<span class="odometer" data-count="1200000000">0</span><span>$</span>]\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">\r
                    <div class="percent">13%</div>\r
                    <div class="info">\r
                      <h4 class="heading_text">Team</h4>\r
                      <div class="value">\r
                        [<span class="odometer" data-count="1200000000">0</span><span>$</span>]\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">\r
                    <div class="percent">12%</div>\r
                    <div class="info">\r
                      <h4 class="heading_text">Community Incentives</h4>\r
                      <div class="value">\r
                        [<span class="odometer" data-count="1200000000">0</span><span>$</span>]\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">\r
                    <div class="percent">10%</div>\r
                    <div class="info">\r
                      <h4 class="heading_text">Marketing</h4>\r
                      <div class="value">\r
                        [<span class="odometer" data-count="1200000000">0</span><span>$</span>]\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">\r
                    <div class="percent">28%</div>\r
                    <div class="info">\r
                      <h4 class="heading_text">Treasury and Ecosystem Growth</h4>\r
                      <div class="value">\r
                        [<span class="odometer" data-count="1200000000">0</span><span>$</span>]\r
                      </div>\r
                    </div>\r
                  </li>\r
                </ul>\r
              </div>\r
              <div class="col-lg-4">\r
                <div class="icon_coins_image">\r
                  <img src="assets/images/shapes/ico_coins_image.svg" alt="ICO Coin Image">\r
                </div>\r
              </div>\r
              <div class="col-lg-4 position-relative z-1">\r
                <ul class="ico_features_group unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_token_supply.svg" alt="Icon Token Supply">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Total Token Supply</h3>\r
                        <p class="iconbox_description mb-0">8.000.000.000 $</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_token_network.svg" alt="Icon Token Network">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Token Network</h3>\r
                        <p class="iconbox_description mb-0">ERC-20$</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_estimated_launch_price.svg" alt="Icon Estimated Launch Price">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Estimated Launch price</h3>\r
                        <p class="iconbox_description mb-0">0.20$</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">\r
                    <div class="ico_iconbox_icon_left">\r
                      <div class="iconbox_icon">\r
                        <img src="assets/icons/icon_expected_ripple_price.svg" alt="Icon Expected Ripple Price">\r
                      </div>\r
                      <div class="iconbox_info">\r
                        <h3 class="iconbox_title">Expected Ripple price</h3>\r
                        <p class="iconbox_description mb-0">0.80 $</p>\r
                      </div>\r
                    </div>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
\r
            <div class="btns_group pb-0 justify-content-center" data-aos="fade-up" data-aos-duration="600">\r
              <a class="ico_creative_btn" href="#!">\r
                <span class="btn_wrapper">\r
                  <span class="btn_icon_left">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                      <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                      <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                    </svg>\r
                  </span>\r
                  <span class="btn_label">Purchase a Token</span>\r
                  <span class="btn_icon_right">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                      <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                      <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                    </svg>\r
                  </span>\r
                </span>\r
              </a>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Tokenomics Section - End\r
        ================================================== -->\r
\r
        <!-- ICO Roadmap Section - Start\r
        ================================================== -->\r
        <section id="id_ico_roadmap_section" class="ico_roadmap_section section_space mt-lg-5 section_decoration">\r
          <div class="container">\r
            <div class="ico_heading_block text-center mt-lg-5 pt-lg-5" data-aos="fade-up" data-aos-duration="600">\r
              <h2 class="heading_text mb-0">\r
                Roadmap\r
              </h2>\r
            </div>\r
\r
            <div class="ico_roadmap_flexbox" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">\r
              <div class="roadmap_block">\r
                <div class="badge">Q1 - 2024</div>\r
                <h3 class="heading_text">\r
                  Concept & Planning\r
                </h3>\r
                <ul class="iconlist_block unordered_list_block">\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Conduct in-depth analysis to identify market opportunities and challenges.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Develop a clear and innovative concept tailored to industry needs.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Prepare a comprehensive document detailing the project’s vision, goals, and tokenomics.\r
                    </span>\r
                  </li>\r
                </ul>\r
                <div class="hover_shape">\r
                  <img src="assets/images/shapes/shape_circle_1.webp" alt="Shape Circle">\r
                </div>\r
              </div>\r
              <div class="roadmap_block">\r
                <div class="badge">Q2 - 2024</div>\r
                <h3 class="heading_text">\r
                  Community Building\r
                </h3>\r
                <ul class="iconlist_block unordered_list_block">\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Connect with potential investors and users to create awareness.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Leverage social platforms to grow the community and keep them informed.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Offer rewards and bonuses to early supporters to build trust.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Host AMAs and sessions to engage.\r
                    </span>\r
                  </li>\r
                </ul>\r
                <div class="hover_shape">\r
                  <img src="assets/images/shapes/shape_circle_1.webp" alt="Shape Circle">\r
                </div>\r
              </div>\r
              <div class="roadmap_block">\r
                <div class="badge">Q3 - Q2 2025</div>\r
                <h3 class="heading_text">\r
                  ICO Launch\r
                </h3>\r
                <ul class="iconlist_block unordered_list_block">\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Strong community interest and early investments that build momentum.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Achieving target funding goals during the ICO period, project viability.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Successful listing on major exchanges, increasing liquidity and user access.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Key feature milestones achieved.\r
                    </span>\r
                  </li>\r
                </ul>\r
                <div class="hover_shape">\r
                  <img src="assets/images/shapes/shape_circle_1.webp" alt="Shape Circle">\r
                </div>\r
              </div>\r
              <div class="roadmap_block">\r
                <div class="badge">Q4 - 2025</div>\r
                <h3 class="heading_text">\r
                  Token Distribution\r
                </h3>\r
                <ul class="iconlist_block unordered_list_block">\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Tokens for public sale to investors.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Allocate tokens for the team.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Set aside tokens for future needs.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Tokens will drive community and marketing efforts.\r
                    </span>\r
                  </li>\r
                  <li>\r
                    <span class="iconlist_icon">\r
                      <i class="fa-solid fa-circle"></i>\r
                    </span>\r
                    <span class="iconlist_label">\r
                      Reward participants for promotion.\r
                    </span>\r
                  </li>\r
                </ul>\r
                <div class="hover_shape">\r
                  <img src="assets/images/shapes/shape_circle_1.webp" alt="Shape Circle">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="decoration_item shape_divider_1">\r
            <img src="assets/images/shapes/shape_section_divider_2.svg" alt="Shape Divider">\r
          </div>\r
        </section>\r
        <!-- ICO Roadmap Section - End\r
        ================================================== -->\r
\r
        <!-- Team Section - Start\r
        ================================================== -->\r
        <section id="id_ico_team_section" class="ico_team_section section_decoration section_shadow_top section_space">\r
          <div class="decoration_item shape_divider_1">\r
            <img src="assets/images/shapes/shape_section_divider_1.svg" alt="Shape Divider">\r
          </div>\r
          <div class="container">\r
            <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="800">\r
              <h2 class="heading_text mb-0">\r
                Active Team & Advisors\r
              </h2>\r
            </div>\r
\r
            <div class="tab_block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">\r
              <div class="d-flex justify-content-center">\r
                <ul class="nav unordered_list justify-content-md-center" role="tablist">\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link active" data-bs-target="#tab_advisory_team" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Advisory Team</button>\r
                  </li>\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link" data-bs-target="#tab_management_team" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Management Team</button>\r
                  </li>\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link" data-bs-target="#tab_marketing_team" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Marketing Team</button>\r
                  </li>\r
                </ul>\r
              </div>\r
              <div class="tab-content">\r
                <div class="tab-pane fade show active" role="tabpanel" id="tab_advisory_team">\r
                  <div class="row justify-content-center">\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_1.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_1.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Levi Harrison</h3>\r
                            <span class="team_member_designation mb-0">Compliance Officer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Compliance Officer ensuring regulatory adherence and risk management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Levi Harrison</h4>\r
                            <span class="team_member_designation mb-0">Compliance Officer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_2.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_2.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Luna Seraphine</h3>\r
                            <span class="team_member_designation mb-0">Financial Officer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Financial Officer focused on profitability and resource management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Luna Seraphine</h4>\r
                            <span class="team_member_designation mb-0">Financial Officer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_3.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_3.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Elias Maverick</h3>\r
                            <span class="team_member_designation mb-0">Founder & CEO</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              A hands on founder who loves building scaling businesses with clients.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Elias Maverick</h4>\r
                            <span class="team_member_designation mb-0">Founder & CEO</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_4.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_4.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Atticus Graham</h3>\r
                            <span class="team_member_designation mb-0">Technical Support</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Passionate in seeking solutions for your problems.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Atticus Graham</h4>\r
                            <span class="team_member_designation mb-0">Technical Support</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_5.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_5.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Amara Noelle</h3>\r
                            <span class="team_member_designation mb-0">CTO Manager</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              CTO Manager driving tech innovation and overseeing development strategies.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Amara Noelle</h4>\r
                            <span class="team_member_designation mb-0">CTO Manager</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_6.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_6.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Ethan Mitchell</h3>\r
                            <span class="team_member_designation mb-0">Blockchain Developer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Blockchain Developer building secure and scalable decentralized solutions.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Ethan Mitchell</h4>\r
                            <span class="team_member_designation mb-0">Blockchain Developer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_7.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_7.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Aurora Selene</h3>\r
                            <span class="team_member_designation mb-0">Legal Advisor</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Legal Advisor providing expert guidance on legal matters and risk management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Aurora Selene</h4>\r
                            <span class="team_member_designation mb-0">Legal Advisor</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_8.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_8.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Orion Maxwell</h3>\r
                            <span class="team_member_designation mb-0">Project Manager</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Committed to delivering successful projects consistently.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Orion Maxwell</h4>\r
                            <span class="team_member_designation mb-0">Project Manager</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="tab-pane fade" role="tabpanel" id="tab_management_team">\r
                  <div class="row justify-content-center">\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_1.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_1.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Levi Harrison</h3>\r
                            <span class="team_member_designation mb-0">Compliance Officer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Compliance Officer ensuring regulatory adherence and risk management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Levi Harrison</h4>\r
                            <span class="team_member_designation mb-0">Compliance Officer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_2.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_2.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Luna Seraphine</h3>\r
                            <span class="team_member_designation mb-0">Financial Officer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Financial Officer focused on profitability and resource management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Luna Seraphine</h4>\r
                            <span class="team_member_designation mb-0">Financial Officer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_3.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_3.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Elias Maverick</h3>\r
                            <span class="team_member_designation mb-0">Founder & CEO</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              A hands on founder who loves building scaling businesses with clients.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Elias Maverick</h4>\r
                            <span class="team_member_designation mb-0">Founder & CEO</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_4.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_4.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Atticus Graham</h3>\r
                            <span class="team_member_designation mb-0">Technical Support</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Passionate in seeking solutions for your problems.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Atticus Graham</h4>\r
                            <span class="team_member_designation mb-0">Technical Support</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_5.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_5.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Amara Noelle</h3>\r
                            <span class="team_member_designation mb-0">CTO Manager</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              CTO Manager driving tech innovation and overseeing development strategies.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Amara Noelle</h4>\r
                            <span class="team_member_designation mb-0">CTO Manager</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_6.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_6.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Ethan Mitchell</h3>\r
                            <span class="team_member_designation mb-0">Blockchain Developer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Blockchain Developer building secure and scalable decentralized solutions.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Ethan Mitchell</h4>\r
                            <span class="team_member_designation mb-0">Blockchain Developer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_7.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_7.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Aurora Selene</h3>\r
                            <span class="team_member_designation mb-0">Legal Advisor</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Legal Advisor providing expert guidance on legal matters and risk management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Aurora Selene</h4>\r
                            <span class="team_member_designation mb-0">Legal Advisor</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_8.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_8.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Orion Maxwell</h3>\r
                            <span class="team_member_designation mb-0">Project Manager</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Committed to delivering successful projects consistently.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Orion Maxwell</h4>\r
                            <span class="team_member_designation mb-0">Project Manager</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="tab-pane fade" role="tabpanel" id="tab_marketing_team">\r
                  <div class="row justify-content-center">\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_1.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_1.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Levi Harrison</h3>\r
                            <span class="team_member_designation mb-0">Compliance Officer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Compliance Officer ensuring regulatory adherence and risk management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Levi Harrison</h4>\r
                            <span class="team_member_designation mb-0">Compliance Officer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_2.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_2.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Luna Seraphine</h3>\r
                            <span class="team_member_designation mb-0">Financial Officer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Financial Officer focused on profitability and resource management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Luna Seraphine</h4>\r
                            <span class="team_member_designation mb-0">Financial Officer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_3.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_3.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Elias Maverick</h3>\r
                            <span class="team_member_designation mb-0">Founder & CEO</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              A hands on founder who loves building scaling businesses with clients.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Elias Maverick</h4>\r
                            <span class="team_member_designation mb-0">Founder & CEO</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_4.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_4.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Atticus Graham</h3>\r
                            <span class="team_member_designation mb-0">Technical Support</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Passionate in seeking solutions for your problems.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Atticus Graham</h4>\r
                            <span class="team_member_designation mb-0">Technical Support</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_5.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_5.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Amara Noelle</h3>\r
                            <span class="team_member_designation mb-0">CTO Manager</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              CTO Manager driving tech innovation and overseeing development strategies.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Amara Noelle</h4>\r
                            <span class="team_member_designation mb-0">CTO Manager</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_6.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_6.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Ethan Mitchell</h3>\r
                            <span class="team_member_designation mb-0">Blockchain Developer</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Blockchain Developer building secure and scalable decentralized solutions.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Ethan Mitchell</h4>\r
                            <span class="team_member_designation mb-0">Blockchain Developer</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_7.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_7.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Aurora Selene</h3>\r
                            <span class="team_member_designation mb-0">Legal Advisor</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Legal Advisor providing expert guidance on legal matters and risk management.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Aurora Selene</h4>\r
                            <span class="team_member_designation mb-0">Legal Advisor</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-lg-3 col-md-6 col-sm-6">\r
                      <div class="ico_team_block">\r
                        <div class="ico_team_block_inner">\r
                          <div class="front_side_content">\r
                            <div class="team_avatar" style="background-image: url('assets/images/shapes/shape_circle_8.svg');">\r
                              <div class="avatar_wrap">\r
                                <img src="assets/images/avatars/avatar_8.webp" alt="Avatar">\r
                              </div>\r
                            </div>\r
                            <h3 class="team_member_name">Orion Maxwell</h3>\r
                            <span class="team_member_designation mb-0">Project Manager</span>\r
                          </div>\r
                          <div class="back_side_content">\r
                            <p class="team_member_description">\r
                              Committed to delivering successful projects consistently.\r
                            </p>\r
                            <ul class="social_block unordered_list justify-content-center">\r
                              <li>\r
                                <a href="#!">\r
                                  <i class="fa-brands fa-linkedin"></i>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                            <h4 class="team_member_name">Orion Maxwell</h4>\r
                            <span class="team_member_designation mb-0">Project Manager</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Team Section - End\r
        ================================================== -->\r
\r
        <!-- White Paper Section - Start\r
        ================================================== -->\r
        <section id="id_ico_whitepaper_section" class="ico_whitepaper_section section_space pb-0 section_decoration section_shadow_top">\r
          <div class="decoration_item shape_divider_1">\r
            <img src="assets/images/shapes/shape_section_divider_1.svg" alt="Shape Divider">\r
          </div>\r
          <div class="container">\r
            <div class="ico_heading_block text-center mt-lg-4" data-aos="fade-up" data-aos-duration="800">\r
              <h2 class="heading_text mb-0">\r
                Whitepaper\r
              </h2>\r
            </div>\r
\r
            <div class="whitepaper_content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">\r
              <div class="row m-0 align-items-center">\r
                <div class="col-lg-6 p-0">\r
                  <div class="whitepaper_image_wrap" style="background-image: url('assets/images/about/whitepaper_image_bg.webp');">\r
                    <div class="image_block">\r
                      <img src="assets/images/about/ico_whitepager_image.webp" alt="ICO White Paper Image">\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-lg-6 p-0">\r
                  <div class="whitepaper_info_wrap">\r
                    <div class="info_wrap_1">\r
                      <h3 class="heading_text">Audit Results</h3>\r
                      <p>\r
                        Coinpay has been successfully audited by the trusted organizations  BitTorrent and Stacks. Passing these audits underscores our dedication  to building a safe and robust solution for all users.\r
                      </p>\r
                      <ul class="partners_group unordered_list">\r
                        <li>\r
                          <div class="ico_partner_logo">\r
                            <a class="logo_wrap" href="#!">\r
                              <img src="assets/images/partners/partner_logo_1.svg" alt="Partner Logo">\r
                              <span class="dot_1"></span>\r
                              <span class="dot_2"></span>\r
                              <span class="dot_3"></span>\r
                              <span class="dot_4"></span>\r
                            </a>\r
                          </div>\r
                        </li>\r
                        <li>\r
                          <div class="ico_partner_logo">\r
                            <a class="logo_wrap" href="#!">\r
                              <img src="assets/images/partners/partner_logo_2.svg" alt="Partner Logo">\r
                              <span class="dot_1"></span>\r
                              <span class="dot_2"></span>\r
                              <span class="dot_3"></span>\r
                              <span class="dot_4"></span>\r
                            </a>\r
                          </div>\r
                        </li>\r
                      </ul>\r
                    </div>\r
                    <div class="info_wrap_2">\r
                      <h3 class="heading_text">Explore Whitepaper</h3>\r
                      <p>\r
                        Here is our full documents that help you to understand deeply about us and our operation.\r
                      </p>\r
                      <div class="row">\r
                        <div class="col-md-6">\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                              </span>\r
                              <span class="iconlist_label">\r
                                White Paper.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Privacy & Policy.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                        <div class="col-md-6">\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Terms Of Coin Sale.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <img src="assets/icons/icon_check.svg" alt="Icon Check">\r
                              </span>\r
                              <span class="iconlist_label">\r
                                One Pager.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                      <a class="ico_creative_btn" href="#!">\r
                        <span class="btn_wrapper">\r
                          <span class="btn_icon_left">\r
                            <small class="dot_top"></small>\r
                            <small class="dot_bottom"></small>\r
                            <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                              <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                              <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                              <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                            </svg>\r
                          </span>\r
                          <span class="btn_label">Download White Papper</span>\r
                          <span class="btn_icon_right">\r
                            <small class="dot_top"></small>\r
                            <small class="dot_bottom"></small>\r
                            <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                              <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                              <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                              <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                            </svg>\r
                          </span>\r
                        </span>\r
                      </a>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- White Paper Section - End\r
        ================================================== -->\r
\r
        <!-- Event Section - Start\r
        ================================================== -->\r
        <section class="ico_event_section section_space pb-0 section_decoration mt-lg-5">\r
          <div class="container">\r
            <div class="ico_heading_block text-center mt-lg-5 pt-lg-5" data-aos="fade-up" data-aos-duration="800">\r
              <h2 class="heading_text mb-0">\r
                Our Upcoming Events\r
              </h2>\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-lg-6 order-lg-last">\r
                <ul class="event_loop_builder unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">\r
                    <div class="event_card_block">\r
                      <a class="event_image" href="#!">\r
                        <img src="assets/images/events/event_image_4.webp" alt="Event Image">\r
                      </a>\r
                      <div class="event_date">\r
                        <i class="fa-solid fa-calendar-days"></i>\r
                        <span>24, Dec 2025</span>\r
                      </div>\r
                      <div class="event_info">\r
                        <div class="event_location">\r
                          <i class="fa-regular fa-location-dot"></i>\r
                          139 W, 46th Street, Dubai.\r
                        </div>\r
                        <h3 class="event_title">\r
                          <a href="#!">\r
                            Blockchain Horizons The Future of Digital Finance.\r
                          </a>\r
                        </h3>\r
                        <a class="ico_btn_link" href="#!">\r
                          <span class="btn_label">Get a Tickets</span>\r
                          <span class="btn_icon">\r
                            <svg class="icon_arrow" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                              <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"></path>\r
                              <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"></path>\r
                              <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"></path>\r
                            </svg>\r
                          </span>\r
                        </a>\r
                      </div>\r
                    </div>\r
                  </li>\r
                </ul>\r
              </div>\r
              <div class="col-lg-6">\r
                <ul class="event_loop_builder unordered_list_block">\r
                  <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">\r
                    <div class="event_block_left_image">\r
                      <a class="event_image" href="#!">\r
                        <img src="assets/images/events/event_image_1.webp" alt="Event Image">\r
                        <span class="event_date">24, Nov 2025</span>\r
                      </a>\r
                      <div class="event_info">\r
                        <div class="event_location">\r
                          <i class="fa-regular fa-location-dot"></i>\r
                          139 W, 46th Street, Dubai.\r
                        </div>\r
                        <h3 class="event_title mb-0">\r
                          <a href="#!">\r
                            Digital Assets Forum Navigating the Crypto Landscape.\r
                          </a>\r
                        </h3>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">\r
                    <div class="event_block_left_image">\r
                      <a class="event_image" href="#!">\r
                        <img src="assets/images/events/event_image_2.webp" alt="Event Image">\r
                        <span class="event_date">24, Nov 2025</span>\r
                      </a>\r
                      <div class="event_info">\r
                        <div class="event_location">\r
                          <i class="fa-regular fa-location-dot"></i>\r
                          New York, NY 10036, USA.\r
                        </div>\r
                        <h3 class="event_title mb-0">\r
                          <a href="#!">\r
                            Coinpay Impact Rising Stars in the Crypto Space.\r
                          </a>\r
                        </h3>\r
                      </div>\r
                    </div>\r
                  </li>\r
                  <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">\r
                    <div class="event_block_left_image">\r
                      <a class="event_image" href="#!">\r
                        <img src="assets/images/events/event_image_3.webp" alt="Event Image">\r
                        <span class="event_date">24, Nov 2025</span>\r
                      </a>\r
                      <div class="event_info">\r
                        <div class="event_location">\r
                          <i class="fa-regular fa-location-dot"></i>\r
                          139 W, 46th Street, Australia.\r
                        </div>\r
                        <h3 class="event_title mb-0">\r
                          <a href="#!">\r
                            Mining Matters Maximizing Returns in Crypto Mining.\r
                          </a>\r
                        </h3>\r
                      </div>\r
                    </div>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="decoration_item shape_divider_1">\r
            <img src="assets/images/shapes/shape_section_divider_2.svg" alt="Shape Divider">\r
          </div>\r
          <div class="decoration_item shape_shadow_1">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
          <div class="decoration_item shape_shadow_2">\r
            <img src="assets/images/shapes/shape_poligon.svg" alt="Shape Color Shadow">\r
          </div>\r
        </section>\r
        <!-- Event Section - End\r
        ================================================== -->\r
\r
        <!-- FAQ Section - Start\r
        ================================================== -->\r
        <section class="faq_section section_space">\r
          <div class="container">\r
            <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="800">\r
              <h2 class="heading_text mb-0">\r
                FAQ\r
              </h2>\r
            </div>\r
\r
            <div class="tab_block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">\r
              <div class="d-flex justify-content-center">\r
                <ul class="nav unordered_list justify-content-md-center" role="tablist">\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link active" data-bs-target="#tab_general_question" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">General Question</button>\r
                  </li>\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link" data-bs-target="#tab_ico_questions" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">ICO Questions</button>\r
                  </li>\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link" data-bs-target="#tab_tokens_sales" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Tokens Sales</button>\r
                  </li>\r
                  <li class="nav-item" role="presentation">\r
                    <button class="nav-link" data-bs-target="#tab_clients_releted" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Clients Releted</button>\r
                  </li>\r
                </ul>\r
              </div>\r
              <div class="tab-content">\r
                <div class="tab-pane fade show active" role="tabpanel" id="tab_general_question">\r
                  <div class="ico_accordion" id="accordion_1">\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">\r
                        01- What is CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_1" class="accordion-collapse collapse show" data-bs-parent="#accordion_1">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">\r
                        02- How can I participate in the CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_2" class="accordion-collapse collapse" data-bs-parent="#accordion_1">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">\r
                        03- What are the benefits of investing in CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_3" class="accordion-collapse collapse" data-bs-parent="#accordion_1">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">\r
                        04- What is the total supply of CoinPay tokens?\r
                      </div>\r
                      <div id="collapse_4" class="accordion-collapse collapse" data-bs-parent="#accordion_1">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">\r
                        05- Can I sell my tokens after the ICO?\r
                      </div>\r
                      <div id="collapse_5" class="accordion-collapse collapse" data-bs-parent="#accordion_1">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="tab-pane fade" role="tabpanel" id="tab_ico_questions">\r
                  <div class="ico_accordion" id="accordion_2">\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="true" aria-controls="collapse_6">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="true" aria-controls="collapse_6">\r
                        01- What is CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_6" class="accordion-collapse collapse show" data-bs-parent="#accordion_2">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">\r
                        02- How can I participate in the CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_7" class="accordion-collapse collapse" data-bs-parent="#accordion_2">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">\r
                        03- What are the benefits of investing in CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_8" class="accordion-collapse collapse" data-bs-parent="#accordion_2">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_9" aria-expanded="false" aria-controls="collapse_9">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_9" aria-expanded="false" aria-controls="collapse_9">\r
                        04- What is the total supply of CoinPay tokens?\r
                      </div>\r
                      <div id="collapse_9" class="accordion-collapse collapse" data-bs-parent="#accordion_2">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_10" aria-expanded="false" aria-controls="collapse_10">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_10" aria-expanded="false" aria-controls="collapse_10">\r
                        05- Can I sell my tokens after the ICO?\r
                      </div>\r
                      <div id="collapse_10" class="accordion-collapse collapse" data-bs-parent="#accordion_2">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="tab-pane fade" role="tabpanel" id="tab_tokens_sales">\r
                  <div class="ico_accordion" id="accordion_3">\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_11" aria-expanded="true" aria-controls="collapse_11">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_11" aria-expanded="true" aria-controls="collapse_11">\r
                        01- What is CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_11" class="accordion-collapse collapse show" data-bs-parent="#accordion_3">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_12" aria-expanded="false" aria-controls="collapse_12">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_12" aria-expanded="false" aria-controls="collapse_12">\r
                        02- How can I participate in the CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_12" class="accordion-collapse collapse" data-bs-parent="#accordion_3">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_13" aria-expanded="false" aria-controls="collapse_13">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_13" aria-expanded="false" aria-controls="collapse_13">\r
                        03- What are the benefits of investing in CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_13" class="accordion-collapse collapse" data-bs-parent="#accordion_3">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_14" aria-expanded="false" aria-controls="collapse_14">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_14" aria-expanded="false" aria-controls="collapse_14">\r
                        04- What is the total supply of CoinPay tokens?\r
                      </div>\r
                      <div id="collapse_14" class="accordion-collapse collapse" data-bs-parent="#accordion_3">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_15" aria-expanded="false" aria-controls="collapse_15">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_15" aria-expanded="false" aria-controls="collapse_15">\r
                        05- Can I sell my tokens after the ICO?\r
                      </div>\r
                      <div id="collapse_15" class="accordion-collapse collapse" data-bs-parent="#accordion_3">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="tab-pane fade" role="tabpanel" id="tab_clients_releted">\r
                  <div class="ico_accordion" id="accordion_4">\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_16" aria-expanded="true" aria-controls="collapse_16">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_16" aria-expanded="true" aria-controls="collapse_16">\r
                        01- What is CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_16" class="accordion-collapse collapse show" data-bs-parent="#accordion_4">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_17" aria-expanded="false" aria-controls="collapse_17">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_17" aria-expanded="false" aria-controls="collapse_17">\r
                        02- How can I participate in the CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_17" class="accordion-collapse collapse" data-bs-parent="#accordion_4">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_18" aria-expanded="false" aria-controls="collapse_18">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_18" aria-expanded="false" aria-controls="collapse_18">\r
                        03- What are the benefits of investing in CoinPay ICO?\r
                      </div>\r
                      <div id="collapse_18" class="accordion-collapse collapse" data-bs-parent="#accordion_4">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_19" aria-expanded="false" aria-controls="collapse_19">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_19" aria-expanded="false" aria-controls="collapse_19">\r
                        04- What is the total supply of CoinPay tokens?\r
                      </div>\r
                      <div id="collapse_19" class="accordion-collapse collapse" data-bs-parent="#accordion_4">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="accordion-item">\r
                      <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_20" aria-expanded="false" aria-controls="collapse_20">\r
                        <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">\r
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z"/>\r
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z"/>\r
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z"/>\r
                        </svg>\r
                      </div>\r
                      <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_20" aria-expanded="false" aria-controls="collapse_20">\r
                        05- Can I sell my tokens after the ICO?\r
                      </div>\r
                      <div id="collapse_20" class="accordion-collapse collapse" data-bs-parent="#accordion_4">\r
                        <div class="accordion-body">\r
                          <p>\r
                            You can participate in the CoinPay ICO, simply register on our platform, complete the KYC (Know Your Customer) process, and follow the instructions to purchase tokens during the ICO period, Once registered buy tokens with secure payments.\r
                          </p>\r
                          <ul class="iconlist_block unordered_list_block">\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Sign up and complete the KYC process.\r
                              </span>\r
                            </li>\r
                            <li>\r
                              <span class="iconlist_icon">\r
                                <i class="fa-solid fa-circle"></i>\r
                              </span>\r
                              <span class="iconlist_label">\r
                                Follow instructions to purchase tokens securely.\r
                              </span>\r
                            </li>\r
                          </ul>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- FAQ Section - End\r
        ================================================== -->\r
\r
      </main>\r
      <!-- Main Body - End\r
      ================================================== -->\r
\r
      <!-- Site Footer - Start\r
      ================================================== -->\r
      <footer class="ico_site_footer section_decoration section_shadow_top">\r
        <div class="decoration_item shape_top">\r
          <img src="assets/images/shapes/shape_ico_hero_section_bottom.svg" alt="Bottom Line Shape">\r
        </div>\r
        <div class="container">\r
          <ul class="pagelist_block unordered_list justify-content-center text-uppercase">\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_about_section">\r
                <span class="pagelist_label">\r
                  About ICO\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_service_section">\r
                <span class="pagelist_label">\r
                  Features\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_tokenomics_section">\r
                <span class="pagelist_label">\r
                  Tokenomics\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_roadmap_section">\r
                <span class="pagelist_label">\r
                  Roadmap\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_team_section">\r
                <span class="pagelist_label">\r
                  Team\r
                </span>\r
              </a>\r
            </li>\r
            <li>\r
              <a class="scrollspy_btn" href="#id_ico_whitepaper_section">\r
                <span class="pagelist_label">\r
                  Whitepaper\r
                </span>\r
              </a>\r
            </li>\r
          </ul>\r
          <div class="middle_area">\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Join our social group</h3>\r
              <ul class="social_block style_2 unordered_list justify-content-center">\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M12.1817 2.34636C10.5036 3.04236 7.14877 4.48456 2.11879 6.67146C1.30201 6.99576 0.873436 7.31296 0.834656 7.62286C0.768491 8.14806 1.42705 8.35476 2.32148 8.63456C2.44372 8.67336 2.57025 8.71206 2.69969 8.75516C3.58123 9.04066 4.76611 9.37506 5.38149 9.38796C5.9409 9.39946 6.56497 9.16986 7.25381 8.69916C11.9531 5.53206 14.379 3.93206 14.5314 3.89756C14.6393 3.87316 14.7888 3.84166 14.8894 3.93206C14.9901 4.02106 14.9801 4.19036 14.97 4.23626C14.9038 4.51326 12.3241 6.90826 10.9868 8.14806C10.5698 8.53416 10.2749 8.80826 10.2146 8.87136C10.0794 9.01056 9.94141 9.14396 9.80908 9.27176C8.98941 10.0581 8.37683 10.6494 9.84356 11.6137C10.5482 12.0772 11.1119 12.4604 11.6741 12.8421C12.2882 13.2597 12.9008 13.6758 13.6945 14.1953C13.8959 14.3273 14.0886 14.4636 14.2769 14.5971C14.9916 15.1065 15.6343 15.5628 16.4281 15.4911C16.8883 15.448 17.3656 15.0161 17.6072 13.726C18.1781 10.6752 19.3026 4.06836 19.5629 1.34476C19.5788 1.11856 19.5691 0.891358 19.5341 0.667358C19.5132 0.486458 19.425 0.320058 19.2868 0.201058C19.0812 0.0331581 18.7619 -0.002742 18.6182 0.000158001C17.9696 0.011558 16.9746 0.357458 12.1817 2.34636Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M14.7876 14L9.31558 5.8405L9.32498 5.8482L14.2588 0H12.6101L8.59076 4.76L5.39902 0H1.07488L6.18362 7.6179L0.794922 14H2.44366L6.91214 8.7042L10.4635 14H14.7876ZM4.74576 1.2727L12.4234 12.7273H11.1168L3.43295 1.2727H4.74576Z"/>\r
                    </svg>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#!">\r
                    <i class="fa-brands fa-github"></i>\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Subscribe to our newslatter</h3>\r
              <form class="ico_newsletter_form" action="#">\r
                <input type="email" name="email" placeholder="Enter your email">\r
                <button class="submit_btn" type="submit">Submit</button>\r
              </form>\r
            </div>\r
            <div class="column">\r
              <h3 class="footer_title text-uppercase">Let’s coinpay great together.</h3>\r
              <a class="ico_creative_btn" href="#!">\r
                <span class="btn_wrapper">\r
                  <span class="btn_icon_left">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z"/>\r
                      <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z"/>\r
                      <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z"/>\r
                    </svg>\r
                  </span>\r
                  <span class="btn_label">Purchase a Token</span>\r
                  <span class="btn_icon_right">\r
                    <small class="dot_top"></small>\r
                    <small class="dot_bottom"></small>\r
                    <svg class="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">\r
                      <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"/>\r
                      <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"/>\r
                      <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"/>\r
                    </svg>\r
                  </span>\r
                </span>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="footer_bottom text-center">\r
            <p class="copyright_text m-0 text-secondary">Copyright© 2025 Coinpay. All rights reserved.</p>\r
          </div>\r
        </div>\r
      </footer>\r
      <!-- Site Footer - End\r
      ================================================== -->\r
\r
    </div>\r
    <!-- Body Wrap - End -->
`,_2=`<!-- Body Wrap - Start -->\r
    <div class="page_wrapper">\r
\r
      <!-- Preloader - Start -->\r
      <div id="preloader">\r
        <div class="line-1"></div> \r
        <div class="line-2"></div> \r
        <div class="line-3"></div> \r
        <div class="line-4"></div> \r
      </div>\r
      <!-- Preloader - End -->\r
\r
      <!-- Site Header - Start\r
      ================================================== -->\r
      <header class="site_header">\r
        <div class="nav_wrapper">\r
          <div class="container">\r
            <div class="row align-items-center">\r
              <div class="col-lg-3 col-5 d-flex align-items-center">\r
                <div class="site_logo">\r
                  <a class="site_link" href="index.html">\r
                    <img loading="lazy" src="assets/images/site_logo/site_logo_1.svg" alt="ICO Site Logo">\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-6 col-2">\r
                <nav class="main_menu navbar navbar-expand-lg">\r
                  <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">\r
                    <ul class="main_menu_list unordered_list text-uppercase">\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="homes_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Home">Home</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="homes_submenu">\r
                          <li>\r
                            <a class="dropdown-item" href="index_ico.html">\r
                              <span class="nav_link_label">Coinpay ICO</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_memecoin.html">\r
                              <span class="nav_link_label">Memecoin</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_pepecoin.html">\r
                              <span class="nav_link_label">Pepecoin</span>\r
                            </a>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_about_section">\r
                          <span class="nav_link_label" data-text="About ICO">About ICO</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_service_section">\r
                          <span class="nav_link_label" data-text="Features">Features</span>\r
                        </a>\r
                      </li>\r
                      <li class="dropdown active">\r
                        <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Help">Help</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="help_submenu">\r
                          <li>\r
                            <a class="dropdown-item scrollspy_btn" href="#id_ico_roadmap_section">\r
                              <span class="nav_link_label">Roadmap</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">Blog</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="blog_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="blog.html">\r
                                  <span class="nav_link_label">Blogs</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="blog_details.html">\r
                                  <span class="nav_link_label">Blog Details</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="contact.html">\r
                              <span class="nav_link_label">Help Center</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown active">\r
                            <a class="dropdown-item" href="#" id="register_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">My Account</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="register_submenu">\r
                              <li class="active">\r
                                <a class="dropdown-item" href="sign_in.html">\r
                                  <span class="nav_link_label">Sign In</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="sign_up.html">\r
                                  <span class="nav_link_label">Sign Up</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link" href="contact.html">\r
                          <span class="nav_link_label" data-text="Contact">Contact</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </nav>\r
              </div>\r
              <div class="col-lg-3 col-5">\r
                <ul class="btns_group unordered_list p-0 justify-content-end">\r
                  <li class="d-lg-none">\r
                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">\r
                      <i class="far fa-bars"></i>\r
                    </button>\r
                  </li>\r
                  <li>\r
                    <a class="ico_btn_outline" href="sign_in.html">\r
                      <span class="btn_icon">\r
                        <i class="fa-solid fa-user"></i>\r
                      </span>\r
                      <span class="btn_label">Login</span>\r
                    </a>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
      <!-- Site Header - End\r
      ================================================== -->\r
\r
      <!-- Main Body - Start\r
      ================================================== -->\r
      <main class="page_content">\r
\r
        <!-- Register Section - Start\r
        ================================================== -->\r
        <section class="register_section section_decoration">\r
          <div class="container">\r
            <div class="row justify-content-center">\r
              <div class="col-lg-5 position-relative">\r
                <div class="register_form">\r
                  <h1 class="heading_text text-center">Login to Your Account</h1>\r
                  <p class="text-center">Enter your details to login.</p>\r
                  <a class="btn_login_google" href="#!">\r
                    <span class="icon">\r
                      <img src="assets/icons/icon_google.svg" alt="Google Icon">\r
                    </span>\r
                    <span class="label">Continue with Google</span>\r
                  </a>\r
                  <div class="divider">\r
                    <img src="assets/images/shapes/shape_divider.svg" alt="Divider">\r
                  </div>\r
                  <div class="form-group">\r
                    <label class="input_title" for="input_email">Email<sup>*</sup></label>\r
                    <input id="input_email" class="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required="">\r
                  </div>\r
                  <div class="form-group">\r
                    <label class="input_title" for="input_pass">Password<sup>*</sup></label>\r
                    <input id="input_pass" class="form-control" type="password" name="password" placeholder="***********" required="">\r
                  </div>\r
                  <div class="row">\r
                    <div class="col-md-6">\r
                      <div class="form-check">\r
                        <input class="form-check-input" type="checkbox" id="checkbox_remember_me">\r
                        <label class="form-check-label" for="checkbox_remember_me">\r
                          Remember Me\r
                        </label>\r
                      </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                      <p class="forget_pass text-md-end mb-0">Forgot password? <a href="#!"><u>Reset</u></a></p>\r
                    </div>\r
                  </div>\r
                  <button class="btn" type="submit">\r
                    <span class="btn_label">Login</span>\r
                    <span class="btn_icon"><i class="fa-regular fa-arrow-up-right"></i></span>\r
                  </button>\r
                </div>\r
                <div class="decoration_item shape_flower">\r
                  <img src="assets/images/shapes/shape_flower_1.svg" alt="Flower">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Register Section - End\r
        ================================================== -->\r
\r
      </main>\r
      <!-- Main Body - End\r
      ================================================== -->\r
\r
    </div>\r
    <!-- Body Wrap - End -->
`,g2=`<!-- Body Wrap - Start -->\r
    <div class="page_wrapper">\r
\r
      <!-- Preloader - Start -->\r
      <div id="preloader">\r
        <div class="line-1"></div> \r
        <div class="line-2"></div> \r
        <div class="line-3"></div> \r
        <div class="line-4"></div> \r
      </div>\r
      <!-- Preloader - End -->\r
\r
      <!-- Site Header - Start\r
      ================================================== -->\r
      <header class="site_header">\r
        <div class="nav_wrapper">\r
          <div class="container">\r
            <div class="row align-items-center">\r
              <div class="col-lg-3 col-5 d-flex align-items-center">\r
                <div class="site_logo">\r
                  <a class="site_link" href="index.html">\r
                    <img loading="lazy" src="assets/images/site_logo/site_logo_1.svg" alt="ICO Site Logo">\r
                  </a>\r
                </div>\r
              </div>\r
              <div class="col-lg-6 col-2">\r
                <nav class="main_menu navbar navbar-expand-lg">\r
                  <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">\r
                    <ul class="main_menu_list unordered_list text-uppercase">\r
                      <li class="dropdown">\r
                        <a class="nav-link" href="#" id="homes_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Home">Home</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="homes_submenu">\r
                          <li>\r
                            <a class="dropdown-item" href="index_ico.html">\r
                              <span class="nav_link_label">Coinpay ICO</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_memecoin.html">\r
                              <span class="nav_link_label">Memecoin</span>\r
                            </a>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="index_pepecoin.html">\r
                              <span class="nav_link_label">Pepecoin</span>\r
                            </a>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_about_section">\r
                          <span class="nav_link_label" data-text="About ICO">About ICO</span>\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link scrollspy_btn" href="#id_ico_service_section">\r
                          <span class="nav_link_label" data-text="Features">Features</span>\r
                        </a>\r
                      </li>\r
                      <li class="dropdown active">\r
                        <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                          <span class="nav_link_label" data-text="Help">Help</span>\r
                          <span class="nav_link_icon">\r
                            <i class="fa-solid fa-angle-down"></i>\r
                          </span>\r
                        </a>\r
                        <ul class="dropdown-menu" aria-labelledby="help_submenu">\r
                          <li>\r
                            <a class="dropdown-item scrollspy_btn" href="#id_ico_roadmap_section">\r
                              <span class="nav_link_label">Roadmap</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown">\r
                            <a class="dropdown-item" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">Blog</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="blog_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="blog.html">\r
                                  <span class="nav_link_label">Blogs</span>\r
                                </a>\r
                              </li>\r
                              <li>\r
                                <a class="dropdown-item" href="blog_details.html">\r
                                  <span class="nav_link_label">Blog Details</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                          <li>\r
                            <a class="dropdown-item" href="contact.html">\r
                              <span class="nav_link_label">Help Center</span>\r
                            </a>\r
                          </li>\r
                          <li class="dropdown active">\r
                            <a class="dropdown-item" href="#" id="register_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">\r
                              <span class="nav_link_label" data-text="Blog">My Account</span>\r
                              <span class="nav_link_icon">\r
                                <i class="fa-solid fa-angle-right"></i>\r
                              </span>\r
                            </a>\r
                            <ul class="dropdown-menu" aria-labelledby="register_submenu">\r
                              <li>\r
                                <a class="dropdown-item" href="sign_in.html">\r
                                  <span class="nav_link_label">Sign In</span>\r
                                </a>\r
                              </li>\r
                              <li class="active">\r
                                <a class="dropdown-item" href="sign_up.html">\r
                                  <span class="nav_link_label">Sign Up</span>\r
                                </a>\r
                              </li>\r
                            </ul>\r
                          </li>\r
                        </ul>\r
                      </li>\r
                      <li>\r
                        <a class="nav-link" href="contact.html">\r
                          <span class="nav_link_label" data-text="Contact">Contact</span>\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </nav>\r
              </div>\r
              <div class="col-lg-3 col-5">\r
                <ul class="btns_group unordered_list p-0 justify-content-end">\r
                  <li class="d-lg-none">\r
                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">\r
                      <i class="far fa-bars"></i>\r
                    </button>\r
                  </li>\r
                  <li>\r
                    <a class="ico_btn_outline" href="sign_in.html">\r
                      <span class="btn_icon">\r
                        <i class="fa-solid fa-user"></i>\r
                      </span>\r
                      <span class="btn_label">Login</span>\r
                    </a>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
      <!-- Site Header - End\r
      ================================================== -->\r
\r
      <!-- Main Body - Start\r
      ================================================== -->\r
      <main class="page_content">\r
\r
        <!-- Register Section - Start\r
        ================================================== -->\r
        <section class="register_section section_decoration">\r
          <div class="container">\r
            <div class="row justify-content-center">\r
              <div class="col-lg-5 position-relative">\r
                <div class="register_form">\r
                  <h1 class="heading_text text-center">Create a New Account</h1>\r
                  <p class="text-center">Enter your details to register.</p>\r
                  <a class="btn_login_google" href="#!">\r
                    <span class="icon">\r
                      <img src="assets/icons/icon_google.svg" alt="Google Icon">\r
                    </span>\r
                    <span class="label">Continue with Google</span>\r
                  </a>\r
                  <div class="divider">\r
                    <img src="assets/images/shapes/shape_divider.svg" alt="Divider">\r
                  </div>\r
                  <div class="form-group">\r
                    <label class="input_title" for="input_email">Email<sup>*</sup></label>\r
                    <input id="input_email" class="form-control" type="email" name="email" placeholder="alma.lawson@example.com" required="">\r
                  </div>\r
                  <div class="form-group">\r
                    <label class="input_title" for="input_pass">Password<sup>*</sup></label>\r
                    <input id="input_pass" class="form-control" type="password" name="password" placeholder="***********" required="">\r
                  </div>\r
                  <div class="form-check">\r
                    <input class="form-check-input" type="checkbox" id="checkbox_remember_me">\r
                    <label class="form-check-label" for="checkbox_remember_me">\r
                      By continuing you agree to our <a href="#!"><u>Terms and Conditions</u></a>\r
                    </label>\r
                  </div>\r
                  <button class="btn" type="submit">\r
                    <span class="btn_label">Register</span>\r
                    <span class="btn_icon"><i class="fa-regular fa-arrow-up-right"></i></span>\r
                  </button>\r
                </div>\r
                <div class="decoration_item shape_flower">\r
                  <img src="assets/images/shapes/shape_flower_1.svg" alt="Flower">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </section>\r
        <!-- Register Section - End\r
        ================================================== -->\r
\r
      </main>\r
      <!-- Main Body - End\r
      ================================================== -->\r
\r
    </div>\r
    <!-- Body Wrap - End -->
`,y2=[{path:"/",title:"ICO - Coinpay - Site Template",bodyClass:"index_ico",html:Dr},{path:"/index",title:"ICO - Coinpay - Site Template",bodyClass:"index_ico",html:Dr},{path:"/index_ico",title:"ICO - Coinpay - Site Template",bodyClass:"index_ico",html:Dr},{path:"/index_memecoin",title:"ICO - Coinpay - Site Template",bodyClass:"index_ico",html:Dr},{path:"/index_pepecoin",title:"ICO - Coinpay - Site Template",bodyClass:"index_ico",html:Dr},{path:"/blog",title:"Blogs - Coinpay - Site Template",bodyClass:"index_ico",html:v2},{path:"/blog_details",title:"Blogs Details - Coinpay - Site Template",bodyClass:"index_ico",html:m2},{path:"/contact",title:"Contact - Coinpay - Site Template",bodyClass:"index_ico",html:h2},{path:"/sign_in",title:"Login - Coinpay - Site Template",bodyClass:"index_ico",html:_2},{path:"/sign_up",title:"Create Account - Coinpay - Site Template",bodyClass:"index_ico",html:g2}],b2=[{from:"/index.html",to:"/"},{from:"/index_ico.html",to:"/index_ico"},{from:"/index_memecoin.html",to:"/index_memecoin"},{from:"/index_pepecoin.html",to:"/index_pepecoin"},{from:"/blog.html",to:"/blog"},{from:"/blog_details.html",to:"/blog_details"},{from:"/contact.html",to:"/contact"},{from:"/sign_in.html",to:"/sign_in"},{from:"/sign_up.html",to:"/sign_up"}];function w2(){return Ln.jsx(Ym,{children:Ln.jsxs(Bm,{children:[y2.map(n=>Ln.jsx(ia,{path:n.path,element:Ln.jsx(f2,{bodyClass:n.bodyClass,html:n.html,title:n.title})},n.path)),b2.map(n=>Ln.jsx(ia,{path:n.from,element:Ln.jsx(uc,{replace:!0,to:n.to})},n.from)),Ln.jsx(ia,{path:"*",element:Ln.jsx(uc,{replace:!0,to:"/"})})]})})}Bd(document.getElementById("root")).render(Ln.jsx(w2,{}));
