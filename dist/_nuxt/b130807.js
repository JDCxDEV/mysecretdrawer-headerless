(window.webpackJsonp=window.webpackJsonp||[]).push([[109,106,107],{1366:function(t,e,r){"use strict";r.r(e);r(7),r(6),r(4),r(2),r(8),r(5),r(9);var c=r(0),o=(r(13),r(59)),l=r(895),n=r(896),d=r(685),v=r(686),f=r(694),m=r(697),_=r(942),C=r(943),h=r(1329),w=r(944),y=r(945),O=r(946);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={components:{Header:l.a,Slider:_.default,Banner:C.default,Collection:h.default,Banner2:w.default,Product:y.default,Footer:n.a,Instagram:O.default,quickviewModel:d.a,compareModel:v.a,cartModel:f.a,newsletterModel:m.a},data:function(){return{products:[],category:[],showquickviewmodel:!1,showcomparemodal:!1,showcartmodal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({productslist:function(t){return t.products.productslist}})),mounted:function(){this.productsArray()},methods:{productsArray:function(){var t=this;this.productslist.map((function(e){"fashion"===e.type&&(t.products.push(e),e.collection.map((function(i){-1===t.category.indexOf(i)&&t.category.push(i)})))}))},showQuickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e},showCoampre:function(t,e){this.showcomparemodal=t,this.comapreproduct=e},closeCompareModal:function(t){this.showcomparemodal=t},showCart:function(t,e){this.showcartmodal=t,this.cartproduct=e},closeCartModal:function(t){this.showcartmodal=t}}},j=x,P=r(69),component=Object(P.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Slider"),t._v(" "),r("Banner"),t._v(" "),r("Collection",{attrs:{products:t.products,category:t.category},on:{openQuickview:t.showQuickview,openCompare:t.showCoampre,openCart:t.showCart}}),t._v(" "),r("Banner2"),t._v(" "),r("Product",{attrs:{products:t.products,category:t.category}}),t._v(" "),r("Instagram"),t._v(" "),r("Footer"),t._v(" "),r("quickviewModel",{attrs:{openModal:t.showquickviewmodel,productData:t.quickviewproduct}}),t._v(" "),r("compareModel",{attrs:{openCompare:t.showcomparemodal,productData:t.comapreproduct},on:{closeCompare:t.closeCompareModal}}),t._v(" "),r("cartModel",{attrs:{openCart:t.showcartmodal,productData:t.cartproduct,products:t.products,category:t.category},on:{closeCart:t.closeCartModal}}),t._v(" "),r("newsletterModel")],1)}),[],!1,null,null,null);e.default=component.exports},685:function(t,e,r){"use strict";r(6),r(4),r(2),r(8),r(5),r(9);var c=r(0),o=(r(7),r(59));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var n={props:["openModal","productData"],data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({curr:"products/changeCurrency"})),methods:{Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},Size:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].size)&&e.push(t[i].size);return e},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)},getImgUrl:function(path){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="";return t?e+path:r(666)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},d=n,v=r(69),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openModal?r("b-modal",{attrs:{id:"modal-lg",size:"lg",centered:"",title:"Quickview","hide-footer":!0}},[r("div",{staticClass:"row quickview-modal"},[r("div",{staticClass:"col-lg-6 col-xs-12"},[r("div",{staticClass:"quick-view-img"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.productData.images,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.imageSrc?t.imageSrc:t.productData.images[0].src.woocommerce_thumbnail,!0),id:e.image_id,alt:"imag.alt"}})])})),0)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 rtl-text"},[r("div",{staticClass:"product-right"},[r("h2",[t._v(t._s(t.productData.title))]),t._v(" "),t.productData.sale?r("h3",[t._v("\n            "+t._s(t._f("currency")(t.discountedPrice(t.productData)*t.curr.curr,t.curr.symbol))+"\n            "),r("del",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))])]):r("h3",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),t.productData.variants[0].color?r("ul",{staticClass:"color-variant"},t._l(t.Color(t.productData.variants),(function(t,e){return r("li",{key:e},[r("a",{class:[t],style:{"background-color":t}})])})),0):t._e(),t._v(" "),t.productData.variants[0].size?r("div",{staticClass:"product-description border-product"},[r("h6",{staticClass:"product-title"},[t._v("select size")]),t._v(" "),r("div",{staticClass:"size-box"},[r("ul",t._l(t.Size(t.productData.variants),(function(e,c){return r("li",{key:c},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.productData.short_description.substring(0,250)+"....")}})]),t._v(" "),r("div",{staticClass:"product-buttons"},[r("a",{staticClass:"btn btn-solid",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("add to cart")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/product/sidebar/"+t.productData.id}}},[t._v("view detail")])],1)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},686:function(t,e,r){"use strict";var c={props:["openCompare","productData"],methods:{getImgUrl:function(path){return r(666)("./"+path)},closeCompare:function(t){this.$emit("closeCompare",false)}}},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openCompare?r("b-modal",{attrs:{id:"modal-compare",size:"lg",centered:"",title:"Compare","hide-footer":!0,"hide-header":!0}},[r("div",{staticClass:"row compare-modal"},[r("div",{staticClass:"col-lg-12"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCompare(t.openCompare)}}},[r("span",[t._v("×")])]),t._v(" "),r("div",{staticClass:"media"},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),r("div",{staticClass:"media-body align-self-center text-center"},[r("h5",[r("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),r("span",[t._v(t._s(t.productData.title))]),t._v(" "),r("span",[t._v("successfully added to your Compare list")])]),t._v(" "),r("div",{staticClass:"buttons d-flex justify-content-center"},[r("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/page/compare/compare-1"}}},[t._v("View Compare list")])],1)])])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},694:function(t,e,r){"use strict";r(7),r(6),r(8),r(5),r(9);var c=r(0),o=(r(4),r(2),r(97),r(59));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["openCart","productData","products","category"],computed:n(n({},Object(o.c)({currency:function(t){return t.products.currency}})),Object(o.b)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return path.full},closeCart:function(t){this.$emit("closeCart",false)},cartRelatedProducts:function(t,e){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t}))&&r.id!==e)return r}))},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=r(69),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.openCart?c("b-modal",{attrs:{id:"modal-cart",size:"lg",centered:"",title:"Add-to-cart","hide-footer":!0,"hide-header":!0}},[c("div",{staticClass:"row cart-modal"},[c("div",{staticClass:"col-lg-12"},[c("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCart(t.openCart)}}},[c("span",[t._v("×")])]),t._v(" "),c("div",{staticClass:"media"},[c("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),c("div",{staticClass:"media-body align-self-center text-center"},[c("h5",[c("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),c("span",[t._v(t._s(t.productData.title))]),t._v(" "),c("span",[t._v("successfully added to your Cart.")])]),t._v(" "),c("div",{staticClass:"buttons d-flex justify-content-center"},[c("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/cart"}}},[t._v("View Cart")]),t._v(" "),c("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/checkout"}}},[t._v("Checkout")]),t._v(" "),c("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/collection/all"}}},[t._v("Continue Shopping")])],1),t._v(" "),c("div",{staticClass:"upsell_payment"},[c("img",{staticClass:"img-fluid w-auto mt-3",attrs:{alt:"",src:r(708)}})])])]),t._v(" "),c("div",{staticClass:"product-section"},[c("div",{staticClass:"col-12 product-upsell text-center"},[c("h4",[t._v("Customers who bought this item also.")])]),t._v(" "),c("div",{staticClass:"row"},t._l(t.cartRelatedProducts(t.productData.collection[0],t.productData.id).slice(0,4),(function(e,r){return c("div",{key:r,staticClass:"product-box col-sm-3 col-6"},[c("div",{staticClass:"img-wrapper"},[c("div",{staticClass:"front"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[c("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:e.title}})])],1),t._v(" "),c("div",{staticClass:"product-detail"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[c("h6",[t._v(t._s(e.title))])]),t._v(" "),e.sale?c("h4",[t._v(t._s(t._f("currency")(t.discountedPrice(e)*t.curr.curr,t.curr.symbol))+"\n                        "),c("del",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])]):c("h4",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])],1)])])})),0)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},697:function(t,e,r){"use strict";var c={data:function(){return{imagepath:r(709)}},mounted:function(){"newsletter"!==localStorage.getItem("showModel")&&(this.showModal(),localStorage.setItem("showModel","newsletter"))},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()}}},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{ref:"my-modal",attrs:{id:"modal-newsletter",size:"lg",centered:"","hide-footer":!0}},[r("div",{staticClass:"modal-body modal1"},[r("div",{staticClass:"container-fluid p-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"modal-bg"},[r("div",{staticClass:"offer-content"},[r("img",{staticClass:"img-fluid",attrs:{src:t.imagepath,alt:"offer"}}),t._v(" "),r("h2",[t._v("newsletter")]),t._v(" "),r("form",{staticClass:"auth-form needs-validation",attrs:{target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"email",name:"EMAIL",placeholder:"Enter your email",required:"required"}}),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])])])])],1)}),[],!1,null,null,null);e.a=component.exports},895:function(t,e,r){"use strict";var c=r(681),o=r(683),l=r(680),n=r(682),d={data:function(){return{leftSidebarVal:!1}},components:{TopBar:c.a,LeftSidebar:o.a,Nav:l.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},v=r(69),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("header",[c("div",{staticClass:"mobile-fix-option"}),t._v(" "),c("TopBar"),t._v(" "),c("div",{staticClass:"container layout3-menu"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-12"},[c("div",{staticClass:"main-menu"},[c("div",{staticClass:"menu-left around-border"},[c("div",{staticClass:"navbar"},[c("a",{on:{click:t.left_sidebar}},[c("i",{staticClass:"fa fa-bars sidebar-bar",attrs:{"aria-hidden":"true"}})]),t._v(" "),c("LeftSidebar",{attrs:{leftSidebarVal:t.leftSidebarVal},on:{closeVal:t.closeBarValFromChild}})],1),t._v(" "),c("div",{staticClass:"main-menu-right"},[c("Nav")],1)]),t._v(" "),c("div",{staticClass:"absolute-logo"},[c("div",{staticClass:"brand-logo"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{alt:"",src:r(878)}})])])]),t._v(" "),c("div",{},[c("div",{staticClass:"menu-right pull-right"},[c("HeaderWidgets")],1)])])])])])],1)}),[],!1,null,null,null);e.a=component.exports},896:function(t,e,r){"use strict";var c={},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("footer",[c("div",{staticClass:"dark-layout"},[c("div",{staticClass:"container"},[c("section",{staticClass:"section-b-space border-b"},[c("div",{staticClass:"row footer-theme2"},[c("div",{staticClass:"col-lg-3"},[t._m(0),t._v(" "),c("div",{staticClass:"footer-contant"},[c("div",{staticClass:"footer-logo"},[c("img",{attrs:{src:r(876),alt:"logo"}})]),t._v(" "),c("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])]),t._v(" "),t._m(3),t._v(" "),c("div",{staticClass:"sub-footer darker-subfooter"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[t._m(4),t._v(" "),c("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[c("div",{staticClass:"payment-card-bottom"},[c("ul",[c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(673),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(674),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(675),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(676),alt:""}})])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(677),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-6 subscribe-wrapper"},[r("div",{staticClass:"subscribe-block"},[r("h2",[t._v("newsletter")]),t._v(" "),r("form",[r("div",{staticClass:"form-group"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleFormControlInput3",placeholder:"Enter your email"}}),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit"}},[t._v("subscribe")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-details"},[r("li",[t._v("Multikart Demo Store, Demo store India 345-659")]),t._v(" "),r("li",[t._v("Call Us: 123-456-7898")]),t._v(" "),r("li",[t._v("\n                    Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[t._v("Fax: 123456")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dark-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section"},[r("div",{staticClass:"row footer-theme2"},[r("div",{staticClass:"col p-set"},[r("div",{staticClass:"footer-link"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])]),t._v(" "),r("div",{staticClass:"footer-link-b"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2017-18 themeforest powered by pixelstrap\n              ")])])])}],!1,null,null,null);e.a=component.exports},942:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{swiperOption:{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},items:[{imagepath:r(687),title:"welcome to fashion",subtitle:"Women fashion",alignclass:"p-left"},{imagepath:r(687),title:"welcome to fashion",subtitle:"Top Collection",alignclass:"p-left"}]}}},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"p-0"},[r("div",{staticClass:"slide-1 home-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("div",{staticClass:"home text-center",class:e.alignclass,style:{"background-image":"url("+e.imagepath+")"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"slider-contain"},[r("div",[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("h1",[t._v(t._s(e.subtitle))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/collection/left-sidebar"}}},[t._v("shop now")])],1)])])])])])])})),0),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])}),[],!1,null,null,null);e.default=component.exports},943:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{items:[{img:r(799),sale:"save 30%",category:"Women"},{img:r(800),sale:"save 60%",category:"Watch"},{img:r(801),sale:"save 30%",category:"Sandle"},{img:r(802),sale:"save 30%",category:"Kids"}]}}},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"banner-padding banner-furniture"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row partition3"},t._l(t.items,(function(e,c){return r("div",{key:c,staticClass:"col-md-6"},[r("a",{attrs:{href:"#"}},[r("div",{staticClass:"collection-banner p-left text-left"},[r("div",{staticClass:"img-part"},[r("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:""}})]),t._v(" "),r("div",{staticClass:"contain-banner"},[r("div",[r("h4",[t._v(t._s(e.sale))]),t._v(" "),r("h2",[t._v(t._s(e.category))])])])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},944:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{imagepath:r(842),title:"2019",subtitle:"fashion trends",text:"special offer"}}},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"p-0"},[r("div",{staticClass:"full-banner parallax text-center p-left",style:{"background-image":"url("+t.imagepath+")"}},[t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"banner-contain"},[r("h2",[t._v("2018")]),t._v(" "),r("h3",[t._v("fashion trends")]),t._v(" "),r("h4",[t._v("special offer")])])])])])}],!1,null,null,null);e.default=component.exports},945:function(t,e,r){"use strict";r.r(e);r(4),r(2),r(97);var c={props:["products","category"],data:function(){return{swiperOption:{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{getImgUrl:function(path){return r(666)("./"+path)},getCategoryProduct:function(t){return this.products.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))}}},o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row multiple-slider"},t._l(t.category,(function(e,c){return r("div",{key:c,staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"theme-card"},[r("h5",{staticClass:"title-border"},[t._v(t._s(e))]),t._v(" "),r("div",{staticClass:"offer-slider slide-1"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:[index]",value:t.swiperOption,expression:"swiperOption",arg:c}]},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",t._l(t.getCategoryProduct(e).splice(0,3),(function(e,c){return r("div",{key:c,staticClass:"media"},[r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:""}})]),t._v(" "),r("div",{staticClass:"media-body align-self-center"},[t._m(0,!0),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[r("h6",[t._v(t._s(e.title))])]),t._v(" "),r("h4",[t._v(t._s(t._f("currency")(e.price)))])],1)],1)})),0)]),t._v(" "),t.getCategoryProduct(e).length>=4?r("div",{staticClass:"swiper-slide"},[r("div",t._l(t.getCategoryProduct(e).splice(3,3),(function(e,c){return r("div",{key:c,staticClass:"media"},[r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:""}})]),t._v(" "),r("div",{staticClass:"media-body align-self-center"},[t._m(1,!0),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[r("h6",[t._v(t._s(e.title))])]),t._v(" "),r("h4",[t._v(t._s(t._f("currency")(e.price)))])],1)],1)})),0)]):t._e()]),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])}],!1,null,null,null);e.default=component.exports},946:function(t,e,r){"use strict";r.r(e);var c=r(70),o=r.n(c),l={data:function(){return{swiperOption:{loop:!0,slideSpeed:300,slidesPerView:7,slidesToScroll:7,breakpoints:{1199:{slidesPerView:5},991:{slidesPerView:3},480:{slidesPerView:2}}},instagram:[]}},mounted:function(){var t=this;o.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15").then((function(e){t.instagram=e.data.data}))}},n=r(69),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"instagram"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 p-0"},[r("h2",{staticClass:"title-borderless"},[t._v("# instagram")]),t._v(" "),r("div",{staticClass:"slide-7 no-arrow"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.instagram.slice(0,10),(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("div",[r("a",{attrs:{href:e.link,target:"_blank"}},[r("div",{staticClass:"instagram-box"},[r("img",{attrs:{alt:"",src:e.images.standard_resolution.url}}),t._v(" "),t._m(0,!0)])])])])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay"},[e("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports}}]);