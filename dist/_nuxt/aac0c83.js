(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1237:function(t,e,r){"use strict";r.r(e);r(5),r(7),r(4),r(8);var c=r(0),o=(r(6),r(3),r(2),r(51)),l=r(436),n=r(435),d=r(440),v=r(470),_=r(478);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{Header:l.a,Footer:n.a,Breadcrumbs:d.a,Timer:v.a,relatedProduct:_.a},data:function(){return{counter:1,activeColor:"",selectedSize:"",qty:"",size:[],productTYpe:"",productId:"",swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0},swiperOption1:{slidesPerView:3,spaceBetween:30,freeMode:!0,centeredSlides:!1}}},computed:m(m(m({},Object(o.c)({currency:function(t){return t.products.currency}})),Object(o.b)({curr:"products/changeCurrency"})),{},{getDetail:function(){return this.$store.getters["products/getProductById"](1)},swiper:function(){return this.$refs.mySwiper.swiper}}),mounted:function(){this.uniqColor=this.getDetail.variants[0].color,this.sizeVariant(this.getDetail.variants[0].image_id),this.activeColor=this.uniqColor,this.changeSizeVariant(this.getDetail.variants[0].size)},methods:{priceCurrency:function(){this.$store.dispatch("products/changeCurrency")},addToWishlist:function(t){this.$store.dispatch("products/addToWishlist",t)},discountedPrice:function(t){return t.price-t.price*t.discount/100},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return this.stock(),e},addToCart:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t)},buyNow:function(t,e){t.quantity=e||1,this.$store.dispatch("cart/addToCart",t),this.$router.push("/page/account/checkout")},increment:function(){this.counter++},decrement:function(){this.counter>1&&this.counter--},changeSizeVariant:function(t){this.selectedSize=t,this.stock()},getImgUrl:function(path){return r(433)("./"+path)},slideTo:function(t){this.swiper.slideTo(t,1e3,!1)},sizeVariant:function(t,e,r){var c=this;this.swiper.slideTo(e,1e3,!1),this.size=[],this.activeColor=r,this.getDetail.variants.filter((function(e){t===e.image_id&&c.size.push(e.size)}))},stock:function(){var t=this;this.getDetail.variants.filter((function(e){t.activeColor===e.color&&t.selectedSize===e.size&&(t.qty=e.qty)}))}}},h=r(60),component=Object(h.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:t.getDetail.title}}),t._v(" "),r("section",[r("div",{staticClass:"collection-wrapper productdetail"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.getDetail.images,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:e.alt}})])})),0)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 slider-nav-images"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper1",value:t.swiperOption1,expression:"swiperOption1",arg:"mySwiper1"}]},[r("div",{staticClass:"swiper-wrapper"},t._l(t.getDetail.images,(function(e,c){return r("div",{key:c,staticClass:"swiper-slide"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(e.src),id:e.image_id,alt:"product.alt"},on:{click:function(e){return t.slideTo(c)}}})])})),0)])])])]),t._v(" "),r("div",{staticClass:"col-lg-6 rtl-text"},[r("div",{staticClass:"product-right"},[r("h2",[t._v(t._s(t.getDetail.title))]),t._v(" "),t.getDetail.sale?r("h4",[r("del",[t._v(t._s(t._f("currency")(t.getDetail.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),r("span",[t._v(t._s(t.getDetail.discount)+"% off")])]):t._e(),t._v(" "),t.getDetail.sale?r("h3",[t._v(t._s(t._f("currency")(t.discountedPrice(t.getDetail)*t.curr.curr,t.curr.symbol)))]):r("h3",[t._v(t._s(t._f("currency")(t.getDetail.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),r("ul",{staticClass:"color-variant"},t._l(t.Color(t.getDetail.variants),(function(e,c){return r("li",{key:c,class:{active:t.activeColor==e}},[r("a",{class:[e],style:{"background-color":e},on:{click:function(r){return t.sizeVariant(t.getDetail.variants[c].image_id,c,e)}}})])})),0),t._v(" "),t.getDetail.stock<8?r("div",{staticClass:"pro_inventory"},[r("p",{staticClass:"active"},[t._v(" Hurry! We have only "+t._s(t.getDetail.stock)+" product in stock. ")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),r("div",{staticClass:"product-description border-product"},[r("h6",{staticClass:"product-title size-text"},[t._v("\n                          select size\n                          "),r("span",[r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{href:"javascript:void(0)"}},[t._v("size chart")])])]),t._v(" "),r("div",{staticClass:"size-box"},[r("ul",t._l(t.size,(function(e,c){return r("li",{key:c,staticClass:"product-title",class:{active:t.selectedSize==e}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.changeSizeVariant(e)}}},[t._v(t._s(e))])])})),0)]),t._v(" "),t.counter<=t.getDetail.stock?r("h5",{staticClass:"avalibility"},[r("span",[t._v("In Stock")])]):t._e(),t._v(" "),t.counter>t.getDetail.stock?r("h5",{staticClass:"avalibility"},[r("span",[t._v("Out of Stock")])]):t._e(),t._v(" "),r("h6",{staticClass:"product-title"},[t._v("quantity")]),t._v(" "),r("div",{staticClass:"qty-box"},[r("div",{staticClass:"input-group"},[r("span",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn quantity-left-minus",attrs:{type:"button","data-type":"minus","data-field":""},on:{click:function(e){return t.decrement()}}},[r("i",{staticClass:"ti-angle-left"})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],staticClass:"form-control input-number",attrs:{type:"text",name:"quantity",disabled:t.counter>t.getDetail.stock},domProps:{value:t.counter},on:{input:function(e){e.target.composing||(t.counter=e.target.value)}}}),t._v(" "),r("span",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn quantity-right-plus",attrs:{type:"button","data-type":"plus","data-field":""},on:{click:function(e){return t.increment()}}},[r("i",{staticClass:"ti-angle-right"})])])])])]),t._v(" "),r("div",{staticClass:"product-buttons"},[r("nuxt-link",{attrs:{to:{path:"/page/account/cart"}}},[r("button",{staticClass:"btn btn-solid",attrs:{title:"Add to cart",disabled:t.counter>t.getDetail.stock},on:{click:function(e){return t.addToCart(t.getDetail,t.counter)}}},[t._v("Add To Cart")])]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{title:"buy now",disabled:t.counter>t.getDetail.stock},on:{click:function(e){return t.buyNow(t.getDetail,t.counter)}}},[t._v("Buy Now")])],1),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),r("p",[t._v(t._s(t.getDetail.description.substring(0,200)+"...."))])]),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("share it")]),t._v(" "),r("div",{staticClass:"product-icon"},[t._m(1),t._v(" "),r("form",{staticClass:"d-inline-block"},[r("button",{staticClass:"wishlist-btn",on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"fa fa-heart"}),t._v(" "),r("span",{staticClass:"title-font"},[t._v("Add To WishList")])])])])]),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("Time Reminder")]),t._v(" "),r("Timer",{attrs:{date:"December 20, 2020"}})],1)])])])])])]),t._v(" "),r("section",{staticClass:"tab-product m-0"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-lg-12"},[r("b-tabs",{attrs:{card:""}},[r("b-tab",{attrs:{title:"Description",active:""}},[r("b-card-text",[t._v(t._s(t.getDetail.description))])],1),t._v(" "),r("b-tab",{attrs:{title:"Details"}},[r("b-card-text",[t._v("\n                          "+t._s(t.getDetail.description)+"\n                          "),r("div",{staticClass:"single-product-tables"},[r("table",[r("tbody",[r("tr",[r("td",[t._v("Febric")]),t._v(" "),r("td",[t._v("Chiffon")])]),t._v(" "),r("tr",[r("td",[t._v("Color")]),t._v(" "),r("td",[t._v("Red")])]),t._v(" "),r("tr",[r("td",[t._v("Material")]),t._v(" "),r("td",[t._v("Crepe printed")])])])]),t._v(" "),r("table",[r("tbody",[r("tr",[r("td",[t._v("Length")]),t._v(" "),r("td",[t._v("50 Inches")])]),t._v(" "),r("tr",[r("td",[t._v("Size")]),t._v(" "),r("td",[t._v("S, M, L .XXL")])])])])])])],1),t._v(" "),r("b-tab",{attrs:{title:"Video"}},[r("b-card-text",[r("div",{staticClass:"mt-3 text-center"},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])],1),t._v(" "),r("b-tab",{attrs:{title:"Write Review"}},[r("b-card-text",[r("form",{staticClass:"theme-form"},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"media"},[r("label",[t._v("Rating")]),t._v(" "),r("div",{staticClass:"media-body ml-3"},[r("div",{staticClass:"rating three-star"},[r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"}),t._v(" "),r("i",{staticClass:"fa fa-star"})])])])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter Your name",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"review"}},[t._v("Review Title")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"review",placeholder:"Enter your Review Subjects",required:""}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"review"}},[t._v("Review Title")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{placeholder:"Wrire Your Testimonial Here",id:"exampleFormControlTextarea1",rows:"6"}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-solid",attrs:{type:"submit"}},[t._v("Submit YOur Review")])])])])])],1)],1)],1)])])]),t._v(" "),r("relatedProduct",{attrs:{productTYpe:t.productTYpe,productId:t.productId}}),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inventory-scroll"},[e("span",{staticStyle:{width:"95%"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-social"},[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss"})])])])}],!1,null,null,null);e.default=component.exports}}]);