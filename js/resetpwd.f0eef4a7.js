(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resetpwd"],{"41ea":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"fill-height",attrs:{"justify-center":"",fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[0===t.state?e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[e("v-toolbar-title",[t._v("Reset Password")])],1),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"New password",name:"password","prepend-icon":"mdi-lock",type:"password",readonly:t.loading,clearable:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-text-field",{attrs:{label:"Re-type new password",name:"cnfpassword","prepend-icon":"mdi-lock",type:"password",readonly:t.loading,clearable:""},model:{value:t.cnfpassword,callback:function(a){t.cnfpassword=a},expression:"cnfpassword"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.inputOK},on:{click:t.onResetClick}},[t._v("Send")])],1)],1):t._e(),1===t.state?e("v-card",{staticClass:"elevation-12"},[e("v-card-text",[t._v(" You've just reset your password. Now you can login using new password. ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary",to:"/login"}},[t._v("Go to login screen")])],1)],1):t._e(),2===t.state?e("v-card",{staticClass:"elevation-12"},[e("v-card-text",[e("strong",[t._v("Invalid token!!!")])])],1):t._e()],1)],1)],1)},n=[],s=(e("96cf"),e("1da1")),i=e("48c6"),o={name:"ResetPwd",data:function(){return{password:"",cnfpassword:"",loading:!1,state:0}},computed:{inputOK:function(){try{return 0!==this.password.length&&(0!==this.cnfpassword.length&&this.password===this.cnfpassword)}catch(t){return!1}}},methods:{onResetClick:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(i["g"])(this.$route.params.token,this.password);case 3:a=t.sent,this.loading=!1,200===a.code?this.state=1:(this.state=2,console.log(a));case 6:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}},c=o,d=e("2877"),u=e("6544"),l=e.n(u),f=e("8336"),h=e("b0af"),p=e("99d9"),v=e("62ad"),w=e("a523"),m=e("4bd4"),b=e("0fd9"),g=e("2fa4"),_=e("8654"),V=e("71d9"),y=e("2a7f"),x=Object(d["a"])(c,r,n,!1,null,"144fd284",null);a["default"]=x.exports;l()(x,{VBtn:f["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["b"],VCol:v["a"],VContainer:w["a"],VForm:m["a"],VRow:b["a"],VSpacer:g["a"],VTextField:_["a"],VToolbar:V["a"],VToolbarTitle:y["a"]})},"4bd4":function(t,a,e){"use strict";e("4de4"),e("7db0"),e("4160"),e("caad"),e("07ac"),e("2532"),e("159b");var r=e("5530"),n=e("58df"),s=e("7e2b"),i=e("3206");a["a"]=Object(n["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(a.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))})):r.valid=e(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})}}]);
//# sourceMappingURL=resetpwd.f0eef4a7.js.map