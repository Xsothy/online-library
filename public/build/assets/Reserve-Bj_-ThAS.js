import{R as m,j as e,y as t}from"./app-D_vhVrm3.js";import{t as n}from"./AppLayout-C9X-3CYQ.js";import{C as c,a as d,b as p,d as x,e as h}from"./card-BGjKFCf3.js";import{B as l}from"./button-CD4Gs51G.js";import{B as u}from"./badge-CImv0y8b.js";import"./use-toast-13NMSP70.js";import"./react-icons.esm-Cv7irvvZ.js";import"./tslib.es6-BEqqlEXV.js";import"./index-6EzLRE8P.js";import"./index-CzvFnXoH.js";import"./index-BKsbxoZZ.js";import"./utils-DnNDQBbQ.js";import"./dialog-DSa5pEin.js";import"./index-C3FvpEZ8.js";import"./dropdown-menu-BoJpkMNV.js";import"./index-TuTW34uO.js";import"./index-CUTegp9Z.js";import"./index-B14AE2QW.js";import"./index-DOxQzMJ-.js";import"./createLucideIcon-CYoFNr_F.js";import"./ApplicationLogo-D9VID2Lj.js";import"./settings-CF1K4GX7.js";function S({book:s}){const[r,i]=m.useState(!1),o=()=>{i(!0),t.post(route("book.reserve.create",s.id)),i(!1)};return e.jsx(n,{children:e.jsx(c,{className:"max-w-3xl mx-auto",children:e.jsxs("div",{className:"sm:flex",children:[e.jsx("div",{className:"sm:w-1/3 aspect-[1/1.6] relative",children:e.jsx("img",{src:"/placeholder.png?height=512&width=320",alt:s.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"sm:w-2/3",children:[e.jsx(d,{children:e.jsxs(p,{children:["Reserve Book: ",s.title]})}),e.jsx(x,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-muted-foreground",children:s.description}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.genres.map(a=>e.jsx(u,{variant:"secondary",children:a.name},a.id))}),e.jsx("p",{children:"This book is currently unavailable. By reserving, you'll be notified when it becomes available for rent."}),e.jsx(l,{onClick:o,disabled:r,className:"w-full",children:r?"Reserving...":"Confirm Reservation"})]})}),e.jsx(h,{children:e.jsx(l,{variant:"outline",onClick:()=>t.visit(route("book.show",s.id)),className:"w-full",children:"Back to Book Details"})})]})]})})})}export{S as default};
