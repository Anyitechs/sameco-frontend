(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5149"],{"3e23":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth"},[r("div",{staticClass:"wrapper forgot-password"},[r("div",{staticClass:"content"},[r("div",{staticClass:"logo"},[r("h1",[r("app-i18n",{attrs:{code:"app.title"}})],1)]),r("el-form",{ref:"form",staticClass:"form",attrs:{model:e.model,rules:e.rules,"label-position":"left","label-width":"0px"},nativeOn:{submit:function(t){return t.preventDefault(),e.doSubmit(t)}}},[r("el-form-item",{attrs:{prop:e.fields.password.name}},[r("el-input",{attrs:{placeholder:e.fields.password.label,"auto-complete":"off",type:"password"},model:{value:e.model[e.fields.password.name],callback:function(t){e.$set(e.model,e.fields.password.name,t)},expression:"model[fields.password.name]"}})],1),r("el-form-item",{staticClass:"form-buttons"},[r("el-button",{staticClass:"w-100",attrs:{loading:e.loading,"native-type":"submit",type:"primary"}},[r("app-i18n",{attrs:{code:"auth.passwordReset.message"}})],1)],1),r("div",{staticClass:"other-actions"},[r("router-link",{attrs:{to:{path:"/auth/signin"}}},[r("el-button",{attrs:{type:"text"}},[r("app-i18n",{attrs:{code:"common.cancel"}})],1)],1)],1)],1)],1)])])},a=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),n=r("bd86"),i=r("2f62"),c=r("1a88");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=c["a"].fields,d={name:"app-password-reset-page",data:function(){return{rules:{password:u.password.forFormRules()},model:{}}},computed:p(p({},Object(i["c"])({loading:"auth/loadingPasswordReset"})),{},{fields:function(){return u}}),methods:p(p({},Object(i["b"])({doResetPassword:"auth/doResetPassword"})),{},{doSubmit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs.form.validate();case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return");case 8:return e.next=10,this.doResetPassword({token:this.$route.query.token,password:this.model.password});case 10:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}()})},f=d,m=r("2877"),b=Object(m["a"])(f,s,a,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0c5149.0ffd6ab7.js.map