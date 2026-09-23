import{a as L,b as M,d as I,r as N,j as e,L as f,q as k,f as T}from"./index-Bn5THU1X.js";import{u as z}from"./useQuery-BEhgIxuF.js";import{u as q}from"./useMutation-CPksxmZ6.js";import{g as O}from"./countries-DOninoG6.js";import{e as U}from"./illustration-8_1784762965573-C2eE_S1I.js";import{c as B}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as J}from"./auth-chargepoint-combined-0mIqx7uW.js";const H="/assets/chargepoint-empty-products-C4-_dnBZ.png",K="/assets/images_(67)_1787404892163-DX_Ouu1y.jpeg",X="/assets/maquininha-ton-e-boa_(1)_1787404928174-CM1vufyJ.webp",Y="/assets/images_(59)_1787404956774-CLzfYfDq.jpeg",Q="/assets/images_(58)_1787404956874-BVvpZYFD.jpeg",V="/assets/images_(69)_1787404956897-B4hFbTd3.jpeg",G="/assets/images_(67)_1787404892163-DX_Ouu1y.jpeg",Z="/assets/images_(68)_1787404956953-BuLYmDEH.jpeg",a=[K,X,Y,Q,V,G,Z];function ne(){const{user:d,refreshUser:P}=L(),{toast:m}=M(),C=I(),F=new URLSearchParams(C).get("tab")==="my"?"my":"our",[i,b]=N.useState(F),[p,c]=N.useState(null),{data:R,isLoading:S}=z({queryKey:["/api/products"],staleTime:0}),{data:A,isLoading:_}=z({queryKey:["/api/user/products"],staleTime:0}),l=q({mutationFn:async t=>{const r=await T("POST",`/api/products/${t}/purchase`,{});if(!r.ok){const s=await r.json();throw new Error(s.message||"Erreur")}return r.json()},onSuccess:()=>{k.invalidateQueries({queryKey:["/api/products"]}),k.invalidateQueries({queryKey:["/api/user/products"]}),P(),c(null),m({title:"Produit acheté !",description:"Vous commencerez à recevoir des gains demain."})},onError:t=>{c(null),m({title:"Erreur",description:t.message,variant:"destructive"})}});if(!d)return null;const y=O(d.country),o=y?.currency==="FCFA"?"XOF":y?.currency||"XOF",j=R?.filter(t=>!t.isFree)||[],u=A||[],n=u.filter(t=>t.status==="active").length,w=Math.round(Number(d.totalEarnings||0)),v=t=>`${t.toLocaleString("fr-FR")} ${o}`,$=t=>{if(!t)return"-";const r=new Date(t),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=r.getDate(),h=s[r.getMonth()],g=r.getFullYear(),D=String(r.getHours()).padStart(2,"0"),E=String(r.getMinutes()).padStart(2,"0");return`${x} ${h} ${g}, ${D}:${E}`};return e.jsxs("main",{className:"products-reference min-h-full bg-[#f1fff4] pb-24",children:[e.jsx("style",{children:`
        .products-reference { color: #151515; font-family: Inter, Arial, sans-serif; }
        .products-reference .products-screen { width: 100%; max-width: 500px; margin: 0 auto; overflow: hidden; }
         .products-reference .products-hero { position: relative; height: min(70.31vw, 360px); min-height: 270px; overflow: hidden; background: #3fcb2d; }
         .products-reference .products-hero img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; pointer-events: none; }
         .products-reference .stat-panel { position: absolute; top: 58%; z-index: 1; display: flex; height: 38%; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 0; border-radius: 24px; background: #4bcf37; color: #fff; text-align: center; pointer-events: none; }
         .products-reference .stat-panel.our { left: 4%; width: 45%; }
         .products-reference .stat-panel.my { right: 4%; width: 45%; }
         .products-reference .stat-value { display: block; max-width: 100%; overflow: hidden; padding: 0 8px; font-size: clamp(20px, 5vw, 30px); font-weight: 500; line-height: 1; text-overflow: ellipsis; white-space: nowrap; }
         .products-reference .stat-label { display: block; font-size: clamp(14px, 3.5vw, 20px); font-weight: 500; line-height: 1; }
         .products-reference .stat-toggle { position: absolute; top: 58%; z-index: 2; height: 38%; background: transparent; }
         .products-reference .stat-toggle.our { left: 4%; width: 45%; }
         .products-reference .stat-toggle.my { right: 4%; width: 45%; }
         .products-reference .product-list { padding: 0 12px 20px; background: white; }
         .products-reference .product-card { position: relative; height: 265px; margin-bottom: 0; overflow: hidden; border: 0; border-bottom: 1px solid #eeeeee; border-radius: 0; background: white; box-shadow: none; }
         .products-reference .product-picture { position: absolute; top: 12px; right: 7px; left: auto; width: 154px; height: 154px; overflow: hidden; border: 2px solid #7fc9a2; border-radius: 11px; background: #fff; }
         .products-reference .product-picture img { width: 100%; height: 100%; object-fit: cover; }
         .products-reference .product-details { position: absolute; top: 17px; left: 31px; right: 181px; overflow: hidden; }
         .products-reference .product-name { overflow: hidden; color: #42bd45; font-size: 23px; font-weight: 500; line-height: 1.15; text-overflow: ellipsis; white-space: nowrap; }
         .products-reference .product-price { margin-top: 22px; color: #171717; font-size: 17px; font-weight: 400; }
         .products-reference .product-line { margin-top: 12px; color: #171717; font-size: 16px; line-height: 1.15; white-space: normal; overflow-wrap: anywhere; }
         .products-reference .product-line strong { margin-left: 8px; color: #171717; font-weight: 400; }
         .products-reference .buy { position: absolute; right: 7px; bottom: 25px; display: grid; width: 154px; height: 61px; place-items: center; border-radius: 14px; background: linear-gradient(180deg, #43d338 0%, #19b948 100%); color: white; font-size: 18px; font-weight: 400; line-height: 1.1; text-align: center; }
         .products-reference .my-card { height: 265px; padding-bottom: 0; }
         .products-reference .my-card .product-details { position: absolute; top: 17px; left: 31px; right: 181px; margin-left: 0; padding-top: 0; padding-right: 0; }
         .products-reference .my-card .product-picture { top: 12px; }
         .products-reference .my-card .product-line { margin-top: 12px; }
        .products-reference .empty { display: flex; min-height: 260px; flex-direction: column; align-items: center; justify-content: center; border-radius: 9px; background: white; color: #777; }
        .products-reference .empty img { width: 150px; height: 150px; object-fit: contain; }
        @media (max-width: 360px) {
             .products-reference .stat-panel { gap: 7px; border-radius: 20px; }
            .products-reference .stat-value { font-size: 18px; }
            .products-reference .stat-label { font-size: 13px; }
           .products-reference .product-picture { right: 5px; width: 112px; height: 112px; }
           .products-reference .product-details, .products-reference .my-card .product-details { left: 18px; right: 126px; }
           .products-reference .product-name { font-size: 17px; }
           .products-reference .product-price { margin-top: 18px; font-size: 14px; }
           .products-reference .product-line { margin-top: 9px; font-size: 13px; }
           .products-reference .buy { right: 5px; width: 112px; height: 52px; font-size: 14px; }
        }
         .products-reference {
           min-height: 100dvh;
           background: #fff8f2;
           color: #111827;
         }
         .products-reference .products-screen {
           max-width: 512px;
           background: #fff8f2;
         }
         .products-reference .products-header {
           display: flex;
           min-height: 72px;
           align-items: center;
           justify-content: center;
           gap: 9px;
           padding: 12px 16px;
           border-bottom: 2px solid #111827;
           background: #fff8f2;
         }
         .products-reference .products-header img {
           width: 38px;
           height: 38px;
           border: 2px solid #111827;
           border-radius: 50%;
           background: #fff;
           object-fit: cover;
         }
         .products-reference .products-header strong {
           color: #111827;
           font-size: 20px;
           font-weight: 900;
         }
         .products-reference .products-hero {
           height: 238px;
           min-height: 0;
           border-bottom: 2px solid #111827;
           background: #111827;
         }
         .products-reference .products-hero::after {
           position: absolute;
           z-index: 0;
           inset: 0;
           background: linear-gradient(180deg, rgba(17,24,39,.05), rgba(17,24,39,.62));
           content: "";
         }
         .products-reference .products-hero img {
           position: relative;
           z-index: 0;
           object-position: center;
         }
         .products-reference .hero-copy {
           position: absolute;
           z-index: 3;
           top: 18px;
           right: 18px;
           left: 18px;
           color: #fff;
           text-align: center;
           text-shadow: 0 2px 4px rgba(0,0,0,.35);
         }
         .products-reference .hero-copy strong {
           display: block;
           font-size: 27px;
           font-weight: 900;
           line-height: 1;
         }
         .products-reference .hero-copy span {
           display: block;
           margin-top: 5px;
           font-size: 12px;
           font-weight: 700;
         }
         .products-reference .stat-panel {
           top: auto;
           bottom: 14px;
           height: 72px;
           border: 2px solid #111827;
           border-radius: 12px;
           background: #fff;
           color: #111827;
           box-shadow: 0 3px 0 #111827;
         }
         .products-reference .stat-panel.active {
           background: #ff7a14;
         }
         .products-reference .stat-panel.our,
         .products-reference .stat-toggle.our { left: 16px; width: calc(50% - 22px); }
         .products-reference .stat-panel.my,
         .products-reference .stat-toggle.my { right: 16px; width: calc(50% - 22px); }
         .products-reference .stat-toggle {
           top: auto;
           bottom: 14px;
           height: 72px;
         }
         .products-reference .stat-value {
           font-size: clamp(18px, 4.8vw, 25px);
           font-weight: 900;
         }
         .products-reference .stat-label {
           font-size: 12px;
           font-weight: 800;
         }
         .products-reference .product-list {
           padding: 18px 16px 28px;
           background: #fff8f2;
         }
         .products-reference .product-card {
           display: grid;
           min-height: 236px;
           grid-template-columns: minmax(0, 1fr) 124px;
           grid-template-rows: minmax(0, 1fr) 53px;
           gap: 12px;
           margin-bottom: 16px;
           padding: 14px;
           overflow: hidden;
           border: 2px solid #111827;
           border-radius: 14px;
           background: #fff;
           box-shadow: 0 4px 0 #111827;
         }
         .products-reference .product-picture {
           position: static;
           grid-column: 2;
           grid-row: 1;
           width: 100%;
           height: 116px;
           border: 2px solid #ff7a14;
           border-radius: 10px;
         }
         .products-reference .product-details,
         .products-reference .my-card .product-details {
           position: static;
           grid-column: 1;
           grid-row: 1 / span 2;
           min-width: 0;
           overflow: hidden;
         }
         .products-reference .product-name {
           color: #e85d00;
           font-size: 19px;
           font-weight: 900;
           white-space: normal;
         }
         .products-reference .product-price {
           margin-top: 12px;
           color: #111827;
           font-size: 16px;
           font-weight: 900;
         }
         .products-reference .product-line {
           margin-top: 8px;
           color: #4b5563;
           font-size: 13px;
         }
         .products-reference .product-line strong {
           display: block;
           margin: 2px 0 0;
           color: #111827;
           font-weight: 800;
         }
         .products-reference .buy {
           position: static;
           grid-column: 2;
           grid-row: 2;
           width: 100%;
           height: auto;
           border: 2px solid #111827;
           border-radius: 11px;
           background: #ff7a14;
           color: #111827;
           font-size: 13px;
           font-weight: 900;
           box-shadow: 0 3px 0 #111827;
         }
         .products-reference .my-card {
           min-height: 255px;
           grid-template-rows: 1fr;
         }
         .products-reference .my-card .product-picture { grid-row: 1; }
         .products-reference .empty {
           min-height: 280px;
           border: 2px solid #111827;
           border-radius: 14px;
           background: #fff;
         }
         .products-reference .empty img { width: 120px; height: 120px; }
         @media (max-width: 360px) {
           .products-reference .products-hero { height: 228px; }
           .products-reference .product-list { padding-right: 12px; padding-left: 12px; }
           .products-reference .product-card {
             grid-template-columns: minmax(0, 1fr) 104px;
             gap: 9px;
             padding: 11px;
           }
           .products-reference .product-picture { height: 100px; }
           .products-reference .product-name { font-size: 16px; }
           .products-reference .product-line { font-size: 12px; }
           .products-reference .buy { font-size: 11px; }
         }
      `}),e.jsxs("div",{className:"products-screen",children:[e.jsxs("header",{className:"products-header",children:[e.jsx("img",{src:B,alt:"ChargePoint"}),e.jsx("strong",{children:"Mes produits"})]}),e.jsxs("section",{className:"products-hero","aria-label":"Produits",children:[e.jsx("img",{src:J,alt:"Solutions de recharge ChargePoint"}),e.jsxs("div",{className:"hero-copy",children:[e.jsx("strong",{children:"ChargePoint"}),e.jsx("span",{children:"Gérez vos produits et vos revenus"})]}),e.jsxs("div",{className:`stat-panel our ${i==="our"?"active":""}`,"aria-label":`${n} produit${n===1?"":"s"} actif${n===1?"":"s"}`,children:[e.jsx("span",{className:"stat-value",children:n}),e.jsx("span",{className:"stat-label",children:"Catalogue"})]}),e.jsxs("div",{className:`stat-panel my ${i==="my"?"active":""}`,"aria-label":`Revenus : ${v(w)}`,children:[e.jsx("span",{className:"stat-value",children:v(w)}),e.jsx("span",{className:"stat-label",children:"Produits achetés"})]}),e.jsx("button",{className:"stat-toggle our",onClick:()=>b("our"),"data-testid":"tab-our-products","aria-label":"Mes produits disponibles"}),e.jsx("button",{className:"stat-toggle my",onClick:()=>b("my"),"data-testid":"tab-my-product","aria-label":"Mes revenus et produits achetés"})]}),e.jsxs("div",{className:"product-list",children:[i==="our"&&e.jsx("div",{children:S?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx(f,{className:"w-8 h-8 animate-spin text-[#FF7A14]"})}):j.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("img",{src:U,alt:"Vide"}),e.jsx("p",{children:"Aucun produit disponible"})]}):j.map((t,r)=>{const s=a[r%a.length];return e.jsxs("div",{className:"product-card","data-testid":`product-card-${t.id}`,children:[e.jsx("div",{className:"product-picture",children:e.jsx("img",{src:s,alt:t.name})}),e.jsxs("div",{className:"product-details",children:[e.jsx("p",{className:"product-name",children:t.name}),e.jsxs("p",{className:"product-price",children:[Number(t.price).toLocaleString("fr-FR")," ",o]}),e.jsxs("p",{className:"product-line",children:["Durée :",e.jsxs("strong",{children:[t.cycleDays,"jours"]})]}),e.jsxs("p",{className:"product-line",children:["Revenu quotidien :",e.jsxs("strong",{children:[Number(t.dailyEarnings).toLocaleString("fr-FR")," ",o]})]}),e.jsxs("p",{className:"product-line",children:["Revenu total :",e.jsxs("strong",{children:[Number(t.totalReturn).toLocaleString("fr-FR")," ",o]})]})]}),e.jsx("button",{onClick:()=>c(t),className:"buy","data-testid":`button-purchase-${t.id}`,children:e.jsxs("span",{children:["ACHETER",e.jsx("br",{}),"MAINTENANT"]})})]},t.id)})}),i==="my"&&e.jsx("div",{children:e.jsx("div",{children:_?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx(f,{className:"w-8 h-8 animate-spin text-[#FF7A14]"})}):u.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("img",{src:H,alt:"Aucun produit acheté"}),e.jsx("p",{children:"Aucun produit ChargePoint acheté"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Achetez des produits pour commencer à gagner"})]}):u.map((t,r)=>{const s=t.product?.cycleDays||60,x=t.daysRemaining||0,h=Math.max(0,s-x),g=parseFloat(t.totalEarned||"0");return e.jsxs("div",{className:"product-card my-card","data-testid":`my-product-card-${t.id}`,children:[e.jsx("div",{className:"product-picture",children:e.jsx("img",{src:a[r%a.length],alt:t.product?.name||"Produit"})}),e.jsxs("div",{className:"product-details",children:[e.jsx("p",{className:"product-name",children:t.product?.name||"Produit"}),e.jsxs("p",{className:"product-price",children:[Number(t.product?.price||0).toLocaleString("fr-FR")," ",o]}),e.jsxs("p",{className:"product-line",children:["Jours d'exécution :",e.jsxs("strong",{children:[h," / ",s]})]}),e.jsxs("p",{className:"product-line",children:["Revenu généré :",e.jsxs("strong",{children:[g.toLocaleString("fr-FR")," ",o]})]}),e.jsxs("p",{className:"product-line",children:["Revenu total :",e.jsxs("strong",{children:[Number(t.product?.totalReturn||0).toLocaleString("fr-FR")," ",o]})]}),e.jsxs("p",{className:"product-line",children:["Date :",e.jsx("strong",{children:$(t.purchasedAt)})]})]})]},t.id)})})})]})]}),p&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-8 bg-black/50",onClick:()=>c(null),children:e.jsxs("div",{className:"w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl bg-white",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"px-6 pt-6 pb-5 text-center",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 mb-3",children:"Conseil"}),e.jsx("p",{className:"text-gray-800 font-semibold text-base leading-snug",children:"Êtes-vous sûr de vouloir acheter ce produit ?"}),e.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:p.name})]}),e.jsx("div",{className:"h-px bg-gray-100"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>c(null),className:"flex-1 py-4 font-semibold text-base text-gray-500 active:bg-gray-50 transition-colors",style:{borderRight:"1px solid #f0f0f0"},"data-testid":"button-cancel-purchase",children:"Non"}),e.jsx("button",{onClick:()=>l.mutate(p.id),disabled:l.isPending,className:"flex-1 py-4 font-bold text-base text-white flex items-center justify-center gap-1.5 active:opacity-90 transition-opacity disabled:opacity-60",style:{background:"#FF7A14",color:"#111827",border:"2px solid #111827"},"data-testid":"button-confirm-purchase",children:l.isPending?e.jsx(f,{className:"w-4 h-4 animate-spin"}):"Oui"})]})]})})]})}export{ne as default};
