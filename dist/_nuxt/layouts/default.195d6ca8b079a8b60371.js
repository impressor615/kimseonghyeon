webpackJsonp([3],{"56Rg":function(t,e,a){"use strict";var n=a("YXP+");e.a={components:{"my-header":n.a}}},"5mi6":function(t,e,a){var n=a("vHps");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("acdb2596",n,!1,{sourceMap:!1})},"9J1C":function(t,e,a){"use strict";var n=a("Dd8w"),i=a.n(n),s=a("NYxO");e.a={data:function(){var t=this.$route.path;return{open:!1,isBackShowing:/projects\/.+/.test(t),isActive:["/"===t,/projects/.test(t)]}},mounted:function(){var t=this;this.$router.beforeEach(function(e,a,n){var i=/projects\/.+/.test(e.path);i&&(t.isBackShowing=!0),!i&&t.isBackShowing&&(t.isBackShowing=!1),n()})},methods:{onHomeClick:function(){this.isActive=[!0,!1]},onBackClick:function(){this.$router.push("/projects")},onToggleHeader:function(){this.open=!this.open},onLangClick:function(t){this.$store.commit("SET_LANG",t),this.onToggleHeader()},onNavItemClick:function(t){var e=[!1,!1];e[t]=!0,this.isActive=e,this.onToggleHeader()}},computed:i()({},Object(s.mapGetters)(["language"]))}},AhXS:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"header"},[a("header",[t.isBackShowing?a("button",{staticClass:"gray back-btn",on:{click:t.onBackClick}},[t._v("\n      < BACK\n    ")]):a("nuxt-link",{staticClass:"gray",attrs:{to:"/"},nativeOn:{click:function(e){return t.onHomeClick(e)}}},[t._v("\n      SEONGHYEON KIM\n    ")]),a("button",{staticClass:"menu gray",class:{open:t.open},on:{click:t.onToggleHeader}},[t._v("\n      "+t._s(t.open?"CLOSE":"MENU")+"\n      "),t._m(0)]),a("nav",{staticClass:"font-bold",class:{open:t.open}},[a("nuxt-link",{class:{open:t.isActive[0]},attrs:{to:"/"},nativeOn:{click:function(e){t.onNavItemClick(0)}}},[t._v("\n        Home\n      ")]),a("nuxt-link",{class:{open:t.isActive[1]},attrs:{to:"/projects"},nativeOn:{click:function(e){t.onNavItemClick(1)}}},[t._v("\n        Projects\n      ")]),a("div",{staticClass:"lang"},[a("button",{class:{active:"ko"===t.language},on:{click:function(e){t.onLangClick("ko")}}},[t._v("\n          KO.\n        ")]),a("button",{class:{active:"en"===t.language},on:{click:function(e){t.onLangClick("en")}}},[t._v("\n          EN.\n        ")])])],1)],1)])};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"line-wrapper"},[e("span",{staticClass:"line"}),e("span",{staticClass:"line"}),e("span",{staticClass:"line"})])}]};e.a=i},DLCH:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"root"}},[e("my-header"),e("section",{staticClass:"layout"},[e("div",{staticClass:"sns d-md-none"},[e("a",{attrs:{href:"https://github.com/impressor615",target:"_blank"}},[e("svg",{staticClass:"icon",attrs:{"enable-background":"new 0 0 32 32",id:"Layer_1",version:"1.0",viewBox:"0 0 32 32","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{"clip-rule":"evenodd",d:"M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z",fill:"white","fill-rule":"evenodd"}}),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")])]),e("a",{attrs:{href:"https://www.linkedin.com/in/seonghyeon-kim-328757b7/",target:"_blank"}},[e("svg",{staticClass:"icon",attrs:{"enable-background":"new 0 0 56.693 56.693",id:"Layer_1",version:"1.1",viewBox:"0 0 56.693 56.693","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",[e("path",{attrs:{d:"M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"}}),e("path",{attrs:{d:"M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z",fill:"white"}})])])])]),e("nuxt",{staticClass:"page"}),e("div",{staticClass:"vision font-light d-md-none"},[this._v("CREATIVE DEVELOPER")])],1)],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},Ma2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("56Rg"),i=a("DLCH"),s=a("VU/8")(n.a,i.a,!1,null,null,null);s.options.__file="layouts/default.vue",e.default=s.exports},"YXP+":function(t,e,a){"use strict";var n=a("9J1C"),i=a("AhXS"),s=!1;var o=function(t){s||a("5mi6")},r=a("VU/8")(n.a,i.a,!1,o,"data-v-1a9bb128",null);r.options.__file="components/Header.vue",e.a=r.exports},vHps:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.header[data-v-1a9bb128]{position:fixed;width:100%;z-index:10;background:#000}header[data-v-1a9bb128]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:81px;padding:0 24px;padding:0 1.5rem}header .back-btn[data-v-1a9bb128]{font-size:17.6px;font-size:1.1rem}.menu[data-v-1a9bb128]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.menu .line-wrapper[data-v-1a9bb128]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:9.6px;margin-left:.6rem}.menu .line-wrapper .line[data-v-1a9bb128]{display:inline-block;height:2px;width:20px;background-color:dimgray}.menu .line-wrapper .line[data-v-1a9bb128]:not(:first-child){margin-top:5px}.menu.open .line-wrapper .line[data-v-1a9bb128]:not(:first-child){margin-top:0}.menu.open .line-wrapper .line[data-v-1a9bb128]{-webkit-transition:-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1),-webkit-transform .6s cubic-bezier(.165,.84,.44,1)}.menu.open .line-wrapper .line[data-v-1a9bb128]:first-child{-webkit-transform:translateY(3px) rotate(45deg);transform:translateY(3px) rotate(45deg)}.menu.open .line-wrapper .line[data-v-1a9bb128]:nth-child(3){-webkit-transform:translateY(1px) rotate(-45deg);transform:translateY(1px) rotate(-45deg)}.menu.open .line-wrapper .line[data-v-1a9bb128]:nth-child(2){display:none}nav[data-v-1a9bb128]{position:fixed;top:81px;right:-35%;-webkit-transition:right .6s cubic-bezier(.165,.84,.44,1);transition:right .6s cubic-bezier(.165,.84,.44,1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:35%;height:calc(100vh - 81px);background:#000;font-size:32px;font-size:2rem}nav.open[data-v-1a9bb128]{right:0}nav a[data-v-1a9bb128]{position:relative}nav a[data-v-1a9bb128]:hover:after{-webkit-animation-name:slidein-data-v-1a9bb128;animation-name:slidein-data-v-1a9bb128;-webkit-animation-duration:.4s;animation-duration:.4s}nav a.open[data-v-1a9bb128]:hover:after{-webkit-animation:none;animation:none}nav a.open[data-v-1a9bb128]:after,nav a[data-v-1a9bb128]:hover:after{content:" ";left:-10%;width:120%;height:20px;background:rgba(45,45,45,.9);display:block;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}nav a[data-v-1a9bb128]:not(:first-child){margin-top:24px;margin-top:1.5rem}.lang[data-v-1a9bb128]{position:absolute;top:5%;right:5%;font-size:16px;font-size:1rem}.lang button[data-v-1a9bb128]{color:dimgray}.lang button.active[data-v-1a9bb128]{color:#fff;font-weight:700}@-webkit-keyframes slidein-data-v-1a9bb128{0%{width:0}to{width:100%}}@keyframes slidein-data-v-1a9bb128{0%{width:0}to{width:100%}}@media only screen and (max-width:768px){nav[data-v-1a9bb128]{right:-100%;width:100%}}',""])}});