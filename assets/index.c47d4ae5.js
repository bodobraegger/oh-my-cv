import{d as y,r as h,o as u,c as w,w as p,a,b as V,e as _,t as K,f as $,n as R,g as G,v as J,u as m,O as N,h as Q,m as X,i as Y,l as Z,j as k,k as C,p as B,q as M,s as ee,F as O,x as f,y as E,P as z,z as te,A as se,B as ne,C as oe,D as re,E as ae,G as le,H as ie,I as P,_ as ce,J as de}from"./vendor.5c3d7a41.js";const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}};ue();const pe={key:0,class:"text-xs sm:text-sm"},S=y({props:{text:{type:String,required:!1,default:""},styles:{type:String,required:!1,default:"border border-gray-300"},activeStyles:{type:String,required:!1,default:"border border-gray-500"}},setup(t){const e=t,s=h(!1);return(o,n)=>(u(),w(m(N),{class:"relative cursor-pointer",onClick:n[1]||(n[1]=r=>s.value=!s.value),onTrigger:n[2]||(n[2]=r=>s.value=!1)},{default:p(()=>[a("div",{class:R(["flex items-center justify-center h-7 sm:h-8 rounded cursor-pointer",[e.text?"space-x-1 px-2 sm:px-3":"w-7 sm:w-8",!s.value&&e.styles,s.value&&e.activeStyles]])},[V(o.$slots,"icon"),e.text?(u(),_("span",pe,K(e.text),1)):$("",!0)],2),G(a("div",{class:"absolute top-8 sm:top-10 z-10 right-0 bg-white border border-gray-300 shadow rounded",onClick:n[0]||(n[0]=r=>r.stopPropagation())},[V(o.$slots,"dropdown")],512),[[J,s.value]])]),_:3}))}}),me={marginV:35,marginH:45,themeColor:"#377bb5",mdContent:""},fe={__set(t,e){t[e.key]=e.val}};var ve={namespaced:!0,state:me,mutations:fe};const he={mdContent:""},ge={__set(t,e){t[e.key]=e.val}};var _e={namespaced:!0,state:he,mutations:ge};const x=(t,e,s)=>{D.commit({type:t+"/__set",key:e,val:s})},D=Q({modules:{styles:ve,data:_e}}),q=t=>fetch(t).then(e=>{if(!e.ok)throw Error("Request error: "+e);return e.text()}).catch(e=>Promise.reject(e)),ye=(t,e)=>{if(t.stopPropagation(),!t.target.files||t.target.files.length<1)return;const s=t.target.files[0];let o=null;const n=()=>{const r=o.result;e(r)};o=new FileReader,o.onloadend=n,o.readAsText(s)},xe=()=>{const t=new X({html:!0}).use(Y),e=t.renderer.rules.link_open||function(s,o,n,r,l){return l.renderToken(s,o,n)};return t.renderer.rules.link_open=function(s,o,n,r,l){const i=s[o].attrIndex("target");return i<0?s[o].attrPush(["target","_blank"]):s[o].attrs[i][1]="_blank",e(s,o,n,r,l)},t},be=t=>{const e=/<dl>([\s\S]*?)<\/dl>/g,s=t.match(e);if(s===null)return t;for(const o of s){const n=/<dt>([\s\S]*?)<\/dt>/g,r=o.match(n);if(!r||(r==null?void 0:r.length)===1)continue;const l=o.replace(/<\/dd>/g,`</dd>
</dl>
<dl>`);t=t.replace(o,l)}return t},we=(t,e)=>{let s="";if(e.name&&(s+=`<h1>${e.name}</h1>
`),e.header)for(let o=0;o<e.header.length;o++){const n=e.header[o];!n||(s+=n.newLine?"<br>":"",n.link?s+=`<a class="preview-header-link" href="${n.link}" target="_blank" rel="noopener noreferrer">${o===0||n.newLine?"":"<span> | </span>"}<span>${n.text}</span></a>
`:s+=`<span>${o===0||n.newLine?"":"<span> | </span>"}<span>${n.text}</span></span>
`)}return`<div class="preview-header">${s}</div>`+t},A=t=>{const e=document.querySelector(".preview"),s=t.marginV+Math.max(t.marginV-10,j),o=1134,n=()=>{const c=document.createElement("div");return c.className="preview-page",c},r=()=>{const c=document.createElement("div");return c.className="preview-page-break",c};let l=n(),i=0;const d=document.createElement("div");d.className="preview";const v=[];if(e.children[0].className!=="preview-page")for(const c of e.children)v.push(c);else for(const c of e.children)for(const g of c.children)v.push(g);for(const c of v){const g=window.getComputedStyle(c,null),b=c.clientHeight+parseInt(g.marginTop)+parseInt(g.marginBottom);i+b>o-s&&(d.appendChild(l),d.appendChild(r()),l=n(),i=0),l.appendChild(c.cloneNode(!0)),i+=b}d.appendChild(l),e.innerHTML=d.innerHTML,U(e,t)},$e=xe(),ke=t=>{const{body:e,attributes:s}=Oe(t);let o=$e.render(e);return o=be(o),o=we(o,s),o},I=t=>{const e=document.querySelector(".preview");U(e,t),A(t)},j=10,L=["#000000","#377bb5","#ca3832","#ee8732","#9c5bde","#43912b"],Ce=(t,e)=>{t.style.paddingTop=`${e.marginV}px`,t.style.paddingBottom=`${Math.max(e.marginV-10,j)}px`,t.style.paddingLeft=`${e.marginH}px`,t.style.paddingRight=`${e.marginH}px`},Se=(t,e)=>{["H1","H2","H3","H4","A"].indexOf(t.tagName)!==-1&&(t.tagName==="A"&&t.classList.contains("preview-header-link")||(t.style.color=e.themeColor,t.tagName==="H2"&&(t.style.borderBottomColor=e.themeColor)))},U=(t,e)=>{const s=t.querySelectorAll(".preview-page");for(const n of s)Ce(n,e);const o=t.querySelectorAll("*");for(const n of o)Se(n,e)},Ie="\\ufeff?",He=typeof process!="undefined"?process.platform:"",Le="^("+Ie+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(He==="win32"?"\\r?":"")+"(?:\\n)?)",Re=new RegExp(Le,"m"),Be=(t,e)=>{let s=1,o=e.indexOf(`
`);const n=t.index+t[0].length;for(;o!==-1;){if(o>=n)return s;s++,o=e.indexOf(`
`,o+1)}return s};let F={};const Me=t=>{const e=Re.exec(t);if(!e)return{attributes:{},body:t,bodyBegin:1};const s=e[e.length-1].replace(/^\s+|\s+$/g,""),o=t.replace(e[0],""),n=Be(e,t);try{const r=Z(s)||{};return F=r,{attributes:r,body:o,bodyBegin:n,frontmatter:s}}catch{return{attributes:F,body:o,bodyBegin:n,frontmatter:s}}},Oe=t=>{t=t||"";const e=t.split(/(\r?\n)/);return e[0]&&/= yaml =|---/.test(e[0])?Me(t):{attributes:{},body:t,bodyBegin:1}},Te={class:"flex space-x-2 px-3 py-3 rounded"},Ve=["onClick"],Pe={class:"w-5 h-5 relative flex items-center justify-center"},Fe=a("span",{class:"iconify text-lg","data-icon":"emojione:artist-palette"},null,-1),Ne=["value"],Ee=y({setup(t){const e=k(),s=h(1),o=h(L[0]),n=C(()=>s.value===-1?o.value:L[s.value]),r=i=>{s.value=i,o.value=n.value},l=i=>{s.value=-1,o.value=i.target.value};return B(()=>n.value,()=>{x("styles","themeColor",n.value),I(e.state.styles)}),(i,d)=>(u(),w(S,null,{icon:p(()=>[a("span",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm",style:M({backgroundColor:m(n)})},null,4)]),dropdown:p(()=>[a("ul",Te,[(u(!0),_(O,null,ee(m(L),(v,c)=>(u(),_("li",{key:`${c}-color`,class:"w-5 h-5 rounded-sm text-white flex items-center justify-center",style:M({backgroundColor:v}),onClick:g=>r(c)},null,12,Ve))),128)),a("li",Pe,[Fe,a("input",{class:"absolute left-0 w-full h-full opacity-0 cursor-pointer",type:"color",value:o.value,onInput:l},null,40,Ne)])])]),_:1}))}});const ze=a("span",{class:"iconify text-sm sm:text-base","data-icon":"icon-park-outline:margin-one"},null,-1),De={class:"w-7 sm:w-8 py-3"},qe=y({setup(t){const e=k(),s=C({get(){return e.state.styles.marginV},set(o){x("styles","marginV",o),I(e.state.styles)}});return(o,n)=>(u(),w(S,null,{icon:p(()=>[ze]),dropdown:p(()=>[a("div",De,[f(m(z),{modelValue:m(s),"onUpdate:modelValue":n[0]||(n[0]=r=>E(s)?s.value=r:null),orientation:"vertical",class:"mx-auto"},null,8,["modelValue"])])]),_:1}))}}),Ae=a("span",{class:"iconify text-sm sm:text-base","data-icon":"icon-park-outline:margin"},null,-1),je={class:"w-7 sm:w-8 py-3"},Ue=y({setup(t){const e=k(),s=C({get(){return e.state.styles.marginH},set(o){x("styles","marginH",o),I(e.state.styles)}});return(o,n)=>(u(),w(S,null,{icon:p(()=>[Ae]),dropdown:p(()=>[a("div",je,[f(m(z),{modelValue:m(s),"onUpdate:modelValue":n[0]||(n[0]=r=>E(s)?s.value=r:null),orientation:"vertical",class:"mx-auto"},null,8,["modelValue"])])]),_:1}))}});var We=(t,e)=>{const s=t.__vccOpts||t;for(const[o,n]of e)s[o]=n;return s};const T=t=>(se("data-v-145ef552"),t=t(),ne(),t),Ke=T(()=>a("span",{class:"iconify","data-icon":"ic:baseline-close"},null,-1)),Ge=[Ke],Je=T(()=>a("div",{class:"px-4 pt-3 pb-1 font-medium"},"Import a Markdown file",-1)),Qe={class:"pt-3 flex text-sm"},Xe={class:"bg-gray-200 flex-1 flex items-center px-4 rounded-b"},Ye={key:1,class:"flex w-full"},Ze=["value","onKeyup"],et=T(()=>a("span",{class:"iconify","data-icon":"line-md:confirm"},null,-1)),tt=[et],st=y({emits:["closeImport"],setup(t,{emit:e}){const s=h(0),o=h(""),n=()=>{o.value.trim()!==""&&q(o.value).then(l=>{x("data","mdContent",l),e("closeImport")})},r=l=>{ye(l,i=>{x("data","mdContent",i),e("closeImport")})};return(l,i)=>(u(),w(m(N),{class:"import-pane z-10 fixed h-40 w-full sm:w-96 left-0 right-0 top-0 bottom-0 flex flex-col bg-white border border-gray-400 rounded shadow",onTrigger:i[4]||(i[4]=d=>l.$emit("closeImport"))},{default:p(()=>[a("div",null,[a("button",{class:"absolute right-3 top-3.5 cursor-pointer",onClick:i[0]||(i[0]=d=>l.$emit("closeImport"))},Ge),Je,a("div",Qe,[a("button",{class:R(["px-2 py-0.5 border-l border-r border-t rounded-t-sm",[s.value===0&&"ml-4 bg-gray-200 border-gray-400",s.value!==0&&"ml-2 border-transparent"]]),onClick:i[1]||(i[1]=d=>s.value=0)}," Upload a file ",2),a("button",{class:R(["px-2 py-0.5 border-l border-r border-t rounded-t-sm",[s.value===1&&"bg-gray-200 border-gray-400",s.value!==1&&"border-transparent"]]),onClick:i[2]||(i[2]=d=>s.value=1)}," Paste file URL ",2)])]),a("div",Xe,[s.value===0?(u(),_("input",{key:0,class:"text-xs",accept:".md",type:"file",onChange:r},null,32)):$("",!0),s.value===1?(u(),_("div",Ye,[a("input",{class:"flex-1 h-7 mr-1.5 px-1 text-sm rounded-sm outline-none",value:o.value,onChange:i[3]||(i[3]=d=>o.value=d.target.value),onKeyup:te(n,["enter"])},null,40,Ze),a("button",{class:"flex items-center justify-center w-8 h-7 bg-blue-500 hover:bg-blue-600 text-white rounded-sm",onClick:n},tt)])):$("",!0)])]),_:1}))}});var nt=We(st,[["__scopeId","data-v-145ef552"]]);const ot=a("span",{class:"iconify text-sm sm:text-base","data-icon":"mdi:file-outline"},null,-1),rt={class:"w-32"},at=a("span",{class:"iconify text-sm sm:text-base","data-icon":"mdi:upload"},null,-1),lt=a("span",{class:"text-xs sm:text-sm"},"Import MD",-1),it=[at,lt],ct=a("span",{class:"iconify text-sm sm:text-base","data-icon":"mdi:progress-download"},null,-1),dt=a("span",{class:"text-xs sm:text-sm"},"Export PDF",-1),ut=[ct,dt],pt=y({setup(t){const e=()=>{window.print()},s=h(!1),o=n=>{s.value=typeof n=="boolean"?n:!s.value};return(n,r)=>(u(),_(O,null,[f(S,{text:"File",styles:"bg-blue-500 text-white","active-styles":"bg-blue-600 text-white"},{icon:p(()=>[ot]),dropdown:p(()=>[a("ul",rt,[a("li",{class:"flex items-center space-x-0.5 sm:space-x-1.5 px-3 h-9 cursor-pointer bg-transparent hover:bg-gray-100 rounded-t",onClick:r[0]||(r[0]=l=>o(!0))},it),a("li",{class:"flex items-center space-x-0.5 sm:space-x-1.5 px-3 h-9 cursor-pointer bg-transparent hover:bg-gray-100 rounded-b",onClick:e},ut)])]),_:1}),s.value?(u(),w(nt,{key:0,onCloseImport:r[1]||(r[1]=l=>o(!1))})):$("",!0)],64))}}),mt={class:"header relative border-b flex justify-between pl-4 pr-1"},ft=a("div",{class:"flex items-center"},[a("h1",{class:"font-bold text-md sm:text-lg"},"Oh, Resume!")],-1),vt={class:"space-x-1.5 flex items-center text-gray-600"},ht=a("a",{class:"flex items-center justify-center space-x-1 h-7 w-7 sm:h-8 sm:w-8 text-white rounded bg-gray-500 hover:bg-gray-600",href:"http://github.com/Renovamen/oh-resume",target:"_blank",rel:"nofollow noopener"},[a("span",{class:"iconify text-sm sm:text-lg","data-icon":"tabler:brand-github"})],-1),gt=y({setup(t){return(e,s)=>(u(),_("header",mt,[ft,a("div",vt,[f(Ee),f(qe),f(Ue),f(pt),ht])]))}}),_t=["innerHTML"],yt=y({setup(t){const e=k(),s=h();let o;oe(()=>{q("/example.md").then(b=>{x("data","mdContent",b),o=re.create(s.value,{value:e.state.data.mdContent,language:"markdown",wordWrap:"on",fontSize:13,automaticLayout:!0}),o.onDidChangeModelContent(()=>{x("data","mdContent",o.getModel().getValue())})}),d()}),ae(()=>{o==null||o.dispose()});const n=C(()=>ke(e.state.data.mdContent));let r=!1;B(()=>n.value,()=>{ie(()=>{r?A(e.state.styles):(I(e.state.styles),r=!0),g()})});const{width:l}=le(),i=h(!1),d=()=>{l.value<=810?i.value=!0:i.value=!1};B(()=>l.value,()=>{d(),g()});const v=h(1),c=h(0),g=()=>{const H=document.querySelector(".preview-pane").clientWidth,W=document.querySelector(".preview-container").clientHeight;H>=804?v.value=1:v.value=(l.value<=810?l.value:H)/804,c.value=-(1-v.value)*W};return(b,H)=>(u(),_(O,null,[f(gt),f(m(ce),{class:"resume-main default-theme",horizontal:i.value,onResize:g},{default:p(()=>[f(m(P),{class:"editor"},{default:p(()=>[a("div",{ref_key:"editorRef",ref:s,class:"h-full"},null,512)]),_:1}),f(m(P),{class:"preview-pane","min-size":"30"},{default:p(()=>[a("div",{class:"preview-container",style:M({transform:`scale(${v.value})`,marginBottom:`${c.value}px`})},[a("div",{class:"preview",innerHTML:m(n)},null,8,_t)],4)]),_:1})]),_:1},8,["horizontal"])],64))}});const xt=de(yt);xt.use(D).mount("#app");
