import{R as c,j as e,y as i}from"./app-CgL3nX-_.js";import{A as d}from"./AppLayout-tYwun5hC.js";import{C as m,a as x,b as p,c as u,d as h}from"./card-CXi82i0J.js";import{B as n}from"./button-CgAfvIrq.js";import{L as j,I as f}from"./label-DBFZBO8Q.js";import{B as v}from"./badge-DwrylQoL.js";import"./index-DzxyDsWD.js";import"./createLucideIcon-BPVcczEl.js";import"./ApplicationLogo-0Uk8gGo3.js";function F({book:s}){const[r,l]=c.useState(7),t=s.inventories[0],o=a=>{a.preventDefault(),i.post(route("book.rent.create",s.id),{duration:r})};return e.jsx(d,{children:e.jsx(m,{className:"max-w-2xl mx-auto",children:e.jsxs("div",{className:"sm:flex",children:[e.jsx("div",{className:"sm:w-1/3 aspect-[1/1.6] relative",children:e.jsx("img",{src:"/placeholder.png?height=512&width=320",alt:s.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"sm:w-2/3",children:[e.jsx(x,{children:e.jsxs(p,{children:["Rent Book: ",s.title]})}),e.jsx(u,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-muted-foreground",children:s.description}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.genres.map(a=>e.jsx(v,{variant:"secondary",children:a.name},a.id))}),t&&e.jsxs("p",{className:"font-semibold",children:["Rent Price: $",t.rentPrice.toFixed(2)," per day"]}),e.jsxs("form",{onSubmit:o,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(j,{htmlFor:"duration",children:"Rent Duration (days)"}),e.jsx(f,{id:"duration",type:"number",value:r,onChange:a=>l(Number(a.target.value)),min:"1"})]}),t&&e.jsxs("p",{className:"font-semibold",children:["Total Cost: $",(r*t.rentPrice).toFixed(2)]}),e.jsx(n,{type:"submit",className:"w-full",children:"Confirm Rent"})]})]})}),e.jsx(h,{children:e.jsx(n,{variant:"outline",onClick:()=>i.visit(route("book.show",s.id)),className:"w-full",children:"Back to Book Details"})})]})]})})})}export{F as default};