exports.ids = [132];
exports.modules = {

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/25.daeee06.jpg";

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/gym/components/instagram.vue?vue&type=template&id=0fa8b0ad&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"section-t-space full-banner gym-parallax parallax p-0\""+(_vm._ssrStyle(null,{ 'background-image': ("url(" + _vm.imagepath + ")") }, null))+">","</div>",[_vm._ssrNode("<div class=\"instagram section-t-space section-b-space\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_vm._ssrNode("<h2 class=\"title-borderless text-white\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> "),_vm._ssrNode("<div class=\"slide-6 no-arrow\">","</div>",[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:(_vm.swiperOption),expression:"swiperOption",arg:"mySwiper"}]},[_vm._ssrNode("<div class=\"swiper-wrapper\">"+(_vm._ssrList((_vm.instagram.slice(0, 15)),function(user,index){return ("<div class=\"swiper-slide\"><div><a"+(_vm._ssrAttr("href",user.link))+" target=\"_blank\"><div class=\"instagram-box\"><img alt"+(_vm._ssrAttr("src",user.images.standard_resolution.url))+"> <div class=\"overlay\"><i aria-hidden=\"true\" class=\"fa fa-instagram\"></i></div></div></a></div></div>")}))+"</div>")])])],2)])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/gym/components/instagram.vue?vue&type=template&id=0fa8b0ad&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/gym/components/instagram.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var instagramvue_type_script_lang_js_ = ({data(){return{imagepath:__webpack_require__(168),title:'#instagram',swiperOption:{loop:true,slideSpeed:300,slidesPerView:7,slidesToScroll:7,breakpoints:{1367:{slidesPerView:6},1024:{slidesPerView:5},600:{slidesPerView:4},480:{slidesPerView:3}}},instagram:[]};},mounted(){external_axios_default.a.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc&count=15').then(response=>{this.instagram=response.data.data;});}});
// CONCATENATED MODULE: ./pages/shop/gym/components/instagram.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_instagramvue_type_script_lang_js_ = (instagramvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/shop/gym/components/instagram.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_instagramvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aaaae50a"
  
)

/* harmony default export */ var instagram = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=instagram.js.map