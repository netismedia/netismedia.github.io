(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forgot"],{"0fdf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{"justify-center":"",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[0===t.state?a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Forgot Password")])],1),a("v-card-text",[t._v(" Please enter your email address here, so we can send email with password reset link. "),a("v-form",[a("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-email",readonly:t.loading,type:"email",error:t.emailErr,clearable:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:t.loading},on:{click:t.cancelClick}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.inputOK},on:{click:t.sendClick}},[t._v("Send")])],1)],1):t._e(),1===t.state?a("v-card",{staticClass:"elevation-12"},[a("v-card-text",[t._v(" An email message with reset password link has been sent to "),a("strong",[t._v(t._s(t.email))]),t._v(". Please check the email and click the link to reset your password. ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"/login",text:""}},[t._v("Go to login screen")])],1)],1):t._e(),2===t.state?a("v-card",{staticClass:"elevation-12"},[a("v-card-text",[t._v(" Ups! Something went wrong!!! ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.state=0}}},[t._v("Try again")])],1)],1):t._e()],1)],1)],1)},i=[],n=(a("96cf"),a("1da1")),s=a("b279"),o=a("48c6"),c={name:"Forgot",data:function(){return{email:"",emailErr:!1,loading:!1,state:0}},computed:{inputOK:function(){try{return 0!==this.email.length}catch(t){return!1}}},created:function(){},methods:{cancelClick:function(){this.$router.go(-1)},sendClick:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.emailErr=!1,e=Object(s["h"])(this.email),e){t.next=5;break}return this.emailErr=!0,t.abrupt("return");case 5:return this.loading=!0,t.next=8,Object(o["f"])(this.email);case 8:a=t.sent,this.loading=!1,200===a.code?this.state=1:(this.state=2,console.log(a));case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},l=c,u=a("2877"),d=a("6544"),h=a.n(d),f=a("8336"),v=a("b0af"),m=a("99d9"),p=a("62ad"),b=a("a523"),g=a("4bd4"),w=a("0fd9"),_=a("2fa4"),V=a("8654"),k=a("71d9"),y=a("2a7f"),C=Object(u["a"])(l,r,i,!1,null,null,null);e["default"]=C.exports;h()(C,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCol:p["a"],VContainer:b["a"],VForm:g["a"],VRow:w["a"],VSpacer:_["a"],VTextField:V["a"],VToolbar:k["a"],VToolbarTitle:y["a"]})},"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var r=a("5530"),i=a("58df"),n=a("7e2b"),s=a("3206");e["a"]=Object(i["a"])(n["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);
//# sourceMappingURL=forgot.15e3a746.js.map