(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2138ec"],{acd8:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[r("app-i18n",{attrs:{code:"home.menu"}})],1),r("el-breadcrumb-item",{attrs:{to:{path:"/overhead"}}},[r("app-i18n",{attrs:{code:"entities.overhead.menu"}})],1),r("el-breadcrumb-item",[r("app-i18n",{attrs:{code:"entities.overhead.view.title"}})],1)],1),r("div",{staticClass:"app-content-page"},[r("h1",{staticClass:"app-content-title"},[r("app-i18n",{attrs:{code:"entities.overhead.view.title"}})],1),e.loading?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-page-spinner"}):e._e(),e.record?r("app-overhead-view-toolbar"):e._e(),e.record?r("el-form",{staticClass:"form",attrs:{"label-position":e.labelPosition,"label-width":e.labelWidthForm},nativeOn:{submit:function(e){e.preventDefault()}}},[r("app-view-item-text",{attrs:{label:e.fields.id.label,value:e.presenter(e.record,"id")}}),r("app-view-item-relation-to-one",{attrs:{label:e.fields.parts.label,permission:e.fields.parts.readPermission,url:e.fields.parts.viewUrl,value:e.presenter(e.record,"parts")}}),r("app-view-item-relation-to-one",{attrs:{label:e.fields.vehicle.label,permission:e.fields.vehicle.readPermission,url:e.fields.vehicle.viewUrl,value:e.presenter(e.record,"vehicle")}}),r("app-view-item-text",{attrs:{label:e.fields.issueDate.label,value:e.presenter(e.record,"issueDate")}}),r("app-view-item-text",{attrs:{label:e.fields.quantity.label,value:e.presenter(e.record,"quantity")}}),r("app-view-item-text",{attrs:{label:e.fields.otherExpenses.label,value:e.presenter(e.record,"otherExpenses")}}),r("app-view-item-text",{attrs:{label:e.fields.createdAt.label,value:e.presenter(e.record,"createdAt")}}),r("app-view-item-text",{attrs:{label:e.fields.updatedAt.label,value:e.presenter(e.record,"updatedAt")}})],1):e._e()],1)],1)},i=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),a=r("bd86"),s=(r("7f7f"),r("2f62")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-page-toolbar"},[e.record&&e.hasPermissionToEdit?r("router-link",{attrs:{to:{path:"/overhead/"+e.record.id+"/edit"}}},[r("el-button",{attrs:{icon:"el-icon-fa-edit",type:"primary"}},[r("app-i18n",{attrs:{code:"common.edit"}})],1)],1):e._e(),e.record&&e.hasPermissionToDestroy?r("el-button",{attrs:{disabled:e.destroyLoading,icon:"el-icon-fa-trash",type:"primary"},on:{click:e.doDestroyWithConfirm}},[r("app-i18n",{attrs:{code:"common.destroy"}})],1):e._e(),e.record&&e.hasPermissionToAuditLogs?r("router-link",{attrs:{to:{path:"/audit-logs",query:{entityId:e.record.id}}}},[r("el-button",{attrs:{icon:"el-icon-fa-history"}},[r("app-i18n",{attrs:{code:"auditLog.menu"}})],1)],1):e._e()],1)},l=[],d=r("8d24"),p=r("5d6e"),u=r("12cb");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"app-overhead-view-toolbar",computed:m(m({},Object(s["c"])({currentUser:"auth/currentUser",record:"overhead/view/record",loading:"overhead/view/loading",destroyLoading:"overhead/destroy/loading"})),{},{hasPermissionToEdit:function(){return new d["a"](this.currentUser).edit},hasPermissionToImport:function(){return new d["a"](this.currentUser).import},hasPermissionToDestroy:function(){return new d["a"](this.currentUser).destroy},hasPermissionToAuditLogs:function(){return new p["a"](this.currentUser).read}}),methods:m(m({},Object(s["b"])({doDestroy:"overhead/destroy/doDestroy"})),{},{doDestroyWithConfirm:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm(Object(u["d"])("common.areYouSure"),Object(u["d"])("common.confirm"),{confirmButtonText:Object(u["d"])("common.yes"),cancelButtonText:Object(u["d"])("common.no"),type:"warning"});case 3:return e.abrupt("return",this.doDestroy(this.record.id));case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()})},v=h,f=r("2877"),w=Object(f["a"])(v,c,l,!1,null,null,null),y=w.exports,O=r("86ce");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=O["a"].fields,D={name:"app-overhead-view-page",props:["id"],components:Object(a["a"])({},y.name,y),computed:j(j({},Object(s["c"])({labelPosition:"layout/labelPosition",labelWidthForm:"layout/labelWidthForm",record:"overhead/view/record",loading:"overhead/view/loading"})),{},{fields:function(){return P}}),created:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.doFind(this.id);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:j(j({},Object(s["b"])({doFind:"overhead/view/doFind"})),{},{presenter:function(e,t){return O["a"].presenter(e,t)}})},x=D,k=Object(f["a"])(x,o,i,!1,null,null,null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d2138ec.2d02ccf2.js.map