import{c as V,h as Y,a as gt,v as wt,b as Qe,g as qt,d as Ct,e as Me,f as Lt,Q as kt,i as Tt}from"./QBtn.691920fc.js";import{c as v,h as k,r as _,i as Ge,o as X,n as j,a as F,d as Ee,g as A,l as O,w as q,e as ze,f as se,H as He,j as P,s as Je,k as _t,P as St,m as xt,p as te,q as pe,t as De,u as ye,v as Te,x as be,y as Et,z as Ze,A as zt,B as oe,C as $t,D as et,_ as tt,E as J,F as le,G as E,I as x,J as Bt,K as re,L as _e,M as Pt,N as Ot,O as Vt,Q as Qt,R as We,S as Mt}from"./index.8ae85c7a.js";import{u as Ht,a as Dt,b as ie,Q as Wt,c as Ft}from"./QItem.5dcb4592.js";var At=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const a=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:a.value},Y(o.default))}}),Rt=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const a=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:a.value},Y(o.default))}});function Nt(){const e=_(!Ge.value);return e.value===!1&&X(()=>{e.value=!0}),e}const ot=typeof ResizeObserver!="undefined",Fe=ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Se=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let a=null,l,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?u():a===null&&(a=setTimeout(u,e.debounce))}function u(){if(clearTimeout(a),a=null,l){const{offsetWidth:c,offsetHeight:i}=l;(c!==t.width||i!==t.height)&&(t={width:c,height:i},o("resize",t))}}const f=A();if(Object.assign(f.proxy,{trigger:n}),ot===!0){let c;return X(()=>{j(()=>{l=f.proxy.$el.parentNode,l&&(c=new ResizeObserver(n),c.observe(l),u())})}),F(()=>{clearTimeout(a),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),Ee}else{let y=function(){clearTimeout(a),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",n,O.passive),i=void 0)},b=function(){y(),l&&l.contentDocument&&(i=l.contentDocument.defaultView,i.addEventListener("resize",n,O.passive),u())};const c=Nt();let i;return X(()=>{j(()=>{l=f.proxy.$el,l&&b()})}),F(y),()=>{if(c.value===!0)return k("object",{style:Fe.style,tabindex:-1,type:"text/html",data:Fe.url,"aria-hidden":"true",onLoad:b})}}}}),It=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:a}){const{proxy:{$q:l}}=A(),t=ze(se,()=>{console.error("QHeader needs to be child of QLayout")}),n=_(parseInt(e.heightHint,10)),u=_(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?n.value:0;const s=n.value-t.scroll.value.position;return s>0?s:0}),i=v(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),y=v(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=v(()=>{const s=t.rows.value.top,C={};return s[0]==="l"&&t.left.space===!0&&(C[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(C[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function d(s,C){t.update("header",s,C)}function w(s,C){s.value!==C&&(s.value=C)}function T({height:s}){w(n,s),d("size",s)}function p(s){y.value===!0&&w(u,!0),a("focusin",s)}q(()=>e.modelValue,s=>{d("space",s),w(u,!0),t.animate()}),q(c,s=>{d("offset",s)}),q(()=>e.reveal,s=>{s===!1&&w(u,e.modelValue)}),q(u,s=>{t.animate(),a("reveal",s)}),q(t.scroll,s=>{e.reveal===!0&&w(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const B={};return t.instances.header=B,e.modelValue===!0&&d("size",n.value),d("space",e.modelValue),d("offset",c.value),F(()=>{t.instances.header===B&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const s=gt(o.default,[]);return e.elevated===!0&&s.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(k(Se,{debounce:0,onResize:T})),k("header",{class:b.value,style:g.value,onFocusin:p},s)}}}),xe=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const a=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>k("div",{style:t.value,class:l.value},Y(o.default))}});function Xt(e,o,a){let l;function t(){l!==void 0&&(He.remove(l),l=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>a.value===!0,handler:o},He.add(l)}}}const jt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Yt=["before-show","show","before-hide","hide"];function Ut({showing:e,canShow:o,hideOnRouteChange:a,handleShow:l,handleHide:t,processOnMount:n}){const u=A(),{props:f,emit:c,proxy:i}=u;let y;function b(s){e.value===!0?w(s):g(s)}function g(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!0),y=s,j(()=>{y===s&&(y=void 0)})),(f.modelValue===null||C===!1)&&d(s)}function d(s){e.value!==!0&&(e.value=!0,c("before-show",s),l!==void 0?l(s):c("show",s))}function w(s){if(f.disable===!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!1),y=s,j(()=>{y===s&&(y=void 0)})),(f.modelValue===null||C===!1)&&T(s)}function T(s){e.value!==!1&&(e.value=!1,c("before-hide",s),t!==void 0?t(s):c("hide",s))}function p(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?d:T)(y)}q(()=>f.modelValue,p),a!==void 0&&wt(u)===!0&&q(()=>i.$route.fullPath,()=>{a.value===!0&&e.value===!0&&w()}),n===!0&&X(()=>{p(f.modelValue)});const B={show:g,hide:w,toggle:b};return Object.assign(i,B),B}const Kt=[null,document,document.body,document.scrollingElement,document.documentElement];function Gt(e,o){let a=qt(o);if(a===void 0){if(e==null)return window;a=e.closest(".scroll,.scroll-y,.overflow-auto")}return Kt.includes(a)?window:a}function it(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function nt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function ge(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");Qe(e,{width:"100%",height:"200px"}),Qe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const a=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return a===l&&(l=o.clientWidth),o.remove(),ne=a-l,ne}function Jt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let K=0,we,qe,G,Ce=!1,Ae,Re,I;function Zt(e){eo(e)&&Je(e)}function eo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=_t(e),a=e.shiftKey&&!e.deltaX,l=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=a||l?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const u=o[n];if(Jt(u,l))return l?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ne(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:a,scrollTop:l}=document.scrollingElement;(G===void 0||o!==window.innerHeight)&&(G=a-o,document.scrollingElement.scrollTop=l),l>G&&(document.scrollingElement.scrollTop-=Math.ceil((l-G)/8))}))}function Ie(e){const o=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);we=nt(window),qe=it(window),Ae=o.style.left,Re=o.style.top,o.style.left=`-${we}px`,o.style.top=`-${qe}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,P.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,O.passiveCapture),window.visualViewport.addEventListener("scroll",ae,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ne,O.passiveCapture))}P.is.desktop===!0&&P.is.mac===!0&&window[`${e}EventListener`]("wheel",Zt,O.notPassive),e==="remove"&&(P.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",ae,O.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,O.passiveCapture)):window.removeEventListener("scroll",Ne,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ae,o.style.top=Re,window.scrollTo(we,qe),G=void 0)}function to(e){let o="add";if(e===!0){if(K++,I!==void 0){clearTimeout(I),I=void 0;return}if(K>1)return}else{if(K===0||(K--,K>0))return;if(o="remove",P.is.ios===!0&&P.is.nativeMobile===!0){clearTimeout(I),I=setTimeout(()=>{Ie(o),I=void 0},100);return}}Ie(o)}function oo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,to(o))}}}function io(){let e;return F(()=>{clearTimeout(e)}),{registerTimeout(o,a){clearTimeout(e),e=setTimeout(o,a)},removeTimeout(){clearTimeout(e)}}}const $e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},no=Object.keys($e);$e.all=!0;function Xe(e){const o={};for(const a of no)e[a]===!0&&(o[a]=!0);return Object.keys(o).length===0?$e:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ao(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),St.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,o,a){const l=Te(e);let t,n=l.left-o.event.x,u=l.top-o.event.y,f=Math.abs(n),c=Math.abs(u);const i=o.direction;i.horizontal===!0&&i.vertical!==!0?t=n<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?t=u<0?"up":"down":i.up===!0&&u<0?(t="up",f>c&&(i.left===!0&&n<0?t="left":i.right===!0&&n>0&&(t="right"))):i.down===!0&&u>0?(t="down",f>c&&(i.left===!0&&n<0?t="left":i.right===!0&&n>0&&(t="right"))):i.left===!0&&n<0?(t="left",f<c&&(i.up===!0&&u<0?t="up":i.down===!0&&u>0&&(t="down"))):i.right===!0&&n>0&&(t="right",f<c&&(i.up===!0&&u<0?t="up":i.down===!0&&u>0&&(t="down")));let y=!1;if(t===void 0&&a===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,y=!0,t==="left"||t==="right"?(l.left-=n,f=0,n=0):(l.top-=u,c=0,u=0)}return{synthetic:y,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:a===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:n,y:u},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let lo=0;var ke=Ct({name:"touch-pan",beforeMount(e,{value:o,modifiers:a}){if(a.mouse!==!0&&P.has.touch!==!0)return;function l(n,u){a.mouse===!0&&u===!0?Je(n):(a.stop===!0&&ye(n),a.prevent===!0&&De(n))}const t={uid:"qvtp_"+lo++,handler:o,modifiers:a,direction:Xe(a),noop:Ee,mouseStart(n){je(n,t)&&xt(n)&&(te(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(je(n,t)){const u=n.target;te(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(P.is.firefox===!0&&pe(e,!0),t.lastEvt=n,u===!0||a.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const i=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&De(i),n.cancelBubble===!0&&ye(i),Object.assign(i,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:i}}ye(n)}const{left:f,top:c}=Te(n);t.event={x:f,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(n){if(t.event===void 0)return;const u=Te(n),f=u.left-t.event.x,c=u.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=n;const i=t.event.mouse===!0,y=()=>{l(n,i),a.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ao(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,a.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),i===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{w(),d()},50):w()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(n,t.event.mouse);const{payload:d,synthetic:w}=Le(n,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&y(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=w===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||i===!0&&t.modifiers.mouseAllDir===!0){y(),t.event.detected=!0,t.move(n);return}const b=Math.abs(f),g=Math.abs(c);b!==g&&(t.direction.horizontal===!0&&b>g||t.direction.vertical===!0&&b<g||t.direction.up===!0&&b<g&&c<0||t.direction.down===!0&&b<g&&c>0||t.direction.left===!0&&b>g&&f<0||t.direction.right===!0&&b>g&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(be(t,"temp"),P.is.firefox===!0&&pe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=Le(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,a.mouse===!0&&te(t,"main",[[e,"mousedown","mouseStart",`passive${a.mouseCapture===!0?"Capture":""}`]]),P.has.touch===!0&&te(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const a=e.__qtouchpan;a!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&a.end(),a.handler=o.value),a.direction=Xe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),be(o,"main"),be(o,"temp"),P.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Ye=150;var ro=V({name:"QDrawer",inheritAttrs:!1,props:{...jt,...Ht,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Yt,"on-layout","mini-state"],setup(e,{slots:o,emit:a,attrs:l}){const t=A(),{proxy:{$q:n}}=t,u=Dt(e,n),{preventBodyScroll:f}=oo(),{registerTimeout:c}=io(),i=ze(se,()=>{console.error("QDrawer needs to be child of QLayout")});let y,b,g;const d=_(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),w=v(()=>e.mini===!0&&d.value!==!0),T=v(()=>w.value===!0?e.miniWidth:e.width),p=_(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),B=v(()=>e.persistent!==!0&&(d.value===!0||at.value===!0));function s(r,h){if(Q(),r!==!1&&i.animate(),$(0),d.value===!0){const S=i.instances[Z.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),H(1),i.isContainer.value!==!0&&f(!0)}else H(0),r!==!1&&ve(!1);c(()=>{r!==!1&&ve(!0),h!==!0&&a("show",r)},Ye)}function C(r,h){W(),r!==!1&&i.animate(),H(0),$(R.value*T.value),me(),h!==!0&&c(()=>{a("hide",r)},Ye)}const{show:m,hide:L}=Ut({showing:p,hideOnRouteChange:B,handleShow:s,handleHide:C}),{addToHistory:Q,removeFromHistory:W}=Xt(p,L,B),M={belowBreakpoint:d,hide:L},z=v(()=>e.side==="right"),R=v(()=>(n.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),Be=_(0),N=_(!1),ue=_(!1),Pe=_(T.value*R.value),Z=v(()=>z.value===!0?"left":"right"),ce=v(()=>p.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),de=v(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(z.value?"R":"L")>-1||n.platform.is.ios===!0&&i.isContainer.value===!0),U=v(()=>e.overlay===!1&&p.value===!0&&d.value===!1),at=v(()=>e.overlay===!0&&p.value===!0&&d.value===!1),lt=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&N.value===!1?" hidden":"")),rt=v(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Oe=v(()=>z.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),st=v(()=>z.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),ut=v(()=>{const r={};return i.header.space===!0&&Oe.value===!1&&(de.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&st.value===!1&&(de.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),ct=v(()=>{const r={width:`${T.value}px`,transform:`translateX(${Pe.value}px)`};return d.value===!0?r:Object.assign(r,ut.value)}),dt=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ft=v(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${w.value===!0?"mini":"standard"}`+(de.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),vt=v(()=>{const r=n.lang.rtl===!0?e.side:Z.value;return[[ke,yt,void 0,{[r]:!0,mouse:!0}]]}),mt=v(()=>{const r=n.lang.rtl===!0?Z.value:e.side;return[[ke,Ve,void 0,{[r]:!0,mouse:!0}]]}),ht=v(()=>{const r=n.lang.rtl===!0?Z.value:e.side;return[[ke,Ve,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){bt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}q(d,r=>{r===!0?(y=p.value,p.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&y!==!1&&(p.value===!0?($(0),H(0),me()):m(!1))}),q(()=>e.side,(r,h)=>{i.instances[h]===M&&(i.instances[h]=void 0,i[h].space=!1,i[h].offset=0),i.instances[r]=M,i[r].size=T.value,i[r].space=U.value,i[r].offset=ce.value}),q(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),q(()=>e.behavior+e.breakpoint,fe),q(i.isContainer,r=>{p.value===!0&&f(r!==!0),r===!0&&fe()}),q(i.scrollbarWidth,()=>{$(p.value===!0?0:void 0)}),q(ce,r=>{D("offset",r)}),q(U,r=>{a("on-layout",r),D("space",r)}),q(z,()=>{$()}),q(T,r=>{$(),he(e.miniToOverlay,r)}),q(()=>e.miniToOverlay,r=>{he(r,T.value)}),q(()=>n.lang.rtl,()=>{$()}),q(()=>e.mini,()=>{e.modelValue===!0&&(pt(),i.animate())}),q(w,r=>{a("mini-state",r)});function $(r){r===void 0?j(()=>{r=p.value===!0?0:T.value,$(R.value*r)}):(i.isContainer.value===!0&&z.value===!0&&(d.value===!0||Math.abs(r)===T.value)&&(r+=R.value*i.scrollbarWidth.value),Pe.value=r)}function H(r){Be.value=r}function ve(r){const h=r===!0?"remove":i.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function pt(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,b=setTimeout(()=>{ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function yt(r){if(p.value!==!1)return;const h=T.value,S=ie(r.distance.x,0,h);if(r.isFinal===!0){S>=Math.min(75,h)===!0?m():(i.animate(),H(0),$(R.value*h)),N.value=!1;return}$((n.lang.rtl===!0?z.value!==!0:z.value)?Math.max(h-S,0):Math.min(0,S-h)),H(ie(S/h,0,1)),r.isFirst===!0&&(N.value=!0)}function Ve(r){if(p.value!==!0)return;const h=T.value,S=r.direction===e.side,ee=(n.lang.rtl===!0?S!==!0:S)?ie(r.distance.x,0,h):0;if(r.isFinal===!0){Math.abs(ee)<Math.min(75,h)===!0?(i.animate(),H(1),$(0)):L(),N.value=!1;return}$(R.value*ee),H(ie(1-ee/h,0,1)),r.isFirst===!0&&(N.value=!0)}function me(){f(!1),ve(!0)}function D(r,h){i.update(e.side,r,h)}function bt(r,h){r.value!==h&&(r.value=h)}function he(r,h){D("size",r===!0?e.miniWidth:h)}return i.instances[e.side]=M,he(e.miniToOverlay,T.value),D("space",U.value),D("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),X(()=>{a("on-layout",U.value),a("mini-state",w.value),y=e.showIfAbove===!0;const r=()=>{(p.value===!0?s:C)(!1,!0)};if(i.totalWidth.value!==0){j(r);return}g=q(i.totalWidth,()=>{g(),g=void 0,p.value===!1&&e.showIfAbove===!0&&d.value===!1?m(!1):r()})}),F(()=>{g!==void 0&&g(),clearTimeout(b),p.value===!0&&me(),i.instances[e.side]===M&&(i.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Et(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),vt.value)),r.push(Me("div",{ref:"backdrop",class:lt.value,style:rt.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>ht.value)));const h=w.value===!0&&o.mini!==void 0,S=[k("div",{...l,key:""+h,class:[dt.value,l.class]},h===!0?o.mini():Y(o.default))];return e.elevated===!0&&p.value===!0&&S.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Me("aside",{ref:"content",class:ft.value,style:ct.value},S,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>mt.value)),k("div",{class:"q-drawer-container"},r)}}}),so=V({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:a}}=A(),l=ze(se,()=>{console.error("QPageContainer needs to be child of QLayout")});Ze(zt,!0);const t=v(()=>{const n={};return l.header.space===!0&&(n.paddingTop=`${l.header.size}px`),l.right.space===!0&&(n[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(n.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(n[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),n});return()=>k("div",{class:"q-page-container",style:t.value},Y(o.default))}});const{passive:Ue}=O,uo=["both","horizontal","vertical"];var co=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>uo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,n;q(()=>e.scrollTarget,()=>{c(),f()});function u(){l!==null&&l();const b=Math.max(0,it(t)),g=nt(t),d={top:b-a.position.top,left:g-a.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";a.position={top:b,left:g},a.directionChanged=a.direction!==w,a.delta=d,a.directionChanged===!0&&(a.direction=w,a.inflectionPoint=a.position),o("scroll",{...a})}function f(){t=Gt(n,e.scrollTarget),t.addEventListener("scroll",i,Ue),i(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",i,Ue),t=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[g,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{d(g),l=null}}}const y=A();return X(()=>{n=y.proxy.$el.parentNode,f()}),F(()=>{l!==null&&l(),c()}),Object.assign(y.proxy,{trigger:i,getPosition:()=>a}),Ee}}),fo=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:a}){const{proxy:{$q:l}}=A(),t=_(null),n=_(l.screen.height),u=_(e.container===!0?0:l.screen.width),f=_({position:0,direction:"down",inflectionPoint:0}),c=_(0),i=_(Ge.value===!0?0:ge()),y=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),g=v(()=>i.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=v(()=>i.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function w(m){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};f.value=L,e.onScroll!==void 0&&a("scroll",L)}}function T(m){const{height:L,width:Q}=m;let W=!1;n.value!==L&&(W=!0,n.value=L,e.onScrollHeight!==void 0&&a("scroll-height",L),B()),u.value!==Q&&(W=!0,u.value=Q),W===!0&&e.onResize!==void 0&&a("resize",m)}function p({height:m}){c.value!==m&&(c.value=m,B())}function B(){if(e.container===!0){const m=n.value>c.value?ge():0;i.value!==m&&(i.value=m)}}let s;const C={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:i,totalWidth:v(()=>u.value+i.value),rows:v(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:oe({size:0,offset:0,space:!1}),right:oe({size:300,offset:0,space:!1}),footer:oe({size:0,offset:0,space:!1}),left:oe({size:300,offset:0,space:!1}),scroll:f,animate(){s!==void 0?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),s=void 0},155)},update(m,L,Q){C[m][L]=Q}};if(Ze(se,C),ge()>0){let Q=function(){m=null,L.classList.remove("hide-scrollbar")},W=function(){if(m===null){if(L.scrollHeight>l.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(Q,300)},M=function(z){m!==null&&z==="remove"&&(clearTimeout(m),Q()),window[`${z}EventListener`]("resize",W)},m=null;const L=document.body;q(()=>e.container!==!0?"add":"remove",M),e.container!==!0&&M("add"),$t(()=>{M("remove")})}return()=>{const m=Lt(o.default,[k(co,{onScroll:w}),k(Se,{onResize:T})]),L=k("div",{class:y.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},m);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(Se,{onResize:p}),k("div",{class:"absolute-full",style:g.value},[k("div",{class:"scroll",style:d.value},[L])])]):L}}}),Ke=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const a=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:a.value},Y(o.default))}});const vo=et({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function mo(e,o,a,l,t,n){return J(),le(Wt,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:E(()=>[e.icon?(J(),le(Ke,{key:0,avatar:""},{default:E(()=>[x(kt,{name:e.icon},null,8,["name"])]),_:1})):Bt("",!0),x(Ke,null,{default:E(()=>[x(xe,null,{default:E(()=>[re(_e(e.title),1)]),_:1}),x(xe,{caption:""},{default:E(()=>[re(_e(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var ho=tt(vo,[["render",mo]]);const po=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],yo=et({name:"MainLayout",components:{EssentialLink:ho},setup(){const e=_(!1);return{essentialLinks:po,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),bo=re(" Quasar App "),go=re(" Essential Links ");function wo(e,o,a,l,t,n){const u=We("EssentialLink"),f=We("router-view");return J(),le(fo,{view:"lHh Lpr lFf"},{default:E(()=>[x(It,{elevated:""},{default:E(()=>[x(Rt,null,{default:E(()=>[x(Tt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),x(At,null,{default:E(()=>[bo]),_:1}),Pt("div",null,"Quasar v"+_e(e.$q.version),1)]),_:1})]),_:1}),x(ro,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:E(()=>[x(Ft,null,{default:E(()=>[x(xe,{header:""},{default:E(()=>[go]),_:1}),(J(!0),Ot(Qt,null,Vt(e.essentialLinks,c=>(J(),le(u,Mt({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),x(so,null,{default:E(()=>[x(f)]),_:1})]),_:1})}var To=tt(yo,[["render",wo]]);export{To as default};
