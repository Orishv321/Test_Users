(function(){"use strict";var e={767:function(e,t,r){var a=r(9242),s=r(3396);const n={class:"flex p-5"};function o(e,t){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("main",n,[(0,s.Wm)(r)])}var l=r(89);const i={},u=(0,l.Z)(i,[["render",o]]);var c=u,d=r(2483),f=r(7139);const p=e=>((0,s.dD)("data-v-738bc80a"),e=e(),(0,s.Cn)(),e),m={class:"w-full"},v=p((()=>(0,s._)("div",{class:"flex justify-center pb-5 text-xl"},"Users",-1))),h={class:"flex justify-between content-center pb-5"},b=p((()=>(0,s._)("div",{class:"text-xl"},"AllUsers",-1))),y=["value"],g={key:0,class:"flex space-x-5 space-y-5 w-full flex-wrap items-center justify-center"},w={key:1,class:"flex w-full justify-center items-center"},_=p((()=>(0,s._)("div",{class:"loader"},[(0,s._)("div",{class:"loader-wheel"}),(0,s._)("div",{class:"loader-text"})],-1))),D=[_];function x(e,t,r,n,o,l){const i=(0,s.up)("Card");return(0,s.wg)(),(0,s.iD)("div",m,[v,(0,s._)("section",h,[b,(0,s._)("div",null,[(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.sortBy=e),"aria-label":".form-select-sm example",class:"bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.sortArray,((e,t)=>((0,s.wg)(),(0,s.iD)("option",{key:t,value:e.value},(0,f.zw)(e.label),9,y)))),128))],512),[[a.bM,o.sortBy]])])]),(0,s._)("section",null,[o.displayData?((0,s.wg)(),(0,s.iD)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.displayData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[(0,s.Wm)(i,{user:e},null,8,["user"])])))),128))])):((0,s.wg)(),(0,s.iD)("div",w,D))])])}const k={class:"flex flex-col items-center rounded border p-5"},U={class:"pb-3"};function j(e,t,r,a,n,o){const l=(0,s.up)("Components_avatar");return(0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",U,[(0,s.Wm)(l,{avatar:r.user.avatar,onClick:t[0]||(t[0]=e=>o.getUserDetails(r.user.id))},null,8,["avatar"])]),(0,s._)("div",null,(0,f.zw)(r.user.first_name)+" "+(0,f.zw)(r.user.last_name),1),(0,s._)("div",null,(0,f.zw)(r.user.email),1)])}r(7658);const C=["src"];function O(e,t,r,a,n,o){return(0,s.wg)(),(0,s.iD)("img",{src:r.avatar,class:"border-solid border-amber-200 rounded-lg w-32"},null,8,C)}var I={name:"components_avatar",props:{avatar:{type:String,default:"https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"}}};const N=(0,l.Z)(I,[["render",O]]);var z=N,A={name:"components_card",components:{Components_avatar:z},props:{user:{type:Object,default:()=>({})}},methods:{async getUserDetails(e){this.$store.dispatch("getUserDetails",e),this.$router.push("/detail/"+e)}}};const Z=(0,l.Z)(A,[["render",j]]);var B=Z,W={name:"page_home",components:{Card:B},data(){return{users:null,sortArray:[{label:"NONE",value:"none"},{label:"First Name",value:"firstName"},{label:"Last Name",value:"lastName"}],sortBy:"none",displayData:null}},computed:{},watch:{sortBy:{immediate:!0,handler:"handleDisplayData"}},methods:{async getAllUsers(){try{let e=await(await fetch("https://reqres.in/api/users?delay=3")).json();this.users=e.data}catch(e){console.error("Could not get Users",e)}},async handleDisplayData(e){try{this.users||await this.getAllUsers();let t=[];const r=this.users?[...this.users]:[];switch(e){case"firstName":t=r.sort(((e,t)=>e.first_name>t.first_name),1);break;case"lastName":t=r.sort(((e,t)=>e.last_name>t.last_name),1);break;case"none":t=r;break;default:t=[];break}this.displayData=t}catch(t){console.error("Could not sort user",t)}}}};const $=(0,l.Z)(W,[["render",x],["__scopeId","data-v-738bc80a"]]);var F=$;const M={class:"flex flex-col w-full justify-center items-center"},P={class:"text-xl pb-5"},T={class:"flex flex-col items-center p-5 border"},q={class:"pb-3"};function E(e,t,r,a,n,o){const l=(0,s.up)("Components_avatar");return(0,s.wg)(),(0,s.iD)("main",M,[(0,s._)("section",P,(0,f.zw)(n.userInfo.first_name),1),(0,s._)("section",T,[(0,s._)("div",q,[(0,s.Wm)(l,{avatar:n.userInfo.avatar},null,8,["avatar"])]),(0,s._)("div",null,"email: "+(0,f.zw)(n.userInfo.email),1),(0,s._)("div",null,"First Name : "+(0,f.zw)(n.userInfo.first_name),1),(0,s._)("div",null,"Last name: "+(0,f.zw)(n.userInfo.last_name),1)])])}var H=r(65),K={name:"page_user_details",components:{Components_avatar:z},data(){return{userInfo:{}}},computed:{...(0,H.rn)(["userDetails"]),routerId(){return this.$route.params.id}},watch:{userDetails:{immediate:!0,handler:"checkUserDetails"}},methods:{...(0,H.nv)(["getUserDetails"]),async checkUserDetails(e){try{e.id||this.routerId===e?.id?this.userInfo=e:await this.getUserDetails(this.routerId)}catch(t){console.error("Could not get User details",t)}}}};const L=(0,l.Z)(K,[["render",E]]);var Y=L;const S=[{path:"/",name:"home",component:F},{path:"/detail/:id",name:"userDetails",component:Y}],V=(0,d.p7)({history:(0,d.PO)("/"),routes:S});var G=V;const J={id:0,email:"",first_name:"",last_name:"",avatar:""},Q={userDetails:{...J}},R={},X={setUserDetails(e,t){e.userDetails=t}},ee={async getUserDetails({commit:e},t){try{let r=await fetch(`https://reqres.in/api/users/${t}`);r=await r.json(),e("setUserDetails",r?.data??{})}catch(r){console.error("Could not get User Details",r)}}};var te=(0,H.MT)({state:Q,getters:R,mutations:X,actions:ee});(0,a.ri)(c).use(te).use(G).mount("#app")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,n){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],n=e[c][2];for(var l=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[i])}))?a.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,n,o=a[0],l=a[1],i=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(i)var c=i(r)}for(t&&t(a);u<o.length;u++)n=o[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkuser_profile"]=self["webpackChunkuser_profile"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(767)}));a=r.O(a)})();
//# sourceMappingURL=app.2354ac4d.js.map