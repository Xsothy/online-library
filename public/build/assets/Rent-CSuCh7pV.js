import{W as x,q as h,j as t,y as j}from"./app-D_vhVrm3.js";import{t as f}from"./AppLayout-C9X-3CYQ.js";import{C as v,a as N,b,d as g,e as y}from"./card-BGjKFCf3.js";import{B as p}from"./button-CD4Gs51G.js";import{I as C}from"./input-DrZpKnhi.js";import{L as w}from"./label-lU5a3qvq.js";import{B}from"./badge-CImv0y8b.js";import{c as R}from"./utils-DnNDQBbQ.js";import"./use-toast-13NMSP70.js";import"./react-icons.esm-Cv7irvvZ.js";import"./tslib.es6-BEqqlEXV.js";import"./index-6EzLRE8P.js";import"./index-CzvFnXoH.js";import"./index-BKsbxoZZ.js";import"./dialog-DSa5pEin.js";import"./index-C3FvpEZ8.js";import"./dropdown-menu-BoJpkMNV.js";import"./index-TuTW34uO.js";import"./index-CUTegp9Z.js";import"./index-B14AE2QW.js";import"./index-DOxQzMJ-.js";import"./createLucideIcon-CYoFNr_F.js";import"./ApplicationLogo-D9VID2Lj.js";import"./settings-CF1K4GX7.js";function D(e,s){const l=`action.${e}`,{data:c,setData:o,post:n,processing:d,errors:i}=x(s);return{data:c,setData:o,submit:()=>n(route(l)),processing:d,errors:i}}function Z({book:e}){var m;const s=e.inventories[0];if(!((m=h().props.auth)==null?void 0:m.user.id))return t.jsx("div",{children:"Please login to rent this book"});const{data:o,setData:n,submit:d,errors:i,processing:a}=D("book-rent",{id:e.id,duration:7}),u=r=>{r.preventDefault(),d()};return t.jsx(f,{children:t.jsx(v,{className:"max-w-2xl mx-auto",children:t.jsxs("div",{className:"sm:flex",children:[t.jsx("div",{className:"sm:w-1/3 aspect-[1/1.6] relative",children:t.jsx("img",{src:"/placeholder.png?height=512&width=320",alt:e.title,className:"w-full h-full object-cover"})}),t.jsxs("div",{className:"sm:w-2/3",children:[t.jsx(N,{children:t.jsxs(b,{children:["Rent Book: ",e.title]})}),t.jsx(g,{children:t.jsxs("div",{className:"space-y-4",children:[t.jsx("p",{className:"text-muted-foreground",children:e.description}),t.jsx("div",{className:"flex flex-wrap gap-2",children:e.genres.map(r=>t.jsx(B,{variant:"secondary",children:r.name},r.id))}),s&&t.jsxs("p",{className:"font-semibold",children:["Rent Price: $",s.rentPrice.toFixed(2)," per day"]}),t.jsxs("form",{onSubmit:u,className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx(w,{htmlFor:"duration",children:"Rent Duration (days)"}),t.jsx(C,{className:R(i.duration&&"text-destructive border-destructive"),id:"duration",type:"number",value:o.duration,onChange:r=>n("duration",Number(r.target.value)),min:"1"}),i.duration&&t.jsx("p",{className:"text-destructive",children:i.duration})]}),s&&t.jsxs("p",{className:"font-semibold",children:["Total Cost: $",(o.duration*s.rentPrice).toFixed(2)]}),t.jsxs(p,{type:"submit",className:"w-full",disabled:a,children:["Confirm Rent ",a?"...":""]})]})]})}),t.jsx(y,{children:t.jsxs(p,{variant:"outline",onClick:()=>j.visit(route("book.show",e.id)),className:"w-full",disabled:a,children:["Back to Book Details ",a?"...":""]})})]})]})})})}export{Z as default};