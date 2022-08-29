exports.ids = [201];
exports.modules = {

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/widgets/timer.vue?vue&type=template&id=157df978&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"timer\"><p id=\"demo\"><span><span class=\"timer-num\">"+_vm._ssrEscape(_vm._s(_vm.days))+"</span> <span class=\"padding-l\">:</span> <span class=\"timer-cal\">Days</span></span> <span><span class=\"timer-num\">"+_vm._ssrEscape(_vm._s(_vm.hours))+"</span> <span class=\"padding-l\">:</span> <span class=\"timer-cal\">Hrs</span></span> <span><span class=\"timer-num\">"+_vm._ssrEscape(_vm._s(_vm.minutes))+"</span> <span class=\"padding-l\">:</span> <span class=\"timer-cal\">Min</span></span> <span><span class=\"timer-num\">"+_vm._ssrEscape(_vm._s(_vm.seconds))+"</span> <span class=\"timer-cal\">Sec</span></span></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/widgets/timer.vue?vue&type=template&id=157df978&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/widgets/timer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var timervue_type_script_lang_js_ = ({mounted(){window.setInterval(()=>{this.now=Math.trunc(new Date().getTime()/1000);},1000);},props:['date'],data(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1000),now:Math.trunc(new Date().getTime()/1000)};},computed:{seconds(){return(this.timerdate-this.now)%60;},minutes(){return Math.trunc((this.timerdate-this.now)/60)%60;},hours(){return Math.trunc((this.timerdate-this.now)/60/60)%24;},days(){return Math.trunc((this.timerdate-this.now)/60/60/24);}}});
// CONCATENATED MODULE: ./components/widgets/timer.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_timervue_type_script_lang_js_ = (timervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/widgets/timer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  widgets_timervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "af96247c"
  
)

/* harmony default export */ var timer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/watch/components/timer_banner.vue?vue&type=template&id=585e380b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row banner-timer\""+(_vm._ssrStyle(null,{ 'background-image': 'url(' + _vm.imagepath + ')' }, null))+">","</div>",[_vm._ssrNode("<div class=\"col-md-6\"><div class=\"banner-text\"><h2>"+(_vm._s(_vm.offer_text))+"</h2></div></div> "),_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"timer-box\">","</div>",[_c('countdown',{attrs:{"date":"December 20, 2020"}})],1)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/watch/components/timer_banner.vue?vue&type=template&id=585e380b&

// EXTERNAL MODULE: ./components/widgets/timer.vue + 4 modules
var timer = __webpack_require__(590);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/watch/components/timer_banner.vue?vue&type=script&lang=js&
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
/* harmony default export */ var timer_bannervue_type_script_lang_js_ = ({data(){return{imagepath:__webpack_require__(47),offer_text:'Save <span>30% off</span> Digital Watch'};},components:{Countdown: timer["a" /* default */]}});
// CONCATENATED MODULE: ./pages/shop/watch/components/timer_banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_timer_bannervue_type_script_lang_js_ = (timer_bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/shop/watch/components/timer_banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_timer_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d4789c1"
  
)

/* harmony default export */ var timer_banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=timer_banner.js.map