import{R as c,j as e,y as i}from"./app-CXkTVRn7.js";import{A as d}from"./AppLayout-BKXVmSSi.js";import{C as m,b as p,c as x,a as u,d as h}from"./card-CjuByd4v.js";import{B as n}from"./button-CI8YzJOI.js";import{L as j,I as f}from"./label-qBG7tDec.js";import{B as v}from"./badge-Y1VkNprX.js";import"./use-toast-D9c3BZAR.js";import"./index-B-x9nhwa.js";import"./settings-C_12YLwM.js";import"./index-DoBOHvV8.js";import"./createLucideIcon-Bh6J_HPG.js";import"./utils-DnNDQBbQ.js";import"./ApplicationLogo-1NpZMivG.js";function A({book:s}){const[r,l]=c.useState(7),a=s.inventories[0],o=t=>{t.preventDefault(),i.post(route("book.rent.create",s.id),{duration:r})};return e.jsx(d,{children:e.jsx(m,{className:"max-w-2xl mx-auto",children:e.jsxs("div",{className:"sm:flex",children:[e.jsx("div",{className:"sm:w-1/3 aspect-[1/1.6] relative",children:e.jsx("img",{src:"/placeholder.png?height=512&width=320",alt:s.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"sm:w-2/3",children:[e.jsx(p,{children:e.jsxs(x,{children:["Rent Book: ",s.title]})}),e.jsx(u,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-muted-foreground",children:s.description}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.genres.map(t=>e.jsx(v,{variant:"secondary",children:t.name},t.id))}),a&&e.jsxs("p",{className:"font-semibold",children:["Rent Price: $",a.rentPrice.toFixed(2)," per day"]}),e.jsxs("form",{onSubmit:o,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"duration",children:"Rent Duration (days)"}),e.jsx(f,{id:"duration",type:"number",value:r,onChange:t=>l(Number(t.target.value)),min:"1"})]}),a&&e.jsxs("p",{className:"font-semibold",children:["Total Cost: $",(r*a.rentPrice).toFixed(2)]}),e.jsx(n,{type:"submit",className:"w-full",children:"Confirm Rent"})]})]})}),e.jsx(h,{children:e.jsx(n,{variant:"outline",onClick:()=>i.visit(route("book.show",s.id)),className:"w-full",children:"Back to Book Details"})})]})]})})})}export{A as default};
