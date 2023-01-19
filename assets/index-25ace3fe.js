import{r as g,n as k,t as b,v as w,P as f,x as E,y as v,M as N,j as V,l as $,z as _,A as R,B as I,w as S,p as B,D as C,q as D}from"./toast-7be1d575.js";import{v as e,u as i,_ as d,e as O}from"./app-3c196308.js";const q={"text-center":""},F={"text-xs":"","text-light-c":"","mt-1.5":""},L=e.defineComponent({__name:"ResumeInfo",props:{resume:{type:null,required:!0}},setup(t){const s=t,{t:n}=i(),o=e.ref(s.resume.name),r=new Date(parseInt(s.resume.id)).toLocaleString();return(a,c)=>{const u=k;return e.openBlock(),e.createElementBlock("div",q,[e.createVNode(u,{class:"w-50 mx-auto",text:e.unref(o),"on-entered":()=>e.unref(g)(t.resume.id,e.unref(o).trim()),onChange:c[0]||(c[0]=l=>o.value=l)},null,8,["text","on-entered"]),e.createElementVNode("div",F,e.toDisplayString(e.unref(n)("resumes.created"))+e.toDisplayString(e.unref(r)),1)])}}}),P=d(L,[["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/ResumeInfo.vue"]]),y=t=>(e.pushScopeId("data-v-2320bd0a"),t=t(),e.popScopeId(),t),A={class:"resume-options absolute right-3 top-3 space-y-2"},M=y(()=>e.createElementVNode("span",{class:"iconify","data-icon":"ion:duplicate"},null,-1)),z=[M],T=y(()=>e.createElementVNode("span",{class:"iconify","data-icon":"material-symbols:delete-outline-rounded"},null,-1)),U=[T],j=e.defineComponent({__name:"ResumeOptions",props:{resume:{type:null,required:!0}},emits:["update"],setup(t,{emit:s}){const n=t,o=async()=>{await b(n.resume.id),s("update")},r=async()=>{await w(n.resume.id),s("update")};return(a,c)=>(e.openBlock(),e.createElementBlock("div",A,[e.createElementVNode("button",{onClick:o},z),e.createElementVNode("button",{onClick:r},U)]))}});const H=d(j,[["__scopeId","data-v-2320bd0a"],["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/ResumeOptions.vue"]]),X={"w-56":"","h-80":""},G=e.defineComponent({__name:"ResumeItem",props:{resume:{type:null,required:!0}},emits:["update"],setup(t,{emit:s}){const n=t,{locale:o}=i(),r=f[n.resume.styles.paper].w,a=f[n.resume.styles.paper].h;return E(n.resume.styles,n.resume.id),(c,u)=>{const l=V,p=e.resolveComponent("router-link"),m=H,x=P;return e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",X,[e.createElementVNode("div",{class:"resume-card relative block cursor-pointer mx-auto overflow-hidden rounded border border-c duration-150 hover:-translate-y-3 hover:drop-shadow-xl",style:e.normalizeStyle({width:`${e.unref(r)}px`,height:`${e.unref(a)}px`})},[e.createVNode(p,{to:{path:e.unref(v)("edit",e.unref(o)),query:{id:n.resume.id}}},{default:e.withCtx(()=>[e.createVNode(l,{id:t.resume.id,content:t.resume.content,styles:t.resume.styles,style:e.normalizeStyle({transform:`scale(${1/e.unref(N)})`}),class:"origin-top-left"},null,8,["id","content","styles","style"])]),_:1},8,["to"]),e.createVNode(m,{resume:t.resume,onUpdate:u[0]||(u[0]=ce=>s("update"))},null,8,["resume"])],4)]),e.createVNode(x,{resume:t.resume},null,8,["resume"])])}}});const J=d(G,[["__scopeId","data-v-33941668"],["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/ResumeItem.vue"]]),h=t=>(e.pushScopeId("data-v-6aeed7b6"),t=t(),e.popScopeId(),t),K={class:"file-options hstack space-x-2"},Q=h(()=>e.createElementVNode("span",{class:"iconify","data-icon":"material-symbols:note-add-outline-rounded"},null,-1)),W=h(()=>e.createElementVNode("span",{class:"iconify","data-icon":"ic:baseline-save-as"},null,-1)),Y=h(()=>e.createElementVNode("span",{class:"iconify","data-icon":"ic:round-upload-file"},null,-1)),Z=e.defineComponent({__name:"FileOptions",emits:["update"],setup(t){const s=O(),{t:n}=i(),{locale:o}=i(),r=async()=>{const a=await I();s.push({path:v("edit",o.value),query:{id:a}})};return $("shift+ctrl+s",_),(a,c)=>(e.openBlock(),e.createElementBlock("div",K,[e.createElementVNode("button",{class:"text-white bg-blue-500 hover:bg-blue-600 hover:dark:bg-blue-400",onClick:r},[Q,e.createElementVNode("span",null,e.toDisplayString(e.unref(n)("resumes.new")),1)]),e.createElementVNode("button",{class:"border border-dark-c hover:bg-hover-c",onClick:c[0]||(c[0]=(...u)=>e.unref(_)&&e.unref(_)(...u))},[W,e.createElementVNode("span",null,e.toDisplayString(e.unref(n)("resumes.saveas")),1)]),e.createElementVNode("button",{class:"border border-dark-c hover:bg-hover-c",onClick:c[1]||(c[1]=()=>e.unref(R)(()=>a.$emit("update")))},[Y,e.createElementVNode("span",null,e.toDisplayString(e.unref(n)("resumes.import")),1)])]))}});const ee=d(Z,[["__scopeId","data-v-6aeed7b6"],["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/FileOptions.vue"]]),te={class:"max-w-306 mx-auto px-5 py-16 text-dark-c"},ne={class:"space-y-2 md:hstack md:justify-between"},oe={"font-bold":"","text-3xl":""},se={class:"flex flex-wrap gap-x-4 gap-y-8 mt-8"},re=e.defineComponent({__name:"index",props:{locale:{type:[Array,String],required:!0}},setup(t){const s=t,{t:n}=i(),o=e.ref(),r=async()=>{o.value=await C()};return e.onMounted(r),S(s),B(),(a,c)=>{const u=D,l=ee,p=J;return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(u),e.createElementVNode("div",te,[e.createElementVNode("div",ne,[e.createElementVNode("h1",oe,e.toDisplayString(e.unref(n)("resumes.my_resume")),1),e.createVNode(l,{onUpdate:r})]),e.createElementVNode("div",se,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o),m=>(e.openBlock(),e.createBlock(p,{key:m.id,class:"resume-item",resume:m,onUpdate:r},null,8,["resume"]))),128))])])],64)}}}),le=d(re,[["__file","/home/runner/work/oh-cv/oh-cv/site/src/pages/[...locale]/index.vue"]]);export{le as default};
