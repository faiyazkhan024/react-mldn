(this["webpackJsonpmulti-level-category-menu"]=this["webpackJsonpmulti-level-category-menu"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(4),i=t.n(r),l=(t(9),t(2)),s=(t(10),t(0)),o=function(e){var n=e.items,t=e.child,c=e.parent,a=e.onSubmit,r=e.setParent,i=e.setChild;return Object(s.jsxs)("form",{onSubmit:a,className:"form",children:[Object(s.jsxs)("select",{type:"select",name:"parent",className:"select",placeholder:"Parent Category",required:!0,value:c,onChange:function(e){return r(e.target.value)},children:[Object(s.jsx)("option",{className:"placeholder",value:"Parent Category",hidden:!0,children:"Parent Category"}),Object(s.jsx)("option",{className:"root",value:"root",children:"Root"}),function e(n){if(n)return n.map((function(n,t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("option",{value:n.name,children:n.name},t),e(n.children)]})}))}(n)]}),Object(s.jsx)("input",{type:"text",name:"child",className:"input",placeholder:"New Category",required:!0,value:t,onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("button",{type:"submit",className:"btn",children:"Submit"})]})},u=(t(12),function(e){var n=e.items,t=Object(c.useState)(""),a=Object(l.a)(t,2),r=a[0],i=a[1],o=function(e){if(0!==e.children.length)return"arrow"},u=function e(n){if(n)return Object(s.jsx)("ul",{className:"list nestedMenuItems",children:n.map((function(n,t){return Object(s.jsxs)("li",{onMouseOver:function(){return i(t)},onMouseLeave:function(){return i("")},className:"listItem nestedMenuItem \n              ".concat(o(n)," \n              ").concat(r===t&&"show"),children:[null===n||void 0===n?void 0:n.name,e(n.children)]},t)}))})};return Object(s.jsx)("nav",{className:"menu",children:Object(s.jsx)("ul",{className:"list menuItems",children:n.map((function(e,n){var t;return Object(s.jsxs)("li",{className:"listItem menuItem ".concat(o(e)),children:[e.name,Object(s.jsx)("ul",{className:"list subMenuItems",children:null===(t=e.children)||void 0===t?void 0:t.map((function(e,n){return Object(s.jsxs)("li",{className:"listItem subMenuItem ".concat(o(e)),children:[e.name,u(e.children)]},n)}))})]},n)}))})})}),d=[{name:"Home Page",children:[]},{name:"Left Dropdown",children:[{name:"Any Left Page",children:[]},{name:"Left Second Level",children:[{name:"Sl An Page",children:[]},{name:"Sl Ao pPage",children:[]},{name:"Left Third Level",children:[{name:"Tl An Page",children:[]},{name:"Left Fourth Level",children:[{name:"Fl An Page",children:[]},{name:"Fl Ao Page",children:[]}]}]}]},{name:"Another Left Page",children:[]}]},{name:"Mega Menu",children:[]},{name:"Any Page",children:[]},{name:"Right Dropdown",children:[]}],m=(t(13),function(e,n){switch(console.log(n.payload.parent),n.type){case"Add":return function(e,n){var t=n.payload;t.parent,t.child}(0,n);default:throw new Error("Invalid Input ")}}),h=function(){var e=Object(c.useReducer)(m,d),n=Object(l.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),h=i[0],j=i[1],b=Object(c.useState)(""),f=Object(l.a)(b,2),p=f[0],g=f[1];return Object(s.jsxs)("main",{className:"main",children:[Object(s.jsx)(o,{items:t,child:p,parent:h,setParent:j,setChild:g,onSubmit:function(e){e.preventDefault(),a({type:"Add",payload:{parent:h,child:p}}),g(""),j("")}}),Object(s.jsx)(u,{items:t})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.0c11b392.chunk.js.map