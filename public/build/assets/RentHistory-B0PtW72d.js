import{j as e}from"./app-D_vhVrm3.js";import{P as o}from"./ProfileLayout-DcXBbMUU.js";import{C as m,a,b as d,d as p}from"./card-BGjKFCf3.js";import"./AppLayout-C9X-3CYQ.js";import"./use-toast-13NMSP70.js";import"./button-CD4Gs51G.js";import"./utils-DnNDQBbQ.js";import"./react-icons.esm-Cv7irvvZ.js";import"./tslib.es6-BEqqlEXV.js";import"./index-6EzLRE8P.js";import"./index-CzvFnXoH.js";import"./index-BKsbxoZZ.js";import"./dialog-DSa5pEin.js";import"./index-C3FvpEZ8.js";import"./dropdown-menu-BoJpkMNV.js";import"./index-TuTW34uO.js";import"./index-CUTegp9Z.js";import"./index-B14AE2QW.js";import"./index-DOxQzMJ-.js";import"./badge-CImv0y8b.js";import"./createLucideIcon-CYoFNr_F.js";import"./ApplicationLogo-D9VID2Lj.js";import"./settings-CF1K4GX7.js";function L({auth:s}){const r=s.user.rents;return e.jsx(o,{title:"Rent History",auth:s,children:e.jsx("div",{className:"space-y-6",children:r.map(t=>{var i;return e.jsxs(m,{children:[e.jsx(a,{children:e.jsx(d,{children:t.book.title})}),e.jsxs(p,{className:"flex items-start space-x-4",children:[e.jsx("img",{src:((i=t.book.cover)==null?void 0:i.path)||"/placeholder.svg?height=200&width=150",alt:t.book.title,className:"w-24 h-32 object-cover"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-muted-foreground",children:["By ",t.book.author]}),e.jsxs("p",{className:"text-sm mt-2",children:["Rented: ",t.createdAt]}),e.jsxs("p",{className:"text-sm",children:["Due: ",t.dueAt]}),e.jsxs("p",{className:"text-sm",children:["Duration: ",t.duration," days"]}),t.deliveredAt&&e.jsxs("p",{className:"text-sm",children:["Delivered: ",t.deliveredAt]}),t.receivedAt&&e.jsxs("p",{className:"text-sm",children:["Received: ",t.receivedAt]})]})]})]},t.id)})})})}export{L as default};
