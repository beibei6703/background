webpackJsonp([12],{"5skY":function(t,a){},hJ6p:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("mw3O"),n=e.n(s),i=e("S49b"),l={name:"shoplist",data:function(){return{tableData:[],money:"",options:[],name:"",mobile:"",cate_id:"",page:1}},created:function(){var t=this;this.information(),Object(i.a)().then(function(a){1==a.data.status?t.options=a.data.info:t.mistake(a)})},methods:{task:function(t){this.$router.push({path:"/tasklist",query:{id:t}})},order:function(t){this.$router.push({path:"/orderlist",query:{id:t}})},seek:function(){var t=this;if(""==!this.name||""==!this.mobile||""==!this.cate_id){var a=n.a.stringify({name:this.name,mobile:this.mobile,cate_id:this.cate_id});Object(i.d)(a).then(function(a){if(1==a.data.status){t.tableData=a.data.info.data;for(var e=0;e<t.tableData.length;e++)1==t.tableData[e].status?t.tableData[e].status=!0:t.tableData[e].status=!1;t.page_fun(a),t.succeed(a)}else t.mistake(a)})}else this.$message({showClose:!0,message:"请输入查找内容",type:"error"})},typeIndex:function(t){return t+(this.page-1)*this.pageSize+1},information:function(){var t=this;Object(i.d)().then(function(a){if(1==a.data.status){t.tableData=a.data.info.data;for(var e=0;e<t.tableData.length;e++)1==t.tableData[e].status?t.tableData[e].status=!0:t.tableData[e].status=!1;t.page_fun(a)}else t.mistake(a)})},handleCurrentChange:function(t){var a=this;this.page=t;var e=n.a.stringify({name:this.name,mobile:this.mobile,cate_id:this.cate_id,page:t});Object(i.d)(e).then(function(t){var e=t.data;if(1==e.status&&e.info){a.tableData=e.info.data;for(var s=0;s<a.tableData.length;s++)1==a.tableData[s].status?a.tableData[s].status=!0:a.tableData[s].status=!1;a.page_fun(t)}})},status:function(t){var a=this,e=n.a.stringify({id:t.id,status:1==t.status?1:3});Object(i.c)(e).then(function(t){1==t.data.status?(a.succeed(t),a.information()):a.mistake(t)})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wraper"},[t._m(0),t._v(" "),e("div",{staticClass:"drawMoney "},[e("div",{staticClass:"shopmsg f"},[e("div",{staticClass:"infos"},[e("span",[t._v("手机号：")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}})],1),t._v(" "),e("div",{staticClass:"infos"},[e("span",[t._v("店铺名称：")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),t._v(" "),e("div",{staticClass:"infos"},[e("span",[t._v("类型：")]),t._v(" "),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.cate_id,callback:function(a){t.cate_id=a},expression:"cate_id"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),e("div",{staticClass:"infos"},[e("el-button",{attrs:{plain:""},on:{click:t.seek}},[t._v("查找")])],1)])]),t._v(" "),e("div",{staticClass:"table_tabs"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{type:"index",index:t.typeIndex,label:"序号",width:"50",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"店铺名称",width:"150",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"130",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"cate_id",label:"类型",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"task_count",label:"任务数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"},on:{click:function(e){t.task(a.row.id)}}},[t._v(t._s(a.row.task_count))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"order_count",label:"订单数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"},on:{click:function(e){t.order(a.row.id)}}},[t._v(t._s(a.row.order_count))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"realname",label:"审核者",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"audit_time",label:"审核时间",width:"100",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{on:{change:function(e){t.status(a.row)}},model:{value:a.row.status,callback:function(e){t.$set(a.row,"status",e)},expression:"scope.row.status"}})]}}])})],1),t._v(" "),e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:" total, prev, pager, next, jumper",background:"",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"publish-task-top"},[a("span",[this._v("商家列表")])])}]};var r=e("VU/8")(l,o,!1,function(t){e("t7a7"),e("5skY")},"data-v-9f440c4a",null);a.default=r.exports},t7a7:function(t,a){}});
//# sourceMappingURL=12.ff6aa4e5864d8fa21822.js.map