(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{506:function(t,e,r){"use strict";r(6),r(5),r(3),r(2),r(7),r(4),r(8);var o=r(0),c=r(51);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(c.c)({productslist:function(t){return t.products.productslist}})),Object(c.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return r(432)("./"+path)},addToCart:function(t){this.cartval=!0,this.$emit("opencartmodel",this.cartval),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},h=r(60),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"img-wrapper"},[r("div",{staticClass:"lable-block"},[t.product.sale?r("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),r("div",{staticClass:"front text-center"},[r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[r("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),r("div",{staticClass:"cart-info cart-wrap"},[r("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[r("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.addToWishlist(t.product)}}})]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(e){return t.showQuickview(t.product)}}},[r("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("div",{staticClass:"addtocart_btn"},[r("button",{staticClass:"add-button add_cart",attrs:{"data-toggle":"modal","data-target":"#addtocart"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n        add to cart\n      ")])])]),t._v(" "),r("div",{staticClass:"product-detail text-center"},[t._m(0),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[r("h6",[t._v(t._s(t.product.title))])]),t._v(" "),r("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?r("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),r("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):r("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);e.a=component.exports},759:function(t,e,r){"use strict";r.r(e);var o={props:["products"],components:{productBox6:r(506).a},data:function(){return{title:"top collection",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slidesPerView:5,spaceBetween:20,freeMode:!0,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:2,spaceBetween:20},420:{slidesPerView:1,spaceBetween:20},0:{slidesPerView:1}}}}},methods:{alert:function(t){this.dismissCountDown=t},showCartModal:function(t,e){this.showCart=t,this.$emit("openCart",this.showCart)},showquickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,e){this.showcomapreModal=t,this.comapreproduct=e,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section-b-space addtocart_count ratio_square"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"title4"},[r("h2",{staticClass:"title-inner4"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)]),t._v(" "),r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(e,o){return r("div",{key:o,staticClass:"swiper-slide"},[r("div",{staticClass:"product-box"},[r("productBox6",{attrs:{product:e,index:o},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)])})),0)])])])])]),t._v(" "),r("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[r("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line"},[e("span")])}],!1,null,null,null);e.default=component.exports}}]);