(()=>{var e={8568:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r,l,a=n(6790),o={functional:!0,props:{type:{type:String,default:"button"},variant:{type:String,default:null},size:{type:String,default:null}},render:(e,{data:t,props:n,children:r})=>{const l=n.variant?[`btn-${n.variant}`]:null,o=n.size?[`btn-${n.size}`]:null;return e("button",(0,a.b)(t,{attrs:{type:n.type},staticClass:"btn",class:[o,l]}),r)}},u=o,i=n(1001),s=(0,i.Z)(u,r,l,!1,null,null,null),d=s.exports},2414:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r,l,a=n(6790),o={functional:!0,props:{tagName:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:(e,{data:t,props:n,children:r})=>{const l=n.fluid?"container-fluid":"container";return e(n.tagName,(0,a.b)(t,{class:[l]}),r)}},u=o,i=n(1001),s=(0,i.Z)(u,r,l,!1,null,null,null),d=s.exports},3209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r,l,a=n(6790),o=n(7290),u={functional:!0,props:{tagName:{type:String,default:"div"},col:{type:[Number,String],default:null},start:{type:[Number,String],default:null},row:{type:[Number,String],default:null},column:{type:[Number,String],default:null}},render:(e,{data:t,props:n,children:r})=>{const l=n.col?[`g-col-${(0,o.H)(n.col)}`]:null,u=n.start?[`g-start-${(0,o.H)(n.start)}`]:null,i=n.column?{gridColumn:(0,o.H)(n.column)}:null,s=n.row?{gridRow:(0,o.H)(n.row)}:null;return e(n.tagName,(0,a.b)(t,{class:[l,u],style:[i,s]}),r)}},i=u,s=n(1001),d=(0,s.Z)(i,r,l,!1,null,null,null),c=d.exports},8228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r,l,a=n(6790),o=n(7290),u={functional:!0,props:{tagName:{type:String,default:"div"},columns:{type:[String,Number],default:null},rows:{type:[String,Number],default:null},gap:{type:String,default:null}},render:(e,{data:t,props:n,children:r})=>{const l=n.rows?{"--bs-rows":(0,o.H)(n.rows)}:null,u=n.columns?{"--bs-columns":(0,o.H)(n.columns)}:null,i=n.gap?{"--bs-gap":n.gap}:null;return e(n.tagName,(0,a.b)(t,{staticClass:"grid",style:[l,u,i]}),r)}},i=u,s=n(1001),d=(0,s.Z)(i,r,l,!1,null,null,null),c=d.exports},1974:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r,l,a=n(6790),o={functional:!0,props:{tagName:{type:String,default:"img"},alt:{type:String,default:""},thumbnail:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1}},render:(e,{data:t,props:n,children:r})=>e(n.tagName,(0,a.b)(t,{attrs:{alt:n.alt},class:{"img-fluid":n.fluid,"img-thumbnail":n.thumbnail}}),r)},u=o,i=n(1001),s=(0,i.Z)(u,r,l,!1,null,null,null),d=s.exports},3649:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r,l,a=n(6790),o={functional:!0,props:{tagName:{type:String,default:"li"}},render:(e,{data:t,props:n,children:r})=>e(n.tagName,(0,a.b)(t,{staticClass:"list-inline-item"}),r)},u=o,i=n(1001),s=(0,i.Z)(u,r,l,!1,null,null,null),d=s.exports},344:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r,l,a=n(6790),o={functional:!0,props:{tagName:{type:String,default:"ul"}},render:(e,{data:t,props:n,children:r})=>e(n.tagName,(0,a.b)(t,{staticClass:"list-inline"}),r)},u=o,i=n(1001),s=(0,i.Z)(u,r,l,!1,null,null,null),d=s.exports},8008:(e,t,n)=>{"use strict";n(6992),n(8674),n(7727);var r=n(8935),l=(n(3948),n(2809));r.Z.use(l.Z);const a=[{path:"/",name:"home",component:()=>n.e(69).then(n.bind(n,1069))}],o=new l.Z({mode:"history",base:"https://volkovnd.github.io/volkovnd.dev/",routes:a});var u=o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{key:e.$route.fullPath})],1)},s=[],d={name:"App"},c=d,p=n(1001),v=(0,p.Z)(c,i,s,!1,null,null,null),f=v.exports,g={google:{families:["Open Sans:300,400,500,700:cyrillic"]}},m={webFonts:g},b=n(3019);const y=function(e,t,n={}){e&&t&&e.use(t,n)},h=function(e,t={},n={}){for(const r in t)y(e,t[r],n)},k=function(e){const t=function(n,r={}){t.installed||(e(n,r),t.installed=!0)};return t.installed=!1,t},w=(e,t={})=>(0,b.Z)({install:k(e)},t);var N=n(8843),S=n.n(N);const O=m.webFonts||null,Z=()=>{O&&S().load(O)};var j=w(Z);n(5827),n(4916),n(5306);const _=function(e,t,n){e&&t&&n&&e.component(t,n)},x=function(e,t={}){for(const n in t)_(e,n,t[n])},C=n(2524),E=C.keys().map((e=>({key:e,name:e.replace(/^\..*\//,"").replace(/\.(vue|js)$/,"")}))).reduce(((e,{key:t,name:n})=>(0,b.Z)({[n]:C(t).default},e)),{});var P=w((e=>{x(e,E)})),T={WebFontsPlugin:j,GlobalComponentsPlugin:P};r.Z.config.productionTip=!1,h(r.Z,T,m),new r.Z({el:"#app",router:u,render:e=>e(f)})},7290:(e,t,n)=>{"use strict";n.d(t,{H:()=>r});const r=n(9022)},2524:(e,t,n)=>{var r={"./buttons/v-btn.vue":8568,"./container/v-container.vue":2414,"./grid/v-grid-col.vue":3209,"./grid/v-grid.vue":8228,"./images/v-img.vue":1974,"./list-inline/v-list-inline-item.vue":3649,"./list-inline/v-list-inline.vue":344};function l(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=a,e.exports=l,l.id=2524}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,l,a)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],l=e[d][1],a=e[d][2];for(var u=!0,i=0;i<r.length;i++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(u=!1,a<o&&(o=a));if(u){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,l,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+".21b0dedb.js"})(),(()=>{n.miniCssF=e=>{}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="@volkovnd/volkovnd.dev:";n.l=(r,l,a,o)=>{if(e[r])e[r].push(l);else{var u,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){u=c;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[l];var p=(t,n)=>{u.onerror=u.onload=null,clearTimeout(v);var l=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),l&&l.forEach((e=>e(n))),t)return t(n)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),i&&document.head.appendChild(u)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="https://volkovnd.github.io/volkovnd.dev/"})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var l=n.o(e,t)?e[t]:void 0;if(0!==l)if(l)r.push(l[2]);else{var a=new Promise(((n,r)=>l=e[t]=[n,r]));r.push(l[2]=a);var o=n.p+n.u(t),u=new Error,i=r=>{if(n.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,l[1](u)}};n.l(o,i,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,o=r[0],u=r[1],i=r[2],s=0;if(o.some((t=>0!==e[t]))){for(l in u)n.o(u,l)&&(n.m[l]=u[l]);if(i)var d=i(n)}for(t&&t(r);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[o[s]]=0;return n.O(d)},r=self["webpackChunk_volkovnd_volkovnd_dev"]=self["webpackChunk_volkovnd_volkovnd_dev"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(8008)));r=n.O(r)})();