(window.webpackJsonp=window.webpackJsonp||[]).push([[117,114],{711:function(t,e,n){t.exports=n.p+"img/1.daeee06.jpg"},756:function(t,e,n){"use strict";var l=n(11),r=n(757).start;l({target:"String",proto:!0,forced:n(758)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},757:function(t,e,n){var l=n(47),r=n(234),c=n(51),o=Math.ceil,v=function(t){return function(e,n,v){var d,_,m=String(c(e)),h=m.length,f=void 0===v?" ":String(v),C=l(n);return C<=h||""==f?m:(d=C-h,(_=r.call(f,o(d/f.length))).length>d&&(_=_.slice(0,d)),t?m+_:_+m)}};t.exports={start:v(!1),end:v(!0)}},758:function(t,e,n){var l=n(149);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l)},789:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{imagepath:n(711),title:"2019",subtitle:"fashion trends",text:"special offer"}}},r=n(69),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"p-0"},[n("div",{staticClass:"full-banner text-center p-left",style:{"background-image":"url("+t.imagepath+")"}},[n("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"banner-contain"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.subtitle))]),t._v(" "),n("h4",[t._v(t._s(t.text))])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},942:function(t,e,n){"use strict";n.r(e);n(756),n(38);var l={components:{Banner:n(789).default},data:function(){return{imagepath:n(711),title:"2022",subtitle:"fashion trends",text:"special offer",days:0,hours:0,minutes:0,seconds:0}},mounted:function(){this.initTimer()},methods:{initTimer:function(){var t=this,e=6e4,n=36e5,l=24*n,r=new Date,dd=String(r.getDate()).padStart(2,"0"),c=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear(),v="09/30/",d=v+o;(r=c+"/"+dd+"/"+o)>d&&(d=v+(o+1));var _=new Date(d).getTime();setInterval((function(){var r=(new Date).getTime(),c=_-r;t.days=Math.floor(c/l),t.hours=Math.floor(c%l/n),t.minutes=Math.floor(c%n/e),t.seconds=Math.floor(c%e/1e3)}),0)}}},r=n(69),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"p-4 mt-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"full-banner text-center",style:{"background-image":"url("+t.imagepath+")"}},[n("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"banner-contain"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s(t.subtitle))]),t._v(" "),n("h4",[t._v(t._s(t.text))])])])])])])]),t._v(" "),n("div",{staticClass:"col-md-6 text-center mt-5"},[n("h1",[t._v("Deal of the day")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"row text-center ml-5 mr-5 mt-3"},[n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.days))])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.hours))])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.minutes))])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v(t._s(t.seconds))])]),t._v(" "),t._m(1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row text-center ml-5 mr-5 mb-3 mt-5"},[n("div",{staticClass:"col-md-3"},[n("h3",[t._v("DAYS")])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v("HOURS")])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v("MINS")])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("h3",[t._v("SECS")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-12"},[n("button",{staticClass:"btn btn-solid btn-danger btn-round mt-5",attrs:{type:"submit"}},[t._v("Shop Now")])])}],!1,null,null,null);e.default=component.exports}}]);