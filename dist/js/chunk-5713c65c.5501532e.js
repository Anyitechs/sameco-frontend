(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5713c65c"],{"6fd8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[r("app-i18n",{attrs:{code:"home.menu"}})],1),r("el-breadcrumb-item",[r("app-i18n",{attrs:{code:"entities.parts.menu"}})],1)],1),r("div",{staticClass:"app-content-page"},[r("h1",{staticClass:"app-content-title"},[r("app-i18n",{attrs:{code:"entities.parts.list.title"}})],1),r("app-parts-list-toolbar"),r("app-parts-list-filter"),r("app-parts-list-table")],1)],1)},o=[],a=r("bd86"),i=(r("7f7f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",staticClass:"filter",attrs:{"label-position":t.labelPosition,"label-width":t.labelWidthFilter,model:t.model,rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.doFilter(e)}}},[r("el-row",[r("el-col",{attrs:{lg:12,md:16,sm:24}},[r("el-form-item",{attrs:{label:t.fields.name.label,prop:t.fields.name.name}},[r("el-input",{model:{value:t.model[t.fields.name.name],callback:function(e){t.$set(t.model,t.fields.name.name,e)},expression:"model[fields.name.name]"}})],1)],1),r("el-col",{attrs:{lg:12,md:16,sm:24}},[r("el-form-item",{attrs:{label:t.fields.quantityRange.label,prop:t.fields.quantityRange.name}},[r("app-number-range-input",{model:{value:t.model[t.fields.quantityRange.name],callback:function(e){t.$set(t.model,t.fields.quantityRange.name,e)},expression:"model[fields.quantityRange.name]"}})],1)],1),r("el-col",{attrs:{lg:12,md:16,sm:24}},[r("el-form-item",{attrs:{label:t.fields.status.label,prop:t.fields.status.name}},[r("el-select",{attrs:{placeholder:""},model:{value:t.model[t.fields.status.name],callback:function(e){t.$set(t.model,t.fields.status.name,e)},expression:"model[fields.status.name]"}},[r("el-option",{attrs:{value:void 0}},[t._v("--")]),t._l(t.fields.status.options,(function(t){return r("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})}))],2)],1)],1)],1),r("div",{staticClass:"filter-buttons"},[r("el-button",{attrs:{disabled:t.loading,icon:"el-icon-fa-search",type:"primary"},on:{click:t.doFilter}},[r("app-i18n",{attrs:{code:"common.search"}})],1),r("el-button",{attrs:{disabled:t.loading,icon:"el-icon-fa-undo"},on:{click:t.doResetFilter}},[r("app-i18n",{attrs:{code:"common.reset"}})],1)],1)],1)}),s=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),c=r("2f62"),u=r("92ec"),d=r("0ed5");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m=d["a"].fields,b=new u["a"]([m.name,m.quantityRange,m.status,m.stockRange]),h={name:"app-parts-list-filter",data:function(){return{rules:b.rules(),model:{}}},computed:f(f({},Object(c["c"])({labelPosition:"layout/labelPosition",labelWidthFilter:"layout/labelWidthFilter",loading:"parts/list/loading",filter:"parts/list/filter"})),{},{fields:function(){return m}}),mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.model=b.initialValues(this.filter,this.$route.query),t.abrupt("return",this.doFilter());case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:f(f({},Object(c["b"])({doReset:"parts/list/doReset",doFetch:"parts/list/doFetch"})),{},{doResetFilter:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.model=b.initialValues(),this.$refs.form.clearValidate(),t.abrupt("return",this.doReset());case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),doFilter:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$refs.form.validate();case 3:this.$refs.form.clearValidate(),t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](0),t.abrupt("return");case 9:return e=b.cast(this.model),t.abrupt("return",this.doFetch({filter:e}));case 11:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()})},g=h,y=r("2877"),v=Object(y["a"])(g,i,s,!1,null,null,null),w=v.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{border:!0,data:t.rows,"row-key":"id"},on:{"sort-change":t.doChangeSort}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:t.fields.images.label,prop:t.fields.images.name,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("app-list-item-image",{attrs:{value:t.presenter(e.row,"images")}})]}}])}),r("el-table-column",{attrs:{label:t.fields.name.label,prop:t.fields.name.name,sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.presenter(e.row,"name")))]}}])}),r("el-table-column",{attrs:{label:t.fields.quantity.label,prop:t.fields.quantity.name,sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.presenter(e.row,"quantity")))]}}])}),r("el-table-column",{attrs:{label:t.fields.status.label,prop:t.fields.status.name,sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.presenter(e.row,"status")))]}}])}),r("el-table-column",{attrs:{label:t.fields.stock.label,prop:t.fields.stock.name,sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.presenter(e.row,"stock")))]}}])}),r("el-table-column",{attrs:{fixed:t.isMobile?void 0:"right",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"table-actions"},[r("router-link",{attrs:{to:"/parts/"+e.row.id}},[r("el-button",{attrs:{type:"text"}},[r("app-i18n",{attrs:{code:"common.view"}})],1)],1),t.hasPermissionToEdit?r("router-link",{attrs:{to:"/parts/"+e.row.id+"/edit"}},[r("el-button",{attrs:{type:"text"}},[r("app-i18n",{attrs:{code:"common.edit"}})],1)],1):t._e(),t.hasPermissionToDestroy?r("el-button",{attrs:{disabled:t.destroyLoading,type:"text"},on:{click:function(r){return t.doDestroyWithConfirm(e.row.id)}}},[r("app-i18n",{attrs:{code:"common.destroy"}})],1):t._e()],1)]}}])})],1),r("div",{staticClass:"el-pagination-wrapper"},[r("el-pagination",{attrs:{"current-page":t.pagination.currentPage||1,disabled:t.loading,layout:t.paginationLayout,total:t.count},on:{"current-change":t.doChangePaginationCurrentPage,"size-change":t.doChangePaginationPageSize}})],1)],1)},j=[],P=r("99ce"),R=r("12cb");function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S=d["a"].fields,D={name:"app-parts-list-table",mounted:function(){this.doMountTable(this.$refs.table)},computed:x(x({},Object(c["c"])({rows:"parts/list/rows",count:"parts/list/count",loading:"parts/list/loading",pagination:"parts/list/pagination",isMobile:"layout/isMobile",currentUser:"auth/currentUser",destroyLoading:"parts/destroy/loading",paginationLayout:"layout/paginationLayout"})),{},{hasPermissionToEdit:function(){return new P["a"](this.currentUser).edit},hasPermissionToDestroy:function(){return new P["a"](this.currentUser).destroy},fields:function(){return S}}),methods:x(x({},Object(c["b"])({doChangeSort:"parts/list/doChangeSort",doChangePaginationCurrentPage:"parts/list/doChangePaginationCurrentPage",doChangePaginationPageSize:"parts/list/doChangePaginationPageSize",doMountTable:"parts/list/doMountTable",doDestroy:"parts/destroy/doDestroy"})),{},{presenter:function(t,e){return d["a"].presenter(t,e)},doDestroyWithConfirm:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm(Object(R["d"])("common.areYouSure"),Object(R["d"])("common.confirm"),{confirmButtonText:Object(R["d"])("common.yes"),cancelButtonText:Object(R["d"])("common.no"),type:"warning"});case 3:return t.abrupt("return",this.doDestroy(e));case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()})},T=D,_=Object(y["a"])(T,O,j,!1,null,null,null),C=_.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-page-toolbar"},[t.hasPermissionToCreate?r("router-link",{attrs:{to:{path:"/parts/new"}}},[r("el-button",{attrs:{icon:"el-icon-fa-plus",type:"primary"}},[r("app-i18n",{attrs:{code:"common.new"}})],1)],1):t._e(),t.hasPermissionToImport?r("router-link",{attrs:{to:{path:"/parts/import"}}},[r("el-button",{attrs:{icon:"el-icon-fa-upload",type:"primary"}},[r("app-i18n",{attrs:{code:"common.import"}})],1)],1):t._e(),t.hasPermissionToDestroy?r("el-tooltip",{attrs:{content:t.destroyButtonTooltip,disabled:!t.destroyButtonTooltip}},[r("span",[r("el-button",{attrs:{disabled:t.destroyButtonDisabled,icon:"el-icon-fa-trash",type:"primary"},on:{click:t.doDestroyAllSelected}},[r("app-i18n",{attrs:{code:"common.destroy"}})],1)],1)]):t._e(),t.hasPermissionToAuditLogs?r("router-link",{attrs:{to:{path:"/audit-logs",query:{entityNames:"parts"}}}},[r("el-button",{attrs:{icon:"el-icon-fa-history"}},[r("app-i18n",{attrs:{code:"auditLog.menu"}})],1)],1):t._e(),r("el-tooltip",{attrs:{content:t.exportButtonTooltip,disabled:!t.exportButtonTooltip}},[r("span",[r("el-button",{attrs:{disabled:t.exportButtonDisabled,icon:"el-icon-fa-file-excel-o"},on:{click:function(e){return t.doExport()}}},[r("app-i18n",{attrs:{code:"common.export"}})],1)],1)])],1)},E=[],B=r("5d6e");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L,U={name:"app-parts-list-toolbar",computed:$($({},Object(c["c"])({currentUser:"auth/currentUser",hasRows:"parts/list/hasRows",loading:"parts/list/loading",exportLoading:"parts/list/exportLoading",selectedRows:"parts/list/selectedRows",destroyLoading:"parts/destroy/loading"})),{},{hasPermissionToAuditLogs:function(){return new B["a"](this.currentUser).read},hasPermissionToCreate:function(){return new P["a"](this.currentUser).create},hasPermissionToEdit:function(){return new P["a"](this.currentUser).edit},hasPermissionToImport:function(){return new P["a"](this.currentUser).import},hasPermissionToDestroy:function(){return new P["a"](this.currentUser).destroy},exportButtonDisabled:function(){return!this.hasRows||this.loading||this.exportLoading},exportButtonTooltip:function(){return this.hasRows?null:Object(R["d"])("common.noDataToExport")},removeButtonDisabled:function(){return!this.selectedRows.length||this.loading},removeButtonTooltip:function(){return this.selectedRows.length?null:Object(R["d"])("common.mustSelectARow")},enableButtonDisabled:function(){return!this.selectedRows.length||this.loading},enableButtonTooltip:function(){return this.selectedRows.length?null:Object(R["d"])("common.mustSelectARow")},disableButtonDisabled:function(){return!this.selectedRows.length||this.loading},disableButtonTooltip:function(){return this.selectedRows.length?null:Object(R["d"])("common.mustSelectARow")},destroyButtonDisabled:function(){return!this.selectedRows.length||this.loading||this.destroyLoading},destroyButtonTooltip:function(){return!this.selectedRows.length||this.loading?Object(R["d"])("common.mustSelectARow"):null}}),methods:$($({},Object(c["b"])({doExport:"parts/list/doExport",doRemoveAllSelected:"parts/list/doRemoveAllSelected",doDisableAllSelected:"parts/list/doDisableAllSelected",doEnableAllSelected:"parts/list/doEnableAllSelected",doDestroyAll:"parts/destroy/doDestroyAll"})),{},{doDestroyAllSelected:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm(Object(R["d"])("common.areYouSure"),Object(R["d"])("common.confirm"),{confirmButtonText:Object(R["d"])("common.yes"),cancelButtonText:Object(R["d"])("common.no"),type:"warning"});case 3:return t.abrupt("return",this.doDestroyAll(this.selectedRows.map((function(t){return t.id}))));case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()})},q=U,M=Object(y["a"])(q,A,E,!1,null,null,null),I=M.exports,V={name:"app-parts-list-page",components:(L={},Object(a["a"])(L,w.name,w),Object(a["a"])(L,C.name,C),Object(a["a"])(L,I.name,I),L)},W=V,z=Object(y["a"])(W,n,o,!1,null,null,null);e["default"]=z.exports},"92ec":function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("ac6a"),r("7f7f");var n=r("d225"),o=r("b0b4"),a=r("bd86"),i=r("9426"),s=r("2ef0");function l(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(){function t(e){Object(n["a"])(this,t),Object(a["a"])(this,"fields",void 0),this.fields=e}return Object(o["a"])(t,[{key:"initialValues",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=e||{},t=t||{};var r=Object(s["values"])(e).some((function(t){return!!t}));r&&(t=e);var n,o={},a=l(this.fields);try{for(a.s();!(n=a.n()).done;){var i=n.value;o[i.name]=i.forFilterInitialValue(t[i.name])}}catch(c){a.e(c)}finally{a.f()}return o}},{key:"rules",value:function(){var t={};return this.fields.forEach((function(e){t[e.name]=e.forFilterRules()})),t}},{key:"castSchema",value:function(){var t={};return this.fields.forEach((function(e){t[e.name]=e.forFilterCast()})),i["object"]().shape(t)}},{key:"cast",value:function(t){return this.castSchema().cast(t)}}]),t}()}}]);
//# sourceMappingURL=chunk-5713c65c.5501532e.js.map