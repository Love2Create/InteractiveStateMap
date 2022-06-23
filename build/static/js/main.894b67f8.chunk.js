(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var c=a(18),s=a.n(c),n=(a(27),a(3)),r=a(2),l=(a(28),a(29),a(0)),o=function(){return Object(l.jsxs)("section",{className:"legend-wrapper",children:[Object(l.jsxs)("div",{className:"legend-totalAcre",children:[Object(l.jsx)("div",{className:"legend-totalAcre__label",children:"TOTAL CERTIFIED ORGANIC VALLEY ACRES"}),Object(l.jsx)("div",{className:"legend-totalAcre__number",children:Object(l.jsx)("h2",{children:"397,269"})})]}),Object(l.jsxs)("div",{className:"legend-colorInfo",children:[Object(l.jsxs)("div",{className:"display-flex",children:[Object(l.jsx)("div",{className:"legend-colorInfo__box legend-colorInfo__color__hasAcres"}),Object(l.jsx)("div",{className:"legend-colorInfo__label",children:"HAS ORGANIC VALLEY ACRES"})]}),Object(l.jsxs)("div",{className:"display-flex",children:[Object(l.jsx)("div",{className:"legend-colorInfo__box legend-colorInfo__box__selected"}),Object(l.jsx)("div",{className:"legend-colorInfo__label",children:"HAS ORGANIC VALLEY ACRES (SELECTED)"})]}),Object(l.jsxs)("div",{className:"display-flex",children:[Object(l.jsx)("div",{className:"legend-colorInfo__box legend-colorInfo__color__noAcres"}),Object(l.jsx)("div",{className:"legend-colorInfo__label",children:"NO ORGANIC VALLEY ACRES"})]})]})]})},i=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),c=(a[0],a[1]),s=Object(r.useState)(""),i=Object(n.a)(s,2),j=(i[0],i[1]),d=Object(r.useState)(""),b=Object(n.a)(d,2),O=b[0],u=b[1],h=Object(r.useState)(0),x=Object(n.a)(h,2),p=x[0],f=x[1],m=Object(r.useState)(0),_=Object(n.a)(m,2),g=_[0],v=_[1],N=Object(r.useState)(""),S=Object(n.a)(N,2),M=(S[0],S[1]),A=function(t){var a=t.target.getAttribute("d"),s=t.target.getAttribute("acres"),n=t.target.getAttribute("id");c(s),j(n),M(a),e.onStateSelectHandler(n)},D=function(e){},I=function(e){c(""),j(""),u("")},E=function(e){var t="0"===e.target.getAttribute("acres")?Object(l.jsx)("p",{className:"hoverMsg__extraInfo",children:"NO ORGANIC VALLEY ACRES"}):Object(l.jsx)("p",{className:"hoverMsg__extraInfo",children:"CLICK TO LEARN MORE"}),a=Object(l.jsxs)("p",{className:"temp-msg__stateName",children:[e.target.getAttribute("id"),Object(l.jsx)("br",{}),t]});u(a),f(e.clientX),v(e.clientY)};return Object(l.jsxs)("div",{className:"state-map","aria-hidden":"true",role:"presentation",children:[Object(l.jsx)("div",{className:""===O?"hoverMsg hide":"hoverMsg",style:{left:"".concat(p,"px"),top:"".concat(g,"px")},children:O}),Object(l.jsxs)("svg",{x:"0",y:"0",width:"575",height:"356",viewBox:"174 100 959 593",children:[Object(l.jsx)("g",{children:Object.keys(e.stateMapData).filter((function(t){return"0"!=e.stateMapData[t].acres})).map((function(t){return Object(l.jsx)("path",{className:e.selectedState===t?"selected":"",id:t,d:e.stateMapData[t].shape,fill:"#988c83",stroke:"white",strokeWidth:"2px",acres:e.stateMapData[t].acres,onClick:A,onMouseEnter:D,onMouseLeave:I,onMouseMove:E,onMouseUp:I},t)}))}),Object(l.jsx)("g",{children:Object.keys(e.stateMapData).filter((function(t){return"0"===e.stateMapData[t].acres})).map((function(t){return Object(l.jsx)("path",{className:e.selectedState===t?"selected":"",id:t,d:e.stateMapData[t].shape,fill:"#c4c0bc",stroke:"white",strokeWidth:"2px",acres:e.stateMapData[t].acres,onMouseEnter:D,onMouseLeave:I,onMouseMove:E},t)}))})]}),Object(l.jsx)("div",{children:Object(l.jsx)(o,{})})]})},j=a(19),d=a.n(j),b=(a(53),function(e){return Object(l.jsx)("section",{className:"stateData-table__wrapper",children:Object(l.jsxs)("table",{summary:"state acre table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"stateData-table__th",children:"State Name"}),Object(l.jsx)("th",{className:"stateData-table__th",children:"Total Certified Organic Valley Acres"})]})}),Object(l.jsx)("tbody",{children:Object.keys(e.stateMapData).filter((function(t){return"0"!=e.stateMapData[t].acres})).map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"stateData-table__td",children:t}),Object(l.jsx)("td",{className:"stateData-table__td",children:e.stateMapData[t].acres})]},t)}))})]})})}),O=(a(54),a(55),function(e){return Object(l.jsx)("form",{className:"StateDropdownBtn-wrapper",children:Object(l.jsx)("label",{className:"StateDropdownBtn-dropdown__label",children:Object(l.jsxs)("select",{variant:"standard",title:"state selector",id:"stateName",value:e.selectedState,onChange:function(t){e.onStateSelectHandler(t.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Pick a State"}),Object.keys(e.stateMapData).filter((function(t){return"0"!=e.stateMapData[t].acres})).map((function(t){return Object(l.jsxs)("option",{value:t,children:[t,":  ",e.stateMapData[t].acres," acres"]},t)}))]})})})});var u=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),o=Object(n.a)(s,2),j=(o[0],o[1],function(e){console.log(e),c(e)}),u=Object(r.useState)({}),h=Object(n.a)(u,2),x=h[0],p=h[1];return d.a.get("https://love2create.github.io/InteractiveStateMap/src/data/stateData.json").then((function(e){p(e.data)})),Object(l.jsxs)("main",{children:[Object(l.jsx)("h1",{children:"Organic Valley Acres Map"}),Object(l.jsx)(b,{stateMapData:x}),Object(l.jsx)(O,{stateMapData:x,onStateSelectHandler:j,selectedState:a}),Object(l.jsx)(i,{stateMapData:x,onStateSelectHandler:j,selectedState:a})]})};s.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(u,{}))}},[[56,1,2]]]);
//# sourceMappingURL=main.894b67f8.chunk.js.map