(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(16),o=n.n(r),a=(n(24),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))}),s=n(7),l=n(2),u=n(1),j=function(){var e=Object(l.f)();return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("h1",{children:"Information Page"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"Backto the main page"}),Object(u.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta in a beatae, deleniti ad eligendi architecto pariatur nisi laborum hic."})]})},d=function(){return Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"nav-wrapper purple accent-2 px1",children:[Object(u.jsx)(s.b,{to:"/",className:"brand-logo",children:"To-Do List React + TS"}),Object(u.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"To-do list"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/about",children:"Information"})})]})]})})},b=n(18),h=n(19),m=function(e){var t=Object(c.useRef)(null);return Object(u.jsxs)("div",{className:"input-field mt2",children:[Object(u.jsx)("input",{ref:t,onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")},type:"text",id:"title",placeholder:"Enter your task here"}),Object(u.jsx)("label",{htmlFor:"title",className:"active",children:"Enter your task here"})]})},p=function(e){var t=e.todos,n=e.onRemove,c=e.onToggle;if(0===t.length)return Object(u.jsx)("p",{className:"center",children:"Evrything clear"});return Object(u.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(u.jsx)("li",{className:t.join(" "),children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.completed,onChange:c.bind(null,e.id)}),Object(u.jsx)("span",{children:e.title}),Object(u.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})},e.id)}))})},O=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");r(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(m,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};r((function(e){return[t].concat(Object(b.a)(e))}))}}),Object(u.jsx)(p,{todos:n,onToggle:function(e){r((function(t){return t.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}))},onRemove:function(e){confirm("You want to delet element?")&&r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},f=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{component:O,path:"/",exact:!0}),Object(u.jsx)(l.a,{component:j,path:"/about"})]})})]})};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),a()}},[[34,1,2]]]);
//# sourceMappingURL=main.baa14912.chunk.js.map