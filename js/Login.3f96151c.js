(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"3bea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("h2",[e._v("Login")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{attrs:{type:"submit"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[e._v(" Login ")])])])},r=[],n=a("2591"),o=a("b202"),i={data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;n["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){o["a"].setUser(t.user),e.$router.push("/vuetwitterclone/")})).catch((function(e){alert(e.message)}))}}},l=i,u=a("2877"),m=Object(u["a"])(l,s,r,!1,null,null,null);t["default"]=m.exports},e846:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-10 flex flex-col"},[a("form",{staticClass:"p-10",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("h2",[e._v("Register")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"border-2",attrs:{type:"email",placeholder:"Email address..."},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"border-2",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"border-2",attrs:{type:"password",placeholder:"password..."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{staticClass:"border-2",attrs:{type:"submit"}},[e._v("Register")])]),a("router-link",{staticClass:"text-lg px-10 py-5 font-semibold text-left hidden lg:block",attrs:{to:"/Login"}},[e._v("Already have account? Login Here ")])],1)},r=[],n=a("2591"),o=a("b202"),i={data:function(){return{email:"",password:"",username:""}},methods:{register:function(){var e=this;n["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){o["a"].createUser(t,e.username),console.log("success!"),e.$router.push("/vuetwitterclone/")})).catch((function(e){alert(e.message)}))}}},l=i,u=a("2877"),m=Object(u["a"])(l,s,r,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=Login.3f96151c.js.map