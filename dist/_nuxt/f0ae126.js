(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1104:function(t,e,r){"use strict";r.r(e);r(6),r(5),r(3),r(2),r(7),r(4),r(8);var o=r(0),c=(r(13),r(51)),l=r(434),n=r(433),d=r(446),v=r(447),m=r(450),f=r(452),h=r(695),_=r(1067),C=r(696),w=r(697);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={components:{Header:l.a,Slider:h.default,ProductSlider:_.default,Banner:C.default,ProductTab:w.default,Footer:n.a,quickviewModel:d.a,compareModel:v.a,cartModel:m.a,newsletterModel:f.a},data:function(){return{products:[],category:[],showquickviewmodel:!1,showcomparemodal:!1,showcartmodal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({productslist:function(t){return t.products.productslist}})),mounted:function(){this.productsArray()},methods:{productsArray:function(){var t=this;this.productslist.map((function(e){"fashion"===e.type&&(t.products.push(e),e.collection.map((function(i){-1===t.category.indexOf(i)&&t.category.push(i)})))}))},showQuickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e},showCoampre:function(t,e){this.showcomparemodal=t,this.comapreproduct=e},closeCompareModal:function(t){this.showcomparemodal=t},showCart:function(t,e){this.showcartmodal=t,this.cartproduct=e},closeCartModal:function(t){this.showcartmodal=t}}},k=O,x=r(60),component=Object(x.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box-layout-body"},[r("Header"),t._v(" "),r("Slider"),t._v(" "),r("div",{staticClass:"container box-layout bg-image"},[r("ProductSlider",{attrs:{products:t.products},on:{openQuickview:t.showQuickview,openCompare:t.showCoampre,openCart:t.showCart}}),t._v(" "),r("Banner"),t._v(" "),r("ProductTab",{attrs:{products:t.products,category:t.category},on:{openQuickview:t.showQuickview,openCompare:t.showCoampre,openCart:t.showCart}})],1),t._v(" "),r("Footer"),t._v(" "),r("quickviewModel",{attrs:{openModal:t.showquickviewmodel,productData:t.quickviewproduct}}),t._v(" "),r("compareModel",{attrs:{openCompare:t.showcomparemodal,productData:t.comapreproduct},on:{closeCompare:t.closeCompareModal}}),t._v(" "),r("cartModel",{attrs:{openCart:t.showcartmodal,productData:t.cartproduct,products:t.products,category:t.category},on:{closeCart:t.closeCartModal}}),t._v(" "),r("newsletterModel")],1)}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,r){"use strict";var o={},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("footer",{staticClass:"footer-light"},[t._m(0),t._v(" "),o("section",{staticClass:"section-b-space light-layout"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row footer-theme partition-f"},[o("div",{staticClass:"col-lg-4 col-md-6"},[t._m(1),t._v(" "),o("div",{staticClass:"footer-contant"},[o("div",{staticClass:"footer-logo"},[o("img",{attrs:{src:r(435),alt:"logo"}})]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),o("div",{staticClass:"sub-footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t._m(6),t._v(" "),o("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[o("div",{staticClass:"payment-card-bottom"},[o("ul",[o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(441),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(439),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(440),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(437),alt:""}})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:r(438),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"light-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section border-section border-top-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"subscribe"},[r("div",[r("h4",[t._v("KNOW IT ALL FIRST!")]),t._v(" "),r("p",[t._v("Never Miss Anything From Multikart By Signing Up To Our Newsletter.")])])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"form-inline subscribe-form auth-form needs-validation",attrs:{method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}})]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col offset-xl-1"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-list"},[r("li",[r("i",{staticClass:"fa fa-map-marker"}),t._v("Multikart Demo Store, Demo store India 345-659\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-phone"}),t._v("Call Us: 123-456-7898\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-envelope-o"}),t._v("Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-fax"}),t._v("Fax: 123456\n                  ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2017-18 themeforest powered by pixelstrap\n              ")])])])}],!1,null,null,null);e.a=component.exports},434:function(t,e,r){"use strict";var o=r(443),c=r(445),l=r(442),n=r(444),d={data:function(){return{leftSidebarVal:!1}},components:{TopBar:o.a,LeftSidebar:c.a,Nav:l.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},v=r(60),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",[o("div",{staticClass:"mobile-fix-option"}),t._v(" "),o("TopBar"),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"main-menu"},[o("div",{staticClass:"menu-left"},[o("div",{staticClass:"navbar"},[o("a",{on:{click:t.left_sidebar}},[t._m(0)]),t._v(" "),o("LeftSidebar",{attrs:{leftSidebarVal:t.leftSidebarVal},on:{closeVal:t.closeBarValFromChild}})],1),t._v(" "),o("div",{staticClass:"brand-logo"},[o("nuxt-link",{attrs:{to:{path:"/shop/fashion"}}},[o("img",{staticClass:"img-fluid",attrs:{src:r(435),alt:""}})])],1)]),t._v(" "),o("div",{staticClass:"menu-right pull-right"},[o("Nav"),t._v(" "),o("HeaderWidgets")],1)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar-style"},[e("i",{staticClass:"fa fa-bars sidebar-bar",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},446:function(t,e,r){"use strict";r(5),r(3),r(2),r(7),r(4),r(8);var o=r(0),c=(r(6),r(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var n={props:["openModal","productData"],data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({curr:"products/changeCurrency"})),methods:{Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},Size:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].size)&&e.push(t[i].size);return e},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)},getImgUrl:function(path){return r(432)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=n,v=r(60),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openModal?r("b-modal",{attrs:{id:"modal-lg",size:"lg",centered:"",title:"Quickview","hide-footer":!0}},[r("div",{staticClass:"row quickview-modal"},[r("div",{staticClass:"col-lg-6 col-xs-12"},[r("div",{staticClass:"quick-view-img"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.productData.images,(function(e,o){return r("div",{key:o,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 rtl-text"},[r("div",{staticClass:"product-right"},[r("h2",[t._v(t._s(t.productData.title))]),t._v(" "),t.productData.sale?r("h3",[t._v("\n            "+t._s(t._f("currency")(t.discountedPrice(t.productData)*t.curr.curr,t.curr.symbol))+"\n      "),r("del",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))])]):r("h3",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),t.productData.variants[0].color?r("ul",{staticClass:"color-variant"},t._l(t.Color(t.productData.variants),(function(t,e){return r("li",{key:e},[r("a",{class:[t],style:{"background-color":t}})])})),0):t._e(),t._v(" "),t.productData.variants[0].size?r("div",{staticClass:"product-description border-product"},[r("h6",{staticClass:"product-title"},[t._v("select size")]),t._v(" "),r("div",{staticClass:"size-box"},[r("ul",t._l(t.Size(t.productData.variants),(function(e,o){return r("li",{key:o},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),r("p",[t._v(t._s(t.productData.description.substring(0,250)+"...."))])]),t._v(" "),r("div",{staticClass:"product-buttons"},[r("a",{staticClass:"btn btn-solid",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("add to cart")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/product/sidebar/"+t.productData.id}}},[t._v("view detail")])],1)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},447:function(t,e,r){"use strict";var o={props:["openCompare","productData"],methods:{getImgUrl:function(path){return r(432)("./"+path)},closeCompare:function(t){this.$emit("closeCompare",false)}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openCompare?r("b-modal",{attrs:{id:"modal-compare",size:"lg",centered:"",title:"Compare","hide-footer":!0,"hide-header":!0}},[r("div",{staticClass:"row compare-modal"},[r("div",{staticClass:"col-lg-12"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCompare(t.openCompare)}}},[r("span",[t._v("×")])]),t._v(" "),r("div",{staticClass:"media"},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),r("div",{staticClass:"media-body align-self-center text-center"},[r("h5",[r("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),r("span",[t._v(t._s(t.productData.title))]),t._v(" "),r("span",[t._v("successfully added to your Compare list")])]),t._v(" "),r("div",{staticClass:"buttons d-flex justify-content-center"},[r("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/page/compare/compare-1"}}},[t._v("View Compare list")])],1)])])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},450:function(t,e,r){"use strict";r(6),r(5),r(7),r(4),r(8);var o=r(0),c=(r(3),r(2),r(74),r(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["openCart","productData","products","category"],computed:n(n({},Object(c.c)({currency:function(t){return t.products.currency}})),Object(c.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return r(432)("./"+path)},closeCart:function(t){this.$emit("closeCart",false)},cartRelatedProducts:function(t,e){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t}))&&r.id!==e)return r}))},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=r(60),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.openCart?o("b-modal",{attrs:{id:"modal-cart",size:"lg",centered:"",title:"Add-to-cart","hide-footer":!0,"hide-header":!0}},[o("div",{staticClass:"row cart-modal"},[o("div",{staticClass:"col-lg-12"},[o("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCart(t.openCart)}}},[o("span",[t._v("×")])]),t._v(" "),o("div",{staticClass:"media"},[o("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),o("div",{staticClass:"media-body align-self-center text-center"},[o("h5",[o("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),o("span",[t._v(t._s(t.productData.title))]),t._v(" "),o("span",[t._v("successfully added to your Cart.")])]),t._v(" "),o("div",{staticClass:"buttons d-flex justify-content-center"},[o("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/cart"}}},[t._v("View Cart")]),t._v(" "),o("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/checkout"}}},[t._v("Checkout")]),t._v(" "),o("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/"}}},[t._v("Continue Shopping")])],1),t._v(" "),o("div",{staticClass:"upsell_payment"},[o("img",{staticClass:"img-fluid w-auto mt-3",attrs:{alt:"",src:r(463)}})])])]),t._v(" "),o("div",{staticClass:"product-section"},[o("div",{staticClass:"col-12 product-upsell text-center"},[o("h4",[t._v("Customers who bought this item also.")])]),t._v(" "),o("div",{staticClass:"row"},t._l(t.cartRelatedProducts(t.productData.collection[0],t.productData.id).slice(0,4),(function(e,r){return o("div",{key:r,staticClass:"product-box col-sm-3 col-6"},[o("div",{staticClass:"img-wrapper"},[o("div",{staticClass:"front"},[o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[o("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:e.title}})])],1),t._v(" "),o("div",{staticClass:"product-detail"},[o("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[o("h6",[t._v(t._s(e.title))])]),t._v(" "),e.sale?o("h4",[t._v(t._s(t._f("currency")(t.discountedPrice(e)*t.curr.curr,t.curr.symbol))+"\n                        "),o("del",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])]):o("h4",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])],1)])])})),0)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},452:function(t,e,r){"use strict";var o={data:function(){return{imagepath:r(464)}},mounted:function(){"newsletter"!==localStorage.getItem("showModel")&&(this.showModal(),localStorage.setItem("showModel","newsletter"))},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{ref:"my-modal",attrs:{id:"modal-newsletter",size:"lg",centered:"","hide-footer":!0}},[r("div",{staticClass:"modal-body modal1"},[r("div",{staticClass:"container-fluid p-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"modal-bg"},[r("div",{staticClass:"offer-content"},[r("img",{staticClass:"img-fluid",attrs:{src:t.imagepath,alt:"offer"}}),t._v(" "),r("h2",[t._v("newsletter")]),t._v(" "),r("form",{staticClass:"auth-form needs-validation",attrs:{target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"email",name:"EMAIL",placeholder:"Enter your email",required:"required"}}),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])])])])],1)}),[],!1,null,null,null);e.a=component.exports},695:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{swiperOption:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},items:[{imagepath:r(559),title:"welcome to fashion",subtitle:"women fashion",alignclass:"p-left"},{imagepath:r(560),title:"welcome to fashion",subtitle:"men fashion",alignclass:"p-right"}]}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"p-0"},[r("div",{staticClass:"slide-1 home-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(e,o){return r("div",{key:o,staticClass:"swiper-slide"},[r("div",{staticClass:"home text-center",class:e.alignclass,style:{"background-image":"url("+e.imagepath+")"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"slider-contain"},[r("div",[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("h1",[t._v(t._s(e.subtitle))]),t._v(" "),r("a",{staticClass:"btn btn-solid",attrs:{href:""}},[t._v("shop now")])])])])])])])])})),0),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])])}),[],!1,null,null,null);e.default=component.exports},696:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{imagepath:r(591),title:"2019",subtitle:"fashion trends",text:"special offer"}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"p-0"},[r("div",{staticClass:"full-banner parallax p-left text-center",style:{"background-image":"url("+t.imagepath+")"}},[r("img",{staticClass:"bg-img d-none",attrs:{src:t.imagepath,alt:""}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"banner-contain"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("h3",[t._v(t._s(t.subtitle))]),t._v(" "),r("h4",[t._v(t._s(t.text))])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},697:function(t,e,r){"use strict";r.r(e);r(3),r(2),r(74);var o={props:["products","category"],components:{productBox1:r(449).a},data:function(){return{title:"special products",subtitle:"exclusive products",showCart:!1,showquickviewmodel:!1,showcomapreModal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0}},methods:{getCategoryProduct:function(t){return this.products.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))},alert:function(t){this.dismissCountDown=t},showCartModal:function(t,e){this.showCart=t,this.cartproduct=e,this.$emit("openCart",this.showCart,this.cartproduct)},showquickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e,this.$emit("openQuickview",this.showquickviewmodel,this.quickviewproduct)},showcomparemodal:function(t,e){this.showcomapreModal=t,this.comapreproduct=e,this.$emit("openCompare",this.showcomapreModal,this.comapreproduct)}}},c=r(60),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"title1 section-t-space"},[r("h4",[t._v(t._s(t.subtitle))]),t._v(" "),r("h2",{staticClass:"title-inner1"},[t._v(t._s(t.title))])]),t._v(" "),r("section",{staticClass:"section-b-space p-t-0 ratio_asos"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"theme-tab"},[r("b-tabs",{attrs:{"content-class":"mt-3"}},t._l(t.category,(function(e,o){return r("b-tab",{key:o,attrs:{title:e}},[r("div",{staticClass:"no-slider row"},t._l(t.getCategoryProduct(e),(function(e,o){return r("div",{key:o,staticClass:"product-box"},[r("productBox1",{attrs:{product:e,index:o},on:{opencartmodel:t.showCartModal,showCompareModal:t.showcomparemodal,openquickview:t.showquickview,showalert:t.alert,alertseconds:t.alert}})],1)})),0)])})),1)],1)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);