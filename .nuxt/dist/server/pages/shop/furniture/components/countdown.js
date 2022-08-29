exports.ids = [127,123];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.daeee06.jpg";

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/furniture/components/banner.vue?vue&type=template&id=3c437042&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"p-0\"><div class=\"full-banner text-center p-left\""+(_vm._ssrStyle(null,{ 'background-image': ("url(" + _vm.imagepath + ")") }, null))+"><img"+(_vm._ssrAttr("src",_vm.imagepath))+" alt class=\"bg-img d-none\"> <div class=\"container\"><div class=\"row\"><div class=\"col\"><div class=\"banner-contain\"><h2>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <h3>"+_vm._ssrEscape(_vm._s(_vm.subtitle))+"</h3> <h4>"+_vm._ssrEscape(_vm._s(_vm.text))+"</h4></div></div></div></div></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/furniture/components/banner.vue?vue&type=template&id=3c437042&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/furniture/components/banner.vue?vue&type=script&lang=js&
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
/* harmony default export */ var bannervue_type_script_lang_js_ = ({data(){return{imagepath:__webpack_require__(126),title:'2019',subtitle:'fashion trends',text:'special offer'};}});
// CONCATENATED MODULE: ./pages/shop/furniture/components/banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bannervue_type_script_lang_js_ = (bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/shop/furniture/components/banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a19e8aa"
  
)

/* harmony default export */ var banner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/furniture/components/countdown.vue?vue&type=template&id=0fbd62c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"p-4 mt-5\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"full-banner text-center\""+(_vm._ssrStyle(null,{ 'background-image': ("url(" + _vm.imagepath + ")") }, null))+"><img"+(_vm._ssrAttr("src",_vm.imagepath))+" alt class=\"bg-img d-none\"> <div class=\"container\"><div class=\"row\"><div class=\"col\"><div class=\"banner-contain\"><h2>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <h3>"+_vm._ssrEscape(_vm._s(_vm.subtitle))+"</h3> <h4>"+_vm._ssrEscape(_vm._s(_vm.text))+"</h4></div></div></div></div></div></div> <div class=\"col-md-6 text-center mt-5\"><h1>Deal of the day</h1> <div class=\"row text-center ml-5 mr-5 mb-3 mt-5\"><div class=\"col-md-3\"><h3>DAYS</h3></div> <div class=\"col-md-3\"><h3>HOURS</h3></div> <div class=\"col-md-3\"><h3>MINS</h3></div> <div class=\"col-md-3\"><h3>SECS</h3></div></div> <div class=\"row text-center ml-5 mr-5 mt-3\"><div class=\"col-md-3\"><h3>"+_vm._ssrEscape(_vm._s(_vm.days))+"</h3></div> <div class=\"col-md-3\"><h3>"+_vm._ssrEscape(_vm._s(_vm.hours))+"</h3></div> <div class=\"col-md-3\"><h3>"+_vm._ssrEscape(_vm._s(_vm.minutes))+"</h3></div> <div class=\"col-md-3\"><h3>"+_vm._ssrEscape(_vm._s(_vm.seconds))+"</h3></div> <div class=\"col-md-12\"><button type=\"submit\" class=\"btn btn-solid btn-danger btn-round mt-5\">Shop Now</button></div></div></div></div></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/furniture/components/countdown.vue?vue&type=template&id=0fbd62c6&

// EXTERNAL MODULE: ./pages/shop/furniture/components/banner.vue + 4 modules
var banner = __webpack_require__(615);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/furniture/components/countdown.vue?vue&type=script&lang=js&
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
/* harmony default export */ var countdownvue_type_script_lang_js_ = ({components:{Banner: banner["default"]},data(){return{imagepath:__webpack_require__(126),title:'2022',subtitle:'fashion trends',text:'special offer',days:0,hours:0,minutes:0,seconds:0};},mounted(){this.initTimer();},methods:{initTimer(){const second=1000,minute=second*60,hour=minute*60,day=hour*24;let today=new Date(),dd=String(today.getDate()).padStart(2,"0"),mm=String(today.getMonth()+1).padStart(2,"0"),yyyy=today.getFullYear(),nextYear=yyyy+1,dayMonth="09/30/",birthday=dayMonth+yyyy;today=mm+"/"+dd+"/"+yyyy;if(today>birthday){birthday=dayMonth+nextYear;}const countDown=new Date(birthday).getTime(),x=setInterval(()=>{const now=new Date().getTime(),distance=countDown-now;this.days=Math.floor(distance/day),this.hours=Math.floor(distance%day/hour),this.minutes=Math.floor(distance%hour/minute),this.seconds=Math.floor(distance%minute/second);},0);}}});
// CONCATENATED MODULE: ./pages/shop/furniture/components/countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_countdownvue_type_script_lang_js_ = (countdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/shop/furniture/components/countdown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_countdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a312cba"
  
)

/* harmony default export */ var countdown = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=countdown.js.map