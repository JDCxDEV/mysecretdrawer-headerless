(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{779:function(t,r,o){"use strict";o(7),o(6),o(4),o(2),o(8),o(5),o(9);var e=o(0),c=o(59);function n(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,o)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var l={props:["product","index"],data:function(){return{quickviewProduct:{},compareProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(c.c)({productslist:function(t){return t.products.productslist}})),Object(c.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return o(665)("./"+path)},addToCart:function(t){this.cartval=!0,this.$emit("opencartmodel",this.cartval),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},h=o(69),component=Object(h.a)(l,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("div",{staticClass:"img-wrapper"},[o("div",{staticClass:"front"},[o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[o("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.product.images[0].src),id:t.product.id,alt:t.product.title}})])],1),t._v(" "),o("div",{staticClass:"cart-info cart-wrap"},[o("button",{attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart"},on:{click:function(r){return t.addToCart(t.product)}}},[o("i",{staticClass:"ti-shopping-cart"})]),t._v(" "),o("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[o("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(r){return t.addToWishlist(t.product)}}})]),t._v(" "),o("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(r){return t.showQuickview(t.product)}}},[o("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),o("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(r){return t.addToCompare(t.product)}}},[o("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),o("div",{staticClass:"product-detail"},[o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[o("h6",[t._v(t._s(t.product.title))])]),t._v(" "),o("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.sale?o("h4",[t._v("\n      "+t._s(t._f("currency")(t.discountedPrice(t.product)*t.curr.curr,t.curr.symbol))+"\n      "),o("del",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])]):o("h4",[t._v(t._s(t._f("currency")(t.product.price*t.curr.curr,t.curr.symbol)))])],1)])}),[],!1,null,null,null);r.a=component.exports},964:function(t,r,o){"use strict";o.r(r);var e={props:["products"],components:{productBox9:o(779).a},data:function(){return{title:"top collection",subtitle:"special offer",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},dismissSecs:5,dismissCountDown:0,description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."}},methods:{alert:function(t){this.dismissCountDown=t},showCartModal:function(t,r){this.showCart=t,this.$emit("openCart",this.showCart)},showquickview:function(t,r){this.showquickviewmodel=t,this.quickviewproduct=r,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,r){this.showcomapreModal=t,this.comapreproduct=r,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},c=o(69),component=Object(c.a)(e,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("div",{staticClass:"title1 title-gradient section-t-space"},[o("h4",[t._v(t._s(t.subtitle))]),t._v(" "),o("h2",{staticClass:"title-inner1"},[t._v(t._s(t.title))])]),t._v(" "),o("section",{staticClass:"p-t-0 section-b-space gym-product ratio_square"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row partition-cls"},t._l(t.products.slice(0,8),(function(r,e){return o("div",{key:e,staticClass:"col-xl-3 col-sm-6"},[o("div",{staticClass:"product-box"},[o("productBox9",{attrs:{product:r,index:e},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)])})),0)])]),t._v(" "),o("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(r){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[o("p",[t._v("Product Is successfully added to your wishlist.")])])],1)}),[],!1,null,null,null);r.default=component.exports}}]);