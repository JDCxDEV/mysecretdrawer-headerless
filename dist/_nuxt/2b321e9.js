(window.webpackJsonp=window.webpackJsonp||[]).push([[122,119],{721:function(t,e,n){t.exports=n.p+"img/1.daeee06.jpg"},804:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{imagepath:n(721),title:"2019",subtitle:"fashion trends",text:"special offer"}}},l=n(69),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"p-0"},[n("div",{staticClass:"full-banner text-center p-left",style:{"background-image":"url("+t.imagepath+")"}},[n("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"banner-contain"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.subtitle))]),t._v(" "),n("h4",[t._v(t._s(t.text))])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},907:function(t,e,n){"use strict";var r=n(11),l=n(908).start;r({target:"String",proto:!0,forced:n(909)},{padStart:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}})},908:function(t,e,n){var r=n(46),l=n(236),o=n(50),c=Math.ceil,d=function(t){return function(e,n,d){var v,m,h=String(o(e)),f=h.length,_=void 0===d?" ":String(d),C=r(n);return C<=f||""==_?h:(v=C-f,(m=l.call(_,c(v/_.length))).length>v&&(m=m.slice(0,v)),t?h+m:m+h)}};t.exports={start:d(!1),end:d(!0)}},909:function(t,e,n){var r=n(150);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},975:function(t,e,n){"use strict";n.r(e);n(907),n(41);var r={components:{Banner:n(804).default},data:function(){return{imagepath:n(721),title:"2022",subtitle:"fashion trends",text:"special offer",days:0,hours:0,minutes:0,seconds:0}},mounted:function(){this.initTimer()},methods:{initTimer:function(){var t=this,e=6e4,n=36e5,r=24*n,l=new Date,dd=String(l.getDate()).padStart(2,"0"),o=String(l.getMonth()+1).padStart(2,"0"),c=l.getFullYear(),d="09/30/",v=d+c;(l=o+"/"+dd+"/"+c)>v&&(v=d+(c+1));var m=new Date(v).getTime();setInterval((function(){var l=(new Date).getTime(),o=m-l;t.days=Math.floor(o/r),t.hours=Math.floor(o%r/n),t.minutes=Math.floor(o%n/e),t.seconds=Math.floor(o%e/1e3)}),0)}}},l=n(69),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"p-4 mt-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"full-banner text-center",style:{"background-image":"url("+t.imagepath+")"}},[n("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("productBox1",{attrs:{product:t.product,index:t.index},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)])])])]),t._v(" "),n("div",{staticClass:"col-md-6 text-center mt-5"},[n("h1",[t._v("Deal of the day")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"row text-center ml-5 mr-5 mt-3"},[n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.days))])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.hours))])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.minutes))])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.seconds))])]),t._v(" "),t._m(1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row text-center ml-5 mr-5 mb-3 mt-5"},[n("div",{staticClass:"col-md-3"},[n("h3",[t._v("DAYS")])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v("HOURS")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-12"},[n("button",{staticClass:"btn btn-solid btn-danger btn-round mt-3 mb-3",attrs:{type:"submit"}},[t._v("Shop Now")])])}],!1,null,null,null);e.default=component.exports}}]);