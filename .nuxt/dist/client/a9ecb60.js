(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1006:function(t,r,e){"use strict";e.r(r);var o={props:["products"],components:{productBox7:e(739).a},data:function(){return{imagepath:e(882),title:"select your vehical",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slidesPerView:4,spaceBetween:20,freeMode:!0,breakpoints:{1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:2,spaceBetween:20},420:{slidesPerView:1,spaceBetween:20},0:{slidesPerView:1}}}}},methods:{alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.cartproduct=r,this.$emit("openCart",this.showCart,this.cartproduct)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},c=e(69),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"full-banner parallax small-slider tools-parallax-product",style:{"background-image":"url("+t.imagepath+")"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-12"},[e("div",{staticClass:"tools-description"},[e("div",[e("h3",[t._v(t._s(t.title))]),t._v(" "),t._m(0)])])]),t._v(" "),e("div",{staticClass:"col-lg-8 col-12 tools-grey ratio_square"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[e("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(r,o){return e("div",{key:o,staticClass:"swiper-slide"},[e("div",{staticClass:"product-box"},[e("productBox7",{attrs:{product:r,index:o},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)])})),0)])])])])]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[e("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"tools-form"},[e("div",{staticClass:"search-box"},[e("select",{staticClass:"form-control"},[e("option",{attrs:{value:""}},[t._v("Select Make")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Audi")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("BMW")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Fiat")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Hyndai")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("Skoda")])])]),t._v(" "),e("div",{staticClass:"search-box"},[e("select",{staticClass:"form-control",attrs:{name:"model"}},[e("option",{attrs:{value:""}},[t._v("Select Model")])])]),t._v(" "),e("div",{staticClass:"search-box"},[e("select",{staticClass:"form-control",attrs:{name:"engine"}},[e("option",{attrs:{value:""}},[t._v("Select category")])])]),t._v(" "),e("div",{staticClass:"search-box"},[e("select",{staticClass:"form-control",attrs:{name:"year"}},[e("option",{attrs:{value:""}},[t._v("Select Year")])])]),t._v(" "),e("div",{staticClass:"search-button"},[e("a",{staticClass:"btn btn-solid btn-find",attrs:{href:"#"}},[t._v("find my part")])])])}],!1,null,null,null);r.default=component.exports},739:function(t,r,e){"use strict";e(7),e(6),e(4),e(2),e(8),e(5),e(9);var o=e(0),c=e(59);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var l={props:["product","index"],data:function(){return{quickviewProduct:{},compareProduct:{},cartProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(c.c)({productslist:function(t){return t.products.productslist}})),Object(c.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return e(665)("./"+path)},addToCart:function(t){this.cartval=!0,this.cartProduct=t,this.$emit("opencartmodel",this.cartval,this.cartProduct),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=e(69),component=Object(v.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"img-wrapper"},[t.product.new?e("div",{staticClass:"ribbon"},[e("span",[t._v("new")])]):t._e(),t._v(" "),e("div",{staticClass:"front"},[e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),e("div",{staticClass:"cart-info cart-wrap"},[e("a",{attrs:{href:"javascript:void(0)",title:"Add to Wishlist",tabindex:"0"}},[e("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"},on:{click:function(r){return t.addToWishlist(t.product)}}})]),t._v(" "),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-cart",modifiers:{"modal-cart":!0}}],attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",variant:"primary"},on:{click:function(r){return t.addToCart(t.product)}}},[e("i",{staticClass:"ti-shopping-cart"}),t._v(" Add to cart\n        ")]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(r){return t.addToCompare(t.product)}}},[e("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],staticClass:"mobile-quick-view",attrs:{title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("div",{staticClass:"quick-view-part"},[e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[e("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"product-info"},[t._m(0),t._v(" "),e("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[e("h6",[t._v(t._s(t.product.title))])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?e("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),e("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):e("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])],1)])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.a=component.exports}}]);