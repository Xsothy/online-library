import{r as o,j as e,y as m}from"./app-YgjliR5R.js";import{A as y}from"./AppLayout-L-iCnFio.js";import{C as a,c,a as h,b as x}from"./card-CyXRSyTU.js";import{B as j}from"./button-DZVFtQY2.js";import{B as C}from"./badge-D-ZDOici.js";import R from"./BookCard-DEHS6_H1.js";import A from"./CommentSection-DXLz6y8a.js";import{c as B}from"./createLucideIcon-Cwc4rHxk.js";import"./index-AEOoPOvA.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);function G({book:i,userRent:t,userReservation:n,relatedBooks:g}){var d;const[v,l]=o.useState(0);o.useEffect(()=>{const s=window.location.hash;if(s){const r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth"})}},[]);const f=()=>{m.visit(route("book.rent",i.id))},u=()=>{m.visit(route("book.reserve",i.id))},w=s=>{l(s)},N=i.reviews.reduce((s,r)=>s+r.rating,0)/i.reviews.length;return e.jsx(y,{children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("div",{className:"md:w-1/4",children:e.jsx(a,{className:"sticky top-4",children:e.jsxs(c,{className:"p-4",children:[e.jsx("div",{className:"aspect-[1/1.6] relative mb-4",children:e.jsx("img",{src:((d=i.cover)==null?void 0:d.path)||"/placeholder.png?height=512&width=320",alt:i.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Your Rating:"}),e.jsx("div",{className:"flex mt-2",children:[1,2,3,4,5].map(s=>e.jsx(p,{className:`h-6 w-6 cursor-pointer ${s<=v?"text-yellow-400 fill-current":"text-gray-300"}`,onClick:()=>w(s),onMouseEnter:()=>l(s),onMouseLeave:()=>l(0)},s))})]}),i.isAvailable&&!t&&!n&&e.jsx(j,{onClick:f,className:"w-full",children:"Rent"}),!i.isAvailable&&!t&&!n&&e.jsx(j,{onClick:u,className:"w-full",children:"Reserve"})]})]})})}),e.jsx("div",{className:"md:w-3/4",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs(a,{id:"overview",children:[e.jsx(h,{children:e.jsx(x,{children:i.title})}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Author:"})," ",i.author]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," ",i.description]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Published:"})," ",i.publishedAt]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("strong",{children:"Average Rating:"}),e.jsx("div",{className:"flex",children:[1,2,3,4,5].map(s=>e.jsx(p,{className:`h-5 w-5 ${s<=N?"text-yellow-400 fill-current":"text-gray-300"}`},s))}),e.jsxs("span",{children:["(",i.reviews.length," reviews)"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Total Comments:"})," ",i.comments.length]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Genres:"}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:i.genres.map(s=>e.jsx(C,{variant:"secondary",children:s.name},s.id))})]})]})})]}),e.jsxs(a,{id:"related-books",children:[e.jsx(h,{children:e.jsx(x,{children:"Related Books"})}),e.jsx(c,{children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:g.map(s=>e.jsx(R,{book:s,layout:"grid"},s.id))})})]}),e.jsx(A,{bookId:i.id,comments:i.comments})]})})]})})}export{G as default};
