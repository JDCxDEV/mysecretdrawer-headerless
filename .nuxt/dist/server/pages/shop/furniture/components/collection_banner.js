exports.ids = [126];
exports.modules = {

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(619);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("22a06a8c", content, true, context)
};

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_collection_banner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".collection-img{background-position:50%;background-repeat:no-repeat;background-size:cover;height:280px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/furniture/components/collection_banner.vue?vue&type=template&id=e2bb46ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"banner-furniture ratio_45\"><div class=\"container-fluid\"><div class=\"row partition3 text-center\">"+(_vm._ssrList((_vm.items),function(item,index){return ("<div class=\"col-md-3\"><a href=\"#\"><div class=\"collection-banner p-right text-center\"><div class=\"img-part\" style=\"position: relative;\"><div class=\"collection-img\""+(_vm._ssrStyle(null,{'background-image': _vm.setBackground(item.imagepath)}, null))+"></div></div> <div class=\"contain-banner banner-3\"><div></div></div></div></a> <h3 class=\"mt-2 text-danger\"><b>"+_vm._ssrEscape(_vm._s(item.title))+"</b></h3></div>")}))+"</div></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/shop/furniture/components/collection_banner.vue?vue&type=template&id=e2bb46ae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/furniture/components/collection_banner.vue?vue&type=script&lang=js&
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
/* harmony default export */ var collection_bannervue_type_script_lang_js_ = ({data(){return{items:[{imagepath:'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/H3373-2OK.jpg',title:'Stocking and Legwear',subtitle:'save 30%'},{imagepath:'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R70334__2_hero.jpg',title:'Teddies',subtitle:'save 55%'},{imagepath:'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/20180726155777017701.jpg',title:'Corsets Bustiers',subtitle:'save 55%'},{imagepath:'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80068-1P-1-5.jpg',title:'Pj & Warps',subtitle:'save 60%'}]};},methods:{setBackground(image){return`url(${image})`;}}});
// CONCATENATED MODULE: ./pages/shop/furniture/components/collection_banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_collection_bannervue_type_script_lang_js_ = (collection_bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/shop/furniture/components/collection_banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(618)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_collection_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a67ac942"
  
)

/* harmony default export */ var collection_banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=collection_banner.js.map