(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(5),a=n(6),i=n(1),r=(n(12),n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t;!function(t){t[t.byLength=0]="byLength",t[t.byAlphabet=1]="byAlphabet",t[t.empty=2]="empty"}(t||(t={}));var e=Object(i.useState)(t.empty),n=Object(a.a)(e,2),c=n[0],s=n[1],l=Object(i.useState)(!1),u=Object(a.a)(l,2),h=u[0],p=u[1],j=function(e,n){switch(c){case t.byLength:return e.length-n.length;case t.byAlphabet:return e.localeCompare(n);default:return 0}},y=function(t){return h?Object(o.a)(t).sort(j).reverse():Object(o.a)(t).sort(j)}(b);return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"button is-info ".concat(c!==t.byAlphabet?"is-light":""),onClick:function(){return s(t.byAlphabet)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"button is-success ".concat(c!==t.byLength?"is-light":""),onClick:function(){return s(t.byLength)},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:"button is-warning ".concat(h?"":"is-light"),onClick:function(){return p(!h)},children:"Reverse"}),(c!==t.empty||!1!==h)&&Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(t.empty),p(!1)},children:"Reset"})]}),Object(r.jsx)("ul",{children:y&&y.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e7dfac41.chunk.js.map