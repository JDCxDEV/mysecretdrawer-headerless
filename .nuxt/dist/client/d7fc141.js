(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{791:function(e,t,o){"use strict";o.r(t);o(2),o(233);var n=o(26),r=o(27),c=o(84),l=o(127),f=o(59),m=o(100);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var h="islogged",v="tokenExpiry",w="userinfo",S=function(e){Object(c.a)(o,e);var t=y(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"localLogin",value:function(e){this.tokenExpiry=new Date,localStorage.setItem(v,this.tokenExpiry),localStorage.setItem("userlogin",!0),localStorage.setItem(w,JSON.stringify({displayName:e.user.displayName,email:e.user.email,photoURL:e.user.photoURL})),console.log("userlogin",localStorage.getItem("userlogin"))}},{key:"Logout",value:function(){localStorage.removeItem(v),localStorage.removeItem(h),localStorage.removeItem(w)}},{key:"isAuthenticated",value:function(){return new Date(Date.now())!==new Date(localStorage.getItem(v))&&"true"===localStorage.getItem(h)}}]),o}(o.n(m).a);t.default=new S}}]);