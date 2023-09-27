import{v as e,e as V,d as x,o as D,t as L,m,n as $,p as y,q as S,r as O,s as P,u as p,w as R,i as w,_ as T}from"./app-b66a0cfa.js";var Ne=async n=>{try{const o=await fetch(n);if(!o.ok)throw Error("Request error: "+o);return o.text()}catch(o){return Promise.reject(o)}},Be=(n,o)=>{const t=s=>{if(s.stopPropagation(),!s.target.files||s.target.files.length<1)return;const a=s.target.files[0];let c=null;const l=()=>{const i=c.result;n(i)};c=new FileReader,c.onloadend=l,c.readAsText(a)},r=document.createElement("input");r.style.display="none",r.type="file",r.onchange=t,o&&(r.accept=o),document.body.appendChild(r),r.click(),document.body.removeChild(r)},Ve=(n,o)=>{const t=document.createElement("a");t.href="data:text/plain;charset=utf-8,"+encodeURIComponent(o),t.download=n,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},A=typeof window<"u",E,De=A?/mac/i.test(((E=navigator.userAgentData)==null?void 0:E.platform)||navigator.platform):!1,F=n=>/^(https?:|mailto:|tel:)/.test(n),Le=n=>JSON.parse(JSON.stringify(n));const I={text:"xs md:sm",class:"bg-c border border-c rounded shadow-c overflow-x-hidden overflow-y-scroll"},M=["onClick"],W={class:"space-x-1.5 hstack"},j=["data-icon"],q={key:0,class:"text-lighter-c text-xs hide-on-mobile"},z=e.defineComponent({__name:"Dropdown",props:{items:{}},emits:["select"],setup(n){const o=V(),t=x(),r=s=>F(s)?window.open(s):o.push({path:s,query:t.query});return(s,a)=>(e.openBlock(),e.createElementBlock("ul",I,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.items,(c,l)=>(e.openBlock(),e.createElementBlock("li",{key:`locale-${l}-${c}`,class:e.normalizeClass(["dropdown-li justify-between",[c.border&&"border-b border-c"]]),onClick:()=>{c.function?c.function({text:c.text,i:l}):c.link&&r(c.link),s.$emit("select",c.text)}},[e.createElementVNode("div",W,[c.icon?(e.openBlock(),e.createElementBlock("span",{key:0,class:"iconify text-base","data-icon":c.icon},null,8,j)):e.createCommentVNode("",!0),e.createElementVNode("span",null,e.toDisplayString(c.text),1)]),c.note?(e.openBlock(),e.createElementBlock("span",q,e.toDisplayString(c.note),1)):e.createCommentVNode("",!0)],10,M))),128))]))}}),H=e.defineComponent({name:"OnClickOutside",props:["as","options"],emits:["trigger"],setup(n,{slots:o,emit:t}){const r=e.ref();return D(r,s=>{t("trigger",s)},n.options),()=>{if(o.default)return e.h(n.as||"div",{ref:r},o.default())}}});function Y(n){var o;const t=m(n);return(o=t==null?void 0:t.$el)!=null?o:t}const Z=P?window:void 0;function J(...n){let o,t,r,s;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,r,s]=n,o=Z):[o,t,r,s]=n,!o)return S;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const a=[],c=()=>{a.forEach(u=>u()),a.length=0},l=(u,f,h,_)=>(u.addEventListener(f,h,_),()=>u.removeEventListener(f,h,_)),i=e.watch(()=>[Y(o),m(s)],([u,f])=>{if(c(),!u)return;const h=O(f)?{...f}:f;a.push(...t.flatMap(_=>r.map(B=>l(u,_,B,h))))},{immediate:!0,flush:"post"}),d=()=>{i(),c()};return $(d),d}function v(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function b(n){const o=window.getComputedStyle(n);if(o.overflowX==="scroll"||o.overflowY==="scroll"||o.overflowX==="auto"&&n.clientWidth<n.scrollWidth||o.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!t||t.tagName==="BODY"?!1:b(t)}}function U(n){const o=n||window.event,t=o.target;return b(t)?!1:o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)}function X(n,o=!1){const t=e.ref(o);let r=null,s;e.watch(L(n),l=>{const i=v(m(l));if(i){const d=i;s=d.style.overflow,t.value&&(d.style.overflow="hidden")}},{immediate:!0});const a=()=>{const l=v(m(n));!l||t.value||(y&&(r=J(l,"touchmove",i=>{U(i)},{passive:!1})),l.style.overflow="hidden",t.value=!0)},c=()=>{const l=v(m(n));!l||!t.value||(y&&(r==null||r()),l.style.overflow=s,t.value=!1)};return $(c),e.computed({get(){return t.value},set(l){l?a():c()}})}function G(){let n=!1;const o=e.ref(!1);return(t,r)=>{if(o.value=r.value,n)return;n=!0;const s=X(t,r.value);e.watch(o,a=>s.value=a)}}G();const K=["title"],Q={"flex-center":""},ee=e.createElementVNode("span",{class:"iconify md:text-lg","data-icon":"ph:moon-bold"},null,-1),te=[ee],ne={"flex-center":""},oe=e.createElementVNode("span",{class:"iconify md:text-lg","data-icon":"ph:sun-bold"},null,-1),re=[oe],se=e.defineComponent({__name:"ToggleDark",setup(n){const{t:o}=p();return(t,r)=>(e.openBlock(),e.createElementBlock("button",{class:"round-btn",title:e.unref(o)("toggle_dark"),onClick:r[0]||(r[0]=s=>("toggleDark"in t?t.toggleDark:e.unref(R))())},[e.withDirectives(e.createElementVNode("div",Q,te,512),[[e.vShow,"isDark"in t?t.isDark:e.unref(w)]]),e.withDirectives(e.createElementVNode("div",ne,re,512),[[e.vShow,!("isDark"in t?t.isDark:e.unref(w))]])],8,K))}}),k="en",Se=n=>{const{availableLocales:o,locale:t}=p(),r=a=>o.indexOf(a)!==-1,s=a=>{const c=a==="string"?a:a[0];return r(c)?c:k};t.value=s(n.lang),e.watch(()=>n.lang,()=>t.value=s(n.lang))},ce=n=>{const{locale:o}=p(),t=x(),r=o.value===k?t.path:t.path.replace(`/${o.value}`,"");return n===k?r:`/${n}${r}`},C=(n,o)=>`${o===k?"":`/${o}`}${n[0]==="/"?"":"/"}${n}`,ae=["data-icon"],le={key:1,class:"truncate max-w-xs hide-on-mobile"},ie={class:"hstack cursor-pointer space-x-1",role:"button",tabindex:"0"},ue=["data-icon"],de={key:1,class:"truncate max-w-xs hide-on-mobile"},N=e.defineComponent({__name:"NavItem",props:{text:{},icon:{},link:{}},setup(n){const{locale:o}=p(),t=e.ref(!1);return(r,s)=>{const a=e.resolveComponent("router-link");return r.link?(e.openBlock(),e.createBlock(a,{key:0,class:"hstack cursor-pointer space-x-1",to:("switchPath"in r?r.switchPath:e.unref(C))(r.link,e.unref(o))},{default:e.withCtx(()=>[r.icon?(e.openBlock(),e.createElementBlock("span",{key:0,class:"iconify md:text-lg","data-icon":r.icon},null,8,ae)):e.createCommentVNode("",!0),r.text?(e.openBlock(),e.createElementBlock("span",le,e.toDisplayString(r.text),1)):e.createCommentVNode("",!0)]),_:1},8,["to"])):(e.openBlock(),e.createBlock(e.unref(H),{key:1,relative:"",onClick:s[1]||(s[1]=c=>t.value=!e.unref(t)),onTrigger:s[2]||(s[2]=c=>t.value=!1)},{default:e.withCtx(()=>[e.createElementVNode("div",ie,[r.icon?(e.openBlock(),e.createElementBlock("span",{key:0,class:"iconify md:text-lg","data-icon":r.icon},null,8,ue)):e.createCommentVNode("",!0),r.text?(e.openBlock(),e.createElementBlock("span",de,e.toDisplayString(r.text),1)):e.createCommentVNode("",!0)]),e.withDirectives(e.createElementVNode("div",{class:"absolute z-20 top-6.5 right-0",onClick:s[0]||(s[0]=c=>c.stopPropagation())},[e.renderSlot(r.$slots,"default")],512),[[e.vShow,e.unref(t)]])]),_:3}))}}}),g={en:{name:"English",icon:"icon-park-outline:english"},"zh-cn":{name:"简体中文",icon:"icon-park-outline:chinese"}},fe=e.defineComponent({__name:"ToggleLang",setup(n){const{availableLocales:o,locale:t}=p(),r=e.computed(()=>o.map(s=>({link:ce(s),text:g[s].name,icon:g[s].icon})));return(s,a)=>{const c=z,l=N;return e.openBlock(),e.createBlock(l,{text:e.unref(g)[e.unref(t)].name,icon:"ic:round-translate"},{default:e.withCtx(()=>[e.createVNode(c,{items:e.unref(r)},null,8,["items"])]),_:1},8,["text"])}}}),pe={},me=e.createElementVNode("span",{"text-brand":""},"My",-1);function he(n,o){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createTextVNode("Oh"),me,e.createTextVNode("CV")],64)}const _e=T(pe,[["render",he]]),ke=["fill"],ve=e.createElementVNode("circle",{cx:"15.672",cy:"15.184",r:"11.544","fill-opacity":"0.15"},null,-1),ge=e.createElementVNode("path",{d:"M11.244 30.525c.532.036.656-.003 1.038-.165.241-.138.38-.35.499-.677l2.204-6.471c.068-.536 1.211-1.736 2.556-1.608.093.009.172.073.26.115 3.57 1.694 9.404 3.535 11.036.032.054-.116.099-.21.088-.324-.014-.154-.16-.311-.218-.386l-9.194-11.43 2.554-7.6a.456.456 0 0 0 .003-.288.394.394 0 0 0-.344-.26.503.503 0 0 0-.376.167L4.001 19.347c-.614.699-.878.905-.925 1.864-.039.79.357 1.251.646 1.623l6.538 7.135c.236.298.584.53.984.556Zm7.953-16.495a1.783 1.783 0 1 1-.003 3.565 1.783 1.783 0 0 1 .003-3.565Zm.294.529a.902.902 0 1 1 0 1.804.902.902 0 0 1 0-1.804Z"},null,-1),we=[ve,ge],ye=e.defineComponent({__name:"Logo",setup(n){const o=e.computed(()=>w.value?"#e2e8f0":"#1e293b");return(t,r)=>(e.openBlock(),e.createElementBlock("svg",{width:"1.7em",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e.unref(o)},we,8,ke))}}),Ee={class:"header hstack justify-between pl-4 pr-1 text-c"},xe={text:"base md:lg"},$e={hstack:""},be=e.createElementVNode("a",{class:"round-btn",href:"http://github.com/Renovamen/oh-my-cv",target:"_blank",rel:"nofollow noopener"},[e.createElementVNode("span",{class:"iconify md:text-lg","data-icon":"tabler:brand-github"})],-1),Oe=e.defineComponent({__name:"Header",setup(n){const{t:o,locale:t}=p();return(r,s)=>{const a=ye,c=_e,l=e.resolveComponent("router-link"),i=N,d=fe,u=se;return e.openBlock(),e.createElementBlock("header",Ee,[e.createVNode(l,{class:"hstack cursor-pointer text-gray-900 dark:text-gray-100",to:("switchPath"in r?r.switchPath:e.unref(C))("/",e.unref(t))},{default:e.withCtx(()=>[e.createVNode(a,{"hide-on-mobile":"","mr-2":"",text:"sm md:base"}),e.createElementVNode("h1",xe,[e.createVNode(c)])]),_:1},8,["to"]),e.renderSlot(r.$slots,"middle"),e.createElementVNode("div",$e,[e.createVNode(i,{"mr-3":"",link:"resumes",text:e.unref(o)("resumes.my_resumes"),icon:"ep:menu"},null,8,["text"]),e.createVNode(d,{"mr-1.5":""}),e.renderSlot(r.$slots,"tail"),e.createVNode(u),be])])}}});export{H as O,z as _,Oe as a,_e as b,Le as c,Ve as d,De as e,Ne as f,A as i,C as s,Be as u,Se as w};
