"use strict";(self.webpackChunkfinance_manager=self.webpackChunkfinance_manager||[]).push([[720],{6720:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(885),n=a(2791),c=a(9434),o=a(3504),r=a(1570),i=a(4340),l=a(9098),u=JSON.parse('{"\u042f\u043d\u0432\u0430\u0440\u044c":"January","\u0424\u0435\u0432\u0440\u0430\u043b\u044c":"February","\u041c\u0430\u0440\u0442":"March","\u0410\u043f\u0440\u0435\u043b\u044c":"April","\u041c\u0430\u0439":"May","\u0418\u044e\u043d\u044c":"June","\u0418\u044e\u043b\u044c":"July","\u0410\u0432\u0433\u0443\u0441\u0442":"August","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c":"September","\u041e\u043a\u0442\u044f\u0431\u0440\u044c":"October","\u041d\u043e\u044f\u0431\u0440\u044c":"November","\u0414\u0435\u043a\u0430\u0431\u0440\u044c":"December"}'),_=a(3439),p=a(6009),h=a(184),g=Object.keys(u),m=function(e){return new Intl.NumberFormat("uk",{minimumFractionDigits:2}).format(e).replace(",",".")},d=function(){var e=(0,c.v9)((function(e){return e.statistics})),t=(0,c.v9)((function(e){return e.user.userData.balance})),a=(0,n.useState)((new Date).getMonth()),d=(0,s.Z)(a,2),x=d[0],b=d[1],f=(0,n.useState)("expenses"),j=(0,s.Z)(f,2),Z=j[0],N=j[1],v=(0,c.I0)(),k=l[Z],y=function(e){return k[e].split(/,| /)[0].toLowerCase()},w=e[Z].data||{};console.log("currentStatistics: ",w);var O=Object.keys(w),C=(0,n.useState)(O[0]),J=(0,s.Z)(C,2),S=J[0],E=J[1];(0,n.useEffect)((function(){v((0,i.a)((x+1).toString().padStart(2,"0")))}),[v,x]),(0,n.useEffect)((function(){console.log("RENDER")}));var B=function(){"expenses"===Z?(N("incomes"),w=e.incomes.data):(N("expenses"),w=e.expenses.data),O=Object.keys(w),E(O[0])};return(0,h.jsxs)("div",{className:p.Z.container,children:[(0,h.jsx)(o.rU,{className:p.Z.goBack,to:"/expenses",children:(0,h.jsx)(r.JO,{href:"".concat(_.Z,"#goBack"),width:"24",height:"24"})}),(0,h.jsx)("p",{className:p.Z.text,children:"Current period:"}),(0,h.jsxs)("div",{className:p.Z.period,children:[(0,h.jsx)("button",{className:p.Z.button,type:"button",onClick:function(){b(0===x?11:function(e){return e-1})},children:(0,h.jsx)(r.JO,{href:"".concat(_.Z,"#arrowLeft"),width:"7",height:"17"})}),(0,h.jsx)("span",{className:p.Z.month,children:u[g[x]]}),(0,h.jsx)("button",{className:p.Z.button,type:"button",onClick:function(){b(11===x?0:function(e){return e+1})},children:(0,h.jsx)(r.JO,{href:"".concat(_.Z,"#arrowRight"),width:"7",height:"17"})})]}),(0,h.jsx)("p",{className:p.Z.topic,children:"Balance:"}),(0,h.jsx)("p",{className:p.Z.balance,children:"".concat(t.toFixed(2)," UAH")}),(0,h.jsxs)("div",{className:p.Z.totalThumb,children:[(0,h.jsxs)("div",{className:p.Z.total,children:[(0,h.jsx)("p",{children:"Expenses:"}),(0,h.jsxs)("p",{className:p.Z.value,style:{color:"#e7192e"},children:["- ",m(e.expenses.total)," \u20b4"]})]}),(0,h.jsxs)("div",{className:p.Z.total,children:[(0,h.jsx)("p",{children:"Incomes:"}),(0,h.jsxs)("p",{className:p.Z.value,style:{color:"#407946"},children:["+ ",m(e.incomes.total)," \u20b4"]})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{className:p.Z.button,type:"button",onClick:B,children:(0,h.jsx)(r.JO,{href:"".concat(_.Z,"#arrowLeft"),width:"7",height:"17"})}),(0,h.jsx)("span",{className:p.Z.item,children:Z}),(0,h.jsx)("button",{className:p.Z.button,type:"button",onClick:B,children:(0,h.jsx)(r.JO,{href:"".concat(_.Z,"#arrowRight"),width:"7",height:"17"})})]}),(0,h.jsx)("ul",{className:p.Z.categories,children:O.map((function(e,t){return(0,h.jsxs)("li",{className:e===S?p.Z.active:p.Z.category,onClick:function(){return function(e){E(e)}(e)},children:[(0,h.jsx)("p",{className:p.Z.price,children:m(w[e].total)}),(0,h.jsx)(r.JO,{href:"".concat(_.Z,"#").concat(y(e)),width:"56",height:"56"}),(0,h.jsx)("p",{className:p.Z.categoryName,children:k[e]})]},e)}))}),(0,h.jsx)("div",{children:e.toString()})]})}},6009:function(e,t){t.Z={hero:"pages_hero__XrlFj",thumb:"pages_thumb__QV4Xe",title:"pages_title__tBkMI",sign:"pages_sign__pOIEt",slogan:"pages_slogan__Ete+G",container:"pages_container__xAkcw",goBack:"pages_goBack__Oe2cb",text:"pages_text__Iz+ye",period:"pages_period__bgYjz",button:"pages_button__eH5oD",month:"pages_month__UqVR9",topic:"pages_topic__Ha6v5",balance:"pages_balance__OLZ3u",totalThumb:"pages_totalThumb__2Tgs5",total:"pages_total__PFn2r",value:"pages_value__kRZ1Z",item:"pages_item__wp6di pages_month__UqVR9",categories:"pages_categories__ozCEM",category:"pages_category__2XWtL",active:"pages_active__TCkGY pages_category__2XWtL",price:"pages_price__G9ZBV",categoryName:"pages_categoryName__A6P4c"}}}]);
//# sourceMappingURL=720.debfba8e.chunk.js.map