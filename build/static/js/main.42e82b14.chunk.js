(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var c=a(18),s=a.n(c),n=(a(27),a(3)),l=a(2),r=(a(28),a(29),a(0)),o=function(){return Object(r.jsxs)("div",{className:"legend-wrapper",children:[Object(r.jsxs)("div",{className:"legend-totalAcre",children:[Object(r.jsx)("p",{className:"legend-totalAcre__label",children:"TOTAL CERTIFIED ORGANIC VALLEY ACRES"}),Object(r.jsx)("div",{className:"legend-totalAcre__number",children:Object(r.jsx)("h2",{children:"397,269"})})]}),Object(r.jsxs)("div",{className:"legend-colorInfo",children:[Object(r.jsxs)("div",{className:"display-flex",children:[Object(r.jsx)("div",{className:"legend-colorInfo__box legend-colorInfo__color__hasAcres"}),Object(r.jsx)("div",{className:"legend-colorInfo__label",children:"HAS ORGANIC VALLEY ACRES"})]}),Object(r.jsxs)("div",{className:"display-flex",children:[Object(r.jsx)("div",{className:"legend-colorInfo__box legend-colorInfo__box__selected"}),Object(r.jsx)("div",{className:"legend-colorInfo__label",children:"HAS ORGANIC VALLEY ACRES (SELECTED)"})]}),Object(r.jsxs)("div",{className:"display-flex",children:[Object(r.jsx)("div",{className:"legend-colorInfo__box legend-colorInfo__color__noAcres"}),Object(r.jsx)("div",{className:"legend-colorInfo__label",children:"NO ORGANIC VALLEY ACRES"})]})]})]})},i=function(e){var t=Object(l.useState)(""),a=Object(n.a)(t,2),c=(a[0],a[1]),s=Object(l.useState)(""),i=Object(n.a)(s,2),d=(i[0],i[1]),j=Object(l.useState)(""),b=Object(n.a)(j,2),O=b[0],u=b[1],h=Object(l.useState)(0),p=Object(n.a)(h,2),x=p[0],f=p[1],m=Object(l.useState)(0),_=Object(n.a)(m,2),g=_[0],v=_[1],S=function(t){var a=t.target.getAttribute("acres"),s=t.target.getAttribute("id");c(a),d(s),e.onStateSelectHandler(s)},N=function(e){},M=function(e){c(""),d(""),u("")},A=function(e){var t="0"===e.target.getAttribute("acres")?"No Organic Valley Acres":"Click to Learn More",a=Object(r.jsxs)("p",{children:[e.target.getAttribute("id"),Object(r.jsx)("br",{}),t]});u(a),f(e.clientX),v(e.clientY)};return Object(r.jsxs)("div",{className:"state-map","aria-hidden":"true",role:"presentation",children:[Object(r.jsx)("div",{className:""===O?"hoverMsg hide":"hoverMsg",style:{left:"".concat(x,"px"),top:"".concat(g,"px")},children:O}),Object(r.jsxs)("svg",{x:"0",y:"0",width:"575",height:"356",viewBox:"174 100 959 593",children:[Object.keys(e.stateMapData).filter((function(t){return"0"!=e.stateMapData[t].acres})).map((function(t){return Object(r.jsx)("path",{className:e.selectedState===t?"selected":"",id:t,d:e.stateMapData[t].shape,fill:"#988c83",stroke:"white",strokeWidth:"2px",acres:e.stateMapData[t].acres,onClick:S,onMouseEnter:N,onMouseLeave:M,onMouseMove:A,onMouseUp:M},t)})),Object.keys(e.stateMapData).filter((function(t){return"0"===e.stateMapData[t].acres})).map((function(t){return Object(r.jsx)("path",{className:e.selectedState===t?"selected":"",id:t,d:e.stateMapData[t].shape,fill:"#c4c0bc",stroke:"white",strokeWidth:"2px",acres:e.stateMapData[t].acres,onMouseEnter:N,onMouseLeave:M,onMouseMove:A},t)}))]}),Object(r.jsx)("div",{children:Object(r.jsx)(o,{})})]})},d=a(19),j=a.n(d),b=(a(53),function(e){return Object(r.jsx)("div",{className:"stateData-table__wrapper",children:Object(r.jsxs)("table",{summary:"state acre table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{className:"stateData-table__th",children:"State Name"}),Object(r.jsx)("th",{className:"stateData-table__th",children:"Total Certified Organic Valley Acres"})]})}),Object(r.jsx)("tbody",{children:Object.keys(e.stateMapData).filter((function(t){return"0"!=e.stateMapData[t].acres})).map((function(t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"stateData-table__td",children:t}),Object(r.jsx)("td",{className:"stateData-table__td",children:e.stateMapData[t].acres})]},t)}))})]})})}),O=(a(54),function(e){return Object(r.jsx)("form",{className:"StateDropdownBtn-wrapper",children:Object(r.jsxs)("label",{className:"StateDropdownBtn-dropdown__label",children:[Object(r.jsx)("span",{children:"Select a State with Organic Valley Acres"}),Object(r.jsxs)("select",{title:"state selector",id:"stateName",value:e.selectedState,onChange:function(t){e.onStateSelectHandler(t.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Pick a State"}),Object.keys(e.stateMapData).filter((function(t){return"0"!=e.stateMapData[t].acres})).map((function(t){return Object(r.jsxs)("option",{value:t,children:[t,":  ",e.stateMapData[t].acres," acres"]},t)}))]})]})})});var u=function(){var e=Object(l.useState)(""),t=Object(n.a)(e,2),a=t[0],c=t[1],s=function(e){console.log(e),c(e)},o=Object(l.useState)({}),d=Object(n.a)(o,2),u=d[0],h=d[1];return j.a.get("https://love2create.github.io/InteractiveStateMap/src/data/stateData.json").then((function(e){h(e.data)})),Object(r.jsxs)("main",{children:[Object(r.jsx)("h1",{children:"Organic Valley Acres Map"}),Object(r.jsx)(b,{stateMapData:u}),Object(r.jsx)(O,{stateMapData:u,onStateSelectHandler:s,selectedState:a}),Object(r.jsx)(i,{stateMapData:u,onStateSelectHandler:s,selectedState:a})]})};s.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(u,{}))}},[[55,1,2]]]);
//# sourceMappingURL=main.42e82b14.chunk.js.map