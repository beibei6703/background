webpackJsonp([34],{bo6F:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("mtWM"),r("mw3O");var l=r("vUNl"),s={name:"addetail",data:function(){return{delivery:!0,type1:"",status:"",ruleForm:{name:"",title:"",type:"",limit:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],title:[{required:!0,message:"请输入广告位置",trigger:"blur"}],limit:[{required:!0,message:"请输入限制数量",trigger:"blur"}],type:[{required:!0,message:"请选择活动区域",trigger:"change"}]}}},methods:{handleChange:function(e){console.log(e)},getdata:function(){Object(l.j)(this.id).then(this.getSucc.bind(this))},getSucc:function(e){console.log(e);var t=e.data;if(1==t.status&&t.info)switch(this.ruleForm=t.info,t.info.type=this.ruleForm.type="轮播",this.ruleForm.status){case 1:this.delivery=!0;break;case 0:this.delivery=!1}},submitForm:function(e){var t=this;console.log(this.id),this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;switch(t.delivery){case!0:t.status=1;break;case!1:t.status=0}switch(t.ruleForm.type){case"轮播":t.ruleForm.type=1;break;case"图片":t.ruleForm.type=2}var r={id:t.id,type:t.ruleForm.type,name:t.ruleForm.name,title:t.ruleForm.title,limit:t.ruleForm.limit,status:t.status};Object(l.n)(r).then(t.handleSucc.bind(t))})},handleSucc:function(e){console.log(e);var t=e.data;1==t.status?(this.$message({showClose:!0,message:t.msg,type:"success"}),this.$router.go(-1)):this.$message({showClose:!0,message:t.msg,type:"error"})},resetForm:function(e){this.$router.go(-1)}},created:function(){this.id=this.$route.query.id,this.getdata()}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wraper"},[r("div",{staticClass:"header_shop"},[r("span",[r("router-link",{attrs:{to:"/sales"}},[e._v("广告分类 >")])],1),e._v(" "),r("span",[e._v("广告详情")])]),e._v(" "),r("div",{staticClass:"forms_box"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标识",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"位置",prop:"title"}},[r("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"限制数量",prop:"limit"}},[r("el-input",{model:{value:e.ruleForm.limit,callback:function(t){e.$set(e.ruleForm,"limit",t)},expression:"ruleForm.limit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.handleChange},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("el-option",{attrs:{label:"轮播",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"图片",value:"2"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"状态"}},[r("el-switch",{model:{value:e.delivery,callback:function(t){e.delivery=t},expression:"delivery"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确定")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")])],1)],1)],1)])},staticRenderFns:[]};var o=r("VU/8")(s,i,!1,function(e){r("x+Qn")},"data-v-3b1267f3",null);t.default=o.exports},"x+Qn":function(e,t){}});
//# sourceMappingURL=34.e7fd7418398a8b570032.js.map