var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=M(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function P(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var F=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ne(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,F)}catch(e){F(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function re(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ne(re.bind(null,e))}var ie={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ie,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=re,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ne,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,k=O.port2;O.port1.onmessage=E,D=function(){k.postMessage(null)}}else D=function(){_(E,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ee(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var E=Object.assign,D=Symbol.for(`react.element`),O=Symbol.for(`react.transitional.element`),k=Symbol.for(`react.portal`),A=Symbol.for(`react.fragment`),j=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),M=Symbol.for(`react.consumer`),N=Symbol.for(`react.context`),P=Symbol.for(`react.forward_ref`),F=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.legacy_hidden`),se=Symbol.for(`react.memo_cache_sentinel`),ce=Symbol.for(`react.view_transition`),le=Symbol.for(`react.recoverable`),ue=Symbol.iterator;function de(e){return typeof e!=`object`||!e?null:(e=ue&&e[ue]||e[`@@iterator`],typeof e==`function`?e:null)}var fe=Symbol.for(`react.client.reference`);function pe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case A:return`Fragment`;case te:return`Profiler`;case j:return`StrictMode`;case F:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`;case ce:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case k:return`Portal`;case N:return e.displayName||`Context`;case M:return(e._context.displayName||`Context`)+`.Consumer`;case P:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}var me=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},ge=[],_e=-1;function ve(e){return{current:e}}function ye(e){0>_e||(e.current=ge[_e],ge[_e]=null,_e--)}function be(e,t){_e++,ge[_e]=e.current,e.current=t}var xe=ve(null),Se=ve(null),Ce=ve(null),we=ve(null);function Te(e,t){switch(be(Ce,t),be(Se,e),be(xe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pp(t),e=mp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ye(xe),be(xe,e)}function Ee(){ye(xe),ye(Se),ye(Ce)}function De(e){var t=e.memoizedState;t!==null&&(uh._currentValue=t.memoizedState,be(we,e)),t=xe.current;var n=mp(t,e.type);t!==n&&(be(Se,e),be(xe,n))}function Oe(e){Se.current===e&&(ye(xe),ye(Se)),we.current===e&&(ye(we),uh._currentValue=he)}var ke,Ae;function je(e){if(ke===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ke=t&&t[1]||``,Ae=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ke+e+Ae}var Me=!1;function Ne(e,t){if(!e||Me)return``;Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?je(n):``}function Pe(e,t){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je(`Lazy`);case 13:return e.child!==t&&t!==null?je(`Suspense Fallback`):je(`Suspense`);case 19:return je(`SuspenseList`);case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return je(`Activity`);case 30:return je(`ViewTransition`);default:return``}}function Fe(e){try{var t=``,n=null;do t+=Pe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ie=Object.prototype.hasOwnProperty,Le=t.unstable_scheduleCallback,Re=t.unstable_cancelCallback,ze=t.unstable_shouldYield,Be=t.unstable_requestPaint,Ve=t.unstable_now,He=t.unstable_getCurrentPriorityLevel,Ue=t.unstable_ImmediatePriority,We=t.unstable_UserBlockingPriority,Ge=t.unstable_NormalPriority,Ke=t.unstable_LowPriority,qe=t.unstable_IdlePriority,Je=t.log,Ye=t.unstable_setDisableYieldValue,Xe=null,Ze=null;function Qe(e){if(typeof Je==`function`&&Ye(e),Ze&&typeof Ze.setStrictMode==`function`)try{Ze.setStrictMode(Xe,e)}catch{}}var $e=Math.clz32?Math.clz32:nt,et=Math.log,tt=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(et(e)/tt|0)|0}var rt=256,it=262144,at=4194304;function ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function st(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ot(n))):i=ot(o):i=ot(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ot(n))):i=ot(o)):i=ot(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ct(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-$e(n),i=1<<r;t|=e[r],n&=~i}return t}function ut(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(){var e=at;return at<<=1,!(at&62914560)&&(at=4194304),e}function ft(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-$e(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ht(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ht(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-$e(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function _t(e,t){var n=t&-t;return n=n&42?1:vt(n),(n&(e.suspendedLanes|t))===0?n:0}function vt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function bt(){var e=L.p;return e===0?(e=window.event,e===void 0?32:Eh(e.type)):e}function xt(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var St=Math.random().toString(36).slice(2),Ct=`__reactFiber$`+St,wt=`__reactProps$`+St,Tt=`__reactContainer$`+St,Et=`__reactEvents$`+St,Dt=`__reactListeners$`+St,Ot=`__reactHandles$`+St,kt=`__reactResources$`+St,At=`__reactMarker$`+St,jt=`__reactLoad$`+St;function Mt(e){delete e[Ct],delete e[wt],delete e[Dt],delete e[Ot]}function Nt(e){var t;if(t=e[Ct])return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[Ct])return n;e=hm(e)}return t}e=n,n=e.parentNode}return null}function Pt(e){if(e=e[Ct]||e[Tt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ft(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function It(e){var t=e[kt];return t||=e[kt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Lt(e){e[At]=!0}function Rt(e){e[jt]=void 0}var zt=new Set,Bt={};function Vt(e,t){Ht(e,t),Ht(e+`Capture`,t)}function Ht(e,t){for(Bt[e]=t,e=0;e<t.length;e++)zt.add(t[e])}var Ut=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Wt={},Gt={};function Kt(e){return Ie.call(Gt,e)?!0:Ie.call(Wt,e)?!1:Ut.test(e)?Gt[e]=!0:(Wt[e]=!0,!1)}var qt=!1;function Jt(){var e=qt;return qt=!1,e}function Yt(e,t,n){if(Kt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Xt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Qt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function $t(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function en(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tn(e){if(!e._valueTracker){var t=$t(e)?`checked`:`value`;e._valueTracker=en(e,t,``+e[t])}}function nn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=$t(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var rn=/[\n"\\]/g;function an(e){return e.replace(rn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function on(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Qt(t)):e.value!==``+Qt(t)&&(e.value=``+Qt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):cn(e,Qt(n)):o===`number`&&e.value==t?cn(e,Qt(e.value)):cn(e,Qt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Qt(s):e.removeAttribute(`name`)}function sn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){tn(e);return}n=n==null?``:``+Qt(n),t=t==null?n:``+Qt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),tn(e)}function cn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function un(e,t,n){t!=null&&(t=``+Qt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Qt(n)}function dn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(me(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Qt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),tn(e)}function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function mn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||pn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function hn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,qt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(mn(e,a,r),qt=!0)}else for(var o in t)t.hasOwnProperty(o)&&mn(e,o,t[o])}function gn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var _n=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),vn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yn(e){return vn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function bn(){}var xn=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,wn=null;function Tn(e){var t=Pt(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(on(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+an(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[wt]||null;if(!a)throw Error(i(90));on(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&nn(r)}break a;case`textarea`:un(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}}}var En=!1;function Dn(e,t,n){if(En)return e(t,n);En=!0;try{return e(t)}finally{if(En=!1,(Cn!==null||wn!==null)&&(Bd(),Cn&&(t=Cn,e=wn,wn=Cn=null,Tn(t),e)))for(t=0;t<e.length;t++)Tn(e[t])}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=n[wt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,An=!1;if(kn)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){An=!0}}),window.addEventListener(`test`,jn,jn),window.removeEventListener(`test`,jn,jn)}catch{An=!1}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function R(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Ln(){return!1}function Rn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?In:Ln,this.isPropagationStopped=Ln,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Rn(zn),Vn=E({},zn,{view:0,detail:0}),Hn=Rn(Vn),Un,Wn,Gn,Kn=E({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Gn&&(Gn&&e.type===`mousemove`?(Un=e.screenX-Gn.screenX,Wn=e.screenY-Gn.screenY):Wn=Un=0,Gn=e),Un)},movementY:function(e){return`movementY`in e?e.movementY:Wn}}),z=Rn(Kn),qn=Rn(E({},Kn,{dataTransfer:0})),Jn=Rn(E({},Vn,{relatedTarget:0})),Yn=Rn(E({},zn,{animationName:0,elapsedTime:0,pseudoElement:0})),Xn=Rn(E({},zn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Zn=Rn(E({},zn,{data:0})),Qn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},$n={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},B={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function er(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B[e])?!!t[e]:!1}function tr(){return er}var nr=Rn(E({},Vn,{key:function(e){if(e.key){var t=Qn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=R(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?$n[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(e){return e.type===`keypress`?R(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?R(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),rr=Rn(E({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ir=Rn(E({},zn,{submitter:0})),ar=Rn(E({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr})),or=Rn(E({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0})),sr=Rn(E({},Kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),cr=Rn(E({},zn,{newState:0,oldState:0,source:0})),lr=[9,13,27,32],ur=kn&&`CompositionEvent`in window,dr=null;kn&&`documentMode`in document&&(dr=document.documentMode);var fr=kn&&`TextEvent`in window&&!dr,pr=kn&&(!ur||dr&&8<dr&&11>=dr),mr=` `,hr=!1;function gr(e,t){switch(e){case`keyup`:return lr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function _r(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var V=!1;function vr(e,t){switch(e){case`compositionend`:return _r(t);case`keypress`:return t.which===32?(hr=!0,mr):null;case`textInput`:return e=t.data,e===mr&&hr?null:e;default:return null}}function yr(e,t){if(V)return e===`compositionend`||!ur&&gr(e,t)?(e=Fn(),Pn=Nn=Mn=null,V=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return pr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function H(e,t,n,r){Cn?wn?wn.push(r):wn=[r]:Cn=r,t=Xf(t,`onChange`),0<t.length&&(n=new Bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Cr=null;function wr(e){Uf(e,0)}function Tr(e){if(nn(Ft(e)))return e}function Er(e,t){if(e===`change`)return t}var Dr=!1;if(kn){var Or;if(kn){var kr=`oninput`in document;if(!kr){var Ar=document.createElement(`div`);Ar.setAttribute(`oninput`,`return;`),kr=typeof Ar.oninput==`function`}Or=kr}else Or=!1;Dr=Or&&(!document.documentMode||9<document.documentMode)}function jr(){Sr&&(Sr.detachEvent(`onpropertychange`,Mr),Cr=Sr=null)}function Mr(e){if(e.propertyName===`value`&&Tr(Cr)){var t=[];H(t,Cr,e,Sn(e)),Dn(wr,t)}}function Nr(e,t,n){e===`focusin`?(jr(),Sr=t,Cr=n,Sr.attachEvent(`onpropertychange`,Mr)):e===`focusout`&&jr()}function Pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Tr(Cr)}function Fr(e,t){if(e===`click`)return Tr(t)}function Ir(e,t){if(e===`input`||e===`change`)return Tr(t)}function Lr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Rr=typeof Object.is==`function`?Object.is:Lr;function zr(e,t){if(Rr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ie.call(t,i)||!Rr(e[i],t[i]))return!1}return!0}function Br(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function U(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vr(e,t){var n=U(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=U(n)}}function Hr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Wr=kn&&`documentMode`in document&&11>=document.documentMode,Gr=null,Kr=null,qr=null,Jr=!1;function Yr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Gr==null||Gr!==Br(r)||(r=Gr,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&zr(qr,r)||(qr=r,r=Xf(Kr,`onSelect`),0<r.length&&(t=new Bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:Xr(`Animation`,`AnimationEnd`),animationiteration:Xr(`Animation`,`AnimationIteration`),animationstart:Xr(`Animation`,`AnimationStart`),transitionrun:Xr(`Transition`,`TransitionRun`),transitionstart:Xr(`Transition`,`TransitionStart`),transitioncancel:Xr(`Transition`,`TransitionCancel`),transitionend:Xr(`Transition`,`TransitionEnd`)},Qr={},$r={};kn&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionrun`),ai=ei(`transitionstart`),oi=ei(`transitioncancel`),si=ei(`transitionend`),ci=new Map,li=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);li.push(`scrollEnd`);function ui(e,t){ci.set(e,t),Vt(t,[e])}var di=0;function fi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=xd.identifierPrefix;var n=di++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function pi(e){if(e==null||typeof e==`string`)return e;var t=null,n=kd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function mi(e,t){return e=pi(e),t=pi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var hi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},gi=[],G=0,_i=0;function vi(){for(var e=G,t=_i=G=0;t<e;){var n=gi[t];gi[t++]=null;var r=gi[t];gi[t++]=null;var i=gi[t];gi[t++]=null;var a=gi[t];if(gi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Si(n,i,a)}}function yi(e,t,n,r){gi[G++]=e,gi[G++]=t,gi[G++]=n,gi[G++]=r,_i|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bi(e,t,n,r){return yi(e,t,n,r),Ci(e)}function xi(e,t){return yi(e,null,null,t),Ci(e)}function Si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-$e(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ci(e){if(50<Ad)throw Ad=0,jd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var wi={};function Ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(e,t,n,r){return new Ti(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,t){var n=e.alternate;return n===null?(n=Ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ki(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ai(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Di(r)&&(s=1);else if(typeof r==`string`)s=Xm(e,n,xe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ae:return e=Ei(31,n,t,a),e.elementType=ae,e.lanes=o,e;case A:return ji(n.children,a,o,t);case j:s=8,a|=24;break;case te:return e=Ei(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case F:return e=Ei(13,n,t,a),e.elementType=F,e.lanes=o,e;case ne:return e=Ei(19,n,t,a),e.elementType=ne,e.lanes=o,e;case oe:case ce:return e=a|32,e=Ei(30,n,t,e),e.elementType=ce,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case N:s=10;break a;case M:s=9;break a;case P:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ji(e,t,n,r){return e=Ei(7,e,r,t),e.lanes=n,e}function Mi(e,t,n){return e=Ei(6,e,null,t),e.lanes=n,e}function Ni(e){var t=Ei(18,null,null,0);return t.stateNode=e,t}function Pi(e,t,n){return t=Ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fi=new WeakMap;function Ii(e,t){if(typeof e==`object`&&e){var n=Fi.get(e);return n===void 0?(t={value:e,source:t,stack:Fe(t)},Fi.set(e,t),t):n}return{value:e,source:t,stack:Fe(t)}}var Li=[],Ri=0,zi=null,Bi=0,Vi=[],Hi=0,Ui=null,Wi=1,Gi=``;function Ki(e,t){Li[Ri++]=Bi,Li[Ri++]=zi,zi=e,Bi=t}function qi(e,t,n){Vi[Hi++]=Wi,Vi[Hi++]=Gi,Vi[Hi++]=Ui,Ui=e;var r=Wi;e=Gi;var i=32-$e(r)-1;r&=~(1<<i),n+=1;var a=32-$e(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wi=1<<32-$e(t)+i|n<<i|r,Gi=a+e}else Wi=1<<a|n<<i|r,Gi=e}function Ji(e){e.return!==null&&(Ki(e,1),qi(e,1,0))}function Yi(e){for(;e===zi;)zi=Li[--Ri],Li[Ri]=null,Bi=Li[--Ri],Li[Ri]=null;for(;e===Ui;)Ui=Vi[--Hi],Vi[Hi]=null,Gi=Vi[--Hi],Vi[Hi]=null,Wi=Vi[--Hi],Vi[Hi]=null}function Xi(e,t){Vi[Hi++]=Wi,Vi[Hi++]=Gi,Vi[Hi++]=Ui,Wi=t.id,Gi=t.overflow,Ui=e}var Zi=null,Qi=null,K=!1,$i=null,ea=!1,ta=Error(i(519));function na(e){throw ca(Ii(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ta}function ra(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ct]=e,t[wt]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<Vf.length;n++)X(Vf[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),sn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),dn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||np(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||na(e,!0)}function ia(e){for(Zi=e.return;Zi;)switch(Zi.tag){case 5:case 31:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:Zi=Zi.return}}function aa(e){if(e!==Zi)return!1;if(!K)return ia(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||gp(e.type,e.memoizedProps)),n=!n),n&&Qi&&na(e),ia(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Qi=mm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Qi=mm(e)}else t===27?(t=Qi,Tp(e.type)?(e=pm,pm=null,Qi=e):Qi=t):Qi=Zi?fm(e.stateNode.nextSibling):null;return!0}function oa(){Qi=Zi=null,K=!1}function sa(){var e=$i;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),$i=null),e}function ca(e){$i===null?$i=[e]:$i.push(e)}var la=ve(null),ua=null,da=null;function fa(e,t,n){be(la,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=la.current,ye(la)}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ha(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ma(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ma(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ma(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ga(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Rr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===we.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[uh]:e.push(uh))}a=a.return}return e!==null&&ha(t,e,n,r),t.flags|=262144,e!==null}function _a(e){for(e=e.firstContext;e!==null;){if(!Rr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ua=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ya(e){return xa(ua,e)}function ba(e,t){return ua===null&&va(e),xa(e,t)}function xa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error(i(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ca=t.unstable_scheduleCallback,wa=t.unstable_NormalPriority,Ta={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ea(){return{controller:new Sa,data:new Map,refCount:0}}function Da(e){e.refCount--,e.refCount===0&&Ca(wa,function(){e.controller.abort()})}function Oa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var ka=null;function Aa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ja=null,Ma=0,Na=0,Pa=null;function Fa(e,t){if(ja===null){var n=ja=[];Ma=0,Na=If(),Pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ma++,t.then(Ia,Ia),t}function Ia(){if(--Ma===0&&(ka=null,ja!==null)){Pa!==null&&(Pa.status=`fulfilled`);var e=ja;ja=null,Na=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function La(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ra=I.S;I.S=function(e,t){if(gd=Ve(),typeof t==`object`&&t&&typeof t.then==`function`&&Fa(e,t),ka!==null)for(var n=Sf;n!==null;)Oa(n,ka),n=n.next;if(n=e.types,n!==null){for(var r=Sf;r!==null;)Oa(r,n),r=r.next;if(Na!==0){r=ka,r===null&&(r=ka=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ra!==null&&Ra(e,t)};var za=ve(null);function Ba(){var e=za.current;return e===null?$u.pooledCache:e}function Va(e,t){t===null?be(za,za.current):be(za,t.pool)}function Ha(){var e=Ba();return e===null?null:{parent:Ta._currentValue,pool:e}}var Ua=Error(i(460)),Wa=Error(i(474)),Ga=Error(i(542)),Ka={then:function(){}};function qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(bn,bn);else{if(e=$u,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e}throw Xa=t,Ua}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Xa=e,Ua):e}}var Xa=null;function Za(){if(Xa===null)throw Error(i(459));var e=Xa;return Xa=null,e}function Qa(e){if(e===Ua||e===Ga)throw Error(i(483))}var $a=null,eo=0;function to(e){var t=eo;return eo+=1,$a===null&&($a=[]),Ja($a,e,t)}function no(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ro(e,t){throw t.$$typeof===D?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function io(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===A?(e=d(e,t,n.props.children,r,n.key),no(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Ya(i)===t.type)?(t=a(t,n.props),no(t,n),t.return=e,t):(t=Ai(n.type,n.key,n.props,null,e.mode,r),no(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Pi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ji(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case O:return n=Ai(t.type,t.key,t.props,null,e.mode,n),no(n,t),n.return=e,n;case k:return t=Pi(t,e.mode,n),t.return=e,t;case ie:return t=Ya(t),f(e,t,n)}if(me(t)||de(t))return t=ji(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,to(t),n);if(t.$$typeof===N)return f(e,ba(e,t),n);ro(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case ie:return n=Ya(n),p(e,t,n,r)}if(me(n)||de(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,to(n),r);if(n.$$typeof===N)return p(e,t,ba(e,n),r);ro(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case O:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case k:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Ya(r),m(e,t,n,r,i)}if(me(r)||de(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,to(r),i);if(r.$$typeof===N)return m(e,t,n,ba(t,r),i);ro(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),K&&Ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&Ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),K&&Ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&Ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&Ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&Ki(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===A&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case O:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===A){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),no(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),no(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===A?(c=ji(o.props.children,e.mode,c,o.key),no(c,o),c.return=e,e=c):(c=Ai(o.type,o.key,o.props,null,e.mode,c),no(c,o),c.return=e,e=c)}return s(e);case k:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Pi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Ya(o),_(e,r,o,c)}if(me(o))return h(e,r,o,c);if(de(o)){if(l=de(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,to(o),c);if(o.$$typeof===N)return _(e,r,ba(e,o),c);ro(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{eo=0;var i=_(e,t,n,r);return $a=null,i}catch(t){if(t===Ua||t===Ga)throw t;var a=Ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ao=io(!0),oo=io(!1),so=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function uo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Qu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ci(e),Si(e,null,n),t}return yi(e,r,t,n),Ci(e)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}function mo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function go(){if(ho){var e=Pa;if(e!==null)throw e}}function _o(e,t,n,r){ho=!1;var i=e.updateQueue;so=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Na&&(ho=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:so=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function vo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function yo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vo(n[e],t)}var bo=ve(null),xo=ve(0);function So(e,t){e=ad,be(xo,e),be(bo,t),ad=e|t.baseLanes}function Co(){be(xo,ad),be(bo,bo.current)}function wo(){ad=xo.current,ye(bo),ye(xo)}var To=ve(null),Eo=null;function Do(e){var t=e.alternate;be(Mo,Mo.current&1),be(To,e),Eo===null&&(t===null||bo.current!==null||t.memoizedState!==null)&&(Eo=e)}function Oo(e){be(Mo,Mo.current),be(To,e),Eo===null&&(Eo=e)}function ko(e){e.tag===22?(be(Mo,Mo.current),be(To,e),Eo===null&&(Eo=e)):Ao()}function Ao(){be(Mo,Mo.current),be(To,To.current)}function jo(e){ye(To),Eo===e&&(Eo=null),ye(Mo)}var Mo=ve(0);function No(e,t){be(To,To.current),be(Mo,t)}function Po(e){ye(Mo),ye(To),Eo===e&&(Eo=null)}function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lm(n)||um(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=0,q=null,Lo=null,Ro=null,zo=!1,Bo=!1,Vo=!1,Ho=0,Uo=0,Wo=null,Go=0;function Ko(){throw Error(i(321))}function qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rr(e[n],t[n]))return!1;return!0}function Jo(e,t,n,r,i,a){return Io=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?dc:fc,Vo=!1,a=n(r,i),Vo=!1,Bo&&(a=Xo(t,n,r,i)),Yo(e),a}function Yo(e){I.H=uc;var t=Lo!==null&&Lo.next!==null;if(Io=0,Ro=Lo=q=null,zo=!1,Uo=0,Wo=null,t)throw Error(i(300));e===null||kc||(e=e.dependencies,e!==null&&_a(e)&&(kc=!0))}function Xo(e,t,n,r){q=e;var a=0;do{if(Bo&&(Wo=null),Uo=0,Bo=!1,25<=a)throw Error(i(301));if(a+=1,Ro=Lo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=pc,o=t(n,r)}while(Bo);return o}function Zo(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?is(t):t,e=e.useState()[0],(Lo===null?null:Lo.memoizedState)!==e&&(q.flags|=1024),t}function Qo(){var e=Ho!==0;return Ho=0,e}function $o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function es(e){if(zo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zo=!1}Io=0,Ro=Lo=q=null,Bo=!1,Uo=Ho=0,Wo=null}function ts(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ro===null?q.memoizedState=Ro=e:Ro=Ro.next=e,Ro}function ns(){if(Lo===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=Lo.next;var t=Ro===null?q.memoizedState:Ro.next;if(t!==null)Ro=t,Lo=e;else{if(e===null)throw q.alternate===null?Error(i(467)):Error(i(310));Lo=e,e={memoizedState:Lo.memoizedState,baseState:Lo.baseState,baseQueue:Lo.baseQueue,queue:Lo.queue,next:null},Ro===null?q.memoizedState=Ro=e:Ro=Ro.next=e}return Ro}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function is(e){var t=Uo;return Uo+=1,Wo===null&&(Wo=[]),e=Ja(Wo,e,t),t=q,(Ro===null?t.memoizedState:Ro.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?dc:fc),e}function as(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return is(e);if(e.$$typeof===le)return;if(e.$$typeof===N)return ya(e)}throw Error(i(438,String(e)))}function os(e){var t=null,n=q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=q.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=rs(),q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=se;return t.index++,n}function ss(e,t){return typeof t==`function`?t(e):t}function cs(e){return ls(ns(),Lo,e)}function ls(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Io&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Na&&(d=!0);else if((Io&p)===p){u=u.next,p===Na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,q.lanes|=p,sd|=p;f=u.action,Vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,q.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Rr(o,e.memoizedState)&&(kc=!0,d&&(n=Pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function us(e){var t=ns(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Rr(o,t.memoizedState)||(kc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ds(e,t,n){var r=q,a=ns(),o=K;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Rr((Lo||a).memoizedState,n);if(s&&(a.memoizedState=n,kc=!0),a=a.queue,Is(ms.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ro!==null&&!!(Ro.memoizedState.tag&1),js(e?9:8,{destroy:void 0},ps.bind(null,r,a,n,t),null),e){if(r.flags|=2048,$u===null)throw Error(i(349));o||Io&127||fs(r,t,n)}return n}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t=rs(),q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&gs(e)}function ms(e,t,n){return n(function(){hs(t)&&gs(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rr(e,n)}catch{return!0}}function gs(e){var t=xi(e,2);t!==null&&Fd(t,e,2)}function _s(e){var t=ts();if(typeof e==`function`){var n=e;if(e=n(),Vo){Qe(!0);try{n()}finally{Qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t}function vs(e,t,n,r){return e.baseState=n,ls(e,Lo,typeof r==`function`?r:ss)}function ys(e,t,n,r,a){if(sc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,bs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function bs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};o.types=a===null?null:a.types,I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),xs(e,t,s)}catch(n){Cs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),xs(e,t,a)}catch(n){Cs(e,t,n)}}function xs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ss(e,t,n)},function(n){return Cs(e,t,n)}):Ss(e,t,n)}function Ss(e,t,n){t.status=`fulfilled`,t.value=n,ws(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bs(e,n)))}function Cs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ws(t),t=t.next;while(t!==r)}e.action=null}function ws(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ts(e,t){return t}function Es(e,t){if(K){var n=$u.formState;if(n!==null){a:{var r=q;if(K){if(Qi){b:{for(var i=Qi,a=ea;i.nodeType!==8;)if(!a||(i=fm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Qi=fm(i.nextSibling),r=i.data===`F!`;break a}}na(r)}r=!1}r&&(t=n[0])}}return n=ts(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},n.queue=r,n=ic.bind(null,q,r),r.dispatch=n,r=_s(!1),a=oc.bind(null,q,!1,r.queue),r=ts(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ys.bind(null,q,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ds(e){return Os(ns(),Lo,e)}function Os(e,t,n){if(t=ls(e,t,Ts)[0],e=cs(ss)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=is(t)}catch(e){throw e===Ua?Ga:e}else r=t;t=ns();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(q.flags|=2048,js(9,{destroy:void 0},ks.bind(null,i,n),null)),[r,a,e]}function ks(e,t){e.action=t}function As(e){var t=ns(),n=Lo;if(n!==null)return Os(t,n,e);ns(),t=t.memoizedState,n=ns();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function js(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=q.updateQueue,t===null&&(t=rs(),q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ms(){return ns().memoizedState}function Ns(e,t,n,r){var i=ts();q.flags|=e,i.memoizedState=js(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ps(e,t,n,r){var i=ns();r=r===void 0?null:r;var a=i.memoizedState.inst;Lo!==null&&r!==null&&qo(r,Lo.memoizedState.deps)?i.memoizedState=js(t,a,n,r):(q.flags|=e,i.memoizedState=js(1|t,a,n,r))}function Fs(e,t){Ns(8390656,8,e,t)}function Is(e,t){Ps(2048,8,e,t)}function Ls(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=rs(),q.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rs(e){var t=ns().memoizedState;return Ls({ref:t,nextImpl:e}),function(){if(Qu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function zs(e,t){return Ps(4,2,e,t)}function Bs(e,t){return Ps(4,4,e,t)}function Vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hs(e,t,n){n=n==null?null:n.concat([e]),Ps(4,4,Vs.bind(null,t,e),n)}function Us(){}function Ws(e,t){var n=ns();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gs(e,t){var n=ns();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&qo(t,r[1]))return r[0];if(r=e(),Vo){Qe(!0);try{e()}finally{Qe(!1)}}return n.memoizedState=[r,t],r}function Ks(e,t,n){return n===void 0||Io&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Nd(),q.lanes|=e,sd|=e,n)}function qs(e,t,n,r){return Rr(n,t)?n:bo.current===null?!(Io&106)||Io&1073741824&&!(Y&261930)?(kc=!0,e.memoizedState=n):(e=Nd(),q.lanes|=e,sd|=e,t):(e=Ks(e,n,r),Rr(e,t)||(kc=!0),e)}function Js(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};s.types=o===null?null:o.types,I.T=s,oc(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ac(e,t,La(c,r),Md(e)):ac(e,t,r,Md(e))}catch(n){ac(e,t,{then:function(){},status:`rejected`,reason:n},Md())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function Ys(){}function Xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Zs(e).queue;Js(e,a,t,he,n===null?Ys:function(){return Qs(e),n(r)})}function Zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:he},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qs(e){var t=Zs(e);t.next===null&&(t=e.alternate.memoizedState),ac(e,t.next.queue,{},Md())}function $s(){return ya(uh)}function ec(){return ns().memoizedState}function tc(){return ns().memoizedState}function nc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Md();e=uo(n);var r=fo(t,e,n);r!==null&&(Fd(r,t,n),po(r,t,n)),t={cache:Ea()},e.payload=t;return}t=t.return}}function rc(e,t,n){var r=Md();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e)?cc(t,n):(n=bi(e,t,n,r),n!==null&&(Fd(n,e,r),lc(n,t,r)))}function ic(e,t,n){ac(e,t,n,Md())}function ac(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))cc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rr(s,o))return yi(e,t,i,0),$u===null&&vi(),!1}catch{}if(n=bi(e,t,i,r),n!==null)return Fd(n,e,r),lc(n,t,r),!0}return!1}function oc(e,t,n,r){if(r={lane:2,revertLane:If(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(t)throw Error(i(479))}else t=bi(e,n,r,2),t!==null&&Fd(t,e,2)}function sc(e){var t=e.alternate;return e===q||t!==null&&t===q}function cc(e,t){Bo=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}var uc={readContext:ya,use:as,useCallback:Ko,useContext:Ko,useEffect:Ko,useImperativeHandle:Ko,useLayoutEffect:Ko,useInsertionEffect:Ko,useMemo:Ko,useReducer:Ko,useRef:Ko,useState:Ko,useDebugValue:Ko,useDeferredValue:Ko,useTransition:Ko,useSyncExternalStore:Ko,useId:Ko,useHostTransitionStatus:Ko,useFormState:Ko,useActionState:Ko,useOptimistic:Ko,useMemoCache:Ko,useCacheRefresh:Ko,useEffectEvent:Ko},dc={readContext:ya,use:as,useCallback:function(e,t){return ts().memoizedState=[e,t===void 0?null:t],e},useContext:ya,useEffect:Fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ns(4194308,4,Vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var n=ts();t=t===void 0?null:t;var r=e();if(Vo){Qe(!0);try{e()}finally{Qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ts();if(n!==void 0){var i=n(t);if(Vo){Qe(!0);try{n(t)}finally{Qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=rc.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ts();return e={current:e},t.memoizedState=e},useState:function(e){e=_s(e);var t=e.queue,n=ic.bind(null,q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Us,useDeferredValue:function(e,t){return Ks(ts(),e,t)},useTransition:function(){var e=_s(!1);return e=Js.bind(null,q,e.queue,!0,!1),ts().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=q,a=ts();if(K){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),$u===null)throw Error(i(349));Y&127||fs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Fs(ms.bind(null,r,o,e),[e]),r.flags|=2048,js(9,{destroy:void 0},ps.bind(null,r,o,n,t),null),n},useId:function(){var e=ts(),t=$u.identifierPrefix;if(K){var n=Gi,r=Wi;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:Es,useActionState:Es,useOptimistic:function(e){var t=ts();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=oc.bind(null,q,!0,n),n.dispatch=t,[e,t]},useMemoCache:os,useCacheRefresh:function(){return ts().memoizedState=nc.bind(null,q)},useEffectEvent:function(e){var t=ts(),n={impl:e};return t.memoizedState=n,function(){if(Qu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},fc={readContext:ya,use:as,useCallback:Ws,useContext:ya,useEffect:Is,useImperativeHandle:Hs,useInsertionEffect:zs,useLayoutEffect:Bs,useMemo:Gs,useReducer:cs,useRef:Ms,useState:function(){return cs(ss)},useDebugValue:Us,useDeferredValue:function(e,t){return qs(ns(),Lo.memoizedState,e,t)},useTransition:function(){var e=cs(ss)[0],t=ns().memoizedState;return[typeof e==`boolean`?e:is(e),t]},useSyncExternalStore:ds,useId:ec,useHostTransitionStatus:$s,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){return vs(ns(),Lo,e,t)},useMemoCache:os,useCacheRefresh:tc,useEffectEvent:Rs},pc={readContext:ya,use:as,useCallback:Ws,useContext:ya,useEffect:Is,useImperativeHandle:Hs,useInsertionEffect:zs,useLayoutEffect:Bs,useMemo:Gs,useReducer:us,useRef:Ms,useState:function(){return us(ss)},useDebugValue:Us,useDeferredValue:function(e,t){var n=ns();return Lo===null?Ks(n,e,t):qs(n,Lo.memoizedState,e,t)},useTransition:function(){var e=us(ss)[0],t=ns().memoizedState;return[typeof e==`boolean`?e:is(e),t]},useSyncExternalStore:ds,useId:ec,useHostTransitionStatus:$s,useFormState:As,useActionState:As,useOptimistic:function(e,t){var n=ns();return Lo===null?(n.baseState=e,[e,n.queue.dispatch]):vs(n,Lo,e,t)},useMemoCache:os,useCacheRefresh:tc,useEffectEvent:Rs};function mc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Md(),i=uo(r);i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Fd(t,e,r),po(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Md(),i=uo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Fd(t,e,r),po(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Md(),r=uo(n);r.tag=2,t!=null&&(r.callback=t),t=fo(e,r,n),t!==null&&(Fd(t,e,n),po(t,e,n))}};function gc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,a):!0}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hc.enqueueReplaceState(t,t.state,null)}function vc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=E({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function yc(e){hi(e)}function bc(e){console.error(e)}function xc(e){hi(e)}function Sc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function wc(e,t,n){return n=uo(n),n.tag=3,n.payload={element:null},n.callback=function(){Sc(e,t)},n}function Tc(e){return e=uo(e),e.tag=3,e}function Ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Cc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Cc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Dc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ga(t,n,a,!0),n=To.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Eo===null?qd():n.alternate===null&&od===0&&(od=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),gf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),gf(e,r,a)),!1}throw Error(i(435,n.tag))}return gf(e,r,a),qd(),!1}if(K)return t=To.current,t===null?(r!==ta&&(t=Error(i(423),{cause:r}),ca(Ii(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ii(r,n),a=wc(e.stateNode,r,a),mo(e,a),od!==4&&(od=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ta&&(e=Error(i(422),{cause:r}),ca(Ii(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ii(o,n),fd===null?fd=[o]:fd.push(o),od!==4&&(od=2),t===null)return!0;r=Ii(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=wc(n.stateNode,r,e),mo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Tc(a),Ec(a,e,n,r),mo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Oc=Error(i(461)),kc=!1;function Ac(e,t,n,r){t.child=e===null?oo(t,null,n,r):ao(t,e.child,n,r)}function jc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return va(t),r=Jo(e,t,n,o,a,i),s=Qo(),e!==null&&!kc?($o(e,t,i),al(e,t,i)):(K&&s&&Ji(t),t.flags|=1,Ac(e,t,r,i),t.child)}function Mc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Nc(e,t,a,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ol(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?zr:n,n(o,r)&&e.ref===t.ref)return al(e,t,i)}return t.flags|=1,e=Oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref){if(kc=!1,t.pendingProps=r=a,ol(e,i))e.flags&131072&&(kc=!0);else return t.lanes=e.lanes,al(e,t,i)}}return Vc(e,t,n,r,i)}function Pc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Va(t,a===null?null:a.cachePool),a===null?Co():So(t,a),ko(t);else return r=t.lanes=536870912,Ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Va(t,null),Co(),Ao()):(Va(t,a.cachePool),So(t,a),Ao(),t.memoizedState=null);return Ac(e,t,i,n),t.child}function Fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ic(e,t,n,r,i){var a=Ba();return a=a===null?null:{parent:Ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Va(t,null),Co(),ko(t),e!==null&&ga(e,t,r,!0),t.childLanes=i,null}function Lc(e,t){return t=Xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rc(e,t,n){return ao(t,e.child,null,n),e=Lc(t,t.pendingProps),e.flags|=2,jo(t),t.memoizedState=null,e}function zc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=Lc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Fc(null,e);if(Oo(t),(e=Qi)?(e=cm(e,ea),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ui===null?null:{id:Wi,overflow:Gi},retryLane:536870912,hydrationErrors:null},n=Ni(e),n.return=t,t.child=n,Zi=t,Qi=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return Lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Oo(t),a){if(t.flags&256)t.flags&=-257,t=Rc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(kc||ga(e,t,n,!1),a=(n&e.childLanes)!==0,kc||a){if(bo.current===null){if(r=$u,r!==null&&(s=_t(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,xi(e,s),Fd(r,e,s),Oc;qd()}t=Rc(e,t,n)}else e=o.treeContext,Qi=fm(s.nextSibling),Zi=t,K=!0,$i=null,ea=!1,e!==null&&Xi(t,e),t=Lc(t,r),t.flags|=134221824;return t}return e=Oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vc(e,t,n,r,i){return va(t),n=Jo(e,t,n,r,void 0,i),r=Qo(),e!==null&&!kc?($o(e,t,i),al(e,t,i)):(K&&r&&Ji(t),t.flags|=1,Ac(e,t,n,i),t.child)}function Hc(e,t,n,r,i,a){return va(t),t.updateQueue=null,n=Xo(t,r,n,i),Yo(e),r=Qo(),e!==null&&!kc?($o(e,t,a),al(e,t,a)):(K&&r&&Ji(t),t.flags|=1,Ac(e,t,n,a),t.child)}function Uc(e,t,n,r,i){if(va(t),t.stateNode===null){var a=wi,o=n.contextType;typeof o==`object`&&o&&(a=ya(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=hc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},co(t),o=n.contextType,a.context=typeof o==`object`&&o?ya(o):wi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(mc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&hc.enqueueReplaceState(a,a.state,null),_o(t,r,a,i),go(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=vc(n,s);a.props=c;var l=a.context,u=n.contextType;o=wi,typeof u==`object`&&u&&(o=ya(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&_c(t,a,r,o),so=!1;var f=t.memoizedState;a.state=f,_o(t,r,a,i),go(),l=t.memoizedState,s||f!==l||so?(typeof d==`function`&&(mc(t,n,d,r),l=t.memoizedState),(c=so||gc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,lo(e,t),o=t.memoizedProps,u=vc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=wi,typeof l==`object`&&l&&(c=ya(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&_c(t,a,r,c),so=!1,f=t.memoizedState,a.state=f,_o(t,r,a,i),go();var p=t.memoizedState;o!==d||f!==p||so||e!==null&&e.dependencies!==null&&_a(e.dependencies)?(typeof s==`function`&&(mc(t,n,s,r),p=t.memoizedState),(u=so||gc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&_a(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Bc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ao(t,e.child,null,i),t.child=ao(t,null,n,i)):Ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=al(e,t,i),e}function Wc(e,t,n,r){return oa(),t.flags|=256,Ac(e,t,n,r),t.child}var Gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(e){return{baseLanes:e,cachePool:Ha()}}function qc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function Jc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Mo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(K){if(i?Do(t):Ao(),(e=Qi)?(e=cm(e,ea),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ui===null?null:{id:Wi,overflow:Gi},retryLane:536870912,hydrationErrors:null},n=Ni(e),n.return=t,t.child=n,Zi=t,Qi=null)):e=null,e===null)throw na(t);return t.lanes=um(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ao(),i=t.mode,a=Xc({mode:`hidden`,children:a},i),r=ji(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Kc(n),r.childLanes=qc(e,o,n),t.memoizedState=Gc,Fc(null,r)):(Do(t),Yc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Qc(e,t,a,o,r,c,s,n)}return i?(Ao(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Oi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=ji(i,a,n,null),i.flags|=2):i=Oi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Fc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Kc(n):(a=i.cachePool,a===null?a=Ha():(s=Ta._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=qc(e,o,n),t.memoizedState=Gc,Fc(e.child,r)):(Do(t),n=e.child,e=n.sibling,n=Oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Yc(e,t){return t=Xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Xc(e,t){return e=Ei(22,e,null,t),e.lanes=0,e}function Zc(e,t,n){return ao(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Do(t),t.flags&=-257,Zc(e,t,c)):t.memoizedState===null?(Ao(),o=a.fallback,s=t.mode,a=Xc({mode:`visible`,children:a.children},s),o=ji(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ao(t,e.child,null,c),a=t.child,a.memoizedState=Kc(c),a.childLanes=qc(e,r,c),t.memoizedState=Gc,Fc(null,a)):(Ao(),t.child=e.child,t.flags|=128,null);if(Do(t),um(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ca({value:a,source:null,stack:null})),Zc(e,t,c)}if(kc||ga(e,t,c,!1),r=(c&e.childLanes)!==0,kc||r){if(bo.current!==null)return Zc(e,t,c);if(r=$u,r!==null&&(a=_t(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,xi(e,a),Fd(r,e,a),Oc;return lm(o)||qd(),Zc(e,t,c)}return lm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Qi=fm(o.nextSibling),Zi=t,K=!0,$i=null,ea=!1,e!==null&&Xi(t,e),t=Yc(t,a.children),t.flags|=134221824,t)}function $c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function el(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Fo(n)===null&&(t=e),e=e.sibling}return t}function tl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function nl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function rl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Mo.current;if(t.flags&128)return No(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,No(t,o),i===`backwards`&&e!==null?(nl(e),Ac(e,t,r,n),nl(e)):Ac(e,t,r,n),r=K?Bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,n,t);else if(e.tag===19)$c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=el(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,nl(t)),tl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,a,r);break;case`together`:tl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=el(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,a,r)}return t.child}function il(e,t,n){var r=t.pendingProps;return fa(t,t.type,r.value),Ac(e,t,r.children,n),t.child}function al(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ol(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&_a(e)))}function sl(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),fa(t,Ta,e.memoizedState.cache),oa();break;case 27:case 5:De(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Do(t),t.flags|=128,null;r=ga(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Jc(e,t,n):(Do(t),e=al(e,t,n),e===null?null:e.sibling)}Do(t);break;case 19:if(t.flags&128)return rl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ga(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return rl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),No(t,Mo.current),r)break;return null;case 22:return t.lanes=0,Pc(e,t,n,t.pendingProps);case 24:fa(t,Ta,e.memoizedState.cache)}return al(e,t,n)}function cl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)kc=!0;else{if(!ol(e,n)&&!(t.flags&128))return kc=!1,sl(e,t,n);kc=!!(e.flags&131072)}}else kc=!1,K&&t.flags&1048576&&qi(t,Bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e==`function`)Di(e)?(r=vc(e,r),t.tag=1,t=Uc(null,t,e,r,n)):(t.tag=0,t=Vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===P){t.tag=11,t=jc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=Mc(null,t,e,r,n);break a}if(a===N){t.tag=10,t.type=e,t=il(null,t,n);break a}}throw t=pe(e)||e,Error(i(306,t,``))}}return t;case 0:return Vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=vc(r,t.pendingProps),Uc(e,t,r,a,n);case 3:a:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,lo(e,t),_o(t,r,null,n);var s=t.memoizedState;if(r=s.cache,fa(t,Ta,r),r!==o.cache&&ha(t,[Ta],n,!0),go(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Wc(e,t,r,n);break a}if(r!==a){a=Ii(Error(i(424)),t),ca(a),t=Wc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Qi=fm(e.firstChild),Zi=t,K=!0,$i=null,ea=!0,n=oo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(oa(),r===a){t=al(e,t,n);break a}Ac(e,t,r,n)}t=t.child}return t;case 26:return Bc(e,t),e===null?(n=Im(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(t.stateNode=hp(t.type,t.pendingProps,Ce.current,t)):t.memoizedState=Im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return De(t),e===null&&K&&(r=t.stateNode=vm(t.type,t.pendingProps,Ce.current),Zi=t,ea=!0,a=Qi,Tp(t.type)?(pm=a,Qi=fm(r.firstChild)):Qi=a),Ac(e,t,t.pendingProps.children,n),Bc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=r=Qi)&&(r=om(r,t.type,t.pendingProps,ea),r===null?a=!1:(t.stateNode=r,Zi=t,Qi=fm(r.firstChild),ea=!1,a=!0)),a||na(t)),De(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,gp(a,o)?r=null:s!==null&&gp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Jo(e,t,Zo,null,null,n),uh._currentValue=a),Bc(e,t),Ac(e,t,r,n),t.child;case 6:return e===null&&K&&((e=n=Qi)&&(n=sm(n,t.pendingProps,ea),n===null?e=!1:(t.stateNode=n,Zi=t,Qi=null,e=!0)),e||na(t)),null;case 13:return Jc(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):Ac(e,t,r,n),t.child;case 11:return jc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Bc(e,t),Ac(e,t,r,n),t.child;case 8:return Ac(e,t,t.pendingProps.children,n),t.child;case 12:return Ac(e,t,t.pendingProps.children,n),t.child;case 10:return il(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,va(t),a=ya(a),r=r(a),t.flags|=1,Ac(e,t,r,n),t.child;case 14:return Mc(e,t,t.type,t.pendingProps,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 19:return rl(e,t,n);case 31:return zc(e,t,n);case 22:return Pc(e,t,n,t.pendingProps);case 24:return va(t),r=ya(Ta),e===null?(a=Ba(),a===null&&(a=$u,o=Ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},co(t),fa(t,Ta,a)):((e.lanes&n)!==0&&(lo(e,t),_o(t,null,null,n),go()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,fa(t,Ta,r),r!==a.cache&&ha(t,[Ta],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),fa(t,Ta,r))),Ac(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:K&&Ji(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Bc(e,t),Ac(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ll(e){e.flags|=4}function ul(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Zm(t,r):Zm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Wd())e.flags|=8192;else throw Xa=Ka,Wa}}else e.flags&=-16777217}function dl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t)){if(Wd())e.flags|=8192;else throw Xa=Ka,Wa}}function fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:dt(),e.lanes|=t,dd|=t)}function pl(e,t){if(!K)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ml(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hl(e,t,n){var r=t.pendingProps;switch(Yi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pa(Ta),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?ll(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sa())),ml(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ll(t),o===null?(ml(t),ul(t,a,null,r,n)):(ml(t),dl(t,o))):o?o===e.memoizedState?(ml(t),t.flags&=-16777217):(ll(t),ml(t),dl(t,o)):(e=e.memoizedProps,e!==r&&ll(t),ml(t),ul(t,a,e,r,n)),null;case 27:if(Oe(t),n=Ce.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ll(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ml(t),t.subtreeFlags&=-33554433,null}e=xe.current,aa(t)?ra(t,e):(e=vm(a,r,n),t.stateNode=e,ll(t))}return ml(t),t.subtreeFlags&=-33554433,null;case 5:if(Oe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ll(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ml(t),t.subtreeFlags&=-33554433,null}if(o=xe.current,aa(t))ra(t,o);else{var s=fp(Ce.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ct]=t,o[wt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ap(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ll(t)}}return ml(t),t.subtreeFlags&=-33554433,ul(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ll(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Ce.current,aa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||np(e.nodeValue,n)),e||na(t,!0)}else e=fp(e).createTextNode(r),e[Ct]=t,t.stateNode=e}return ml(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=aa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ct]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ml(t),e=!1}else n=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jo(t),t):(jo(t),null);if(t.flags&128)throw Error(i(558))}return ml(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ct]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ml(t),a=!1}else a=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(jo(t),t):(jo(t),null)}return jo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),fl(t,t.updateQueue),ml(t),null);case 4:return Ee(),e===null&&Kf(t.stateNode.containerInfo),t.flags|=67108864,ml(t),null;case 10:return pa(t.type),ml(t),null;case 19:if(Po(t),r=t.memoizedState,r===null)return ml(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)pl(r,!1);else{if(od!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fo(e),o!==null){for(t.flags|=128,pl(r,!1),e=o.updateQueue,t.updateQueue=e,fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ki(n,e),n=n.sibling;return No(t,Mo.current&1|2),K&&Ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ve()>_d&&(t.flags|=128,a=!0,pl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,fl(t,e),pl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!K)return ml(t),null}else 2*Ve()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,pl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ve(),e.sibling=null,o=Mo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||K?No(t,o):(n=o,be(To,t),be(Mo,n),Eo===null&&(Eo=t)),K&&Ki(t,r.treeForkCount),e}return ml(t),null;case 22:case 23:return jo(t),wo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),n=t.updateQueue,n!==null&&fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ye(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Ta),ml(t),null;case 25:return null;case 30:return t.flags|=33554432,ml(t),null}throw Error(i(156,t.tag))}function gl(e,t){switch(Yi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ta),Ee(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oe(t),null;case 31:if(t.memoizedState!==null){if(jo(t),t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Po(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ee(),null;case 10:return pa(t.type),null;case 22:case 23:return jo(t),wo(),e!==null&&ye(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ta),null;case 25:return null;default:return null}}function _l(e,t){switch(Yi(t),t.tag){case 3:pa(Ta),Ee();break;case 26:case 27:case 5:Oe(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&jo(t);break;case 13:jo(t);break;case 19:Po(t);break;case 10:pa(t.type);break;case 22:case 23:jo(t),wo(),e!==null&&ye(za);break;case 24:pa(Ta)}}function vl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){hf(t,t.return,e)}}function yl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){hf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){hf(t,t.return,e)}}function bl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{yo(t,n)}catch(t){hf(e,e.return,t)}}}function xl(e,t,n){n.props=vc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){hf(e,t,n)}}function Sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=fi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Lp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Rp(e);m(e.child,!1,tm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){hf(e,t,n)}}function Cl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){hf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){hf(e,t,n)}else n.current=null}}function wl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)rm(e.stateNode,t[n])}function Tl(e){for(var t=e.return;t!==null&&(Ol(t)&&rm(e.stateNode,t.stateNode),!Dl(t));)t=t.return}function El(e){for(var t=e.return;t!==null&&(Ol(t)&&im(e.stateNode,t.stateNode),!Dl(t));)t=t.return}function Dl(e){return e.tag===5||e.tag===3||e.tag===27}function Ol(e){return e&&e.tag===7&&e.stateNode!==null}function kl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){hf(e,e.return,t)}}function Al(e,t,n){try{var r=e.stateNode;sp(r,e.type,n,t),r[wt]=t}catch(t){hf(e,e.return,t)}}function jl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tp(e.type)||e.tag===4}function Ml(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||jl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),wl(e,r),qt=!0;else if(i!==4&&(i===27&&(wl(e,r),r=null,Tp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Nl(e,t,n,r),e=e.sibling;e!==null;)Nl(e,t,n,r),e=e.sibling}function Pl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),wl(e,r),qt=!0;else if(i!==4&&(i===27&&(wl(e,r),r=null,Tp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Pl(e,t,n,r),e=e.sibling;e!==null;)Pl(e,t,n,r),e=e.sibling}function Fl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ap(t,r,n),t[Ct]=e,t[wt]=n}catch(t){hf(e,e.return,t)}}var Il=!1,Ll=null;function Rl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Il=!0)}var zl=null;function Bl(){var e=zl;return zl=null,e}var Vl=0;function Hl(e,t,n,r,i){return Vl=0,Ul(e.child,t,n,r,i)}function Ul(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=jp(o);r.push(s),s.view&&(a=!0)}else a||jp(o).view&&(a=!0);Il=!0,Op(o,Vl===0?t:t+`_`+Vl,n),Vl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Ul(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Wl(e,t){for(;e!==null;)e.tag===5?kp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Wl(e.child,t)),e=e.sibling}function Gl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=mi(t.default,t.share),t!==`none`&&(Hl(e,n,t,null,!1)||Wl(e.child,!1))}e=e.sibling}}function Kl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=fi(r,n),a=mi(r.default,n.paired?r.share:r.enter);a===`none`?Gl(e):Hl(e,i,a,null,!1)?(Gl(e),n.paired||t||Pd(e,r.onEnter)):Wl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Kl(e,t),e=e.sibling;else Gl(e)}function ql(e){if(Ll!==null&&Ll.size!==0){var t=Ll;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=mi(n.default,n.share);if(a!==`none`&&(Hl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Pd(e,n.onShare)):Wl(e.child,!1)),t.delete(r),t.size===0)break}}}ql(e)}e=e.sibling}}}function Jl(e){if(e.tag===30){var t=e.memoizedProps,n=fi(t,e.stateNode),r=Ll===null?void 0:Ll.get(n),i=mi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Hl(e,n,i,null,!1)?r===void 0?Pd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ll.delete(n),Pd(e,t.onShare)):Wl(e.child,!1)),Ll!==null&&ql(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else Ll!==null&&ql(e)}function Yl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=fi(t,e.stateNode);t=mi(t.default,t.update),e.flags&=-5,t!==`none`&&Hl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Yl(e);e=e.sibling}}function Xl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Wl(e.child,!1))}Xl(e)}e=e.sibling}}function Zl(e){if(e.tag===30)e.stateNode.paired=null,Wl(e.child,!1),Xl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Xl(e)}function Ql(e){for(e=e.child;e!==null;)e.tag===30?Wl(e.child,!1):e.subtreeFlags&33554432&&Ql(e),e=e.sibling}function $l(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Vl<a.length){var l=a[Vl],u=jp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Op(c,Vl===0?n:n+`_`+Vl,i),s&&e.flags&4||(zl===null&&(zl=[]),zl.push(c,Vl===0?r:r+`_`+Vl,t.memoizedProps)),Vl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:$l(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function eu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=fi(n,r),a=mi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Mp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Vl=0,i=$l(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Pd(e,n.onUpdate))}else e.subtreeFlags&33554432&&eu(e,t);e=e.sibling}}var tu=!1,nu=!1,ru=!1,iu=!1,au=typeof WeakSet==`function`?WeakSet:Set,ou=null,su=!1,cu=!1,lu=!1,uu=!1;function du(e,t,n){if(e=e.containerInfo,up=yh,e=W(e),Ur(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(dp={focusedElem:e,selectionRange:r},yh=!1,n=(n&335544064)===n,ou=t,t=n?9270:1024;ou!==null;){if(e=ou,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Jl(r[a]);if(e.alternate===null&&e.flags&2)n&&Rl(e),fu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Jl(r),fu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Rl(e),fu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ou=r):(n&&Yl(e),fu(n))}}Ll=null}function fu(e){for(;ou!==null;){var t=ou,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=vc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){hf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)am(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:am(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=fi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=mi(a.default,a.update),a!==`none`&&Hl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ou=r;break}ou=t.return}}function pu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nu(e,n),r&4&&vl(5,n);break;case 1:if(Nu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){hf(n,n.return,e)}else{var i=vc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){hf(n,n.return,e)}}}r&64&&bl(n),r&512&&Sl(n,n.return);break;case 3:if(Nu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{yo(e,t)}catch(e){hf(n,n.return,e)}}break;case 27:t===null&&r&4&&Fl(n);case 26:case 5:Nu(e,n),t===null&&r&4&&kl(n),r&512&&Sl(n,n.return);break;case 12:Nu(e,n);break;case 31:Nu(e,n),r&4&&Su(e,n);break;case 13:Nu(e,n),r&4&&Cu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=yf.bind(null,n),dm(e,n))));break;case 22:if(r=n.memoizedState!==null||tu,!r){var a=t!==null&&t.memoizedState!==null||nu;t=tu,i=nu,tu=r,(nu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Fu(e,n,r)):Nu(e,n),tu=t,nu=i}break;case 30:Nu(e,n),r&512&&Sl(n,n.return);break;case 7:r&512&&Sl(n,n.return);default:Nu(e,n)}}function mu(e,t){for(e=e.child;e!==null;)hu(e,t),e=e.sibling}function hu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){hf(e,e.return,t)}gu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,qt=!0}catch(t){hf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Dp(s,!0):Dp(e.stateNode,!1)}catch(t){hf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&mu(e,t);break;default:mu(e,t)}}function gu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:hu(n,r);break a;case 22:n.memoizedState===null&&gu(n,r);break a;default:gu(n,r)}}e=e.sibling}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vu=null,yu=!1;function bu(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount==`function`)try{Ze.onCommitFiberUnmount(Xe,n)}catch{}switch(n.tag){case 26:nu||Cl(n,t),bu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!nu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nu||Cl(n,t),El(n);var r=vu,i=yu;Tp(n.type)&&(vu=n.stateNode,yu=!1),bu(e,t,n),ym(n.stateNode,n.type,n.memoizedProps),vu=r,yu=i;break;case 5:nu||Cl(n,t),El(n);case 6:if(n.tag===6&&El(n),r=vu,i=yu,vu=null,bu(e,t,n),vu=r,yu=i,vu!==null){if(yu)try{(vu.nodeType===9?vu.body:vu.nodeName===`HTML`?vu.ownerDocument.body:vu).removeChild(n.stateNode),qt=!0}catch(e){hf(n,t,e)}else try{vu.removeChild(n.stateNode),qt=!0}catch(e){hf(n,t,e)}}break;case 18:vu!==null&&(yu?(e=vu,Ep(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Gh(e)):Ep(vu,n.stateNode));break;case 4:r=vu,i=yu,vu=n.stateNode.containerInfo,yu=!0,bu(e,t,n),vu=r,yu=i;break;case 0:case 11:case 14:case 15:yl(2,n,t),nu||yl(4,n,t),bu(e,t,n);break;case 1:nu||(Cl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&xl(n,t,r)),bu(e,t,n);break;case 21:bu(e,t,n);break;case 22:nu=(r=nu)||n.memoizedState!==null,bu(e,t,n),nu=r;break;case 30:Cl(n,t),bu(e,t,n);break;case 7:nu||Cl(n,t),bu(e,t,n);break;default:bu(e,t,n)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gh(e)}catch(e){hf(t,t.return,e)}}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gh(e)}catch(e){hf(t,t.return,e)}}function wu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(i(435,e.tag))}}function Tu(e,t){var n=wu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=bf.bind(null,e,t);t.then(r,r)}})}function Eu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Tp(l.type)){vu=l.stateNode,yu=!1;break a}break;case 5:vu=l.stateNode,yu=!1;break a;case 3:case 4:vu=l.stateNode.containerInfo,yu=!0;break a}l=l.return}if(vu===null)throw Error(i(160));xu(s,c,o),vu=null,yu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ou(t,e,n),t=t.sibling}var Du=null;function Ou(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Eu(t,e,n),ku(e),a&4&&(yl(3,e,e.return),vl(3,e),yl(5,e,e.return));break;case 1:Eu(t,e,n),ku(e),a&512&&(nu||r===null||Cl(r,r.return)),a&64&&tu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Du,Eu(t,e,n),ku(e),a&512&&(nu||r===null||Cl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(tu)e.stateNode=hp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[At]||r[Ct]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ap(r,t,n),r[Ct]=e,Lt(r),t=r;break a;case`link`:if(o=Jm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Jm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ct]=e,Lt(r),t=r}e.stateNode=t}}else tu||Ym(o,e.type,e.stateNode)}else e.stateNode=Um(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Al(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||nu||t.parentNode.removeChild(t)):a.count--,n===null?tu||Ym(o,e.type,e.stateNode):Um(o,n,e.memoizedProps))}break;case 27:Eu(t,e,n),ku(e),a&512&&(nu||r===null||Cl(r,r.return)),r!==null&&a&4&&Al(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ru,ru=!1,Eu(t,e,n),ru=o,ku(e),a&512&&(nu||r===null||Cl(r,r.return)),e.flags&32){t=e.stateNode;try{fn(t,``),qt=!0}catch(t){hf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Al(e,t,r===null?t:r.memoizedProps)),a&1024&&(iu=!0);break;case 6:if(Eu(t,e,n),ku(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,qt=!0}catch(t){hf(e,e.return,t)}}break;case 3:if(qt=!1,qm=null,o=Du,Du=Cm(t.containerInfo),Eu(t,e,n),Du=o,ku(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Gh(t.containerInfo)}catch(t){hf(e,e.return,t)}iu&&(iu=!1,Au(e)),qt=!1;break;case 4:a=ru,ru=tu,r=Jt(),o=Du,Du=Cm(e.stateNode.containerInfo),Eu(t,e,n),ku(e),Du=o,qt&&cu&&(lu=!0),qt=r,ru=a;break;case 12:Eu(t,e,n),ku(e);break;case 31:Eu(t,e,n),ku(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 13:Eu(t,e,n),ku(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=Ve()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=tu,l=nu,u=ru;tu=c||o,ru=u||o,nu=l||s,Eu(t,e,n),nu=l,ru=u,tu=c,ku(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||tu||nu||(t=s||nu,n=tu,r=nu,tu=o||tu,nu=t,Pu(e,2),tu=n,nu=r),!o&&ru||mu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Tu(e,n))));break;case 19:Eu(t,e,n),ku(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 30:a&512&&(nu||r===null||Cl(r,r.return)),a=Jt(),o=cu,s=(n&335544064)===n,c=e.memoizedProps,cu=s&&mi(c.default,c.update)!==`none`,Eu(t,e,n),ku(e),s&&r!==null&&qt&&(e.flags|=4),cu=o,qt=a;break;case 21:break;case 7:a&512&&(nu||r===null||Cl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Eu(t,e,n),ku(e)}}function ku(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(jl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Ol(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Dl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Pl(e,Ml(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(fn(l,``),n.flags&=-33),Pl(e,Ml(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Nl(e,Ml(e),u,s);break;default:throw Error(i(161))}}catch(t){hf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Au(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Au(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yh=!0,t.reset(),yh=!1),e=e.sibling}}function ju(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling;else eu(t,!1)}function Mu(e,t){var n=e.alternate;if(n===null)Kl(e,!1);else switch(e.tag){case 3:if(uu=su=!1,Bl(),ju(t,e),!su&&!lu){if(e=zl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];kp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),uu=!0}zl=null;break;case 5:ju(t,e);break;case 4:r=su,su=!1,ju(t,e),su&&(lu=!0),su=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ju(t,e):Kl(e,!1));break;case 30:r=su,i=Bl(),su=!1,ju(t,e),su&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=fi(a,o),o=fi(n.memoizedProps,o);var s=mi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Vl=0,t=$l(e,n,t,o,s,a,!0),Vl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Pd(e,e.memoizedProps.onUpdate),zl=i):i!==null&&(i.push.apply(i,zl),zl=i),su=e.flags&32?!0:r;break;default:ju(t,e)}}function Nu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pu(e,t.alternate,t),t=t.sibling}function Pu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:yl(4,n,n.return),Pu(n,r);break;case 1:Cl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&xl(n,n.return,i),Pu(n,r);break;case 27:r&2&&ym(n.stateNode,n.type,n.memoizedProps);case 5:Cl(n,n.return),n.tag!==5&&n.tag!==27||El(n),Pu(n,r);break;case 6:El(n);break;case 26:Cl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||nu||i.parentNode.removeChild(i),Pu(n,r);break;case 22:n.memoizedState===null&&Pu(n,r);break;case 30:Cl(n,n.return),Pu(n,r);break;case 7:Cl(n,n.return);default:Pu(n,r)}e=e.sibling}}function Fu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Fu(i,a,n),vl(4,a);break;case 1:if(Fu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){hf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)vo(l[i],c)}catch(e){hf(r,r.return,e)}}s&&o&64&&bl(a),Sl(a,a.return);break;case 27:n&2&&Fl(a);case 5:a.tag!==5&&a.tag!==27||Tl(a),Fu(i,a,n),s&&r===null&&o&4&&kl(a),Sl(a,a.return);break;case 6:Tl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||tu||Ym(Cm(c.ownerDocument),a.type,c),Fu(i,a,n),s&&r===null&&o&4&&kl(a),Sl(a,a.return);break;case 12:Fu(i,a,n);break;case 31:Fu(i,a,n),s&&o&4&&Su(i,a);break;case 13:Fu(i,a,n),s&&o&4&&Cu(i,a);break;case 22:a.memoizedState===null&&Fu(i,a,n),Sl(a,a.return);break;case 30:Fu(i,a,n),Sl(a,a.return);break;case 7:Sl(a,a.return);default:Fu(i,a,n)}t=t.sibling}}function Iu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Da(n))}function Lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Da(e))}function Ru(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)zu(e,t,n,r),t=t.sibling;else i&&Ql(t)}function zu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Zl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ru(e,t,n,r),a&2048&&vl(9,t);break;case 1:Ru(e,t,n,r);break;case 3:Ru(e,t,n,r),i&&uu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Da(a)));break;case 12:if(a&2048){Ru(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){hf(t,t.return,e)}}else Ru(e,t,n,r);break;case 31:Ru(e,t,n,r);break;case 13:Ru(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Zl(t),o._visibility&2?Ru(e,t,n,r):(o._visibility|=2,Bu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Zl(s),o._visibility&2?Ru(e,t,n,r):Vu(e,t)),a&2048&&Iu(s,t);break;case 24:Ru(e,t,n,r),a&2048&&Lu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Wl(a.child,!0),Wl(t.child,!0))),Ru(e,t,n,r);break;default:Ru(e,t,n,r)}}function Bu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bu(a,o,s,c,i),vl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bu(a,o,s,c,i)):u._visibility&2?Bu(a,o,s,c,i):Vu(a,o),i&&l&2048&&Iu(o.alternate,o);break;case 24:Bu(a,o,s,c,i),i&&l&2048&&Lu(o.alternate,o);break;default:Bu(a,o,s,c,i)}t=t.sibling}}function Vu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vu(n,r),i&2048&&Iu(r.alternate,r);break;case 24:Vu(n,r),i&2048&&Lu(r.alternate,r);break;default:Vu(n,r)}t=t.sibling}}var Hu=8192;function Uu(e,t,n){if(e.subtreeFlags&Hu)for(e=e.child;e!==null;)Wu(e,t,n),e=e.sibling}function Wu(e,t,n){switch(e.tag){case 26:Uu(e,t,n),e.flags&Hu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&eh(n,e)):th(n,Du,e.memoizedState,e.memoizedProps));break;case 5:Uu(e,t,n),e.flags&Hu&&(e=e.stateNode,(t&335544128)===t&&eh(n,e));break;case 3:case 4:var r=Du;Du=Cm(e.stateNode.containerInfo),Uu(e,t,n),Du=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hu,Hu=16777216,Uu(e,t,n),Hu=r):Uu(e,t,n));break;case 30:if((e.flags&Hu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ll===null&&(Ll=new Map),Ll.set(r,i)}Uu(e,t,n);break;default:Uu(e,t,n)}}function Gu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qu(e),e=e.sibling}function qu(e){switch(e.tag){case 0:case 11:case 15:Ku(e),e.flags&2048&&yl(9,e,e.return);break;case 3:Ku(e);break;case 12:Ku(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ju(e)):Ku(e);break;default:Ku(e)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),Ju(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ju(t));break;default:Ju(t)}e=e.sibling}}function Yu(e,t){for(;ou!==null;){var n=ou;switch(n.tag){case 0:case 11:case 15:yl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ou=r;else a:for(n=e;ou!==null;){r=ou;var i=r.sibling,a=r.return;if(_u(r),r===n){ou=null;break a}if(i!==null){i.return=a,ou=i;break a}ou=a}}}var Xu={getCacheForType:function(e){var t=ya(Ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ya(Ta).controller.signal}},Zu=typeof WeakMap==`function`?WeakMap:Map,Qu=0,$u=null,J=null,Y=0,ed=0,td=null,nd=!1,rd=!1,id=!1,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,bd=0,xd=null,Sd=null,Cd=0,wd=0,Td=null,Ed=null,Dd=null,Od=null,kd=null,Ad=0,jd=null;function Md(){return Qu&2&&Y!==0?Y&-Y:I.T===null?bt():If()}function Nd(){if(ud===0){if(!(Y&536870912)||K){var e=it;it<<=1,!(it&3932160)&&(it=262144),ud=e}else ud=536870912}return e=To.current,e!==null&&(e.flags|=32),ud}function Pd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Lp(fi(e.memoizedProps,n))),Od===null&&(Od=[]),Od.push(t.bind(null,r))}}function Fd(e,t,n){(e===$u&&(ed===2||ed===9)||e.cancelPendingCommit!==null)&&(Hd(e,0),zd(e,Y,ud,!1)),pt(e,n),(!(Qu&2)||e!==$u)&&(e===$u&&(!(Qu&2)&&(cd|=n),od===4&&zd(e,Y,ud,!1)),Of(e))}function Id(e,t,n){if(Qu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ct(e,t),a=r?Xd(e,t):Jd(e,t,!0),o=r;do{if(a===0){rd&&!r&&zd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Rd(n))a=Jd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Hd(c,s).flags|=256),s=Jd(c,s,!1),s!==2&&s!==6){if(id&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Hd(e,0),zd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:zd(r,t,ud,!nd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-Ve(),10<a)){if(zd(r,t,ud,!nd),st(r,0,!0)!==0)break a;Cd=t,r.timeoutHandle=yp(Ld.bind(null,r,n,pd,vd,md,t,ud,cd,dd,nd,o,`Throttled`,-0,0),a);break a}Ld(r,n,pd,vd,md,t,ud,cd,dd,nd,o,null,-0,0)}break}}while(1);Of(e)}function Ld(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Ll=null,Wu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ah.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-Ve():(a&4194048)===a?gd-Ve():0,m=rh(d,m),m!==null)?(Cd=a,e.cancelPendingCommit=m(rf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),zd(e,a,o,!l)):rf(e,t,a,n,r,i,o,s,c,l,u,d)}function Rd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zd(e,t,n,r){t=lt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-$e(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ht(e,n,t)}function Bd(){return Qu&6?!0:(kf(0,!1),!1)}function Vd(){if(J!==null){if(ed===0)var e=J.return;else e=J,da=ua=null,es(e),$a=null,eo=0,e=J;for(;e!==null;)_l(e.alternate,e),e=e.return;J=null}}function Hd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cd=0,Vd(),$u=e,J=n=Oi(e.current,null),Y=t,ed=0,td=null,nd=!1,rd=ct(e,t),id=!1,dd=ud=ld=cd=sd=od=0,pd=fd=null,md=!1,ad=lt(e,t),vi(),n}function Ud(e,t){q=null,I.H=uc,t===Ua||t===Ga?(t=Za(),ed=3):t===Wa?(t=Za(),ed=4):ed=t===Oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,td=t,J===null&&(od=1,Sc(e,Ii(t,e.current)))}function Wd(){var e=To.current;return e===null?!0:(Y&4194048)===Y?Eo===null:(Y&62914560)===Y||Y&536870912?e===Eo:!1}function Gd(){var e=I.H;return I.H=uc,e===null?uc:e}function Kd(){var e=I.A;return I.A=Xu,e}function qd(){od=4,nd||(Y&4194048)!==Y&&To.current!==null||(rd=!0),!(sd&134217727)&&!(cd&134217727)||$u===null||zd($u,Y,ud,!1)}function Jd(e,t,n){var r=Qu;Qu|=2;var i=Gd(),a=Kd();($u!==e||Y!==t)&&(vd=null,Hd(e,t)),t=!1;var o=od;a:do try{if(ed!==0&&J!==null){var s=J,c=td;switch(ed){case 8:Vd(),o=6;break a;case 3:case 2:case 9:case 6:To.current===null&&(t=!0);var l=ed;if(ed=0,td=null,ef(e,s,c,l),n&&rd){o=0;break a}break;default:l=ed,ed=0,td=null,ef(e,s,c,l)}}Yd(),o=od;break}catch(t){Ud(e,t)}while(1);return t&&e.shellSuspendCounter++,da=ua=null,Qu=r,I.H=i,I.A=a,J===null&&($u=null,Y=0,vi()),o}function Yd(){for(;J!==null;)Qd(J)}function Xd(e,t){var n=Qu;Qu|=2;var r=Gd(),a=Kd();$u!==e||Y!==t?(vd=null,_d=Ve()+500,Hd(e,t)):rd=ct(e,t);a:do try{if(ed!==0&&J!==null){t=J;var o=td;b:switch(ed){case 1:ed=0,td=null,ef(e,t,o,1);break;case 2:case 9:if(qa(o)){ed=0,td=null,$d(t);break}t=function(){ed!==2&&ed!==9||$u!==e||(ed=7),Of(e)},o.then(t,t);break a;case 3:ed=7;break a;case 4:ed=5;break a;case 7:qa(o)?(ed=0,td=null,$d(t)):(ed=0,td=null,ef(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Qm(s):c.stateNode.complete){ed=0,td=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,tf(u))}break b}}ed=0,td=null,ef(e,t,o,5);break;case 6:ed=0,td=null,ef(e,t,o,6);break;case 8:Vd(),od=6;break a;default:throw Error(i(462))}}Zd();break}catch(t){Ud(e,t)}while(1);return da=ua=null,I.H=r,I.A=a,Qu=n,J===null?($u=null,Y=0,vi(),od):0}function Zd(){for(;J!==null&&!ze();)Qd(J)}function Qd(e){var t=cl(e.alternate,e,ad);e.memoizedProps=e.pendingProps,t===null?tf(e):J=t}function $d(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:es(t);var r=t;r===Zi&&(K?(ia(r),r.tag===5&&r.stateNode!=null&&(Qi=r.stateNode)):(ia(r),K=!0));default:_l(n,t),t=J=ki(t,ad),t=cl(n,t,ad)}e.memoizedProps=e.pendingProps,t===null?tf(e):J=t}function ef(e,t,n,r){da=ua=null,es(t),$a=null,eo=0;var i=t.return;try{if(Dc(e,i,t,n,Y)){od=1,Sc(e,Ii(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;od=1,Sc(e,Ii(n,e.current)),J=null;return}t.flags&32768?(K||r===1?e=!0:rd||Y&536870912?e=!1:(nd=e=!0,(r===2||r===9||r===3||r===6)&&(r=To.current,r!==null&&r.tag===13&&(r.flags|=16384))),nf(t,e)):tf(t)}function tf(e){var t=e;do{if(t.flags&32768){nf(t,nd);return}e=t.return;var n=hl(t.alternate,t,ad);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);od===0&&(od=5)}function nf(e,t){do{var n=gl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);od=6,J=null}function rf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do ff();while(bd!==0);if(Qu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===$u&&(J=$u=null,Y=0),Sd=t,xd=e,Cd=n,Td=a,Ed=r,af(e,t,n,s,c,l,f)}}function af(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(wd=s,s|=_i,mt(e,n,s,r,i,a),Od=null,(n&335544064)===n?(kd=Aa(e),r=10262):(kd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,xf(Ge,function(){return pf(),null})):(e.callbackNode=null,e.callbackPriority=0),Il=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=I.T,I.T=null,i=L.p,L.p=2,a=Qu,Qu|=4;try{du(e,t,n)}finally{Qu=a,L.p=i,I.T=r}}bd=1,Il?Dd=Fp(o,e.containerInfo,kd,cf,lf,sf,uf,pf,of,null,null):(cf(),lf(),uf())}function of(e){if(bd!==0){var t=xd.onRecoverableError;t(e,{componentStack:null})}}function sf(){bd===3&&(bd=0,Mu(Sd,xd),bd=4)}function cf(){if(bd===1){bd=0;var e=xd,t=Sd,n=Cd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=I.T,I.T=null;var i=L.p;L.p=2;var a=Qu;Qu|=4;try{cu=lu=!1,Ou(t,e,n),n=dp;var o=W(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Hr(s.ownerDocument.documentElement,s)){if(c!==null&&Ur(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Vr(s,h),v=Vr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}yh=!!up,dp=up=null}finally{Qu=a,L.p=i,I.T=r}}e.current=t,bd=2}}function lf(){if(bd===2){bd=0;var e=xd,t=Sd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Qu;Qu|=4;try{pu(e,t.alternate,t)}finally{Qu=i,L.p=r,I.T=n}}bd=3}}function uf(){if(bd===4||bd===3){bd=0;var e=Dd;Dd=null,Be();var t=xd,n=Sd,r=Cd,i=Ed,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?bd=5:(bd=0,Sd=xd=null,df(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),yt(r),n=n.stateNode,Ze&&typeof Ze.onCommitFiberRoot==`function`)try{Ze.onCommitFiberRoot(Xe,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=I.T,a=L.p,L.p=2,I.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{I.T=n,L.p=a}}if(i=Od,o=kd,kd=null,i!==null&&(Od=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Cd&3&&ff(),Of(t),a=t.pendingLanes,r&261930&&a&42?t===jd?Ad++:(Ad=0,jd=t):(Ad=0,jd=null),kf(0,!1)}}function df(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Da(t)))}function ff(){return Dd!==null&&(Dd.skipTransition(),Dd=null),cf(),lf(),uf(),pf()}function pf(){if(bd!==5)return!1;var e=xd,t=wd;wd=0;var n=yt(Cd),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=Td,Td=null;var o=xd,s=Cd;if(bd=0,Sd=xd=null,Cd=0,Qu&6)throw Error(i(331));var c=Qu;if(Qu|=4,qu(o.current),zu(o,o.current,s,n),Qu=c,kf(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot==`function`)try{Ze.onPostCommitFiberRoot(Xe,o)}catch{}return!0}finally{L.p=a,I.T=r,df(e,t)}}function mf(e,t,n){t=Ii(n,t),t=wc(e.stateNode,t,2),e=fo(e,t,2),e!==null&&(pt(e,2),Of(e))}function hf(e,t,n){if(e.tag===3)mf(e,e,n);else for(;t!==null;){if(t.tag===3){mf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=Ii(n,e),n=Tc(2),r=fo(t,n,2),r!==null&&(Ec(n,r,t,e),pt(r,2),Of(r));break}}t=t.return}}function gf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(id=!0,i.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$u===e&&(Y&n)===n&&(od===4||od===3&&(Y&62914560)===Y&&300>Ve()-hd?Qu&2?ld|=n:Hd(e,0):ld|=n,dd===Y&&(dd=0)),Of(e)}function vf(e,t){t===0&&(t=dt()),e=xi(e,t),e!==null&&(pt(e,t),Of(e))}function yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vf(e,n)}function bf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),vf(e,n)}function xf(e,t){return Le(e,t)}var Sf=null,Cf=null,wf=!1,Tf=!1,Ef=!1,Df=0;function Of(e){e!==Cf&&e.next===null&&(Cf===null?Sf=Cf=e:Cf=Cf.next=e),Tf=!0,wf||(wf=!0,Ff())}function kf(e,t){if(!Ef&&Tf){Ef=!0;do for(var n=!1,r=Sf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-$e(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Pf(r,a))}else a=Y,a=st(r,r===$u?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ct(r,a)||(n=!0,Pf(r,a))}r=r.next}while(n);Ef=!1}}function Af(){jf()}function jf(){Tf=wf=!1;var e=0;Df!==0&&vp()&&(e=Df);for(var t=Ve(),n=null,r=Sf;r!==null;){var i=r.next,a=Mf(r,t);a===0?(r.next=null,n===null?Sf=i:n.next=i,i===null&&(Cf=n)):(n=r,(e!==0||a&3)&&(Tf=!0)),r=i}bd!==0&&bd!==5||kf(e,!1),Df!==0&&(Df=0)}function Mf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-$e(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ut(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=$u,n=Y,n=st(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(ed===2||ed===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Re(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ct(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Re(r),yt(n)){case 2:case 8:n=We;break;case 32:n=Ge;break;case 268435456:n=qe;break;default:n=Ge}return r=Nf.bind(null,e),n=Le(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Re(r),e.callbackPriority=2,e.callbackNode=null,2}function Nf(e,t){if(bd!==0&&bd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ff()&&e.callbackNode!==n)return null;var r=Y;return r=st(e,e===$u?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Id(e,r,t),Mf(e,Ve()),e.callbackNode!=null&&e.callbackNode===n?Nf.bind(null,e):null)}function Pf(e,t){if(ff())return null;Id(e,t,!0)}function Ff(){Cp(function(){Qu&6?Le(Ue,Af):jf()})}function If(){if(Df===0){var e=Na;e===0&&(e=rt,rt<<=1,!(rt&261888)&&(rt=256)),Df=e}return Df}function Lf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:yn(e)}function Rf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Lf((i[wt]||null).action),o=r.submitter;o&&(t=(t=o[wt]||null)?Lf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Df!==0){var e=new FormData(i,o);Xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var zf=0;zf<li.length;zf++){var Bf=li[zf];ui(Bf.toLowerCase(),`on`+(Bf[0].toUpperCase()+Bf.slice(1)))}ui(ti,`onAnimationEnd`),ui(ni,`onAnimationIteration`),ui(ri,`onAnimationStart`),ui(`dblclick`,`onDoubleClick`),ui(`focusin`,`onFocus`),ui(`focusout`,`onBlur`),ui(ii,`onTransitionRun`),ui(ai,`onTransitionStart`),ui(oi,`onTransitionCancel`),ui(si,`onTransitionEnd`),Ht(`onMouseEnter`,[`mouseout`,`mouseover`]),Ht(`onMouseLeave`,[`mouseout`,`mouseover`]),Ht(`onPointerEnter`,[`pointerout`,`pointerover`]),Ht(`onPointerLeave`,[`pointerout`,`pointerover`]),Vt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Vt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Vt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Vt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Vt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Vt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Vf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Hf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Vf));function Uf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){hi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){hi(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[Et];n===void 0&&(n=t[Et]=new Set);var r=e+`__bubble`;n.has(r)||(qf(t,e,2,!1),n.add(r))}function Wf(e,t,n){var r=0;t&&(r|=4),qf(n,e,r,t)}var Gf=`_reactListening`+Math.random().toString(36).slice(2);function Kf(e){if(!e[Gf]){e[Gf]=!0,zt.forEach(function(t){t!==`selectionchange`&&(Hf.has(t)||Wf(t,!1,e),Wf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gf]||(t[Gf]=!0,Wf(`selectionchange`,!1,t))}}function qf(e,t,n,r){switch(Eh(t)){case 2:var i=bh;break;case 8:i=xh;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!An||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Jf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Nt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Dn(function(){var r=a,i=Sn(n),s=[];a:{var c=ci.get(e);if(c!==void 0){var l=Bn,u=e;switch(e){case`keypress`:if(R(n)===0)break a;case`keydown`:case`keyup`:l=nr;break;case`focusin`:u=`focus`,l=Jn;break;case`focusout`:u=`blur`,l=Jn;break;case`beforeblur`:case`afterblur`:l=Jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=z;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ar;break;case ti:case ni:case ri:l=Yn;break;case si:l=or;break;case`scroll`:case`scrollend`:l=Hn;break;case`wheel`:l=sr;break;case`copy`:case`cut`:case`paste`:l=Xn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=rr;break;case`submit`:l=ir;break;case`toggle`:case`beforetoggle`:l=cr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=On(m,p),g!=null&&d.push(Yf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==xn&&(u=n.relatedTarget||n.fromElement)&&(Nt(u)||u[Tt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Nt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=z,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=rr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ft(c),h=l==null?u:Ft(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Nt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ee(c,l,Zf):null,c!==null&&Qf(s,u,c,d,!1),l!==null&&f!==null&&Qf(s,f,l,d,!0)))}a:{if(c=r?Ft(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Er;else if(xr(c)){if(Dr)_=Ir;else{_=Pr;var v=Nr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&gn(r.elementType)&&(_=Er):_=Fr;if(_&&=_(e,r)){H(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ft(r):window,e){case`focusin`:(xr(v)||v.contentEditable===`true`)&&(Gr=v,Kr=r,qr=null);break;case`focusout`:qr=Kr=Gr=null;break;case`mousedown`:Jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Jr=!1,Yr(s,n,i);break;case`selectionchange`:if(Wr)break;case`keydown`:case`keyup`:Yr(s,n,i)}var y;if(ur)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else V?gr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(pr&&n.locale!==`ko`&&(V||b!==`onCompositionStart`?b===`onCompositionEnd`&&V&&(y=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,V=!0)),v=Xf(r,b),0<v.length&&(b=new Zn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=_r(n),y!==null&&(b.data=y)))),(y=fr?vr(e,n):yr(e,n))&&(b=Xf(r,`onBeforeInput`),0<b.length&&(v=new Zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Rf(s,e,r,n,i)}Uf(s,t)})}function Yf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=On(e,n),i!=null&&r.unshift(Yf(e,i,a)),i=On(e,t),i!=null&&r.push(Yf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Zf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=On(n,a),l!=null&&o.unshift(Yf(n,l,c))):i||(l=On(n,a),l!=null&&o.push(Yf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $f=/\r\n?/g,ep=/\u0000|\uFFFD/g;function tp(e){return(typeof e==`string`?e:``+e).replace($f,`
`).replace(ep,``)}function np(e,t){return t=tp(t),tp(e)===t}function rp(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&fn(e,``+r);else return;break;case`className`:Xt(e,`class`,r);break;case`tabIndex`:Xt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Xt(e,n,r);break;case`style`:hn(e,r,o);return;case`data`:if(t!==`object`){Xt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&rp(e,t,`name`,a.name,a,null),rp(e,t,`formEncType`,a.formEncType,a,null),rp(e,t,`formMethod`,a.formMethod,a,null),rp(e,t,`formTarget`,a.formTarget,a,null)):(rp(e,t,`encType`,a.encType,a,null),rp(e,t,`method`,a.method,a,null),rp(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bn);return;case`onScroll`:r!=null&&X(`scroll`,e);return;case`onScrollEnd`:r!=null&&X(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=yn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),Yt(e,`popover`,r);break;case`xlinkActuate`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Yt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=_n.get(n)||n,Yt(e,n,r);else return}qt=!0}function ip(e,t,n,r,a,o){switch(n){case`style`:hn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)fn(e,``+r);else return;break;case`onScroll`:r!=null&&X(`scroll`,e);return;case`onScrollEnd`:r!=null&&X(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=bn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[wt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}qt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Yt(e,n,r)}return}qt=!0}function ap(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:rp(e,t,o,s,n,null)}}a&&rp(e,t,`srcSet`,n.srcSet,n,null),r&&rp(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:rp(e,t,r,d,n,null)}}sn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:rp(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&ln(e,!!r,n,!0):ln(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:rp(e,t,s,c,n,null)}dn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:rp(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<Vf.length;r++)X(Vf[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:rp(e,t,u,r,n,null)}return;default:if(gn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ip(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&rp(e,t,c,r,n,null))}var op={};function sp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||rp(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(qt=!0),o=m;break;case`name`:m!==f&&(qt=!0),a=m;break;case`checked`:m!==f&&(qt=!0),u=m;break;case`defaultChecked`:m!==f&&(qt=!0),d=m;break;case`value`:m!==f&&(qt=!0),s=m;break;case`defaultValue`:m!==f&&(qt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&rp(e,t,p,m,r,f)}}on(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||rp(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(qt=!0),p=o;break;case`defaultValue`:o!==l&&(qt=!0),c=o;break;case`multiple`:o!==l&&(qt=!0),s=o;default:o!==l&&rp(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?ln(e,!!n,n?[]:``,!1):ln(e,!!n,t,!0)):ln(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:rp(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(qt=!0),p=a;break;case`defaultValue`:a!==o&&(qt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&rp(e,t,s,a,r,o)}un(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:rp(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(qt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:rp(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&rp(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:rp(e,t,u,p,r,m)}return;default:if(gn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ip(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ip(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&rp(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||rp(e,t,f,p,r,m)}function cp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function lp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&cp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&cp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var up=null,dp=null;function fp(e){return e.nodeType===9?e:e.ownerDocument}function pp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function mp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function hp(e,t,n,r){return n=fp(n).createElement(e),n[Ct]=r,n[wt]=t,ap(n,e,t),Lt(n),n}function gp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function vp(){var e=window.event;return e&&e.type===`popstate`?e!==_p&&(_p=e,!0):(_p=null,!1)}var yp=typeof setTimeout==`function`?setTimeout:void 0,bp=typeof clearTimeout==`function`?clearTimeout:void 0,xp=typeof Promise==`function`?Promise:void 0,Sp=typeof requestAnimationFrame==`function`?requestAnimationFrame:yp,Cp=typeof queueMicrotask==`function`?queueMicrotask:xp===void 0?yp:function(e){return xp.resolve(null).then(e).catch(wp)};function wp(e){setTimeout(function(){throw e})}function Tp(e){return e===`head`}function Ep(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Gh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)bm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,bm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[At]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&bm(e.ownerDocument.body)}n=i}while(n);Gh(t)}function Dp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Op(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function kp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Ap(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function jp(e){return Ap(e.getBoundingClientRect(),getComputedStyle(e),e)}function Mp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Ap(t,n,e)}function Np(e){return e.documentElement.clientHeight}function Pp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Fp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Np(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=$m(f),u>nh){s.length=o;break}f=new Promise(Pp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Ip(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Ip.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:E({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ip.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Ip.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lp(e){return{name:e,group:new Ip(`group`,e),imagePair:new Ip(`image-pair`,e),old:new Ip(`old`,e),new:new Ip(`new`,e)}}function Rp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Rp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Up(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Vp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,zp,e,s,r)}this._eventListeners=a}};function zp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Rp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Up(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Vp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Bp,e,n,i),r.splice(t,1),a!==null&&a()}};function Bp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Vp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Up(e,t,n,r){if(e.length===0)return-1;r=Hp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Hp(a.optionsOrUseCapture)===r)return i}return-1}Rp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Rp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),gm(e,t))}Rp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Gp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Wp(t[n],e);n--);};function Gp(e,t){return t.push(e),!1}Rp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Kp,e,void 0,void 0))};function Kp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Rp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,qp,e,void 0,void 0)};function qp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Rp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Jp,e,void 0,void 0);for(var n=t=0;n<Yp.length;n++){var r=Yp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Yp[t++]=r}Yp.length=t}};function Jp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Yp=[],Xp=!1;function Zp(e,t,n){Yp.push({fragmentInstance:e,observer:t,instance:n}),Xp||(Xp=!0,_m(function(){Xp=!1;var e=Yp;Yp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Rp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Qp,e,void 0,void 0),e};function Qp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Rp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Rp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Gp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$p(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $p(e,t,n,r,i){var a=Nt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ee(n,a,T),t===null?t=!1:(m(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ee(r,a,T),t===null?t=!1:(m(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function em(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Rp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Gp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),em(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),em(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function tm(e,t){return e=b(e),nm(e,t),!1}function nm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Yp.length;i++){var a=Yp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Yp[r++]=a)}Yp.length=r,n.observe(e)}),nm(e,t))}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Zp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function am(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:am(n),Mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function om(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[At])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=fm(e.nextSibling),e===null)break}return null}function sm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=fm(e.nextSibling),e===null))return null;return e}function cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=fm(e.nextSibling),e===null))return null;return e}function lm(e){return e.data===`$?`||e.data===`$~`}function um(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function dm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function fm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pm=null;function mm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return fm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function _m(e){Sp(function(){Sp(function(t){return e(t)})})}function vm(e,t,n){switch(t=fp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function ym(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&rp(e,t,r,null,op,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===bn&&(e.onclick=null),Mt(e)}function bm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mt(e)}var xm=new Map,Sm=new Set;function Cm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var wm=L.d;L.d={f:Tm,r:Em,D:km,C:Am,L:jm,m:Mm,X:Pm,S:Nm,M:Fm};function Tm(){var e=wm.f(),t=Bd();return e||t}function Em(e){var t=Pt(e);t!==null&&t.tag===5&&t.type===`form`?Qs(t):wm.r(e)}var Dm=typeof document>`u`?null:document;function Om(e,t,n){var r=Dm;if(r&&typeof t==`string`&&t){var i=an(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Sm.has(i)||(Sm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ap(t,`link`,e),Lt(t),r.head.appendChild(t)))}}function km(e){wm.D(e),Om(`dns-prefetch`,e,null)}function Am(e,t){wm.C(e,t),Om(`preconnect`,e,t)}function jm(e,t,n){wm.L(e,t,n);var r=Dm;if(r&&e&&t){var i=`link[rel="preload"][as="`+an(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+an(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+an(n.imageSizes)+`"]`)):i+=`[href="`+an(e)+`"]`;var a=i;switch(t){case`style`:a=Lm(e);break;case`script`:a=Vm(e)}if(!(xm.has(a)||(e=E({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),xm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Rm(a))||t===`script`&&r.querySelector(Hm(a))))){var o=r.createElement(`link`);ap(o,`link`,e),t===`style`&&(o[jt]=!0,o.onload=o.onerror=function(){Rt(o)}),Lt(o),r.head.appendChild(o)}}}function Mm(e,t){wm.m(e,t);var n=Dm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+an(r)+`"][href="`+an(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Vm(e)}if(!xm.has(a)&&(e=E({rel:`modulepreload`,href:e},t),xm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Hm(a)))return}r=n.createElement(`link`),ap(r,`link`,e),Lt(r),n.head.appendChild(r)}}}function Nm(e,t,n){wm.S(e,t,n);var r=Dm;if(r&&e){var i=It(r).hoistableStyles,a=Lm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Rm(a)))s.loading=5;else{e=E({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=xm.get(a))&&Gm(e,n);var c=o=r.createElement(`link`);Lt(c),ap(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Wm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Pm(e,t){wm.X(e,t);var n=Dm;if(n&&e){var r=It(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=E({src:e,async:!0},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),Lt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t){wm.M(e,t);var n=Dm;if(n&&e){var r=It(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=E({src:e,async:!0,type:`module`},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),Lt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Im(e,t,n,r){var a=(a=Ce.current)?Cm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Lm(n.href),t=It(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Lm(n.href);var o=It(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Rm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=xm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xm.set(e,o)),Bm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Vm(n),t=It(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Lm(e){return`href="`+an(e)+`"`}function Rm(e){return`link[rel="stylesheet"][`+e+`]`}function zm(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Bm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[jt]){r.loading=1;return}}else t=e.createElement(`link`),t[jt]=!0,t.onload=t.onerror=Rt.bind(null,t),ap(t,`link`,n),Lt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Vm(e){return`[src="`+an(e)+`"]`}function Hm(e){return`script[async]`+e}function Um(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+an(n.href)+`"]`);if(r)return t.instance=r,Lt(r),r;var a=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Lt(r),ap(r,`style`,a),Wm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Lm(n.href);var o=e.querySelector(Rm(a));if(o)return t.state.loading|=4,t.instance=o,Lt(o),o;r=zm(n),(a=xm.get(a))&&Gm(r,a),o=(e.ownerDocument||e).createElement(`link`),Lt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ap(o,`link`,r),t.state.loading|=4,Wm(o,n.precedence,e),t.instance=o;case`script`:return o=Vm(n.src),(a=e.querySelector(Hm(o)))?(t.instance=a,Lt(a),a):(r=n,(a=xm.get(o))&&(r=E({},n),Km(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Lt(a),ap(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Wm(r,n.precedence,e));return t.instance}function Wm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Km(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var qm=null;function Jm(e,t,n){if(qm===null){var r=new Map,i=qm=new Map;i.set(n,r)}else i=qm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[At]||a[Ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Ym(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Xm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Zm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Qm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function $m(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function eh(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=$m(t),e.suspenseyImages.push(t)),e=oh.bind(e),t.decode().then(e,e))}function th(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Lm(r.href),a=t.querySelector(Rm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ah.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Lt(a);return}a=t.ownerDocument||t,r=zm(r),(i=xm.get(i))&&Gm(r,i),a=a.createElement(`link`),Lt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ap(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ah.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var nh=0;function rh(e,t){return e.stylesheets&&e.count===0&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&nh===0&&(nh=62500*lp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>nh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ih(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ch(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ah(){this.count--,ih(this)}function oh(){this.imgCount--,ih(this)}var sh=null;function ch(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sh=new Map,t.forEach(lh,e),sh=null,ah.call(e))}function lh(e,t){if(!(t.state.loading&4)){var n=sh.get(e);if(n)var r=n.get(null);else{n=new Map,sh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ah.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var uh={$$typeof:N,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function dh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function fh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new dh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ei(3,null,null,t),e.current=a,a.stateNode=e,t=Ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},co(a),e}function ph(e){return e?(e=wi,e):wi}function mh(e,t,n,r,i,a){i=ph(i),r.context===null?r.context=i:r.pendingContext=i,r=uo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=fo(e,r,t),n!==null&&(Fd(n,e,t),po(n,e,t))}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gh(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function _h(e){if(e.tag===13||e.tag===31){var t=xi(e,67108864);t!==null&&Fd(t,e,67108864),gh(e,67108864)}}function vh(e){if(e.tag===13||e.tag===31){var t=Md();t=vt(t);var n=xi(e,t);n!==null&&Fd(n,e,t),gh(e,t)}}var yh=!0;function bh(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,Sh(e,t,n,r)}finally{L.p=a,I.T=i}}function xh(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,Sh(e,t,n,r)}finally{L.p=a,I.T=i}}function Sh(e,t,n,r){if(yh){var i=Ch(r);if(i===null)Jf(e,t,r,wh,n),Fh(e,r);else if(Lh(i,e,t,n,r))r.stopPropagation();else if(Fh(e,r),t&4&&-1<Ph.indexOf(e)){for(;i!==null;){var a=Pt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ot(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-$e(o);s.entanglements[1]|=c,o&=~c}Of(a),!(Qu&6)&&(_d=Ve()+500,kf(0,!1))}}break;case 31:case 13:s=xi(a,2),s!==null&&Fd(s,a,2),Bd(),gh(a,2)}if(a=Ch(r),a===null&&Jf(e,t,r,wh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Jf(e,t,r,null,n)}}function Ch(e){return e=Sn(e),Th(e)}var wh=null;function Th(e){if(wh=null,e=Nt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wh=e,null}function Eh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(He()){case Ue:return 2;case We:return 8;case Ge:case Ke:return 32;case qe:return 268435456;default:return 32}default:return 32}}var Dh=!1,Oh=null,kh=null,Ah=null,jh=new Map,Mh=new Map,Nh=[],Ph=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Fh(e,t){switch(e){case`focusin`:case`focusout`:Oh=null;break;case`dragenter`:case`dragleave`:kh=null;break;case`mouseover`:case`mouseout`:Ah=null;break;case`pointerover`:case`pointerout`:jh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Mh.delete(t.pointerId)}}function Ih(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pt(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lh(e,t,n,r,i){switch(t){case`focusin`:return Oh=Ih(Oh,e,t,n,r,i),!0;case`dragenter`:return kh=Ih(kh,e,t,n,r,i),!0;case`mouseover`:return Ah=Ih(Ah,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return jh.set(a,Ih(jh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Mh.set(a,Ih(Mh.get(a)||null,e,t,n,r,i)),!0}return!1}function Rh(e){var t=Nt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,xt(e.priority,function(){vh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,xt(e.priority,function(){vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ch(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xn=r,n.target.dispatchEvent(r),xn=null}else return t=Pt(n),t!==null&&_h(t),e.blockedOn=n,!1;t.shift()}return!0}function Bh(e,t,n){zh(e)&&n.delete(t)}function Vh(){Dh=!1,Oh!==null&&zh(Oh)&&(Oh=null),kh!==null&&zh(kh)&&(kh=null),Ah!==null&&zh(Ah)&&(Ah=null),jh.forEach(Bh),Mh.forEach(Bh)}function Hh(e,n){e.blockedOn===n&&(e.blockedOn=null,Dh||(Dh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vh)))}var Uh=null;function Wh(e){Uh!==e&&(Uh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Uh===e&&(Uh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Th(r||n)===null)continue;break}var a=Pt(n);a!==null&&(e.splice(t,3),t-=3,Xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Gh(e){function t(t){return Hh(t,e)}Oh!==null&&Hh(Oh,e),kh!==null&&Hh(kh,e),Ah!==null&&Hh(Ah,e),jh.forEach(t),Mh.forEach(t);for(var n=0;n<Nh.length;n++){var r=Nh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nh.length&&(n=Nh[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&Nh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[wt]||null;if(typeof a==`function`)o||Wh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[wt]||null)s=o.formAction;else if(Th(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Wh(n)}}}function Kh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function qh(e){this._internalRoot=e}Jh.prototype.render=qh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;mh(n,Md(),e,t,null,null)},Jh.prototype.unmount=qh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),Bd(),t[Tt]=null}};function Jh(e){this._internalRoot=e}Jh.prototype.unstable_scheduleHydration=function(e){if(e){var t=bt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nh.length&&t!==0&&t<Nh[n].priority;n++);Nh.splice(n,0,e),n===0&&Rh(e)}};var Yh=n.version;if(Yh!==`19.3.0`)throw Error(i(527,Yh,`19.3.0`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Xh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zh.isDisabled&&Zh.supportsFiber)try{Xe=Zh.inject(Xh),Ze=Zh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=yc,s=bc,c=xc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=fh(e,1,!1,null,null,n,r,null,o,s,c,Kh),e[Tt]=t.current,Kf(e),new qh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d()),y=_(),b=`import type { ComponentProps, ReactNode } from 'react';
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
`,ee=`"use client"

import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
`,E=`"use client"

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
`,D=`"use client"

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
`,O=`"use client"

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
`,k=`"use client"

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
`,A=`"use client"

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
`,j=`"use client"

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
`,te=`"use client"

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
`,M=`"use client"

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
`,N=`"use client"

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
`,P=`"use client"

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
`,F=`"use client"

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
`,ne=`"use client"

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
`,re=`"use client"

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
`,ie=`"use client"

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
`,ae=`"use client"

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
`,oe=`"use client"

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
`,se=`"use client"

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
`,ce=`"use client"

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
`,le=`"use client"

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
`,ue=`"use client"

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
`,de=`"use client"

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
`,fe=`"use client"

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
`,pe=`"use client"

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
`,me=`"use client"

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
`,I=`"use client"

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
`,L=`"use client"

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
`,he=`"use client"

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
`,ge=`"use client"

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
`,_e=`"use client"

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
`,ve=`"use client"

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
`,ye=`"use client"

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
`,be=`"use client"

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
`,xe=`"use client"

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
`,Se=`"use client"

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
`,Ce=`"use client"

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
`,we=`"use client"

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
`,Te=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Ee=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),De={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Oe=(0,v.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,v.createElement)(`svg`,{ref:c,...De,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ee(`lucide`,i),...s},[...o.map(([e,t])=>(0,v.createElement)(e,t)),...Array.isArray(a)?a:[a]])),ke=(e,t)=>{let n=(0,v.forwardRef)(({className:n,...r},i)=>(0,v.createElement)(Oe,{ref:i,iconNode:t,className:Ee(`lucide-${Te(e)}`,n),...r}));return n.displayName=`${e}`,n},Ae=ke(`Anchor`,[[`path`,{d:`M12 22V8`,key:`qkxhtm`}],[`path`,{d:`M5 12H2a10 10 0 0 0 20 0h-3`,key:`1hv3nh`}],[`circle`,{cx:`12`,cy:`5`,r:`3`,key:`rqqgnr`}]]),je=ke(`ArrowDown`,[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]),Me=ke(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Ne=ke(`ArrowUpRight`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),Pe=ke(`ArrowUp`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),Fe=ke(`Calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),Ie=ke(`Check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Le=ke(`ChevronDown`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Re=ke(`ChevronLeft`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ze=ke(`ChevronRight`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),Be=ke(`ChevronUp`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),Ve=ke(`ChevronsUpDown`,[[`path`,{d:`m7 15 5 5 5-5`,key:`1hf1tw`}],[`path`,{d:`m7 9 5-5 5 5`,key:`sgt6xg`}]]),He=ke(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ue=ke(`Circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),We=ke(`Copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),Ge=ke(`Cpu`,[[`rect`,{width:`16`,height:`16`,x:`4`,y:`4`,rx:`2`,key:`14l7u7`}],[`rect`,{width:`6`,height:`6`,x:`9`,y:`9`,rx:`1`,key:`5aljv4`}],[`path`,{d:`M15 2v2`,key:`13l42r`}],[`path`,{d:`M15 20v2`,key:`15mkzm`}],[`path`,{d:`M2 15h2`,key:`1gxd5l`}],[`path`,{d:`M2 9h2`,key:`1bbxkp`}],[`path`,{d:`M20 15h2`,key:`19e6y8`}],[`path`,{d:`M20 9h2`,key:`19tzq7`}],[`path`,{d:`M9 2v2`,key:`165o2o`}],[`path`,{d:`M9 20v2`,key:`i2bqo8`}]]),Ke=ke(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),qe=ke(`Ellipsis`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]]),Je=ke(`Info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Ye=ke(`Leaf`,[[`path`,{d:`M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,key:`nnexq3`}],[`path`,{d:`M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`,key:`mt58a7`}]]),Xe=ke(`LoaderCircle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Ze=ke(`Megaphone`,[[`path`,{d:`m3 11 18-5v12L3 14v-3z`,key:`n962bs`}],[`path`,{d:`M11.6 16.8a3 3 0 1 1-5.8-1.6`,key:`1yl0tm`}]]),Qe=ke(`Moon`,[[`path`,{d:`M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`,key:`a7tn18`}]]),$e=ke(`OctagonX`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),et=ke(`Save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),tt=ke(`Search`,[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`path`,{d:`m21 21-4.3-4.3`,key:`1qie3q`}]]),nt=ke(`Sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),rt=ke(`TriangleAlert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),it=ke(`Waves`,[[`path`,{d:`M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`knzxuh`}],[`path`,{d:`M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`2jd2cc`}],[`path`,{d:`M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`rd2r6e`}]]),at=ke(`Wind`,[[`path`,{d:`M12.8 19.6A2 2 0 1 0 14 16H2`,key:`148xed`}],[`path`,{d:`M17.5 8a2.5 2.5 0 1 1 2 4H2`,key:`1u4tom`}],[`path`,{d:`M9.8 4.4A2 2 0 1 1 11 8H2`,key:`75valh`}]]),ot=ke(`Wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`,key:`cbrjhi`}]]),st=ke(`X`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ct=l(h(),1);function lt(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}var ut=e=>{switch(e){case`success`:return pt;case`info`:return ht;case`warning`:return mt;case`error`:return gt;default:return null}},dt=Array(12).fill(0),ft=({visible:e,className:t})=>v.createElement(`div`,{className:[`sonner-loading-wrapper`,t].filter(Boolean).join(` `),"data-visible":e},v.createElement(`div`,{className:`sonner-spinner`},dt.map((e,t)=>v.createElement(`div`,{className:`sonner-loading-bar`,key:`spinner-bar-${t}`})))),pt=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,clipRule:`evenodd`})),mt=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,clipRule:`evenodd`})),ht=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,clipRule:`evenodd`})),gt=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`,"aria-hidden":`true`},v.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,clipRule:`evenodd`})),_t=v.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`},v.createElement(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),v.createElement(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})),vt=()=>{let[e,t]=v.useState(document.hidden);return v.useEffect(()=>{let e=()=>{t(document.hidden)};return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]),e},yt=1,bt=100,xt=e=>typeof e?.id==`number`||e?.id?.length>0?e.id:yt++,St=new class{constructor(){this.subscribe=e=>(this.subscribers.push(e),this.getActiveToasts().forEach(t=>e(t)),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e],this.trimHistory()},this.trimHistory=()=>{let e=this.toasts.length-bt;e<=0||(this.toasts=this.toasts.filter(t=>e>0&&this.dismissedToasts.has(t.id)?(this.dismissedToasts.delete(t.id),e--,!1):!0))},this.create=e=>{let{message:t,...n}=e,r=xt(e),i=this.pendingDismissals.get(r);i!==void 0&&(cancelAnimationFrame(i),this.pendingDismissals.delete(r),this.dismissedToasts.delete(r));let a=this.dismissedToasts.has(r),o=e.dismissible===void 0||e.dismissible;return a&&(this.dismissedToasts.delete(r),this.toasts=this.toasts.filter(e=>e.id!==r)),!a&&this.toasts.find(e=>e.id===r)?this.toasts=this.toasts.map(n=>n.id===r?(this.publish({...n,...e,id:r,title:t}),{...n,...e,id:r,dismissible:o,title:t}):n):this.addToast({title:t,...n,dismissible:o,id:r}),r},this.dismiss=e=>{if(e==null)return this.getActiveToasts().forEach(e=>{this.dismissedToasts.add(e.id),this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),e;this.dismissedToasts.add(e);let t=this.pendingDismissals.get(e);return t!==void 0&&cancelAnimationFrame(t),this.pendingDismissals.set(e,requestAnimationFrame(()=>{this.pendingDismissals.delete(e),this.subscribers.forEach(t=>t({id:e,dismiss:!0}))})),e},this.message=(e,t)=>this.create({...t,message:e,type:void 0}),this.error=(e,t)=>this.create({...t,message:e,type:`error`}),this.success=(e,t)=>this.create({...t,type:`success`,message:e}),this.info=(e,t)=>this.create({...t,type:`info`,message:e}),this.warning=(e,t)=>this.create({...t,type:`warning`,message:e}),this.loading=(e,t)=>this.create({...t,type:`loading`,message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:`loading`,message:t.loading,description:typeof t.description==`function`?void 0:t.description}));let r=Promise.resolve(e instanceof Function?e():e),i=n!==void 0,a,o=r.then(async e=>{if(a=[`resolve`,e],v.isValidElement(e))i=!1,this.create({id:n,type:`default`,message:e});else if(wt(e)&&!e.ok){i=!1;let r=typeof t.error==`function`?await t.error(`HTTP error! status: ${e.status}`):t.error,a=typeof t.description==`function`?await t.description(`HTTP error! status: ${e.status}`):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(e instanceof Error){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(t.success!==void 0){i=!1;let r=typeof t.success==`function`?await t.success(e):t.success,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`success`,description:a,...o})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!v.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}}).finally(()=>{i&&(this.dismiss(n),n=void 0),t.finally==null||t.finally.call(t)}),s=()=>new Promise((e,t)=>o.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t));return typeof n!=`string`&&typeof n!=`number`?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=xt(t);return this.create({...t,jsx:e(n),id:n,type:void 0}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set,this.pendingDismissals=new Map}},Ct=(e,t)=>St.message(e,t),wt=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`,Tt=Object.assign(Ct,{success:St.success,info:St.info,warning:St.warning,error:St.error,custom:St.custom,message:St.message,promise:St.promise,dismiss:St.dismiss,loading:St.loading},{getHistory:()=>St.toasts,getToasts:()=>St.getActiveToasts()});lt(`[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`);function Et(e){return e.label!==void 0}var Dt=3,Ot=`24px`,kt=`16px`,At=4e3,jt=356,Mt=14,Nt=45,Pt=200;function Ft(...e){return e.filter(Boolean).join(` `)}function It(e){let[t,n]=e.split(`-`),r=[];return t&&r.push(t),n&&r.push(n),r}var Lt=e=>{let{invert:t,toast:n,unstyled:r,interacting:i,setHeights:a,visibleToasts:o,heights:s,index:c,toasts:l,expanded:u,removeToast:d,defaultRichColors:f,closeButton:p,style:m,cancelButtonStyle:h,actionButtonStyle:g,className:_=``,descriptionClassName:y=``,duration:b,position:x,gap:S,expandByDefault:C,classNames:w,icons:T,closeButtonAriaLabel:ee=`Close toast`}=e,[E,D]=v.useState(null),[O,k]=v.useState(null),[A,j]=v.useState(!1),[te,M]=v.useState(!1),[N,P]=v.useState(!1),[F,ne]=v.useState(!1),[re,ie]=v.useState(!1),[ae,oe]=v.useState(0),[se,ce]=v.useState(0),le=v.useRef(n.duration||b||At),ue=v.useRef(null),de=v.useRef(null),fe=c===0,pe=c+1<=o,me=n.type,I=me??`default`,L=n.dismissible!==!1,he=n.className||``,ge=n.descriptionClassName||``,_e=v.useMemo(()=>s.findIndex(e=>e.toastId===n.id)||0,[s,n.id]),ve=v.useMemo(()=>n.closeButton??p,[n.closeButton,p]),ye=v.useMemo(()=>n.duration||b||At,[n.duration,b]),be=v.useRef(0),xe=v.useRef(0),Se=v.useRef(0),Ce=v.useRef(null),[we,Te]=x.split(`-`),Ee=v.useMemo(()=>s.reduce((e,t,n)=>n>=_e?e:e+t.height,0),[s,_e]),De=vt(),Oe=v.useMemo(()=>e.swipeDirections??It(x),[e.swipeDirections,x]),ke=n.invert||t,Ae=me===`loading`;xe.current=v.useMemo(()=>_e*S+Ee,[_e,Ee]),v.useEffect(()=>{le.current=ye},[ye]),v.useEffect(()=>{j(!0)},[]),v.useEffect(()=>{let e=de.current;if(e){let t=e.getBoundingClientRect().height;return ce(t),a(e=>[{toastId:n.id,height:t,position:n.position},...e]),()=>a(e=>e.filter(e=>e.toastId!==n.id))}},[a,n.id]),v.useLayoutEffect(()=>{if(!A)return;let e=de.current,t=e.style.height;e.style.height=`auto`;let r=e.getBoundingClientRect().height;e.style.height=t,ce(r),a(e=>e.find(e=>e.toastId===n.id)?e.map(e=>e.toastId===n.id?{...e,height:r}:e):[{toastId:n.id,height:r,position:n.position},...e])},[A,n.title,n.description,a,n.id,n.jsx,n.action,n.cancel]);let je=v.useCallback(()=>{M(!0),oe(xe.current),a(e=>e.filter(e=>e.toastId!==n.id)),setTimeout(()=>{d(n)},Pt)},[n,d,a,xe]);v.useEffect(()=>{if(n.promise&&me===`loading`||n.duration===1/0||n.type===`loading`)return;let e;return u||i||De?(()=>{if(Se.current<be.current){let e=new Date().getTime()-be.current;le.current-=e}Se.current=new Date().getTime()})():le.current!==1/0&&(be.current=new Date().getTime(),e=setTimeout(()=>{n.onAutoClose==null||n.onAutoClose.call(n,n),je()},le.current)),()=>clearTimeout(e)},[u,i,n,me,De,je]),v.useEffect(()=>{n.delete&&(je(),n.onDismiss==null||n.onDismiss.call(n,n))},[je,n.delete]);function Me(){return T?.loading?v.createElement(`div`,{className:Ft(w?.loader,n?.classNames?.loader,`sonner-loader`),"data-visible":me===`loading`},T.loading):v.createElement(ft,{className:Ft(w?.loader,n?.classNames?.loader),visible:me===`loading`})}let Ne=n.icon||T?.[me]||ut(me);return v.createElement(`li`,{tabIndex:0,ref:de,className:Ft(_,he,w?.toast,n?.classNames?.toast,w?.[I],n?.classNames?.[I]),"data-sonner-toast":``,"data-rich-colors":n.richColors??f,"data-styled":!(n.jsx||n.unstyled||r),"data-mounted":A,"data-promise":!!n.promise,"data-swiped":re,"data-removed":te,"data-visible":pe,"data-y-position":we,"data-x-position":Te,"data-index":c,"data-front":fe,"data-swiping":N,"data-dismissible":L,"data-type":me,"data-invert":ke,"data-swipe-out":F,"data-swipe-direction":O,"data-expanded":!!(u||C&&A),"data-testid":n.testId,style:{"--index":c,"--toasts-before":c,"--z-index":l.length-c,"--offset":`${te?ae:xe.current}px`,"--initial-height":C?`auto`:`${se}px`,...m,...n.style},onDragEnd:()=>{P(!1),D(null),Ce.current=null},onPointerDown:e=>{e.button!==2&&!Ae&&L&&(ue.current=new Date,oe(xe.current),e.target.setPointerCapture(e.pointerId),e.target.tagName!==`BUTTON`&&(P(!0),Ce.current={x:e.clientX,y:e.clientY}))},onPointerUp:()=>{if(F||!L)return;Ce.current=null;let e=Number(de.current?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`,``)||0),t=Number(de.current?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`,``)||0),r=new Date().getTime()-ue.current?.getTime(),i=E===`x`?e:t,a=Math.abs(i)/r;if((E===`x`?Oe.includes(e>0?`right`:`left`):Oe.includes(t>0?`bottom`:`top`))&&(Math.abs(i)>=Nt||a>.11))oe(xe.current),n.onDismiss==null||n.onDismiss.call(n,n),k(E===`x`?e>0?`right`:`left`:t>0?`down`:`up`),je(),ne(!0);else{var o,s;(o=de.current)==null||o.style.setProperty(`--swipe-amount-x`,`0px`),(s=de.current)==null||s.style.setProperty(`--swipe-amount-y`,`0px`),ie(!1),P(!1),D(null)}},onPointerMove:e=>{var t,n;if(!Ce.current||!L||window.getSelection()?.toString().length>0)return;let r=e.clientY-Ce.current.y,i=e.clientX-Ce.current.x;!E&&(Math.abs(i)>1||Math.abs(r)>1)&&D(Math.abs(i)>Math.abs(r)?`x`:`y`);let a={x:0,y:0},o=e=>1/(1.5+Math.abs(e)/20);if(E===`y`){if(Oe.includes(`top`)||Oe.includes(`bottom`)){if(Oe.includes(`top`)&&r<0||Oe.includes(`bottom`)&&r>0)a.y=r;else{let e=r*o(r);a.y=Math.abs(e)<Math.abs(r)?e:r}}}else if(E===`x`&&(Oe.includes(`left`)||Oe.includes(`right`))){if(Oe.includes(`left`)&&i<0||Oe.includes(`right`)&&i>0)a.x=i;else{let e=i*o(i);a.x=Math.abs(e)<Math.abs(i)?e:i}}(Math.abs(a.x)>0||Math.abs(a.y)>0)&&ie(!0),(t=de.current)==null||t.style.setProperty(`--swipe-amount-x`,`${a.x}px`),(n=de.current)==null||n.style.setProperty(`--swipe-amount-y`,`${a.y}px`)}},ve&&!n.jsx&&me!==`loading`?v.createElement(`button`,{"aria-label":ee,"data-disabled":Ae,"data-close-button":!0,onClick:Ae||!L?()=>{}:()=>{je(),n.onDismiss==null||n.onDismiss.call(n,n)},className:Ft(w?.closeButton,n?.classNames?.closeButton)},T?.close??_t):null,(me||n.icon||n.promise)&&n.icon!==null&&(T?.[me]!==null||n.icon)?v.createElement(`div`,{"data-icon":``,className:Ft(w?.icon,n?.classNames?.icon)},me===`loading`?n.icon||Me():n.promise?Me():null,me===`loading`?null:Ne):null,v.createElement(`div`,{"data-content":``,className:Ft(w?.content,n?.classNames?.content)},v.createElement(`div`,{"data-title":``,className:Ft(w?.title,n?.classNames?.title)},n.jsx?n.jsx:typeof n.title==`function`?n.title():n.title),n.description?v.createElement(`div`,{"data-description":``,className:Ft(y,ge,w?.description,n?.classNames?.description)},typeof n.description==`function`?n.description():n.description):null),v.isValidElement(n.cancel)?n.cancel:n.cancel&&Et(n.cancel)?v.createElement(`button`,{"data-button":!0,"data-cancel":!0,style:n.cancelButtonStyle||h,onClick:e=>{Et(n.cancel)&&L&&(n.cancel.onClick==null||n.cancel.onClick.call(n.cancel,e),je())},className:Ft(w?.cancelButton,n?.classNames?.cancelButton)},n.cancel.label):null,v.isValidElement(n.action)?n.action:n.action&&Et(n.action)?v.createElement(`button`,{"data-button":!0,"data-action":!0,style:n.actionButtonStyle||g,onClick:e=>{Et(n.action)&&(n.action.onClick==null||n.action.onClick.call(n.action,e),!e.defaultPrevented&&je())},className:Ft(w?.actionButton,n?.classNames?.actionButton)},n.action.label):null)};function Rt(){if(typeof window>`u`||typeof document>`u`)return`ltr`;let e=document.documentElement.getAttribute(`dir`);return e===`auto`||!e?window.getComputedStyle(document.documentElement).direction:e}function zt(e,t){let n={};return[e,t].forEach((e,t)=>{let r=t===1,i=r?`--mobile-offset`:`--offset`,a=r?kt:Ot;function o(e){[`top`,`right`,`bottom`,`left`].forEach(t=>{n[`${i}-${t}`]=typeof e==`number`?`${e}px`:e})}typeof e==`number`||typeof e==`string`?o(e):typeof e==`object`?[`top`,`right`,`bottom`,`left`].forEach(t=>{e[t]===void 0?n[`${i}-${t}`]=a:n[`${i}-${t}`]=typeof e[t]==`number`?`${e[t]}px`:e[t]}):o(a)}),n}var Bt=v.forwardRef(function(e,t){let{id:n,invert:r,position:i=`bottom-right`,hotkey:a=[`altKey`,`KeyT`],expand:o,closeButton:s,className:c,offset:l,mobileOffset:u,theme:d=`light`,richColors:f,duration:p,style:m,visibleToasts:h=Dt,toastOptions:g,dir:_=Rt(),gap:y=Mt,icons:b,customAriaLabel:x,containerAriaLabel:S=`Notifications`}=e,[C,w]=v.useState([]),T=v.useMemo(()=>n?C.filter(e=>e.toasterId===n):C.filter(e=>!e.toasterId),[C,n]),ee=v.useMemo(()=>Array.from(new Set([i].concat(T.filter(e=>e.position).map(e=>e.position)))),[T,i]),[E,D]=v.useState([]),[O,k]=v.useState(!1),[A,j]=v.useState(!1),[te,M]=v.useState(d===`system`?typeof window<`u`&&window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:d),N=v.useRef(null),P=a.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),F=v.useRef(null),ne=v.useRef(!1),re=v.useCallback(e=>{w(t=>(t.find(t=>t.id===e.id)?.delete||St.dismiss(e.id),t.filter(({id:t})=>t!==e.id)))},[]);return v.useEffect(()=>St.subscribe(e=>{e.dismiss?requestAnimationFrame(()=>{w(t=>t.map(t=>t.id===e.id?{...t,delete:!0}:t))}):setTimeout(()=>{ct.flushSync(()=>{w(t=>{let n=t.findIndex(t=>t.id===e.id);return n===-1?[e,...t]:[...t.slice(0,n),{...t[n],...e},...t.slice(n+1)]})})})}),[]),v.useEffect(()=>{if(d!==`system`){M(d);return}if(d===`system`&&(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?M(`dark`):M(`light`)),typeof window>`u`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`);try{e.addEventListener(`change`,({matches:e})=>{M(e?`dark`:`light`)})}catch{e.addListener(({matches:e})=>{try{M(e?`dark`:`light`)}catch(e){console.error(e)}})}},[d]),v.useEffect(()=>{C.length<=1&&k(!1)},[C]),v.useEffect(()=>{let e=e=>{if(a.length>0&&a.every(t=>e[t]||e.code===t)){var t;k(!0),(t=N.current)==null||t.focus()}e.code===`Escape`&&(document.activeElement===N.current||N.current?.contains(document.activeElement))&&k(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a]),v.useEffect(()=>{if(N.current)return()=>{F.current&&(F.current.focus({preventScroll:!0}),F.current=null,ne.current=!1)}},[N.current]),v.createElement(`section`,{ref:t,"aria-label":x??`${S} ${P}`,tabIndex:-1,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,suppressHydrationWarning:!0,"data-react-aria-top-layer":!0},ee.map((t,n)=>{let[i,a]=t.split(`-`);return T.length?v.createElement(`ol`,{key:t,dir:_===`auto`?Rt():_,tabIndex:-1,ref:N,className:c,"data-sonner-toaster":!0,"data-sonner-theme":te,"data-y-position":i,"data-x-position":a,style:{"--front-toast-height":`${E[0]?.height||0}px`,"--width":`${jt}px`,"--gap":`${y}px`,...m,...zt(l,u)},onBlur:e=>{ne.current&&!e.currentTarget.contains(e.relatedTarget)&&(ne.current=!1,F.current&&=(F.current.focus({preventScroll:!0}),null))},onFocus:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||ne.current||(ne.current=!0,F.current=e.relatedTarget)},onMouseEnter:()=>k(!0),onMouseMove:()=>k(!0),onMouseLeave:()=>{A||k(!1)},onDragEnd:()=>k(!1),onPointerDown:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||j(!0)},onPointerUp:()=>j(!1)},T.filter(e=>!e.position&&n===0||e.position===t).map((n,i)=>v.createElement(Lt,{key:n.id,icons:b,index:i,toast:n,defaultRichColors:f,duration:g?.duration??p,className:g?.className,descriptionClassName:g?.descriptionClassName,invert:r,visibleToasts:h,closeButton:g?.closeButton??s,interacting:A,position:t,style:g?.style,unstyled:g?.unstyled,classNames:g?.classNames,cancelButtonStyle:g?.cancelButtonStyle,actionButtonStyle:g?.actionButtonStyle,closeButtonAriaLabel:g?.closeButtonAriaLabel,removeToast:re,toasts:T.filter(e=>e.position==n.position),heights:E.filter(e=>e.position==n.position),setHeights:D,expandByDefault:o,gap:y,expanded:O,swipeDirections:e.swipeDirections}))):null}))});function Vt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Vt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Ht(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Vt(e))&&(r&&(r+=` `),r+=t);return r}var Ut=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,Wt=Ht,Gt=(e,t)=>n=>{if(t?.variants==null)return Wt(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=Ut(t)||Ut(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return Wt(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},Kt=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},qt=(e,t)=>({classGroupId:e,validator:t}),Jt=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Yt=`-`,Xt=[],Zt=`arbitrary..`,Qt=e=>{let t=tn(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return en(e);let n=e.split(Yt);return $t(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Kt(i,t):t:i||Xt}return n[e]||Xt}}},$t=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=$t(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Yt):e.slice(t).join(Yt),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},en=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Zt+r:void 0})(),tn=e=>{let{theme:t,classGroups:n}=e;return nn(n,t)},nn=(e,t)=>{let n=Jt();for(let r in e){let i=e[r];rn(i,n,r,t)}return n},rn=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];an(i,t,n,r)}},an=(e,t,n,r)=>{typeof e==`string`?on(e,t,n):typeof e==`function`?sn(e,t,n,r):cn(e,t,n,r)},on=(e,t,n)=>{let r=e===``?t:ln(t,e);r.classGroupId=n},sn=(e,t,n,r)=>{un(e)?rn(e(r),t,n,r):(t.validators===null&&(t.validators=[]),t.validators.push(qt(n,e)))},cn=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];rn(o,ln(t,a),n,r)}},ln=(e,t)=>{let n=e,r=t.split(Yt),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Jt(),n.nextPart.set(t,i)),n=i}return n},un=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,dn=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},fn=`!`,pn=`:`,mn=[],hn=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),gn=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===pn){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(fn)?(c=s.slice(0,-1),l=!0):s.startsWith(fn)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return hn(t,l,c,u)};if(t){let e=t+pn,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):hn(mn,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},_n=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},vn=e=>({cache:dn(e.cacheSize),parseClassName:gn(e),sortModifiers:_n(e),postfixLookupClassGroupIds:yn(e),...Qt(e)}),yn=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},bn=/\s+/,xn=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(bn),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h||(g=r(p),!g)){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+fn:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},Sn=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Cn(n))&&(i&&(i+=` `),i+=r);return i},Cn=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Cn(e[r]))&&(n&&(n+=` `),n+=t);return n},wn=(e,...t)=>{let n,r,i,a,o=o=>(n=vn(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=xn(e,n);return i(e,a),a};return a=o,(...e)=>a(Sn(...e))},Tn=[],En=e=>{let t=t=>t[e]||Tn;return t.isThemeGetter=!0,t.themeKey=e,t},Dn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,On=/^\((?:(\w[\w-]*):)?(.+)\)$/i,kn=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,An=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jn=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Mn=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,Nn=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Pn=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fn=e=>kn.test(e),R=e=>!!e&&!Number.isNaN(Number(e)),In=e=>!!e&&Number.isInteger(Number(e)),Ln=e=>e.endsWith(`%`)&&R(e.slice(0,-1)),Rn=e=>An.test(e),zn=()=>!0,Bn=e=>jn.test(e)&&!Mn.test(e),Vn=()=>!1,Hn=e=>Nn.test(e),Un=e=>Pn.test(e),Wn=e=>!z(e)&&!B(e),Gn=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Kn=e=>sr(e,dr,Vn),z=e=>Dn.test(e),qn=e=>sr(e,fr,Bn),Jn=e=>sr(e,pr,R),Yn=e=>sr(e,hr,zn),Xn=e=>sr(e,mr,Vn),Zn=e=>sr(e,lr,Vn),Qn=e=>sr(e,ur,Un),$n=e=>sr(e,gr,Hn),B=e=>On.test(e),er=e=>cr(e,fr),tr=e=>cr(e,mr),nr=e=>cr(e,lr),rr=e=>cr(e,dr),ir=e=>cr(e,ur),ar=e=>cr(e,gr,!0),or=e=>cr(e,hr,!0),sr=(e,t,n)=>{let r=Dn.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},cr=(e,t,n=!1)=>{let r=On.exec(e);return r?r[1]?t(r[1]):n:!1},lr=e=>e===`position`||e===`percentage`,ur=e=>e===`image`||e===`url`,dr=e=>e===`length`||e===`size`||e===`bg-size`,fr=e=>e===`length`,pr=e=>e===`number`,mr=e=>e===`family-name`,hr=e=>e===`number`||e===`weight`,gr=e=>e===`shadow`,_r=wn(()=>{let e=En(`color`),t=En(`font`),n=En(`text`),r=En(`font-weight`),i=En(`tracking`),a=En(`leading`),o=En(`breakpoint`),s=En(`container`),c=En(`spacing`),l=En(`radius`),u=En(`shadow`),d=En(`inset-shadow`),f=En(`text-shadow`),p=En(`drop-shadow`),m=En(`blur`),h=En(`perspective`),g=En(`aspect`),_=En(`ease`),v=En(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),B,z],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[B,z,c],T=()=>[Fn,`full`,`auto`,...w()],ee=()=>[In,`none`,`subgrid`,B,z],E=()=>[`auto`,{span:[`full`,In,B,z]},In,B,z],D=()=>[In,`auto`,B,z],O=()=>[`auto`,`min`,`max`,`fr`,B,z],k=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],A=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],j=()=>[`auto`,...w()],te=()=>[Fn,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],M=()=>[s,Fn,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],N=()=>[Fn,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],P=()=>[e,B,z],F=()=>[...b(),nr,Zn,{position:[B,z]}],ne=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],re=()=>[`auto`,`cover`,`contain`,rr,Kn,{size:[B,z]}],ie=()=>[Ln,er,qn],ae=()=>[``,`none`,`full`,l,B,z],oe=()=>[``,R,er,qn],se=()=>[`solid`,`dashed`,`dotted`,`double`],ce=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],le=()=>[R,Ln,nr,Zn],ue=()=>[``,`none`,m,B,z],de=()=>[`none`,R,B,z],fe=()=>[`none`,R,B,z],pe=()=>[R,B,z],me=()=>[Fn,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Rn],breakpoint:[Rn],color:[zn],container:[Rn],"drop-shadow":[Rn],ease:[`in`,`out`,`in-out`],font:[Wn],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Rn],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Rn],shadow:[Rn],spacing:[`px`,R],text:[Rn],"text-shadow":[Rn],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Fn,z,B,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,B,z]}],"container-named":[Gn],columns:[{columns:[R,`auto`,z,B,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[In,`auto`,B,z]}],basis:[{basis:[Fn,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[R,Fn,`auto`,`initial`,`none`,z]}],grow:[{grow:[``,R,B,z]}],shrink:[{shrink:[``,R,B,z]}],order:[{order:[In,`first`,`last`,`none`,B,z]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":O()}],"auto-rows":[{"auto-rows":O()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...k(),`normal`]}],"justify-items":[{"justify-items":[...A(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...A()]}],"align-content":[{content:[`normal`,...k()]}],"align-items":[{items:[...A(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...A(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":k()}],"place-items":[{"place-items":[...A(),`baseline`]}],"place-self":[{"place-self":[`auto`,...A()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mbs:[{mbs:j()}],mbe:[{mbe:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:te()}],"inline-size":[{inline:[`auto`,...M()]}],"min-inline-size":[{"min-inline":[`auto`,...M()]}],"max-inline-size":[{"max-inline":[`none`,...M()]}],"block-size":[{block:[`auto`,...N()]}],"min-block-size":[{"min-block":[`auto`,...N()]}],"max-block-size":[{"max-block":[`none`,...N()]}],w:[{w:[s,`screen`,...te()]}],"min-w":[{"min-w":[s,`screen`,`none`,...te()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...te()]}],h:[{h:[`screen`,`lh`,...te()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...te()]}],"max-h":[{"max-h":[`screen`,`lh`,`none`,...te()]}],"font-size":[{text:[`base`,n,er,qn]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,or,Yn]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Ln,z]}],"font-family":[{font:[tr,Xn,t]}],"font-features":[{"font-features":[z]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,B,z]}],"line-clamp":[{"line-clamp":[R,`none`,B,Jn]}],leading:[{leading:[`none`,a,...w()]}],"list-image":[{"list-image":[`none`,B,z]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,B,z]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...se(),`wavy`]}],"text-decoration-thickness":[{decoration:[R,`from-font`,`auto`,B,qn]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[R,`auto`,B,z]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[In,B,z]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,B,z]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,B,z]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:F()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:re()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},In,B,z],radial:[``,B,z],conic:[``,In,B,z]},ir,Qn]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:ie()}],"gradient-via-pos":[{via:ie()}],"gradient-to-pos":[{to:ie()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:ae()}],"rounded-s":[{"rounded-s":ae()}],"rounded-e":[{"rounded-e":ae()}],"rounded-t":[{"rounded-t":ae()}],"rounded-r":[{"rounded-r":ae()}],"rounded-b":[{"rounded-b":ae()}],"rounded-l":[{"rounded-l":ae()}],"rounded-ss":[{"rounded-ss":ae()}],"rounded-se":[{"rounded-se":ae()}],"rounded-ee":[{"rounded-ee":ae()}],"rounded-es":[{"rounded-es":ae()}],"rounded-tl":[{"rounded-tl":ae()}],"rounded-tr":[{"rounded-tr":ae()}],"rounded-br":[{"rounded-br":ae()}],"rounded-bl":[{"rounded-bl":ae()}],"border-w":[{border:oe()}],"border-w-x":[{"border-x":oe()}],"border-w-y":[{"border-y":oe()}],"border-w-s":[{"border-s":oe()}],"border-w-e":[{"border-e":oe()}],"border-w-bs":[{"border-bs":oe()}],"border-w-be":[{"border-be":oe()}],"border-w-t":[{"border-t":oe()}],"border-w-r":[{"border-r":oe()}],"border-w-b":[{"border-b":oe()}],"border-w-l":[{"border-l":oe()}],"divide-x":[{"divide-x":oe()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":oe()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...se(),`hidden`,`none`]}],"divide-style":[{divide:[...se(),`hidden`,`none`]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-bs":[{"border-bs":P()}],"border-color-be":[{"border-be":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...se(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[R,B,z]}],"outline-w":[{outline:[``,R,er,qn]}],"outline-color":[{outline:P()}],shadow:[{shadow:[``,`inner`,`none`,u,ar,$n]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":[`none`,d,ar,$n]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:oe()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[R,qn]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":oe()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":[`none`,f,ar,$n]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[R,B,z]}],"mix-blend":[{"mix-blend":[...ce(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":ce()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[R]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[B,z]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[R]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:F()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:re()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,B,z]}],filter:[{filter:[``,`none`,B,z]}],blur:[{blur:ue()}],brightness:[{brightness:[R,B,z]}],contrast:[{contrast:[R,B,z]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,ar,$n]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:[``,R,B,z]}],"hue-rotate":[{"hue-rotate":[R,B,z]}],invert:[{invert:[``,R,B,z]}],saturate:[{saturate:[R,B,z]}],sepia:[{sepia:[``,R,B,z]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,B,z]}],"backdrop-blur":[{"backdrop-blur":ue()}],"backdrop-brightness":[{"backdrop-brightness":[R,B,z]}],"backdrop-contrast":[{"backdrop-contrast":[R,B,z]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,R,B,z]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[R,B,z]}],"backdrop-invert":[{"backdrop-invert":[``,R,B,z]}],"backdrop-opacity":[{"backdrop-opacity":[R,B,z]}],"backdrop-saturate":[{"backdrop-saturate":[R,B,z]}],"backdrop-sepia":[{"backdrop-sepia":[``,R,B,z]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,B,z]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[R,`initial`,B,z]}],ease:[{ease:[`linear`,`initial`,_,B,z]}],delay:[{delay:[R,B,z]}],animate:[{animate:[`none`,v,B,z]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,B,z]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:de()}],"rotate-x":[{"rotate-x":de()}],"rotate-y":[{"rotate-y":de()}],"rotate-z":[{"rotate-z":de()}],scale:[{scale:fe()}],"scale-x":[{"scale-x":fe()}],"scale-y":[{"scale-y":fe()}],"scale-z":[{"scale-z":fe()}],"scale-3d":[`scale-3d`],skew:[{skew:pe()}],"skew-x":[{"skew-x":pe()}],"skew-y":[{"skew-y":pe()}],transform:[{transform:[B,z,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:me()}],"translate-x":[{"translate-x":me()}],"translate-y":[{"translate-y":me()}],"translate-z":[{"translate-z":me()}],"translate-none":[`translate-none`],zoom:[{zoom:[In,B,z]}],accent:[{accent:P()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,B,z]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":P()}],"scrollbar-track-color":[{"scrollbar-track":P()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,B,z]}],fill:[{fill:[`none`,...P()]}],"stroke-w":[{stroke:[R,er,qn,Jn]}],stroke:[{stroke:[`none`,...P()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`start`,`end`,`right`,`left`],"inset-y":[`inset-bs`,`inset-be`,`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`ps`,`pe`,`pr`,`pl`],py:[`pbs`,`pbe`,`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`ms`,`me`,`mr`,`ml`],my:[`mbs`,`mbe`,`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-s`,`border-w-e`,`border-w-r`,`border-w-l`],"border-w-y":[`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-s`,`border-color-e`,`border-color-r`,`border-color-l`],"border-color-y":[`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-ms`,`scroll-me`,`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-ps`,`scroll-pe`,`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function V(...e){return _r(Ht(e))}var vr=Object.defineProperty,yr=(e,t)=>vr(e,`name`,{value:t,configurable:!0});function br(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}yr(br,`setRef`);function xr(...e){return t=>{let n=!1,r=e.map(e=>{let r=br(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():br(e[t],null)}}}}yr(xr,`composeRefs`);function H(...e){return v.useCallback(xr(...e),e)}yr(H,`useComposedRefs`);var Sr=Object.defineProperty,Cr=(e,t)=>Sr(e,`name`,{value:t,configurable:!0});function wr(e){let t=v.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];r=Fr(r),v.Children.forEach(r,e=>{if(jr(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;for(;Nr(n)&&typeof zr==`function`;)n=zr(n._payload);a=Or(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=v.cloneElement(a,void 0,s):!o&&v.Children.count(r)===1&&v.isValidElement(r)&&(a=r);let c=a?Ar(a):void 0,l=H(n,c);if(!a){if(r||r===0)throw Error(o?Rr(e):Lr(e));return r}let u=kr(i,a.props??{});return a.type!==v.Fragment&&(u.ref=n?l:c),v.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}Cr(wr,`createSlot`);var Tr=wr(`Slot`),Er=Symbol.for(`radix.slottable`);function Dr(e){let t=Cr(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=Er,t}Cr(Dr,`createSlottable`);var Or=Cr((e,t)=>`child`in e.props?v.isValidElement(t)?v.cloneElement(t,void 0,e.props.children(t.props.children)):null:v.isValidElement(t)?t:null,`getSlottableElementFromSlottable`);function kr(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=Ir(a,i))}return{...e,...n}}Cr(kr,`mergeProps`);function Ar(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Cr(Ar,`getElementRef`);function jr(e){return v.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Er}Cr(jr,`isSlottable`);var Mr=Symbol.for(`react.lazy`);function Nr(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Mr&&`_payload`in e&&Pr(e._payload)}Cr(Nr,`isLazyComponent`);function Pr(e){return typeof e==`object`&&!!e&&`then`in e}Cr(Pr,`isPromiseLike`);function Fr(e){let t=e;for(;Nr(t)&&typeof zr==`function`;)t=zr(t._payload);return t}Cr(Fr,`useUnwrappedLazy`);function Ir(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}Cr(Ir,`concatAriaDescribedby`);var Lr=Cr(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Rr=Cr(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),zr=v.use,Br=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),U=o(((e,t)=>{t.exports=Br()}))(),Vr=Object.defineProperty,Hr=(e,t)=>Vr(e,`name`,{value:t,configurable:!0}),W=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=wr(`Primitive.${t}`),r=v.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,U.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Ur(e,t){e&&ct.flushSync(()=>e.dispatchEvent(t))}Hr(Ur,`dispatchDiscreteCustomEvent`);var Wr=Object.defineProperty,Gr=(e,t)=>Wr(e,`name`,{value:t,configurable:!0}),Kr=Object.freeze({position:`absolute`,border:0,width:1,height:1,padding:0,margin:-1,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,wordWrap:`normal`}),qr=v.forwardRef(Gr(function(e,t){return(0,U.jsx)(W.span,{...e,ref:t,style:{...Kr,...e.style}})},`VisuallyHidden`)),Jr=Object.defineProperty,Yr=(e,t)=>Jr(e,`name`,{value:t,configurable:!0});function Xr(e,t){let n=v.createContext(t);n.displayName=e+`Context`;let r=Yr(e=>{let{children:t,...r}=e,i=v.useMemo(()=>r,Object.values(r));return(0,U.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=v.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return Yr(i,`useContext`),[r,i]}Yr(Xr,`createContext`);function Zr(e,t=[]){let n=[];function r(t,r){let i=v.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=Yr(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=v.useMemo(()=>o,Object.values(o));return(0,U.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=v.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return Yr(s,`useContext`),[o,s]}Yr(r,`createContext`);let i=Yr(()=>{let t=n.map(e=>v.createContext(e));return Yr(function(n){let r=n?.[e]||t;return v.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,Qr(i,...t)]}Yr(Zr,`createContextScope`);function Qr(...e){let t=e[0];if(e.length===1)return t;let n=Yr(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return Yr(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return v.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}Yr(Qr,`composeContextScopes`);var $r=globalThis?.document?v.useLayoutEffect:()=>{},ei=Object.defineProperty,ti=(e,t)=>ei(e,`name`,{value:t,configurable:!0});function ni(e){let t=e+`CollectionProvider`,[n,r]=Zr(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=ti(e=>{let{scope:t,children:n}=e,r=v.useRef(null),a=v.useRef(new Map).current;return(0,U.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})},`CollectionProvider`);o.displayName=t;let s=e+`CollectionSlot`,c=wr(s),l=v.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=H(t,a(s,n).collectionRef);return(0,U.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=wr(u),p=v.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=v.useRef(null),s=H(t,o),c=a(u,n);return v.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,U.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function m(t){let n=a(e+`CollectionConsumer`,t);return v.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return ti(m,`useCollection`),[{Provider:o,Slot:l,ItemSlot:p},m,r]}ti(ni,`createCollection`);var ri=new WeakMap,ii=class e extends Map{static{ti(this,`OrderedDict`)}#e;constructor(e){super(e),this.#e=[...super.keys()],ri.set(this,!0)}set(e,t){return ri.get(this)&&!this.has(e)&&this.#e.push(e),super.set(e,t),this}insert(e,t,n){let r=this.has(t),i=r?this.size:this.size+1,a=si(e),o=a>=0?Math.min(a,i-1):Math.max(i+a,0);if(r?this.#e.indexOf(t)===o:o===this.size)return this.set(t,n),this;let s=this.#e.filter(e=>e!==t);s.splice(o,0,t);let c=s.map(e=>[e,e===t?n:this.get(e)]);this.clear();for(let[e,t]of c)this.set(e,t);return this}with(t,n,r){let i=new e(this);return i.insert(t,n,r),i}before(e){let t=this.#e.indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,n){let r=this.#e.indexOf(e);if(r===-1)return this;let i=this.#e.indexOf(t),a=i!==-1&&i<r?r-1:r;return this.insert(a,t,n)}after(e){let t=this.#e.indexOf(e);if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)}setAfter(e,t,n){let r=this.#e.indexOf(e);if(r===-1)return this;let i=this.#e.indexOf(t),a=i!==-1&&i<=r?r:r+1;return this.insert(a,t,n)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let t=super.delete(e);return t&&this.#e.splice(this.#e.indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return t!==void 0&&this.delete(t)}at(e){let t=ai(this.#e,e);if(t!==void 0)return this.get(t)}entryAt(e){let t=ai(this.#e,e);if(t!==void 0)return[t,this.get(t)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return ai(this.#e,e)}from(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let n=this.indexOf(e);if(n===-1)return;let r=n+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return r;n++}}findIndex(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return n;n++}return-1}filter(t,n){let r=[],i=0;for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;return new e(r)}map(t,n){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;return new e(r)}reduce(...e){let[t,n]=e,r=e.length>1;if(!r&&this.size===0)throw TypeError(`Reduce of empty OrderedDict with no initial value`);let i=0,a=n;for(let e of this)a=i===0&&!r?e:Reflect.apply(t,this,[a,e,i,this]),i++;return a}reduceRight(...e){let[t,n]=e,r=e.length>1;if(!r&&this.size===0)throw TypeError(`Reduce of empty OrderedDict with no initial value`);let i=n;for(let e=this.size-1;e>=0;e--){let n=this.entryAt(e);i=e===this.size-1&&!r?n:Reflect.apply(t,this,[i,n,e,this])}return i}sort(e){if(typeof e!=`function`)throw TypeError(`OrderedDict.sort requires a compare function`);let t=[...this.entries()].sort(e);this.clear();for(let[e,n]of t)this.set(e,n);return this}toSorted(t){if(typeof t!=`function`)throw TypeError(`OrderedDict.toSorted requires a compare function`);let n=[...this.entries()].sort(t);return new e(n)}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let n=this.keyAt(e),r=this.get(n);t.set(n,r)}return t}toSpliced(...t){let n=[...this.entries()];return n.splice(...t),new e(n)}slice(t,n){let r=new e;for(let e of this.#e.slice(t,n))r.set(e,this.get(e));return r}every(e,t){let n=0;for(let r of this){if(!Reflect.apply(e,t,[r,n,this]))return!1;n++}return!0}some(e,t){let n=0;for(let r of this){if(Reflect.apply(e,t,[r,n,this]))return!0;n++}return!1}};function ai(e,t){if(`at`in Array.prototype)return Array.prototype.at.call(e,t);let n=oi(e,t);return n===-1?void 0:e[n]}ti(ai,`at`);function oi(e,t){let n=e.length,r=si(t),i=r>=0?r:n+r;return i<0||i>=n?-1:i}ti(oi,`toSafeIndex`);function si(e){return e!==e||e===0?0:Math.trunc(e)}ti(si,`toSafeInteger`);function ci(e){let t=e+`CollectionProvider`,[n,r]=Zr(t),[i,a]=n(t);i.displayName=e+`CollectionStableContextProvider`;let[o,s]=n(t);o.displayName=e+`CollectionStatefulContextProvider`;let c=ti(({state:e,...t})=>e?(0,U.jsx)(u,{...t,state:e}):(0,U.jsx)(l,{...t}),`CollectionProvider`);c.displayName=t;let l=ti(e=>{let t=_();return(0,U.jsx)(u,{...e,state:t})},`CollectionInit`);l.displayName=e+`CollectionInit`;let u=ti(e=>{let{scope:t,children:n,state:r}=e,a=v.useRef(null),[s,c]=v.useState(null),l=H(a,c),[u,d]=r,f=v.useRef(new ii),p=v.useCallback(()=>{let e=f.current;return di(e)||e.sort(fi),e},[]);return v.useEffect(()=>{if(!s)return;let e=pi(()=>{d(e=>{let t=e.toSorted(fi);return t.some(([t],n)=>e.keyAt(n)!==t)?t:e})});return e.observe(s,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[s,d]),(0,U.jsx)(i,{scope:t,collectionElementRef:l,collectionElementRefObject:a,getCollection:p,setCollection:d,registryRef:f,children:(0,U.jsx)(o,{scope:t,collectionElement:s,collection:u,children:n})})},`CollectionProviderImpl`);u.displayName=e+`CollectionProviderImpl`;let d=e+`CollectionSlot`,f=wr(d),p=v.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=H(t,a(d,n).collectionElementRef);return(0,U.jsx)(f,{ref:i,children:r})});p.displayName=d;let m=e+`CollectionItemSlot`,h=wr(m),g=v.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=v.useRef(null),{setCollection:s,registryRef:c}=a(m,n),l=v.useRef(i);li(l.current,i)||(l.current=i);let u=l.current,d=H(t,v.useCallback(e=>{let t=c.current;e?t.set(e,{...l.current,element:e}):o.current&&t.delete(o.current)},[c]),o);$r(()=>{let e=o.current,t=c.current;e&&t.has(e)&&t.set(e,{...u,element:e})},[u,c]);let f=v.useRef(null);return v.useEffect(()=>{let e=o.current,t=f.current;((t?.element??null)!==e||e&&t?.itemData!==u)&&(f.current=e?{element:e,itemData:u}:null,s(n=>{let r=new ii(n);return t&&t.element!==e&&r.delete(t.element),e&&r.set(e,{...u,element:e}),r.sort(fi)}))}),v.useEffect(()=>()=>{let e=f.current;f.current=null,e&&s(t=>{if(!t.has(e.element))return t;let n=new ii(t);return n.delete(e.element),n})},[s]),(0,U.jsx)(h,{"data-radix-collection-item":``,ref:d,children:r})});g.displayName=m;function _(){return v.useState(new ii)}ti(_,`useInitCollection`);function y(t){let{collection:n}=s(e+`CollectionConsumer`,t);return n}ti(y,`useCollection`);function b(t){let{getCollection:n}=a(e+`CollectionConsumer`,t);return n}return ti(b,`useGetCollection`),[{Provider:c,Slot:p,ItemSlot:g},{createCollectionScope:r,useCollection:y,useGetCollection:b,useInitCollection:_}]}ti(ci,`createCollection`);function li(e,t){if(e===t)return!0;if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;return!0}ti(li,`shallowEqual`);function ui(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}ti(ui,`isElementPreceding`);function di(e){let t;for(let n of e.keys()){if(t){let e=t.compareDocumentPosition(n);if(!(e&Node.DOCUMENT_POSITION_DISCONNECTED)&&e&Node.DOCUMENT_POSITION_PRECEDING)return!1}t=n}return!0}ti(di,`isInDocumentOrder`);function fi(e,t){return!e[1].element||!t[1].element?0:ui(e[1].element,t[1].element)?-1:1}ti(fi,`sortByDocumentPosition`);function pi(e){return new MutationObserver(t=>{for(let n of t)if(n.type===`childList`){e();return}})}ti(pi,`getChildListObserver`);var mi=Object.defineProperty,hi=(e,t)=>mi(e,`name`,{value:t,configurable:!0}),gi=!!(typeof window<`u`&&window.document&&window.document.createElement);function G(e,t,{checkForDefaultPrevented:n=!0}={}){return hi(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}hi(G,`composeEventHandlers`);function _i(e){if(!gi)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}hi(_i,`getOwnerWindow`);function vi(e){if(!gi)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}hi(vi,`getOwnerDocument`);function yi(e,t=!1){let{activeElement:n}=vi(e);if(!n?.nodeName)return null;if(bi(n)&&n.contentDocument)return yi(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=vi(n).getElementById(e);if(t)return t}}return n}hi(yi,`getActiveElement`);function bi(e){return e.tagName===`IFRAME`}hi(bi,`isFrame`);var xi=Object.defineProperty,Si=(e,t)=>xi(e,`name`,{value:t,configurable:!0}),Ci=v.useEffectEvent,wi=v.useInsertionEffect;function Ti(e){if(typeof Ci==`function`)return Ci(e);let t=v.useRef(()=>{throw Error(`Cannot call an event handler while rendering.`)});return typeof wi==`function`?wi(()=>{t.current=e}):$r(()=>{t.current=e}),v.useMemo(()=>((...e)=>t.current?.(...e)),[])}Si(Ti,`useEffectEvent`);var Ei=Object.defineProperty,Di=(e,t)=>Ei(e,`name`,{value:t,configurable:!0}),Oi=v.useInsertionEffect||$r;function ki({prop:e,defaultProp:t,onChange:n=Di(()=>{},`onChange`),caller:r}){let[i,a,o]=Ai({defaultProp:t,onChange:n}),s=e!==void 0;return[s?e:i,v.useCallback(t=>{if(s){let n=ji(t)?t(e):t;n!==e&&o.current?.(n)}else a(t)},[s,e,a,o])]}Di(ki,`useControllableState`);function Ai({defaultProp:e,onChange:t}){let[n,r]=v.useState(e),i=v.useRef(n),a=v.useRef(t);return Oi(()=>{a.current=t},[t]),v.useEffect(()=>{i.current!==n&&(a.current?.(n),i.current=n)},[n,i]),[n,r,a]}Di(Ai,`useUncontrolledState`);function ji(e){return typeof e==`function`}Di(ji,`isFunction`);var Mi=Symbol(`RADIX:SYNC_STATE`);function Ni(e,t,n,r){let{prop:i,defaultProp:a,onChange:o,caller:s}=t,c=i!==void 0,l=Ti(o),u=[{...n,state:a}];r&&u.push(r);let[d,f]=v.useReducer((t,n)=>{if(n.type===Mi)return{...t,state:n.state};let r=e(t,n);return c&&!Object.is(r.state,t.state)&&l(r.state),r},...u),p=d.state,m=v.useRef(p);v.useEffect(()=>{m.current!==p&&(m.current=p,c||l(p))},[p,m,c]);let h=v.useMemo(()=>i===void 0?d:{...d,state:i},[d,i]);return v.useEffect(()=>{c&&!Object.is(i,d.state)&&f({type:Mi,state:i})},[i,d.state,c]),[h,f]}Di(Ni,`useControllableStateReducer`);var Pi=Object.defineProperty,Fi=(e,t)=>Pi(e,`name`,{value:t,configurable:!0});function Ii(e,t){return v.useReducer((e,n)=>t[e][n]??e,e)}Fi(Ii,`useStateMachine`);var Li=Fi(e=>{let{present:t,children:n}=e,r=Ri(t),i=typeof n==`function`?n({present:r.isPresent}):v.Children.only(n),a=Bi(r.ref,Hi(i));return typeof n==`function`||r.isPresent?v.cloneElement(i,{ref:a}):null},`Presence`);function Ri(e){let[t,n]=v.useState(),r=v.useRef(null),i=v.useRef(e),a=v.useRef(`none`),o=v.useRef(void 0),[s,c]=Ii(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return v.useEffect(()=>{s===`mounted`?(a.current=o.current??Vi(r.current),o.current=void 0):a.current=`none`},[s]),$r(()=>{let t=r.current,n=i.current;if(n!==e){let r=a.current,s=Vi(t);e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),$r(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,o=Fi(a=>{let o=Vi(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},`handleAnimationEnd`),s=Fi(e=>{e.target===t&&(a.current=Vi(r.current))},`handleAnimationStart`);return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)}}c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:v.useCallback(e=>{if(e){let t=getComputedStyle(e);r.current=t,o.current=Vi(t)}else r.current=null;n(e)},[])}}Fi(Ri,`usePresence`);function zi(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}Fi(zi,`setRef`);function Bi(...e){let t=v.useRef(e);return t.current=e,v.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=zi(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():zi(n[e],null)}}},[])}Fi(Bi,`useStableComposedRefs`);function Vi(e){return e?.animationName||`none`}Fi(Vi,`getAnimationName`);function Hi(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Fi(Hi,`getElementRef`);var Ui=Object.defineProperty,Wi=(e,t)=>Ui(e,`name`,{value:t,configurable:!0}),Gi=v.useId||(()=>void 0),Ki=0;function qi(e){let[t,n]=v.useState(Gi());return $r(()=>{e||n(e=>e??String(Ki++))},[e]),e||(t?`radix-${t}`:``)}Wi(qi,`useId`);var Ji=Object.defineProperty,Yi=(e,t)=>Ji(e,`name`,{value:t,configurable:!0}),Xi=`Collapsible`,[Zi,Qi]=Zr(Xi),[K,$i]=Zi(Xi),ea=v.forwardRef(Yi(function(e,t){let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:o,...s}=e,[c,l]=ki({prop:r,defaultProp:i??!1,onChange:o,caller:Xi});return(0,U.jsx)(K,{scope:n,disabled:a,contentId:qi(),open:c,onOpenToggle:v.useCallback(()=>l(e=>!e),[l]),children:(0,U.jsx)(W.div,{"data-state":oa(c),"data-disabled":a?``:void 0,...s,ref:t})})},`Collapsible`)),ta=`CollapsibleTrigger`,na=v.forwardRef(Yi(function(e,t){let{__scopeCollapsible:n,...r}=e,i=$i(ta,n);return(0,U.jsx)(W.button,{type:`button`,"aria-controls":i.open?i.contentId:void 0,"aria-expanded":i.open||!1,"data-state":oa(i.open),"data-disabled":i.disabled?``:void 0,disabled:i.disabled,...r,ref:t,onClick:G(e.onClick,i.onOpenToggle)})},`CollapsibleTrigger`)),ra=`CollapsibleContent`,ia=v.forwardRef(Yi(function(e,t){let{forceMount:n,...r}=e,i=$i(ra,e.__scopeCollapsible);return(0,U.jsx)(Li,{present:n||i.open,children:({present:e})=>(0,U.jsx)(aa,{...r,ref:t,present:e})})},`CollapsibleContent`)),aa=v.forwardRef(Yi(function(e,t){let{__scopeCollapsible:n,present:r,children:i,...a}=e,o=$i(ra,n),[s,c]=v.useState(r),l=v.useRef(null),u=H(t,l),d=v.useRef(0),f=d.current,p=v.useRef(0),m=p.current,h=o.open||s,g=v.useRef(h),_=v.useRef(void 0);return v.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),$r(()=>{let e=l.current;if(e){_.current=_.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();d.current=t.height,p.current=t.width,g.current||(e.style.transitionDuration=_.current.transitionDuration,e.style.animationName=_.current.animationName),c(r)}},[o.open,r]),(0,U.jsx)(W.div,{"data-state":oa(o.open),"data-disabled":o.disabled?``:void 0,id:o.contentId,hidden:!h,...a,ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":m?`${m}px`:void 0,...e.style},children:h&&i})},`CollapsibleContentImpl`));function oa(e){return e?`open`:`closed`}Yi(oa,`getState`);var sa=Object.defineProperty,ca=(e,t)=>sa(e,`name`,{value:t,configurable:!0}),la={LTR:`ltr`,RTL:`rtl`},ua=v.createContext(void 0);function da(e){let t=v.useContext(ua);return e||t||la.LTR}ca(da,`useDirection`);var fa=Object.defineProperty,pa=(e,t)=>fa(e,`name`,{value:t,configurable:!0}),ma={Single:`single`,Multiple:`multiple`},ha={Vertical:`vertical`,Horizontal:`horizontal`},ga={LTR:`ltr`,RTL:`rtl`},_a=`Accordion`,va=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[ya,{useGetCollection:ba,createCollectionScope:xa}]=ci(_a),[Sa,Ca]=Zr(_a,[xa,Qi]),wa=Qi(),Ta=v.forwardRef(pa(function(e,t){let{type:n,...r}=e,i=r,a=r;return(0,U.jsx)(ya.Provider,{scope:e.__scopeAccordion,children:n===ma.Multiple?(0,U.jsx)(ja,{...a,ref:t}):(0,U.jsx)(Aa,{...i,ref:t})})},`Accordion`)),[Ea,Da]=Sa(_a),[Oa,ka]=Sa(_a,{collapsible:!1}),Aa=v.forwardRef(pa(function(e,t){let{value:n,defaultValue:r,onValueChange:i=pa(()=>{},`onValueChange`),collapsible:a=!1,...o}=e,[s,c]=ki({prop:n,defaultProp:r??``,onChange:i,caller:_a});return(0,U.jsx)(Ea,{scope:e.__scopeAccordion,value:v.useMemo(()=>s?[s]:[],[s]),onItemOpen:c,onItemClose:v.useCallback(()=>a&&c(``),[a,c]),children:(0,U.jsx)(Oa,{scope:e.__scopeAccordion,collapsible:a,children:(0,U.jsx)(Pa,{...o,ref:t})})})},`AccordionImplSingle`)),ja=v.forwardRef(pa(function(e,t){let{value:n,defaultValue:r,onValueChange:i=pa(()=>{},`onValueChange`),...a}=e,[o,s]=ki({prop:n,defaultProp:r??[],onChange:i,caller:_a}),c=v.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=v.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,U.jsx)(Ea,{scope:e.__scopeAccordion,value:o,onItemOpen:c,onItemClose:l,children:(0,U.jsx)(Oa,{scope:e.__scopeAccordion,collapsible:!0,children:(0,U.jsx)(Pa,{...a,ref:t})})})},`AccordionImplMultiple`)),[Ma,Na]=Sa(_a),Pa=v.forwardRef(pa(function(e,t){let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=ha.Vertical,...o}=e,s=H(v.useRef(null),t),c=ba(n),l=da(i)===ga.LTR,u=G(e.onKeyDown,e=>{if(!va.includes(e.key))return;let t=c(),n=e.target,r=t.filter(([,e])=>!e.element.disabled),i=r.findIndex(([,e])=>e.element===n),o=r.size;if(i===-1)return;e.preventDefault();let s=i,u=o-1,d=pa(()=>{s=i+1,s>u&&(s=0)},`moveNext`),f=pa(()=>{s=i-1,s<0&&(s=u)},`movePrev`);switch(e.key){case`Home`:s=0;break;case`End`:s=u;break;case`ArrowRight`:a===ha.Horizontal&&(l?d():f());break;case`ArrowDown`:a===ha.Vertical&&d();break;case`ArrowLeft`:a===ha.Horizontal&&(l?f():d());break;case`ArrowUp`:a===ha.Vertical&&f()}let p=s%o;r.at(p)?.element.focus()});return(0,U.jsx)(Ma,{scope:n,disabled:r,direction:i,orientation:a,children:(0,U.jsx)(ya.Slot,{scope:n,children:(0,U.jsx)(W.div,{...o,"data-orientation":a,ref:s,onKeyDown:r?void 0:u})})})},`AccordionImpl`)),Fa=`AccordionItem`,[Ia,La]=Sa(Fa),Ra=v.forwardRef(pa(function(e,t){let{__scopeAccordion:n,value:r,...i}=e,a=Na(Fa,n),o=Da(Fa,n),s=wa(n),c=qi(),l=r&&o.value.includes(r)||!1,u=a.disabled||e.disabled;return(0,U.jsx)(Ia,{scope:n,open:l,disabled:u,triggerId:c,children:(0,U.jsx)(ea,{"data-orientation":a.orientation,"data-state":Ga(l),...s,...i,ref:t,disabled:u,open:l,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})},`AccordionItem`)),za=`AccordionHeader`,Ba=v.forwardRef(pa(function(e,t){let{__scopeAccordion:n,...r}=e,i=Na(_a,n),a=La(za,n);return(0,U.jsx)(W.h3,{"data-orientation":i.orientation,"data-state":Ga(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})},`AccordionHeader`)),Va=`AccordionTrigger`,Ha=v.forwardRef(pa(function(e,t){let{__scopeAccordion:n,...r}=e,i=Na(_a,n),a=La(Va,n),o=ka(Va,n),s=wa(n);return(0,U.jsx)(ya.ItemSlot,{scope:n,children:(0,U.jsx)(na,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})},`AccordionTrigger`)),Ua=`AccordionContent`,Wa=v.forwardRef(pa(function(e,t){let{__scopeAccordion:n,...r}=e,i=Na(_a,n),a=La(Ua,n),o=wa(n);return(0,U.jsx)(ia,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})},`AccordionContent`));function Ga(e){return e?`open`:`closed`}pa(Ga,`getState`);var Ka=Object.defineProperty,qa=(e,t)=>Ka(e,`name`,{value:t,configurable:!0}),Ja=v.useInsertionEffect;function Ya(e){let t=v.useRef(e);return typeof Ja==`function`?Ja(()=>{t.current=e}):$r(()=>{t.current=e}),v.useMemo(()=>((...e)=>t.current?.(...e)),[])}qa(Ya,`useCallbackRef`);var Xa=Object.defineProperty,Za=(e,t)=>Xa(e,`name`,{value:t,configurable:!0}),Qa=`dismissableLayer.update`,$a=`dismissableLayer.pointerDownOutside`,eo=`dismissableLayer.focusOutside`,to,no=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),ro=v.forwardRef(Za(function(e,t){let{disableOutsidePointerEvents:n=!1,deferPointerDownOutside:r=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:s,onDismiss:c,...l}=e,u=v.useContext(no),[d,f]=v.useState(null),p=d?.ownerDocument??globalThis?.document,[,m]=v.useState({}),h=H(t,f),g=Array.from(u.layers),[_]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=_?g.indexOf(_):-1,b=d?g.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,S=b>=y,C=v.useRef(!1),w=oo(e=>{a?.(e),s?.(e),e.defaultPrevented||c?.()},{ownerDocument:p,deferPointerDownOutside:r,isDeferredPointerDownOutsideRef:C,dismissableSurfaces:u.dismissableSurfaces,shouldHandlePointerDownOutside:v.useCallback(e=>{if(!(e instanceof Node))return!1;let t=[...u.branches].some(t=>t.contains(e));return S&&!t},[u.branches,S])}),T=so(e=>{if(r&&C.current)return;let t=e.target;[...u.branches].some(e=>e.contains(t))||(o?.(e),s?.(e),e.defaultPrevented||c?.())},p),ee=d?b===g.length-1:!1,E=Ya(e=>{e.key===`Escape`&&(i?.(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))});return v.useEffect(()=>{if(ee)return p.addEventListener(`keydown`,E,{capture:!0}),()=>p.removeEventListener(`keydown`,E,{capture:!0})},[p,ee,E]),v.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(to=p.body.style.pointerEvents,p.body.style.pointerEvents=`none`),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),co(),()=>{n&&(u.layersWithOutsidePointerEventsDisabled.delete(d),u.layersWithOutsidePointerEventsDisabled.size===0&&(p.body.style.pointerEvents=to))}},[d,p,n,u]),v.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),co())},[d,u]),v.useEffect(()=>{let e=Za(()=>m({}),`handleUpdate`);return document.addEventListener(Qa,e),()=>document.removeEventListener(Qa,e)},[]),(0,U.jsx)(W.div,{...l,ref:h,style:{pointerEvents:x?S?`auto`:`none`:void 0,...e.style},onFocusCapture:G(e.onFocusCapture,T.onFocusCapture),onBlurCapture:G(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:G(e.onPointerDownCapture,w.onPointerDownCapture)})},`DismissableLayer`));function io(){let e=v.useContext(no),[t,n]=v.useState(null);return v.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}Za(io,`useDismissableLayerSurface`);var ao=Za(()=>!0,`IS_TRUE`);function oo(e,t){let{ownerDocument:n=globalThis?.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:i,dismissableSurfaces:a,shouldHandlePointerDownOutside:o=ao}=t,s=Ya(e),c=v.useRef(!1),l=v.useRef(!1),u=v.useRef(new Map),d=v.useRef(()=>{});return v.useEffect(()=>{function e(){l.current=!1,i.current=!1,u.current.clear()}Za(e,`resetOutsideInteraction`);function t(){return Array.from(u.current.values()).some(Boolean)}Za(t,`isOutsideInteractionIntercepted`);function f(e){if(!l.current)return;let t=e.target;t instanceof Node&&[...a].some(e=>e.contains(t))||u.current.set(e.type,!0),e.type===`click`&&window.setTimeout(()=>{l.current&&d.current()},0)}Za(f,`handleInteractionCapture`);function p(e){l.current&&u.current.set(e.type,!1)}Za(p,`handleInteractionBubble`);let m=Za(a=>{if(a.target&&!c.current){let f=function(){n.removeEventListener(`click`,d.current);let r=t();e(),r||lo($a,s,p,{discrete:!0})};if(Za(f,`handleAndDispatchPointerDownOutsideEvent`),!o(a.target)){n.removeEventListener(`click`,d.current),e(),c.current=!1;return}let p={originalEvent:a};l.current=!0,i.current=r&&a.button===0,u.current.clear(),!r||a.button!==0?f():(n.removeEventListener(`click`,d.current),d.current=f,n.addEventListener(`click`,d.current,{once:!0}))}else n.removeEventListener(`click`,d.current),e();c.current=!1},`handlePointerDown`),h=[`pointerup`,`mousedown`,`mouseup`,`touchstart`,`touchend`,`click`];for(let e of h)n.addEventListener(e,f,!0),n.addEventListener(e,p);let g=window.setTimeout(()=>{n.addEventListener(`pointerdown`,m)},0);return()=>{window.clearTimeout(g),n.removeEventListener(`pointerdown`,m),n.removeEventListener(`click`,d.current);for(let e of h)n.removeEventListener(e,f,!0),n.removeEventListener(e,p)}},[n,s,r,i,a,o]),{onPointerDownCapture:Za(()=>c.current=!0,`onPointerDownCapture`)}}Za(oo,`usePointerDownOutside`);function so(e,t=globalThis?.document){let n=Ya(e),r=v.useRef(!1);return v.useEffect(()=>{let e=Za(e=>{e.target&&!r.current&&lo(eo,n,{originalEvent:e},{discrete:!1})},`handleFocus`);return t.addEventListener(`focusin`,e),()=>t.removeEventListener(`focusin`,e)},[t,n]),{onFocusCapture:Za(()=>r.current=!0,`onFocusCapture`),onBlurCapture:Za(()=>r.current=!1,`onBlurCapture`)}}Za(so,`useFocusOutside`);function co(){let e=new CustomEvent(Qa);document.dispatchEvent(e)}Za(co,`dispatchUpdate`);function lo(e,t,n,{discrete:r}){let i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?Ur(i,a):i.dispatchEvent(a)}Za(lo,`handleAndDispatchCustomEvent`);var uo=Object.defineProperty,fo=(e,t)=>uo(e,`name`,{value:t,configurable:!0}),po=`focusScope.autoFocusOnMount`,mo=`focusScope.autoFocusOnUnmount`,ho={bubbles:!1,cancelable:!0},go=v.forwardRef(fo(function(e,t){let{loop:n=!1,trapped:r=!1,branches:i,onMountAutoFocus:a,onUnmountAutoFocus:o,...s}=e,[c,l]=v.useState(null),u=Ya(a),d=Ya(o),f=v.useRef(null),p=H(t,l),m=v.useRef(i);v.useEffect(()=>{m.current=i});let h=v.useCallback(e=>e?c?.contains(e)?!0:!!m.current?.some(t=>t.contains(e)):!1,[c]),g=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(r){let e=function(e){if(g.paused||!c)return;let t=e.target;h(t)?f.current=t:Do(f.current,{select:!0})},t=function(e){if(g.paused||!c)return;let t=e.relatedTarget;t!==null&&(h(t)||Do(f.current,{select:!0}))},n=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&Do(c)};fo(e,`handleFocusIn`),fo(t,`handleFocusOut`),fo(n,`handleMutations`),document.addEventListener(`focusin`,e),document.addEventListener(`focusout`,t);let r=new MutationObserver(n);return c&&r.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener(`focusin`,e),document.removeEventListener(`focusout`,t),r.disconnect()}}},[r,c,g.paused,h]),v.useEffect(()=>{if(c){Oo.add(g);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(po,ho);c.addEventListener(po,u),c.dispatchEvent(t),t.defaultPrevented||(xo(jo(Co(c)),{select:!0}),document.activeElement===e&&Do(c))}return()=>{c.removeEventListener(po,u);let t=c.ownerDocument,n=CustomEvent;setTimeout(()=>{let r=new n(mo,ho);c.addEventListener(mo,d),c.dispatchEvent(r),r.defaultPrevented||Do(e??t.body,{select:!0}),c.removeEventListener(mo,d),Oo.remove(g)},0)}}},[c,u,d,g]);let _=v.useCallback(e=>{if(!n&&!r||g.paused)return;let t=e.key===`Tab`&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){let t=e.currentTarget,[r,a]=So(t);r&&a?!e.shiftKey&&i===a?(e.preventDefault(),n&&Do(r,{select:!0})):e.shiftKey&&i===r&&(e.preventDefault(),n&&Do(a,{select:!0})):i===t&&e.preventDefault()}},[n,r,g.paused]);return(0,U.jsx)(W.div,{tabIndex:-1,...s,ref:p,onKeyDown:_})},`FocusScope`)),_o=v.createContext(null);function vo({registry:e,children:t}){return e?(0,U.jsx)(_o.Provider,{value:e,children:t}):t}fo(vo,`FocusScopeBranchProvider`);function yo(){let[e,t]=v.useState([]);return{nodes:e,registry:v.useMemo(()=>({add:fo(e=>t(t=>t.includes(e)?t:[...t,e]),`add`),remove:fo(e=>t(t=>t.filter(t=>t!==e)),`remove`)}),[])}}fo(yo,`useFocusScopeBranchRegistry`);function bo(e){let t=v.useContext(_o);v.useEffect(()=>{if(e&&t)return t.add(e),()=>t.remove(e)},[e,t])}fo(bo,`useFocusScopeBranch`);function xo(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(Do(r,{select:t}),document.activeElement!==n)return}fo(xo,`focusFirst`);function So(e){let t=Co(e);return[wo(t,e),wo(t.reverse(),e)]}fo(So,`getTabbableEdges`);function Co(e){let t=[],n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:fo(e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},`acceptNode`)});for(;n.nextNode();)t.push(n.currentNode);return t}fo(Co,`getTabbableCandidates`);function wo(e,t){let n=typeof t.checkVisibility==`function`&&t.checkVisibility({checkVisibilityCSS:!0});for(let r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):To(r,{upTo:t})))return r}fo(wo,`findVisible`);function To(e,{upTo:t}){if(getComputedStyle(e).visibility===`hidden`)return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display===`none`)return!0;e=e.parentElement}return!1}fo(To,`isHidden`);function Eo(e){return e.tagName===`INPUT`&&typeof e.select==`function`}fo(Eo,`isSelectableInput`);function Do(e,{select:t=!1}={}){if(e&&e.focus){let n=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==n&&Eo(e)&&t&&e.select()}}fo(Do,`focus`);var Oo=ko();function ko(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),e=Ao(e,t),e.unshift(t)},remove(t){e=Ao(e,t),e[0]?.resume()}}}fo(ko,`createFocusScopesStack`);function Ao(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}fo(Ao,`arrayRemove`);function jo(e){return e.filter(e=>e.tagName!==`A`)}fo(jo,`removeLinks`);var Mo=Object.defineProperty,No=v.forwardRef(((e,t)=>Mo(e,`name`,{value:t,configurable:!0}))(function(e,t){let{container:n,...r}=e,[i,a]=v.useState(!1);$r(()=>a(!0),[]);let o=n||i&&globalThis?.document?.body;return o?ct.createPortal((0,U.jsx)(W.div,{...r,ref:t}),o):null},`Portal`)),Po=Object.defineProperty,Fo=(e,t)=>Po(e,`name`,{value:t,configurable:!0}),Io=0,q=null;function Lo(e){return Ro(),e.children}Fo(Lo,`FocusGuards`);function Ro(){v.useEffect(()=>{q||={start:zo(),end:zo()};let{start:e,end:t}=q;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement(`afterbegin`,e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement(`beforeend`,t),Io++,()=>{Io===1&&(q?.start.remove(),q?.end.remove(),q=null),Io=Math.max(0,Io-1)}},[])}Fo(Ro,`useFocusGuards`);function zo(){let e=document.createElement(`span`);return e.setAttribute(`data-radix-focus-guard`,``),e.tabIndex=0,e.style.outline=`none`,e.style.opacity=`0`,e.style.position=`fixed`,e.style.pointerEvents=`none`,e}Fo(zo,`createFocusGuard`);var Bo=function(){return Bo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Bo.apply(this,arguments)};function Vo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ho(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Uo=`right-scroll-bar-position`,Wo=`width-before-scroll-bar`,Go=`with-scroll-bars-hidden`,Ko=`--removed-body-scroll-bar-size`;function qo(e,t){return typeof e==`function`?e(t):e&&(e.current=t),e}function Jo(e,t){var n=(0,v.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}})[0];return n.callback=t,n.facade}var Yo=typeof window<`u`?v.useLayoutEffect:v.useEffect,Xo=new WeakMap;function Zo(e,t){var n=Jo(t||null,function(t){return e.forEach(function(e){return qo(e,t)})});return Yo(function(){var t=Xo.get(n);if(t){var r=new Set(t),i=new Set(e),a=n.current;r.forEach(function(e){i.has(e)||qo(e,null)}),i.forEach(function(e){r.has(e)||qo(e,a)})}Xo.set(n,e)},[e]),n}function Qo(e){return e}function $o(e,t){t===void 0&&(t=Qo);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var i=t(e,r);return n.push(i),function(){n=n.filter(function(e){return e!==i})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var i=n;n=[],i.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(a)};o(),n={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),n}}}}}function es(e){e===void 0&&(e={});var t=$o(null);return t.options=Bo({async:!0,ssr:!1},e),t}var ts=function(e){var t=e.sideCar,n=Vo(e,[`sideCar`]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error(`Sidecar medium not found`);return v.createElement(r,Bo({},n))};ts.isSideCarExport=!0;function ns(e,t){return e.useMedium(t),ts}var rs=es(),is=function(){},as=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:is,onWheelCapture:is,onTouchMoveCapture:is}),i=r[0],a=r[1],o=e.forwardProps,s=e.children,c=e.className,l=e.removeScrollBar,u=e.enabled,d=e.shards,f=e.sideCar,p=e.noRelative,m=e.noIsolation,h=e.inert,g=e.allowPinchZoom,_=e.as,y=_===void 0?`div`:_,b=e.gapMode,x=Vo(e,[`forwardProps`,`children`,`className`,`removeScrollBar`,`enabled`,`shards`,`sideCar`,`noRelative`,`noIsolation`,`inert`,`allowPinchZoom`,`as`,`gapMode`]),S=f,C=Zo([n,t]),w=Bo(Bo({},x),i);return v.createElement(v.Fragment,null,u&&v.createElement(S,{sideCar:rs,removeScrollBar:l,shards:d,noRelative:p,noIsolation:m,inert:h,setCallbacks:a,allowPinchZoom:!!g,lockRef:n,gapMode:b}),o?v.cloneElement(v.Children.only(s),Bo(Bo({},w),{ref:C})):v.createElement(y,Bo({},w,{className:c,ref:C}),s))});as.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},as.classNames={fullWidth:Wo,zeroRight:Uo};var os=function(){if(typeof __webpack_nonce__<`u`)return __webpack_nonce__};function ss(){if(!document)return null;var e=document.createElement(`style`);e.type=`text/css`;var t=os();return t&&e.setAttribute(`nonce`,t),e}function cs(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ls(e){(document.head||document.getElementsByTagName(`head`)[0]).appendChild(e)}var us=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ss())&&(cs(t,n),ls(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ds=function(){var e=us();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},fs=function(){var e=ds();return function(t){var n=t.styles,r=t.dynamic;return e(n,r),null}},ps={left:0,top:0,right:0,gap:0},ms=function(e){return parseInt(e||``,10)||0},hs=function(e){var t=window.getComputedStyle(document.body),n=t[e===`padding`?`paddingLeft`:`marginLeft`],r=t[e===`padding`?`paddingTop`:`marginTop`],i=t[e===`padding`?`paddingRight`:`marginRight`];return[ms(n),ms(r),ms(i)]},gs=function(e){if(e===void 0&&(e=`margin`),typeof window>`u`)return ps;var t=hs(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},_s=fs(),vs=`data-scroll-locked`,ys=function(e,t,n,r){var i=e.left,a=e.top,o=e.right,s=e.gap;return n===void 0&&(n=`margin`),`
  .${Go} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${vs}] {
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
  
  .${Uo} {
    right: ${s}px ${r};
  }
  
  .${Wo} {
    margin-right: ${s}px ${r};
  }
  
  .${Uo} .${Uo} {
    right: 0 ${r};
  }
  
  .${Wo} .${Wo} {
    margin-right: 0 ${r};
  }
  
  body[${vs}] {
    ${Ko}: ${s}px;
  }
`},bs=function(){var e=parseInt(document.body.getAttribute(`data-scroll-locked`)||`0`,10);return isFinite(e)?e:0},xs=function(){v.useEffect(function(){return document.body.setAttribute(vs,(bs()+1).toString()),function(){var e=bs()-1;e<=0?document.body.removeAttribute(vs):document.body.setAttribute(vs,e.toString())}},[])},Ss=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?`margin`:r;xs();var a=v.useMemo(function(){return gs(i)},[i]);return v.createElement(_s,{styles:ys(a,!t,i,n?``:`!important`)})},Cs=!1;if(typeof window<`u`)try{var ws=Object.defineProperty({},"passive",{get:function(){return Cs=!0,!0}});window.addEventListener(`test`,ws,ws),window.removeEventListener(`test`,ws,ws)}catch{Cs=!1}var Ts=Cs?{passive:!1}:!1,Es=function(e){return e.tagName===`TEXTAREA`},Ds=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!==`hidden`&&!(n.overflowY===n.overflowX&&!Es(e)&&n[t]===`visible`)},Os=function(e){return Ds(e,`overflowY`)},ks=function(e){return Ds(e,`overflowX`)},As=function(e,t){var n=t.ownerDocument,r=t;do{if(typeof ShadowRoot<`u`&&r instanceof ShadowRoot&&(r=r.host),Ns(e,r)){var i=Ps(e,r);if(i[1]>i[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},js=function(e){return[e.scrollTop,e.scrollHeight,e.clientHeight]},Ms=function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]},Ns=function(e,t){return e===`v`?Os(t):ks(t)},Ps=function(e,t){return e===`v`?js(t):Ms(t)},Fs=function(e,t){return e===`h`&&t===`rtl`?-1:1},Is=function(e,t,n,r,i){var a=Fs(e,window.getComputedStyle(t).direction),o=a*r,s=n.target,c=t.contains(s),l=!1,u=o>0,d=0,f=0;do{if(!s)break;var p=Ps(e,s),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&Ns(e,s)&&(d+=h,f+=m);var g=s.parentNode;s=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(u&&(i&&Math.abs(d)<1||!i&&o>d)||!u&&(i&&Math.abs(f)<1||!i&&-o>f))&&(l=!0),l},Ls=function(e){return`changedTouches`in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Rs=function(e){return[e.deltaX,e.deltaY]},zs=function(e){return e&&`current`in e?e.current:e},Bs=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Vs=function(e){return`
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`},Hs=0,Us=[];function Ws(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),i=v.useState(Hs++)[0],a=v.useState(fs)[0],o=v.useRef(e);v.useEffect(function(){o.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add(`block-interactivity-${i}`);var t=Ho([e.lockRef.current],(e.shards||[]).map(zs),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add(`allow-interactivity-${i}`)}),function(){document.body.classList.remove(`block-interactivity-${i}`),t.forEach(function(e){return e.classList.remove(`allow-interactivity-${i}`)})}}},[e.inert,e.lockRef.current,e.shards]);var s=v.useCallback(function(e,t){if(`touches`in e&&e.touches.length===2||e.type===`wheel`&&e.ctrlKey)return!o.current.allowPinchZoom;var i=Ls(e),a=n.current,s=`deltaX`in e?e.deltaX:a[0]-i[0],c=`deltaY`in e?e.deltaY:a[1]-i[1],l,u=e.target,d=Math.abs(s)>Math.abs(c)?`h`:`v`;if(`touches`in e&&d===`h`&&u.type===`range`)return!1;var f=window.getSelection(),p=f&&f.anchorNode;if(p&&(p===u||p.contains(u)))return!1;var m=As(d,u);if(!m)return!0;if(m?l=d:(l=d===`v`?`h`:`v`,m=As(d,u)),!m)return!1;if(!r.current&&`changedTouches`in e&&(s||c)&&(r.current=l),!l)return!0;var h=r.current||l;return Is(h,t,e,h===`h`?s:c,!0)},[]),c=v.useCallback(function(e){var n=e;if(Us.length&&Us[Us.length-1]===a){var r=`deltaY`in n?Rs(n):Ls(n),i=t.current.filter(function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&Bs(e.delta,r)})[0];if(i&&i.should)n.cancelable&&n.preventDefault();else if(!i){var c=(o.current.shards||[]).map(zs).filter(Boolean).filter(function(e){return e.contains(n.target)});(c.length>0?s(n,c[0]):!o.current.noIsolation)&&n.cancelable&&n.preventDefault()}}},[]),l=v.useCallback(function(e,n,r,i){var a={name:e,delta:n,target:r,should:i,shadowParent:Gs(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),u=v.useCallback(function(e){n.current=Ls(e),r.current=void 0},[]),d=v.useCallback(function(t){l(t.type,Rs(t),t.target,s(t,e.lockRef.current))},[]),f=v.useCallback(function(t){l(t.type,Ls(t),t.target,s(t,e.lockRef.current))},[]);v.useEffect(function(){return Us.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener(`wheel`,c,Ts),document.addEventListener(`touchmove`,c,Ts),document.addEventListener(`touchstart`,u,Ts),function(){Us=Us.filter(function(e){return e!==a}),document.removeEventListener(`wheel`,c,Ts),document.removeEventListener(`touchmove`,c,Ts),document.removeEventListener(`touchstart`,u,Ts)}},[]);var p=e.removeScrollBar,m=e.inert;return v.createElement(v.Fragment,null,m?v.createElement(a,{styles:Vs(i)}):null,p?v.createElement(Ss,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Gs(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Ks=ns(rs,Ws),qs=v.forwardRef(function(e,t){return v.createElement(as,Bo({},e,{ref:t,sideCar:Ks}))});qs.classNames=as.classNames;var Js=function(e){return typeof document>`u`?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},Ys=new WeakMap,Xs=new WeakMap,Zs={},Qs=0,$s=function(e){return e&&(e.host||$s(e.parentNode))},ec=function(e,t){return t.map(function(t){if(e.contains(t))return t;var n=$s(t);return n&&e.contains(n)?n:(console.error(`aria-hidden`,t,`in not contained inside`,e,`. Doing nothing`),null)}).filter(function(e){return!!e})},tc=function(e,t,n,r){var i=ec(t,Array.isArray(e)?e:[e]);Zs[n]||(Zs[n]=new WeakMap);var a=Zs[n],o=[],s=new Set,c=new Set(i),l=function(e){e&&!s.has(e)&&(s.add(e),l(e.parentNode))};i.forEach(l);var u=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(s.has(e))u(e);else try{var t=e.getAttribute(r),i=t!==null&&t!==`false`,c=(Ys.get(e)||0)+1,l=(a.get(e)||0)+1;Ys.set(e,c),a.set(e,l),o.push(e),c===1&&i&&Xs.set(e,!0),l===1&&e.setAttribute(n,`true`),i||e.setAttribute(r,`true`)}catch(t){console.error(`aria-hidden: cannot operate on `,e,t)}})};return u(t),s.clear(),Qs++,function(){o.forEach(function(e){var t=Ys.get(e)-1,i=a.get(e)-1;Ys.set(e,t),a.set(e,i),t||(Xs.has(e)||e.removeAttribute(r),Xs.delete(e)),i||e.removeAttribute(n)}),Qs--,Qs||(Ys=new WeakMap,Ys=new WeakMap,Xs=new WeakMap,Zs={})}},nc=function(e,t,n){n===void 0&&(n=`data-aria-hidden`);var r=Array.from(Array.isArray(e)?e:[e]),i=t||Js(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll(`[aria-live], script`))),tc(r,i,n,`aria-hidden`)):function(){return null}},rc=Object.defineProperty,ic=(e,t)=>rc(e,`name`,{value:t,configurable:!0}),ac=`Dialog`,[oc,sc]=Zr(ac),[cc,lc]=oc(ac),uc=ic(e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!0}=e,s=v.useRef(null),c=v.useRef(null),{nodes:l,registry:u}=yo(),[d,f]=ki({prop:r,defaultProp:i??!1,onChange:a,caller:ac}),[p,m]=v.useState(0),[h,g]=v.useState(0);return(0,U.jsx)(cc,{scope:t,triggerRef:s,contentRef:c,contentId:qi(),titleId:qi(),descriptionId:qi(),titlePresent:p>0,descriptionPresent:h>0,setTitleCount:m,setDescriptionCount:g,open:d,onOpenChange:f,onOpenToggle:v.useCallback(()=>f(e=>!e),[f]),modal:o,branchNodes:l,branchRegistry:u,children:n})},`Dialog`),dc=`DialogTrigger`,fc=v.forwardRef(ic(function(e,t){let{__scopeDialog:n,...r}=e,i=lc(dc,n),a=H(t,i.triggerRef);return(0,U.jsx)(W.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":jc(i.open),...r,ref:a,onClick:G(e.onClick,i.onOpenToggle)})},`DialogTrigger`)),pc=`DialogPortal`,[mc,hc]=oc(pc,{forceMount:void 0}),gc=ic(e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=lc(pc,t);return(0,U.jsx)(mc,{scope:t,forceMount:n,children:v.Children.map(r,e=>(0,U.jsx)(Li,{present:n||a.open,children:(0,U.jsx)(No,{asChild:!0,container:i,children:e})}))})},`DialogPortal`),_c=`DialogOverlay`,vc=v.forwardRef(ic(function(e,t){let n=hc(_c,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=lc(_c,e.__scopeDialog);return a.modal?(0,U.jsx)(Li,{present:r||a.open,children:(0,U.jsx)(bc,{...i,ref:t})}):null},`DialogOverlay`)),yc=wr(`DialogOverlay.RemoveScroll`),bc=v.forwardRef(ic(function(e,t){let{__scopeDialog:n,...r}=e,i=lc(_c,n),a=H(t,io());return(0,U.jsx)(qs,{as:yc,allowPinchZoom:!0,shards:v.useMemo(()=>[i.contentRef,...i.branchNodes.map(e=>({current:e}))],[i.contentRef,i.branchNodes]),children:(0,U.jsx)(W.div,{"data-state":jc(i.open),...r,ref:a,style:{pointerEvents:`auto`,...r.style}})})},`DialogOverlayImpl`)),xc=`DialogContent`,Sc=v.forwardRef(ic(function(e,t){let n=hc(xc,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=lc(xc,e.__scopeDialog);return(0,U.jsx)(Li,{present:r||a.open,children:a.modal?(0,U.jsx)(Cc,{...i,ref:t}):(0,U.jsx)(wc,{...i,ref:t})})},`DialogContent`)),Cc=v.forwardRef(ic(function(e,t){let n=lc(xc,e.__scopeDialog),r=v.useRef(null),i=H(t,n.contentRef,r);return v.useEffect(()=>{let e=r.current;if(e)return nc(e)},[]),(0,U.jsx)(Tc,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:G(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:G(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:G(e.onFocusOutside,e=>e.preventDefault())})},`DialogContentModal`)),wc=v.forwardRef(ic(function(e,t){let n=lc(xc,e.__scopeDialog),r=v.useRef(!1),i=v.useRef(!1);return(0,U.jsx)(Tc,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`DialogContentNonModal`)),Tc=v.forwardRef(ic(function(e,t){let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,"aria-describedby":o,children:s,...c}=e,l=lc(xc,n);return Ro(),(0,U.jsx)(vo,{registry:l.branchRegistry,children:(0,U.jsx)(go,{asChild:!0,loop:!0,trapped:r,branches:l.branchNodes,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,U.jsx)(ro,{role:`dialog`,id:l.contentId,"aria-labelledby":l.titlePresent?l.titleId:void 0,"aria-describedby":l.descriptionPresent?Ac(o,l.descriptionId):o,"data-state":jc(l.open),...c,ref:t,deferPointerDownOutside:!0,onDismiss:()=>l.onOpenChange(!1),children:s})})})},`DialogContentImpl`)),Ec=v.forwardRef(ic(function(e,t){let{__scopeDialog:n,...r}=e,i=lc(`DialogTitle`,n),{setTitleCount:a}=i;return $r(()=>(a(e=>e+1),()=>a(e=>e-1)),[a]),(0,U.jsx)(W.h2,{id:i.titleId,...r,ref:t})},`DialogTitle`)),Dc=v.forwardRef(ic(function(e,t){let{__scopeDialog:n,...r}=e,i=lc(`DialogDescription`,n),{setDescriptionCount:a}=i;return $r(()=>(a(e=>e+1),()=>a(e=>e-1)),[a]),(0,U.jsx)(W.p,{id:i.descriptionId,...r,ref:t})},`DialogDescription`)),Oc=`DialogClose`,kc=v.forwardRef(ic(function(e,t){let{__scopeDialog:n,...r}=e,i=lc(Oc,n);return(0,U.jsx)(W.button,{type:`button`,...r,ref:t,onClick:G(e.onClick,()=>i.onOpenChange(!1))})},`DialogClose`));function Ac(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}ic(Ac,`concatAriaDescribedby`);function jc(e){return e?`open`:`closed`}ic(jc,`getState`);var Mc=Object.defineProperty,Nc=(e,t)=>Mc(e,`name`,{value:t,configurable:!0}),[Pc,Fc]=Zr(`AlertDialog`,[sc]),Ic=sc(),Lc=Nc(e=>{let{__scopeAlertDialog:t,...n}=e,r=Ic(t);return(0,U.jsx)(uc,{...r,...n,modal:!0})},`AlertDialog`),Rc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Ic(n);return(0,U.jsx)(fc,{...i,...r,ref:t})},`AlertDialogTrigger`)),zc=Nc(e=>{let{__scopeAlertDialog:t,...n}=e,r=Ic(t);return(0,U.jsx)(gc,{...r,...n})},`AlertDialogPortal`),Bc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Ic(n);return(0,U.jsx)(vc,{...i,...r,ref:t})},`AlertDialogOverlay`)),[Vc,Hc]=Pc(`AlertDialogContent`),Uc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,children:r,...i}=e,a=Ic(n),o=H(t,v.useRef(null)),s=v.useRef(null);return(0,U.jsx)(Vc,{scope:n,cancelRef:s,children:(0,U.jsx)(Sc,{role:`alertdialog`,...a,...i,ref:o,onOpenAutoFocus:G(i.onOpenAutoFocus,e=>{e.preventDefault(),s.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:r})})},`AlertDialogContent`)),Wc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Ic(n);return(0,U.jsx)(Ec,{...i,...r,ref:t})},`AlertDialogTitle`)),Gc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Ic(n);return(0,U.jsx)(Dc,{...i,...r,ref:t})},`AlertDialogDescription`)),Kc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,...r}=e,i=Ic(n);return(0,U.jsx)(kc,{...i,...r,ref:t})},`AlertDialogAction`)),qc=`AlertDialogCancel`,Jc=v.forwardRef(Nc(function(e,t){let{__scopeAlertDialog:n,...r}=e,{cancelRef:i}=Hc(qc,n),a=Ic(n),o=H(t,i);return(0,U.jsx)(kc,{...a,...r,ref:o})},`AlertDialogCancel`)),Yc=Object.defineProperty,Xc=v.forwardRef(((e,t)=>Yc(e,`name`,{value:t,configurable:!0}))(function(e,t){let{ratio:n=1,style:r,...i}=e;return(0,U.jsx)(`div`,{style:{position:`relative`,width:`100%`,paddingBottom:`${100/n}%`},"data-radix-aspect-ratio-wrapper":``,children:(0,U.jsx)(W.div,{...i,ref:t,style:{...r,position:`absolute`,top:0,right:0,bottom:0,left:0}})})},`AspectRatio`)),Zc=Object.defineProperty,Qc=(e,t)=>Zc(e,`name`,{value:t,configurable:!0}),$c=`Avatar`,[el,tl]=Zr($c),nl={Idle:`idle`,Loading:`loading`,Loaded:`loaded`,Error:`error`},rl=[0,()=>void 0],[il,al]=el($c),ol=v.forwardRef(Qc(function(e,t){let{__scopeAvatar:n,...r}=e,[i,a]=v.useState(nl.Idle),[o,s]=dl();return(0,U.jsx)(il,{scope:n,imageLoadingStatus:i,setImageLoadingStatus:a,imageCount:o,setImageCount:s,children:(0,U.jsx)(W.span,{...r,ref:t})})},`Avatar`)),sl=`AvatarFallback`,cl=v.forwardRef(Qc(function(e,t){let{__scopeAvatar:n,delayMs:r,...i}=e,a=al(sl,n),[o,s]=v.useState(r===void 0);return v.useEffect(()=>{if(r!==void 0){let e=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(e)}},[r]),o&&a.imageLoadingStatus!==nl.Loaded?(0,U.jsx)(W.span,{...i,ref:t}):null},`AvatarFallback`));function ll(e,{loadingStatus:t,setLoadingStatus:n,referrerPolicy:r,crossOrigin:i}){return $r(()=>{if(!e){n(nl.Error);return}let t=new window.Image,a=Qc(e=>{let t=e.currentTarget;n(ul(t))},`handleLoad`),o=Qc(()=>n(nl.Error),`handleError`);return t.addEventListener(`load`,a),t.addEventListener(`error`,o),r&&(t.referrerPolicy=r),t.crossOrigin=i??null,t.src=e,n(ul(t)),()=>{t.removeEventListener(`load`,a),t.removeEventListener(`error`,o),n(nl.Idle)}},[e,i,r,n]),t}Qc(ll,`useImageLoadingStatus`);function ul(e){return e.complete?e.naturalWidth>0?nl.Loaded:nl.Error:nl.Loading}Qc(ul,`getImageLoadingStatus`);function dl(){return rl}Qc(dl,`useImageCount`);function fl(e){}Qc(fl,`useUpdateImageCount`);var pl=Object.defineProperty,ml=(e,t)=>pl(e,`name`,{value:t,configurable:!0});function hl(e){let[t,n]=v.useState(void 0);return $r(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=0,r=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let i=r[0];window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>{let t,r;if(`borderBoxSize`in i){let e=i.borderBoxSize,n=Array.isArray(e)?e[0]:e;t=n.inlineSize,r=n.blockSize}else t=e.offsetWidth,r=e.offsetHeight;n({width:t,height:r})})});return r.observe(e,{box:`border-box`}),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}n(void 0)},[e]),t}ml(hl,`useSize`);var gl=Object.defineProperty,_l=(e,t)=>gl(e,`name`,{value:t,configurable:!0}),vl=`Checkbox`,[yl,bl]=Zr(vl),[xl,Sl]=yl(vl);function Cl(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:u=`on`,internal_do_not_use_render:d}=e,[f,p]=ki({prop:n,defaultProp:i??!1,onChange:c,caller:vl}),[m,h]=v.useState(null),[g,_]=v.useState(null),[y,b]=v.useState(null),x=!m||!!o||!!m.closest(`form`),S={checked:f,disabled:a,setChecked:p,control:m,setControl:h,name:s,form:o,value:u,userClick:y,onUserClick:b,required:l,defaultChecked:!Ml(i)&&i,isFormControl:x,bubbleInput:g,setBubbleInput:_};return(0,U.jsx)(xl,{scope:t,...S,children:jl(d)?d(S):r})}_l(Cl,`CheckboxProvider`);var wl=`CheckboxTrigger`,Tl=v.forwardRef(_l(function({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},i){let{control:a,value:o,disabled:s,checked:c,required:l,setControl:u,setChecked:d,onUserClick:f,isFormControl:p,bubbleInput:m}=Sl(wl,e),h=H(i,u),g=v.useRef(c);return v.useEffect(()=>{let e=a?.form;if(e){let t=_l(()=>d(g.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[a,d]),(0,U.jsx)(W.button,{type:`button`,role:`checkbox`,"aria-checked":Ml(c)?`mixed`:c,"aria-required":l,"data-state":Nl(c),"data-disabled":s?``:void 0,disabled:s,value:o,...r,ref:h,onKeyDown:G(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:G(n,e=>{let t=e.isPropagationStopped();f({requestedChecked:Ml(c)?!0:!c,hasConsumerStoppedPropagation:t}),d(e=>Ml(e)?!0:!e),m&&p&&(t||e.stopPropagation())})})},`CheckboxTrigger`)),El=v.forwardRef(_l(function(e,t){let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,U.jsx)(Cl,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Tl,{...d,ref:t,__scopeCheckbox:n}),e&&(0,U.jsx)(Al,{__scopeCheckbox:n})]})})},`Checkbox`)),Dl=`CheckboxIndicator`,Ol=v.forwardRef(_l(function(e,t){let{__scopeCheckbox:n,forceMount:r,...i}=e,a=Sl(Dl,n);return(0,U.jsx)(Li,{present:r||Ml(a.checked)||a.checked===!0,children:(0,U.jsx)(W.span,{"data-state":Nl(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})},`CheckboxIndicator`)),kl=`CheckboxBubbleInput`,Al=v.forwardRef(_l(function({__scopeCheckbox:e,onClick:t,...n},r){let{control:i,userClick:a,checked:o,defaultChecked:s,required:c,disabled:l,name:u,value:d,form:f,bubbleInput:p,setBubbleInput:m}=Sl(kl,e),h=H(r,m),g=hl(i),_=v.useRef(!1),y=v.useRef(o),b=v.useRef(a),x=v.useRef(null);v.useEffect(()=>{let e=p;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=y.current!==o;y.current=o;let i=a!==null&&a!==b.current;if(b.current=a,i)x.current=r?null:a,r&&(e.indeterminate=Ml(o),n.call(e,!Ml(o)&&o)),e.dispatchEvent(new Event(`click`,{bubbles:!a.hasConsumerStoppedPropagation}));else if(r){let t=x.current;x.current=null;let r=t?.requestedChecked===o;_.current=!0,e.indeterminate=Ml(o),n.call(e,!Ml(o)&&o),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),_.current=!1}},[p,o,a]);let S=v.useRef(!Ml(o)&&o);return(0,U.jsx)(W.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:s??S.current,required:c,disabled:l,name:u,value:d,form:f,...n,tabIndex:-1,ref:h,onClick:G(t,e=>{_.current&&e.stopPropagation()}),style:{...n.style,...g,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`CheckboxBubbleInput`));function jl(e){return typeof e==`function`}_l(jl,`isFunction`);function Ml(e){return e===`indeterminate`}_l(Ml,`isIndeterminate`);function Nl(e){return Ml(e)?`indeterminate`:e?`checked`:`unchecked`}_l(Nl,`getState`);var Pl=[`top`,`right`,`bottom`,`left`],Fl=Math.min,Il=Math.max,Ll=Math.round,Rl=Math.floor,zl=e=>({x:e,y:e}),Bl={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Vl(e,t,n){return Il(e,Fl(t,n))}function Hl(e,t){return typeof e==`function`?e(t):e}function Ul(e){return e.split(`-`)[0]}function Wl(e){return e.split(`-`)[1]}function Gl(e){return e===`x`?`y`:`x`}function Kl(e){return e===`y`?`height`:`width`}function ql(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Jl(e){return Gl(ql(e))}function Yl(e,t,n){n===void 0&&(n=!1);let r=Wl(e),i=Jl(e),a=Kl(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=iu(o)),[o,iu(o)]}function Xl(e){let t=iu(e);return[Zl(e),t,Zl(t)]}function Zl(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Ql=[`left`,`right`],$l=[`right`,`left`],eu=[`top`,`bottom`],tu=[`bottom`,`top`];function nu(e,t,n){switch(e){case`top`:case`bottom`:return n?t?$l:Ql:t?Ql:$l;case`left`:case`right`:return t?eu:tu;default:return[]}}function ru(e,t,n,r){let i=Wl(e),a=nu(Ul(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Zl)))),a}function iu(e){let t=Ul(e);return Bl[t]+e.slice(t.length)}function au(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ou(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:au(e)}function su(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function cu(e,t,n){let{reference:r,floating:i}=e,a=ql(t),o=Jl(t),s=Kl(o),c=Ul(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Wl(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function lu(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Hl(t,e),p=ou(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=su(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=su(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var uu=50,du=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:lu},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=cu(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<uu&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=cu(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},fu=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Hl(e,t)||{};if(l==null)return{};let d=ou(u),f={x:n,y:r},p=Jl(i),m=Kl(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,ee=Fl(d[_],T),E=Fl(d[v],T),D=C-h[m]-E,O=C/2-h[m]/2+w,k=Vl(ee,O,D),A=!c.arrow&&Wl(i)!=null&&O!==k&&a.reference[m]/2-(O<ee?ee:E)-h[m]/2<0,j=A?O<ee?O-ee:O-D:0;return{[p]:f[p]+j,data:{[p]:k,centerOffset:O-k-j,...A&&{alignmentOffset:j}},reset:A}}}),pu=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Hl(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Ul(r),_=ql(o),v=Ul(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[iu(o)]:Xl(o)),x=p!==`none`;!d&&x&&b.push(...ru(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Yl(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===ql(t)||T.every(e=>ql(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=ql(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}};function mu(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function hu(e){return Pl.some(t=>e[t]>=0)}var gu=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=Hl(e,t);switch(i){case`referenceHidden`:{let e=mu(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:hu(e)}}}case`escaped`:{let e=mu(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:hu(e)}}}default:return{}}}}},_u=new Set([`left`,`top`]);async function vu(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Ul(n),s=Wl(n),c=ql(n)===`y`,l=_u.has(o)?-1:1,u=a&&c?-1:1,d=Hl(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var yu=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await vu(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},bu=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Hl(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=ql(i),p=Gl(f),m=u[p],h=u[f],g=(e,t)=>Vl(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},xu=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=Hl(e,t),u={x:n,y:r},d=ql(i),f=Gl(d),p=u[f],m=u[d],h=Hl(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=_u.has(Ul(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Su=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Hl(e,t),c=await i.detectOverflow(t,s),l=Ul(n),u=Wl(n),d=ql(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Fl(p-c[m],g),y=Fl(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Il(c.left,c.right):S=p-2*Il(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function Cu(){return typeof window<`u`}function wu(e){return Du(e)?(e.nodeName||``).toLowerCase():`#document`}function Tu(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Eu(e){return((Du(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Du(e){return Cu()?e instanceof Node||e instanceof Tu(e).Node:!1}function Ou(e){return Cu()?e instanceof Element||e instanceof Tu(e).Element:!1}function ku(e){return Cu()?e instanceof HTMLElement||e instanceof Tu(e).HTMLElement:!1}function Au(e){return!Cu()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Tu(e).ShadowRoot}function ju(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Hu(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Mu(e){return/^(table|td|th)$/.test(wu(e))}function Nu(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Pu=/transform|translate|scale|rotate|perspective|filter/,Fu=/paint|layout|strict|content/,Iu=e=>!!e&&e!==`none`,Lu;function Ru(e){let t=Ou(e)?Hu(e):e;return Iu(t.transform)||Iu(t.translate)||Iu(t.scale)||Iu(t.rotate)||Iu(t.perspective)||!Bu()&&(Iu(t.backdropFilter)||Iu(t.filter))||Pu.test(t.willChange||``)||Fu.test(t.contain||``)}function zu(e){let t=Wu(e);for(;ku(t)&&!Vu(t);){if(Ru(t))return t;if(Nu(t))return null;t=Wu(t)}return null}function Bu(){return Lu??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Lu}function Vu(e){return/^(html|body|#document)$/.test(wu(e))}function Hu(e){return Tu(e).getComputedStyle(e)}function Uu(e){return Ou(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Wu(e){if(wu(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Au(e)&&e.host||Eu(e);return Au(t)?t.host:t}function Gu(e){let t=Wu(e);return Vu(t)?(e.ownerDocument||e).body:ku(t)&&ju(t)?t:Gu(t)}function Ku(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Gu(e),i=r===e.ownerDocument?.body,a=Tu(r);if(i){let e=qu(a);return t.concat(a,a.visualViewport||[],ju(r)?r:[],e&&n?Ku(e):[])}return t.concat(r,Ku(r,[],n))}function qu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ju(e){let t=Hu(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=ku(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Ll(n)!==a||Ll(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Yu(e){return Ou(e)?e:e.contextElement}function Xu(e){let t=Yu(e);if(!ku(t))return zl(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ju(t),o=(a?Ll(n.width):n.width)/r,s=(a?Ll(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Zu=zl(0);function Qu(e){let t=Tu(e);return!Bu()||!t.visualViewport?Zu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $u(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===Tu(e)}function J(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Yu(e),o=zl(1);t&&(r?Ou(r)&&(o=Xu(r)):o=Xu(e));let s=$u(a,n,r)?Qu(a):zl(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=Tu(a),t=Ou(r)?Tu(r):r,n=e,i=qu(n);for(;i&&t!==n;){let e=Xu(i),t=i.getBoundingClientRect(),r=Hu(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Tu(i),i=qu(n)}}return su({width:u,height:d,x:c,y:l})}function Y(e,t){let n=Uu(e).scrollLeft;return t?t.left+n:J(Eu(e)).left+n}function ed(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Y(e,n),y:n.top+t.scrollTop}}function td(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Eu(r),s=t?Nu(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=zl(1),u=zl(0),d=ku(r);if((d||!a)&&((wu(r)!==`body`||ju(o))&&(c=Uu(r)),d)){let e=J(r);l=Xu(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ed(o,c):zl(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function nd(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function rd(e){let t=Uu(e),n=e.ownerDocument.body,r=Il(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Il(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Y(e),o=-t.scrollTop;return Hu(n).direction===`rtl`&&(a+=Il(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var id=25;function ad(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=Tu(e),a=Eu(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Bu()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Y(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=id&&(s-=o)}return{width:s,height:c,x:l,y:u}}function od(e,t){let n=J(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Xu(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function sd(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=ad(e,n,t);else if(t===`document`)r=rd(Eu(e));else if(Ou(t))r=od(t,n);else{let n=Qu(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return su(r)}function cd(e,t){let n=t.get(e);if(n)return n;let r=Ku(e,[],!1).filter(e=>Ou(e)&&wu(e)!==`body`),i=null,a=Hu(e).position===`fixed`,o=a?Wu(e):e;for(;Ou(o)&&!Vu(o);){let e=Hu(o),t=Ru(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Wu(o)}return t.set(e,r),r}function ld(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Nu(t)?[]:cd(t,this._c):[].concat(n),r],o=sd(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=sd(t,a[e],i);s=Il(n.top,s),c=Fl(n.right,c),l=Fl(n.bottom,l),u=Il(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function ud(e){let{width:t,height:n}=Ju(e);return{width:t,height:n}}function dd(e,t,n){let r=ku(t),i=Eu(t),a=n===`fixed`,o=J(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=zl(0);if((r||!a)&&((wu(t)!==`body`||ju(i))&&(s=Uu(t)),r)){let e=J(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Y(i));let l=i&&!r&&!a?ed(i,s):zl(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function fd(e){return Hu(e).position===`static`}function pd(e,t){if(!ku(e)||Hu(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Eu(e)===n&&(n=n.ownerDocument.body),n}function md(e,t){let n=Tu(e);if(Nu(e))return n;if(!ku(e)){let t=Wu(e);for(;t&&!Vu(t);){if(Ou(t)&&!fd(t))return t;t=Wu(t)}return n}let r=pd(e,t);for(;r&&Mu(r)&&fd(r);)r=pd(r,t);return r&&Vu(r)&&fd(r)&&!Ru(r)?n:r||zu(e)||n}var hd=async function(e){let t=this.getOffsetParent||md,n=this.getDimensions,r=await n(e.floating);return{reference:dd(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function gd(e){return Hu(e).direction===`rtl`}var _d={convertOffsetParentRelativeRectToViewportRelativeRect:td,getDocumentElement:Eu,getClippingRect:ld,getOffsetParent:md,getElementRects:hd,getClientRects:nd,getDimensions:ud,getScale:Xu,isElement:Ou,isRTL:gd};function vd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function yd(e,t,n){let r=null,i,a=Eu(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Rl(d),h=Rl(a.clientWidth-(u+f)),g=Rl(a.clientHeight-(d+p)),_=Rl(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Il(0,Fl(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!vd(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=Tu(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function bd(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Yu(e),u=i||a?[...l?Ku(l):[],...t?Ku(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?yd(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?J(e):null;c&&g();function g(){let t=J(e);h&&!vd(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var xd=yu,Sd=bu,Cd=pu,wd=Su,Td=gu,Ed=fu,Dd=xu,Od=(e,t,n)=>{let r=new Map,i=n??{},a={..._d,...i.platform,_c:r};return du(e,t,{...i,platform:a})},kd=typeof document<`u`?v.useLayoutEffect:function(){};function Ad(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ad(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Ad(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function jd(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Md(e,t){let n=jd(e);return Math.round(t*n)/n}function Nd(e){let t=v.useRef(e);return kd(()=>{t.current=e}),t}function Pd(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=v.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=v.useState(r);Ad(f,r)||p(r);let[m,h]=v.useState(null),[g,_]=v.useState(null),y=v.useCallback(e=>{e!==C.current&&(C.current=e,h(e))},[]),b=v.useCallback(e=>{e!==w.current&&(w.current=e,_(e))},[]),x=a||m,S=o||g,C=v.useRef(null),w=v.useRef(null),T=v.useRef(u),ee=c!=null,E=Nd(c),D=Nd(i),O=Nd(l),k=v.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:f};D.current&&(e.platform=D.current),Od(C.current,w.current,e).then(e=>{let t={...e,isPositioned:O.current!==!1};A.current&&!Ad(T.current,t)&&(T.current=t,ct.flushSync(()=>{d(t)}))})},[f,t,n,D,O]);kd(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let A=v.useRef(!1);kd(()=>(A.current=!0,()=>{A.current=!1}),[]),kd(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(E.current)return E.current(x,S,k);k()}},[x,S,k,E,ee]);let j=v.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),te=v.useMemo(()=>({reference:x,floating:S}),[x,S]),M=v.useMemo(()=>{let e={position:n,left:0,top:0};if(!te.floating)return e;let t=Md(te.floating,u.x),r=Md(te.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...jd(te.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,te.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:k,refs:j,elements:te,floatingStyles:M}),[u,k,j,te,M])}var Fd=e=>{function t(e){return{}.hasOwnProperty.call(e,`current`)}return{name:`arrow`,options:e,fn(n){let{element:r,padding:i}=typeof e==`function`?e(n):e;return r&&t(r)?r.current==null?{}:Ed({element:r.current,padding:i}).fn(n):r?Ed({element:r,padding:i}).fn(n):{}}}},Id=(e,t)=>{let n=xd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ld=(e,t)=>{let n=Sd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Rd=(e,t)=>({fn:Dd(e).fn,options:[e,t]}),zd=(e,t)=>{let n=Cd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Bd=(e,t)=>{let n=wd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Vd=(e,t)=>{let n=Td(e);return{name:n.name,fn:n.fn,options:[e,t]}},Hd=(e,t)=>{let n=Fd(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ud=Object.defineProperty,Wd=v.forwardRef(((e,t)=>Ud(e,`name`,{value:t,configurable:!0}))(function(e,t){let{children:n,width:r=10,height:i=5,...a}=e;return(0,U.jsx)(W.svg,{...a,ref:t,width:r,height:i,viewBox:`0 0 30 10`,preserveAspectRatio:`none`,children:e.asChild?n:(0,U.jsx)(`polygon`,{points:`0,0 30,0 15,10`})})},`Arrow`)),Gd=Object.defineProperty,Kd=(e,t)=>Gd(e,`name`,{value:t,configurable:!0}),qd={Partial:`partial`,Always:`always`},Jd={Optimized:`optimized`,Always:`always`},Yd=`Popper`,[Xd,Zd]=Zr(Yd),[Qd,$d]=Xd(Yd),ef=Kd(e=>{let{__scopePopper:t,children:n}=e,[r,i]=v.useState(null),[a,o]=v.useState(void 0);return(0,U.jsx)(Qd,{scope:t,anchor:r,onAnchorChange:i,placementState:a,setPlacementState:o,children:n})},`Popper`),tf=`PopperAnchor`,nf=v.forwardRef(Kd(function(e,t){let{__scopePopper:n,virtualRef:r,...i}=e,a=$d(tf,n),o=v.useRef(null),s=a.onAnchorChange,c=H(t,v.useCallback(e=>{o.current=e,e&&s(e)},[s])),l=v.useRef(null);v.useEffect(()=>{if(!r)return;let e=l.current;l.current=r.current,e!==l.current&&s(l.current)});let u=a.placementState&&pf(a.placementState),d=u?.[0],f=u?.[1];return r?null:(0,U.jsx)(W.div,{"data-radix-popper-side":d,"data-radix-popper-align":f,...i,ref:c})},`PopperAnchor`)),rf=`PopperContent`,[af,of]=Xd(rf),sf=v.forwardRef(Kd(function(e,t){let{__scopePopper:n,side:r=`bottom`,sideOffset:i=0,align:a=`center`,alignOffset:o=0,arrowPadding:s=0,avoidCollisions:c=!0,collisionBoundary:l=[],collisionPadding:u=0,sticky:d=qd.Partial,hideWhenDetached:f=!1,updatePositionStrategy:p=Jd.Optimized,onPlaced:m,...h}=e,g=$d(rf,n),[_,y]=v.useState(null),b=H(t,y),[x,S]=v.useState(null),C=hl(x),w=C?.width??0,T=C?.height??0,ee=r+(a===`center`?``:`-`+a),E=typeof u==`number`?u:{top:0,right:0,bottom:0,left:0,...u},D=Array.isArray(l)?l:[l],O=D.length>0,k={padding:E,boundary:D.filter(df),altBoundary:O},{refs:A,floatingStyles:j,placement:te,isPositioned:M,middlewareData:N}=Pd({strategy:`fixed`,placement:ee,whileElementsMounted:Kd((...e)=>bd(...e,{animationFrame:p===Jd.Always}),`whileElementsMounted`),elements:{reference:g.anchor},middleware:[Id({mainAxis:i+T,alignmentAxis:o}),c&&Ld({mainAxis:!0,crossAxis:!1,...d===qd.Partial?{limiter:Rd()}:{},...k}),c&&zd({...k}),Bd({...k,apply:Kd(({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:a}=t.reference,o=e.floating.style;o.setProperty(`--radix-popper-available-width`,`${n}px`),o.setProperty(`--radix-popper-available-height`,`${r}px`),o.setProperty(`--radix-popper-anchor-width`,`${i}px`),o.setProperty(`--radix-popper-anchor-height`,`${a}px`)},`apply`)}),x&&Hd({element:x,padding:s}),ff({arrowWidth:w,arrowHeight:T}),f&&Vd(O?{strategy:`referenceHidden`,...k}:{strategy:`referenceHidden`,padding:k.padding,altBoundary:k.altBoundary})]}),P=g.setPlacementState;$r(()=>(P(te),()=>{P(void 0)}),[te,P]);let[F,ne]=pf(te),re=Ya(m);$r(()=>{M&&re?.()},[M,re]);let ie=N.arrow?.x,ae=N.arrow?.y,oe=N.arrow?.centerOffset!==0,[se,ce]=v.useState();return $r(()=>{_&&ce(window.getComputedStyle(_).zIndex)},[_]),(0,U.jsx)(`div`,{ref:A.setFloating,"data-radix-popper-content-wrapper":``,style:{...j,transform:M?j.transform:`translate(0, -200%)`,minWidth:`max-content`,zIndex:se,"--radix-popper-transform-origin":[N.transformOrigin?.x,N.transformOrigin?.y].join(` `),...N.hide?.referenceHidden&&{visibility:`hidden`,pointerEvents:`none`}},dir:e.dir,children:(0,U.jsx)(af,{scope:n,placedSide:F,placedAlign:ne,onArrowChange:S,arrowX:ie,arrowY:ae,shouldHideArrow:oe,children:(0,U.jsx)(W.div,{"data-side":F,"data-align":ne,...h,ref:b,style:{...h.style,animation:M?h.style?.animation:`none`}})})})},`PopperContent`)),cf=`PopperArrow`,lf={top:`bottom`,right:`left`,bottom:`top`,left:`right`},uf=v.forwardRef(Kd(function(e,t){let{__scopePopper:n,...r}=e,i=of(cf,n),a=lf[i.placedSide];return(0,U.jsx)(`span`,{ref:i.onArrowChange,style:{position:`absolute`,left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:``,right:`0 0`,bottom:`center 0`,left:`100% 0`}[i.placedSide],transform:{top:`translateY(100%)`,right:`translateY(50%) rotate(90deg) translateX(-50%)`,bottom:`rotate(180deg)`,left:`translateY(50%) rotate(-90deg) translateX(50%)`}[i.placedSide],visibility:i.shouldHideArrow?`hidden`:void 0},children:(0,U.jsx)(Wd,{...r,ref:t,style:{...r.style,display:`block`}})})},`PopperArrow`));function df(e){return e!==null}Kd(df,`isNotNull`);var ff=Kd(e=>({name:`transformOrigin`,options:e,fn(t){let{placement:n,rects:r,middlewareData:i}=t,a=i.arrow?.centerOffset!==0,o=a?0:e.arrowWidth,s=a?0:e.arrowHeight,[c,l]=pf(n),u={start:`0%`,center:`50%`,end:`100%`}[l],d=(i.arrow?.x??0)+o/2,f=(i.arrow?.y??0)+s/2,p=``,m=``;return c===`bottom`?(p=a?u:`${d}px`,m=`${-s}px`):c===`top`?(p=a?u:`${d}px`,m=`${r.floating.height+s}px`):c===`right`?(p=`${-s}px`,m=a?u:`${f}px`):c===`left`&&(p=`${r.floating.width+s}px`,m=a?u:`${f}px`),{data:{x:p,y:m}}}}),`transformOrigin`);function pf(e){let[t,n=`center`]=e.split(`-`);return[t,n]}Kd(pf,`getSideAndAlignFromPlacement`);var mf=Object.defineProperty,hf=(e,t)=>mf(e,`name`,{value:t,configurable:!0}),gf=!1;function _f(){let[e,t]=v.useState(gf);return v.useEffect(()=>{gf||(gf=!0,t(!0))},[]),e}hf(_f,`useIsHydrated`);var vf=v.useSyncExternalStore;function yf(){return()=>{}}hf(yf,`subscribe`);function bf(){return vf(yf,()=>!0,()=>!1)}hf(bf,`useIsHydratedModern`);var xf=typeof vf==`function`?bf:_f,Sf=Object.defineProperty,Cf=(e,t)=>Sf(e,`name`,{value:t,configurable:!0}),wf=`rovingFocusGroup.onEntryFocus`,Tf={bubbles:!1,cancelable:!0},Ef=`RovingFocusGroup`,[Df,Of,kf]=ni(Ef),[Af,jf]=Zr(Ef,[kf]),Mf={Vertical:`vertical`,Horizontal:`horizontal`},Nf={LTR:`ltr`,RTL:`rtl`},[Pf,Ff]=Af(Ef),If=v.forwardRef(Cf(function(e,t){return(0,U.jsx)(Df.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,U.jsx)(Df.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,U.jsx)(Lf,{...e,ref:t})})})},`RovingFocusGroup`)),Lf=v.forwardRef(Cf(function(e,t){let{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:a,currentTabStopId:o,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:c,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...d}=e,f=v.useRef(null),p=H(t,f),m=da(a),[h,g]=ki({prop:o,defaultProp:s??null,onChange:c,caller:Ef}),[_,y]=v.useState(!1),b=Ya(l),x=Of(n),S=v.useRef(!1),[C,w]=v.useState(0);return v.useEffect(()=>{let e=f.current;if(e)return e.addEventListener(wf,b),()=>e.removeEventListener(wf,b)},[b]),(0,U.jsx)(Pf,{scope:n,orientation:r,dir:m,loop:i,currentTabStopId:h,onItemFocus:v.useCallback(e=>g(e),[g]),onItemShiftTab:v.useCallback(()=>y(!0),[]),onFocusableItemAdd:v.useCallback(()=>w(e=>e+1),[]),onFocusableItemRemove:v.useCallback(()=>w(e=>e-1),[]),children:(0,U.jsx)(W.div,{tabIndex:_||C===0?-1:0,"data-orientation":r,...d,ref:p,style:{outline:`none`,...e.style},onMouseDown:G(e.onMouseDown,()=>{S.current=!0}),onFocus:G(e.onFocus,e=>{let t=!S.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(wf,Tf);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=x().filter(e=>e.focusable);Uf([e.find(e=>e.active),e.find(e=>e.id===h),...e].filter(Boolean).map(e=>e.ref.current),u)}}S.current=!1}),onBlur:G(e.onBlur,()=>y(!1))})})},`RovingFocusGroupImpl`)),Rf=`RovingFocusGroupItem`,zf=v.forwardRef(Cf(function(e,t){let{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:a,children:o,...s}=e,c=qi(),l=a||c,u=Ff(Rf,n),d=u.currentTabStopId===l,f=Of(n),{onFocusableItemAdd:p,onFocusableItemRemove:m,currentTabStopId:h}=u,g=xf();return $r(()=>{if(g&&r)return p(),()=>m()},[g,r,p,m]),v.useEffect(()=>{if(!g&&r)return p(),()=>m()},[g,r,p,m]),(0,U.jsx)(Df.ItemSlot,{scope:n,id:l,focusable:r,active:i,children:(0,U.jsx)(W.span,{tabIndex:d?0:-1,"data-orientation":u.orientation,...s,ref:t,onMouseDown:G(e.onMouseDown,e=>{r?u.onItemFocus(l):e.preventDefault()}),onFocus:G(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:G(e.onKeyDown,e=>{if(e.key===`Tab`&&e.shiftKey){u.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=Hf(e,u.orientation,u.dir);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=f().filter(e=>e.focusable).map(e=>e.ref.current);if(t===`last`)n.reverse();else if(t===`prev`||t===`next`){t===`prev`&&n.reverse();let r=n.indexOf(e.currentTarget);n=u.loop?X(n,r+1):n.slice(r+1)}setTimeout(()=>Uf(n))}}),children:typeof o==`function`?o({isCurrentTabStop:d,hasTabStop:h!=null}):o})})},`RovingFocusGroupItem`)),Bf={ArrowLeft:`prev`,ArrowUp:`prev`,ArrowRight:`next`,ArrowDown:`next`,PageUp:`first`,Home:`first`,PageDown:`last`,End:`last`};function Vf(e,t){return t===Nf.RTL?e===`ArrowLeft`?`ArrowRight`:e===`ArrowRight`?`ArrowLeft`:e:e}Cf(Vf,`getDirectionAwareKey`);function Hf(e,t,n){let r=Vf(e.key,n);if(!(t===Mf.Vertical&&[`ArrowLeft`,`ArrowRight`].includes(r))&&!(t===Mf.Horizontal&&[`ArrowUp`,`ArrowDown`].includes(r)))return Bf[r]}Cf(Hf,`getFocusIntent`);function Uf(e,t=!1){let n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}Cf(Uf,`focusFirst`);function X(e,t){return e.map((n,r)=>e[(t+r)%e.length])}Cf(X,`wrapArray`);var Wf=Object.defineProperty,Gf=(e,t)=>Wf(e,`name`,{value:t,configurable:!0}),Kf=[`Enter`,` `],qf=[`ArrowDown`,`PageUp`,`Home`],Jf=[`ArrowUp`,`PageDown`,`End`],Yf=[...qf,...Jf];[...Kf],[...Kf];var Xf=`Menu`,[Zf,Qf,$f]=ni(Xf),[ep,tp]=Zr(Xf,[$f,Zd,jf]),np=Zd(),rp=jf(),[ip,ap]=ep(Xf),[op,sp]=ep(Xf),cp=Gf(e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:i,onOpenChange:a,modal:o=!0}=e,s=np(t),[c,l]=v.useState(null),u=v.useRef(!1),d=Ya(a),f=da(i);return v.useEffect(()=>{let e=Gf(()=>{u.current=!0,document.addEventListener(`pointerdown`,t,{capture:!0,once:!0}),document.addEventListener(`pointermove`,t,{capture:!0,once:!0})},`handleKeyDown`),t=Gf(()=>u.current=!1,`handlePointer`);return document.addEventListener(`keydown`,e,{capture:!0}),()=>{document.removeEventListener(`keydown`,e,{capture:!0}),document.removeEventListener(`pointerdown`,t,{capture:!0}),document.removeEventListener(`pointermove`,t,{capture:!0})}},[]),v.useEffect(()=>{if(!n)return;let e=Gf(()=>d(!1),`handleBlur`);return window.addEventListener(`blur`,e),()=>window.removeEventListener(`blur`,e)},[n,d]),(0,U.jsx)(ef,{...s,children:(0,U.jsx)(ip,{scope:t,open:n,onOpenChange:d,content:c,onContentChange:l,children:(0,U.jsx)(op,{scope:t,onClose:v.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:u,dir:f,modal:o,children:r})})})},`Menu`),lp=v.forwardRef(Gf(function(e,t){let{__scopeMenu:n,...r}=e,i=np(n);return(0,U.jsx)(nf,{...i,...r,ref:t})},`MenuAnchor`)),up=`MenuPortal`,[dp,fp]=ep(up,{forceMount:void 0}),pp=Gf(e=>{let{__scopeMenu:t,forceMount:n,children:r,container:i}=e,a=ap(up,t);return(0,U.jsx)(dp,{scope:t,forceMount:n,children:(0,U.jsx)(Li,{present:n||a.open,children:(0,U.jsx)(No,{asChild:!0,container:i,children:r})})})},`MenuPortal`),mp=`MenuContent`,[hp,gp]=ep(mp),_p=v.forwardRef(Gf(function(e,t){let n=fp(mp,e.__scopeMenu),{forceMount:r=n.forceMount,...i}=e,a=ap(mp,e.__scopeMenu),o=sp(mp,e.__scopeMenu);return(0,U.jsx)(Zf.Provider,{scope:e.__scopeMenu,children:(0,U.jsx)(Li,{present:r||a.open,children:(0,U.jsx)(Zf.Slot,{scope:e.__scopeMenu,children:o.modal?(0,U.jsx)(vp,{...i,ref:t}):(0,U.jsx)(yp,{...i,ref:t})})})})},`MenuContent`)),vp=v.forwardRef(Gf(function(e,t){let n=ap(mp,e.__scopeMenu),r=v.useRef(null),i=H(t,r);return v.useEffect(()=>{let e=r.current;if(e)return nc(e)},[]),(0,U.jsx)(xp,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:G(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})},`MenuRootContentModal`)),yp=v.forwardRef(Gf(function(e,t){let n=ap(mp,e.__scopeMenu);return(0,U.jsx)(xp,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})},`MenuRootContentNonModal`)),bp=wr(`MenuContent.ScrollLock`),xp=v.forwardRef(Gf(function(e,t){let{__scopeMenu:n,loop:r=!1,trapFocus:i,onOpenAutoFocus:a,onCloseAutoFocus:o,disableOutsidePointerEvents:s,onEntryFocus:c,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:f,onDismiss:p,disableOutsideScroll:m,...h}=e,g=ap(mp,n),_=sp(mp,n),y=np(n),b=rp(n),x=Qf(n),[S,C]=v.useState(null),w=v.useRef(null),[T,ee]=v.useState(null);bo(T);let{nodes:E,registry:D}=yo(),O=!!(i||m),k=H(t,w,g.onContentChange,ee),A=v.useRef(0),j=v.useRef(``),te=v.useRef(0),M=v.useRef(null),N=v.useRef(`right`),P=v.useRef(0),F=v.useMemo(()=>m?[w,...E.map(e=>({current:e}))]:[],[w,E,m]),ne=m?qs:v.Fragment,re=m?{as:bp,allowPinchZoom:!0,shards:F}:void 0,ie=Gf(e=>{let t=j.current+e,n=x().filter(e=>!e.disabled),r=document.activeElement,i=n.find(e=>e.ref.current===r)?.textValue,a=zp(n.map(e=>e.textValue),t,i),o=n.find(e=>e.textValue===a)?.ref.current;function s(e){j.current=e,window.clearTimeout(A.current),e!==``&&(A.current=window.setTimeout(()=>s(``),1e3))}Gf(s,`updateSearch`),s(t),o&&setTimeout(()=>o.focus())},`handleTypeaheadSearch`);v.useEffect(()=>()=>window.clearTimeout(A.current),[]),Ro();let ae=v.useCallback(e=>N.current===M.current?.side&&Vp(e,M.current?.area),[]);return(0,U.jsx)(hp,{scope:n,searchRef:j,onItemEnter:v.useCallback(e=>{ae(e)&&e.preventDefault()},[ae]),onItemLeave:v.useCallback(e=>{ae(e)||(w.current?.focus(),C(null))},[ae]),onTriggerLeave:v.useCallback(e=>{ae(e)&&e.preventDefault()},[ae]),pointerGraceTimerRef:te,onPointerGraceIntentChange:v.useCallback(e=>{M.current=e},[]),children:(0,U.jsx)(vo,{registry:O?D:null,children:(0,U.jsx)(ne,{...re,children:(0,U.jsx)(go,{asChild:!0,trapped:i,branches:E,onMountAutoFocus:G(a,e=>{e.preventDefault(),w.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:o,children:(0,U.jsx)(ro,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:f,onDismiss:p,children:(0,U.jsx)(If,{asChild:!0,...b,dir:_.dir,orientation:`vertical`,loop:r,currentTabStopId:S,onCurrentTabStopIdChange:C,onEntryFocus:G(c,e=>{_.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,U.jsx)(sf,{role:`menu`,"aria-orientation":`vertical`,"data-state":Pp(g.open),"data-radix-menu-content":``,dir:_.dir,...y,...h,ref:k,style:{outline:`none`,...h.style},onKeyDown:G(h.onKeyDown,e=>{let t=e.target.closest(`[data-radix-menu-content]`)===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=e.key.length===1;t&&(e.key===`Tab`&&e.preventDefault(),!n&&r&&ie(e.key));let i=w.current;if(e.target!==i||!Yf.includes(e.key))return;e.preventDefault();let a=x().filter(e=>!e.disabled).map(e=>e.ref.current);Jf.includes(e.key)&&a.reverse(),Lp(a)}),onBlur:G(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(A.current),j.current=``)}),onPointerMove:G(e.onPointerMove,Hp(e=>{let t=e.target,n=P.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>P.current?`right`:`left`;N.current=t,P.current=e.clientX}}))})})})})})})})},`MenuContentImpl`)),Sp=v.forwardRef(Gf(function(e,t){let{__scopeMenu:n,...r}=e;return(0,U.jsx)(W.div,{...r,ref:t})},`MenuLabel`)),Cp=`MenuItem`,wp=`menu.itemSelect`,Tp=v.forwardRef(Gf(function(e,t){let{disabled:n=!1,onSelect:r,...i}=e,a=v.useRef(null),o=sp(Cp,e.__scopeMenu),s=gp(Cp,e.__scopeMenu),c=H(t,a),l=v.useRef(!1),u=Gf(()=>{let e=a.current;if(!n&&e){let t=new CustomEvent(wp,{bubbles:!0,cancelable:!0});e.addEventListener(wp,e=>r?.(e),{once:!0}),Ur(e,t),t.defaultPrevented?l.current=!1:o.onClose()}},`handleSelect`);return(0,U.jsx)(Ep,{...i,ref:c,disabled:n,onClick:G(e.onClick,u),onPointerDown:t=>{e.onPointerDown?.(t),l.current=!0},onPointerUp:G(e.onPointerUp,e=>{l.current||e.currentTarget?.click()}),onKeyDown:G(e.onKeyDown,e=>{n||e.target!==e.currentTarget||(s.searchRef.current===``||e.key!==` `)&&Kf.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})},`MenuItem`)),Ep=v.forwardRef(Gf(function(e,t){let{__scopeMenu:n,disabled:r=!1,textValue:i,...a}=e,o=gp(Cp,n),s=rp(n),c=v.useRef(null),l=H(t,c),[u,d]=v.useState(!1),[f,p]=v.useState(``);return v.useEffect(()=>{let e=c.current;e&&p((e.textContent??``).trim())},[a.children]),(0,U.jsx)(Zf.ItemSlot,{scope:n,disabled:r,textValue:i??f,children:(0,U.jsx)(zf,{asChild:!0,...s,focusable:!r,children:(0,U.jsx)(W.div,{role:`menuitem`,"data-highlighted":u?``:void 0,"aria-disabled":r||void 0,"data-disabled":r?``:void 0,...a,ref:l,onPointerMove:G(e.onPointerMove,Hp(e=>{r?o.onItemLeave(e):(o.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:G(e.onPointerLeave,Hp(e=>o.onItemLeave(e))),onFocus:G(e.onFocus,()=>d(!0)),onBlur:G(e.onBlur,()=>d(!1))})})})},`MenuItemImpl`)),[Dp,Op]=ep(`MenuRadioGroup`,{value:void 0,onValueChange:Gf(()=>{},`onValueChange`)}),[kp,Ap]=ep(`MenuItemIndicator`,{checked:!1}),jp=v.forwardRef(Gf(function(e,t){let{__scopeMenu:n,...r}=e;return(0,U.jsx)(W.div,{role:`separator`,"aria-orientation":`horizontal`,...r,ref:t})},`MenuSeparator`)),[Mp,Np]=ep(`MenuSub`);function Pp(e){return e?`open`:`closed`}Gf(Pp,`getOpenState`);function Fp(e){return e===`indeterminate`}Gf(Fp,`isIndeterminate`);function Ip(e){return Fp(e)?`indeterminate`:e?`checked`:`unchecked`}Gf(Ip,`getCheckedState`);function Lp(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}Gf(Lp,`focusFirst`);function Rp(e,t){return e.map((n,r)=>e[(t+r)%e.length])}Gf(Rp,`wrapArray`);function zp(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=Rp(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}Gf(zp,`getNextMatch`);function Bp(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e],s=t[a],c=o.x,l=o.y,u=s.x,d=s.y;l>r!=d>r&&n<(u-c)*(r-l)/(d-l)+c&&(i=!i)}return i}Gf(Bp,`isPointInPolygon`);function Vp(e,t){return t?Bp({x:e.clientX,y:e.clientY},t):!1}Gf(Vp,`isPointerInGraceArea`);function Hp(e){return t=>t.pointerType===`mouse`?e(t):void 0}Gf(Hp,`whenMouse`);var Up=Object.defineProperty,Wp=(e,t)=>Up(e,`name`,{value:t,configurable:!0}),Gp=`DropdownMenu`,[Kp,qp]=Zr(Gp,[tp]),Jp=tp(),[Yp,Xp]=Kp(Gp),Zp=Wp(e=>{let{__scopeDropdownMenu:t,children:n,dir:r,open:i,defaultOpen:a,onOpenChange:o,modal:s=!0}=e,c=Jp(t),l=v.useRef(null),[u,d]=ki({prop:i,defaultProp:a??!1,onChange:o,caller:Gp});return(0,U.jsx)(Yp,{scope:t,triggerId:qi(),triggerRef:l,contentId:qi(),open:u,onOpenChange:d,onOpenToggle:v.useCallback(()=>d(e=>!e),[d]),modal:s,children:(0,U.jsx)(cp,{...c,open:u,onOpenChange:d,dir:r,modal:s,children:n})})},`DropdownMenu`),Qp=`DropdownMenuTrigger`,$p=v.forwardRef(Wp(function(e,t){let{__scopeDropdownMenu:n,disabled:r=!1,...i}=e,a=Xp(Qp,n),o=Jp(n),s=H(t,a.triggerRef);return(0,U.jsx)(lp,{asChild:!0,...o,children:(0,U.jsx)(W.button,{type:`button`,id:a.triggerId,"aria-haspopup":`menu`,"aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?`open`:`closed`,"data-disabled":r?``:void 0,disabled:r,...i,ref:s,onPointerDown:G(e.onPointerDown,e=>{!r&&e.button===0&&e.ctrlKey===!1&&(a.onOpenToggle(),a.open||e.preventDefault())}),onKeyDown:G(e.onKeyDown,e=>{r||([`Enter`,` `].includes(e.key)&&a.onOpenToggle(),e.key===`ArrowDown`&&a.onOpenChange(!0),[`Enter`,` `,`ArrowDown`].includes(e.key)&&e.preventDefault())})})})},`DropdownMenuTrigger`)),em=Wp(e=>{let{__scopeDropdownMenu:t,...n}=e,r=Jp(t);return(0,U.jsx)(pp,{...r,...n})},`DropdownMenuPortal`),tm=`DropdownMenuContent`,nm=v.forwardRef(Wp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Xp(tm,n),a=Jp(n),o=v.useRef(!1);return(0,U.jsx)(_p,{id:i.contentId,"aria-labelledby":i.triggerId,...a,...r,ref:t,onCloseAutoFocus:G(e.onCloseAutoFocus,e=>{o.current||i.triggerRef.current?.focus(),o.current=!1,e.preventDefault()}),onInteractOutside:G(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;(!i.modal||r)&&(o.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-dropdown-menu-content-available-width":`var(--radix-popper-available-width)`,"--radix-dropdown-menu-content-available-height":`var(--radix-popper-available-height)`,"--radix-dropdown-menu-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-dropdown-menu-trigger-height":`var(--radix-popper-anchor-height)`}})},`DropdownMenuContent`)),rm=v.forwardRef(Wp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Jp(n);return(0,U.jsx)(Sp,{...i,...r,ref:t})},`DropdownMenuLabel`)),im=v.forwardRef(Wp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Jp(n);return(0,U.jsx)(Tp,{...i,...r,ref:t})},`DropdownMenuItem`)),am=v.forwardRef(Wp(function(e,t){let{__scopeDropdownMenu:n,...r}=e,i=Jp(n);return(0,U.jsx)(jp,{...i,...r,ref:t})},`DropdownMenuSeparator`)),om=Object.defineProperty,sm=v.forwardRef(((e,t)=>om(e,`name`,{value:t,configurable:!0}))(function(e,t){return(0,U.jsx)(W.label,{...e,ref:t,onMouseDown:t=>{t.target.closest(`button, input, select, textarea`)||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})},`Label`)),cm=Object.defineProperty,lm=(e,t)=>cm(e,`name`,{value:t,configurable:!0});function um(e){let t=v.useRef({value:e,previous:e});return v.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}lm(um,`usePrevious`);var dm=Object.defineProperty,fm=(e,t)=>dm(e,`name`,{value:t,configurable:!0}),pm={Automatic:`automatic`,Manual:`manual`},mm={Vertical:`vertical`,Horizontal:`horizontal`},hm={LTR:`ltr`,RTL:`rtl`},gm=`NavigationMenu`,[_m,vm,ym]=ni(gm),[bm,xm,Sm]=ni(gm),[Cm,wm]=Zr(gm,[ym,Sm]),[Tm,Em]=Cm(gm),[Dm,Om]=Cm(gm),km=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,value:r,onValueChange:i,defaultValue:a,delayDuration:o=200,skipDelayDuration:s=300,orientation:c=mm.Horizontal,dir:l,activationMode:u=pm.Automatic,...d}=e,[f,p]=v.useState(null),m=H(t,p),h=da(l),g=v.useRef(0),_=v.useRef(0),y=v.useRef(0),[b,x]=v.useState(!0),[S,C]=ki({prop:r,onChange:fm(e=>{let t=e!==``,n=s>0;t?(window.clearTimeout(y.current),n&&x(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(!0),s)),i?.(e)},`onChange`),defaultProp:a??``,caller:gm}),w=v.useCallback(()=>{window.clearTimeout(_.current),_.current=window.setTimeout(()=>C(``),150)},[C]),T=v.useCallback(e=>{window.clearTimeout(_.current),C(e)},[C]),ee=v.useCallback(e=>{S===e?window.clearTimeout(_.current):g.current=window.setTimeout(()=>{window.clearTimeout(_.current),C(e)},o)},[S,C,o]);return v.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(_.current),window.clearTimeout(y.current)},[]),(0,U.jsx)(Am,{scope:n,isRootMenu:!0,value:S,dir:h,orientation:c,activationMode:u,rootNavigationMenu:f,onTriggerEnter:e=>{u===pm.Automatic&&(window.clearTimeout(g.current),b?ee(e):T(e))},onTriggerLeave:()=>{u===pm.Automatic&&(window.clearTimeout(g.current),w())},onContentEnter:()=>{u===pm.Automatic&&window.clearTimeout(_.current)},onContentLeave:()=>{u===pm.Automatic&&w()},onItemSelect:e=>{C(t=>t===e?``:e)},onItemDismiss:()=>C(``),children:(0,U.jsx)(W.nav,{"aria-label":`Main`,"data-orientation":c,dir:h,...d,ref:m})})},`NavigationMenu`)),Am=fm(e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:i,orientation:a,activationMode:o,children:s,value:c,onItemSelect:l,onItemDismiss:u,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:p,onContentLeave:m}=e,[h,g]=v.useState(null),[_,y]=v.useState(new Map),[b,x]=v.useState(null);return(0,U.jsx)(Tm,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:c,previousValue:um(c),baseId:qi(),dir:i,orientation:a,activationMode:o,viewport:h,onViewportChange:g,indicatorTrack:b,onIndicatorTrackChange:x,onTriggerEnter:Ya(d),onTriggerLeave:Ya(f),onContentEnter:Ya(p),onContentLeave:Ya(m),onItemSelect:Ya(l),onItemDismiss:Ya(u),onViewportContentChange:v.useCallback((e,t)=>{y(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:v.useCallback(e=>{y(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,U.jsx)(_m.Provider,{scope:t,children:(0,U.jsx)(Dm,{scope:t,items:_,children:s})})})},`NavigationMenuProvider`),jm=`NavigationMenuList`,Mm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,...r}=e,i=Em(jm,n),a=(0,U.jsx)(W.ul,{"data-orientation":i.orientation,...r,ref:t});return(0,U.jsx)(W.div,{style:{position:`relative`},ref:i.onIndicatorTrackChange,children:(0,U.jsx)(_m.Slot,{scope:n,children:i.isRootMenu?(0,U.jsx)(qm,{asChild:!0,children:a}):a})})},`NavigationMenuList`)),[Nm,Pm]=Cm(`NavigationMenuItem`),Fm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,value:r,...i}=e,a=qi(),o=r||a||`LEGACY_REACT_AUTO_VALUE`,s=v.useRef(null),c=v.useRef(null),l=v.useRef(null),u=v.useRef(()=>{}),d=v.useRef(!1),f=v.useCallback((e=`start`)=>{if(s.current){u.current();let t=Zm(s.current);t.length&&Qm(e===`start`?t:t.reverse())}},[]),p=v.useCallback(()=>{if(s.current){let e=Zm(s.current);e.length&&(u.current=$m(e))}},[]);return(0,U.jsx)(Nm,{scope:n,value:o,triggerRef:c,contentRef:s,focusProxyRef:l,wasEscapeCloseRef:d,onEntryKeyDown:f,onFocusProxyEnter:f,onRootContentClose:p,onContentFocusOutside:p,children:(0,U.jsx)(W.li,{...i,ref:t})})},`NavigationMenuItem`)),Im=`navigationMenu.linkSelect`,Lm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,active:r,onSelect:i,...a}=e;return(0,U.jsx)(Xm,{asChild:!0,children:(0,U.jsx)(W.a,{"data-active":r?``:void 0,"aria-current":r?`page`:void 0,...a,ref:t,onClick:G(e.onClick,e=>{let t=e.target,n=new CustomEvent(Im,{bubbles:!0,cancelable:!0});t.addEventListener(Im,e=>i?.(e),{once:!0}),Ur(t,n),!n.defaultPrevented&&!e.metaKey&&Ur(t,new CustomEvent(zm,{bubbles:!0,cancelable:!0}))},{checkForDefaultPrevented:!1})})})},`NavigationMenuLink`)),Rm=`NavigationMenuContent`,zm=`navigationMenu.rootContentDismiss`,Bm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,value:r,triggerRef:i,focusProxyRef:a,wasEscapeCloseRef:o,onRootContentClose:s,onContentFocusOutside:c,...l}=e,u=Em(Rm,n),d=v.useRef(null),f=H(d,t),p=nh(u.baseId,r),m=rh(u.baseId,r),h=vm(n),g=v.useRef(null),{onItemDismiss:_}=u;v.useEffect(()=>{let e=d.current;if(u.isRootMenu&&e){let t=fm(()=>{_(),s(),e.contains(document.activeElement)&&i.current?.focus()},`handleClose`);return e.addEventListener(zm,t),()=>e.removeEventListener(zm,t)}},[u.isRootMenu,e.value,i,_,s]);let y=v.useMemo(()=>{let e=h().map(e=>e.value);u.dir===hm.RTL&&e.reverse();let t=e.indexOf(u.value),n=e.indexOf(u.previousValue),i=r===u.value,a=n===e.indexOf(r);if(!i&&!a)return g.current;let o=(()=>{if(t!==n){if(i&&n!==-1)return t>n?`from-end`:`from-start`;if(a&&t!==-1)return t>n?`to-start`:`to-end`}return null})();return g.current=o,o},[u.previousValue,u.value,u.dir,h,r]);return(0,U.jsx)(qm,{asChild:!0,children:(0,U.jsx)(ro,{id:m,"aria-labelledby":p,"data-motion":y,"data-orientation":u.orientation,...l,ref:f,disableOutsidePointerEvents:!1,onDismiss:()=>{let e=new Event(zm,{bubbles:!0,cancelable:!0});d.current?.dispatchEvent(e)},onFocusOutside:G(e.onFocusOutside,e=>{c();let t=e.target,n=e.detail.originalEvent.relatedTarget,r=u.rootNavigationMenu?.contains(t),i=u.rootNavigationMenu?.contains(n);(r||!i)&&e.preventDefault()}),onPointerDownOutside:G(e.onPointerDownOutside,e=>{let t=e.target,n=h().some(e=>e.ref.current?.contains(t)),r=u.isRootMenu&&u.viewport?.contains(t);(n||r||!u.isRootMenu)&&e.preventDefault()}),onKeyDown:G(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if(e.key===`Tab`&&!t){let t=Zm(e.currentTarget),n=document.activeElement,r=t.findIndex(e=>e===n);Qm(e.shiftKey?t.slice(0,r).reverse():t.slice(r+1,t.length))?e.preventDefault():a.current?.focus()}}),onEscapeKeyDown:G(e.onEscapeKeyDown,e=>{o.current=!0})})})},`NavigationMenuContentImpl`)),Vm=`NavigationMenuViewport`,Hm=Dr(Vm),Um=v.forwardRef(fm(function(e,t){let{forceMount:n,...r}=e,i=!!Em(Vm,e.__scopeNavigationMenu).value;return(0,U.jsx)(Li,{present:n||i,children:(0,U.jsx)(Wm,{...r,ref:t})})},`NavigationMenuViewport`)),Wm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,children:r,...i}=e,a=Em(Vm,n),o=H(t,a.onViewportChange),s=Om(Rm,e.__scopeNavigationMenu),[c,l]=v.useState(null),[u,d]=v.useState(null),f=c?c?.width+`px`:void 0,p=c?c?.height+`px`:void 0,m=!!a.value,h=m?a.value:a.previousValue;return eh(u,fm(()=>{u&&l({width:u.offsetWidth,height:u.offsetHeight})},`handleSizeChange`)),(0,U.jsxs)(W.div,{"data-state":th(m),"data-orientation":a.orientation,...i,ref:o,style:{pointerEvents:!m&&a.isRootMenu?`none`:void 0,"--radix-navigation-menu-viewport-width":f,"--radix-navigation-menu-viewport-height":p,...i.style},onPointerEnter:G(e.onPointerEnter,a.onContentEnter),onPointerLeave:G(e.onPointerLeave,ih(a.onContentLeave)),children:[(0,U.jsx)(Hm,{children:r}),Array.from(s.items).map(([e,{ref:t,forceMount:n,...r}])=>{let i=h===e;return(0,U.jsx)(Li,{present:n||i,children:(0,U.jsx)(Gm,{...r,contentRef:t,isActive:i,onActiveContentChange:d})},e)})]})},`NavigationMenuViewportImpl`)),Gm=fm(({contentRef:e,isActive:t,onActiveContentChange:n,...r})=>{let i=H(e,v.useCallback(e=>{t&&e&&n(e)},[t,n]));return(0,U.jsx)(Bm,{...r,ref:i})},`NavigationMenuViewportItem`),Km=`FocusGroup`,qm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,...r}=e,i=Em(Km,n);return(0,U.jsx)(bm.Provider,{scope:n,children:(0,U.jsx)(bm.Slot,{scope:n,children:(0,U.jsx)(W.div,{dir:i.dir,...r,ref:t})})})},`FocusGroup`)),Jm=[`ArrowRight`,`ArrowLeft`,`ArrowUp`,`ArrowDown`],Ym=`FocusGroupItem`,Xm=v.forwardRef(fm(function(e,t){let{__scopeNavigationMenu:n,...r}=e,i=xm(n),a=Em(Ym,n);return(0,U.jsx)(bm.ItemSlot,{scope:n,children:(0,U.jsx)(W.button,{...r,ref:t,onKeyDown:G(e.onKeyDown,e=>{if([`Home`,`End`,...Jm].includes(e.key)){let t=i().map(e=>e.ref.current);if([a.dir===hm.RTL?`ArrowRight`:`ArrowLeft`,`ArrowUp`,`End`].includes(e.key)&&t.reverse(),Jm.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>Qm(t)),e.preventDefault()}})})})},`FocusGroupItem`));function Zm(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:fm(e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},`acceptNode`)});for(;n.nextNode();)t.push(n.currentNode);return t}fm(Zm,`getTabbableCandidates`);function Qm(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}fm(Qm,`focusFirst`);function $m(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute(`tabindex`,t)})}}fm($m,`removeFromTabOrder`);function eh(e,t){let n=Ya(t);$r(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}fm(eh,`useResizeObserver`);function th(e){return e?`open`:`closed`}fm(th,`getOpenState`);function nh(e,t){return`${e}-trigger-${t}`}fm(nh,`makeTriggerId`);function rh(e,t){return`${e}-content-${t}`}fm(rh,`makeContentId`);function ih(e){return t=>t.pointerType===`mouse`?e(t):void 0}fm(ih,`whenMouse`);var ah=Object.defineProperty,oh=(e,t)=>ah(e,`name`,{value:t,configurable:!0});function sh(e,[t,n]){return Math.min(n,Math.max(t,e))}oh(sh,`clamp`);var ch=Object.defineProperty,lh=(e,t)=>ch(e,`name`,{value:t,configurable:!0}),uh=`Popover`,[dh,fh]=Zr(uh,[Zd]),ph=Zd(),[mh,hh]=dh(uh),gh=lh(e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!1}=e,s=ph(t),c=v.useRef(null),[l,u]=v.useState(!1),[d,f]=v.useState(0),[p,m]=v.useState(0),[h,g]=ki({prop:r,defaultProp:i??!1,onChange:a,caller:uh});return(0,U.jsx)(ef,{...s,children:(0,U.jsx)(mh,{scope:t,contentId:qi(),titleId:qi(),descriptionId:qi(),titlePresent:d>0,descriptionPresent:p>0,setTitleCount:f,setDescriptionCount:m,triggerRef:c,open:h,onOpenChange:g,onOpenToggle:v.useCallback(()=>g(e=>!e),[g]),hasCustomAnchor:l,onCustomAnchorAdd:v.useCallback(()=>u(!0),[]),onCustomAnchorRemove:v.useCallback(()=>u(!1),[]),modal:o,children:n})})},`Popover`),_h=`PopoverTrigger`,vh=v.forwardRef(lh(function(e,t){let{__scopePopover:n,...r}=e,i=hh(_h,n),a=ph(n),o=H(t,i.triggerRef),s=(0,U.jsx)(W.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":kh(i.open),...r,ref:o,onClick:G(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,U.jsx)(nf,{asChild:!0,...a,children:s})},`PopoverTrigger`)),yh=`PopoverPortal`,[bh,xh]=dh(yh,{forceMount:void 0}),Sh=lh(e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=hh(yh,t);return(0,U.jsx)(bh,{scope:t,forceMount:n,children:(0,U.jsx)(Li,{present:n||a.open,children:(0,U.jsx)(No,{asChild:!0,container:i,children:r})})})},`PopoverPortal`),Ch=`PopoverContent`,wh=v.forwardRef(lh(function(e,t){let n=xh(Ch,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=hh(Ch,e.__scopePopover);return(0,U.jsx)(Li,{present:r||a.open,children:a.modal?(0,U.jsx)(Eh,{...i,ref:t}):(0,U.jsx)(Dh,{...i,ref:t})})},`PopoverContent`)),Th=wr(`PopoverContent.RemoveScroll`),Eh=v.forwardRef(lh(function(e,t){let n=hh(Ch,e.__scopePopover),r=v.useRef(null),i=H(t,r),a=v.useRef(!1),{nodes:o,registry:s}=yo();return v.useEffect(()=>{let e=r.current;if(e)return nc(e)},[]),(0,U.jsx)(qs,{as:Th,allowPinchZoom:!0,shards:v.useMemo(()=>[r,...o.map(e=>({current:e}))],[r,o]),children:(0,U.jsx)(Oh,{...e,ref:i,branchNodes:o,branchRegistry:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:G(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:G(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:G(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})},`PopoverContentModal`)),Dh=v.forwardRef(lh(function(e,t){let n=hh(Ch,e.__scopePopover),r=v.useRef(!1),i=v.useRef(!1);return(0,U.jsx)(Oh,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`PopoverContentNonModal`)),Oh=v.forwardRef(lh(function(e,t){let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,"aria-describedby":d,branchNodes:f,branchRegistry:p,...m}=e,h=hh(Ch,n),g=ph(n),[_,y]=v.useState(null),b=H(t,y);return bo(_),Ro(),(0,U.jsx)(vo,{registry:p,children:(0,U.jsx)(go,{asChild:!0,loop:!0,trapped:r,branches:f,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,U.jsx)(ro,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>h.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,U.jsx)(sf,{"data-state":kh(h.open),role:`dialog`,id:h.contentId,"aria-labelledby":h.titlePresent?h.titleId:void 0,"aria-describedby":h.descriptionPresent?Ah(d,h.descriptionId):d,...g,...m,ref:b,style:{...m.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})})},`PopoverContentImpl`));function kh(e){return e?`open`:`closed`}lh(kh,`getState`);function Ah(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}lh(Ah,`concatAriaDescribedby`);var jh=Object.defineProperty,Mh=(e,t)=>jh(e,`name`,{value:t,configurable:!0}),Nh=`Progress`,Ph=100,[Fh,Ih]=Zr(Nh),[Lh,Rh]=Fh(Nh),zh=v.forwardRef(Mh(function(e,t){let{__scopeProgress:n,value:r=null,max:i,getValueLabel:a=Hh,...o}=e;(i||i===0)&&!Gh(i)&&console.error(qh(`${i}`,`Progress`));let s=Gh(i)?i:Ph;r!==null&&!Kh(r,s)&&console.error(Jh(`${r}`,`Progress`));let c=Kh(r,s)?r:null,l=Wh(c)?a(c,s):void 0;return(0,U.jsx)(Lh,{scope:n,value:c,max:s,children:(0,U.jsx)(W.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":Wh(c)?c:void 0,"aria-valuetext":l,role:`progressbar`,"data-state":Uh(c,s),"data-value":c??void 0,"data-max":s,...o,ref:t})})},`Progress`)),Bh=`ProgressIndicator`,Vh=v.forwardRef(Mh(function(e,t){let{__scopeProgress:n,...r}=e,i=Rh(Bh,n);return(0,U.jsx)(W.div,{"data-state":Uh(i.value,i.max),"data-value":i.value??void 0,"data-max":i.max,...r,ref:t})},`ProgressIndicator`));function Hh(e,t){return`${Math.round(e/t*100)}%`}Mh(Hh,`defaultGetValueLabel`);function Uh(e,t){return e==null?`indeterminate`:e===t?`complete`:`loading`}Mh(Uh,`getProgressState`);function Wh(e){return typeof e==`number`}Mh(Wh,`isNumber`);function Gh(e){return Wh(e)&&!isNaN(e)&&e>0}Mh(Gh,`isValidMaxNumber`);function Kh(e,t){return Wh(e)&&!isNaN(e)&&e<=t&&e>=0}Mh(Kh,`isValidValueNumber`);function qh(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ph}\`.`}Mh(qh,`getInvalidMaxError`);function Jh(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ph} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}Mh(Jh,`getInvalidValueError`);var Yh=Object.defineProperty,Xh=(e,t)=>Yh(e,`name`,{value:t,configurable:!0}),Zh=`Radio`,[Qh,$h]=Zr(Zh),[eg,tg]=Qh(Zh);function ng(e){let{__scopeRadio:t,checked:n=!1,children:r,disabled:i,form:a,name:o,onCheck:s,required:c,value:l=`on`,internal_do_not_use_render:u}=e,[d,f]=v.useState(null),[p,m]=v.useState(null),[h,g]=v.useState(null),_={checked:n,disabled:i,required:c,name:o,form:a,value:l,control:d,setControl:f,userClick:h,onUserClick:g,isFormControl:!d||!!a||!!d.closest(`form`),bubbleInput:p,setBubbleInput:m,onCheck:Xh(()=>s?.(),`onCheck`)};return(0,U.jsx)(eg,{scope:t,..._,children:lg(u)?u(_):r})}Xh(ng,`RadioProvider`);var rg=`RadioTrigger`,ig=v.forwardRef(Xh(function({__scopeRadio:e,onClick:t,...n},r){let{checked:i,disabled:a,value:o,setControl:s,onCheck:c,onUserClick:l,isFormControl:u,bubbleInput:d}=tg(rg,e),f=H(r,s);return(0,U.jsx)(W.button,{type:`button`,role:`radio`,"aria-checked":i,"data-state":ug(i),"data-disabled":a?``:void 0,disabled:a,value:o,...n,ref:f,onClick:G(t,e=>{let t=e.isPropagationStopped();i||(l({hasConsumerStoppedPropagation:t}),c()),d&&u&&(t||e.stopPropagation())})})},`RadioTrigger`)),ag=`RadioIndicator`,og=v.forwardRef(Xh(function(e,t){let{__scopeRadio:n,forceMount:r,...i}=e,a=tg(ag,n);return(0,U.jsx)(Li,{present:r||a.checked,children:(0,U.jsx)(W.span,{"data-state":ug(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})},`RadioIndicator`)),sg=`RadioBubbleInput`,cg=v.forwardRef(Xh(function({__scopeRadio:e,onClick:t,...n},r){let{control:i,checked:a,required:o,disabled:s,name:c,value:l,form:u,bubbleInput:d,setBubbleInput:f,userClick:p}=tg(sg,e),m=H(r,f),h=hl(i),g=v.useRef(!1),_=v.useRef(a),y=v.useRef(p),b=v.useRef(null);v.useEffect(()=>{let e=d;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=_.current!==a;_.current=a;let i=p!==null&&p!==y.current;if(y.current=p,i)b.current=r?null:p,r&&n.call(e,a),e.dispatchEvent(new Event(`click`,{bubbles:!p.hasConsumerStoppedPropagation}));else if(r){let t=b.current;b.current=null;let r=a&&t!==null;g.current=!0,n.call(e,a),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),g.current=!1}},[d,a,p]);let x=v.useRef(a);return(0,U.jsx)(W.input,{type:`radio`,"aria-hidden":!0,defaultChecked:x.current,required:o,disabled:s,name:c,value:l,form:u,...n,tabIndex:-1,ref:m,onClick:G(t,e=>{g.current&&e.stopPropagation()}),style:{...n.style,...h,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`RadioBubbleInput`));function lg(e){return typeof e==`function`}Xh(lg,`isFunction`);function ug(e){return e?`checked`:`unchecked`}Xh(ug,`getState`);var dg=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],fg=`RadioGroup`,[pg,mg]=Zr(fg,[jf,$h]),hg=jf(),gg=$h(),[_g,vg]=pg(fg),yg=v.forwardRef(Xh(function(e,t){let{__scopeRadioGroup:n,name:r,form:i,defaultValue:a,value:o,required:s=!1,disabled:c=!1,orientation:l,dir:u,loop:d=!0,onValueChange:f,...p}=e,m=hg(n),h=da(u),[g,_]=ki({prop:o,defaultProp:a??null,onChange:f,caller:fg}),[y,b]=v.useState(null),x=H(t,b),S=v.useRef(g);return v.useEffect(()=>{let e=i?y?.ownerDocument.getElementById(i):y?.closest(`form`);if(e instanceof HTMLFormElement){let t=Xh(()=>_(S.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[y,i,_]),(0,U.jsx)(_g,{scope:n,name:r,form:i,required:s,disabled:c,value:g,onValueChange:_,children:(0,U.jsx)(If,{asChild:!0,...m,orientation:l,dir:h,loop:d,children:(0,U.jsx)(W.div,{role:`radiogroup`,"aria-required":s,"aria-orientation":l,"data-disabled":c?``:void 0,dir:h,...p,ref:x})})})},`RadioGroup`)),bg=`RadioGroupItemProvider`,xg=`RadioGroupItemTrigger`;function Sg(e){let{__scopeRadioGroup:t,value:n,disabled:r,children:i,internal_do_not_use_render:a}=e,o=vg(bg,t),s=gg(t),c=o.disabled||r;return(0,U.jsx)(ng,{...s,checked:o.value===n,disabled:c,required:o.required,name:o.name,form:o.form,value:n,onCheck:()=>o.onValueChange(n),internal_do_not_use_render:a,children:i})}Xh(Sg,`RadioGroupItemProvider`);var Cg=v.forwardRef(Xh(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=hg(n),a=gg(n),{checked:o,disabled:s}=tg(xg,a.__scopeRadio),c=v.useRef(null),l=H(t,c),u=v.useRef(!1);return v.useEffect(()=>{let e=Xh(e=>{dg.includes(e.key)&&(u.current=!0)},`handleKeyDown`),t=Xh(()=>u.current=!1,`handleKeyUp`);return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,U.jsx)(zf,{asChild:!0,...i,focusable:!s,active:o,children:(0,U.jsx)(ig,{...a,...r,ref:l,onKeyDown:G(r.onKeyDown,e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:G(r.onFocus,()=>{u.current&&c.current?.click()})})})},`RadioGroupItemTrigger`)),wg=v.forwardRef(Xh(function(e,t){let{__scopeRadioGroup:n,value:r,disabled:i,...a}=e;return(0,U.jsx)(Sg,{__scopeRadioGroup:n,value:r,disabled:i,internal_do_not_use_render:({isFormControl:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Cg,{...a,ref:t,__scopeRadioGroup:n}),e&&(0,U.jsx)(Tg,{__scopeRadioGroup:n})]})})},`RadioGroupItem`)),Tg=v.forwardRef(Xh(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=gg(n);return(0,U.jsx)(cg,{...i,...r,ref:t})},`RadioGroupItemBubbleInput`)),Eg=v.forwardRef(Xh(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=gg(n);return(0,U.jsx)(og,{...i,...r,ref:t})},`RadioGroupIndicator`)),Dg=Object.defineProperty,Z=(e,t)=>Dg(e,`name`,{value:t,configurable:!0});function Og(e,t){return v.useReducer((e,n)=>t[e][n]??e,e)}Z(Og,`useStateMachine`);var kg={Auto:`auto`,Always:`always`,Scroll:`scroll`,Hover:`hover`},Ag={Vertical:`vertical`,Horizontal:`horizontal`},jg={LTR:`ltr`,RTL:`rtl`},Mg=`ScrollArea`,[Ng,Pg]=Zr(Mg),[Fg,Ig]=Ng(Mg),Lg=v.forwardRef(Z(function(e,t){let{__scopeScrollArea:n,type:r=kg.Hover,dir:i,scrollHideDelay:a=600,...o}=e,[s,c]=v.useState(null),[l,u]=v.useState(null),[d,f]=v.useState(null),[p,m]=v.useState(null),[h,g]=v.useState(null),[_,y]=v.useState(0),[b,x]=v.useState(0),[S,C]=v.useState(!1),[w,T]=v.useState(!1),ee=H(t,c),E=da(i);return(0,U.jsx)(Fg,{scope:n,type:r,dir:E,scrollHideDelay:a,scrollArea:s,viewport:l,onViewportChange:u,content:d,onContentChange:f,scrollbarX:p,onScrollbarXChange:m,scrollbarXEnabled:S,onScrollbarXEnabledChange:C,scrollbarY:h,onScrollbarYChange:g,scrollbarYEnabled:w,onScrollbarYEnabledChange:T,onCornerWidthChange:y,onCornerHeightChange:x,children:(0,U.jsx)(W.div,{dir:E,...o,ref:ee,style:{position:`relative`,"--radix-scroll-area-corner-width":_+`px`,"--radix-scroll-area-corner-height":b+`px`,...e.style}})})},`ScrollArea`)),Rg=`ScrollAreaViewport`,zg=Dr(Rg),Bg=v.forwardRef(Z(function(e,t){let{__scopeScrollArea:n,children:r,nonce:i,disableImplicitContentElement:a,...o}=e,s=Ig(Rg,n),c=H(t,v.useRef(null),s.onViewportChange),l=v.isValidElement(r);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Vg,{nonce:i}),(0,U.jsx)(W.div,{"data-radix-scroll-area-viewport":``,...o,ref:c,style:{overflowX:s.scrollbarXEnabled?`scroll`:`hidden`,overflowY:s.scrollbarYEnabled?`scroll`:`hidden`,...e.style},children:a?r:l?(0,U.jsx)(zg,{child:r,children:e=>(0,U.jsx)(Ug,{__scopeScrollArea:n,children:e})}):(0,U.jsx)(zg,{children:(0,U.jsx)(Ug,{__scopeScrollArea:n,children:r})})})]})},`ScrollAreaViewport`)),Vg=v.memo(Z(function({nonce:e}){return(0,U.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`},nonce:e})},`ScrollAreaViewportStyle`),(e,t)=>e.nonce===t.nonce),Hg=`ScrollAreaContent`,Ug=v.forwardRef(Z(function(e,t){let{__scopeScrollArea:n,children:r,...i}=e,a=H(t,Ig(Hg,n).onContentChange);return(0,U.jsx)(W.div,{...i,ref:a,style:{minWidth:`100%`,display:`table`,...e.style},children:r})},`ScrollAreaContent`)),Wg=`ScrollAreaScrollbar`,Gg=v.forwardRef(Z(function(e,t){let{forceMount:n,...r}=e,i=Ig(Wg,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:o}=i,s=e.orientation===Ag.Horizontal;return v.useEffect(()=>(s?a(!0):o(!0),()=>{s?a(!1):o(!1)}),[s,a,o]),i.type===kg.Hover?(0,U.jsx)(Kg,{...r,ref:t,forceMount:n}):i.type===kg.Scroll?(0,U.jsx)(qg,{...r,ref:t,forceMount:n}):i.type===kg.Auto?(0,U.jsx)(Jg,{...r,ref:t,forceMount:n}):i.type===kg.Always?(0,U.jsx)(Yg,{...r,ref:t,"data-state":`visible`}):null},`ScrollAreaScrollbar`)),Kg=v.forwardRef(Z(function(e,t){let{forceMount:n,...r}=e,i=Ig(Wg,e.__scopeScrollArea),[a,o]=v.useState(!1);return v.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let n=Z(()=>{window.clearTimeout(t),o(!0)},`handlePointerEnter`),r=Z(()=>{t=window.setTimeout(()=>o(!1),i.scrollHideDelay)},`handlePointerLeave`);return e.addEventListener(`pointerenter`,n),e.addEventListener(`pointerleave`,r),()=>{window.clearTimeout(t),e.removeEventListener(`pointerenter`,n),e.removeEventListener(`pointerleave`,r)}}},[i.scrollArea,i.scrollHideDelay]),(0,U.jsx)(Li,{present:n||a,children:(0,U.jsx)(Jg,{"data-state":a?`visible`:`hidden`,...r,ref:t})})},`ScrollAreaScrollbarHover`)),qg=v.forwardRef(Z(function(e,t){let{forceMount:n,...r}=e,i=Ig(Wg,e.__scopeScrollArea),a=e.orientation===Ag.Horizontal,o=h_(()=>c(`SCROLL_END`),100),[s,c]=Og(`hidden`,{hidden:{SCROLL:`scrolling`},scrolling:{SCROLL_END:`idle`,POINTER_ENTER:`interacting`},interacting:{SCROLL:`interacting`,POINTER_LEAVE:`idle`},idle:{HIDE:`hidden`,SCROLL:`scrolling`,POINTER_ENTER:`interacting`}});return v.useEffect(()=>{if(s===`idle`){let e=window.setTimeout(()=>c(`HIDE`),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[s,i.scrollHideDelay,c]),v.useEffect(()=>{let e=i.viewport,t=a?`scrollLeft`:`scrollTop`;if(e){let n=e[t],r=Z(()=>{let r=e[t];n!==r&&(c(`SCROLL`),o()),n=r},`handleScroll`);return e.addEventListener(`scroll`,r),()=>e.removeEventListener(`scroll`,r)}},[i.viewport,a,c,o]),(0,U.jsx)(Li,{present:n||s!==`hidden`,children:(0,U.jsx)(Yg,{"data-state":s===`hidden`?`hidden`:`visible`,...r,ref:t,onPointerEnter:G(e.onPointerEnter,()=>c(`POINTER_ENTER`)),onPointerLeave:G(e.onPointerLeave,()=>c(`POINTER_LEAVE`))})})},`ScrollAreaScrollbarScroll`)),Jg=v.forwardRef(Z(function(e,t){let n=Ig(Wg,e.__scopeScrollArea),{forceMount:r,...i}=e,[a,o]=v.useState(!1),s=e.orientation===Ag.Horizontal,c=h_(()=>{if(n.viewport){let e=n.viewport.offsetWidth<n.viewport.scrollWidth,t=n.viewport.offsetHeight<n.viewport.scrollHeight;o(s?e:t)}},10);return g_(n.viewport,c),g_(n.content,c),(0,U.jsx)(Li,{present:r||a,children:(0,U.jsx)(Yg,{"data-state":a?`visible`:`hidden`,...i,ref:t})})},`ScrollAreaScrollbarAuto`)),Yg=v.forwardRef(Z(function(e,t){let{orientation:n=Ag.Vertical,...r}=e,i=Ig(Wg,e.__scopeScrollArea),a=v.useRef(null),o=v.useRef(0),[s,c]=v.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),l=c_(s.viewport,s.content),u={...r,sizes:s,onSizesChange:c,hasThumb:l>0&&l<1,onThumbChange:Z(e=>a.current=e,`onThumbChange`),onThumbPointerUp:Z(()=>o.current=0,`onThumbPointerUp`),onThumbPointerDown:Z(e=>o.current=e,`onThumbPointerDown`)};function d(e,t){return u_(e,o.current,s,t)}return Z(d,`getScrollPosition`),n===Ag.Horizontal?(0,U.jsx)(Xg,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollLeft,t=d_(e,s,i.dir);a.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=d(e,i.dir))}}):n===Ag.Vertical?(0,U.jsx)(Zg,{...u,ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollTop,t=d_(e,s);a.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=d(e))}}):null},`ScrollAreaScrollbarVisible`)),Xg=v.forwardRef(Z(function(e,t){let{sizes:n,onSizesChange:r,...i}=e,a=Ig(Wg,e.__scopeScrollArea),[o,s]=v.useState(),c=v.useRef(null),l=H(t,c,a.onScrollbarXChange);return v.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,U.jsx)(e_,{"data-orientation":`horizontal`,...i,ref:l,sizes:n,style:{bottom:0,left:a.dir===jg.RTL?`var(--radix-scroll-area-corner-width)`:0,right:a.dir===jg.LTR?`var(--radix-scroll-area-corner-width)`:0,"--radix-scroll-area-thumb-width":l_(n)+`px`,...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,n)=>{if(a.viewport){let r=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(r),p_(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:s_(o.paddingLeft),paddingEnd:s_(o.paddingRight)}})}})},`ScrollAreaScrollbarX`)),Zg=v.forwardRef(Z(function(e,t){let{sizes:n,onSizesChange:r,...i}=e,a=Ig(Wg,e.__scopeScrollArea),[o,s]=v.useState(),c=v.useRef(null),l=H(t,c,a.onScrollbarYChange);return v.useEffect(()=>{c.current&&s(getComputedStyle(c.current))},[c]),(0,U.jsx)(e_,{"data-orientation":`vertical`,...i,ref:l,sizes:n,style:{top:0,right:a.dir===jg.LTR?0:void 0,left:a.dir===jg.RTL?0:void 0,bottom:`var(--radix-scroll-area-corner-height)`,"--radix-scroll-area-thumb-height":l_(n)+`px`,...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,n)=>{if(a.viewport){let r=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(r),p_(r,n)&&t.preventDefault()}},onResize:()=>{c.current&&a.viewport&&o&&r({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:s_(o.paddingTop),paddingEnd:s_(o.paddingBottom)}})}})},`ScrollAreaScrollbarY`)),[Qg,$g]=Ng(Wg),e_=v.forwardRef(Z(function(e,t){let{__scopeScrollArea:n,sizes:r,hasThumb:i,onThumbChange:a,onThumbPointerUp:o,onThumbPointerDown:s,onThumbPositionChange:c,onDragScroll:l,onWheelScroll:u,onResize:d,...f}=e,p=Ig(Wg,n),[m,h]=v.useState(null),g=H(t,h),_=v.useRef(null),y=v.useRef(``),b=p.viewport,x=r.content-r.viewport,S=Ya(u),C=Ya(c),w=h_(d,10);function T(e){if(_.current){let t=e.clientX-_.current.left,n=e.clientY-_.current.top;l({x:t,y:n})}}return Z(T,`handleDragScroll`),v.useEffect(()=>{let e=Z(e=>{let t=e.target;m?.contains(t)&&S(e,x)},`handleWheel`);return document.addEventListener(`wheel`,e,{passive:!1}),()=>document.removeEventListener(`wheel`,e,{passive:!1})},[b,m,x,S]),v.useEffect(C,[r,C]),g_(m,w),g_(p.content,w),(0,U.jsx)(Qg,{scope:n,scrollbar:m,hasThumb:i,onThumbChange:Ya(a),onThumbPointerUp:Ya(o),onThumbPositionChange:C,onThumbPointerDown:Ya(s),children:(0,U.jsx)(W.div,{...f,ref:g,style:{position:`absolute`,...f.style},onPointerDown:G(e.onPointerDown,e=>{e.button===0&&(e.target.setPointerCapture(e.pointerId),_.current=m.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect=`none`,p.viewport&&(p.viewport.style.scrollBehavior=`auto`),T(e))}),onPointerMove:G(e.onPointerMove,T),onPointerUp:G(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=y.current,p.viewport&&(p.viewport.style.scrollBehavior=``),_.current=null})})})},`ScrollAreaScrollbarImpl`)),t_=`ScrollAreaThumb`,n_=v.forwardRef(Z(function(e,t){let{forceMount:n,...r}=e,i=$g(t_,e.__scopeScrollArea);return(0,U.jsx)(Li,{present:n||i.hasThumb,children:(0,U.jsx)(r_,{ref:t,...r})})},`ScrollAreaThumb`)),r_=v.forwardRef(Z(function(e,t){let{__scopeScrollArea:n,style:r,...i}=e,a=Ig(t_,n),o=$g(t_,n),{onThumbPositionChange:s}=o,c=H(t,o.onThumbChange),l=v.useRef(void 0),u=h_(()=>{l.current&&=(l.current(),void 0)},100);return v.useEffect(()=>{let e=a.viewport;if(e){let t=Z(()=>{if(u(),!l.current){let t=m_(e,s);l.current=t,s()}},`handleScroll`);return s(),e.addEventListener(`scroll`,t),()=>e.removeEventListener(`scroll`,t)}},[a.viewport,u,s]),(0,U.jsx)(W.div,{"data-state":o.hasThumb?`visible`:`hidden`,...i,ref:c,style:{width:`var(--radix-scroll-area-thumb-width)`,height:`var(--radix-scroll-area-thumb-height)`,...r},onPointerDownCapture:G(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;o.onThumbPointerDown({x:n,y:r})}),onPointerUp:G(e.onPointerUp,o.onThumbPointerUp)})},`ScrollAreaThumbImpl`)),i_=`ScrollAreaCorner`,a_=v.forwardRef(Z(function(e,t){let n=Ig(i_,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!==kg.Scroll&&r?(0,U.jsx)(o_,{...e,ref:t}):null},`ScrollAreaCorner`)),o_=v.forwardRef(Z(function(e,t){let{__scopeScrollArea:n,...r}=e,i=Ig(i_,n),[a,o]=v.useState(0),[s,c]=v.useState(0),l=!!(a&&s),{onCornerWidthChange:u,onCornerHeightChange:d}=i;return g_(i.scrollbarX,()=>{let e=i.scrollbarX?.offsetHeight||0;i.onCornerHeightChange(e),c(e)}),g_(i.scrollbarY,()=>{let e=i.scrollbarY?.offsetWidth||0;i.onCornerWidthChange(e),o(e)}),v.useEffect(()=>()=>{u(0),d(0)},[u,d]),l?(0,U.jsx)(W.div,{...r,ref:t,style:{width:a,height:s,position:`absolute`,right:i.dir===jg.LTR?0:void 0,left:i.dir===jg.RTL?0:void 0,bottom:0,...e.style}}):null},`ScrollAreaCornerImpl`));function s_(e){return e?parseInt(e,10):0}Z(s_,`toInt`);function c_(e,t){let n=e/t;return isNaN(n)?0:n}Z(c_,`getThumbRatio`);function l_(e){let t=c_(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}Z(l_,`getThumbSize`);function u_(e,t,n,r=jg.LTR){let i=l_(n),a=i/2,o=t||a,s=i-o,c=n.scrollbar.paddingStart+o,l=n.scrollbar.size-n.scrollbar.paddingEnd-s,u=n.content-n.viewport,d=r===jg.LTR?[0,u]:[u*-1,0];return f_([c,l],d)(e)}Z(u_,`getScrollPositionFromPointer`);function d_(e,t,n=jg.LTR){let r=l_(t),i=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-i,o=t.content-t.viewport,s=a-r,c=sh(e,n===jg.LTR?[0,o]:[o*-1,0]);return f_([0,o],[0,s])(c)}Z(d_,`getThumbOffsetFromScroll`);function f_(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}Z(f_,`linearScale`);function p_(e,t){return e>0&&e<t}Z(p_,`isScrollingWithinScrollbarBounds`);var m_=Z((e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;function i(){let a={left:e.scrollLeft,top:e.scrollTop},o=n.left!==a.left,s=n.top!==a.top;(o||s)&&t(),n=a,r=window.requestAnimationFrame(i)}return Z(i,`loop`),i(),()=>window.cancelAnimationFrame(r)},`addUnlinkedScrollListener`);function h_(e,t){let n=Ya(e),r=v.useRef(0);return v.useEffect(()=>()=>window.clearTimeout(r.current),[]),v.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}Z(h_,`useDebounceCallback`);function g_(e,t){let n=Ya(t);$r(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}Z(g_,`useResizeObserver`);var __=Object.defineProperty,v_=(e,t)=>__(e,`name`,{value:t,configurable:!0}),y_={ItemAligned:`item-aligned`,Popper:`popper`},b_={LTR:`ltr`,RTL:`rtl`},x_=[` `,`Enter`,`ArrowUp`,`ArrowDown`],S_=[` `,`Enter`],C_=`Select`,[w_,T_,E_]=ni(C_),[D_,O_]=Zr(C_,[E_,Zd]),k_=Zd(),[A_,j_]=D_(C_),[M_,N_]=D_(C_);function P_(e){let{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:a,value:o,defaultValue:s,onValueChange:c,dir:l,name:u,autoComplete:d,disabled:f,required:p,form:m,internal_do_not_use_render:h}=e,g=k_(t),[_,y]=v.useState(null),[b,x]=v.useState(null),[S,C]=v.useState(!1),w=da(l),[T,ee]=ki({prop:r,defaultProp:i??!1,onChange:a,caller:C_}),[E,D]=ki({prop:o,defaultProp:s,onChange:c,caller:C_}),O=v.useRef(null),k=v.useRef(!1),[A,j]=v.useState(null),te=v_(e=>{j({value:e,hasConsumerStoppedPropagation:k.current}),D(e)},`handleUserSelect`),M=v.useRef(E);v.useEffect(()=>{let e=m?_?.ownerDocument.getElementById(m):_?.form;if(e instanceof HTMLFormElement){let t=v_(()=>D(M.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[m,_,D]);let N=!_||!!m||!!_.closest(`form`),[P,F]=v.useState(new Set),ne=qi(),re=Array.from(P).map(e=>e.props.value).join(`;`),ie=v.useCallback(e=>{F(t=>new Set(t).add(e))},[]),ae=v.useCallback(e=>{F(t=>{let n=new Set(t);return n.delete(e),n})},[]),oe={required:p,trigger:_,onTriggerChange:y,valueNode:b,onValueNodeChange:x,valueNodeHasChildren:S,onValueNodeHasChildrenChange:C,contentId:ne,value:E,onValueChange:D,hasConsumerStoppedPropagationRef:k,userSelection:A,onUserSelect:te,open:T,onOpenChange:ee,dir:w,triggerPointerDownPosRef:O,disabled:f,name:u,autoComplete:d,form:m,nativeOptions:P,nativeSelectKey:re,isFormControl:N};return(0,U.jsx)(ef,{...g,children:(0,U.jsx)(A_,{scope:t,...oe,children:(0,U.jsx)(w_.Provider,{scope:t,children:(0,U.jsx)(M_,{scope:t,onNativeOptionAdd:ie,onNativeOptionRemove:ae,children:xv(h)?h(oe):n})})})})}v_(P_,`SelectProvider`);var F_=v_(e=>{let{__scopeSelect:t,children:n,...r}=e;return(0,U.jsx)(P_,{__scopeSelect:t,...r,internal_do_not_use_render:({isFormControl:e})=>(0,U.jsxs)(U.Fragment,{children:[n,e?(0,U.jsx)(bv,{__scopeSelect:t}):null]})})},`Select`),I_=`SelectTrigger`,L_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,disabled:r=!1,...i}=e,a=k_(n),o=j_(I_,n),s=o.disabled||r,c=H(t,o.onTriggerChange),l=T_(n),u=v.useRef(`touch`),[d,f,p]=Cv(e=>{let t=l().filter(e=>!e.disabled),n=wv(t,e,t.find(e=>e.value===o.value));n!==void 0&&o.onUserSelect(n.value)}),m=v_(e=>{s||(o.onOpenChange(!0),p()),e&&(o.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})},`handleOpen`);return(0,U.jsx)(nf,{asChild:!0,...a,children:(0,U.jsx)(W.button,{type:`button`,role:`combobox`,"aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":`none`,dir:o.dir,"data-state":o.open?`open`:`closed`,disabled:s,"data-disabled":s?``:void 0,"data-placeholder":Sv(o.value)?``:void 0,...i,ref:c,onClick:G(i.onClick,e=>{e.currentTarget.focus(),u.current!==`mouse`&&m(e)}),onPointerDown:G(i.onPointerDown,e=>{u.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&e.pointerType===`mouse`&&(m(e),e.preventDefault())}),onKeyDown:G(i.onKeyDown,e=>{let t=d.current!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&(o.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),f(e.key)),!(t&&e.key===` `)&&x_.includes(e.key)&&(m(),e.preventDefault())})})})},`SelectTrigger`)),R_=`SelectValue`,z_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,className:r,style:i,children:a,placeholder:o=``,...s}=e,c=j_(R_,n),{onValueNodeHasChildrenChange:l}=c,u=a!==void 0,d=H(t,c.onValueNodeChange);$r(()=>{l(u)},[l,u]);let f=Sv(c.value);return(0,U.jsx)(W.span,{...s,asChild:!f&&s.asChild,ref:d,style:{pointerEvents:`none`},children:(0,U.jsx)(v.Fragment,{children:f?o:a},f?`placeholder`:`value`)})},`SelectValue`)),B_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,children:r,...i}=e;return(0,U.jsx)(W.span,{"aria-hidden":!0,...i,ref:t,children:r||`▼`})},`SelectIcon`)),[V_,H_]=D_(`SelectPortal`,{forceMount:void 0}),U_=v_(e=>{let{__scopeSelect:t,forceMount:n,...r}=e;return(0,U.jsx)(V_,{scope:e.__scopeSelect,forceMount:n,children:(0,U.jsx)(No,{asChild:!0,...r})})},`SelectPortal`),W_=`SelectContent`,G_=v.forwardRef(v_(function(e,t){let n=H_(W_,e.__scopeSelect),{forceMount:r=n.forceMount,...i}=e,a=j_(W_,e.__scopeSelect),[o,s]=v.useState();return $r(()=>{s(new DocumentFragment)},[]),(0,U.jsx)(Li,{present:r||a.open,children:({present:e})=>e?(0,U.jsx)(Z_,{...i,ref:t}):(0,U.jsx)(K_,{...i,fragment:o})})},`SelectContent`)),K_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,children:r,fragment:i}=e;return i?ct.createPortal((0,U.jsx)(J_,{scope:n,children:(0,U.jsx)(w_.Slot,{scope:n,children:(0,U.jsx)(`div`,{ref:t,children:r})})}),i):null},`SelectContentFragment`)),q_=10,[J_,Y_]=D_(W_),X_=wr(`SelectContent.RemoveScroll`),Z_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n}=e,{position:r=y_.ItemAligned,onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:o,side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g,..._}=e,y=j_(W_,n),[b,x]=v.useState(null),[S,C]=v.useState(null),w=H(t,x),[T,ee]=v.useState(null),[E,D]=v.useState(null),O=T_(n),[k,A]=v.useState(!1),j=v.useRef(!1),te=v.useRef(!1),M=v.useRef(!1);v.useEffect(()=>{if(b)return nc(b)},[b]),Ro();let N=v.useCallback(e=>{let[t,...n]=O().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(n?.scrollIntoView({block:`nearest`}),n===t&&S&&(S.scrollTop=0),n===r&&S&&(S.scrollTop=S.scrollHeight),n?.focus(),document.activeElement!==i))return},[O,S]),P=v.useCallback(()=>N([T,b]),[N,T,b]);v.useEffect(()=>{k&&P()},[k,P]);let{onOpenChange:F,triggerPointerDownPosRef:ne}=y;v.useEffect(()=>{if(b){let e={x:0,y:0},t=v_(t=>{e={x:Math.abs(Math.round(t.pageX)-(ne.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(ne.current?.y??0))}},`handlePointerMove`),n=v_(n=>{e.x<=10&&e.y<=10?n.preventDefault():n.composedPath().includes(b)||F(!1),document.removeEventListener(`pointermove`,t),ne.current=null},`handlePointerUp`);return ne.current!==null&&(document.addEventListener(`pointermove`,t),document.addEventListener(`pointerup`,n,{capture:!0,once:!0})),()=>{document.removeEventListener(`pointermove`,t),document.removeEventListener(`pointerup`,n,{capture:!0})}}},[b,F,ne]),v.useEffect(()=>{let e=v_(()=>F(!1),`close`);return window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[F]);let[re,ie]=Cv(e=>{let t=O().filter(e=>!e.disabled),n=wv(t,e,t.find(e=>e.ref.current===document.activeElement));n&&setTimeout(()=>n.ref.current?.focus())}),ae=v.useCallback((e,t,n)=>{let r=!te.current;r&&(te.current=!0);let i=!j.current&&!n;y.value!==void 0&&y.value===t||i?(ee(e),i&&(j.current=!0)):r&&ee(e)},[y.value]),oe=v.useCallback(()=>b?.focus(),[b]),se=v.useCallback((e,t,n)=>{if(!e)return;let r=!M.current;r&&(M.current=!0);let i=!j.current&&!n;(y.value!==void 0&&y.value===t||i||r)&&D(e)},[y.value]),ce=r===y_.Popper?$_:Q_,le=ce===$_?{side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g}:{};return(0,U.jsx)(J_,{scope:n,content:b,viewport:S,onViewportChange:C,itemRefCallback:ae,selectedItem:T,onItemLeave:oe,itemTextRefCallback:se,focusSelectedItem:P,selectedItemText:E,position:r,isPositioned:k,searchRef:re,children:(0,U.jsx)(qs,{as:X_,allowPinchZoom:!0,children:(0,U.jsx)(go,{asChild:!0,trapped:y.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:G(i,e=>{y.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,U.jsx)(ro,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>y.onOpenChange(!1),children:(0,U.jsx)(ce,{role:`listbox`,id:y.contentId,"data-state":y.open?`open`:`closed`,dir:y.dir,onContextMenu:e=>e.preventDefault(),..._,...le,onPlaced:()=>A(!0),ref:w,style:{display:`flex`,flexDirection:`column`,outline:`none`,..._.style},onKeyDown:G(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&ie(e.key),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=O().filter(e=>!e.disabled).map(e=>e.ref.current);if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>N(t)),e.preventDefault()}})})})})})})},`SelectContentImpl`)),Q_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,onPlaced:r,...i}=e,a=j_(W_,n),o=Y_(W_,n),[s,c]=v.useState(null),[l,u]=v.useState(null),d=H(t,u),f=T_(n),p=v.useRef(!1),m=v.useRef(!0),{viewport:h,selectedItem:g,selectedItemText:_,focusSelectedItem:y}=o,b=v.useCallback(()=>{if(a.trigger&&a.valueNode&&s&&l&&h&&g&&_){let e=a.trigger.getBoundingClientRect(),t=l.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),i=_.getBoundingClientRect();if(a.dir!==b_.RTL){let r=i.left-t.left,a=n.left-r,o=e.left-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-q_,d=sh(a,[q_,Math.max(q_,u-l)]);s.style.minWidth=c+`px`,s.style.left=d+`px`}else{let r=t.right-i.right,a=window.innerWidth-n.right-r,o=window.innerWidth-e.right-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-q_,d=sh(a,[q_,Math.max(q_,u-l)]);s.style.minWidth=c+`px`,s.style.right=d+`px`}let o=f(),c=window.innerHeight-q_*2,u=h.scrollHeight,d=window.getComputedStyle(l),m=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),y=parseInt(d.borderBottomWidth,10),b=parseInt(d.paddingBottom,10),x=m+v+u+b+y,S=Math.min(g.offsetHeight*5,x),C=window.getComputedStyle(h),w=parseInt(C.paddingTop,10),T=parseInt(C.paddingBottom,10),ee=e.top+e.height/2-q_,E=c-ee,D=g.offsetHeight/2,O=g.offsetTop+D,k=m+v+O,A=x-k;if(k<=ee){let e=o.length>0&&g===o[o.length-1].ref.current;s.style.bottom=`0px`;let t=l.clientHeight-h.offsetTop-h.offsetHeight,n=k+Math.max(E,D+(e?T:0)+t+y);s.style.height=n+`px`}else{let e=o.length>0&&g===o[0].ref.current;s.style.top=`0px`;let t=Math.max(ee,m+h.offsetTop+(e?w:0)+D)+A;s.style.height=t+`px`,h.scrollTop=k-ee+h.offsetTop}s.style.margin=`${q_}px 0`,s.style.minHeight=S+`px`,s.style.maxHeight=c+`px`,r?.(),requestAnimationFrame(()=>p.current=!0)}},[f,a.trigger,a.valueNode,s,l,h,g,_,a.dir,r]);$r(()=>b(),[b]);let[x,S]=v.useState();$r(()=>{l&&S(window.getComputedStyle(l).zIndex)},[l]);let C=v.useCallback(e=>{e&&m.current===!0&&(b(),y?.(),m.current=!1)},[b,y]);return(0,U.jsx)(ev,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:p,onScrollButtonChange:C,children:(0,U.jsx)(`div`,{ref:c,style:{display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:x},children:(0,U.jsx)(W.div,{...i,ref:d,style:{boxSizing:`border-box`,maxHeight:`100%`,...i.style}})})})},`SelectItemAlignedPosition`)),$_=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,align:r=`start`,collisionPadding:i=q_,...a}=e,o=k_(n);return(0,U.jsx)(sf,{...o,...a,ref:t,align:r,collisionPadding:i,style:{boxSizing:`border-box`,...a.style,"--radix-select-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-select-content-available-width":`var(--radix-popper-available-width)`,"--radix-select-content-available-height":`var(--radix-popper-available-height)`,"--radix-select-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-select-trigger-height":`var(--radix-popper-anchor-height)`}})},`SelectPopperPosition`)),[ev,tv]=D_(W_,{}),nv=`SelectViewport`,rv=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,nonce:r,...i}=e,a=Y_(nv,n),o=tv(nv,n),s=H(t,a.onViewportChange),c=v.useRef(0);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`},nonce:r}),(0,U.jsx)(w_.Slot,{scope:n,children:(0,U.jsx)(W.div,{"data-radix-select-viewport":``,role:`presentation`,...i,ref:s,style:{position:`relative`,flex:1,overflow:`hidden auto`,...i.style},onScroll:G(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=o;if(r?.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-q_*2,i=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),o=Math.max(i,a);if(o<r){let i=o+e,a=Math.min(r,i),s=i-a;n.style.height=a+`px`,n.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,n.style.justifyContent=`flex-end`)}}}c.current=t.scrollTop})})})]})},`SelectViewport`)),[iv,av]=D_(`SelectGroup`),ov=`SelectItem`,[sv,cv]=D_(ov),lv=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...o}=e,s=j_(ov,n),c=Y_(ov,n),l=s.value===r,[u,d]=v.useState(a??``),[f,p]=v.useState(!1),m=H(t,Ya(e=>c.itemRefCallback?.(e,r,i))),h=qi(),g=v.useRef(`touch`);function _(e){s.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),s.onUserSelect(r),s.onOpenChange(!1)}return v_(_,`handleSelect`),(0,U.jsx)(sv,{scope:n,value:r,disabled:i,textId:h,isSelected:l,onItemTextChange:v.useCallback(e=>{d(t=>t||(e?.textContent??``).trim())},[]),children:(0,U.jsx)(w_.ItemSlot,{scope:n,value:r,disabled:i,textValue:u,children:(0,U.jsx)(W.div,{role:`option`,"aria-labelledby":h,"data-highlighted":f?``:void 0,"aria-selected":l&&f,"data-state":l?`checked`:`unchecked`,"aria-disabled":i||void 0,"data-disabled":i?``:void 0,tabIndex:i?void 0:-1,...o,ref:m,onFocus:G(o.onFocus,()=>p(!0)),onBlur:G(o.onBlur,()=>p(!1)),onClick:G(o.onClick,e=>{i||g.current!==`mouse`&&_(e)}),onPointerUp:G(o.onPointerUp,e=>{i||g.current===`mouse`&&_(e)}),onPointerDown:G(o.onPointerDown,e=>{g.current=e.pointerType}),onPointerMove:G(o.onPointerMove,e=>{g.current=e.pointerType,i?c.onItemLeave?.():g.current===`mouse`&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:G(o.onPointerLeave,e=>{e.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:G(o.onKeyDown,e=>{i||e.target!==e.currentTarget||(c.searchRef?.current===``||e.key!==` `)&&(S_.includes(e.key)&&_(e),e.key===` `&&e.preventDefault())})})})})},`SelectItem`)),uv=`SelectItemText`,dv=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,className:r,style:i,...a}=e,o=j_(uv,n),s=Y_(uv,n),c=cv(uv,n),l=N_(uv,n),[u,d]=v.useState(null),f=Ya(e=>s.itemTextRefCallback?.(e,c.value,c.disabled)),p=H(t,d,c.onItemTextChange,f),m=u?.textContent,h=v.useMemo(()=>(0,U.jsx)(`option`,{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:g,onNativeOptionRemove:_}=l;return $r(()=>(g(h),()=>_(h)),[g,_,h]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(W.span,{id:c.textId,...a,ref:p}),c.isSelected&&o.valueNode&&!o.valueNodeHasChildren&&!Sv(o.value)?ct.createPortal(a.children,o.valueNode):null]})},`SelectItemText`)),fv=`SelectItemIndicator`,pv=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,...r}=e;return cv(fv,n).isSelected?(0,U.jsx)(W.span,{"aria-hidden":!0,...r,ref:t}):null},`SelectItemIndicator`)),mv=`SelectScrollUpButton`,hv=v.forwardRef(v_(function(e,t){let n=Y_(mv,e.__scopeSelect),r=tv(mv,e.__scopeSelect),[i,a]=v.useState(!1),o=H(t,r.onScrollButtonChange);return $r(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollTop>0;a(e)};v_(e,`handleScroll`);let t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,U.jsx)(vv,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop-=t.offsetHeight)}}):null},`SelectScrollUpButton`)),gv=`SelectScrollDownButton`,_v=v.forwardRef(v_(function(e,t){let n=Y_(gv,e.__scopeSelect),r=tv(gv,e.__scopeSelect),[i,a]=v.useState(!1),o=H(t,r.onScrollButtonChange);return $r(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;a(n)};v_(e,`handleScroll`);let t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,U.jsx)(vv,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop+=t.offsetHeight)}}):null},`SelectScrollDownButton`)),vv=v.forwardRef(v_(function(e,t){let{__scopeSelect:n,onAutoScroll:r,...i}=e,a=Y_(`SelectScrollButton`,n),o=v.useRef(null),s=T_(n),c=v.useCallback(()=>{o.current!==null&&(window.clearInterval(o.current),o.current=null)},[]);return v.useEffect(()=>()=>c(),[c]),$r(()=>{s().find(e=>e.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:`nearest`})},[s]),(0,U.jsx)(W.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:G(i.onPointerDown,()=>{o.current===null&&(o.current=window.setInterval(r,50))}),onPointerMove:G(i.onPointerMove,()=>{a.onItemLeave?.(),o.current===null&&(o.current=window.setInterval(r,50))}),onPointerLeave:G(i.onPointerLeave,()=>{c()})})},`SelectScrollButtonImpl`)),yv=`SelectBubbleInput`,bv=v.forwardRef(v_(function({__scopeSelect:e,...t},n){let r=j_(yv,e),{value:i,onValueChange:a,required:o,disabled:s,name:c,autoComplete:l,form:u,userSelection:d}=r,{nativeOptions:f,nativeSelectKey:p}=r,m=v.useRef(null),h=H(n,m),g=i??``,_=v.useRef(g),y=v.useRef(d),b=v.useRef(!1),x=Array.from(f).some(e=>(e.props.value??``)===``);return v.useEffect(()=>{let e=m.current;if(!e)return;let t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set,r=d!==null&&d!==y.current;y.current=d;let i=_.current!==g;_.current=g;let a=r&&i;if(r&&!i&&d.value!==g&&!d.hasConsumerStoppedPropagation&&n){b.current=!0;try{n.call(e,d.value),e.dispatchEvent(new Event(`change`,{bubbles:!0}))}finally{b.current=!1,n.call(e,g)}return}let o=a&&!d.hasConsumerStoppedPropagation;if(i&&n){let t=new Event(`change`,{bubbles:o});n.call(e,g),e.dispatchEvent(t)}},[g,d]),(0,U.jsxs)(W.select,{"aria-hidden":!0,required:o,tabIndex:-1,name:c,autoComplete:l,disabled:s,form:u,onChange:e=>{b.current||a(e.target.value)},...t,style:{...Kr,...t.style},ref:h,defaultValue:g,children:[Sv(i)&&!x?(0,U.jsx)(`option`,{value:``}):null,Array.from(f)]},p)},`SelectBubbleInput`));function xv(e){return typeof e==`function`}v_(xv,`isFunction`);function Sv(e){return e===``||e===void 0}v_(Sv,`shouldShowPlaceholder`);function Cv(e){let t=Ya(e),n=v.useRef(``),r=v.useRef(0),i=v.useCallback(e=>{let i=n.current+e;t(i);function a(e){n.current=e,window.clearTimeout(r.current),e!==``&&(r.current=window.setTimeout(()=>a(``),1e3))}v_(a,`updateSearch`),a(i)},[t]),a=v.useCallback(()=>{n.current=``,window.clearTimeout(r.current)},[]);return v.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,a]}v_(Cv,`useTypeaheadSearch`);function wv(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=Tv(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}v_(wv,`findNextItem`);function Tv(e,t){return e.map((n,r)=>e[(t+r)%e.length])}v_(Tv,`wrapArray`);var Ev=Object.defineProperty,Dv=(e,t)=>Ev(e,`name`,{value:t,configurable:!0}),Ov={Horizontal:`horizontal`,Vertical:`vertical`},kv=Ov.Horizontal,Av=Object.values(Ov),jv=v.forwardRef(Dv(function(e,t){let{decorative:n,orientation:r=kv,...i}=e,a=Mv(r)?r:kv,o=a===Ov.Vertical?a:void 0,s=n?{role:`none`}:{"aria-orientation":o,role:`separator`};return(0,U.jsx)(W.div,{"data-orientation":a,...s,...i,ref:t})},`Separator`));function Mv(e){return Av.includes(e)}Dv(Mv,`isValidOrientation`);var Nv=Object.defineProperty,Pv=(e,t)=>Nv(e,`name`,{value:t,configurable:!0}),Fv={Vertical:`vertical`,Horizontal:`horizontal`},Iv={LTR:`ltr`,RTL:`rtl`},Lv=[`PageUp`,`PageDown`],Rv=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],zv={"from-left":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-right":[`Home`,`PageDown`,`ArrowDown`,`ArrowRight`],"from-bottom":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-top":[`Home`,`PageDown`,`ArrowUp`,`ArrowLeft`]},Bv=`Slider`,[Vv,Hv,Uv]=ni(Bv),[Wv,Gv]=Zr(Bv,[Uv]),[Kv,qv]=Wv(Bv),Jv=v.forwardRef(Pv(function(e,t){let{name:n,min:r=0,max:i=100,step:a=1,orientation:o=Fv.Horizontal,disabled:s=!1,minStepsBetweenThumbs:c=0,preserveThumbOrder:l=!1,defaultValue:u=[r],value:d,onValueChange:f=Pv(()=>{},`onValueChange`),onValueCommit:p=Pv(()=>{},`onValueCommit`),inverted:m=!1,form:h,...g}=e,_=v.useRef(new Set),y=v.useRef(0),b=v.useRef(!1),[x,S]=v.useState(null),C=o===Fv.Horizontal?Zv:Qv,[w,T]=v.useState(null),ee=H(t,T),[E=[],D]=ki({prop:d,defaultProp:u,onChange:Pv(e=>{[..._.current][y.current]?.focus({preventScroll:!0,focusVisible:b.current}),b.current=!1,f(e)},`onChange`)}),O=v.useRef(E),k=v.useRef(E);v.useEffect(()=>{let e=h?w?.ownerDocument.getElementById(h):w?.closest(`form`);if(e instanceof HTMLFormElement){let t=Pv(()=>D(k.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[w,h,D]);function A(e){M(e,gy(E,e))}Pv(A,`handleSlideStart`);function j(e){M(e,y.current)}Pv(j,`handleSlideMove`);function te(){String(E)!==String(O.current)&&p(E)}Pv(te,`handleSlideEnd`);function M(e,t,{commit:n}={commit:!1}){let o=xy(a),s=sh(Sy(Math.round((e-r)/a)*a+r,o),[r,i]),u=c*a;function d(e){let n=l?sh(s,[e[t-1]===void 0?r:e[t-1]+u,e[t+1]===void 0?i:e[t+1]-u]):s,a=py(e,n,t);return yy(a,u)?{nextValues:a,changedIndex:l?t:a.indexOf(n),hasChanged:String(a)!==String(e)}:null}Pv(d,`getNextValues`);let f=d(E);f?.hasChanged&&S(f.nextValues),D((e=[])=>{let t=d(e);return t?(y.current=t.changedIndex,t.hasChanged&&n&&p(t.nextValues),t.hasChanged?t.nextValues:e):e})}return Pv(M,`updateValues`),(0,U.jsx)(Kv,{scope:e.__scopeSlider,name:n,disabled:s,min:r,max:i,valueIndexToChangeRef:y,thumbs:_.current,values:E,orientation:o,form:h,userRequestedValues:x,children:(0,U.jsx)(Vv.Provider,{scope:e.__scopeSlider,children:(0,U.jsx)(Vv.Slot,{scope:e.__scopeSlider,children:(0,U.jsx)(C,{"aria-disabled":s,"data-disabled":s?``:void 0,...g,ref:ee,onPointerDown:G(g.onPointerDown,()=>{s||(O.current=E,b.current=!1)}),min:r,max:i,inverted:m,onSlideStart:s?void 0:A,onSlideMove:s?void 0:j,onSlideEnd:s?void 0:te,onHomeKeyDown:()=>{s||(b.current=!0,M(r,0,{commit:!0}))},onEndKeyDown:()=>{s||(b.current=!0,M(i,E.length-1,{commit:!0}))},onStepKeyDown:({event:e,direction:t})=>{if(!s){b.current=!0;let n=Lv.includes(e.key)||e.shiftKey&&Rv.includes(e.key)?10:1,i=y.current,o=E[i];M(Cy(o,{min:r,step:a,direction:t,multiplier:n}),i,{commit:!0})}}})})})})},`Slider`)),[Yv,Xv]=Wv(Bv,{startEdge:`left`,endEdge:`right`,size:`width`,direction:1}),Zv=v.forwardRef(Pv(function(e,t){let{min:n,max:r,dir:i,inverted:a,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...u}=e,[d,f]=v.useState(null),p=H(t,f),m=v.useRef(void 0),h=da(i),g=h===Iv.LTR,_=g&&!a||!g&&a;function y(e){let t=m.current||d.getBoundingClientRect(),i=by([0,t.width],_?[n,r]:[r,n]);return m.current=t,i(e-t.left)}return Pv(y,`getValueFromPointer`),(0,U.jsx)(Yv,{scope:e.__scopeSlider,startEdge:_?`left`:`right`,endEdge:_?`right`:`left`,direction:_?1:-1,size:`width`,children:(0,U.jsx)($v,{dir:h,"data-orientation":`horizontal`,...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":`translateX(-50%)`},onSlideStart:e=>{let t=y(e.clientX);o?.(t)},onSlideMove:e=>{let t=y(e.clientX);s?.(t)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:e=>{let t=zv[_?`from-left`:`from-right`].includes(e.key);l?.({event:e,direction:t?-1:1})}})})},`SliderHorizontal`)),Qv=v.forwardRef(Pv(function(e,t){let{min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...l}=e,u=v.useRef(null),d=H(t,u),f=v.useRef(void 0),p=!i;function m(e){let t=f.current||u.current.getBoundingClientRect(),i=by([0,t.height],p?[r,n]:[n,r]);return f.current=t,i(e-t.top)}return Pv(m,`getValueFromPointer`),(0,U.jsx)(Yv,{scope:e.__scopeSlider,startEdge:p?`bottom`:`top`,endEdge:p?`top`:`bottom`,size:`height`,direction:p?1:-1,children:(0,U.jsx)($v,{"data-orientation":`vertical`,...l,ref:d,style:{...l.style,"--radix-slider-thumb-transform":`translateY(50%)`},onSlideStart:e=>{let t=m(e.clientY);a?.(t)},onSlideMove:e=>{let t=m(e.clientY);o?.(t)},onSlideEnd:()=>{f.current=void 0,s?.()},onStepKeyDown:e=>{let t=zv[p?`from-bottom`:`from-top`].includes(e.key);c?.({event:e,direction:t?-1:1})}})})},`SliderVertical`)),$v=v.forwardRef(Pv(function(e,t){let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:c,...l}=e,u=qv(Bv,n);return(0,U.jsx)(W.span,{...l,ref:t,onKeyDown:G(e.onKeyDown,e=>{e.key===`Home`?(o(e),e.preventDefault()):e.key===`End`?(s(e),e.preventDefault()):Lv.concat(Rv).includes(e.key)&&(c(e),e.preventDefault())}),onPointerDown:G(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus({preventScroll:!0,focusVisible:!1}):r(e)}),onPointerMove:G(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:G(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})},`SliderImpl`)),ey=`SliderTrack`,ty=v.forwardRef(Pv(function(e,t){let{__scopeSlider:n,...r}=e,i=qv(ey,n);return(0,U.jsx)(W.span,{"data-disabled":i.disabled?``:void 0,"data-orientation":i.orientation,...r,ref:t})},`SliderTrack`)),ny=`SliderRange`,ry=v.forwardRef(Pv(function(e,t){let{__scopeSlider:n,...r}=e,i=qv(ny,n),a=Xv(ny,n),o=H(t,v.useRef(null)),s=i.values.length,c=i.values.map(e=>my(e,i.min,i.max)),l=s>1?Math.min(...c):0,u=100-Math.max(...c);return(0,U.jsx)(W.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,...r,ref:o,style:{...e.style,[a.startEdge]:l+`%`,[a.endEdge]:u+`%`}})},`SliderRange`)),[iy,ay]=Wv(`SliderThumb`),oy=`SliderThumbProvider`;function sy(e){let{__scopeSlider:t,name:n,children:r,internal_do_not_use_render:i}=e,a=qv(oy,t),o=Hv(t),[s,c]=v.useState(null),l=v.useMemo(()=>s?o().findIndex(e=>e.ref.current===s):-1,[o,s]),u=hl(s),d=!s||!!a.form||!!s.closest(`form`),f=a.values[l],p=n??(a.name?a.name+(a.values.length>1?`[]`:``):void 0),m=f===void 0?0:my(f,a.min,a.max);v.useEffect(()=>{if(s)return a.thumbs.add(s),()=>{a.thumbs.delete(s)}},[s,a.thumbs]);let h={value:f,name:p,form:a.form,isFormControl:d,index:l,thumb:s,onThumbChange:c,percent:m,size:u};return(0,U.jsx)(iy,{scope:t,...h,children:wy(i)?i(h):r})}Pv(sy,`SliderThumbProvider`);var cy=`SliderThumbTrigger`,ly=v.forwardRef(Pv(function(e,t){let{__scopeSlider:n,...r}=e,i=qv(cy,n),a=Xv(cy,n),{index:o,value:s,percent:c,size:l,onThumbChange:u}=ay(cy,n),d=H(t,u),f=hy(o,i.values.length),p=l?.[a.size],m=p?_y(p,c,a.direction):0;return(0,U.jsx)(`span`,{style:{transform:`var(--radix-slider-thumb-transform)`,position:`absolute`,[a.startEdge]:`calc(${c}% + ${m}px)`},children:(0,U.jsx)(Vv.ItemSlot,{scope:n,children:(0,U.jsx)(W.span,{role:`slider`,"aria-label":e[`aria-label`]||f,"aria-valuemin":i.min,"aria-valuenow":s,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,tabIndex:i.disabled?void 0:0,...r,ref:d,style:s===void 0?{display:`none`}:e.style,onFocus:G(e.onFocus,()=>{i.valueIndexToChangeRef.current=o})})})})},`SliderThumbTrigger`)),uy=v.forwardRef(Pv(function(e,t){let{__scopeSlider:n,name:r,...i}=e;return(0,U.jsx)(sy,{__scopeSlider:n,name:r,internal_do_not_use_render:({index:e,isFormControl:r})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(ly,{...i,ref:t,__scopeSlider:n}),r?(0,U.jsx)(fy,{__scopeSlider:n},e):null]})})},`SliderThumb`)),dy=`SliderBubbleInput`,fy=v.forwardRef(Pv(function({__scopeSlider:e,onInput:t,...n},r){let{index:i,value:a,name:o,form:s}=ay(dy,e),{userRequestedValues:c}=qv(dy,e),l=v.useRef(null),u=H(l,r),d=v.useRef(!1),f=v.useRef(a),p=v.useRef(c),m=v.useRef(c);return v.useEffect(()=>{let e=l.current;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set,r=f.current,o=r!==a;f.current=a;let s=c!==m.current;if(m.current=c,o&&n){let t=c!==p.current;p.current=c;let o=c?.[i];d.current=!(t&&(s&&o!==r||o===a));let l=new Event(`input`,{bubbles:!0});n.call(e,a),e.dispatchEvent(l),d.current=!1}},[i,a,c]),(0,U.jsx)(W.input,{style:{display:`none`},name:o,form:s,...n,ref:u,defaultValue:a,onInput:G(t,e=>{d.current&&e.stopPropagation()})})},`SliderBubbleInput`));function py(e=[],t,n){let r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}Pv(py,`getNextSortedValues`);function my(e,t,n){return sh(100/(n-t)*(e-t),[0,100])}Pv(my,`convertValueToPercentage`);function hy(e,t){if(t>2)return`Value ${e+1} of ${t}`;if(t===2)return[`Minimum`,`Maximum`][e]}Pv(hy,`getLabel`);function gy(e,t){if(e.length===1)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}Pv(gy,`getClosestValueIndex`);function _y(e,t,n){let r=e/2;return(r-by([0,50],[0,r])(t)*n)*n}Pv(_y,`getThumbInBoundsOffset`);function vy(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}Pv(vy,`getStepsBetweenValues`);function yy(e,t){if(t>0){let n=vy(e);return Math.min(...n)>=t}return!0}Pv(yy,`hasMinStepsBetweenValues`);function by(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}Pv(by,`linearScale`);function xy(e){if(!Number.isFinite(e))return 0;let t=e.toString();if(t.includes(`e`)){let[e,n]=t.split(`e`),r=e.split(`.`)[1]||``,i=Number(n);return Math.max(0,r.length-i)}let n=t.split(`.`)[1];return n?n.length:0}Pv(xy,`getDecimalCount`);function Sy(e,t){let n=10**t;return Math.round(e*n)/n}Pv(Sy,`roundValue`);function Cy(e,{min:t,step:n,direction:r,multiplier:i}){let a=xy(n),o=(e-t)/n,s=Math.round(o),c=Sy(s*n+t,a)===Sy(e,a),l;return l=c?s+i*r:r>0?Math.ceil(o):Math.floor(o),Sy(l*n+t,a)}Pv(Cy,`getNextStepValue`);function wy(e){return typeof e==`function`}Pv(wy,`isFunction`);var Ty=Object.defineProperty,Ey=(e,t)=>Ty(e,`name`,{value:t,configurable:!0}),Dy=`Switch`,[Oy,ky]=Zr(Dy),[Ay,jy]=Oy(Dy);function My(e){let{__scopeSwitch:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:u=`on`,internal_do_not_use_render:d}=e,[f,p]=ki({prop:n,defaultProp:i??!1,onChange:c,caller:Dy}),[m,h]=v.useState(null),[g,_]=v.useState(null),[y,b]=v.useState(null),x={checked:f,setChecked:p,disabled:a,control:m,setControl:h,name:s,form:o,value:u,userClick:y,onUserClick:b,required:l,defaultChecked:i,isFormControl:!m||!!o||!!m.closest(`form`),bubbleInput:g,setBubbleInput:_};return(0,U.jsx)(Ay,{scope:t,...x,children:By(d)?d(x):r})}Ey(My,`SwitchProvider`);var Ny=`SwitchTrigger`,Py=v.forwardRef(Ey(function({__scopeSwitch:e,onClick:t,...n},r){let{control:i,form:a,value:o,disabled:s,checked:c,required:l,setControl:u,setChecked:d,onUserClick:f,isFormControl:p,bubbleInput:m}=jy(Ny,e),h=H(r,u),g=v.useRef(c);return v.useEffect(()=>{let e=a?i?.ownerDocument.getElementById(a):i?.form;if(e instanceof HTMLFormElement){let t=Ey(()=>d(g.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[i,a,d]),(0,U.jsx)(W.button,{type:`button`,role:`switch`,"aria-checked":c,"aria-required":l,"data-state":Vy(c),"data-disabled":s?``:void 0,disabled:s,value:o,...n,ref:h,onClick:G(t,e=>{let t=e.isPropagationStopped();f({requestedChecked:!c,hasConsumerStoppedPropagation:t}),d(e=>!e),m&&p&&(t||e.stopPropagation())})})},`SwitchTrigger`)),Fy=v.forwardRef(Ey(function(e,t){let{__scopeSwitch:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,U.jsx)(My,{__scopeSwitch:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Py,{...d,ref:t,__scopeSwitch:n}),e&&(0,U.jsx)(zy,{__scopeSwitch:n})]})})},`Switch`)),Iy=`SwitchThumb`,Ly=v.forwardRef(Ey(function(e,t){let{__scopeSwitch:n,...r}=e,i=jy(Iy,n);return(0,U.jsx)(W.span,{"data-state":Vy(i.checked),"data-disabled":i.disabled?``:void 0,...r,ref:t})},`SwitchThumb`)),Ry=`SwitchBubbleInput`,zy=v.forwardRef(Ey(function({__scopeSwitch:e,onClick:t,...n},r){let{control:i,userClick:a,checked:o,defaultChecked:s,required:c,disabled:l,name:u,value:d,form:f,bubbleInput:p,setBubbleInput:m}=jy(Ry,e),h=H(r,m),g=hl(i),_=v.useRef(!1),y=v.useRef(o),b=v.useRef(a),x=v.useRef(null);v.useEffect(()=>{let e=p;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set;if(!n)return;let r=y.current!==o;y.current=o;let i=a!==null&&a!==b.current;if(b.current=a,i)x.current=r?null:a,r&&n.call(e,o),e.dispatchEvent(new Event(`click`,{bubbles:!a.hasConsumerStoppedPropagation}));else if(r){let t=x.current;x.current=null;let r=t?.requestedChecked===o;_.current=!0,n.call(e,o),e.dispatchEvent(new Event(`click`,{bubbles:!(r&&t.hasConsumerStoppedPropagation)})),_.current=!1}},[p,o,a]);let S=v.useRef(o);return(0,U.jsx)(W.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:s??S.current,required:c,disabled:l,name:u,value:d,form:f,...n,tabIndex:-1,ref:h,onClick:G(t,e=>{_.current&&e.stopPropagation()}),style:{...n.style,...g,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`SwitchBubbleInput`));function By(e){return typeof e==`function`}Ey(By,`isFunction`);function Vy(e){return e?`checked`:`unchecked`}Ey(Vy,`getState`);var Hy=Object.defineProperty,Uy=(e,t)=>Hy(e,`name`,{value:t,configurable:!0}),Wy={Automatic:`automatic`,Manual:`manual`},Gy=`Tabs`,[Ky,qy]=Zr(Gy,[jf]),Jy=jf(),[Yy,Xy]=Ky(Gy),Zy=v.forwardRef(Uy(function(e,t){let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:o=`horizontal`,dir:s,activationMode:c=Wy.Automatic,...l}=e,u=da(s),[d,f]=ki({prop:r,onChange:i,defaultProp:a??``,caller:Gy});return(0,U.jsx)(Yy,{scope:n,baseId:qi(),value:d,onValueChange:f,orientation:o,dir:u,activationMode:c,children:(0,U.jsx)(W.div,{dir:u,"data-orientation":o,...l,ref:t})})},`Tabs`)),Qy=`TabsList`,$y=v.forwardRef(Uy(function(e,t){let{__scopeTabs:n,loop:r=!0,...i}=e,a=Xy(Qy,n),o=Jy(n);return(0,U.jsx)(If,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,U.jsx)(W.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})},`TabsList`)),eb=`TabsTrigger`,tb=v.forwardRef(Uy(function(e,t){let{__scopeTabs:n,value:r,disabled:i=!1,...a}=e,o=Xy(eb,n),s=Jy(n),c=ib(o.baseId,r),l=ab(o.baseId,r),u=r===o.value;return(0,U.jsx)(zf,{asChild:!0,...s,focusable:!i,active:u,children:(0,U.jsx)(W.button,{type:`button`,role:`tab`,"aria-selected":u,"aria-controls":l,"data-state":u?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:c,...a,ref:t,onMouseDown:G(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?(e.currentTarget.focus(),o.onValueChange(r)):e.preventDefault()}),onKeyDown:G(e.onKeyDown,e=>{i||e.target!==e.currentTarget||[` `,`Enter`].includes(e.key)&&o.onValueChange(r)}),onFocus:G(e.onFocus,()=>{let e=o.activationMode!==Wy.Manual;!u&&!i&&e&&o.onValueChange(r)})})})},`TabsTrigger`)),nb=`TabsContent`,rb=v.forwardRef(Uy(function(e,t){let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,s=Xy(nb,n),c=ib(s.baseId,r),l=ab(s.baseId,r),u=r===s.value,d=v.useRef(u);return v.useEffect(()=>{let e=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,U.jsx)(Li,{present:i||u,children:({present:n})=>(0,U.jsx)(W.div,{"data-state":u?`active`:`inactive`,"data-orientation":s.orientation,role:`tabpanel`,"aria-labelledby":c,hidden:!n,id:l,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:d.current?`0s`:void 0},children:n&&a})})},`TabsContent`));function ib(e,t){return`${e}-trigger-${t}`}Uy(ib,`makeTriggerId`);function ab(e,t){return`${e}-content-${t}`}Uy(ab,`makeContentId`);var ob=Object.defineProperty,sb=(e,t)=>ob(e,`name`,{value:t,configurable:!0}),cb=`Toggle`,lb=v.forwardRef(sb(function(e,t){let{pressed:n,defaultPressed:r,onPressedChange:i,...a}=e,[o,s]=ki({prop:n,onChange:i,defaultProp:r??!1,caller:cb});return(0,U.jsx)(W.button,{type:`button`,"aria-pressed":o,"data-state":o?`on`:`off`,"data-disabled":e.disabled?``:void 0,...a,ref:t,onClick:G(e.onClick,()=>{e.disabled||s(!o)})})},`Toggle`)),ub=Object.defineProperty,db=(e,t)=>ub(e,`name`,{value:t,configurable:!0}),fb=`ToggleGroup`,pb={Single:`single`,Multiple:`multiple`},[mb,hb]=Zr(fb,[jf]),gb=jf(),_b=v.forwardRef(db(function(e,t){let{type:n,...r}=e;if(n===pb.Single)return(0,U.jsx)(bb,{role:`radiogroup`,...r,ref:t});if(n===pb.Multiple)return(0,U.jsx)(xb,{role:`toolbar`,...r,ref:t});throw Error(`Missing prop \`type\` expected on \`${fb}\``)},`ToggleGroup`)),[vb,yb]=mb(fb),bb=v.forwardRef(db(function(e,t){let{value:n,defaultValue:r,onValueChange:i=db(()=>{},`onValueChange`),...a}=e,[o,s]=ki({prop:n,defaultProp:r??``,onChange:i,caller:fb});return(0,U.jsx)(vb,{scope:e.__scopeToggleGroup,type:pb.Single,value:v.useMemo(()=>o?[o]:[],[o]),onItemActivate:s,onItemDeactivate:v.useCallback(()=>s(``),[s]),children:(0,U.jsx)(wb,{...a,ref:t})})},`ToggleGroupImplSingle`)),xb=v.forwardRef(db(function(e,t){let{value:n,defaultValue:r,onValueChange:i=db(()=>{},`onValueChange`),...a}=e,[o,s]=ki({prop:n,defaultProp:r??[],onChange:i,caller:fb}),c=v.useCallback(e=>s((t=[])=>[...t,e]),[s]),l=v.useCallback(e=>s((t=[])=>t.filter(t=>t!==e)),[s]);return(0,U.jsx)(vb,{scope:e.__scopeToggleGroup,type:pb.Multiple,value:o,onItemActivate:c,onItemDeactivate:l,children:(0,U.jsx)(wb,{...a,ref:t})})},`ToggleGroupImplMultiple`)),[Sb,Cb]=mb(fb),wb=v.forwardRef(db(function(e,t){let{__scopeToggleGroup:n,disabled:r=!1,rovingFocus:i=!0,orientation:a,dir:o,loop:s=!0,...c}=e,l=gb(n),u=da(o),d={dir:u,...c};return(0,U.jsx)(Sb,{scope:n,rovingFocus:i,disabled:r,children:i?(0,U.jsx)(If,{asChild:!0,...l,orientation:a,dir:u,loop:s,children:(0,U.jsx)(W.div,{...d,ref:t})}):(0,U.jsx)(W.div,{...d,ref:t})})},`ToggleGroupImpl`)),Tb=`ToggleGroupItem`,Eb=v.forwardRef(db(function(e,t){let n=yb(Tb,e.__scopeToggleGroup),r=Cb(Tb,e.__scopeToggleGroup),i=gb(e.__scopeToggleGroup),a=n.value.includes(e.value),o=r.disabled||e.disabled,s={...e,pressed:a,disabled:o},c=v.useRef(null);return r.rovingFocus?(0,U.jsx)(zf,{asChild:!0,...i,focusable:!o,active:a,ref:c,children:(0,U.jsx)(Db,{...s,ref:t})}):(0,U.jsx)(Db,{...s,ref:t})},`ToggleGroupItem`)),Db=v.forwardRef(db(function(e,t){let{__scopeToggleGroup:n,value:r,...i}=e,a=yb(Tb,n),o={role:`radio`,"aria-checked":e.pressed,"aria-pressed":void 0},s=a.type===pb.Single?o:void 0;return(0,U.jsx)(lb,{...s,...i,ref:t,onPressedChange:e=>{e?a.onItemActivate(r):a.onItemDeactivate(r)}})},`ToggleGroupItemImpl`)),Ob=Object.defineProperty,kb=(e,t)=>Ob(e,`name`,{value:t,configurable:!0}),[Ab,jb]=Zr(`Tooltip`,[Zd]),Mb=Zd(),Nb=`TooltipProvider`,Pb=700,Fb=`tooltip.open`,[Ib,Lb]=Ab(Nb),Rb=kb(e=>{let{__scopeTooltip:t,delayDuration:n=Pb,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,o=v.useRef(!0),s=v.useRef(!1),c=v.useRef(0);return v.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,U.jsx)(Ib,{scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:v.useCallback(()=>{r<=0||(window.clearTimeout(c.current),o.current=!1)},[r]),onClose:v.useCallback(()=>{r<=0||(window.clearTimeout(c.current),c.current=window.setTimeout(()=>o.current=!0,r))},[r]),isPointerInTransitRef:s,onPointerInTransitChange:v.useCallback(e=>{s.current=e},[]),disableHoverableContent:i,children:a})},`TooltipProvider`),zb=`Tooltip`,[Bb,Vb]=Ab(zb),Hb=kb(e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:a,disableHoverableContent:o,delayDuration:s}=e,c=Lb(zb,e.__scopeTooltip),l=Mb(t),[u,d]=v.useState(null),[f,p]=v.useState(void 0),m=qi(),h=v.useRef(0),g=o??c.disableHoverableContent,_=s??c.delayDuration,y=v.useRef(!1),[b,x]=ki({prop:r,defaultProp:i??!1,onChange:kb(e=>{e?(c.onOpen(),document.dispatchEvent(new CustomEvent(Fb))):c.onClose(),a?.(e)},`onChange`),caller:zb}),S=v.useMemo(()=>b?y.current?`delayed-open`:`instant-open`:`closed`,[b]),C=v.useCallback(()=>{window.clearTimeout(h.current),h.current=0,y.current=!1,x(!0)},[x]),w=v.useCallback(()=>{window.clearTimeout(h.current),h.current=0,x(!1)},[x]),T=v.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>{y.current=!0,x(!0),h.current=0},_)},[_,x]);v.useEffect(()=>()=>{h.current&&=(window.clearTimeout(h.current),0)},[]);let ee=f??m;return(0,U.jsx)(ef,{...l,children:(0,U.jsx)(Bb,{scope:t,contentId:ee,setContentId:p,open:b,stateAttribute:S,trigger:u,onTriggerChange:d,onTriggerEnter:v.useCallback(()=>{c.isOpenDelayedRef.current?T():C()},[c.isOpenDelayedRef,T,C]),onTriggerLeave:v.useCallback(()=>{g?w():(window.clearTimeout(h.current),h.current=0)},[w,g]),onOpen:C,onClose:w,disableHoverableContent:g,children:n})})},`Tooltip`),Ub=`TooltipTrigger`,Wb=v.forwardRef(kb(function(e,t){let{__scopeTooltip:n,"aria-describedby":r,...i}=e,a=Vb(Ub,n),o=Lb(Ub,n),s=Mb(n),c=H(t,v.useRef(null),a.onTriggerChange),l=v.useRef(!1),u=v.useRef(!1),d=v.useCallback(()=>l.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener(`pointerup`,d),[d]),(0,U.jsx)(nf,{asChild:!0,...s,children:(0,U.jsx)(W.button,{"aria-describedby":a.open?sx(r,a.contentId):r,"data-state":a.stateAttribute,...i,ref:c,onPointerMove:G(e.onPointerMove,e=>{e.pointerType!==`touch`&&!u.current&&!o.isPointerInTransitRef.current&&(a.onTriggerEnter(),u.current=!0)}),onPointerLeave:G(e.onPointerLeave,()=>{a.onTriggerLeave(),u.current=!1}),onPointerDown:G(e.onPointerDown,()=>{a.open&&a.onClose(),l.current=!0,document.addEventListener(`pointerup`,d,{once:!0})}),onFocus:G(e.onFocus,()=>{l.current||a.onOpen()}),onBlur:G(e.onBlur,a.onClose),onClick:G(e.onClick,a.onClose)})})},`TooltipTrigger`)),Gb=`TooltipPortal`,[Kb,qb]=Ab(Gb,{forceMount:void 0}),Jb=kb(e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:i}=e,a=Vb(Gb,t);return(0,U.jsx)(Kb,{scope:t,forceMount:n,children:(0,U.jsx)(Li,{present:n||a.open,children:(0,U.jsx)(No,{asChild:!0,container:i,children:r})})})},`TooltipPortal`),Yb=`TooltipContent`,Xb=v.forwardRef(kb(function(e,t){let n=qb(Yb,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i=`top`,...a}=e,o=Vb(Yb,e.__scopeTooltip);return(0,U.jsx)(Li,{present:r||o.open,children:o.disableHoverableContent?(0,U.jsx)($b,{side:i,...a,ref:t}):(0,U.jsx)(Zb,{side:i,...a,ref:t})})},`TooltipContent`)),Zb=v.forwardRef(kb(function(e,t){let n=Vb(Yb,e.__scopeTooltip),r=Lb(Yb,e.__scopeTooltip),i=v.useRef(null),a=H(t,i),[o,s]=v.useState(null),{trigger:c,onClose:l}=n,u=i.current,{onPointerInTransitChange:d}=r,f=v.useCallback(()=>{s(null),d(!1)},[d]),p=v.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},i=nx(r,tx(r,n.getBoundingClientRect())),a=rx(t.getBoundingClientRect()),o=ax([...i,...a]);s(o),d(!0)},[d]);return v.useEffect(()=>()=>f(),[f]),v.useEffect(()=>{if(c&&u){let e=kb(e=>p(e,u),`handleTriggerLeave`),t=kb(e=>p(e,c),`handleContentLeave`);return c.addEventListener(`pointerleave`,e),u.addEventListener(`pointerleave`,t),()=>{c.removeEventListener(`pointerleave`,e),u.removeEventListener(`pointerleave`,t)}}},[c,u,p,f]),v.useEffect(()=>{if(o){let e=kb(e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=c?.contains(t)||u?.contains(t),i=!ix(n,o);r?f():i&&(f(),l())},`handleTrackPointerGrace`);return document.addEventListener(`pointermove`,e),()=>document.removeEventListener(`pointermove`,e)}},[c,u,o,l,f]),(0,U.jsx)($b,{...e,ref:a})},`TooltipContentHoverable`)),Qb=Dr(`TooltipContent`),$b=v.forwardRef(kb(function(e,t){let{__scopeTooltip:n,children:r,"aria-label":i,id:a,onEscapeKeyDown:o,onPointerDownOutside:s,...c}=e,l=Vb(Yb,n),u=Mb(n),{onClose:d}=l,[f,p]=v.useState(null),m=H(t,p);bo(f),v.useEffect(()=>(document.addEventListener(Fb,d),()=>document.removeEventListener(Fb,d)),[d]),v.useEffect(()=>{if(l.trigger){let e=kb(e=>{e.target instanceof Node&&e.target.contains(l.trigger)&&d()},`handleScroll`);return window.addEventListener(`scroll`,e,{capture:!0}),()=>window.removeEventListener(`scroll`,e,{capture:!0})}},[l.trigger,d]);let{setContentId:h}=l;return $r(()=>(h(a),()=>{h(void 0)}),[a,h]),(0,U.jsx)(ro,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:d,children:(0,U.jsxs)(sf,{"data-state":l.stateAttribute,role:i?void 0:`tooltip`,id:i?void 0:l.contentId,...u,...c,ref:m,style:{...c.style,"--radix-tooltip-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-tooltip-content-available-width":`var(--radix-popper-available-width)`,"--radix-tooltip-content-available-height":`var(--radix-popper-available-height)`,"--radix-tooltip-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-tooltip-trigger-height":`var(--radix-popper-anchor-height)`},children:[(0,U.jsx)(Qb,{children:r}),i?(0,U.jsx)(qr,{id:l.contentId,role:`tooltip`,children:i}):null]})})},`TooltipContentImpl`)),ex=v.forwardRef(kb(function(e,t){let{__scopeTooltip:n,...r}=e,i=Mb(n);return(0,U.jsx)(uf,{...i,...r,ref:t})},`TooltipArrow`));function tx(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return`left`;case i:return`right`;case n:return`top`;case r:return`bottom`;default:throw Error(`unreachable`)}}kb(tx,`getExitSideFromRect`);function nx(e,t,n=5){let r=[];switch(t){case`top`:r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case`bottom`:r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case`left`:r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case`right`:r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}kb(nx,`getPaddedExitPoints`);function rx(e){let{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}kb(rx,`getPointsFromRect`);function ix(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let o=t[e],s=t[a],c=o.x,l=o.y,u=s.x,d=s.y;l>r!=d>r&&n<(u-c)*(r-l)/(d-l)+c&&(i=!i)}return i}kb(ix,`isPointInPolygon`);function ax(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)),ox(t)}kb(ax,`getHull`);function ox(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}kb(ox,`getHullPresorted`);function sx(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}kb(sx,`concatAriaDescribedby`);var cx=Gt(`inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/90`,brand:`rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90`,destructive:`bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40`,outline:`border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,ghost:`hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-11 px-4 py-2 has-[>svg]:px-3`,xs:`h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,lg:`h-12 rounded-md px-6 has-[>svg]:px-4`,icon:`size-11`,"icon-xs":`size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-8`,"icon-lg":`size-12`}},defaultVariants:{variant:`default`,size:`default`}});function Q({className:e,variant:t=`default`,size:n=`default`,asChild:r=!1,...i}){let a=r?Tr:`button`;return(0,U.jsx)(a,{"data-slot":`button`,"data-variant":t,"data-size":n,className:V(cx({variant:t,size:n,className:e})),...i})}function lx({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`card`,className:V(`flex flex-col gap-6 rounded-xl bg-card py-6 text-card-foreground shadow-[var(--sft-shadow-surface)]`,e),...t})}function ux({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`card-header`,className:V(`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`,e),...t})}function dx({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`card-title`,className:V(`leading-none font-semibold`,e),...t})}function fx({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`card-description`,className:V(`text-sm text-muted-foreground`,e),...t})}function px({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`card-content`,className:V(`px-6`,e),...t})}var mx=Gt(`inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3`,{variants:{variant:{default:`bg-primary text-primary-foreground [a&]:hover:bg-primary/90`,secondary:`bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90`,destructive:`bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90`,outline:`border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,ghost:`[a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,link:`text-primary underline-offset-4 [a&]:hover:underline`}},defaultVariants:{variant:`default`}});function hx({className:e,variant:t=`default`,asChild:n=!1,...r}){let i=n?Tr:`span`;return(0,U.jsx)(i,{"data-slot":`badge`,"data-variant":t,className:V(mx({variant:t}),e),...r})}function gx({assetBase:e=`/brand`,inverse:t=!1,label:n=`Foiling Team`,className:r=``}){return(0,U.jsxs)(`span`,{className:`sft-brand ${r}`,children:[(0,U.jsx)(`img`,{src:`${e}/logos/${t?`sft-white`:`sft-burgundy`}.svg`,alt:``,width:36,height:48}),(0,U.jsxs)(`span`,{children:[(0,U.jsx)(`strong`,{children:`SAPIENZA`}),(0,U.jsx)(`small`,{children:n})]})]})}function _x({loading:e=!1,children:t,disabled:n,...r}){return(0,U.jsxs)(Q,{...r,disabled:n||e,"aria-busy":e||void 0,children:[e&&(0,U.jsx)(Xe,{"aria-hidden":`true`,className:`animate-spin`}),t]})}function vx({eyebrow:e,title:t,description:n,actions:r,level:i=1}){return(0,U.jsxs)(`header`,{className:`flex flex-wrap items-end justify-between gap-6`,children:[(0,U.jsxs)(`div`,{children:[e&&(0,U.jsx)(`p`,{className:`sft-eyebrow mb-3 text-primary`,children:e}),(0,U.jsx)(i===1?`h1`:i===2?`h2`:`h3`,{className:`sft-display text-4xl md:text-5xl`,children:t}),n&&(0,U.jsx)(`p`,{className:`mt-3 max-w-prose text-muted-foreground`,children:n})]}),r]})}function yx({image:e,alt:t,title:n,description:r,eyebrow:i,children:a,level:o=1}){return(0,U.jsxs)(`section`,{className:`sft-hero`,children:[(0,U.jsx)(`img`,{src:e,alt:t,fetchPriority:`high`}),(0,U.jsxs)(`div`,{children:[i&&(0,U.jsx)(`p`,{className:`sft-eyebrow mb-5`,children:i}),(0,U.jsx)(o===1?`h1`:`h2`,{className:`sft-display`,children:n}),(0,U.jsx)(`p`,{children:r}),(0,U.jsx)(`div`,{className:`mt-7 flex flex-wrap gap-3`,children:a})]})]})}var bx=[{id:`scafo`,name:`Scafo e terrazze`,description:`Progettazione dello scafo e delle strutture.`,icon:it},{id:`management`,name:`Management e Comunicazione`,description:`Relazioni, organizzazione e racconto del progetto.`,icon:Ze},{id:`materiali`,name:`Materiali e Sostenibilità`,description:`Scelta dei materiali e valutazione del loro impatto.`,icon:Ye},{id:`manufacturing`,name:`Manufacturing e Cantiere`,description:`Costruzione, lavorazioni e assemblaggio.`,icon:ot},{id:`foil`,name:`Foil e Controllo di Volo`,description:`Foil, assetto e regolazione del volo.`,icon:at},{id:`elettronica`,name:`Elettronica e Software`,description:`Elettronica di bordo e strumenti software.`,icon:Ge},{id:`shore`,name:`Shore Team e Logistica`,description:`Preparazione, logistica e supporto a terra.`,icon:Ae}];function xx({department:e,href:t}){let n=e.icon;return(0,U.jsxs)(lx,{className:`h-full`,children:[(0,U.jsxs)(ux,{children:[(0,U.jsx)(n,{className:`mb-6 size-7 text-primary`,"aria-hidden":`true`}),(0,U.jsx)(dx,{className:`font-display text-2xl`,children:e.name})]}),(0,U.jsxs)(px,{children:[(0,U.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e.description}),t&&(0,U.jsx)(Q,{asChild:!0,variant:`link`,className:`mt-4 px-0`,children:(0,U.jsxs)(`a`,{href:t,children:[`Scopri il reparto`,(0,U.jsx)(Ne,{"aria-hidden":`true`})]})})]})]})}var Sx={neutral:`bg-muted text-muted-foreground`,success:`bg-success-soft text-success`,warning:`bg-warning-soft text-warning`,info:`bg-info-soft text-info`,danger:`bg-destructive/10 text-destructive`};function Cx({tone:e=`neutral`,children:t}){return(0,U.jsx)(hx,{className:V(`border-transparent`,Sx[e]),children:t})}function wx({label:e,value:t,unit:n,description:r}){return(0,U.jsx)(lx,{children:(0,U.jsxs)(px,{className:`pt-6`,children:[(0,U.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e}),(0,U.jsxs)(`p`,{className:`my-3 font-mono text-3xl font-medium tabular-nums`,children:[t,n&&(0,U.jsx)(`span`,{className:`ml-2 text-base text-muted-foreground`,children:n})]}),r&&(0,U.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:r})]})})}function Tx({title:e,description:t,action:n}){return(0,U.jsxs)(`div`,{className:`rounded-xl border border-dashed p-10 text-center`,children:[(0,U.jsx)(it,{className:`mx-auto mb-4 size-7 text-primary`,"aria-hidden":`true`}),(0,U.jsx)(`h3`,{className:`font-display text-2xl font-bold`,children:e}),(0,U.jsx)(`p`,{className:`mx-auto mt-2 max-w-sm text-sm text-muted-foreground`,children:t}),n&&(0,U.jsx)(`div`,{className:`mt-5`,children:n})]})}function Ex({sponsors:e}){return(0,U.jsx)(`ul`,{className:`sft-sponsor-grid`,children:e.map(e=>(0,U.jsx)(`li`,{children:e.href?(0,U.jsx)(`a`,{href:e.href,"aria-label":e.name,children:(0,U.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})}):(0,U.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})},e.name))})}function Dx({kind:e,title:t,description:n,image:r,alt:i,href:a,meta:o}){return(0,U.jsxs)(lx,{className:`overflow-hidden p-0`,children:[(0,U.jsx)(`img`,{src:r,alt:i,className:`aspect-[16/10] w-full object-cover`,loading:`lazy`}),(0,U.jsxs)(ux,{children:[(0,U.jsxs)(`p`,{className:`sft-eyebrow text-primary`,children:[e,o&&` · ${o}`]}),(0,U.jsx)(dx,{className:`font-display text-2xl`,children:(0,U.jsx)(`a`,{className:`hover:underline underline-offset-4`,href:a,children:t})})]}),(0,U.jsx)(px,{className:`pb-6 text-sm text-muted-foreground`,children:n})]})}function Ox({title:e,time:t,description:n}){return(0,U.jsxs)(`li`,{className:`flex gap-4 border-b py-4`,children:[(0,U.jsx)(`span`,{className:`mt-2 size-2 shrink-0 rounded-full bg-primary`,"aria-hidden":`true`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`font-medium`,children:e}),n&&(0,U.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:n}),(0,U.jsx)(`time`,{dateTime:t.iso,className:`mt-2 block text-xs text-muted-foreground`,children:t.label})]})]})}function kx({kind:e=`update`,title:t,description:n,image:r,assetBase:i=`./brand`,footer:a=`Sapienza Foiling Team`,format:o=`post`}){return(0,U.jsxs)(`article`,{className:V(`sft-template`,e===`technical`&&`technical`,o),children:[(0,U.jsx)(`img`,{src:r,alt:``}),(0,U.jsx)(gx,{inverse:!0,assetBase:i}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow mb-3`,children:{update:`Dal progetto all’acqua`,recruiting:`Dentro il team`,technical:`Come funziona`,event:`Eventi e regate`,sponsor:`Insieme al team`}[e]}),(0,U.jsx)(`h3`,{children:t}),(0,U.jsx)(`p`,{children:n})]}),(0,U.jsxs)(`footer`,{children:[(0,U.jsx)(`span`,{children:a}),(0,U.jsx)(`span`,{children:`SFT`})]})]})}var Ax={updated:`2026-10-22`,it:{short:`Sapienza Foiling Team è il team universitario di Sapienza Università di Roma dedicato alla progettazione e costruzione di imbarcazioni foiling, con attenzione alla sostenibilità.`,extended:`Sapienza Foiling Team riunisce studenti di Sapienza Università di Roma intorno a un progetto concreto: progettare, costruire e portare in acqua un’imbarcazione foiling. Il lavoro unisce progettazione, ricerca sui materiali, costruzione, messa a punto e analisi dei dati. La sostenibilità orienta la scelta dei materiali e dei processi; la comunicazione racconta il percorso dalla progettazione ai test in acqua.`},en:{short:`Sapienza Foiling Team is the student team at Sapienza University of Rome dedicated to designing and building foiling boats, with a focus on sustainability.`,extended:`Sapienza Foiling Team brings together students from Sapienza University of Rome around a hands-on project: designing, building and sailing a foiling boat. The team combines design, materials research, manufacturing, boat tuning and data analysis. Sustainability guides the choice of materials and processes, while communication documents the journey from design to testing on the water.`},contact:{email:`sapienzafoilingteam@gmail.com`,website:`https://www.sapienzafoilingteam.com`,instagram:`https://instagram.com/sapienzafoilingteam`,linkedin:`https://linkedin.com/company/sapienzafoilingteam`},photos:[{file:`boat-flight.jpg`,title:`In volo sull’acqua`,caption:`Il Moth del Sapienza Foiling Team in navigazione sui foil.`},{file:`team.jpg`,title:`La squadra`,caption:`I membri del Sapienza Foiling Team accanto all’imbarcazione.`},{file:`workshop.jpg`,title:`Il lavoro a terra`,caption:`Il lavoro del Sapienza Foiling Team nel paddock.`},{file:`boat-aerial.jpg`,title:`La barca dall’alto`,caption:`Una vista dall’alto dell’imbarcazione del Sapienza Foiling Team.`}],usage:`I materiali provengono dall’archivio del team. Per pubblicazioni e crediti fotografici contattare sapienzafoilingteam@gmail.com: l’autore e i diritti di ogni scatto non sono indicati nell’archivio. Non attribuire gli scatti a un fotografo non verificato. Non deformare, ricolorare o separare gli elementi del marchio. Usare la variante bianca su fondi scuri e la variante bordeaux o ink su fondi chiari. I font non sono inclusi nel pacchetto.`},jx=[{id:`burgundy`,name:`Bordeaux`,background:`light`},{id:`white`,name:`Bianco`,background:`dark`},{id:`ink`,name:`Ink`,background:`light`},{id:`original`,name:`Originale`,background:`light`}];function Mx(){(0,v.useEffect)(()=>{window.location.hash===`#media-kit`&&document.getElementById(`media-kit`)?.scrollIntoView()},[]);let[e,t]=(0,v.useState)(`it`);async function n(e){try{await navigator.clipboard.writeText(e),Tt.success(`Testo copiato`)}catch{Tt.error(`Copia non disponibile. Seleziona il testo oppure scarica la presentazione.`)}}return(0,U.jsxs)(`section`,{id:`media-kit`,className:`catalog-section media-kit`,"aria-labelledby":`media-kit-title`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:`Per stampa, partner e comunicazione`}),(0,U.jsx)(`h2`,{id:`media-kit-title`,className:`sft-display`,children:`Media kit`}),(0,U.jsx)(`p`,{children:`Il team, in parole e immagini. Presentazioni, marchi e fotografie raccolti in un unico posto.`})]}),(0,U.jsxs)(`div`,{className:`media-kit-cover`,children:[(0,U.jsxs)(`div`,{className:`media-kit-cover-copy`,children:[(0,U.jsx)(gx,{inverse:!0,assetBase:`./brand`,label:`Media kit`}),(0,U.jsxs)(`h3`,{className:`sft-display`,children:[`Dall’idea.`,(0,U.jsx)(`br`,{}),`All’acqua.`,(0,U.jsx)(`br`,{}),`Al volo.`]}),(0,U.jsx)(`p`,{children:`I materiali per raccontare Sapienza Foiling Team.`}),(0,U.jsx)(Q,{variant:`secondary`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./media-kit/SFT-media-kit.zip`,download:!0,children:[`Scarica il media kit ZIP`,(0,U.jsx)(Ke,{"aria-hidden":`true`})]})}),(0,U.jsx)(`span`,{children:`Loghi SVG e PNG · 4 fotografie · testi IT / EN`})]}),(0,U.jsxs)(`figure`,{children:[(0,U.jsx)(`img`,{src:`./brand/photos/boat-flight.jpg`,alt:`Il Moth del Sapienza Foiling Team in volo sui foil`,loading:`lazy`}),(0,U.jsx)(`figcaption`,{children:`Progettazione, costruzione e test in acqua.`})]})]}),(0,U.jsxs)(`div`,{className:`media-kit-heading`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:`Il progetto`}),(0,U.jsx)(`h3`,{className:`sft-display`,children:`Le parole per presentarci.`})]}),(0,U.jsx)(`div`,{className:`flex gap-2`,role:`group`,"aria-label":`Lingua della presentazione`,children:[`it`,`en`].map(n=>(0,U.jsx)(Q,{variant:e===n?`default`:`outline`,"aria-pressed":e===n,onClick:()=>t(n),children:n===`it`?`Italiano`:`English`},n))})]}),(0,U.jsx)(`div`,{className:`catalog-grid`,children:[`short`,`extended`].map(t=>(0,U.jsxs)(`article`,{className:`sample`,children:[(0,U.jsxs)(`header`,{className:`sample-header`,children:[(0,U.jsx)(`h4`,{children:t===`short`?`Presentazione breve`:`Presentazione estesa`}),(0,U.jsxs)(Q,{variant:`ghost`,size:`sm`,"aria-label":`Copia la presentazione ${t===`short`?`breve`:`estesa`}`,onClick:()=>n(Ax[e][t]),children:[(0,U.jsx)(We,{"aria-hidden":`true`}),`Copia`]})]}),(0,U.jsx)(`div`,{className:`sample-body`,children:(0,U.jsx)(`p`,{lang:e,className:`media-kit-bio`,children:Ax[e][t]})})]},t))}),(0,U.jsxs)(`div`,{className:`media-kit-text-download`,children:[(0,U.jsx)(Q,{variant:`outline`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./media-kit/presentazione.txt`,download:!0,children:[`Scarica i testi IT / EN`,(0,U.jsx)(Ke,{"aria-hidden":`true`})]})}),(0,U.jsx)(`p`,{children:`Testi editoriali · aggiornamento 22 ottobre 2026`})]}),(0,U.jsxs)(`div`,{className:`media-kit-heading`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:`Identità visiva`}),(0,U.jsx)(`h3`,{className:`sft-display`,children:`Il nostro marchio.`})]}),(0,U.jsxs)(`a`,{href:`#fondazioni`,className:`media-kit-link`,children:[`Colori e tipografia`,(0,U.jsx)(Ne,{size:16})]})]}),(0,U.jsx)(`div`,{className:`media-kit-logos`,children:jx.map(e=>(0,U.jsxs)(`article`,{className:`sample`,children:[(0,U.jsx)(`div`,{className:`media-kit-logo media-kit-logo-${e.background}`,children:(0,U.jsx)(`img`,{src:`./brand/logos/sft-${e.id}.svg`,alt:`Sapienza Foiling Team · logo ${e.name.toLowerCase()}`,loading:`lazy`})}),(0,U.jsxs)(`div`,{className:`media-kit-asset-footer`,children:[(0,U.jsx)(`h4`,{children:e.name}),(0,U.jsx)(`div`,{className:`flex gap-2`,children:[`svg`,`png`].map(t=>(0,U.jsx)(Q,{variant:`outline`,size:`sm`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./brand/${t===`svg`?`logos`:`exports`}/sft-${e.id}.${t}`,download:!0,"aria-label":`Scarica logo ${e.name} ${t.toUpperCase()}`,children:[t.toUpperCase(),(0,U.jsx)(Ke,{"aria-hidden":`true`})]})},t))})]})]},e.id))}),(0,U.jsx)(`p`,{className:`catalog-note mt-6`,children:`Mantieni proporzioni e colori originali. Usa il marchio bianco su fondi scuri, bordeaux o ink su fondi chiari. Lascia spazio intorno al logo e scegli un fondo che ne mantenga la leggibilità.`}),(0,U.jsxs)(`div`,{className:`media-kit-heading`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:`Archivio fotografico`}),(0,U.jsx)(`h3`,{className:`sft-display`,children:`Il progetto, dal vivo.`})]}),(0,U.jsx)(`p`,{children:`Fotografie dalla raccolta del team`})]}),(0,U.jsx)(`div`,{className:`catalog-grid`,children:Ax.photos.map(e=>(0,U.jsxs)(`article`,{className:`sample`,children:[(0,U.jsx)(`a`,{href:`./brand/photos/${e.file}`,download:!0,className:`media-kit-photo-link`,"aria-label":`Scarica foto: ${e.title}`,children:(0,U.jsx)(`img`,{src:`./brand/photos/${e.file}`,alt:e.caption,loading:`lazy`})}),(0,U.jsxs)(`div`,{className:`media-kit-photo-info`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h4`,{children:e.title}),(0,U.jsx)(`p`,{children:e.caption})]}),(0,U.jsx)(Q,{variant:`outline`,size:`sm`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./brand/photos/${e.file}`,download:!0,"aria-label":`Scarica JPG: ${e.title}`,children:[`JPG`,(0,U.jsx)(Ke,{"aria-hidden":`true`})]})})]})]},e.file))}),(0,U.jsxs)(`div`,{className:`catalog-note mt-6`,children:[(0,U.jsx)(`strong`,{children:`Utilizzo e crediti`}),(0,U.jsx)(`p`,{className:`mt-2`,children:Ax.usage})]}),(0,U.jsxs)(`div`,{className:`media-kit-contact`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:`Parliamone`}),(0,U.jsx)(`h3`,{className:`sft-display`,children:`Stampa e collaborazioni.`}),(0,U.jsx)(`p`,{children:`Per interviste, crediti fotografici e materiali aggiuntivi, scrivi al team.`})]}),(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(Q,{asChild:!0,children:(0,U.jsxs)(`a`,{href:`mailto:${Ax.contact.email}`,children:[Ax.contact.email,(0,U.jsx)(Ne,{"aria-hidden":`true`})]})}),(0,U.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:[[`Sito`,Ax.contact.website],[`Instagram`,Ax.contact.instagram],[`LinkedIn`,Ax.contact.linkedin]].map(([e,t])=>(0,U.jsxs)(`a`,{className:`media-kit-link`,href:t,target:`_blank`,rel:`noreferrer`,children:[e,(0,U.jsx)(Ne,{size:16})]},e))})]})]})]})}function Nx({className:e,type:t,...n}){return(0,U.jsx)(`input`,{type:t,"data-slot":`input`,className:V(`h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30`,`focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`,`aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40`,e),...n})}function Px({...e}){return(0,U.jsx)(uc,{"data-slot":`dialog`,...e})}function Fx({...e}){return(0,U.jsx)(fc,{"data-slot":`dialog-trigger`,...e})}function Ix({...e}){return(0,U.jsx)(gc,{"data-slot":`dialog-portal`,...e})}function Lx({...e}){return(0,U.jsx)(kc,{"data-slot":`dialog-close`,...e})}function Rx({className:e,...t}){return(0,U.jsx)(vc,{"data-slot":`dialog-overlay`,className:V(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,e),...t})}function zx({className:e,children:t,showCloseButton:n=!0,...r}){return(0,U.jsxs)(Ix,{"data-slot":`dialog-portal`,children:[(0,U.jsx)(Rx,{}),(0,U.jsxs)(Sc,{"data-slot":`dialog-content`,className:V(`fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg`,e),...r,children:[t,n&&(0,U.jsxs)(kc,{"data-slot":`dialog-close`,className:`absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,children:[(0,U.jsx)(st,{}),(0,U.jsx)(`span`,{className:`sr-only`,children:`Chiudi`})]})]})]})}function Bx({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`dialog-header`,className:V(`flex flex-col gap-2 text-center sm:text-left`,e),...t})}function Vx({className:e,showCloseButton:t=!1,children:n,...r}){return(0,U.jsxs)(`div`,{"data-slot":`dialog-footer`,className:V(`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,e),...r,children:[n,t&&(0,U.jsx)(kc,{asChild:!0,children:(0,U.jsx)(Q,{variant:`outline`,children:`Chiudi`})})]})}function Hx({className:e,...t}){return(0,U.jsx)(Ec,{"data-slot":`dialog-title`,className:V(`text-lg leading-none font-semibold`,e),...t})}function Ux({className:e,...t}){return(0,U.jsx)(Dc,{"data-slot":`dialog-description`,className:V(`text-sm text-muted-foreground`,e),...t})}var Wx=[[`update`,`Aggiornamento progetto`],[`recruiting`,`Reparti e recruiting`],[`technical`,`Spiegazione tecnica`],[`event`,`Evento e trasferta`],[`sponsor`,`Partner e sponsor`],[`carousel-body`,`Slide interna carosello`],[`story`,`Story`],[`presentation`,`Presentazione 16:9`],[`presentation-content`,`Slide contenuti`]];function Gx(){let[e,t]=(0,v.useState)(null),[n,r]=(0,v.useState)(``),[i,a]=(0,v.useState)([]),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(!1);(0,v.useEffect)(()=>{if(r(``),a([]),l(``),!e)return;let t=new AbortController;return fetch(`./templates/${e}.svg`,{signal:t.signal}).then(e=>{if(!e.ok)throw Error();return e.text()}).then(e=>{a(Array.from(new DOMParser().parseFromString(e,`image/svg+xml`).querySelectorAll(`text`)).map(e=>e.textContent||``)),r(e)}).catch(e=>{e.name!==`AbortError`&&l(`Impossibile caricare il template. Chiudi e riprova.`)}),()=>t.abort()},[e]),(0,v.useEffect)(()=>{if(!n){s(``);return}let e=new DOMParser().parseFromString(n,`image/svg+xml`);e.querySelectorAll(`text`).forEach((e,t)=>{e.textContent=i[t]??``});let t=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(e)],{type:`image/svg+xml`}));return s(t),()=>URL.revokeObjectURL(t)},[n,i]);let f=(t,n)=>{let r=document.createElement(`a`);r.href=t,r.download=`sft-${e}-personalizzato.${n}`,r.click()};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:`catalog-template-grid mt-10`,children:Wx.map(([e,n])=>(0,U.jsxs)(`article`,{className:`sample`,children:[(0,U.jsx)(`img`,{src:`./templates/${e}.svg`,alt:`Template ${n}`,loading:`lazy`}),(0,U.jsxs)(`div`,{className:`p-5 grid gap-3`,children:[(0,U.jsx)(`h3`,{className:`font-semibold`,children:n}),(0,U.jsx)(Q,{onClick:()=>t(e),children:`Crea template`}),(0,U.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,U.jsx)(`a`,{href:`./templates/${e}.svg`,download:!0,children:`Scarica originale SVG`})})]})]},e))}),(0,U.jsx)(Px,{open:!!e,onOpenChange:e=>{e||t(null)},children:(0,U.jsxs)(zx,{className:`max-w-5xl max-h-[90vh] overflow-y-auto`,children:[(0,U.jsxs)(Bx,{children:[(0,U.jsxs)(Hx,{children:[`Crea template · `,Wx.find(([t])=>t===e)?.[1]]}),(0,U.jsx)(Ux,{children:`Personalizza i testi e scarica il risultato. Ogni campo corrisponde a una riga: verifica che i testi rimangano dentro la griglia nell’anteprima.`})]}),c&&(0,U.jsx)(`p`,{role:`alert`,children:c}),!n&&!c&&(0,U.jsx)(`p`,{role:`status`,children:`Caricamento template…`}),n&&(0,U.jsxs)(`div`,{className:`catalog-grid`,children:[(0,U.jsxs)(`div`,{className:`grid gap-3 self-start`,children:[i.map((e,t)=>(0,U.jsxs)(`label`,{className:`grid gap-1 text-sm`,htmlFor:`creator-text-${t}`,children:[`Riga `,t+1,(0,U.jsx)(Nx,{id:`creator-text-${t}`,value:e,onChange:e=>a(n=>n.map((n,r)=>r===t?e.target.value:n))})]},t)),(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,U.jsx)(Q,{disabled:!o,onClick:()=>f(o,`svg`),children:`Scarica SVG`}),(0,U.jsx)(Q,{variant:`outline`,disabled:!o||u,onClick:async()=>{d(!0),l(``);try{let e=new Image;e.src=o,await e.decode();let t=document.createElement(`canvas`);t.width=e.naturalWidth,t.height=e.naturalHeight;let n=t.getContext(`2d`);if(!n)throw Error();n.drawImage(e,0,0);let r=await new Promise((e,n)=>t.toBlob(t=>t?e(t):n(Error()),`image/png`)),i=URL.createObjectURL(r);f(i,`png`),setTimeout(()=>URL.revokeObjectURL(i),1e3)}catch{l(`Esportazione PNG non riuscita. Puoi scaricare il file SVG.`)}finally{d(!1)}},children:u?`Esportazione…`:`Scarica PNG`})]})]}),o&&(0,U.jsx)(`img`,{src:o,alt:`Anteprima del template personalizzato`,className:`w-full self-start`})]})]})})]})}function Kx({className:e,...t}){return(0,U.jsx)(`textarea`,{"data-slot":`textarea`,className:V(`flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40`,e),...t})}function qx({className:e,...t}){return(0,U.jsx)(sm,{"data-slot":`label`,className:V(`flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`,e),...t})}function Jx({className:e,...t}){return(0,U.jsx)(El,{"data-slot":`checkbox`,className:V(`peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary`,e),...t,children:(0,U.jsx)(Ol,{"data-slot":`checkbox-indicator`,className:`grid place-content-center text-current transition-none`,children:(0,U.jsx)(Ie,{className:`size-3.5`})})})}function Yx({className:e,size:t=`default`,...n}){return(0,U.jsx)(Fy,{"data-slot":`switch`,"data-size":t,className:V(`peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80`,e),...n,children:(0,U.jsx)(Ly,{"data-slot":`switch-thumb`,className:V(`pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground`)})})}function Xx({className:e,...t}){return(0,U.jsx)(yg,{"data-slot":`radio-group`,className:V(`grid gap-3`,e),...t})}function Zx({className:e,...t}){return(0,U.jsx)(wg,{"data-slot":`radio-group-item`,className:V(`aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40`,e),...t,children:(0,U.jsx)(Eg,{"data-slot":`radio-group-indicator`,className:`relative flex items-center justify-center`,children:(0,U.jsx)(Ue,{className:`absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary`})})})}function Qx({...e}){return(0,U.jsx)(F_,{"data-slot":`select`,...e})}function $x({...e}){return(0,U.jsx)(z_,{"data-slot":`select-value`,...e})}function eS({className:e,size:t=`default`,children:n,...r}){return(0,U.jsxs)(L_,{"data-slot":`select-trigger`,"data-size":t,className:V(`flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,e),...r,children:[n,(0,U.jsx)(B_,{asChild:!0,children:(0,U.jsx)(Le,{className:`size-4 opacity-50`})})]})}function tS({className:e,children:t,position:n=`item-aligned`,align:r=`center`,...i}){return(0,U.jsx)(U_,{children:(0,U.jsxs)(G_,{"data-slot":`select-content`,className:V(`relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,n===`popper`&&`data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,e),position:n,align:r,...i,children:[(0,U.jsx)(rS,{}),(0,U.jsx)(rv,{className:V(`p-1`,n===`popper`&&`h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1`),children:t}),(0,U.jsx)(iS,{})]})})}function nS({className:e,children:t,...n}){return(0,U.jsxs)(lv,{"data-slot":`select-item`,className:V(`relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,e),...n,children:[(0,U.jsx)(`span`,{"data-slot":`select-item-indicator`,className:`absolute right-2 flex size-3.5 items-center justify-center`,children:(0,U.jsx)(pv,{children:(0,U.jsx)(Ie,{className:`size-4`})})}),(0,U.jsx)(dv,{children:t})]})}function rS({className:e,...t}){return(0,U.jsx)(hv,{"data-slot":`select-scroll-up-button`,className:V(`flex cursor-default items-center justify-center py-1`,e),...t,children:(0,U.jsx)(Be,{className:`size-4`})})}function iS({className:e,...t}){return(0,U.jsx)(_v,{"data-slot":`select-scroll-down-button`,className:V(`flex cursor-default items-center justify-center py-1`,e),...t,children:(0,U.jsx)(Le,{className:`size-4`})})}function aS({...e}){return(0,U.jsx)(Lc,{"data-slot":`alert-dialog`,...e})}function oS({...e}){return(0,U.jsx)(Rc,{"data-slot":`alert-dialog-trigger`,...e})}function sS({...e}){return(0,U.jsx)(zc,{"data-slot":`alert-dialog-portal`,...e})}function cS({className:e,...t}){return(0,U.jsx)(Bc,{"data-slot":`alert-dialog-overlay`,className:V(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,e),...t})}function lS({className:e,size:t=`default`,...n}){return(0,U.jsxs)(sS,{children:[(0,U.jsx)(cS,{}),(0,U.jsx)(Uc,{"data-slot":`alert-dialog-content`,"data-size":t,className:V(`group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg`,e),...n})]})}function uS({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`alert-dialog-header`,className:V(`grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]`,e),...t})}function dS({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`alert-dialog-footer`,className:V(`flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end`,e),...t})}function fS({className:e,...t}){return(0,U.jsx)(Wc,{"data-slot":`alert-dialog-title`,className:V(`text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2`,e),...t})}function pS({className:e,...t}){return(0,U.jsx)(Gc,{"data-slot":`alert-dialog-description`,className:V(`text-sm text-muted-foreground`,e),...t})}function mS({className:e,variant:t=`default`,size:n=`default`,...r}){return(0,U.jsx)(Q,{variant:t,size:n,asChild:!0,children:(0,U.jsx)(Kc,{"data-slot":`alert-dialog-action`,className:V(e),...r})})}function hS({className:e,variant:t=`outline`,size:n=`default`,...r}){return(0,U.jsx)(Q,{variant:t,size:n,asChild:!0,children:(0,U.jsx)(Jc,{"data-slot":`alert-dialog-cancel`,className:V(e),...r})})}function gS({...e}){return(0,U.jsx)(uc,{"data-slot":`sheet`,...e})}function _S({...e}){return(0,U.jsx)(fc,{"data-slot":`sheet-trigger`,...e})}function vS({...e}){return(0,U.jsx)(gc,{"data-slot":`sheet-portal`,...e})}function yS({className:e,...t}){return(0,U.jsx)(vc,{"data-slot":`sheet-overlay`,className:V(`fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0`,e),...t})}function bS({className:e,children:t,side:n=`right`,showCloseButton:r=!0,...i}){return(0,U.jsxs)(vS,{children:[(0,U.jsx)(yS,{}),(0,U.jsxs)(Sc,{"data-slot":`sheet-content`,className:V(`fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500`,n===`right`&&`inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,n===`left`&&`inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,n===`top`&&`inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`,n===`bottom`&&`inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,e),...i,children:[t,r&&(0,U.jsxs)(kc,{className:`absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary`,children:[(0,U.jsx)(st,{className:`size-4`}),(0,U.jsx)(`span`,{className:`sr-only`,children:`Chiudi`})]})]})]})}function xS({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`sheet-header`,className:V(`flex flex-col gap-1.5 p-4`,e),...t})}function SS({className:e,...t}){return(0,U.jsx)(Ec,{"data-slot":`sheet-title`,className:V(`font-semibold text-foreground`,e),...t})}function CS({className:e,...t}){return(0,U.jsx)(Dc,{"data-slot":`sheet-description`,className:V(`text-sm text-muted-foreground`,e),...t})}function wS({className:e,orientation:t=`horizontal`,...n}){return(0,U.jsx)(Zy,{"data-slot":`tabs`,"data-orientation":t,orientation:t,className:V(`group/tabs flex gap-2 data-[orientation=horizontal]:flex-col`,e),...n})}var TS=Gt(`group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none`,{variants:{variant:{default:`bg-muted`,line:`gap-1 bg-transparent`}},defaultVariants:{variant:`default`}});function ES({className:e,variant:t=`default`,...n}){return(0,U.jsx)($y,{"data-slot":`tabs-list`,"data-variant":t,className:V(TS({variant:t}),e),...n})}function DS({className:e,...t}){return(0,U.jsx)(tb,{"data-slot":`tabs-trigger`,className:V(`relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,`group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent`,`data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground`,`after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100`,e),...t})}function OS({className:e,...t}){return(0,U.jsx)(rb,{"data-slot":`tabs-content`,className:V(`flex-1 outline-none`,e),...t})}function kS({...e}){return(0,U.jsx)(Ta,{"data-slot":`accordion`,...e})}function AS({className:e,...t}){return(0,U.jsx)(Ra,{"data-slot":`accordion-item`,className:V(`border-b last:border-b-0`,e),...t})}function jS({className:e,children:t,...n}){return(0,U.jsx)(Ba,{className:`flex`,children:(0,U.jsxs)(Ha,{"data-slot":`accordion-trigger`,className:V(`flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180`,e),...n,children:[t,(0,U.jsx)(Le,{className:`pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200`})]})})}function MS({className:e,children:t,...n}){return(0,U.jsx)(Wa,{"data-slot":`accordion-content`,className:`overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,...n,children:(0,U.jsx)(`div`,{className:V(`pt-0 pb-4`,e),children:t})})}function NS({delayDuration:e=0,...t}){return(0,U.jsx)(Rb,{"data-slot":`tooltip-provider`,delayDuration:e,...t})}function PS({...e}){return(0,U.jsx)(Hb,{"data-slot":`tooltip`,...e})}function FS({...e}){return(0,U.jsx)(Wb,{"data-slot":`tooltip-trigger`,...e})}function IS({className:e,sideOffset:t=0,children:n,...r}){return(0,U.jsx)(Jb,{children:(0,U.jsxs)(Xb,{"data-slot":`tooltip-content`,sideOffset:t,className:V(`z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95`,e),...r,children:[n,(0,U.jsx)(ex,{className:`z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground`})]})})}function LS({...e}){return(0,U.jsx)(Zp,{"data-slot":`dropdown-menu`,...e})}function RS({...e}){return(0,U.jsx)($p,{"data-slot":`dropdown-menu-trigger`,...e})}function zS({className:e,sideOffset:t=4,...n}){return(0,U.jsx)(em,{children:(0,U.jsx)(nm,{"data-slot":`dropdown-menu-content`,sideOffset:t,className:V(`z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,e),...n})})}function BS({className:e,inset:t,variant:n=`default`,...r}){return(0,U.jsx)(im,{"data-slot":`dropdown-menu-item`,"data-inset":t,"data-variant":n,className:V(`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!`,e),...r})}function VS({className:e,inset:t,...n}){return(0,U.jsx)(rm,{"data-slot":`dropdown-menu-label`,"data-inset":t,className:V(`px-2 py-1.5 text-sm font-medium data-[inset]:pl-8`,e),...n})}function HS({className:e,...t}){return(0,U.jsx)(am,{"data-slot":`dropdown-menu-separator`,className:V(`-mx-1 my-1 h-px bg-border`,e),...t})}function US({className:e,orientation:t=`horizontal`,decorative:n=!0,...r}){return(0,U.jsx)(jv,{"data-slot":`separator`,decorative:n,orientation:t,className:V(`shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,e),...r})}function WS({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`skeleton`,className:V(`animate-pulse rounded-md bg-accent`,e),...t})}function GS({className:e,size:t=`default`,...n}){return(0,U.jsx)(ol,{"data-slot":`avatar`,"data-size":t,className:V(`group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6`,e),...n})}function KS({className:e,...t}){return(0,U.jsx)(cl,{"data-slot":`avatar-fallback`,className:V(`flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs`,e),...t})}function qS({className:e,value:t,...n}){return(0,U.jsx)(zh,{"data-slot":`progress`,className:V(`relative h-2 w-full overflow-hidden rounded-full bg-primary/20`,e),...n,children:(0,U.jsx)(Vh,{"data-slot":`progress-indicator`,className:`h-full w-full flex-1 bg-primary transition-all`,style:{transform:`translateX(-${100-(t||0)}%)`}})})}function JS({className:e,defaultValue:t,value:n,min:r=0,max:i=100,...a}){let o=v.useMemo(()=>Array.isArray(n)?n:Array.isArray(t)?t:[r,i],[n,t,r,i]);return(0,U.jsxs)(Jv,{"data-slot":`slider`,defaultValue:t,value:n,min:r,max:i,className:V(`relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col`,e),...a,children:[(0,U.jsx)(ty,{"data-slot":`slider-track`,className:V(`relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5`),children:(0,U.jsx)(ry,{"data-slot":`slider-range`,className:V(`absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full`)})}),Array.from({length:o.length},(e,t)=>(0,U.jsx)(uy,{"data-slot":`slider-thumb`,className:`block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`},t))]})}function YS({className:e,children:t,...n}){return(0,U.jsxs)(Lg,{"data-slot":`scroll-area`,className:V(`relative`,e),...n,children:[(0,U.jsx)(Bg,{"data-slot":`scroll-area-viewport`,className:`size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1`,children:t}),(0,U.jsx)(XS,{}),(0,U.jsx)(a_,{})]})}function XS({className:e,orientation:t=`vertical`,...n}){return(0,U.jsx)(Gg,{"data-slot":`scroll-area-scrollbar`,orientation:t,className:V(`flex touch-none p-px transition-colors select-none`,t===`vertical`&&`h-full w-2.5 border-l border-l-transparent`,t===`horizontal`&&`h-2.5 flex-col border-t border-t-transparent`,e),...n,children:(0,U.jsx)(n_,{"data-slot":`scroll-area-thumb`,className:`relative flex-1 rounded-full bg-border`})})}function ZS({...e}){return(0,U.jsx)(`nav`,{"aria-label":`breadcrumb`,"data-slot":`breadcrumb`,...e})}function QS({className:e,...t}){return(0,U.jsx)(`ol`,{"data-slot":`breadcrumb-list`,className:V(`flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5`,e),...t})}function $S({className:e,...t}){return(0,U.jsx)(`li`,{"data-slot":`breadcrumb-item`,className:V(`inline-flex items-center gap-1.5`,e),...t})}function eC({asChild:e,className:t,...n}){let r=e?Tr:`a`;return(0,U.jsx)(r,{"data-slot":`breadcrumb-link`,className:V(`transition-colors hover:text-foreground`,t),...n})}function tC({className:e,...t}){return(0,U.jsx)(`span`,{"data-slot":`breadcrumb-page`,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:V(`font-normal text-foreground`,e),...t})}function nC({children:e,className:t,...n}){return(0,U.jsx)(`li`,{"data-slot":`breadcrumb-separator`,role:`presentation`,"aria-hidden":`true`,className:V(`[&>svg]:size-3.5`,t),...n,children:e??(0,U.jsx)(ze,{})})}var rC=(e,t,n,r,i,a,o,s)=>{let c=document.documentElement,l=[`light`,`dark`];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n=e===`class`,r=n&&a?i.map(e=>a[e]||e):i;n?(c.classList.remove(...r),c.classList.add(a&&a[t]?a[t]:t)):c.setAttribute(e,t)}),d(t)}function d(e){s&&l.includes(e)&&(c.style.colorScheme=e)}function f(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}if(r)u(r);else try{let e=localStorage.getItem(t)||n;u(o&&e===`system`?f():e)}catch{}},iC=v.createContext(void 0),aC={setTheme:e=>{},themes:[]},oC=()=>v.useContext(iC)??aC;v.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:o,themes:s,nonce:c,scriptProps:l})=>{let u=JSON.stringify([n,t,a,e,s,o,r,i]).slice(1,-1);return v.createElement(`script`,{...l,suppressHydrationWarning:!0,nonce:typeof window>`u`?c:``,dangerouslySetInnerHTML:{__html:`(${rC.toString()})(${u})`}})});var sC=({...e})=>{let{theme:t=`system`}=oC();return(0,U.jsx)(Bt,{theme:t,className:`toaster group`,icons:{success:(0,U.jsx)(He,{className:`size-4`}),info:(0,U.jsx)(Je,{className:`size-4`}),warning:(0,U.jsx)(rt,{className:`size-4`}),error:(0,U.jsx)($e,{className:`size-4`}),loading:(0,U.jsx)(Xe,{className:`size-4 animate-spin`})},style:{"--normal-bg":`var(--popover)`,"--normal-text":`var(--popover-foreground)`,"--normal-border":`var(--border)`,"--border-radius":`var(--radius)`},...e})},cC=Gt(`inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-transparent`,outline:`border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground`},size:{default:`h-9 min-w-9 px-2`,sm:`h-8 min-w-8 px-1.5`,lg:`h-10 min-w-10 px-2.5`}},defaultVariants:{variant:`default`,size:`default`}});function lC({className:e,variant:t,size:n,...r}){return(0,U.jsx)(lb,{"data-slot":`toggle`,className:V(cC({variant:t,size:n,className:e})),...r})}var uC=v.createContext({size:`default`,variant:`default`,spacing:0});function dC({className:e,variant:t,size:n,spacing:r=0,children:i,...a}){return(0,U.jsx)(_b,{"data-slot":`toggle-group`,"data-variant":t,"data-size":n,"data-spacing":r,style:{"--gap":r},className:V(`group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs`,e),...a,children:(0,U.jsx)(uC.Provider,{value:{variant:t,size:n,spacing:r},children:i})})}function fC({className:e,children:t,variant:n,size:r,...i}){let a=v.useContext(uC);return(0,U.jsx)(Eb,{"data-slot":`toggle-group-item`,"data-variant":a.variant||n,"data-size":a.size||r,"data-spacing":a.spacing,className:V(cC({variant:a.variant||n,size:a.size||r}),`w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10`,`data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l`,e),...i,children:t})}var pC=Gt(`relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current`,{variants:{variant:{default:`bg-card text-card-foreground`,destructive:`bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current`}},defaultVariants:{variant:`default`}});function mC({className:e,variant:t,...n}){return(0,U.jsx)(`div`,{"data-slot":`alert`,role:`alert`,className:V(pC({variant:t}),e),...n})}function hC({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`alert-title`,className:V(`col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight`,e),...t})}function gC({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`alert-description`,className:V(`col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed`,e),...t})}function _C({className:e,children:t,viewport:n=!0,...r}){return(0,U.jsxs)(km,{"data-slot":`navigation-menu`,"data-viewport":n,className:V(`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center`,e),...r,children:[t,n&&(0,U.jsx)(bC,{})]})}function vC({className:e,...t}){return(0,U.jsx)(Mm,{"data-slot":`navigation-menu-list`,className:V(`group flex flex-1 list-none items-center justify-center gap-1`,e),...t})}function yC({className:e,...t}){return(0,U.jsx)(Fm,{"data-slot":`navigation-menu-item`,className:V(`relative`,e),...t})}function bC({className:e,...t}){return(0,U.jsx)(`div`,{className:V(`absolute top-full left-0 isolate z-50 flex justify-center`),children:(0,U.jsx)(Um,{"data-slot":`navigation-menu-viewport`,className:V(`origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]`,e),...t})})}function xC({className:e,...t}){return(0,U.jsx)(Lm,{"data-slot":`navigation-menu-link`,className:V(`flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,e),...t})}function SC({className:e,...t}){return(0,U.jsx)(`nav`,{role:`navigation`,"aria-label":`pagination`,"data-slot":`pagination`,className:V(`mx-auto flex w-full justify-center`,e),...t})}function CC({className:e,...t}){return(0,U.jsx)(`ul`,{"data-slot":`pagination-content`,className:V(`flex flex-row items-center gap-1`,e),...t})}function wC({...e}){return(0,U.jsx)(`li`,{"data-slot":`pagination-item`,...e})}function TC({className:e,isActive:t,size:n=`icon`,...r}){return(0,U.jsx)(`a`,{"aria-current":t?`page`:void 0,"data-slot":`pagination-link`,"data-active":t,className:V(cx({variant:t?`outline`:`ghost`,size:n}),e),...r})}function EC({...e}){return(0,U.jsx)(ea,{"data-slot":`collapsible`,...e})}function DC({...e}){return(0,U.jsx)(na,{"data-slot":`collapsible-trigger`,...e})}function OC({...e}){return(0,U.jsx)(ia,{"data-slot":`collapsible-content`,...e})}function kC({...e}){return(0,U.jsx)(Xc,{"data-slot":`aspect-ratio`,...e})}function AC({className:e,...t}){return(0,U.jsx)(Xe,{role:`status`,"aria-label":`Loading`,className:V(`size-4 animate-spin`,e),...t})}function jC({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`empty`,className:V(`flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12`,e),...t})}function MC({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`empty-header`,className:V(`flex max-w-sm flex-col items-center gap-2 text-center`,e),...t})}function NC({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`empty-title`,className:V(`text-lg font-medium tracking-tight`,e),...t})}function PC({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`empty-description`,className:V(`text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary`,e),...t})}var FC=Gt(`group/field flex w-full gap-3 data-[invalid=true]:text-destructive`,{variants:{orientation:{vertical:[`flex-col [&>*]:w-full [&>.sr-only]:w-auto`],horizontal:[`flex-row items-center`,`[&>[data-slot=field-label]]:flex-auto`,`has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px`],responsive:[`flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto`,`@md/field-group:[&>[data-slot=field-label]]:flex-auto`,`@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px`]}},defaultVariants:{orientation:`vertical`}});function IC({className:e,orientation:t=`vertical`,...n}){return(0,U.jsx)(`div`,{role:`group`,"data-slot":`field`,"data-orientation":t,className:V(FC({orientation:t}),e),...n})}function LC({className:e,...t}){return(0,U.jsx)(qx,{"data-slot":`field-label`,className:V(`group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50`,`has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4`,`has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10`,e),...t})}function RC({className:e,...t}){return(0,U.jsx)(`p`,{"data-slot":`field-description`,className:V(`text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance`,`last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5`,`[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary`,e),...t})}var zC=365.2425,BC=6048e5,VC=864e5,HC=86400;HC*7,HC*zC/12*3;var UC=Symbol.for(`constructDateFrom`);function WC(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&UC in e?e[UC](t):e instanceof Date?new e.constructor(t):new Date(t)}function GC(e,t){return WC(t||e,e)}function KC(e,t,n){let r=GC(e,n?.in);return isNaN(t)?WC(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function qC(e,t,n){let r=GC(e,n?.in);if(isNaN(t))return WC(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=WC(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}var JC={};function YC(){return JC}function XC(e,t){let n=YC(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=GC(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function ZC(e,t){return XC(e,{...t,weekStartsOn:1})}function QC(e,t){let n=GC(e,t?.in),r=n.getFullYear(),i=WC(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=ZC(i),o=WC(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=ZC(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function $C(e){let t=GC(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-n}function ew(e,...t){let n=WC.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function tw(e,t){let n=GC(e,t?.in);return n.setHours(0,0,0,0),n}function nw(e,t,n){let[r,i]=ew(n?.in,e,t),a=tw(r),o=tw(i),s=+a-$C(a),c=+o-$C(o);return Math.round((s-c)/VC)}function rw(e,t){let n=QC(e,t),r=WC(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),ZC(r)}function iw(e,t,n){return KC(e,t*7,n)}function aw(e,t,n){return qC(e,t*12,n)}function ow(e,t){let n,r=t?.in;return e.forEach(e=>{!r&&typeof e==`object`&&(r=WC.bind(null,e));let t=GC(e,r);(!n||n<t||isNaN(+t))&&(n=t)}),WC(r,n||NaN)}function sw(e,t){let n,r=t?.in;return e.forEach(e=>{!r&&typeof e==`object`&&(r=WC.bind(null,e));let t=GC(e,r);(!n||n>t||isNaN(+t))&&(n=t)}),WC(r,n||NaN)}function cw(e,t,n){let[r,i]=ew(n?.in,e,t);return+tw(r)==+tw(i)}function lw(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function uw(e){return!(!lw(e)&&typeof e!=`number`||isNaN(+GC(e)))}function dw(e,t,n){let[r,i]=ew(n?.in,e,t),a=r.getFullYear()-i.getFullYear(),o=r.getMonth()-i.getMonth();return a*12+o}function fw(e,t){let n=GC(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function pw(e,t){let[n,r]=ew(e,t.start,t.end);return{start:n,end:r}}function mw(e,t){let{start:n,end:r}=pw(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0),o.setDate(1);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(WC(n,o)),o.setMonth(o.getMonth()+s);return i?c.reverse():c}function hw(e,t){let n=GC(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function gw(e,t){let n=GC(e,t?.in),r=n.getFullYear();return n.setFullYear(r+1,0,0),n.setHours(23,59,59,999),n}function _w(e,t){let n=GC(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function vw(e,t){let{start:n,end:r}=pw(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0),o.setMonth(0,1);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(WC(n,o)),o.setFullYear(o.getFullYear()+s);return i?c.reverse():c}function yw(e,t){let n=YC(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=GC(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function bw(e,t){return yw(e,{...t,weekStartsOn:1})}var xw={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},Sw=(e,t,n)=>{let r,i=xw[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r};function Cw(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var ww={date:Cw({formats:{full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},defaultWidth:`full`}),time:Cw({formats:{full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},defaultWidth:`full`}),dateTime:Cw({formats:{full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},defaultWidth:`full`})},Tw={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},Ew=(e,t,n,r)=>Tw[e];function Dw(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Ow={ordinalNumber:(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},era:Dw({values:{narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},defaultWidth:`wide`}),quarter:Dw({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},defaultWidth:`wide`,argumentCallback:e=>e-1}),month:Dw({values:{narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},defaultWidth:`wide`}),day:Dw({values:{narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},defaultWidth:`wide`}),dayPeriod:Dw({values:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},defaultFormattingWidth:`wide`})};function kw(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?jw(s,e=>e.test(o)):Aw(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Aw(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function jw(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Mw(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Nw={code:`en-US`,formatDistance:Sw,formatLong:ww,formatRelative:Ew,localize:Ow,match:{ordinalNumber:Mw({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:kw({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:`any`}),quarter:kw({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:kw({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:`any`}),day:kw({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:`any`}),dayPeriod:kw({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:`any`})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Pw(e,t){let n=GC(e,t?.in);return nw(n,_w(n))+1}function Fw(e,t){let n=GC(e,t?.in),r=+ZC(n)-rw(n);return Math.round(r/BC)+1}function Iw(e,t){let n=GC(e,t?.in),r=n.getFullYear(),i=YC(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=WC(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=XC(o,t),c=WC(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=XC(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function Lw(e,t){let n=YC(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=Iw(e,t),a=WC(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),XC(a,t)}function Rw(e,t){let n=GC(e,t?.in),r=+XC(n,t)-Lw(n,t);return Math.round(r/BC)+1}function zw(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var Bw={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return zw(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):zw(n+1,2)},d(e,t){return zw(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return zw(e.getHours()%12||12,t.length)},H(e,t){return zw(e.getHours(),t.length)},m(e,t){return zw(e.getMinutes(),t.length)},s(e,t){return zw(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return zw(Math.trunc(r*10**(n-3)),t.length)}},Vw={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},Hw={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return Bw.y(e,t)},Y:function(e,t,n,r){let i=Iw(e,r),a=i>0?i:1-i;return t===`YY`?zw(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):zw(a,t.length)},R:function(e,t){return zw(QC(e),t.length)},u:function(e,t){return zw(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return zw(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return zw(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return Bw.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return zw(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=Rw(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):zw(i,t.length)},I:function(e,t,n){let r=Fw(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):zw(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):Bw.d(e,t)},D:function(e,t,n){let r=Pw(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):zw(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return zw(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return zw(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return zw(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?Vw.noon:r===0?Vw.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?Vw.evening:r>=12?Vw.afternoon:r>=4?Vw.morning:Vw.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return Bw.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):Bw.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):zw(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):zw(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):Bw.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):Bw.s(e,t)},S:function(e,t){return Bw.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return Ww(r);case`XXXX`:case`XX`:return Gw(r);default:return Gw(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return Ww(r);case`xxxx`:case`xx`:return Gw(r);default:return Gw(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+Uw(r,`:`);default:return`GMT`+Gw(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+Uw(r,`:`);default:return`GMT`+Gw(r,`:`)}},t:function(e,t,n){return zw(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return zw(+e,t.length)}};function Uw(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+zw(a,2)}function Ww(e,t){return e%60==0?(e>0?`-`:`+`)+zw(Math.abs(e)/60,2):Gw(e,t)}function Gw(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=zw(Math.trunc(r/60),2),a=zw(r%60,2);return n+i+t+a}var Kw=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},qw=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},Jw={p:qw,P:(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Kw(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,Kw(r,t)).replace(`{{time}}`,qw(i,t))}},Yw=/^D+$/,Xw=/^Y+$/,Zw=[`D`,`DD`,`YY`,`YYYY`];function Qw(e){return Yw.test(e)}function $w(e){return Xw.test(e)}function eT(e,t,n){let r=tT(e,t,n);if(console.warn(r),Zw.includes(e))throw RangeError(r)}function tT(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var nT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,iT=/^'([^]*?)'?$/,aT=/''/g,oT=/[a-zA-Z]/;function sT(e,t,n){let r=YC(),i=n?.locale??r.locale??Nw,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=GC(e,n?.in);if(!uw(s))throw RangeError(`Invalid time value`);let c=t.match(rT).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=Jw[t];return n(e,i.formatLong)}return e}).join(``).match(nT).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:cT(e)};if(Hw[t])return{isToken:!0,value:e};if(t.match(oT))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&$w(a)||!n?.useAdditionalDayOfYearTokens&&Qw(a))&&eT(a,t,String(e));let o=Hw[a[0]];return o(s,a,i.localize,l)}).join(``)}function cT(e){let t=e.match(iT);return t?t[1].replace(aT,`'`):e}function lT(e,t){let n=GC(e,t?.in),r=n.getFullYear(),i=n.getMonth(),a=WC(n,0);return a.setFullYear(r,i+1,0),a.setHours(0,0,0,0),a.getDate()}function uT(e,t){return GC(e,t?.in).getMonth()}function dT(e,t){return GC(e,t?.in).getFullYear()}function fT(e,t){return+GC(e)>+GC(t)}function pT(e,t){return+GC(e)<+GC(t)}function mT(e,t,n){let[r,i]=ew(n?.in,e,t);return+XC(r,n)==+XC(i,n)}function hT(e,t,n){let[r,i]=ew(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function gT(e,t,n){let[r,i]=ew(n?.in,e,t);return r.getFullYear()===i.getFullYear()}function _T(e,t,n){let r=GC(e,n?.in),i=r.getFullYear(),a=r.getDate(),o=WC(n?.in||e,0);o.setFullYear(i,t,15),o.setHours(0,0,0,0);let s=lT(o);return r.setMonth(t,Math.min(a,s)),r}function vT(e,t,n){let r=GC(e,n?.in);return isNaN(+r)?WC(n?.in||e,NaN):(r.setFullYear(t),r)}var yT={lessThanXSeconds:{one:`meno di un secondo`,other:`meno di {{count}} secondi`},xSeconds:{one:`un secondo`,other:`{{count}} secondi`},halfAMinute:`alcuni secondi`,lessThanXMinutes:{one:`meno di un minuto`,other:`meno di {{count}} minuti`},xMinutes:{one:`un minuto`,other:`{{count}} minuti`},aboutXHours:{one:`circa un'ora`,other:`circa {{count}} ore`},xHours:{one:`un'ora`,other:`{{count}} ore`},xDays:{one:`un giorno`,other:`{{count}} giorni`},aboutXWeeks:{one:`circa una settimana`,other:`circa {{count}} settimane`},xWeeks:{one:`una settimana`,other:`{{count}} settimane`},aboutXMonths:{one:`circa un mese`,other:`circa {{count}} mesi`},xMonths:{one:`un mese`,other:`{{count}} mesi`},aboutXYears:{one:`circa un anno`,other:`circa {{count}} anni`},xYears:{one:`un anno`,other:`{{count}} anni`},overXYears:{one:`più di un anno`,other:`più di {{count}} anni`},almostXYears:{one:`quasi un anno`,other:`quasi {{count}} anni`}},bT=(e,t,n)=>{let r,i=yT[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`tra `+r:r+` fa`:r},xT={date:Cw({formats:{full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`dd/MM/y`},defaultWidth:`full`}),time:Cw({formats:{full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},defaultWidth:`full`}),dateTime:Cw({formats:{full:`{{date}} {{time}}`,long:`{{date}} {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},defaultWidth:`full`})},ST=[`domenica`,`lunedì`,`martedì`,`mercoledì`,`giovedì`,`venerdì`,`sabato`];function CT(e){switch(e){case 0:return`'domenica scorsa alle' p`;default:return`'`+ST[e]+` scorso alle' p`}}function wT(e){return`'`+ST[e]+` alle' p`}function TT(e){switch(e){case 0:return`'domenica prossima alle' p`;default:return`'`+ST[e]+` prossimo alle' p`}}var ET={lastWeek:(e,t,n)=>{let r=e.getDay();return mT(e,t,n)?wT(r):CT(r)},yesterday:`'ieri alle' p`,today:`'oggi alle' p`,tomorrow:`'domani alle' p`,nextWeek:(e,t,n)=>{let r=e.getDay();return mT(e,t,n)?wT(r):TT(r)},other:`P`},DT={code:`it`,formatDistance:bT,formatLong:xT,formatRelative:(e,t,n,r)=>{let i=ET[e];return typeof i==`function`?i(t,n,r):i},localize:{ordinalNumber:(e,t)=>{let n=Number(e);return String(n)},era:Dw({values:{narrow:[`aC`,`dC`],abbreviated:[`a.C.`,`d.C.`],wide:[`avanti Cristo`,`dopo Cristo`]},defaultWidth:`wide`}),quarter:Dw({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`T1`,`T2`,`T3`,`T4`],wide:[`1º trimestre`,`2º trimestre`,`3º trimestre`,`4º trimestre`]},defaultWidth:`wide`,argumentCallback:e=>e-1}),month:Dw({values:{narrow:[`G`,`F`,`M`,`A`,`M`,`G`,`L`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`gen`,`feb`,`mar`,`apr`,`mag`,`giu`,`lug`,`ago`,`set`,`ott`,`nov`,`dic`],wide:[`gennaio`,`febbraio`,`marzo`,`aprile`,`maggio`,`giugno`,`luglio`,`agosto`,`settembre`,`ottobre`,`novembre`,`dicembre`]},defaultWidth:`wide`}),day:Dw({values:{narrow:[`D`,`L`,`M`,`M`,`G`,`V`,`S`],short:[`dom`,`lun`,`mar`,`mer`,`gio`,`ven`,`sab`],abbreviated:[`dom`,`lun`,`mar`,`mer`,`gio`,`ven`,`sab`],wide:[`domenica`,`lunedì`,`martedì`,`mercoledì`,`giovedì`,`venerdì`,`sabato`]},defaultWidth:`wide`}),dayPeriod:Dw({values:{narrow:{am:`m.`,pm:`p.`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`mattina`,afternoon:`pomeriggio`,evening:`sera`,night:`notte`},abbreviated:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`mattina`,afternoon:`pomeriggio`,evening:`sera`,night:`notte`},wide:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`mattina`,afternoon:`pomeriggio`,evening:`sera`,night:`notte`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`m.`,pm:`p.`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`di mattina`,afternoon:`del pomeriggio`,evening:`di sera`,night:`di notte`},abbreviated:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`di mattina`,afternoon:`del pomeriggio`,evening:`di sera`,night:`di notte`},wide:{am:`AM`,pm:`PM`,midnight:`mezzanotte`,noon:`mezzogiorno`,morning:`di mattina`,afternoon:`del pomeriggio`,evening:`di sera`,night:`di notte`}},defaultFormattingWidth:`wide`})},match:{ordinalNumber:Mw({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:kw({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^a/i,/^(d|e)/i]},defaultParseWidth:`any`}),quarter:kw({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:kw({matchPatterns:{narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:`any`}),day:kw({matchPatterns:{narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},defaultParseWidth:`any`}),dayPeriod:kw({matchPatterns:{narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},defaultParseWidth:`any`})},options:{weekStartsOn:1,firstWeekContainsDate:4}};function OT({...e}){return(0,U.jsx)(gh,{"data-slot":`popover`,...e})}function kT({...e}){return(0,U.jsx)(vh,{"data-slot":`popover-trigger`,...e})}function AT({className:e,align:t=`center`,sideOffset:n=4,...r}){return(0,U.jsx)(Sh,{children:(0,U.jsx)(wh,{"data-slot":`popover-content`,align:t,sideOffset:n,className:V(`z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`,e),...r})})}var jT=1,MT=.9,NT=.8,PT=.17,FT=.1,IT=.999,LT=.9999,RT=.99,zT=/[\\\/_+.#"@\[\(\{&]/,BT=/[\\\/_+.#"@\[\(\{&]/g,VT=/[\s-]/,HT=/[\s-]/g;function UT(e,t,n,r,i,a,o){if(a===t.length)return i===e.length?jT:RT;var s=`${i},${a}`;if(o[s]!==void 0)return o[s];for(var c=r.charAt(a),l=n.indexOf(c,i),u=0,d,f,p,m;l>=0;)d=UT(e,t,n,r,l+1,a+1,o),d>u&&(l===i?d*=jT:zT.test(e.charAt(l-1))?(d*=NT,p=e.slice(i,l-1).match(BT),p&&i>0&&(d*=IT**+p.length)):VT.test(e.charAt(l-1))?(d*=MT,m=e.slice(i,l-1).match(HT),m&&i>0&&(d*=IT**+m.length)):(d*=PT,i>0&&(d*=IT**+(l-i))),e.charAt(l)!==t.charAt(a)&&(d*=LT)),(d<FT&&n.charAt(l-1)===r.charAt(a+1)||r.charAt(a+1)===r.charAt(a)&&n.charAt(l-1)!==r.charAt(a))&&(f=UT(e,t,n,r,l+1,a+2,o),f*FT>d&&(d=f*FT)),d>u&&(u=d),l=n.indexOf(c,l+1);return o[s]=u,u}function WT(e){return e.toLowerCase().replace(HT,` `)}function GT(e,t,n){return e=n&&n.length>0?`${e+` `+n.join(` `)}`:e,UT(e,t,WT(e),WT(t),0,0,{})}var KT=`[cmdk-group=""]`,qT=`[cmdk-group-items=""]`,JT=`[cmdk-group-heading=""]`,YT=`[cmdk-item=""]`,XT=`${YT}:not([aria-disabled="true"])`,ZT=`cmdk-item-select`,QT=`data-value`,$T=(e,t,n)=>GT(e,t,n),eE=v.createContext(void 0),tE=()=>v.useContext(eE),nE=v.createContext(void 0),rE=()=>v.useContext(nE),iE=v.createContext(void 0),aE=v.forwardRef((e,t)=>{let n=yE(()=>({search:``,value:e.value??e.defaultValue??``,selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}})),r=yE(()=>new Set),i=yE(()=>new Map),a=yE(()=>new Map),o=yE(()=>new Set),s=_E(e),{label:c,children:l,value:u,onValueChange:d,filter:f,shouldFilter:p,loop:m,disablePointerSelection:h=!1,vimBindings:g=!0,..._}=e,y=qi(),b=qi(),x=qi(),S=v.useRef(null),C=SE();vE(()=>{if(u!==void 0){let e=u.trim();n.current.value=e,w.emit()}},[u]),vE(()=>{C(6,k)},[]);let w=v.useMemo(()=>({subscribe:e=>(o.current.add(e),()=>o.current.delete(e)),snapshot:()=>n.current,setState:(e,t,r)=>{var i,a,o;if(!Object.is(n.current[e],t)){if(n.current[e]=t,e===`search`)O(),E(),C(1,D);else if(e===`value`){if(document.activeElement.hasAttribute(`cmdk-input`)||document.activeElement.hasAttribute(`cmdk-root`)){let e=document.getElementById(x);e?e.focus():(i=document.getElementById(y))==null||i.focus()}if(C(7,()=>{n.current.selectedItemId=A()?.id,w.emit()}),r||C(5,k),s.current?.value!==void 0){let e=t??``;(o=(a=s.current).onValueChange)==null||o.call(a,e);return}}w.emit()}},emit:()=>{o.current.forEach(e=>e())}}),[]),T=v.useMemo(()=>({value:(e,t,r)=>{t!==a.current.get(e)?.value&&(a.current.set(e,{value:t,keywords:r}),n.current.filtered.items.set(e,ee(t,r)),C(2,()=>{E(),w.emit()}))},item:(e,t)=>(r.current.add(e),t&&(i.current.has(t)?i.current.get(t).add(e):i.current.set(t,new Set([e]))),C(3,()=>{O(),E(),n.current.value||D(),w.emit()}),()=>{a.current.delete(e),r.current.delete(e),n.current.filtered.items.delete(e);let t=A();C(4,()=>{O(),t?.getAttribute(`id`)===e&&D(),w.emit()})}),group:e=>(i.current.has(e)||i.current.set(e,new Set),()=>{a.current.delete(e),i.current.delete(e)}),filter:()=>s.current.shouldFilter,label:c||e[`aria-label`],getDisablePointerSelection:()=>s.current.disablePointerSelection,listId:y,inputId:x,labelId:b,listInnerRef:S}),[]);function ee(e,t){let r=s.current?.filter??$T;return e?r(e,n.current.search,t):0}function E(){if(!n.current.search||s.current.shouldFilter===!1)return;let e=n.current.filtered.items,t=[];n.current.filtered.groups.forEach(n=>{let r=i.current.get(n),a=0;r.forEach(t=>{let n=e.get(t);a=Math.max(n,a)}),t.push([n,a])});let r=S.current;j().sort((t,n)=>{let r=t.getAttribute(`id`),i=n.getAttribute(`id`);return(e.get(i)??0)-(e.get(r)??0)}).forEach(e=>{let t=e.closest(qT);t?t.appendChild(e.parentElement===t?e:e.closest(`${qT} > *`)):r.appendChild(e.parentElement===r?e:e.closest(`${qT} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=S.current?.querySelector(`${KT}[${QT}="${encodeURIComponent(e[0])}"]`);t?.parentElement.appendChild(t)})}function D(){let e=j().find(e=>e.getAttribute(`aria-disabled`)!==`true`)?.getAttribute(QT);w.setState(`value`,e||void 0)}function O(){if(!n.current.search||s.current.shouldFilter===!1){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let e=0;for(let t of r.current){let r=ee(a.current.get(t)?.value??``,a.current.get(t)?.keywords??[]);n.current.filtered.items.set(t,r),r>0&&e++}for(let[e,t]of i.current)for(let r of t)if(n.current.filtered.items.get(r)>0){n.current.filtered.groups.add(e);break}n.current.filtered.count=e}function k(){var e;let t=A();t&&(t.parentElement?.firstChild===t&&((e=t.closest(KT)?.querySelector(JT))==null||e.scrollIntoView({block:`nearest`})),t.scrollIntoView({block:`nearest`}))}function A(){return S.current?.querySelector(`${YT}[aria-selected="true"]`)}function j(){return Array.from(S.current?.querySelectorAll(XT)||[])}function te(e){let t=j()[e];t&&w.setState(`value`,t.getAttribute(QT))}function M(e){var t;let n=A(),r=j(),i=r.findIndex(e=>e===n),a=r[i+e];(t=s.current)!=null&&t.loop&&(a=i+e<0?r[r.length-1]:i+e===r.length?r[0]:r[i+e]),a&&w.setState(`value`,a.getAttribute(QT))}function N(e){let t=A()?.closest(KT),n;for(;t&&!n;)t=e>0?hE(t,KT):gE(t,KT),n=t?.querySelector(XT);n?w.setState(`value`,n.getAttribute(QT)):M(e)}let P=()=>te(j().length-1),F=e=>{e.preventDefault(),e.metaKey?P():e.altKey?N(1):M(1)},ne=e=>{e.preventDefault(),e.metaKey?te(0):e.altKey?N(-1):M(-1)};return v.createElement(W.div,{ref:t,tabIndex:-1,..._,"cmdk-root":``,onKeyDown:e=>{var t;(t=_.onKeyDown)==null||t.call(_,e);let n=e.nativeEvent.isComposing||e.keyCode===229;if(!(e.defaultPrevented||n))switch(e.key){case`n`:case`j`:g&&e.ctrlKey&&F(e);break;case`ArrowDown`:F(e);break;case`p`:case`k`:g&&e.ctrlKey&&ne(e);break;case`ArrowUp`:ne(e);break;case`Home`:e.preventDefault(),te(0);break;case`End`:e.preventDefault(),P();break;case`Enter`:{e.preventDefault();let t=A();if(t){let e=new Event(ZT);t.dispatchEvent(e)}}}}},v.createElement(`label`,{"cmdk-label":``,htmlFor:T.inputId,id:T.labelId,style:TE},c),wE(e,e=>v.createElement(nE.Provider,{value:w},v.createElement(eE.Provider,{value:T},e))))}),oE=v.forwardRef((e,t)=>{let n=qi(),r=v.useRef(null),i=v.useContext(iE),a=tE(),o=_E(e),s=o.current?.forceMount??i?.forceMount;vE(()=>{if(!s)return a.item(n,i?.id)},[s]);let c=xE(n,r,[e.value,e.children,r],e.keywords),l=rE(),u=bE(e=>e.value&&e.value===c.current),d=bE(e=>s||a.filter()===!1?!0:!e.search||e.filtered.items.get(n)>0);v.useEffect(()=>{let t=r.current;if(t&&!e.disabled)return t.addEventListener(ZT,f),()=>t.removeEventListener(ZT,f)},[d,e.onSelect,e.disabled]);function f(){var e,t;p(),(t=(e=o.current).onSelect)==null||t.call(e,c.current)}function p(){l.setState(`value`,c.current,!0)}if(!d)return null;let{disabled:m,value:h,onSelect:g,forceMount:_,keywords:y,...b}=e;return v.createElement(W.div,{ref:xr(r,t),...b,id:n,"cmdk-item":``,role:`option`,"aria-disabled":!!m,"aria-selected":!!u,"data-disabled":!!m,"data-selected":!!u,onPointerMove:m||a.getDisablePointerSelection()?void 0:p,onClick:m?void 0:f},e.children)}),sE=v.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:i,...a}=e,o=qi(),s=v.useRef(null),c=v.useRef(null),l=qi(),u=tE(),d=bE(e=>i||u.filter()===!1?!0:!e.search||e.filtered.groups.has(o));vE(()=>u.group(o),[]),xE(o,s,[e.value,e.heading,c]);let f=v.useMemo(()=>({id:o,forceMount:i}),[i]);return v.createElement(W.div,{ref:xr(s,t),...a,"cmdk-group":``,role:`presentation`,hidden:!d||void 0},n&&v.createElement(`div`,{ref:c,"cmdk-group-heading":``,"aria-hidden":!0,id:l},n),wE(e,e=>v.createElement(`div`,{"cmdk-group-items":``,role:`group`,"aria-labelledby":n?l:void 0},v.createElement(iE.Provider,{value:f},e))))}),cE=v.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,i=v.useRef(null),a=bE(e=>!e.search);return!n&&!a?null:v.createElement(W.div,{ref:xr(i,t),...r,"cmdk-separator":``,role:`separator`})}),lE=v.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,i=e.value!=null,a=rE(),o=bE(e=>e.search),s=bE(e=>e.selectedItemId),c=tE();return v.useEffect(()=>{e.value!=null&&a.setState(`search`,e.value)},[e.value]),v.createElement(W.input,{ref:t,...r,"cmdk-input":``,autoComplete:`off`,autoCorrect:`off`,spellCheck:!1,"aria-autocomplete":`list`,role:`combobox`,"aria-expanded":!0,"aria-controls":c.listId,"aria-labelledby":c.labelId,"aria-activedescendant":s,id:c.inputId,type:`text`,value:i?e.value:o,onChange:e=>{i||a.setState(`search`,e.target.value),n?.(e.target.value)}})}),uE=v.forwardRef((e,t)=>{let{children:n,label:r=`Suggestions`,...i}=e,a=v.useRef(null),o=v.useRef(null),s=bE(e=>e.selectedItemId),c=tE();return v.useEffect(()=>{if(o.current&&a.current){let e=o.current,t=a.current,n,r=new ResizeObserver(()=>{n=requestAnimationFrame(()=>{let n=e.offsetHeight;t.style.setProperty(`--cmdk-list-height`,n.toFixed(1)+`px`)})});return r.observe(e),()=>{cancelAnimationFrame(n),r.unobserve(e)}}},[]),v.createElement(W.div,{ref:xr(a,t),...i,"cmdk-list":``,role:`listbox`,tabIndex:-1,"aria-activedescendant":s,"aria-label":r,id:c.listId},wE(e,e=>v.createElement(`div`,{ref:xr(o,c.listInnerRef),"cmdk-list-sizer":``},e)))}),dE=v.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:i,contentClassName:a,container:o,...s}=e;return v.createElement(uc,{open:n,onOpenChange:r},v.createElement(gc,{container:o},v.createElement(vc,{"cmdk-overlay":``,className:i}),v.createElement(Sc,{"aria-label":e.label,"cmdk-dialog":``,className:a},v.createElement(aE,{ref:t,...s}))))}),fE=v.forwardRef((e,t)=>bE(e=>e.filtered.count===0)?v.createElement(W.div,{ref:t,...e,"cmdk-empty":``,role:`presentation`}):null),pE=v.forwardRef((e,t)=>{let{progress:n,children:r,label:i=`Loading...`,...a}=e;return v.createElement(W.div,{ref:t,...a,"cmdk-loading":``,role:`progressbar`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":i},wE(e,e=>v.createElement(`div`,{"aria-hidden":!0},e)))}),mE=Object.assign(aE,{List:uE,Item:oE,Input:lE,Group:sE,Separator:cE,Dialog:dE,Empty:fE,Loading:pE});function hE(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function gE(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function _E(e){let t=v.useRef(e);return vE(()=>{t.current=e}),t}var vE=typeof window>`u`?v.useEffect:v.useLayoutEffect;function yE(e){let t=v.useRef();return t.current===void 0&&(t.current=e()),t}function bE(e){let t=rE(),n=()=>e(t.snapshot());return v.useSyncExternalStore(t.subscribe,n,n)}function xE(e,t,n,r=[]){let i=v.useRef(),a=tE();return vE(()=>{var o;let s=(()=>{for(let e of n){if(typeof e==`string`)return e.trim();if(typeof e==`object`&&`current`in e)return e.current?e.current.textContent?.trim():i.current}})(),c=r.map(e=>e.trim());a.value(e,s,c),(o=t.current)==null||o.setAttribute(QT,s),i.current=s}),i}var SE=()=>{let[e,t]=v.useState(),n=yE(()=>new Map);return vE(()=>{n.current.forEach(e=>e()),n.current=new Map},[e]),(e,r)=>{n.current.set(e,r),t({})}};function CE(e){let t=e.type;return typeof t==`function`?t(e.props):`render`in t?t.render(e.props):e}function wE({asChild:e,children:t},n){return e&&v.isValidElement(t)?v.cloneElement(CE(t),{ref:t.ref},n(t.props.children)):n(t)}var TE={position:`absolute`,width:`1px`,height:`1px`,padding:`0`,margin:`-1px`,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,borderWidth:`0`};function EE({className:e,...t}){return(0,U.jsx)(mE,{"data-slot":`command`,className:V(`flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground`,e),...t})}function DE({className:e,...t}){return(0,U.jsxs)(`div`,{"data-slot":`command-input-wrapper`,className:`flex h-9 items-center gap-2 border-b px-3`,children:[(0,U.jsx)(tt,{className:`size-4 shrink-0 opacity-50`}),(0,U.jsx)(mE.Input,{"data-slot":`command-input`,className:V(`flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,e),...t})]})}function OE({className:e,...t}){return(0,U.jsx)(mE.List,{"data-slot":`command-list`,className:V(`max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto`,e),...t})}function kE({...e}){return(0,U.jsx)(mE.Empty,{"data-slot":`command-empty`,className:`py-6 text-center text-sm`,...e})}function AE({className:e,...t}){return(0,U.jsx)(mE.Group,{"data-slot":`command-group`,className:V(`overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground`,e),...t})}function jE({className:e,...t}){return(0,U.jsx)(mE.Item,{"data-slot":`command-item`,className:V(`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground`,e),...t})}function ME(e,t,n=`long`){return new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,timeZone:e,timeZoneName:n}).format(t).split(/\s/g).slice(2).join(` `)}var NE={},PE={};function FE(e,t){try{let n=(NE[e]||=new Intl.DateTimeFormat(`en-US`,{timeZone:e,timeZoneName:`longOffset`}).format)(t).split(`GMT`)[1];return n in PE?PE[n]:LE(n,n.split(`:`))}catch{if(e in PE)return PE[e];let t=e?.match(IE);return t?LE(e,t.slice(1)):NaN}}var IE=/([+-]\d\d):?(\d\d)?/;function LE(e,t){let n=+(t[0]||0),r=+(t[1]||0),i=(t[2]||0)/60;return PE[e]=n*60+r>0?n*60+r+i:n*60-r-i}var RE=class e extends Date{constructor(...e){super(),e.length>1&&typeof e[e.length-1]==`string`&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(FE(this.timeZone,this))?this.setTime(NaN):e.length?typeof e[0]==`number`&&(e.length===1||e.length===2&&typeof e[1]!=`number`)?this.setTime(e[0]):typeof e[0]==`string`?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),HE(this,e)):this.setTime(Date.now())}static tz(t,...n){return n.length?new e(...n,t):new e(Date.now(),t)}withTimeZone(t){return new e(+this,t)}getTimezoneOffset(){let e=-FE(this.timeZone,this);return e>0?Math.floor(e):Math.ceil(e)}setTime(e){return Date.prototype.setTime.apply(this,arguments),BE(this),+this}[Symbol.for(`constructDateFrom`)](t){return new e(+new Date(t),this.timeZone)}},zE=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!zE.test(e))return;let t=e.replace(zE,`$1UTC`);RE.prototype[t]&&(e.startsWith(`get`)?RE.prototype[e]=function(){return this.internal[t]()}:(RE.prototype[e]=function(){return Date.prototype[t].apply(this.internal,arguments),VE(this),+this},RE.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),BE(this),+this}))});function BE(e){e.internal.setTime(+e),e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-FE(e.timeZone,e)*60))}function VE(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),HE(e)}function HE(e,t){let n=Array.isArray(t)?UE(t):+e.internal,r=FE(e.timeZone,e),i=r>0?Math.floor(r):Math.ceil(r),a=new Date(+e);a.setUTCHours(a.getUTCHours()-1);let o=-new Date(+e).getTimezoneOffset(),s=-new Date(+a).getTimezoneOffset(),c=o-s,l=o;if(c&&o!==i&&Date.prototype.getHours.apply(e)!==(Array.isArray(t)?t[3]||0:e.internal.getUTCHours())){let t=new Date(+e),n=o-i;n&&t.setUTCMinutes(t.getUTCMinutes()+n);let r=FE(e.timeZone,t);(r>0?Math.floor(r):Math.ceil(r))===i&&(l=s)}let u=l-i;u&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+u);let d=new Date(+e);d.setUTCSeconds(0);let f=o>0?d.getSeconds():(d.getSeconds()-60)%60,p=Math.round(-(FE(e.timeZone,e)*60))%60;(p||f)&&Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+p+f);let m=FE(e.timeZone,e),h=m>0?Math.floor(m):Math.ceil(m),g=-new Date(+e).getTimezoneOffset()-h,_=h!==i,v=g-u,y=h-i,b=n-h*60*1e3,x=y>0&&WE(e)-n===y*60*1e3&&WE(e,b)!==n;if(_&&v&&!x){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+v);let t=FE(e.timeZone,e),n=h-(t>0?Math.floor(t):Math.ceil(t));n&&v<0&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}BE(e);let S=(t?n:n+p*1e3)-+e.internal;S&&Math.abs(S)<18e5&&(Date.prototype.setTime.call(e,+e+S),BE(e))}function UE(e){return Date.UTC(e[0],e.length>1?e[1]:0,e.length>2?e[2]:1,...e.slice(3))}function WE(e,t){let n=new Date(t??+e);return n.setUTCSeconds(n.getUTCSeconds()-Math.round(-FE(e.timeZone,n)*60)),+n}var GE=class e extends RE{static tz(t,...n){return n.length?new e(...n,t):new e(Date.now(),t)}toISOString(){let[e,t,n]=this.tzComponents(),r=`${e}${t}:${n}`;return this.internal.toISOString().slice(0,-1)+r}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){let[e,t,n,r]=this.internal.toUTCString().split(` `);return`${e?.slice(0,-1)} ${n} ${t} ${r}`}toTimeString(){let e=this.internal.toUTCString().split(` `)[4],[t,n,r]=this.tzComponents();return`${e} GMT${t}${n}${r} (${ME(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){let e=this.getTimezoneOffset();return[e>0?`-`:`+`,String(Math.floor(Math.abs(e)/60)).padStart(2,`0`),String(Math.abs(e)%60).padStart(2,`0`)]}withTimeZone(t){return new e(+this,t)}[Symbol.for(`constructDateFrom`)](t){return new e(+new Date(t),this.timeZone)}},KE=5,qE=4;function JE(e,t){let n=t.startOfMonth(e),r=n.getDay()>0?n.getDay():7,i=t.addDays(e,-r+1),a=t.addDays(i,34);return t.getMonth(e)===t.getMonth(a)?KE:qE}function YE(e,t){let n=t.startOfMonth(e),r=n.getDay();return r===1?n:r===0?t.addDays(n,-6):t.addDays(n,-1*(r-1))}function XE(e,t){let n=YE(e,t),r=JE(e,t);return t.addDays(n,r*7-1)}var ZE={...Nw,labels:{labelDayButton:(e,t,n,r)=>{let i;i=r&&typeof r.format==`function`?r.format.bind(r):(e,t)=>sT(e,t,{locale:Nw,...n});let a=i(e,`PPPP`);return t.today&&(a=`Today, ${a}`),t.selected&&(a=`${a}, selected`),a},labelMonthDropdown:`Choose the Month`,labelNext:`Go to the Next Month`,labelPrevious:`Go to the Previous Month`,labelWeekNumber:e=>`Week ${e}`,labelYearDropdown:`Choose the Year`,labelGrid:(e,t,n)=>{let r;return r=n&&typeof n.format==`function`?n.format.bind(n):(e,n)=>sT(e,n,{locale:Nw,...t}),r(e,`LLLL yyyy`)},labelGridcell:(e,t,n,r)=>{let i;i=r&&typeof r.format==`function`?r.format.bind(r):(e,t)=>sT(e,t,{locale:Nw,...n});let a=i(e,`PPPP`);return t?.today&&(a=`Today, ${a}`),a},labelNav:`Navigation bar`,labelWeekNumberHeader:`Week Number`,labelWeekday:(e,t,n)=>{let r;return r=n&&typeof n.format==`function`?n.format.bind(n):(e,n)=>sT(e,n,{locale:Nw,...t}),r(e,`cccc`)}}},QE=class e{constructor(e,t){this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?GE.tz(this.options.timeZone):new(this.options.Date??Date),this.newDate=(e,t,n)=>this.overrides?.newDate?this.overrides.newDate(e,t,n):this.options.timeZone?new GE(e,t,n,this.options.timeZone):new Date(e,t,n),this.addDays=(e,t)=>this.overrides?.addDays?this.overrides.addDays(e,t):KC(e,t),this.addMonths=(e,t)=>this.overrides?.addMonths?this.overrides.addMonths(e,t):qC(e,t),this.addWeeks=(e,t)=>this.overrides?.addWeeks?this.overrides.addWeeks(e,t):iw(e,t),this.addYears=(e,t)=>this.overrides?.addYears?this.overrides.addYears(e,t):aw(e,t),this.differenceInCalendarDays=(e,t)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):nw(e,t),this.differenceInCalendarMonths=(e,t)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):dw(e,t),this.eachMonthOfInterval=e=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):mw(e),this.eachYearOfInterval=e=>{let t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):vw(e),n=new Set(t.map(e=>this.getYear(e)));if(n.size===t.length)return t;let r=[];return n.forEach(e=>{r.push(new Date(e,0,1))}),r},this.endOfBroadcastWeek=e=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):XE(e,this),this.endOfISOWeek=e=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):bw(e),this.endOfMonth=e=>this.overrides?.endOfMonth?this.overrides.endOfMonth(e):fw(e),this.endOfWeek=(e,t)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):yw(e,this.options),this.endOfYear=e=>this.overrides?.endOfYear?this.overrides.endOfYear(e):gw(e),this.format=(e,t,n)=>{let r=this.overrides?.format?this.overrides.format(e,t,this.options):sT(e,t,this.options);return this.options.numerals&&this.options.numerals!==`latn`?this.replaceDigits(r):r},this.getISOWeek=e=>this.overrides?.getISOWeek?this.overrides.getISOWeek(e):Fw(e),this.getMonth=(e,t)=>this.overrides?.getMonth?this.overrides.getMonth(e,this.options):uT(e,this.options),this.getYear=(e,t)=>this.overrides?.getYear?this.overrides.getYear(e,this.options):dT(e,this.options),this.getWeek=(e,t)=>this.overrides?.getWeek?this.overrides.getWeek(e,this.options):Rw(e,this.options),this.isAfter=(e,t)=>this.overrides?.isAfter?this.overrides.isAfter(e,t):fT(e,t),this.isBefore=(e,t)=>this.overrides?.isBefore?this.overrides.isBefore(e,t):pT(e,t),this.isDate=e=>this.overrides?.isDate?this.overrides.isDate(e):lw(e),this.isSameDay=(e,t)=>this.overrides?.isSameDay?this.overrides.isSameDay(e,t):cw(e,t),this.isSameMonth=(e,t)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):hT(e,t),this.isSameYear=(e,t)=>this.overrides?.isSameYear?this.overrides.isSameYear(e,t):gT(e,t),this.max=e=>this.overrides?.max?this.overrides.max(e):ow(e),this.min=e=>this.overrides?.min?this.overrides.min(e):sw(e),this.setMonth=(e,t)=>this.overrides?.setMonth?this.overrides.setMonth(e,t):_T(e,t),this.setYear=(e,t)=>this.overrides?.setYear?this.overrides.setYear(e,t):vT(e,t),this.startOfBroadcastWeek=(e,t)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):YE(e,this),this.startOfDay=e=>this.overrides?.startOfDay?this.overrides.startOfDay(e):tw(e),this.startOfISOWeek=e=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):ZC(e),this.startOfMonth=e=>this.overrides?.startOfMonth?this.overrides.startOfMonth(e):hw(e),this.startOfWeek=(e,t)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):XC(e,this.options),this.startOfYear=e=>this.overrides?.startOfYear?this.overrides.startOfYear(e):_w(e),this.options={locale:ZE,...e},this.overrides=t}getDigitMap(){let{numerals:e=`latn`}=this.options,t=new Intl.NumberFormat(`en-US`,{numberingSystem:e}),n={};for(let e=0;e<10;e++)n[e.toString()]=t.format(e);return n}replaceDigits(e){let t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}formatNumber(e){return this.replaceDigits(e.toString())}getMonthYearOrder(){let t=this.options.locale?.code;return t&&e.yearFirstLocales.has(t)?`year-first`:`month-first`}formatMonthYear(t){let{locale:n,timeZone:r,numerals:i}=this.options,a=n?.code;if(a&&e.yearFirstLocales.has(a))try{return new Intl.DateTimeFormat(a,{month:`long`,year:`numeric`,timeZone:r,numberingSystem:i}).format(t)}catch{}let o=this.getMonthYearOrder()===`year-first`?`y LLLL`:`LLLL y`;return this.format(t,o)}};QE.yearFirstLocales=new Set([`eu`,`hu`,`ja`,`ja-Hira`,`ja-JP`,`ko`,`ko-KR`,`lt`,`lt-LT`,`lv`,`lv-LV`,`mn`,`mn-MN`,`zh`,`zh-CN`,`zh-HK`,`zh-TW`]);var $E=new QE,eD=class{constructor(e,t,n=$E){this.date=e,this.displayMonth=t,this.outside=!(!t||n.isSameMonth(e,t)),this.dateLib=n,this.isoDate=n.format(e,`yyyy-MM-dd`),this.displayMonthId=n.format(t,`yyyy-MM`),this.dateMonthId=n.format(e,`yyyy-MM`)}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}},tD=class{constructor(e,t){this.date=e,this.weeks=t}},nD=class{constructor(e,t){this.days=t,this.weekNumber=e}};function rD(e){return v.createElement(`span`,{...e})}function iD(e){let{size:t=24,orientation:n=`left`,className:r,style:i}=e;return v.createElement(`svg`,{className:r,style:i,width:t,height:t,viewBox:`0 0 24 24`},n===`up`&&v.createElement(`polygon`,{points:`6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28`}),n===`down`&&v.createElement(`polygon`,{points:`6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72`}),n===`left`&&v.createElement(`polygon`,{points:`16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20`}),n===`right`&&v.createElement(`polygon`,{points:`8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20`}))}function aD(e){let{day:t,modifiers:n,...r}=e;return v.createElement(`td`,{...r})}function oD(e){let{day:t,modifiers:n,...r}=e,i=v.useRef(null);return v.useEffect(()=>{n.focused&&i.current?.focus()},[n.focused]),v.createElement(`button`,{ref:i,...r})}var $;(function(e){e.Root=`root`,e.Chevron=`chevron`,e.Day=`day`,e.DayButton=`day_button`,e.CaptionLabel=`caption_label`,e.Dropdowns=`dropdowns`,e.Dropdown=`dropdown`,e.DropdownRoot=`dropdown_root`,e.Footer=`footer`,e.MonthGrid=`month_grid`,e.MonthCaption=`month_caption`,e.MonthsDropdown=`months_dropdown`,e.Month=`month`,e.Months=`months`,e.Nav=`nav`,e.NextMonthButton=`button_next`,e.PreviousMonthButton=`button_previous`,e.Week=`week`,e.Weeks=`weeks`,e.Weekday=`weekday`,e.Weekdays=`weekdays`,e.WeekNumber=`week_number`,e.WeekNumberHeader=`week_number_header`,e.YearsDropdown=`years_dropdown`})($||={});var sD;(function(e){e.disabled=`disabled`,e.hidden=`hidden`,e.outside=`outside`,e.focused=`focused`,e.today=`today`})(sD||={});var cD;(function(e){e.range_end=`range_end`,e.range_middle=`range_middle`,e.range_start=`range_start`,e.selected=`selected`})(cD||={});var lD;(function(e){e.weeks_before_enter=`weeks_before_enter`,e.weeks_before_exit=`weeks_before_exit`,e.weeks_after_enter=`weeks_after_enter`,e.weeks_after_exit=`weeks_after_exit`,e.caption_after_enter=`caption_after_enter`,e.caption_after_exit=`caption_after_exit`,e.caption_before_enter=`caption_before_enter`,e.caption_before_exit=`caption_before_exit`})(lD||={});var uD=(0,v.createContext)(void 0);function dD(){let e=(0,v.useContext)(uD);if(e===void 0)throw Error(`useDayPicker() must be used within a custom component.`);return e}function fD(e){let{options:t,className:n,...r}=e,{classNames:i,components:a,styles:o}=dD(),s=[i[$.Dropdown],n].join(` `),c=t?.find(({value:e})=>e===r.value);return v.createElement(`span`,{"data-disabled":r.disabled,className:i[$.DropdownRoot],style:o?.[$.DropdownRoot]},v.createElement(a.Select,{className:s,...r},t?.map(({value:e,label:t,disabled:n})=>v.createElement(a.Option,{key:e,value:e,disabled:n},t))),v.createElement(`span`,{className:i[$.CaptionLabel],style:o?.[$.CaptionLabel],"aria-hidden":!0},c?.label,v.createElement(a.Chevron,{orientation:`down`,size:18,className:i[$.Chevron],style:o?.[$.Chevron]})))}function pD(e){return v.createElement(`div`,{...e})}function mD(e){return v.createElement(`div`,{...e})}function hD(e){let{calendarMonth:t,displayIndex:n,...r}=e;return v.createElement(`div`,{...r},e.children)}function gD(e){let{calendarMonth:t,displayIndex:n,...r}=e;return v.createElement(`div`,{...r})}function _D(e){return v.createElement(`table`,{...e})}function vD(e){return v.createElement(`div`,{...e})}function yD(e){let{components:t}=dD();return v.createElement(t.Dropdown,{...e})}function bD(e){let{onPreviousClick:t,onNextClick:n,previousMonth:r,nextMonth:i,...a}=e,{components:o,classNames:s,styles:c,labels:{labelPrevious:l,labelNext:u}}=dD(),d=(0,v.useCallback)(e=>{i&&n?.(e)},[i,n]),f=(0,v.useCallback)(e=>{r&&t?.(e)},[r,t]);return v.createElement(`nav`,{...a},v.createElement(o.PreviousMonthButton,{type:`button`,className:s[$.PreviousMonthButton],style:c?.[$.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":!r||void 0,"aria-label":l(r),onClick:f},v.createElement(o.Chevron,{disabled:!r||void 0,className:s[$.Chevron],style:c?.[$.Chevron],orientation:`left`})),v.createElement(o.NextMonthButton,{type:`button`,className:s[$.NextMonthButton],style:c?.[$.NextMonthButton],tabIndex:i?void 0:-1,"aria-disabled":!i||void 0,"aria-label":u(i),onClick:d},v.createElement(o.Chevron,{disabled:!i||void 0,orientation:`right`,className:s[$.Chevron],style:c?.[$.Chevron]})))}function xD(e){return v.createElement(`button`,{...e})}function SD(e){return v.createElement(`option`,{...e})}function CD(e){return v.createElement(`button`,{...e})}function wD(e){let{rootRef:t,...n}=e;return v.createElement(`div`,{...n,ref:t})}function TD(e){return v.createElement(`select`,{...e})}function ED(e){let{week:t,...n}=e;return v.createElement(`tr`,{...n})}function DD(e){return v.createElement(`th`,{...e})}function OD(e){return v.createElement(`thead`,{"aria-hidden":!0},v.createElement(`tr`,{...e}))}function kD(e){let{week:t,...n}=e;return v.createElement(`th`,{...n})}function AD(e){return v.createElement(`th`,{...e})}function jD(e){return v.createElement(`tbody`,{...e})}function MD(e){let{components:t}=dD();return v.createElement(t.Dropdown,{...e})}var ND=s({CaptionLabel:()=>rD,Chevron:()=>iD,Day:()=>aD,DayButton:()=>oD,Dropdown:()=>fD,DropdownNav:()=>pD,Footer:()=>mD,Month:()=>hD,MonthCaption:()=>gD,MonthGrid:()=>_D,Months:()=>vD,MonthsDropdown:()=>yD,Nav:()=>bD,NextMonthButton:()=>xD,Option:()=>SD,PreviousMonthButton:()=>CD,Root:()=>wD,Select:()=>TD,Week:()=>ED,WeekNumber:()=>kD,WeekNumberHeader:()=>AD,Weekday:()=>DD,Weekdays:()=>OD,Weeks:()=>jD,YearsDropdown:()=>MD});function PD(e,t,n=!1,r=$E){let{from:i,to:a}=e,{differenceInCalendarDays:o,isSameDay:s}=r;return i&&a?(o(a,i)<0&&([i,a]=[a,i]),o(t,i)>=+!!n&&o(a,t)>=+!!n):!n&&a?s(a,t):!n&&i?s(i,t):!1}function FD(e){return!!(e&&typeof e==`object`&&`before`in e&&`after`in e)}function ID(e){return!!(e&&typeof e==`object`&&`from`in e)}function LD(e){return!!(e&&typeof e==`object`&&`after`in e)}function RD(e){return!!(e&&typeof e==`object`&&`before`in e)}function zD(e){return!!(e&&typeof e==`object`&&`dayOfWeek`in e)}function BD(e,t){return Array.isArray(e)&&e.every(t.isDate)}function VD(e,t,n=$E){let r=Array.isArray(t)?t:[t],{isSameDay:i,differenceInCalendarDays:a,isAfter:o}=n;return r.some(t=>{if(typeof t==`boolean`)return t;if(n.isDate(t))return i(e,t);if(BD(t,n))return t.some(t=>i(e,t));if(ID(t))return PD(t,e,!1,n);if(zD(t))return Array.isArray(t.dayOfWeek)?t.dayOfWeek.includes(e.getDay()):t.dayOfWeek===e.getDay();if(FD(t)){let n=a(t.before,e),r=a(t.after,e),i=n>0,s=r<0;return o(t.before,t.after)?s&&i:i||s}return LD(t)?a(e,t.after)>0:RD(t)?a(t.before,e)>0:typeof t==`function`&&t(e)})}function HD(e,t,n,r,i){let{disabled:a,hidden:o,modifiers:s,showOutsideDays:c,broadcastCalendar:l,today:u=i.today()}=t,{isSameDay:d,isSameMonth:f,startOfMonth:p,isBefore:m,endOfMonth:h,isAfter:g}=i,_=n&&p(n),v=r&&h(r),y={[sD.focused]:[],[sD.outside]:[],[sD.disabled]:[],[sD.hidden]:[],[sD.today]:[]},b={};for(let t of e){let{date:e,displayMonth:n}=t,r=!(!n||f(e,n)),p=!!(_&&m(e,_)),h=!!(v&&g(e,v)),x=!!(a&&VD(e,a,i)),S=!!(o&&VD(e,o,i))||p||h||!l&&!c&&r||l&&c===!1&&r,C=d(e,u);r&&y.outside.push(t),x&&y.disabled.push(t),S&&y.hidden.push(t),C&&y.today.push(t),s&&Object.keys(s).forEach(n=>{let r=s?.[n];r&&VD(e,r,i)&&(b[n]?b[n].push(t):b[n]=[t])})}return e=>{let t={[sD.focused]:!1,[sD.disabled]:!1,[sD.hidden]:!1,[sD.outside]:!1,[sD.today]:!1},n={};for(let n in y)t[n]=y[n].some(t=>t===e);for(let t in b)n[t]=b[t].some(t=>t===e);return{...t,...n}}}function UD(e,t,n={}){return Object.entries(e).filter(([,e])=>e===!0).reduce((e,[r])=>(n[r]?e.push(n[r]):t[sD[r]]?e.push(t[sD[r]]):t[cD[r]]&&e.push(t[cD[r]]),e),[t[$.Day]])}function WD(e){return{...ND,...e}}function GD(e){let t={"data-mode":e.mode??void 0,"data-required":`required`in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([e,n])=>{e.startsWith(`data-`)&&(t[e]=n)}),t}function KD(){let e={};for(let t in $)e[$[t]]=`rdp-${$[t]}`;for(let t in sD)e[sD[t]]=`rdp-${sD[t]}`;for(let t in cD)e[cD[t]]=`rdp-${cD[t]}`;for(let t in lD)e[lD[t]]=`rdp-${lD[t]}`;return e}function qD(e,t,n){return(n??new QE(t)).formatMonthYear(e)}function JD(e,t,n){return(n??new QE(t)).format(e,`d`)}function YD(e,t=$E){return t.format(e,`LLLL`)}function XD(e,t,n){return(n??new QE(t)).format(e,`cccccc`)}function ZD(e,t=$E){return e<10?t.formatNumber(`0${e.toLocaleString()}`):t.formatNumber(`${e.toLocaleString()}`)}function QD(){return``}function $D(e,t=$E){return t.format(e,`yyyy`)}var eO=s({formatCaption:()=>qD,formatDay:()=>JD,formatMonthDropdown:()=>YD,formatWeekNumber:()=>ZD,formatWeekNumberHeader:()=>QD,formatWeekdayName:()=>XD,formatYearDropdown:()=>$D});function tO(e){return{...eO,...e}}function nO(e,t,n,r){let i=(r??new QE(n)).format(e,`PPPP`);return t.today&&(i=`Today, ${i}`),t.selected&&(i=`${i}, selected`),i}function rO(e,t,n){return(n??new QE(t)).formatMonthYear(e)}function iO(e,t,n,r){let i=(r??new QE(n)).format(e,`PPPP`);return t?.today&&(i=`Today, ${i}`),i}function aO(e){return`Choose the Month`}function oO(){return``}var sO=`Go to the Next Month`;function cO(e,t){return sO}function lO(e){return`Go to the Previous Month`}function uO(e,t,n){return(n??new QE(t)).format(e,`cccc`)}function dO(e,t){return`Week ${e}`}function fO(e){return`Week Number`}function pO(e){return`Choose the Year`}var mO=s({labelDayButton:()=>nO,labelGrid:()=>rO,labelGridcell:()=>iO,labelMonthDropdown:()=>aO,labelNav:()=>oO,labelNext:()=>cO,labelPrevious:()=>lO,labelWeekNumber:()=>dO,labelWeekNumberHeader:()=>fO,labelWeekday:()=>uO,labelYearDropdown:()=>pO}),hO=(e,t,n)=>t||(n?typeof n==`function`?n:(...e)=>n:e);function gO(e,t){let n=t.locale?.labels??{};return{...mO,...e??{},labelDayButton:hO(nO,e?.labelDayButton,n.labelDayButton),labelMonthDropdown:hO(aO,e?.labelMonthDropdown,n.labelMonthDropdown),labelNext:hO(cO,e?.labelNext,n.labelNext),labelPrevious:hO(lO,e?.labelPrevious,n.labelPrevious),labelWeekNumber:hO(dO,e?.labelWeekNumber,n.labelWeekNumber),labelYearDropdown:hO(pO,e?.labelYearDropdown,n.labelYearDropdown),labelGrid:hO(rO,e?.labelGrid,n.labelGrid),labelGridcell:hO(iO,e?.labelGridcell,n.labelGridcell),labelNav:hO(oO,e?.labelNav,n.labelNav),labelWeekNumberHeader:hO(fO,e?.labelWeekNumberHeader,n.labelWeekNumberHeader),labelWeekday:hO(uO,e?.labelWeekday,n.labelWeekday)}}function _O(e,t,n,r,i){let{startOfMonth:a,startOfYear:o,endOfYear:s,eachMonthOfInterval:c,getMonth:l}=i;return c({start:o(e),end:s(e)}).map(e=>{let o=r.formatMonthDropdown(e,i);return{value:l(e),label:o,disabled:t&&e<a(t)||n&&e>a(n)||!1}})}function vO(e,t={},n={}){let r={...t?.[$.Day]};return Object.entries(e).filter(([,e])=>e===!0).forEach(([e])=>{r={...r,...n?.[e]}}),r}function yO(e,t,n,r){let i=r??e.today(),a=n?e.startOfBroadcastWeek(i,e):t?e.startOfISOWeek(i):e.startOfWeek(i),o=[];for(let t=0;t<7;t++){let n=e.addDays(a,t);o.push(n)}return o}function bO(e,t,n,r,i=!1){if(!e||!t)return;let{startOfYear:a,endOfYear:o,eachYearOfInterval:s,getYear:c}=r,l=s({start:a(e),end:o(t)});return i&&l.reverse(),l.map(e=>{let t=n.formatYearDropdown(e,r);return{value:c(e),label:t,disabled:!1}})}function xO(e,t={}){let{weekStartsOn:n,locale:r}=t,i=n??r?.options?.weekStartsOn??0,a=t=>{let n=typeof t==`number`||typeof t==`string`?new Date(t):t;return new GE(n.getFullYear(),n.getMonth(),n.getDate(),12,0,0,e)},o=e=>{let t=a(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)};return{today:()=>a(GE.tz(e)),newDate:(t,n,r)=>new GE(t,n,r,12,0,0,e),startOfDay:e=>a(e),startOfWeek:(e,t)=>{let n=a(e),r=t?.weekStartsOn??i,o=(n.getDay()-r+7)%7;return n.setDate(n.getDate()-o),n},startOfISOWeek:e=>{let t=a(e),n=(t.getDay()-1+7)%7;return t.setDate(t.getDate()-n),t},startOfMonth:e=>{let t=a(e);return t.setDate(1),t},startOfYear:e=>{let t=a(e);return t.setMonth(0,1),t},endOfWeek:(e,t)=>{let n=a(e),r=(((t?.weekStartsOn??i)+6)%7-n.getDay()+7)%7;return n.setDate(n.getDate()+r),n},endOfISOWeek:e=>{let t=a(e),n=(7-t.getDay())%7;return t.setDate(t.getDate()+n),t},endOfMonth:e=>{let t=a(e);return t.setMonth(t.getMonth()+1,0),t},endOfYear:e=>{let t=a(e);return t.setMonth(11,31),t},eachMonthOfInterval:t=>{let n=a(t.start),r=a(t.end),i=[],o=new GE(n.getFullYear(),n.getMonth(),1,12,0,0,e),s=r.getFullYear()*12+r.getMonth();for(;o.getFullYear()*12+o.getMonth()<=s;)i.push(new GE(o,e)),o.setMonth(o.getMonth()+1,1);return i},addDays:(e,t)=>{let n=a(e);return n.setDate(n.getDate()+t),n},addWeeks:(e,t)=>{let n=a(e);return n.setDate(n.getDate()+t*7),n},addMonths:(e,t)=>{let n=a(e);return n.setMonth(n.getMonth()+t),n},addYears:(e,t)=>{let n=a(e);return n.setFullYear(n.getFullYear()+t),n},eachYearOfInterval:t=>{let n=a(t.start),r=a(t.end),i=[],o=new GE(n.getFullYear(),0,1,12,0,0,e);for(;o.getFullYear()<=r.getFullYear();)i.push(new GE(o,e)),o.setFullYear(o.getFullYear()+1,0,1);return i},getWeek:(e,t)=>Rw(o(e),{weekStartsOn:t?.weekStartsOn??i,firstWeekContainsDate:t?.firstWeekContainsDate??r?.options?.firstWeekContainsDate??1}),getISOWeek:e=>Fw(o(e)),differenceInCalendarDays:(e,t)=>nw(o(e),o(t)),differenceInCalendarMonths:(e,t)=>dw(o(e),o(t))}}var SO=e=>e instanceof HTMLElement?e:null,CO=e=>[...e.querySelectorAll(`[data-animated-month]`)??[]],wO=e=>SO(e.querySelector(`[data-animated-month]`)),TO=e=>SO(e.querySelector(`[data-animated-caption]`)),EO=e=>SO(e.querySelector(`[data-animated-weeks]`)),DO=e=>SO(e.querySelector(`[data-animated-nav]`)),OO=e=>SO(e.querySelector(`[data-animated-weekdays]`));function kO(e,t,{classNames:n,months:r,focused:i,dateLib:a}){let o=(0,v.useRef)(null),s=(0,v.useRef)(r),c=(0,v.useRef)(!1);(0,v.useLayoutEffect)(()=>{let l=s.current;if(s.current=r,!t||!e.current||!(e.current instanceof HTMLElement)||r.length===0||l.length===0||r.length!==l.length)return;let u=a.isSameMonth(r[0].date,l[0].date),d=a.isAfter(r[0].date,l[0].date),f=d?n[lD.caption_after_enter]:n[lD.caption_before_enter],p=d?n[lD.weeks_after_enter]:n[lD.weeks_before_enter],m=o.current,h=e.current.cloneNode(!0);if(h instanceof HTMLElement?(CO(h).forEach(e=>{if(!(e instanceof HTMLElement))return;let t=wO(e);t&&e.contains(t)&&e.removeChild(t);let n=TO(e);n&&n.classList.remove(f);let r=EO(e);r&&r.classList.remove(p)}),o.current=h):o.current=null,c.current||u||i)return;let g=m instanceof HTMLElement?CO(m):[],_=CO(e.current);if(_?.every(e=>e instanceof HTMLElement)&&g?.every(e=>e instanceof HTMLElement)){c.current=!0;let t=[];e.current.style.isolation=`isolate`;let r=DO(e.current);r&&(r.style.zIndex=`1`),_.forEach((i,a)=>{let o=g[a];if(!o)return;i.style.position=`relative`,i.style.overflow=`hidden`;let s=TO(i);s&&s.classList.add(f);let l=EO(i);l&&l.classList.add(p);let u=()=>{c.current=!1,e.current&&(e.current.style.isolation=``),r&&(r.style.zIndex=``),s&&s.classList.remove(f),l&&l.classList.remove(p),i.style.position=``,i.style.overflow=``,i.contains(o)&&i.removeChild(o)};t.push(u),o.style.pointerEvents=`none`,o.style.position=`absolute`,o.style.overflow=`hidden`,o.setAttribute(`aria-hidden`,`true`);let m=OO(o);m&&(m.style.opacity=`0`);let h=TO(o);h&&(h.classList.add(d?n[lD.caption_before_exit]:n[lD.caption_after_exit]),h.addEventListener(`animationend`,u));let _=EO(o);_&&_.classList.add(d?n[lD.weeks_before_exit]:n[lD.weeks_after_exit]),i.insertBefore(o,i.firstChild)})}})}function AO(e,t,n,r){let i=e[0],a=e[e.length-1],{ISOWeek:o,fixedWeeks:s,broadcastCalendar:c}=n??{},{addDays:l,differenceInCalendarDays:u,differenceInCalendarMonths:d,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:m,endOfWeek:h,isAfter:g,startOfBroadcastWeek:_,startOfISOWeek:v,startOfWeek:y}=r,b=c?_(i,r):o?v(i):y(i),x=c?f(a):o?p(m(a)):h(m(a)),S=t&&(c?f(t):o?p(t):h(t)),C=u(S&&g(x,S)?S:x,b),w=d(a,i)+1,T=[];for(let e=0;e<=C;e++){let t=l(b,e);T.push(t)}let ee=(c?35:42)*w;if(s&&T.length<ee){let e=ee-T.length;for(let t=0;t<e;t++){let e=l(T[T.length-1],1);T.push(e)}}return T}function jO(e){let t=[];return e.reduce((e,n)=>{let r=n.weeks.reduce((e,t)=>e.concat(t.days.slice()),t.slice());return e.concat(r.slice())},t.slice())}function MO(e,t,n,r){let{numberOfMonths:i=1}=n,a=[];for(let n=0;n<i;n++){let i=r.addMonths(e,n);if(t&&i>t)break;a.push(i)}return a}function NO(e,t,n,r){let{month:i,defaultMonth:a,today:o=r.today(),numberOfMonths:s=1}=e,c=i||a||o,{differenceInCalendarMonths:l,addMonths:u,startOfMonth:d}=r;return n&&l(n,c)<s-1&&(c=u(n,-1*(s-1))),t&&l(c,t)<0&&(c=t),d(c)}function PO(e,t,n,r){let{addDays:i,endOfBroadcastWeek:a,endOfISOWeek:o,endOfMonth:s,endOfWeek:c,getISOWeek:l,getWeek:u,startOfBroadcastWeek:d,startOfISOWeek:f,startOfWeek:p}=r,m=e.reduce((e,m)=>{let h=n.broadcastCalendar?d(m,r):n.ISOWeek?f(m):p(m),g=n.broadcastCalendar?a(m):n.ISOWeek?o(s(m)):c(s(m)),_=t.filter(e=>e>=h&&e<=g),v=n.broadcastCalendar?35:42;if(n.fixedWeeks&&_.length<v){let e=t.filter(e=>{let t=v-_.length;return e>g&&e<=i(g,t)});_.push(...e)}let y=new tD(m,_.reduce((e,t)=>{let i=n.ISOWeek?l(t):u(t),a=e.find(e=>e.weekNumber===i),o=new eD(t,m,r);return a?a.days.push(o):e.push(new nD(i,[o])),e},[]));return e.push(y),e},[]);return n.reverseMonths?m.reverse():m}function FO(e,t){let{startMonth:n,endMonth:r}=e,{startOfYear:i,startOfDay:a,startOfMonth:o,endOfMonth:s,addYears:c,endOfYear:l,today:u}=t,d=e.captionLayout===`dropdown`||e.captionLayout===`dropdown-years`;return n?n=o(n):!n&&d&&(n=i(c(e.today??u(),-100))),r?r=s(r):!r&&d&&(r=l(e.today??u())),[n&&a(n),r&&a(r)]}function IO(e,t,n,r){if(n.disableNavigation)return;let{pagedNavigation:i,numberOfMonths:a=1}=n,{startOfMonth:o,addMonths:s,differenceInCalendarMonths:c}=r,l=i?a:1,u=o(e);if(!t||!(c(t,e)<a))return s(u,l)}function LO(e,t,n,r){if(n.disableNavigation)return;let{pagedNavigation:i,numberOfMonths:a}=n,{startOfMonth:o,addMonths:s,differenceInCalendarMonths:c}=r,l=i?a??1:1,u=o(e);if(!t||!(c(u,t)<=0))return s(u,-l)}function RO(e){return e.reduce((e,t)=>e.concat(t.weeks.slice()),[].slice())}function zO(e,t){let[n,r]=(0,v.useState)(e);return[t===void 0?n:t,r]}function BO(e,t){let[n,r]=FO(e,t),{startOfMonth:i,endOfMonth:a}=t,o=NO(e,n,r,t),[s,c]=zO(o,e.month?o:void 0);(0,v.useEffect)(()=>{let i=NO(e,n,r,t);c(i)},[e.timeZone]);let{months:l,weeks:u,days:d,previousMonth:f,nextMonth:p}=(0,v.useMemo)(()=>{let i=MO(s,r,{numberOfMonths:e.numberOfMonths},t),o=PO(i,AO(i,e.endMonth?a(e.endMonth):void 0,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t),{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);return{months:o,weeks:RO(o),days:jO(o),previousMonth:LO(s,n,e,t),nextMonth:IO(s,r,e,t)}},[t,s.getTime(),r?.getTime(),n?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]),{disableNavigation:m,onMonthChange:h}=e,g=e=>u.some(t=>t.days.some(t=>t.isEqualTo(e))),_=e=>{if(m)return;let t=i(e);n&&t<i(n)&&(t=i(n)),r&&t>i(r)&&(t=i(r)),c(t),h?.(t)};return{months:l,weeks:u,days:d,navStart:n,navEnd:r,previousMonth:f,nextMonth:p,goToMonth:_,goToDay:e=>{g(e)||_(e.date)}}}var VO;(function(e){e[e.Today=0]=`Today`,e[e.Selected=1]=`Selected`,e[e.LastFocused=2]=`LastFocused`,e[e.FocusedModifier=3]=`FocusedModifier`})(VO||={});function HO(e){return!e[sD.disabled]&&!e[sD.hidden]&&!e[sD.outside]}function UO(e,t,n,r){let i,a=-1;for(let o of e){let e=t(o);HO(e)&&(e[sD.focused]&&a<VO.FocusedModifier?(i=o,a=VO.FocusedModifier):r?.isEqualTo(o)&&a<VO.LastFocused?(i=o,a=VO.LastFocused):n(o.date)&&a<VO.Selected?(i=o,a=VO.Selected):e[sD.today]&&a<VO.Today&&(i=o,a=VO.Today))}return i||=e.find(e=>HO(t(e))),i}function WO(e,t,n,r,i,a,o){let{ISOWeek:s,broadcastCalendar:c}=a,{addDays:l,addMonths:u,addWeeks:d,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:m,endOfWeek:h,max:g,min:_,startOfBroadcastWeek:v,startOfISOWeek:y,startOfWeek:b}=o,x={day:l,week:d,month:u,year:f,startOfWeek:e=>c?v(e,o):s?y(e):b(e),endOfWeek:e=>c?p(e):s?m(e):h(e)}[e](n,t===`after`?1:-1);return t===`before`&&r?x=g([r,x]):t===`after`&&i&&(x=_([i,x])),x}function GO(e,t,n,r,i,a,o,s=0){if(s>365)return;let c=WO(e,t,n.date,r,i,a,o),l=!!(a.disabled&&VD(c,a.disabled,o)),u=!!(a.hidden&&VD(c,a.hidden,o)),d=new eD(c,c,o);return!l&&!u?d:GO(e,t,d,r,i,a,o,s+1)}function KO(e,t,n,r,i){let{autoFocus:a}=e,[o,s]=(0,v.useState)(),c=UO(t.days,n,r||(()=>!1),o),[l,u]=(0,v.useState)(a?c:void 0);return(0,v.useEffect)(()=>{l&&c&&(t.days.some(e=>e.isEqualTo(l))||u(c))},[t.days,l,c]),{isFocusTarget:e=>!!c?.isEqualTo(e),setFocused:u,focused:l,blur:()=>{s(l),u(void 0)},moveFocus:(n,r)=>{if(!l)return;let a=GO(n,r,l,t.navStart,t.navEnd,e,i);a&&(!e.disableNavigation||t.days.some(e=>e.isEqualTo(a)))&&(t.goToDay(a),u(a))}}}function qO(e,t){let{selected:n,required:r,onSelect:i}=e,[a,o]=zO(n,i?n:void 0),s=i?n:a,{isSameDay:c}=t,l=e=>s?.some(t=>c(t,e))??!1,{min:u,max:d}=e;return{selected:s,select:(e,t,n)=>{let a=[...s??[]];if(l(e)){if(s?.length===u||r&&s?.length===1)return;a=s?.filter(t=>!c(t,e))}else a=s?.length===d?[e]:[...a,e];return i||o(a),i?.(a,e,t,n),a},isSelected:l}}function JO(e,t,n=0,r=0,i=!1,a=$E){let{from:o,to:s}=t||{},{isSameDay:c,isAfter:l,isBefore:u}=a,d;if(!o&&!s)d={from:e,to:n>0?void 0:e};else if(o&&!s)d=c(o,e)?n===0?{from:o,to:e}:i?{from:o,to:void 0}:void 0:u(e,o)?{from:e,to:o}:{from:o,to:e};else if(o&&s){if(c(o,e)&&c(s,e))d=i?{from:o,to:s}:void 0;else if(c(o,e))d={from:o,to:n>0?void 0:e};else if(c(s,e))d={from:e,to:n>0?void 0:e};else if(u(e,o))d={from:e,to:s};else if(l(e,o))d={from:o,to:e};else if(l(e,s))d={from:o,to:e};else throw Error(`Invalid range`)}if(d?.from&&d?.to){let t=a.differenceInCalendarDays(d.to,d.from);(r>0&&t>r||n>1&&t<n)&&(d={from:e,to:void 0})}return d}function YO(e,t,n=$E){let r=Array.isArray(t)?t:[t],i=e.from,a=n.differenceInCalendarDays(e.to,e.from),o=Math.min(a,6);for(let e=0;e<=o;e++){if(r.includes(i.getDay()))return!0;i=n.addDays(i,1)}return!1}function XO(e,t,n=$E){return PD(e,t.from,!1,n)||PD(e,t.to,!1,n)||PD(t,e.from,!1,n)||PD(t,e.to,!1,n)}function ZO(e,t,n=$E){let r=Array.isArray(t)?t:[t];if(r.filter(e=>typeof e!=`function`).some(t=>typeof t==`boolean`?t:n.isDate(t)?PD(e,t,!1,n):BD(t,n)?t.some(t=>PD(e,t,!1,n)):ID(t)?t.from&&t.to?XO(e,{from:t.from,to:t.to},n):!1:zD(t)?YO(e,t.dayOfWeek,n):FD(t)?n.isAfter(t.before,t.after)?XO(e,{from:n.addDays(t.after,1),to:n.addDays(t.before,-1)},n):VD(e.from,t,n)||VD(e.to,t,n):LD(t)||RD(t)?VD(e.from,t,n)||VD(e.to,t,n):!1))return!0;let i=r.filter(e=>typeof e==`function`);if(i.length){let t=e.from,r=n.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=r;e++){if(i.some(e=>e(t)))return!0;t=n.addDays(t,1)}}return!1}function QO(e,t){let{disabled:n,excludeDisabled:r,resetOnSelect:i,selected:a,required:o,onSelect:s}=e,[c,l]=zO(a,s?a:void 0),u=s?a:c;return{selected:u,select:(a,c,d)=>{let{min:f,max:p}=e,m;if(a){let e=u?.from,n=u?.to,r=!!e&&!!n,s=!!e&&!!n&&t.isSameDay(e,n)&&t.isSameDay(a,e);m=i&&(r||!u?.from)?!o&&s?void 0:{from:a,to:void 0}:JO(a,u,f,p,o,t)}return r&&n&&m?.from&&m.to&&ZO({from:m.from,to:m.to},n,t)&&(m.from=a,m.to=void 0),s||l(m),s?.(m,a,c,d),m},isSelected:e=>u&&PD(u,e,!1,t)}}function $O(e,t){let{selected:n,required:r,onSelect:i}=e,[a,o]=zO(n,i?n:void 0),s=i?n:a,{isSameDay:c}=t;return{selected:s,select:(e,t,n)=>{let a=e;return!r&&s&&s&&c(e,s)&&(a=void 0),i||o(a),i?.(a,e,t,n),a},isSelected:e=>s?c(s,e):!1}}function ek(e,t){let n=$O(e,t),r=qO(e,t),i=QO(e,t);switch(e.mode){case`single`:return n;case`multiple`:return r;case`range`:return i;default:return}}function tk(e,t){return e instanceof GE&&e.timeZone===t?e:new GE(e,t)}function nk(e,t,n){if(!n)return tk(e,t);let r=tk(e,t),i=new GE(r.getFullYear(),r.getMonth(),r.getDate(),12,0,0,t);return new Date(i.getTime())}function rk(e,t,n){return typeof e==`boolean`||typeof e==`function`?e:e instanceof Date?nk(e,t,n):Array.isArray(e)?e.map(e=>e instanceof Date?nk(e,t,n):e):ID(e)?{...e,from:e.from?tk(e.from,t):e.from,to:e.to?tk(e.to,t):e.to}:FD(e)?{before:nk(e.before,t,n),after:nk(e.after,t,n)}:LD(e)?{after:nk(e.after,t,n)}:RD(e)?{before:nk(e.before,t,n)}:e}function ik(e,t,n){return e&&(Array.isArray(e)?e.map(e=>rk(e,t,n)):rk(e,t,n))}function ak(e){let t=e,n=t.timeZone;if(n&&(t={...e,timeZone:n},t.today&&(t.today=tk(t.today,n)),t.month&&(t.month=tk(t.month,n)),t.defaultMonth&&(t.defaultMonth=tk(t.defaultMonth,n)),t.startMonth&&(t.startMonth=tk(t.startMonth,n)),t.endMonth&&(t.endMonth=tk(t.endMonth,n)),t.mode===`single`&&t.selected?t.selected=tk(t.selected,n):t.mode===`multiple`&&t.selected?t.selected=t.selected?.map(e=>tk(e,n)):t.mode===`range`&&t.selected&&(t.selected={from:t.selected.from?tk(t.selected.from,n):t.selected.from,to:t.selected.to?tk(t.selected.to,n):t.selected.to}),t.disabled!==void 0&&(t.disabled=ik(t.disabled,n)),t.hidden!==void 0&&(t.hidden=ik(t.hidden,n)),t.modifiers)){let e={};Object.keys(t.modifiers).forEach(r=>{e[r]=ik(t.modifiers?.[r],n)}),t.modifiers=e}let{components:r,formatters:i,labels:a,dateLib:o,locale:s,classNames:c}=(0,v.useMemo)(()=>{let e={...ZE,...t.locale},n=t.broadcastCalendar?1:t.weekStartsOn,r=t.noonSafe&&t.timeZone?xO(t.timeZone,{weekStartsOn:n,locale:e}):void 0,i=t.dateLib&&r?{...r,...t.dateLib}:t.dateLib??r,a=new QE({locale:e,weekStartsOn:n,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},i);return{dateLib:a,components:WD(t.components),formatters:tO(t.formatters),labels:gO(t.labels,a.options),locale:e,classNames:{...KD(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.noonSafe,t.components,t.formatters,t.labels,t.classNames]);t.today||(t={...t,today:o.today()});let{captionLayout:l,mode:u,navLayout:d,numberOfMonths:f=1,onDayBlur:p,onDayClick:m,onDayFocus:h,onDayKeyDown:g,onDayMouseEnter:_,onDayMouseLeave:y,onNextClick:b,onPrevClick:x,showWeekNumber:S,styles:C}=t,{formatCaption:w,formatDay:T,formatMonthDropdown:ee,formatWeekNumber:E,formatWeekNumberHeader:D,formatWeekdayName:O,formatYearDropdown:k}=i,A=BO(t,o),{days:j,months:te,navStart:M,navEnd:N,previousMonth:P,nextMonth:F,goToMonth:ne}=A,re=HD(j,t,M,N,o),{isSelected:ie,select:ae,selected:oe}=ek(t,o)??{},{blur:se,focused:ce,isFocusTarget:le,moveFocus:ue,setFocused:de}=KO(t,A,re,ie??(()=>!1),o),{labelDayButton:fe,labelGridcell:pe,labelGrid:me,labelMonthDropdown:I,labelNav:L,labelPrevious:he,labelNext:ge,labelWeekday:_e,labelWeekNumber:ve,labelWeekNumberHeader:ye,labelYearDropdown:be}=a,xe=(0,v.useMemo)(()=>yO(o,t.ISOWeek,t.broadcastCalendar,t.today),[o,t.ISOWeek,t.broadcastCalendar,t.today]),Se=u!==void 0||m!==void 0,Ce=(0,v.useCallback)(()=>{P&&(ne(P),x?.(P))},[P,ne,x]),we=(0,v.useCallback)(()=>{F&&(ne(F),b?.(F))},[ne,F,b]),Te=(0,v.useCallback)((e,t)=>n=>{n.preventDefault(),n.stopPropagation(),de(e),!t.disabled&&(ae?.(e.date,t,n),m?.(e.date,t,n))},[ae,m,de]),Ee=(0,v.useCallback)((e,t)=>n=>{de(e),h?.(e.date,t,n)},[h,de]),De=(0,v.useCallback)((e,t)=>n=>{se(),p?.(e.date,t,n)},[se,p]),Oe=(0,v.useCallback)((e,n)=>r=>{let i={ArrowLeft:[r.shiftKey?`month`:`day`,t.dir===`rtl`?`after`:`before`],ArrowRight:[r.shiftKey?`month`:`day`,t.dir===`rtl`?`before`:`after`],ArrowDown:[r.shiftKey?`year`:`week`,`after`],ArrowUp:[r.shiftKey?`year`:`week`,`before`],PageUp:[r.shiftKey?`year`:`month`,`before`],PageDown:[r.shiftKey?`year`:`month`,`after`],Home:[`startOfWeek`,`before`],End:[`endOfWeek`,`after`]};if(i[r.key]){r.preventDefault(),r.stopPropagation();let[e,t]=i[r.key];ue(e,t)}g?.(e.date,n,r)},[ue,g,t.dir]),ke=(0,v.useCallback)((e,t)=>n=>{_?.(e.date,t,n)},[_]),Ae=(0,v.useCallback)((e,t)=>n=>{y?.(e.date,t,n)},[y]),je=(0,v.useCallback)((e,t)=>n=>{let r=Number(n.target.value),i=o.setMonth(o.startOfMonth(e),r);ne(o.addMonths(i,-t))},[o,ne]),Me=(0,v.useCallback)((e,t)=>n=>{let r=Number(n.target.value),i=o.setYear(o.startOfMonth(e),r);ne(o.addMonths(i,-t))},[o,ne]),{className:Ne,style:Pe}=(0,v.useMemo)(()=>({className:[c[$.Root],t.className].filter(Boolean).join(` `),style:{...C?.[$.Root],...t.style}}),[c,t.className,t.style,C]),Fe=GD(t),Ie=e=>{let t=C?.[$.Dropdown],n=C?.[e];if(t||n)return{...t,...n}},Le=(0,v.useRef)(null);kO(Le,!!t.animate,{classNames:c,months:te,focused:ce,dateLib:o});let Re={dayPickerProps:t,selected:oe,select:ae,isSelected:ie,months:te,nextMonth:F,previousMonth:P,goToMonth:ne,getModifiers:re,components:r,classNames:c,styles:C,labels:a,formatters:i};return v.createElement(uD.Provider,{value:Re},v.createElement(r.Root,{rootRef:t.animate?Le:void 0,className:Ne,style:Pe,dir:t.dir,id:t.id,lang:t.lang??s.code,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t[`aria-label`],"aria-labelledby":t[`aria-labelledby`],...Fe},v.createElement(r.Months,{className:c[$.Months],style:C?.[$.Months]},!t.hideNavigation&&!d&&v.createElement(r.Nav,{"data-animated-nav":t.animate?`true`:void 0,className:c[$.Nav],style:C?.[$.Nav],"aria-label":L(),onPreviousClick:Ce,onNextClick:we,previousMonth:P,nextMonth:F}),te.map((e,n)=>{let a=t.reverseMonths?te.length-1-n:n;return v.createElement(r.Month,{"data-animated-month":t.animate?`true`:void 0,className:c[$.Month],style:C?.[$.Month],key:n,displayIndex:n,calendarMonth:e},d===`around`&&!t.hideNavigation&&n===0&&v.createElement(r.PreviousMonthButton,{type:`button`,className:c[$.PreviousMonthButton],style:C?.[$.PreviousMonthButton],tabIndex:P?void 0:-1,"aria-disabled":!P||void 0,"aria-label":he(P),onClick:Ce,"data-animated-button":t.animate?`true`:void 0},v.createElement(r.Chevron,{disabled:!P||void 0,className:c[$.Chevron],style:C?.[$.Chevron],orientation:t.dir===`rtl`?`right`:`left`})),v.createElement(r.MonthCaption,{"data-animated-caption":t.animate?`true`:void 0,className:c[$.MonthCaption],style:C?.[$.MonthCaption],calendarMonth:e,displayIndex:n},l?.startsWith(`dropdown`)?v.createElement(r.DropdownNav,{className:c[$.Dropdowns],style:C?.[$.Dropdowns]},(()=>{let n=l===`dropdown`||l===`dropdown-months`?v.createElement(r.MonthsDropdown,{key:`month`,className:c[$.MonthsDropdown],"aria-label":I(),disabled:!!t.disableNavigation,onChange:je(e.date,a),options:_O(e.date,M,N,i,o),style:Ie($.MonthsDropdown),value:o.getMonth(e.date)}):v.createElement(`span`,{key:`month`},ee(e.date,o)),s=l===`dropdown`||l===`dropdown-years`?v.createElement(r.YearsDropdown,{key:`year`,className:c[$.YearsDropdown],"aria-label":be(o.options),disabled:!!t.disableNavigation,onChange:Me(e.date,a),options:bO(M,N,i,o,!!t.reverseYears),style:Ie($.YearsDropdown),value:o.getYear(e.date)}):v.createElement(`span`,{key:`year`},k(e.date,o));return o.getMonthYearOrder()===`year-first`?[s,n]:[n,s]})(),v.createElement(`span`,{role:`status`,"aria-live":`polite`,style:{border:0,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`absolute`,width:`1px`,whiteSpace:`nowrap`,wordWrap:`normal`}},w(e.date,o.options,o))):v.createElement(r.CaptionLabel,{className:c[$.CaptionLabel],style:C?.[$.CaptionLabel],role:`status`,"aria-live":`polite`},w(e.date,o.options,o))),d===`around`&&!t.hideNavigation&&n===f-1&&v.createElement(r.NextMonthButton,{type:`button`,className:c[$.NextMonthButton],style:C?.[$.NextMonthButton],tabIndex:F?void 0:-1,"aria-disabled":!F||void 0,"aria-label":ge(F),onClick:we,"data-animated-button":t.animate?`true`:void 0},v.createElement(r.Chevron,{disabled:!F||void 0,className:c[$.Chevron],style:C?.[$.Chevron],orientation:t.dir===`rtl`?`left`:`right`})),n===f-1&&d===`after`&&!t.hideNavigation&&v.createElement(r.Nav,{"data-animated-nav":t.animate?`true`:void 0,className:c[$.Nav],style:C?.[$.Nav],"aria-label":L(),onPreviousClick:Ce,onNextClick:we,previousMonth:P,nextMonth:F}),v.createElement(r.MonthGrid,{role:`grid`,"aria-multiselectable":u===`multiple`||u===`range`,"aria-label":me(e.date,o.options,o)||void 0,className:c[$.MonthGrid],style:C?.[$.MonthGrid]},!t.hideWeekdays&&v.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?`true`:void 0,className:c[$.Weekdays],style:C?.[$.Weekdays]},S&&v.createElement(r.WeekNumberHeader,{"aria-label":ye(o.options),className:c[$.WeekNumberHeader],style:C?.[$.WeekNumberHeader],scope:`col`},D()),xe.map(e=>v.createElement(r.Weekday,{"aria-label":_e(e,o.options,o),className:c[$.Weekday],key:String(e),style:C?.[$.Weekday],scope:`col`},O(e,o.options,o)))),v.createElement(r.Weeks,{"data-animated-weeks":t.animate?`true`:void 0,className:c[$.Weeks],style:C?.[$.Weeks]},e.weeks.map(e=>v.createElement(r.Week,{className:c[$.Week],key:e.weekNumber,style:C?.[$.Week],week:e},S&&v.createElement(r.WeekNumber,{week:e,style:C?.[$.WeekNumber],"aria-label":ve(e.weekNumber,{locale:s}),className:c[$.WeekNumber],scope:`row`,role:`rowheader`},E(e.weekNumber,o)),e.days.map(e=>{let{date:n}=e,i=re(e);if(i[sD.focused]=!i.hidden&&!!ce?.isEqualTo(e),i[cD.selected]=ie?.(n)||i.selected,ID(oe)){let{from:e,to:t}=oe;i[cD.range_start]=!!(e&&t&&o.isSameDay(n,e)),i[cD.range_end]=!!(e&&t&&o.isSameDay(n,t)),i[cD.range_middle]=PD(oe,n,!0,o)}let a=vO(i,C,t.modifiersStyles),s=UD(i,c,t.modifiersClassNames),l=!Se&&!i.hidden?pe(n,i,o.options,o):void 0;return v.createElement(r.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:i,className:s.join(` `),style:a,role:`gridcell`,"aria-selected":i.selected||void 0,"aria-label":l,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:void 0,"data-selected":i.selected||void 0,"data-disabled":i.disabled||void 0,"data-hidden":i.hidden||void 0,"data-outside":e.outside||void 0,"data-focused":i.focused||void 0,"data-today":i.today||void 0},!i.hidden&&Se?v.createElement(r.DayButton,{className:c[$.DayButton],style:C?.[$.DayButton],type:`button`,day:e,modifiers:i,disabled:!i.focused&&i.disabled||void 0,"aria-disabled":i.focused&&i.disabled||void 0,tabIndex:le(e)?0:-1,"aria-label":fe(n,i,o.options,o),onClick:Te(e,i),onBlur:De(e,i),onFocus:Ee(e,i),onKeyDown:Oe(e,i),onMouseEnter:ke(e,i),onMouseLeave:Ae(e,i)},T(n,o.options,o)):!i.hidden&&T(e.date,o.options,o))}))))))})),t.footer&&v.createElement(r.Footer,{className:c[$.Footer],style:C?.[$.Footer],role:`status`,"aria-live":`polite`},t.footer)))}function ok({className:e,classNames:t,showOutsideDays:n=!0,captionLayout:r=`label`,buttonVariant:i=`ghost`,formatters:a,components:o,...s}){let c=KD();return(0,U.jsx)(ak,{showOutsideDays:n,className:V(`group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent`,String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,e),captionLayout:r,formatters:{formatMonthDropdown:e=>e.toLocaleString(`default`,{month:`short`}),...a},classNames:{root:V(`w-fit`,c.root),months:V(`relative flex flex-col gap-4 md:flex-row`,c.months),month:V(`flex w-full flex-col gap-4`,c.month),nav:V(`absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1`,c.nav),button_previous:V(cx({variant:i}),`size-(--cell-size) p-0 select-none aria-disabled:opacity-50`,c.button_previous),button_next:V(cx({variant:i}),`size-(--cell-size) p-0 select-none aria-disabled:opacity-50`,c.button_next),month_caption:V(`flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)`,c.month_caption),dropdowns:V(`flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium`,c.dropdowns),dropdown_root:V(`relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50`,c.dropdown_root),dropdown:V(`absolute inset-0 bg-popover opacity-0`,c.dropdown),caption_label:V(`font-medium select-none`,r===`label`?`text-sm`:`flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground`,c.caption_label),month_grid:V(`w-full border-collapse`,c.month_grid),weekdays:V(`flex`,c.weekdays),weekday:V(`flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none`,c.weekday),week:V(`mt-2 flex w-full`,c.week),week_number_header:V(`w-(--cell-size) select-none`,c.week_number_header),week_number:V(`text-[0.8rem] text-muted-foreground select-none`,c.week_number),day:V(`group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md`,s.showWeekNumber?`[&:nth-child(2)[data-selected=true]_button]:rounded-l-md`:`[&:first-child[data-selected=true]_button]:rounded-l-md`,c.day),range_start:V(`rounded-l-md bg-accent`,c.range_start),range_middle:V(`rounded-none`,c.range_middle),range_end:V(`rounded-r-md bg-accent`,c.range_end),today:V(`rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none`,c.today),outside:V(`text-muted-foreground aria-selected:text-muted-foreground`,c.outside),disabled:V(`text-muted-foreground opacity-50`,c.disabled),hidden:V(`invisible`,c.hidden),...t},components:{Root:({className:e,rootRef:t,...n})=>(0,U.jsx)(`div`,{"data-slot":`calendar`,ref:t,className:V(e),...n}),Chevron:({className:e,orientation:t,...n})=>t===`left`?(0,U.jsx)(Re,{className:V(`size-4`,e),...n}):t===`right`?(0,U.jsx)(ze,{className:V(`size-4`,e),...n}):(0,U.jsx)(Le,{className:V(`size-4`,e),...n}),DayButton:sk,WeekNumber:({children:e,...t})=>(0,U.jsx)(`td`,{...t,children:(0,U.jsx)(`div`,{className:`flex size-(--cell-size) items-center justify-center text-center`,children:e})}),...o},...s})}function sk({className:e,day:t,modifiers:n,...r}){let i=KD(),a=v.useRef(null);return v.useEffect(()=>{n.focused&&a.current?.focus()},[n.focused]),(0,U.jsx)(Q,{ref:a,variant:`ghost`,size:`icon`,"data-day":t.date.toLocaleDateString(),"data-selected-single":n.selected&&!n.range_start&&!n.range_end&&!n.range_middle,"data-range-start":n.range_start,"data-range-end":n.range_end,"data-range-middle":n.range_middle,className:V(`flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70`,i.day,e),...r})}function ck({className:e,...t}){return(0,U.jsx)(`div`,{"data-slot":`table-container`,className:`relative w-full overflow-x-auto`,children:(0,U.jsx)(`table`,{"data-slot":`table`,className:V(`w-full caption-bottom text-sm`,e),...t})})}function lk({className:e,...t}){return(0,U.jsx)(`thead`,{"data-slot":`table-header`,className:V(`[&_tr]:border-b`,e),...t})}function uk({className:e,...t}){return(0,U.jsx)(`tbody`,{"data-slot":`table-body`,className:V(`[&_tr:last-child]:border-0`,e),...t})}function dk({className:e,...t}){return(0,U.jsx)(`tr`,{"data-slot":`table-row`,className:V(`border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted`,e),...t})}function fk({className:e,...t}){return(0,U.jsx)(`th`,{"data-slot":`table-head`,className:V(`h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,e),...t})}function pk({className:e,...t}){return(0,U.jsx)(`td`,{"data-slot":`table-cell`,className:V(`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,e),...t})}function mk({label:e,value:t,onChange:n,options:r}){let[i,a]=(0,v.useState)(!1),o=(0,v.useId)();return(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{id:o,children:e}),(0,U.jsxs)(OT,{open:i,onOpenChange:a,children:[(0,U.jsx)(kT,{asChild:!0,children:(0,U.jsxs)(Q,{variant:`outline`,role:`combobox`,"aria-labelledby":o,"aria-expanded":i,className:`justify-between`,children:[r.find(e=>e.value===t)?.label||`Seleziona`,(0,U.jsx)(Ve,{"aria-hidden":`true`})]})}),(0,U.jsx)(AT,{className:`p-0`,children:(0,U.jsxs)(EE,{children:[(0,U.jsx)(DE,{placeholder:`Cerca reparto…`,"aria-label":`Cerca reparto`}),(0,U.jsxs)(OE,{children:[(0,U.jsx)(kE,{children:`Nessun reparto trovato.`}),(0,U.jsx)(AE,{children:r.map(e=>(0,U.jsxs)(jE,{value:e.label,onSelect:()=>{n(e.value),a(!1)},children:[(0,U.jsx)(Ie,{"aria-hidden":`true`,className:t===e.value?`opacity-100`:`opacity-0`}),e.label]},e.value))})]})]})})]})]})}function hk({label:e,value:t,onChange:n}){let[r,i]=(0,v.useState)(!1),a=(0,v.useId)();return(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{id:a,children:e}),(0,U.jsxs)(OT,{open:r,onOpenChange:i,children:[(0,U.jsx)(kT,{asChild:!0,children:(0,U.jsxs)(Q,{"aria-labelledby":a,variant:`outline`,className:`justify-start`,children:[(0,U.jsx)(Fe,{"aria-hidden":`true`}),t?sT(t,`d MMMM yyyy`,{locale:DT}):`Scegli una data`]})}),(0,U.jsx)(AT,{className:`w-auto p-0`,children:(0,U.jsx)(ok,{locale:DT,mode:`single`,selected:t,onSelect:e=>{n(e),i(!1)}})})]})]})}function gk({rows:e,pageSize:t=5}){let[n,r]=(0,v.useState)(``),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(0),c=(0,v.useId)(),l=Math.max(1,t),u=(0,v.useMemo)(()=>e.filter(e=>`${e.title} ${e.department} ${e.status}`.toLocaleLowerCase(`it`).includes(n.toLocaleLowerCase(`it`))).sort((e,t)=>i?e.title.localeCompare(t.title,`it`):t.title.localeCompare(e.title,`it`)),[e,n,i]),d=Math.max(1,Math.ceil(u.length/l)),f=Math.min(o,d-1),p=u.slice(f*l,(f+1)*l);return(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-end justify-between gap-3`,children:[(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{htmlFor:c,children:`Cerca attività`}),(0,U.jsx)(Nx,{id:c,type:`search`,value:n,onChange:e=>{r(e.target.value),s(0)},placeholder:`Titolo, reparto o stato`,className:`max-w-sm`})]}),(0,U.jsxs)(`span`,{className:`text-sm text-muted-foreground`,role:`status`,children:[u.length,` attività`]})]}),(0,U.jsx)(`div`,{className:`rounded-lg border`,children:(0,U.jsxs)(ck,{children:[(0,U.jsx)(`caption`,{className:`sr-only`,children:`Attività del team con reparto e stato`}),(0,U.jsx)(lk,{children:(0,U.jsxs)(dk,{children:[(0,U.jsx)(fk,{"aria-sort":i?`ascending`:`descending`,children:(0,U.jsxs)(Q,{variant:`ghost`,onClick:()=>{a(!i),s(0)},children:[`Attività`,i?(0,U.jsx)(Pe,{"aria-hidden":`true`}):(0,U.jsx)(je,{"aria-hidden":`true`})]})}),(0,U.jsx)(fk,{children:`Reparto`}),(0,U.jsx)(fk,{children:`Stato`})]})}),(0,U.jsx)(uk,{children:p.length?p.map(e=>(0,U.jsxs)(dk,{children:[(0,U.jsx)(pk,{className:`font-medium`,children:e.title}),(0,U.jsx)(pk,{children:e.department}),(0,U.jsx)(pk,{children:(0,U.jsx)(Cx,{tone:e.status===`Completato`?`success`:e.status===`In corso`?`info`:`neutral`,children:e.status})})]},e.id)):(0,U.jsx)(dk,{children:(0,U.jsx)(pk,{colSpan:3,className:`h-28 text-center`,children:`Nessuna attività corrisponde alla ricerca.`})})})]})}),(0,U.jsxs)(`nav`,{"aria-label":`Pagine delle attività`,className:`mt-4 flex flex-wrap items-center justify-between gap-3`,children:[(0,U.jsxs)(`span`,{className:`text-sm text-muted-foreground`,children:[`Pagina `,f+1,` di `,d]}),(0,U.jsxs)(`div`,{className:`flex gap-2`,children:[(0,U.jsx)(Q,{variant:`outline`,disabled:f===0,onClick:()=>s(f-1),children:`Precedente`}),(0,U.jsx)(Q,{variant:`outline`,disabled:f>=d-1,onClick:()=>s(f+1),children:`Successiva`})]})]})]})}function _k({title:e,points:t,unit:n}){let r=(0,v.useId)(),i=Math.max(1,...t.map(e=>e.value)),a=Math.min(0,...t.map(e=>e.value)),o=i-a||1,s=e=>48+e*500/Math.max(1,t.length-1),c=e=>150-(e-a)/o*120;return(0,U.jsxs)(`figure`,{children:[(0,U.jsxs)(`figcaption`,{id:r,className:`mb-4 text-sm font-medium`,children:[e,` `,(0,U.jsxs)(`span`,{className:`text-muted-foreground`,children:[`(`,n,`)`]})]}),t.length?(0,U.jsxs)(`svg`,{viewBox:`0 0 600 205`,className:`sft-chart w-full`,role:`img`,"aria-labelledby":r,children:[(0,U.jsx)(`desc`,{children:t.map(e=>`${e.label}: ${e.value} ${n}`).join(`; `)}),[0,.5,1].map(e=>(0,U.jsxs)(`g`,{children:[(0,U.jsx)(`line`,{x1:`48`,x2:`560`,y1:150-e*120,y2:150-e*120}),(0,U.jsx)(`text`,{x:`4`,y:154-e*120,children:Math.round(a+o*e)})]},e)),(0,U.jsx)(`polyline`,{points:t.map((e,t)=>`${s(t)},${c(e.value)}`).join(` `)}),t.map((e,t)=>(0,U.jsxs)(`g`,{children:[(0,U.jsx)(`circle`,{cx:s(t),cy:c(e.value),r:`4`}),(0,U.jsx)(`text`,{textAnchor:`middle`,x:s(t),y:`181`,children:e.label})]},`${e.label}-${t}`))]}):(0,U.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Nessun dato disponibile.`})]})}var vk=Object.assign({"./components/sft/brand.tsx":b,"./components/sft/data.tsx":x,"./components/sft/identity.tsx":S,"./components/ui/accordion.tsx":C,"./components/ui/alert-dialog.tsx":w,"./components/ui/alert.tsx":T,"./components/ui/aspect-ratio.tsx":ee,"./components/ui/avatar.tsx":E,"./components/ui/badge.tsx":D,"./components/ui/breadcrumb.tsx":O,"./components/ui/button.tsx":k,"./components/ui/calendar.tsx":A,"./components/ui/card.tsx":j,"./components/ui/checkbox.tsx":te,"./components/ui/collapsible.tsx":M,"./components/ui/command.tsx":N,"./components/ui/dialog.tsx":P,"./components/ui/dropdown-menu.tsx":F,"./components/ui/empty.tsx":ne,"./components/ui/field.tsx":re,"./components/ui/input.tsx":ie,"./components/ui/label.tsx":ae,"./components/ui/navigation-menu.tsx":oe,"./components/ui/pagination.tsx":se,"./components/ui/popover.tsx":ce,"./components/ui/progress.tsx":le,"./components/ui/radio-group.tsx":ue,"./components/ui/scroll-area.tsx":de,"./components/ui/select.tsx":fe,"./components/ui/separator.tsx":pe,"./components/ui/sheet.tsx":me,"./components/ui/sidebar.tsx":I,"./components/ui/skeleton.tsx":L,"./components/ui/slider.tsx":he,"./components/ui/sonner.tsx":ge,"./components/ui/spinner.tsx":_e,"./components/ui/switch.tsx":ve,"./components/ui/table.tsx":ye,"./components/ui/tabs.tsx":be,"./components/ui/textarea.tsx":xe,"./components/ui/toggle-group.tsx":Se,"./components/ui/toggle.tsx":Ce,"./components/ui/tooltip.tsx":we}),yk=Object.keys(vk).filter(e=>e.includes(`/ui/`)).length,bk=[{id:`1`,title:`Assemblaggio supporto sensori`,department:`Elettronica`,status:`In corso`},{id:`2`,title:`Verifica geometria foil`,department:`Foil`,status:`Da iniziare`},{id:`3`,title:`Preparazione aggiornamento di progetto`,department:`Management`,status:`Completato`},{id:`4`,title:`Controllo attrezzatura`,department:`Shore team`,status:`In corso`},{id:`5`,title:`Documentazione lavorazioni`,department:`Cantiere`,status:`Da iniziare`},{id:`6`,title:`Confronto materiali`,department:`Materiali`,status:`Completato`}],xk=`./brand`;function Sk({id:e,kicker:t,title:n,description:r,children:i}){return(0,U.jsxs)(`section`,{id:e,className:`catalog-section`,children:[(0,U.jsxs)(`header`,{children:[(0,U.jsx)(`p`,{className:`sft-eyebrow text-primary`,children:t}),(0,U.jsx)(`h2`,{className:`sft-display`,children:n}),(0,U.jsx)(`p`,{children:r})]}),i]})}function Ck({name:e,file:t,note:n,children:r}){let i=t?vk[`./components/${t}.tsx`]:void 0;return(0,U.jsxs)(`article`,{className:`sample`,children:[(0,U.jsxs)(`header`,{className:`sample-header`,children:[(0,U.jsx)(`h3`,{children:e}),(0,U.jsx)(hx,{variant:`outline`,children:t?.startsWith(`ui/`)?`shadcn · SFT`:`SFT`})]}),(0,U.jsx)(`div`,{className:`sample-body`,children:r}),n&&(0,U.jsx)(`p`,{className:`sample-footer`,children:n}),i&&(0,U.jsxs)(`details`,{className:`source`,children:[(0,U.jsx)(`summary`,{children:`Leggi il codice`}),(0,U.jsx)(Q,{size:`sm`,variant:`ghost`,className:`mx-5`,onClick:()=>navigator.clipboard.writeText(i).then(()=>Tt.success(`Codice copiato`)).catch(()=>Tt.error(`Seleziona e copia il codice dal riquadro.`)),children:`Copia codice`}),(0,U.jsx)(`pre`,{children:(0,U.jsx)(`code`,{children:i})})]})]})}function wk(){let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(`elettronica`),[i,a]=(0,v.useState)(new Date(2026,9,13)),[o,s]=(0,v.useState)(`post`),[c,l]=(0,v.useState)(`Il lavoro prima del volo`),[u,d]=(0,v.useState)(`Progettazione, costruzione e test: il progetto cresce insieme al team.`),[f,p]=(0,v.useState)(!1),[m,h]=(0,v.useState)(!1);function g(){document.documentElement.classList.toggle(`dark`,!e),t(!e)}return(0,U.jsx)(NS,{children:(0,U.jsxs)(`div`,{className:`catalog sft-root`,children:[(0,U.jsx)(`a`,{href:`#contenuto`,className:`skip-link`,children:`Vai al contenuto`}),(0,U.jsxs)(`aside`,{className:`catalog-nav`,children:[(0,U.jsx)(`a`,{href:`#identita`,"aria-label":`SFT design system`,children:(0,U.jsx)(gx,{label:`Design system`,inverse:e,assetBase:`./brand`})}),(0,U.jsx)(`nav`,{"aria-label":`Sezioni del design system`,children:[[`identita`,`Identità`],[`fondazioni`,`Fondazioni`],[`componenti`,`Componenti`],[`pattern`,`Composizioni SFT`],[`comunicazione`,`Comunicazione`],[`media-kit`,`Media kit`],[`documentazione`,`Documentazione`]].map(([e,t])=>(0,U.jsxs)(`a`,{href:`#${e}`,children:[t,(0,U.jsx)(Ne,{size:14,"aria-hidden":`true`})]},e))}),(0,U.jsxs)(`footer`,{children:[`Versione 1.1.1`,(0,U.jsx)(`br`,{}),`13 ottobre 2026`,(0,U.jsx)(`br`,{}),(0,U.jsx)(`span`,{className:`text-primary`,children:`Sapienza Foiling Team`})]})]}),(0,U.jsxs)(`div`,{className:`catalog-main`,children:[(0,U.jsxs)(`header`,{className:`catalog-top`,children:[(0,U.jsx)(`span`,{children:`IDENTITÀ / INTERFACCE / COMUNICAZIONE`}),(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,U.jsx)(Q,{variant:`ghost`,size:`icon`,"aria-label":e?`Attiva tema chiaro`:`Attiva tema scuro`,onClick:g,children:e?(0,U.jsx)(nt,{}):(0,U.jsx)(Qe,{})}),(0,U.jsx)(Q,{variant:`outline`,size:`sm`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./design-system.html`,children:[(0,U.jsx)(Ke,{"aria-hidden":`true`}),`Documento`]})}),(0,U.jsx)(hx,{variant:`secondary`,children:`v1.1.1`})]})]}),(0,U.jsxs)(`main`,{id:`contenuto`,className:`catalog-content`,children:[(0,U.jsxs)(`section`,{id:`identita`,className:`catalog-cover`,children:[(0,U.jsxs)(`div`,{className:`catalog-cover-copy sft-flow`,children:[(0,U.jsx)(`p`,{className:`sft-eyebrow`,children:`Sapienza Foiling Team / Design system`}),(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`h1`,{className:`sft-display`,children:[`La stessa squadra.`,(0,U.jsx)(`br`,{}),`In ogni spazio.`]}),(0,U.jsx)(`p`,{className:`mt-6`,children:`Le regole, i componenti e gli strumenti per raccontare il team e organizzare il suo lavoro.`})]}),(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,U.jsx)(Q,{asChild:!0,variant:`secondary`,className:`rounded-full`,children:(0,U.jsxs)(`a`,{href:`#componenti`,children:[`Esplora i componenti`,(0,U.jsx)(Me,{"aria-hidden":`true`})]})}),(0,U.jsx)(Q,{asChild:!0,variant:`ghost`,className:`text-white hover:bg-white/10 hover:text-white`,children:(0,U.jsxs)(`a`,{href:`#comunicazione`,children:[`Template social`,(0,U.jsx)(Ne,{"aria-hidden":`true`})]})})]})]}),(0,U.jsxs)(`figure`,{className:`catalog-cover-photo`,children:[(0,U.jsx)(`img`,{src:`${xk}/photos/boat-flight.jpg`,alt:`Il Moth del team in volo sull’acqua`,fetchPriority:`high`}),(0,U.jsx)(`figcaption`,{children:`Una fotografia del progetto, dalla raccolta del team.`})]})]}),(0,U.jsxs)(`div`,{className:`mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground`,children:[(0,U.jsxs)(`p`,{children:[yk,` componenti shadcn · composizioni SFT · asset e font locali`]}),(0,U.jsx)(`p`,{children:`Sito, CRM, social e presentazioni`})]}),(0,U.jsxs)(Sk,{id:`fondazioni`,kicker:`Il riferimento comune`,title:`Fondazioni`,description:`Il bordeaux e il marchio del sito, con ruoli chiari per colori, font e spazi. Il giallo resta un accento riservato alla comunicazione.`,children:[(0,U.jsx)(`div`,{className:`swatches`,children:[[`Bordeaux`,`#822433`,`white`],[`Bordeaux scuro`,`#6b1d28`,`white`],[`Accento`,`#a34252`,`white`],[`Void`,`#0a0808`,`white`],[`Carbon`,`#141212`,`white`],[`Paper`,`#fffcfd`,`#1a1718`],[`Ink`,`#1a1718`,`white`],[`Oro · comunicazione`,`#f2c572`,`#1a1718`]].map(([e,t,n])=>(0,U.jsxs)(`div`,{className:`swatch`,style:{background:t,color:n},children:[(0,U.jsx)(`strong`,{children:e}),(0,U.jsx)(`code`,{children:t})]},e))}),(0,U.jsxs)(`div`,{className:`font-sample`,children:[(0,U.jsx)(`p`,{children:`Kelson ExtraBold · Titoli e comunicazione`}),(0,U.jsx)(`div`,{className:`specimen sft-display`,children:`PROGETTIAMO. COSTRUIAMO. NAVIGHIAMO.`})]}),(0,U.jsxs)(`div`,{className:`font-sample`,children:[(0,U.jsx)(`p`,{children:`Geist Variable · Testi e interfacce`}),(0,U.jsx)(`div`,{className:`specimen`,children:`Il lavoro di una squadra.`}),(0,U.jsx)(`p`,{className:`mt-4 max-w-prose !text-base`,children:`Frasi chiare, contenuti leggibili e azioni riconoscibili. Il font di lettura accompagna la tipografia del team senza competirvi.`})]}),(0,U.jsxs)(`div`,{className:`font-sample`,children:[(0,U.jsx)(`p`,{children:`Geist Mono · Dati e didascalie`}),(0,U.jsx)(`div`,{className:`specimen font-mono`,children:`SFT / 2026 — 12.8 kn`}),(0,U.jsx)(`p`,{className:`!mt-4`,children:`Valore dimostrativo, non una prestazione della barca.`})]}),(0,U.jsxs)(`div`,{className:`catalog-grid mt-8`,children:[(0,U.jsxs)(Ck,{name:`Spaziatura e raggi`,children:[(0,U.jsx)(`div`,{className:`flex items-end gap-3 overflow-auto`,children:[4,8,12,16,24,32,48,64].map(e=>(0,U.jsxs)(`div`,{className:`text-center`,children:[(0,U.jsx)(`div`,{style:{height:e,width:24},className:`rounded-sm bg-primary`}),(0,U.jsx)(`span`,{className:`text-xs font-mono`,children:e})]},e))}),(0,U.jsx)(`p`,{className:`mt-6 text-sm text-muted-foreground`,children:`4 px come base. Raggio 8 px per controlli, 16–24 px per superfici editoriali, pillola per CTA promozionali.`})]}),(0,U.jsxs)(Ck,{name:`Marchio e iconografia`,file:`sft/brand`,children:[(0,U.jsx)(gx,{inverse:e,assetBase:`./brand`}),(0,U.jsxs)(`div`,{className:`mt-7 flex gap-5 text-primary`,children:[(0,U.jsx)(it,{}),(0,U.jsx)(at,{}),(0,U.jsx)(Ge,{}),(0,U.jsx)(Ye,{}),(0,U.jsx)(Ae,{})]}),(0,U.jsx)(`p`,{className:`mt-4 text-sm text-muted-foreground`,children:`Lucide: tratto 2 px, griglia 24 px. Vela, velista e monogramma condividono un master vettoriale ricostruito.`})]})]}),(0,U.jsx)(`div`,{className:`catalog-note mt-6`,children:`Modalità scura: gli accenti funzionali diventano più chiari per mantenere il contrasto. Il bordeaux dell’identità resta lo stesso negli asset. Spazi, font e componenti mantengono i propri ruoli.`})]}),(0,U.jsxs)(Sk,{id:`componenti`,kicker:`Una libreria condivisa`,title:`Componenti`,description:`Controlli funzionanti, con varianti e codice. I testi e i dati degli esempi sono dimostrativi.`,children:[(0,U.jsxs)(`div`,{className:`catalog-grid`,children:[(0,U.jsx)(Ck,{name:`Button / ActionButton`,file:`ui/button`,note:`44 px per l’azione standard. La variante brand è dedicata ai messaggi promozionali.`,children:(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,U.jsxs)(Q,{onClick:()=>Tt.success(`Modifiche salvate · esempio`),children:[`Salva`,(0,U.jsx)(et,{})]}),(0,U.jsx)(Q,{variant:`outline`,children:`Annulla`}),(0,U.jsx)(Q,{variant:`secondary`,children:`Secondaria`}),(0,U.jsx)(Q,{variant:`ghost`,children:`Dettagli`}),(0,U.jsx)(Q,{variant:`destructive`,children:`Elimina`}),(0,U.jsxs)(Q,{variant:`brand`,children:[`Scopri il team`,(0,U.jsx)(Ne,{})]}),(0,U.jsx)(Q,{disabled:!0,children:`Non disponibile`}),(0,U.jsx)(_x,{loading:f,onClick:()=>{p(!0),setTimeout(()=>{p(!1),Tt.success(`Caricamento completato · esempio`)},800)},children:f?`Caricamento…`:`Prova caricamento`})]})}),(0,U.jsx)(Ck,{name:`Badge / StatusBadge`,file:`ui/badge`,children:(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,U.jsx)(Cx,{children:`Da iniziare`}),(0,U.jsx)(Cx,{tone:`info`,children:`In corso`}),(0,U.jsx)(Cx,{tone:`success`,children:`Completato`}),(0,U.jsx)(Cx,{tone:`warning`,children:`Da verificare`}),(0,U.jsx)(Cx,{tone:`danger`,children:`Errore`})]})}),(0,U.jsx)(Ck,{name:`Input / Label`,file:`ui/input`,children:(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{htmlFor:`project-name`,children:`Nome del progetto`}),(0,U.jsx)(Nx,{id:`project-name`,placeholder:`Es. acquisizione dati`})]}),(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{htmlFor:`email-error`,children:`Email`}),(0,U.jsx)(Nx,{id:`email-error`,type:`email`,defaultValue:`team@`,"aria-invalid":`true`,"aria-describedby":`email-help`}),(0,U.jsx)(`p`,{id:`email-help`,className:`text-xs text-destructive`,children:`Inserisci un indirizzo completo, ad esempio nome@dominio.it.`})]}),(0,U.jsx)(Nx,{"aria-label":`Campo non disponibile`,disabled:!0,placeholder:`Non disponibile`})]})}),(0,U.jsx)(Ck,{name:`Textarea / Field`,file:`ui/textarea`,children:(0,U.jsxs)(IC,{children:[(0,U.jsx)(LC,{htmlFor:`notes`,children:`Note del reparto`}),(0,U.jsx)(Kx,{id:`notes`,placeholder:`Descrivi ciò che serve per il prossimo passo.`}),(0,U.jsx)(RC,{children:`Indica il contesto e l’azione da svolgere.`})]})}),(0,U.jsx)(Ck,{name:`Checkbox / Switch`,file:`ui/checkbox`,children:(0,U.jsxs)(`div`,{className:`grid gap-6`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,U.jsx)(Jx,{id:`check-document`}),(0,U.jsx)(qx,{htmlFor:`check-document`,children:`Documentazione verificata`})]}),(0,U.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,U.jsx)(qx,{htmlFor:`notifications`,children:`Promemoria delle scadenze`}),(0,U.jsx)(Yx,{id:`notifications`})]})]})}),(0,U.jsx)(Ck,{name:`RadioGroup / Select`,file:`ui/select`,children:(0,U.jsxs)(`div`,{className:`grid gap-6`,children:[(0,U.jsxs)(Xx,{defaultValue:`team`,"aria-label":`Visibilità`,children:[(0,U.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,U.jsx)(Zx,{id:`vis-team`,value:`team`}),(0,U.jsx)(qx,{htmlFor:`vis-team`,children:`Tutto il team`})]}),(0,U.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,U.jsx)(Zx,{id:`vis-dept`,value:`dept`}),(0,U.jsx)(qx,{htmlFor:`vis-dept`,children:`Solo reparto`})]})]}),(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{htmlFor:`priority`,children:`Priorità`}),(0,U.jsxs)(Qx,{defaultValue:`normal`,children:[(0,U.jsx)(eS,{id:`priority`,children:(0,U.jsx)($x,{})}),(0,U.jsxs)(tS,{children:[(0,U.jsx)(nS,{value:`normal`,children:`Normale`}),(0,U.jsx)(nS,{value:`high`,children:`Alta`}),(0,U.jsx)(nS,{value:`low`,children:`Bassa`})]})]})]})]})}),(0,U.jsx)(Ck,{name:`Combobox / Command / Popover`,file:`sft/data`,children:(0,U.jsx)(mk,{label:`Reparto`,value:n,onChange:r,options:bx.map(e=>({value:e.id,label:e.name}))})}),(0,U.jsx)(Ck,{name:`Calendar / DatePicker`,file:`ui/calendar`,children:(0,U.jsx)(hk,{label:`Scadenza`,value:i,onChange:a})}),(0,U.jsx)(Ck,{name:`Dialog`,file:`ui/dialog`,children:(0,U.jsxs)(Px,{children:[(0,U.jsx)(Fx,{asChild:!0,children:(0,U.jsx)(Q,{variant:`outline`,children:`Apri dettaglio attività`})}),(0,U.jsxs)(zx,{children:[(0,U.jsxs)(Bx,{children:[(0,U.jsx)(Hx,{children:`Verifica del supporto sensori`}),(0,U.jsx)(Ux,{children:`Esempio di dettaglio. Controlla misure e punti di fissaggio prima dell’assemblaggio.`})]}),(0,U.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Il dialog conserva il focus e può essere chiuso con Esc.`}),(0,U.jsx)(Vx,{children:(0,U.jsx)(Lx,{asChild:!0,children:(0,U.jsx)(Q,{children:`Chiudi dettaglio`})})})]})]})}),(0,U.jsx)(Ck,{name:`AlertDialog / Sheet`,file:`ui/alert-dialog`,children:(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,U.jsxs)(aS,{children:[(0,U.jsx)(oS,{asChild:!0,children:(0,U.jsx)(Q,{variant:`outline`,children:`Prova conferma`})}),(0,U.jsxs)(lS,{children:[(0,U.jsxs)(uS,{children:[(0,U.jsx)(fS,{children:`Archiviare questa attività?`}),(0,U.jsx)(pS,{children:`È un esempio del catalogo: nessun dato viene modificato.`})]}),(0,U.jsxs)(dS,{children:[(0,U.jsx)(hS,{children:`Annulla`}),(0,U.jsx)(mS,{onClick:()=>Tt.success(`Conferma eseguita · esempio`),children:`Archivia`})]})]})]}),(0,U.jsxs)(gS,{children:[(0,U.jsx)(_S,{asChild:!0,children:(0,U.jsx)(Q,{variant:`outline`,children:`Apri pannello`})}),(0,U.jsxs)(bS,{children:[(0,U.jsxs)(xS,{children:[(0,U.jsx)(SS,{children:`Risorse del reparto`}),(0,U.jsx)(CS,{children:`Pannello dimostrativo per navigazione e dettagli.`})]}),(0,U.jsx)(`div`,{className:`px-4 mt-6`,children:(0,U.jsx)(Cx,{tone:`info`,children:`Elettronica e Software`})})]})]})]})}),(0,U.jsx)(Ck,{name:`Tabs`,file:`ui/tabs`,children:(0,U.jsxs)(wS,{defaultValue:`details`,children:[(0,U.jsxs)(ES,{children:[(0,U.jsx)(DS,{value:`details`,children:`Dettagli`}),(0,U.jsx)(DS,{value:`activity`,children:`Attività`}),(0,U.jsx)(DS,{value:`files`,children:`File`})]}),(0,U.jsx)(OS,{value:`details`,className:`pt-4 text-sm`,children:`Obiettivo e contesto del progetto.`}),(0,U.jsx)(OS,{value:`activity`,className:`pt-4 text-sm`,children:`Le attività del reparto, con responsabile e scadenza.`}),(0,U.jsx)(OS,{value:`files`,className:`pt-4 text-sm`,children:`Documenti e risorse collegate.`})]})}),(0,U.jsxs)(Ck,{name:`Accordion / Collapsible`,file:`ui/accordion`,children:[(0,U.jsxs)(kS,{type:`single`,collapsible:!0,children:[(0,U.jsxs)(AS,{value:`one`,children:[(0,U.jsx)(jS,{children:`Quando usare un componente condiviso?`}),(0,U.jsx)(MS,{children:`Quando lo stesso controllo o comportamento compare in più schermate. Le differenze di contesto diventano varianti esplicite.`})]}),(0,U.jsxs)(AS,{value:`two`,children:[(0,U.jsx)(jS,{children:`Come si aggiorna il sistema?`}),(0,U.jsx)(MS,{children:`Con una versione, un changelog e una verifica nei progetti che lo utilizzano.`})]})]}),(0,U.jsxs)(EC,{className:`mt-4`,children:[(0,U.jsx)(DC,{asChild:!0,children:(0,U.jsx)(Q,{variant:`ghost`,children:`Mostra nota tecnica`})}),(0,U.jsx)(OC,{className:`text-sm p-3 text-muted-foreground`,children:`I componenti non accedono ai dati di Google o Supabase.`})]})]}),(0,U.jsx)(Ck,{name:`Tooltip / DropdownMenu`,file:`ui/dropdown-menu`,children:(0,U.jsxs)(`div`,{className:`flex gap-3`,children:[(0,U.jsxs)(PS,{children:[(0,U.jsx)(FS,{asChild:!0,children:(0,U.jsx)(Q,{variant:`outline`,size:`icon`,"aria-label":`Salva esempio`,onClick:()=>Tt.success(`Salvato · esempio`),children:(0,U.jsx)(et,{})})}),(0,U.jsx)(IS,{children:`Salva modifiche`})]}),(0,U.jsxs)(LS,{children:[(0,U.jsx)(RS,{asChild:!0,children:(0,U.jsxs)(Q,{variant:`outline`,"aria-label":`Azioni dell’attività`,children:[(0,U.jsx)(qe,{}),`Azioni`]})}),(0,U.jsxs)(zS,{children:[(0,U.jsx)(VS,{children:`Attività dimostrativa`}),(0,U.jsx)(BS,{onSelect:()=>Tt.info(`Modifica selezionata · esempio`),children:`Modifica`}),(0,U.jsx)(BS,{onSelect:()=>Tt.info(`Link copiato · esempio`),children:`Copia link`}),(0,U.jsx)(HS,{}),(0,U.jsx)(BS,{onSelect:()=>Tt.info(`Archivia selezionato · esempio`),children:`Archivia`})]})]})]})}),(0,U.jsxs)(Ck,{name:`Alert / Toast`,file:`ui/alert`,children:[(0,U.jsxs)(mC,{children:[(0,U.jsx)(Ie,{}),(0,U.jsx)(hC,{children:`Documento salvato`}),(0,U.jsx)(gC,{children:`Le modifiche sono disponibili al reparto. Messaggio dimostrativo.`})]}),(0,U.jsx)(Q,{variant:`outline`,className:`mt-4`,onClick:()=>Tt.error(`Salvataggio non riuscito. Riprova. · esempio`),children:`Prova messaggio di errore`})]}),(0,U.jsxs)(Ck,{name:`Progress / Slider`,file:`ui/progress`,children:[(0,U.jsx)(qx,{htmlFor:`project-progress`,children:`Avanzamento dimostrativo · 60%`}),(0,U.jsx)(qS,{id:`project-progress`,value:60,className:`mt-3`}),(0,U.jsx)(qx,{htmlFor:`chart-scale`,className:`mt-6 mb-4 block`,children:`Scala del grafico`}),(0,U.jsx)(JS,{id:`chart-scale`,"aria-label":`Scala del grafico`,defaultValue:[50],max:100,step:10})]}),(0,U.jsx)(Ck,{name:`Avatar / Skeleton / Spinner`,file:`ui/skeleton`,children:(0,U.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,U.jsx)(GS,{children:(0,U.jsx)(KS,{children:`SFT`})}),(0,U.jsxs)(`div`,{className:`grid flex-1 gap-2`,children:[(0,U.jsx)(WS,{className:`h-4 w-3/4`}),(0,U.jsx)(WS,{className:`h-3 w-1/2`})]}),(0,U.jsx)(AC,{"aria-label":`Caricamento`})]})}),(0,U.jsx)(Ck,{name:`Toggle / ToggleGroup`,file:`ui/toggle-group`,children:(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,U.jsxs)(lC,{"aria-label":`Mostra attività completate`,children:[(0,U.jsx)(Ie,{}),`Completate`]}),(0,U.jsxs)(dC,{type:`single`,defaultValue:`list`,"aria-label":`Vista`,children:[(0,U.jsx)(fC,{value:`list`,"aria-label":`Vista elenco`,children:`Elenco`}),(0,U.jsx)(fC,{value:`board`,"aria-label":`Vista board`,children:`Board`})]})]})}),(0,U.jsxs)(Ck,{name:`Breadcrumb / NavigationMenu`,file:`ui/breadcrumb`,children:[(0,U.jsx)(ZS,{children:(0,U.jsxs)(QS,{children:[(0,U.jsx)($S,{children:(0,U.jsx)(eC,{href:`#pattern`,children:`Workspace`})}),(0,U.jsx)(nC,{}),(0,U.jsx)($S,{children:(0,U.jsx)(tC,{children:`Elettronica`})})]})}),(0,U.jsx)(US,{className:`my-5`}),(0,U.jsx)(_C,{children:(0,U.jsxs)(vC,{children:[(0,U.jsx)(yC,{children:(0,U.jsx)(xC,{href:`#identita`,children:`Team`})}),(0,U.jsx)(yC,{children:(0,U.jsx)(xC,{href:`#pattern`,children:`Reparti`})})]})})]}),(0,U.jsxs)(Ck,{name:`Pagination / ScrollArea`,file:`ui/pagination`,children:[(0,U.jsx)(SC,{children:(0,U.jsx)(CC,{children:[1,2,3].map(e=>(0,U.jsx)(wC,{children:(0,U.jsx)(TC,{href:`#componenti`,isActive:e===1,"aria-label":`Pagina ${e}`,children:e})},e))})}),(0,U.jsx)(YS,{className:`mt-5 h-32 rounded-lg border p-4`,children:(0,U.jsx)(`ul`,{className:`grid gap-3 text-sm`,children:bx.map(e=>(0,U.jsx)(`li`,{children:e.name},e.id))})})]}),(0,U.jsx)(Ck,{name:`Card / AspectRatio`,file:`ui/card`,children:(0,U.jsxs)(lx,{children:[(0,U.jsxs)(ux,{children:[(0,U.jsx)(dx,{className:`font-display text-2xl`,children:`Dal progetto al test`}),(0,U.jsx)(fx,{children:`Una superficie per raggruppare informazioni collegate.`})]}),(0,U.jsx)(px,{children:(0,U.jsx)(kC,{ratio:16/9,children:(0,U.jsx)(`img`,{className:`size-full rounded-lg object-cover`,src:`${xk}/photos/workshop.jpg`,alt:`Il team lavora sulla barca nel paddock`,loading:`lazy`})})})]})}),(0,U.jsx)(Ck,{name:`Empty`,file:`ui/empty`,children:(0,U.jsx)(jC,{children:(0,U.jsxs)(MC,{children:[(0,U.jsx)(NC,{children:`Nessun file collegato`}),(0,U.jsx)(PC,{children:`Collega un documento per renderlo disponibile al reparto.`})]})})})]}),(0,U.jsx)(`div`,{className:`mt-6`,children:(0,U.jsx)(Ck,{name:`DataTable / Table / filtri e ordinamento`,file:`sft/data`,note:`Ricerca, ordinamento e paginazione sono implementati. Il progetto fornisce i dati; l’esempio non modifica il CRM.`,children:(0,U.jsx)(gk,{rows:bk,pageSize:3})})}),(0,U.jsxs)(`div`,{className:`catalog-note mt-6`,children:[`Il codice completo di tutti i `,yk,` componenti, compresi Sidebar, Field e gli elementi compositi, è disponibile nel documento e nei sorgenti. I componenti derivano da shadcn/ui con tema e adattamenti SFT.`]})]}),(0,U.jsxs)(Sk,{id:`pattern`,kicker:`Il sistema nel progetto`,title:`Composizioni SFT`,description:`Composizioni comuni per raccontare il team e per gestire il lavoro. Fotografie reali; numeri e attività di esempio esplicitamente separati dai risultati del team.`,children:[(0,U.jsx)(yx,{image:`${xk}/photos/boat-flight.jpg`,alt:`Barca del team in volo sull’acqua`,title:`Sapienza Foiling Team`,description:`Progettiamo, costruiamo e navighiamo imbarcazioni foiling sostenibili.`,eyebrow:`Dalla progettazione all’acqua`,level:2,children:(0,U.jsx)(Q,{variant:`brand`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`https://www.sapienzafoilingteam.com/team`,children:[`Scopri il team`,(0,U.jsx)(Ne,{})]})})}),(0,U.jsx)(`div`,{className:`catalog-grid three mt-6`,children:bx.map(e=>(0,U.jsx)(xx,{department:e},e.id))}),(0,U.jsxs)(`div`,{className:`catalog-grid three mt-6`,children:[(0,U.jsx)(wx,{label:`Attività dimostrative`,value:`6`,description:`Dati del catalogo`}),(0,U.jsx)(wx,{label:`In corso · esempio`,value:`2`}),(0,U.jsx)(wx,{label:`Serie simulata`,value:`12.8`,unit:`kn`,description:`Non una prestazione misurata`})]}),(0,U.jsxs)(`div`,{className:`catalog-grid mt-6`,children:[(0,U.jsx)(Ck,{name:`Grafico di telemetria`,file:`sft/data`,note:`Serie dimostrativa. Ogni grafico indica unità e offre una descrizione testuale dei valori.`,children:(0,U.jsx)(_k,{title:`Velocità · dati simulati`,unit:`kn`,points:[{label:`0 s`,value:3},{label:`10 s`,value:7},{label:`20 s`,value:12.8},{label:`30 s`,value:9},{label:`40 s`,value:11}]})}),(0,U.jsx)(Ck,{name:`ActivityItem`,file:`sft/brand`,children:(0,U.jsxs)(`ul`,{children:[(0,U.jsx)(Ox,{title:`Supporto sensori documentato`,time:{label:`13 ottobre 2026 · esempio`,iso:`2026-10-13`},description:`Aggiunte le misure di assemblaggio.`}),(0,U.jsx)(Ox,{title:`Report condiviso`,time:{label:`12 ottobre 2026 · esempio`,iso:`2026-10-12`}})]})}),(0,U.jsx)(Dx,{kind:`Articolo`,title:`Il lavoro in cantiere`,description:`Un esempio di scheda editoriale, con foto e testo breve.`,image:`${xk}/photos/workshop.jpg`,alt:`Lavoro del team nel paddock`,href:`https://www.sapienzafoilingteam.com/blog`,meta:`Esempio di layout`}),(0,U.jsx)(Dx,{kind:`Evento`,title:`La squadra sul Garda`,description:`Un esempio per raccontare una trasferta, mantenendo distinti eventi passati e futuri.`,image:`${xk}/photos/team.jpg`,alt:`Membri del team accanto alla barca`,href:`https://www.sapienzafoilingteam.com`,meta:`Archivio fotografico`})]}),(0,U.jsxs)(`div`,{className:`catalog-grid mt-6`,children:[(0,U.jsx)(Ck,{name:`EmptyState`,file:`sft/brand`,children:(0,U.jsx)(Tx,{title:`Nessuna attività`,description:`Aggiungi la prima attività per organizzare il lavoro del reparto.`,action:(0,U.jsx)(Q,{onClick:()=>Tt.info(`Creazione attività · esempio`),children:`Aggiungi attività`})})}),(0,U.jsx)(Ck,{name:`Form con validazione`,file:`sft/brand`,children:(0,U.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),h(!0),Tt.success(`Attività salvata · esempio`)},className:`grid gap-4`,children:[(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{htmlFor:`activity-title`,children:`Titolo attività`}),(0,U.jsx)(Nx,{id:`activity-title`,name:`title`,required:!0,minLength:3,placeholder:`Es. verificare il fissaggio`})]}),(0,U.jsxs)(`div`,{className:`grid gap-2`,children:[(0,U.jsx)(qx,{htmlFor:`activity-note`,children:`Nota`}),(0,U.jsx)(Kx,{id:`activity-note`,name:`note`})]}),(0,U.jsx)(Q,{type:`submit`,children:`Salva attività`}),m&&(0,U.jsx)(`p`,{role:`status`,className:`text-sm text-success`,children:`Attività salvata nel solo esempio del catalogo.`})]})})]}),(0,U.jsx)(Ck,{name:`PageHeader`,file:`sft/brand`,children:(0,U.jsx)(vx,{level:3,eyebrow:`Workspace / Reparti`,title:`Elettronica e Software`,description:`Attività, risorse e documenti del reparto.`,actions:(0,U.jsx)(Q,{onClick:()=>Tt.info(`Nuova attività · esempio`),children:`Aggiungi attività`})})}),(0,U.jsx)(`div`,{className:`mt-6`,children:(0,U.jsx)(Ck,{name:`SponsorGrid`,file:`sft/brand`,children:(0,U.jsx)(Ex,{sponsors:[{name:`Harken`,image:`${xk}/partners/harken.svg`},{name:`Ansys`,image:`${xk}/partners/ansys.svg`},{name:`Romana Diesel`,image:`${xk}/partners/romanadiesel.svg`}]})})})]}),(0,U.jsxs)(Sk,{id:`comunicazione`,kicker:`Gli stessi elementi fuori dall’interfaccia`,title:`Comunicazione`,description:`Template con griglia, tipografia e fotografia comuni. I file SVG mantengono i testi separati e sono accompagnati da istruzioni per ricostruirli in Canva.`,children:[(0,U.jsxs)(`div`,{className:`catalog-grid`,children:[(0,U.jsxs)(`div`,{className:`grid gap-5 self-start`,children:[(0,U.jsxs)(IC,{children:[(0,U.jsx)(LC,{htmlFor:`template-title`,children:`Titolo della copertina`}),(0,U.jsx)(Nx,{id:`template-title`,value:c,maxLength:60,onChange:e=>l(e.target.value)}),(0,U.jsx)(RC,{children:`Consigliato: massimo 7 parole.`})]}),(0,U.jsxs)(IC,{children:[(0,U.jsx)(LC,{htmlFor:`template-description`,children:`Testo breve`}),(0,U.jsx)(Kx,{id:`template-description`,value:u,maxLength:160,onChange:e=>d(e.target.value)})]}),(0,U.jsxs)(dC,{type:`single`,value:o,onValueChange:e=>e&&s(e),"aria-label":`Formato del template`,children:[(0,U.jsx)(fC,{value:`post`,children:`Post`}),(0,U.jsx)(fC,{value:`story`,children:`Story`}),(0,U.jsx)(fC,{value:`slide`,children:`Slide`})]}),(0,U.jsx)(`p`,{className:`catalog-note`,children:`Scegli uno dei nove formati qui sotto e premi Crea template per personalizzare i testi, vedere l’anteprima e scaricare SVG o PNG nelle dimensioni originali.`}),(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,U.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,U.jsxs)(`a`,{href:`./brand/fonts/Armasen%20-%20Kelson-ExtraBold.otf`,download:!0,children:[`Kelson OTF`,(0,U.jsx)(Ke,{})]})}),(0,U.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,U.jsxs)(`a`,{href:`./brand/tokens.json`,download:!0,children:[`Palette e token`,(0,U.jsx)(Ke,{})]})}),(0,U.jsx)(Q,{asChild:!0,variant:`outline`,children:(0,U.jsxs)(`a`,{href:`./communication/canva-review.html`,children:[`Rivedi le nove bozze Canva`,(0,U.jsx)(Ne,{})]})})]})]}),(0,U.jsx)(kx,{title:c||`Titolo del post`,description:u,image:`${xk}/photos/workshop.jpg`,format:o})]}),(0,U.jsx)(Gx,{})]}),(0,U.jsx)(Mx,{}),(0,U.jsxs)(Sk,{id:`documentazione`,kicker:`Per usare e mantenere il sistema`,title:`Documento e risorse`,description:`Il documento raccoglie le decisioni di design, le regole di utilizzo e il codice completo. I file restano disponibili anche fuori dal catalogo.`,children:[(0,U.jsxs)(`div`,{className:`catalog-grid`,children:[(0,U.jsx)(Ck,{name:`Guida e codice`,children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(Q,{asChild:!0,children:(0,U.jsxs)(`a`,{href:`./design-system.html`,children:[`Apri il documento illustrato`,(0,U.jsx)(Ne,{})]})}),(0,U.jsx)(Q,{variant:`outline`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./design-system.md`,download:!0,children:[`Documento completo Markdown`,(0,U.jsx)(Ke,{})]})}),(0,U.jsx)(Q,{variant:`outline`,asChild:!0,children:(0,U.jsxs)(`a`,{href:`./component-code.md`,download:!0,children:[`Codice di tutti i componenti`,(0,U.jsx)(Ke,{})]})})]})}),(0,U.jsx)(Ck,{name:`Adozione nei progetti`,children:(0,U.jsxs)(`ol`,{className:`list-decimal pl-5 grid gap-3 text-sm text-muted-foreground`,children:[(0,U.jsx)(`li`,{children:`Installa la versione scelta della libreria.`}),(0,U.jsx)(`li`,{children:`Importa gli stili compilati e servi gli asset del team.`}),(0,U.jsx)(`li`,{children:`Sostituisci i componenti per schermata e verifica le funzioni.`}),(0,U.jsx)(`li`,{children:`Aggiorna i template di comunicazione con la stessa versione.`})]})})]}),(0,U.jsx)(`div`,{className:`catalog-note mt-6`,children:`Versione locale 1.1.1. La homepage e la navigazione del sito adottano la libreria; il CRM resta da migrare. I diritti dei font e delle fotografie sono descritti nel documento di provenienza. Le verifiche eseguite sono registrate nel rapporto di consegna.`})]}),(0,U.jsxs)(`footer`,{className:`catalog-end`,children:[(0,U.jsx)(gx,{label:`Design system · v1.1.1`,inverse:e,assetBase:`./brand`}),(0,U.jsxs)(`p`,{children:[`Un riferimento comune per le persone che costruiscono`,(0,U.jsx)(`br`,{}),`e raccontano Sapienza Foiling Team.`]})]})]})]}),(0,U.jsx)(sC,{theme:e?`dark`:`light`,closeButton:!0})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,U.jsx)(v.StrictMode,{children:(0,U.jsx)(wk,{})}));