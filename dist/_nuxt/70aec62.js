(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1115:function(t,e,r){"use strict";r.r(e);var l=r(629),o=r(434),c=r(433),n=r(436),v={components:{Header:o.a,Footer:c.a,Breadcrumbs:n.a,ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{logintitle:"Login",registertitle:"New Customer",email:null,password:null}},methods:{onSubmit:function(){console.log("Form has been submitted!")}}},d=r(60),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Login"}}),t._v(" "),r("section",{staticClass:"login-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("h3",[t._v(t._s(t.logintitle))]),t._v(" "),r("div",{staticClass:"theme-card"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var l=e.invalid;return[r("form",{staticClass:"theme-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|email",name:"email"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("span",{staticClass:"validate-error"},[t._v(t._s(l[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"password"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("span",{staticClass:"validate-error"},[t._v(t._s(l[0]))])]}}],null,!0)})],1),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",disabled:l}},[t._v("Login")])])]}}])})],1)]),t._v(" "),r("div",{staticClass:"col-lg-6 right-login"},[r("h3",[t._v(t._s(t.registertitle))]),t._v(" "),r("div",{staticClass:"theme-card authentication-right"},[r("h6",{staticClass:"title-font"},[t._v("Create A Account")]),t._v(" "),r("p",[t._v("Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/page/account/register"}}},[t._v("Create an Account")])],1)])])])]),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,r){"use strict";var l={},o=r(60),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("footer",{staticClass:"footer-light"},[t._m(0),t._v(" "),l("section",{staticClass:"section-b-space light-layout"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row footer-theme partition-f"},[l("div",{staticClass:"col-lg-4 col-md-6"},[t._m(1),t._v(" "),l("div",{staticClass:"footer-contant"},[l("div",{staticClass:"footer-logo"},[l("img",{attrs:{src:r(435),alt:"logo"}})]),t._v(" "),l("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),l("div",{staticClass:"sub-footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[t._m(6),t._v(" "),l("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[l("div",{staticClass:"payment-card-bottom"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(441),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(439),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(440),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(437),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(438),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"light-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section border-section border-top-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"subscribe"},[r("div",[r("h4",[t._v("KNOW IT ALL FIRST!")]),t._v(" "),r("p",[t._v("Never Miss Anything From Multikart By Signing Up To Our Newsletter.")])])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"form-inline subscribe-form auth-form needs-validation",attrs:{method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}})]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col offset-xl-1"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-list"},[r("li",[r("i",{staticClass:"fa fa-map-marker"}),t._v("Multikart Demo Store, Demo store India 345-659\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-phone"}),t._v("Call Us: 123-456-7898\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-envelope-o"}),t._v("Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-fax"}),t._v("Fax: 123456\n                  ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2017-18 themeforest powered by pixelstrap\n              ")])])])}],!1,null,null,null);e.a=component.exports},434:function(t,e,r){"use strict";var l=r(443),o=r(445),c=r(442),n=r(444),v={data:function(){return{leftSidebarVal:!1}},components:{TopBar:l.a,LeftSidebar:o.a,Nav:c.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},d=r(60),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",[l("div",{staticClass:"mobile-fix-option"}),t._v(" "),l("TopBar"),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12"},[l("div",{staticClass:"main-menu"},[l("div",{staticClass:"menu-left"},[l("div",{staticClass:"navbar"},[l("a",{on:{click:t.left_sidebar}},[t._m(0)]),t._v(" "),l("LeftSidebar",{attrs:{leftSidebarVal:t.leftSidebarVal},on:{closeVal:t.closeBarValFromChild}})],1),t._v(" "),l("div",{staticClass:"brand-logo"},[l("nuxt-link",{attrs:{to:{path:"/shop/fashion"}}},[l("img",{staticClass:"img-fluid",attrs:{src:r(435),alt:""}})])],1)]),t._v(" "),l("div",{staticClass:"menu-right pull-right"},[l("Nav"),t._v(" "),l("HeaderWidgets")],1)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar-style"},[e("i",{staticClass:"fa fa-bars sidebar-bar",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},436:function(t,e,r){"use strict";var l={props:["title"]},o=r(60),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);