(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{712:function(t,r,c){"use strict";c(6),c(4),c(2),c(8),c(5),c(9);var e=c(0),o=(c(7),c(13),c(59));function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,c)}return r}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var d={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:l(l({},Object(o.c)({productslist:function(t){return t.products.productslist}})),Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return c(665)("./"+path)},addToCart:function(t){this.cartval=!0,this.$emit("opencartmodel",this.cartval),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},productColorchange:function(t,r){var c=this;r.variants.map((function(e){e.color===t&&r.images.map((function(img){img.image_id===e.image_id&&(c.imageSrc=img.src)}))}))},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=c(69),component=Object(v.a)(d,(function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",[c("div",{staticClass:"img-wrapper"},[c("div",{staticClass:"lable-block"},[t.product.new?c("span",{staticClass:"lable3"},[t._v("new")]):t._e(),t._v(" "),t.product.sale?c("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),c("div",{staticClass:"front text-center"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[c("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),c("div",{staticClass:"back"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[c("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),c("div",{staticClass:"cart-box"},[c("button",{attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart"},on:{click:function(r){return t.addToCart(t.product)}}},[c("i",{staticClass:"ti-shopping-cart"})]),t._v(" "),c("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[c("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(r){return t.addToWishlist(t.product)}}})]),t._v(" "),c("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[c("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),c("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(r){return t.addToCompare(t.product)}}},[c("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),c("div",{staticClass:"product-detail text-center"},[t._m(0),t._v(" "),c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[c("h6",[t._v(t._s(t.product.title))])]),t._v(" "),c("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?c("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),c("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):c("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),t.product.variants[0].color?c("ul",{staticClass:"color-variant"},t._l(t.Color(t.product.variants),(function(r,e){return c("li",{key:e},[c("a",{class:[r],style:{"background-color":r},on:{click:function(c){return t.productColorchange(r,t.product,t.index)}}})])})),0):t._e()],1)])}),[function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"rating"},[c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.a=component.exports},951:function(t,r,c){"use strict";c.r(r);c(6),c(4),c(2),c(8),c(5),c(9);var e=c(0),o=(c(7),c(13),c(59));function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,c)}return r}var l={props:["products"],components:{productBox4:c(712).a},data:function(){return{title:"Fresh Flowers For your love",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{slidesPerView:4,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return c(665)("./"+path)},Color:function(t){for(var r=[],i=0;i<Object.keys(t).length;i++)-1===r.indexOf(t[i].color)&&r.push(t[i].color);return r},productColorchange:function(t,r,c){var e=this;r.variants.map((function(o){o.color===t&&r.images.map((function(img){img.image_id===o.image_id&&(e.productslist[c].vImage=img.src)}))}))},discountedPrice:function(t){return t.price-t.price*t.discount/100},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.$emit("openCart",this.showCart)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},d=l,v=c(69),component=Object(v.a)(d,(function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",[c("section",{staticClass:"section-b-space"},[c("div",{staticClass:"full-box"},[c("div",{staticClass:"container"},[c("div",{staticClass:"title4"},[c("h2",{staticClass:"title-inner4"},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),t._m(0)]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-4"},[c("div",{staticClass:"theme-card center-align"},[c("div",{staticClass:"offer-slider"},[c("div",{staticClass:"sec-1"},t._l(t.products.slice(0,2),(function(r,e){return c("div",{key:e,staticClass:"product-box2"},[c("div",{staticClass:"media"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[c("img",{staticClass:"img-fluid bg-img",attrs:{id:r.id,src:t.getImgUrl(r.vImage?r.vImage:r.images[0].src),alt:r.title}})]),t._v(" "),c("div",{staticClass:"media-body align-self-center"},[t._m(1,!0),t._v(" "),c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[c("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?c("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n      "),c("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):c("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),c("ul",{staticClass:"color-variant"},t._l(t.Color(r.variants),(function(e,o){return c("li",{key:o},[c("a",{class:[e],style:{"background-color":e},on:{click:function(c){return t.productColorchange(e,r)}}})])})),0)],1)],1)])})),0)])])]),t._v(" "),c("div",{staticClass:"col-md-4 center-slider"},[c("div",[c("div",{staticClass:"offer-slider"},[c("div",t._l(t.products.slice(2,3),(function(r,e){return c("div",{key:e,staticClass:"product-box product-wrap"},[c("productBox4",{attrs:{product:r,index:e},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)})),0)])])]),t._v(" "),c("div",{staticClass:"col-md-4"},[c("div",{staticClass:"theme-card center-align"},[c("div",{staticClass:"offer-slider"},[c("div",{staticClass:"sec-1"},t._l(t.products.slice(3,5),(function(r,e){return c("div",{key:e,staticClass:"product-box2"},[c("div",{staticClass:"media"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[c("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(r.vImage?r.vImage:r.images[0].src),id:r.id,alt:"product.title"}})]),t._v(" "),c("div",{staticClass:"media-body align-self-center"},[t._m(2,!0),t._v(" "),c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+r.id}}},[c("h6",[t._v(t._s(r.title))])]),t._v(" "),r.sale?c("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(r)*t.curr.curr,t.curr.symbol))+"\n      "),c("del",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))])]):c("h4",[t._v(t._s(t._f("currency")(r.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),c("ul",{staticClass:"color-variant"},t._l(t.Color(r.variants),(function(e,o){return c("li",{key:o},[c("a",{class:[e],style:{"background-color":e},on:{click:function(c){return t.productColorchange(e,r)}}})])})),0)],1)],1)])})),0)])])])])])])]),t._v(" "),c("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[c("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"line"},[r("span")])},function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"rating"},[c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"})])},function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"rating"},[c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);r.default=component.exports}}]);