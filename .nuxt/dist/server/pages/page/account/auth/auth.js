exports.ids = [20];
exports.modules = {

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
// 'loggedIn' is used in other parts of application. So, Don't forget to change there also
const userlogin='islogged';const loginExpiryKey='tokenExpiry';const Userinfo='userinfo';class Auth extends events__WEBPACK_IMPORTED_MODULE_0___default.a{localLogin(authResult){this.tokenExpiry=new Date();localStorage.setItem(loginExpiryKey,this.tokenExpiry);localStorage.setItem('userlogin',true);localStorage.setItem(Userinfo,JSON.stringify({displayName:authResult.user.displayName,email:authResult.user.email,photoURL:authResult.user.photoURL}));console.log('userlogin',localStorage.getItem('userlogin'));}Logout(){localStorage.removeItem(loginExpiryKey);localStorage.removeItem(userlogin);localStorage.removeItem(Userinfo);}isAuthenticated(){return new Date(Date.now())!==new Date(localStorage.getItem(loginExpiryKey))&&localStorage.getItem(userlogin)==='true';}}/* harmony default export */ __webpack_exports__["default"] = (new Auth());

/***/ })

};;
//# sourceMappingURL=auth.js.map