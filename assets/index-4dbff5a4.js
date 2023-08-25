import{w as m,s as _,a as p,b as u}from"./Header.vue_vue_type_script_setup_true_lang-56edb8d0.js";import{v as e,u as h}from"./app-859ae03f.js";const x={class:"landing-page"},f={class:"workspace"},g={class:"px-5 md:px-20 pt-40 h-fit max-w-240 lt-sm:pb-10 sm:absolute sm:left-0 sm:right-0 sm:top-0 sm:bottom-0 sm:m-auto"},k={"text-center":""},E=["innerHTML"],N={"my-10":"","text-light-c":"","sm:text-lg":""},V={class:"text-white bg-brand px-4 py-3 rounded-lg mx-auto outline outline-4 outline-transparent duration-200 hover:outline-rose-300/50"},w={class:"lt-sm:space-y-10 sm:w-130 sm:grid sm:grid-cols-2 lg:w-150 text-light-c mt-15 mx-auto"},v={"w-fit":"","sm:mx-auto":""},y={hstack:"","mb-3":"","space-x-1.5":""},B={key:0,class:"iconify text-xs","data-icon":"wpf:privacy"},b={key:1,class:"iconify text-xs","data-icon":"mdi:rocket-launch"},L={"text-c":""},H={"text-sm":"","pl-2":"","ml-4.5":"","list-disc":""},T=["innerHTML"],D=e.defineComponent({__name:"index",props:{lang:{}},setup(a){const c=a,{t,locale:l}=h();return m(c),(o,C)=>{const r=p,i=u,d=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",x,[e.createVNode(r),e.createElementVNode("div",f,[e.createElementVNode("div",g,[e.createElementVNode("div",k,[e.createElementVNode("h1",{text:"c 3xl sm:4xl",innerHTML:e.unref(t)("landing.hero")},null,8,E),e.createElementVNode("div",N,[e.createVNode(i),e.createTextVNode(" "+e.toDisplayString(e.unref(t)("landing.desc")),1)]),e.createVNode(d,{to:("switchPath"in o?o.switchPath:e.unref(_))("resumes",e.unref(l))},{default:e.withCtx(()=>[e.createElementVNode("span",V,e.toDisplayString(e.unref(t)("landing.start")),1)]),_:1},8,["to"])]),e.createElementVNode("div",w,[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList([0,1],n=>e.createElementVNode("div",{key:`feature-${n}`},[e.createElementVNode("div",v,[e.createElementVNode("div",y,[e.createElementVNode("span",{class:e.normalizeClass(["w-5 h-5 rounded-full text-white flex-center",[n?"bg-blue-400":"bg-brand"]])},[n?(e.openBlock(),e.createElementBlock("span",B)):(e.openBlock(),e.createElementBlock("span",b))],2),e.createElementVNode("h2",L,e.toDisplayString(e.unref(t)(`landing.feats[${n}].title`)),1)]),e.createElementVNode("ul",H,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t)(`landing.feats[${n}].items`).split("<br>"),s=>(e.openBlock(),e.createElementBlock("li",{key:s,innerHTML:s},null,8,T))),128))])])])),64))])])])])}}});export{D as default};
