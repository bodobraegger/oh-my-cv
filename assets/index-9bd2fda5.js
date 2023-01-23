import{r as k,n as b,t as w,v as E,P as v,x as N,y as f,M as V,j as $,l as R,z as _,A as S,B as I,w as B,p as C,D,q as O}from"./toast-60afe6cb.js";import{v as e,u as d,_ as m,e as q}from"./app-0822ea22.js";const F={"text-center":""},A={"text-xs":"","text-light-c":"","mt-1.5":""},L={"text-xs":"","text-light-c":"","mt-0.5":""},P=e.defineComponent({__name:"ResumeInfo",props:{resume:{type:null,required:!0}},emits:["update"],setup(t,{emit:o}){const s=t,r=async l=>{await k(s.resume.id,l),o("update")},{t:n}=d(),c=l=>new Date(parseInt(l)).toISOString().substring(0,19).replace("T"," ").replaceAll("-","/"),u=c(s.resume.id),a=c(s.resume.update);return(l,p)=>{const i=b;return e.openBlock(),e.createElementBlock("div",F,[e.createVNode(i,{class:"w-53 mx-auto",text:t.resume.name,"on-entered":r},null,8,["text"]),e.createElementVNode("div",A,e.toDisplayString(e.unref(n)("resumes.updated"))+e.toDisplayString(e.unref(a)),1),e.createElementVNode("div",L,e.toDisplayString(e.unref(n)("resumes.created"))+e.toDisplayString(e.unref(u)),1)])}}}),M=m(P,[["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/ResumeInfo.vue"]]),y=t=>(e.pushScopeId("data-v-2320bd0a"),t=t(),e.popScopeId(),t),T={class:"resume-options absolute right-3 top-3 space-y-2"},U=y(()=>e.createElementVNode("span",{class:"iconify","data-icon":"ion:duplicate"},null,-1)),z=[U],j=y(()=>e.createElementVNode("span",{class:"iconify","data-icon":"material-symbols:delete-outline-rounded"},null,-1)),H=[j],X=e.defineComponent({__name:"ResumeOptions",props:{resume:{type:null,required:!0}},emits:["update"],setup(t,{emit:o}){const s=t,r=async()=>{await w(s.resume.id),o("update")},n=async()=>{await E(s.resume.id),o("update")};return(c,u)=>(e.openBlock(),e.createElementBlock("div",T,[e.createElementVNode("button",{onClick:r},z),e.createElementVNode("button",{onClick:n},H)]))}});const G=m(X,[["__scopeId","data-v-2320bd0a"],["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/ResumeOptions.vue"]]),J={"w-56":"","h-80":""},K=e.defineComponent({__name:"ResumeItem",props:{resume:{type:null,required:!0}},emits:["update"],setup(t,{emit:o}){const s=t,{locale:r}=d(),n=v[s.resume.styles.paper].w,c=v[s.resume.styles.paper].h;return N(s.resume.styles,s.resume.id),(u,a)=>{const l=$,p=e.resolveComponent("router-link"),i=G,x=M;return e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",J,[e.createElementVNode("div",{class:"resume-card relative block cursor-pointer mx-auto overflow-hidden rounded-md border border-c duration-150 hover:-translate-y-3 hover:drop-shadow-xl",style:e.normalizeStyle({width:`${e.unref(n)}px`,height:`${e.unref(c)}px`})},[e.createVNode(p,{to:{path:e.unref(f)("edit",e.unref(r)),query:{id:s.resume.id}}},{default:e.withCtx(()=>[e.createVNode(l,{id:t.resume.id,content:t.resume.content,styles:t.resume.styles,style:e.normalizeStyle({transform:`scale(${1/e.unref(V)})`}),class:"origin-top-left"},null,8,["id","content","styles","style"])]),_:1},8,["to"]),e.createVNode(i,{resume:t.resume,onUpdate:a[0]||(a[0]=g=>o("update"))},null,8,["resume"])],4)]),e.createVNode(x,{resume:t.resume,onUpdate:a[1]||(a[1]=g=>o("update"))},null,8,["resume"])])}}});const Q=m(K,[["__scopeId","data-v-33941668"],["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/ResumeItem.vue"]]),h=t=>(e.pushScopeId("data-v-6aeed7b6"),t=t(),e.popScopeId(),t),W={class:"file-options hstack space-x-2"},Y=h(()=>e.createElementVNode("span",{class:"iconify","data-icon":"material-symbols:note-add-outline-rounded"},null,-1)),Z=h(()=>e.createElementVNode("span",{class:"iconify","data-icon":"ic:baseline-save-as"},null,-1)),ee=h(()=>e.createElementVNode("span",{class:"iconify","data-icon":"ic:round-upload-file"},null,-1)),te=e.defineComponent({__name:"FileOptions",emits:["update"],setup(t){const o=q(),{t:s}=d(),{locale:r}=d(),n=async()=>{const c=await I();o.push({path:f("edit",r.value),query:{id:c}})};return R("shift+ctrl+s",_),(c,u)=>(e.openBlock(),e.createElementBlock("div",W,[e.createElementVNode("button",{class:"text-white bg-blue-500 hover:bg-blue-600 hover:dark:bg-blue-400",onClick:n},[Y,e.createElementVNode("span",null,e.toDisplayString(e.unref(s)("resumes.new")),1)]),e.createElementVNode("button",{class:"border border-dark-c hover:bg-darker-c",onClick:u[0]||(u[0]=(...a)=>e.unref(_)&&e.unref(_)(...a))},[Z,e.createElementVNode("span",null,e.toDisplayString(e.unref(s)("resumes.saveas")),1)]),e.createElementVNode("button",{class:"border border-dark-c hover:bg-darker-c",onClick:u[1]||(u[1]=()=>e.unref(S)(()=>c.$emit("update")))},[ee,e.createElementVNode("span",null,e.toDisplayString(e.unref(s)("resumes.import")),1)])]))}});const se=m(te,[["__scopeId","data-v-6aeed7b6"],["__file","/home/runner/work/oh-cv/oh-cv/site/src/components/resumes/FileOptions.vue"]]),ne={class:"resumes-page"},oe={class:"max-w-306 mx-auto px-5 py-16 text-dark-c"},re={class:"space-y-2 md:hstack md:justify-between"},ce={"font-bold":"","text-2xl":"","sm:text-3xl":""},ae={class:"flex flex-wrap gap-x-4 gap-y-8 mt-8"},ue=e.defineComponent({__name:"index",props:{locale:{type:[Array,String],required:!0}},setup(t){const o=t,{t:s}=d(),r=e.ref(),n=async()=>{r.value=await D()};return e.onMounted(n),B(o),C(),(c,u)=>{const a=O,l=se,p=Q;return e.openBlock(),e.createElementBlock("div",ne,[e.createVNode(a),e.createElementVNode("div",oe,[e.createElementVNode("div",re,[e.createElementVNode("h1",ce,e.toDisplayString(e.unref(s)("resumes.my_resume")),1),e.createVNode(l,{onUpdate:n})]),e.createElementVNode("div",ae,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),i=>(e.openBlock(),e.createBlock(p,{key:i.id,class:"resume-item",resume:i,onUpdate:n},null,8,["resume"]))),128))])])])}}}),de=m(ue,[["__file","/home/runner/work/oh-cv/oh-cv/site/src/pages/[...locale]/index.vue"]]);export{de as default};
