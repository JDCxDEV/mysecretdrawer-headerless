(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{504:function(t,e,r){"use strict";r(6),r(5),r(3),r(2),r(7),r(4),r(8);var o=r(0),c=r(51);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:["product","index"],data:function(){return{quickviewProduct:{},compareProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(c.c)({productslist:function(t){return t.products.productslist}})),Object(c.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return r(432)("./"+path)},addToCart:function(t){this.cartval=!0,this.$emit("opencartmodel",this.cartval),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},h=r(60),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"img-wrapper"},[r("div",{staticClass:"lable-block"},[t.product.new?r("span",{staticClass:"lable3"},[t._v("new")]):t._e(),t._v(" "),t.product.sale?r("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),r("div",{staticClass:"front"},[r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[r("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),r("div",{staticClass:"cart-info cart-wrap"},[r("button",{attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart"},on:{click:function(e){return t.addToCart(t.product)}}},[r("i",{staticClass:"ti-shopping-cart"})]),t._v(" "),r("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[r("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.addToWishlist(t.product)}}})]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(e){return t.showQuickview(t.product)}}},[r("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),r("div",{staticClass:"product-detail"},[t._m(0),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[r("h6",[t._v(t._s(t.product.title))])]),t._v(" "),r("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?r("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),r("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):r("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);e.a=component.exports},733:function(t,e,r){"use strict";r.r(e);r(3),r(2),r(74);var o={props:["products","category"],components:{productBox5:r(504).a},data:function(){return{title:"top collection",subtitle:"special offer",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slidesPerView:4,spaceBetween:20,freeMode:!0,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:2,spaceBetween:20},420:{slidesPerView:1,spaceBetween:20},0:{slidesPerView:1}}}}},methods:{getCategoryProduct:function(t){return this.products.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t){this.showCart=t,this.$emit("openCart",this.showCart)},showquickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,e){this.showcomapreModal=t,this.comapreproduct=e,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section-b-space j-box pets-box ratio_square"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"title1 title5"},[r("h4",[t._v(t._s(t.subtitle))]),t._v(" "),r("h2",{staticClass:"title-inner1"},[t._v(t._s(t.title))]),t._v(" "),r("hr",{attrs:{role:"tournament6"}})]),t._v(" "),r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.getCategoryProduct(t.category[0]),(function(e,o){return r("div",{key:o,staticClass:"swiper-slide"},[r("div",{staticClass:"product-box"},[r("productBox5",{attrs:{product:e,index:o},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)])})),0)])])])])]),t._v(" "),r("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[r("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);