exports.ids = [94];
exports.modules = {

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/fashion-2/components/instagram.vue?vue&type=template&id=2baff4d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"instagram"},[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12 p-0\">","</div>",[_vm._ssrNode("<h2 class=\"title-borderless\"># instagram</h2> "),_vm._ssrNode("<div class=\"slide-7 no-arrow\">","</div>",[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.swiperOption),expression:"swiperOption",arg:"mySwiper"}]},[_vm._ssrNode("<div class=\"swiper-wrapper\">"+(_vm._ssrList((_vm.instagram.slice(0,10)),function(user,index){return ("<div class=\"swiper-slide\"><div><a"+(_vm._ssrAttr("href",user.link))+" target=\"_blank\"><div class=\"instagram-box\"><img alt"+(_vm._ssrAttr("src",user.images.standard_resolution.url))+"> <div class=\"overlay\"><i aria-hidden=\"true\" class=\"fa fa-instagram\"></i></div></div></a></div></div>")}))+"</div>")])])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/fashion-2/components/instagram.vue?vue&type=template&id=2baff4d2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/fashion-2/components/instagram.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var instagramvue_type_script_lang_js_ = ({data(){return{swiperOption:{loop:true,slideSpeed:300,slidesPerView:7,slidesToScroll:7,breakpoints:{1199:{slidesPerView:5},991:{slidesPerView:3},480:{slidesPerView:2}}},instagram:[]};},mounted(){external_axios_default.a.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15').then(response=>{this.instagram=response.data.data;});}});
// CONCATENATED MODULE: ./pages/shop/fashion-2/components/instagram.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_instagramvue_type_script_lang_js_ = (instagramvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/shop/fashion-2/components/instagram.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_instagramvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8b54d8ce"
  
)

/* harmony default export */ var instagram = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instagram.js.map