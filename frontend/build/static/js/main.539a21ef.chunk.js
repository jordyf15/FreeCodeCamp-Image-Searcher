(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(n,t,r){},50:function(n,t,r){"use strict";r.r(t);var e=r(0),a=r(1),c=r(22),o=r.n(c),i=r(5),u=r.n(i),s=r(6),b=r(7),l=r(2),d=r(3);function j(){var n=Object(l.a)(["\n    margin-left: 3px;\n    position:absolute;\n    color: #3ed2f3;\n    top: 4px;\n"]);return j=function(){return n},n}function f(){var n=Object(l.a)(["\n    background-color: #0a3e5e;\n    border: 2px solid #1b84ab;\n    border-radius: 5px;\n    color: #7ec9e8;\n    font-family: Orbitron;\n"]);return f=function(){return n},n}function x(){var n=Object(l.a)(["\n    margin-bottom: 20px;\n    position: relative;\n"]);return x=function(){return n},n}function h(){var n=Object(l.a)(["\n    background-color: #0a3e5e;\n    border: 2px solid #1b84ab;\n    margin-right: 2px;\n    border-radius: 5px;\n    color: #7ec9e8;\n    font-family: Orbitron;\n"]);return h=function(){return n},n}function p(){var n=Object(l.a)(["\n    background-color: #0a3e5e;\n    border: 2px solid #1b84ab;\n    margin-right: 2px;\n    border-radius: 5px;\n    color: #7ec9e8;\n    font-family: Orbitron;\n    text-align: center;\n"]);return p=function(){return n},n}var O=d.a.input(p()),v=d.a.input(h()),g=d.a.form(x()),m=d.a.button(f()),w=d.a.i(j()),y=function(n){var t=n.handleSearch,r=Object(a.useState)(""),c=Object(b.a)(r,2),o=c[0],i=c[1],u=Object(a.useState)(10),s=Object(b.a)(u,2),l=s[0],d=s[1];return Object(e.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(o,l)},children:[Object(e.jsx)(w,{className:"fas fa-search",onClick:function(){return t(o,l)}}),Object(e.jsx)(O,{type:"text",value:o,onChange:function(n){var t=n.target;return i(t.value)}}),Object(e.jsx)(v,{type:"number",value:l,min:"1",max:"10",onChange:function(n){var t=n.target;return d(t.value)}}),Object(e.jsx)(m,{type:"submit",children:"Search"})]})},k=r(9),S=r.n(k),C=function(){var n=Object(s.a)(u.a.mark((function n(t,r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.a.get("".concat("http://localhost:3001","/api/imagesearch/").concat(t,"?offset=").concat(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),D=function(){var n=Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.a.get("".concat("http://localhost:3001","/api/latest/imagesearch"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function F(){var n=Object(l.a)(["\n    border-bottom: 2px solid #15607f;\n    padding-right: 20px;\n    color: #edbd5b;\n    display: inline;\n"]);return F=function(){return n},n}function H(){var n=Object(l.a)(["\n    height: 50%;\n"]);return H=function(){return n},n}function I(){var n=Object(l.a)(["\n    height: 50%;\n"]);return I=function(){return n},n}function T(){var n=Object(l.a)(["\n    border-right: 6px solid #246390;\n    @media (max-width: 550px) {\n        border-bottom: 6px solid #246390;\n    }\n"]);return T=function(){return n},n}function U(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: row;\n    border: 4px solid #246390;\n    box-shadow: 0 0 0 2px #2eafdc;\n    color: #30a2bc;\n    background-color: #0f1422;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    word-break: break-all;\n\n     @media (max-width: 550px) {\n    flex-direction: column;\n    }\n"]);return U=function(){return n},n}var A=d.a.div(U()),J=d.a.div(T()),M=d.a.div(I()),q=d.a.div(H()),B=d.a.div(F()),E=function(n){var t=n.data;return Object(e.jsxs)(A,{children:[Object(e.jsx)(J,{children:Object(e.jsx)("img",{src:t.imageUrl,alt:t.altText,width:"300",height:"300"})}),Object(e.jsxs)("div",{children:[Object(e.jsxs)(M,{children:[Object(e.jsxs)(B,{children:["Alternate Text :",Object(e.jsx)("br",{})]}),Object(e.jsx)("br",{}),t.altText,Object(e.jsx)("br",{})]}),Object(e.jsxs)(q,{children:[Object(e.jsxs)(B,{children:["Page's Url :",Object(e.jsx)("br",{})]}),Object(e.jsx)("br",{}),t.pageUrl]})]})]})};function L(){var n=Object(l.a)(["\n    // width: 100%;\n    color: #a3d5f8;\n    border-bottom: 2px solid #155173;\n    margin-top: 5px;\n"]);return L=function(){return n},n}function N(){var n=Object(l.a)(["\n    color: #28b3c6;\n"]);return N=function(){return n},n}function P(){var n=Object(l.a)(["\n    color: #a6eafd;\n"]);return P=function(){return n},n}var Y=d.a.span(P()),z=d.a.span(N()),G=d.a.div(L()),K=function(n){return n<10?"0".concat(n):n},Q=function(n){var t=n.data,r=t.time,a=t.query,c=new window.Date(r),o="".concat(K(c.getDate()),"-").concat(K(c.getMonth()+1),"-").concat(c.getFullYear()," ").concat(K(c.getHours()),":").concat(K(c.getMinutes()));return Object(e.jsxs)(G,{children:[Object(e.jsxs)(Y,{children:[o," "]})," >>> ",Object(e.jsxs)(z,{children:[" ",a]})]})},R=r(52);function V(){var n=Object(l.a)(["\n    color: #3ed2f3;\n"]);return V=function(){return n},n}function W(){var n=Object(l.a)(["\n    background-color: #08354a;\n    border: 4px solid #095e85;\n    text-align: left;\n"]);return W=function(){return n},n}function X(){var n=Object(l.a)(["\n  max-width: 70vw;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n"]);return X=function(){return n},n}var Z=d.a.div(X()),$=d.a.div(W()),_=d.a.h2(V()),nn=function(n){var t=n.show,r=n.images,a=n.history;return"image"===t&&r?Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(_,{children:"Image Search"}),Object(e.jsx)(Z,{children:r.map((function(n){return Object(e.jsx)(E,{data:n},Object(R.a)())}))})]}):"history"===t&&a?Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(_,{children:"Search History"}),Object(e.jsx)($,{children:a.map((function(n){return Object(e.jsx)(Q,{data:n},Object(R.a)())}))})]}):null};function tn(){var n=Object(l.a)(["\n    background-color: #0a3e5e;\n    border: 2px solid #1b84ab;\n    border-radius: 5px;\n    color: #7ec9e8;\n    font-family: Orbitron;\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  text-align: center;\n"]);return rn=function(){return n},n}var en=d.a.div(rn()),an=d.a.button(tn()),cn=function(){var n=Object(a.useState)(null),t=Object(b.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)(null),i=Object(b.a)(o,2),l=i[0],d=i[1],j=Object(a.useState)(null),f=Object(b.a)(j,2),x=f[0],h=f[1],p=function(){var n=Object(s.a)(u.a.mark((function n(t,r){var e,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c("image"),n.next=3,C(t,r);case 3:e=n.sent,a=e.data,d(a),h(null);case 7:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),O=function(){var n=Object(s.a)(u.a.mark((function n(){var t,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c("history"),n.next=3,D();case 3:t=n.sent,r=t.data,d(null),h(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(e.jsxs)(en,{children:[Object(e.jsx)("h1",{children:"Image Search Abstration Layer"}),Object(e.jsx)(y,{handleSearch:p}),Object(e.jsx)(an,{onClick:O,children:"Search History"}),Object(e.jsx)(nn,{show:r,images:l,history:x})]})};r(49);o.a.render(Object(e.jsx)(cn,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.539a21ef.chunk.js.map