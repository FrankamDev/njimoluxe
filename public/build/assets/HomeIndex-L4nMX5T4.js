import{c as b,r as f,j as t,H as v}from"./app-Ch-1MhH4.js";import{m as N}from"./proxy-DosT0Fqv.js";import{c as y}from"./createLucideIcon-BSymFbuZ.js";import{X as E}from"./x-BVi4bPuf.js";import{A as M}from"./NavBar-BuMuTvOq.js";import D from"./Footer-DaJ1VD9B.js";import S from"./HomeCTA-BarEr617.js";import k from"./HomeHero-BmX0-D8J.js";import C from"./HomeRealisations-BTBjgEuN.js";import H from"./HomeServices-CG9XOGdw.js";/* empty css            */import"./Icons-DfYJzyQg.js";const _=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],R=y("MessageCircle",_);const z=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],A=y("Send",z);function F(){const e=b.c(21),[s,g]=f.useState(!1),[n,j]=f.useState(""),h=f.useRef(null);let c;e[0]!==n?(c=()=>{if(!n.trim())return;const w=`https://wa.me/+237695748384?text=${encodeURIComponent(n.trim())}`;window.open(w,"_blank","noopener,noreferrer"),j(""),g(!1)},e[0]=n,e[1]=c):c=e[1];const d=c;let m,x;e[2]!==s?(m=()=>{s&&h.current&&h.current.focus()},x=[s],e[2]=s,e[3]=m,e[4]=x):(m=e[3],x=e[4]),f.useEffect(m,x);let i;e[5]!==s?(i=()=>g(!s),e[5]=s,e[6]=i):i=e[6];let r;e[7]!==s?(r=s?t.jsx(E,{size:28}):t.jsx(R,{size:28,strokeWidth:2.5}),e[7]=s,e[8]=r):r=e[8];let o;e[9]!==i||e[10]!==r?(o=t.jsx("button",{onClick:i,"aria-label":"Ouvrir le chat WhatsApp",className:`
          fixed bottom-6 left-6 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] hover:bg-[#20bd5a]
          text-white shadow-xl
          transition-all duration-300
          hover:scale-110 active:scale-95
          ring-4 ring-[#25D366]/30 hover:ring-[#25D366]/50
        `,children:r}),e[9]=i,e[10]=r,e[11]=o):o=e[11];let a;e[12]!==d||e[13]!==s||e[14]!==n?(a=s&&t.jsxs(N.div,{initial:{opacity:0,scale:.85,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85,y:20},transition:{duration:.25,ease:"easeOut"},className:`
              fixed bottom-24 left-6 z-50
              w-80 sm:w-96
              bg-white rounded-2xl shadow-2xl overflow-hidden
              border border-gray-200
            `,children:[t.jsxs("div",{className:"bg-[#075E54] text-white px-5 py-4 flex items-center gap-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold",children:"N"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-medium",children:"NJIMOLUXE"}),t.jsx("p",{className:"text-xs opacity-80",children:"En ligne"})]})]}),t.jsx("div",{className:"bg-[#E5DDD5] p-4 min-h-[180px] max-h-[400px] overflow-y-auto flex flex-col",children:t.jsxs("div",{className:"bg-white rounded-tl-none rounded-2xl rounded-br-2xl p-3 mb-4 max-w-[80%] self-start shadow-sm",children:[t.jsx("p",{className:"text-sm text-gray-800",children:"Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?"}),t.jsx("p",{className:"text-xs text-gray-500 mt-1 text-right",children:new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]})}),t.jsxs("div",{className:"bg-[#F0F0F0] px-4 py-3 flex items-center gap-3",children:[t.jsx("input",{ref:h,type:"text",value:n,onChange:p=>j(p.target.value),onKeyDown:p=>p.key==="Enter"&&d(),placeholder:"Votre message...",className:`
                  flex-1 px-4 py-3 rounded-full bg-white border border-gray-300
                  focus:outline-none focus:border-green-500
                  text-gray-800 placeholder-gray-500 text-sm
                `}),t.jsx("button",{onClick:d,disabled:!n.trim(),className:`
                  p-3 rounded-full
                  ${n.trim()?"bg-[#25D366] text-white":"bg-gray-300 text-gray-500"}
                  transition-colors
                `,children:t.jsx(A,{size:20})})]})]}),e[12]=d,e[13]=s,e[14]=n,e[15]=a):a=e[15];let l;e[16]!==a?(l=t.jsx(M,{children:a}),e[16]=a,e[17]=l):l=e[17];let u;return e[18]!==o||e[19]!==l?(u=t.jsxs(t.Fragment,{children:[o,l]}),e[18]=o,e[19]=l,e[20]=u):u=e[20],u}function P(){const e=b.c(1);let s;return e[0]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsxs("div",{children:[t.jsx(v,{title:"Njimoluxe - Menuiserie d'Excellence à Yaoundé"}),t.jsx("meta",{name:"description",content:"Njimoluxe : Spécialiste en menuiserie sur mesure à Yaoundé. Meubles, cuisines, portes, escaliers en bois noble. Qualité artisanale et finitions impeccables."}),t.jsx(k,{}),t.jsx(H,{}),t.jsx(C,{}),t.jsx(S,{}),t.jsx(F,{}),t.jsx(D,{})]}),e[0]=s):s=e[0],s}export{P as default};
