import{r as c,j as s,S as p,B as w,T as j,D as f}from"./index-DWleQVpl.js";import{u as T,S as d}from"./Skeleton-Bk6S4Lb8.js";import{T as A,S as D,a as g}from"./axios-B6f2TWmt.js";import{G as a,P as y}from"./PostCard-BTaG_ZFO.js";function E(m){const t=[...m];for(let n=t.length-1;n>0;n--){const o=Math.floor(Math.random()*(n+1));[t[n],t[o]]=[t[o],t[n]]}return t}const B=()=>{const[m,t]=c.useState([]),[n,o]=c.useState([]),[v,h]=c.useState(!1),{data:i,error:l,isPending:P}=T({queryKey:["posts"],queryFn:async()=>{try{const[{data:e},{data:r}]=await Promise.all([g.get("/posts"),g.get("/users")]);return e.map(x=>{const u=r.find(S=>S.id===x.userId);return{...x,email:u.email,name:u.name,username:u.username}})}catch(e){console.error("Error fetching recipes:",e)}}});return c.useEffect(()=>{function e(){h(!0);const r=E(i);o(r.splice(0,4)),t(r.splice(4,12))}if((i==null?void 0:i.length)>0){e();const r=setInterval(()=>{e()},3e4);return()=>clearInterval(r)}},[i]),P?s.jsx(a,{container:!0,spacing:4,children:Array.from({length:10},(e,r)=>r+1).map((e,r)=>s.jsx(a,{item:!0,xs:12,sm:12,md:6,children:s.jsxs(p,{spacing:1,children:[s.jsxs(p,{direction:"row",spacing:1,children:[s.jsx(d,{variant:"circular",width:40,height:40}),s.jsxs(w,{sx:{width:"100%"},children:[s.jsx(d,{variant:"text",width:"100%"}),s.jsx(d,{variant:"text",width:"100%"})]})]}),s.jsx(d,{variant:"rounded",height:120})]})},r))}):l?"An error has occurred: "+l.message:s.jsxs(s.Fragment,{children:[s.jsx(A,{children:"Home"}),s.jsx(j,{variant:"h3",component:"h3",children:"Trending Posts"}),s.jsx(f,{sx:{mb:4,mt:1}}),s.jsx(a,{container:!0,spacing:4,children:n.map(e=>s.jsx(a,{item:!0,xs:12,sm:12,md:6,children:s.jsx(y,{post:e,cursor:!0})},e.id))}),s.jsx(j,{variant:"h3",component:"h3",sx:{mt:8},children:"Posts"}),s.jsx(f,{sx:{mb:4,mt:1}}),s.jsx(a,{container:!0,spacing:4,children:m.map(e=>s.jsx(a,{item:!0,xs:12,sm:12,md:6,children:s.jsx(y,{post:e,cursor:!0})},e.id))}),s.jsx(D,{open:v,autoHideDuration:5e3,onClose:()=>h(!1),message:"Loading new posts..."})]})};export{B as default};