(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bf12"],{f0b4:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[r("app-i18n",{attrs:{code:"home.menu"}})],1),r("el-breadcrumb-item",{attrs:{to:{path:"/parts"}}},[r("app-i18n",{attrs:{code:"entities.parts.menu"}})],1),r("el-breadcrumb-item",[t.isEditing?r("app-i18n",{attrs:{code:"entities.parts.edit.title"}}):t._e(),t.isEditing?t._e():r("app-i18n",{attrs:{code:"entities.parts.new.title"}})],1)],1),r("div",{staticClass:"app-content-page"},[r("h1",{staticClass:"app-content-title"},[t.isEditing?r("app-i18n",{attrs:{code:"entities.parts.edit.title"}}):t._e(),t.isEditing?t._e():r("app-i18n",{attrs:{code:"entities.parts.new.title"}})],1),t.findLoading?r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.findLoading,expression:"findLoading"}],staticClass:"app-page-spinner"}):t._e(),t.findLoading?t._e():r("app-parts-form",{attrs:{isEditing:t.isEditing,record:t.record,saveLoading:t.saveLoading},on:{cancel:t.doCancel,submit:t.doSubmit}})],1)],1)},i=[],a=(r("8e6e"),r("456d"),r("ac6a"),r("96cf"),r("3b8d")),s=r("bd86"),o=(r("7f7f"),r("2f62")),c=r("6d78"),d=r("c89f");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"app-parts-form-page",props:["id"],components:Object(s["a"])({},c["a"].name,c["a"]),computed:u(u({},Object(o["c"])({record:"parts/form/record",findLoading:"parts/form/findLoading",saveLoading:"parts/form/saveLoading"})),{},{isEditing:function(){return!!this.id}}),created:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isEditing){t.next=5;break}return t.next=3,this.doFind(this.id);case 3:t.next=7;break;case 5:return t.next=7,this.doNew();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:u(u({},Object(o["b"])({doFind:"parts/form/doFind",doNew:"parts/form/doNew",doUpdate:"parts/form/doUpdate",doCreate:"parts/form/doCreate"})),{},{doCancel:function(){Object(d["a"])().push("/parts")},doSubmit:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isEditing){t.next=4;break}return t.abrupt("return",this.doUpdate(e));case 4:return t.abrupt("return",this.doCreate(e.values));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()})},b=f,l=r("2877"),m=Object(l["a"])(b,n,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22bf12.60041661.js.map