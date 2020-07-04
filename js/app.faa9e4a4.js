(function(e){function t(t){for(var a,l,i=t[0],c=t[1],s=t[2],h=0,d=[];h<i.length;h++)l=i[h],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={app:0},o=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-toolbar-title",{staticClass:"headline"},[r("span",{staticClass:"font-weight-light"},[e._v("Url Lengthener")]),r("v-btn",{attrs:{icon:"",href:"https://github.com/TheTechdoodle/url-lengthener"}},[r("v-icon",[e._v("mdi-github")])],1)],1),r("v-spacer"),r("dark-switch")],1),r("v-main",[r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("encode")],1)],1)],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-switch",{attrs:{color:"accent","append-icon":e.icon,"hide-details":"",label:"Dark Mode"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})},i=[],c=r("a002"),s=r.n(c),u={name:"DarkSwitch",computed:{icon(){return"mdi-"+(this.$vuetify.theme.dark?"weather-night":"white-balance-sunny")}},watch:{"$vuetify.theme.dark":function(e){s.a.setItem("theme",e?"dark":"light")}},mounted(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{this.$vuetify.theme.dark=e.matches})}},h=u,d=r("2877"),p=r("6544"),f=r.n(p),v=r("b73d"),m=Object(d["a"])(h,l,i,!1,null,"2a0612d5",null),w=m.exports;f()(m,{VSwitch:v["a"]});var b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-text",[r("v-text-field",{attrs:{outlined:"",label:"Input URL",rules:[e.checkURL],autofocus:"",type:"url",spellcheck:"false"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),r("text-share",{attrs:{label:"Encoded",value:e.redirectUrl}})],1)],1)},g=[];function y(e){return e.split("").map(e=>e.charCodeAt(0).toString(2).padStart(8,"0").replace(/0/g,"a").replace(/1/g,"A")).join("")}function k(e){let t="";console.log("Decoding"),console.log(e);for(let r=0;r<e.length/8;r++)t+=String.fromCharCode(parseInt(e.substring(8*r,8*r+8).replace(/a/g,"0").replace(/A/g,"1"),2));return t}var x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-text-field",{attrs:{readonly:"",value:e.value,label:e.label}},[r("template",{slot:"append"},[r("v-btn",{attrs:{icon:"",title:"Copy to Clipboard",color:e.copyColor},on:{click:e.copy}},[r("v-icon",[e._v("mdi-clipboard-arrow-right-outline")])],1),e.canShare?r("v-btn",{attrs:{icon:"",title:"Share"},on:{click:e.share}},[r("v-icon",[e._v("mdi-share-variant")])],1):e._e()],1)],2)},S=[],_={name:"TextShare",props:{value:String,label:String},data:()=>({copyColor:""}),watch:{value(){this.copyColor=""}},methods:{copy(){window.navigator.clipboard.writeText(this.value).then(()=>{this.copyColor="success"})},share(){window.navigator.share({url:this.value})}},computed:{canShare(){return window.navigator.hasOwnProperty("share")}}},V=_,C=r("8336"),O=r("132d"),j=r("8654"),T=Object(d["a"])(V,x,S,!1,null,"6954179b",null),$=T.exports;f()(T,{VBtn:C["a"],VIcon:O["a"],VTextField:j["a"]});var M={name:"Encode",components:{TextShare:$},data:()=>({url:"https://example.com"}),computed:{encoded(){return y(this.url)},redirectUrl(){let e=new URL(window.location);return e.hash=this.encoded,e.toString()}},methods:{checkURL(e){return!(!e.startsWith("http://")&&!e.startsWith("https://"))||'URL must start with "http://" or "https://"'}}},E=M,P=r("b0af"),U=r("99d9"),L=Object(d["a"])(E,b,g,!1,null,"74de84a9",null),A=L.exports;f()(L,{VCard:P["a"],VCardText:U["a"],VTextField:j["a"]});var I={name:"App",components:{Encode:A,DarkSwitch:w}},R=I,D=r("7496"),W=r("40dc"),B=r("62ad"),F=r("a523"),J=r("f6c4"),q=r("0fd9"),z=r("2fa4"),G=r("2a7f"),H=Object(d["a"])(R,n,o,!1,null,null,null),K=H.exports;f()(H,{VApp:D["a"],VAppBar:W["a"],VBtn:C["a"],VCol:B["a"],VContainer:F["a"],VIcon:O["a"],VMain:J["a"],VRow:q["a"],VSpacer:z["a"],VToolbarTitle:G["a"]});var N=r("f309");""===window.location.hash?(s.a.config({name:"url-lengthener"}),a["a"].config.productionTip=!1,a["a"].use(N["a"]),s.a.getItem("theme").then(e=>{e||(e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),new a["a"]({vuetify:new N["a"]({theme:{dark:"light"!==e}}),render:function(e){return e(K)}}).$mount("#app")})):window.onload=function(){const e=k(window.location.hash.substring(1));(e.startsWith("http://")||e.startsWith("https://"))&&(window.location.href=e)}}});
//# sourceMappingURL=app.faa9e4a4.js.map