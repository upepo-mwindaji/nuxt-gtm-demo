webpackJsonp([4],{"+ptz":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("div",{staticClass:"links"},[n("nuxt-link",{staticClass:"button--green",attrs:{to:"click"}},[t._v("Click Event")]),n("nuxt-link",{staticClass:"button--grey",attrs:{to:"mount"}},[t._v("Mount Event")]),n("nuxt-link",{staticClass:"button--purple",attrs:{to:"hover"}},[t._v("Hover Event")])],1),n("div",{staticClass:"links"},[n("h1",{staticClass:"title"},[t._v("\n        nuxt-gtm-demo\n      ")]),n("h2",{staticClass:"subtitle"},[t._v("\n        Demo using GTM module with Nuxt\n      ")]),n("a",{staticClass:"button--blue",attrs:{href:t.previewUrl,target:"_blank"}},[t._v("Activate Debug")]),n("nuxt-link",{staticClass:"button--blue",attrs:{to:"charts"}},[t._v("Real Time Charts")])],1)])])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"/TYz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("QK7H"),s=n("+ptz"),a=n("VU/8")(i.a,s.a,!1,null,null,null);a.options.__file="pages/index.vue",e.default=a.exports},QK7H:function(t,e,n){"use strict";e.a={data:function(){return{title:"Homepage",previewUrl:""}},head:function(){return{title:"Nuxt GTM Demo | "+this.title}},mounted:function(){this.previewUrl="https://www.googletagmanager.com/start_preview/gtm?uiv2&id=GTM-TWMCBFD&gtm_auth=a-0uanYFkML7e3v7Vmxpwg&gtm_preview=env-8&gtm_debug=x&url="+window.location.href}}}});