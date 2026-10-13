var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ee=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function te(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ee)}catch(e){ee(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ne(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else te(ne.bind(null,e))}var re={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=re,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ne,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=te,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),N=Symbol.for(`react.profiler`),P=Symbol.for(`react.consumer`),F=Symbol.for(`react.context`),I=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.legacy_hidden`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.for(`react.view_transition`),ce=Symbol.for(`react.recoverable`),le=Symbol.iterator;function ue(e){return typeof e!=`object`||!e?null:(e=le&&e[le]||e[`@@iterator`],typeof e==`function`?e:null)}var de=Symbol.for(`react.client.reference`);function fe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case N:return`Profiler`;case M:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`;case se:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case F:return e.displayName||`Context`;case P:return(e._context.displayName||`Context`)+`.Consumer`;case I:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?fe(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}var pe=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},he=[],ge=-1;function _e(e){return{current:e}}function ve(e){0>ge||(e.current=he[ge],he[ge]=null,ge--)}function ye(e,t){ge++,he[ge]=e.current,e.current=t}var be=_e(null),xe=_e(null),Se=_e(null),Ce=_e(null);function we(e,t){switch(ye(Se,t),ye(xe,e),ye(be,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=pp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ve(be),ye(be,e)}function Te(){ve(be),ve(xe),ve(Se)}function Ee(e){var t=e.memoizedState;t!==null&&(lh._currentValue=t.memoizedState,ye(Ce,e)),t=be.current;var n=pp(t,e.type);t!==n&&(ye(xe,e),ye(be,n))}function De(e){xe.current===e&&(ve(be),ve(xe)),Ce.current===e&&(ve(Ce),lh._currentValue=me)}var Oe,ke;function Ae(e){if(Oe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Oe=t&&t[1]||``,ke=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Oe+e+ke}var je=!1;function Me(e,t){if(!e||je)return``;je=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{je=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ae(n):``}function Ne(e,t){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae(`Lazy`);case 13:return e.child!==t&&t!==null?Ae(`Suspense Fallback`):Ae(`Suspense`);case 19:return Ae(`SuspenseList`);case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Ae(`Activity`);case 30:return Ae(`ViewTransition`);default:return``}}function Pe(e){try{var t=``,n=null;do t+=Ne(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Fe=Object.prototype.hasOwnProperty,Ie=t.unstable_scheduleCallback,Le=t.unstable_cancelCallback,Re=t.unstable_shouldYield,ze=t.unstable_requestPaint,Be=t.unstable_now,Ve=t.unstable_getCurrentPriorityLevel,He=t.unstable_ImmediatePriority,Ue=t.unstable_UserBlockingPriority,We=t.unstable_NormalPriority,Ge=t.unstable_LowPriority,Ke=t.unstable_IdlePriority,qe=t.log,Je=t.unstable_setDisableYieldValue,Ye=null,Xe=null;function Ze(e){if(typeof qe==`function`&&Je(e),Xe&&typeof Xe.setStrictMode==`function`)try{Xe.setStrictMode(Ye,e)}catch{}}var Qe=Math.clz32?Math.clz32:tt,$e=Math.log,et=Math.LN2;function tt(e){return e>>>=0,e===0?32:31-($e(e)/et|0)|0}var nt=256,rt=262144,it=4194304;function at(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=at(n))):i=at(o):i=at(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=at(n))):i=at(o)):i=at(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function st(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ct(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Qe(n),i=1<<r;t|=e[r],n&=~i}return t}function lt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ut(){var e=it;return it<<=1,!(it&62914560)&&(it=4194304),e}function dt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ft(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&mt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function mt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function gt(e,t){var n=t&-t;return n=n&42?1:_t(n),(n&(e.suspendedLanes|t))===0?n:0}function _t(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function yt(){var e=R.p;return e===0?(e=window.event,e===void 0?32:Th(e.type)):e}function bt(e,t){var n=R.p;try{return R.p=e,t()}finally{R.p=n}}var xt=Math.random().toString(36).slice(2),St=`__reactFiber$`+xt,Ct=`__reactProps$`+xt,wt=`__reactContainer$`+xt,Tt=`__reactEvents$`+xt,Et=`__reactListeners$`+xt,Dt=`__reactHandles$`+xt,Ot=`__reactResources$`+xt,kt=`__reactMarker$`+xt,At=`__reactLoad$`+xt;function jt(e){delete e[St],delete e[Ct],delete e[Et],delete e[Dt]}function Mt(e){var t;if(t=e[St])return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mm(e);e!==null;){if(n=e[St])return n;e=mm(e)}return t}e=n,n=e.parentNode}return null}function Nt(e){if(e=e[St]||e[wt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ft(e){var t=e[Ot];return t||=e[Ot]={hoistableStyles:new Map,hoistableScripts:new Map},t}function It(e){e[kt]=!0}function Lt(e){e[At]=void 0}var Rt=new Set,zt={};function Bt(e,t){Vt(e,t),Vt(e+`Capture`,t)}function Vt(e,t){for(zt[e]=t,e=0;e<t.length;e++)Rt.add(t[e])}var Ht=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ut={},Wt={};function Gt(e){return Fe.call(Wt,e)?!0:Fe.call(Ut,e)?!1:Ht.test(e)?Wt[e]=!0:(Ut[e]=!0,!1)}var Kt=!1;function qt(){var e=Kt;return Kt=!1,e}function Jt(e,t,n){if(Gt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Yt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Xt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Qt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function $t(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function en(e){if(!e._valueTracker){var t=Qt(e)?`checked`:`value`;e._valueTracker=$t(e,t,``+e[t])}}function tn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Qt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var nn=/[\n"\\]/g;function rn(e){return e.replace(nn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function an(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Zt(t)):e.value!==``+Zt(t)&&(e.value=``+Zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):sn(e,Zt(n)):o===`number`&&e.value==t?sn(e,Zt(e.value)):sn(e,Zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Zt(s):e.removeAttribute(`name`)}function on(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){en(e);return}n=n==null?``:``+Zt(n),t=t==null?n:``+Zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),en(e)}function sn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ln(e,t,n){t!=null&&(t=``+Zt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Zt(n)}function un(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(pe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),en(e)}function dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function pn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||fn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function mn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Kt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(pn(e,a,r),Kt=!0)}else for(var o in t)t.hasOwnProperty(o)&&pn(e,o,t[o])}function hn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var gn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),_n=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vn(e){return _n.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function yn(){}var bn=null;function xn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,Cn=null;function wn(e){var t=Nt(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(an(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+rn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ct]||null;if(!a)throw Error(i(90));an(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&tn(r)}break a;case`textarea`:ln(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}}}var Tn=!1;function En(e,t,n){if(Tn)return e(t,n);Tn=!0;try{return e(t)}finally{if(Tn=!1,(Sn!==null||Cn!==null)&&(zd(),Sn&&(t=Sn,e=Cn,Cn=Sn=null,wn(t),e)))for(t=0;t<e.length;t++)wn(e[t])}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,kn=!1;if(On)try{var An={};Object.defineProperty(An,"passive",{get:function(){kn=!0}}),window.addEventListener(`test`,An,An),window.removeEventListener(`test`,An,An)}catch{kn=!1}var jn=null,Mn=null,Nn=null;function z(){if(Nn)return Nn;var e,t=Mn,n=t.length,r,i=`value`in jn?jn.value:jn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Nn=i.slice(e,1<r?1-r:void 0)}function Pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function In(){return!1}function Ln(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Fn:In,this.isPropagationStopped=In,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zn=Ln(Rn),Bn=D({},Rn,{view:0,detail:0}),Vn=Ln(Bn),Hn,Un,Wn,B=D({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Wn&&(Wn&&e.type===`mousemove`?(Hn=e.screenX-Wn.screenX,Un=e.screenY-Wn.screenY):Un=Hn=0,Wn=e),Hn)},movementY:function(e){return`movementY`in e?e.movementY:Un}}),Gn=Ln(B),Kn=Ln(D({},B,{dataTransfer:0})),qn=Ln(D({},Bn,{relatedTarget:0})),Jn=Ln(D({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0})),Yn=Ln(D({},Rn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Xn=Ln(D({},Rn,{data:0})),Zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},V={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Ln(D({},Bn,{key:function(e){if(e.key){var t=Zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?V[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Ln(D({},B,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Ln(D({},Rn,{submitter:0})),ir=Ln(D({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ar=Ln(D({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=Ln(D({},B,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),sr=Ln(D({},Rn,{newState:0,oldState:0,source:0})),cr=[9,13,27,32],lr=On&&`CompositionEvent`in window,ur=null;On&&`documentMode`in document&&(ur=document.documentMode);var dr=On&&`TextEvent`in window&&!ur,fr=On&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function H(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var gr=!1;function _r(e,t){switch(e){case`compositionend`:return H(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function vr(e,t){if(gr)return e===`compositionend`||!lr&&hr(e,t)?(e=z(),Nn=Mn=jn=null,gr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var yr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!yr[e.type]:t===`textarea`}function br(e,t,n,r){Sn?Cn?Cn.push(r):Cn=[r]:Sn=r,t=Yf(t,`onChange`),0<t.length&&(n=new zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){Hf(e,0)}function wr(e){if(tn(Pt(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(On){var Dr;if(On){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,xn(e)),En(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fe.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function W(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function G(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?G(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=W(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=W(e.document)}return t}function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ur=On&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==W(r)||(r=Wr,`selectionStart`in r&&Hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Rr(Kr,r)||(Kr=r,r=Yf(Gr,`onSelect`),0<r.length&&(t=new zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionrun:Yr(`Transition`,`TransitionRun`),transitionstart:Yr(`Transition`,`TransitionStart`),transitioncancel:Yr(`Transition`,`TransitionCancel`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};On&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),ri=$r(`transitionrun`),ii=$r(`transitionstart`),ai=$r(`transitioncancel`),oi=$r(`transitionend`),si=new Map,ci=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ci.push(`scrollEnd`);function li(e,t){si.set(e,t),Bt(t,[e])}var ui=0;function di(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=ui++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function fi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function pi(e,t){return e=fi(e),t=fi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},K=[],hi=0,gi=0;function _i(){for(var e=hi,t=gi=hi=0;t<e;){var n=K[t];K[t++]=null;var r=K[t];K[t++]=null;var i=K[t];K[t++]=null;var a=K[t];if(K[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&xi(n,i,a)}}function vi(e,t,n,r){K[hi++]=e,K[hi++]=t,K[hi++]=n,K[hi++]=r,gi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yi(e,t,n,r){return vi(e,t,n,r),Si(e)}function bi(e,t){return vi(e,null,null,t),Si(e)}function xi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Si(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ci={};function wi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(e,t,n,r){return new wi(e,t,n,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,t){var n=e.alternate;return n===null?(n=Ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Oi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ki(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ei(r)&&(s=1);else if(typeof r==`string`)s=Ym(e,n,be.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ie:return e=Ti(31,n,t,a),e.elementType=ie,e.lanes=o,e;case j:return Ai(n.children,a,o,t);case M:s=8,a|=24;break;case N:return e=Ti(12,n,t,a|2),e.elementType=N,e.lanes=o,e;case ee:return e=Ti(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=Ti(19,n,t,a),e.elementType=te,e.lanes=o,e;case ae:case se:return e=a|32,e=Ti(30,n,t,e),e.elementType=se,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case F:s=10;break a;case P:s=9;break a;case I:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ti(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ai(e,t,n,r){return e=Ti(7,e,r,t),e.lanes=n,e}function ji(e,t,n){return e=Ti(6,e,null,t),e.lanes=n,e}function Mi(e){var t=Ti(18,null,null,0);return t.stateNode=e,t}function Ni(e,t,n){return t=Ti(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pi=new WeakMap;function Fi(e,t){if(typeof e==`object`&&e){var n=Pi.get(e);return n===void 0?(t={value:e,source:t,stack:Pe(t)},Pi.set(e,t),t):n}return{value:e,source:t,stack:Pe(t)}}var Ii=[],Li=0,Ri=null,zi=0,Bi=[],Vi=0,Hi=null,Ui=1,Wi=``;function Gi(e,t){Ii[Li++]=zi,Ii[Li++]=Ri,Ri=e,zi=t}function Ki(e,t,n){Bi[Vi++]=Ui,Bi[Vi++]=Wi,Bi[Vi++]=Hi,Hi=e;var r=Ui;e=Wi;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var a=32-Qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ui=1<<32-Qe(t)+i|n<<i|r,Wi=a+e}else Ui=1<<a|n<<i|r,Wi=e}function qi(e){e.return!==null&&(Gi(e,1),Ki(e,1,0))}function Ji(e){for(;e===Ri;)Ri=Ii[--Li],Ii[Li]=null,zi=Ii[--Li],Ii[Li]=null;for(;e===Hi;)Hi=Bi[--Vi],Bi[Vi]=null,Wi=Bi[--Vi],Bi[Vi]=null,Ui=Bi[--Vi],Bi[Vi]=null}function Yi(e,t){Bi[Vi++]=Ui,Bi[Vi++]=Wi,Bi[Vi++]=Hi,Ui=t.id,Wi=t.overflow,Hi=e}var Xi=null,Zi=null,q=!1,Qi=null,$i=!1,ea=Error(i(519));function ta(e){throw sa(Fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ea}function na(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[St]=e,t[Ct]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<Bf.length;n++)Z(Bf[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),on(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),un(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||tp(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||ta(e,!0)}function ra(e){for(Xi=e.return;Xi;)switch(Xi.tag){case 5:case 31:case 13:$i=!1;return;case 27:case 3:$i=!0;return;default:Xi=Xi.return}}function ia(e){if(e!==Xi)return!1;if(!q)return ra(e),q=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||hp(e.type,e.memoizedProps)),n=!n),n&&Zi&&ta(e),ra(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Zi=pm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Zi=pm(e)}else t===27?(t=Zi,wp(e.type)?(e=fm,fm=null,Zi=e):Zi=t):Zi=Xi?dm(e.stateNode.nextSibling):null;return!0}function aa(){Zi=Xi=null,q=!1}function oa(){var e=Qi;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),Qi=null),e}function sa(e){Qi===null?Qi=[e]:Qi.push(e)}var ca=_e(null),la=null,ua=null;function da(e,t,n){ye(ca,t._currentValue),t._currentValue=n}function fa(e){e._currentValue=ca.current,ve(ca)}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ma(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),pa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),pa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),pa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ha(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Lr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ce.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[lh]:e.push(lh))}a=a.return}return e!==null&&ma(t,e,n,r),t.flags|=262144,e!==null}function ga(e){for(e=e.firstContext;e!==null;){if(!Lr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){la=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function va(e){return ba(la,e)}function ya(e,t){return la===null&&_a(e),ba(e,t)}function ba(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ua===null){if(e===null)throw Error(i(308));ua=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ua=ua.next=t;return n}var xa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Sa=t.unstable_scheduleCallback,Ca=t.unstable_NormalPriority,wa={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ta(){return{controller:new xa,data:new Map,refCount:0}}function Ea(e){e.refCount--,e.refCount===0&&Sa(Ca,function(){e.controller.abort()})}function Da(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Oa=null;function ka(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Aa=null,ja=0,Ma=0,Na=null;function Pa(e,t){if(Aa===null){var n=Aa=[];ja=0,Ma=Ff(),Na={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ja++,t.then(Fa,Fa),t}function Fa(){if(--ja===0&&(Oa=null,Aa!==null)){Na!==null&&(Na.status=`fulfilled`);var e=Aa;Aa=null,Ma=0,Na=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ia(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var La=L.S;L.S=function(e,t){if(hd=Be(),typeof t==`object`&&t&&typeof t.then==`function`&&Pa(e,t),Oa!==null)for(var n=xf;n!==null;)Da(n,Oa),n=n.next;if(n=e.types,n!==null){for(var r=xf;r!==null;)Da(r,n),r=r.next;if(Ma!==0){r=Oa,r===null&&(r=Oa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}La!==null&&La(e,t)};var Ra=_e(null);function za(){var e=Ra.current;return e===null?Qu.pooledCache:e}function Ba(e,t){t===null?ye(Ra,Ra.current):ye(Ra,t.pool)}function Va(){var e=za();return e===null?null:{parent:wa._currentValue,pool:e}}var Ha=Error(i(460)),Ua=Error(i(474)),Wa=Error(i(542)),Ga={then:function(){}};function Ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function qa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Za(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(yn,yn);else{if(e=Qu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Za(e),e}throw Ya=t,Ha}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ya=e,Ha):e}}var Ya=null;function Xa(){if(Ya===null)throw Error(i(459));var e=Ya;return Ya=null,e}function Za(e){if(e===Ha||e===Wa)throw Error(i(483))}var Qa=null,$a=0;function eo(e){var t=$a;return $a+=1,Qa===null&&(Qa=[]),qa(Qa,e,t)}function to(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function no(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ro(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ji(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),to(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Ja(i)===t.type)?(t=a(t,n.props),to(t,n),t.return=e,t):(t=ki(n.type,n.key,n.props,null,e.mode,r),to(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ni(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ji(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=ki(t.type,t.key,t.props,null,e.mode,n),to(n,t),n.return=e,n;case A:return t=Ni(t,e.mode,n),t.return=e,t;case re:return t=Ja(t),f(e,t,n)}if(pe(t)||ue(t))return t=Ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,eo(t),n);if(t.$$typeof===F)return f(e,ya(e,t),n);no(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case re:return n=Ja(n),p(e,t,n,r)}if(pe(n)||ue(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,eo(n),r);if(n.$$typeof===F)return p(e,t,ya(e,n),r);no(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Ja(r),m(e,t,n,r,i)}if(pe(r)||ue(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,eo(r),i);if(r.$$typeof===F)return m(e,t,n,ya(t,r),i);no(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),q&&Gi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return q&&Gi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),q&&Gi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),q&&Gi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return q&&Gi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),q&&Gi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),to(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),to(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Ai(o.props.children,e.mode,c,o.key),to(c,o),c.return=e,e=c):(c=ki(o.type,o.key,o.props,null,e.mode,c),to(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ni(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Ja(o),_(e,r,o,c)}if(pe(o))return h(e,r,o,c);if(ue(o)){if(l=ue(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,eo(o),c);if(o.$$typeof===F)return _(e,r,ya(e,o),c);no(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ji(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{$a=0;var i=_(e,t,n,r);return Qa=null,i}catch(t){if(t===Ha||t===Wa)throw t;var a=Ti(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var io=ro(!0),ao=ro(!1),oo=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function lo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Zu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Si(e),xi(e,null,n),t}return vi(e,r,t,n),Si(e)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}function po(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mo=!1;function ho(){if(mo){var e=Na;if(e!==null)throw e}}function go(e,t,n,r){mo=!1;var i=e.updateQueue;oo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===Ma&&(mo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:oo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function _o(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function vo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)_o(n[e],t)}var yo=_e(null),bo=_e(0);function xo(e,t){e=id,ye(bo,e),ye(yo,t),id=e|t.baseLanes}function So(){ye(bo,id),ye(yo,yo.current)}function Co(){id=bo.current,ve(yo),ve(bo)}var wo=_e(null),To=null;function Eo(e){var t=e.alternate;ye(jo,jo.current&1),ye(wo,e),To===null&&(t===null||yo.current!==null||t.memoizedState!==null)&&(To=e)}function Do(e){ye(jo,jo.current),ye(wo,e),To===null&&(To=e)}function Oo(e){e.tag===22?(ye(jo,jo.current),ye(wo,e),To===null&&(To=e)):ko()}function ko(){ye(jo,jo.current),ye(wo,wo.current)}function Ao(e){ve(wo),To===e&&(To=null),ve(jo)}var jo=_e(0);function Mo(e,t){ye(wo,wo.current),ye(jo,t)}function No(e){ve(jo),ve(wo),To===e&&(To=null)}function Po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cm(n)||lm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fo=0,J=null,Io=null,Lo=null,Ro=!1,zo=!1,Bo=!1,Vo=0,Ho=0,Uo=null,Wo=0;function Go(){throw Error(i(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,a){return Fo=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?uc:dc,Bo=!1,a=n(r,i),Bo=!1,zo&&(a=Yo(t,n,r,i)),Jo(e),a}function Jo(e){L.H=lc;var t=Io!==null&&Io.next!==null;if(Fo=0,Lo=Io=J=null,Ro=!1,Ho=0,Uo=null,t)throw Error(i(300));e===null||Oc||(e=e.dependencies,e!==null&&ga(e)&&(Oc=!0))}function Yo(e,t,n,r){J=e;var a=0;do{if(zo&&(Uo=null),Ho=0,zo=!1,25<=a)throw Error(i(301));if(a+=1,Lo=Io=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=fc,o=t(n,r)}while(zo);return o}function Xo(){var e=L.H,t=e.useState()[0];return t=typeof t.then==`function`?rs(t):t,e=e.useState()[0],(Io===null?null:Io.memoizedState)!==e&&(J.flags|=1024),t}function Zo(){var e=Vo!==0;return Vo=0,e}function Qo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function $o(e){if(Ro){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ro=!1}Fo=0,Lo=Io=J=null,zo=!1,Ho=Vo=0,Uo=null}function es(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lo===null?J.memoizedState=Lo=e:Lo=Lo.next=e,Lo}function ts(){if(Io===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=Io.next;var t=Lo===null?J.memoizedState:Lo.next;if(t!==null)Lo=t,Io=e;else{if(e===null)throw J.alternate===null?Error(i(467)):Error(i(310));Io=e,e={memoizedState:Io.memoizedState,baseState:Io.baseState,baseQueue:Io.baseQueue,queue:Io.queue,next:null},Lo===null?J.memoizedState=Lo=e:Lo=Lo.next=e}return Lo}function ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rs(e){var t=Ho;return Ho+=1,Uo===null&&(Uo=[]),e=qa(Uo,e,t),t=J,(Lo===null?t.memoizedState:Lo.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?uc:dc),e}function is(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return rs(e);if(e.$$typeof===ce)return;if(e.$$typeof===F)return va(e)}throw Error(i(438,String(e)))}function as(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ns(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function os(e,t){return typeof t==`function`?t(e):t}function ss(e){return cs(ts(),Io,e)}function cs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Fo&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ma&&(d=!0);else if((Fo&p)===p){u=u.next,p===Ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,J.lanes|=p,od|=p;f=u.action,Bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,J.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Lr(o,e.memoizedState)&&(Oc=!0,d&&(n=Na,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ls(e){var t=ts(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(Oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function us(e,t,n){var r=J,a=ts(),o=q;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Lr((Io||a).memoizedState,n);if(s&&(a.memoizedState=n,Oc=!0),a=a.queue,Fs(ps.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Lo!==null&&!!(Lo.memoizedState.tag&1),As(e?9:8,{destroy:void 0},fs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Qu===null)throw Error(i(349));o||Fo&127||ds(r,t,n)}return n}function ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=ns(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fs(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function ps(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function hs(e){var t=bi(e,2);t!==null&&Pd(t,e,2)}function gs(e){var t=es();if(typeof e==`function`){var n=e;if(e=n(),Bo){Ze(!0);try{n()}finally{Ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function _s(e,t,n,r){return e.baseState=n,cs(e,Io,typeof r==`function`?r:os)}function vs(e,t,n,r,a){if(oc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};L.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ys(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ys(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=L.T,o={};o.types=a===null?null:a.types,L.T=o;try{var s=n(i,r),c=L.S;c!==null&&c(o,s),bs(e,t,s)}catch(n){Ss(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),L.T=a}}else try{a=n(i,r),bs(e,t,a)}catch(n){Ss(e,t,n)}}function bs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){xs(e,t,n)},function(n){return Ss(e,t,n)}):xs(e,t,n)}function xs(e,t,n){t.status=`fulfilled`,t.value=n,Cs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ys(e,n)))}function Ss(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Cs(t),t=t.next;while(t!==r)}e.action=null}function Cs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ws(e,t){return t}function Ts(e,t){if(q){var n=Qu.formState;if(n!==null){a:{var r=J;if(q){if(Zi){b:{for(var i=Zi,a=$i;i.nodeType!==8;)if(!a||(i=dm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Zi=dm(i.nextSibling),r=i.data===`F!`;break a}}ta(r)}r=!1}r&&(t=n[0])}}return n=es(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},n.queue=r,n=rc.bind(null,J,r),r.dispatch=n,r=gs(!1),a=ac.bind(null,J,!1,r.queue),r=es(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=vs.bind(null,J,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Es(e){return Ds(ts(),Io,e)}function Ds(e,t,n){if(t=cs(e,t,ws)[0],e=ss(os)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=rs(t)}catch(e){throw e===Ha?Wa:e}else r=t;t=ts();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(J.flags|=2048,As(9,{destroy:void 0},Os.bind(null,i,n),null)),[r,a,e]}function Os(e,t){e.action=t}function ks(e){var t=ts(),n=Io;if(n!==null)return Ds(t,n,e);ts(),t=t.memoizedState,n=ts();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function As(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=J.updateQueue,t===null&&(t=ns(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function js(){return ts().memoizedState}function Ms(e,t,n,r){var i=es();J.flags|=e,i.memoizedState=As(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ns(e,t,n,r){var i=ts();r=r===void 0?null:r;var a=i.memoizedState.inst;Io!==null&&r!==null&&Ko(r,Io.memoizedState.deps)?i.memoizedState=As(t,a,n,r):(J.flags|=e,i.memoizedState=As(1|t,a,n,r))}function Ps(e,t){Ms(8390656,8,e,t)}function Fs(e,t){Ns(2048,8,e,t)}function Is(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=ns(),J.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ls(e){var t=ts().memoizedState;return Is({ref:t,nextImpl:e}),function(){if(Zu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Rs(e,t){return Ns(4,2,e,t)}function zs(e,t){return Ns(4,4,e,t)}function Bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vs(e,t,n){n=n==null?null:n.concat([e]),Ns(4,4,Bs.bind(null,t,e),n)}function Hs(){}function Us(e,t){var n=ts();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ws(e,t){var n=ts();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ko(t,r[1]))return r[0];if(r=e(),Bo){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[r,t],r}function Gs(e,t,n){return n===void 0||Fo&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),J.lanes|=e,od|=e,n)}function Ks(e,t,n,r){return Lr(n,t)?n:yo.current===null?!(Fo&106)||Fo&1073741824&&!(X&261930)?(Oc=!0,e.memoizedState=n):(e=Md(),J.lanes|=e,od|=e,t):(e=Gs(e,n,r),Lr(e,t)||(Oc=!0),e)}function qs(e,t,n,r,i){var a=R.p;R.p=a!==0&&8>a?a:8;var o=L.T,s={};s.types=o===null?null:o.types,L.T=s,ac(e,!1,t,n);try{var c=i(),l=L.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ic(e,t,Ia(c,r),jd(e)):ic(e,t,r,jd(e))}catch(n){ic(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{R.p=a,o!==null&&s.types!==null&&(o.types=s.types),L.T=o}}function Js(){}function Ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Xs(e).queue;qs(e,a,t,me,n===null?Js:function(){return Zs(e),n(r)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),ic(e,t.next.queue,{},jd())}function Qs(){return va(lh)}function $s(){return ts().memoizedState}function ec(){return ts().memoizedState}function tc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=lo(n);var r=uo(t,e,n);r!==null&&(Pd(r,t,n),fo(r,t,n)),t={cache:Ta()},e.payload=t;return}t=t.return}}function nc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e)?sc(t,n):(n=yi(e,t,n,r),n!==null&&(Pd(n,e,r),cc(n,t,r)))}function rc(e,t,n){ic(e,t,n,jd())}function ic(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))sc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o))return vi(e,t,i,0),Qu===null&&_i(),!1}catch{}if(n=yi(e,t,i,r),n!==null)return Pd(n,e,r),cc(n,t,r),!0}return!1}function ac(e,t,n,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(e)){if(t)throw Error(i(479))}else t=yi(e,n,r,2),t!==null&&Pd(t,e,2)}function oc(e){var t=e.alternate;return e===J||t!==null&&t===J}function sc(e,t){zo=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}var lc={readContext:va,use:is,useCallback:Go,useContext:Go,useEffect:Go,useImperativeHandle:Go,useLayoutEffect:Go,useInsertionEffect:Go,useMemo:Go,useReducer:Go,useRef:Go,useState:Go,useDebugValue:Go,useDeferredValue:Go,useTransition:Go,useSyncExternalStore:Go,useId:Go,useHostTransitionStatus:Go,useFormState:Go,useActionState:Go,useOptimistic:Go,useMemoCache:Go,useCacheRefresh:Go,useEffectEvent:Go},uc={readContext:va,use:is,useCallback:function(e,t){return es().memoizedState=[e,t===void 0?null:t],e},useContext:va,useEffect:Ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ms(4194308,4,Bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){Ms(4,2,e,t)},useMemo:function(e,t){var n=es();t=t===void 0?null:t;var r=e();if(Bo){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=es();if(n!==void 0){var i=n(t);if(Bo){Ze(!0);try{n(t)}finally{Ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=nc.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=es();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,n=rc.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hs,useDeferredValue:function(e,t){return Gs(es(),e,t)},useTransition:function(){var e=gs(!1);return e=qs.bind(null,J,e.queue,!0,!1),es().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=J,a=es();if(q){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Qu===null)throw Error(i(349));X&127||ds(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ps(ps.bind(null,r,o,e),[e]),r.flags|=2048,As(9,{destroy:void 0},fs.bind(null,r,o,n,t),null),n},useId:function(){var e=es(),t=Qu.identifierPrefix;if(q){var n=Wi,r=Ui;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:Ts,useActionState:Ts,useOptimistic:function(e){var t=es();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ac.bind(null,J,!0,n),n.dispatch=t,[e,t]},useMemoCache:as,useCacheRefresh:function(){return es().memoizedState=tc.bind(null,J)},useEffectEvent:function(e){var t=es(),n={impl:e};return t.memoizedState=n,function(){if(Zu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},dc={readContext:va,use:is,useCallback:Us,useContext:va,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ss,useRef:js,useState:function(){return ss(os)},useDebugValue:Hs,useDeferredValue:function(e,t){return Ks(ts(),Io.memoizedState,e,t)},useTransition:function(){var e=ss(os)[0],t=ts().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){return _s(ts(),Io,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls},fc={readContext:va,use:is,useCallback:Us,useContext:va,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ls,useRef:js,useState:function(){return ls(os)},useDebugValue:Hs,useDeferredValue:function(e,t){var n=ts();return Io===null?Gs(n,e,t):Ks(n,Io.memoizedState,e,t)},useTransition:function(){var e=ls(os)[0],t=ts().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:ks,useActionState:ks,useOptimistic:function(e,t){var n=ts();return Io===null?(n.baseState=e,[e,n.queue.dispatch]):_s(n,Io,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls};function pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=lo(r);i.payload=t,n!=null&&(i.callback=n),t=uo(e,i,r),t!==null&&(Pd(t,e,r),fo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=lo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=uo(e,i,r),t!==null&&(Pd(t,e,r),fo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=lo(n);r.tag=2,t!=null&&(r.callback=t),t=uo(e,r,n),t!==null&&(Pd(t,e,n),fo(t,e,n))}};function hc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function _c(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function vc(e){mi(e)}function yc(e){console.error(e)}function bc(e){mi(e)}function xc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Sc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){return n=lo(n),n.tag=3,n.payload={element:null},n.callback=function(){xc(e,t)},n}function wc(e){return e=lo(e),e.tag=3,e}function Tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Sc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Sc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ha(t,n,a,!0),n=wo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return To===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ga?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),hf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ga?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),hf(e,r,a)),!1}throw Error(i(435,n.tag))}return hf(e,r,a),Kd(),!1}if(q)return t=wo.current,t===null?(r!==ea&&(t=Error(i(423),{cause:r}),sa(Fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Fi(r,n),a=Cc(e.stateNode,r,a),po(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ea&&(e=Error(i(422),{cause:r}),sa(Fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Fi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Cc(n.stateNode,r,e),po(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wc(a),Tc(a,e,n,r),po(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Dc=Error(i(461)),Oc=!1;function kc(e,t,n,r){t.child=e===null?ao(t,null,n,r):io(t,e.child,n,r)}function Ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return _a(t),r=qo(e,t,n,o,a,i),s=Zo(),e!==null&&!Oc?(Qo(e,t,i),il(e,t,i)):(q&&s&&qi(t),t.flags|=1,kc(e,t,r,i),t.child)}function jc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ei(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Mc(e,t,a,r,i)):(e=ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!al(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,e=Di(a,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref){if(Oc=!1,t.pendingProps=r=a,al(e,i))e.flags&131072&&(Oc=!0);else return t.lanes=e.lanes,il(e,t,i)}}return Bc(e,t,n,r,i)}function Nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ba(t,a===null?null:a.cachePool),a===null?So():xo(t,a),Oo(t);else return r=t.lanes=536870912,Fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ba(t,null),So(),ko()):(Ba(t,a.cachePool),xo(t,a),ko(),t.memoizedState=null);return kc(e,t,i,n),t.child}function Pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fc(e,t,n,r,i){var a=za();return a=a===null?null:{parent:wa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ba(t,null),So(),Oo(t),e!==null&&ha(e,t,r,!0),t.childLanes=i,null}function Ic(e,t){return t=Yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lc(e,t,n){return io(t,e.child,null,n),e=Ic(t,t.pendingProps),e.flags|=2,Ao(t),t.memoizedState=null,e}function Rc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(q){if(r.mode===`hidden`)return e=Ic(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Pc(null,e);if(Do(t),(e=Zi)?(e=sm(e,$i),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hi===null?null:{id:Ui,overflow:Wi},retryLane:536870912,hydrationErrors:null},n=Mi(e),n.return=t,t.child=n,Xi=t,Zi=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return Ic(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Do(t),a){if(t.flags&256)t.flags&=-257,t=Lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Oc||ha(e,t,n,!1),a=(n&e.childLanes)!==0,Oc||a){if(yo.current===null){if(r=Qu,r!==null&&(s=gt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,bi(e,s),Pd(r,e,s),Dc;Kd()}t=Lc(e,t,n)}else e=o.treeContext,Zi=dm(s.nextSibling),Xi=t,q=!0,Qi=null,$i=!1,e!==null&&Yi(t,e),t=Ic(t,r),t.flags|=134221824;return t}return e=Di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bc(e,t,n,r,i){return _a(t),n=qo(e,t,n,r,void 0,i),r=Zo(),e!==null&&!Oc?(Qo(e,t,i),il(e,t,i)):(q&&r&&qi(t),t.flags|=1,kc(e,t,n,i),t.child)}function Vc(e,t,n,r,i,a){return _a(t),t.updateQueue=null,n=Yo(t,r,n,i),Jo(e),r=Zo(),e!==null&&!Oc?(Qo(e,t,a),il(e,t,a)):(q&&r&&qi(t),t.flags|=1,kc(e,t,n,a),t.child)}function Hc(e,t,n,r,i){if(_a(t),t.stateNode===null){var a=Ci,o=n.contextType;typeof o==`object`&&o&&(a=va(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},so(t),o=n.contextType,a.context=typeof o==`object`&&o?va(o):Ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(pc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&mc.enqueueReplaceState(a,a.state,null),go(t,r,a,i),ho(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=_c(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ci,typeof u==`object`&&u&&(o=va(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&gc(t,a,r,o),oo=!1;var f=t.memoizedState;a.state=f,go(t,r,a,i),ho(),l=t.memoizedState,s||f!==l||oo?(typeof d==`function`&&(pc(t,n,d,r),l=t.memoizedState),(c=oo||hc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,co(e,t),o=t.memoizedProps,u=_c(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ci,typeof l==`object`&&l&&(c=va(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&gc(t,a,r,c),oo=!1,f=t.memoizedState,a.state=f,go(t,r,a,i),ho();var p=t.memoizedState;o!==d||f!==p||oo||e!==null&&e.dependencies!==null&&ga(e.dependencies)?(typeof s==`function`&&(pc(t,n,s,r),p=t.memoizedState),(u=oo||hc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ga(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,zc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=io(t,e.child,null,i),t.child=io(t,null,n,i)):kc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=il(e,t,i),e}function Uc(e,t,n,r){return aa(),t.flags|=256,kc(e,t,n,r),t.child}var Wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(e){return{baseLanes:e,cachePool:Va()}}function Kc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(jo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(q){if(i?Eo(t):ko(),(e=Zi)?(e=sm(e,$i),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hi===null?null:{id:Ui,overflow:Wi},retryLane:536870912,hydrationErrors:null},n=Mi(e),n.return=t,t.child=n,Xi=t,Zi=null)):e=null,e===null)throw ta(t);return t.lanes=lm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(ko(),i=t.mode,a=Yc({mode:`hidden`,children:a},i),r=Ai(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Gc(n),r.childLanes=Kc(e,o,n),t.memoizedState=Wc,Pc(null,r)):(Eo(t),Jc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Zc(e,t,a,o,r,c,s,n)}return i?(ko(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Di(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ai(i,a,n,null),i.flags|=2):i=Di(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Pc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Gc(n):(a=i.cachePool,a===null?a=Va():(s=wa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Kc(e,o,n),t.memoizedState=Wc,Pc(e.child,r)):(Eo(t),n=e.child,e=n.sibling,n=Di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Jc(e,t){return t=Yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Yc(e,t){return e=Ti(22,e,null,t),e.lanes=0,e}function Xc(e,t,n){return io(t,e.child,null,n),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Eo(t),t.flags&=-257,Xc(e,t,c)):t.memoizedState===null?(ko(),o=a.fallback,s=t.mode,a=Yc({mode:`visible`,children:a.children},s),o=Ai(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,io(t,e.child,null,c),a=t.child,a.memoizedState=Gc(c),a.childLanes=Kc(e,r,c),t.memoizedState=Wc,Pc(null,a)):(ko(),t.child=e.child,t.flags|=128,null);if(Eo(t),lm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,sa({value:a,source:null,stack:null})),Xc(e,t,c)}if(Oc||ha(e,t,c,!1),r=(c&e.childLanes)!==0,Oc||r){if(yo.current!==null)return Xc(e,t,c);if(r=Qu,r!==null&&(a=gt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,bi(e,a),Pd(r,e,a),Dc;return cm(o)||Kd(),Xc(e,t,c)}return cm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Zi=dm(o.nextSibling),Xi=t,q=!0,Qi=null,$i=!1,e!==null&&Yi(t,e),t=Jc(t,a.children),t.flags|=134221824,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function $c(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Po(n)===null&&(t=e),e=e.sibling}return t}function el(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function tl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=jo.current;if(t.flags&128)return Mo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Mo(t,o),i===`backwards`&&e!==null?(tl(e),kc(e,t,r,n),tl(e)):kc(e,t,r,n),r=q?zi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=$c(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,tl(t)),el(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,a,r);break;case`together`:el(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=$c(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,a,r)}return t.child}function rl(e,t,n){var r=t.pendingProps;return da(t,t.type,r.value),kc(e,t,r.children,n),t.child}function il(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ha(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function al(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ga(e)))}function ol(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),da(t,wa,e.memoizedState.cache),aa();break;case 27:case 5:Ee(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Do(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Eo(t),t.flags|=128,null;r=ha(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?qc(e,t,n):(Eo(t),e=il(e,t,n),e===null?null:e.sibling)}Eo(t);break;case 19:if(t.flags&128)return nl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ha(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return nl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Mo(t,jo.current),r)break;return null;case 22:return t.lanes=0,Nc(e,t,n,t.pendingProps);case 24:da(t,wa,e.memoizedState.cache)}return il(e,t,n)}function sl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Oc=!0;else{if(!al(e,n)&&!(t.flags&128))return Oc=!1,ol(e,t,n);Oc=!!(e.flags&131072)}}else Oc=!1,q&&t.flags&1048576&&Ki(t,zi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e==`function`)Ei(e)?(r=_c(e,r),t.tag=1,t=Hc(null,t,e,r,n)):(t.tag=0,t=Bc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===I){t.tag=11,t=Ac(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=jc(null,t,e,r,n);break a}if(a===F){t.tag=10,t.type=e,t=rl(null,t,n);break a}}throw t=fe(e)||e,Error(i(306,t,``))}}return t;case 0:return Bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=_c(r,t.pendingProps),Hc(e,t,r,a,n);case 3:a:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,co(e,t),go(t,r,null,n);var s=t.memoizedState;if(r=s.cache,da(t,wa,r),r!==o.cache&&ma(t,[wa],n,!0),ho(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Uc(e,t,r,n);break a}if(r!==a){a=Fi(Error(i(424)),t),sa(a),t=Uc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Zi=dm(e.firstChild),Xi=t,q=!0,Qi=null,$i=!0,n=ao(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(aa(),r===a){t=il(e,t,n);break a}kc(e,t,r,n)}t=t.child}return t;case 26:return zc(e,t),e===null?(n=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:q||(t.stateNode=mp(t.type,t.pendingProps,Se.current,t)):t.memoizedState=Fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&q&&(r=t.stateNode=_m(t.type,t.pendingProps,Se.current),Xi=t,$i=!0,a=Zi,wp(t.type)?(fm=a,Zi=dm(r.firstChild)):Zi=a),kc(e,t,t.pendingProps.children,n),zc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&q&&((a=r=Zi)&&(r=am(r,t.type,t.pendingProps,$i),r===null?a=!1:(t.stateNode=r,Xi=t,Zi=dm(r.firstChild),$i=!1,a=!0)),a||ta(t)),Ee(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,hp(a,o)?r=null:s!==null&&hp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=qo(e,t,Xo,null,null,n),lh._currentValue=a),zc(e,t),kc(e,t,r,n),t.child;case 6:return e===null&&q&&((e=n=Zi)&&(n=om(n,t.pendingProps,$i),n===null?e=!1:(t.stateNode=n,Xi=t,Zi=null,e=!0)),e||ta(t)),null;case 13:return qc(e,t,n);case 4:return we(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=io(t,null,r,n):kc(e,t,r,n),t.child;case 11:return Ac(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,zc(e,t),kc(e,t,r,n),t.child;case 8:return kc(e,t,t.pendingProps.children,n),t.child;case 12:return kc(e,t,t.pendingProps.children,n),t.child;case 10:return rl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,_a(t),a=va(a),r=r(a),t.flags|=1,kc(e,t,r,n),t.child;case 14:return jc(e,t,t.type,t.pendingProps,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 19:return nl(e,t,n);case 31:return Rc(e,t,n);case 22:return Nc(e,t,n,t.pendingProps);case 24:return _a(t),r=va(wa),e===null?(a=za(),a===null&&(a=Qu,o=Ta(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},so(t),da(t,wa,a)):((e.lanes&n)!==0&&(co(e,t),go(t,null,null,n),ho()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,da(t,wa,r),r!==a.cache&&ma(t,[wa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),da(t,wa,r))),kc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:q&&qi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:zc(e,t),kc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function cl(e){e.flags|=4}function ll(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Xm(t,r):Xm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw Ya=Ga,Ua}}else e.flags&=-16777217}function ul(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t)){if(Ud())e.flags|=8192;else throw Ya=Ga,Ua}}function dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ut(),e.lanes|=t,ud|=t)}function fl(e,t){if(!q)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function pl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ml(e,t,n){var r=t.pendingProps;switch(Ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pl(t),null;case 1:return pl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),fa(wa),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ia(t)?cl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,oa())),pl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(cl(t),o===null?(pl(t),ll(t,a,null,r,n)):(pl(t),ul(t,o))):o?o===e.memoizedState?(pl(t),t.flags&=-16777217):(cl(t),pl(t),ul(t,o)):(e=e.memoizedProps,e!==r&&cl(t),pl(t),ll(t,a,e,r,n)),null;case 27:if(De(t),n=Se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return pl(t),t.subtreeFlags&=-33554433,null}e=be.current,ia(t)?na(t,e):(e=_m(a,r,n),t.stateNode=e,cl(t))}return pl(t),t.subtreeFlags&=-33554433,null;case 5:if(De(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return pl(t),t.subtreeFlags&=-33554433,null}if(o=be.current,ia(t))na(t,o);else{var s=dp(Se.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[St]=t,o[Ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ip(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&cl(t)}}return pl(t),t.subtreeFlags&=-33554433,ll(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Se.current,ia(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Xi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[St]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||tp(e.nodeValue,n)),e||ta(t,!0)}else e=dp(e).createTextNode(r),e[St]=t,t.stateNode=e}return pl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ia(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[St]=t}else aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pl(t),e=!1}else n=oa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ao(t),t):(Ao(t),null);if(t.flags&128)throw Error(i(558))}return pl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ia(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[St]=t}else aa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pl(t),a=!1}else a=oa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ao(t),t):(Ao(t),null)}return Ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),dl(t,t.updateQueue),pl(t),null);case 4:return Te(),e===null&&Gf(t.stateNode.containerInfo),t.flags|=67108864,pl(t),null;case 10:return fa(t.type),pl(t),null;case 19:if(No(t),r=t.memoizedState,r===null)return pl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)fl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Po(e),o!==null){for(t.flags|=128,fl(r,!1),e=o.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Oi(n,e),n=n.sibling;return Mo(t,jo.current&1|2),q&&Gi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Be()>gd&&(t.flags|=128,a=!0,fl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),fl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!q)return pl(t),null}else 2*Be()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,fl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Be(),e.sibling=null,o=jo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||q?Mo(t,o):(n=o,ye(wo,t),ye(jo,n),To===null&&(To=t)),q&&Gi(t,r.treeForkCount),e}return pl(t),null;case 22:case 23:return Ao(t),Co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(pl(t),t.subtreeFlags&6&&(t.flags|=8192)):pl(t),n=t.updateQueue,n!==null&&dl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ve(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fa(wa),pl(t),null;case 25:return null;case 30:return t.flags|=33554432,pl(t),null}throw Error(i(156,t.tag))}function hl(e,t){switch(Ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(wa),Te(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return De(t),null;case 31:if(t.memoizedState!==null){if(Ao(t),t.alternate===null)throw Error(i(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return No(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Te(),null;case 10:return fa(t.type),null;case 22:case 23:return Ao(t),Co(),e!==null&&ve(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(wa),null;case 25:return null;default:return null}}function gl(e,t){switch(Ji(t),t.tag){case 3:fa(wa),Te();break;case 26:case 27:case 5:De(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&Ao(t);break;case 13:Ao(t);break;case 19:No(t);break;case 10:fa(t.type);break;case 22:case 23:Ao(t),Co(),e!==null&&ve(Ra);break;case 24:fa(wa)}}function _l(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){mf(t,t.return,e)}}function vl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){mf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){mf(t,t.return,e)}}function yl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vo(t,n)}catch(t){mf(e,e.return,t)}}}function bl(e,t,n){n.props=_c(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){mf(e,t,n)}}function xl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=di(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Ip(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Lp(e);m(e.child,!1,em,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){mf(e,t,n)}}function Sl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){mf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){mf(e,t,n)}else n.current=null}}function Cl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)nm(e.stateNode,t[n])}function wl(e){for(var t=e.return;t!==null&&(Dl(t)&&nm(e.stateNode,t.stateNode),!El(t));)t=t.return}function Tl(e){for(var t=e.return;t!==null&&(Dl(t)&&rm(e.stateNode,t.stateNode),!El(t));)t=t.return}function El(e){return e.tag===5||e.tag===3||e.tag===27}function Dl(e){return e&&e.tag===7&&e.stateNode!==null}function Ol(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){mf(e,e.return,t)}}function kl(e,t,n){try{var r=e.stateNode;op(r,e.type,n,t),r[Ct]=t}catch(t){mf(e,e.return,t)}}function Al(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wp(e.type)||e.tag===4}function jl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn)),Cl(e,r),Kt=!0;else if(i!==4&&(i===27&&(Cl(e,r),r=null,wp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ml(e,t,n,r),e=e.sibling;e!==null;)Ml(e,t,n,r),e=e.sibling}function Nl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Cl(e,r),Kt=!0;else if(i!==4&&(i===27&&(Cl(e,r),r=null,wp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Nl(e,t,n,r),e=e.sibling;e!==null;)Nl(e,t,n,r),e=e.sibling}function Pl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ip(t,r,n),t[St]=e,t[Ct]=n}catch(t){mf(e,e.return,t)}}var Fl=!1,Il=null;function Ll(e){(e.tag===30||e.subtreeFlags&33554432)&&(Fl=!0)}var Rl=null;function zl(){var e=Rl;return Rl=null,e}var Bl=0;function Vl(e,t,n,r,i){return Bl=0,Hl(e.child,t,n,r,i)}function Hl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Ap(o);r.push(s),s.view&&(a=!0)}else a||Ap(o).view&&(a=!0);Fl=!0,Dp(o,Bl===0?t:t+`_`+Bl,n),Bl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Hl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Ul(e,t){for(;e!==null;)e.tag===5?Op(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ul(e.child,t)),e=e.sibling}function Wl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Wl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=pi(t.default,t.share),t!==`none`&&(Vl(e,n,t,null,!1)||Ul(e.child,!1))}e=e.sibling}}function Gl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=di(r,n),a=pi(r.default,n.paired?r.share:r.enter);a===`none`?Wl(e):Vl(e,i,a,null,!1)?(Wl(e),n.paired||t||Nd(e,r.onEnter)):Ul(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e,t),e=e.sibling;else Wl(e)}function Kl(e){if(Il!==null&&Il.size!==0){var t=Il;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=pi(n.default,n.share);if(a!==`none`&&(Vl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Ul(e.child,!1)),t.delete(r),t.size===0)break}}}Kl(e)}e=e.sibling}}}function ql(e){if(e.tag===30){var t=e.memoizedProps,n=di(t,e.stateNode),r=Il===null?void 0:Il.get(n),i=pi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Vl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Il.delete(n),Nd(e,t.onShare)):Ul(e.child,!1)),Il!==null&&Kl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Il!==null&&Kl(e)}function Jl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=di(t,e.stateNode);t=pi(t.default,t.update),e.flags&=-5,t!==`none`&&Vl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Jl(e);e=e.sibling}}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ul(e.child,!1))}Yl(e)}e=e.sibling}}function Xl(e){if(e.tag===30)e.stateNode.paired=null,Ul(e.child,!1),Yl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e),e=e.sibling;else Yl(e)}function Zl(e){for(e=e.child;e!==null;)e.tag===30?Ul(e.child,!1):e.subtreeFlags&33554432&&Zl(e),e=e.sibling}function Ql(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Bl<a.length){var l=a[Bl],u=Ap(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Dp(c,Bl===0?n:n+`_`+Bl,i),s&&e.flags&4||(Rl===null&&(Rl=[]),Rl.push(c,Bl===0?r:r+`_`+Bl,t.memoizedProps)),Bl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Ql(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function $l(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=di(n,r),a=pi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(jp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Bl=0,i=Ql(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&$l(e,t);e=e.sibling}}var eu=!1,tu=!1,nu=!1,ru=!1,iu=typeof WeakSet==`function`?WeakSet:Set,au=null,ou=!1,su=!1,cu=!1,lu=!1;function uu(e,t,n){if(e=e.containerInfo,lp=vh,e=Vr(e),Hr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(up={focusedElem:e,selectionRange:r},vh=!1,n=(n&335544064)===n,au=t,t=n?9270:1024;au!==null;){if(e=au,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Ll(e),du(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&ql(r),du(n);continue}if(r!==null&&r.memoizedState!==null){n&&Ll(e),du(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,au=r):(n&&Jl(e),du(n))}}Il=null}function du(e){for(;au!==null;){var t=au,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=_c(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){mf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)im(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:im(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=di(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=pi(a.default,a.update),a!==`none`&&Vl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,au=r;break}au=t.return}}function fu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Mu(e,n),r&4&&_l(5,n);break;case 1:if(Mu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){mf(n,n.return,e)}else{var i=_c(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){mf(n,n.return,e)}}}r&64&&yl(n),r&512&&xl(n,n.return);break;case 3:if(Mu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{vo(e,t)}catch(e){mf(n,n.return,e)}}break;case 27:t===null&&r&4&&Pl(n);case 26:case 5:Mu(e,n),t===null&&r&4&&Ol(n),r&512&&xl(n,n.return);break;case 12:Mu(e,n);break;case 31:Mu(e,n),r&4&&xu(e,n);break;case 13:Mu(e,n),r&4&&Su(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vf.bind(null,n),um(e,n))));break;case 22:if(r=n.memoizedState!==null||eu,!r){var a=t!==null&&t.memoizedState!==null||tu;t=eu,i=tu,eu=r,(tu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Pu(e,n,r)):Mu(e,n),eu=t,tu=i}break;case 30:Mu(e,n),r&512&&xl(n,n.return);break;case 7:r&512&&xl(n,n.return);default:Mu(e,n)}}function pu(e,t){for(e=e.child;e!==null;)mu(e,t),e=e.sibling}function mu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){mf(e,e.return,t)}hu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Kt=!0}catch(t){mf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Ep(s,!0):Ep(e.stateNode,!1)}catch(t){mf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&pu(e,t);break;default:pu(e,t)}}function hu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:mu(n,r);break a;case 22:n.memoizedState===null&&hu(n,r);break a;default:hu(n,r)}}e=e.sibling}}function gu(e){var t=e.alternate;t!==null&&(e.alternate=null,gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&jt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _u=null,vu=!1;function yu(e,t,n){for(n=n.child;n!==null;)bu(e,t,n),n=n.sibling}function bu(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount==`function`)try{Xe.onCommitFiberUnmount(Ye,n)}catch{}switch(n.tag){case 26:tu||Sl(n,t),yu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!tu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tu||Sl(n,t),Tl(n);var r=_u,i=vu;wp(n.type)&&(_u=n.stateNode,vu=!1),yu(e,t,n),vm(n.stateNode,n.type,n.memoizedProps),_u=r,vu=i;break;case 5:tu||Sl(n,t),Tl(n);case 6:if(n.tag===6&&Tl(n),r=_u,i=vu,_u=null,yu(e,t,n),_u=r,vu=i,_u!==null){if(vu)try{(_u.nodeType===9?_u.body:_u.nodeName===`HTML`?_u.ownerDocument.body:_u).removeChild(n.stateNode),Kt=!0}catch(e){mf(n,t,e)}else try{_u.removeChild(n.stateNode),Kt=!0}catch(e){mf(n,t,e)}}break;case 18:_u!==null&&(vu?(e=_u,Tp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Wh(e)):Tp(_u,n.stateNode));break;case 4:r=_u,i=vu,_u=n.stateNode.containerInfo,vu=!0,yu(e,t,n),_u=r,vu=i;break;case 0:case 11:case 14:case 15:vl(2,n,t),tu||vl(4,n,t),yu(e,t,n);break;case 1:tu||(Sl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&bl(n,t,r)),yu(e,t,n);break;case 21:yu(e,t,n);break;case 22:tu=(r=tu)||n.memoizedState!==null,yu(e,t,n),tu=r;break;case 30:Sl(n,t),yu(e,t,n);break;case 7:tu||Sl(n,t),yu(e,t,n);break;default:yu(e,t,n)}}function xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wh(e)}catch(e){mf(t,t.return,e)}}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wh(e)}catch(e){mf(t,t.return,e)}}function Cu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new iu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new iu),t;default:throw Error(i(435,e.tag))}}function wu(e,t){var n=Cu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=yf.bind(null,e,t);t.then(r,r)}})}function Tu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(wp(l.type)){_u=l.stateNode,vu=!1;break a}break;case 5:_u=l.stateNode,vu=!1;break a;case 3:case 4:_u=l.stateNode.containerInfo,vu=!0;break a}l=l.return}if(_u===null)throw Error(i(160));bu(s,c,o),_u=null,vu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Du(t,e,n),t=t.sibling}var Eu=null;function Du(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Tu(t,e,n),Ou(e),a&4&&(vl(3,e,e.return),_l(3,e),vl(5,e,e.return));break;case 1:Tu(t,e,n),Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),a&64&&eu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Eu,Tu(t,e,n),Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(eu)e.stateNode=mp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[kt]||r[St]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ip(r,t,n),r[St]=e,It(r),t=r;break a;case`link`:if(o=qm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=qm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[St]=e,It(r),t=r}e.stateNode=t}}else eu||Jm(o,e.type,e.stateNode)}else e.stateNode=Hm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&kl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||tu||t.parentNode.removeChild(t)):a.count--,n===null?eu||Jm(o,e.type,e.stateNode):Hm(o,n,e.memoizedProps))}break;case 27:Tu(t,e,n),Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),r!==null&&a&4&&kl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=nu,nu=!1,Tu(t,e,n),nu=o,Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),e.flags&32){t=e.stateNode;try{dn(t,``),Kt=!0}catch(t){mf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,kl(e,t,r===null?t:r.memoizedProps)),a&1024&&(ru=!0);break;case 6:if(Tu(t,e,n),Ou(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Kt=!0}catch(t){mf(e,e.return,t)}}break;case 3:if(Kt=!1,Km=null,o=Eu,Eu=Sm(t.containerInfo),Tu(t,e,n),Eu=o,Ou(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Wh(t.containerInfo)}catch(t){mf(e,e.return,t)}ru&&(ru=!1,ku(e)),Kt=!1;break;case 4:a=nu,nu=eu,r=qt(),o=Eu,Eu=Sm(e.stateNode.containerInfo),Tu(t,e,n),Ou(e),Eu=o,Kt&&su&&(cu=!0),Kt=r,nu=a;break;case 12:Tu(t,e,n),Ou(e);break;case 31:Tu(t,e,n),Ou(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 13:Tu(t,e,n),Ou(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Be()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=eu,l=tu,u=nu;eu=c||o,nu=u||o,tu=l||s,Tu(t,e,n),tu=l,nu=u,eu=c,Ou(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||eu||tu||(t=s||tu,n=eu,r=tu,eu=o||eu,tu=t,Nu(e,2),eu=n,tu=r),!o&&nu||pu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,wu(e,n))));break;case 19:Tu(t,e,n),Ou(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 30:a&512&&(tu||r===null||Sl(r,r.return)),a=qt(),o=su,s=(n&335544064)===n,c=e.memoizedProps,su=s&&pi(c.default,c.update)!==`none`,Tu(t,e,n),Ou(e),s&&r!==null&&Kt&&(e.flags|=4),su=o,Kt=a;break;case 21:break;case 7:a&512&&(tu||r===null||Sl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Tu(t,e,n),Ou(e)}}function Ou(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Al(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Dl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(El(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Nl(e,jl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(dn(l,``),n.flags&=-33),Nl(e,jl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ml(e,jl(e),u,s);break;default:throw Error(i(161))}}catch(t){mf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ku(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ku(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,vh=!0,t.reset(),vh=!1),e=e.sibling}}function Au(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ju(t,e),t=t.sibling;else $l(t,!1)}function ju(e,t){var n=e.alternate;if(n===null)Gl(e,!1);else switch(e.tag){case 3:if(lu=ou=!1,zl(),Au(t,e),!ou&&!cu){if(e=Rl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Op(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),lu=!0}Rl=null;break;case 5:Au(t,e);break;case 4:r=ou,ou=!1,Au(t,e),ou&&(cu=!0),ou=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Au(t,e):Gl(e,!1));break;case 30:r=ou,i=zl(),ou=!1,Au(t,e),ou&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=di(a,o),o=di(n.memoizedProps,o);var s=pi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Bl=0,t=Ql(e,n,t,o,s,a,!0),Bl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Rl=i):i!==null&&(i.push.apply(i,Rl),Rl=i),ou=e.flags&32?!0:r;break;default:Au(t,e)}}function Mu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fu(e,t.alternate,t),t=t.sibling}function Nu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:vl(4,n,n.return),Nu(n,r);break;case 1:Sl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&bl(n,n.return,i),Nu(n,r);break;case 27:r&2&&vm(n.stateNode,n.type,n.memoizedProps);case 5:Sl(n,n.return),n.tag!==5&&n.tag!==27||Tl(n),Nu(n,r);break;case 6:Tl(n);break;case 26:Sl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||tu||i.parentNode.removeChild(i),Nu(n,r);break;case 22:n.memoizedState===null&&Nu(n,r);break;case 30:Sl(n,n.return),Nu(n,r);break;case 7:Sl(n,n.return);default:Nu(n,r)}e=e.sibling}}function Pu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Pu(i,a,n),_l(4,a);break;case 1:if(Pu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){mf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)_o(l[i],c)}catch(e){mf(r,r.return,e)}}s&&o&64&&yl(a),xl(a,a.return);break;case 27:n&2&&Pl(a);case 5:a.tag!==5&&a.tag!==27||wl(a),Pu(i,a,n),s&&r===null&&o&4&&Ol(a),xl(a,a.return);break;case 6:wl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||eu||Jm(Sm(c.ownerDocument),a.type,c),Pu(i,a,n),s&&r===null&&o&4&&Ol(a),xl(a,a.return);break;case 12:Pu(i,a,n);break;case 31:Pu(i,a,n),s&&o&4&&xu(i,a);break;case 13:Pu(i,a,n),s&&o&4&&Su(i,a);break;case 22:a.memoizedState===null&&Pu(i,a,n),xl(a,a.return);break;case 30:Pu(i,a,n),xl(a,a.return);break;case 7:xl(a,a.return);default:Pu(i,a,n)}t=t.sibling}}function Fu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ea(n))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ea(e))}function Lu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Ru(e,t,n,r),t=t.sibling;else i&&Zl(t)}function Ru(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Xl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Lu(e,t,n,r),a&2048&&_l(9,t);break;case 1:Lu(e,t,n,r);break;case 3:Lu(e,t,n,r),i&&lu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ea(a)));break;case 12:if(a&2048){Lu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){mf(t,t.return,e)}}else Lu(e,t,n,r);break;case 31:Lu(e,t,n,r);break;case 13:Lu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Xl(t),o._visibility&2?Lu(e,t,n,r):(o._visibility|=2,zu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Xl(s),o._visibility&2?Lu(e,t,n,r):Bu(e,t)),a&2048&&Fu(s,t);break;case 24:Lu(e,t,n,r),a&2048&&Iu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ul(a.child,!0),Ul(t.child,!0))),Lu(e,t,n,r);break;default:Lu(e,t,n,r)}}function zu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:zu(a,o,s,c,i),_l(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,zu(a,o,s,c,i)):u._visibility&2?zu(a,o,s,c,i):Bu(a,o),i&&l&2048&&Fu(o.alternate,o);break;case 24:zu(a,o,s,c,i),i&&l&2048&&Iu(o.alternate,o);break;default:zu(a,o,s,c,i)}t=t.sibling}}function Bu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Bu(n,r),i&2048&&Fu(r.alternate,r);break;case 24:Bu(n,r),i&2048&&Iu(r.alternate,r);break;default:Bu(n,r)}t=t.sibling}}var Vu=8192;function Hu(e,t,n){if(e.subtreeFlags&Vu)for(e=e.child;e!==null;)Uu(e,t,n),e=e.sibling}function Uu(e,t,n){switch(e.tag){case 26:Hu(e,t,n),e.flags&Vu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&$m(n,e)):eh(n,Eu,e.memoizedState,e.memoizedProps));break;case 5:Hu(e,t,n),e.flags&Vu&&(e=e.stateNode,(t&335544128)===t&&$m(n,e));break;case 3:case 4:var r=Eu;Eu=Sm(e.stateNode.containerInfo),Hu(e,t,n),Eu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vu,Vu=16777216,Hu(e,t,n),Vu=r):Hu(e,t,n));break;case 30:if((e.flags&Vu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Il===null&&(Il=new Map),Il.set(r,i)}Hu(e,t,n);break;default:Hu(e,t,n)}}function Wu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];au=r,Ju(r,e)}Wu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ku(e),e=e.sibling}function Ku(e){switch(e.tag){case 0:case 11:case 15:Gu(e),e.flags&2048&&vl(9,e,e.return);break;case 3:Gu(e);break;case 12:Gu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qu(e)):Gu(e);break;default:Gu(e)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];au=r,Ju(r,e)}Wu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vl(8,t,t.return),qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qu(t));break;default:qu(t)}e=e.sibling}}function Ju(e,t){for(;au!==null;){var n=au;switch(n.tag){case 0:case 11:case 15:vl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ea(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,au=r;else a:for(n=e;au!==null;){r=au;var i=r.sibling,a=r.return;if(gu(r),r===n){au=null;break a}if(i!==null){i.return=a,au=i;break a}au=a}}}var Yu={getCacheForType:function(e){var t=va(wa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return va(wa).controller.signal}},Xu=typeof WeakMap==`function`?WeakMap:Map,Zu=0,Qu=null,Y=null,X=0,$u=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return Zu&2&&X!==0?X&-X:L.T===null?yt():Ff()}function Md(){if(ld===0){if(!(X&536870912)||q){var e=rt;rt<<=1,!(rt&3932160)&&(rt=262144),ld=e}else ld=536870912}return e=wo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Ip(di(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===Qu&&($u===2||$u===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,X,ld,!1)),ft(e,n),(!(Zu&2)||e!==Qu)&&(e===Qu&&(!(Zu&2)&&(sd|=n),ad===4&&Rd(e,X,ld,!1)),Df(e))}function Fd(e,t,n){if(Zu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||st(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Be(),10<a)){if(Rd(r,t,ld,!td),ot(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=vp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Df(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},Il=null,Uu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ih.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Be():(a&4194048)===a?hd-Be():0,m=nh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=ct(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&mt(e,n,t)}function zd(){return Zu&6?!0:(Of(0,!1),!1)}function Bd(){if(Y!==null){if($u===0)var e=Y.return;else e=Y,ua=la=null,$o(e),Qa=null,$a=0,e=Y;for(;e!==null;)gl(e.alternate,e),e=e.return;Y=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,yp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),Qu=e,Y=n=Di(e.current,null),X=t,$u=0,ed=null,td=!1,nd=st(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=ct(e,t),_i(),n}function Hd(e,t){J=null,L.H=lc,t===Ha||t===Wa?(t=Xa(),$u=3):t===Ua?(t=Xa(),$u=4):$u=t===Dc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,Y===null&&(ad=1,xc(e,Fi(t,e.current)))}function Ud(){var e=wo.current;return e===null?!0:(X&4194048)===X?To===null:(X&62914560)===X||X&536870912?e===To:!1}function Wd(){var e=L.H;return L.H=lc,e===null?lc:e}function Gd(){var e=L.A;return L.A=Yu,e}function Kd(){ad=4,td||(X&4194048)!==X&&wo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||Qu===null||Rd(Qu,X,ld,!1)}function qd(e,t,n){var r=Zu;Zu|=2;var i=Wd(),a=Gd();(Qu!==e||X!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if($u!==0&&Y!==null){var s=Y,c=ed;switch($u){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:wo.current===null&&(t=!0);var l=$u;if($u=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=$u,$u=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ua=la=null,Zu=r,L.H=i,L.A=a,Y===null&&(Qu=null,X=0,_i()),o}function Jd(){for(;Y!==null;)Zd(Y)}function Yd(e,t){var n=Zu;Zu|=2;var r=Wd(),a=Gd();Qu!==e||X!==t?(_d=null,gd=Be()+500,Vd(e,t)):nd=st(e,t);a:do try{if($u!==0&&Y!==null){t=Y;var o=ed;b:switch($u){case 1:$u=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(Ka(o)){$u=0,ed=null,Qd(t);break}t=function(){$u!==2&&$u!==9||Qu!==e||($u=7),Df(e)},o.then(t,t);break a;case 3:$u=7;break a;case 4:$u=5;break a;case 7:Ka(o)?($u=0,ed=null,Qd(t)):($u=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Zm(s):c.stateNode.complete){$u=0,ed=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,ef(u))}break b}}$u=0,ed=null,$d(e,t,o,5);break;case 6:$u=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ua=la=null,L.H=r,L.A=a,Zu=n,Y===null?(Qu=null,X=0,_i(),ad):0}function Xd(){for(;Y!==null&&!Re();)Zd(Y)}function Zd(e){var t=sl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):Y=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Vc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Vc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:$o(t);var r=t;r===Xi&&(q?(ra(r),r.tag===5&&r.stateNode!=null&&(Zi=r.stateNode)):(ra(r),q=!0));default:gl(n,t),t=Y=Oi(t,id),t=sl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):Y=t}function $d(e,t,n,r){ua=la=null,$o(t),Qa=null,$a=0;var i=t.return;try{if(Ec(e,i,t,n,X)){ad=1,xc(e,Fi(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;ad=1,xc(e,Fi(n,e.current)),Y=null;return}t.flags&32768?(q||r===1?e=!0:nd||X&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=wo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=ml(t.alternate,t,id);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=hl(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);ad=6,Y=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(Zu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Qu&&(Y=Qu=null,X=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=gi,pt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=ka(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,bf(We,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Fl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=L.T,L.T=null,i=R.p,R.p=2,a=Zu,Zu|=4;try{uu(e,t,n)}finally{Zu=a,R.p=i,L.T=r}}yd=1,Fl?Ed=Pp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,ju(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=L.T,L.T=null;var i=R.p;R.p=2;var a=Zu;Zu|=4;try{su=cu=!1,Du(t,e,n),n=up;var o=Vr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&G(s.ownerDocument.documentElement,s)){if(c!==null&&Hr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Br(s,h),v=Br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}vh=!!lp,up=lp=null}finally{Zu=a,R.p=i,L.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=L.T,L.T=null;var r=R.p;R.p=2;var i=Zu;Zu|=4;try{fu(e,t.alternate,t)}finally{Zu=i,R.p=r,L.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,ze();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),vt(r),n=n.stateNode,Xe&&typeof Xe.onCommitFiberRoot==`function`)try{Xe.onCommitFiberRoot(Ye,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=L.T,a=R.p,R.p=2,L.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{L.T=n,R.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Df(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Of(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ea(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=vt(Sd),r=L.T,a=R.p;try{R.p=32>n?32:n,L.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,Zu&6)throw Error(i(331));var c=Zu;if(Zu|=4,Ku(o.current),Ru(o,o.current,s,n),Zu=c,Of(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot==`function`)try{Xe.onPostCommitFiberRoot(Ye,o)}catch{}return!0}finally{R.p=a,L.T=r,uf(e,t)}}function pf(e,t,n){t=Fi(n,t),t=Cc(e.stateNode,t,2),e=uo(e,t,2),e!==null&&(ft(e,2),Df(e))}function mf(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Fi(n,e),n=wc(2),r=uo(t,n,2),r!==null&&(Tc(n,r,t,e),ft(r,2),Df(r));break}}t=t.return}}function hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=gf.bind(null,e,t,n),t.then(e,e))}function gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qu===e&&(X&n)===n&&(ad===4||ad===3&&(X&62914560)===X&&300>Be()-md?Zu&2?cd|=n:Vd(e,0):cd|=n,ud===X&&(ud=0)),Df(e)}function _f(e,t){t===0&&(t=ut()),e=bi(e,t),e!==null&&(ft(e,t),Df(e))}function vf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function yf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),_f(e,n)}function bf(e,t){return Ie(e,t)}var xf=null,Sf=null,Cf=!1,wf=!1,Tf=!1,Ef=0;function Df(e){e!==Sf&&e.next===null&&(Sf===null?xf=Sf=e:Sf=Sf.next=e),wf=!0,Cf||(Cf=!0,Pf())}function Of(e,t){if(!Tf&&wf){Tf=!0;do for(var n=!1,r=xf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Nf(r,a))}else a=X,a=ot(r,r===Qu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||st(r,a)||(n=!0,Nf(r,a))}r=r.next}while(n);Tf=!1}}function kf(){Af()}function Af(){wf=Cf=!1;var e=0;Ef!==0&&_p()&&(e=Ef);for(var t=Be(),n=null,r=xf;r!==null;){var i=r.next,a=jf(r,t);a===0?(r.next=null,n===null?xf=i:n.next=i,i===null&&(Sf=n)):(n=r,(e!==0||a&3)&&(wf=!0)),r=i}yd!==0&&yd!==5||Of(e,!1),Ef!==0&&(Ef=0)}function jf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=lt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Qu,n=X,n=ot(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&($u===2||$u===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||st(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Le(r),vt(n)){case 2:case 8:n=Ue;break;case 32:n=We;break;case 268435456:n=Ke;break;default:n=We}return r=Mf.bind(null,e),n=Ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=X;return r=ot(e,e===Qu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),jf(e,Be()),e.callbackNode!=null&&e.callbackNode===n?Mf.bind(null,e):null)}function Nf(e,t){if(df())return null;Fd(e,t,!0)}function Pf(){Sp(function(){Zu&6?Ie(He,kf):Af()})}function Ff(){if(Ef===0){var e=Ma;e===0&&(e=nt,nt<<=1,!(nt&261888)&&(nt=256)),Ef=e}return Ef}function If(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:vn(e)}function Lf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=If((i[Ct]||null).action),o=r.submitter;o&&(t=(t=o[Ct]||null)?If(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ef!==0){var e=new FormData(i,o);Ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Rf=0;Rf<ci.length;Rf++){var zf=ci[Rf];li(zf.toLowerCase(),`on`+(zf[0].toUpperCase()+zf.slice(1)))}li(ei,`onAnimationEnd`),li(ti,`onAnimationIteration`),li(ni,`onAnimationStart`),li(`dblclick`,`onDoubleClick`),li(`focusin`,`onFocus`),li(`focusout`,`onBlur`),li(ri,`onTransitionRun`),li(ii,`onTransitionStart`),li(ai,`onTransitionCancel`),li(oi,`onTransitionEnd`),Vt(`onMouseEnter`,[`mouseout`,`mouseover`]),Vt(`onMouseLeave`,[`mouseout`,`mouseover`]),Vt(`onPointerEnter`,[`pointerout`,`pointerover`]),Vt(`onPointerLeave`,[`pointerout`,`pointerover`]),Bt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Bt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Bt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Bt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Bt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Bt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Bf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Vf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Bf));function Hf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){mi(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[Tt];n===void 0&&(n=t[Tt]=new Set);var r=e+`__bubble`;n.has(r)||(Kf(t,e,2,!1),n.add(r))}function Uf(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var Wf=`_reactListening`+Math.random().toString(36).slice(2);function Gf(e){if(!e[Wf]){e[Wf]=!0,Rt.forEach(function(t){t!==`selectionchange`&&(Vf.has(t)||Uf(t,!1,e),Uf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wf]||(t[Wf]=!0,Uf(`selectionchange`,!1,t))}}function Kf(e,t,n,r){switch(Th(t)){case 2:var i=yh;break;case 8:i=bh;break;default:i=xh}n=i.bind(null,t,n,e),i=void 0,!kn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function qf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}En(function(){var r=a,i=xn(n),s=[];a:{var c=si.get(e);if(c!==void 0){var l=zn,u=e;switch(e){case`keypress`:if(Pn(n)===0)break a;case`keydown`:case`keyup`:l=tr;break;case`focusin`:u=`focus`,l=qn;break;case`focusout`:u=`blur`,l=qn;break;case`beforeblur`:case`afterblur`:l=qn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Gn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ir;break;case ei:case ti:case ni:l=Jn;break;case oi:l=ar;break;case`scroll`:case`scrollend`:l=Vn;break;case`wheel`:l=or;break;case`copy`:case`cut`:case`paste`:l=Yn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=nr;break;case`submit`:l=rr;break;case`toggle`:case`beforetoggle`:l=sr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Dn(m,p),g!=null&&d.push(Jf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==bn&&(u=n.relatedTarget||n.fromElement)&&(Mt(u)||u[wt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Mt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Gn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=nr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Pt(c),h=l==null?u:Pt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Mt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Xf):null,c!==null&&Zf(s,u,c,d,!1),l!==null&&f!==null&&Zf(s,f,l,d,!0)))}a:{if(c=r?Pt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Tr;else if(U(c)){if(Er)_=Fr;else{_=Nr;var v=Mr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&hn(r.elementType)&&(_=Tr):_=Pr;if(_&&=_(e,r)){br(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Pt(r):window,e){case`focusin`:(U(v)||v.contentEditable===`true`)&&(Wr=v,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(s,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(s,n,i)}var y;if(lr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else gr?hr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(fr&&n.locale!==`ko`&&(gr||b!==`onCompositionStart`?b===`onCompositionEnd`&&gr&&(y=z()):(jn=i,Mn=`value`in jn?jn.value:jn.textContent,gr=!0)),v=Yf(r,b),0<v.length&&(b=new Xn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=H(n),y!==null&&(b.data=y)))),(y=dr?_r(e,n):vr(e,n))&&(b=Yf(r,`onBeforeInput`),0<b.length&&(v=new Xn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Lf(s,e,r,n,i)}Hf(s,t)})}function Jf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Dn(e,n),i!=null&&r.unshift(Jf(e,i,a)),i=Dn(e,t),i!=null&&r.push(Jf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Xf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Dn(n,a),l!=null&&o.unshift(Jf(n,l,c))):i||(l=Dn(n,a),l!=null&&o.push(Jf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function ep(e){return(typeof e==`string`?e:``+e).replace(Qf,`
`).replace($f,``)}function tp(e,t){return t=ep(t),ep(e)===t}function np(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&dn(e,``+r);else return;break;case`className`:Yt(e,`class`,r);break;case`tabIndex`:Yt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Yt(e,n,r);break;case`style`:mn(e,r,o);return;case`data`:if(t!==`object`){Yt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&np(e,t,`name`,a.name,a,null),np(e,t,`formEncType`,a.formEncType,a,null),np(e,t,`formMethod`,a.formMethod,a,null),np(e,t,`formTarget`,a.formTarget,a,null)):(np(e,t,`encType`,a.encType,a,null),np(e,t,`method`,a.method,a,null),np(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=yn);return;case`onScroll`:r!=null&&Z(`scroll`,e);return;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=vn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Jt(e,`popover`,r);break;case`xlinkActuate`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Jt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=gn.get(n)||n,Jt(e,n,r);else return}Kt=!0}function rp(e,t,n,r,a,o){switch(n){case`style`:mn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)dn(e,``+r);else return;break;case`onScroll`:r!=null&&Z(`scroll`,e);return;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=yn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Ct]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Kt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Jt(e,n,r)}return}Kt=!0}function ip(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,o,s,n,null)}}a&&np(e,t,`srcSet`,n.srcSet,n,null),r&&np(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:np(e,t,r,d,n,null)}}on(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:np(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&cn(e,!!r,n,!0):cn(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:np(e,t,s,c,n,null)}un(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:np(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<Bf.length;r++)Z(Bf[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,u,r,n,null)}return;default:if(hn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&rp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&np(e,t,c,r,n,null))}var ap={};function op(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||np(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Kt=!0),o=m;break;case`name`:m!==f&&(Kt=!0),a=m;break;case`checked`:m!==f&&(Kt=!0),u=m;break;case`defaultChecked`:m!==f&&(Kt=!0),d=m;break;case`value`:m!==f&&(Kt=!0),s=m;break;case`defaultValue`:m!==f&&(Kt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&np(e,t,p,m,r,f)}}an(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||np(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Kt=!0),p=o;break;case`defaultValue`:o!==l&&(Kt=!0),c=o;break;case`multiple`:o!==l&&(Kt=!0),s=o;default:o!==l&&np(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?cn(e,!!n,n?[]:``,!1):cn(e,!!n,t,!0)):cn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:np(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Kt=!0),p=a;break;case`defaultValue`:a!==o&&(Kt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&np(e,t,s,a,r,o)}ln(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:np(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Kt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:np(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&np(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:np(e,t,u,p,r,m)}return;default:if(hn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&rp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||rp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&np(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||np(e,t,f,p,r,m)}function sp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function cp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&sp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&sp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var lp=null,up=null;function dp(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function pp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function mp(e,t,n,r){return n=dp(n).createElement(e),n[St]=r,n[Ct]=t,ip(n,e,t),It(n),n}function hp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gp=null;function _p(){var e=window.event;return e&&e.type===`popstate`?e!==gp&&(gp=e,!0):(gp=null,!1)}var vp=typeof setTimeout==`function`?setTimeout:void 0,yp=typeof clearTimeout==`function`?clearTimeout:void 0,bp=typeof Promise==`function`?Promise:void 0,xp=typeof requestAnimationFrame==`function`?requestAnimationFrame:vp,Sp=typeof queueMicrotask==`function`?queueMicrotask:bp===void 0?vp:function(e){return bp.resolve(null).then(e).catch(Cp)};function Cp(e){setTimeout(function(){throw e})}function wp(e){return e===`head`}function Tp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Wh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)ym(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,ym(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[kt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&ym(e.ownerDocument.body)}n=i}while(n);Wh(t)}function Ep(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Dp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Op(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function kp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ap(e){return kp(e.getBoundingClientRect(),getComputedStyle(e),e)}function jp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return kp(t,n,e)}function Mp(e){return e.documentElement.clientHeight}function Np(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Pp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Mp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Qm(f),u>th){s.length=o;break}f=new Promise(Np.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Fp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Fp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Fp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Fp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ip(e){return{name:e,group:new Fp(`group`,e),imagePair:new Fp(`image-pair`,e),old:new Fp(`old`,e),new:new Fp(`new`,e)}}function Lp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Lp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Hp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Bp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,Rp,e,s,r)}this._eventListeners=a}};function Rp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Lp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Hp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Bp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,zp,e,n,i),r.splice(t,1),a!==null&&a()}};function zp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Bp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Vp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Hp(e,t,n,r){if(e.length===0)return-1;r=Vp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Vp(a.optionsOrUseCapture)===r)return i}return-1}Lp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Lp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Up,e,void 0,void 0)};function Up(e,t){return e.tag!==6&&(e=b(e),hm(e,t))}Lp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Wp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Up(t[n],e);n--);};function Wp(e,t){return t.push(e),!1}Lp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=dp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Gp,e,void 0,void 0))};function Gp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Lp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Kp,e,void 0,void 0)};function Kp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Lp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,qp,e,void 0,void 0);for(var n=t=0;n<Jp.length;n++){var r=Jp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Jp[t++]=r}Jp.length=t}};function qp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Jp=[],Yp=!1;function Xp(e,t,n){Jp.push({fragmentInstance:e,observer:t,instance:n}),Yp||(Yp=!0,gm(function(){Yp=!1;var e=Jp;Jp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Lp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Zp,e,void 0,void 0),e};function Zp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Lp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Lp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Wp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Qp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Qp(e,t,n,r,i){var a=Mt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(m(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(m(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function $p(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Lp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Wp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),$p(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),$p(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function em(e,t){return e=b(e),tm(e,t),!1}function tm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Jp.length;i++){var a=Jp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Jp[r++]=a)}Jp.length=r,n.observe(e)}),tm(e,t))}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Xp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function im(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:im(n),jt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function am(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[kt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=dm(e.nextSibling),e===null)break}return null}function om(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=dm(e.nextSibling),e===null))return null;return e}function sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=dm(e.nextSibling),e===null))return null;return e}function cm(e){return e.data===`$?`||e.data===`$~`}function lm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function um(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function dm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var fm=null;function pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return dm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function gm(e){xp(function(){xp(function(t){return e(t)})})}function _m(e,t,n){switch(t=dp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&np(e,t,r,null,ap,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===yn&&(e.onclick=null),jt(e)}function ym(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);jt(e)}var bm=new Map,xm=new Set;function Sm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Cm=R.d;R.d={f:wm,r:Tm,D:Om,C:km,L:Am,m:jm,X:Nm,S:Mm,M:Pm};function wm(){var e=Cm.f(),t=zd();return e||t}function Tm(e){var t=Nt(e);t!==null&&t.tag===5&&t.type===`form`?Zs(t):Cm.r(e)}var Em=typeof document>`u`?null:document;function Dm(e,t,n){var r=Em;if(r&&typeof t==`string`&&t){var i=rn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),xm.has(i)||(xm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ip(t,`link`,e),It(t),r.head.appendChild(t)))}}function Om(e){Cm.D(e),Dm(`dns-prefetch`,e,null)}function km(e,t){Cm.C(e,t),Dm(`preconnect`,e,t)}function Am(e,t,n){Cm.L(e,t,n);var r=Em;if(r&&e&&t){var i=`link[rel="preload"][as="`+rn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+rn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+rn(n.imageSizes)+`"]`)):i+=`[href="`+rn(e)+`"]`;var a=i;switch(t){case`style`:a=Im(e);break;case`script`:a=Bm(e)}if(!(bm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),bm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Lm(a))||t===`script`&&r.querySelector(Vm(a))))){var o=r.createElement(`link`);ip(o,`link`,e),t===`style`&&(o[At]=!0,o.onload=o.onerror=function(){Lt(o)}),It(o),r.head.appendChild(o)}}}function jm(e,t){Cm.m(e,t);var n=Em;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+rn(r)+`"][href="`+rn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Bm(e)}if(!bm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),bm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Vm(a)))return}r=n.createElement(`link`),ip(r,`link`,e),It(r),n.head.appendChild(r)}}}function Mm(e,t,n){Cm.S(e,t,n);var r=Em;if(r&&e){var i=Ft(r).hoistableStyles,a=Im(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Lm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=bm.get(a))&&Wm(e,n);var c=o=r.createElement(`link`);It(c),ip(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Um(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Nm(e,t){Cm.X(e,t);var n=Em;if(n&&e){var r=Ft(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),It(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t){Cm.M(e,t);var n=Em;if(n&&e){var r=Ft(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),It(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t,n,r){var a=(a=Se.current)?Sm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Im(n.href),t=Ft(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Im(n.href);var o=Ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Lm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=bm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bm.set(e,o)),zm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Bm(n),t=Ft(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Im(e){return`href="`+rn(e)+`"`}function Lm(e){return`link[rel="stylesheet"][`+e+`]`}function Rm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[At]){r.loading=1;return}}else t=e.createElement(`link`),t[At]=!0,t.onload=t.onerror=Lt.bind(null,t),ip(t,`link`,n),It(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Bm(e){return`[src="`+rn(e)+`"]`}function Vm(e){return`script[async]`+e}function Hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+rn(n.href)+`"]`);if(r)return t.instance=r,It(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),It(r),ip(r,`style`,a),Um(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Im(n.href);var o=e.querySelector(Lm(a));if(o)return t.state.loading|=4,t.instance=o,It(o),o;r=Rm(n),(a=bm.get(a))&&Wm(r,a),o=(e.ownerDocument||e).createElement(`link`),It(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ip(o,`link`,r),t.state.loading|=4,Um(o,n.precedence,e),t.instance=o;case`script`:return o=Bm(n.src),(a=e.querySelector(Vm(o)))?(t.instance=a,It(a),a):(r=n,(a=bm.get(o))&&(r=D({},n),Gm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),It(a),ip(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Um(r,n.precedence,e));return t.instance}function Um(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Km=null;function qm(e,t,n){if(Km===null){var r=new Map,i=Km=new Map;i.set(n,r)}else i=Km,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[kt]||a[St]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Ym(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Xm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Zm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Qm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function $m(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Qm(t),e.suspenseyImages.push(t)),e=ah.bind(e),t.decode().then(e,e))}function eh(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Im(r.href),a=t.querySelector(Lm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ih.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,It(a);return}a=t.ownerDocument||t,r=Rm(r),(i=bm.get(i))&&Wm(r,i),a=a.createElement(`link`),It(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ip(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ih.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var th=0;function nh(e,t){return e.stylesheets&&e.count===0&&sh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&th===0&&(th=62500*cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>th?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function rh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)sh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ih(){this.count--,rh(this)}function ah(){this.imgCount--,rh(this)}var oh=null;function sh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oh=new Map,t.forEach(ch,e),oh=null,ih.call(e))}function ch(e,t){if(!(t.state.loading&4)){var n=oh.get(e);if(n)var r=n.get(null);else{n=new Map,oh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ih.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var lh={$$typeof:F,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function uh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function dh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new uh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ti(3,null,null,t),e.current=a,a.stateNode=e,t=Ta(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},so(a),e}function fh(e){return e?(e=Ci,e):Ci}function ph(e,t,n,r,i,a){i=fh(i),r.context===null?r.context=i:r.pendingContext=i,r=lo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=uo(e,r,t),n!==null&&(Pd(n,e,t),fo(n,e,t))}function mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hh(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=bi(e,67108864);t!==null&&Pd(t,e,67108864),hh(e,67108864)}}function _h(e){if(e.tag===13||e.tag===31){var t=jd();t=_t(t);var n=bi(e,t);n!==null&&Pd(n,e,t),hh(e,t)}}var vh=!0;function yh(e,t,n,r){var i=L.T;L.T=null;var a=R.p;try{R.p=2,xh(e,t,n,r)}finally{R.p=a,L.T=i}}function bh(e,t,n,r){var i=L.T;L.T=null;var a=R.p;try{R.p=8,xh(e,t,n,r)}finally{R.p=a,L.T=i}}function xh(e,t,n,r){if(vh){var i=Sh(r);if(i===null)qf(e,t,r,Ch,n),Ph(e,r);else if(Ih(i,e,t,n,r))r.stopPropagation();else if(Ph(e,r),t&4&&-1<Nh.indexOf(e)){for(;i!==null;){var a=Nt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=at(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Qe(o);s.entanglements[1]|=c,o&=~c}Df(a),!(Zu&6)&&(gd=Be()+500,Of(0,!1))}}break;case 31:case 13:s=bi(a,2),s!==null&&Pd(s,a,2),zd(),hh(a,2)}if(a=Sh(r),a===null&&qf(e,t,r,Ch,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else qf(e,t,r,null,n)}}function Sh(e){return e=xn(e),wh(e)}var Ch=null;function wh(e){if(Ch=null,e=Mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ch=e,null}function Th(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ve()){case He:return 2;case Ue:return 8;case We:case Ge:return 32;case Ke:return 268435456;default:return 32}default:return 32}}var Eh=!1,Dh=null,Oh=null,kh=null,Ah=new Map,jh=new Map,Mh=[],Nh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ph(e,t){switch(e){case`focusin`:case`focusout`:Dh=null;break;case`dragenter`:case`dragleave`:Oh=null;break;case`mouseover`:case`mouseout`:kh=null;break;case`pointerover`:case`pointerout`:Ah.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:jh.delete(t.pointerId)}}function Fh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Nt(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ih(e,t,n,r,i){switch(t){case`focusin`:return Dh=Fh(Dh,e,t,n,r,i),!0;case`dragenter`:return Oh=Fh(Oh,e,t,n,r,i),!0;case`mouseover`:return kh=Fh(kh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Ah.set(a,Fh(Ah.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,jh.set(a,Fh(jh.get(a)||null,e,t,n,r,i)),!0}return!1}function Lh(e){var t=Mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,bt(e.priority,function(){_h(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,bt(e.priority,function(){_h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bn=r,n.target.dispatchEvent(r),bn=null}else return t=Nt(n),t!==null&&gh(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){Rh(e)&&n.delete(t)}function Bh(){Eh=!1,Dh!==null&&Rh(Dh)&&(Dh=null),Oh!==null&&Rh(Oh)&&(Oh=null),kh!==null&&Rh(kh)&&(kh=null),Ah.forEach(zh),jh.forEach(zh)}function Vh(e,n){e.blockedOn===n&&(e.blockedOn=null,Eh||(Eh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Bh)))}var Hh=null;function Uh(e){Hh!==e&&(Hh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Hh===e&&(Hh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(wh(r||n)===null)continue;break}var a=Nt(n);a!==null&&(e.splice(t,3),t-=3,Ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wh(e){function t(t){return Vh(t,e)}Dh!==null&&Vh(Dh,e),Oh!==null&&Vh(Oh,e),kh!==null&&Vh(kh,e),Ah.forEach(t),jh.forEach(t);for(var n=0;n<Mh.length;n++){var r=Mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mh.length&&(n=Mh[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Mh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ct]||null;if(typeof a==`function`)o||Uh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ct]||null)s=o.formAction;else if(wh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Uh(n)}}}function Gh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Kh(e){this._internalRoot=e}qh.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ph(n,jd(),e,t,null,null)},qh.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ph(e.current,2,null,e,null,null),zd(),t[wt]=null}};function qh(e){this._internalRoot=e}qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=yt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mh.length&&t!==0&&t<Mh[n].priority;n++);Mh.splice(n,0,e),n===0&&Lh(e)}};var Jh=n.version;if(Jh!==`19.3.0`)throw Error(i(527,Jh,`19.3.0`));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Yh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:L,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xh.isDisabled&&Xh.supportsFiber)try{Ye=Xh.inject(Yh),Xe=Xh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=vc,s=yc,c=bc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=dh(e,1,!1,null,null,n,r,null,o,s,c,Gh),e[wt]=t.current,Gf(e),new Kh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d()),y=_(),b=`import type { ComponentProps, ReactNode } from 'react';
import { ArrowUpRight, Waves, Leaf, Wrench, Wind, Cpu, Anchor, Megaphone, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { BrandLockup } from './identity';
export { BrandLockup, EditorialHero } from './identity';
export function ActionButton({loading=false,children,disabled,...props}: ComponentProps<typeof Button>&{loading?:boolean}) {
  return <Button {...props} disabled={disabled||loading} aria-busy={loading||undefined}>{loading&&<Loader2 aria-hidden="true" className="animate-spin"/>}{children}</Button>;
}
export function PageHeader({eyebrow,title,description,actions,level=1}: {eyebrow?:string;title:string;description?:string;actions?:ReactNode;level?:1|2|3}) {
  const Heading=level===1?'h1':level===2?'h2':'h3';
  return <header className="flex flex-wrap items-end justify-between gap-6"><div>{eyebrow&&<p className="sft-eyebrow mb-3 text-primary">{eyebrow}</p>}<Heading className="sft-display text-4xl md:text-5xl">{title}</Heading>{description&&<p className="mt-3 max-w-prose text-muted-foreground">{description}</p>}</div>{actions}</header>;
}
export function Hero({image,alt,title,description,eyebrow,children,level=1}: {image:string;alt:string;title:string;description:string;eyebrow?:string;children?:ReactNode;level?:1|2}) {
  const Heading=level===1?'h1':'h2';
  return <section className="sft-hero"><img src={image} alt={alt} fetchPriority="high"/><div>{eyebrow&&<p className="sft-eyebrow mb-5">{eyebrow}</p>}<Heading className="sft-display">{title}</Heading><p>{description}</p><div className="mt-7 flex flex-wrap gap-3">{children}</div></div></section>;
}
export const departments=[
 {id:'scafo',name:'Scafo e terrazze',description:'Progettazione dello scafo e delle strutture.',icon:Waves},
 {id:'management',name:'Management e Comunicazione',description:'Relazioni, organizzazione e racconto del progetto.',icon:Megaphone},
 {id:'materiali',name:'Materiali e Sostenibilità',description:'Scelta dei materiali e valutazione del loro impatto.',icon:Leaf},
 {id:'manufacturing',name:'Manufacturing e Cantiere',description:'Costruzione, lavorazioni e assemblaggio.',icon:Wrench},
 {id:'foil',name:'Foil e Controllo di Volo',description:'Foil, assetto e regolazione del volo.',icon:Wind},
 {id:'elettronica',name:'Elettronica e Software',description:'Elettronica di bordo e strumenti software.',icon:Cpu},
 {id:'shore',name:'Shore Team e Logistica',description:'Preparazione, logistica e supporto a terra.',icon:Anchor}
] as const;
export function DepartmentCard({department,href}: {department:typeof departments[number];href?:string}) {
 const Icon=department.icon;
 return <Card className="h-full"><CardHeader><Icon className="mb-6 size-7 text-primary" aria-hidden="true"/><CardTitle className="font-display text-2xl">{department.name}</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">{department.description}</p>{href&&<Button asChild variant="link" className="mt-4 px-0"><a href={href}>Scopri il reparto<ArrowUpRight aria-hidden="true"/></a></Button>}</CardContent></Card>;
}
const tones={neutral:'bg-muted text-muted-foreground',success:'bg-success-soft text-success',warning:'bg-warning-soft text-warning',info:'bg-info-soft text-info',danger:'bg-destructive/10 text-destructive'} as const;
export function StatusBadge({tone='neutral',children}: {tone?:keyof typeof tones;children:ReactNode}) {return <Badge className={cn('border-transparent',tones[tone])}>{children}</Badge>;}
export function Metric({label,value,unit,description}: {label:string;value:string|number;unit?:string;description?:string}) {return <Card><CardContent className="pt-6"><p className="text-sm text-muted-foreground">{label}</p><p className="my-3 font-mono text-3xl font-medium tabular-nums">{value}{unit&&<span className="ml-2 text-base text-muted-foreground">{unit}</span>}</p>{description&&<p className="text-xs text-muted-foreground">{description}</p>}</CardContent></Card>;}
export function EmptyState({title,description,action}: {title:string;description:string;action?:ReactNode}) {return <div className="rounded-xl border border-dashed p-10 text-center"><Waves className="mx-auto mb-4 size-7 text-primary" aria-hidden="true"/><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>{action&&<div className="mt-5">{action}</div>}</div>;}
export function SponsorGrid({sponsors}: {sponsors:readonly {name:string;image:string;href?:string}[]}) {return <ul className="sft-sponsor-grid">{sponsors.map(s=><li key={s.name}>{s.href?<a href={s.href} aria-label={s.name}><img src={s.image} alt={s.name} loading="lazy"/></a>:<img src={s.image} alt={s.name} loading="lazy"/>}</li>)}</ul>;}
export function ContentCard({kind,title,description,image,alt,href,meta}: {kind:'Evento'|'Articolo';title:string;description:string;image:string;alt:string;href:string;meta?:string}) {return <Card className="overflow-hidden p-0"><img src={image} alt={alt} className="aspect-[16/10] w-full object-cover" loading="lazy"/><CardHeader><p className="sft-eyebrow text-primary">{kind}{meta&&\` · \${meta}\`}</p><CardTitle className="font-display text-2xl"><a className="hover:underline underline-offset-4" href={href}>{title}</a></CardTitle></CardHeader><CardContent className="pb-6 text-sm text-muted-foreground">{description}</CardContent></Card>;}
export function ActivityItem({title,time,description}: {title:string;time:{label:string;iso:string};description?:string}) {return <li className="flex gap-4 border-b py-4"><span className="mt-2 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true"/><div><p className="font-medium">{title}</p>{description&&<p className="mt-1 text-sm text-muted-foreground">{description}</p>}<time dateTime={time.iso} className="mt-2 block text-xs text-muted-foreground">{time.label}</time></div></li>;}
export function SocialTemplate({kind='update',title,description,image,assetBase='./brand',footer='Sapienza Foiling Team',format='post'}:{kind?:'update'|'recruiting'|'technical'|'event'|'sponsor';title:string;description:string;image:string;assetBase?:string;footer?:string;format?:'post'|'story'|'slide'}) {return <article className={cn('sft-template',kind==='technical'&&'technical',format)}><img src={image} alt=""/><BrandLockup inverse assetBase={assetBase}/><div><p className="sft-eyebrow mb-3">{{update:'Dal progetto all’acqua',recruiting:'Dentro il team',technical:'Come funziona',event:'Eventi e regate',sponsor:'Insieme al team'}[kind]}</p><h3>{title}</h3><p>{description}</p></div><footer><span>{footer}</span><span>SFT</span></footer></article>;}
`,x=`"use client";
import { useId, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, Check, ChevronsUpDown, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover,PopoverContent,PopoverTrigger } from '@/components/ui/popover';
import { Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList } from '@/components/ui/command';
import { Calendar } from '@/components/ui/calendar';
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from '@/components/ui/table';
import { StatusBadge } from './brand';

export function ComboBox({label,value,onChange,options}: {label:string;value:string;onChange:(value:string)=>void;options:readonly {value:string;label:string}[]}) {
 const [open,setOpen]=useState(false);const id=useId();
 return <div className="grid gap-2"><Label id={id}>{label}</Label><Popover open={open} onOpenChange={setOpen}><PopoverTrigger asChild><Button variant="outline" role="combobox" aria-labelledby={id} aria-expanded={open} className="justify-between">{options.find(o=>o.value===value)?.label||'Seleziona'}<ChevronsUpDown aria-hidden="true"/></Button></PopoverTrigger><PopoverContent className="p-0"><Command><CommandInput placeholder="Cerca reparto…" aria-label="Cerca reparto"/><CommandList><CommandEmpty>Nessun reparto trovato.</CommandEmpty><CommandGroup>{options.map(o=><CommandItem key={o.value} value={o.label} onSelect={()=>{onChange(o.value);setOpen(false)}}><Check aria-hidden="true" className={value===o.value?'opacity-100':'opacity-0'}/>{o.label}</CommandItem>)}</CommandGroup></CommandList></Command></PopoverContent></Popover></div>;
}
export function DatePicker({label,value,onChange}: {label:string;value?:Date;onChange:(value:Date|undefined)=>void}) {
 const [open,setOpen]=useState(false); const id=useId();
 return <div className="grid gap-2"><Label id={id}>{label}</Label><Popover open={open} onOpenChange={setOpen}><PopoverTrigger asChild><Button aria-labelledby={id} variant="outline" className="justify-start"><CalendarIcon aria-hidden="true"/>{value?format(value,'d MMMM yyyy',{locale:it}):'Scegli una data'}</Button></PopoverTrigger><PopoverContent className="w-auto p-0"><Calendar locale={it} mode="single" selected={value} onSelect={d=>{onChange(d);setOpen(false)}}/></PopoverContent></Popover></div>;
}
export type ActivityRow={id:string;title:string;department:string;status:'Da iniziare'|'In corso'|'Completato'};
export function DataTable({rows,pageSize=5}: {rows:readonly ActivityRow[];pageSize?:number}) {
 const [query,setQuery]=useState('');const [ascending,setAscending]=useState(true);const [page,setPage]=useState(0);const id=useId();const size=Math.max(1,pageSize);
 const filtered=useMemo(()=>rows.filter(r=>\`\${r.title} \${r.department} \${r.status}\`.toLocaleLowerCase('it').includes(query.toLocaleLowerCase('it'))).sort((a,b)=>ascending?a.title.localeCompare(b.title,'it'):b.title.localeCompare(a.title,'it')),[rows,query,ascending]);
 const pageCount=Math.max(1,Math.ceil(filtered.length/size));const current=Math.min(page,pageCount-1);const visible=filtered.slice(current*size,(current+1)*size);
 return <div><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div className="grid gap-2"><Label htmlFor={id}>Cerca attività</Label><Input id={id} type="search" value={query} onChange={e=>{setQuery(e.target.value);setPage(0)}} placeholder="Titolo, reparto o stato" className="max-w-sm"/></div><span className="text-sm text-muted-foreground" role="status">{filtered.length} attività</span></div><div className="rounded-lg border"><Table><caption className="sr-only">Attività del team con reparto e stato</caption><TableHeader><TableRow><TableHead aria-sort={ascending?'ascending':'descending'}><Button variant="ghost" onClick={()=>{setAscending(!ascending);setPage(0)}}>Attività{ascending?<ArrowUp aria-hidden="true"/>:<ArrowDown aria-hidden="true"/>}</Button></TableHead><TableHead>Reparto</TableHead><TableHead>Stato</TableHead></TableRow></TableHeader><TableBody>{visible.length?visible.map(row=><TableRow key={row.id}><TableCell className="font-medium">{row.title}</TableCell><TableCell>{row.department}</TableCell><TableCell><StatusBadge tone={row.status==='Completato'?'success':row.status==='In corso'?'info':'neutral'}>{row.status}</StatusBadge></TableCell></TableRow>):<TableRow><TableCell colSpan={3} className="h-28 text-center">Nessuna attività corrisponde alla ricerca.</TableCell></TableRow>}</TableBody></Table></div><nav aria-label="Pagine delle attività" className="mt-4 flex flex-wrap items-center justify-between gap-3"><span className="text-sm text-muted-foreground">Pagina {current+1} di {pageCount}</span><div className="flex gap-2"><Button variant="outline" disabled={current===0} onClick={()=>setPage(current-1)}>Precedente</Button><Button variant="outline" disabled={current>=pageCount-1} onClick={()=>setPage(current+1)}>Successiva</Button></div></nav></div>;
}
export function LineChart({title,points,unit}: {title:string;points:readonly {label:string;value:number}[];unit:string}) {
 const id=useId();const max=Math.max(1,...points.map(p=>p.value));const min=Math.min(0,...points.map(p=>p.value));const range=max-min||1;const x=(i:number)=>48+i*500/Math.max(1,points.length-1);const y=(value:number)=>150-(value-min)/range*120;
 return <figure><figcaption id={id} className="mb-4 text-sm font-medium">{title} <span className="text-muted-foreground">({unit})</span></figcaption>{points.length?<svg viewBox="0 0 600 205" className="sft-chart w-full" role="img" aria-labelledby={id}><desc>{points.map(p=>\`\${p.label}: \${p.value} \${unit}\`).join('; ')}</desc>{[0,.5,1].map(f=><g key={f}><line x1="48" x2="560" y1={150-f*120} y2={150-f*120}/><text x="4" y={154-f*120}>{Math.round(min+range*f)}</text></g>)}<polyline points={points.map((p,i)=>\`\${x(i)},\${y(p.value)}\`).join(' ')}/>{points.map((p,i)=><g key={\`\${p.label}-\${i}\`}><circle cx={x(i)} cy={y(p.value)} r="4"/><text textAnchor="middle" x={x(i)} y="181">{p.label}</text></g>)}</svg>:<p className="text-sm text-muted-foreground">Nessun dato disponibile.</p>}</figure>;
}
`,S=`import type { ReactNode } from 'react';

export function BrandLockup({assetBase='/brand',inverse=false,label='Foiling Team',className=''}:{assetBase?:string;inverse?:boolean;label?:string;className?:string}) {
 return <span className={\`sft-brand \${className}\`}><img src={\`\${assetBase}/logos/\${inverse?'sft-white':'sft-burgundy'}.svg\`} alt="" width={36} height={48}/><span><strong>SAPIENZA</strong><small>{label}</small></span></span>;
}

export function EditorialHero({eyebrow,title,description,image,actions,caption}:{eyebrow?:string;title:ReactNode;description:string;image:ReactNode;actions:ReactNode;caption?:ReactNode}) {
 return <section className="sft-editorial-hero"><div className="sft-editorial-hero-copy">{eyebrow&&<p className="sft-eyebrow">{eyebrow}</p>}<h1 className="sft-display">{title}</h1><p className="sft-editorial-description">{description}</p><div className="sft-editorial-actions">{actions}</div></div><figure className="sft-editorial-hero-image">{image}{caption&&<figcaption>{caption}</figcaption>}</figure></section>;
}
`,C=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
`,w=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"

import { Button } from "@/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
`,T=`"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
`,E=`"use client"

import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
`,D=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar as AvatarPrimitive } from "radix-ui"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
`,O=`"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
`,k=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { Slot } from "radix-ui"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
`,A=`"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        brand: "rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-11",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
`,j=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw\`rtl:**:[.rdp-button\\_next>svg]:rotate-180\`,
        String.raw\`rtl:**:[.rdp-button\\_previous>svg]:rotate-180\`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
`,M=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl bg-card py-6 text-card-foreground shadow-[var(--sft-shadow-surface)]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
`,N=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
`,P=`"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
`,F=`"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
`,I=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { Button } from "@/components/ui/button"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Chiudi</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Chiudi</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
`,ee=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
`,te=`"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
`,ne=`"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-sm font-normal text-destructive", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
`,re=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
`,ie=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label as LabelPrimitive } from "radix-ui"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
`,ae=`"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "top-0 left-0 w-full p-2 pr-2.5 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
`,oe=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { buttonVariants, type Button } from "@/components/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Vai alla pagina precedente"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Precedente</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Vai alla pagina successiva"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Successiva</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">Altre pagine</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
`,se=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Popover as PopoverPrimitive } from "radix-ui"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("font-medium", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
}
`,ce=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Progress as ProgressPrimitive } from "radix-ui"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
`,le=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
`,ue=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-border"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
`,de=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
`,fe=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator as SeparatorPrimitive } from "radix-ui"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
`,pe=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"
import { Dialog as SheetPrimitive } from "radix-ui"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary">
            <XIcon className="size-4" />
            <span className="sr-only">Chiudi</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
`,L=`"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { PanelLeftIcon } from "lucide-react"
import { Slot } from "radix-ui"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = \`\${SIDEBAR_COOKIE_NAME}=\${openState}; path=/; max-age=\${SIDEBAR_COOKIE_MAX_AGE}\`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Apri o chiudi navigazione</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("h-8 w-full bg-background shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot.Root : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return \`\${Math.floor(Math.random() * 40) + 50}%\`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
`,R=`"use client"

import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-accent", className)}
      {...props}
    />
  )
}

export { Skeleton }
`,me=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Slider as SliderPrimitive } from "radix-ui"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
`,he=`"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
`,ge=`"use client"

import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
`,_e=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Switch as SwitchPrimitive } from "radix-ui"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
`,ve=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
`,ye=`"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Tabs as TabsPrimitive } from "radix-ui"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
`,be=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
`,xe=`"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"

import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
`,Se=`"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Toggle as TogglePrimitive } from "radix-ui"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
`,Ce=`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tooltip as TooltipPrimitive } from "radix-ui"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
`,we=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Te=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ee={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},De=(0,v.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,v.createElement)(`svg`,{ref:c,...Ee,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Te(`lucide`,i),...s},[...o.map(([e,t])=>(0,v.createElement)(e,t)),...Array.isArray(a)?a:[a]])),Oe=(e,t)=>{let n=(0,v.forwardRef)(({className:n,...r},i)=>(0,v.createElement)(De,{ref:i,iconNode:t,className:Te(`lucide-${we(e)}`,n),...r}));return n.displayName=`${e}`,n},ke=Oe(`Anchor`,[[`path`,{d:`M12 22V8`,key:`qkxhtm`}],[`path`,{d:`M5 12H2a10 10 0 0 0 20 0h-3`,key:`1hv3nh`}],[`circle`,{cx:`12`,cy:`5`,r:`3`,key:`rqqgnr`}]]),Ae=Oe(`ArrowDown`,[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]),je=Oe(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Me=Oe(`ArrowUpRight`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),Ne=Oe(`ArrowUp`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),Pe=Oe(`Calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),Fe=Oe(`Check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Ie=Oe(`ChevronDown`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Le=Oe(`ChevronLeft`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),Re=Oe(`ChevronRight`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ze=Oe(`ChevronUp`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),Be=Oe(`ChevronsUpDown`,[[`path`,{d:`m7 15 5 5 5-5`,key:`1hf1tw`}],[`path`,{d:`m7 9 5-5 5 5`,key:`sgt6xg`}]]),Ve=Oe(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),He=Oe(`Circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ue=Oe(`Cpu`,[[`rect`,{width:`16`,height:`16`,x:`4`,y:`4`,rx:`2`,key:`14l7u7`}],[`rect`,{width:`6`,height:`6`,x:`9`,y:`9`,rx:`1`,key:`5aljv4`}],[`path`,{d:`M15 2v2`,key:`13l42r`}],[`path`,{d:`M15 20v2`,key:`15mkzm`}],[`path`,{d:`M2 15h2`,key:`1gxd5l`}],[`path`,{d:`M2 9h2`,key:`1bbxkp`}],[`path`,{d:`M20 15h2`,key:`19e6y8`}],[`path`,{d:`M20 9h2`,key:`19tzq7`}],[`path`,{d:`M9 2v2`,key:`165o2o`}],[`path`,{d:`M9 20v2`,key:`i2bqo8`}]]),We=Oe(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),Ge=Oe(`Ellipsis`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]]),Ke=Oe(`Info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),qe=Oe(`Leaf`,[[`path`,{d:`M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,key:`nnexq3`}],[`path`,{d:`M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`,key:`mt58a7`}]]),Je=Oe(`LoaderCircle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Ye=Oe(`Megaphone`,[[`path`,{d:`m3 11 18-5v12L3 14v-3z`,key:`n962bs`}],[`path`,{d:`M11.6 16.8a3 3 0 1 1-5.8-1.6`,key:`1yl0tm`}]]),Xe=Oe(`Moon`,[[`path`,{d:`M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`,key:`a7tn18`}]]),Ze=Oe(`OctagonX`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),Qe=Oe(`Save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),$e=Oe(`Search`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`path`,{d:`m21 21-4.3-4.3`,key:`1qie3q`}]]),et=Oe(`Sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),tt=Oe(`TriangleAlert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),nt=Oe(`Waves`,[[`path`,{d:`M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`knzxuh`}],[`path`,{d:`M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`2jd2cc`}],[`path`,{d:`M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`rd2r6e`}]]),rt=Oe(`Wind`,[[`path`,{d:`M12.8 19.6A2 2 0 1 0 14 16H2`,key:`148xed`}],[`path`,{d:`M17.5 8a2.5 2.5 0 1 1 2 4H2`,key:`1u4tom`}],[`path`,{d:`M9.8 4.4A2 2 0 1 1 11 8H2`,key:`75valh`}]]),it=Oe(`Wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`,key:`cbrjhi`}]]),at=Oe(`X`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ot=l(h(),1);function st(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}var ct=e=>{switch(e){case`success`:return dt;case`info`:return pt;case`warning`:return ft;case`error`:return mt;default:return null}},lt=Array(12).fill(0),ut=({visible:e,className:t})=>v.createElement(`div`,{className:[`sonner-loading-wrapper`,t].filter(Boolean).join(` `),"data-visible":e},v.createElement(`div`,{className:`sonner-spinner`},lt.map((e,t)=>v.createElement(`div`,{className:`sonner-loading-bar`,key:`spinner-bar-${t}`})))),dt=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,clipRule:`evenodd`})),ft=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,clipRule:`evenodd`})),pt=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,clipRule:`evenodd`})),mt=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,clipRule:`evenodd`})),ht=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`},v.createElement(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),v.createElement(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})),gt=()=>{let[e,t]=v.useState(document.hidden);return v.useEffect(()=>{let e=()=>{t(document.hidden)};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),e},_t=1,vt=100,yt=e=>typeof e?.id==`number`||e?.id?.length>0?e.id:_t++,bt=new class{constructor(){this.subscribe=e=>(this.subscribers.push(e),this.getActiveToasts().forEach(t=>e(t)),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e],this.trimHistory()},this.trimHistory=()=>{let e=this.toasts.length-vt;e<=0||(this.toasts=this.toasts.filter(t=>e>0&&this.dismissedToasts.has(t.id)?(this.dismissedToasts.delete(t.id),e--,!1):!0))},this.create=e=>{let{message:t,...n}=e,r=yt(e),i=this.pendingDismissals.get(r);i!==void 0&&(cancelAnimationFrame(i),this.pendingDismissals.delete(r),this.dismissedToasts.delete(r));let a=this.dismissedToasts.has(r),o=e.dismissible===void 0||e.dismissible;return a&&(this.dismissedToasts.delete(r),this.toasts=this.toasts.filter(e=>e.id!==r)),!a&&this.toasts.find(e=>e.id===r)?this.toasts=this.toasts.map(n=>n.id===r?(this.publish({...n,...e,id:r,title:t}),{...n,...e,id:r,dismissible:o,title:t}):n):this.addToast({title:t,...n,dismissible:o,id:r}),r},this.dismiss=e=>{if(e==null)return this.getActiveToasts().forEach(e=>{this.dismissedToasts.add(e.id),this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),e;this.dismissedToasts.add(e);let t=this.pendingDismissals.get(e);return t!==void 0&&cancelAnimationFrame(t),this.pendingDismissals.set(e,requestAnimationFrame(()=>{this.pendingDismissals.delete(e),this.subscribers.forEach(t=>t({id:e,dismiss:!0}))})),e},this.message=(e,t)=>this.create({...t,message:e,type:void 0}),this.error=(e,t)=>this.create({...t,message:e,type:`error`}),this.success=(e,t)=>this.create({...t,type:`success`,message:e}),this.info=(e,t)=>this.create({...t,type:`info`,message:e}),this.warning=(e,t)=>this.create({...t,type:`warning`,message:e}),this.loading=(e,t)=>this.create({...t,type:`loading`,message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:`loading`,message:t.loading,description:typeof t.description==`function`?void 0:t.description}));let r=Promise.resolve(e instanceof Function?e():e),i=n!==void 0,a,o=r.then(async e=>{if(a=[`resolve`,e],v.isValidElement(e))i=!1,this.create({id:n,type:`default`,message:e});else if(St(e)&&!e.ok){i=!1;let r=typeof t.error==`function`?await t.error(`HTTP error! status: ${e.status}`):t.error,a=typeof t.description==`function`?await t.description(`HTTP error! status: ${e.status}`):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(e instanceof Error){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(t.success!==void 0){i=!1;let r=typeof t.success==`function`?await t.success(e):t.success,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`success`,description:a,...o})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}}).finally(()=>{i&&(this.dismiss(n),n=void 0),t.finally==null||t.finally.call(t)}),s=()=>new Promise((e,t)=>o.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t));return typeof n!=`string`&&typeof n!=`number`?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=yt(t);return this.create({...t,jsx:e(n),id:n,type:void 0}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set,this.pendingDismissals=new Map}},xt=(e,t)=>bt.message(e,t),St=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`,Ct=Object.assign(xt,{success:bt.success,info:bt.info,warning:bt.warning,error:bt.error,custom:bt.custom,message:bt.message,promise:bt.promise,dismiss:bt.dismiss,loading:bt.loading},{getHistory:()=>bt.toasts,getToasts:()=>bt.getActiveToasts()});st(`[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`);function wt(e){return e.label!==void 0}var Tt=3,Et=`24px`,Dt=`16px`,Ot=4e3,kt=356,At=14,jt=45,Mt=200;function Nt(...e){return e.filter(Boolean).join(` `)}function Pt(e){let[t,n]=e.split(`-`),r=[];return t&&r.push(t),n&&r.push(n),r}var Ft=e=>{let{invert:t,toast:n,unstyled:r,interacting:i,setHeights:a,visibleToasts:o,heights:s,index:c,toasts:l,expanded:u,removeToast:d,defaultRichColors:f,closeButton:p,style:m,cancelButtonStyle:h,actionButtonStyle:g,className:_=``,descriptionClassName:y=``,duration:b,position:x,gap:S,expandByDefault:C,classNames:w,icons:T,closeButtonAriaLabel:E=`Close toast`}=e,[D,O]=v.useState(null),[k,A]=v.useState(null),[j,M]=v.useState(!1),[N,P]=v.useState(!1),[F,I]=v.useState(!1),[ee,te]=v.useState(!1),[ne,re]=v.useState(!1),[ie,ae]=v.useState(0),[oe,se]=v.useState(0),ce=v.useRef(n.duration||b||Ot),le=v.useRef(null),ue=v.useRef(null),de=c===0,fe=c+1<=o,pe=n.type,L=pe??`default`,R=n.dismissible!==!1,me=n.className||``,he=n.descriptionClassName||``,ge=v.useMemo(()=>s.findIndex(e=>e.toastId===n.id)||0,[s,n.id]),_e=v.useMemo(()=>n.closeButton??p,[n.closeButton,p]),ve=v.useMemo(()=>n.duration||b||Ot,[n.duration,b]),ye=v.useRef(0),be=v.useRef(0),xe=v.useRef(0),Se=v.useRef(null),[Ce,we]=x.split(`-`),Te=v.useMemo(()=>s.reduce((e,t,n)=>n>=ge?e:e+t.height,0),[s,ge]),Ee=gt(),De=v.useMemo(()=>e.swipeDirections??Pt(x),[e.swipeDirections,x]),Oe=n.invert||t,ke=pe===`loading`;be.current=v.useMemo(()=>ge*S+Te,[ge,Te]),v.useEffect(()=>{ce.current=ve},[ve]),v.useEffect(()=>{M(!0)},[]),v.useEffect(()=>{let e=ue.current;if(e){let t=e.getBoundingClientRect().height;return se(t),a(e=>[{toastId:n.id,height:t,position:n.position},...e]),()=>a(e=>e.filter(e=>e.toastId!==n.id))}},[a,n.id]),v.useLayoutEffect(()=>{if(!j)return;let e=ue.current,t=e.style.height;e.style.height=`auto`;let r=e.getBoundingClientRect().height;e.style.height=t,se(r),a(e=>e.find(e=>e.toastId===n.id)?e.map(e=>e.toastId===n.id?{...e,height:r}:e):[{toastId:n.id,height:r,position:n.position},...e])},[j,n.title,n.description,a,n.id,n.jsx,n.action,n.cancel]);let Ae=v.useCallback(()=>{P(!0),ae(be.current),a(e=>e.filter(e=>e.toastId!==n.id)),setTimeout(()=>{d(n)},Mt)},[n,d,a,be]);v.useEffect(()=>{if(n.promise&&pe===`loading`||n.duration===1/0||n.type===`loading`)return;let e;return u||i||Ee?(()=>{if(xe.current<ye.current){let e=new Date().getTime()-ye.current;ce.current-=e}xe.current=new Date().getTime()})():ce.current!==1/0&&(ye.current=new Date().getTime(),e=setTimeout(()=>{n.onAutoClose==null||n.onAutoClose.call(n,n),Ae()},ce.current)),()=>clearTimeout(e)},[u,i,n,pe,Ee,Ae]),v.useEffect(()=>{n.delete&&(Ae(),n.onDismiss==null||n.onDismiss.call(n,n))},[Ae,n.delete]);function je(){return T?.loading?v.createElement(`div`,{className:Nt(w?.loader,n?.classNames?.loader,`sonner-loader`),"data-visible":pe===`loading`},T.loading):v.createElement(ut,{className:Nt(w?.loader,n?.classNames?.loader),visible:pe===`loading`})}let Me=n.icon||T?.[pe]||ct(pe);return v.createElement(`li`,{tabIndex:0,ref:ue,className:Nt(_,me,w?.toast,n?.classNames?.toast,w?.[L],n?.classNames?.[L]),"data-sonner-toast":``,"data-rich-colors":n.richColors??f,"data-styled":!(n.jsx||n.unstyled||r),"data-mounted":j,"data-promise":!!n.promise,"data-swiped":ne,"data-removed":N,"data-visible":fe,"data-y-position":Ce,"data-x-position":we,"data-index":c,"data-front":de,"data-swiping":F,"data-dismissible":R,"data-type":pe,"data-invert":Oe,"data-swipe-out":ee,"data-swipe-direction":k,"data-expanded":!!(u||C&&j),"data-testid":n.testId,style:{"--index":c,"--toasts-before":c,"--z-index":l.length-c,"--offset":`${N?ie:be.current}px`,"--initial-height":C?`auto`:`${oe}px`,...m,...n.style},onDragEnd:()=>{I(!1),O(null),Se.current=null},onPointerDown:e=>{e.button!==2&&!ke&&R&&(le.current=new Date,ae(be.current),e.target.setPointerCapture(e.pointerId),e.target.tagName!==`BUTTON`&&(I(!0),Se.current={x:e.clientX,y:e.clientY}))},onPointerUp:()=>{if(ee||!R)return;Se.current=null;let e=Number(ue.current?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`,``)||0),t=Number(ue.current?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`,``)||0),r=new Date().getTime()-le.current?.getTime(),i=D===`x`?e:t,a=Math.abs(i)/r;if((D===`x`?De.includes(e>0?`right`:`left`):De.includes(t>0?`bottom`:`top`))&&(Math.abs(i)>=jt||a>.11))ae(be.current),n.onDismiss==null||n.onDismiss.call(n,n),A(D===`x`?e>0?`right`:`left`:t>0?`down`:`up`),Ae(),te(!0);else{var o,s;(o=ue.current)==null||o.style.setProperty(`--swipe-amount-x`,`0px`),(s=ue.current)==null||s.style.setProperty(`--swipe-amount-y`,`0px`),re(!1),I(!1),O(null)}},onPointerMove:e=>{var t,n;if(!Se.current||!R||window.getSelection()?.toString().length>0)return;let r=e.clientY-Se.current.y,i=e.clientX-Se.current.x;!D&&(Math.abs(i)>1||Math.abs(r)>1)&&O(Math.abs(i)>Math.abs(r)?`x`:`y`);let a={x:0,y:0},o=e=>1/(1.5+Math.abs(e)/20);if(D===`y`){if(De.includes(`top`)||De.includes(`bottom`)){if(De.includes(`top`)&&r<0||De.includes(`bottom`)&&r>0)a.y=r;else{let e=r*o(r);a.y=Math.abs(e)<Math.abs(r)?e:r}}}else if(D===`x`&&(De.includes(`left`)||De.includes(`right`))){if(De.includes(`left`)&&i<0||De.includes(`right`)&&i>0)a.x=i;else{let e=i*o(i);a.x=Math.abs(e)<Math.abs(i)?e:i}}(Math.abs(a.x)>0||Math.abs(a.y)>0)&&re(!0),(t=ue.current)==null||t.style.setProperty(`--swipe-amount-x`,`${a.x}px`),(n=ue.current)==null||n.style.setProperty(`--swipe-amount-y`,`${a.y}px`)}},_e&&!n.jsx&&pe!==`loading`?v.createElement(`button`,{"aria-label":E,"data-disabled":ke,"data-close-button":!0,onClick:ke||!R?()=>{}:()=>{Ae(),n.onDismiss==null||n.onDismiss.call(n,n)},className:Nt(w?.closeButton,n?.classNames?.closeButton)},T?.close??ht):null,(pe||n.icon||n.promise)&&n.icon!==null&&(T?.[pe]!==null||n.icon)?v.createElement(`div`,{"data-icon":``,className:Nt(w?.icon,n?.classNames?.icon)},pe===`loading`?n.icon||je():n.promise?je():null,pe===`loading`?null:Me):null,v.createElement(`div`,{"data-content":``,className:Nt(w?.content,n?.classNames?.content)},v.createElement(`div`,{"data-title":``,className:Nt(w?.title,n?.classNames?.title)},n.jsx?n.jsx:typeof n.title==`function`?n.title():n.title),n.description?v.createElement(`div`,{"data-description":``,className:Nt(y,he,w?.description,n?.classNames?.description)},typeof n.description==`function`?n.description():n.description):null),v.isValidElement(n.cancel)?n.cancel:n.cancel&&wt(n.cancel)?v.createElement(`button`,{"data-button":!0,"data-cancel":!0,style:n.cancelButtonStyle||h,onClick:e=>{wt(n.cancel)&&R&&(n.cancel.onClick==null||n.cancel.onClick.call(n.cancel,e),Ae())},className:Nt(w?.cancelButton,n?.classNames?.cancelButton)},n.cancel.label):null,v.isValidElement(n.action)?n.action:n.action&&wt(n.action)?v.createElement(`button`,{"data-button":!0,"data-action":!0,style:n.actionButtonStyle||g,onClick:e=>{wt(n.action)&&(n.action.onClick==null||n.action.onClick.call(n.action,e),!e.defaultPrevented&&Ae())},className:Nt(w?.actionButton,n?.classNames?.actionButton)},n.action.label):null)};function It(){if(typeof window>`u`||typeof document>`u`)return`ltr`;let e=document.documentElement.getAttribute(`dir`);return e===`auto`||!e?window.getComputedStyle(document.documentElement).direction:e}function Lt(e,t){let n={};return[e,t].forEach((e,t)=>{let r=t===1,i=r?`--mobile-offset`:`--offset`,a=r?Dt:Et;function o(e){[`top`,`right`,`bottom`,`left`].forEach(t=>{n[`${i}-${t}`]=typeof e==`number`?`${e}px`:e})}typeof e==`number`||typeof e==`string`?o(e):typeof e==`object`?[`top`,`right`,`bottom`,`left`].forEach(t=>{e[t]===void 0?n[`${i}-${t}`]=a:n[`${i}-${t}`]=typeof e[t]==`number`?`${e[t]}px`:e[t]}):o(a)}),n}var Rt=v.forwardRef(function(e,t){let{id:n,invert:r,position:i=`bottom-right`,hotkey:a=[`altKey`,`KeyT`],expand:o,closeButton:s,className:c,offset:l,mobileOffset:u,theme:d=`light`,richColors:f,duration:p,style:m,visibleToasts:h=Tt,toastOptions:g,dir:_=It(),gap:y=At,icons:b,customAriaLabel:x,containerAriaLabel:S=`Notifications`}=e,[C,w]=v.useState([]),T=v.useMemo(()=>n?C.filter(e=>e.toasterId===n):C.filter(e=>!e.toasterId),[C,n]),E=v.useMemo(()=>Array.from(new Set([i].concat(T.filter(e=>e.position).map(e=>e.position)))),[T,i]),[D,O]=v.useState([]),[k,A]=v.useState(!1),[j,M]=v.useState(!1),[N,P]=v.useState(d===`system`?typeof window<`u`&&window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:d),F=v.useRef(null),I=a.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),ee=v.useRef(null),te=v.useRef(!1),ne=v.useCallback(e=>{w(t=>(t.find(t=>t.id===e.id)?.delete||bt.dismiss(e.id),t.filter(({id:t})=>t!==e.id)))},[]);return v.useEffect(()=>bt.subscribe(e=>{e.dismiss?requestAnimationFrame(()=>{w(t=>t.map(t=>t.id===e.id?{...t,delete:!0}:t))}):setTimeout(()=>{ot.flushSync(()=>{w(t=>{let n=t.findIndex(t=>t.id===e.id);return n===-1?[e,...t]:[...t.slice(0,n),{...t[n],...e},...t.slice(n+1)]})})})}),[]),v.useEffect(()=>{if(d!==`system`){P(d);return}if(d===`system`&&(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?P(`dark`):P(`light`)),typeof window>`u`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`);try{e.addEventListener(`change`,({matches:e})=>{P(e?`dark`:`light`)})}catch{e.addListener(({matches:e})=>{try{P(e?`dark`:`light`)}catch(e){console.error(e)}})}},[d]),v.useEffect(()=>{C.length<=1&&A(!1)},[C]),v.useEffect(()=>{let e=e=>{if(a.length>0&&a.every(t=>e[t]||e.code===t)){var t;A(!0),(t=F.current)==null||t.focus()}e.code===`Escape`&&(document.activeElement===F.current||F.current?.contains(document.activeElement))&&A(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a]),v.useEffect(()=>{if(F.current)return()=>{ee.current&&(ee.current.focus({preventScroll:!0}),ee.current=null,te.current=!1)}},[F.current]),v.createElement(`section`,{ref:t,"aria-label":x??`${S} ${I}`,tabIndex:-1,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,suppressHydrationWarning:!0,"data-react-aria-top-layer":!0},E.map((t,n)=>{let[i,a]=t.split(`-`);return T.length?v.createElement(`ol`,{key:t,dir:_===`auto`?It():_,tabIndex:-1,ref:F,className:c,"data-sonner-toaster":!0,"data-sonner-theme":N,"data-y-position":i,"data-x-position":a,style:{"--front-toast-height":`${D[0]?.height||0}px`,"--width":`${kt}px`,"--gap":`${y}px`,...m,...Lt(l,u)},onBlur:e=>{te.current&&!e.currentTarget.contains(e.relatedTarget)&&(te.current=!1,ee.current&&=(ee.current.focus({preventScroll:!0}),null))},onFocus:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||te.current||(te.current=!0,ee.current=e.relatedTarget)},onMouseEnter:()=>A(!0),onMouseMove:()=>A(!0),onMouseLeave:()=>{j||A(!1)},onDragEnd:()=>A(!1),onPointerDown:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||M(!0)},onPointerUp:()=>M(!1)},T.filter(e=>!e.position&&n===0||e.position===t).map((n,i)=>v.createElement(Ft,{key:n.id,icons:b,index:i,toast:n,defaultRichColors:f,duration:g?.duration??p,className:g?.className,descriptionClassName:g?.descriptionClassName,invert:r,visibleToasts:h,closeButton:g?.closeButton??s,interacting:j,position:t,style:g?.style,unstyled:g?.unstyled,classNames:g?.classNames,cancelButtonStyle:g?.cancelButtonStyle,actionButtonStyle:g?.actionButtonStyle,closeButtonAriaLabel:g?.closeButtonAriaLabel,removeToast:ne,toasts:T.filter(e=>e.position==n.position),heights:D.filter(e=>e.position==n.position),setHeights:O,expandByDefault:o,gap:y,expanded:k,swipeDirections:e.swipeDirections}))):null}))});function zt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=zt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Bt(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=zt(e))&&(r&&(r+=` `),r+=t);return r}var Vt=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,Ht=Bt,Ut=(e,t)=>n=>{if(t?.variants==null)return Ht(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=Vt(t)||Vt(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return Ht(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},Wt=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Gt=(e,t)=>({classGroupId:e,validator:t}),Kt=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),qt=`-`,Jt=[],Yt=`arbitrary..`,Xt=e=>{let t=$t(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Qt(e);let n=e.split(qt);return Zt(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Wt(i,t):t:i||Jt}return n[e]||Jt}}},Zt=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Zt(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(qt):e.slice(t).join(qt),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Qt=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Yt+r:void 0})(),$t=e=>{let{theme:t,classGroups:n}=e;return en(n,t)},en=(e,t)=>{let n=Kt();for(let r in e){let i=e[r];tn(i,n,r,t)}return n},tn=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];nn(i,t,n,r)}},nn=(e,t,n,r)=>{typeof e==`string`?rn(e,t,n):typeof e==`function`?an(e,t,n,r):on(e,t,n,r)},rn=(e,t,n)=>{let r=e===``?t:sn(t,e);r.classGroupId=n},an=(e,t,n,r)=>{cn(e)?tn(e(r),t,n,r):(t.validators===null&&(t.validators=[]),t.validators.push(Gt(n,e)))},on=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];tn(o,sn(t,a),n,r)}},sn=(e,t)=>{let n=e,r=t.split(qt),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Kt(),n.nextPart.set(t,i)),n=i}return n},cn=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,ln=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},un=`!`,dn=`:`,fn=[],pn=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),mn=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===dn){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(un)?(c=s.slice(0,-1),l=!0):s.startsWith(un)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return pn(t,l,c,u)};if(t){let e=t+dn,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):pn(fn,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},hn=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},gn=e=>({cache:ln(e.cacheSize),parseClassName:mn(e),sortModifiers:hn(e),postfixLookupClassGroupIds:_n(e),...Xt(e)}),_n=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},vn=/\s+/,yn=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(vn),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h||(g=r(p),!g)){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+un:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},bn=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=xn(n))&&(i&&(i+=` `),i+=r);return i},xn=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=xn(e[r]))&&(n&&(n+=` `),n+=t);return n},Sn=(e,...t)=>{let n,r,i,a,o=o=>(n=gn(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=yn(e,n);return i(e,a),a};return a=o,(...e)=>a(bn(...e))},Cn=[],wn=e=>{let t=t=>t[e]||Cn;return t.isThemeGetter=!0,t.themeKey=e,t},Tn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,En=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Dn=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,On=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kn=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,An=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,jn=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Mn=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Nn=e=>Dn.test(e),z=e=>!!e&&!Number.isNaN(Number(e)),Pn=e=>!!e&&Number.isInteger(Number(e)),Fn=e=>e.endsWith(`%`)&&z(e.slice(0,-1)),In=e=>On.test(e),Ln=()=>!0,Rn=e=>kn.test(e)&&!An.test(e),zn=()=>!1,Bn=e=>jn.test(e),Vn=e=>Mn.test(e),Hn=e=>!B(e)&&!V(e),Un=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Wn=e=>ar(e,lr,zn),B=e=>Tn.test(e),Gn=e=>ar(e,ur,Rn),Kn=e=>ar(e,dr,z),qn=e=>ar(e,pr,Ln),Jn=e=>ar(e,fr,zn),Yn=e=>ar(e,sr,zn),Xn=e=>ar(e,cr,Vn),Zn=e=>ar(e,mr,Bn),V=e=>En.test(e),Qn=e=>or(e,ur),$n=e=>or(e,fr),er=e=>or(e,sr),tr=e=>or(e,lr),nr=e=>or(e,cr),rr=e=>or(e,mr,!0),ir=e=>or(e,pr,!0),ar=(e,t,n)=>{let r=Tn.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},or=(e,t,n=!1)=>{let r=En.exec(e);return r?r[1]?t(r[1]):n:!1},sr=e=>e===`position`||e===`percentage`,cr=e=>e===`image`||e===`url`,lr=e=>e===`length`||e===`size`||e===`bg-size`,ur=e=>e===`length`,dr=e=>e===`number`,fr=e=>e===`family-name`,pr=e=>e===`number`||e===`weight`,mr=e=>e===`shadow`,hr=Sn(()=>{let e=wn(`color`),t=wn(`font`),n=wn(`text`),r=wn(`font-weight`),i=wn(`tracking`),a=wn(`leading`),o=wn(`breakpoint`),s=wn(`container`),c=wn(`spacing`),l=wn(`radius`),u=wn(`shadow`),d=wn(`inset-shadow`),f=wn(`text-shadow`),p=wn(`drop-shadow`),m=wn(`blur`),h=wn(`perspective`),g=wn(`aspect`),_=wn(`ease`),v=wn(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),V,B],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[V,B,c],T=()=>[Nn,`full`,`auto`,...w()],E=()=>[Pn,`none`,`subgrid`,V,B],D=()=>[`auto`,{span:[`full`,Pn,V,B]},Pn,V,B],O=()=>[Pn,`auto`,V,B],k=()=>[`auto`,`min`,`max`,`fr`,V,B],A=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],j=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],M=()=>[`auto`,...w()],N=()=>[Nn,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],P=()=>[s,Nn,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],F=()=>[Nn,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],I=()=>[e,V,B],ee=()=>[...b(),er,Yn,{position:[V,B]}],te=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],ne=()=>[`auto`,`cover`,`contain`,tr,Wn,{size:[V,B]}],re=()=>[Fn,Qn,Gn],ie=()=>[``,`none`,`full`,l,V,B],ae=()=>[``,z,Qn,Gn],oe=()=>[`solid`,`dashed`,`dotted`,`double`],se=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],ce=()=>[z,Fn,er,Yn],le=()=>[``,`none`,m,V,B],ue=()=>[`none`,z,V,B],de=()=>[`none`,z,V,B],fe=()=>[z,V,B],pe=()=>[Nn,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[In],breakpoint:[In],color:[Ln],container:[In],"drop-shadow":[In],ease:[`in`,`out`,`in-out`],font:[Hn],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[In],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[In],shadow:[In],spacing:[`px`,z],text:[In],"text-shadow":[In],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Nn,B,V,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,V,B]}],"container-named":[Un],columns:[{columns:[z,`auto`,B,V,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Pn,`auto`,V,B]}],basis:[{basis:[Nn,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[z,Nn,`auto`,`initial`,`none`,B]}],grow:[{grow:[``,z,V,B]}],shrink:[{shrink:[``,z,V,B]}],order:[{order:[Pn,`first`,`last`,`none`,V,B]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":k()}],"auto-rows":[{"auto-rows":k()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...A(),`normal`]}],"justify-items":[{"justify-items":[...j(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...j()]}],"align-content":[{content:[`normal`,...A()]}],"align-items":[{items:[...j(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...j(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...j(),`baseline`]}],"place-self":[{"place-self":[`auto`,...j()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mbs:[{mbs:M()}],mbe:[{mbe:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:N()}],"inline-size":[{inline:[`auto`,...P()]}],"min-inline-size":[{"min-inline":[`auto`,...P()]}],"max-inline-size":[{"max-inline":[`none`,...P()]}],"block-size":[{block:[`auto`,...F()]}],"min-block-size":[{"min-block":[`auto`,...F()]}],"max-block-size":[{"max-block":[`none`,...F()]}],w:[{w:[s,`screen`,...N()]}],"min-w":[{"min-w":[s,`screen`,`none`,...N()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...N()]}],h:[{h:[`screen`,`lh`,...N()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...N()]}],"max-h":[{"max-h":[`screen`,`lh`,`none`,...N()]}],"font-size":[{text:[`base`,n,Qn,Gn]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,ir,qn]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Fn,B]}],"font-family":[{font:[$n,Jn,t]}],"font-features":[{"font-features":[B]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,V,B]}],"line-clamp":[{"line-clamp":[z,`none`,V,Kn]}],leading:[{leading:[`none`,a,...w()]}],"list-image":[{"list-image":[`none`,V,B]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,V,B]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...oe(),`wavy`]}],"text-decoration-thickness":[{decoration:[z,`from-font`,`auto`,V,Gn]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[z,`auto`,V,B]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[Pn,V,B]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,V,B]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,V,B]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:ee()}],"bg-repeat":[{bg:te()}],"bg-size":[{bg:ne()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Pn,V,B],radial:[``,V,B],conic:[``,Pn,V,B]},nr,Xn]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:re()}],"gradient-via-pos":[{via:re()}],"gradient-to-pos":[{to:re()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:ie()}],"rounded-s":[{"rounded-s":ie()}],"rounded-e":[{"rounded-e":ie()}],"rounded-t":[{"rounded-t":ie()}],"rounded-r":[{"rounded-r":ie()}],"rounded-b":[{"rounded-b":ie()}],"rounded-l":[{"rounded-l":ie()}],"rounded-ss":[{"rounded-ss":ie()}],"rounded-se":[{"rounded-se":ie()}],"rounded-ee":[{"rounded-ee":ie()}],"rounded-es":[{"rounded-es":ie()}],"rounded-tl":[{"rounded-tl":ie()}],"rounded-tr":[{"rounded-tr":ie()}],"rounded-br":[{"rounded-br":ie()}],"rounded-bl":[{"rounded-bl":ie()}],"border-w":[{border:ae()}],"border-w-x":[{"border-x":ae()}],"border-w-y":[{"border-y":ae()}],"border-w-s":[{"border-s":ae()}],"border-w-e":[{"border-e":ae()}],"border-w-bs":[{"border-bs":ae()}],"border-w-be":[{"border-be":ae()}],"border-w-t":[{"border-t":ae()}],"border-w-r":[{"border-r":ae()}],"border-w-b":[{"border-b":ae()}],"border-w-l":[{"border-l":ae()}],"divide-x":[{"divide-x":ae()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":ae()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...oe(),`hidden`,`none`]}],"divide-style":[{divide:[...oe(),`hidden`,`none`]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-bs":[{"border-bs":I()}],"border-color-be":[{"border-be":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...oe(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[z,V,B]}],"outline-w":[{outline:[``,z,Qn,Gn]}],"outline-color":[{outline:I()}],shadow:[{shadow:[``,`inner`,`none`,u,rr,Zn]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":[`none`,d,rr,Zn]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:ae()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[z,Gn]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":ae()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":[`none`,f,rr,Zn]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[z,V,B]}],"mix-blend":[{"mix-blend":[...se(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[z]}],"mask-image-linear-from-pos":[{"mask-linear-from":ce()}],"mask-image-linear-to-pos":[{"mask-linear-to":ce()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":ce()}],"mask-image-t-to-pos":[{"mask-t-to":ce()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":ce()}],"mask-image-r-to-pos":[{"mask-r-to":ce()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":ce()}],"mask-image-b-to-pos":[{"mask-b-to":ce()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":ce()}],"mask-image-l-to-pos":[{"mask-l-to":ce()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":ce()}],"mask-image-x-to-pos":[{"mask-x-to":ce()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":ce()}],"mask-image-y-to-pos":[{"mask-y-to":ce()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[V,B]}],"mask-image-radial-from-pos":[{"mask-radial-from":ce()}],"mask-image-radial-to-pos":[{"mask-radial-to":ce()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[z]}],"mask-image-conic-from-pos":[{"mask-conic-from":ce()}],"mask-image-conic-to-pos":[{"mask-conic-to":ce()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:ee()}],"mask-repeat":[{mask:te()}],"mask-size":[{mask:ne()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,V,B]}],filter:[{filter:[``,`none`,V,B]}],blur:[{blur:le()}],brightness:[{brightness:[z,V,B]}],contrast:[{contrast:[z,V,B]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,rr,Zn]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:[``,z,V,B]}],"hue-rotate":[{"hue-rotate":[z,V,B]}],invert:[{invert:[``,z,V,B]}],saturate:[{saturate:[z,V,B]}],sepia:[{sepia:[``,z,V,B]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,V,B]}],"backdrop-blur":[{"backdrop-blur":le()}],"backdrop-brightness":[{"backdrop-brightness":[z,V,B]}],"backdrop-contrast":[{"backdrop-contrast":[z,V,B]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,z,V,B]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[z,V,B]}],"backdrop-invert":[{"backdrop-invert":[``,z,V,B]}],"backdrop-opacity":[{"backdrop-opacity":[z,V,B]}],"backdrop-saturate":[{"backdrop-saturate":[z,V,B]}],"backdrop-sepia":[{"backdrop-sepia":[``,z,V,B]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,V,B]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[z,`initial`,V,B]}],ease:[{ease:[`linear`,`initial`,_,V,B]}],delay:[{delay:[z,V,B]}],animate:[{animate:[`none`,v,V,B]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,V,B]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:ue()}],"rotate-x":[{"rotate-x":ue()}],"rotate-y":[{"rotate-y":ue()}],"rotate-z":[{"rotate-z":ue()}],scale:[{scale:de()}],"scale-x":[{"scale-x":de()}],"scale-y":[{"scale-y":de()}],"scale-z":[{"scale-z":de()}],"scale-3d":[`scale-3d`],skew:[{skew:fe()}],"skew-x":[{"skew-x":fe()}],"skew-y":[{"skew-y":fe()}],transform:[{transform:[V,B,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:pe()}],"translate-x":[{"translate-x":pe()}],"translate-y":[{"translate-y":pe()}],"translate-z":[{"translate-z":pe()}],"translate-none":[`translate-none`],zoom:[{zoom:[Pn,V,B]}],accent:[{accent:I()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,V,B]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":I()}],"scrollbar-track-color":[{"scrollbar-track":I()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,V,B]}],fill:[{fill:[`none`,...I()]}],"stroke-w":[{stroke:[z,Qn,Gn,Kn]}],stroke:[{stroke:[`none`,...I()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`start`,`end`,`right`,`left`],"inset-y":[`inset-bs`,`inset-be`,`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`ps`,`pe`,`pr`,`pl`],py:[`pbs`,`pbe`,`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`ms`,`me`,`mr`,`ml`],my:[`mbs`,`mbe`,`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-s`,`border-w-e`,`border-w-r`,`border-w-l`],"border-w-y":[`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-s`,`border-color-e`,`border-color-r`,`border-color-l`],"border-color-y":[`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-ms`,`scroll-me`,`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-ps`,`scroll-pe`,`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function H(...e){return hr(Bt(e))}var gr=Object.defineProperty,_r=(e,t)=>gr(e,`name`,{value:t,configurable:!0});function vr(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}_r(vr,`setRef`);function yr(...e){return t=>{let n=!1,r=e.map(e=>{let r=vr(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():vr(e[t],null)}}}}_r(yr,`composeRefs`);function U(...e){return v.useCallback(yr(...e),e)}_r(U,`useComposedRefs`);var br=Object.defineProperty,xr=(e,t)=>br(e,`name`,{value:t,configurable:!0});function Sr(e){let t=v.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];r=Nr(r),v.Children.forEach(r,e=>{if(kr(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;for(;jr(n)&&typeof Lr==`function`;)n=Lr(n._payload);a=Er(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=v.cloneElement(a,void 0,s):!o&&v.Children.count(r)===1&&v.isValidElement(r)&&(a=r);let c=a?Or(a):void 0,l=U(n,c);if(!a){if(r||r===0)throw Error(o?Ir(e):Fr(e));return r}let u=Dr(i,a.props??{});return a.type!==v.Fragment&&(u.ref=n?l:c),v.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}xr(Sr,`createSlot`);var Cr=Sr(`Slot`),wr=Symbol.for(`radix.slottable`);function Tr(e){let t=xr(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=wr,t}xr(Tr,`createSlottable`);var Er=xr((e,t)=>`child`in e.props?v.isValidElement(t)?v.cloneElement(t,void 0,e.props.children(t.props.children)):null:v.isValidElement(t)?t:null,`getSlottableElementFromSlottable`);function Dr(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=Pr(a,i))}return{...e,...n}}xr(Dr,`mergeProps`);function Or(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}xr(Or,`getElementRef`);function kr(e){return v.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===wr}xr(kr,`isSlottable`);var Ar=Symbol.for(`react.lazy`);function jr(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ar&&`_payload`in e&&Mr(e._payload)}xr(jr,`isLazyComponent`);function Mr(e){return typeof e==`object`&&!!e&&`then`in e}xr(Mr,`isPromiseLike`);function Nr(e){let t=e;for(;jr(t)&&typeof Lr==`function`;)t=Lr(t._payload);return t}xr(Nr,`useUnwrappedLazy`);function Pr(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}xr(Pr,`concatAriaDescribedby`);var Fr=xr(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Ir=xr(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Lr=v.use,Rr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),W=o(((e,t)=>{t.exports=Rr()}))(),zr=Object.defineProperty,Br=(e,t)=>zr(e,`name`,{value:t,configurable:!0}),G=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=Sr(`Primitive.${t}`),r=v.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,W.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Vr(e,t){e&&ot.flushSync(()=>e.dispatchEvent(t))}Br(Vr,`dispatchDiscreteCustomEvent`);var Hr=Object.defineProperty,Ur=(e,t)=>Hr(e,`name`,{value:t,configurable:!0}),Wr=Object.freeze({position:`absolute`,border:0,width:1,height:1,padding:0,margin:-1,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,wordWrap:`normal`}),Gr=v.forwardRef(Ur(function(e,t){return(0,W.jsx)(G.span,{...e,ref:t,style:{...Wr,...e.style}})},`VisuallyHidden`)),Kr=Object.defineProperty,qr=(e,t)=>Kr(e,`name`,{value:t,configurable:!0});function Jr(e,t){let n=v.createContext(t);n.displayName=e+`Context`;let r=qr(e=>{let{children:t,...r}=e,i=v.useMemo(()=>r,Object.values(r));return(0,W.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=v.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return qr(i,`useContext`),[r,i]}qr(Jr,`createContext`);function Yr(e,t=[]){let n=[];function r(t,r){let i=v.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=qr(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=v.useMemo(()=>o,Object.values(o));return(0,W.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=v.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return qr(s,`useContext`),[o,s]}qr(r,`createContext`);let i=qr(()=>{let t=n.map(e=>v.createContext(e));return qr(function(n){let r=n?.[e]||t;return v.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,Xr(i,...t)]}qr(Yr,`createContextScope`);function Xr(...e){let t=e[0];if(e.length===1)return t;let n=qr(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return qr(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return v.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}qr(Xr,`composeContextScopes`);var Zr=globalThis?.document?v.useLayoutEffect:()=>{},Qr=Object.defineProperty,$r=(e,t)=>Qr(e,`name`,{value:t,configurable:!0});function ei(e){let t=e+`CollectionProvider`,[n,r]=Yr(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=$r(e=>{let{scope:t,children:n}=e,r=v.useRef(null),a=v.useRef(new Map).current;return(0,W.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})},`CollectionProvider`);o.displayName=t;let s=e+`CollectionSlot`,c=Sr(s),l=v.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=U(t,a(s,n).collectionRef);return(0,W.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=Sr(u),p=v.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=v.useRef(null),s=U(t,o),c=a(u,n);return v.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,W.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return v.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return $r(m,`useCollection`),[{Provider:o,Slot:l,ItemSlot:p},m,r]}$r(ei,`createCollection`);var ti=new WeakMap,ni=class e extends Map{static{$r(this,`OrderedDict`)}#e;constructor(e){super(e),this.#e=[...super.keys()],ti.set(this,!0)}set(e,t){return ti.get(this)&&!this.has(e)&&this.#e.push(e),super.set(e,t),this}insert(e,t,n){let r=this.has(t),i=r?this.size:this.size+1,a=ai(e),o=a>=0?Math.min(a,i-1):Math.max(i+a,0);if(r?this.#e.indexOf(t)===o:o===this.size)return this.set(t,n),this;let s=this.#e.filter(e=>e!==t);s.splice(o,0,t);let c=s.map(e=>[e,e===t?n:this.get(e)]);this.clear();for(let[e,t]of c)this.set(e,t);return this}with(t,n,r){let i=new e(this);return i.insert(t,n,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,n){let r=this.#e.indexOf(e);if(r===-1)return this;let i=this.#e.indexOf(t),a=i!==-1&&i<r?r-1:r;return this.insert(a,t,n)}after(e){let t=this.#e.indexOf(e);if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)}setAfter(e,t,n){let r=this.#e.indexOf(e);if(r===-1)return this;let i=this.#e.indexOf(t),a=i!==-1&&i<=r?r:r+1;return this.insert(a,t,n)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return t!==void 0&&this.delete(t)}at(e){let t=ri(this.#e,e);if(t!==void 0)return this.get(t)}entryAt(e){let t=ri(this.#e,e);if(t!==void 0)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return ri(this.#e,e)}from(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return r;n++}}findIndex(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return n;n++}return-1}filter(t,n){let r=[],i=0;for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,n){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,n]=e,r=e.length>1;if(!r&&this.size===0)throw TypeError(`Reduce of empty OrderedDict with no initial value`);let i=0,a=n;for(let e of this)a=i===0&&!r?e:Reflect.apply(t,this,[a,e,i,this]),i++;return a}reduceRight(...e){let[t,n]=e,r=e.length>1;if(!r&&this.size===0)throw TypeError(`Reduce of empty OrderedDict with no initial value`);let i=n;for(let e=this.size-1;e>=0;e--){let n=this.entryAt(e);i=e===this.size-1&&!r?n:Reflect.apply(t,this,[i,n,e,this])}return i}sort(e){if(typeof e!=`function`)throw TypeError(`OrderedDict.sort requires a compare function`);let t=[...this.entries()].sort(e);this.clear();for(let[e,n]of t)this.set(e,n);return this}toSorted(t){if(typeof t!=`function`)throw TypeError(`OrderedDict.toSorted requires a compare function`);let n=[...this.entries()].sort(t);return new e(n)}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let n=this.keyAt(e),r=this.get(n);t.set(n,r)}return t}toSpliced(...t){let n=[...this.entries()];return n.splice(...t),new e(n)}slice(t,n){let r=new e;for(let e of this.#e.slice(t,n))r.set(e,this.get(e));return r}every(e,t){let n=0;for(let r of this){if(!Reflect.apply(e,t,[r,n,this]))return!1;n++}return!0}some(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return!0;n++}return!1}};function ri(e,t){if(`at`in Array.prototype)return Array.prototype.at.call(e,t);let n=ii(e,t);return n===-1?void 0:e[n]}$r(ri,`at`);function ii(e,t){let n=e.length,r=ai(t),i=r>=0?r:n+r;return i<0||i>=n?-1:i}$r(ii,`toSafeIndex`);function ai(e){return e!==e||e===0?0:Math.trunc(e)}$r(ai,`toSafeInteger`);function oi(e){let t=e+`CollectionProvider`,[n,r]=Yr(t),[i,a]=n(t);i.displayName=e+`CollectionStableContextProvider`;let[o,s]=n(t);o.displayName=e+`CollectionStatefulContextProvider`;let c=$r(({state:e,...t})=>e?(0,W.jsx)(u,{...t,state:e}):(0,W.jsx)(l,{...t}),`CollectionProvider`);c.displayName=t;let l=$r(e=>{let t=_();return(0,W.jsx)(u,{...e,state:t})},`CollectionInit`);l.displayName=e+`CollectionInit`;let u=$r(e=>{let{scope:t,children:n,state:r}=e,a=v.useRef(null),[s,c]=v.useState(null),l=U(a,c),[u,d]=r,f=v.useRef(new ni),p=v.useCallback(()=>{let e=f.current;return li(e)||e.sort(ui),e},[]);return v.useEffect(()=>{if(!s)return;let e=di(()=>{d(e=>{let t=e.toSorted(ui);return t.some(([t],n)=>e.keyAt(n)!==t)?t:e})});return e.observe(s,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[s,d]),(0,W.jsx)(i,{scope:t,collectionElementRef:l,collectionElementRefObject:a,getCollection:p,setCollection:d,registryRef:f,children:(0,W.jsx)(o,{scope:t,collectionElement:s,collection:u,children:n})})},`CollectionProviderImpl`);u.displayName=e+`CollectionProviderImpl`;let d=e+`CollectionSlot`,f=Sr(d),p=v.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=U(t,a(d,n).collectionElementRef);return(0,W.jsx)(f,{ref:i,children:r})});p.displayName=d;let m=e+`CollectionItemSlot`,h=Sr(m),g=v.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=v.useRef(null),{setCollection:s,registryRef:c}=a(m,n),l=v.useRef(i);si(l.current,i)||(l.current=i);let u=l.current,d=U(t,v.useCallback(e=>{let t=c.current;e?t.set(e,{...l.current,element:e}):o.current&&t.delete(o.current)},[c]),o);Zr(()=>{let e=o.current,t=c.current;e&&t.has(e)&&t.set(e,{...u,element:e})},[u,c]);let f=v.useRef(null);return v.useEffect(()=>{let e=o.current,t=f.current;((t?.element??null)!==e||e&&t?.itemData!==u)&&(f.current=e?{element:e,itemData:u}:null,s(n=>{let r=new ni(n);return t&&t.element!==e&&r.delete(t.element),e&&r.set(e,{...u,element:e}),r.sort(ui)}))}),v.useEffect(()=>()=>{let e=f.current;f.current=null,e&&s(t=>{if(!t.has(e.element))return t;let n=new ni(t);return n.delete(e.element),n})},[s]),(0,W.jsx)(h,{"data-radix-collection-item":``,ref:d,children:r})});g.displayName=m;function _(){return v.useState(new ni)}$r(_,`useInitCollection`);function y(t){let{collection:n}=s(e+`CollectionConsumer`,t);return n}$r(y,`useCollection`);function b(t){let{getCollection:n}=a(e+`CollectionConsumer`,t);return n}return $r(b,`useGetCollection`),[{Provider:c,Slot:p,ItemSlot:g},{createCollectionScope:r,useCollection:y,useGetCollection:b,useInitCollection:_}]}$r(oi,`createCollection`);function si(e,t){if(e===t)return!0;if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}$r(si,`shallowEqual`);function ci(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}$r(ci,`isElementPreceding`);function li(e){let t;for(let n of e.keys()){if(t){let e=t.compareDocumentPosition(n);if(!(e&Node.DOCUMENT_POSITION_DISCONNECTED)&&e&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=n}return!0}$r(li,`isInDocumentOrder`);function ui(e,t){return!e[1].element||!t[1].element?0:ci(e[1].element,t[1].element)?-1:1}$r(ui,`sortByDocumentPosition`);function di(e){return new MutationObserver(t=>{for(let n of t)if(n.type===`childList`){e();return}})}$r(di,`getChildListObserver`);var fi=Object.defineProperty,pi=(e,t)=>fi(e,`name`,{value:t,configurable:!0}),mi=!!(typeof window<`u`&&window.document&&window.document.createElement);function K(e,t,{checkForDefaultPrevented:n=!0}={}){return pi(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}pi(K,`composeEventHandlers`);function hi(e){if(!mi)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}pi(hi,`getOwnerWindow`);function gi(e){if(!mi)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}pi(gi,`getOwnerDocument`);function _i(e,t=!1){let{activeElement:n}=gi(e);if(!n?.nodeName)return null;if(vi(n)&&n.contentDocument)return _i(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=gi(n).getElementById(e);if(t)return t}}return n}pi(_i,`getActiveElement`);function vi(e){return e.tagName===`IFRAME`}pi(vi,`isFrame`);var yi=Object.defineProperty,bi=(e,t)=>yi(e,`name`,{value:t,configurable:!0}),xi=v.useEffectEvent,Si=v.useInsertionEffect;function Ci(e){if(typeof xi==`function`)return xi(e);let t=v.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof Si==`function`?Si(()=>{t.current=e}):Zr(()=>{t.current=e}),v.useMemo(()=>((...e)=>t.current?.(...e)),[])}bi(Ci,`useEffectEvent`);var wi=Object.defineProperty,Ti=(e,t)=>wi(e,`name`,{value:t,configurable:!0}),Ei=v.useInsertionEffect||Zr;function Di({prop:e,defaultProp:t,onChange:n=Ti(()=>{},`onChange`),caller:r}){let[i,a,o]=Oi({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,v.useCallback(t=>{if(s){let n=ki(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}Ti(Di,`useControllableState`);function Oi({defaultProp:e,onChange:t}){let[n,r]=v.useState(e),i=v.useRef(n),a=v.useRef(t);return Ei(()=>{a.current=t},[t]),v.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}Ti(Oi,`useUncontrolledState`);function ki(e){return typeof e==`function`}Ti(ki,`isFunction`);var Ai=Symbol(`RADIX:SYNC_STATE`);function ji(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=Ci(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=v.useReducer((t,n)=>{if(n.type===Ai)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=v.useRef(p);v.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=v.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return v.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:Ai,state:i})},[i,d.state,c]),[h,f]}Ti(ji,`useControllableStateReducer`);var Mi=Object.defineProperty,Ni=(e,t)=>Mi(e,`name`,{value:t,configurable:!0});function Pi(e,t){return v.useReducer((e,n)=>t[e][n]??e,e)}Ni(Pi,`useStateMachine`);var Fi=Ni(e=>{let{present:t,children:n}=e,r=Ii(t),i=typeof n==`function`?n({present:r.isPresent}):v.Children.only(n),a=Ri(r.ref,Bi(i));return typeof n==`function`||r.isPresent?v.cloneElement(i,{ref:a}):null},`Presence`);function Ii(e){let[t,n]=v.useState(),r=v.useRef(null),i=v.useRef(e),a=v.useRef(`none`),o=v.useRef(void 0),[s,c]=Pi(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return v.useEffect(()=>{s===`mounted`?(a.current=o.current??zi(r.current),o.current=void 0):a.current=`none`},[s]),Zr(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,s=zi(t);e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),Zr(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=Ni(a=>{let o=zi(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},`handleAnimationEnd`),s=Ni(e=>{e.target===t&&(a.current=zi(r.current))},`handleAnimationStart`);return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:v.useCallback(e=>{if(e){let t=getComputedStyle(e);r.current=t,o.current=zi(t)}else r.current=null;n(e)},[])}}Ni(Ii,`usePresence`);function Li(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Ni(Li,`setRef`);function Ri(...e){let t=v.useRef(e);return t.current=e,v.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=Li(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():Li(n[e],null)}}},[])}Ni(Ri,`useStableComposedRefs`);function zi(e){return e?.animationName||`none`}Ni(zi,`getAnimationName`);function Bi(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Ni(Bi,`getElementRef`);var Vi=Object.defineProperty,Hi=(e,t)=>Vi(e,`name`,{value:t,configurable:!0}),Ui=v.useId||(()=>void 0),Wi=0;function Gi(e){let[t,n]=v.useState(Ui());return Zr(()=>{e||n(e=>e??String(Wi++))},[e]),e||(t?`radix-${t}`:``)}Hi(Gi,`useId`);var Ki=Object.defineProperty,qi=(e,t)=>Ki(e,`name`,{value:t,configurable:!0}),Ji=`Collapsible`,[Yi,Xi]=Yr(Ji),[Zi,q]=Yi(Ji),Qi=v.forwardRef(qi(function(e,t){let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:o,...s}=e,[c,l]=Di({prop:r,defaultProp:i??!1,onChange:o,caller:Ji});return(0,W.jsx)(Zi,{scope:n,disabled:a,contentId:Gi(),open:c,onOpenToggle:v.useCallback(()=>l(e=>!e),[l]),children:(0,W.jsx)(G.div,{"data-state":ia(c),"data-disabled":a?``:void 0,...s,ref:t})})},`Collapsible`)),$i=`CollapsibleTrigger`,ea=v.forwardRef(qi(function(e,t){let{__scopeCollapsible:n,...r}=e,i=q($i,n);return(0,W.jsx)(G.button,{type:`button`,"aria-controls":i.open?i.contentId:void 0,"aria-expanded":i.open||!1,"data-state":ia(i.open),"data-disabled":i.disabled?``:void 0,disabled:i.disabled,...r,ref:t,onClick:K(e.onClick,i.onOpenToggle)})},`CollapsibleTrigger`)),ta=`CollapsibleContent`,na=v.forwardRef(qi(function(e,t){let{forceMount:n,...r}=e,i=q(ta,e.__scopeCollapsible);return(0,W.jsx)(Fi,{present:n||i.open,children:({present:e})=>(0,W.jsx)(ra,{...r,ref:t,present:e})})},`CollapsibleContent`)),ra=v.forwardRef(qi(function(e,t){let{__scopeCollapsible:n,present:r,children:i,...a}=e,o=q(ta,n),[s,c]=v.useState(r),l=v.useRef(null),u=U(t,l),d=v.useRef(0),f=d.current,p=v.useRef(0),m=p.current,h=o.open||s,g=v.useRef(h),_=v.useRef(void 0);return v.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),Zr(()=>{let e=l.current;if(e){_.current=_.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();d.current=t.height,p.current=t.width,g.current||(e.style.transitionDuration=_.current.transitionDuration,e.style.animationName=_.current.animationName),c(r)}},[o.open,r]),(0,W.jsx)(G.div,{"data-state":ia(o.open),"data-disabled":o.disabled?``:void 0,id:o.contentId,hidden:!h,...a,ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":m?`${m}px`:void 0,...e.style},children:h&&i})},`CollapsibleContentImpl`));function ia(e){return e?`open`:`closed`}qi(ia,`getState`);var aa=Object.defineProperty,oa=(e,t)=>aa(e,`name`,{value:t,configurable:!0}),sa={LTR:`ltr`,RTL:`rtl`},ca=v.createContext(void 0);function la(e){let t=v.useContext(ca);return e||t||sa.LTR}oa(la,`useDirection`);var ua=Object.defineProperty,da=(e,t)=>ua(e,`name`,{value:t,configurable:!0}),fa={Single:`single`,Multiple:`multiple`},pa={Vertical:`vertical`,Horizontal:`horizontal`},ma={LTR:`ltr`,RTL:`rtl`},ha=`Accordion`,ga=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[_a,{useGetCollection:va,createCollectionScope:ya}]=oi(ha),[ba,xa]=Yr(ha,[ya,Xi]),Sa=Xi(),Ca=v.forwardRef(da(function(e,t){let{type:n,...r}=e,i=r,a=r;return(0,W.jsx)(_a.Provider,{scope:e.__scopeAccordion,children:n===fa.Multiple?(0,W.jsx)(ka,{...a,ref:t}):(0,W.jsx)(Oa,{...i,ref:t})})},`Accordion`)),[wa,Ta]=ba(ha),[Ea,Da]=ba(ha,{collapsible:!1}),Oa=v.forwardRef(da(function(e,t){let{value:n,defaultValue:r,onValueChange:i=da(()=>{},`onValueChange`),collapsible:a=!1,...o}=e,[s,c]=Di({prop:n,defaultProp:r??``,onChange:i,caller:ha});return(0,W.jsx)(wa,{scope:e.__scopeAccordion,value:v.useMemo(()=>s?[s]:[],[s]),onItemOpen:c,onItemClose:v.useCallback(()=>a&&c(``),[a,c]),children:(0,W.jsx)(Ea,{scope:e.__scopeAccordion,collapsible:a,children:(0,W.jsx)(Ma,{...o,ref:t})})})},`AccordionImplSingle`)),ka=v.forwardRef(da(function(e,t){let{value:n,defaultValue:r,onValueChange:i=da(()=>{},`onValueChange`),...a}=e,[o,s]=Di({prop:n,defaultProp:r??[],onChange:i,caller:ha}),c=v.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=v.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,W.jsx)(wa,{scope:e.__scopeAccordion,value:o,onItemOpen:c,onItemClose:l,children:(0,W.jsx)(Ea,{scope:e.__scopeAccordion,collapsible:!0,children:(0,W.jsx)(Ma,{...a,ref:t})})})},`AccordionImplMultiple`)),[Aa,ja]=ba(ha),Ma=v.forwardRef(da(function(e,t){let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=pa.Vertical,...o}=e,s=U(v.useRef(null),t),c=va(n),l=la(i)===ma.LTR,u=K(e.onKeyDown,e=>{if(!ga.includes(e.key))return;let t=c(),n=e.target,r=t.filter(([,e])=>!e.element.disabled),i=r.findIndex(([,e])=>e.element===n),o=r.size;if(i===-1)return;e.preventDefault();let s=i,u=o-1,d=da(()=>{s=i+1,s>u&&(s=0)},`moveNext`),f=da(()=>{s=i-1,s<0&&(s=u)},`movePrev`);switch(e.key){case`Home`:s=0;break;case`End`:s=u;break;case`ArrowRight`:a===pa.Horizontal&&(l?d():f());break;case`ArrowDown`:a===pa.Vertical&&d();break;case`ArrowLeft`:a===pa.Horizontal&&(l?f():d());break;case`ArrowUp`:a===pa.Vertical&&f()}let p=s%o;r.at(p)?.element.focus()});return(0,W.jsx)(Aa,{scope:n,disabled:r,direction:i,orientation:a,children:(0,W.jsx)(_a.Slot,{scope:n,children:(0,W.jsx)(G.div,{...o,"data-orientation":a,ref:s,onKeyDown:r?void 0:u})})})},`AccordionImpl`)),Na=`AccordionItem`,[Pa,Fa]=ba(Na),Ia=v.forwardRef(da(function(e,t){let{__scopeAccordion:n,value:r,...i}=e,a=ja(Na,n),o=Ta(Na,n),s=Sa(n),c=Gi(),l=r&&o.value.includes(r)||!1,u=a.disabled||e.disabled;return(0,W.jsx)(Pa,{scope:n,open:l,disabled:u,triggerId:c,children:(0,W.jsx)(Qi,{"data-orientation":a.orientation,"data-state":Ua(l),...s,...i,ref:t,disabled:u,open:l,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})},`AccordionItem`)),La=`AccordionHeader`,Ra=v.forwardRef(da(function(e,t){let{__scopeAccordion:n,...r}=e,i=ja(ha,n),a=Fa(La,n);return(0,W.jsx)(G.h3,{"data-orientation":i.orientation,"data-state":Ua(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})},`AccordionHeader`)),za=`AccordionTrigger`,Ba=v.forwardRef(da(function(e,t){let{__scopeAccordion:n,...r}=e,i=ja(ha,n),a=Fa(za,n),o=Da(za,n),s=Sa(n);return(0,W.jsx)(_a.ItemSlot,{scope:n,children:(0,W.jsx)(ea,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})},`AccordionTrigger`)),Va=`AccordionContent`,Ha=v.forwardRef(da(function(e,t){let{__scopeAccordion:n,...r}=e,i=ja(ha,n),a=Fa(Va,n),o=Sa(n);return(0,W.jsx)(na,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})},`AccordionContent`));function Ua(e){return e?`open`:`closed`}da(Ua,`getState`);var Wa=Object.defineProperty,Ga=(e,t)=>Wa(e,`name`,{value:t,configurable:!0}),Ka=v.useInsertionEffect;function qa(e){let t=v.useRef(e);return typeof Ka==`function`?Ka(()=>{t.current=e}):Zr(()=>{t.current=e}),v.useMemo(()=>((...e)=>t.current?.(...e)),[])}Ga(qa,`useCallbackRef`);var Ja=Object.defineProperty,Ya=(e,t)=>Ja(e,`name`,{value:t,configurable:!0}),Xa=`dismissableLayer.update`,Za=`dismissableLayer.pointerDownOutside`,Qa=`dismissableLayer.focusOutside`,$a,eo=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),to=v.forwardRef(Ya(function(e,t){let{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:c,...l}=e,u=v.useContext(eo),[d,f]=v.useState(null),p=d?.ownerDocument??globalThis?.document,[,m]=v.useState({}),h=U(t,f),g=Array.from(u.layers),[_]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=_?g.indexOf(_):-1,b=d?g.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,S=b>=y,C=v.useRef(!1),w=io(e=>{a?.(e),s?.(e),e.defaultPrevented||c?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:C,dismissableSurfaces:u.dismissableSurfaces,shouldHandlePointerDownOutside:v.useCallback(e=>{if(!(e instanceof Node))return!1;let t=[...u.branches].some(t=>t.contains(e));return S&&!t},[u.branches,S])}),T=ao(e=>{if(r&&C.current)return;let t=e.target;[...u.branches].some(e=>e.contains(t))||(o?.(e),s?.(e),e.defaultPrevented||c?.())},p),E=d?b===g.length-1:!1,D=qa(e=>{e.key===`Escape`&&(i?.(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))});return v.useEffect(()=>{if(E)return p.addEventListener(`keydown`,D,{capture:!0}),()=>p.removeEventListener(`keydown`,D,{capture:!0})},[p,E,D]),v.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&($a=p.body.style.pointerEvents,p.body.style.pointerEvents=`none`),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),oo(),()=>{n&&(u.layersWithOutsidePointerEventsDisabled.delete(d),u.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=$a))}},[d,p,n,u]),v.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),oo())},[d,u]),v.useEffect(()=>{let e=Ya(()=>m({}),`handleUpdate`);return document.addEventListener(Xa,e),()=>document.removeEventListener(Xa,e)},[]),(0,W.jsx)(G.div,{...l,ref:h,style:{pointerEvents:x?S?`auto`:`none`:void 0,...e.style},onFocusCapture:K(e.onFocusCapture,T.onFocusCapture),onBlurCapture:K(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:K(e.onPointerDownCapture,w.onPointerDownCapture)})},`DismissableLayer`));function no(){let e=v.useContext(eo),[t,n]=v.useState(null);return v.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}Ya(no,`useDismissableLayerSurface`);var ro=Ya(()=>!0,`IS_TRUE`);function io(e,t){let{ownerDocument:n=globalThis?.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:i,dismissableSurfaces:a,shouldHandlePointerDownOutside:o=ro}=t,s=qa(e),c=v.useRef(!1),l=v.useRef(!1),u=v.useRef(new Map),d=v.useRef(()=>{});return v.useEffect(()=>{function e(){l.current=!1,i.current=!1,u.current.clear()}Ya(e,`resetOutsideInteraction`);function t(){return Array.from(u.current.values()).some(Boolean)}Ya(t,`isOutsideInteractionIntercepted`);function f(e){if(!l.current)return;let t=e.target;t instanceof Node&&[...a].some(e=>e.contains(t))||u.current.set(e.type,!0),e.type===`click`&&window.setTimeout(()=>{l.current&&d.current()},0)}Ya(f,`handleInteractionCapture`);function p(e){l.current&&u.current.set(e.type,!1)}Ya(p,`handleInteractionBubble`);let m=Ya(a=>{if(a.target&&!c.current){let f=function(){n.removeEventListener(`click`,d.current);let r=t();e(),r||so(Za,s,p,{discrete:!0})};if(Ya(f,`handleAndDispatchPointerDownOutsideEvent`),!o(a.target)){n.removeEventListener(`click`,d.current),e(),c.current=!1;return}let p={originalEvent:a};l.current=!0,i.current=r&&a.button===0,u.current.clear(),!r||a.button!==0?f():(n.removeEventListener(`click`,d.current),d.current=f,n.addEventListener(`click`,d.current,{once:!0}))}else n.removeEventListener(`click`,d.current),e();c.current=!1},`handlePointerDown`),h=[`pointerup`,`mousedown`,`mouseup`,`touchstart`,`touchend`,`click`];for(let e of h)n.addEventListener(e,f,!0),n.addEventListener(e,p);let g=window.setTimeout(()=>{n.addEventListener(`pointerdown`,m)},0);return()=>{window.clearTimeout(g),n.removeEventListener(`pointerdown`,m),n.removeEventListener(`click`,d.current);for(let e of h)n.removeEventListener(e,f,!0),n.removeEventListener(e,p)}},[n,s,r,i,a,o]),{onPointerDownCapture:Ya(()=>c.current=!0,`onPointerDownCapture`)}}Ya(io,`usePointerDownOutside`);function ao(e,t=globalThis?.document){let n=qa(e),r=v.useRef(!1);return v.useEffect(()=>{let e=Ya(e=>{e.target&&!r.current&&so(Qa,n,{originalEvent:e},{discrete:!1})},`handleFocus`);return t.addEventListener(`focusin`,e),()=>t.removeEventListener(`focusin`,e)},[t,n]),{onFocusCapture:Ya(()=>r.current=!0,`onFocusCapture`),onBlurCapture:Ya(()=>r.current=!1,`onBlurCapture`)}}Ya(ao,`useFocusOutside`);function oo(){let e=new CustomEvent(Xa);document.dispatchEvent(e)}Ya(oo,`dispatchUpdate`);function so(e,t,n,{discrete:r}){let i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Vr(i,a):i.dispatchEvent(a)}Ya(so,`handleAndDispatchCustomEvent`);var co=Object.defineProperty,lo=(e,t)=>co(e,`name`,{value:t,configurable:!0}),uo=`focusScope.autoFocusOnMount`,fo=`focusScope.autoFocusOnUnmount`,po={bubbles:!1,cancelable:!0},mo=v.forwardRef(lo(function(e,t){let{loop:n=!1,trapped:r=!1,branches:i,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[c,l]=v.useState(null),u=qa(a),d=qa(o),f=v.useRef(null),p=U(t,l),m=v.useRef(i);v.useEffect(()=>{m.current=i});let h=v.useCallback(e=>e?c?.contains(e)?!0:!!m.current?.some(t=>t.contains(e)):!1,[c]),g=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(r){let e=function(e){if(g.paused||!c)return;let t=e.target;h(t)?f.current=t:To(f.current,{select:!0})},t=function(e){if(g.paused||!c)return;let t=e.relatedTarget;t!==null&&(h(t)||To(f.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&To(c)};lo(e,`handleFocusIn`),lo(t,`handleFocusOut`),lo(n,`handleMutations`),document.addEventListener(`focusin`,e),document.addEventListener(`focusout`,t);let r=new MutationObserver(n);return c&&r.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener(`focusin`,e),document.removeEventListener(`focusout`,t),r.disconnect()}}},[r,c,g.paused,h]),v.useEffect(()=>{if(c){Eo.add(g);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(uo,po);c.addEventListener(uo,u),c.dispatchEvent(t),t.defaultPrevented||(yo(ko(xo(c)),{select:!0}),document.activeElement===e&&To(c))}return()=>{c.removeEventListener(uo,u);let t=c.ownerDocument,n=CustomEvent;setTimeout(()=>{let r=new n(fo,po);c.addEventListener(fo,d),c.dispatchEvent(r),r.defaultPrevented||To(e??t.body,{select:!0}),c.removeEventListener(fo,d),Eo.remove(g)},0)}}},[c,u,d,g]);let _=v.useCallback(e=>{if(!n&&!r||g.paused)return;let t=e.key===`Tab`&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){let t=e.currentTarget,[r,a]=bo(t);r&&a?!e.shiftKey&&i===a?(e.preventDefault(),n&&To(r,{select:!0})):e.shiftKey&&i===r&&(e.preventDefault(),n&&To(a,{select:!0})):i===t&&e.preventDefault()}},[n,r,g.paused]);return(0,W.jsx)(G.div,{tabIndex:-1,...s,ref:p,onKeyDown:_})},`FocusScope`)),ho=v.createContext(null);function go({registry:e,children:t}){return e?(0,W.jsx)(ho.Provider,{value:e,children:t}):t}lo(go,`FocusScopeBranchProvider`);function _o(){let[e,t]=v.useState([]);return{nodes:e,registry:v.useMemo(()=>({add:lo(e=>t(t=>t.includes(e)?t:[...t,e]),`add`),remove:lo(e=>t(t=>t.filter(t=>t!==e)),`remove`)}),[])}}lo(_o,`useFocusScopeBranchRegistry`);function vo(e){let t=v.useContext(ho);v.useEffect(()=>{if(e&&t)return t.add(e),()=>t.remove(e)},[e,t])}lo(vo,`useFocusScopeBranch`);function yo(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(To(r,{select:t}),document.activeElement!==n)return}lo(yo,`focusFirst`);function bo(e){let t=xo(e);return[So(t,e),So(t.reverse(),e)]}lo(bo,`getTabbableEdges`);function xo(e){let t=[],n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:lo(e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},`acceptNode`)});for(;n.nextNode();)t.push(n.currentNode);return t}lo(xo,`getTabbableCandidates`);function So(e,t){let n=typeof t.checkVisibility==`function`&&t.checkVisibility({checkVisibilityCSS:!0});for(let r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):Co(r,{upTo:t})))return r}lo(So,`findVisible`);function Co(e,{upTo:t}){if(getComputedStyle(e).visibility===`hidden`)return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display===`none`)return!0;e=e.parentElement}return!1}lo(Co,`isHidden`);function wo(e){return e.tagName===`INPUT`&&typeof e.select==`function`}lo(wo,`isSelectableInput`);function To(e,{select:t=!1}={}){if(e&&e.focus){let n=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==n&&wo(e)&&t&&e.select()}}lo(To,`focus`);var Eo=Do();function Do(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),e=Oo(e,t),e.unshift(t)},remove(t){e=Oo(e,t),e[0]?.resume()}}}lo(Do,`createFocusScopesStack`);function Oo(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}lo(Oo,`arrayRemove`);function ko(e){return e.filter(e=>e.tagName!==`A`)}lo(ko,`removeLinks`);var Ao=Object.defineProperty,jo=v.forwardRef(((e,t)=>Ao(e,`name`,{value:t,configurable:!0}))(function(e,t){let{container:n,...r}=e,[i,a]=v.useState(!1);Zr(()=>a(!0),[]);let o=n||i&&globalThis?.document?.body;return o?ot.createPortal((0,W.jsx)(G.div,{...r,ref:t}),o):null},`Portal`)),Mo=Object.defineProperty,No=(e,t)=>Mo(e,`name`,{value:t,configurable:!0}),Po=0,Fo=null;function J(e){return Io(),e.children}No(J,`FocusGuards`);function Io(){v.useEffect(()=>{Fo||={start:Lo(),end:Lo()};let{start:e,end:t}=Fo;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement(`afterbegin`,e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement(`beforeend`,t),Po++,()=>{Po===1&&(Fo?.start.remove(),Fo?.end.remove(),Fo=null),Po=Math.max(0,Po-1)}},[])}No(Io,`useFocusGuards`);function Lo(){let e=document.createElement(`span`);return e.setAttribute(`data-radix-focus-guard`,``),e.tabIndex=0,e.style.outline=`none`,e.style.opacity=`0`,e.style.position=`fixed`,e.style.pointerEvents=`none`,e}No(Lo,`createFocusGuard`);var Ro=function(){return Ro=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Ro.apply(this,arguments)};function zo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Bo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Vo=`right-scroll-bar-position`,Ho=`width-before-scroll-bar`,Uo=`with-scroll-bars-hidden`,Wo=`--removed-body-scroll-bar-size`;function Go(e,t){return typeof e==`function`?e(t):e&&(e.current=t),e}function Ko(e,t){var n=(0,v.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}})[0];return n.callback=t,n.facade}var qo=typeof window<`u`?v.useLayoutEffect:v.useEffect,Jo=new WeakMap;function Yo(e,t){var n=Ko(t||null,function(t){return e.forEach(function(e){return Go(e,t)})});return qo(function(){var t=Jo.get(n);if(t){var r=new Set(t),i=new Set(e),a=n.current;r.forEach(function(e){i.has(e)||Go(e,null)}),i.forEach(function(e){r.has(e)||Go(e,a)})}Jo.set(n,e)},[e]),n}function Xo(e){return e}function Zo(e,t){t===void 0&&(t=Xo);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var i=t(e,r);return n.push(i),function(){n=n.filter(function(e){return e!==i})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var i=n;n=[],i.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(a)};o(),n={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),n}}}}}function Qo(e){e===void 0&&(e={});var t=Zo(null);return t.options=Ro({async:!0,ssr:!1},e),t}var $o=function(e){var t=e.sideCar,n=zo(e,[`sideCar`]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error(`Sidecar medium not found`);return v.createElement(r,Ro({},n))};$o.isSideCarExport=!0;function es(e,t){return e.useMedium(t),$o}var ts=Qo(),ns=function(){},rs=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:ns,onWheelCapture:ns,onTouchMoveCapture:ns}),i=r[0],a=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,m=e.noIsolation,h=e.inert,g=e.allowPinchZoom,_=e.as,y=_===void 0?`div`:_,b=e.gapMode,x=zo(e,[`forwardProps`,`children`,`className`,`removeScrollBar`,`enabled`,`shards`,`sideCar`,`noRelative`,`noIsolation`,`inert`,`allowPinchZoom`,`as`,`gapMode`]),S=f,C=Yo([n,t]),w=Ro(Ro({},x),i);return v.createElement(v.Fragment,null,u&&v.createElement(S,{sideCar:ts,removeScrollBar:l,shards:d,noRelative:p,noIsolation:m,inert:h,setCallbacks:a,allowPinchZoom:!!g,lockRef:n,gapMode:b}),o?v.cloneElement(v.Children.only(s),Ro(Ro({},w),{ref:C})):v.createElement(y,Ro({},w,{className:c,ref:C}),s))});rs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},rs.classNames={fullWidth:Ho,zeroRight:Vo};var is=function(){if(typeof __webpack_nonce__<`u`)return __webpack_nonce__};function as(){if(!document)return null;var e=document.createElement(`style`);e.type=`text/css`;var t=is();return t&&e.setAttribute(`nonce`,t),e}function os(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ss(e){(document.head||document.getElementsByTagName(`head`)[0]).appendChild(e)}var cs=function(){var e=0,t=null;return{add:function(n){e==0&&(t=as())&&(os(t,n),ss(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ls=function(){var e=cs();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},us=function(){var e=ls();return function(t){var n=t.styles,r=t.dynamic;return e(n,r),null}},ds={left:0,top:0,right:0,gap:0},fs=function(e){return parseInt(e||``,10)||0},ps=function(e){var t=window.getComputedStyle(document.body),n=t[e===`padding`?`paddingLeft`:`marginLeft`],r=t[e===`padding`?`paddingTop`:`marginTop`],i=t[e===`padding`?`paddingRight`:`marginRight`];return[fs(n),fs(r),fs(i)]},ms=function(e){if(e===void 0&&(e=`margin`),typeof window>`u`)return ds;var t=ps(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},hs=us(),gs=`data-scroll-locked`,_s=function(e,t,n,r){var i=e.left,a=e.top,o=e.right,s=e.gap;return n===void 0&&(n=`margin`),`
  .${Uo} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${gs}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[t&&`position: relative ${r};`,n===`margin`&&`
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,n===`padding`&&`padding-right: ${s}px ${r};`].filter(Boolean).join(``)}
  }

  .${Vo} {
    right: ${s}px ${r};
  }

  .${Ho} {
    margin-right: ${s}px ${r};
  }

  .${Vo} .${Vo} {
    right: 0 ${r};
  }

  .${Ho} .${Ho} {
    margin-right: 0 ${r};
  }

  body[${gs}] {
    ${Wo}: ${s}px;
  }
`},vs=function(){var e=parseInt(document.body.getAttribute(`data-scroll-locked`)||`0`,10);return isFinite(e)?e:0},ys=function(){v.useEffect(function(){return document.body.setAttribute(gs,(vs()+1).toString()),function(){var e=vs()-1;e<=0?document.body.removeAttribute(gs):document.body.setAttribute(gs,e.toString())}},[])},bs=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?`margin`:r;ys();var a=v.useMemo(function(){return ms(i)},[i]);return v.createElement(hs,{styles:_s(a,!t,i,n?``:`!important`)})},xs=!1;if(typeof window<`u`)try{var Ss=Object.defineProperty({},"passive",{get:function(){return xs=!0,!0}});window.addEventListener(`test`,Ss,Ss),window.removeEventListener(`test`,Ss,Ss)}catch{xs=!1}var Cs=xs?{passive:!1}:!1,ws=function(e){return e.tagName===`TEXTAREA`},Ts=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!==`hidden`&&!(n.overflowY===n.overflowX&&!ws(e)&&n[t]===`visible`)},Es=function(e){return Ts(e,`overflowY`)},Ds=function(e){return Ts(e,`overflowX`)},Os=function(e,t){var n=t.ownerDocument,r=t;do{if(typeof ShadowRoot<`u`&&r instanceof ShadowRoot&&(r=r.host),js(e,r)){var i=Ms(e,r);if(i[1]>i[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ks=function(e){return[e.scrollTop,e.scrollHeight,e.clientHeight]},As=function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]},js=function(e,t){return e===`v`?Es(t):Ds(t)},Ms=function(e,t){return e===`v`?ks(t):As(t)},Ns=function(e,t){return e===`h`&&t===`rtl`?-1:1},Ps=function(e,t,n,r,i){var a=Ns(e,window.getComputedStyle(t).direction),o=a*r,s=n.target,c=t.contains(s),l=!1,u=o>0,d=0,f=0;do{if(!s)break;var p=Ms(e,s),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&js(e,s)&&(d+=h,f+=m);var g=s.parentNode;s=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(i&&Math.abs(d)<1||!i&&o>d)||!u&&(i&&Math.abs(f)<1||!i&&-o>f))&&(l=!0),l},Fs=function(e){return`changedTouches`in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Is=function(e){return[e.deltaX,e.deltaY]},Ls=function(e){return e&&`current`in e?e.current:e},Rs=function(e,t){return e[0]===t[0]&&e[1]===t[1]},zs=function(e){return`
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`},Bs=0,Vs=[];function Hs(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),i=v.useState(Bs++)[0],a=v.useState(us)[0],o=v.useRef(e);v.useEffect(function(){o.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add(`block-interactivity-${i}`);var t=Bo([e.lockRef.current],(e.shards||[]).map(Ls),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add(`allow-interactivity-${i}`)}),function(){document.body.classList.remove(`block-interactivity-${i}`),t.forEach(function(e){return e.classList.remove(`allow-interactivity-${i}`)})}}},[e.inert,e.lockRef.current,e.shards]);var s=v.useCallback(function(e,t){if(`touches`in e&&e.touches.length===2||e.type===`wheel`&&e.ctrlKey)return!o.current.allowPinchZoom;var i=Fs(e),a=n.current,s=`deltaX`in e?e.deltaX:a[0]-i[0],c=`deltaY`in e?e.deltaY:a[1]-i[1],l,u=e.target,d=Math.abs(s)>Math.abs(c)?`h`:`v`;if(`touches`in e&&d===`h`&&u.type===`range`)return!1;var f=window.getSelection(),p=f&&f.anchorNode;if(p&&(p===u||p.contains(u)))return!1;var m=Os(d,u);if(!m)return!0;if(m?l=d:(l=d===`v`?`h`:`v`,m=Os(d,u)),!m)return!1;if(!r.current&&`changedTouches`in e&&(s||c)&&(r.current=l),!l)return!0;var h=r.current||l;return Ps(h,t,e,h===`h`?s:c,!0)},[]),c=v.useCallback(function(e){var n=e;if(Vs.length&&Vs[Vs.length-1]===a){var r=`deltaY`in n?Is(n):Fs(n),i=t.current.filter(function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&Rs(e.delta,r)})[0];if(i&&i.should)n.cancelable&&n.preventDefault();else if(!i){var c=(o.current.shards||[]).map(Ls).filter(Boolean).filter(function(e){return e.contains(n.target)});(c.length>0?s(n,c[0]):!o.current.noIsolation)&&n.cancelable&&n.preventDefault()}}},[]),l=v.useCallback(function(e,n,r,i){var a={name:e,delta:n,target:r,should:i,shadowParent:Us(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),u=v.useCallback(function(e){n.current=Fs(e),r.current=void 0},[]),d=v.useCallback(function(t){l(t.type,Is(t),t.target,s(t,e.lockRef.current))},[]),f=v.useCallback(function(t){l(t.type,Fs(t),t.target,s(t,e.lockRef.current))},[]);v.useEffect(function(){return Vs.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener(`wheel`,c,Cs),document.addEventListener(`touchmove`,c,Cs),document.addEventListener(`touchstart`,u,Cs),function(){Vs=Vs.filter(function(e){return e!==a}),document.removeEventListener(`wheel`,c,Cs),document.removeEventListener(`touchmove`,c,Cs),document.removeEventListener(`touchstart`,u,Cs)}},[]);var p=e.removeScrollBar,m=e.inert;return v.createElement(v.Fragment,null,m?v.createElement(a,{styles:zs(i)}):null,p?v.createElement(bs,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Us(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Ws=es(ts,Hs),Gs=v.forwardRef(function(e,t){return v.createElement(rs,Ro({},e,{ref:t,sideCar:Ws}))});Gs.classNames=rs.classNames;var Ks=function(e){return typeof document>`u`?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},qs=new WeakMap,Js=new WeakMap,Ys={},Xs=0,Zs=function(e){return e&&(e.host||Zs(e.parentNode))},Qs=function(e,t){return t.map(function(t){if(e.contains(t))return t;var n=Zs(t);return n&&e.contains(n)?n:(console.error(`aria-hidden`,t,`in not contained inside`,e,`. Doing nothing`),null)}).filter(function(e){return!!e})},$s=function(e,t,n,r){var i=Qs(t,Array.isArray(e)?e:[e]);Ys[n]||(Ys[n]=new WeakMap);var a=Ys[n],o=[],s=new Set,c=new Set(i),l=function(e){e&&!s.has(e)&&(s.add(e),l(e.parentNode))};i.forEach(l);var u=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(s.has(e))u(e);else try{var t=e.getAttribute(r),i=t!==null&&t!==`false`,c=(qs.get(e)||0)+1,l=(a.get(e)||0)+1;qs.set(e,c),a.set(e,l),o.push(e),c===1&&i&&Js.set(e,!0),l===1&&e.setAttribute(n,`true`),i||e.setAttribute(r,`true`)}catch(t){console.error(`aria-hidden: cannot operate on `,e,t)}})};return u(t),s.clear(),Xs++,function(){o.forEach(function(e){var t=qs.get(e)-1,i=a.get(e)-1;qs.set(e,t),a.set(e,i),t||(Js.has(e)||e.removeAttribute(r),Js.delete(e)),i||e.removeAttribute(n)}),Xs--,Xs||(qs=new WeakMap,qs=new WeakMap,Js=new WeakMap,Ys={})}},ec=function(e,t,n){n===void 0&&(n=`data-aria-hidden`);var r=Array.from(Array.isArray(e)?e:[e]),i=t||Ks(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll(`[aria-live], script`))),$s(r,i,n,`aria-hidden`)):function(){return null}},tc=Object.defineProperty,nc=(e,t)=>tc(e,`name`,{value:t,configurable:!0}),rc=`Dialog`,[ic,ac]=Yr(rc),[oc,sc]=ic(rc),cc=nc(e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!0}=e,s=v.useRef(null),c=v.useRef(null),{nodes:l,registry:u}=_o(),[d,f]=Di({prop:r,defaultProp:i??!1,onChange:a,caller:rc}),[p,m]=v.useState(0),[h,g]=v.useState(0);return(0,W.jsx)(oc,{scope:t,triggerRef:s,contentRef:c,contentId:Gi(),titleId:Gi(),descriptionId:Gi(),titlePresent:p>0,descriptionPresent:h>0,setTitleCount:m,setDescriptionCount:g,open:d,onOpenChange:f,onOpenToggle:v.useCallback(()=>f(e=>!e),[f]),modal:o,branchNodes:l,branchRegistry:u,children:n})},`Dialog`),lc=`DialogTrigger`,uc=v.forwardRef(nc(function(e,t){let{__scopeDialog:n,...r}=e,i=sc(lc,n),a=U(t,i.triggerRef);return(0,W.jsx)(G.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":kc(i.open),...r,ref:a,onClick:K(e.onClick,i.onOpenToggle)})},`DialogTrigger`)),dc=`DialogPortal`,[fc,pc]=ic(dc,{forceMount:void 0}),mc=nc(e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=sc(dc,t);return(0,W.jsx)(fc,{scope:t,forceMount:n,children:v.Children.map(r,e=>(0,W.jsx)(Fi,{present:n||a.open,children:(0,W.jsx)(jo,{asChild:!0,container:i,children:e})}))})},`DialogPortal`),hc=`DialogOverlay`,gc=v.forwardRef(nc(function(e,t){let n=pc(hc,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=sc(hc,e.__scopeDialog);return a.modal?(0,W.jsx)(Fi,{present:r||a.open,children:(0,W.jsx)(vc,{...i,ref:t})}):null},`DialogOverlay`)),_c=Sr(`DialogOverlay.RemoveScroll`),vc=v.forwardRef(nc(function(e,t){let{__scopeDialog:n,...r}=e,i=sc(hc,n),a=U(t,no());return(0,W.jsx)(Gs,{as:_c,allowPinchZoom:!0,shards:v.useMemo(()=>[i.contentRef,...i.branchNodes.map(e=>({current:e}))],[i.contentRef,i.branchNodes]),children:(0,W.jsx)(G.div,{"data-state":kc(i.open),...r,ref:a,style:{pointerEvents:`auto`,...r.style}})})},`DialogOverlayImpl`)),yc=`DialogContent`,bc=v.forwardRef(nc(function(e,t){let n=pc(yc,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=sc(yc,e.__scopeDialog);return(0,W.jsx)(Fi,{present:r||a.open,children:a.modal?(0,W.jsx)(xc,{...i,ref:t}):(0,W.jsx)(Sc,{...i,ref:t})})},`DialogContent`)),xc=v.forwardRef(nc(function(e,t){let n=sc(yc,e.__scopeDialog),r=v.useRef(null),i=U(t,n.contentRef,r);return v.useEffect(()=>{let e=r.current;if(e)return ec(e)},[]),(0,W.jsx)(Cc,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:K(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:K(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:K(e.onFocusOutside,e=>e.preventDefault())})},`DialogContentModal`)),Sc=v.forwardRef(nc(function(e,t){let n=sc(yc,e.__scopeDialog),r=v.useRef(!1),i=v.useRef(!1);return(0,W.jsx)(Cc,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`DialogContentNonModal`)),Cc=v.forwardRef(nc(function(e,t){let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,"aria-describedby":o,children:s,...c}=e,l=sc(yc,n);return Io(),(0,W.jsx)(go,{registry:l.branchRegistry,children:(0,W.jsx)(mo,{asChild:!0,loop:!0,trapped:r,branches:l.branchNodes,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,W.jsx)(to,{role:`dialog`,id:l.contentId,"aria-labelledby":l.titlePresent?l.titleId:void 0,"aria-describedby":l.descriptionPresent?Oc(o,l.descriptionId):o,"data-state":kc(l.open),...c,ref:t,deferPointerDownOutside:!0,onDismiss:()=>l.onOpenChange(!1),children:s})})})},`DialogContentImpl`)),wc=v.forwardRef(nc(function(e,t){let{__scopeDialog:n,...r}=e,i=sc(`DialogTitle`,n),{setTitleCount:a}=i;return Zr(()=>(a(e=>e+1),()=>a(e=>e-1)),[a]),(0,W.jsx)(G.h2,{id:i.titleId,...r,ref:t})},`DialogTitle`)),Tc=v.forwardRef(nc(function(e,t){let{__scopeDialog:n,...r}=e,i=sc(`DialogDescription`,n),{setDescriptionCount:a}=i;return Zr(()=>(a(e=>e+1),()=>a(e=>e-1)),[a]),(0,W.jsx)(G.p,{id:i.descriptionId,...r,ref:t})},`DialogDescription`)),Ec=`DialogClose`,Dc=v.forwardRef(nc(function(e,t){let{__scopeDialog:n,...r}=e,i=sc(Ec,n);return(0,W.jsx)(G.button,{type:`button`,...r,ref:t,onClick:K(e.onClick,()=>i.onOpenChange(!1))})},`DialogClose`));function Oc(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}nc(Oc,`concatAriaDescribedby`);function kc(e){return e?`open`:`closed`}nc(kc,`getState`);var Ac=Object.defineProperty,jc=(e,t)=>Ac(e,`name`,{value:t,configurable:!0}),[Mc,Nc]=Yr(`AlertDialog`,[ac]),Pc=ac(),Fc=jc(e=>{let{__scopeAlertDialog:t,...n}=e,r=Pc(t);return(0,W.jsx)(cc,{...r,...n,modal:!0})},`AlertDialog`),Ic=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Pc(n);return(0,W.jsx)(uc,{...i,...r,ref:t})},`AlertDialogTrigger`)),Lc=jc(e=>{let{__scopeAlertDialog:t,...n}=e,r=Pc(t);return(0,W.jsx)(mc,{...r,...n})},`AlertDialogPortal`),Rc=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Pc(n);return(0,W.jsx)(gc,{...i,...r,ref:t})},`AlertDialogOverlay`)),[zc,Bc]=Mc(`AlertDialogContent`),Vc=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,children:r,...i}=e,a=Pc(n),o=U(t,v.useRef(null)),s=v.useRef(null);return(0,W.jsx)(zc,{scope:n,cancelRef:s,children:(0,W.jsx)(bc,{role:`alertdialog`,...a,...i,ref:o,onOpenAutoFocus:K(i.onOpenAutoFocus,e=>{e.preventDefault(),s.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:r})})},`AlertDialogContent`)),Hc=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Pc(n);return(0,W.jsx)(wc,{...i,...r,ref:t})},`AlertDialogTitle`)),Uc=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Pc(n);return(0,W.jsx)(Tc,{...i,...r,ref:t})},`AlertDialogDescription`)),Wc=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Pc(n);return(0,W.jsx)(Dc,{...i,...r,ref:t})},`AlertDialogAction`)),Gc=`AlertDialogCancel`,Kc=v.forwardRef(jc(function(e,t){let{__scopeAlertDialog:n,...r}=e,{cancelRef:i}=Bc(Gc,n),a=Pc(n),o=U(t,i);return(0,W.jsx)(Dc,{...a,...r,ref:o})},`AlertDialogCancel`)),qc=Object.defineProperty,Jc=v.forwardRef(((e,t)=>qc(e,`name`,{value:t,configurable:!0}))(function(e,t){let{ratio:n=1,style:r,...i}=e;return(0,W.jsx)(`div`,{style:{position:`relative`,width:`100%`,paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":``,children:(0,W.jsx)(G.div,{...i,ref:t,style:{...r,position:`absolute`,top:0,right:0,bottom:0,left:0}})})},`AspectRatio`)),Yc=Object.defineProperty,Xc=(e,t)=>Yc(e,`name`,{value:t,configurable:!0}),Zc=`Avatar`,[Qc,$c]=Yr(Zc),el={Idle:`idle`,Loading:`loading`,Loaded:`loaded`,Error:`error`},tl=[0,()=>void 0],[nl,rl]=Qc(Zc),il=v.forwardRef(Xc(function(e,t){let{__scopeAvatar:n,...r}=e,[i,a]=v.useState(el.Idle),[o,s]=ll();return(0,W.jsx)(nl,{scope:n,imageLoadingStatus:i,setImageLoadingStatus:a,imageCount:o,setImageCount:s,children:(0,W.jsx)(G.span,{...r,ref:t})})},`Avatar`)),al=`AvatarFallback`,ol=v.forwardRef(Xc(function(e,t){let{__scopeAvatar:n,delayMs:r,...i}=e,a=rl(al,n),[o,s]=v.useState(r===void 0);return v.useEffect(()=>{if(r!==void 0){let e=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(e)}},[r]),o&&a.imageLoadingStatus!==el.Loaded?(0,W.jsx)(G.span,{...i,ref:t}):null},`AvatarFallback`));function sl(e,{loadingStatus:t,setLoadingStatus:n,referrerPolicy:r,crossOrigin:i}){return Zr(()=>{if(!e){n(el.Error);return}let t=new window.Image,a=Xc(e=>{let t=e.currentTarget;n(cl(t))},`handleLoad`),o=Xc(()=>n(el.Error),`handleError`);return t.addEventListener(`load`,a),t.addEventListener(`error`,o),r&&(t.referrerPolicy=r),t.crossOrigin=i??null,t.src=e,n(cl(t)),()=>{t.removeEventListener(`load`,a),t.removeEventListener(`error`,o),n(el.Idle)}},[e,i,r,n]),t}Xc(sl,`useImageLoadingStatus`);function cl(e){return e.complete?e.naturalWidth>0?el.Loaded:el.Error:el.Loading}Xc(cl,`getImageLoadingStatus`);function ll(){return tl}Xc(ll,`useImageCount`);function ul(e){}Xc(ul,`useUpdateImageCount`);var dl=Object.defineProperty,fl=(e,t)=>dl(e,`name`,{value:t,configurable:!0});function pl(e){let[t,n]=v.useState(void 0);return Zr(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=0,r=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let i=r[0];window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>{let t,r;if(`borderBoxSize`in i){let e=i.borderBoxSize,n=Array.isArray(e)?e[0]:e;t=n.inlineSize,r=n.blockSize}else t=e.offsetWidth,r=e.offsetHeight;n({width:t,height:r})})});return r.observe(e,{box:`border-box`}),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}n(void 0)},[e]),t}fl(pl,`useSize`);var ml=Object.defineProperty,hl=(e,t)=>ml(e,`name`,{value:t,configurable:!0}),gl=`Checkbox`,[_l,vl]=Yr(gl),[yl,bl]=_l(gl);function xl(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:u=`on`,internal_do_not_use_render:d}=e,[f,p]=Di({prop:n,defaultProp:i??!1,onChange:c,caller:gl}),[m,h]=v.useState(null),[g,_]=v.useState(null),[y,b]=v.useState(null),x=!m||!!o||!!m.closest(`form`),S={checked:f,disabled:a,setChecked:p,control:m,setControl:h,name:s,form:o,value:u,userClick:y,onUserClick:b,required:l,defaultChecked:!Al(i)&&i,isFormControl:x,bubbleInput:g,setBubbleInput:_};return(0,W.jsx)(yl,{scope:t,...S,children:kl(d)?d(S):r})}hl(xl,`CheckboxProvider`);var Sl=`CheckboxTrigger`,Cl=v.forwardRef(hl(function({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},i){let{control:a,value:o,disabled:s,checked:c,required:l,setControl:u,setChecked:d,onUserClick:f,isFormControl:p,bubbleInput:m}=bl(Sl,e),h=U(i,u),g=v.useRef(c);return v.useEffect(()=>{let e=a?.form;if(e){let t=hl(()=>d(g.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[a,d]),(0,W.jsx)(G.button,{type:`button`,role:`checkbox`,"aria-checked":Al(c)?`mixed`:c,"aria-required":l,"data-state":jl(c),"data-disabled":s?``:void 0,disabled:s,value:o,...r,ref:h,onKeyDown:K(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:K(n,e=>{let t=e.isPropagationStopped();f({requestedChecked:Al(c)?!0:!c,hasConsumerStoppedPropagation:t}),d(e=>Al(e)?!0:!e),m&&p&&(t||e.stopPropagation())})})},`CheckboxTrigger`)),wl=v.forwardRef(hl(function(e,t){let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,W.jsx)(xl,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Cl,{...d,ref:t,__scopeCheckbox:n}),e&&(0,W.jsx)(Ol,{__scopeCheckbox:n})]})})},`Checkbox`)),Tl=`CheckboxIndicator`,El=v.forwardRef(hl(function(e,t){let{__scopeCheckbox:n,forceMount:r,...i}=e,a=bl(Tl,n);return(0,W.jsx)(Fi,{present:r||Al(a.checked)||a.checked===!0,children:(0,W.jsx)(G.span,{"data-state":jl(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})},`CheckboxIndicator`)),Dl=`CheckboxBubbleInput`,Ol=v.forwardRef(hl(function({__scopeCheckbox:e,onClick:t,...n},r){let{control:i,userClick:a,checked:o,defaultChecked:s,required:c,disabled:l,name:u,value:d,form:f,bubbleInput:p,setBubbleInput:m}=bl(Dl,e),h=U(r,m),g=pl(i),_=v.useRef(!1),y=v.useRef(o),b=v.useRef(a),x=v.useRef(null);v.useEffect(()=>{let e=p;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=y.current!==o;y.current=o;let i=a!==null&&a!==b.current;if(b.current=a,i)x.current=r?null:a,r&&(e.indeterminate=Al(o),n.call(e,!Al(o)&&o)),e.dispatchEvent(new Event(`click`,{bubbles:!a.hasConsumerStoppedPropagation}));else if(r){let t=x.current;x.current=null;let r=t?.requestedChecked===o;_.current=!0,e.indeterminate=Al(o),n.call(e,!Al(o)&&o),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),_.current=!1}},[p,o,a]);let S=v.useRef(!Al(o)&&o);return(0,W.jsx)(G.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:s??S.current,required:c,disabled:l,name:u,value:d,form:f,...n,tabIndex:-1,ref:h,onClick:K(t,e=>{_.current&&e.stopPropagation()}),style:{...n.style,...g,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`CheckboxBubbleInput`));function kl(e){return typeof e==`function`}hl(kl,`isFunction`);function Al(e){return e===`indeterminate`}hl(Al,`isIndeterminate`);function jl(e){return Al(e)?`indeterminate`:e?`checked`:`unchecked`}hl(jl,`getState`);var Ml=[`top`,`right`,`bottom`,`left`],Nl=Math.min,Pl=Math.max,Fl=Math.round,Il=Math.floor,Ll=e=>({x:e,y:e}),Rl={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function zl(e,t,n){return Pl(e,Nl(t,n))}function Bl(e,t){return typeof e==`function`?e(t):e}function Vl(e){return e.split(`-`)[0]}function Hl(e){return e.split(`-`)[1]}function Ul(e){return e===`x`?`y`:`x`}function Wl(e){return e===`y`?`height`:`width`}function Gl(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Kl(e){return Ul(Gl(e))}function ql(e,t,n){n===void 0&&(n=!1);let r=Hl(e),i=Kl(e),a=Wl(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=nu(o)),[o,nu(o)]}function Jl(e){let t=nu(e);return[Yl(e),t,Yl(t)]}function Yl(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Xl=[`left`,`right`],Zl=[`right`,`left`],Ql=[`top`,`bottom`],$l=[`bottom`,`top`];function eu(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Zl:Xl:t?Xl:Zl;case`left`:case`right`:return t?Ql:$l;default:return[]}}function tu(e,t,n,r){let i=Hl(e),a=eu(Vl(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Yl)))),a}function nu(e){let t=Vl(e);return Rl[t]+e.slice(t.length)}function ru(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function iu(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ru(e)}function au(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ou(e,t,n){let{reference:r,floating:i}=e,a=Gl(t),o=Kl(t),s=Wl(o),c=Vl(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Hl(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function su(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Bl(t,e),p=iu(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=au(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=au(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var cu=50,lu=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:su},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ou(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<cu&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ou(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},uu=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Bl(e,t)||{};if(l==null)return{};let d=iu(u),f={x:n,y:r},p=Kl(i),m=Wl(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=Nl(d[_],T),D=Nl(d[v],T),O=C-h[m]-D,k=C/2-h[m]/2+w,A=zl(E,k,O),j=!c.arrow&&Hl(i)!=null&&k!==A&&a.reference[m]/2-(k<E?E:D)-h[m]/2<0,M=j?k<E?k-E:k-O:0;return{[p]:f[p]+M,data:{[p]:A,centerOffset:k-A-M,...j&&{alignmentOffset:M}},reset:j}}}),du=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Bl(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Vl(r),_=Gl(o),v=Vl(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[nu(o)]:Jl(o)),x=p!==`none`;!d&&x&&b.push(...tu(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=ql(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Gl(t)||T.every(e=>Gl(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Gl(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}};function fu(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function pu(e){return Ml.some(t=>e[t]>=0)}var mu=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=Bl(e,t);switch(i){case`referenceHidden`:{let e=fu(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:pu(e)}}}case`escaped`:{let e=fu(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:pu(e)}}}default:return{}}}}},hu=new Set([`left`,`top`]);async function gu(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Vl(n),s=Hl(n),c=Gl(n)===`y`,l=hu.has(o)?-1:1,u=a&&c?-1:1,d=Bl(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var _u=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await gu(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},vu=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Bl(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Gl(i),p=Ul(f),m=u[p],h=u[f],g=(e,t)=>zl(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},yu=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=Bl(e,t),u={x:n,y:r},d=Gl(i),f=Ul(d),p=u[f],m=u[d],h=Bl(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=hu.has(Vl(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},bu=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Bl(e,t),c=await i.detectOverflow(t,s),l=Vl(n),u=Hl(n),d=Gl(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Nl(p-c[m],g),y=Nl(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Pl(c.left,c.right):S=p-2*Pl(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function xu(){return typeof window<`u`}function Su(e){return Tu(e)?(e.nodeName||``).toLowerCase():`#document`}function Cu(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function wu(e){return((Tu(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Tu(e){return xu()?e instanceof Node||e instanceof Cu(e).Node:!1}function Eu(e){return xu()?e instanceof Element||e instanceof Cu(e).Element:!1}function Du(e){return xu()?e instanceof HTMLElement||e instanceof Cu(e).HTMLElement:!1}function Ou(e){return!xu()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Cu(e).ShadowRoot}function ku(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Bu(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Au(e){return/^(table|td|th)$/.test(Su(e))}function ju(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Mu=/transform|translate|scale|rotate|perspective|filter/,Nu=/paint|layout|strict|content/,Pu=e=>!!e&&e!==`none`,Fu;function Iu(e){let t=Eu(e)?Bu(e):e;return Pu(t.transform)||Pu(t.translate)||Pu(t.scale)||Pu(t.rotate)||Pu(t.perspective)||!Ru()&&(Pu(t.backdropFilter)||Pu(t.filter))||Mu.test(t.willChange||``)||Nu.test(t.contain||``)}function Lu(e){let t=Hu(e);for(;Du(t)&&!zu(t);){if(Iu(t))return t;if(ju(t))return null;t=Hu(t)}return null}function Ru(){return Fu??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Fu}function zu(e){return/^(html|body|#document)$/.test(Su(e))}function Bu(e){return Cu(e).getComputedStyle(e)}function Vu(e){return Eu(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Hu(e){if(Su(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ou(e)&&e.host||wu(e);return Ou(t)?t.host:t}function Uu(e){let t=Hu(e);return zu(t)?(e.ownerDocument||e).body:Du(t)&&ku(t)?t:Uu(t)}function Wu(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Uu(e),i=r===e.ownerDocument?.body,a=Cu(r);if(i){let e=Gu(a);return t.concat(a,a.visualViewport||[],ku(r)?r:[],e&&n?Wu(e):[])}return t.concat(r,Wu(r,[],n))}function Gu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ku(e){let t=Bu(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Du(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Fl(n)!==a||Fl(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function qu(e){return Eu(e)?e:e.contextElement}function Ju(e){let t=qu(e);if(!Du(t))return Ll(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ku(t),o=(a?Fl(n.width):n.width)/r,s=(a?Fl(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Yu=Ll(0);function Xu(e){let t=Cu(e);return!Ru()||!t.visualViewport?Yu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Zu(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Cu(e)}function Qu(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=qu(e),o=Ll(1);t&&(r?Eu(r)&&(o=Ju(r)):o=Ju(e));let s=Zu(a,n,r)?Xu(a):Ll(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Cu(a),t=Eu(r)?Cu(r):r,n=e,i=Gu(n);for(;i&&t!==n;){let e=Ju(i),t=i.getBoundingClientRect(),r=Bu(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Cu(i),i=Gu(n)}}return au({width:u,height:d,x:c,y:l})}function Y(e,t){let n=Vu(e).scrollLeft;return t?t.left+n:Qu(wu(e)).left+n}function X(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Y(e,n),y:n.top+t.scrollTop}}function $u(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=wu(r),s=t?ju(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Ll(1),u=Ll(0),d=Du(r);if((d||!a)&&((Su(r)!==`body`||ku(o))&&(c=Vu(r)),d)){let e=Qu(r);l=Ju(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?X(o,c):Ll(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ed(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function td(e){let t=Vu(e),n=e.ownerDocument.body,r=Pl(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Pl(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Y(e),o=-t.scrollTop;return Bu(n).direction===`rtl`&&(a+=Pl(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var nd=25;function rd(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Cu(e),a=wu(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Ru()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Y(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=nd&&(s-=o)}return{width:s,height:c,x:l,y:u}}function id(e,t){let n=Qu(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ju(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ad(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=rd(e,n,t);else if(t===`document`)r=td(wu(e));else if(Eu(t))r=id(t,n);else{let n=Xu(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return au(r)}function od(e,t){let n=t.get(e);if(n)return n;let r=Wu(e,[],!1).filter(e=>Eu(e)&&Su(e)!==`body`),i=null,a=Bu(e).position===`fixed`,o=a?Hu(e):e;for(;Eu(o)&&!zu(o);){let e=Bu(o),t=Iu(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Hu(o)}return t.set(e,r),r}function sd(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?ju(t)?[]:od(t,this._c):[].concat(n),r],o=ad(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ad(t,a[e],i);s=Pl(n.top,s),c=Nl(n.right,c),l=Nl(n.bottom,l),u=Pl(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function cd(e){let{width:t,height:n}=Ku(e);return{width:t,height:n}}function ld(e,t,n){let r=Du(t),i=wu(t),a=n===`fixed`,o=Qu(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Ll(0);if((r||!a)&&((Su(t)!==`body`||ku(i))&&(s=Vu(t)),r)){let e=Qu(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Y(i));let l=i&&!r&&!a?X(i,s):Ll(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ud(e){return Bu(e).position===`static`}function dd(e,t){if(!Du(e)||Bu(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return wu(e)===n&&(n=n.ownerDocument.body),n}function fd(e,t){let n=Cu(e);if(ju(e))return n;if(!Du(e)){let t=Hu(e);for(;t&&!zu(t);){if(Eu(t)&&!ud(t))return t;t=Hu(t)}return n}let r=dd(e,t);for(;r&&Au(r)&&ud(r);)r=dd(r,t);return r&&zu(r)&&ud(r)&&!Iu(r)?n:r||Lu(e)||n}var pd=async function(e){let t=this.getOffsetParent||fd,n=this.getDimensions,r=await n(e.floating);return{reference:ld(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function md(e){return Bu(e).direction===`rtl`}var hd={convertOffsetParentRelativeRectToViewportRelativeRect:$u,getDocumentElement:wu,getClippingRect:sd,getOffsetParent:fd,getElementRects:pd,getClientRects:ed,getDimensions:cd,getScale:Ju,isElement:Eu,isRTL:md};function gd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _d(e,t,n){let r=null,i,a=wu(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Il(d),h=Il(a.clientWidth-(u+f)),g=Il(a.clientHeight-(d+p)),_=Il(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Pl(0,Nl(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!gd(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Cu(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function vd(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=qu(e),u=i||a?[...l?Wu(l):[],...t?Wu(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?_d(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Qu(e):null;c&&g();function g(){let t=Qu(e);h&&!gd(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var yd=_u,bd=vu,xd=du,Sd=bu,Cd=mu,wd=uu,Td=yu,Ed=(e,t,n)=>{let r=new Map,i=n??{},a={...hd,...i.platform,_c:r};return lu(e,t,{...i,platform:a})},Dd=typeof document<`u`?v.useLayoutEffect:function(){};function Od(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Od(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Od(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function kd(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ad(e,t){let n=kd(e);return Math.round(t*n)/n}function jd(e){let t=v.useRef(e);return Dd(()=>{t.current=e}),t}function Md(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=v.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=v.useState(r);Od(f,r)||p(r);let[m,h]=v.useState(null),[g,_]=v.useState(null),y=v.useCallback(e=>{e!==C.current&&(C.current=e,h(e))},[]),b=v.useCallback(e=>{e!==w.current&&(w.current=e,_(e))},[]),x=a||m,S=o||g,C=v.useRef(null),w=v.useRef(null),T=v.useRef(u),E=c!=null,D=jd(c),O=jd(i),k=jd(l),A=v.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:f};O.current&&(e.platform=O.current),Ed(C.current,w.current,e).then(e=>{let t={...e,isPositioned:k.current!==!1};j.current&&!Od(T.current,t)&&(T.current=t,ot.flushSync(()=>{d(t)}))})},[f,t,n,O,k]);Dd(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let j=v.useRef(!1);Dd(()=>(j.current=!0,()=>{j.current=!1}),[]),Dd(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(D.current)return D.current(x,S,A);A()}},[x,S,A,D,E]);let M=v.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),N=v.useMemo(()=>({reference:x,floating:S}),[x,S]),P=v.useMemo(()=>{let e={position:n,left:0,top:0};if(!N.floating)return e;let t=Ad(N.floating,u.x),r=Ad(N.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...kd(N.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,N.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:A,refs:M,elements:N,floatingStyles:P}),[u,A,M,N,P])}var Nd=e=>{function t(e){return{}.hasOwnProperty.call(e,`current`)}return{name:`arrow`,options:e,fn(n){let{element:r,padding:i}=typeof e==`function`?e(n):e;return r&&t(r)?r.current==null?{}:wd({element:r.current,padding:i}).fn(n):r?wd({element:r,padding:i}).fn(n):{}}}},Pd=(e,t)=>{let n=yd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Fd=(e,t)=>{let n=bd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Id=(e,t)=>({fn:Td(e).fn,options:[e,t]}),Ld=(e,t)=>{let n=xd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Rd=(e,t)=>{let n=Sd(e);return{name:n.name,fn:n.fn,options:[e,t]}},zd=(e,t)=>{let n=Cd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Bd=(e,t)=>{let n=Nd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Vd=Object.defineProperty,Hd=v.forwardRef(((e,t)=>Vd(e,`name`,{value:t,configurable:!0}))(function(e,t){let{children:n,width:r=10,height:i=5,...a}=e;return(0,W.jsx)(G.svg,{...a,ref:t,width:r,height:i,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:e.asChild?n:(0,W.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})},`Arrow`)),Ud=Object.defineProperty,Wd=(e,t)=>Ud(e,`name`,{value:t,configurable:!0}),Gd={Partial:`partial`,Always:`always`},Kd={Optimized:`optimized`,Always:`always`},qd=`Popper`,[Jd,Yd]=Yr(qd),[Xd,Zd]=Jd(qd),Qd=Wd(e=>{let{__scopePopper:t,children:n}=e,[r,i]=v.useState(null),[a,o]=v.useState(void 0);return(0,W.jsx)(Xd,{scope:t,anchor:r,onAnchorChange:i,placementState:a,setPlacementState:o,children:n})},`Popper`),$d=`PopperAnchor`,ef=v.forwardRef(Wd(function(e,t){let{__scopePopper:n,virtualRef:r,...i}=e,a=Zd($d,n),o=v.useRef(null),s=a.onAnchorChange,c=U(t,v.useCallback(e=>{o.current=e,e&&s(e)},[s])),l=v.useRef(null);v.useEffect(()=>{if(!r)return;let e=l.current;l.current=r.current,e!==l.current&&s(l.current)});let u=a.placementState&&df(a.placementState),d=u?.[0],f=u?.[1];return r?null:(0,W.jsx)(G.div,{"data-radix-popper-side":d,"data-radix-popper-align":f,...i,ref:c})},`PopperAnchor`)),tf=`PopperContent`,[nf,rf]=Jd(tf),af=v.forwardRef(Wd(function(e,t){let{__scopePopper:n,side:r=`bottom`,sideOffset:i=0,align:a=`center`,alignOffset:o=0,arrowPadding:s=0,avoidCollisions:c=!0,collisionBoundary:l=[],collisionPadding:u=0,sticky:d=Gd.Partial,hideWhenDetached:f=!1,updatePositionStrategy:p=Kd.Optimized,onPlaced:m,...h}=e,g=Zd(tf,n),[_,y]=v.useState(null),b=U(t,y),[x,S]=v.useState(null),C=pl(x),w=C?.width??0,T=C?.height??0,E=r+(a===`center`?``:`-`+a),D=typeof u==`number`?u:{top:0,right:0,bottom:0,left:0,...u},O=Array.isArray(l)?l:[l],k=O.length>0,A={padding:D,boundary:O.filter(lf),altBoundary:k},{refs:j,floatingStyles:M,placement:N,isPositioned:P,middlewareData:F}=Md({strategy:`fixed`,placement:E,whileElementsMounted:Wd((...e)=>vd(...e,{animationFrame:p===Kd.Always}),`whileElementsMounted`),elements:{reference:g.anchor},middleware:[Pd({mainAxis:i+T,alignmentAxis:o}),c&&Fd({mainAxis:!0,crossAxis:!1,...d===Gd.Partial?{limiter:Id()}:{},...A}),c&&Ld({...A}),Rd({...A,apply:Wd(({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:a}=t.reference,o=e.floating.style;o.setProperty(`--radix-popper-available-width`,`${n}px`),o.setProperty(`--radix-popper-available-height`,`${r}px`),o.setProperty(`--radix-popper-anchor-width`,`${i}px`),o.setProperty(`--radix-popper-anchor-height`,`${a}px`)},`apply`)}),x&&Bd({element:x,padding:s}),uf({arrowWidth:w,arrowHeight:T}),f&&zd(k?{strategy:`referenceHidden`,...A}:{strategy:`referenceHidden`,padding:A.padding,altBoundary:A.altBoundary})]}),I=g.setPlacementState;Zr(()=>(I(N),()=>{I(void 0)}),[N,I]);let[ee,te]=df(N),ne=qa(m);Zr(()=>{P&&ne?.()},[P,ne]);let re=F.arrow?.x,ie=F.arrow?.y,ae=F.arrow?.centerOffset!==0,[oe,se]=v.useState();return Zr(()=>{_&&se(window.getComputedStyle(_).zIndex)},[_]),(0,W.jsx)(`div`,{ref:j.setFloating,"data-radix-popper-content-wrapper":``,style:{...M,transform:P?M.transform:`translate(0, -200%)`,minWidth:`max-content`,zIndex:oe,"--radix-popper-transform-origin":[F.transformOrigin?.x,F.transformOrigin?.y].join(` `),...F.hide?.referenceHidden&&{visibility:`hidden`,pointerEvents:`none`}},dir:e.dir,children:(0,W.jsx)(nf,{scope:n,placedSide:ee,placedAlign:te,onArrowChange:S,arrowX:re,arrowY:ie,shouldHideArrow:ae,children:(0,W.jsx)(G.div,{"data-side":ee,"data-align":te,...h,ref:b,style:{...h.style,animation:P?h.style?.animation:`none`}})})})},`PopperContent`)),of=`PopperArrow`,sf={top:`bottom`,right:`left`,bottom:`top`,left:`right`},cf=v.forwardRef(Wd(function(e,t){let{__scopePopper:n,...r}=e,i=rf(of,n),a=sf[i.placedSide];return(0,W.jsx)(`span`,{ref:i.onArrowChange,style:{position:`absolute`,left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:``,right:`0 0`,bottom:`center 0`,left:`100% 0`}[i.placedSide],transform:{top:`translateY(100%)`,right:`translateY(50%) rotate(90deg) translateX(-50%)`,bottom:`rotate(180deg)`,left:`translateY(50%) rotate(-90deg) translateX(50%)`}[i.placedSide],visibility:i.shouldHideArrow?`hidden`:void 0},children:(0,W.jsx)(Hd,{...r,ref:t,style:{...r.style,display:`block`}})})},`PopperArrow`));function lf(e){return e!==null}Wd(lf,`isNotNull`);var uf=Wd(e=>({name:`transformOrigin`,options:e,fn(t){let{placement:n,rects:r,middlewareData:i}=t,a=i.arrow?.centerOffset!==0,o=a?0:e.arrowWidth,s=a?0:e.arrowHeight,[c,l]=df(n),u={start:`0%`,center:`50%`,end:`100%`}[l],d=(i.arrow?.x??0)+o/2,f=(i.arrow?.y??0)+s/2,p=``,m=``;return c===`bottom`?(p=a?u:`${d}px`,m=`${-s}px`):c===`top`?(p=a?u:`${d}px`,m=`${r.floating.height+s}px`):c===`right`?(p=`${-s}px`,m=a?u:`${f}px`):c===`left`&&(p=`${r.floating.width+s}px`,m=a?u:`${f}px`),{data:{x:p,y:m}}}}),`transformOrigin`);function df(e){let[t,n=`center`]=e.split(`-`);return[t,n]}Wd(df,`getSideAndAlignFromPlacement`);var ff=Object.defineProperty,pf=(e,t)=>ff(e,`name`,{value:t,configurable:!0}),mf=!1;function hf(){let[e,t]=v.useState(mf);return v.useEffect(()=>{mf||(mf=!0,t(!0))},[]),e}pf(hf,`useIsHydrated`);var gf=v.useSyncExternalStore;function _f(){return()=>{}}pf(_f,`subscribe`);function vf(){return gf(_f,()=>!0,()=>!1)}pf(vf,`useIsHydratedModern`);var yf=typeof gf==`function`?vf:hf,bf=Object.defineProperty,xf=(e,t)=>bf(e,`name`,{value:t,configurable:!0}),Sf=`rovingFocusGroup.onEntryFocus`,Cf={bubbles:!1,cancelable:!0},wf=`RovingFocusGroup`,[Tf,Ef,Df]=ei(wf),[Of,kf]=Yr(wf,[Df]),Af={Vertical:`vertical`,Horizontal:`horizontal`},jf={LTR:`ltr`,RTL:`rtl`},[Mf,Nf]=Of(wf),Pf=v.forwardRef(xf(function(e,t){return(0,W.jsx)(Tf.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,W.jsx)(Tf.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,W.jsx)(Ff,{...e,ref:t})})})},`RovingFocusGroup`)),Ff=v.forwardRef(xf(function(e,t){let{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:a,currentTabStopId:o,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...d}=e,f=v.useRef(null),p=U(t,f),m=la(a),[h,g]=Di({prop:o,defaultProp:s??null,onChange:c,caller:wf}),[_,y]=v.useState(!1),b=qa(l),x=Ef(n),S=v.useRef(!1),[C,w]=v.useState(0);return v.useEffect(()=>{let e=f.current;if(e)return e.addEventListener(Sf,b),()=>e.removeEventListener(Sf,b)},[b]),(0,W.jsx)(Mf,{scope:n,orientation:r,dir:m,loop:i,currentTabStopId:h,onItemFocus:v.useCallback(e=>g(e),[g]),onItemShiftTab:v.useCallback(()=>y(!0),[]),onFocusableItemAdd:v.useCallback(()=>w(e=>e+1),[]),onFocusableItemRemove:v.useCallback(()=>w(e=>e-1),[]),children:(0,W.jsx)(G.div,{tabIndex:_||C===0?-1:0,"data-orientation":r,...d,ref:p,style:{outline:`none`,...e.style},onMouseDown:K(e.onMouseDown,()=>{S.current=!0}),onFocus:K(e.onFocus,e=>{let t=!S.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(Sf,Cf);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=x().filter(e=>e.focusable);Vf([e.find(e=>e.active),e.find(e=>e.id===h),...e].filter(Boolean).map(e=>e.ref.current),u)}}S.current=!1}),onBlur:K(e.onBlur,()=>y(!1))})})},`RovingFocusGroupImpl`)),If=`RovingFocusGroupItem`,Lf=v.forwardRef(xf(function(e,t){let{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:a,children:o,...s}=e,c=Gi(),l=a||c,u=Nf(If,n),d=u.currentTabStopId===l,f=Ef(n),{onFocusableItemAdd:p,onFocusableItemRemove:m,currentTabStopId:h}=u,g=yf();return Zr(()=>{if(g&&r)return p(),()=>m()},[g,r,p,m]),v.useEffect(()=>{if(!g&&r)return p(),()=>m()},[g,r,p,m]),(0,W.jsx)(Tf.ItemSlot,{scope:n,id:l,focusable:r,active:i,children:(0,W.jsx)(G.span,{tabIndex:d?0:-1,"data-orientation":u.orientation,...s,ref:t,onMouseDown:K(e.onMouseDown,e=>{r?u.onItemFocus(l):e.preventDefault()}),onFocus:K(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:K(e.onKeyDown,e=>{if(e.key===`Tab`&&e.shiftKey){u.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=Bf(e,u.orientation,u.dir);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=f().filter(e=>e.focusable).map(e=>e.ref.current);if(t===`last`)n.reverse();else if(t===`prev`||t===`next`){t===`prev`&&n.reverse();let r=n.indexOf(e.currentTarget);n=u.loop?Hf(n,r+1):n.slice(r+1)}setTimeout(()=>Vf(n))}}),children:typeof o==`function`?o({isCurrentTabStop:d,hasTabStop:h!=null}):o})})},`RovingFocusGroupItem`)),Rf={ArrowLeft:`prev`,ArrowUp:`prev`,ArrowRight:`next`,ArrowDown:`next`,PageUp:`first`,Home:`first`,PageDown:`last`,End:`last`};function zf(e,t){return t===jf.RTL?e===`ArrowLeft`?`ArrowRight`:e===`ArrowRight`?`ArrowLeft`:e:e}xf(zf,`getDirectionAwareKey`);function Bf(e,t,n){let r=zf(e.key,n);if(!(t===Af.Vertical&&[`ArrowLeft`,`ArrowRight`].includes(r))&&!(t===Af.Horizontal&&[`ArrowUp`,`ArrowDown`].includes(r)))return Rf[r]}xf(Bf,`getFocusIntent`);function Vf(e,t=!1){let n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}xf(Vf,`focusFirst`);function Hf(e,t){return e.map((n,r)=>e[(t+r)%e.length])}xf(Hf,`wrapArray`);var Z=Object.defineProperty,Uf=(e,t)=>Z(e,`name`,{value:t,configurable:!0}),Wf=[`Enter`,` `],Gf=[`ArrowDown`,`PageUp`,`Home`],Kf=[`ArrowUp`,`PageDown`,`End`],qf=[...Gf,...Kf];[...Wf],[...Wf];var Jf=`Menu`,[Yf,Xf,Zf]=ei(Jf),[Qf,$f]=Yr(Jf,[Zf,Yd,kf]),ep=Yd(),tp=kf(),[np,rp]=Qf(Jf),[ip,ap]=Qf(Jf),op=Uf(e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:i,onOpenChange:a,modal:o=!0}=e,s=ep(t),[c,l]=v.useState(null),u=v.useRef(!1),d=qa(a),f=la(i);return v.useEffect(()=>{let e=Uf(()=>{u.current=!0,document.addEventListener(`pointerdown`,t,{capture:!0,once:!0}),document.addEventListener(`pointermove`,t,{capture:!0,once:!0})},`handleKeyDown`),t=Uf(()=>u.current=!1,`handlePointer`);return document.addEventListener(`keydown`,e,{capture:!0}),()=>{document.removeEventListener(`keydown`,e,{capture:!0}),document.removeEventListener(`pointerdown`,t,{capture:!0}),document.removeEventListener(`pointermove`,t,{capture:!0})}},[]),v.useEffect(()=>{if(!n)return;let e=Uf(()=>d(!1),`handleBlur`);return window.addEventListener(`blur`,e),()=>window.removeEventListener(`blur`,e)},[n,d]),(0,W.jsx)(Qd,{...s,children:(0,W.jsx)(np,{scope:t,open:n,onOpenChange:d,content:c,onContentChange:l,children:(0,W.jsx)(ip,{scope:t,onClose:v.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:u,dir:f,modal:o,children:r})})})},`Menu`),sp=v.forwardRef(Uf(function(e,t){let{__scopeMenu:n,...r}=e,i=ep(n);return(0,W.jsx)(ef,{...i,...r,ref:t})},`MenuAnchor`)),cp=`MenuPortal`,[lp,up]=Qf(cp,{forceMount:void 0}),dp=Uf(e=>{let{__scopeMenu:t,forceMount:n,children:r,container:i}=e,a=rp(cp,t);return(0,W.jsx)(lp,{scope:t,forceMount:n,children:(0,W.jsx)(Fi,{present:n||a.open,children:(0,W.jsx)(jo,{asChild:!0,container:i,children:r})})})},`MenuPortal`),fp=`MenuContent`,[pp,mp]=Qf(fp),hp=v.forwardRef(Uf(function(e,t){let n=up(fp,e.__scopeMenu),{forceMount:r=n.forceMount,...i}=e,a=rp(fp,e.__scopeMenu),o=ap(fp,e.__scopeMenu);return(0,W.jsx)(Yf.Provider,{scope:e.__scopeMenu,children:(0,W.jsx)(Fi,{present:r||a.open,children:(0,W.jsx)(Yf.Slot,{scope:e.__scopeMenu,children:o.modal?(0,W.jsx)(gp,{...i,ref:t}):(0,W.jsx)(_p,{...i,ref:t})})})})},`MenuContent`)),gp=v.forwardRef(Uf(function(e,t){let n=rp(fp,e.__scopeMenu),r=v.useRef(null),i=U(t,r);return v.useEffect(()=>{let e=r.current;if(e)return ec(e)},[]),(0,W.jsx)(yp,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:K(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})},`MenuRootContentModal`)),_p=v.forwardRef(Uf(function(e,t){let n=rp(fp,e.__scopeMenu);return(0,W.jsx)(yp,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})},`MenuRootContentNonModal`)),vp=Sr(`MenuContent.ScrollLock`),yp=v.forwardRef(Uf(function(e,t){let{__scopeMenu:n,loop:r=!1,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:o,disableOutsidePointerEvents:s,onEntryFocus:c,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:f,onDismiss:p,disableOutsideScroll:m,...h}=e,g=rp(fp,n),_=ap(fp,n),y=ep(n),b=tp(n),x=Xf(n),[S,C]=v.useState(null),w=v.useRef(null),[T,E]=v.useState(null);vo(T);let{nodes:D,registry:O}=_o(),k=!!(i||m),A=U(t,w,g.onContentChange,E),j=v.useRef(0),M=v.useRef(``),N=v.useRef(0),P=v.useRef(null),F=v.useRef(`right`),I=v.useRef(0),ee=v.useMemo(()=>m?[w,...D.map(e=>({current:e}))]:[],[w,D,m]),te=m?Gs:v.Fragment,ne=m?{as:vp,allowPinchZoom:!0,shards:ee}:void 0,re=Uf(e=>{let t=M.current+e,n=x().filter(e=>!e.disabled),r=document.activeElement,i=n.find(e=>e.ref.current===r)?.textValue,a=Lp(n.map(e=>e.textValue),t,i),o=n.find(e=>e.textValue===a)?.ref.current;function s(e){M.current=e,window.clearTimeout(j.current),e!==``&&(j.current=window.setTimeout(()=>s(``),1e3))}Uf(s,`updateSearch`),s(t),o&&setTimeout(()=>o.focus())},`handleTypeaheadSearch`);v.useEffect(()=>()=>window.clearTimeout(j.current),[]),Io();let ie=v.useCallback(e=>F.current===P.current?.side&&zp(e,P.current?.area),[]);return(0,W.jsx)(pp,{scope:n,searchRef:M,onItemEnter:v.useCallback(e=>{ie(e)&&e.preventDefault()},[ie]),onItemLeave:v.useCallback(e=>{ie(e)||(w.current?.focus(),C(null))},[ie]),onTriggerLeave:v.useCallback(e=>{ie(e)&&e.preventDefault()},[ie]),pointerGraceTimerRef:N,onPointerGraceIntentChange:v.useCallback(e=>{P.current=e},[]),children:(0,W.jsx)(go,{registry:k?O:null,children:(0,W.jsx)(te,{...ne,children:(0,W.jsx)(mo,{asChild:!0,trapped:i,branches:D,onMountAutoFocus:K(a,e=>{e.preventDefault(),w.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:o,children:(0,W.jsx)(to,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:f,onDismiss:p,children:(0,W.jsx)(Pf,{asChild:!0,...b,dir:_.dir,orientation:`vertical`,loop:r,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:K(c,e=>{_.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,W.jsx)(af,{role:`menu`,"aria-orientation":`vertical`,"data-state":Mp(g.open),"data-radix-menu-content":``,dir:_.dir,...y,...h,ref:A,style:{outline:`none`,...h.style},onKeyDown:K(h.onKeyDown,e=>{let t=e.target.closest(`[data-radix-menu-content]`)===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=e.key.length===1;t&&(e.key===`Tab`&&e.preventDefault(),!n&&r&&re(e.key));let i=w.current;if(e.target!==i||!qf.includes(e.key))return;e.preventDefault();let a=x().filter(e=>!e.disabled).map(e=>e.ref.current);Kf.includes(e.key)&&a.reverse(),Fp(a)}),onBlur:K(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(j.current),M.current=``)}),onPointerMove:K(e.onPointerMove,Bp(e=>{let t=e.target,n=I.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>I.current?`right`:`left`;F.current=t,I.current=e.clientX}}))})})})})})})})},`MenuContentImpl`)),bp=v.forwardRef(Uf(function(e,t){let{__scopeMenu:n,...r}=e;return(0,W.jsx)(G.div,{...r,ref:t})},`MenuLabel`)),xp=`MenuItem`,Sp=`menu.itemSelect`,Cp=v.forwardRef(Uf(function(e,t){let{disabled:n=!1,onSelect:r,...i}=e,a=v.useRef(null),o=ap(xp,e.__scopeMenu),s=mp(xp,e.__scopeMenu),c=U(t,a),l=v.useRef(!1),u=Uf(()=>{let e=a.current;if(!n&&e){let t=new CustomEvent(Sp,{bubbles:!0,cancelable:!0});e.addEventListener(Sp,e=>r?.(e),{once:!0}),Vr(e,t),t.defaultPrevented?l.current=!1:o.onClose()}},`handleSelect`);return(0,W.jsx)(wp,{...i,ref:c,disabled:n,onClick:K(e.onClick,u),onPointerDown:t=>{e.onPointerDown?.(t),l.current=!0},onPointerUp:K(e.onPointerUp,e=>{l.current||e.currentTarget?.click()}),onKeyDown:K(e.onKeyDown,e=>{n||e.target!==e.currentTarget||(s.searchRef.current===``||e.key!==` `)&&Wf.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})},`MenuItem`)),wp=v.forwardRef(Uf(function(e,t){let{__scopeMenu:n,disabled:r=!1,textValue:i,...a}=e,o=mp(xp,n),s=tp(n),c=v.useRef(null),l=U(t,c),[u,d]=v.useState(!1),[f,p]=v.useState(``);return v.useEffect(()=>{let e=c.current;e&&p((e.textContent??``).trim())},[a.children]),(0,W.jsx)(Yf.ItemSlot,{scope:n,disabled:r,textValue:i??f,children:(0,W.jsx)(Lf,{asChild:!0,...s,focusable:!r,children:(0,W.jsx)(G.div,{role:`menuitem`,"data-highlighted":u?``:void 0,"aria-disabled":r||void 0,"data-disabled":r?``:void 0,...a,ref:l,onPointerMove:K(e.onPointerMove,Bp(e=>{r?o.onItemLeave(e):(o.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:K(e.onPointerLeave,Bp(e=>o.onItemLeave(e))),onFocus:K(e.onFocus,()=>d(!0)),onBlur:K(e.onBlur,()=>d(!1))})})})},`MenuItemImpl`)),[Tp,Ep]=Qf(`MenuRadioGroup`,{value:void 0,onValueChange:Uf(()=>{},`onValueChange`)}),[Dp,Op]=Qf(`MenuItemIndicator`,{checked:!1}),kp=v.forwardRef(Uf(function(e,t){let{__scopeMenu:n,...r}=e;return(0,W.jsx)(G.div,{role:`separator`,"aria-orientation":`horizontal`,...r,ref:t})},`MenuSeparator`)),[Ap,jp]=Qf(`MenuSub`);function Mp(e){return e?`open`:`closed`}Uf(Mp,`getOpenState`);function Np(e){return e===`indeterminate`}Uf(Np,`isIndeterminate`);function Pp(e){return Np(e)?`indeterminate`:e?`checked`:`unchecked`}Uf(Pp,`getCheckedState`);function Fp(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}Uf(Fp,`focusFirst`);function Ip(e,t){return e.map((n,r)=>e[(t+r)%e.length])}Uf(Ip,`wrapArray`);function Lp(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=Ip(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}Uf(Lp,`getNextMatch`);function Rp(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e],s=t[a],c=o.x,l=o.y,u=s.x,d=s.y;l>r!=d>r&&n<(u-c)*(r-l)/(d-l)+c&&(i=!i)}return i}Uf(Rp,`isPointInPolygon`);function zp(e,t){return t?Rp({x:e.clientX,y:e.clientY},t):!1}Uf(zp,`isPointerInGraceArea`);function Bp(e){return t=>t.pointerType===`mouse`?e(t):void 0}Uf(Bp,`whenMouse`);var Vp=Object.defineProperty,Hp=(e,t)=>Vp(e,`name`,{value:t,configurable:!0}),Up=`DropdownMenu`,[Wp,Gp]=Yr(Up,[$f]),Kp=$f(),[qp,Jp]=Wp(Up),Yp=Hp(e=>{let{__scopeDropdownMenu:t,children:n,dir:r,open:i,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,c=Kp(t),l=v.useRef(null),[u,d]=Di({prop:i,defaultProp:a??!1,onChange:o,caller:Up});return(0,W.jsx)(qp,{scope:t,triggerId:Gi(),triggerRef:l,contentId:Gi(),open:u,onOpenChange:d,onOpenToggle:v.useCallback(()=>d(e=>!e),[d]),modal:s,children:(0,W.jsx)(op,{...c,open:u,onOpenChange:d,dir:r,modal:s,children:n})})},`DropdownMenu`),Xp=`DropdownMenuTrigger`,Zp=v.forwardRef(Hp(function(e,t){let{__scopeDropdownMenu:n,disabled:r=!1,...i}=e,a=Jp(Xp,n),o=Kp(n),s=U(t,a.triggerRef);return(0,W.jsx)(sp,{asChild:!0,...o,children:(0,W.jsx)(G.button,{type:`button`,id:a.triggerId,"aria-haspopup":`menu`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:s,onPointerDown:K(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(a.onOpenToggle(),a.open||e.preventDefault())}),onKeyDown:K(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&a.onOpenToggle(),e.key===`ArrowDown`&&a.onOpenChange(!0),[`Enter`,` `,`ArrowDown`].includes(e.key)&&e.preventDefault())})})})},`DropdownMenuTrigger`)),Qp=Hp(e=>{let{__scopeDropdownMenu:t,...n}=e,r=Kp(t);return(0,W.jsx)(dp,{...r,...n})},`DropdownMenuPortal`),$p=`DropdownMenuContent`,em=v.forwardRef(Hp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Jp($p,n),a=Kp(n),o=v.useRef(!1);return(0,W.jsx)(hp,{id:i.contentId,"aria-labelledby":i.triggerId,...a,...r,ref:t,onCloseAutoFocus:K(e.onCloseAutoFocus,e=>{o.current||i.triggerRef.current?.focus(),o.current=!1,e.preventDefault()}),onInteractOutside:K(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;(!i.modal||r)&&(o.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-dropdown-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-dropdown-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-dropdown-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-dropdown-menu-trigger-height":`var(--radix-popper-anchor-height)`}})},`DropdownMenuContent`)),tm=v.forwardRef(Hp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Kp(n);return(0,W.jsx)(bp,{...i,...r,ref:t})},`DropdownMenuLabel`)),nm=v.forwardRef(Hp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Kp(n);return(0,W.jsx)(Cp,{...i,...r,ref:t})},`DropdownMenuItem`)),rm=v.forwardRef(Hp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Kp(n);return(0,W.jsx)(kp,{...i,...r,ref:t})},`DropdownMenuSeparator`)),im=Object.defineProperty,am=v.forwardRef(((e,t)=>im(e,`name`,{value:t,configurable:!0}))(function(e,t){return(0,W.jsx)(G.label,{...e,ref:t,onMouseDown:t=>{t.target.closest(`button, input, select, textarea`)||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})},`Label`)),om=Object.defineProperty,sm=(e,t)=>om(e,`name`,{value:t,configurable:!0});function cm(e){let t=v.useRef({value:e,previous:e});return v.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}sm(cm,`usePrevious`);var lm=Object.defineProperty,um=(e,t)=>lm(e,`name`,{value:t,configurable:!0}),dm={Automatic:`automatic`,Manual:`manual`},fm={Vertical:`vertical`,Horizontal:`horizontal`},pm={LTR:`ltr`,RTL:`rtl`},mm=`NavigationMenu`,[hm,gm,_m]=ei(mm),[vm,ym,bm]=ei(mm),[xm,Sm]=Yr(mm,[_m,bm]),[Cm,wm]=xm(mm),[Tm,Em]=xm(mm),Dm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,value:r,onValueChange:i,defaultValue:a,delayDuration:o=200,skipDelayDuration:s=300,orientation:c=fm.Horizontal,dir:l,activationMode:u=dm.Automatic,...d}=e,[f,p]=v.useState(null),m=U(t,p),h=la(l),g=v.useRef(0),_=v.useRef(0),y=v.useRef(0),[b,x]=v.useState(!0),[S,C]=Di({prop:r,onChange:um(e=>{let t=e!==``,n=s>0;t?(window.clearTimeout(y.current),n&&x(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(!0),s)),i?.(e)},`onChange`),defaultProp:a??``,caller:mm}),w=v.useCallback(()=>{window.clearTimeout(_.current),_.current=window.setTimeout(()=>C(``),150)},[C]),T=v.useCallback(e=>{window.clearTimeout(_.current),C(e)},[C]),E=v.useCallback(e=>{S===e?window.clearTimeout(_.current):g.current=window.setTimeout(()=>{window.clearTimeout(_.current),C(e)},o)},[S,C,o]);return v.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(_.current),window.clearTimeout(y.current)},[]),(0,W.jsx)(Om,{scope:n,isRootMenu:!0,value:S,dir:h,orientation:c,activationMode:u,rootNavigationMenu:f,onTriggerEnter:e=>{u===dm.Automatic&&(window.clearTimeout(g.current),b?E(e):T(e))},onTriggerLeave:()=>{u===dm.Automatic&&(window.clearTimeout(g.current),w())},onContentEnter:()=>{u===dm.Automatic&&window.clearTimeout(_.current)},onContentLeave:()=>{u===dm.Automatic&&w()},onItemSelect:e=>{C(t=>t===e?``:e)},onItemDismiss:()=>C(``),children:(0,W.jsx)(G.nav,{"aria-label":`Main`,"data-orientation":c,dir:h,...d,ref:m})})},`NavigationMenu`)),Om=um(e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:i,orientation:a,activationMode:o,children:s,value:c,onItemSelect:l,onItemDismiss:u,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:p,onContentLeave:m}=e,[h,g]=v.useState(null),[_,y]=v.useState(new Map),[b,x]=v.useState(null);return(0,W.jsx)(Cm,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:c,previousValue:cm(c),baseId:Gi(),dir:i,orientation:a,activationMode:o,viewport:h,onViewportChange:g,indicatorTrack:b,onIndicatorTrackChange:x,onTriggerEnter:qa(d),onTriggerLeave:qa(f),onContentEnter:qa(p),onContentLeave:qa(m),onItemSelect:qa(l),onItemDismiss:qa(u),onViewportContentChange:v.useCallback((e,t)=>{y(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:v.useCallback(e=>{y(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,W.jsx)(hm.Provider,{scope:t,children:(0,W.jsx)(Tm,{scope:t,items:_,children:s})})})},`NavigationMenuProvider`),km=`NavigationMenuList`,Am=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,...r}=e,i=wm(km,n),a=(0,W.jsx)(G.ul,{"data-orientation":i.orientation,...r,ref:t});return(0,W.jsx)(G.div,{style:{position:`relative`},ref:i.onIndicatorTrackChange,children:(0,W.jsx)(hm.Slot,{scope:n,children:i.isRootMenu?(0,W.jsx)(Gm,{asChild:!0,children:a}):a})})},`NavigationMenuList`)),[jm,Mm]=xm(`NavigationMenuItem`),Nm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,value:r,...i}=e,a=Gi(),o=r||a||`LEGACY_REACT_AUTO_VALUE`,s=v.useRef(null),c=v.useRef(null),l=v.useRef(null),u=v.useRef(()=>{}),d=v.useRef(!1),f=v.useCallback((e=`start`)=>{if(s.current){u.current();let t=Ym(s.current);t.length&&Xm(e===`start`?t:t.reverse())}},[]),p=v.useCallback(()=>{if(s.current){let e=Ym(s.current);e.length&&(u.current=Zm(e))}},[]);return(0,W.jsx)(jm,{scope:n,value:o,triggerRef:c,contentRef:s,focusProxyRef:l,wasEscapeCloseRef:d,onEntryKeyDown:f,onFocusProxyEnter:f,onRootContentClose:p,onContentFocusOutside:p,children:(0,W.jsx)(G.li,{...i,ref:t})})},`NavigationMenuItem`)),Pm=`navigationMenu.linkSelect`,Fm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,active:r,onSelect:i,...a}=e;return(0,W.jsx)(Jm,{asChild:!0,children:(0,W.jsx)(G.a,{"data-active":r?``:void 0,"aria-current":r?`page`:void 0,...a,ref:t,onClick:K(e.onClick,e=>{let t=e.target,n=new CustomEvent(Pm,{bubbles:!0,cancelable:!0});t.addEventListener(Pm,e=>i?.(e),{once:!0}),Vr(t,n),!n.defaultPrevented&&!e.metaKey&&Vr(t,new CustomEvent(Lm,{bubbles:!0,cancelable:!0}))},{checkForDefaultPrevented:!1})})})},`NavigationMenuLink`)),Im=`NavigationMenuContent`,Lm=`navigationMenu.rootContentDismiss`,Rm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,value:r,triggerRef:i,focusProxyRef:a,wasEscapeCloseRef:o,onRootContentClose:s,onContentFocusOutside:c,...l}=e,u=wm(Im,n),d=v.useRef(null),f=U(d,t),p=eh(u.baseId,r),m=th(u.baseId,r),h=gm(n),g=v.useRef(null),{onItemDismiss:_}=u;v.useEffect(()=>{let e=d.current;if(u.isRootMenu&&e){let t=um(()=>{_(),s(),e.contains(document.activeElement)&&i.current?.focus()},`handleClose`);return e.addEventListener(Lm,t),()=>e.removeEventListener(Lm,t)}},[u.isRootMenu,e.value,i,_,s]);let y=v.useMemo(()=>{let e=h().map(e=>e.value);u.dir===pm.RTL&&e.reverse();let t=e.indexOf(u.value),n=e.indexOf(u.previousValue),i=r===u.value,a=n===e.indexOf(r);if(!i&&!a)return g.current;let o=(()=>{if(t!==n){if(i&&n!==-1)return t>n?`from-end`:`from-start`;if(a&&t!==-1)return t>n?`to-start`:`to-end`}return null})();return g.current=o,o},[u.previousValue,u.value,u.dir,h,r]);return(0,W.jsx)(Gm,{asChild:!0,children:(0,W.jsx)(to,{id:m,"aria-labelledby":p,"data-motion":y,"data-orientation":u.orientation,...l,ref:f,disableOutsidePointerEvents:!1,onDismiss:()=>{let e=new Event(Lm,{bubbles:!0,cancelable:!0});d.current?.dispatchEvent(e)},onFocusOutside:K(e.onFocusOutside,e=>{c();let t=e.target,n=e.detail.originalEvent.relatedTarget,r=u.rootNavigationMenu?.contains(t),i=u.rootNavigationMenu?.contains(n);(r||!i)&&e.preventDefault()}),onPointerDownOutside:K(e.onPointerDownOutside,e=>{let t=e.target,n=h().some(e=>e.ref.current?.contains(t)),r=u.isRootMenu&&u.viewport?.contains(t);(n||r||!u.isRootMenu)&&e.preventDefault()}),onKeyDown:K(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if(e.key===`Tab`&&!t){let t=Ym(e.currentTarget),n=document.activeElement,r=t.findIndex(e=>e===n);Xm(e.shiftKey?t.slice(0,r).reverse():t.slice(r+1,t.length))?e.preventDefault():a.current?.focus()}}),onEscapeKeyDown:K(e.onEscapeKeyDown,e=>{o.current=!0})})})},`NavigationMenuContentImpl`)),zm=`NavigationMenuViewport`,Bm=Tr(zm),Vm=v.forwardRef(um(function(e,t){let{forceMount:n,...r}=e,i=!!wm(zm,e.__scopeNavigationMenu).value;return(0,W.jsx)(Fi,{present:n||i,children:(0,W.jsx)(Hm,{...r,ref:t})})},`NavigationMenuViewport`)),Hm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,children:r,...i}=e,a=wm(zm,n),o=U(t,a.onViewportChange),s=Em(Im,e.__scopeNavigationMenu),[c,l]=v.useState(null),[u,d]=v.useState(null),f=c?c?.width+`px`:void 0,p=c?c?.height+`px`:void 0,m=!!a.value,h=m?a.value:a.previousValue;return Qm(u,um(()=>{u&&l({width:u.offsetWidth,height:u.offsetHeight})},`handleSizeChange`)),(0,W.jsxs)(G.div,{"data-state":$m(m),"data-orientation":a.orientation,...i,ref:o,style:{pointerEvents:!m&&a.isRootMenu?`none`:void 0,"--radix-navigation-menu-viewport-width":f,"--radix-navigation-menu-viewport-height":p,...i.style},onPointerEnter:K(e.onPointerEnter,a.onContentEnter),onPointerLeave:K(e.onPointerLeave,nh(a.onContentLeave)),children:[(0,W.jsx)(Bm,{children:r}),Array.from(s.items).map(([e,{ref:t,forceMount:n,...r}])=>{let i=h===e;return(0,W.jsx)(Fi,{present:n||i,children:(0,W.jsx)(Um,{...r,contentRef:t,isActive:i,onActiveContentChange:d})},e)})]})},`NavigationMenuViewportImpl`)),Um=um(({contentRef:e,isActive:t,onActiveContentChange:n,...r})=>{let i=U(e,v.useCallback(e=>{t&&e&&n(e)},[t,n]));return(0,W.jsx)(Rm,{...r,ref:i})},`NavigationMenuViewportItem`),Wm=`FocusGroup`,Gm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,...r}=e,i=wm(Wm,n);return(0,W.jsx)(vm.Provider,{scope:n,children:(0,W.jsx)(vm.Slot,{scope:n,children:(0,W.jsx)(G.div,{dir:i.dir,...r,ref:t})})})},`FocusGroup`)),Km=[`ArrowRight`,`ArrowLeft`,`ArrowUp`,`ArrowDown`],qm=`FocusGroupItem`,Jm=v.forwardRef(um(function(e,t){let{__scopeNavigationMenu:n,...r}=e,i=ym(n),a=wm(qm,n);return(0,W.jsx)(vm.ItemSlot,{scope:n,children:(0,W.jsx)(G.button,{...r,ref:t,onKeyDown:K(e.onKeyDown,e=>{if([`Home`,`End`,...Km].includes(e.key)){let t=i().map(e=>e.ref.current);if([a.dir===pm.RTL?`ArrowRight`:`ArrowLeft`,`ArrowUp`,`End`].includes(e.key)&&t.reverse(),Km.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>Xm(t)),e.preventDefault()}})})})},`FocusGroupItem`));function Ym(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:um(e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},`acceptNode`)});for(;n.nextNode();)t.push(n.currentNode);return t}um(Ym,`getTabbableCandidates`);function Xm(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}um(Xm,`focusFirst`);function Zm(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute(`tabindex`,t)})}}um(Zm,`removeFromTabOrder`);function Qm(e,t){let n=qa(t);Zr(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}um(Qm,`useResizeObserver`);function $m(e){return e?`open`:`closed`}um($m,`getOpenState`);function eh(e,t){return`${e}-trigger-${t}`}um(eh,`makeTriggerId`);function th(e,t){return`${e}-content-${t}`}um(th,`makeContentId`);function nh(e){return t=>t.pointerType===`mouse`?e(t):void 0}um(nh,`whenMouse`);var rh=Object.defineProperty,ih=(e,t)=>rh(e,`name`,{value:t,configurable:!0});function ah(e,[t,n]){return Math.min(n,Math.max(t,e))}ih(ah,`clamp`);var oh=Object.defineProperty,sh=(e,t)=>oh(e,`name`,{value:t,configurable:!0}),ch=`Popover`,[lh,uh]=Yr(ch,[Yd]),dh=Yd(),[fh,ph]=lh(ch),mh=sh(e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!1}=e,s=dh(t),c=v.useRef(null),[l,u]=v.useState(!1),[d,f]=v.useState(0),[p,m]=v.useState(0),[h,g]=Di({prop:r,defaultProp:i??!1,onChange:a,caller:ch});return(0,W.jsx)(Qd,{...s,children:(0,W.jsx)(fh,{scope:t,contentId:Gi(),titleId:Gi(),descriptionId:Gi(),titlePresent:d>0,descriptionPresent:p>0,setTitleCount:f,setDescriptionCount:m,triggerRef:c,open:h,onOpenChange:g,onOpenToggle:v.useCallback(()=>g(e=>!e),[g]),hasCustomAnchor:l,onCustomAnchorAdd:v.useCallback(()=>u(!0),[]),onCustomAnchorRemove:v.useCallback(()=>u(!1),[]),modal:o,children:n})})},`Popover`),hh=`PopoverTrigger`,gh=v.forwardRef(sh(function(e,t){let{__scopePopover:n,...r}=e,i=ph(hh,n),a=dh(n),o=U(t,i.triggerRef),s=(0,W.jsx)(G.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":Dh(i.open),...r,ref:o,onClick:K(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,W.jsx)(ef,{asChild:!0,...a,children:s})},`PopoverTrigger`)),_h=`PopoverPortal`,[vh,yh]=lh(_h,{forceMount:void 0}),bh=sh(e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=ph(_h,t);return(0,W.jsx)(vh,{scope:t,forceMount:n,children:(0,W.jsx)(Fi,{present:n||a.open,children:(0,W.jsx)(jo,{asChild:!0,container:i,children:r})})})},`PopoverPortal`),xh=`PopoverContent`,Sh=v.forwardRef(sh(function(e,t){let n=yh(xh,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=ph(xh,e.__scopePopover);return(0,W.jsx)(Fi,{present:r||a.open,children:a.modal?(0,W.jsx)(wh,{...i,ref:t}):(0,W.jsx)(Th,{...i,ref:t})})},`PopoverContent`)),Ch=Sr(`PopoverContent.RemoveScroll`),wh=v.forwardRef(sh(function(e,t){let n=ph(xh,e.__scopePopover),r=v.useRef(null),i=U(t,r),a=v.useRef(!1),{nodes:o,registry:s}=_o();return v.useEffect(()=>{let e=r.current;if(e)return ec(e)},[]),(0,W.jsx)(Gs,{as:Ch,allowPinchZoom:!0,shards:v.useMemo(()=>[r,...o.map(e=>({current:e}))],[r,o]),children:(0,W.jsx)(Eh,{...e,ref:i,branchNodes:o,branchRegistry:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:K(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:K(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:K(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})},`PopoverContentModal`)),Th=v.forwardRef(sh(function(e,t){let n=ph(xh,e.__scopePopover),r=v.useRef(!1),i=v.useRef(!1);return(0,W.jsx)(Eh,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`PopoverContentNonModal`)),Eh=v.forwardRef(sh(function(e,t){let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,"aria-describedby":d,branchNodes:f,branchRegistry:p,...m}=e,h=ph(xh,n),g=dh(n),[_,y]=v.useState(null),b=U(t,y);return vo(_),Io(),(0,W.jsx)(go,{registry:p,children:(0,W.jsx)(mo,{asChild:!0,loop:!0,trapped:r,branches:f,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,W.jsx)(to,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>h.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,W.jsx)(af,{"data-state":Dh(h.open),role:`dialog`,id:h.contentId,"aria-labelledby":h.titlePresent?h.titleId:void 0,"aria-describedby":h.descriptionPresent?Oh(d,h.descriptionId):d,...g,...m,ref:b,style:{...m.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})})},`PopoverContentImpl`));function Dh(e){return e?`open`:`closed`}sh(Dh,`getState`);function Oh(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}sh(Oh,`concatAriaDescribedby`);var kh=Object.defineProperty,Ah=(e,t)=>kh(e,`name`,{value:t,configurable:!0}),jh=`Progress`,Mh=100,[Nh,Ph]=Yr(jh),[Fh,Ih]=Nh(jh),Lh=v.forwardRef(Ah(function(e,t){let{__scopeProgress:n,value:r=null,max:i,getValueLabel:a=Bh,...o}=e;(i||i===0)&&!Uh(i)&&console.error(Gh(`${i}`,`Progress`));let s=Uh(i)?i:Mh;r!==null&&!Wh(r,s)&&console.error(Kh(`${r}`,`Progress`));let c=Wh(r,s)?r:null,l=Hh(c)?a(c,s):void 0;return(0,W.jsx)(Fh,{scope:n,value:c,max:s,children:(0,W.jsx)(G.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":Hh(c)?c:void 0,"aria-valuetext":l,role:`progressbar`,"data-state":Vh(c,s),"data-value":c??void 0,"data-max":s,...o,ref:t})})},`Progress`)),Rh=`ProgressIndicator`,zh=v.forwardRef(Ah(function(e,t){let{__scopeProgress:n,...r}=e,i=Ih(Rh,n);return(0,W.jsx)(G.div,{"data-state":Vh(i.value,i.max),"data-value":i.value??void 0,"data-max":i.max,...r,ref:t})},`ProgressIndicator`));function Bh(e,t){return`${Math.round(e/t*100)}%`}Ah(Bh,`defaultGetValueLabel`);function Vh(e,t){return e==null?`indeterminate`:e===t?`complete`:`loading`}Ah(Vh,`getProgressState`);function Hh(e){return typeof e==`number`}Ah(Hh,`isNumber`);function Uh(e){return Hh(e)&&!isNaN(e)&&e>0}Ah(Uh,`isValidMaxNumber`);function Wh(e,t){return Hh(e)&&!isNaN(e)&&e<=t&&e>=0}Ah(Wh,`isValidValueNumber`);function Gh(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Mh}\`.`}Ah(Gh,`getInvalidMaxError`);function Kh(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Mh} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}Ah(Kh,`getInvalidValueError`);var qh=Object.defineProperty,Jh=(e,t)=>qh(e,`name`,{value:t,configurable:!0}),Yh=`Radio`,[Xh,Zh]=Yr(Yh),[Qh,$h]=Xh(Yh);function eg(e){let{__scopeRadio:t,checked:n=!1,children:r,disabled:i,form:a,name:o,onCheck:s,required:c,value:l=`on`,internal_do_not_use_render:u}=e,[d,f]=v.useState(null),[p,m]=v.useState(null),[h,g]=v.useState(null),_={checked:n,disabled:i,required:c,name:o,form:a,value:l,control:d,setControl:f,userClick:h,onUserClick:g,isFormControl:!d||!!a||!!d.closest(`form`),bubbleInput:p,setBubbleInput:m,onCheck:Jh(()=>s?.(),`onCheck`)};return(0,W.jsx)(Qh,{scope:t,..._,children:sg(u)?u(_):r})}Jh(eg,`RadioProvider`);var tg=`RadioTrigger`,ng=v.forwardRef(Jh(function({__scopeRadio:e,onClick:t,...n},r){let{checked:i,disabled:a,value:o,setControl:s,onCheck:c,onUserClick:l,isFormControl:u,bubbleInput:d}=$h(tg,e),f=U(r,s);return(0,W.jsx)(G.button,{type:`button`,role:`radio`,"aria-checked":i,"data-state":cg(i),"data-disabled":a?``:void 0,disabled:a,value:o,...n,ref:f,onClick:K(t,e=>{let t=e.isPropagationStopped();i||(l({hasConsumerStoppedPropagation:t}),c()),d&&u&&(t||e.stopPropagation())})})},`RadioTrigger`)),rg=`RadioIndicator`,ig=v.forwardRef(Jh(function(e,t){let{__scopeRadio:n,forceMount:r,...i}=e,a=$h(rg,n);return(0,W.jsx)(Fi,{present:r||a.checked,children:(0,W.jsx)(G.span,{"data-state":cg(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})},`RadioIndicator`)),ag=`RadioBubbleInput`,og=v.forwardRef(Jh(function({__scopeRadio:e,onClick:t,...n},r){let{control:i,checked:a,required:o,disabled:s,name:c,value:l,form:u,bubbleInput:d,setBubbleInput:f,userClick:p}=$h(ag,e),m=U(r,f),h=pl(i),g=v.useRef(!1),_=v.useRef(a),y=v.useRef(p),b=v.useRef(null);v.useEffect(()=>{let e=d;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=_.current!==a;_.current=a;let i=p!==null&&p!==y.current;if(y.current=p,i)b.current=r?null:p,r&&n.call(e,a),e.dispatchEvent(new Event(`click`,{bubbles:!p.hasConsumerStoppedPropagation}));else if(r){let t=b.current;b.current=null;let r=a&&t!==null;g.current=!0,n.call(e,a),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),g.current=!1}},[d,a,p]);let x=v.useRef(a);return(0,W.jsx)(G.input,{type:`radio`,"aria-hidden":!0,defaultChecked:x.current,required:o,disabled:s,name:c,value:l,form:u,...n,tabIndex:-1,ref:m,onClick:K(t,e=>{g.current&&e.stopPropagation()}),style:{...n.style,...h,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`RadioBubbleInput`));function sg(e){return typeof e==`function`}Jh(sg,`isFunction`);function cg(e){return e?`checked`:`unchecked`}Jh(cg,`getState`);var lg=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],ug=`RadioGroup`,[dg,fg]=Yr(ug,[kf,Zh]),pg=kf(),mg=Zh(),[hg,gg]=dg(ug),_g=v.forwardRef(Jh(function(e,t){let{__scopeRadioGroup:n,name:r,form:i,defaultValue:a,value:o,required:s=!1,disabled:c=!1,orientation:l,dir:u,loop:d=!0,onValueChange:f,...p}=e,m=pg(n),h=la(u),[g,_]=Di({prop:o,defaultProp:a??null,onChange:f,caller:ug}),[y,b]=v.useState(null),x=U(t,b),S=v.useRef(g);return v.useEffect(()=>{let e=i?y?.ownerDocument.getElementById(i):y?.closest(`form`);if(e instanceof HTMLFormElement){let t=Jh(()=>_(S.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[y,i,_]),(0,W.jsx)(hg,{scope:n,name:r,form:i,required:s,disabled:c,value:g,onValueChange:_,children:(0,W.jsx)(Pf,{asChild:!0,...m,orientation:l,dir:h,loop:d,children:(0,W.jsx)(G.div,{role:`radiogroup`,"aria-required":s,"aria-orientation":l,"data-disabled":c?``:void 0,dir:h,...p,ref:x})})})},`RadioGroup`)),vg=`RadioGroupItemProvider`,yg=`RadioGroupItemTrigger`;function bg(e){let{__scopeRadioGroup:t,value:n,disabled:r,children:i,internal_do_not_use_render:a}=e,o=gg(vg,t),s=mg(t),c=o.disabled||r;return(0,W.jsx)(eg,{...s,checked:o.value===n,disabled:c,required:o.required,name:o.name,form:o.form,value:n,onCheck:()=>o.onValueChange(n),internal_do_not_use_render:a,children:i})}Jh(bg,`RadioGroupItemProvider`);var xg=v.forwardRef(Jh(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=pg(n),a=mg(n),{checked:o,disabled:s}=$h(yg,a.__scopeRadio),c=v.useRef(null),l=U(t,c),u=v.useRef(!1);return v.useEffect(()=>{let e=Jh(e=>{lg.includes(e.key)&&(u.current=!0)},`handleKeyDown`),t=Jh(()=>u.current=!1,`handleKeyUp`);return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,W.jsx)(Lf,{asChild:!0,...i,focusable:!s,active:o,children:(0,W.jsx)(ng,{...a,...r,ref:l,onKeyDown:K(r.onKeyDown,e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:K(r.onFocus,()=>{u.current&&c.current?.click()})})})},`RadioGroupItemTrigger`)),Sg=v.forwardRef(Jh(function(e,t){let{__scopeRadioGroup:n,value:r,disabled:i,...a}=e;return(0,W.jsx)(bg,{__scopeRadioGroup:n,value:r,disabled:i,internal_do_not_use_render:({isFormControl:e})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(xg,{...a,ref:t,__scopeRadioGroup:n}),e&&(0,W.jsx)(Cg,{__scopeRadioGroup:n})]})})},`RadioGroupItem`)),Cg=v.forwardRef(Jh(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=mg(n);return(0,W.jsx)(og,{...i,...r,ref:t})},`RadioGroupItemBubbleInput`)),wg=v.forwardRef(Jh(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=mg(n);return(0,W.jsx)(ig,{...i,...r,ref:t})},`RadioGroupIndicator`)),Tg=Object.defineProperty,Eg=(e,t)=>Tg(e,`name`,{value:t,configurable:!0});function Dg(e,t){return v.useReducer((e,n)=>t[e][n]??e,e)}Eg(Dg,`useStateMachine`);var Og={Auto:`auto`,Always:`always`,Scroll:`scroll`,Hover:`hover`},kg={Vertical:`vertical`,Horizontal:`horizontal`},Ag={LTR:`ltr`,RTL:`rtl`},jg=`ScrollArea`,[Mg,Ng]=Yr(jg),[Pg,Fg]=Mg(jg),Ig=v.forwardRef(Eg(function(e,t){let{__scopeScrollArea:n,type:r=Og.Hover,dir:i,scrollHideDelay:a=600,...o}=e,[s,c]=v.useState(null),[l,u]=v.useState(null),[d,f]=v.useState(null),[p,m]=v.useState(null),[h,g]=v.useState(null),[_,y]=v.useState(0),[b,x]=v.useState(0),[S,C]=v.useState(!1),[w,T]=v.useState(!1),E=U(t,c),D=la(i);return(0,W.jsx)(Pg,{scope:n,type:r,dir:D,scrollHideDelay:a,scrollArea:s,viewport:l,onViewportChange:u,content:d,onContentChange:f,scrollbarX:p,onScrollbarXChange:m,scrollbarXEnabled:S,onScrollbarXEnabledChange:C,scrollbarY:h,onScrollbarYChange:g,scrollbarYEnabled:w,onScrollbarYEnabledChange:T,onCornerWidthChange:y,onCornerHeightChange:x,children:(0,W.jsx)(G.div,{dir:D,...o,ref:E,style:{position:`relative`,"--radix-scroll-area-corner-width":_+`px`,"--radix-scroll-area-corner-height":b+`px`,...e.style}})})},`ScrollArea`)),Lg=`ScrollAreaViewport`,Rg=Tr(Lg),zg=v.forwardRef(Eg(function(e,t){let{__scopeScrollArea:n,children:r,nonce:i,disableImplicitContentElement:a,...o}=e,s=Fg(Lg,n),c=U(t,v.useRef(null),s.onViewportChange),l=v.isValidElement(r);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Bg,{nonce:i}),(0,W.jsx)(G.div,{"data-radix-scroll-area-viewport":``,...o,ref:c,style:{overflowX:s.scrollbarXEnabled?`scroll`:`hidden`,overflowY:s.scrollbarYEnabled?`scroll`:`hidden`,...e.style},children:a?r:l?(0,W.jsx)(Rg,{child:r,children:e=>(0,W.jsx)(Hg,{__scopeScrollArea:n,children:e})}):(0,W.jsx)(Rg,{children:(0,W.jsx)(Hg,{__scopeScrollArea:n,children:r})})})]})},`ScrollAreaViewport`)),Bg=v.memo(Eg(function({nonce:e}){return(0,W.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`},nonce:e})},`ScrollAreaViewportStyle`),(e,t)=>e.nonce===t.nonce),Vg=`ScrollAreaContent`,Hg=v.forwardRef(Eg(function(e,t){let{__scopeScrollArea:n,children:r,...i}=e,a=U(t,Fg(Vg,n).onContentChange);return(0,W.jsx)(G.div,{...i,ref:a,style:{minWidth:`100%`,display:`table`,...e.style},children:r})},`ScrollAreaContent`)),Ug=`ScrollAreaScrollbar`,Wg=v.forwardRef(Eg(function(e,t){let{forceMount:n,...r}=e,i=Fg(Ug,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:o}=i,s=e.orientation===kg.Horizontal;return v.useEffect(()=>(s?a(!0):o(!0),()=>{s?a(!1):o(!1)}),[s,a,o]),i.type===Og.Hover?(0,W.jsx)(Gg,{...r,ref:t,forceMount:n}):i.type===Og.Scroll?(0,W.jsx)(Kg,{...r,ref:t,forceMount:n}):i.type===Og.Auto?(0,W.jsx)(qg,{...r,ref:t,forceMount:n}):i.type===Og.Always?(0,W.jsx)(Jg,{...r,ref:t,"data-state":`visible`}):null},`ScrollAreaScrollbar`)),Gg=v.forwardRef(Eg(function(e,t){let{forceMount:n,...r}=e,i=Fg(Ug,e.__scopeScrollArea),[a,o]=v.useState(!1);return v.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let n=Eg(()=>{window.clearTimeout(t),o(!0)},`handlePointerEnter`),r=Eg(()=>{t=window.setTimeout(()=>o(!1),i.scrollHideDelay)},`handlePointerLeave`);return e.addEventListener(`pointerenter`,n),e.addEventListener(`pointerleave`,r),()=>{window.clearTimeout(t),e.removeEventListener(`pointerenter`,n),e.removeEventListener(`pointerleave`,r)}}},[i.scrollArea,i.scrollHideDelay]),(0,W.jsx)(Fi,{present:n||a,children:(0,W.jsx)(qg,{"data-state":a?`visible`:`hidden`,...r,ref:t})})},`ScrollAreaScrollbarHover`)),Kg=v.forwardRef(Eg(function(e,t){let{forceMount:n,...r}=e,i=Fg(Ug,e.__scopeScrollArea),a=e.orientation===kg.Horizontal,o=m_(()=>c(`SCROLL_END`),100),[s,c]=Dg(`hidden`,{hidden:{SCROLL:`scrolling`},scrolling:{SCROLL_END:`idle`,POINTER_ENTER:`interacting`},interacting:{SCROLL:`interacting`,POINTER_LEAVE:`idle`},idle:{HIDE:`hidden`,SCROLL:`scrolling`,POINTER_ENTER:`interacting`}});return v.useEffect(()=>{if(s===`idle`){let e=window.setTimeout(()=>c(`HIDE`),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[s,i.scrollHideDelay,c]),v.useEffect(()=>{let e=i.viewport,t=a?`scrollLeft`:`scrollTop`;if(e){let n=e[t],r=Eg(()=>{let r=e[t];n!==r&&(c(`SCROLL`),o()),n=r},`handleScroll`);return e.addEventListener(`scroll`,r),()=>e.removeEventListener(`scroll`,r)}},[i.viewport,a,c,o]),(0,W.jsx)(Fi,{present:n||s!==`hidden`,children:(0,W.jsx)(Jg,{"data-state":s===`hidden`?`hidden`:`visible`,...r,ref:t,onPointerEnter:K(e.onPointerEnter,()=>c(`POINTER_ENTER`)),onPointerLeave:K(e.onPointerLeave,()=>c(`POINTER_LEAVE`))})})},`ScrollAreaScrollbarScroll`)),qg=v.forwardRef(Eg(function(e,t){let n=Fg(Ug,e.__scopeScrollArea),{forceMount:r,...i}=e,[a,o]=v.useState(!1),s=e.orientation===kg.Horizontal,c=m_(()=>{if(n.viewport){let e=n.viewport.offsetWidth<n.viewport.scrollWidth,t=n.viewport.offsetHeight<n.viewport.scrollHeight;o(s?e:t)}},10);return h_(n.viewport,c),h_(n.content,c),(0,W.jsx)(Fi,{present:r||a,children:(0,W.jsx)(Jg,{"data-state":a?`visible`:`hidden`,...i,ref:t})})},`ScrollAreaScrollbarAuto`)),Jg=v.forwardRef(Eg(function(e,t){let{orientation:n=kg.Vertical,...r}=e,i=Fg(Ug,e.__scopeScrollArea),a=v.useRef(null),o=v.useRef(0),[s,c]=v.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),l=s_(s.viewport,s.content),u={...r,sizes:s,onSizesChange:c,hasThumb:l>0&&l<1,onThumbChange:Eg(e=>a.current=e,`onThumbChange`),onThumbPointerUp:Eg(()=>o.current=0,`onThumbPointerUp`),onThumbPointerDown:Eg(e=>o.current=e,`onThumbPointerDown`)};function d(e,t){return l_(e,o.current,s,t)}return Eg(d,`getScrollPosition`),n===kg.Horizontal?(0,W.jsx)(Yg,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollLeft,t=u_(e,s,i.dir);a.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=d(e,i.dir))}}):n===kg.Vertical?(0,W.jsx)(Xg,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollTop,t=u_(e,s);a.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=d(e))}}):null},`ScrollAreaScrollbarVisible`)),Yg=v.forwardRef(Eg(function(e,t){let{sizes:n,onSizesChange:r,...i}=e,a=Fg(Ug,e.__scopeScrollArea),[o,s]=v.useState(),c=v.useRef(null),l=U(t,c,a.onScrollbarXChange);return v.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,W.jsx)($g,{"data-orientation":`horizontal`,...i,ref:l,sizes:n,style:{bottom:0,left:a.dir===Ag.RTL?`var(--radix-scroll-area-corner-width)`:0,right:a.dir===Ag.LTR?`var(--radix-scroll-area-corner-width)`:0,"--radix-scroll-area-thumb-width":c_(n)+`px`,...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,n)=>{if(a.viewport){let r=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(r),f_(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:o_(o.paddingLeft),paddingEnd:o_(o.paddingRight)}})}})},`ScrollAreaScrollbarX`)),Xg=v.forwardRef(Eg(function(e,t){let{sizes:n,onSizesChange:r,...i}=e,a=Fg(Ug,e.__scopeScrollArea),[o,s]=v.useState(),c=v.useRef(null),l=U(t,c,a.onScrollbarYChange);return v.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,W.jsx)($g,{"data-orientation":`vertical`,...i,ref:l,sizes:n,style:{top:0,right:a.dir===Ag.LTR?0:void 0,left:a.dir===Ag.RTL?0:void 0,bottom:`var(--radix-scroll-area-corner-height)`,"--radix-scroll-area-thumb-height":c_(n)+`px`,...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,n)=>{if(a.viewport){let r=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(r),f_(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:o_(o.paddingTop),paddingEnd:o_(o.paddingBottom)}})}})},`ScrollAreaScrollbarY`)),[Zg,Qg]=Mg(Ug),$g=v.forwardRef(Eg(function(e,t){let{__scopeScrollArea:n,sizes:r,hasThumb:i,onThumbChange:a,onThumbPointerUp:o,onThumbPointerDown:s,onThumbPositionChange:c,onDragScroll:l,onWheelScroll:u,onResize:d,...f}=e,p=Fg(Ug,n),[m,h]=v.useState(null),g=U(t,h),_=v.useRef(null),y=v.useRef(``),b=p.viewport,x=r.content-r.viewport,S=qa(u),C=qa(c),w=m_(d,10);function T(e){if(_.current){let t=e.clientX-_.current.left,n=e.clientY-_.current.top;l({x:t,y:n})}}return Eg(T,`handleDragScroll`),v.useEffect(()=>{let e=Eg(e=>{let t=e.target;m?.contains(t)&&S(e,x)},`handleWheel`);return document.addEventListener(`wheel`,e,{passive:!1}),()=>document.removeEventListener(`wheel`,e,{passive:!1})},[b,m,x,S]),v.useEffect(C,[r,C]),h_(m,w),h_(p.content,w),(0,W.jsx)(Zg,{scope:n,scrollbar:m,hasThumb:i,onThumbChange:qa(a),onThumbPointerUp:qa(o),onThumbPositionChange:C,onThumbPointerDown:qa(s),children:(0,W.jsx)(G.div,{...f,ref:g,style:{position:`absolute`,...f.style},onPointerDown:K(e.onPointerDown,e=>{e.button===0&&(e.target.setPointerCapture(e.pointerId),_.current=m.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect=`none`,p.viewport&&(p.viewport.style.scrollBehavior=`auto`),T(e))}),onPointerMove:K(e.onPointerMove,T),onPointerUp:K(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=y.current,p.viewport&&(p.viewport.style.scrollBehavior=``),_.current=null})})})},`ScrollAreaScrollbarImpl`)),e_=`ScrollAreaThumb`,t_=v.forwardRef(Eg(function(e,t){let{forceMount:n,...r}=e,i=Qg(e_,e.__scopeScrollArea);return(0,W.jsx)(Fi,{present:n||i.hasThumb,children:(0,W.jsx)(n_,{ref:t,...r})})},`ScrollAreaThumb`)),n_=v.forwardRef(Eg(function(e,t){let{__scopeScrollArea:n,style:r,...i}=e,a=Fg(e_,n),o=Qg(e_,n),{onThumbPositionChange:s}=o,c=U(t,o.onThumbChange),l=v.useRef(void 0),u=m_(()=>{l.current&&=(l.current(),void 0)},100);return v.useEffect(()=>{let e=a.viewport;if(e){let t=Eg(()=>{if(u(),!l.current){let t=p_(e,s);l.current=t,s()}},`handleScroll`);return s(),e.addEventListener(`scroll`,t),()=>e.removeEventListener(`scroll`,t)}},[a.viewport,u,s]),(0,W.jsx)(G.div,{"data-state":o.hasThumb?`visible`:`hidden`,...i,ref:c,style:{width:`var(--radix-scroll-area-thumb-width)`,height:`var(--radix-scroll-area-thumb-height)`,...r},onPointerDownCapture:K(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;o.onThumbPointerDown({x:n,y:r})}),onPointerUp:K(e.onPointerUp,o.onThumbPointerUp)})},`ScrollAreaThumbImpl`)),r_=`ScrollAreaCorner`,i_=v.forwardRef(Eg(function(e,t){let n=Fg(r_,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!==Og.Scroll&&r?(0,W.jsx)(a_,{...e,ref:t}):null},`ScrollAreaCorner`)),a_=v.forwardRef(Eg(function(e,t){let{__scopeScrollArea:n,...r}=e,i=Fg(r_,n),[a,o]=v.useState(0),[s,c]=v.useState(0),l=!!(a&&s),{onCornerWidthChange:u,onCornerHeightChange:d}=i;return h_(i.scrollbarX,()=>{let e=i.scrollbarX?.offsetHeight||0;i.onCornerHeightChange(e),c(e)}),h_(i.scrollbarY,()=>{let e=i.scrollbarY?.offsetWidth||0;i.onCornerWidthChange(e),o(e)}),v.useEffect(()=>()=>{u(0),d(0)},[u,d]),l?(0,W.jsx)(G.div,{...r,ref:t,style:{width:a,height:s,position:`absolute`,right:i.dir===Ag.LTR?0:void 0,left:i.dir===Ag.RTL?0:void 0,bottom:0,...e.style}}):null},`ScrollAreaCornerImpl`));function o_(e){return e?parseInt(e,10):0}Eg(o_,`toInt`);function s_(e,t){let n=e/t;return isNaN(n)?0:n}Eg(s_,`getThumbRatio`);function c_(e){let t=s_(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}Eg(c_,`getThumbSize`);function l_(e,t,n,r=Ag.LTR){let i=c_(n),a=i/2,o=t||a,s=i-o,c=n.scrollbar.paddingStart+o,l=n.scrollbar.size-n.scrollbar.paddingEnd-s,u=n.content-n.viewport,d=r===Ag.LTR?[0,u]:[u*-1,0];return d_([c,l],d)(e)}Eg(l_,`getScrollPositionFromPointer`);function u_(e,t,n=Ag.LTR){let r=c_(t),i=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-i,o=t.content-t.viewport,s=a-r,c=ah(e,n===Ag.LTR?[0,o]:[o*-1,0]);return d_([0,o],[0,s])(c)}Eg(u_,`getThumbOffsetFromScroll`);function d_(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}Eg(d_,`linearScale`);function f_(e,t){return e>0&&e<t}Eg(f_,`isScrollingWithinScrollbarBounds`);var p_=Eg((e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;function i(){let a={left:e.scrollLeft,top:e.scrollTop},o=n.left!==a.left,s=n.top!==a.top;(o||s)&&t(),n=a,r=window.requestAnimationFrame(i)}return Eg(i,`loop`),i(),()=>window.cancelAnimationFrame(r)},`addUnlinkedScrollListener`);function m_(e,t){let n=qa(e),r=v.useRef(0);return v.useEffect(()=>()=>window.clearTimeout(r.current),[]),v.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}Eg(m_,`useDebounceCallback`);function h_(e,t){let n=qa(t);Zr(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}Eg(h_,`useResizeObserver`);var g_=Object.defineProperty,__=(e,t)=>g_(e,`name`,{value:t,configurable:!0}),v_={ItemAligned:`item-aligned`,Popper:`popper`},y_={LTR:`ltr`,RTL:`rtl`},b_=[` `,`Enter`,`ArrowUp`,`ArrowDown`],x_=[` `,`Enter`],S_=`Select`,[C_,w_,T_]=ei(S_),[E_,D_]=Yr(S_,[T_,Yd]),O_=Yd(),[k_,A_]=E_(S_),[j_,M_]=E_(S_);function N_(e){let{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:a,value:o,defaultValue:s,onValueChange:c,dir:l,name:u,autoComplete:d,disabled:f,required:p,form:m,internal_do_not_use_render:h}=e,g=O_(t),[_,y]=v.useState(null),[b,x]=v.useState(null),[S,C]=v.useState(!1),w=la(l),[T,E]=Di({prop:r,defaultProp:i??!1,onChange:a,caller:S_}),[D,O]=Di({prop:o,defaultProp:s,onChange:c,caller:S_}),k=v.useRef(null),A=v.useRef(!1),[j,M]=v.useState(null),N=__(e=>{M({value:e,hasConsumerStoppedPropagation:A.current}),O(e)},`handleUserSelect`),P=v.useRef(D);v.useEffect(()=>{let e=m?_?.ownerDocument.getElementById(m):_?.form;if(e instanceof HTMLFormElement){let t=__(()=>O(P.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[m,_,O]);let F=!_||!!m||!!_.closest(`form`),[I,ee]=v.useState(new Set),te=Gi(),ne=Array.from(I).map(e=>e.props.value).join(`;`),re=v.useCallback(e=>{ee(t=>new Set(t).add(e))},[]),ie=v.useCallback(e=>{ee(t=>{let n=new Set(t);return n.delete(e),n})},[]),ae={required:p,trigger:_,onTriggerChange:y,valueNode:b,onValueNodeChange:x,valueNodeHasChildren:S,onValueNodeHasChildrenChange:C,contentId:te,value:D,onValueChange:O,hasConsumerStoppedPropagationRef:A,userSelection:j,onUserSelect:N,open:T,onOpenChange:E,dir:w,triggerPointerDownPosRef:k,disabled:f,name:u,autoComplete:d,form:m,nativeOptions:I,nativeSelectKey:ne,isFormControl:F};return(0,W.jsx)(Qd,{...g,children:(0,W.jsx)(k_,{scope:t,...ae,children:(0,W.jsx)(C_.Provider,{scope:t,children:(0,W.jsx)(j_,{scope:t,onNativeOptionAdd:re,onNativeOptionRemove:ie,children:bv(h)?h(ae):n})})})})}__(N_,`SelectProvider`);var P_=__(e=>{let{__scopeSelect:t,children:n,...r}=e;return(0,W.jsx)(N_,{__scopeSelect:t,...r,internal_do_not_use_render:({isFormControl:e})=>(0,W.jsxs)(W.Fragment,{children:[n,e?(0,W.jsx)(yv,{__scopeSelect:t}):null]})})},`Select`),F_=`SelectTrigger`,I_=v.forwardRef(__(function(e,t){let{__scopeSelect:n,disabled:r=!1,...i}=e,a=O_(n),o=A_(F_,n),s=o.disabled||r,c=U(t,o.onTriggerChange),l=w_(n),u=v.useRef(`touch`),[d,f,p]=Sv(e=>{let t=l().filter(e=>!e.disabled),n=Cv(t,e,t.find(e=>e.value===o.value));n!==void 0&&o.onUserSelect(n.value)}),m=__(e=>{s||(o.onOpenChange(!0),p()),e&&(o.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})},`handleOpen`);return(0,W.jsx)(ef,{asChild:!0,...a,children:(0,W.jsx)(G.button,{type:`button`,role:`combobox`,"aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":`none`,dir:o.dir,"data-state":o.open?`open`:`closed`,disabled:s,"data-disabled":s?``:void 0,"data-placeholder":xv(o.value)?``:void 0,...i,ref:c,onClick:K(i.onClick,e=>{e.currentTarget.focus(),u.current!==`mouse`&&m(e)}),onPointerDown:K(i.onPointerDown,e=>{u.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&e.pointerType===`mouse`&&(m(e),e.preventDefault())}),onKeyDown:K(i.onKeyDown,e=>{let t=d.current!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&(o.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),f(e.key)),!(t&&e.key===` `)&&b_.includes(e.key)&&(m(),e.preventDefault())})})})},`SelectTrigger`)),L_=`SelectValue`,R_=v.forwardRef(__(function(e,t){let{__scopeSelect:n,className:r,style:i,children:a,placeholder:o=``,...s}=e,c=A_(L_,n),{onValueNodeHasChildrenChange:l}=c,u=a!==void 0,d=U(t,c.onValueNodeChange);Zr(()=>{l(u)},[l,u]);let f=xv(c.value);return(0,W.jsx)(G.span,{...s,asChild:!f&&s.asChild,ref:d,style:{pointerEvents:`none`},children:(0,W.jsx)(v.Fragment,{children:f?o:a},f?`placeholder`:`value`)})},`SelectValue`)),z_=v.forwardRef(__(function(e,t){let{__scopeSelect:n,children:r,...i}=e;return(0,W.jsx)(G.span,{"aria-hidden":!0,...i,ref:t,children:r||`▼`})},`SelectIcon`)),[B_,V_]=E_(`SelectPortal`,{forceMount:void 0}),H_=__(e=>{let{__scopeSelect:t,forceMount:n,...r}=e;return(0,W.jsx)(B_,{scope:e.__scopeSelect,forceMount:n,children:(0,W.jsx)(jo,{asChild:!0,...r})})},`SelectPortal`),U_=`SelectContent`,W_=v.forwardRef(__(function(e,t){let n=V_(U_,e.__scopeSelect),{forceMount:r=n.forceMount,...i}=e,a=A_(U_,e.__scopeSelect),[o,s]=v.useState();return Zr(()=>{s(new DocumentFragment)},[]),(0,W.jsx)(Fi,{present:r||a.open,children:({present:e})=>e?(0,W.jsx)(X_,{...i,ref:t}):(0,W.jsx)(G_,{...i,fragment:o})})},`SelectContent`)),G_=v.forwardRef(__(function(e,t){let{__scopeSelect:n,children:r,fragment:i}=e;return i?ot.createPortal((0,W.jsx)(q_,{scope:n,children:(0,W.jsx)(C_.Slot,{scope:n,children:(0,W.jsx)(`div`,{ref:t,children:r})})}),i):null},`SelectContentFragment`)),K_=10,[q_,J_]=E_(U_),Y_=Sr(`SelectContent.RemoveScroll`),X_=v.forwardRef(__(function(e,t){let{__scopeSelect:n}=e,{position:r=v_.ItemAligned,onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:o,side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g,..._}=e,y=A_(U_,n),[b,x]=v.useState(null),[S,C]=v.useState(null),w=U(t,x),[T,E]=v.useState(null),[D,O]=v.useState(null),k=w_(n),[A,j]=v.useState(!1),M=v.useRef(!1),N=v.useRef(!1),P=v.useRef(!1);v.useEffect(()=>{if(b)return ec(b)},[b]),Io();let F=v.useCallback(e=>{let[t,...n]=k().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(n?.scrollIntoView({block:`nearest`}),n===t&&S&&(S.scrollTop=0),n===r&&S&&(S.scrollTop=S.scrollHeight),n?.focus(),document.activeElement!==i))return},[k,S]),I=v.useCallback(()=>F([T,b]),[F,T,b]);v.useEffect(()=>{A&&I()},[A,I]);let{onOpenChange:ee,triggerPointerDownPosRef:te}=y;v.useEffect(()=>{if(b){let e={x:0,y:0},t=__(t=>{e={x:Math.abs(Math.round(t.pageX)-(te.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(te.current?.y??0))}},`handlePointerMove`),n=__(n=>{e.x<=10&&e.y<=10?n.preventDefault():n.composedPath().includes(b)||ee(!1),document.removeEventListener(`pointermove`,t),te.current=null},`handlePointerUp`);return te.current!==null&&(document.addEventListener(`pointermove`,t),document.addEventListener(`pointerup`,n,{capture:!0,once:!0})),()=>{document.removeEventListener(`pointermove`,t),document.removeEventListener(`pointerup`,n,{capture:!0})}}},[b,ee,te]),v.useEffect(()=>{let e=__(()=>ee(!1),`close`);return window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[ee]);let[ne,re]=Sv(e=>{let t=k().filter(e=>!e.disabled),n=Cv(t,e,t.find(e=>e.ref.current===document.activeElement));n&&setTimeout(()=>n.ref.current?.focus())}),ie=v.useCallback((e,t,n)=>{let r=!N.current;r&&(N.current=!0);let i=!M.current&&!n;y.value!==void 0&&y.value===t||i?(E(e),i&&(M.current=!0)):r&&E(e)},[y.value]),ae=v.useCallback(()=>b?.focus(),[b]),oe=v.useCallback((e,t,n)=>{if(!e)return;let r=!P.current;r&&(P.current=!0);let i=!M.current&&!n;(y.value!==void 0&&y.value===t||i||r)&&O(e)},[y.value]),se=r===v_.Popper?Q_:Z_,ce=se===Q_?{side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g}:{};return(0,W.jsx)(q_,{scope:n,content:b,viewport:S,onViewportChange:C,itemRefCallback:ie,selectedItem:T,onItemLeave:ae,itemTextRefCallback:oe,focusSelectedItem:I,selectedItemText:D,position:r,isPositioned:A,searchRef:ne,children:(0,W.jsx)(Gs,{as:Y_,allowPinchZoom:!0,children:(0,W.jsx)(mo,{asChild:!0,trapped:y.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:K(i,e=>{y.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,W.jsx)(to,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>y.onOpenChange(!1),children:(0,W.jsx)(se,{role:`listbox`,id:y.contentId,"data-state":y.open?`open`:`closed`,dir:y.dir,onContextMenu:e=>e.preventDefault(),..._,...ce,onPlaced:()=>j(!0),ref:w,style:{display:`flex`,flexDirection:`column`,outline:`none`,..._.style},onKeyDown:K(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&re(e.key),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=k().filter(e=>!e.disabled).map(e=>e.ref.current);if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>F(t)),e.preventDefault()}})})})})})})},`SelectContentImpl`)),Z_=v.forwardRef(__(function(e,t){let{__scopeSelect:n,onPlaced:r,...i}=e,a=A_(U_,n),o=J_(U_,n),[s,c]=v.useState(null),[l,u]=v.useState(null),d=U(t,u),f=w_(n),p=v.useRef(!1),m=v.useRef(!0),{viewport:h,selectedItem:g,selectedItemText:_,focusSelectedItem:y}=o,b=v.useCallback(()=>{if(a.trigger&&a.valueNode&&s&&l&&h&&g&&_){let e=a.trigger.getBoundingClientRect(),t=l.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),i=_.getBoundingClientRect();if(a.dir!==y_.RTL){let r=i.left-t.left,a=n.left-r,o=e.left-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-K_,d=ah(a,[K_,Math.max(K_,u-l)]);s.style.minWidth=c+`px`,s.style.left=d+`px`}else{let r=t.right-i.right,a=window.innerWidth-n.right-r,o=window.innerWidth-e.right-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-K_,d=ah(a,[K_,Math.max(K_,u-l)]);s.style.minWidth=c+`px`,s.style.right=d+`px`}let o=f(),c=window.innerHeight-K_*2,u=h.scrollHeight,d=window.getComputedStyle(l),m=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),y=parseInt(d.borderBottomWidth,10),b=parseInt(d.paddingBottom,10),x=m+v+u+b+y,S=Math.min(g.offsetHeight*5,x),C=window.getComputedStyle(h),w=parseInt(C.paddingTop,10),T=parseInt(C.paddingBottom,10),E=e.top+e.height/2-K_,D=c-E,O=g.offsetHeight/2,k=g.offsetTop+O,A=m+v+k,j=x-A;if(A<=E){let e=o.length>0&&g===o[o.length-1].ref.current;s.style.bottom=`0px`;let t=l.clientHeight-h.offsetTop-h.offsetHeight,n=A+Math.max(D,O+(e?T:0)+t+y);s.style.height=n+`px`}else{let e=o.length>0&&g===o[0].ref.current;s.style.top=`0px`;let t=Math.max(E,m+h.offsetTop+(e?w:0)+O)+j;s.style.height=t+`px`,h.scrollTop=A-E+h.offsetTop}s.style.margin=`${K_}px 0`,s.style.minHeight=S+`px`,s.style.maxHeight=c+`px`,r?.(),requestAnimationFrame(()=>p.current=!0)}},[f,a.trigger,a.valueNode,s,l,h,g,_,a.dir,r]);Zr(()=>b(),[b]);let[x,S]=v.useState();Zr(()=>{l&&S(window.getComputedStyle(l).zIndex)},[l]);let C=v.useCallback(e=>{e&&m.current===!0&&(b(),y?.(),m.current=!1)},[b,y]);return(0,W.jsx)($_,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:p,onScrollButtonChange:C,children:(0,W.jsx)(`div`,{ref:c,style:{display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:x},children:(0,W.jsx)(G.div,{...i,ref:d,style:{boxSizing:`border-box`,maxHeight:`100%`,...i.style}})})})},`SelectItemAlignedPosition`)),Q_=v.forwardRef(__(function(e,t){let{__scopeSelect:n,align:r=`start`,collisionPadding:i=K_,...a}=e,o=O_(n);return(0,W.jsx)(af,{...o,...a,ref:t,align:r,collisionPadding:i,style:{boxSizing:`border-box`,...a.style,"--radix-select-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-select-content-available-width":`var(--radix-popper-available-width)`,"--radix-select-content-available-height":`var(--radix-popper-available-height)`,"--radix-select-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-select-trigger-height":`var(--radix-popper-anchor-height)`}})},`SelectPopperPosition`)),[$_,ev]=E_(U_,{}),tv=`SelectViewport`,nv=v.forwardRef(__(function(e,t){let{__scopeSelect:n,nonce:r,...i}=e,a=J_(tv,n),o=ev(tv,n),s=U(t,a.onViewportChange),c=v.useRef(0);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`},nonce:r}),(0,W.jsx)(C_.Slot,{scope:n,children:(0,W.jsx)(G.div,{"data-radix-select-viewport":``,role:`presentation`,...i,ref:s,style:{position:`relative`,flex:1,overflow:`hidden auto`,...i.style},onScroll:K(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=o;if(r?.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-K_*2,i=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),o=Math.max(i,a);if(o<r){let i=o+e,a=Math.min(r,i),s=i-a;n.style.height=a+`px`,n.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,n.style.justifyContent=`flex-end`)}}}c.current=t.scrollTop})})})]})},`SelectViewport`)),[rv,iv]=E_(`SelectGroup`),av=`SelectItem`,[ov,sv]=E_(av),cv=v.forwardRef(__(function(e,t){let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...o}=e,s=A_(av,n),c=J_(av,n),l=s.value===r,[u,d]=v.useState(a??``),[f,p]=v.useState(!1),m=U(t,qa(e=>c.itemRefCallback?.(e,r,i))),h=Gi(),g=v.useRef(`touch`);function _(e){s.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),s.onUserSelect(r),s.onOpenChange(!1)}return __(_,`handleSelect`),(0,W.jsx)(ov,{scope:n,value:r,disabled:i,textId:h,isSelected:l,onItemTextChange:v.useCallback(e=>{d(t=>t||(e?.textContent??``).trim())},[]),children:(0,W.jsx)(C_.ItemSlot,{scope:n,value:r,disabled:i,textValue:u,children:(0,W.jsx)(G.div,{role:`option`,"aria-labelledby":h,"data-highlighted":f?``:void 0,"aria-selected":l&&f,"data-state":l?`checked`:`unchecked`,"aria-disabled":i||void 0,"data-disabled":i?``:void 0,tabIndex:i?void 0:-1,...o,ref:m,onFocus:K(o.onFocus,()=>p(!0)),onBlur:K(o.onBlur,()=>p(!1)),onClick:K(o.onClick,e=>{i||g.current!==`mouse`&&_(e)}),onPointerUp:K(o.onPointerUp,e=>{i||g.current===`mouse`&&_(e)}),onPointerDown:K(o.onPointerDown,e=>{g.current=e.pointerType}),onPointerMove:K(o.onPointerMove,e=>{g.current=e.pointerType,i?c.onItemLeave?.():g.current===`mouse`&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:K(o.onPointerLeave,e=>{e.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:K(o.onKeyDown,e=>{i||e.target!==e.currentTarget||(c.searchRef?.current===``||e.key!==` `)&&(x_.includes(e.key)&&_(e),e.key===` `&&e.preventDefault())})})})})},`SelectItem`)),lv=`SelectItemText`,uv=v.forwardRef(__(function(e,t){let{__scopeSelect:n,className:r,style:i,...a}=e,o=A_(lv,n),s=J_(lv,n),c=sv(lv,n),l=M_(lv,n),[u,d]=v.useState(null),f=qa(e=>s.itemTextRefCallback?.(e,c.value,c.disabled)),p=U(t,d,c.onItemTextChange,f),m=u?.textContent,h=v.useMemo(()=>(0,W.jsx)(`option`,{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:g,onNativeOptionRemove:_}=l;return Zr(()=>(g(h),()=>_(h)),[g,_,h]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(G.span,{id:c.textId,...a,ref:p}),c.isSelected&&o.valueNode&&!o.valueNodeHasChildren&&!xv(o.value)?ot.createPortal(a.children,o.valueNode):null]})},`SelectItemText`)),dv=`SelectItemIndicator`,fv=v.forwardRef(__(function(e,t){let{__scopeSelect:n,...r}=e;return sv(dv,n).isSelected?(0,W.jsx)(G.span,{"aria-hidden":!0,...r,ref:t}):null},`SelectItemIndicator`)),pv=`SelectScrollUpButton`,mv=v.forwardRef(__(function(e,t){let n=J_(pv,e.__scopeSelect),r=ev(pv,e.__scopeSelect),[i,a]=v.useState(!1),o=U(t,r.onScrollButtonChange);return Zr(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollTop>0;a(e)};__(e,`handleScroll`);let t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,W.jsx)(_v,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop-=t.offsetHeight)}}):null},`SelectScrollUpButton`)),hv=`SelectScrollDownButton`,gv=v.forwardRef(__(function(e,t){let n=J_(hv,e.__scopeSelect),r=ev(hv,e.__scopeSelect),[i,a]=v.useState(!1),o=U(t,r.onScrollButtonChange);return Zr(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;a(n)};__(e,`handleScroll`);let t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,W.jsx)(_v,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop+=t.offsetHeight)}}):null},`SelectScrollDownButton`)),_v=v.forwardRef(__(function(e,t){let{__scopeSelect:n,onAutoScroll:r,...i}=e,a=J_(`SelectScrollButton`,n),o=v.useRef(null),s=w_(n),c=v.useCallback(()=>{o.current!==null&&(window.clearInterval(o.current),o.current=null)},[]);return v.useEffect(()=>()=>c(),[c]),Zr(()=>{s().find(e=>e.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:`nearest`})},[s]),(0,W.jsx)(G.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:K(i.onPointerDown,()=>{o.current===null&&(o.current=window.setInterval(r,50))}),onPointerMove:K(i.onPointerMove,()=>{a.onItemLeave?.(),o.current===null&&(o.current=window.setInterval(r,50))}),onPointerLeave:K(i.onPointerLeave,()=>{c()})})},`SelectScrollButtonImpl`)),vv=`SelectBubbleInput`,yv=v.forwardRef(__(function({__scopeSelect:e,...t},n){let r=A_(vv,e),{value:i,onValueChange:a,required:o,disabled:s,name:c,autoComplete:l,form:u,userSelection:d}=r,{nativeOptions:f,nativeSelectKey:p}=r,m=v.useRef(null),h=U(n,m),g=i??``,_=v.useRef(g),y=v.useRef(d),b=v.useRef(!1),x=Array.from(f).some(e=>(e.props.value??``)===``);return v.useEffect(()=>{let e=m.current;if(!e)return;let t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set,r=d!==null&&d!==y.current;y.current=d;let i=_.current!==g;_.current=g;let a=r&&i;if(r&&!i&&d.value!==g&&!d.hasConsumerStoppedPropagation&&n){b.current=!0;try{n.call(e,d.value),e.dispatchEvent(new Event(`change`,{bubbles:!0}))}finally{b.current=!1,n.call(e,g)}return}let o=a&&!d.hasConsumerStoppedPropagation;if(i&&n){let t=new Event(`change`,{bubbles:o});n.call(e,g),e.dispatchEvent(t)}},[g,d]),(0,W.jsxs)(G.select,{"aria-hidden":!0,required:o,tabIndex:-1,name:c,autoComplete:l,disabled:s,form:u,onChange:e=>{b.current||a(e.target.value)},...t,style:{...Wr,...t.style},ref:h,defaultValue:g,children:[xv(i)&&!x?(0,W.jsx)(`option`,{value:``}):null,Array.from(f)]},p)},`SelectBubbleInput`));function bv(e){return typeof e==`function`}__(bv,`isFunction`);function xv(e){return e===``||e===void 0}__(xv,`shouldShowPlaceholder`);function Sv(e){let t=qa(e),n=v.useRef(``),r=v.useRef(0),i=v.useCallback(e=>{let i=n.current+e;t(i);function a(e){n.current=e,window.clearTimeout(r.current),e!==``&&(r.current=window.setTimeout(()=>a(``),1e3))}__(a,`updateSearch`),a(i)},[t]),a=v.useCallback(()=>{n.current=``,window.clearTimeout(r.current)},[]);return v.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,a]}__(Sv,`useTypeaheadSearch`);function Cv(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=wv(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}__(Cv,`findNextItem`);function wv(e,t){return e.map((n,r)=>e[(t+r)%e.length])}__(wv,`wrapArray`);var Tv=Object.defineProperty,Ev=(e,t)=>Tv(e,`name`,{value:t,configurable:!0}),Dv={Horizontal:`horizontal`,Vertical:`vertical`},Ov=Dv.Horizontal,kv=Object.values(Dv),Av=v.forwardRef(Ev(function(e,t){let{decorative:n,orientation:r=Ov,...i}=e,a=jv(r)?r:Ov,o=a===Dv.Vertical?a:void 0,s=n?{role:`none`}:{"aria-orientation":o,role:`separator`};return(0,W.jsx)(G.div,{"data-orientation":a,...s,...i,ref:t})},`Separator`));function jv(e){return kv.includes(e)}Ev(jv,`isValidOrientation`);var Mv=Object.defineProperty,Nv=(e,t)=>Mv(e,`name`,{value:t,configurable:!0}),Pv={Vertical:`vertical`,Horizontal:`horizontal`},Fv={LTR:`ltr`,RTL:`rtl`},Iv=[`PageUp`,`PageDown`],Lv=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],Rv={"from-left":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-right":[`Home`,`PageDown`,`ArrowDown`,`ArrowRight`],"from-bottom":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-top":[`Home`,`PageDown`,`ArrowUp`,`ArrowLeft`]},zv=`Slider`,[Bv,Vv,Hv]=ei(zv),[Uv,Wv]=Yr(zv,[Hv]),[Gv,Kv]=Uv(zv),qv=v.forwardRef(Nv(function(e,t){let{name:n,min:r=0,max:i=100,step:a=1,orientation:o=Pv.Horizontal,disabled:s=!1,minStepsBetweenThumbs:c=0,preserveThumbOrder:l=!1,defaultValue:u=[r],value:d,onValueChange:f=Nv(()=>{},`onValueChange`),onValueCommit:p=Nv(()=>{},`onValueCommit`),inverted:m=!1,form:h,...g}=e,_=v.useRef(new Set),y=v.useRef(0),b=v.useRef(!1),[x,S]=v.useState(null),C=o===Pv.Horizontal?Xv:Zv,[w,T]=v.useState(null),E=U(t,T),[D=[],O]=Di({prop:d,defaultProp:u,onChange:Nv(e=>{[..._.current][y.current]?.focus({preventScroll:!0,focusVisible:b.current}),b.current=!1,f(e)},`onChange`)}),k=v.useRef(D),A=v.useRef(D);v.useEffect(()=>{let e=h?w?.ownerDocument.getElementById(h):w?.closest(`form`);if(e instanceof HTMLFormElement){let t=Nv(()=>O(A.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[w,h,O]);function j(e){P(e,hy(D,e))}Nv(j,`handleSlideStart`);function M(e){P(e,y.current)}Nv(M,`handleSlideMove`);function N(){String(D)!==String(k.current)&&p(D)}Nv(N,`handleSlideEnd`);function P(e,t,{commit:n}={commit:!1}){let o=by(a),s=ah(xy(Math.round((e-r)/a)*a+r,o),[r,i]),u=c*a;function d(e){let n=l?ah(s,[e[t-1]===void 0?r:e[t-1]+u,e[t+1]===void 0?i:e[t+1]-u]):s,a=fy(e,n,t);return vy(a,u)?{nextValues:a,changedIndex:l?t:a.indexOf(n),hasChanged:String(a)!==String(e)}:null}Nv(d,`getNextValues`);let f=d(D);f?.hasChanged&&S(f.nextValues),O((e=[])=>{let t=d(e);return t?(y.current=t.changedIndex,t.hasChanged&&n&&p(t.nextValues),t.hasChanged?t.nextValues:e):e})}return Nv(P,`updateValues`),(0,W.jsx)(Gv,{scope:e.__scopeSlider,name:n,disabled:s,min:r,max:i,valueIndexToChangeRef:y,thumbs:_.current,values:D,orientation:o,form:h,userRequestedValues:x,children:(0,W.jsx)(Bv.Provider,{scope:e.__scopeSlider,children:(0,W.jsx)(Bv.Slot,{scope:e.__scopeSlider,children:(0,W.jsx)(C,{"aria-disabled":s,"data-disabled":s?``:void 0,...g,ref:E,onPointerDown:K(g.onPointerDown,()=>{s||(k.current=D,b.current=!1)}),min:r,max:i,inverted:m,onSlideStart:s?void 0:j,onSlideMove:s?void 0:M,onSlideEnd:s?void 0:N,onHomeKeyDown:()=>{s||(b.current=!0,P(r,0,{commit:!0}))},onEndKeyDown:()=>{s||(b.current=!0,P(i,D.length-1,{commit:!0}))},onStepKeyDown:({event:e,direction:t})=>{if(!s){b.current=!0;let n=Iv.includes(e.key)||e.shiftKey&&Lv.includes(e.key)?10:1,i=y.current,o=D[i];P(Sy(o,{min:r,step:a,direction:t,multiplier:n}),i,{commit:!0})}}})})})})},`Slider`)),[Jv,Yv]=Uv(zv,{startEdge:`left`,endEdge:`right`,size:`width`,direction:1}),Xv=v.forwardRef(Nv(function(e,t){let{min:n,max:r,dir:i,inverted:a,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...u}=e,[d,f]=v.useState(null),p=U(t,f),m=v.useRef(void 0),h=la(i),g=h===Fv.LTR,_=g&&!a||!g&&a;function y(e){let t=m.current||d.getBoundingClientRect(),i=yy([0,t.width],_?[n,r]:[r,n]);return m.current=t,i(e-t.left)}return Nv(y,`getValueFromPointer`),(0,W.jsx)(Jv,{scope:e.__scopeSlider,startEdge:_?`left`:`right`,endEdge:_?`right`:`left`,direction:_?1:-1,size:`width`,children:(0,W.jsx)(Qv,{dir:h,"data-orientation":`horizontal`,...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":`translateX(-50%)`},onSlideStart:e=>{let t=y(e.clientX);o?.(t)},onSlideMove:e=>{let t=y(e.clientX);s?.(t)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:e=>{let t=Rv[_?`from-left`:`from-right`].includes(e.key);l?.({event:e,direction:t?-1:1})}})})},`SliderHorizontal`)),Zv=v.forwardRef(Nv(function(e,t){let{min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...l}=e,u=v.useRef(null),d=U(t,u),f=v.useRef(void 0),p=!i;function m(e){let t=f.current||u.current.getBoundingClientRect(),i=yy([0,t.height],p?[r,n]:[n,r]);return f.current=t,i(e-t.top)}return Nv(m,`getValueFromPointer`),(0,W.jsx)(Jv,{scope:e.__scopeSlider,startEdge:p?`bottom`:`top`,endEdge:p?`top`:`bottom`,size:`height`,direction:p?1:-1,children:(0,W.jsx)(Qv,{"data-orientation":`vertical`,...l,ref:d,style:{...l.style,"--radix-slider-thumb-transform":`translateY(50%)`},onSlideStart:e=>{let t=m(e.clientY);a?.(t)},onSlideMove:e=>{let t=m(e.clientY);o?.(t)},onSlideEnd:()=>{f.current=void 0,s?.()},onStepKeyDown:e=>{let t=Rv[p?`from-bottom`:`from-top`].includes(e.key);c?.({event:e,direction:t?-1:1})}})})},`SliderVertical`)),Qv=v.forwardRef(Nv(function(e,t){let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:c,...l}=e,u=Kv(zv,n);return(0,W.jsx)(G.span,{...l,ref:t,onKeyDown:K(e.onKeyDown,e=>{e.key===`Home`?(o(e),e.preventDefault()):e.key===`End`?(s(e),e.preventDefault()):Iv.concat(Lv).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:K(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus({preventScroll:!0,focusVisible:!1}):r(e)}),onPointerMove:K(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:K(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})},`SliderImpl`)),$v=`SliderTrack`,ey=v.forwardRef(Nv(function(e,t){let{__scopeSlider:n,...r}=e,i=Kv($v,n);return(0,W.jsx)(G.span,{"data-disabled":i.disabled?``:void 0,"data-orientation":i.orientation,...r,ref:t})},`SliderTrack`)),ty=`SliderRange`,ny=v.forwardRef(Nv(function(e,t){let{__scopeSlider:n,...r}=e,i=Kv(ty,n),a=Yv(ty,n),o=U(t,v.useRef(null)),s=i.values.length,c=i.values.map(e=>py(e,i.min,i.max)),l=s>1?Math.min(...c):0,u=100-Math.max(...c);return(0,W.jsx)(G.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,...r,ref:o,style:{...e.style,[a.startEdge]:l+`%`,[a.endEdge]:u+`%`}})},`SliderRange`)),[ry,iy]=Uv(`SliderThumb`),ay=`SliderThumbProvider`;function oy(e){let{__scopeSlider:t,name:n,children:r,internal_do_not_use_render:i}=e,a=Kv(ay,t),o=Vv(t),[s,c]=v.useState(null),l=v.useMemo(()=>s?o().findIndex(e=>e.ref.current===s):-1,[o,s]),u=pl(s),d=!s||!!a.form||!!s.closest(`form`),f=a.values[l],p=n??(a.name?a.name+(a.values.length>1?`[]`:``):void 0),m=f===void 0?0:py(f,a.min,a.max);v.useEffect(()=>{if(s)return a.thumbs.add(s),()=>{a.thumbs.delete(s)}},[s,a.thumbs]);let h={value:f,name:p,form:a.form,isFormControl:d,index:l,thumb:s,onThumbChange:c,percent:m,size:u};return(0,W.jsx)(ry,{scope:t,...h,children:Cy(i)?i(h):r})}Nv(oy,`SliderThumbProvider`);var sy=`SliderThumbTrigger`,cy=v.forwardRef(Nv(function(e,t){let{__scopeSlider:n,...r}=e,i=Kv(sy,n),a=Yv(sy,n),{index:o,value:s,percent:c,size:l,onThumbChange:u}=iy(sy,n),d=U(t,u),f=my(o,i.values.length),p=l?.[a.size],m=p?gy(p,c,a.direction):0;return(0,W.jsx)(`span`,{style:{transform:`var(--radix-slider-thumb-transform)`,position:`absolute`,[a.startEdge]:`calc(${c}% + ${m}px)`},children:(0,W.jsx)(Bv.ItemSlot,{scope:n,children:(0,W.jsx)(G.span,{role:`slider`,"aria-label":e[`aria-label`]||f,"aria-valuemin":i.min,"aria-valuenow":s,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,tabIndex:i.disabled?void 0:0,...r,ref:d,style:s===void 0?{display:`none`}:e.style,onFocus:K(e.onFocus,()=>{i.valueIndexToChangeRef.current=o})})})})},`SliderThumbTrigger`)),ly=v.forwardRef(Nv(function(e,t){let{__scopeSlider:n,name:r,...i}=e;return(0,W.jsx)(oy,{__scopeSlider:n,name:r,internal_do_not_use_render:({index:e,isFormControl:r})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(cy,{...i,ref:t,__scopeSlider:n}),r?(0,W.jsx)(dy,{__scopeSlider:n},e):null]})})},`SliderThumb`)),uy=`SliderBubbleInput`,dy=v.forwardRef(Nv(function({__scopeSlider:e,onInput:t,...n},r){let{index:i,value:a,name:o,form:s}=iy(uy,e),{userRequestedValues:c}=Kv(uy,e),l=v.useRef(null),u=U(l,r),d=v.useRef(!1),f=v.useRef(a),p=v.useRef(c),m=v.useRef(c);return v.useEffect(()=>{let e=l.current;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set,r=f.current,o=r!==a;f.current=a;let s=c!==m.current;if(m.current=c,o&&n){let t=c!==p.current;p.current=c;let o=c?.[i];d.current=!(t&&(s&&o!==r||o===a));let l=new Event(`input`,{bubbles:!0});n.call(e,a),e.dispatchEvent(l),d.current=!1}},[i,a,c]),(0,W.jsx)(G.input,{style:{display:`none`},name:o,form:s,...n,ref:u,defaultValue:a,onInput:K(t,e=>{d.current&&e.stopPropagation()})})},`SliderBubbleInput`));function fy(e=[],t,n){let r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}Nv(fy,`getNextSortedValues`);function py(e,t,n){return ah(100/(n-t)*(e-t),[0,100])}Nv(py,`convertValueToPercentage`);function my(e,t){if(t>2)return`Value ${e+1} of ${t}`;if(t===2)return[`Minimum`,`Maximum`][e]}Nv(my,`getLabel`);function hy(e,t){if(e.length===1)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}Nv(hy,`getClosestValueIndex`);function gy(e,t,n){let r=e/2;return(r-yy([0,50],[0,r])(t)*n)*n}Nv(gy,`getThumbInBoundsOffset`);function _y(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}Nv(_y,`getStepsBetweenValues`);function vy(e,t){if(t>0){let n=_y(e);return Math.min(...n)>=t}return!0}Nv(vy,`hasMinStepsBetweenValues`);function yy(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}Nv(yy,`linearScale`);function by(e){if(!Number.isFinite(e))return 0;let t=e.toString();if(t.includes(`e`)){let[e,n]=t.split(`e`),r=e.split(`.`)[1]||``,i=Number(n);return Math.max(0,r.length-i)}let n=t.split(`.`)[1];return n?n.length:0}Nv(by,`getDecimalCount`);function xy(e,t){let n=10**t;return Math.round(e*n)/n}Nv(xy,`roundValue`);function Sy(e,{min:t,step:n,direction:r,multiplier:i}){let a=by(n),o=(e-t)/n,s=Math.round(o),c=xy(s*n+t,a)===xy(e,a),l;return l=c?s+i*r:r>0?Math.ceil(o):Math.floor(o),xy(l*n+t,a)}Nv(Sy,`getNextStepValue`);function Cy(e){return typeof e==`function`}Nv(Cy,`isFunction`);var wy=Object.defineProperty,Ty=(e,t)=>wy(e,`name`,{value:t,configurable:!0}),Ey=`Switch`,[Dy,Oy]=Yr(Ey),[ky,Ay]=Dy(Ey);function jy(e){let{__scopeSwitch:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:u=`on`,internal_do_not_use_render:d}=e,[f,p]=Di({prop:n,defaultProp:i??!1,onChange:c,caller:Ey}),[m,h]=v.useState(null),[g,_]=v.useState(null),[y,b]=v.useState(null),x={checked:f,setChecked:p,disabled:a,control:m,setControl:h,name:s,form:o,value:u,userClick:y,onUserClick:b,required:l,defaultChecked:i,isFormControl:!m||!!o||!!m.closest(`form`),bubbleInput:g,setBubbleInput:_};return(0,W.jsx)(ky,{scope:t,...x,children:zy(d)?d(x):r})}Ty(jy,`SwitchProvider`);var My=`SwitchTrigger`,Ny=v.forwardRef(Ty(function({__scopeSwitch:e,onClick:t,...n},r){let{control:i,form:a,value:o,disabled:s,checked:c,required:l,setControl:u,setChecked:d,onUserClick:f,isFormControl:p,bubbleInput:m}=Ay(My,e),h=U(r,u),g=v.useRef(c);return v.useEffect(()=>{let e=a?i?.ownerDocument.getElementById(a):i?.form;if(e instanceof HTMLFormElement){let t=Ty(()=>d(g.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[i,a,d]),(0,W.jsx)(G.button,{type:`button`,role:`switch`,"aria-checked":c,"aria-required":l,"data-state":By(c),"data-disabled":s?``:void 0,disabled:s,value:o,...n,ref:h,onClick:K(t,e=>{let t=e.isPropagationStopped();f({requestedChecked:!c,hasConsumerStoppedPropagation:t}),d(e=>!e),m&&p&&(t||e.stopPropagation())})})},`SwitchTrigger`)),Py=v.forwardRef(Ty(function(e,t){let{__scopeSwitch:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,W.jsx)(jy,{__scopeSwitch:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Ny,{...d,ref:t,__scopeSwitch:n}),e&&(0,W.jsx)(Ry,{__scopeSwitch:n})]})})},`Switch`)),Fy=`SwitchThumb`,Iy=v.forwardRef(Ty(function(e,t){let{__scopeSwitch:n,...r}=e,i=Ay(Fy,n);return(0,W.jsx)(G.span,{"data-state":By(i.checked),"data-disabled":i.disabled?``:void 0,...r,ref:t})},`SwitchThumb`)),Ly=`SwitchBubbleInput`,Ry=v.forwardRef(Ty(function({__scopeSwitch:e,onClick:t,...n},r){let{control:i,userClick:a,checked:o,defaultChecked:s,required:c,disabled:l,name:u,value:d,form:f,bubbleInput:p,setBubbleInput:m}=Ay(Ly,e),h=U(r,m),g=pl(i),_=v.useRef(!1),y=v.useRef(o),b=v.useRef(a),x=v.useRef(null);v.useEffect(()=>{let e=p;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=y.current!==o;y.current=o;let i=a!==null&&a!==b.current;if(b.current=a,i)x.current=r?null:a,r&&n.call(e,o),e.dispatchEvent(new Event(`click`,{bubbles:!a.hasConsumerStoppedPropagation}));else if(r){let t=x.current;x.current=null;let r=t?.requestedChecked===o;_.current=!0,n.call(e,o),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),_.current=!1}},[p,o,a]);let S=v.useRef(o);return(0,W.jsx)(G.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:s??S.current,required:c,disabled:l,name:u,value:d,form:f,...n,tabIndex:-1,ref:h,onClick:K(t,e=>{_.current&&e.stopPropagation()}),style:{...n.style,...g,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`SwitchBubbleInput`));function zy(e){return typeof e==`function`}Ty(zy,`isFunction`);function By(e){return e?`checked`:`unchecked`}Ty(By,`getState`);var Vy=Object.defineProperty,Hy=(e,t)=>Vy(e,`name`,{value:t,configurable:!0}),Uy={Automatic:`automatic`,Manual:`manual`},Wy=`Tabs`,[Gy,Ky]=Yr(Wy,[kf]),qy=kf(),[Jy,Yy]=Gy(Wy),Xy=v.forwardRef(Hy(function(e,t){let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o=`horizontal`,dir:s,activationMode:c=Uy.Automatic,...l}=e,u=la(s),[d,f]=Di({prop:r,onChange:i,defaultProp:a??``,caller:Wy});return(0,W.jsx)(Jy,{scope:n,baseId:Gi(),value:d,onValueChange:f,orientation:o,dir:u,activationMode:c,children:(0,W.jsx)(G.div,{dir:u,"data-orientation":o,...l,ref:t})})},`Tabs`)),Zy=`TabsList`,Qy=v.forwardRef(Hy(function(e,t){let{__scopeTabs:n,loop:r=!0,...i}=e,a=Yy(Zy,n),o=qy(n);return(0,W.jsx)(Pf,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,W.jsx)(G.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})},`TabsList`)),$y=`TabsTrigger`,eb=v.forwardRef(Hy(function(e,t){let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=Yy($y,n),s=qy(n),c=rb(o.baseId,r),l=ib(o.baseId,r),u=r===o.value;return(0,W.jsx)(Lf,{asChild:!0,...s,focusable:!i,active:u,children:(0,W.jsx)(G.button,{type:`button`,role:`tab`,"aria-selected":u,"aria-controls":l,"data-state":u?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:c,...a,ref:t,onMouseDown:K(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?(e.currentTarget.focus(),o.onValueChange(r)):e.preventDefault()}),onKeyDown:K(e.onKeyDown,e=>{i||e.target!==e.currentTarget||[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:K(e.onFocus,()=>{let e=o.activationMode!==Uy.Manual;!u&&!i&&e&&o.onValueChange(r)})})})},`TabsTrigger`)),tb=`TabsContent`,nb=v.forwardRef(Hy(function(e,t){let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,s=Yy(tb,n),c=rb(s.baseId,r),l=ib(s.baseId,r),u=r===s.value,d=v.useRef(u);return v.useEffect(()=>{let e=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,W.jsx)(Fi,{present:i||u,children:({present:n})=>(0,W.jsx)(G.div,{"data-state":u?`active`:`inactive`,"data-orientation":s.orientation,role:`tabpanel`,"aria-labelledby":c,hidden:!n,id:l,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:d.current?`0s`:void 0},children:n&&a})})},`TabsContent`));function rb(e,t){return`${e}-trigger-${t}`}Hy(rb,`makeTriggerId`);function ib(e,t){return`${e}-content-${t}`}Hy(ib,`makeContentId`);var ab=Object.defineProperty,ob=(e,t)=>ab(e,`name`,{value:t,configurable:!0}),sb=`Toggle`,cb=v.forwardRef(ob(function(e,t){let{pressed:n,defaultPressed:r,onPressedChange:i,...a}=e,[o,s]=Di({prop:n,onChange:i,defaultProp:r??!1,caller:sb});return(0,W.jsx)(G.button,{type:`button`,"aria-pressed":o,"data-state":o?`on`:`off`,"data-disabled":e.disabled?``:void 0,...a,ref:t,onClick:K(e.onClick,()=>{e.disabled||s(!o)})})},`Toggle`)),lb=Object.defineProperty,ub=(e,t)=>lb(e,`name`,{value:t,configurable:!0}),db=`ToggleGroup`,fb={Single:`single`,Multiple:`multiple`},[pb,mb]=Yr(db,[kf]),hb=kf(),gb=v.forwardRef(ub(function(e,t){let{type:n,...r}=e;if(n===fb.Single)return(0,W.jsx)(yb,{role:`radiogroup`,...r,ref:t});if(n===fb.Multiple)return(0,W.jsx)(bb,{role:`toolbar`,...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${db}\``)},`ToggleGroup`)),[_b,vb]=pb(db),yb=v.forwardRef(ub(function(e,t){let{value:n,defaultValue:r,onValueChange:i=ub(()=>{},`onValueChange`),...a}=e,[o,s]=Di({prop:n,defaultProp:r??``,onChange:i,caller:db});return(0,W.jsx)(_b,{scope:e.__scopeToggleGroup,type:fb.Single,value:v.useMemo(()=>o?[o]:[],[o]),onItemActivate:s,onItemDeactivate:v.useCallback(()=>s(``),[s]),children:(0,W.jsx)(Cb,{...a,ref:t})})},`ToggleGroupImplSingle`)),bb=v.forwardRef(ub(function(e,t){let{value:n,defaultValue:r,onValueChange:i=ub(()=>{},`onValueChange`),...a}=e,[o,s]=Di({prop:n,defaultProp:r??[],onChange:i,caller:db}),c=v.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=v.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,W.jsx)(_b,{scope:e.__scopeToggleGroup,type:fb.Multiple,value:o,onItemActivate:c,onItemDeactivate:l,children:(0,W.jsx)(Cb,{...a,ref:t})})},`ToggleGroupImplMultiple`)),[xb,Sb]=pb(db),Cb=v.forwardRef(ub(function(e,t){let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:a,dir:o,loop:s=!0,...c}=e,l=hb(n),u=la(o),d={dir:u,...c};return(0,W.jsx)(xb,{scope:n,rovingFocus:i,disabled:r,children:i?(0,W.jsx)(Pf,{asChild:!0,...l,orientation:a,dir:u,loop:s,children:(0,W.jsx)(G.div,{...d,ref:t})}):(0,W.jsx)(G.div,{...d,ref:t})})},`ToggleGroupImpl`)),wb=`ToggleGroupItem`,Tb=v.forwardRef(ub(function(e,t){let n=vb(wb,e.__scopeToggleGroup),r=Sb(wb,e.__scopeToggleGroup),i=hb(e.__scopeToggleGroup),a=n.value.includes(e.value),o=r.disabled||e.disabled,s={...e,pressed:a,disabled:o},c=v.useRef(null);return r.rovingFocus?(0,W.jsx)(Lf,{asChild:!0,...i,focusable:!o,active:a,ref:c,children:(0,W.jsx)(Eb,{...s,ref:t})}):(0,W.jsx)(Eb,{...s,ref:t})},`ToggleGroupItem`)),Eb=v.forwardRef(ub(function(e,t){let{__scopeToggleGroup:n,value:r,...i}=e,a=vb(wb,n),o={role:`radio`,"aria-checked":e.pressed,"aria-pressed":void 0},s=a.type===fb.Single?o:void 0;return(0,W.jsx)(cb,{...s,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})},`ToggleGroupItemImpl`)),Db=Object.defineProperty,Ob=(e,t)=>Db(e,`name`,{value:t,configurable:!0}),[kb,Ab]=Yr(`Tooltip`,[Yd]),jb=Yd(),Mb=`TooltipProvider`,Nb=700,Pb=`tooltip.open`,[Fb,Ib]=kb(Mb),Lb=Ob(e=>{let{__scopeTooltip:t,delayDuration:n=Nb,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,o=v.useRef(!0),s=v.useRef(!1),c=v.useRef(0);return v.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,W.jsx)(Fb,{scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:v.useCallback(()=>{r<=0||(window.clearTimeout(c.current),o.current=!1)},[r]),onClose:v.useCallback(()=>{r<=0||(window.clearTimeout(c.current),c.current=window.setTimeout(()=>o.current=!0,r))},[r]),isPointerInTransitRef:s,onPointerInTransitChange:v.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:a})},`TooltipProvider`),Rb=`Tooltip`,[zb,Bb]=kb(Rb),Vb=Ob(e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:a,disableHoverableContent:o,delayDuration:s}=e,c=Ib(Rb,e.__scopeTooltip),l=jb(t),[u,d]=v.useState(null),[f,p]=v.useState(void 0),m=Gi(),h=v.useRef(0),g=o??c.disableHoverableContent,_=s??c.delayDuration,y=v.useRef(!1),[b,x]=Di({prop:r,defaultProp:i??!1,onChange:Ob(e=>{e?(c.onOpen(),document.dispatchEvent(new CustomEvent(Pb))):c.onClose(),a?.(e)},`onChange`),caller:Rb}),S=v.useMemo(()=>b?y.current?`delayed-open`:`instant-open`:`closed`,[b]),C=v.useCallback(()=>{window.clearTimeout(h.current),h.current=0,y.current=!1,x(!0)},[x]),w=v.useCallback(()=>{window.clearTimeout(h.current),h.current=0,x(!1)},[x]),T=v.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>{y.current=!0,x(!0),h.current=0},_)},[_,x]);v.useEffect(()=>()=>{h.current&&=(window.clearTimeout(h.current),0)},[]);let E=f??m;return(0,W.jsx)(Qd,{...l,children:(0,W.jsx)(zb,{scope:t,contentId:E,setContentId:p,open:b,stateAttribute:S,trigger:u,onTriggerChange:d,onTriggerEnter:v.useCallback(()=>{c.isOpenDelayedRef.current?T():C()},[c.isOpenDelayedRef,T,C]),onTriggerLeave:v.useCallback(()=>{g?w():(window.clearTimeout(h.current),h.current=0)},[w,g]),onOpen:C,onClose:w,disableHoverableContent:g,children:n})})},`Tooltip`),Hb=`TooltipTrigger`,Ub=v.forwardRef(Ob(function(e,t){let{__scopeTooltip:n,"aria-describedby":r,...i}=e,a=Bb(Hb,n),o=Ib(Hb,n),s=jb(n),c=U(t,v.useRef(null),a.onTriggerChange),l=v.useRef(!1),u=v.useRef(!1),d=v.useCallback(()=>l.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener(`pointerup`,d),[d]),(0,W.jsx)(ef,{asChild:!0,...s,children:(0,W.jsx)(G.button,{"aria-describedby":a.open?ox(r,a.contentId):r,"data-state":a.stateAttribute,...i,ref:c,onPointerMove:K(e.onPointerMove,e=>{e.pointerType!==`touch`&&!u.current&&!o.isPointerInTransitRef.current&&(a.onTriggerEnter(),u.current=!0)}),onPointerLeave:K(e.onPointerLeave,()=>{a.onTriggerLeave(),u.current=!1}),onPointerDown:K(e.onPointerDown,()=>{a.open&&a.onClose(),l.current=!0,document.addEventListener(`pointerup`,d,{once:!0})}),onFocus:K(e.onFocus,()=>{l.current||a.onOpen()}),onBlur:K(e.onBlur,a.onClose),onClick:K(e.onClick,a.onClose)})})},`TooltipTrigger`)),Wb=`TooltipPortal`,[Gb,Kb]=kb(Wb,{forceMount:void 0}),qb=Ob(e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:i}=e,a=Bb(Wb,t);return(0,W.jsx)(Gb,{scope:t,forceMount:n,children:(0,W.jsx)(Fi,{present:n||a.open,children:(0,W.jsx)(jo,{asChild:!0,container:i,children:r})})})},`TooltipPortal`),Jb=`TooltipContent`,Yb=v.forwardRef(Ob(function(e,t){let n=Kb(Jb,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i=`top`,...a}=e,o=Bb(Jb,e.__scopeTooltip);return(0,W.jsx)(Fi,{present:r||o.open,children:o.disableHoverableContent?(0,W.jsx)(Qb,{side:i,...a,ref:t}):(0,W.jsx)(Xb,{side:i,...a,ref:t})})},`TooltipContent`)),Xb=v.forwardRef(Ob(function(e,t){let n=Bb(Jb,e.__scopeTooltip),r=Ib(Jb,e.__scopeTooltip),i=v.useRef(null),a=U(t,i),[o,s]=v.useState(null),{trigger:c,onClose:l}=n,u=i.current,{onPointerInTransitChange:d}=r,f=v.useCallback(()=>{s(null),d(!1)},[d]),p=v.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},i=tx(r,ex(r,n.getBoundingClientRect())),a=nx(t.getBoundingClientRect()),o=ix([...i,...a]);s(o),d(!0)},[d]);return v.useEffect(()=>()=>f(),[f]),v.useEffect(()=>{if(c&&u){let e=Ob(e=>p(e,u),`handleTriggerLeave`),t=Ob(e=>p(e,c),`handleContentLeave`);return c.addEventListener(`pointerleave`,e),u.addEventListener(`pointerleave`,t),()=>{c.removeEventListener(`pointerleave`,e),u.removeEventListener(`pointerleave`,t)}}},[c,u,p,f]),v.useEffect(()=>{if(o){let e=Ob(e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=c?.contains(t)||u?.contains(t),i=!rx(n,o);r?f():i&&(f(),l())},`handleTrackPointerGrace`);return document.addEventListener(`pointermove`,e),()=>document.removeEventListener(`pointermove`,e)}},[c,u,o,l,f]),(0,W.jsx)(Qb,{...e,ref:a})},`TooltipContentHoverable`)),Zb=Tr(`TooltipContent`),Qb=v.forwardRef(Ob(function(e,t){let{__scopeTooltip:n,children:r,"aria-label":i,id:a,onEscapeKeyDown:o,onPointerDownOutside:s,...c}=e,l=Bb(Jb,n),u=jb(n),{onClose:d}=l,[f,p]=v.useState(null),m=U(t,p);vo(f),v.useEffect(()=>(document.addEventListener(Pb,d),()=>document.removeEventListener(Pb,d)),[d]),v.useEffect(()=>{if(l.trigger){let e=Ob(e=>{e.target instanceof Node&&e.target.contains(l.trigger)&&d()},`handleScroll`);return window.addEventListener(`scroll`,e,{capture:!0}),()=>window.removeEventListener(`scroll`,e,{capture:!0})}},[l.trigger,d]);let{setContentId:h}=l;return Zr(()=>(h(a),()=>{h(void 0)}),[a,h]),(0,W.jsx)(to,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:d,children:(0,W.jsxs)(af,{"data-state":l.stateAttribute,role:i?void 0:`tooltip`,id:i?void 0:l.contentId,...u,...c,ref:m,style:{...c.style,"--radix-tooltip-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-tooltip-content-available-width":`var(--radix-popper-available-width)`,"--radix-tooltip-content-available-height":`var(--radix-popper-available-height)`,"--radix-tooltip-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-tooltip-trigger-height":`var(--radix-popper-anchor-height)`},children:[(0,W.jsx)(Zb,{children:r}),i?(0,W.jsx)(Gr,{id:l.contentId,role:`tooltip`,children:i}):null]})})},`TooltipContentImpl`)),$b=v.forwardRef(Ob(function(e,t){let{__scopeTooltip:n,...r}=e,i=jb(n);return(0,W.jsx)(cf,{...i,...r,ref:t})},`TooltipArrow`));function ex(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return`left`;case i:return`right`;case n:return`top`;case r:return`bottom`;default:throw Error(`unreachable`)}}Ob(ex,`getExitSideFromRect`);function tx(e,t,n=5){let r=[];switch(t){case`top`:r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case`bottom`:r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case`left`:r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case`right`:r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}Ob(tx,`getPaddedExitPoints`);function nx(e){let{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}Ob(nx,`getPointsFromRect`);function rx(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e],s=t[a],c=o.x,l=o.y,u=s.x,d=s.y;l>r!=d>r&&n<(u-c)*(r-l)/(d-l)+c&&(i=!i)}return i}Ob(rx,`isPointInPolygon`);function ix(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)),ax(t)}Ob(ix,`getHull`);function ax(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}Ob(ax,`getHullPresorted`);function ox(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}Ob(ox,`concatAriaDescribedby`);var sx=Ut(`inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/90`,brand:`rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90`,destructive:`bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40`,outline:`border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,ghost:`hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-11 px-4 py-2 has-[>svg]:px-3`,xs:`h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,lg:`h-12 rounded-md px-6 has-[>svg]:px-4`,icon:`size-11`,"icon-xs":`size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-8`,"icon-lg":`size-12`}},defaultVariants:{variant:`default`,size:`default`}});function Q({className:e,variant:t=`default`,size:n=`default`,asChild:r=!1,...i}){let a=r?Cr:`button`;return(0,W.jsx)(a,{"data-slot":`button`,"data-variant":t,"data-size":n,className:H(sx({variant:t,size:n,className:e})),...i})}var cx=Ut(`inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3`,{variants:{variant:{default:`bg-primary text-primary-foreground [a&]:hover:bg-primary/90`,secondary:`bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90`,destructive:`bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90`,outline:`border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,ghost:`[a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,link:`text-primary underline-offset-4 [a&]:hover:underline`}},defaultVariants:{variant:`default`}});function lx({className:e,variant:t=`default`,asChild:n=!1,...r}){let i=n?Cr:`span`;return(0,W.jsx)(i,{"data-slot":`badge`,"data-variant":t,className:H(cx({variant:t}),e),...r})}function ux({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`card`,className:H(`flex flex-col gap-6 rounded-xl bg-card py-6 text-card-foreground shadow-[var(--sft-shadow-surface)]`,e),...t})}function dx({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`card-header`,className:H(`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`,e),...t})}function fx({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`card-title`,className:H(`leading-none font-semibold`,e),...t})}function px({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`card-description`,className:H(`text-sm text-muted-foreground`,e),...t})}function mx({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`card-content`,className:H(`px-6`,e),...t})}function hx({className:e,type:t,...n}){return(0,W.jsx)(`input`,{type:t,"data-slot":`input`,className:H(`h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30`,`focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`,`aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40`,e),...n})}function gx({className:e,...t}){return(0,W.jsx)(`textarea`,{"data-slot":`textarea`,className:H(`flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40`,e),...t})}function _x({className:e,...t}){return(0,W.jsx)(am,{"data-slot":`label`,className:H(`flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,e),...t})}function vx({className:e,...t}){return(0,W.jsx)(wl,{"data-slot":`checkbox`,className:H(`peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary`,e),...t,children:(0,W.jsx)(El,{"data-slot":`checkbox-indicator`,className:`grid place-content-center text-current transition-none`,children:(0,W.jsx)(Fe,{className:`size-3.5`})})})}function yx({className:e,size:t=`default`,...n}){return(0,W.jsx)(Py,{"data-slot":`switch`,"data-size":t,className:H(`peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80`,e),...n,children:(0,W.jsx)(Iy,{"data-slot":`switch-thumb`,className:H(`pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground`)})})}function bx({className:e,...t}){return(0,W.jsx)(_g,{"data-slot":`radio-group`,className:H(`grid gap-3`,e),...t})}function xx({className:e,...t}){return(0,W.jsx)(Sg,{"data-slot":`radio-group-item`,className:H(`aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40`,e),...t,children:(0,W.jsx)(wg,{"data-slot":`radio-group-indicator`,className:`relative flex items-center justify-center`,children:(0,W.jsx)(He,{className:`absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary`})})})}function Sx({...e}){return(0,W.jsx)(P_,{"data-slot":`select`,...e})}function Cx({...e}){return(0,W.jsx)(R_,{"data-slot":`select-value`,...e})}function wx({className:e,size:t=`default`,children:n,...r}){return(0,W.jsxs)(I_,{"data-slot":`select-trigger`,"data-size":t,className:H(`flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,e),...r,children:[n,(0,W.jsx)(z_,{asChild:!0,children:(0,W.jsx)(Ie,{className:`size-4 opacity-50`})})]})}function Tx({className:e,children:t,position:n=`item-aligned`,align:r=`center`,...i}){return(0,W.jsx)(H_,{children:(0,W.jsxs)(W_,{"data-slot":`select-content`,className:H(`relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,n===`popper`&&`data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,e),position:n,align:r,...i,children:[(0,W.jsx)(Dx,{}),(0,W.jsx)(nv,{className:H(`p-1`,n===`popper`&&`h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1`),children:t}),(0,W.jsx)(Ox,{})]})})}function Ex({className:e,children:t,...n}){return(0,W.jsxs)(cv,{"data-slot":`select-item`,className:H(`relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,e),...n,children:[(0,W.jsx)(`span`,{"data-slot":`select-item-indicator`,className:`absolute right-2 flex size-3.5 items-center justify-center`,children:(0,W.jsx)(fv,{children:(0,W.jsx)(Fe,{className:`size-4`})})}),(0,W.jsx)(uv,{children:t})]})}function Dx({className:e,...t}){return(0,W.jsx)(mv,{"data-slot":`select-scroll-up-button`,className:H(`flex cursor-default items-center justify-center py-1`,e),...t,children:(0,W.jsx)(ze,{className:`size-4`})})}function Ox({className:e,...t}){return(0,W.jsx)(gv,{"data-slot":`select-scroll-down-button`,className:H(`flex cursor-default items-center justify-center py-1`,e),...t,children:(0,W.jsx)(Ie,{className:`size-4`})})}function kx({...e}){return(0,W.jsx)(cc,{"data-slot":`dialog`,...e})}function Ax({...e}){return(0,W.jsx)(uc,{"data-slot":`dialog-trigger`,...e})}function jx({...e}){return(0,W.jsx)(mc,{"data-slot":`dialog-portal`,...e})}function Mx({...e}){return(0,W.jsx)(Dc,{"data-slot":`dialog-close`,...e})}function Nx({className:e,...t}){return(0,W.jsx)(gc,{"data-slot":`dialog-overlay`,className:H(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,e),...t})}function Px({className:e,children:t,showCloseButton:n=!0,...r}){return(0,W.jsxs)(jx,{"data-slot":`dialog-portal`,children:[(0,W.jsx)(Nx,{}),(0,W.jsxs)(bc,{"data-slot":`dialog-content`,className:H(`fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg`,e),...r,children:[t,n&&(0,W.jsxs)(Dc,{"data-slot":`dialog-close`,className:`absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,children:[(0,W.jsx)(at,{}),(0,W.jsx)(`span`,{className:`sr-only`,children:`Chiudi`})]})]})]})}function Fx({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`dialog-header`,className:H(`flex flex-col gap-2 text-center sm:text-left`,e),...t})}function Ix({className:e,showCloseButton:t=!1,children:n,...r}){return(0,W.jsxs)(`div`,{"data-slot":`dialog-footer`,className:H(`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,e),...r,children:[n,t&&(0,W.jsx)(Dc,{asChild:!0,children:(0,W.jsx)(Q,{variant:`outline`,children:`Chiudi`})})]})}function Lx({className:e,...t}){return(0,W.jsx)(wc,{"data-slot":`dialog-title`,className:H(`text-lg leading-none font-semibold`,e),...t})}function Rx({className:e,...t}){return(0,W.jsx)(Tc,{"data-slot":`dialog-description`,className:H(`text-sm text-muted-foreground`,e),...t})}function zx({...e}){return(0,W.jsx)(Fc,{"data-slot":`alert-dialog`,...e})}function Bx({...e}){return(0,W.jsx)(Ic,{"data-slot":`alert-dialog-trigger`,...e})}function Vx({...e}){return(0,W.jsx)(Lc,{"data-slot":`alert-dialog-portal`,...e})}function Hx({className:e,...t}){return(0,W.jsx)(Rc,{"data-slot":`alert-dialog-overlay`,className:H(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,e),...t})}function Ux({className:e,size:t=`default`,...n}){return(0,W.jsxs)(Vx,{children:[(0,W.jsx)(Hx,{}),(0,W.jsx)(Vc,{"data-slot":`alert-dialog-content`,"data-size":t,className:H(`group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg`,e),...n})]})}function Wx({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`alert-dialog-header`,className:H(`grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]`,e),...t})}function Gx({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`alert-dialog-footer`,className:H(`flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end`,e),...t})}function Kx({className:e,...t}){return(0,W.jsx)(Hc,{"data-slot":`alert-dialog-title`,className:H(`text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2`,e),...t})}function qx({className:e,...t}){return(0,W.jsx)(Uc,{"data-slot":`alert-dialog-description`,className:H(`text-sm text-muted-foreground`,e),...t})}function Jx({className:e,variant:t=`default`,size:n=`default`,...r}){return(0,W.jsx)(Q,{variant:t,size:n,asChild:!0,children:(0,W.jsx)(Wc,{"data-slot":`alert-dialog-action`,className:H(e),...r})})}function Yx({className:e,variant:t=`outline`,size:n=`default`,...r}){return(0,W.jsx)(Q,{variant:t,size:n,asChild:!0,children:(0,W.jsx)(Kc,{"data-slot":`alert-dialog-cancel`,className:H(e),...r})})}function Xx({...e}){return(0,W.jsx)(cc,{"data-slot":`sheet`,...e})}function Zx({...e}){return(0,W.jsx)(uc,{"data-slot":`sheet-trigger`,...e})}function Qx({...e}){return(0,W.jsx)(mc,{"data-slot":`sheet-portal`,...e})}function $x({className:e,...t}){return(0,W.jsx)(gc,{"data-slot":`sheet-overlay`,className:H(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,e),...t})}function eS({className:e,children:t,side:n=`right`,showCloseButton:r=!0,...i}){return(0,W.jsxs)(Qx,{children:[(0,W.jsx)($x,{}),(0,W.jsxs)(bc,{"data-slot":`sheet-content`,className:H(`fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500`,n===`right`&&`inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,n===`left`&&`inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,n===`top`&&`inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`,n===`bottom`&&`inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,e),...i,children:[t,r&&(0,W.jsxs)(Dc,{className:`absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary`,children:[(0,W.jsx)(at,{className:`size-4`}),(0,W.jsx)(`span`,{className:`sr-only`,children:`Chiudi`})]})]})]})}function tS({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`sheet-header`,className:H(`flex flex-col gap-1.5 p-4`,e),...t})}function nS({className:e,...t}){return(0,W.jsx)(wc,{"data-slot":`sheet-title`,className:H(`font-semibold text-foreground`,e),...t})}function rS({className:e,...t}){return(0,W.jsx)(Tc,{"data-slot":`sheet-description`,className:H(`text-sm text-muted-foreground`,e),...t})}function iS({className:e,orientation:t=`horizontal`,...n}){return(0,W.jsx)(Xy,{"data-slot":`tabs`,"data-orientation":t,orientation:t,className:H(`group/tabs flex gap-2 data-[orientation=horizontal]:flex-col`,e),...n})}var aS=Ut(`group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none`,{variants:{variant:{default:`bg-muted`,line:`gap-1 bg-transparent`}},defaultVariants:{variant:`default`}});function oS({className:e,variant:t=`default`,...n}){return(0,W.jsx)(Qy,{"data-slot":`tabs-list`,"data-variant":t,className:H(aS({variant:t}),e),...n})}function sS({className:e,...t}){return(0,W.jsx)(eb,{"data-slot":`tabs-trigger`,className:H(`relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,`group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent`,`data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground`,`after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100`,e),...t})}function cS({className:e,...t}){return(0,W.jsx)(nb,{"data-slot":`tabs-content`,className:H(`flex-1 outline-none`,e),...t})}function lS({...e}){return(0,W.jsx)(Ca,{"data-slot":`accordion`,...e})}function uS({className:e,...t}){return(0,W.jsx)(Ia,{"data-slot":`accordion-item`,className:H(`border-b last:border-b-0`,e),...t})}function dS({className:e,children:t,...n}){return(0,W.jsx)(Ra,{className:`flex`,children:(0,W.jsxs)(Ba,{"data-slot":`accordion-trigger`,className:H(`flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180`,e),...n,children:[t,(0,W.jsx)(Ie,{className:`pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200`})]})})}function fS({className:e,children:t,...n}){return(0,W.jsx)(Ha,{"data-slot":`accordion-content`,className:`overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,...n,children:(0,W.jsx)(`div`,{className:H(`pt-0 pb-4`,e),children:t})})}function pS({delayDuration:e=0,...t}){return(0,W.jsx)(Lb,{"data-slot":`tooltip-provider`,delayDuration:e,...t})}function mS({...e}){return(0,W.jsx)(Vb,{"data-slot":`tooltip`,...e})}function hS({...e}){return(0,W.jsx)(Ub,{"data-slot":`tooltip-trigger`,...e})}function gS({className:e,sideOffset:t=0,children:n,...r}){return(0,W.jsx)(qb,{children:(0,W.jsxs)(Yb,{"data-slot":`tooltip-content`,sideOffset:t,className:H(`z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`,e),...r,children:[n,(0,W.jsx)($b,{className:`z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground`})]})})}function _S({...e}){return(0,W.jsx)(Yp,{"data-slot":`dropdown-menu`,...e})}function vS({...e}){return(0,W.jsx)(Zp,{"data-slot":`dropdown-menu-trigger`,...e})}function yS({className:e,sideOffset:t=4,...n}){return(0,W.jsx)(Qp,{children:(0,W.jsx)(em,{"data-slot":`dropdown-menu-content`,sideOffset:t,className:H(`z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,e),...n})})}function bS({className:e,inset:t,variant:n=`default`,...r}){return(0,W.jsx)(nm,{"data-slot":`dropdown-menu-item`,"data-inset":t,"data-variant":n,className:H(`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!`,e),...r})}function xS({className:e,inset:t,...n}){return(0,W.jsx)(tm,{"data-slot":`dropdown-menu-label`,"data-inset":t,className:H(`px-2 py-1.5 text-sm font-medium data-[inset]:pl-8`,e),...n})}function SS({className:e,...t}){return(0,W.jsx)(rm,{"data-slot":`dropdown-menu-separator`,className:H(`-mx-1 my-1 h-px bg-border`,e),...t})}function CS({className:e,orientation:t=`horizontal`,decorative:n=!0,...r}){return(0,W.jsx)(Av,{"data-slot":`separator`,decorative:n,orientation:t,className:H(`shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,e),...r})}function wS({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`skeleton`,className:H(`animate-pulse rounded-md bg-accent`,e),...t})}function TS({className:e,size:t=`default`,...n}){return(0,W.jsx)(il,{"data-slot":`avatar`,"data-size":t,className:H(`group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6`,e),...n})}function ES({className:e,...t}){return(0,W.jsx)(ol,{"data-slot":`avatar-fallback`,className:H(`flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs`,e),...t})}function DS({className:e,value:t,...n}){return(0,W.jsx)(Lh,{"data-slot":`progress`,className:H(`relative h-2 w-full overflow-hidden rounded-full bg-primary/20`,e),...n,children:(0,W.jsx)(zh,{"data-slot":`progress-indicator`,className:`h-full w-full flex-1 bg-primary transition-all`,style:{transform:`translateX(-${100-(t||0)}%)`}})})}function OS({className:e,defaultValue:t,value:n,min:r=0,max:i=100,...a}){let o=v.useMemo(()=>Array.isArray(n)?n:Array.isArray(t)?t:[r,i],[n,t,r,i]);return(0,W.jsxs)(qv,{"data-slot":`slider`,defaultValue:t,value:n,min:r,max:i,className:H(`relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col`,e),...a,children:[(0,W.jsx)(ey,{"data-slot":`slider-track`,className:H(`relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5`),children:(0,W.jsx)(ny,{"data-slot":`slider-range`,className:H(`absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full`)})}),Array.from({length:o.length},(e,t)=>(0,W.jsx)(ly,{"data-slot":`slider-thumb`,className:`block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`},t))]})}function kS({className:e,children:t,...n}){return(0,W.jsxs)(Ig,{"data-slot":`scroll-area`,className:H(`relative`,e),...n,children:[(0,W.jsx)(zg,{"data-slot":`scroll-area-viewport`,className:`size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1`,children:t}),(0,W.jsx)(AS,{}),(0,W.jsx)(i_,{})]})}function AS({className:e,orientation:t=`vertical`,...n}){return(0,W.jsx)(Wg,{"data-slot":`scroll-area-scrollbar`,orientation:t,className:H(`flex touch-none p-px transition-colors select-none`,t===`vertical`&&`h-full w-2.5 border-l border-l-transparent`,t===`horizontal`&&`h-2.5 flex-col border-t border-t-transparent`,e),...n,children:(0,W.jsx)(t_,{"data-slot":`scroll-area-thumb`,className:`relative flex-1 rounded-full bg-border`})})}function jS({...e}){return(0,W.jsx)(`nav`,{"aria-label":`breadcrumb`,"data-slot":`breadcrumb`,...e})}function MS({className:e,...t}){return(0,W.jsx)(`ol`,{"data-slot":`breadcrumb-list`,className:H(`flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5`,e),...t})}function NS({className:e,...t}){return(0,W.jsx)(`li`,{"data-slot":`breadcrumb-item`,className:H(`inline-flex items-center gap-1.5`,e),...t})}function PS({asChild:e,className:t,...n}){let r=e?Cr:`a`;return(0,W.jsx)(r,{"data-slot":`breadcrumb-link`,className:H(`transition-colors hover:text-foreground`,t),...n})}function FS({className:e,...t}){return(0,W.jsx)(`span`,{"data-slot":`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:H(`font-normal text-foreground`,e),...t})}function IS({children:e,className:t,...n}){return(0,W.jsx)(`li`,{"data-slot":`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`,className:H(`[&>svg]:size-3.5`,t),...n,children:e??(0,W.jsx)(Re,{})})}var LS=(e,t,n,r,i,a,o,s)=>{let c=document.documentElement,l=[`light`,`dark`];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n=e===`class`,r=n&&a?i.map(e=>a[e]||e):i;n?(c.classList.remove(...r),c.classList.add(a&&a[t]?a[t]:t)):c.setAttribute(e,t)}),d(t)}function d(e){s&&l.includes(e)&&(c.style.colorScheme=e)}function f(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}if(r)u(r);else try{let e=localStorage.getItem(t)||n;u(o&&e===`system`?f():e)}catch{}},RS=v.createContext(void 0),zS={setTheme:e=>{},themes:[]},BS=()=>v.useContext(RS)??zS;v.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:o,themes:s,nonce:c,scriptProps:l})=>{let u=JSON.stringify([n,t,a,e,s,o,r,i]).slice(1,-1);return v.createElement(`script`,{...l,suppressHydrationWarning:!0,nonce:typeof window>`u`?c:``,dangerouslySetInnerHTML:{__html:`(${LS.toString()})(${u})`}})});var VS=({...e})=>{let{theme:t=`system`}=BS();return(0,W.jsx)(Rt,{theme:t,className:`toaster group`,icons:{success:(0,W.jsx)(Ve,{className:`size-4`}),info:(0,W.jsx)(Ke,{className:`size-4`}),warning:(0,W.jsx)(tt,{className:`size-4`}),error:(0,W.jsx)(Ze,{className:`size-4`}),loading:(0,W.jsx)(Je,{className:`size-4 animate-spin`})},style:{"--normal-bg":`var(--popover)`,"--normal-text":`var(--popover-foreground)`,"--normal-border":`var(--border)`,"--border-radius":`var(--radius)`},...e})},HS=Ut(`inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-transparent`,outline:`border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground`},size:{default:`h-9 min-w-9 px-2`,sm:`h-8 min-w-8 px-1.5`,lg:`h-10 min-w-10 px-2.5`}},defaultVariants:{variant:`default`,size:`default`}});function US({className:e,variant:t,size:n,...r}){return(0,W.jsx)(cb,{"data-slot":`toggle`,className:H(HS({variant:t,size:n,className:e})),...r})}var WS=v.createContext({size:`default`,variant:`default`,spacing:0});function GS({className:e,variant:t,size:n,spacing:r=0,children:i,...a}){return(0,W.jsx)(gb,{"data-slot":`toggle-group`,"data-variant":t,"data-size":n,"data-spacing":r,style:{"--gap":r},className:H(`group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs`,e),...a,children:(0,W.jsx)(WS.Provider,{value:{variant:t,size:n,spacing:r},children:i})})}function KS({className:e,children:t,variant:n,size:r,...i}){let a=v.useContext(WS);return(0,W.jsx)(Tb,{"data-slot":`toggle-group-item`,"data-variant":a.variant||n,"data-size":a.size||r,"data-spacing":a.spacing,className:H(HS({variant:a.variant||n,size:a.size||r}),`w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10`,`data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l`,e),...i,children:t})}var qS=Ut(`relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current`,{variants:{variant:{default:`bg-card text-card-foreground`,destructive:`bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current`}},defaultVariants:{variant:`default`}});function JS({className:e,variant:t,...n}){return(0,W.jsx)(`div`,{"data-slot":`alert`,role:`alert`,className:H(qS({variant:t}),e),...n})}function YS({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`alert-title`,className:H(`col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,e),...t})}function XS({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`alert-description`,className:H(`col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed`,e),...t})}function ZS({className:e,children:t,viewport:n=!0,...r}){return(0,W.jsxs)(Dm,{"data-slot":`navigation-menu`,"data-viewport":n,className:H(`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center`,e),...r,children:[t,n&&(0,W.jsx)(eC,{})]})}function QS({className:e,...t}){return(0,W.jsx)(Am,{"data-slot":`navigation-menu-list`,className:H(`group flex flex-1 list-none items-center justify-center gap-1`,e),...t})}function $S({className:e,...t}){return(0,W.jsx)(Nm,{"data-slot":`navigation-menu-item`,className:H(`relative`,e),...t})}function eC({className:e,...t}){return(0,W.jsx)(`div`,{className:H(`absolute top-full left-0 isolate z-50 flex justify-center`),children:(0,W.jsx)(Vm,{"data-slot":`navigation-menu-viewport`,className:H(`origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]`,e),...t})})}function tC({className:e,...t}){return(0,W.jsx)(Fm,{"data-slot":`navigation-menu-link`,className:H(`flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,e),...t})}function nC({className:e,...t}){return(0,W.jsx)(`nav`,{role:`navigation`,"aria-label":`pagination`,"data-slot":`pagination`,className:H(`mx-auto flex w-full justify-center`,e),...t})}function rC({className:e,...t}){return(0,W.jsx)(`ul`,{"data-slot":`pagination-content`,className:H(`flex flex-row items-center gap-1`,e),...t})}function iC({...e}){return(0,W.jsx)(`li`,{"data-slot":`pagination-item`,...e})}function aC({className:e,isActive:t,size:n=`icon`,...r}){return(0,W.jsx)(`a`,{"aria-current":t?`page`:void 0,"data-slot":`pagination-link`,"data-active":t,className:H(sx({variant:t?`outline`:`ghost`,size:n}),e),...r})}function oC({...e}){return(0,W.jsx)(Qi,{"data-slot":`collapsible`,...e})}function sC({...e}){return(0,W.jsx)(ea,{"data-slot":`collapsible-trigger`,...e})}function cC({...e}){return(0,W.jsx)(na,{"data-slot":`collapsible-content`,...e})}function lC({...e}){return(0,W.jsx)(Jc,{"data-slot":`aspect-ratio`,...e})}function uC({className:e,...t}){return(0,W.jsx)(Je,{role:`status`,"aria-label":`Loading`,className:H(`size-4 animate-spin`,e),...t})}function dC({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`empty`,className:H(`flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12`,e),...t})}function fC({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`empty-header`,className:H(`flex max-w-sm flex-col items-center gap-2 text-center`,e),...t})}function pC({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`empty-title`,className:H(`text-lg font-medium tracking-tight`,e),...t})}function mC({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`empty-description`,className:H(`text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary`,e),...t})}var hC=Ut(`group/field flex w-full gap-3 data-[invalid=true]:text-destructive`,{variants:{orientation:{vertical:[`flex-col [&>*]:w-full [&>.sr-only]:w-auto`],horizontal:[`flex-row items-center`,`[&>[data-slot=field-label]]:flex-auto`,`has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px`],responsive:[`flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto`,`@md/field-group:[&>[data-slot=field-label]]:flex-auto`,`@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px`]}},defaultVariants:{orientation:`vertical`}});function gC({className:e,orientation:t=`vertical`,...n}){return(0,W.jsx)(`div`,{role:`group`,"data-slot":`field`,"data-orientation":t,className:H(hC({orientation:t}),e),...n})}function _C({className:e,...t}){return(0,W.jsx)(_x,{"data-slot":`field-label`,className:H(`group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50`,`has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4`,`has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10`,e),...t})}function vC({className:e,...t}){return(0,W.jsx)(`p`,{"data-slot":`field-description`,className:H(`text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance`,`last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5`,`[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary`,e),...t})}function yC({assetBase:e=`/brand`,inverse:t=!1,label:n=`Foiling Team`,className:r=``}){return(0,W.jsxs)(`span`,{className:`sft-brand ${r}`,children:[(0,W.jsx)(`img`,{src:`${e}/logos/${t?`sft-white`:`sft-burgundy`}.svg`,alt:``,width:36,height:48}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`strong`,{children:`SAPIENZA`}),(0,W.jsx)(`small`,{children:n})]})]})}function bC({loading:e=!1,children:t,disabled:n,...r}){return(0,W.jsxs)(Q,{...r,disabled:n||e,"aria-busy":e||void 0,children:[e&&(0,W.jsx)(Je,{"aria-hidden":`true`,className:`animate-spin`}),t]})}function xC({eyebrow:e,title:t,description:n,actions:r,level:i=1}){return(0,W.jsxs)(`header`,{className:`flex flex-wrap items-end justify-between gap-6`,children:[(0,W.jsxs)(`div`,{children:[e&&(0,W.jsx)(`p`,{className:`sft-eyebrow mb-3 text-primary`,children:e}),(0,W.jsx)(i===1?`h1`:i===2?`h2`:`h3`,{className:`sft-display text-4xl md:text-5xl`,children:t}),n&&(0,W.jsx)(`p`,{className:`mt-3 max-w-prose text-muted-foreground`,children:n})]}),r]})}function SC({image:e,alt:t,title:n,description:r,eyebrow:i,children:a,level:o=1}){return(0,W.jsxs)(`section`,{className:`sft-hero`,children:[(0,W.jsx)(`img`,{src:e,alt:t,fetchPriority:`high`}),(0,W.jsxs)(`div`,{children:[i&&(0,W.jsx)(`p`,{className:`sft-eyebrow mb-5`,children:i}),(0,W.jsx)(o===1?`h1`:`h2`,{className:`sft-display`,children:n}),(0,W.jsx)(`p`,{children:r}),(0,W.jsx)(`div`,{className:`mt-7 flex flex-wrap gap-3`,children:a})]})]})}var CC=[{id:`scafo`,name:`Scafo e terrazze`,description:`Progettazione dello scafo e delle strutture.`,icon:nt},{id:`management`,name:`Management e Comunicazione`,description:`Relazioni, organizzazione e racconto del progetto.`,icon:Ye},{id:`materiali`,name:`Materiali e Sostenibilità`,description:`Scelta dei materiali e valutazione del loro impatto.`,icon:qe},{id:`manufacturing`,name:`Manufacturing e Cantiere`,description:`Costruzione, lavorazioni e assemblaggio.`,icon:it},{id:`foil`,name:`Foil e Controllo di Volo`,description:`Foil, assetto e regolazione del volo.`,icon:rt},{id:`elettronica`,name:`Elettronica e Software`,description:`Elettronica di bordo e strumenti software.`,icon:Ue},{id:`shore`,name:`Shore Team e Logistica`,description:`Preparazione, logistica e supporto a terra.`,icon:ke}];function wC({department:e,href:t}){let n=e.icon;return(0,W.jsxs)(ux,{className:`h-full`,children:[(0,W.jsxs)(dx,{children:[(0,W.jsx)(n,{className:`mb-6 size-7 text-primary`,"aria-hidden":`true`}),(0,W.jsx)(fx,{className:`font-display text-2xl`,children:e.name})]}),(0,W.jsxs)(mx,{children:[(0,W.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e.description}),t&&(0,W.jsx)(Q,{asChild:!0,variant:`link`,className:`mt-4 px-0`,children:(0,W.jsxs)(`a`,{href:t,children:[`Scopri il reparto`,(0,W.jsx)(Me,{"aria-hidden":`true`})]})})]})]})}var TC={neutral:`bg-muted text-muted-foreground`,success:`bg-success-soft text-success`,warning:`bg-warning-soft text-warning`,info:`bg-info-soft text-info`,danger:`bg-destructive/10 text-destructive`};function EC({tone:e=`neutral`,children:t}){return(0,W.jsx)(lx,{className:H(`border-transparent`,TC[e]),children:t})}function DC({label:e,value:t,unit:n,description:r}){return(0,W.jsx)(ux,{children:(0,W.jsxs)(mx,{className:`pt-6`,children:[(0,W.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e}),(0,W.jsxs)(`p`,{className:`my-3 font-mono text-3xl font-medium tabular-nums`,children:[t,n&&(0,W.jsx)(`span`,{className:`ml-2 text-base text-muted-foreground`,children:n})]}),r&&(0,W.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:r})]})})}function OC({title:e,description:t,action:n}){return(0,W.jsxs)(`div`,{className:`rounded-xl border border-dashed p-10 text-center`,children:[(0,W.jsx)(nt,{className:`mx-auto mb-4 size-7 text-primary`,"aria-hidden":`true`}),(0,W.jsx)(`h3`,{className:`font-display text-2xl font-bold`,children:e}),(0,W.jsx)(`p`,{className:`mx-auto mt-2 max-w-sm text-sm text-muted-foreground`,children:t}),n&&(0,W.jsx)(`div`,{className:`mt-5`,children:n})]})}function kC({sponsors:e}){return(0,W.jsx)(`ul`,{className:`sft-sponsor-grid`,children:e.map(e=>(0,W.jsx)(`li`,{children:e.href?(0,W.jsx)(`a`,{href:e.href,"aria-label":e.name,children:(0,W.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})}):(0,W.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})},e.name))})}function AC({kind:e,title:t,description:n,image:r,alt:i,href:a,meta:o}){return(0,W.jsxs)(ux,{className:`overflow-hidden p-0`,children:[(0,W.jsx)(`img`,{src:r,alt:i,className:`aspect-[16/10] w-full object-cover`,loading:`lazy`}),(0,W.jsxs)(dx,{children:[(0,W.jsxs)(`p`,{className:`sft-eyebrow text-primary`,children:[e,o&&` · ${o}`]}),(0,W.jsx)(fx,{className:`font-display text-2xl`,children:(0,W.jsx)(`a`,{className:`hover:underline underline-offset-4`,href:a,children:t})})]}),(0,W.jsx)(mx,{className:`pb-6 text-sm text-muted-foreground`,children:n})]})}function jC({title:e,time:t,description:n}){return(0,W.jsxs)(`li`,{className:`flex gap-4 border-b py-4`,children:[(0,W.jsx)(`span`,{className:`mt-2 size-2 shrink-0 rounded-full bg-primary`,"aria-hidden":`true`}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`p`,{className:`font-medium`,children:e}),n&&(0,W.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:n}),(0,W.jsx)(`time`,{dateTime:t.iso,className:`mt-2 block text-xs text-muted-foreground`,children:t.label})]})]})}function MC({kind:e=`update`,title:t,description:n,image:r,assetBase:i=`./brand`,footer:a=`Sapienza Foiling Team`,format:o=`post`}){return(0,W.jsxs)(`article`,{className:H(`sft-template`,e===`technical`&&`technical`,o),children:[(0,W.jsx)(`img`,{src:r,alt:``}),(0,W.jsx)(yC,{inverse:!0,assetBase:i}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`p`,{className:`sft-eyebrow mb-3`,children:{update:`Dal progetto all’acqua`,recruiting:`Dentro il team`,technical:`Come funziona`,event:`Eventi e regate`,sponsor:`Insieme al team`}[e]}),(0,W.jsx)(`h3`,{children:t}),(0,W.jsx)(`p`,{children:n})]}),(0,W.jsxs)(`footer`,{children:[(0,W.jsx)(`span`,{children:a}),(0,W.jsx)(`span`,{children:`SFT`})]})]})}var NC=365.2425,PC=6048e5,FC=864e5,IC=86400;IC*7,IC*NC/12*3;var LC=Symbol.for(`constructDateFrom`);function RC(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&LC in e?e[LC](t):e instanceof Date?new e.constructor(t):new Date(t)}function zC(e,t){return RC(t||e,e)}function BC(e,t,n){let r=zC(e,n?.in);return isNaN(t)?RC(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function VC(e,t,n){let r=zC(e,n?.in);if(isNaN(t))return RC(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=RC(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}var HC={};function UC(){return HC}function WC(e,t){let n=UC(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=zC(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function GC(e,t){return WC(e,{...t,weekStartsOn:1})}function KC(e,t){let n=zC(e,t?.in),r=n.getFullYear(),i=RC(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=GC(i),o=RC(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=GC(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function qC(e){let t=zC(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-n}function JC(e,...t){let n=RC.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function YC(e,t){let n=zC(e,t?.in);return n.setHours(0,0,0,0),n}function XC(e,t,n){let[r,i]=JC(n?.in,e,t),a=YC(r),o=YC(i),s=+a-qC(a),c=+o-qC(o);return Math.round((s-c)/FC)}function ZC(e,t){let n=KC(e,t),r=RC(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),GC(r)}function QC(e,t,n){return BC(e,t*7,n)}function $C(e,t,n){return VC(e,t*12,n)}function ew(e,t){let n,r=t?.in;return e.forEach(e=>{!r&&typeof e==`object`&&(r=RC.bind(null,e));let t=zC(e,r);(!n||n<t||isNaN(+t))&&(n=t)}),RC(r,n||NaN)}function tw(e,t){let n,r=t?.in;return e.forEach(e=>{!r&&typeof e==`object`&&(r=RC.bind(null,e));let t=zC(e,r);(!n||n>t||isNaN(+t))&&(n=t)}),RC(r,n||NaN)}function nw(e,t,n){let[r,i]=JC(n?.in,e,t);return+YC(r)==+YC(i)}function rw(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function iw(e){return!(!rw(e)&&typeof e!=`number`||isNaN(+zC(e)))}function aw(e,t,n){let[r,i]=JC(n?.in,e,t),a=r.getFullYear()-i.getFullYear(),o=r.getMonth()-i.getMonth();return a*12+o}function ow(e,t){let n=zC(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function sw(e,t){let[n,r]=JC(e,t.start,t.end);return{start:n,end:r}}function cw(e,t){let{start:n,end:r}=sw(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0),o.setDate(1);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(RC(n,o)),o.setMonth(o.getMonth()+s);return i?c.reverse():c}function lw(e,t){let n=zC(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function uw(e,t){let n=zC(e,t?.in),r=n.getFullYear();return n.setFullYear(r+1,0,0),n.setHours(23,59,59,999),n}function dw(e,t){let n=zC(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function fw(e,t){let{start:n,end:r}=sw(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0),o.setMonth(0,1);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(RC(n,o)),o.setFullYear(o.getFullYear()+s);return i?c.reverse():c}function pw(e,t){let n=UC(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=zC(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function mw(e,t){return pw(e,{...t,weekStartsOn:1})}var hw={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},gw=(e,t,n)=>{let r,i=hw[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r};function _w(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var vw={date:_w({formats:{full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},defaultWidth:`full`}),time:_w({formats:{full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},defaultWidth:`full`}),dateTime:_w({formats:{full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},defaultWidth:`full`})},yw={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},bw=(e,t,n,r)=>yw[e];function xw(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Sw={ordinalNumber:(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},era:xw({values:{narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},defaultWidth:`wide`}),quarter:xw({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},defaultWidth:`wide`,argumentCallback:e=>e-1}),month:xw({values:{narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},defaultWidth:`wide`}),day:xw({values:{narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},defaultWidth:`wide`}),dayPeriod:xw({values:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},defaultFormattingWidth:`wide`})};function Cw(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Tw(s,e=>e.test(o)):ww(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function ww(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Tw(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Ew(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Dw={code:`en-US`,formatDistance:gw,formatLong:vw,formatRelative:bw,localize:Sw,match:{ordinalNumber:Ew({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:Cw({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:`any`}),quarter:Cw({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:Cw({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:`any`}),day:Cw({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:`any`}),dayPeriod:Cw({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:`any`})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ow(e,t){let n=zC(e,t?.in);return XC(n,dw(n))+1}function kw(e,t){let n=zC(e,t?.in),r=+GC(n)-ZC(n);return Math.round(r/PC)+1}function Aw(e,t){let n=zC(e,t?.in),r=n.getFullYear(),i=UC(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=RC(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=WC(o,t),c=RC(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=WC(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function jw(e,t){let n=UC(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=Aw(e,t),a=RC(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),WC(a,t)}function Mw(e,t){let n=zC(e,t?.in),r=+WC(n,t)-jw(n,t);return Math.round(r/PC)+1}function Nw(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var Pw={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return Nw(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):Nw(n+1,2)},d(e,t){return Nw(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return Nw(e.getHours()%12||12,t.length)},H(e,t){return Nw(e.getHours(),t.length)},m(e,t){return Nw(e.getMinutes(),t.length)},s(e,t){return Nw(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return Nw(Math.trunc(r*10**(n-3)),t.length)}},Fw={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},Iw={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return Pw.y(e,t)},Y:function(e,t,n,r){let i=Aw(e,r),a=i>0?i:1-i;return t===`YY`?Nw(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):Nw(a,t.length)},R:function(e,t){return Nw(KC(e),t.length)},u:function(e,t){return Nw(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return Nw(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return Nw(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return Pw.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return Nw(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=Mw(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):Nw(i,t.length)},I:function(e,t,n){let r=kw(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):Nw(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):Pw.d(e,t)},D:function(e,t,n){let r=Ow(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):Nw(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return Nw(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return Nw(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return Nw(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?Fw.noon:r===0?Fw.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?Fw.evening:r>=12?Fw.afternoon:r>=4?Fw.morning:Fw.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return Pw.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):Pw.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):Nw(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):Nw(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):Pw.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):Pw.s(e,t)},S:function(e,t){return Pw.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return Rw(r);case`XXXX`:case`XX`:return zw(r);default:return zw(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return Rw(r);case`xxxx`:case`xx`:return zw(r);default:return zw(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+Lw(r,`:`);default:return`GMT`+zw(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+Lw(r,`:`);default:return`GMT`+zw(r,`:`)}},t:function(e,t,n){return Nw(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return Nw(+e,t.length)}};function Lw(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+Nw(a,2)}function Rw(e,t){return e%60==0?(e>0?`-`:`+`)+Nw(Math.abs(e)/60,2):zw(e,t)}function zw(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Nw(Math.trunc(r/60),2),a=Nw(r%60,2);return n+i+t+a}var Bw=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},Vw=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},Hw={p:Vw,P:(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Bw(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,Bw(r,t)).replace(`{{time}}`,Vw(i,t))}},Uw=/^D+$/,Ww=/^Y+$/,Gw=[`D`,`DD`,`YY`,`YYYY`];function Kw(e){return Uw.test(e)}function qw(e){return Ww.test(e)}function Jw(e,t,n){let r=Yw(e,t,n);if(console.warn(r),Gw.includes(e))throw RangeError(r)}function Yw(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Xw=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Zw=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qw=/^'([^]*?)'?$/,$w=/''/g,eT=/[a-zA-Z]/;function tT(e,t,n){let r=UC(),i=n?.locale??r.locale??Dw,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=zC(e,n?.in);if(!iw(s))throw RangeError(`Invalid time value`);let c=t.match(Zw).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=Hw[t];return n(e,i.formatLong)}return e}).join(``).match(Xw).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:nT(e)};if(Iw[t])return{isToken:!0,value:e};if(t.match(eT))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&qw(a)||!n?.useAdditionalDayOfYearTokens&&Kw(a))&&Jw(a,t,String(e));let o=Iw[a[0]];return o(s,a,i.localize,l)}).join(``)}function nT(e){let t=e.match(Qw);return t?t[1].replace($w,`'`):e}function rT(e,t){let n=zC(e,t?.in),r=n.getFullYear(),i=n.getMonth(),a=RC(n,0);return a.setFullYear(r,i+1,0),a.setHours(0,0,0,0),a.getDate()}function iT(e,t){return zC(e,t?.in).getMonth()}function aT(e,t){return zC(e,t?.in).getFullYear()}function oT(e,t){return+zC(e)>+zC(t)}function sT(e,t){return+zC(e)<+zC(t)}function cT(e,t,n){let[r,i]=JC(n?.in,e,t);return+WC(r,n)==+WC(i,n)}function lT(e,t,n){let[r,i]=JC(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function uT(e,t,n){let[r,i]=JC(n?.in,e,t);return r.getFullYear()===i.getFullYear()}function dT(e,t,n){let r=zC(e,n?.in),i=r.getFullYear(),a=r.getDate(),o=RC(n?.in||e,0);o.setFullYear(i,t,15),o.setHours(0,0,0,0);let s=rT(o);return r.setMonth(t,Math.min(a,s)),r}function fT(e,t,n){let r=zC(e,n?.in);return isNaN(+r)?RC(n?.in||e,NaN):(r.setFullYear(t),r)}var pT={lessThanXSeconds:{one:`meno di un secondo`,other:`meno di {{count}} secondi`},xSeconds:{one:`un secondo`,other:`{{count}} secondi`},halfAMinute:`alcuni secondi`,lessThanXMinutes:{one:`meno di un minuto`,other:`meno di {{count}} minuti`},xMinutes:{one:`un minuto`,other:`{{count}} minuti`},aboutXHours:{one:`circa un'ora`,other:`circa {{count}} ore`},xHours:{one:`un'ora`,other:`{{count}} ore`},xDays:{one:`un giorno`,other:`{{count}} giorni`},aboutXWeeks:{one:`circa una settimana`,other:`circa {{count}} settimane`},xWeeks:{one:`una settimana`,other:`{{count}} settimane`},aboutXMonths:{one:`circa un mese`,other:`circa {{count}} mesi`},xMonths:{one:`un mese`,other:`{{count}} mesi`},aboutXYears:{one:`circa un anno`,other:`circa {{count}} anni`},xYears:{one:`un anno`,other:`{{count}} anni`},overXYears:{one:`più di un anno`,other:`più di {{count}} anni`},almostXYears:{one:`quasi un anno`,other:`quasi {{count}} anni`}},mT=(e,t,n)=>{let r,i=pT[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`tra `+r:r+` fa`:r},hT={date:_w({formats:{full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`dd/MM/y`},defaultWidth:`full`}),time:_w({formats:{full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},defaultWidth:`full`}),dateTime:_w({formats:{full:`{{date}} {{time}}`,long:`{{date}} {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},defaultWidth:`full`})},gT=[`domenica`,`lunedì`,`martedì`,`mercoledì`,`giovedì`,`venerdì`,`sabato`];function _T(e){switch(e){case 0:return`'domenica scorsa alle' p`;default:return`'`+gT[e]+` scorso alle' p`}}function vT(e){return`'`+gT[e]+` alle' p`}function yT(e){switch(e){case 0:return`'domenica prossima alle' p`;default:return`'`+gT[e]+` prossimo alle' p`}}var bT={lastWeek:(e,t,n)=>{let r=e.getDay();return cT(e,t,n)?vT(r):_T(r)},yesterday:`'ieri alle' p`,today:`'oggi alle' p`,tomorrow:`'domani alle' p`,nextWeek:(e,t,n)=>{let r=e.getDay();return cT(e,t,n)?vT(r):yT(r)},other:`P`},xT={code:`it`,formatDistance:mT,formatLong:hT,formatRelative:(e,t,n,r)=>{let i=bT[e];return typeof i==`function`?i(t,n,r):i},localize:{ordinalNumber:(e,t)=>{let n=Number(e);return String(n)},era:xw({values:{narrow:[`aC`,`dC`],abbreviated:[`a.C.`,`d.C.`],wide:[`avanti Cristo`,`dopo Cristo`]},defaultWidth:`wide`}),quarter:xw({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`T1`,`T2`,`T3`,`T4`],wide:[`1º trimestre`,`2º trimestre`,`3º trimestre`,`4º trimestre`]},defaultWidth:`wide`,argumentCallback:e=>e-1}),month:xw({values:{narrow:[`G`,`F`,`M`,`A`,`M`,`G`,`L`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`gen`,`feb`,`mar`,`apr`,`mag`,`giu`,`lug`,`ago`,`set`,`ott`,`nov`,`dic`],wide:[`gennaio`,`febbraio`,`marzo`,`aprile`,`maggio`,`giugno`,`luglio`,`agosto`,`settembre`,`ottobre`,`novembre`,`dicembre`]},defaultWidth:`wide`}),day:xw({values:{narrow:[`D`,`L`,`M`,`M`,`G`,`V`,`S`],short:[`dom`,`lun`,`mar`,`mer`,`gio`,`ven`,`sab`],abbreviated:[`dom`,`lun`,`mar`,`mer`,`gio`,`ven`,`sab`],wide:[`domenica`,`lunedì`,`martedì`,`mercoledì`,`giovedì`,`venerdì`,`sabato`]},defaultWidth:`wide`}),dayPeriod:xw({values:{narrow:{am:`m.`,pm:`p.`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`mattina`,afternoon:`pomeriggio`,evening:`sera`,night:`notte`},abbreviated:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`mattina`,afternoon:`pomeriggio`,evening:`sera`,night:`notte`},wide:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`mattina`,afternoon:`pomeriggio`,evening:`sera`,night:`notte`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`m.`,pm:`p.`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`di mattina`,afternoon:`del pomeriggio`,evening:`di sera`,night:`di notte`},abbreviated:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`di mattina`,afternoon:`del pomeriggio`,evening:`di sera`,night:`di notte`},wide:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`di mattina`,afternoon:`del pomeriggio`,evening:`di sera`,night:`di notte`}},defaultFormattingWidth:`wide`})},match:{ordinalNumber:Ew({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:Cw({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^a/i,/^(d|e)/i]},defaultParseWidth:`any`}),quarter:Cw({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:Cw({matchPatterns:{narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:`any`}),day:Cw({matchPatterns:{narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},defaultParseWidth:`any`}),dayPeriod:Cw({matchPatterns:{narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},defaultParseWidth:`any`})},options:{weekStartsOn:1,firstWeekContainsDate:4}};function ST({...e}){return(0,W.jsx)(mh,{"data-slot":`popover`,...e})}function CT({...e}){return(0,W.jsx)(gh,{"data-slot":`popover-trigger`,...e})}function wT({className:e,align:t=`center`,sideOffset:n=4,...r}){return(0,W.jsx)(bh,{children:(0,W.jsx)(Sh,{"data-slot":`popover-content`,align:t,sideOffset:n,className:H(`z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,e),...r})})}var TT=1,ET=.9,DT=.8,OT=.17,kT=.1,AT=.999,jT=.9999,MT=.99,NT=/[\\\/_+.#"@\[\(\{&]/,PT=/[\\\/_+.#"@\[\(\{&]/g,FT=/[\s-]/,IT=/[\s-]/g;function LT(e,t,n,r,i,a,o){if(a===t.length)return i===e.length?TT:MT;var s=`${i},${a}`;if(o[s]!==void 0)return o[s];for(var c=r.charAt(a),l=n.indexOf(c,i),u=0,d,f,p,m;l>=0;)d=LT(e,t,n,r,l+1,a+1,o),d>u&&(l===i?d*=TT:NT.test(e.charAt(l-1))?(d*=DT,p=e.slice(i,l-1).match(PT),p&&i>0&&(d*=AT**+p.length)):FT.test(e.charAt(l-1))?(d*=ET,m=e.slice(i,l-1).match(IT),m&&i>0&&(d*=AT**+m.length)):(d*=OT,i>0&&(d*=AT**+(l-i))),e.charAt(l)!==t.charAt(a)&&(d*=jT)),(d<kT&&n.charAt(l-1)===r.charAt(a+1)||r.charAt(a+1)===r.charAt(a)&&n.charAt(l-1)!==r.charAt(a))&&(f=LT(e,t,n,r,l+1,a+2,o),f*kT>d&&(d=f*kT)),d>u&&(u=d),l=n.indexOf(c,l+1);return o[s]=u,u}function RT(e){return e.toLowerCase().replace(IT,` `)}function zT(e,t,n){return e=n&&n.length>0?`${e+` `+n.join(` `)}`:e,LT(e,t,RT(e),RT(t),0,0,{})}var BT=`[cmdk-group=""]`,VT=`[cmdk-group-items=""]`,HT=`[cmdk-group-heading=""]`,UT=`[cmdk-item=""]`,WT=`${UT}:not([aria-disabled="true"])`,GT=`cmdk-item-select`,KT=`data-value`,qT=(e,t,n)=>zT(e,t,n),JT=v.createContext(void 0),YT=()=>v.useContext(JT),XT=v.createContext(void 0),ZT=()=>v.useContext(XT),QT=v.createContext(void 0),$T=v.forwardRef((e,t)=>{let n=pE(()=>({search:``,value:e.value??e.defaultValue??``,selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}})),r=pE(()=>new Set),i=pE(()=>new Map),a=pE(()=>new Map),o=pE(()=>new Set),s=dE(e),{label:c,children:l,value:u,onValueChange:d,filter:f,shouldFilter:p,loop:m,disablePointerSelection:h=!1,vimBindings:g=!0,..._}=e,y=Gi(),b=Gi(),x=Gi(),S=v.useRef(null),C=gE();fE(()=>{if(u!==void 0){let e=u.trim();n.current.value=e,w.emit()}},[u]),fE(()=>{C(6,A)},[]);let w=v.useMemo(()=>({subscribe:e=>(o.current.add(e),()=>o.current.delete(e)),snapshot:()=>n.current,setState:(e,t,r)=>{var i,a,o;if(!Object.is(n.current[e],t)){if(n.current[e]=t,e===`search`)k(),D(),C(1,O);else if(e===`value`){if(document.activeElement.hasAttribute(`cmdk-input`)||document.activeElement.hasAttribute(`cmdk-root`)){let e=document.getElementById(x);e?e.focus():(i=document.getElementById(y))==null||i.focus()}if(C(7,()=>{n.current.selectedItemId=j()?.id,w.emit()}),r||C(5,A),s.current?.value!==void 0){let e=t??``;(o=(a=s.current).onValueChange)==null||o.call(a,e);return}}w.emit()}},emit:()=>{o.current.forEach(e=>e())}}),[]),T=v.useMemo(()=>({value:(e,t,r)=>{t!==a.current.get(e)?.value&&(a.current.set(e,{value:t,keywords:r}),n.current.filtered.items.set(e,E(t,r)),C(2,()=>{D(),w.emit()}))},item:(e,t)=>(r.current.add(e),t&&(i.current.has(t)?i.current.get(t).add(e):i.current.set(t,new Set([e]))),C(3,()=>{k(),D(),n.current.value||O(),w.emit()}),()=>{a.current.delete(e),r.current.delete(e),n.current.filtered.items.delete(e);let t=j();C(4,()=>{k(),t?.getAttribute(`id`)===e&&O(),w.emit()})}),group:e=>(i.current.has(e)||i.current.set(e,new Set),()=>{a.current.delete(e),i.current.delete(e)}),filter:()=>s.current.shouldFilter,label:c||e[`aria-label`],getDisablePointerSelection:()=>s.current.disablePointerSelection,listId:y,inputId:x,labelId:b,listInnerRef:S}),[]);function E(e,t){let r=s.current?.filter??qT;return e?r(e,n.current.search,t):0}function D(){if(!n.current.search||s.current.shouldFilter===!1)return;let e=n.current.filtered.items,t=[];n.current.filtered.groups.forEach(n=>{let r=i.current.get(n),a=0;r.forEach(t=>{let n=e.get(t);a=Math.max(n,a)}),t.push([n,a])});let r=S.current;M().sort((t,n)=>{let r=t.getAttribute(`id`),i=n.getAttribute(`id`);return(e.get(i)??0)-(e.get(r)??0)}).forEach(e=>{let t=e.closest(VT);t?t.appendChild(e.parentElement===t?e:e.closest(`${VT} > *`)):r.appendChild(e.parentElement===r?e:e.closest(`${VT} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=S.current?.querySelector(`${BT}[${KT}="${encodeURIComponent(e[0])}"]`);t?.parentElement.appendChild(t)})}function O(){let e=M().find(e=>e.getAttribute(`aria-disabled`)!==`true`)?.getAttribute(KT);w.setState(`value`,e||void 0)}function k(){if(!n.current.search||s.current.shouldFilter===!1){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let e=0;for(let t of r.current){let r=E(a.current.get(t)?.value??``,a.current.get(t)?.keywords??[]);n.current.filtered.items.set(t,r),r>0&&e++}for(let[e,t]of i.current)for(let r of t)if(n.current.filtered.items.get(r)>0){n.current.filtered.groups.add(e);break}n.current.filtered.count=e}function A(){var e;let t=j();t&&(t.parentElement?.firstChild===t&&((e=t.closest(BT)?.querySelector(HT))==null||e.scrollIntoView({block:`nearest`})),t.scrollIntoView({block:`nearest`}))}function j(){return S.current?.querySelector(`${UT}[aria-selected="true"]`)}function M(){return Array.from(S.current?.querySelectorAll(WT)||[])}function N(e){let t=M()[e];t&&w.setState(`value`,t.getAttribute(KT))}function P(e){var t;let n=j(),r=M(),i=r.findIndex(e=>e===n),a=r[i+e];(t=s.current)!=null&&t.loop&&(a=i+e<0?r[r.length-1]:i+e===r.length?r[0]:r[i+e]),a&&w.setState(`value`,a.getAttribute(KT))}function F(e){let t=j()?.closest(BT),n;for(;t&&!n;)t=e>0?lE(t,BT):uE(t,BT),n=t?.querySelector(WT);n?w.setState(`value`,n.getAttribute(KT)):P(e)}let I=()=>N(M().length-1),ee=e=>{e.preventDefault(),e.metaKey?I():e.altKey?F(1):P(1)},te=e=>{e.preventDefault(),e.metaKey?N(0):e.altKey?F(-1):P(-1)};return v.createElement(G.div,{ref:t,tabIndex:-1,..._,"cmdk-root":``,onKeyDown:e=>{var t;(t=_.onKeyDown)==null||t.call(_,e);let n=e.nativeEvent.isComposing||e.keyCode===229;if(!(e.defaultPrevented||n))switch(e.key){case`n`:case`j`:g&&e.ctrlKey&&ee(e);break;case`ArrowDown`:ee(e);break;case`p`:case`k`:g&&e.ctrlKey&&te(e);break;case`ArrowUp`:te(e);break;case`Home`:e.preventDefault(),N(0);break;case`End`:e.preventDefault(),I();break;case`Enter`:{e.preventDefault();let t=j();if(t){let e=new Event(GT);t.dispatchEvent(e)}}}}},v.createElement(`label`,{"cmdk-label":``,htmlFor:T.inputId,id:T.labelId,style:yE},c),vE(e,e=>v.createElement(XT.Provider,{value:w},v.createElement(JT.Provider,{value:T},e))))}),eE=v.forwardRef((e,t)=>{let n=Gi(),r=v.useRef(null),i=v.useContext(QT),a=YT(),o=dE(e),s=o.current?.forceMount??i?.forceMount;fE(()=>{if(!s)return a.item(n,i?.id)},[s]);let c=hE(n,r,[e.value,e.children,r],e.keywords),l=ZT(),u=mE(e=>e.value&&e.value===c.current),d=mE(e=>s||a.filter()===!1?!0:!e.search||e.filtered.items.get(n)>0);v.useEffect(()=>{let t=r.current;if(t&&!e.disabled)return t.addEventListener(GT,f),()=>t.removeEventListener(GT,f)},[d,e.onSelect,e.disabled]);function f(){var e,t;p(),(t=(e=o.current).onSelect)==null||t.call(e,c.current)}function p(){l.setState(`value`,c.current,!0)}if(!d)return null;let{disabled:m,value:h,onSelect:g,forceMount:_,keywords:y,...b}=e;return v.createElement(G.div,{ref:yr(r,t),...b,id:n,"cmdk-item":``,role:`option`,"aria-disabled":!!m,"aria-selected":!!u,"data-disabled":!!m,"data-selected":!!u,onPointerMove:m||a.getDisablePointerSelection()?void 0:p,onClick:m?void 0:f},e.children)}),tE=v.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:i,...a}=e,o=Gi(),s=v.useRef(null),c=v.useRef(null),l=Gi(),u=YT(),d=mE(e=>i||u.filter()===!1?!0:!e.search||e.filtered.groups.has(o));fE(()=>u.group(o),[]),hE(o,s,[e.value,e.heading,c]);let f=v.useMemo(()=>({id:o,forceMount:i}),[i]);return v.createElement(G.div,{ref:yr(s,t),...a,"cmdk-group":``,role:`presentation`,hidden:!d||void 0},n&&v.createElement(`div`,{ref:c,"cmdk-group-heading":``,"aria-hidden":!0,id:l},n),vE(e,e=>v.createElement(`div`,{"cmdk-group-items":``,role:`group`,"aria-labelledby":n?l:void 0},v.createElement(QT.Provider,{value:f},e))))}),nE=v.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,i=v.useRef(null),a=mE(e=>!e.search);return!n&&!a?null:v.createElement(G.div,{ref:yr(i,t),...r,"cmdk-separator":``,role:`separator`})}),rE=v.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,i=e.value!=null,a=ZT(),o=mE(e=>e.search),s=mE(e=>e.selectedItemId),c=YT();return v.useEffect(()=>{e.value!=null&&a.setState(`search`,e.value)},[e.value]),v.createElement(G.input,{ref:t,...r,"cmdk-input":``,autoComplete:`off`,autoCorrect:`off`,spellCheck:!1,"aria-autocomplete":`list`,role:`combobox`,"aria-expanded":!0,"aria-controls":c.listId,"aria-labelledby":c.labelId,"aria-activedescendant":s,id:c.inputId,type:`text`,value:i?e.value:o,onChange:e=>{i||a.setState(`search`,e.target.value),n?.(e.target.value)}})}),iE=v.forwardRef((e,t)=>{let{children:n,label:r=`Suggestions`,...i}=e,a=v.useRef(null),o=v.useRef(null),s=mE(e=>e.selectedItemId),c=YT();return v.useEffect(()=>{if(o.current&&a.current){let e=o.current,t=a.current,n,r=new ResizeObserver(()=>{n=requestAnimationFrame(()=>{let n=e.offsetHeight;t.style.setProperty(`--cmdk-list-height`,n.toFixed(1)+`px`)})});return r.observe(e),()=>{cancelAnimationFrame(n),r.unobserve(e)}}},[]),v.createElement(G.div,{ref:yr(a,t),...i,"cmdk-list":``,role:`listbox`,tabIndex:-1,"aria-activedescendant":s,"aria-label":r,id:c.listId},vE(e,e=>v.createElement(`div`,{ref:yr(o,c.listInnerRef),"cmdk-list-sizer":``},e)))}),aE=v.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:i,contentClassName:a,container:o,...s}=e;return v.createElement(cc,{open:n,onOpenChange:r},v.createElement(mc,{container:o},v.createElement(gc,{"cmdk-overlay":``,className:i}),v.createElement(bc,{"aria-label":e.label,"cmdk-dialog":``,className:a},v.createElement($T,{ref:t,...s}))))}),oE=v.forwardRef((e,t)=>mE(e=>e.filtered.count===0)?v.createElement(G.div,{ref:t,...e,"cmdk-empty":``,role:`presentation`}):null),sE=v.forwardRef((e,t)=>{let{progress:n,children:r,label:i=`Loading...`,...a}=e;return v.createElement(G.div,{ref:t,...a,"cmdk-loading":``,role:`progressbar`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":i},vE(e,e=>v.createElement(`div`,{"aria-hidden":!0},e)))}),cE=Object.assign($T,{List:iE,Item:eE,Input:rE,Group:tE,Separator:nE,Dialog:aE,Empty:oE,Loading:sE});function lE(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function uE(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function dE(e){let t=v.useRef(e);return fE(()=>{t.current=e}),t}var fE=typeof window>`u`?v.useEffect:v.useLayoutEffect;function pE(e){let t=v.useRef();return t.current===void 0&&(t.current=e()),t}function mE(e){let t=ZT(),n=()=>e(t.snapshot());return v.useSyncExternalStore(t.subscribe,n,n)}function hE(e,t,n,r=[]){let i=v.useRef(),a=YT();return fE(()=>{var o;let s=(()=>{for(let e of n){if(typeof e==`string`)return e.trim();if(typeof e==`object`&&`current`in e)return e.current?e.current.textContent?.trim():i.current}})(),c=r.map(e=>e.trim());a.value(e,s,c),(o=t.current)==null||o.setAttribute(KT,s),i.current=s}),i}var gE=()=>{let[e,t]=v.useState(),n=pE(()=>new Map);return fE(()=>{n.current.forEach(e=>e()),n.current=new Map},[e]),(e,r)=>{n.current.set(e,r),t({})}};function _E(e){let t=e.type;return typeof t==`function`?t(e.props):`render`in t?t.render(e.props):e}function vE({asChild:e,children:t},n){return e&&v.isValidElement(t)?v.cloneElement(_E(t),{ref:t.ref},n(t.props.children)):n(t)}var yE={position:`absolute`,width:`1px`,height:`1px`,padding:`0`,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,borderWidth:`0`};function bE({className:e,...t}){return(0,W.jsx)(cE,{"data-slot":`command`,className:H(`flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground`,e),...t})}function xE({className:e,...t}){return(0,W.jsxs)(`div`,{"data-slot":`command-input-wrapper`,className:`flex h-9 items-center gap-2 border-b px-3`,children:[(0,W.jsx)($e,{className:`size-4 shrink-0 opacity-50`}),(0,W.jsx)(cE.Input,{"data-slot":`command-input`,className:H(`flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,e),...t})]})}function SE({className:e,...t}){return(0,W.jsx)(cE.List,{"data-slot":`command-list`,className:H(`max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto`,e),...t})}function CE({...e}){return(0,W.jsx)(cE.Empty,{"data-slot":`command-empty`,className:`py-6 text-center text-sm`,...e})}function wE({className:e,...t}){return(0,W.jsx)(cE.Group,{"data-slot":`command-group`,className:H(`overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground`,e),...t})}function TE({className:e,...t}){return(0,W.jsx)(cE.Item,{"data-slot":`command-item`,className:H(`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,e),...t})}function EE(e,t,n=`long`){return new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,timeZone:e,timeZoneName:n}).format(t).split(/\s/g).slice(2).join(` `)}var DE={},OE={};function kE(e,t){try{let n=(DE[e]||=new Intl.DateTimeFormat(`en-US`,{timeZone:e,timeZoneName:`longOffset`}).format)(t).split(`GMT`)[1];return n in OE?OE[n]:jE(n,n.split(`:`))}catch{if(e in OE)return OE[e];let t=e?.match(AE);return t?jE(e,t.slice(1)):NaN}}var AE=/([+-]\d\d):?(\d\d)?/;function jE(e,t){let n=+(t[0]||0),r=+(t[1]||0),i=(t[2]||0)/60;return OE[e]=n*60+r>0?n*60+r+i:n*60-r-i}var ME=class e extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]==`string`&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(kE(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]==`number`&&(e.length===1||e.length===2&&typeof e[1]!=`number`)?this.setTime(e[0]):typeof e[0]==`string`?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),IE(this,e)):this.setTime(Date.now())}static tz(t,...n){return n.length?new e(...n,t):new e(Date.now(),t)}withTimeZone(t){return new e(+this,t)}getTimezoneOffset(){let e=-kE(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),PE(this),+this}[Symbol.for(`constructDateFrom`)](t){return new e(+new Date(t),this.timeZone)}},NE=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!NE.test(e))return;let t=e.replace(NE,`$1UTC`);ME.prototype[t]&&(e.startsWith(`get`)?ME.prototype[e]=function(){return this.internal[t]()}:(ME.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),FE(this),+this},ME.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),PE(this),+this}))});function PE(e){e.internal.setTime(+e),e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-kE(e.timeZone,e)*60))}function FE(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),IE(e)}function IE(e,t){let n=Array.isArray(t)?LE(t):+e.internal,r=kE(e.timeZone,e),i=r>0?Math.floor(r):Math.ceil(r),a=new Date(+e);a.setUTCHours(a.getUTCHours()-1);let o=-new Date(+e).getTimezoneOffset(),s=-new Date(+a).getTimezoneOffset(),c=o-s,l=o;if(c&&o!==i&&Date.prototype.getHours.apply(e)!==(Array.isArray(t)?t[3]||0:e.internal.getUTCHours())){let t=new Date(+e),n=o-i;n&&t.setUTCMinutes(t.getUTCMinutes()+n);let r=kE(e.timeZone,t);(r>0?Math.floor(r):Math.ceil(r))===i&&(l=s)}let u=l-i;u&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+u);let d=new Date(+e);d.setUTCSeconds(0);let f=o>0?d.getSeconds():(d.getSeconds()-60)%60,p=Math.round(-(kE(e.timeZone,e)*60))%60;(p||f)&&Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+p+f);let m=kE(e.timeZone,e),h=m>0?Math.floor(m):Math.ceil(m),g=-new Date(+e).getTimezoneOffset()-h,_=h!==i,v=g-u,y=h-i,b=n-h*60*1e3,x=y>0&&RE(e)-n===y*60*1e3&&RE(e,b)!==n;if(_&&v&&!x){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+v);let t=kE(e.timeZone,e),n=h-(t>0?Math.floor(t):Math.ceil(t));n&&v<0&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}PE(e);let S=(t?n:n+p*1e3)-+e.internal;S&&Math.abs(S)<18e5&&(Date.prototype.setTime.call(e,+e+S),PE(e))}function LE(e){return Date.UTC(e[0],e.length>1?e[1]:0,e.length>2?e[2]:1,...e.slice(3))}function RE(e,t){let n=new Date(t??+e);return n.setUTCSeconds(n.getUTCSeconds()-Math.round(-kE(e.timeZone,n)*60)),+n}var zE=class e extends ME{static tz(t,...n){return n.length?new e(...n,t):new e(Date.now(),t)}toISOString(){let[e,t,n]=this.tzComponents(),r=`${e}${t}:${n}`;return this.internal.toISOString().slice(0,-1)+r}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){let[e,t,n,r]=this.internal.toUTCString().split(` `);return`${e?.slice(0,-1)} ${n} ${t} ${r}`}toTimeString(){let e=this.internal.toUTCString().split(` `)[4],[t,n,r]=this.tzComponents();return`${e} GMT${t}${n}${r} (${EE(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){let e=this.getTimezoneOffset();return[e>0?`-`:`+`,String(Math.floor(Math.abs(e)/60)).padStart(2,`0`),String(Math.abs(e)%60).padStart(2,`0`)]}withTimeZone(t){return new e(+this,t)}[Symbol.for(`constructDateFrom`)](t){return new e(+new Date(t),this.timeZone)}},BE=5,VE=4;function HE(e,t){let n=t.startOfMonth(e),r=n.getDay()>0?n.getDay():7,i=t.addDays(e,-r+1),a=t.addDays(i,34);return t.getMonth(e)===t.getMonth(a)?BE:VE}function UE(e,t){let n=t.startOfMonth(e),r=n.getDay();return r===1?n:r===0?t.addDays(n,-6):t.addDays(n,-1*(r-1))}function WE(e,t){let n=UE(e,t),r=HE(e,t);return t.addDays(n,r*7-1)}var GE={...Dw,labels:{labelDayButton:(e,t,n,r)=>{let i;i=r&&typeof r.format==`function`?r.format.bind(r):(e,t)=>tT(e,t,{locale:Dw,...n});let a=i(e,`PPPP`);return t.today&&(a=`Today, ${a}`),t.selected&&(a=`${a}, selected`),a},labelMonthDropdown:`Choose the Month`,labelNext:`Go to the Next Month`,labelPrevious:`Go to the Previous Month`,labelWeekNumber:e=>`Week ${e}`,labelYearDropdown:`Choose the Year`,labelGrid:(e,t,n)=>{let r;return r=n&&typeof n.format==`function`?n.format.bind(n):(e,n)=>tT(e,n,{locale:Dw,...t}),r(e,`LLLL yyyy`)},labelGridcell:(e,t,n,r)=>{let i;i=r&&typeof r.format==`function`?r.format.bind(r):(e,t)=>tT(e,t,{locale:Dw,...n});let a=i(e,`PPPP`);return t?.today&&(a=`Today, ${a}`),a},labelNav:`Navigation bar`,labelWeekNumberHeader:`Week Number`,labelWeekday:(e,t,n)=>{let r;return r=n&&typeof n.format==`function`?n.format.bind(n):(e,n)=>tT(e,n,{locale:Dw,...t}),r(e,`cccc`)}}},KE=class e{constructor(e,t){this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?zE.tz(this.options.timeZone):new(this.options.Date??Date),this.newDate=(e,t,n)=>this.overrides?.newDate?this.overrides.newDate(e,t,n):this.options.timeZone?new zE(e,t,n,this.options.timeZone):new Date(e,t,n),this.addDays=(e,t)=>this.overrides?.addDays?this.overrides.addDays(e,t):BC(e,t),this.addMonths=(e,t)=>this.overrides?.addMonths?this.overrides.addMonths(e,t):VC(e,t),this.addWeeks=(e,t)=>this.overrides?.addWeeks?this.overrides.addWeeks(e,t):QC(e,t),this.addYears=(e,t)=>this.overrides?.addYears?this.overrides.addYears(e,t):$C(e,t),this.differenceInCalendarDays=(e,t)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):XC(e,t),this.differenceInCalendarMonths=(e,t)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):aw(e,t),this.eachMonthOfInterval=e=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):cw(e),this.eachYearOfInterval=e=>{let t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):fw(e),n=new Set(t.map(e=>this.getYear(e)));if(n.size===t.length)return t;let r=[];return n.forEach(e=>{r.push(new Date(e,0,1))}),r},this.endOfBroadcastWeek=e=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):WE(e,this),this.endOfISOWeek=e=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):mw(e),this.endOfMonth=e=>this.overrides?.endOfMonth?this.overrides.endOfMonth(e):ow(e),this.endOfWeek=(e,t)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):pw(e,this.options),this.endOfYear=e=>this.overrides?.endOfYear?this.overrides.endOfYear(e):uw(e),this.format=(e,t,n)=>{let r=this.overrides?.format?this.overrides.format(e,t,this.options):tT(e,t,this.options);return this.options.numerals&&this.options.numerals!==`latn`?this.replaceDigits(r):r},this.getISOWeek=e=>this.overrides?.getISOWeek?this.overrides.getISOWeek(e):kw(e),this.getMonth=(e,t)=>this.overrides?.getMonth?this.overrides.getMonth(e,this.options):iT(e,this.options),this.getYear=(e,t)=>this.overrides?.getYear?this.overrides.getYear(e,this.options):aT(e,this.options),this.getWeek=(e,t)=>this.overrides?.getWeek?this.overrides.getWeek(e,this.options):Mw(e,this.options),this.isAfter=(e,t)=>this.overrides?.isAfter?this.overrides.isAfter(e,t):oT(e,t),this.isBefore=(e,t)=>this.overrides?.isBefore?this.overrides.isBefore(e,t):sT(e,t),this.isDate=e=>this.overrides?.isDate?this.overrides.isDate(e):rw(e),this.isSameDay=(e,t)=>this.overrides?.isSameDay?this.overrides.isSameDay(e,t):nw(e,t),this.isSameMonth=(e,t)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):lT(e,t),this.isSameYear=(e,t)=>this.overrides?.isSameYear?this.overrides.isSameYear(e,t):uT(e,t),this.max=e=>this.overrides?.max?this.overrides.max(e):ew(e),this.min=e=>this.overrides?.min?this.overrides.min(e):tw(e),this.setMonth=(e,t)=>this.overrides?.setMonth?this.overrides.setMonth(e,t):dT(e,t),this.setYear=(e,t)=>this.overrides?.setYear?this.overrides.setYear(e,t):fT(e,t),this.startOfBroadcastWeek=(e,t)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):UE(e,this),this.startOfDay=e=>this.overrides?.startOfDay?this.overrides.startOfDay(e):YC(e),this.startOfISOWeek=e=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):GC(e),this.startOfMonth=e=>this.overrides?.startOfMonth?this.overrides.startOfMonth(e):lw(e),this.startOfWeek=(e,t)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):WC(e,this.options),this.startOfYear=e=>this.overrides?.startOfYear?this.overrides.startOfYear(e):dw(e),this.options={locale:GE,...e},this.overrides=t}getDigitMap(){let{numerals:e=`latn`}=this.options,t=new Intl.NumberFormat(`en-US`,{numberingSystem:e}),n={};for(let e=0;e<10;e++)n[e.toString()]=t.format(e);return n}replaceDigits(e){let t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}formatNumber(e){return this.replaceDigits(e.toString())}getMonthYearOrder(){let t=this.options.locale?.code;return t&&e.yearFirstLocales.has(t)?`year-first`:`month-first`}formatMonthYear(t){let{locale:n,timeZone:r,numerals:i}=this.options,a=n?.code;if(a&&e.yearFirstLocales.has(a))try{return new Intl.DateTimeFormat(a,{month:`long`,year:`numeric`,timeZone:r,numberingSystem:i}).format(t)}catch{}let o=this.getMonthYearOrder()===`year-first`?`y LLLL`:`LLLL y`;return this.format(t,o)}};KE.yearFirstLocales=new Set([`eu`,`hu`,`ja`,`ja-Hira`,`ja-JP`,`ko`,`ko-KR`,`lt`,`lt-LT`,`lv`,`lv-LV`,`mn`,`mn-MN`,`zh`,`zh-CN`,`zh-HK`,`zh-TW`]);var qE=new KE,JE=class{constructor(e,t,n=qE){this.date=e,this.displayMonth=t,this.outside=!(!t||n.isSameMonth(e,t)),this.dateLib=n,this.isoDate=n.format(e,`yyyy-MM-dd`),this.displayMonthId=n.format(t,`yyyy-MM`),this.dateMonthId=n.format(e,`yyyy-MM`)}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}},YE=class{constructor(e,t){this.date=e,this.weeks=t}},XE=class{constructor(e,t){this.days=t,this.weekNumber=e}};function ZE(e){return v.createElement(`span`,{...e})}function QE(e){let{size:t=24,orientation:n=`left`,className:r,style:i}=e;return v.createElement(`svg`,{className:r,style:i,width:t,height:t,viewBox:`0 0 24 24`},n===`up`&&v.createElement(`polygon`,{points:`6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28`}),n===`down`&&v.createElement(`polygon`,{points:`6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72`}),n===`left`&&v.createElement(`polygon`,{points:`16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20`}),n===`right`&&v.createElement(`polygon`,{points:`8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20`}))}function $E(e){let{day:t,modifiers:n,...r}=e;return v.createElement(`td`,{...r})}function eD(e){let{day:t,modifiers:n,...r}=e,i=v.useRef(null);return v.useEffect(()=>{n.focused&&i.current?.focus()},[n.focused]),v.createElement(`button`,{ref:i,...r})}var $;(function(e){e.Root=`root`,e.Chevron=`chevron`,e.Day=`day`,e.DayButton=`day_button`,e.CaptionLabel=`caption_label`,e.Dropdowns=`dropdowns`,e.Dropdown=`dropdown`,e.DropdownRoot=`dropdown_root`,e.Footer=`footer`,e.MonthGrid=`month_grid`,e.MonthCaption=`month_caption`,e.MonthsDropdown=`months_dropdown`,e.Month=`month`,e.Months=`months`,e.Nav=`nav`,e.NextMonthButton=`button_next`,e.PreviousMonthButton=`button_previous`,e.Week=`week`,e.Weeks=`weeks`,e.Weekday=`weekday`,e.Weekdays=`weekdays`,e.WeekNumber=`week_number`,e.WeekNumberHeader=`week_number_header`,e.YearsDropdown=`years_dropdown`})($||={});var tD;(function(e){e.disabled=`disabled`,e.hidden=`hidden`,e.outside=`outside`,e.focused=`focused`,e.today=`today`})(tD||={});var nD;(function(e){e.range_end=`range_end`,e.range_middle=`range_middle`,e.range_start=`range_start`,e.selected=`selected`})(nD||={});var rD;(function(e){e.weeks_before_enter=`weeks_before_enter`,e.weeks_before_exit=`weeks_before_exit`,e.weeks_after_enter=`weeks_after_enter`,e.weeks_after_exit=`weeks_after_exit`,e.caption_after_enter=`caption_after_enter`,e.caption_after_exit=`caption_after_exit`,e.caption_before_enter=`caption_before_enter`,e.caption_before_exit=`caption_before_exit`})(rD||={});var iD=(0,v.createContext)(void 0);function aD(){let e=(0,v.useContext)(iD);if(e===void 0)throw Error(`useDayPicker() must be used within a custom component.`);return e}function oD(e){let{options:t,className:n,...r}=e,{classNames:i,components:a,styles:o}=aD(),s=[i[$.Dropdown],n].join(` `),c=t?.find(({value:e})=>e===r.value);return v.createElement(`span`,{"data-disabled":r.disabled,className:i[$.DropdownRoot],style:o?.[$.DropdownRoot]},v.createElement(a.Select,{className:s,...r},t?.map(({value:e,label:t,disabled:n})=>v.createElement(a.Option,{key:e,value:e,disabled:n},t))),v.createElement(`span`,{className:i[$.CaptionLabel],style:o?.[$.CaptionLabel],"aria-hidden":!0},c?.label,v.createElement(a.Chevron,{orientation:`down`,size:18,className:i[$.Chevron],style:o?.[$.Chevron]})))}function sD(e){return v.createElement(`div`,{...e})}function cD(e){return v.createElement(`div`,{...e})}function lD(e){let{calendarMonth:t,displayIndex:n,...r}=e;return v.createElement(`div`,{...r},e.children)}function uD(e){let{calendarMonth:t,displayIndex:n,...r}=e;return v.createElement(`div`,{...r})}function dD(e){return v.createElement(`table`,{...e})}function fD(e){return v.createElement(`div`,{...e})}function pD(e){let{components:t}=aD();return v.createElement(t.Dropdown,{...e})}function mD(e){let{onPreviousClick:t,onNextClick:n,previousMonth:r,nextMonth:i,...a}=e,{components:o,classNames:s,styles:c,labels:{labelPrevious:l,labelNext:u}}=aD(),d=(0,v.useCallback)(e=>{i&&n?.(e)},[i,n]),f=(0,v.useCallback)(e=>{r&&t?.(e)},[r,t]);return v.createElement(`nav`,{...a},v.createElement(o.PreviousMonthButton,{type:`button`,className:s[$.PreviousMonthButton],style:c?.[$.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":!r||void 0,"aria-label":l(r),onClick:f},v.createElement(o.Chevron,{disabled:!r||void 0,className:s[$.Chevron],style:c?.[$.Chevron],orientation:`left`})),v.createElement(o.NextMonthButton,{type:`button`,className:s[$.NextMonthButton],style:c?.[$.NextMonthButton],tabIndex:i?void 0:-1,"aria-disabled":!i||void 0,"aria-label":u(i),onClick:d},v.createElement(o.Chevron,{disabled:!i||void 0,orientation:`right`,className:s[$.Chevron],style:c?.[$.Chevron]})))}function hD(e){return v.createElement(`button`,{...e})}function gD(e){return v.createElement(`option`,{...e})}function _D(e){return v.createElement(`button`,{...e})}function vD(e){let{rootRef:t,...n}=e;return v.createElement(`div`,{...n,ref:t})}function yD(e){return v.createElement(`select`,{...e})}function bD(e){let{week:t,...n}=e;return v.createElement(`tr`,{...n})}function xD(e){return v.createElement(`th`,{...e})}function SD(e){return v.createElement(`thead`,{"aria-hidden":!0},v.createElement(`tr`,{...e}))}function CD(e){let{week:t,...n}=e;return v.createElement(`th`,{...n})}function wD(e){return v.createElement(`th`,{...e})}function TD(e){return v.createElement(`tbody`,{...e})}function ED(e){let{components:t}=aD();return v.createElement(t.Dropdown,{...e})}var DD=s({CaptionLabel:()=>ZE,Chevron:()=>QE,Day:()=>$E,DayButton:()=>eD,Dropdown:()=>oD,DropdownNav:()=>sD,Footer:()=>cD,Month:()=>lD,MonthCaption:()=>uD,MonthGrid:()=>dD,Months:()=>fD,MonthsDropdown:()=>pD,Nav:()=>mD,NextMonthButton:()=>hD,Option:()=>gD,PreviousMonthButton:()=>_D,Root:()=>vD,Select:()=>yD,Week:()=>bD,WeekNumber:()=>CD,WeekNumberHeader:()=>wD,Weekday:()=>xD,Weekdays:()=>SD,Weeks:()=>TD,YearsDropdown:()=>ED});function OD(e,t,n=!1,r=qE){let{from:i,to:a}=e,{differenceInCalendarDays:o,isSameDay:s}=r;return i&&a?(o(a,i)<0&&([i,a]=[a,i]),o(t,i)>=+!!n&&o(a,t)>=+!!n):!n&&a?s(a,t):!n&&i?s(i,t):!1}function kD(e){return!!(e&&typeof e==`object`&&`before`in e&&`after`in e)}function AD(e){return!!(e&&typeof e==`object`&&`from`in e)}function jD(e){return!!(e&&typeof e==`object`&&`after`in e)}function MD(e){return!!(e&&typeof e==`object`&&`before`in e)}function ND(e){return!!(e&&typeof e==`object`&&`dayOfWeek`in e)}function PD(e,t){return Array.isArray(e)&&e.every(t.isDate)}function FD(e,t,n=qE){let r=Array.isArray(t)?t:[t],{isSameDay:i,differenceInCalendarDays:a,isAfter:o}=n;return r.some(t=>{if(typeof t==`boolean`)return t;if(n.isDate(t))return i(e,t);if(PD(t,n))return t.some(t=>i(e,t));if(AD(t))return OD(t,e,!1,n);if(ND(t))return Array.isArray(t.dayOfWeek)?t.dayOfWeek.includes(e.getDay()):t.dayOfWeek===e.getDay();if(kD(t)){let n=a(t.before,e),r=a(t.after,e),i=n>0,s=r<0;return o(t.before,t.after)?s&&i:i||s}return jD(t)?a(e,t.after)>0:MD(t)?a(t.before,e)>0:typeof t==`function`&&t(e)})}function ID(e,t,n,r,i){let{disabled:a,hidden:o,modifiers:s,showOutsideDays:c,broadcastCalendar:l,today:u=i.today()}=t,{isSameDay:d,isSameMonth:f,startOfMonth:p,isBefore:m,endOfMonth:h,isAfter:g}=i,_=n&&p(n),v=r&&h(r),y={[tD.focused]:[],[tD.outside]:[],[tD.disabled]:[],[tD.hidden]:[],[tD.today]:[]},b={};for(let t of e){let{date:e,displayMonth:n}=t,r=!(!n||f(e,n)),p=!!(_&&m(e,_)),h=!!(v&&g(e,v)),x=!!(a&&FD(e,a,i)),S=!!(o&&FD(e,o,i))||p||h||!l&&!c&&r||l&&c===!1&&r,C=d(e,u);r&&y.outside.push(t),x&&y.disabled.push(t),S&&y.hidden.push(t),C&&y.today.push(t),s&&Object.keys(s).forEach(n=>{let r=s?.[n];r&&FD(e,r,i)&&(b[n]?b[n].push(t):b[n]=[t])})}return e=>{let t={[tD.focused]:!1,[tD.disabled]:!1,[tD.hidden]:!1,[tD.outside]:!1,[tD.today]:!1},n={};for(let n in y)t[n]=y[n].some(t=>t===e);for(let t in b)n[t]=b[t].some(t=>t===e);return{...t,...n}}}function LD(e,t,n={}){return Object.entries(e).filter(([,e])=>e===!0).reduce((e,[r])=>(n[r]?e.push(n[r]):t[tD[r]]?e.push(t[tD[r]]):t[nD[r]]&&e.push(t[nD[r]]),e),[t[$.Day]])}function RD(e){return{...DD,...e}}function zD(e){let t={"data-mode":e.mode??void 0,"data-required":`required`in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([e,n])=>{e.startsWith(`data-`)&&(t[e]=n)}),t}function BD(){let e={};for(let t in $)e[$[t]]=`rdp-${$[t]}`;for(let t in tD)e[tD[t]]=`rdp-${tD[t]}`;for(let t in nD)e[nD[t]]=`rdp-${nD[t]}`;for(let t in rD)e[rD[t]]=`rdp-${rD[t]}`;return e}function VD(e,t,n){return(n??new KE(t)).formatMonthYear(e)}function HD(e,t,n){return(n??new KE(t)).format(e,`d`)}function UD(e,t=qE){return t.format(e,`LLLL`)}function WD(e,t,n){return(n??new KE(t)).format(e,`cccccc`)}function GD(e,t=qE){return e<10?t.formatNumber(`0${e.toLocaleString()}`):t.formatNumber(`${e.toLocaleString()}`)}function KD(){return``}function qD(e,t=qE){return t.format(e,`yyyy`)}var JD=s({formatCaption:()=>VD,formatDay:()=>HD,formatMonthDropdown:()=>UD,formatWeekNumber:()=>GD,formatWeekNumberHeader:()=>KD,formatWeekdayName:()=>WD,formatYearDropdown:()=>qD});function YD(e){return{...JD,...e}}function XD(e,t,n,r){let i=(r??new KE(n)).format(e,`PPPP`);return t.today&&(i=`Today, ${i}`),t.selected&&(i=`${i}, selected`),i}function ZD(e,t,n){return(n??new KE(t)).formatMonthYear(e)}function QD(e,t,n,r){let i=(r??new KE(n)).format(e,`PPPP`);return t?.today&&(i=`Today, ${i}`),i}function $D(e){return`Choose the Month`}function eO(){return``}var tO=`Go to the Next Month`;function nO(e,t){return tO}function rO(e){return`Go to the Previous Month`}function iO(e,t,n){return(n??new KE(t)).format(e,`cccc`)}function aO(e,t){return`Week ${e}`}function oO(e){return`Week Number`}function sO(e){return`Choose the Year`}var cO=s({labelDayButton:()=>XD,labelGrid:()=>ZD,labelGridcell:()=>QD,labelMonthDropdown:()=>$D,labelNav:()=>eO,labelNext:()=>nO,labelPrevious:()=>rO,labelWeekNumber:()=>aO,labelWeekNumberHeader:()=>oO,labelWeekday:()=>iO,labelYearDropdown:()=>sO}),lO=(e,t,n)=>t||(n?typeof n==`function`?n:(...e)=>n:e);function uO(e,t){let n=t.locale?.labels??{};return{...cO,...e??{},labelDayButton:lO(XD,e?.labelDayButton,n.labelDayButton),labelMonthDropdown:lO($D,e?.labelMonthDropdown,n.labelMonthDropdown),labelNext:lO(nO,e?.labelNext,n.labelNext),labelPrevious:lO(rO,e?.labelPrevious,n.labelPrevious),labelWeekNumber:lO(aO,e?.labelWeekNumber,n.labelWeekNumber),labelYearDropdown:lO(sO,e?.labelYearDropdown,n.labelYearDropdown),labelGrid:lO(ZD,e?.labelGrid,n.labelGrid),labelGridcell:lO(QD,e?.labelGridcell,n.labelGridcell),labelNav:lO(eO,e?.labelNav,n.labelNav),labelWeekNumberHeader:lO(oO,e?.labelWeekNumberHeader,n.labelWeekNumberHeader),labelWeekday:lO(iO,e?.labelWeekday,n.labelWeekday)}}function dO(e,t,n,r,i){let{startOfMonth:a,startOfYear:o,endOfYear:s,eachMonthOfInterval:c,getMonth:l}=i;return c({start:o(e),end:s(e)}).map(e=>{let o=r.formatMonthDropdown(e,i);return{value:l(e),label:o,disabled:t&&e<a(t)||n&&e>a(n)||!1}})}function fO(e,t={},n={}){let r={...t?.[$.Day]};return Object.entries(e).filter(([,e])=>e===!0).forEach(([e])=>{r={...r,...n?.[e]}}),r}function pO(e,t,n,r){let i=r??e.today(),a=n?e.startOfBroadcastWeek(i,e):t?e.startOfISOWeek(i):e.startOfWeek(i),o=[];for(let t=0;t<7;t++){let n=e.addDays(a,t);o.push(n)}return o}function mO(e,t,n,r,i=!1){if(!e||!t)return;let{startOfYear:a,endOfYear:o,eachYearOfInterval:s,getYear:c}=r,l=s({start:a(e),end:o(t)});return i&&l.reverse(),l.map(e=>{let t=n.formatYearDropdown(e,r);return{value:c(e),label:t,disabled:!1}})}function hO(e,t={}){let{weekStartsOn:n,locale:r}=t,i=n??r?.options?.weekStartsOn??0,a=t=>{let n=typeof t==`number`||typeof t==`string`?new Date(t):t;return new zE(n.getFullYear(),n.getMonth(),n.getDate(),12,0,0,e)},o=e=>{let t=a(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)};return{today:()=>a(zE.tz(e)),newDate:(t,n,r)=>new zE(t,n,r,12,0,0,e),startOfDay:e=>a(e),startOfWeek:(e,t)=>{let n=a(e),r=t?.weekStartsOn??i,o=(n.getDay()-r+7)%7;return n.setDate(n.getDate()-o),n},startOfISOWeek:e=>{let t=a(e),n=(t.getDay()-1+7)%7;return t.setDate(t.getDate()-n),t},startOfMonth:e=>{let t=a(e);return t.setDate(1),t},startOfYear:e=>{let t=a(e);return t.setMonth(0,1),t},endOfWeek:(e,t)=>{let n=a(e),r=(((t?.weekStartsOn??i)+6)%7-n.getDay()+7)%7;return n.setDate(n.getDate()+r),n},endOfISOWeek:e=>{let t=a(e),n=(7-t.getDay())%7;return t.setDate(t.getDate()+n),t},endOfMonth:e=>{let t=a(e);return t.setMonth(t.getMonth()+1,0),t},endOfYear:e=>{let t=a(e);return t.setMonth(11,31),t},eachMonthOfInterval:t=>{let n=a(t.start),r=a(t.end),i=[],o=new zE(n.getFullYear(),n.getMonth(),1,12,0,0,e),s=r.getFullYear()*12+r.getMonth();for(;o.getFullYear()*12+o.getMonth()<=s;)i.push(new zE(o,e)),o.setMonth(o.getMonth()+1,1);return i},addDays:(e,t)=>{let n=a(e);return n.setDate(n.getDate()+t),n},addWeeks:(e,t)=>{let n=a(e);return n.setDate(n.getDate()+t*7),n},addMonths:(e,t)=>{let n=a(e);return n.setMonth(n.getMonth()+t),n},addYears:(e,t)=>{let n=a(e);return n.setFullYear(n.getFullYear()+t),n},eachYearOfInterval:t=>{let n=a(t.start),r=a(t.end),i=[],o=new zE(n.getFullYear(),0,1,12,0,0,e);for(;o.getFullYear()<=r.getFullYear();)i.push(new zE(o,e)),o.setFullYear(o.getFullYear()+1,0,1);return i},getWeek:(e,t)=>Mw(o(e),{weekStartsOn:t?.weekStartsOn??i,firstWeekContainsDate:t?.firstWeekContainsDate??r?.options?.firstWeekContainsDate??1}),getISOWeek:e=>kw(o(e)),differenceInCalendarDays:(e,t)=>XC(o(e),o(t)),differenceInCalendarMonths:(e,t)=>aw(o(e),o(t))}}var gO=e=>e instanceof HTMLElement?e:null,_O=e=>[...e.querySelectorAll(`[data-animated-month]`)??[]],vO=e=>gO(e.querySelector(`[data-animated-month]`)),yO=e=>gO(e.querySelector(`[data-animated-caption]`)),bO=e=>gO(e.querySelector(`[data-animated-weeks]`)),xO=e=>gO(e.querySelector(`[data-animated-nav]`)),SO=e=>gO(e.querySelector(`[data-animated-weekdays]`));function CO(e,t,{classNames:n,months:r,focused:i,dateLib:a}){let o=(0,v.useRef)(null),s=(0,v.useRef)(r),c=(0,v.useRef)(!1);(0,v.useLayoutEffect)(()=>{let l=s.current;if(s.current=r,!t||!e.current||!(e.current instanceof HTMLElement)||r.length===0||l.length===0||r.length!==l.length)return;let u=a.isSameMonth(r[0].date,l[0].date),d=a.isAfter(r[0].date,l[0].date),f=d?n[rD.caption_after_enter]:n[rD.caption_before_enter],p=d?n[rD.weeks_after_enter]:n[rD.weeks_before_enter],m=o.current,h=e.current.cloneNode(!0);if(h instanceof HTMLElement?(_O(h).forEach(e=>{if(!(e instanceof HTMLElement))return;let t=vO(e);t&&e.contains(t)&&e.removeChild(t);let n=yO(e);n&&n.classList.remove(f);let r=bO(e);r&&r.classList.remove(p)}),o.current=h):o.current=null,c.current||u||i)return;let g=m instanceof HTMLElement?_O(m):[],_=_O(e.current);if(_?.every(e=>e instanceof HTMLElement)&&g?.every(e=>e instanceof HTMLElement)){c.current=!0;let t=[];e.current.style.isolation=`isolate`;let r=xO(e.current);r&&(r.style.zIndex=`1`),_.forEach((i,a)=>{let o=g[a];if(!o)return;i.style.position=`relative`,i.style.overflow=`hidden`;let s=yO(i);s&&s.classList.add(f);let l=bO(i);l&&l.classList.add(p);let u=()=>{c.current=!1,e.current&&(e.current.style.isolation=``),r&&(r.style.zIndex=``),s&&s.classList.remove(f),l&&l.classList.remove(p),i.style.position=``,i.style.overflow=``,i.contains(o)&&i.removeChild(o)};t.push(u),o.style.pointerEvents=`none`,o.style.position=`absolute`,o.style.overflow=`hidden`,o.setAttribute(`aria-hidden`,`true`);let m=SO(o);m&&(m.style.opacity=`0`);let h=yO(o);h&&(h.classList.add(d?n[rD.caption_before_exit]:n[rD.caption_after_exit]),h.addEventListener(`animationend`,u));let _=bO(o);_&&_.classList.add(d?n[rD.weeks_before_exit]:n[rD.weeks_after_exit]),i.insertBefore(o,i.firstChild)})}})}function wO(e,t,n,r){let i=e[0],a=e[e.length-1],{ISOWeek:o,fixedWeeks:s,broadcastCalendar:c}=n??{},{addDays:l,differenceInCalendarDays:u,differenceInCalendarMonths:d,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:m,endOfWeek:h,isAfter:g,startOfBroadcastWeek:_,startOfISOWeek:v,startOfWeek:y}=r,b=c?_(i,r):o?v(i):y(i),x=c?f(a):o?p(m(a)):h(m(a)),S=t&&(c?f(t):o?p(t):h(t)),C=u(S&&g(x,S)?S:x,b),w=d(a,i)+1,T=[];for(let e=0;e<=C;e++){let t=l(b,e);T.push(t)}let E=(c?35:42)*w;if(s&&T.length<E){let e=E-T.length;for(let t=0;t<e;t++){let e=l(T[T.length-1],1);T.push(e)}}return T}function TO(e){let t=[];return e.reduce((e,n)=>{let r=n.weeks.reduce((e,t)=>e.concat(t.days.slice()),t.slice());return e.concat(r.slice())},t.slice())}function EO(e,t,n,r){let{numberOfMonths:i=1}=n,a=[];for(let n=0;n<i;n++){let i=r.addMonths(e,n);if(t&&i>t)break;a.push(i)}return a}function DO(e,t,n,r){let{month:i,defaultMonth:a,today:o=r.today(),numberOfMonths:s=1}=e,c=i||a||o,{differenceInCalendarMonths:l,addMonths:u,startOfMonth:d}=r;return n&&l(n,c)<s-1&&(c=u(n,-1*(s-1))),t&&l(c,t)<0&&(c=t),d(c)}function OO(e,t,n,r){let{addDays:i,endOfBroadcastWeek:a,endOfISOWeek:o,endOfMonth:s,endOfWeek:c,getISOWeek:l,getWeek:u,startOfBroadcastWeek:d,startOfISOWeek:f,startOfWeek:p}=r,m=e.reduce((e,m)=>{let h=n.broadcastCalendar?d(m,r):n.ISOWeek?f(m):p(m),g=n.broadcastCalendar?a(m):n.ISOWeek?o(s(m)):c(s(m)),_=t.filter(e=>e>=h&&e<=g),v=n.broadcastCalendar?35:42;if(n.fixedWeeks&&_.length<v){let e=t.filter(e=>{let t=v-_.length;return e>g&&e<=i(g,t)});_.push(...e)}let y=new YE(m,_.reduce((e,t)=>{let i=n.ISOWeek?l(t):u(t),a=e.find(e=>e.weekNumber===i),o=new JE(t,m,r);return a?a.days.push(o):e.push(new XE(i,[o])),e},[]));return e.push(y),e},[]);return n.reverseMonths?m.reverse():m}function kO(e,t){let{startMonth:n,endMonth:r}=e,{startOfYear:i,startOfDay:a,startOfMonth:o,endOfMonth:s,addYears:c,endOfYear:l,today:u}=t,d=e.captionLayout===`dropdown`||e.captionLayout===`dropdown-years`;return n?n=o(n):!n&&d&&(n=i(c(e.today??u(),-100))),r?r=s(r):!r&&d&&(r=l(e.today??u())),[n&&a(n),r&&a(r)]}function AO(e,t,n,r){if(n.disableNavigation)return;let{pagedNavigation:i,numberOfMonths:a=1}=n,{startOfMonth:o,addMonths:s,differenceInCalendarMonths:c}=r,l=i?a:1,u=o(e);if(!t||!(c(t,e)<a))return s(u,l)}function jO(e,t,n,r){if(n.disableNavigation)return;let{pagedNavigation:i,numberOfMonths:a}=n,{startOfMonth:o,addMonths:s,differenceInCalendarMonths:c}=r,l=i?a??1:1,u=o(e);if(!t||!(c(u,t)<=0))return s(u,-l)}function MO(e){return e.reduce((e,t)=>e.concat(t.weeks.slice()),[].slice())}function NO(e,t){let[n,r]=(0,v.useState)(e);return[t===void 0?n:t,r]}function PO(e,t){let[n,r]=kO(e,t),{startOfMonth:i,endOfMonth:a}=t,o=DO(e,n,r,t),[s,c]=NO(o,e.month?o:void 0);(0,v.useEffect)(()=>{let i=DO(e,n,r,t);c(i)},[e.timeZone]);let{months:l,weeks:u,days:d,previousMonth:f,nextMonth:p}=(0,v.useMemo)(()=>{let i=EO(s,r,{numberOfMonths:e.numberOfMonths},t),o=OO(i,wO(i,e.endMonth?a(e.endMonth):void 0,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t),{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);return{months:o,weeks:MO(o),days:TO(o),previousMonth:jO(s,n,e,t),nextMonth:AO(s,r,e,t)}},[t,s.getTime(),r?.getTime(),n?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]),{disableNavigation:m,onMonthChange:h}=e,g=e=>u.some(t=>t.days.some(t=>t.isEqualTo(e))),_=e=>{if(m)return;let t=i(e);n&&t<i(n)&&(t=i(n)),r&&t>i(r)&&(t=i(r)),c(t),h?.(t)};return{months:l,weeks:u,days:d,navStart:n,navEnd:r,previousMonth:f,nextMonth:p,goToMonth:_,goToDay:e=>{g(e)||_(e.date)}}}var FO;(function(e){e[e.Today=0]=`Today`,e[e.Selected=1]=`Selected`,e[e.LastFocused=2]=`LastFocused`,e[e.FocusedModifier=3]=`FocusedModifier`})(FO||={});function IO(e){return!e[tD.disabled]&&!e[tD.hidden]&&!e[tD.outside]}function LO(e,t,n,r){let i,a=-1;for(let o of e){let e=t(o);IO(e)&&(e[tD.focused]&&a<FO.FocusedModifier?(i=o,a=FO.FocusedModifier):r?.isEqualTo(o)&&a<FO.LastFocused?(i=o,a=FO.LastFocused):n(o.date)&&a<FO.Selected?(i=o,a=FO.Selected):e[tD.today]&&a<FO.Today&&(i=o,a=FO.Today))}return i||=e.find(e=>IO(t(e))),i}function RO(e,t,n,r,i,a,o){let{ISOWeek:s,broadcastCalendar:c}=a,{addDays:l,addMonths:u,addWeeks:d,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:m,endOfWeek:h,max:g,min:_,startOfBroadcastWeek:v,startOfISOWeek:y,startOfWeek:b}=o,x={day:l,week:d,month:u,year:f,startOfWeek:e=>c?v(e,o):s?y(e):b(e),endOfWeek:e=>c?p(e):s?m(e):h(e)}[e](n,t===`after`?1:-1);return t===`before`&&r?x=g([r,x]):t===`after`&&i&&(x=_([i,x])),x}function zO(e,t,n,r,i,a,o,s=0){if(s>365)return;let c=RO(e,t,n.date,r,i,a,o),l=!!(a.disabled&&FD(c,a.disabled,o)),u=!!(a.hidden&&FD(c,a.hidden,o)),d=new JE(c,c,o);return!l&&!u?d:zO(e,t,d,r,i,a,o,s+1)}function BO(e,t,n,r,i){let{autoFocus:a}=e,[o,s]=(0,v.useState)(),c=LO(t.days,n,r||(()=>!1),o),[l,u]=(0,v.useState)(a?c:void 0);return(0,v.useEffect)(()=>{l&&c&&(t.days.some(e=>e.isEqualTo(l))||u(c))},[t.days,l,c]),{isFocusTarget:e=>!!c?.isEqualTo(e),setFocused:u,focused:l,blur:()=>{s(l),u(void 0)},moveFocus:(n,r)=>{if(!l)return;let a=zO(n,r,l,t.navStart,t.navEnd,e,i);a&&(!e.disableNavigation||t.days.some(e=>e.isEqualTo(a)))&&(t.goToDay(a),u(a))}}}function VO(e,t){let{selected:n,required:r,onSelect:i}=e,[a,o]=NO(n,i?n:void 0),s=i?n:a,{isSameDay:c}=t,l=e=>s?.some(t=>c(t,e))??!1,{min:u,max:d}=e;return{selected:s,select:(e,t,n)=>{let a=[...s??[]];if(l(e)){if(s?.length===u||r&&s?.length===1)return;a=s?.filter(t=>!c(t,e))}else a=s?.length===d?[e]:[...a,e];return i||o(a),i?.(a,e,t,n),a},isSelected:l}}function HO(e,t,n=0,r=0,i=!1,a=qE){let{from:o,to:s}=t||{},{isSameDay:c,isAfter:l,isBefore:u}=a,d;if(!o&&!s)d={from:e,to:n>0?void 0:e};else if(o&&!s)d=c(o,e)?n===0?{from:o,to:e}:i?{from:o,to:void 0}:void 0:u(e,o)?{from:e,to:o}:{from:o,to:e};else if(o&&s){if(c(o,e)&&c(s,e))d=i?{from:o,to:s}:void 0;else if(c(o,e))d={from:o,to:n>0?void 0:e};else if(c(s,e))d={from:e,to:n>0?void 0:e};else if(u(e,o))d={from:e,to:s};else if(l(e,o))d={from:o,to:e};else if(l(e,s))d={from:o,to:e};else throw Error(`Invalid range`)}if(d?.from&&d?.to){let t=a.differenceInCalendarDays(d.to,d.from);(r>0&&t>r||n>1&&t<n)&&(d={from:e,to:void 0})}return d}function UO(e,t,n=qE){let r=Array.isArray(t)?t:[t],i=e.from,a=n.differenceInCalendarDays(e.to,e.from),o=Math.min(a,6);for(let e=0;e<=o;e++){if(r.includes(i.getDay()))return!0;i=n.addDays(i,1)}return!1}function WO(e,t,n=qE){return OD(e,t.from,!1,n)||OD(e,t.to,!1,n)||OD(t,e.from,!1,n)||OD(t,e.to,!1,n)}function GO(e,t,n=qE){let r=Array.isArray(t)?t:[t];if(r.filter(e=>typeof e!=`function`).some(t=>typeof t==`boolean`?t:n.isDate(t)?OD(e,t,!1,n):PD(t,n)?t.some(t=>OD(e,t,!1,n)):AD(t)?t.from&&t.to?WO(e,{from:t.from,to:t.to},n):!1:ND(t)?UO(e,t.dayOfWeek,n):kD(t)?n.isAfter(t.before,t.after)?WO(e,{from:n.addDays(t.after,1),to:n.addDays(t.before,-1)},n):FD(e.from,t,n)||FD(e.to,t,n):jD(t)||MD(t)?FD(e.from,t,n)||FD(e.to,t,n):!1))return!0;let i=r.filter(e=>typeof e==`function`);if(i.length){let t=e.from,r=n.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=r;e++){if(i.some(e=>e(t)))return!0;t=n.addDays(t,1)}}return!1}function KO(e,t){let{disabled:n,excludeDisabled:r,resetOnSelect:i,selected:a,required:o,onSelect:s}=e,[c,l]=NO(a,s?a:void 0),u=s?a:c;return{selected:u,select:(a,c,d)=>{let{min:f,max:p}=e,m;if(a){let e=u?.from,n=u?.to,r=!!e&&!!n,s=!!e&&!!n&&t.isSameDay(e,n)&&t.isSameDay(a,e);m=i&&(r||!u?.from)?!o&&s?void 0:{from:a,to:void 0}:HO(a,u,f,p,o,t)}return r&&n&&m?.from&&m.to&&GO({from:m.from,to:m.to},n,t)&&(m.from=a,m.to=void 0),s||l(m),s?.(m,a,c,d),m},isSelected:e=>u&&OD(u,e,!1,t)}}function qO(e,t){let{selected:n,required:r,onSelect:i}=e,[a,o]=NO(n,i?n:void 0),s=i?n:a,{isSameDay:c}=t;return{selected:s,select:(e,t,n)=>{let a=e;return!r&&s&&s&&c(e,s)&&(a=void 0),i||o(a),i?.(a,e,t,n),a},isSelected:e=>s?c(s,e):!1}}function JO(e,t){let n=qO(e,t),r=VO(e,t),i=KO(e,t);switch(e.mode){case`single`:return n;case`multiple`:return r;case`range`:return i;default:return}}function YO(e,t){return e instanceof zE&&e.timeZone===t?e:new zE(e,t)}function XO(e,t,n){if(!n)return YO(e,t);let r=YO(e,t),i=new zE(r.getFullYear(),r.getMonth(),r.getDate(),12,0,0,t);return new Date(i.getTime())}function ZO(e,t,n){return typeof e==`boolean`||typeof e==`function`?e:e instanceof Date?XO(e,t,n):Array.isArray(e)?e.map(e=>e instanceof Date?XO(e,t,n):e):AD(e)?{...e,from:e.from?YO(e.from,t):e.from,to:e.to?YO(e.to,t):e.to}:kD(e)?{before:XO(e.before,t,n),after:XO(e.after,t,n)}:jD(e)?{after:XO(e.after,t,n)}:MD(e)?{before:XO(e.before,t,n)}:e}function QO(e,t,n){return e&&(Array.isArray(e)?e.map(e=>ZO(e,t,n)):ZO(e,t,n))}function $O(e){let t=e,n=t.timeZone;if(n&&(t={...e,timeZone:n},t.today&&(t.today=YO(t.today,n)),t.month&&(t.month=YO(t.month,n)),t.defaultMonth&&(t.defaultMonth=YO(t.defaultMonth,n)),t.startMonth&&(t.startMonth=YO(t.startMonth,n)),t.endMonth&&(t.endMonth=YO(t.endMonth,n)),t.mode===`single`&&t.selected?t.selected=YO(t.selected,n):t.mode===`multiple`&&t.selected?t.selected=t.selected?.map(e=>YO(e,n)):t.mode===`range`&&t.selected&&(t.selected={from:t.selected.from?YO(t.selected.from,n):t.selected.from,to:t.selected.to?YO(t.selected.to,n):t.selected.to}),t.disabled!==void 0&&(t.disabled=QO(t.disabled,n)),t.hidden!==void 0&&(t.hidden=QO(t.hidden,n)),t.modifiers)){let e={};Object.keys(t.modifiers).forEach(r=>{e[r]=QO(t.modifiers?.[r],n)}),t.modifiers=e}let{components:r,formatters:i,labels:a,dateLib:o,locale:s,classNames:c}=(0,v.useMemo)(()=>{let e={...GE,...t.locale},n=t.broadcastCalendar?1:t.weekStartsOn,r=t.noonSafe&&t.timeZone?hO(t.timeZone,{weekStartsOn:n,locale:e}):void 0,i=t.dateLib&&r?{...r,...t.dateLib}:t.dateLib??r,a=new KE({locale:e,weekStartsOn:n,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},i);return{dateLib:a,components:RD(t.components),formatters:YD(t.formatters),labels:uO(t.labels,a.options),locale:e,classNames:{...BD(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.noonSafe,t.components,t.formatters,t.labels,t.classNames]);t.today||(t={...t,today:o.today()});let{captionLayout:l,mode:u,navLayout:d,numberOfMonths:f=1,onDayBlur:p,onDayClick:m,onDayFocus:h,onDayKeyDown:g,onDayMouseEnter:_,onDayMouseLeave:y,onNextClick:b,onPrevClick:x,showWeekNumber:S,styles:C}=t,{formatCaption:w,formatDay:T,formatMonthDropdown:E,formatWeekNumber:D,formatWeekNumberHeader:O,formatWeekdayName:k,formatYearDropdown:A}=i,j=PO(t,o),{days:M,months:N,navStart:P,navEnd:F,previousMonth:I,nextMonth:ee,goToMonth:te}=j,ne=ID(M,t,P,F,o),{isSelected:re,select:ie,selected:ae}=JO(t,o)??{},{blur:oe,focused:se,isFocusTarget:ce,moveFocus:le,setFocused:ue}=BO(t,j,ne,re??(()=>!1),o),{labelDayButton:de,labelGridcell:fe,labelGrid:pe,labelMonthDropdown:L,labelNav:R,labelPrevious:me,labelNext:he,labelWeekday:ge,labelWeekNumber:_e,labelWeekNumberHeader:ve,labelYearDropdown:ye}=a,be=(0,v.useMemo)(()=>pO(o,t.ISOWeek,t.broadcastCalendar,t.today),[o,t.ISOWeek,t.broadcastCalendar,t.today]),xe=u!==void 0||m!==void 0,Se=(0,v.useCallback)(()=>{I&&(te(I),x?.(I))},[I,te,x]),Ce=(0,v.useCallback)(()=>{ee&&(te(ee),b?.(ee))},[te,ee,b]),we=(0,v.useCallback)((e,t)=>n=>{n.preventDefault(),n.stopPropagation(),ue(e),!t.disabled&&(ie?.(e.date,t,n),m?.(e.date,t,n))},[ie,m,ue]),Te=(0,v.useCallback)((e,t)=>n=>{ue(e),h?.(e.date,t,n)},[h,ue]),Ee=(0,v.useCallback)((e,t)=>n=>{oe(),p?.(e.date,t,n)},[oe,p]),De=(0,v.useCallback)((e,n)=>r=>{let i={ArrowLeft:[r.shiftKey?`month`:`day`,t.dir===`rtl`?`after`:`before`],ArrowRight:[r.shiftKey?`month`:`day`,t.dir===`rtl`?`before`:`after`],ArrowDown:[r.shiftKey?`year`:`week`,`after`],ArrowUp:[r.shiftKey?`year`:`week`,`before`],PageUp:[r.shiftKey?`year`:`month`,`before`],PageDown:[r.shiftKey?`year`:`month`,`after`],Home:[`startOfWeek`,`before`],End:[`endOfWeek`,`after`]};if(i[r.key]){r.preventDefault(),r.stopPropagation();let[e,t]=i[r.key];le(e,t)}g?.(e.date,n,r)},[le,g,t.dir]),Oe=(0,v.useCallback)((e,t)=>n=>{_?.(e.date,t,n)},[_]),ke=(0,v.useCallback)((e,t)=>n=>{y?.(e.date,t,n)},[y]),Ae=(0,v.useCallback)((e,t)=>n=>{let r=Number(n.target.value),i=o.setMonth(o.startOfMonth(e),r);te(o.addMonths(i,-t))},[o,te]),je=(0,v.useCallback)((e,t)=>n=>{let r=Number(n.target.value),i=o.setYear(o.startOfMonth(e),r);te(o.addMonths(i,-t))},[o,te]),{className:Me,style:Ne}=(0,v.useMemo)(()=>({className:[c[$.Root],t.className].filter(Boolean).join(` `),style:{...C?.[$.Root],...t.style}}),[c,t.className,t.style,C]),Pe=zD(t),Fe=e=>{let t=C?.[$.Dropdown],n=C?.[e];if(t||n)return{...t,...n}},Ie=(0,v.useRef)(null);CO(Ie,!!t.animate,{classNames:c,months:N,focused:se,dateLib:o});let Le={dayPickerProps:t,selected:ae,select:ie,isSelected:re,months:N,nextMonth:ee,previousMonth:I,goToMonth:te,getModifiers:ne,components:r,classNames:c,styles:C,labels:a,formatters:i};return v.createElement(iD.Provider,{value:Le},v.createElement(r.Root,{rootRef:t.animate?Ie:void 0,className:Me,style:Ne,dir:t.dir,id:t.id,lang:t.lang??s.code,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t[`aria-label`],"aria-labelledby":t[`aria-labelledby`],...Pe},v.createElement(r.Months,{className:c[$.Months],style:C?.[$.Months]},!t.hideNavigation&&!d&&v.createElement(r.Nav,{"data-animated-nav":t.animate?`true`:void 0,className:c[$.Nav],style:C?.[$.Nav],"aria-label":R(),onPreviousClick:Se,onNextClick:Ce,previousMonth:I,nextMonth:ee}),N.map((e,n)=>{let a=t.reverseMonths?N.length-1-n:n;return v.createElement(r.Month,{"data-animated-month":t.animate?`true`:void 0,className:c[$.Month],style:C?.[$.Month],key:n,displayIndex:n,calendarMonth:e},d===`around`&&!t.hideNavigation&&n===0&&v.createElement(r.PreviousMonthButton,{type:`button`,className:c[$.PreviousMonthButton],style:C?.[$.PreviousMonthButton],tabIndex:I?void 0:-1,"aria-disabled":!I||void 0,"aria-label":me(I),onClick:Se,"data-animated-button":t.animate?`true`:void 0},v.createElement(r.Chevron,{disabled:!I||void 0,className:c[$.Chevron],style:C?.[$.Chevron],orientation:t.dir===`rtl`?`right`:`left`})),v.createElement(r.MonthCaption,{"data-animated-caption":t.animate?`true`:void 0,className:c[$.MonthCaption],style:C?.[$.MonthCaption],calendarMonth:e,displayIndex:n},l?.startsWith(`dropdown`)?v.createElement(r.DropdownNav,{className:c[$.Dropdowns],style:C?.[$.Dropdowns]},(()=>{let n=l===`dropdown`||l===`dropdown-months`?v.createElement(r.MonthsDropdown,{key:`month`,className:c[$.MonthsDropdown],"aria-label":L(),disabled:!!t.disableNavigation,onChange:Ae(e.date,a),options:dO(e.date,P,F,i,o),style:Fe($.MonthsDropdown),value:o.getMonth(e.date)}):v.createElement(`span`,{key:`month`},E(e.date,o)),s=l===`dropdown`||l===`dropdown-years`?v.createElement(r.YearsDropdown,{key:`year`,className:c[$.YearsDropdown],"aria-label":ye(o.options),disabled:!!t.disableNavigation,onChange:je(e.date,a),options:mO(P,F,i,o,!!t.reverseYears),style:Fe($.YearsDropdown),value:o.getYear(e.date)}):v.createElement(`span`,{key:`year`},A(e.date,o));return o.getMonthYearOrder()===`year-first`?[s,n]:[n,s]})(),v.createElement(`span`,{role:`status`,"aria-live":`polite`,style:{border:0,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`absolute`,width:`1px`,whiteSpace:`nowrap`,wordWrap:`normal`}},w(e.date,o.options,o))):v.createElement(r.CaptionLabel,{className:c[$.CaptionLabel],style:C?.[$.CaptionLabel],role:`status`,"aria-live":`polite`},w(e.date,o.options,o))),d===`around`&&!t.hideNavigation&&n===f-1&&v.createElement(r.NextMonthButton,{type:`button`,className:c[$.NextMonthButton],style:C?.[$.NextMonthButton],tabIndex:ee?void 0:-1,"aria-disabled":!ee||void 0,"aria-label":he(ee),onClick:Ce,"data-animated-button":t.animate?`true`:void 0},v.createElement(r.Chevron,{disabled:!ee||void 0,className:c[$.Chevron],style:C?.[$.Chevron],orientation:t.dir===`rtl`?`left`:`right`})),n===f-1&&d===`after`&&!t.hideNavigation&&v.createElement(r.Nav,{"data-animated-nav":t.animate?`true`:void 0,className:c[$.Nav],style:C?.[$.Nav],"aria-label":R(),onPreviousClick:Se,onNextClick:Ce,previousMonth:I,nextMonth:ee}),v.createElement(r.MonthGrid,{role:`grid`,"aria-multiselectable":u===`multiple`||u===`range`,"aria-label":pe(e.date,o.options,o)||void 0,className:c[$.MonthGrid],style:C?.[$.MonthGrid]},!t.hideWeekdays&&v.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?`true`:void 0,className:c[$.Weekdays],style:C?.[$.Weekdays]},S&&v.createElement(r.WeekNumberHeader,{"aria-label":ve(o.options),className:c[$.WeekNumberHeader],style:C?.[$.WeekNumberHeader],scope:`col`},O()),be.map(e=>v.createElement(r.Weekday,{"aria-label":ge(e,o.options,o),className:c[$.Weekday],key:String(e),style:C?.[$.Weekday],scope:`col`},k(e,o.options,o)))),v.createElement(r.Weeks,{"data-animated-weeks":t.animate?`true`:void 0,className:c[$.Weeks],style:C?.[$.Weeks]},e.weeks.map(e=>v.createElement(r.Week,{className:c[$.Week],key:e.weekNumber,style:C?.[$.Week],week:e},S&&v.createElement(r.WeekNumber,{week:e,style:C?.[$.WeekNumber],"aria-label":_e(e.weekNumber,{locale:s}),className:c[$.WeekNumber],scope:`row`,role:`rowheader`},D(e.weekNumber,o)),e.days.map(e=>{let{date:n}=e,i=ne(e);if(i[tD.focused]=!i.hidden&&!!se?.isEqualTo(e),i[nD.selected]=re?.(n)||i.selected,AD(ae)){let{from:e,to:t}=ae;i[nD.range_start]=!!(e&&t&&o.isSameDay(n,e)),i[nD.range_end]=!!(e&&t&&o.isSameDay(n,t)),i[nD.range_middle]=OD(ae,n,!0,o)}let a=fO(i,C,t.modifiersStyles),s=LD(i,c,t.modifiersClassNames),l=!xe&&!i.hidden?fe(n,i,o.options,o):void 0;return v.createElement(r.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:i,className:s.join(` `),style:a,role:`gridcell`,"aria-selected":i.selected||void 0,"aria-label":l,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:void 0,"data-selected":i.selected||void 0,"data-disabled":i.disabled||void 0,"data-hidden":i.hidden||void 0,"data-outside":e.outside||void 0,"data-focused":i.focused||void 0,"data-today":i.today||void 0},!i.hidden&&xe?v.createElement(r.DayButton,{className:c[$.DayButton],style:C?.[$.DayButton],type:`button`,day:e,modifiers:i,disabled:!i.focused&&i.disabled||void 0,"aria-disabled":i.focused&&i.disabled||void 0,tabIndex:ce(e)?0:-1,"aria-label":de(n,i,o.options,o),onClick:we(e,i),onBlur:Ee(e,i),onFocus:Te(e,i),onKeyDown:De(e,i),onMouseEnter:Oe(e,i),onMouseLeave:ke(e,i)},T(n,o.options,o)):!i.hidden&&T(e.date,o.options,o))}))))))})),t.footer&&v.createElement(r.Footer,{className:c[$.Footer],style:C?.[$.Footer],role:`status`,"aria-live":`polite`},t.footer)))}function ek({className:e,classNames:t,showOutsideDays:n=!0,captionLayout:r=`label`,buttonVariant:i=`ghost`,formatters:a,components:o,...s}){let c=BD();return(0,W.jsx)($O,{showOutsideDays:n,className:H(`group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent`,String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,e),captionLayout:r,formatters:{formatMonthDropdown:e=>e.toLocaleString(`default`,{month:`short`}),...a},classNames:{root:H(`w-fit`,c.root),months:H(`relative flex flex-col gap-4 md:flex-row`,c.months),month:H(`flex w-full flex-col gap-4`,c.month),nav:H(`absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1`,c.nav),button_previous:H(sx({variant:i}),`size-(--cell-size) p-0 select-none aria-disabled:opacity-50`,c.button_previous),button_next:H(sx({variant:i}),`size-(--cell-size) p-0 select-none aria-disabled:opacity-50`,c.button_next),month_caption:H(`flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)`,c.month_caption),dropdowns:H(`flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium`,c.dropdowns),dropdown_root:H(`relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50`,c.dropdown_root),dropdown:H(`absolute inset-0 bg-popover opacity-0`,c.dropdown),caption_label:H(`font-medium select-none`,r===`label`?`text-sm`:`flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground`,c.caption_label),month_grid:H(`w-full border-collapse`,c.month_grid),weekdays:H(`flex`,c.weekdays),weekday:H(`flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none`,c.weekday),week:H(`mt-2 flex w-full`,c.week),week_number_header:H(`w-(--cell-size) select-none`,c.week_number_header),week_number:H(`text-[0.8rem] text-muted-foreground select-none`,c.week_number),day:H(`group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md`,s.showWeekNumber?`[&:nth-child(2)[data-selected=true]_button]:rounded-l-md`:`[&:first-child[data-selected=true]_button]:rounded-l-md`,c.day),range_start:H(`rounded-l-md bg-accent`,c.range_start),range_middle:H(`rounded-none`,c.range_middle),range_end:H(`rounded-r-md bg-accent`,c.range_end),today:H(`rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none`,c.today),outside:H(`text-muted-foreground aria-selected:text-muted-foreground`,c.outside),disabled:H(`text-muted-foreground opacity-50`,c.disabled),hidden:H(`invisible`,c.hidden),...t},components:{Root:({className:e,rootRef:t,...n})=>(0,W.jsx)(`div`,{"data-slot":`calendar`,ref:t,className:H(e),...n}),Chevron:({className:e,orientation:t,...n})=>t===`left`?(0,W.jsx)(Le,{className:H(`size-4`,e),...n}):t===`right`?(0,W.jsx)(Re,{className:H(`size-4`,e),...n}):(0,W.jsx)(Ie,{className:H(`size-4`,e),...n}),DayButton:tk,WeekNumber:({children:e,...t})=>(0,W.jsx)(`td`,{...t,children:(0,W.jsx)(`div`,{className:`flex size-(--cell-size) items-center justify-center text-center`,children:e})}),...o},...s})}function tk({className:e,day:t,modifiers:n,...r}){let i=BD(),a=v.useRef(null);return v.useEffect(()=>{n.focused&&a.current?.focus()},[n.focused]),(0,W.jsx)(Q,{ref:a,variant:`ghost`,size:`icon`,"data-day":t.date.toLocaleDateString(),"data-selected-single":n.selected&&!n.range_start&&!n.range_end&&!n.range_middle,"data-range-start":n.range_start,"data-range-end":n.range_end,"data-range-middle":n.range_middle,className:H(`flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70`,i.day,e),...r})}function nk({className:e,...t}){return(0,W.jsx)(`div`,{"data-slot":`table-container`,className:`relative w-full overflow-x-auto`,children:(0,W.jsx)(`table`,{"data-slot":`table`,className:H(`w-full caption-bottom text-sm`,e),...t})})}function rk({className:e,...t}){return(0,W.jsx)(`thead`,{"data-slot":`table-header`,className:H(`[&_tr]:border-b`,e),...t})}function ik({className:e,...t}){return(0,W.jsx)(`tbody`,{"data-slot":`table-body`,className:H(`[&_tr:last-child]:border-0`,e),...t})}function ak({className:e,...t}){return(0,W.jsx)(`tr`,{"data-slot":`table-row`,className:H(`border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted`,e),...t})}function ok({className:e,...t}){return(0,W.jsx)(`th`,{"data-slot":`table-head`,className:H(`h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,e),...t})}function sk({className:e,...t}){return(0,W.jsx)(`td`,{"data-slot":`table-cell`,className:H(`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,e),...t})}function ck({label:e,value:t,onChange:n,options:r}){let[i,a]=(0,v.useState)(!1),o=(0,v.useId)();return(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{id:o,children:e}),(0,W.jsxs)(ST,{open:i,onOpenChange:a,children:[(0,W.jsx)(CT,{asChild:!0,children:(0,W.jsxs)(Q,{variant:`outline`,role:`combobox`,"aria-labelledby":o,"aria-expanded":i,className:`justify-between`,children:[r.find(e=>e.value===t)?.label||`Seleziona`,(0,W.jsx)(Be,{"aria-hidden":`true`})]})}),(0,W.jsx)(wT,{className:`p-0`,children:(0,W.jsxs)(bE,{children:[(0,W.jsx)(xE,{placeholder:`Cerca reparto…`,"aria-label":`Cerca reparto`}),(0,W.jsxs)(SE,{children:[(0,W.jsx)(CE,{children:`Nessun reparto trovato.`}),(0,W.jsx)(wE,{children:r.map(e=>(0,W.jsxs)(TE,{value:e.label,onSelect:()=>{n(e.value),a(!1)},children:[(0,W.jsx)(Fe,{"aria-hidden":`true`,className:t===e.value?`opacity-100`:`opacity-0`}),e.label]},e.value))})]})]})})]})]})}function lk({label:e,value:t,onChange:n}){let[r,i]=(0,v.useState)(!1),a=(0,v.useId)();return(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{id:a,children:e}),(0,W.jsxs)(ST,{open:r,onOpenChange:i,children:[(0,W.jsx)(CT,{asChild:!0,children:(0,W.jsxs)(Q,{"aria-labelledby":a,variant:`outline`,className:`justify-start`,children:[(0,W.jsx)(Pe,{"aria-hidden":`true`}),t?tT(t,`d MMMM yyyy`,{locale:xT}):`Scegli una data`]})}),(0,W.jsx)(wT,{className:`w-auto p-0`,children:(0,W.jsx)(ek,{locale:xT,mode:`single`,selected:t,onSelect:e=>{n(e),i(!1)}})})]})]})}function uk({rows:e,pageSize:t=5}){let[n,r]=(0,v.useState)(``),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(0),c=(0,v.useId)(),l=Math.max(1,t),u=(0,v.useMemo)(()=>e.filter(e=>`${e.title} ${e.department} ${e.status}`.toLocaleLowerCase(`it`).includes(n.toLocaleLowerCase(`it`))).sort((e,t)=>i?e.title.localeCompare(t.title,`it`):t.title.localeCompare(e.title,`it`)),[e,n,i]),d=Math.max(1,Math.ceil(u.length/l)),f=Math.min(o,d-1),p=u.slice(f*l,(f+1)*l);return(0,W.jsxs)(`div`,{children:[(0,W.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-end justify-between gap-3`,children:[(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{htmlFor:c,children:`Cerca attività`}),(0,W.jsx)(hx,{id:c,type:`search`,value:n,onChange:e=>{r(e.target.value),s(0)},placeholder:`Titolo, reparto o stato`,className:`max-w-sm`})]}),(0,W.jsxs)(`span`,{className:`text-sm text-muted-foreground`,role:`status`,children:[u.length,` attività`]})]}),(0,W.jsx)(`div`,{className:`rounded-lg border`,children:(0,W.jsxs)(nk,{children:[(0,W.jsx)(`caption`,{className:`sr-only`,children:`Attività del team con reparto e stato`}),(0,W.jsx)(rk,{children:(0,W.jsxs)(ak,{children:[(0,W.jsx)(ok,{"aria-sort":i?`ascending`:`descending`,children:(0,W.jsxs)(Q,{variant:`ghost`,onClick:()=>{a(!i),s(0)},children:[`Attività`,i?(0,W.jsx)(Ne,{"aria-hidden":`true`}):(0,W.jsx)(Ae,{"aria-hidden":`true`})]})}),(0,W.jsx)(ok,{children:`Reparto`}),(0,W.jsx)(ok,{children:`Stato`})]})}),(0,W.jsx)(ik,{children:p.length?p.map(e=>(0,W.jsxs)(ak,{children:[(0,W.jsx)(sk,{className:`font-medium`,children:e.title}),(0,W.jsx)(sk,{children:e.department}),(0,W.jsx)(sk,{children:(0,W.jsx)(EC,{tone:e.status===`Completato`?`success`:e.status===`In corso`?`info`:`neutral`,children:e.status})})]},e.id)):(0,W.jsx)(ak,{children:(0,W.jsx)(sk,{colSpan:3,className:`h-28 text-center`,children:`Nessuna attività corrisponde alla ricerca.`})})})]})}),(0,W.jsxs)(`nav`,{"aria-label":`Pagine delle attività`,className:`mt-4 flex flex-wrap items-center justify-between gap-3`,children:[(0,W.jsxs)(`span`,{className:`text-sm text-muted-foreground`,children:[`Pagina `,f+1,` di `,d]}),(0,W.jsxs)(`div`,{className:`flex gap-2`,children:[(0,W.jsx)(Q,{variant:`outline`,disabled:f===0,onClick:()=>s(f-1),children:`Precedente`}),(0,W.jsx)(Q,{variant:`outline`,disabled:f>=d-1,onClick:()=>s(f+1),children:`Successiva`})]})]})]})}function dk({title:e,points:t,unit:n}){let r=(0,v.useId)(),i=Math.max(1,...t.map(e=>e.value)),a=Math.min(0,...t.map(e=>e.value)),o=i-a||1,s=e=>48+e*500/Math.max(1,t.length-1),c=e=>150-(e-a)/o*120;return(0,W.jsxs)(`figure`,{children:[(0,W.jsxs)(`figcaption`,{id:r,className:`mb-4 text-sm font-medium`,children:[e,` `,(0,W.jsxs)(`span`,{className:`text-muted-foreground`,children:[`(`,n,`)`]})]}),t.length?(0,W.jsxs)(`svg`,{viewBox:`0 0 600 205`,className:`sft-chart w-full`,role:`img`,"aria-labelledby":r,children:[(0,W.jsx)(`desc`,{children:t.map(e=>`${e.label}: ${e.value} ${n}`).join(`; `)}),[0,.5,1].map(e=>(0,W.jsxs)(`g`,{children:[(0,W.jsx)(`line`,{x1:`48`,x2:`560`,y1:150-e*120,y2:150-e*120}),(0,W.jsx)(`text`,{x:`4`,y:154-e*120,children:Math.round(a+o*e)})]},e)),(0,W.jsx)(`polyline`,{points:t.map((e,t)=>`${s(t)},${c(e.value)}`).join(` `)}),t.map((e,t)=>(0,W.jsxs)(`g`,{children:[(0,W.jsx)(`circle`,{cx:s(t),cy:c(e.value),r:`4`}),(0,W.jsx)(`text`,{textAnchor:`middle`,x:s(t),y:`181`,children:e.label})]},`${e.label}-${t}`))]}):(0,W.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Nessun dato disponibile.`})]})}var fk=Object.assign({"./components/sft/brand.tsx":b,"./components/sft/data.tsx":x,"./components/sft/identity.tsx":S,"./components/ui/accordion.tsx":C,"./components/ui/alert-dialog.tsx":w,"./components/ui/alert.tsx":T,"./components/ui/aspect-ratio.tsx":E,"./components/ui/avatar.tsx":D,"./components/ui/badge.tsx":O,"./components/ui/breadcrumb.tsx":k,"./components/ui/button.tsx":A,"./components/ui/calendar.tsx":j,"./components/ui/card.tsx":M,"./components/ui/checkbox.tsx":N,"./components/ui/collapsible.tsx":P,"./components/ui/command.tsx":F,"./components/ui/dialog.tsx":I,"./components/ui/dropdown-menu.tsx":ee,"./components/ui/empty.tsx":te,"./components/ui/field.tsx":ne,"./components/ui/input.tsx":re,"./components/ui/label.tsx":ie,"./components/ui/navigation-menu.tsx":ae,"./components/ui/pagination.tsx":oe,"./components/ui/popover.tsx":se,"./components/ui/progress.tsx":ce,"./components/ui/radio-group.tsx":le,"./components/ui/scroll-area.tsx":ue,"./components/ui/select.tsx":de,"./components/ui/separator.tsx":fe,"./components/ui/sheet.tsx":pe,"./components/ui/sidebar.tsx":L,"./components/ui/skeleton.tsx":R,"./components/ui/slider.tsx":me,"./components/ui/sonner.tsx":he,"./components/ui/spinner.tsx":ge,"./components/ui/switch.tsx":_e,"./components/ui/table.tsx":ve,"./components/ui/tabs.tsx":ye,"./components/ui/textarea.tsx":be,"./components/ui/toggle-group.tsx":xe,"./components/ui/toggle.tsx":Se,"./components/ui/tooltip.tsx":Ce}),pk=Object.keys(fk).filter(e=>e.includes(`/ui/`)).length,mk=[{id:`1`,title:`Assemblaggio supporto sensori`,department:`Elettronica`,status:`In corso`},{id:`2`,title:`Verifica geometria foil`,department:`Foil`,status:`Da iniziare`},{id:`3`,title:`Preparazione aggiornamento di progetto`,department:`Management`,status:`Completato`},{id:`4`,title:`Controllo attrezzatura`,department:`Shore team`,status:`In corso`},{id:`5`,title:`Documentazione lavorazioni`,department:`Cantiere`,status:`Da iniziare`},{id:`6`,title:`Confronto materiali`,department:`Materiali`,status:`Completato`}],hk=`./brand`;function gk({id:e,kicker:t,title:n,description:r,children:i}){return(0,W.jsxs)(`section`,{id:e,className:`catalog-section`,children:[(0,W.jsxs)(`header`,{children:[(0,W.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:t}),(0,W.jsx)(`h2`,{className:`sft-display`,children:n}),(0,W.jsx)(`p`,{children:r})]}),i]})}function _k({name:e,file:t,note:n,children:r}){let i=t?fk[`./components/${t}.tsx`]:void 0;return(0,W.jsxs)(`article`,{className:`sample`,children:[(0,W.jsxs)(`header`,{className:`sample-header`,children:[(0,W.jsx)(`h3`,{children:e}),(0,W.jsx)(lx,{variant:`outline`,children:t?.startsWith(`ui/`)?`shadcn · SFT`:`SFT`})]}),(0,W.jsx)(`div`,{className:`sample-body`,children:r}),n&&(0,W.jsx)(`p`,{className:`sample-footer`,children:n}),i&&(0,W.jsxs)(`details`,{className:`source`,children:[(0,W.jsx)(`summary`,{children:`Leggi il codice`}),(0,W.jsx)(Q,{size:`sm`,variant:`ghost`,className:`mx-5`,onClick:()=>navigator.clipboard.writeText(i).then(()=>Ct.success(`Codice copiato`)).catch(()=>Ct.error(`Seleziona e copia il codice dal riquadro.`)),children:`Copia codice`}),(0,W.jsx)(`pre`,{children:(0,W.jsx)(`code`,{children:i})})]})]})}function vk(){let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(`elettronica`),[i,a]=(0,v.useState)(new Date(2026,9,13)),[o,s]=(0,v.useState)(`post`),[c,l]=(0,v.useState)(`Il lavoro prima del volo`),[u,d]=(0,v.useState)(`Progettazione, costruzione e test: il progetto cresce insieme al team.`),[f,p]=(0,v.useState)(!1),[m,h]=(0,v.useState)(!1);function g(){document.documentElement.classList.toggle(`dark`,!e),t(!e)}return(0,W.jsx)(pS,{children:(0,W.jsxs)(`div`,{className:`catalog sft-root`,children:[(0,W.jsx)(`a`,{href:`#contenuto`,className:`skip-link`,children:`Vai al contenuto`}),(0,W.jsxs)(`aside`,{className:`catalog-nav`,children:[(0,W.jsx)(`a`,{href:`#identita`,"aria-label":`SFT design system`,children:(0,W.jsx)(yC,{label:`Design system`,inverse:e})}),(0,W.jsx)(`nav`,{"aria-label":`Sezioni del design system`,children:[[`identita`,`Identità`],[`fondazioni`,`Fondazioni`],[`componenti`,`Componenti`],[`pattern`,`Composizioni SFT`],[`comunicazione`,`Comunicazione`],[`documentazione`,`Documentazione`]].map(([e,t])=>(0,W.jsxs)(`a`,{href:`#${e}`,children:[t,(0,W.jsx)(Me,{size:14,"aria-hidden":`true`})]},e))}),(0,W.jsxs)(`footer`,{children:[`Versione 1.1.1`,(0,W.jsx)(`br`,{}),`13 ottobre 2026`,(0,W.jsx)(`br`,{}),(0,W.jsx)(`span`,{className:`text-primary`,children:`Sapienza Foiling Team`})]})]}),(0,W.jsxs)(`div`,{className:`catalog-main`,children:[(0,W.jsxs)(`header`,{className:`catalog-top`,children:[(0,W.jsx)(`span`,{children:`IDENTITÀ / INTERFACCE / COMUNICAZIONE`}),(0,W.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,W.jsx)(Q,{variant:`ghost`,size:`icon`,"aria-label":e?`Attiva tema chiaro`:`Attiva tema scuro`,onClick:g,children:e?(0,W.jsx)(et,{}):(0,W.jsx)(Xe,{})}),(0,W.jsx)(Q,{variant:`outline`,size:`sm`,asChild:!0,children:(0,W.jsxs)(`a`,{href:`./design-system.html`,children:[(0,W.jsx)(We,{"aria-hidden":`true`}),`Documento`]})}),(0,W.jsx)(lx,{variant:`secondary`,children:`v1.1.1`})]})]}),(0,W.jsxs)(`main`,{id:`contenuto`,className:`catalog-content`,children:[(0,W.jsxs)(`section`,{id:`identita`,className:`catalog-cover`,children:[(0,W.jsxs)(`div`,{className:`catalog-cover-copy sft-flow`,children:[(0,W.jsx)(`p`,{className:`sft-eyebrow`,children:`Sapienza Foiling Team / Design system`}),(0,W.jsxs)(`div`,{children:[(0,W.jsxs)(`h1`,{className:`sft-display`,children:[`La stessa squadra.`,(0,W.jsx)(`br`,{}),`In ogni spazio.`]}),(0,W.jsx)(`p`,{className:`mt-6`,children:`Le regole, i componenti e gli strumenti per raccontare il team e organizzare il suo lavoro.`})]}),(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,W.jsx)(Q,{asChild:!0,variant:`secondary`,className:`rounded-full`,children:(0,W.jsxs)(`a`,{href:`#componenti`,children:[`Esplora i componenti`,(0,W.jsx)(je,{"aria-hidden":`true`})]})}),(0,W.jsx)(Q,{asChild:!0,variant:`ghost`,className:`text-white hover:bg-white/10 hover:text-white`,children:(0,W.jsxs)(`a`,{href:`#comunicazione`,children:[`Template social`,(0,W.jsx)(Me,{"aria-hidden":`true`})]})})]})]}),(0,W.jsxs)(`figure`,{className:`catalog-cover-photo`,children:[(0,W.jsx)(`img`,{src:`${hk}/photos/boat-flight.jpg`,alt:`Il Moth del team in volo sull’acqua`,fetchPriority:`high`}),(0,W.jsx)(`figcaption`,{children:`Una fotografia del progetto, dalla raccolta del team.`})]})]}),(0,W.jsxs)(`div`,{className:`mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground`,children:[(0,W.jsxs)(`p`,{children:[pk,` componenti shadcn · composizioni SFT · asset e font locali`]}),(0,W.jsx)(`p`,{children:`Sito, CRM, social e presentazioni`})]}),(0,W.jsxs)(gk,{id:`fondazioni`,kicker:`Il riferimento comune`,title:`Fondazioni`,description:`Il bordeaux e il marchio del sito, con ruoli chiari per colori, font e spazi. Il giallo resta un accento riservato alla comunicazione.`,children:[(0,W.jsx)(`div`,{className:`swatches`,children:[[`Bordeaux`,`#822433`,`white`],[`Bordeaux scuro`,`#6b1d28`,`white`],[`Accento`,`#a34252`,`white`],[`Void`,`#0a0808`,`white`],[`Carbon`,`#141212`,`white`],[`Paper`,`#fffcfd`,`#1a1718`],[`Ink`,`#1a1718`,`white`],[`Oro · comunicazione`,`#f2c572`,`#1a1718`]].map(([e,t,n])=>(0,W.jsxs)(`div`,{className:`swatch`,style:{background:t,color:n},children:[(0,W.jsx)(`strong`,{children:e}),(0,W.jsx)(`code`,{children:t})]},e))}),(0,W.jsxs)(`div`,{className:`font-sample`,children:[(0,W.jsx)(`p`,{children:`Kelson ExtraBold · Titoli e comunicazione`}),(0,W.jsx)(`div`,{className:`specimen sft-display`,children:`PROGETTIAMO. COSTRUIAMO. NAVIGHIAMO.`})]}),(0,W.jsxs)(`div`,{className:`font-sample`,children:[(0,W.jsx)(`p`,{children:`Geist Variable · Testi e interfacce`}),(0,W.jsx)(`div`,{className:`specimen`,children:`Il lavoro di una squadra.`}),(0,W.jsx)(`p`,{className:`mt-4 max-w-prose !text-base`,children:`Frasi chiare, contenuti leggibili e azioni riconoscibili. Il font di lettura accompagna la tipografia del team senza competirvi.`})]}),(0,W.jsxs)(`div`,{className:`font-sample`,children:[(0,W.jsx)(`p`,{children:`Geist Mono · Dati e didascalie`}),(0,W.jsx)(`div`,{className:`specimen font-mono`,children:`SFT / 2026 — 12.8 kn`}),(0,W.jsx)(`p`,{className:`!mt-4`,children:`Valore dimostrativo, non una prestazione della barca.`})]}),(0,W.jsxs)(`div`,{className:`catalog-grid mt-8`,children:[(0,W.jsxs)(_k,{name:`Spaziatura e raggi`,children:[(0,W.jsx)(`div`,{className:`flex items-end gap-3 overflow-auto`,children:[4,8,12,16,24,32,48,64].map(e=>(0,W.jsxs)(`div`,{className:`text-center`,children:[(0,W.jsx)(`div`,{style:{height:e,width:24},className:`rounded-sm bg-primary`}),(0,W.jsx)(`span`,{className:`text-xs font-mono`,children:e})]},e))}),(0,W.jsx)(`p`,{className:`mt-6 text-sm text-muted-foreground`,children:`4 px come base. Raggio 8 px per controlli, 16–24 px per superfici editoriali, pillola per CTA promozionali.`})]}),(0,W.jsxs)(_k,{name:`Marchio e iconografia`,file:`sft/brand`,children:[(0,W.jsx)(yC,{inverse:e}),(0,W.jsxs)(`div`,{className:`mt-7 flex gap-5 text-primary`,children:[(0,W.jsx)(nt,{}),(0,W.jsx)(rt,{}),(0,W.jsx)(Ue,{}),(0,W.jsx)(qe,{}),(0,W.jsx)(ke,{})]}),(0,W.jsx)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:`Lucide: tratto 2 px, griglia 24 px. Il logo mantiene la geometria originale.`})]})]}),(0,W.jsx)(`div`,{className:`catalog-note mt-6`,children:`Modalità scura: gli accenti funzionali diventano più chiari per mantenere il contrasto. Il bordeaux dell’identità resta lo stesso negli asset. Spazi, font e componenti mantengono i propri ruoli.`})]}),(0,W.jsxs)(gk,{id:`componenti`,kicker:`Una libreria condivisa`,title:`Componenti`,description:`Controlli funzionanti, con varianti e codice. I testi e i dati degli esempi sono dimostrativi.`,children:[(0,W.jsxs)(`div`,{className:`catalog-grid`,children:[(0,W.jsx)(_k,{name:`Button / ActionButton`,file:`ui/button`,note:`44 px per l’azione standard. La variante brand è dedicata ai messaggi promozionali.`,children:(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,W.jsxs)(Q,{onClick:()=>Ct.success(`Modifiche salvate · esempio`),children:[`Salva`,(0,W.jsx)(Qe,{})]}),(0,W.jsx)(Q,{variant:`outline`,children:`Annulla`}),(0,W.jsx)(Q,{variant:`secondary`,children:`Secondaria`}),(0,W.jsx)(Q,{variant:`ghost`,children:`Dettagli`}),(0,W.jsx)(Q,{variant:`destructive`,children:`Elimina`}),(0,W.jsxs)(Q,{variant:`brand`,children:[`Scopri il team`,(0,W.jsx)(Me,{})]}),(0,W.jsx)(Q,{disabled:!0,children:`Non disponibile`}),(0,W.jsx)(bC,{loading:f,onClick:()=>{p(!0),setTimeout(()=>{p(!1),Ct.success(`Caricamento completato · esempio`)},800)},children:f?`Caricamento…`:`Prova caricamento`})]})}),(0,W.jsx)(_k,{name:`Badge / StatusBadge`,file:`ui/badge`,children:(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,W.jsx)(EC,{children:`Da iniziare`}),(0,W.jsx)(EC,{tone:`info`,children:`In corso`}),(0,W.jsx)(EC,{tone:`success`,children:`Completato`}),(0,W.jsx)(EC,{tone:`warning`,children:`Da verificare`}),(0,W.jsx)(EC,{tone:`danger`,children:`Errore`})]})}),(0,W.jsx)(_k,{name:`Input / Label`,file:`ui/input`,children:(0,W.jsxs)(`div`,{className:`grid gap-4`,children:[(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{htmlFor:`project-name`,children:`Nome del progetto`}),(0,W.jsx)(hx,{id:`project-name`,placeholder:`Es. acquisizione dati`})]}),(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{htmlFor:`email-error`,children:`Email`}),(0,W.jsx)(hx,{id:`email-error`,type:`email`,defaultValue:`team@`,"aria-invalid":`true`,"aria-describedby":`email-help`}),(0,W.jsx)(`p`,{id:`email-help`,className:`text-xs text-destructive`,children:`Inserisci un indirizzo completo, ad esempio nome@dominio.it.`})]}),(0,W.jsx)(hx,{"aria-label":`Campo non disponibile`,disabled:!0,placeholder:`Non disponibile`})]})}),(0,W.jsx)(_k,{name:`Textarea / Field`,file:`ui/textarea`,children:(0,W.jsxs)(gC,{children:[(0,W.jsx)(_C,{htmlFor:`notes`,children:`Note del reparto`}),(0,W.jsx)(gx,{id:`notes`,placeholder:`Descrivi ciò che serve per il prossimo passo.`}),(0,W.jsx)(vC,{children:`Indica il contesto e l’azione da svolgere.`})]})}),(0,W.jsx)(_k,{name:`Checkbox / Switch`,file:`ui/checkbox`,children:(0,W.jsxs)(`div`,{className:`grid gap-6`,children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,W.jsx)(vx,{id:`check-document`}),(0,W.jsx)(_x,{htmlFor:`check-document`,children:`Documentazione verificata`})]}),(0,W.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,W.jsx)(_x,{htmlFor:`notifications`,children:`Promemoria delle scadenze`}),(0,W.jsx)(yx,{id:`notifications`})]})]})}),(0,W.jsx)(_k,{name:`RadioGroup / Select`,file:`ui/select`,children:(0,W.jsxs)(`div`,{className:`grid gap-6`,children:[(0,W.jsxs)(bx,{defaultValue:`team`,"aria-label":`Visibilità`,children:[(0,W.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,W.jsx)(xx,{id:`vis-team`,value:`team`}),(0,W.jsx)(_x,{htmlFor:`vis-team`,children:`Tutto il team`})]}),(0,W.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,W.jsx)(xx,{id:`vis-dept`,value:`dept`}),(0,W.jsx)(_x,{htmlFor:`vis-dept`,children:`Solo reparto`})]})]}),(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{htmlFor:`priority`,children:`Priorità`}),(0,W.jsxs)(Sx,{defaultValue:`normal`,children:[(0,W.jsx)(wx,{id:`priority`,children:(0,W.jsx)(Cx,{})}),(0,W.jsxs)(Tx,{children:[(0,W.jsx)(Ex,{value:`normal`,children:`Normale`}),(0,W.jsx)(Ex,{value:`high`,children:`Alta`}),(0,W.jsx)(Ex,{value:`low`,children:`Bassa`})]})]})]})]})}),(0,W.jsx)(_k,{name:`Combobox / Command / Popover`,file:`sft/data`,children:(0,W.jsx)(ck,{label:`Reparto`,value:n,onChange:r,options:CC.map(e=>({value:e.id,label:e.name}))})}),(0,W.jsx)(_k,{name:`Calendar / DatePicker`,file:`ui/calendar`,children:(0,W.jsx)(lk,{label:`Scadenza`,value:i,onChange:a})}),(0,W.jsx)(_k,{name:`Dialog`,file:`ui/dialog`,children:(0,W.jsxs)(kx,{children:[(0,W.jsx)(Ax,{asChild:!0,children:(0,W.jsx)(Q,{variant:`outline`,children:`Apri dettaglio attività`})}),(0,W.jsxs)(Px,{children:[(0,W.jsxs)(Fx,{children:[(0,W.jsx)(Lx,{children:`Verifica del supporto sensori`}),(0,W.jsx)(Rx,{children:`Esempio di dettaglio. Controlla misure e punti di fissaggio prima dell’assemblaggio.`})]}),(0,W.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Il dialog conserva il focus e può essere chiuso con Esc.`}),(0,W.jsx)(Ix,{children:(0,W.jsx)(Mx,{asChild:!0,children:(0,W.jsx)(Q,{children:`Chiudi dettaglio`})})})]})]})}),(0,W.jsx)(_k,{name:`AlertDialog / Sheet`,file:`ui/alert-dialog`,children:(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,W.jsxs)(zx,{children:[(0,W.jsx)(Bx,{asChild:!0,children:(0,W.jsx)(Q,{variant:`outline`,children:`Prova conferma`})}),(0,W.jsxs)(Ux,{children:[(0,W.jsxs)(Wx,{children:[(0,W.jsx)(Kx,{children:`Archiviare questa attività?`}),(0,W.jsx)(qx,{children:`È un esempio del catalogo: nessun dato viene modificato.`})]}),(0,W.jsxs)(Gx,{children:[(0,W.jsx)(Yx,{children:`Annulla`}),(0,W.jsx)(Jx,{onClick:()=>Ct.success(`Conferma eseguita · esempio`),children:`Archivia`})]})]})]}),(0,W.jsxs)(Xx,{children:[(0,W.jsx)(Zx,{asChild:!0,children:(0,W.jsx)(Q,{variant:`outline`,children:`Apri pannello`})}),(0,W.jsxs)(eS,{children:[(0,W.jsxs)(tS,{children:[(0,W.jsx)(nS,{children:`Risorse del reparto`}),(0,W.jsx)(rS,{children:`Pannello dimostrativo per navigazione e dettagli.`})]}),(0,W.jsx)(`div`,{className:`px-4 mt-6`,children:(0,W.jsx)(EC,{tone:`info`,children:`Elettronica e Software`})})]})]})]})}),(0,W.jsx)(_k,{name:`Tabs`,file:`ui/tabs`,children:(0,W.jsxs)(iS,{defaultValue:`details`,children:[(0,W.jsxs)(oS,{children:[(0,W.jsx)(sS,{value:`details`,children:`Dettagli`}),(0,W.jsx)(sS,{value:`activity`,children:`Attività`}),(0,W.jsx)(sS,{value:`files`,children:`File`})]}),(0,W.jsx)(cS,{value:`details`,className:`pt-4 text-sm`,children:`Obiettivo e contesto del progetto.`}),(0,W.jsx)(cS,{value:`activity`,className:`pt-4 text-sm`,children:`Le attività del reparto, con responsabile e scadenza.`}),(0,W.jsx)(cS,{value:`files`,className:`pt-4 text-sm`,children:`Documenti e risorse collegate.`})]})}),(0,W.jsxs)(_k,{name:`Accordion / Collapsible`,file:`ui/accordion`,children:[(0,W.jsxs)(lS,{type:`single`,collapsible:!0,children:[(0,W.jsxs)(uS,{value:`one`,children:[(0,W.jsx)(dS,{children:`Quando usare un componente condiviso?`}),(0,W.jsx)(fS,{children:`Quando lo stesso controllo o comportamento compare in più schermate. Le differenze di contesto diventano varianti esplicite.`})]}),(0,W.jsxs)(uS,{value:`two`,children:[(0,W.jsx)(dS,{children:`Come si aggiorna il sistema?`}),(0,W.jsx)(fS,{children:`Con una versione, un changelog e una verifica nei progetti che lo utilizzano.`})]})]}),(0,W.jsxs)(oC,{className:`mt-4`,children:[(0,W.jsx)(sC,{asChild:!0,children:(0,W.jsx)(Q,{variant:`ghost`,children:`Mostra nota tecnica`})}),(0,W.jsx)(cC,{className:`text-sm p-3 text-muted-foreground`,children:`I componenti non accedono ai dati di Google o Supabase.`})]})]}),(0,W.jsx)(_k,{name:`Tooltip / DropdownMenu`,file:`ui/dropdown-menu`,children:(0,W.jsxs)(`div`,{className:`flex gap-3`,children:[(0,W.jsxs)(mS,{children:[(0,W.jsx)(hS,{asChild:!0,children:(0,W.jsx)(Q,{variant:`outline`,size:`icon`,"aria-label":`Salva esempio`,onClick:()=>Ct.success(`Salvato · esempio`),children:(0,W.jsx)(Qe,{})})}),(0,W.jsx)(gS,{children:`Salva modifiche`})]}),(0,W.jsxs)(_S,{children:[(0,W.jsx)(vS,{asChild:!0,children:(0,W.jsxs)(Q,{variant:`outline`,"aria-label":`Azioni dell’attività`,children:[(0,W.jsx)(Ge,{}),`Azioni`]})}),(0,W.jsxs)(yS,{children:[(0,W.jsx)(xS,{children:`Attività dimostrativa`}),(0,W.jsx)(bS,{onSelect:()=>Ct.info(`Modifica selezionata · esempio`),children:`Modifica`}),(0,W.jsx)(bS,{onSelect:()=>Ct.info(`Link copiato · esempio`),children:`Copia link`}),(0,W.jsx)(SS,{}),(0,W.jsx)(bS,{onSelect:()=>Ct.info(`Archivia selezionato · esempio`),children:`Archivia`})]})]})]})}),(0,W.jsxs)(_k,{name:`Alert / Toast`,file:`ui/alert`,children:[(0,W.jsxs)(JS,{children:[(0,W.jsx)(Fe,{}),(0,W.jsx)(YS,{children:`Documento salvato`}),(0,W.jsx)(XS,{children:`Le modifiche sono disponibili al reparto. Messaggio dimostrativo.`})]}),(0,W.jsx)(Q,{variant:`outline`,className:`mt-4`,onClick:()=>Ct.error(`Salvataggio non riuscito. Riprova. · esempio`),children:`Prova messaggio di errore`})]}),(0,W.jsxs)(_k,{name:`Progress / Slider`,file:`ui/progress`,children:[(0,W.jsx)(_x,{htmlFor:`project-progress`,children:`Avanzamento dimostrativo · 60%`}),(0,W.jsx)(DS,{id:`project-progress`,value:60,className:`mt-3`}),(0,W.jsx)(_x,{htmlFor:`chart-scale`,className:`mt-6 mb-4 block`,children:`Scala del grafico`}),(0,W.jsx)(OS,{id:`chart-scale`,"aria-label":`Scala del grafico`,defaultValue:[50],max:100,step:10})]}),(0,W.jsx)(_k,{name:`Avatar / Skeleton / Spinner`,file:`ui/skeleton`,children:(0,W.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,W.jsx)(TS,{children:(0,W.jsx)(ES,{children:`SFT`})}),(0,W.jsxs)(`div`,{className:`grid flex-1 gap-2`,children:[(0,W.jsx)(wS,{className:`h-4 w-3/4`}),(0,W.jsx)(wS,{className:`h-3 w-1/2`})]}),(0,W.jsx)(uC,{"aria-label":`Caricamento`})]})}),(0,W.jsx)(_k,{name:`Toggle / ToggleGroup`,file:`ui/toggle-group`,children:(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,W.jsxs)(US,{"aria-label":`Mostra attività completate`,children:[(0,W.jsx)(Fe,{}),`Completate`]}),(0,W.jsxs)(GS,{type:`single`,defaultValue:`list`,"aria-label":`Vista`,children:[(0,W.jsx)(KS,{value:`list`,"aria-label":`Vista elenco`,children:`Elenco`}),(0,W.jsx)(KS,{value:`board`,"aria-label":`Vista board`,children:`Board`})]})]})}),(0,W.jsxs)(_k,{name:`Breadcrumb / NavigationMenu`,file:`ui/breadcrumb`,children:[(0,W.jsx)(jS,{children:(0,W.jsxs)(MS,{children:[(0,W.jsx)(NS,{children:(0,W.jsx)(PS,{href:`#pattern`,children:`Workspace`})}),(0,W.jsx)(IS,{}),(0,W.jsx)(NS,{children:(0,W.jsx)(FS,{children:`Elettronica`})})]})}),(0,W.jsx)(CS,{className:`my-5`}),(0,W.jsx)(ZS,{children:(0,W.jsxs)(QS,{children:[(0,W.jsx)($S,{children:(0,W.jsx)(tC,{href:`#identita`,children:`Team`})}),(0,W.jsx)($S,{children:(0,W.jsx)(tC,{href:`#pattern`,children:`Reparti`})})]})})]}),(0,W.jsxs)(_k,{name:`Pagination / ScrollArea`,file:`ui/pagination`,children:[(0,W.jsx)(nC,{children:(0,W.jsx)(rC,{children:[1,2,3].map(e=>(0,W.jsx)(iC,{children:(0,W.jsx)(aC,{href:`#componenti`,isActive:e===1,"aria-label":`Pagina ${e}`,children:e})},e))})}),(0,W.jsx)(kS,{className:`mt-5 h-32 rounded-lg border p-4`,children:(0,W.jsx)(`ul`,{className:`grid gap-3 text-sm`,children:CC.map(e=>(0,W.jsx)(`li`,{children:e.name},e.id))})})]}),(0,W.jsx)(_k,{name:`Card / AspectRatio`,file:`ui/card`,children:(0,W.jsxs)(ux,{children:[(0,W.jsxs)(dx,{children:[(0,W.jsx)(fx,{className:`font-display text-2xl`,children:`Dal progetto al test`}),(0,W.jsx)(px,{children:`Una superficie per raggruppare informazioni collegate.`})]}),(0,W.jsx)(mx,{children:(0,W.jsx)(lC,{ratio:16/9,children:(0,W.jsx)(`img`,{className:`size-full rounded-lg object-cover`,src:`${hk}/photos/workshop.jpg`,alt:`Il team lavora sulla barca nel paddock`,loading:`lazy`})})})]})}),(0,W.jsx)(_k,{name:`Empty`,file:`ui/empty`,children:(0,W.jsx)(dC,{children:(0,W.jsxs)(fC,{children:[(0,W.jsx)(pC,{children:`Nessun file collegato`}),(0,W.jsx)(mC,{children:`Collega un documento per renderlo disponibile al reparto.`})]})})})]}),(0,W.jsx)(`div`,{className:`mt-6`,children:(0,W.jsx)(_k,{name:`DataTable / Table / filtri e ordinamento`,file:`sft/data`,note:`Ricerca, ordinamento e paginazione sono implementati. Il progetto fornisce i dati; l’esempio non modifica il CRM.`,children:(0,W.jsx)(uk,{rows:mk,pageSize:3})})}),(0,W.jsxs)(`div`,{className:`catalog-note mt-6`,children:[`Il codice completo di tutti i `,pk,` componenti, compresi Sidebar, Field e gli elementi compositi, è disponibile nel documento e nei sorgenti. I componenti derivano da shadcn/ui con tema e adattamenti SFT.`]})]}),(0,W.jsxs)(gk,{id:`pattern`,kicker:`Il sistema nel progetto`,title:`Composizioni SFT`,description:`Composizioni comuni per raccontare il team e per gestire il lavoro. Fotografie reali; numeri e attività di esempio esplicitamente separati dai risultati del team.`,children:[(0,W.jsx)(SC,{image:`${hk}/photos/boat-flight.jpg`,alt:`Barca del team in volo sull’acqua`,title:`Sapienza Foiling Team`,description:`Progettiamo, costruiamo e navighiamo imbarcazioni foiling sostenibili.`,eyebrow:`Dalla progettazione all’acqua`,level:2,children:(0,W.jsx)(Q,{variant:`brand`,asChild:!0,children:(0,W.jsxs)(`a`,{href:`https://www.sapienzafoilingteam.com/team`,children:[`Scopri il team`,(0,W.jsx)(Me,{})]})})}),(0,W.jsx)(`div`,{className:`catalog-grid three mt-6`,children:CC.map(e=>(0,W.jsx)(wC,{department:e},e.id))}),(0,W.jsxs)(`div`,{className:`catalog-grid three mt-6`,children:[(0,W.jsx)(DC,{label:`Attività dimostrative`,value:`6`,description:`Dati del catalogo`}),(0,W.jsx)(DC,{label:`In corso · esempio`,value:`2`}),(0,W.jsx)(DC,{label:`Serie simulata`,value:`12.8`,unit:`kn`,description:`Non una prestazione misurata`})]}),(0,W.jsxs)(`div`,{className:`catalog-grid mt-6`,children:[(0,W.jsx)(_k,{name:`Grafico di telemetria`,file:`sft/data`,note:`Serie dimostrativa. Ogni grafico indica unità e offre una descrizione testuale dei valori.`,children:(0,W.jsx)(dk,{title:`Velocità · dati simulati`,unit:`kn`,points:[{label:`0 s`,value:3},{label:`10 s`,value:7},{label:`20 s`,value:12.8},{label:`30 s`,value:9},{label:`40 s`,value:11}]})}),(0,W.jsx)(_k,{name:`ActivityItem`,file:`sft/brand`,children:(0,W.jsxs)(`ul`,{children:[(0,W.jsx)(jC,{title:`Supporto sensori documentato`,time:{label:`13 ottobre 2026 · esempio`,iso:`2026-10-13`},description:`Aggiunte le misure di assemblaggio.`}),(0,W.jsx)(jC,{title:`Report condiviso`,time:{label:`12 ottobre 2026 · esempio`,iso:`2026-10-12`}})]})}),(0,W.jsx)(AC,{kind:`Articolo`,title:`Il lavoro in cantiere`,description:`Un esempio di scheda editoriale, con foto e testo breve.`,image:`${hk}/photos/workshop.jpg`,alt:`Lavoro del team nel paddock`,href:`https://www.sapienzafoilingteam.com/blog`,meta:`Esempio di layout`}),(0,W.jsx)(AC,{kind:`Evento`,title:`La squadra sul Garda`,description:`Un esempio per raccontare una trasferta, mantenendo distinti eventi passati e futuri.`,image:`${hk}/photos/team.jpg`,alt:`Membri del team accanto alla barca`,href:`https://www.sapienzafoilingteam.com`,meta:`Archivio fotografico`})]}),(0,W.jsxs)(`div`,{className:`catalog-grid mt-6`,children:[(0,W.jsx)(_k,{name:`EmptyState`,file:`sft/brand`,children:(0,W.jsx)(OC,{title:`Nessuna attività`,description:`Aggiungi la prima attività per organizzare il lavoro del reparto.`,action:(0,W.jsx)(Q,{onClick:()=>Ct.info(`Creazione attività · esempio`),children:`Aggiungi attività`})})}),(0,W.jsx)(_k,{name:`Form con validazione`,file:`sft/brand`,children:(0,W.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),h(!0),Ct.success(`Attività salvata · esempio`)},className:`grid gap-4`,children:[(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{htmlFor:`activity-title`,children:`Titolo attività`}),(0,W.jsx)(hx,{id:`activity-title`,name:`title`,required:!0,minLength:3,placeholder:`Es. verificare il fissaggio`})]}),(0,W.jsxs)(`div`,{className:`grid gap-2`,children:[(0,W.jsx)(_x,{htmlFor:`activity-note`,children:`Nota`}),(0,W.jsx)(gx,{id:`activity-note`,name:`note`})]}),(0,W.jsx)(Q,{type:`submit`,children:`Salva attività`}),m&&(0,W.jsx)(`p`,{role:`status`,className:`text-sm text-success`,children:`Attività salvata nel solo esempio del catalogo.`})]})})]}),(0,W.jsx)(_k,{name:`PageHeader`,file:`sft/brand`,children:(0,W.jsx)(xC,{level:3,eyebrow:`Workspace / Reparti`,title:`Elettronica e Software`,description:`Attività, risorse e documenti del reparto.`,actions:(0,W.jsx)(Q,{onClick:()=>Ct.info(`Nuova attività · esempio`),children:`Aggiungi attività`})})}),(0,W.jsx)(`div`,{className:`mt-6`,children:(0,W.jsx)(_k,{name:`SponsorGrid`,file:`sft/brand`,children:(0,W.jsx)(kC,{sponsors:[{name:`Harken`,image:`${hk}/partners/harken.svg`},{name:`Ansys`,image:`${hk}/partners/ansys.svg`},{name:`Romana Diesel`,image:`${hk}/partners/romanadiesel.svg`}]})})})]}),(0,W.jsxs)(gk,{id:`comunicazione`,kicker:`Gli stessi elementi fuori dall’interfaccia`,title:`Comunicazione`,description:`Template con griglia, tipografia e fotografia comuni. I file SVG mantengono i testi separati e sono accompagnati da istruzioni per ricostruirli in Canva.`,children:[(0,W.jsxs)(`div`,{className:`catalog-grid`,children:[(0,W.jsxs)(`div`,{className:`grid gap-5 self-start`,children:[(0,W.jsxs)(gC,{children:[(0,W.jsx)(_C,{htmlFor:`template-title`,children:`Titolo della copertina`}),(0,W.jsx)(hx,{id:`template-title`,value:c,maxLength:60,onChange:e=>l(e.target.value)}),(0,W.jsx)(vC,{children:`Consigliato: massimo 7 parole.`})]}),(0,W.jsxs)(gC,{children:[(0,W.jsx)(_C,{htmlFor:`template-description`,children:`Testo breve`}),(0,W.jsx)(gx,{id:`template-description`,value:u,maxLength:160,onChange:e=>d(e.target.value)})]}),(0,W.jsxs)(GS,{type:`single`,value:o,onValueChange:e=>e&&s(e),"aria-label":`Formato del template`,children:[(0,W.jsx)(KS,{value:`post`,children:`Post`}),(0,W.jsx)(KS,{value:`story`,children:`Story`}),(0,W.jsx)(KS,{value:`slide`,children:`Slide`})]}),(0,W.jsx)(`p`,{className:`catalog-note`,children:`L’anteprima modifica solo questo esempio. I template scaricabili contengono testi e immagini di partenza; nove design Canva sono stati creati, con correzioni dei testi in bozza da approvare. La fedeltà tipografica va controllata nell’editor.`}),(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,W.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,W.jsxs)(`a`,{href:`./brand/fonts/Armasen%20-%20Kelson-ExtraBold.otf`,download:!0,children:[`Kelson OTF`,(0,W.jsx)(We,{})]})}),(0,W.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,W.jsxs)(`a`,{href:`./brand/tokens.json`,download:!0,children:[`Palette e token`,(0,W.jsx)(We,{})]})}),(0,W.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,W.jsxs)(`a`,{href:`./communication/canva-review.html`,children:[`Rivedi le nove bozze Canva`,(0,W.jsx)(Me,{})]})})]})]}),(0,W.jsx)(MC,{title:c||`Titolo del post`,description:u,image:`${hk}/photos/workshop.jpg`,format:o})]}),(0,W.jsx)(`div`,{className:`catalog-template-grid mt-10`,children:[[`update`,`Aggiornamento progetto`],[`recruiting`,`Reparti e recruiting`],[`technical`,`Spiegazione tecnica`],[`event`,`Evento e trasferta`],[`sponsor`,`Partner e sponsor`],[`carousel-body`,`Slide interna carosello`],[`story`,`Story`],[`presentation`,`Presentazione 16:9`],[`presentation-content`,`Slide contenuti`]].map(([e,t])=>(0,W.jsxs)(`a`,{href:`./templates/${e}.svg`,download:!0,children:[(0,W.jsx)(`img`,{src:`./templates/${e}.svg`,alt:`Template ${t}`,loading:`lazy`}),t,` · scarica SVG`,(0,W.jsx)(We,{className:`inline ml-2 size-3`})]},e))})]}),(0,W.jsxs)(gk,{id:`documentazione`,kicker:`Per usare e mantenere il sistema`,title:`Documento e risorse`,description:`Il documento raccoglie le decisioni di design, le regole di utilizzo e il codice completo. I file restano disponibili anche fuori dal catalogo.`,children:[(0,W.jsxs)(`div`,{className:`catalog-grid`,children:[(0,W.jsx)(_k,{name:`Guida e codice`,children:(0,W.jsxs)(`div`,{className:`grid gap-3`,children:[(0,W.jsx)(Q,{asChild:!0,children:(0,W.jsxs)(`a`,{href:`./design-system.html`,children:[`Apri il documento illustrato`,(0,W.jsx)(Me,{})]})}),(0,W.jsx)(Q,{variant:`outline`,asChild:!0,children:(0,W.jsxs)(`a`,{href:`./design-system.md`,download:!0,children:[`Documento completo Markdown`,(0,W.jsx)(We,{})]})}),(0,W.jsx)(Q,{variant:`outline`,asChild:!0,children:(0,W.jsxs)(`a`,{href:`./component-code.md`,download:!0,children:[`Codice di tutti i componenti`,(0,W.jsx)(We,{})]})})]})}),(0,W.jsx)(_k,{name:`Adozione nei progetti`,children:(0,W.jsxs)(`ol`,{className:`list-decimal pl-5 grid gap-3 text-sm text-muted-foreground`,children:[(0,W.jsx)(`li`,{children:`Installa la versione scelta della libreria.`}),(0,W.jsx)(`li`,{children:`Importa gli stili compilati e servi gli asset del team.`}),(0,W.jsx)(`li`,{children:`Sostituisci i componenti per schermata e verifica le funzioni.`}),(0,W.jsx)(`li`,{children:`Aggiorna i template di comunicazione con la stessa versione.`})]})})]}),(0,W.jsx)(`div`,{className:`catalog-note mt-6`,children:`Versione locale 1.1.1. La homepage e la navigazione del sito adottano la libreria; il CRM resta da migrare. I diritti dei font e delle fotografie sono descritti nel documento di provenienza. Le verifiche eseguite sono registrate nel rapporto di consegna.`})]}),(0,W.jsxs)(`footer`,{className:`catalog-end`,children:[(0,W.jsx)(yC,{label:`Design system · v1.1.1`,inverse:e}),(0,W.jsxs)(`p`,{children:[`Un riferimento comune per le persone che costruiscono`,(0,W.jsx)(`br`,{}),`e raccontano Sapienza Foiling Team.`]})]})]})]}),(0,W.jsx)(VS,{theme:e?`dark`:`light`,closeButton:!0})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,W.jsx)(v.StrictMode,{children:(0,W.jsx)(vk,{})}));
