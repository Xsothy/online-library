import{r as n,j as t,b as Me,y as Pt}from"./app-YgjliR5R.js";import{c as Oe,u as we,a as T,P as Rt,b as Et,C as De,d as _t,e as Le,f as kt,g as K,h as At,i as Mt,R as Ot,F as Dt,D as Lt,j as Bt,k as Pe,l as Vt,V as Ht,m as Ft,n as Ut,o as Wt,p as Kt,q as $t,r as Gt,s as zt,A as qt}from"./AppLayout-L-iCnFio.js";import Xt from"./BookCard-DEHS6_H1.js";import Yt from"./LayoutToggle-Bu9XQA4G.js";import{L as Zt,I as Jt}from"./label-io48mJXA.js";import{u as O,c as B,S as Qt,B as eo}from"./button-DZVFtQY2.js";import{P as _}from"./index-AEOoPOvA.js";import{C as to,a as oo,b as no,c as ro}from"./card-CyXRSyTU.js";import"./badge-D-ZDOici.js";import"./createLucideIcon-Cwc4rHxk.js";function Be(o){const r=n.useRef({value:o,previous:o});return n.useMemo(()=>(r.current.value!==o&&(r.current.previous=r.current.value,r.current.value=o),r.current.previous),[o])}var Re="Checkbox",[so,Xo]=Oe(Re),[ao,lo]=so(Re),Ve=n.forwardRef((o,r)=>{const{__scopeCheckbox:e,name:a,checked:l,defaultChecked:u,required:c,disabled:i,value:s="on",onCheckedChange:p,...S}=o,[g,b]=n.useState(null),N=O(r,v=>b(v)),d=n.useRef(!1),h=g?!!g.closest("form"):!0,[w=!1,x]=we({prop:l,defaultProp:u,onChange:p}),f=n.useRef(w);return n.useEffect(()=>{const v=g==null?void 0:g.form;if(v){const R=()=>x(f.current);return v.addEventListener("reset",R),()=>v.removeEventListener("reset",R)}},[g,x]),t.jsxs(ao,{scope:e,state:w,disabled:i,children:[t.jsx(_.button,{type:"button",role:"checkbox","aria-checked":Z(w)?"mixed":w,"aria-required":c,"data-state":Ue(w),"data-disabled":i?"":void 0,disabled:i,value:s,...S,ref:N,onKeyDown:T(o.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:T(o.onClick,v=>{x(R=>Z(R)?!0:!R),h&&(d.current=v.isPropagationStopped(),d.current||v.stopPropagation())})}),h&&t.jsx(co,{control:g,bubbles:!d.current,name:a,value:s,checked:w,required:c,disabled:i,style:{transform:"translateX(-100%)"}})]})});Ve.displayName=Re;var He="CheckboxIndicator",Fe=n.forwardRef((o,r)=>{const{__scopeCheckbox:e,forceMount:a,...l}=o,u=lo(He,e);return t.jsx(Rt,{present:a||Z(u.state)||u.state===!0,children:t.jsx(_.span,{"data-state":Ue(u.state),"data-disabled":u.disabled?"":void 0,...l,ref:r,style:{pointerEvents:"none",...o.style}})})});Fe.displayName=He;var co=o=>{const{control:r,checked:e,bubbles:a=!0,...l}=o,u=n.useRef(null),c=Be(e),i=Et(r);return n.useEffect(()=>{const s=u.current,p=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(p,"checked").set;if(c!==e&&g){const b=new Event("click",{bubbles:a});s.indeterminate=Z(e),g.call(s,Z(e)?!1:e),s.dispatchEvent(b)}},[c,e,a]),t.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:Z(e)?!1:e,...l,tabIndex:-1,ref:u,style:{...o.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function Z(o){return o==="indeterminate"}function Ue(o){return Z(o)?"indeterminate":o?"checked":"unchecked"}var We=Ve,io=Fe;const Ke=n.forwardRef(({className:o,...r},e)=>t.jsx(We,{ref:e,className:B("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",o),...r,children:t.jsx(io,{className:B("flex items-center justify-center text-current"),children:t.jsx(De,{className:"h-4 w-4"})})}));Ke.displayName=We.displayName;function _e(o,[r,e]){return Math.min(e,Math.max(r,o))}var uo=[" ","Enter","ArrowUp","ArrowDown"],po=[" ","Enter"],le="Select",[ue,pe,fo]=_t(le),[ne,Yo]=Oe(le,[fo,Le]),fe=Le(),[mo,$]=ne(le),[ho,xo]=ne(le),$e=o=>{const{__scopeSelect:r,children:e,open:a,defaultOpen:l,onOpenChange:u,value:c,defaultValue:i,onValueChange:s,dir:p,name:S,autoComplete:g,disabled:b,required:N}=o,d=fe(r),[h,w]=n.useState(null),[x,f]=n.useState(null),[v,R]=n.useState(!1),M=Ut(p),[re=!1,E]=we({prop:a,defaultProp:l,onChange:u}),[A,z]=we({prop:c,defaultProp:i,onChange:s}),Q=n.useRef(null),q=h?!!h.closest("form"):!0,[D,F]=n.useState(new Set),U=Array.from(D).map(P=>P.props.value).join(";");return t.jsx(Wt,{...d,children:t.jsxs(mo,{required:N,scope:r,trigger:h,onTriggerChange:w,valueNode:x,onValueNodeChange:f,valueNodeHasChildren:v,onValueNodeHasChildrenChange:R,contentId:Pe(),value:A,onValueChange:z,open:re,onOpenChange:E,dir:M,triggerPointerDownPosRef:Q,disabled:b,children:[t.jsx(ue.Provider,{scope:r,children:t.jsx(ho,{scope:o.__scopeSelect,onNativeOptionAdd:n.useCallback(P=>{F(L=>new Set(L).add(P))},[]),onNativeOptionRemove:n.useCallback(P=>{F(L=>{const V=new Set(L);return V.delete(P),V})},[]),children:e})}),q?t.jsxs(xt,{"aria-hidden":!0,required:N,tabIndex:-1,name:S,autoComplete:g,value:A,onChange:P=>z(P.target.value),disabled:b,children:[A===void 0?t.jsx("option",{value:""}):null,Array.from(D)]},U):null]})})};$e.displayName=le;var Ge="SelectTrigger",ze=n.forwardRef((o,r)=>{const{__scopeSelect:e,disabled:a=!1,...l}=o,u=fe(e),c=$(Ge,e),i=c.disabled||a,s=O(r,c.onTriggerChange),p=pe(e),[S,g,b]=vt(d=>{const h=p().filter(f=>!f.disabled),w=h.find(f=>f.value===c.value),x=gt(h,d,w);x!==void 0&&c.onValueChange(x.value)}),N=()=>{i||(c.onOpenChange(!0),b())};return t.jsx(kt,{asChild:!0,...u,children:t.jsx(_.button,{type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":ht(c.value)?"":void 0,...l,ref:s,onClick:T(l.onClick,d=>{d.currentTarget.focus()}),onPointerDown:T(l.onPointerDown,d=>{const h=d.target;h.hasPointerCapture(d.pointerId)&&h.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&(N(),c.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)},d.preventDefault())}),onKeyDown:T(l.onKeyDown,d=>{const h=S.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&g(d.key),!(h&&d.key===" ")&&uo.includes(d.key)&&(N(),d.preventDefault())})})})});ze.displayName=Ge;var qe="SelectValue",Xe=n.forwardRef((o,r)=>{const{__scopeSelect:e,className:a,style:l,children:u,placeholder:c="",...i}=o,s=$(qe,e),{onValueNodeHasChildrenChange:p}=s,S=u!==void 0,g=O(r,s.onValueNodeChange);return K(()=>{p(S)},[p,S]),t.jsx(_.span,{...i,ref:g,style:{pointerEvents:"none"},children:ht(s.value)?t.jsx(t.Fragment,{children:c}):u})});Xe.displayName=qe;var vo="SelectIcon",Ye=n.forwardRef((o,r)=>{const{__scopeSelect:e,children:a,...l}=o;return t.jsx(_.span,{"aria-hidden":!0,...l,ref:r,children:a||"▼"})});Ye.displayName=vo;var go="SelectPortal",Ze=o=>t.jsx(Kt,{asChild:!0,...o});Ze.displayName=go;var J="SelectContent",Je=n.forwardRef((o,r)=>{const e=$(J,o.__scopeSelect),[a,l]=n.useState();if(K(()=>{l(new DocumentFragment)},[]),!e.open){const u=a;return u?Me.createPortal(t.jsx(Qe,{scope:o.__scopeSelect,children:t.jsx(ue.Slot,{scope:o.__scopeSelect,children:t.jsx("div",{children:o.children})})}),u):null}return t.jsx(et,{...o,ref:r})});Je.displayName=J;var H=10,[Qe,G]=ne(J),So="SelectContentImpl",et=n.forwardRef((o,r)=>{const{__scopeSelect:e,position:a="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:u,onPointerDownOutside:c,side:i,sideOffset:s,align:p,alignOffset:S,arrowPadding:g,collisionBoundary:b,collisionPadding:N,sticky:d,hideWhenDetached:h,avoidCollisions:w,...x}=o,f=$(J,e),[v,R]=n.useState(null),[M,re]=n.useState(null),E=O(r,m=>R(m)),[A,z]=n.useState(null),[Q,q]=n.useState(null),D=pe(e),[F,U]=n.useState(!1),P=n.useRef(!1);n.useEffect(()=>{if(v)return At(v)},[v]),Mt();const L=n.useCallback(m=>{const[j,...k]=D().map(C=>C.ref.current),[I]=k.slice(-1),y=document.activeElement;for(const C of m)if(C===y||(C==null||C.scrollIntoView({block:"nearest"}),C===j&&M&&(M.scrollTop=0),C===I&&M&&(M.scrollTop=M.scrollHeight),C==null||C.focus(),document.activeElement!==y))return},[D,M]),V=n.useCallback(()=>L([A,v]),[L,A,v]);n.useEffect(()=>{F&&V()},[F,V]);const{onOpenChange:ee,triggerPointerDownPosRef:W}=f;n.useEffect(()=>{if(v){let m={x:0,y:0};const j=I=>{var y,C;m={x:Math.abs(Math.round(I.pageX)-(((y=W.current)==null?void 0:y.x)??0)),y:Math.abs(Math.round(I.pageY)-(((C=W.current)==null?void 0:C.y)??0))}},k=I=>{m.x<=10&&m.y<=10?I.preventDefault():v.contains(I.target)||ee(!1),document.removeEventListener("pointermove",j),W.current=null};return W.current!==null&&(document.addEventListener("pointermove",j),document.addEventListener("pointerup",k,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",j),document.removeEventListener("pointerup",k,{capture:!0})}}},[v,ee,W]),n.useEffect(()=>{const m=()=>ee(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[ee]);const[me,ce]=vt(m=>{const j=D().filter(y=>!y.disabled),k=j.find(y=>y.ref.current===document.activeElement),I=gt(j,m,k);I&&setTimeout(()=>I.ref.current.focus())}),he=n.useCallback((m,j,k)=>{const I=!P.current&&!k;(f.value!==void 0&&f.value===j||I)&&(z(m),I&&(P.current=!0))},[f.value]),xe=n.useCallback(()=>v==null?void 0:v.focus(),[v]),te=n.useCallback((m,j,k)=>{const I=!P.current&&!k;(f.value!==void 0&&f.value===j||I)&&q(m)},[f.value]),ie=a==="popper"?ye:tt,se=ie===ye?{side:i,sideOffset:s,align:p,alignOffset:S,arrowPadding:g,collisionBoundary:b,collisionPadding:N,sticky:d,hideWhenDetached:h,avoidCollisions:w}:{};return t.jsx(Qe,{scope:e,content:v,viewport:M,onViewportChange:re,itemRefCallback:he,selectedItem:A,onItemLeave:xe,itemTextRefCallback:te,focusSelectedItem:V,selectedItemText:Q,position:a,isPositioned:F,searchRef:me,children:t.jsx(Ot,{as:Qt,allowPinchZoom:!0,children:t.jsx(Dt,{asChild:!0,trapped:f.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:T(l,m=>{var j;(j=f.trigger)==null||j.focus({preventScroll:!0}),m.preventDefault()}),children:t.jsx(Lt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>f.onOpenChange(!1),children:t.jsx(ie,{role:"listbox",id:f.contentId,"data-state":f.open?"open":"closed",dir:f.dir,onContextMenu:m=>m.preventDefault(),...x,...se,onPlaced:()=>U(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:T(x.onKeyDown,m=>{const j=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!j&&m.key.length===1&&ce(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let I=D().filter(y=>!y.disabled).map(y=>y.ref.current);if(["ArrowUp","End"].includes(m.key)&&(I=I.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const y=m.target,C=I.indexOf(y);I=I.slice(C+1)}setTimeout(()=>L(I)),m.preventDefault()}})})})})})})});et.displayName=So;var wo="SelectItemAlignedPosition",tt=n.forwardRef((o,r)=>{const{__scopeSelect:e,onPlaced:a,...l}=o,u=$(J,e),c=G(J,e),[i,s]=n.useState(null),[p,S]=n.useState(null),g=O(r,E=>S(E)),b=pe(e),N=n.useRef(!1),d=n.useRef(!0),{viewport:h,selectedItem:w,selectedItemText:x,focusSelectedItem:f}=c,v=n.useCallback(()=>{if(u.trigger&&u.valueNode&&i&&p&&h&&w&&x){const E=u.trigger.getBoundingClientRect(),A=p.getBoundingClientRect(),z=u.valueNode.getBoundingClientRect(),Q=x.getBoundingClientRect();if(u.dir!=="rtl"){const y=Q.left-A.left,C=z.left-y,X=E.left-C,Y=E.width+X,ve=Math.max(Y,A.width),ge=window.innerWidth-H,Se=_e(C,[H,ge-ve]);i.style.minWidth=Y+"px",i.style.left=Se+"px"}else{const y=A.right-Q.right,C=window.innerWidth-z.right-y,X=window.innerWidth-E.right-C,Y=E.width+X,ve=Math.max(Y,A.width),ge=window.innerWidth-H,Se=_e(C,[H,ge-ve]);i.style.minWidth=Y+"px",i.style.right=Se+"px"}const q=b(),D=window.innerHeight-H*2,F=h.scrollHeight,U=window.getComputedStyle(p),P=parseInt(U.borderTopWidth,10),L=parseInt(U.paddingTop,10),V=parseInt(U.borderBottomWidth,10),ee=parseInt(U.paddingBottom,10),W=P+L+F+ee+V,me=Math.min(w.offsetHeight*5,W),ce=window.getComputedStyle(h),he=parseInt(ce.paddingTop,10),xe=parseInt(ce.paddingBottom,10),te=E.top+E.height/2-H,ie=D-te,se=w.offsetHeight/2,m=w.offsetTop+se,j=P+L+m,k=W-j;if(j<=te){const y=w===q[q.length-1].ref.current;i.style.bottom="0px";const C=p.clientHeight-h.offsetTop-h.offsetHeight,X=Math.max(ie,se+(y?xe:0)+C+V),Y=j+X;i.style.height=Y+"px"}else{const y=w===q[0].ref.current;i.style.top="0px";const X=Math.max(te,P+h.offsetTop+(y?he:0)+se)+k;i.style.height=X+"px",h.scrollTop=j-te+h.offsetTop}i.style.margin=`${H}px 0`,i.style.minHeight=me+"px",i.style.maxHeight=D+"px",a==null||a(),requestAnimationFrame(()=>N.current=!0)}},[b,u.trigger,u.valueNode,i,p,h,w,x,u.dir,a]);K(()=>v(),[v]);const[R,M]=n.useState();K(()=>{p&&M(window.getComputedStyle(p).zIndex)},[p]);const re=n.useCallback(E=>{E&&d.current===!0&&(v(),f==null||f(),d.current=!1)},[v,f]);return t.jsx(Co,{scope:e,contentWrapper:i,shouldExpandOnScrollRef:N,onScrollButtonChange:re,children:t.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R},children:t.jsx(_.div,{...l,ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});tt.displayName=wo;var yo="SelectPopperPosition",ye=n.forwardRef((o,r)=>{const{__scopeSelect:e,align:a="start",collisionPadding:l=H,...u}=o,c=fe(e);return t.jsx(Bt,{...c,...u,ref:r,align:a,collisionPadding:l,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});ye.displayName=yo;var[Co,Ee]=ne(J,{}),Ce="SelectViewport",ot=n.forwardRef((o,r)=>{const{__scopeSelect:e,nonce:a,...l}=o,u=G(Ce,e),c=Ee(Ce,e),i=O(r,u.onViewportChange),s=n.useRef(0);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),t.jsx(ue.Slot,{scope:e,children:t.jsx(_.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:i,style:{position:"relative",flex:1,overflow:"auto",...l.style},onScroll:T(l.onScroll,p=>{const S=p.currentTarget,{contentWrapper:g,shouldExpandOnScrollRef:b}=c;if(b!=null&&b.current&&g){const N=Math.abs(s.current-S.scrollTop);if(N>0){const d=window.innerHeight-H*2,h=parseFloat(g.style.minHeight),w=parseFloat(g.style.height),x=Math.max(h,w);if(x<d){const f=x+N,v=Math.min(d,f),R=f-v;g.style.height=v+"px",g.style.bottom==="0px"&&(S.scrollTop=R>0?R:0,g.style.justifyContent="flex-end")}}}s.current=S.scrollTop})})})]})});ot.displayName=Ce;var nt="SelectGroup",[bo,No]=ne(nt),Io=n.forwardRef((o,r)=>{const{__scopeSelect:e,...a}=o,l=Pe();return t.jsx(bo,{scope:e,id:l,children:t.jsx(_.div,{role:"group","aria-labelledby":l,...a,ref:r})})});Io.displayName=nt;var rt="SelectLabel",st=n.forwardRef((o,r)=>{const{__scopeSelect:e,...a}=o,l=No(rt,e);return t.jsx(_.div,{id:l.id,...a,ref:r})});st.displayName=rt;var de="SelectItem",[jo,at]=ne(de),lt=n.forwardRef((o,r)=>{const{__scopeSelect:e,value:a,disabled:l=!1,textValue:u,...c}=o,i=$(de,e),s=G(de,e),p=i.value===a,[S,g]=n.useState(u??""),[b,N]=n.useState(!1),d=O(r,x=>{var f;return(f=s.itemRefCallback)==null?void 0:f.call(s,x,a,l)}),h=Pe(),w=()=>{l||(i.onValueChange(a),i.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return t.jsx(jo,{scope:e,value:a,disabled:l,textId:h,isSelected:p,onItemTextChange:n.useCallback(x=>{g(f=>f||((x==null?void 0:x.textContent)??"").trim())},[]),children:t.jsx(ue.ItemSlot,{scope:e,value:a,disabled:l,textValue:S,children:t.jsx(_.div,{role:"option","aria-labelledby":h,"data-highlighted":b?"":void 0,"aria-selected":p&&b,"data-state":p?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...c,ref:d,onFocus:T(c.onFocus,()=>N(!0)),onBlur:T(c.onBlur,()=>N(!1)),onPointerUp:T(c.onPointerUp,w),onPointerMove:T(c.onPointerMove,x=>{var f;l?(f=s.onItemLeave)==null||f.call(s):x.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(c.onPointerLeave,x=>{var f;x.currentTarget===document.activeElement&&((f=s.onItemLeave)==null||f.call(s))}),onKeyDown:T(c.onKeyDown,x=>{var v;((v=s.searchRef)==null?void 0:v.current)!==""&&x.key===" "||(po.includes(x.key)&&w(),x.key===" "&&x.preventDefault())})})})})});lt.displayName=de;var ae="SelectItemText",ct=n.forwardRef((o,r)=>{const{__scopeSelect:e,className:a,style:l,...u}=o,c=$(ae,e),i=G(ae,e),s=at(ae,e),p=xo(ae,e),[S,g]=n.useState(null),b=O(r,x=>g(x),s.onItemTextChange,x=>{var f;return(f=i.itemTextRefCallback)==null?void 0:f.call(i,x,s.value,s.disabled)}),N=S==null?void 0:S.textContent,d=n.useMemo(()=>t.jsx("option",{value:s.value,disabled:s.disabled,children:N},s.value),[s.disabled,s.value,N]),{onNativeOptionAdd:h,onNativeOptionRemove:w}=p;return K(()=>(h(d),()=>w(d)),[h,w,d]),t.jsxs(t.Fragment,{children:[t.jsx(_.span,{id:s.textId,...u,ref:b}),s.isSelected&&c.valueNode&&!c.valueNodeHasChildren?Me.createPortal(u.children,c.valueNode):null]})});ct.displayName=ae;var it="SelectItemIndicator",dt=n.forwardRef((o,r)=>{const{__scopeSelect:e,...a}=o;return at(it,e).isSelected?t.jsx(_.span,{"aria-hidden":!0,...a,ref:r}):null});dt.displayName=it;var be="SelectScrollUpButton",ut=n.forwardRef((o,r)=>{const e=G(be,o.__scopeSelect),a=Ee(be,o.__scopeSelect),[l,u]=n.useState(!1),c=O(r,a.onScrollButtonChange);return K(()=>{if(e.viewport&&e.isPositioned){let i=function(){const p=s.scrollTop>0;u(p)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),l?t.jsx(ft,{...o,ref:c,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop-s.offsetHeight)}}):null});ut.displayName=be;var Ne="SelectScrollDownButton",pt=n.forwardRef((o,r)=>{const e=G(Ne,o.__scopeSelect),a=Ee(Ne,o.__scopeSelect),[l,u]=n.useState(!1),c=O(r,a.onScrollButtonChange);return K(()=>{if(e.viewport&&e.isPositioned){let i=function(){const p=s.scrollHeight-s.clientHeight,S=Math.ceil(s.scrollTop)<p;u(S)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),l?t.jsx(ft,{...o,ref:c,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop+s.offsetHeight)}}):null});pt.displayName=Ne;var ft=n.forwardRef((o,r)=>{const{__scopeSelect:e,onAutoScroll:a,...l}=o,u=G("SelectScrollButton",e),c=n.useRef(null),i=pe(e),s=n.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return n.useEffect(()=>()=>s(),[s]),K(()=>{var S;const p=i().find(g=>g.ref.current===document.activeElement);(S=p==null?void 0:p.ref.current)==null||S.scrollIntoView({block:"nearest"})},[i]),t.jsx(_.div,{"aria-hidden":!0,...l,ref:r,style:{flexShrink:0,...l.style},onPointerDown:T(l.onPointerDown,()=>{c.current===null&&(c.current=window.setInterval(a,50))}),onPointerMove:T(l.onPointerMove,()=>{var p;(p=u.onItemLeave)==null||p.call(u),c.current===null&&(c.current=window.setInterval(a,50))}),onPointerLeave:T(l.onPointerLeave,()=>{s()})})}),To="SelectSeparator",mt=n.forwardRef((o,r)=>{const{__scopeSelect:e,...a}=o;return t.jsx(_.div,{"aria-hidden":!0,...a,ref:r})});mt.displayName=To;var Ie="SelectArrow",Po=n.forwardRef((o,r)=>{const{__scopeSelect:e,...a}=o,l=fe(e),u=$(Ie,e),c=G(Ie,e);return u.open&&c.position==="popper"?t.jsx(Vt,{...l,...a,ref:r}):null});Po.displayName=Ie;function ht(o){return o===""||o===void 0}var xt=n.forwardRef((o,r)=>{const{value:e,...a}=o,l=n.useRef(null),u=O(r,l),c=Be(e);return n.useEffect(()=>{const i=l.current,s=window.HTMLSelectElement.prototype,S=Object.getOwnPropertyDescriptor(s,"value").set;if(c!==e&&S){const g=new Event("change",{bubbles:!0});S.call(i,e),i.dispatchEvent(g)}},[c,e]),t.jsx(Ht,{asChild:!0,children:t.jsx("select",{...a,ref:u,defaultValue:e})})});xt.displayName="BubbleSelect";function vt(o){const r=Ft(o),e=n.useRef(""),a=n.useRef(0),l=n.useCallback(c=>{const i=e.current+c;r(i),function s(p){e.current=p,window.clearTimeout(a.current),p!==""&&(a.current=window.setTimeout(()=>s(""),1e3))}(i)},[r]),u=n.useCallback(()=>{e.current="",window.clearTimeout(a.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(a.current),[]),[e,l,u]}function gt(o,r,e){const l=r.length>1&&Array.from(r).every(p=>p===r[0])?r[0]:r,u=e?o.indexOf(e):-1;let c=Ro(o,Math.max(u,0));l.length===1&&(c=c.filter(p=>p!==e));const s=c.find(p=>p.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==e?s:void 0}function Ro(o,r){return o.map((e,a)=>o[(r+a)%o.length])}var Eo=$e,St=ze,_o=Xe,ko=Ye,Ao=Ze,wt=Je,Mo=ot,yt=st,Ct=lt,Oo=ct,Do=dt,bt=ut,Nt=pt,It=mt;const ke=Eo,Ae=_o,je=n.forwardRef(({className:o,children:r,...e},a)=>t.jsxs(St,{ref:a,className:B("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...e,children:[r,t.jsx(ko,{asChild:!0,children:t.jsx($t,{className:"h-4 w-4 opacity-50"})})]}));je.displayName=St.displayName;const jt=n.forwardRef(({className:o,...r},e)=>t.jsx(bt,{ref:e,className:B("flex cursor-default items-center justify-center py-1",o),...r,children:t.jsx(Gt,{})}));jt.displayName=bt.displayName;const Tt=n.forwardRef(({className:o,...r},e)=>t.jsx(Nt,{ref:e,className:B("flex cursor-default items-center justify-center py-1",o),...r,children:t.jsx(zt,{})}));Tt.displayName=Nt.displayName;const Te=n.forwardRef(({className:o,children:r,position:e="popper",...a},l)=>t.jsx(Ao,{children:t.jsxs(wt,{ref:l,className:B("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:e,...a,children:[t.jsx(jt,{}),t.jsx(Mo,{className:B("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),t.jsx(Tt,{})]})}));Te.displayName=wt.displayName;const Lo=n.forwardRef(({className:o,...r},e)=>t.jsx(yt,{ref:e,className:B("px-2 py-1.5 text-sm font-semibold",o),...r}));Lo.displayName=yt.displayName;const oe=n.forwardRef(({className:o,children:r,...e},a)=>t.jsxs(Ct,{ref:a,className:B("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...e,children:[t.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(Do,{children:t.jsx(De,{className:"h-4 w-4"})})}),t.jsx(Oo,{children:r})]}));oe.displayName=Ct.displayName;const Bo=n.forwardRef(({className:o,...r},e)=>t.jsx(It,{ref:e,className:B("-mx-1 my-1 h-px bg-muted",o),...r}));Bo.displayName=It.displayName;function Zo({books:o,genres:r}){const[e,a]=n.useState([]),[l,u]=n.useState(""),[c,i]=n.useState("grid"),[s,p]=n.useState("all"),[S,g]=n.useState("name"),b=d=>{a(h=>h.includes(d)?h.filter(w=>w!==d):[...h,d])},N=()=>{Pt.get(route("book.index"),{genres:e,search:l,availability:s,sort:S},{preserveState:!0,preserveScroll:!0})};return t.jsx(qt,{children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[t.jsx("div",{className:"md:w-1/4 space-y-6",children:t.jsxs(to,{children:[t.jsx(oo,{children:t.jsx(no,{children:"Filters"})}),t.jsxs(ro,{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"Genres"}),r.map(d=>t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(Ke,{id:`genre-${d.id}`,checked:e.includes(d.id.toString()),onCheckedChange:()=>b(d.id.toString())}),t.jsx(Zt,{htmlFor:`genre-${d.id}`,children:d.name})]},d.id))]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"Availability"}),t.jsxs(ke,{value:s,onValueChange:d=>p(d),children:[t.jsx(je,{children:t.jsx(Ae,{placeholder:"Select availability"})}),t.jsxs(Te,{children:[t.jsx(oe,{value:"all",children:"All"}),t.jsx(oe,{value:"available",children:"Available"}),t.jsx(oe,{value:"unavailable",children:"Unavailable"})]})]})]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"Sort By"}),t.jsxs(ke,{value:S,onValueChange:d=>g(d),children:[t.jsx(je,{children:t.jsx(Ae,{placeholder:"Select sort option"})}),t.jsxs(Te,{children:[t.jsx(oe,{value:"name",children:"Name"}),t.jsx(oe,{value:"rating",children:"Rating"})]})]})]}),t.jsx(eo,{onClick:N,className:"w-full",children:"Apply Filters"})]})]})}),t.jsxs("div",{className:"md:w-3/4 space-y-6",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx(Jt,{type:"text",placeholder:"Search books...",value:l,onChange:d=>u(d.target.value),className:"w-full max-w-sm"}),t.jsx(Yt,{layout:c,setLayout:i})]}),t.jsx("div",{className:`grid gap-6 ${c==="grid"?"sm:grid-cols-2 lg:grid-cols-3":"grid-cols-1"}`,children:o.map(d=>t.jsx(Xt,{book:d,layout:c},d.id))})]})]})})}export{Zo as default};
