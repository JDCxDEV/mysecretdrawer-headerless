(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{996:function(t,r,e){"use strict";e.r(r);e(7),e(6),e(8),e(5),e(9);var c=e(0),n=(e(4),e(2),e(97),e(59));function l(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var o={props:["products","category"],data:function(){return{swiperOption:{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(n.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(666)("./"+path)},getCategoryProduct:function(t){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t})))return r}))},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=o,f=e(69),component=Object(f.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"section-b-space"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row multiple-slider"},t._l(t.category,(function(r,c){return e("div",{key:c,staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"theme-card"},[e("h5",{staticClass:"title-border"},[t._v(t._s(r))]),t._v(" "),e("div",{staticClass:"offer-slider slide-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:t.swiperOption,expression:"swiperOption",arg:c}]},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(r).splice(0,3),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(0,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\r\n                              "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\r\n                              "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]),t._v(" "),t.getCategoryProduct(r).length>=4?e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(r).splice(3,3),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(1,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\r\n                            "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\r\n                            "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[e("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])])])])])})),0)])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.default=component.exports}}]);