(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1112:function(t,e,r){"use strict";r.r(e);r(11);var l=r(434),o=r(433),c=r(436),n={components:{Header:l.a,Footer:o.a,Breadcrumbs:c.a},data:function(){return{phoneimage:r(649),emailimage:r(647),phone1:"+91 123 - 456 - 7890",phone2:"+86 163 - 451 - 7894",address:"ABC Complex,Near xyz, New York <br /> USA 123456",email1:"Support@Shopcart.com",email2:"info@shopcart.com",errors:[],fname:null,lname:null,email:null,phone:null,message:null}},methods:{checkForm:function(t){if(this.errors=[],this.fname||this.errors.push("First name required."),this.lname||this.errors.push("Last name required."),this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.phone||this.errors.push("Phone Number required."),this.message||this.errors.push("Message required."),!this.errors.length)return!0;t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},m=r(60),component=Object(m.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("Breadcrumbs",{attrs:{title:"Contact"}}),t._v(" "),r("section",{staticClass:"contact-page section-b-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row section-b-space"},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-5"},[r("div",{staticClass:"contact-right"},[r("ul",[r("li",[r("div",{staticClass:"contact-icon"},[r("img",{attrs:{src:t.phoneimage,alt:"Generic placeholder image"}}),t._v(" "),r("h6",[t._v("Contact Us")])]),t._v(" "),r("div",{staticClass:"media-body"},[r("p",[t._v(t._s(t.phone1))]),t._v(" "),r("p",[t._v(t._s(t.phone2))])])]),t._v(" "),r("li",[t._m(1),t._v(" "),r("div",{staticClass:"media-body"},[r("p",{domProps:{innerHTML:t._s(t.address)}})])]),t._v(" "),r("li",[r("div",{staticClass:"contact-icon"},[r("img",{attrs:{src:t.emailimage,alt:"Generic placeholder image"}}),t._v(" "),r("h6",[t._v("Email")])]),t._v(" "),r("div",{staticClass:"media-body"},[r("p",[t._v(t._s(t.email1))]),t._v(" "),r("p",[t._v(t._s(t.email2))])])]),t._v(" "),r("li",[t._m(2),t._v(" "),r("div",{staticClass:"media-body"},[r("p",[t._v(t._s(t.email1))]),t._v(" "),r("p",[t._v(t._s(t.email2))])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("form",{staticClass:"theme-form",attrs:{method:"post"},on:{submit:t.checkForm}},[t.errors.length?r("div",[r("ul",{staticClass:"validation-error mb-3"},t._l(t.errors,(function(e,l){return r("li",{key:l},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"fname"}},[t._v("First Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fname,expression:"fname"}],staticClass:"form-control",attrs:{type:"text",id:"fname",placeholder:"First Name",name:"fname",required:""},domProps:{value:t.fname},on:{input:function(e){e.target.composing||(t.fname=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"lname"}},[t._v("Last Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lname,expression:"lname"}],staticClass:"form-control",attrs:{type:"text",id:"lname",placeholder:"Last Name",name:"lname",required:""},domProps:{value:t.lname},on:{input:function(e){e.target.composing||(t.lname=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"phone"}},[t._v("Phone number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",id:"phone",placeholder:"Enter your number",name:"phone",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("label",{attrs:{for:"message"}},[t._v("Write Your Message")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{placeholder:"Write Your Message",id:"message",name:"message",rows:"6"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),t._m(3)])])])])])]),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-7 map"},[e("iframe",{attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact-icon"},[r("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),t._v(" "),r("h6",[t._v("Address")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact-icon"},[r("i",{staticClass:"fa fa-fax",attrs:{"aria-hidden":"true"}}),t._v(" "),r("h6",[t._v("Fax")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("input",{staticClass:"btn btn-solid",attrs:{type:"submit",value:"Send Your Message"}})])}],!1,null,null,null);e.default=component.exports},433:function(t,e,r){"use strict";var l={},o=r(60),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("footer",{staticClass:"footer-light"},[t._m(0),t._v(" "),l("section",{staticClass:"section-b-space light-layout"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row footer-theme partition-f"},[l("div",{staticClass:"col-lg-4 col-md-6"},[t._m(1),t._v(" "),l("div",{staticClass:"footer-contant"},[l("div",{staticClass:"footer-logo"},[l("img",{attrs:{src:r(435),alt:"logo"}})]),t._v(" "),l("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,")]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),l("div",{staticClass:"sub-footer"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[t._m(6),t._v(" "),l("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[l("div",{staticClass:"payment-card-bottom"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(441),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(439),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(440),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(437),alt:""}})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:r(438),alt:""}})])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"light-layout"},[r("div",{staticClass:"container"},[r("section",{staticClass:"small-section border-section border-top-0"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"subscribe"},[r("div",[r("h4",[t._v("KNOW IT ALL FIRST!")]),t._v(" "),r("p",[t._v("Never Miss Anything From Multikart By Signing Up To Our Newsletter.")])])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"form-inline subscribe-form auth-form needs-validation",attrs:{method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank"}},[r("div",{staticClass:"form-group mx-sm-3"},[r("input",{staticClass:"form-control",attrs:{type:"text",name:"EMAIL",id:"mce-EMAIL",placeholder:"Enter your email",required:"required"}})]),t._v(" "),r("button",{staticClass:"btn btn-solid",attrs:{type:"submit",id:"mc-submit"}},[t._v("subscribe")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title footer-mobile-title"},[r("h4",[t._v("about")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-social"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col offset-xl-1"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("my account")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("mens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("womens")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("clothing")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("accessories")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("featured")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("why we choose")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("shipping & return")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("secure shopping")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("gallary")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("affiliates")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("contacts")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("div",{staticClass:"sub-title"},[r("div",{staticClass:"footer-title"},[r("h4",[t._v("store information")])]),t._v(" "),r("div",{staticClass:"footer-contant"},[r("ul",{staticClass:"contact-list"},[r("li",[r("i",{staticClass:"fa fa-map-marker"}),t._v("Multikart Demo Store, Demo store India 345-659\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-phone"}),t._v("Call Us: 123-456-7898\n                  ")]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-envelope-o"}),t._v("Email Us:\n                    "),r("a",{attrs:{href:"#"}},[t._v("Support@Fiot.com")])]),t._v(" "),r("li",[r("i",{staticClass:"fa fa-fax"}),t._v("Fax: 123456\n                  ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[r("div",{staticClass:"footer-end"},[r("p",[r("i",{staticClass:"fa fa-copyright",attrs:{"aria-hidden":"true"}}),t._v(" 2017-18 themeforest powered by pixelstrap\n              ")])])])}],!1,null,null,null);e.a=component.exports},434:function(t,e,r){"use strict";var l=r(443),o=r(445),c=r(442),n=r(444),m={data:function(){return{leftSidebarVal:!1}},components:{TopBar:l.a,LeftSidebar:o.a,Nav:c.a,HeaderWidgets:n.a},methods:{left_sidebar:function(){this.leftSidebarVal=!0},closeBarValFromChild:function(t){this.leftSidebarVal=t}}},v=r(60),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",[l("div",{staticClass:"mobile-fix-option"}),t._v(" "),l("TopBar"),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-12"},[l("div",{staticClass:"main-menu"},[l("div",{staticClass:"menu-left"},[l("div",{staticClass:"navbar"},[l("a",{on:{click:t.left_sidebar}},[t._m(0)]),t._v(" "),l("LeftSidebar",{attrs:{leftSidebarVal:t.leftSidebarVal},on:{closeVal:t.closeBarValFromChild}})],1),t._v(" "),l("div",{staticClass:"brand-logo"},[l("nuxt-link",{attrs:{to:{path:"/shop/fashion"}}},[l("img",{staticClass:"img-fluid",attrs:{src:r(435),alt:""}})])],1)]),t._v(" "),l("div",{staticClass:"menu-right pull-right"},[l("Nav"),t._v(" "),l("HeaderWidgets")],1)])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar-style"},[e("i",{staticClass:"fa fa-bars sidebar-bar",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},436:function(t,e,r){"use strict";var l={props:["title"]},o=r(60),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports}}]);