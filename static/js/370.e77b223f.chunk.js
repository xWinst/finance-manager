"use strict";(self.webpackChunkfinance_manager=self.webpackChunkfinance_manager||[]).push([[370],{5370:function(e,a,t){t.r(a);var s=t(885),n=t(2791),c=t(9434),i=t(3504),r=t(819),o=t(4340),l=t(9098),_=t(9595),h=t(3439),p=t(6009),g=t(184),u=Object.keys(_),d=function(e){return new Intl.NumberFormat("uk",{minimumFractionDigits:2}).format(e).replace(",",".")};a.default=function(){var e=(0,c.v9)((function(e){return e.statistics})),a=(0,c.v9)((function(e){return e.user.userData.balance})),t=(0,n.useState)((new Date).getMonth()),m=(0,s.Z)(t,2),x=m[0],Z=m[1],j=(0,n.useState)("expenses"),b=(0,s.Z)(j,2),N=b[0],v=b[1],f=(0,n.useState)(),k=(0,s.Z)(f,2),y=k[0],C=k[1],w=(0,c.I0)(),O=l[N],B=e[N].data||{},T=Object.keys(B),I=T.map((function(e){return{category:e,value:B[e]}})).sort((function(e,a){return a.value.total-e.value.total}));(0,n.useEffect)((function(){w((0,o.a)((x+1).toString().padStart(2,"0")))}),[w,x]),T.length&&!B[y]&&C(T[0]);var L=function(e){Z((x+e+12)%12)},S=function(){v("expenses"===N?"incomes":"expenses")};return(0,g.jsxs)("div",{className:p.Z.reportsContainer,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(i.rU,{className:p.Z.goBack,to:"/expenses",children:(0,g.jsx)(r.JO,{href:"".concat(h.Z,"#goBack"),width:"24",height:"24"})}),(0,g.jsx)("span",{className:p.Z.linkText,children:"Main page"})]}),(0,g.jsxs)("div",{className:p.Z.header,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:p.Z.text,children:"Current period:"}),(0,g.jsxs)("div",{className:p.Z.period,children:[(0,g.jsx)("button",{className:p.Z.button,type:"button",onClick:function(){return L(-1)},children:(0,g.jsx)(r.JO,{href:"".concat(h.Z,"#arrowLeft"),width:"7",height:"17"})}),(0,g.jsx)("span",{className:p.Z.month,children:_[u[x]]}),(0,g.jsx)("button",{className:p.Z.button,type:"button",onClick:function(){return L(1)},children:(0,g.jsx)(r.JO,{href:"".concat(h.Z,"#arrowRight"),width:"7",height:"17"})})]})]}),(0,g.jsxs)("div",{className:p.Z.balanceContainer,children:[(0,g.jsx)("p",{className:p.Z.topic,children:"Balance:"}),(0,g.jsx)("p",{className:p.Z.balance,children:"".concat(a.toFixed(2)," UAH")})]})]}),(0,g.jsxs)("div",{className:p.Z.totalThumb,children:[(0,g.jsxs)("div",{className:p.Z.total,children:[(0,g.jsx)("p",{children:"Expenses:"}),(0,g.jsxs)("p",{className:p.Z.value,style:{color:"#e7192e"},children:["- ",d(e.expenses.total)," \u20b4"]})]}),(0,g.jsxs)("div",{className:p.Z.total,children:[(0,g.jsx)("p",{children:"Incomes:"}),(0,g.jsxs)("p",{className:p.Z.value,style:{color:"#407946"},children:["+ ",d(e.incomes.total)," \u20b4"]})]})]}),(0,g.jsxs)("div",{className:p.Z.iconsContainer,children:[(0,g.jsxs)("div",{className:p.Z.typeBalanceContainer,children:[(0,g.jsx)("button",{className:p.Z.button,type:"button",onClick:S,children:(0,g.jsx)(r.JO,{href:"".concat(h.Z,"#arrowLeft"),width:"7",height:"17"})}),(0,g.jsx)("span",{className:p.Z.item,children:N}),(0,g.jsx)("button",{className:p.Z.button,type:"button",onClick:S,children:(0,g.jsx)(r.JO,{href:"".concat(h.Z,"#arrowRight"),width:"7",height:"17"})})]}),0===T.length?(0,g.jsxs)("p",{className:p.Z.ad,children:["No ",N," in this month"]}):(0,g.jsx)("ul",{className:p.Z.categories,children:I.map((function(e,a){return(0,g.jsxs)("li",{className:e.category===y?p.Z.active:p.Z.category,onClick:function(){return a=e.category,void C(a);var a},children:[(0,g.jsx)("p",{className:p.Z.price,children:d(e.value.total)}),(0,g.jsx)(r.JO,{href:"".concat(h.Z,"#").concat((t=e.category,O[t].split(/,| /)[0].toLowerCase())),width:"56",height:"56"}),(0,g.jsx)("p",{className:p.Z.categoryName,children:O[e.category]})]},e.category);var t}))})]}),(0,g.jsx)("div",{className:p.Z.chartsContainer,children:T.length>0&&B[y]&&(0,g.jsx)(r.kL,{chartData:B[y]})})]})}},6009:function(e,a){a.Z={hero:"pages_hero__XrlFj",thumb:"pages_thumb__QV4Xe",title:"pages_title__tBkMI",sign:"pages_sign__pOIEt",slogan:"pages_slogan__Ete+G",container:"pages_container__xAkcw",reportsContainer:"pages_reportsContainer__eqH0a",goBack:"pages_goBack__Oe2cb",linkText:"pages_linkText__TZxSy",text:"pages_text__Iz+ye",period:"pages_period__bgYjz",button:"pages_button__eH5oD",month:"pages_month__UqVR9",topic:"pages_topic__Ha6v5",balance:"pages_balance__OLZ3u",totalThumb:"pages_totalThumb__2Tgs5",total:"pages_total__PFn2r",value:"pages_value__kRZ1Z",typeBalanceContainer:"pages_typeBalanceContainer__UQy7i",item:"pages_item__wp6di pages_month__UqVR9",ad:"pages_ad__GmB4U",categories:"pages_categories__ozCEM",category:"pages_category__2XWtL",active:"pages_active__TCkGY pages_category__2XWtL",price:"pages_price__G9ZBV",categoryName:"pages_categoryName__A6P4c",chartsContainer:"pages_chartsContainer__dOKZp",balanceThumb:"pages_balanceThumb__gFCGB",link:"pages_link__6ZQxm",icon:"pages_icon__IqoND",header:"pages_header__wGYoS",balanceContainer:"pages_balanceContainer__7uZxa",iconsContainer:"pages_iconsContainer__vxkUO"}}}]);
//# sourceMappingURL=370.e77b223f.chunk.js.map