/*! For license information please see bf708d43c224561ad616.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{319:function(t,o,i){var n=i(337);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(197).default)("d19157a4",n,!0,{})},329:function(t,o,i){"use strict";var n=i(26),e=i(47),a={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(e.a)(n.i19close)},watch:{canShow(t){t&&this.count++}}},s=i(62),r=Object(s.a)(a,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[this.canShow?o("div",{key:this.count},[this._m(0)]):this._e()])],1)}),[function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+t.variant,attrs:{role:"alert"}},[t._t("default"),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":t.i19close},on:{click:function(o){return t.$emit("dismiss")}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2)}],!1,null,null,null);o.a=r.exports},331:function(t,o,i){"use strict";var n={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:t,zIndex:o,transitionMs:i,opacity:n}=this;return{top:t,transition:"opacity ".concat(i,"ms linear"),opacity:n,zIndex:o}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(t){0===t?setTimeout(()=>{this.top=this.zIndex=null},this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout(()=>{this.opacity=null},this.transitionMs),this.lockBodyScroll())}},e=(i(336),i(62)),a=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"backdrop",style:this.style,on:{click:this.hide}})}),[],!1,null,null,null);o.a=a.exports},336:function(t,o,i){"use strict";var n=i(319);i.n(n).a},337:function(t,o,i){(o=i(196)(!0)).push([t.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAIA,UACE,cAAe,CACf,UAAW,CACX,MAAO,CACP,WAAY,CACZ,YAAa,CACb,4BAA6B,CAC7B,WAAY,CACZ,cAAe,CACf,YAAa",file:"ABackdrop.scss",sourcesContent:["$primary: #222831; $secondary: #343a40; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.backdrop {\n  position: fixed;\n  top: -100vh;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--dark);\n  opacity: .65;\n  cursor: pointer;\n  z-index: -100;\n}\n"]}]),t.exports=o},353:function(t,o,i){var n=i(405);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(197).default)("3a67daf0",n,!0,{})},404:function(t,o,i){"use strict";var n=i(353);i.n(n).a},405:function(t,o,i){(o=i(196)(!0)).push([t.i,".login-modal__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;box-sizing:border-box;border-radius:0}@media (min-width:410px){.login-modal__box{width:400px;left:50%;margin-left:-200px;top:var(--spacer-4);border-radius:var(--border-radius)}}@media (min-height:400px){.login-modal__box{top:15%}}.login-modal .alert{margin-bottom:var(--spacer-3)}.login-modal__logout{margin-top:var(--spacer-3)}.login-modal__btn{color:#fff;text-align:left;line-height:var(--line-height-lg);padding:.7rem;min-width:15rem}.login-modal__btn:hover{color:#fff}.login-modal__btn:focus{box-shadow:none}.login-modal__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login-modal__btn--facebook:hover{background:#274480;border-color:#274480}.login-modal__btn--google{background:#cb4023;border-color:#be3419}.login-modal__btn--google:hover{background:#c1361a;border-color:#c1361a}.login-modal__btn--windowslive{background:#329ffc;border-color:#2996f2}.login-modal__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login-modal__btn-icon{display:inline-block;width:1.4rem;text-align:center;margin-right:var(--spacer-1)}.login-modal__back{display:block;padding-left:.3rem;padding-right:.3rem}.login-modal__back:focus{box-shadow:none}.login-modal__visitor-info{font-size:var(--font-size-sm);margin-top:var(--spacer-2);text-align:center;color:var(--text-muted)}","",{version:3,sources:["LoginModal.scss"],names:[],mappings:"AAKE,kBACE,YAAa,CACb,cAAe,CACf,KAAM,CACN,MAAO,CACP,WAAY,CACZ,qBAAsB,CACtB,eAAgB,CAEhB,yBATF,kBAUI,WAAY,CACZ,QAAS,CACT,kBAAmB,CACnB,mBAAoB,CACpB,kCAAmC,CAMtC,CAHC,0BAjBF,kBAkBI,OAAQ,CAEX,CArBH,oBAwBI,6BAA8B,CAC/B,qBAGC,0BAA2B,CAC5B,kBAGC,UAAW,CACX,eAAgB,CAChB,iCAAkC,CAClC,aAAc,CACd,eAAgB,CALjB,wBAQG,UAAW,CARd,wBAYG,eAAgB,CACjB,4BAGC,kBAAmB,CACnB,oBAAqB,CAFtB,kCAKG,kBAAmB,CACnB,oBAAqB,CACtB,0BAID,kBAAmB,CACnB,oBAAqB,CAFtB,gCAKG,kBAAmB,CACnB,oBAAqB,CACtB,+BAID,kBAAmB,CACnB,oBAAqB,CAFtB,qCAKG,kBAAmB,CACnB,oBAAqB,CACtB,uBAID,oBAAqB,CACrB,YAAa,CACb,iBAAkB,CAClB,4BAA6B,CAC9B,mBAID,aAAc,CACd,kBAAmB,CACnB,mBAAoB,CAHrB,yBAMG,eAAgB,CACjB,2BAID,6BAA8B,CAC9B,0BAA2B,CAC3B,iBAAkB,CAClB,uBAAwB",file:"LoginModal.scss",sourcesContent:["$primary: #222831; $secondary: #343a40; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.login-modal {\n  &__box {\n    z-index: 1090;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    box-sizing: border-box;\n    border-radius: 0;\n\n    @media (min-width: 410px) {\n      width: 400px;\n      left: 50%;\n      margin-left: -200px;\n      top: var(--spacer-4);\n      border-radius: var(--border-radius);\n    }\n\n    @media (min-height: 400px) {\n      top: 15%;\n    }\n  }\n\n  .alert {\n    margin-bottom: var(--spacer-3);\n  }\n\n  &__logout {\n    margin-top: var(--spacer-3);\n  }\n\n  &__btn {\n    color: #fff;\n    text-align: left;\n    line-height: var(--line-height-lg);\n    padding: .7rem;\n    min-width: 15rem;\n\n    &:hover {\n      color: #fff;\n    }\n\n    &:focus {\n      box-shadow: none;\n    }\n\n    &--facebook {\n      background: #3b5999;\n      border-color: #2f4d8a;\n\n      &:hover {\n        background: #274480;\n        border-color: #274480;\n      }\n    }\n\n    &--google {\n      background: #cb4023;\n      border-color: #be3419;\n\n      &:hover {\n        background: #c1361a;\n        border-color: #c1361a;\n      }\n    }\n\n    &--windowslive {\n      background: #329ffc;\n      border-color: #2996f2;\n\n      &:hover {\n        background: #1f8ce9;\n        border-color: #1f8ce9;\n      }\n    }\n\n    &-icon {\n      display: inline-block;\n      width: 1.4rem;\n      text-align: center;\n      margin-right: var(--spacer-1);\n    }\n  }\n\n  &__back {\n    display: block;\n    padding-left: .3rem;\n    padding-right: .3rem;\n\n    &:focus {\n      box-shadow: none;\n    }\n  }\n\n  &__visitor-info {\n    font-size: var(--font-size-sm);\n    margin-top: var(--spacer-2);\n    text-align: center;\n    color: var(--text-muted);\n  }\n}\n"]}]),t.exports=o},442:function(t,o,i){"use strict";i.r(o);var n=i(59),e=i.n(n),a=(i(15),i(57),i(26)),s=i(47),r=i(129),l=i(214),c=i(329),d=i(331),u={name:"LoginModal",components:{ALink:l.a,AAlert:c.a,ABackdrop:d.a},props:{isVisible:{type:Boolean,default:!0},getGreetingsMsg:Function,accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>r.a}},data:()=>({isLoading:!1,isWaitingPopup:!1,isLogged:!1,email:"",name:"",oauthProviders:[],isLoginForm:!1,hasLoginError:!1,hasNoProfileFound:!1}),computed:{i19close:()=>Object(s.a)(a.i19close),i19continueLoginOnPopup:()=>Object(s.a)(a.i19continueLoginOnPopup),i19email:()=>Object(s.a)(a.i19email),i19guestCheckoutMsg:()=>Object(s.a)(a.i19guestCheckoutMsg),i19loginErrorMsg:()=>Object(s.a)(a.i19loginErrorMsg),i19login:()=>Object(s.a)(a.i19login),i19logout:()=>Object(s.a)(a.i19logout),i19myAccount:()=>Object(s.a)(a.i19myAccount),i19myOrders:()=>Object(s.a)(a.i19myOrders),i19noProfileFoundWithEmail:()=>Object(s.a)(a.i19noProfileFoundWithEmail),i19signInWith:()=>Object(s.a)(a.i19signInWith),i19signInWithAnotherEmail:()=>Object(s.a)(a.i19signInWithAnotherEmail),i19signUpWith:()=>Object(s.a)(a.i19signUpWith),greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):"".concat(Object(s.a)(a.i19hello)," ").concat(this.name||Object(s.a)(a.i19visitor))}},methods:{hide(){this.$emit("update:is-visible",!1)},update(){const{checkLogin:t,getCustomerName:o}=this.ecomPassport;this.name=o(),this.isLogged=t(),this.email="",this.isWaitingPopup=!1},waitPromise(t){this.isLoading=!0,t.catch(console.error).finally(()=>{this.isLoading=!1})},setOauthProviders(){const t=this.ecomPassport.fetchOauthProviders().then(({host:t,baseUri:o,oauthPath:i,providers:n})=>{const e=[];for(const a in n)if(n[a]){const{faIcon:s,providerName:r}=n[a];e.push({link:t+o+a+i,faIcon:s,provider:a,providerName:r})}this.oauthProviders=e}).catch(t=>{throw this.presetOauthProviders(),t});return this.waitPromise(t),t},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},openOauthPopup(t,o){if(this.hasLoginError=!1,t)this.ecomPassport.popupOauthLink(t),this.isWaitingPopup=!0;else{const t=this.setOauthProviders().then(()=>{const t=this.oauthProviders.find(t=>t.provider===o);this.openOauthPopup(t,o)}).catch(t=>{throw this.hasLoginError=!0,t});this.waitPromise(t)}},submitEmail(){this.isLoginForm=!1;const t=this.ecomPassport.fetchLogin(this.email).catch(t=>{const{response:o}=t;if(!o||403!==o.status)throw setTimeout(()=>{this.hasLoginError=!0},100),t;this.hasNoProfileFound=!0});this.waitPromise(t)},logout(){this.ecomPassport.logout()}},watch:{hasNoProfileFound(t){!1===t&&(this.email=""),this.isLoginForm=!t},isLoginForm(t){this.hasLoginError=!1,t&&(this.isWaitingPopup=!1,this.$nextTick(()=>{setTimeout(()=>{this.$refs.input.focus()},200)}))}},mounted(){["login","logout"].forEach(t=>{this.ecomPassport.on(t,o=>{this.update(),this.$emit(t,o)})}),this.update(),this.setOauthProviders()}},p=(i(404),i(62)),h=Object(p.a)(u,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"login-modal"},[i("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),i("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"login-modal__box card"},[t._t("header",[i("div",{staticClass:"login-modal__header card-header"},[t._v(" "+t._s(t.greetings)+" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),i("div",{staticClass:"login-modal__body card-body"},[t.hasLoginError?i("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19loginErrorMsg)+" ")]):t._e(),i("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[t.isLoading?i("div",{key:"waiting"},[i("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):t.isLogged?i("div",{key:"logged"},[i("div",{staticClass:"list-group list-group-flush"},[i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.ordersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]),i("a-link",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.accountUrl}},[t._v(" "+t._s(t.i19myAccount)+" ")])],1),i("button",{staticClass:"login-modal__logout btn btn-block btn-danger",attrs:{type:"button"},on:{click:t.logout}},[i("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" "+t._s(t.i19logout)+" ")])]):t.isLoginForm?i("div",{key:"form"},[i("form",{on:{submit:function(o){return o.preventDefault(),t.submitEmail(o)}}},[i("div",{staticClass:"form-group"},[i("button",{staticClass:"login-modal__back btn",attrs:{type:"button"},on:{click:function(o){t.isLoginForm=!1}}},[i("i",{staticClass:"fas fa-arrow-left"})]),i("label",{attrs:{for:"login-modal-email"}},[t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"login-modal-email",placeholder:"email@mail.com",required:""},domProps:{value:t.email},on:{input:function(o){o.target.composing||(t.email=o.target.value)}}})]),i("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19login)+" ")])])]):i("div",{key:"oauth"},[!t.isWaitingPopup&&t.hasNoProfileFound?i("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(" "+t._s(t.i19noProfileFoundWithEmail)+" "),i("b",[t._v(t._s(t.email))]),t._v(". "),i("br"),i("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(o){o.preventDefault(),t.hasNoProfileFound=!1}}},[t._v(" "+t._s(t.i19signInWithAnotherEmail)+" ")])]):t._e(),i("a-alert",{attrs:{"can-show":t.isWaitingPopup,variant:"info"}},[t._v(" "+t._s(t.i19continueLoginOnPopup)+". ")]),t._l(t.oauthProviders,(function(o){var n=o.link,e=o.faIcon,a=o.providerName,s=o.provider;return i("button",{key:s,staticClass:"login-modal__btn btn btn-block",class:"login-modal__btn--"+s,attrs:{type:"button"},on:{click:function(o){return t.openOauthPopup(n,s)}}},[i("span",{staticClass:"login-modal__btn-icon"},[i("i",{class:"fab "+e})]),t._v(" "+t._s(t.hasNoProfileFound?t.i19signUpWith:t.i19signInWith)+" "+t._s(a)+" ")])})),t.hasNoProfileFound?i("div",{staticClass:"login-modal__visitor-info"},[t._v(" "+t._s(t.i19guestCheckoutMsg)+" ")]):i("button",{key:"email",staticClass:"login-modal__btn btn btn-block btn-secondary",attrs:{type:"button"},on:{click:function(o){t.isLoginForm=!0}}},[i("span",{staticClass:"login-modal__btn-icon"},[i("i",{staticClass:"fas fa-envelope"})]),t._v(" "+t._s(t.i19signInWith+" "+t.i19email)+" ")])],2)])],1)],2)])],1)}),[],!1,null,null,null).exports;function m(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?m(Object(i),!0).forEach((function(o){A(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))}))}return t}function A(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}o.default=(t={},o="login-modal",i="user-button")=>{const n=document.getElementById(o),a=document.getElementById(i);if(n&&a){const i=window.storefront&&window.storefront.getScopedSlots;new e.a({data:{isVisible:!1},created(){a.addEventListener("click",t=>{t.preventDefault(),this.isVisible=!0})},render(e){const a=this;return e(h,{attrs:{id:o},props:g(g({},t.props),{},{isVisible:a.isVisible}),on:{"update:is-visible"(t){a.isVisible=t}},scopedSlots:"function"==typeof i?i(n,e):void 0})}}).$mount(n)}}}}]);
//# sourceMappingURL=bf708d43c224561ad616.js.map