(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1009:function(t,r,e){"use strict";e.r(r);e(7),e(6),e(8),e(5),e(9);var c=e(0),o=(e(4),e(2),e(98),e(60));function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var d={props:["products","category"],components:{productBox7:e(741).a},data:function(){return{imagepath:e(889),showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(667)("./"+path)},getCategoryProduct:function(t){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t})))return r}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.cartproduct=r,this.$emit("openCart",this.showCart,this.cartproduct)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},l=d,v=e(69),component=Object(v.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"tools_product"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row multiple-slider"},[e("div",{staticClass:"col-xl-3 col-lg-4 col-md-12"},[e("div",{staticClass:"theme-card"},[e("h5",{staticClass:"title-border"},[t._v(t._s(t.category[1]))]),t._v(" "),e("div",{staticClass:"offer-slider slide-1"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(t.category[0]).splice(0,4),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(0,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n                        "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n                        "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]),t._v(" "),t.getCategoryProduct(t.category[0]).length>=5?e("div",{staticClass:"swiper-slide"},[e("div",t._l(t.getCategoryProduct(t.category[0]).splice(4,4),(function(r,c){return e("div",{key:c,staticClass:"media"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(r.images[0].src),alt:""}})]),t._v(" "),e("div",{staticClass:"media-body align-self-center"},[t._m(1,!0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[e("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?e("h4",[t._v("\n                        "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n                        "),e("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])],1)],1)})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[e("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])])])])]),t._v(" "),e("div",{staticClass:"col-xl-9 col-lg-8 col-md-12 tools-grey"},[e("div",{staticClass:"theme-tab"},[e("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.category,(function(r,c){return e("b-tab",{key:c,attrs:{title:r}},[e("div",{staticClass:"no-slider row"},t._l(t.getCategoryProduct(r).splice(0,4),(function(r,c){return e("div",{key:c,staticClass:"product-box"},[e("productBox7",{attrs:{product:r,index:c},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)})),0)])})),1)],1),t._v(" "),e("div",{staticClass:"banner-tools"},[e("img",{staticClass:"img-fluid",attrs:{src:t.imagepath,alt:""}})])])])])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.default=component.exports},741:function(t,r,e){"use strict";e(7),e(6),e(4),e(2),e(8),e(5),e(9);var c=e(0),o=e(60);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(c.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var l={props:["product","index"],data:function(){return{quickviewProduct:{},compareProduct:{},cartProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(o.c)({productslist:function(t){return t.products.productslist}})),Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(667)("./"+path)},addToCart:function(t){this.cartval=!0,this.cartProduct=t,this.$emit("opencartmodel",this.cartval,this.cartProduct),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=e(69),component=Object(v.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"img-wrapper"},[t.product.new?e("div",{staticClass:"ribbon"},[e("span",[t._v("new")])]):t._e(),t._v(" "),e("div",{staticClass:"front"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),e("div",{staticClass:"cart-info cart-wrap"},[e("a",{attrs:{href:"javascript:void(0)",title:"Add to Wishlist",tabindex:"0"}},[e("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"},on:{click:function(r){return t.addToWishlist(t.product)}}})]),t._v(" "),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-cart",modifiers:{"modal-cart":!0}}],attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",variant:"primary"},on:{click:function(r){return t.addToCart(t.product)}}},[e("i",{staticClass:"ti-shopping-cart"}),t._v(" Add to cart\n        ")]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(r){return t.addToCompare(t.product)}}},[e("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],staticClass:"mobile-quick-view",attrs:{title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("div",{staticClass:"quick-view-part"},[e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"product-info"},[t._m(0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("h6",[t._v(t._s(t.product.title))])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])],1)])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.a=component.exports}}]);