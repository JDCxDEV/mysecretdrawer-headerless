(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1019:function(t,r,e){"use strict";e.r(r);e(6),e(8),e(5),e(9);var c=e(0),n=(e(4),e(2),e(97),e(7),e(59));function o(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var l={props:["products","category"],data:function(){return{title:"trending products"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(n.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(665)("./"+path)},getCategoryProduct:function(t){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t})))return r}))},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=l,f=e(69),component=Object(f.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"p-0"},[e("div",{staticClass:"tab-bg"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"title4"},[e("h2",{staticClass:"title-inner4"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"theme-tab"},[e("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.category,(function(r,c){return e("b-tab",{key:c,attrs:{title:r}},[e("div",{staticClass:"row product-tab"},t._l(t.getCategoryProduct(r),(function(r,c){return e("div",{key:c,staticClass:"tab-box"},[e("div",{staticClass:"product-box2"},[e("div",{staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})]),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),e("ul",{staticClass:"color-variant"},t._l(t.Color(r.variants),(function(t,r){return e("li",{key:r},[e("a",{class:[t],style:{"background-color":t}})])})),0)],1)],1)])])})),0)])})),1)],1)])])])])])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"line"},[r("span")])}],!1,null,null,null);r.default=component.exports}}]);