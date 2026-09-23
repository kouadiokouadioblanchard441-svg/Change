import{c as Te,a as ht,b as gt,G as ft,r,j as e,e as v,L as f,f as j}from"./index-S7RaIYCE.js";import{u as D}from"./useQuery-BGcV3DkF.js";import{u as w}from"./useMutation-DVJs1-lT.js";import{c as bt}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as yt}from"./auth-chargepoint-combined-BcpHOCAm.js";import{C as b}from"./chevron-left-BBN9jHkN.js";import{P as G,E as P,I as jt}from"./phone-DOiokuWV.js";import{Z as Nt}from"./zap-C45mTRA2.js";import{R as Q}from"./refresh-cw-CwmvUpQE.js";const H=Te("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const vt=Te("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),wt="#FF7A14",Ct="#E85D00",p=`linear-gradient(112deg, ${wt} 0%, ${Ct} 100%)`;function _t(){const{user:u,refreshUser:B}=ht(),{toast:o}=gt(),L=ft(),de=r.useRef(null),[l,a]=r.useState("amount"),[c,qe]=r.useState(null),[St,kt]=r.useState(null),[i,y]=r.useState(""),[N,xe]=r.useState(""),[Y,pe]=r.useState(u?.phone||""),[C,ue]=r.useState(""),[Ue,me]=r.useState(""),[he,ge]=r.useState(""),[fe,be]=r.useState(""),[S,Re]=r.useState(u?.country||""),[Z,$e]=r.useState(""),[h,E]=r.useState(null),[T,q]=r.useState(null),[J,U]=r.useState(""),[Ve,X]=r.useState(""),[ee,te]=r.useState(""),[ye,We]=r.useState(""),[Pt,Ke]=r.useState(""),[_e,Ge]=r.useState(""),[je,F]=r.useState(""),[Ne,g]=r.useState(!1),[se,Qe]=r.useState(u?.country||""),[R,He]=r.useState(""),[A,ve]=r.useState(""),[M,$]=r.useState(null),[re,we]=r.useState(""),[ae,Ce]=r.useState(""),[Et,Se]=r.useState(""),[Be,Ye]=r.useState(""),[Ft,V]=r.useState(""),[ke,z]=r.useState(!1),m=N,{data:Pe=[]}=D({queryKey:["/api/countries"]}),d=Pe.find(t=>t.code===m&&t.isActive)?.currency||"FCFA",{data:x}=D({queryKey:["/api/settings"]}),ne=parseInt(x?.minDeposit||"3500");x?.sendavapayEnabled,x?.sendavapayChannelName;const Ze=x?.westpayEnabled==="true",W=x?.westpayChannelName||"WestPay",Ee=x?.westpayCountries||"",Je=Ze&&(!Ee||Ee.split(",").map(t=>t.trim()).includes(m)),Xe=x?.inpayEnabled==="true",et=x?.inpayChannelName||"InPay",tt=x?.inpayCountries||"",Fe=Xe&&tt.split(",").map(t=>t.trim().toUpperCase()).includes(m.toUpperCase()),st=x?.ashtechEnabled==="true",Ae=x?.ashtechChannelName||"AshtechPay",K=x?.ashtechCountries||"",rt=!K||K.split(",").map(t=>t.trim().toUpperCase()).includes(m.toUpperCase()),at=st&&rt,_=Pe.filter(t=>t.isActive),Me=K?K.split(",").map(t=>t.trim().toUpperCase()).filter(Boolean):null,{data:Mt=[],isLoading:zt}=D({queryKey:["/api/payment-numbers",m],queryFn:async()=>{const t=await fetch(`/api/payment-numbers?country=${m}`,{credentials:"include"});if(!t.ok)throw new Error("Erreur");return t.json()},enabled:!!m}),{data:nt,isLoading:it}=D({queryKey:["/api/sendavapay/operators",S],queryFn:async()=>{const t=await fetch(`/api/sendavapay/operators/${S}`,{credentials:"include"});if(!t.ok)throw new Error("Erreur");return t.json()},enabled:l==="sv-operator"&&!!S}),ze=(nt?.data||[]).filter(t=>t.status==="online"),{data:ot=[],isLoading:lt}=D({queryKey:["/api/ashtechpay/countries"],queryFn:async()=>{const t=await fetch("/api/ashtechpay/countries",{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs");return t.json()},enabled:l==="ashtech-operator"&&at}),Ie=ot.filter(t=>_.some(s=>s.code.toUpperCase()===t.code.toUpperCase())&&(!Me||Me.includes(t.code.toUpperCase()))),Oe=Ie.find(t=>t.code===se)?.operators||[];r.useEffect(()=>{if(l!=="sv-waiting"||!T||!Ne)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${T}/sendavapay-status`,{credentials:"include"})).json();F(n.status),n.status==="approved"?(clearInterval(t),g(!1),o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),B(),L.invalidateQueries({queryKey:["/api/deposits/history"]}),a("amount"),y(""),E(null),q(null),U(""),X(""),te(""),F("")):n.status==="rejected"&&(clearInterval(t),g(!1),o({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),a("sv-operator"))}catch{}},5e3);return()=>clearInterval(t)},[l,T,Ne]),r.useEffect(()=>{if(l!=="ashtech-waiting"||!M||!ke)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${M}/ashtechpay-status`,{credentials:"include"})).json();V(n.status),n.status==="approved"?(clearInterval(t),z(!1),o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),B(),L.invalidateQueries({queryKey:["/api/deposits/history"]}),a("amount"),y(""),$(null),V("")):n.status==="rejected"&&(clearInterval(t),z(!1),o({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),a("ashtech-operator"))}catch{}},5e3);return()=>clearInterval(t)},[l,M,ke]);const ct=t=>{const s=t.target.files?.[0];if(!s)return;if(s.size>5*1024*1024){o({title:"Fichier trop grand",description:"Maximum 5 Mo",variant:"destructive"});return}me(s.name);const n=new FileReader;n.onload=O=>ue(O.target?.result),n.readAsDataURL(s)},ie=w({mutationFn:async()=>{if(!c)throw new Error("Aucun numéro sélectionné");const t=await j("POST","/api/deposits",{amount:Number(i),accountName:u?.fullName||"",accountNumber:Y,paymentMethod:c.operatorName,country:m,paymentNumberId:c.id,channelName:c.paymentLink?`${c.operatorName} - Lien de paiement`:`${c.operatorName} - ${c.phone}`,screenshot:C||null,paymentMessage:he||null,reference:fe||null});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur")}return t.json()},onSuccess:()=>{o({title:"Demande envoyée !",description:"Votre dépôt est en attente de validation"}),L.invalidateQueries({queryKey:["/api/deposits/history"]}),B(),a("amount"),qe(null),y(""),pe(u?.phone||""),ue(""),me(""),ge(""),be("")},onError:t=>o({title:"Erreur",description:t.message,variant:"destructive"})}),[Ot,dt]=r.useState(null),[Dt,xt]=r.useState("");r.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("wp_status"),n=t.get("wp_depositId");s&&(xt(s),n&&dt(parseInt(n)),window.history.replaceState({},"","/deposit"),s==="success"&&(o({title:"Paiement en cours de confirmation",description:"Votre dépôt sera crédité dès confirmation WestPay."}),L.invalidateQueries({queryKey:["/api/deposits/history"]})))},[]);const I=w({mutationFn:async()=>{const t=await j("POST","/api/deposits",{amount:Number(i),accountName:u?.fullName||"",accountNumber:u?.phone||"",paymentMethod:"WestPay",country:m,useWestpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur WestPay")}return t.json()},onSuccess:t=>{t.westpayUrl&&(window.location.href=t.westpayUrl)},onError:t=>o({title:"Erreur WestPay",description:t.message,variant:"destructive"})}),De=w({mutationFn:async()=>{const t=await j("POST","/api/deposits",{amount:Number(i),accountName:u?.fullName||"",accountNumber:u?.phone||"",paymentMethod:"InPay",country:m,useInpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur InPay")}return t.json()},onSuccess:t=>{t.inpayUrl&&(window.location.href=t.inpayUrl)},onError:t=>o({title:`Erreur ${et}`,description:t.message,variant:"destructive"})}),k=w({mutationFn:async t=>{if(!A||!R.trim())throw new Error("Sélectionnez un opérateur et saisissez votre numéro");const s=await j("POST","/api/ashtechpay/collect",{amount:Number(i),country:se,operator:A,phone:R.trim(),depositId:M||void 0,otp:t||void 0});if(!s.ok){const n=await s.json();throw new Error(n.message||"Erreur AshtechPay")}return s.json()},onSuccess:t=>{$(t.depositId),Se(t.message||""),Ce(t.ussdCode||""),t.waveUrl?(Ye(t.waveUrl),a("ashtech-redirect")):t.requiresOtp?a("ashtech-otp"):(z(!0),V(t.status||"pending"),a("ashtech-waiting"))},onError:t=>{if(t.data?.requiresOtp){$(t.data.depositId||M),Ce(t.data.ussdCode||""),Se(t.message||"Composez le code indiqué puis saisissez le code OTP."),we(""),a("ashtech-otp");return}o({title:`Erreur ${Ae}`,description:t.message,variant:"destructive"})}}),oe=w({mutationFn:async()=>{if(!h)throw new Error("Sélectionnez un opérateur");const t=await j("POST","/api/sendavapay/create",{amount:Number(i),country:S,operatorId:h.id,operatorName:h.name,payerPhone:Z});if(!t.ok){const O=await t.json();throw new Error(O.message||"Erreur création paiement")}const s=await t.json();q(s.depositId),U(s.paymentToken);const n=await j("POST","/api/sendavapay/initiate",{paymentToken:s.paymentToken,payerCountry:S,operatorId:h.id,depositId:s.depositId,payerPhone:Z});if(!n.ok){const O=await n.json();throw new Error(O.message||"Erreur initiation paiement")}return n.json()},onSuccess:t=>{const s=h?.name?.toLowerCase().includes("wave");t.requiresRedirect&&t.redirectUrl&&s?(Ge(t.redirectUrl),a("sv-redirect")):t.requiresRedirect&&!s?(g(!0),a("sv-waiting")):t.requiresOtp&&t.otpToken?(X(t.otpToken),We(t.ussdCode||""),Ke(t.message||""),a("sv-otp")):t.success?(g(!0),a("sv-waiting")):o({title:"Erreur",description:t.error||t.message||"Erreur paiement",variant:"destructive"})},onError:t=>o({title:"Erreur",description:t.message,variant:"destructive"})}),le=w({mutationFn:async()=>{if(!J)throw new Error("Token de paiement manquant");const t=await j("POST","/api/sendavapay/retry",{paymentToken:J,depositId:T});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur retry")}return t.json()},onSuccess:()=>{te(""),X(""),F(""),g(!1),a("sv-operator"),o({title:"Prêt à réessayer",description:"Sélectionnez un opérateur et relancez le paiement."})},onError:t=>o({title:"Erreur retry",description:t.message,variant:"destructive"})}),ce=w({mutationFn:async()=>{const t=await j("POST","/api/sendavapay/submit-otp",{otpToken:Ve,otp:ee});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur OTP")}return t.json()},onSuccess:()=>{g(!0),a("sv-waiting")},onError:t=>o({title:"Erreur OTP",description:t.message,variant:"destructive"})}),pt=()=>{if(!i||Number(i)<ne){o({title:"Montant invalide",description:`Le minimum est de ${ne.toLocaleString()} ${d}`,variant:"destructive"});return}if(Fe&&(!Number.isInteger(Number(i))||Number(i)%5!==0)){o({title:"Montant InPay invalide",description:"Utilisez un montant entier multiple de 5 : 300, 305, 310…",variant:"destructive"});return}Le()},Le=()=>{if(!N){o({title:"Pays requis",description:"Sélectionnez le pays du paiement.",variant:"destructive"});return}if(Fe){De.mutate();return}if(Je){I.mutate();return}window.location.href=`/robotpay?amount=${encodeURIComponent(Number(i))}&country=${encodeURIComponent(N)}`},ut=t=>{const s=t.toLowerCase();return s.includes("tmoney")||s.includes("t-money")?"/operators/tmoney.png":s.includes("moov")?"/operators/moov.jpg":s.includes("orange")?"/operators/orange.png":s.includes("mtn")?"/operators/mtn.png":s.includes("airtel")?"/operators/airtel.png":s.includes("wave")?"/operators/wave.png":null},mt=()=>{if(!Y.trim()){o({title:"Numéro requis",description:"Entrez le numéro depuis lequel vous avez payé",variant:"destructive"});return}if(!C){o({title:"Capture requise",description:"Veuillez joindre la capture d'écran du paiement",variant:"destructive"});return}ie.mutate()};return u?l==="amount"?e.jsxs("main",{className:"recharge-reference min-h-screen bg-[#f7f3f0]",children:[e.jsx("style",{children:`
        .recharge-reference {
          min-height: 100dvh;
          background: #fff8f2;
          color: #111827;
          font-family: Inter, Arial, sans-serif;
        }
        .recharge-reference .recharge-screen {
          width: 100%;
          max-width: 512px;
          min-height: 100dvh;
          margin: 0 auto;
          overflow: hidden;
          background: #fff8f2;
        }
        .recharge-reference .recharge-hero {
          position: relative;
          box-sizing: border-box;
          min-height: 286px;
          padding: 0 16px 20px;
          background: #fff8f2;
          border-bottom: 2px solid #111827;
        }
        .recharge-reference .recharge-hero-art {
          position: relative;
          width: 100%;
          height: 166px;
          overflow: hidden;
          margin-top: 76px;
          border: 2px solid #111827;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 4px 0 #111827;
        }
        .recharge-reference .recharge-hero-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .recharge-reference .recharge-title {
          position: absolute;
          z-index: 2;
          top: 20px;
          right: 70px;
          left: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin: 0;
          color: #111827;
          font-size: 20px;
          font-weight: 800;
          line-height: 1.2;
        }
        .recharge-reference .recharge-title-logo {
          width: 38px;
          height: 38px;
          border: 2px solid #111827;
          border-radius: 50%;
          object-fit: cover;
        }
        .recharge-reference .history-button,
        .recharge-reference .recharge-back {
          position: absolute;
          z-index: 3;
          top: 14px;
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 2px solid #111827;
          border-radius: 11px;
          padding: 0;
          background: #fff;
          box-shadow: 0 3px 0 #111827;
        }
        .recharge-reference .history-button {
          right: 16px;
        }
        .recharge-reference .recharge-back {
          left: 16px;
        }
        .recharge-reference .history-button:active,
        .recharge-reference .recharge-back:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #111827;
        }
        .recharge-reference .history-icon {
          position: relative;
          width: 22px;
          height: 25px;
          border: 2px solid #111827;
          border-radius: 4px;
        }
        .recharge-reference .history-icon::before {
          position: absolute;
          top: 5px;
          left: 4px;
          width: 11px;
          height: 2px;
          content: "";
          background: #ff7a14;
          box-shadow: 0 6px 0 #ff7a14;
        }
        .recharge-reference .history-icon::after {
          position: absolute;
          right: -7px;
          bottom: -6px;
          width: 10px;
          height: 10px;
          border: 2px solid #111827;
          border-radius: 50%;
          content: "";
          background: #fff;
        }
        .recharge-reference .recharge-back::before {
          width: 13px;
          height: 13px;
          border-bottom: 3px solid #111827;
          border-left: 3px solid #111827;
          content: "";
          transform: rotate(45deg) translate(2px, -2px);
        }
        .recharge-reference .amount-panel {
          min-height: 252px;
          padding: 20px 16px 18px;
          background: #fff;
        }
        .recharge-reference .preset-row {
          display: flex;
          gap: 10px;
        }
        .recharge-reference .preset {
          flex: 1;
          height: 48px;
          border: 2px solid #d1d5db;
          border-radius: 11px;
          background: #fff;
          color: #24252a;
          font-size: 15px;
          font-weight: 800;
        }
        .recharge-reference .preset.active {
          background: ${p};
          border-color: #111827;
          color: #111827;
          box-shadow: 0 3px 0 #111827;
        }
        .recharge-reference .amount-label {
          margin: 20px 0 9px;
          color: #111827;
          font-size: 16px;
          font-weight: 800;
        }
        .recharge-reference .amount-input {
          display: flex;
          height: 56px;
          align-items: center;
          overflow: hidden;
          border: 2px solid #111827;
          border-radius: 12px;
          background: #fff;
        }
        .recharge-reference .amount-input input {
          width: 100%;
          height: 100%;
          min-width: 0;
          padding: 0 14px;
          border: 0;
          outline: 0;
          color: #111827;
          background: transparent;
          font-size: 19px;
        }
        .recharge-reference .currency {
          padding: 0 13px 0 0;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
        }
        .recharge-reference .country-panel {
          margin: 14px 16px 0;
        }
        .recharge-reference .country-panel label {
          display: block;
          margin-bottom: 8px;
          color: #111827;
          font-size: 14px;
          font-weight: 800;
        }
        .recharge-reference .country-panel select {
          width: 100%;
          min-height: 52px;
          padding: 0 14px;
          border: 2px solid #111827;
          border-radius: 12px;
          outline: 0;
          background: #fff;
          color: #4b5563;
          font-size: 14px;
        }
        .recharge-reference .continue {
          display: flex;
          width: calc(100% - 32px);
          min-height: 57px;
          align-items: center;
          justify-content: center;
          margin: 14px 16px 0;
          border: 2px solid #111827;
          border-radius: 12px;
          background: ${p};
          color: #111827;
          font-size: 16px;
          font-weight: 800;
          box-shadow: 0 4px 0 #111827;
        }
        .recharge-reference .continue:active:not(:disabled) {
          transform: translateY(3px);
          box-shadow: 0 1px 0 #111827;
        }
        .recharge-reference .continue:disabled {
          opacity: .55;
        }
        .recharge-reference .instructions {
          margin-top: 18px;
          padding: 22px 16px 24px;
          border-top: 2px solid #111827;
          background: #fff;
          color: #4b5563;
        }
        .recharge-reference .instructions-title {
          margin: 0 0 18px;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
        }
        .recharge-reference .instructions-title::before {
          content: "•";
          margin-right: 8px;
          color: #ff7a14;
          font-size: 24px;
          line-height: 0;
        }
        .recharge-reference .instruction {
          position: relative;
          margin: 0 0 14px 20px;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.55;
        }
        .recharge-reference .instruction::before {
          position: absolute;
          top: 7px;
          left: -15px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          content: "";
          background: #ff7a14;
        }
        .recharge-reference .instruction strong { color: #111827; font-weight: 800; }
        @media (max-width: 360px) {
          .recharge-reference .recharge-hero { min-height: 270px; padding-right: 12px; padding-left: 12px; }
          .recharge-reference .recharge-hero-art { height: 150px; }
          .recharge-reference .history-button { right: 12px; }
          .recharge-reference .recharge-back { left: 12px; }
          .recharge-reference .amount-panel { padding-right: 12px; padding-left: 12px; }
          .recharge-reference .country-panel { margin-right: 12px; margin-left: 12px; }
          .recharge-reference .continue { width: calc(100% - 24px); margin-right: 12px; margin-left: 12px; }
          .recharge-reference .preset-row { gap: 10px; }
          .recharge-reference .preset { font-size: 13px; }
          .recharge-reference .instruction { font-size: 15px; }
        }
      `}),e.jsxs("div",{className:"recharge-screen",children:[e.jsxs("section",{className:"recharge-hero","aria-label":"Dépôt",children:[e.jsx("div",{className:"recharge-hero-art",children:e.jsx("img",{src:yt,alt:""})}),e.jsxs("h1",{className:"recharge-title",children:[e.jsx("img",{className:"recharge-title-logo",src:bt,alt:""}),e.jsx("span",{children:"Dépôt"})]}),e.jsx(v,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(v,{href:"/account",children:e.jsx("button",{className:"recharge-back","aria-label":"Retour"})})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de recharge",children:[e.jsx("div",{className:"preset-row",children:[3e3,12500,32e3].map(t=>e.jsx("button",{className:`preset ${i===t?"active":""}`,onClick:()=>y(t),children:t},t))}),e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de recharge"}),e.jsxs("label",{className:"amount-input",children:[e.jsx("input",{type:"number",inputMode:"numeric",value:i,onChange:t=>y(t.target.value?Number(t.target.value):""),"aria-label":"Montant de recharge"}),e.jsx("span",{className:"currency",children:d})]})]}),e.jsxs("section",{className:"country-panel","aria-label":"Pays du paiement",children:[e.jsx("label",{htmlFor:"deposit-country",children:"Pays du paiement"}),e.jsxs("select",{id:"deposit-country",value:N,onChange:t=>xe(t.target.value),children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),_.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]})]}),e.jsx("button",{className:"continue",onClick:pt,disabled:!N||De.isPending||I.isPending,children:"Recharger maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de recharge",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Recharge :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de recharge :"})," ",ne.toLocaleString("fr-FR")," ",d]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Vérifiez attentivement vos informations de compte"})," lors du virement pour éviter toute erreur de paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Chaque commande possède ses propres informations de paiement"})," ; ne réutilisez pas les informations précédentes pour un second paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Après un virement réussi,"})," veuillez patienter 10 à 30 minutes."]})]})]})]}):l==="select"?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsxs("header",{className:"flex items-center justify-between border-b border-gray-100 bg-white px-4 py-4",children:[e.jsxs("button",{className:"flex items-center gap-1 text-gray-800",onClick:()=>a("amount"),children:[e.jsx(b,{className:"h-5 w-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Choisir le pays"})]}),e.jsx(v,{href:"/history",children:e.jsx("button",{className:"rounded-full border border-[#FF7A14] px-3 py-1.5 text-xs font-semibold text-[#E85D00]",children:"Historique"})})]}),e.jsxs("div",{className:"mx-4 mt-4 flex items-center justify-between rounded-xl border border-orange-100 bg-orange-50 p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," FCFA"]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"rounded-2xl border-2 border-[#FF7A14] bg-orange-50 p-4",children:[e.jsx("p",{className:"mb-2 text-sm font-bold text-gray-900",children:"Pays du paiement"}),e.jsxs("select",{value:N,onChange:t=>xe(t.target.value),className:"w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-4 text-sm text-gray-700 outline-none",children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),_.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Seuls les pays activés par l’administration sont affichés."})]}),e.jsx("button",{onClick:Le,disabled:!N,className:"mt-5 w-full rounded-xl bg-[#FF7A14] py-3 font-semibold text-gray-900 disabled:opacity-50",children:"Continuer vers le paiement"})]})]}):l==="form"&&c?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx("header",{className:"flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100",children:e.jsxs("button",{className:"flex items-center gap-1 text-gray-800",onClick:()=>a("select"),children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Confirmer le paiement"})]})}),e.jsxs("div",{className:"p-4 space-y-4 pb-10",children:[e.jsxs("div",{className:"rounded-xl border border-orange-100 bg-orange-50 p-4 flex items-center gap-3",children:[c.logoUrl?e.jsx("img",{src:c.logoUrl,alt:c.operatorName,className:"w-10 h-10 rounded-lg object-contain"}):e.jsx("div",{className:"w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-orange-100",children:e.jsx(G,{className:"w-5 h-5 text-[#FF7A14]"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:c.paymentLink?"Lien de paiement":"Numéro destinataire"}),c.paymentLink?e.jsxs("a",{href:c.paymentLink,target:"_blank",rel:"noreferrer",className:"mt-1 flex items-center gap-1 text-sm font-bold text-[#E85D00] underline",children:[e.jsx(P,{className:"h-4 w-4"})," Ouvrir le lien de paiement"]}):e.jsxs("p",{className:"font-bold text-[#E85D00] text-sm",children:[c.operatorName," — ",c.phone]}),e.jsx("p",{className:"text-xs text-gray-500",children:c.ownerName})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant"}),e.jsxs("p",{className:"font-bold text-gray-800",children:[Number(i).toLocaleString()," ",d]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Votre numéro payeur"}),e.jsxs("div",{className:"border border-gray-300 rounded-md flex items-center overflow-hidden bg-white",children:[e.jsx(G,{className:"w-4 h-4 text-gray-400 ml-4"}),e.jsx("input",{type:"tel",value:Y,onChange:t=>pe(t.target.value),placeholder:"Numéro depuis lequel vous avez payé",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Référence / ID transaction ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("input",{type:"text",value:fe,onChange:t=>be(t.target.value),placeholder:"Numéro de référence de la transaction",className:"w-full border border-gray-300 rounded-md px-4 py-4 text-sm text-gray-700 outline-none bg-white"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Message reçu après paiement ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("textarea",{value:he,onChange:t=>ge(t.target.value),placeholder:"Collez ici le SMS ou message de confirmation reçu...",rows:3,className:"w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-700 outline-none bg-white resize-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Capture d'écran du paiement ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{ref:de,type:"file",accept:"image/*",onChange:ct,className:"hidden"}),e.jsx("button",{onClick:()=>de.current?.click(),className:`w-full border-2 border-dashed rounded-xl py-7 flex flex-col items-center gap-2 transition-colors ${C?"border-orange-400 bg-orange-50":"border-gray-300 bg-gray-50 hover:border-[#FF7A14] hover:bg-orange-50"}`,children:C?e.jsxs(e.Fragment,{children:[e.jsx(H,{className:"w-8 h-8 text-[#FF7A14]"}),e.jsx("p",{className:"text-sm font-medium text-[#E85D00]",children:Ue}),e.jsx("p",{className:"text-xs text-gray-400",children:"Appuyez pour changer"})]}):e.jsxs(e.Fragment,{children:[e.jsx(jt,{className:"w-8 h-8 text-gray-400"}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Appuyez pour ajouter la capture"}),e.jsx("p",{className:"text-xs text-gray-400",children:"JPG, PNG — max 5 Mo"})]})}),C&&e.jsx("div",{className:"mt-3 rounded-xl overflow-hidden border border-gray-100",children:e.jsx("img",{src:C,alt:"Capture",className:"w-full max-h-52 object-contain bg-gray-50"})})]}),e.jsx("button",{onClick:mt,disabled:ie.isPending,className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg disabled:opacity-50",style:{background:p},children:ie.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Envoi en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(vt,{className:"w-5 h-5"})," Soumettre ma demande"]})})]})]}):l==="westpay"?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx("header",{className:"flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100",children:e.jsxs("button",{className:"flex items-center gap-1 text-gray-800",onClick:()=>a("select"),children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:W})]})}),e.jsxs("div",{className:"p-4 space-y-5 pb-10",children:[e.jsxs("div",{className:"mx-0 rounded-xl p-4 border-2 border-[#FF7A14] bg-orange-50 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",d]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"rounded-xl border border-gray-100 bg-gray-50 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Nt,{className:"w-5 h-5 text-[#FF7A14]"}),e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:"Comment ça marche ?"})]}),e.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:["1. Cliquez ",e.jsxs("strong",{children:["Payer avec ",W]})," — vous serez redirigé vers la page de paiement sécurisée."]}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"2. Entrez votre numéro Mobile Money et validez le paiement USSD depuis votre téléphone."}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"3. Après paiement, vous serez automatiquement redirigé ici. Votre solde est crédité après confirmation."})]}),e.jsx("button",{onClick:()=>I.mutate(),disabled:I.isPending,className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg disabled:opacity-40 flex items-center justify-center gap-2",style:{background:p},children:I.isPending?e.jsxs(e.Fragment,{children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Redirection en cours..."]}):e.jsxs(e.Fragment,{children:[e.jsx(P,{className:"w-5 h-5"})," Payer avec ",W]})}),e.jsxs("p",{className:"text-xs text-center text-gray-400",children:["Paiement sécurisé via ",W," — USSD Mobile Money"]})]})]}):l==="ashtech-operator"?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsxs("header",{className:"flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100",children:[e.jsxs("button",{className:"flex items-center gap-1 text-gray-800",onClick:()=>a("select"),children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:Ae})]}),e.jsx(v,{href:"/history",children:e.jsx("button",{className:"text-xs text-[#E85D00] font-semibold px-3 py-1.5 rounded-full border border-[#FF7A14]",children:"Historique"})})]}),e.jsxs("div",{className:"mx-4 mt-4 rounded-xl p-4 border border-orange-100 bg-orange-50 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",d]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"p-4 space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),lt?e.jsx(f,{className:"w-6 h-6 animate-spin text-[#FF7A14] mx-auto"}):e.jsx("select",{value:se,onChange:t=>{Qe(t.target.value),ve("")},className:"w-full border border-gray-300 rounded-md px-4 py-4 text-sm text-gray-700 outline-none bg-white appearance-none",children:Ie.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"border border-gray-300 rounded-md flex items-center overflow-hidden bg-white",children:[e.jsx(G,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:R,onChange:t=>He(t.target.value),placeholder:"Votre numéro Mobile Money",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),Oe.length===0?e.jsx("p",{className:"text-sm text-gray-400 text-center py-5",children:"Aucun opérateur disponible pour ce pays"}):e.jsx("div",{className:"space-y-2",children:Oe.map((t,s)=>{const n=typeof t=="string"?t:t.name||t.code||`Opérateur ${s+1}`;return e.jsxs("button",{onClick:()=>ve(n),className:`w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 ${A===n?"border-[#FF7A14] bg-orange-50":"border-gray-200 bg-white"}`,children:[e.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:n}),A===n&&e.jsx(H,{className:"w-5 h-5 text-[#FF7A14]"})]},`${n}-${s}`)})})]}),e.jsx("button",{onClick:()=>k.mutate(void 0),disabled:!A||!R.trim()||k.isPending,className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg disabled:opacity-40",style:{background:p},children:k.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):"Initier le paiement"})]})]}):l==="ashtech-otp"?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx("header",{className:"flex items-center gap-2 px-4 py-4 bg-white border-b border-gray-100",children:e.jsxs("button",{onClick:()=>a("ashtech-operator"),className:"flex items-center gap-1 text-gray-800",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Code OTP"})]})}),e.jsxs("div",{className:"p-4 space-y-5 pb-10",children:[e.jsxs("div",{className:"rounded-2xl border-2 border-orange-200 bg-orange-50 p-4",children:[e.jsx("p",{className:"font-bold text-gray-900 text-sm mb-2",children:"Code à composer"}),ae&&e.jsx("p",{className:"bg-white rounded-xl border border-orange-200 px-4 py-3 text-center font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:ae}),e.jsx("p",{className:"text-sm text-gray-600 mt-3",children:ae?"Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous.":"Un code OTP vous a été envoyé. Saisissez-le ci-dessous."})]}),e.jsx("input",{type:"text",inputMode:"numeric",value:re,onChange:t=>we(t.target.value),maxLength:8,placeholder:"Code OTP reçu par SMS",className:"w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none bg-white focus:border-[#FF7A14]"}),e.jsx("button",{onClick:()=>k.mutate(re),disabled:!re.trim()||k.isPending,className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg disabled:opacity-40",style:{background:p},children:k.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):l==="ashtech-redirect"?e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx("header",{className:"flex items-center gap-2 px-4 py-4 bg-white border-b border-gray-100",children:e.jsxs("button",{onClick:()=>a("ashtech-operator"),className:"flex items-center gap-1 text-gray-800",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center",children:e.jsx(P,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser avec Wave"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Ouvrez la page Wave pour confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]}),"."]})]}),e.jsxs("a",{href:Be,target:"_blank",rel:"noopener noreferrer",onClick:()=>{z(!0),a("ashtech-waiting")},className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg flex items-center justify-center gap-2",style:{background:p},children:[e.jsx(P,{className:"w-5 h-5"})," Ouvrir Wave"]})]})]}):l==="ashtech-waiting"?e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx("header",{className:"flex items-center gap-2 px-4 py-4 bg-white border-b border-gray-100",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center",children:e.jsx(Q,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Validez le paiement sur votre téléphone. Cette page se met à jour automatiquement."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(v,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"w-full py-3 rounded-full border border-[#FF7A14] text-[#E85D00] font-semibold text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{a("amount"),y(""),$(null),z(!1),V("")},className:"flex-1 py-3 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm",children:"Nouvelle recharge"})]})]})]}):l==="sv-operator"?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsxs("header",{className:"flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100",children:[e.jsxs("button",{className:"flex items-center gap-1 text-gray-800",onClick:()=>a("amount"),children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Top up"})]}),e.jsx(v,{href:"/history",children:e.jsx("button",{className:"text-xs text-[#E85D00] font-semibold px-3 py-1.5 rounded-full border border-[#FF7A14]",children:"Historique"})})]}),e.jsxs("div",{className:"mx-4 mt-4 rounded-xl p-4 border border-orange-100 bg-orange-50 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",d]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"p-4 space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),e.jsx("select",{value:S,onChange:t=>{Re(t.target.value),E(null)},className:"w-full border border-gray-300 rounded-md px-4 py-4 text-sm text-gray-700 outline-none bg-white appearance-none",children:_.map(t=>e.jsx("option",{value:t.code,children:t.name},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"border border-gray-300 rounded-md flex items-center overflow-hidden bg-white",children:[e.jsx(G,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:Z,onChange:t=>$e(t.target.value),placeholder:"Numéro sur lequel envoyer la demande",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),it?e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx(f,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):ze.length===0?e.jsx("div",{className:"text-center py-8 text-gray-400",children:e.jsx("p",{className:"text-sm",children:"Aucun opérateur disponible pour ce pays"})}):e.jsx("div",{className:"space-y-2",children:ze.map(t=>{const s=ut(t.name);return e.jsxs("button",{onClick:()=>E(t),className:`w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 transition-all ${h?.id===t.id?"border-[#FF7A14] bg-orange-50":"border-gray-200 bg-white hover:border-green-200"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s?e.jsx("img",{src:s,alt:t.name,className:"w-10 h-10 rounded-full object-cover border border-gray-100"}):e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${h?.id===t.id?"bg-[#FF7A14] text-gray-900":"bg-gray-100 text-gray-600"}`,children:t.name.charAt(0)}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:t.name}),t.requiresOtp&&e.jsx("p",{className:"text-xs text-[#E85D00]",children:"Code OTP requis"})]})]}),h?.id===t.id&&e.jsx(H,{className:"w-5 h-5 text-[#FF7A14]"})]},t.id)})})]}),e.jsx("button",{onClick:()=>oe.mutate(),disabled:!h||oe.isPending,className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg disabled:opacity-40",style:{background:p},children:oe.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("img",{src:"/topup-icon.png",className:"w-6 h-6 object-contain",alt:"topup"})," Initier le paiement"]})})]})]}):l==="sv-otp"?e.jsxs("div",{className:"min-h-screen bg-white",children:[e.jsx("header",{className:"flex items-center gap-2 px-4 py-4 bg-white border-b border-gray-100",children:e.jsxs("button",{onClick:()=>a("sv-operator"),className:"flex items-center gap-1 text-gray-800",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Code OTP"})]})}),e.jsxs("div",{className:"p-4 space-y-5 pb-10",children:[e.jsxs("div",{className:"rounded-2xl border-2 border-orange-200 bg-orange-50 p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-bold text-xs",children:"1"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Composez ce code sur votre téléphone"})]}),ye?e.jsxs("div",{className:"bg-white rounded-xl border border-orange-200 px-4 py-3 text-center",children:[e.jsx("p",{className:"font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:ye}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Composez ce code USSD sur votre téléphone"})]}):e.jsxs("p",{className:"text-sm text-gray-600",children:["Composez le code USSD de votre opérateur (ex : ",e.jsx("span",{className:"font-mono font-bold text-[#E85D00]",children:"*144#"}),") sur votre téléphone pour recevoir le code OTP par SMS."]})]}),e.jsxs("div",{className:"rounded-2xl border-2 border-orange-100 bg-orange-50 p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-bold text-xs",children:"2"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Entrez le code OTP reçu par SMS"})]}),e.jsxs("p",{className:"text-xs text-gray-500 mb-3",children:["Après avoir composé le code, vous recevrez un SMS avec un code OTP. Saisissez-le ci-dessous pour confirmer le paiement de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]}),"."]}),e.jsx("input",{type:"text",inputMode:"numeric",value:ee,onChange:t=>te(t.target.value),placeholder:"Code OTP reçu par SMS",className:"w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none bg-white focus:border-[#FF7A14]",maxLength:8})]}),e.jsx("button",{onClick:()=>ce.mutate(),disabled:!ee.trim()||ce.isPending,className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg disabled:opacity-40",style:{background:p},children:ce.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):l==="sv-redirect"?e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx("header",{className:"flex items-center gap-2 px-4 py-4 bg-white border-b border-gray-100",children:e.jsxs("button",{onClick:()=>a("sv-operator"),className:"flex items-center gap-1 text-gray-800",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center",children:e.jsx(P,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser sur l'application"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Appuyez sur le bouton ci-dessous pour ouvrir la page de paiement de l'opérateur et confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]}),"."]})]}),e.jsxs("a",{href:_e,target:"_blank",rel:"noopener noreferrer",className:"w-full py-5 rounded-full text-white font-bold text-base shadow-lg flex items-center justify-center gap-2",style:{background:p},onClick:()=>{g(!0),a("sv-waiting")},children:[e.jsx(P,{className:"w-5 h-5"})," Ouvrir la page de paiement"]})]})]}):l==="sv-waiting"?e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx("header",{className:"flex items-center gap-2 px-4 py-4 bg-white border-b border-gray-100",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:je==="approved"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center",children:e.jsx(H,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement confirmé !"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Votre solde a été crédité de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]})]})]})]}):je==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-red-100 flex items-center justify-center",children:e.jsx(Q,{className:"w-10 h-10 text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement échoué"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Le paiement a été refusé ou annulé."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[J&&e.jsxs("button",{onClick:()=>le.mutate(),disabled:le.isPending,className:"flex-1 py-3 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50",style:{background:p},children:[le.isPending?e.jsx(f,{className:"w-4 h-4 animate-spin"}):e.jsx(Q,{className:"w-4 h-4"}),"Réessayer"]}),e.jsx("button",{onClick:()=>{a("amount"),y(""),E(null),q(null),U(""),g(!1),F("")},className:"flex-1 py-3 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm",children:"Nouvelle recharge"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center",children:e.jsx(Q,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Une demande de paiement de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]})," a été envoyée sur votre téléphone.",e.jsx("br",{}),"Acceptez-la sur votre téléphone. Cette page se met à jour automatiquement."]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(v,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"w-full py-3 rounded-full border border-[#FF7A14] text-[#E85D00] font-semibold text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{a("amount"),y(""),E(null),q(null),U(""),g(!1),F("")},className:"flex-1 py-3 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm",children:"Nouvelle recharge"})]})]})})]}):null:null}export{_t as default};
