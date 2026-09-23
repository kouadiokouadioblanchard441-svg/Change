import{c as Ue,a as jt,b as bt,G as Nt,r,j as e,e as w,L as y,f as N}from"./index-w-VynQWW.js";import{u as D}from"./useQuery-DNphDeJi.js";import{u as k}from"./useMutation-B7PcdCPu.js";import{c as vt}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as wt}from"./auth-chargepoint-combined-0mIqx7uW.js";import{C as j}from"./chevron-left-DHrrzZ6Y.js";import{P as Y,E,I as kt}from"./phone-D4Z3cTUQ.js";import{Z as Ct}from"./zap-ii2Oszu6.js";import{R as B}from"./refresh-cw-DZeAjtvH.js";const Z=Ue("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const St=Ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),L="#FF7A14",Re="#E85D00",x=`linear-gradient(112deg, ${L} 0%, ${Re} 100%)`,Pt=`
  .deposit-step-shell {
    min-height: 100dvh;
    max-width: 512px;
    margin: 0 auto;
    overflow: hidden;
    background: #fff8f2;
    color: #111827;
    font-family: Inter, Arial, sans-serif;
  }
  .deposit-step-shell .deposit-step-header {
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 2px solid #111827;
    background: #fff8f2;
  }
  .deposit-step-shell .deposit-step-back {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 42px;
    padding: 8px 12px 8px 8px;
    border: 2px solid #111827;
    border-radius: 11px;
    background: #fff;
    color: #111827;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0 3px 0 #111827;
  }
  .deposit-step-shell .deposit-step-back:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #111827;
  }
  .deposit-step-shell .deposit-step-history {
    min-height: 40px;
    padding: 8px 12px;
    border: 2px solid #111827;
    border-radius: 11px;
    background: #fff;
    color: ${Re};
    font-size: 12px;
    font-weight: 800;
  }
  .deposit-step-shell .deposit-step-content {
    padding: 16px;
  }
  .deposit-step-shell .deposit-step-summary {
    border: 2px solid #111827;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 4px 0 #111827;
  }
  .deposit-step-shell .deposit-step-card {
    border: 2px solid #111827;
    border-radius: 14px;
    background: #fff;
  }
  .deposit-step-shell .deposit-step-card-orange {
    border-color: ${L};
    background: #fff3e8;
  }
  .deposit-step-shell .deposit-step-field {
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-primary {
    min-height: 54px;
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: ${L} !important;
    color: #111827 !important;
    font-weight: 800 !important;
    box-shadow: 0 4px 0 #111827;
  }
  .deposit-step-shell .deposit-step-primary:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #111827;
  }
  .deposit-step-shell .deposit-step-secondary {
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: #fff !important;
    color: #111827 !important;
    font-weight: 800 !important;
  }
  .deposit-step-shell .deposit-step-icon {
    display: grid;
    width: 76px;
    height: 76px;
    place-items: center;
    border: 2px solid #111827;
    border-radius: 50%;
    background: #fff3e8;
  }
  .deposit-step-shell .deposit-step-icon svg {
    color: ${L};
  }
  .deposit-step-shell .deposit-step-operator {
    border: 2px solid #d1d5db !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-operator-selected {
    border-color: ${L} !important;
    background: #fff3e8 !important;
  }
  .deposit-step-shell .deposit-step-otp {
    border: 2px solid #111827 !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  @media (max-width: 360px) {
    .deposit-step-shell .deposit-step-header { padding-right: 12px; padding-left: 12px; }
    .deposit-step-shell .deposit-step-content { padding: 12px; }
    .deposit-step-shell .deposit-step-back { font-size: 14px; }
  }
`;function m(){return e.jsx("style",{children:Pt})}function Qt(){const{user:h,refreshUser:J}=jt(),{toast:o}=bt(),q=Nt(),xe=r.useRef(null),[c,a]=r.useState("amount"),[l,$e]=r.useState(null),[Et,Ft]=r.useState(null),[i,b]=r.useState(""),[v,me]=r.useState(""),[X,he]=r.useState(h?.phone||""),[C,ue]=r.useState(""),[Ve,fe]=r.useState(""),[ge,ye]=r.useState(""),[je,be]=r.useState(""),[S,We]=r.useState(h?.country||""),[ee,_e]=r.useState(""),[f,F]=r.useState(null),[U,R]=r.useState(null),[te,$]=r.useState(""),[Ke,se]=r.useState(""),[re,ae]=r.useState(""),[Ne,Ge]=r.useState(""),[Mt,He]=r.useState(""),[Qe,Ye]=r.useState(""),[ve,M]=r.useState(""),[we,g]=r.useState(!1),[ne,Be]=r.useState(h?.country||""),[V,Ze]=r.useState(""),[A,ke]=r.useState(""),[z,W]=r.useState(null),[ie,Ce]=r.useState(""),[oe,Se]=r.useState(""),[At,Pe]=r.useState(""),[Je,Xe]=r.useState(""),[zt,_]=r.useState(""),[Ee,I]=r.useState(!1),u=v,{data:Fe=[]}=D({queryKey:["/api/countries"]}),d=Fe.find(t=>t.code===u&&t.isActive)?.currency||"FCFA",{data:p}=D({queryKey:["/api/settings"]}),K=Math.max(3500,parseInt(p?.minDeposit||"3500")),et=[3500,5e3,1e4,25e3,5e4,1e5,2e5,3e5,4e5,5e5].filter(t=>t>=K);p?.sendavapayEnabled,p?.sendavapayChannelName;const tt=p?.westpayEnabled==="true",G=p?.westpayChannelName||"WestPay",Me=p?.westpayCountries||"",st=tt&&(!Me||Me.split(",").map(t=>t.trim()).includes(u)),rt=p?.inpayEnabled==="true",at=p?.inpayChannelName||"InPay",nt=p?.inpayCountries||"",Ae=rt&&nt.split(",").map(t=>t.trim().toUpperCase()).includes(u.toUpperCase()),it=p?.ashtechEnabled==="true",ze=p?.ashtechChannelName||"AshtechPay",H=p?.ashtechCountries||"",ot=!H||H.split(",").map(t=>t.trim().toUpperCase()).includes(u.toUpperCase()),ct=it&&ot,Q=Fe.filter(t=>t.isActive),Ie=H?H.split(",").map(t=>t.trim().toUpperCase()).filter(Boolean):null,{data:Ot=[],isLoading:Tt}=D({queryKey:["/api/payment-numbers",u],queryFn:async()=>{const t=await fetch(`/api/payment-numbers?country=${u}`,{credentials:"include"});if(!t.ok)throw new Error("Erreur");return t.json()},enabled:!!u}),{data:lt,isLoading:dt}=D({queryKey:["/api/sendavapay/operators",S],queryFn:async()=>{const t=await fetch(`/api/sendavapay/operators/${S}`,{credentials:"include"});if(!t.ok)throw new Error("Erreur");return t.json()},enabled:c==="sv-operator"&&!!S}),Oe=(lt?.data||[]).filter(t=>t.status==="online"),{data:pt=[],isLoading:xt}=D({queryKey:["/api/ashtechpay/countries"],queryFn:async()=>{const t=await fetch("/api/ashtechpay/countries",{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs");return t.json()},enabled:c==="ashtech-operator"&&ct}),Te=pt.filter(t=>Q.some(s=>s.code.toUpperCase()===t.code.toUpperCase())&&(!Ie||Ie.includes(t.code.toUpperCase()))),De=Te.find(t=>t.code===ne)?.operators||[];r.useEffect(()=>{if(c!=="sv-waiting"||!U||!we)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${U}/sendavapay-status`,{credentials:"include"})).json();M(n.status),n.status==="approved"?(clearInterval(t),g(!1),o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),J(),q.invalidateQueries({queryKey:["/api/deposits/history"]}),a("amount"),b(""),F(null),R(null),$(""),se(""),ae(""),M("")):n.status==="rejected"&&(clearInterval(t),g(!1),o({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),a("sv-operator"))}catch{}},5e3);return()=>clearInterval(t)},[c,U,we]),r.useEffect(()=>{if(c!=="ashtech-waiting"||!z||!Ee)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${z}/ashtechpay-status`,{credentials:"include"})).json();_(n.status),n.status==="approved"?(clearInterval(t),I(!1),o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),J(),q.invalidateQueries({queryKey:["/api/deposits/history"]}),a("amount"),b(""),W(null),_("")):n.status==="rejected"&&(clearInterval(t),I(!1),o({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),a("ashtech-operator"))}catch{}},5e3);return()=>clearInterval(t)},[c,z,Ee]);const mt=t=>{const s=t.target.files?.[0];if(!s)return;if(s.size>5*1024*1024){o({title:"Fichier trop grand",description:"Maximum 5 Mo",variant:"destructive"});return}fe(s.name);const n=new FileReader;n.onload=T=>ue(T.target?.result),n.readAsDataURL(s)},ce=k({mutationFn:async()=>{if(!l)throw new Error("Aucun numéro sélectionné");const t=await N("POST","/api/deposits",{amount:Number(i),accountName:h?.fullName||"",accountNumber:X,paymentMethod:l.operatorName,country:u,paymentNumberId:l.id,channelName:l.paymentLink?`${l.operatorName} - Lien de paiement`:`${l.operatorName} - ${l.phone}`,screenshot:C||null,paymentMessage:ge||null,reference:je||null});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur")}return t.json()},onSuccess:()=>{o({title:"Demande envoyée !",description:"Votre dépôt est en attente de validation"}),q.invalidateQueries({queryKey:["/api/deposits/history"]}),J(),a("amount"),$e(null),b(""),he(h?.phone||""),ue(""),fe(""),ye(""),be("")},onError:t=>o({title:"Erreur",description:t.message,variant:"destructive"})}),[Lt,ht]=r.useState(null),[qt,ut]=r.useState("");r.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("wp_status"),n=t.get("wp_depositId");s&&(ut(s),n&&ht(parseInt(n)),window.history.replaceState({},"","/deposit"),s==="success"&&(o({title:"Paiement en cours de confirmation",description:"Votre dépôt sera crédité dès confirmation WestPay."}),q.invalidateQueries({queryKey:["/api/deposits/history"]})))},[]);const O=k({mutationFn:async()=>{const t=await N("POST","/api/deposits",{amount:Number(i),accountName:h?.fullName||"",accountNumber:h?.phone||"",paymentMethod:"WestPay",country:u,useWestpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur WestPay")}return t.json()},onSuccess:t=>{t.westpayUrl&&(window.location.href=t.westpayUrl)},onError:t=>o({title:"Erreur WestPay",description:t.message,variant:"destructive"})}),Le=k({mutationFn:async()=>{const t=await N("POST","/api/deposits",{amount:Number(i),accountName:h?.fullName||"",accountNumber:h?.phone||"",paymentMethod:"InPay",country:u,useInpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur InPay")}return t.json()},onSuccess:t=>{t.inpayUrl&&(window.location.href=t.inpayUrl)},onError:t=>o({title:`Erreur ${at}`,description:t.message,variant:"destructive"})}),P=k({mutationFn:async t=>{if(!A||!V.trim())throw new Error("Sélectionnez un opérateur et saisissez votre numéro");const s=await N("POST","/api/ashtechpay/collect",{amount:Number(i),country:ne,operator:A,phone:V.trim(),depositId:z||void 0,otp:t||void 0});if(!s.ok){const n=await s.json();throw new Error(n.message||"Erreur AshtechPay")}return s.json()},onSuccess:t=>{W(t.depositId),Pe(t.message||""),Se(t.ussdCode||""),t.waveUrl?(Xe(t.waveUrl),a("ashtech-redirect")):t.requiresOtp?a("ashtech-otp"):(I(!0),_(t.status||"pending"),a("ashtech-waiting"))},onError:t=>{if(t.data?.requiresOtp){W(t.data.depositId||z),Se(t.data.ussdCode||""),Pe(t.message||"Composez le code indiqué puis saisissez le code OTP."),Ce(""),a("ashtech-otp");return}o({title:`Erreur ${ze}`,description:t.message,variant:"destructive"})}}),le=k({mutationFn:async()=>{if(!f)throw new Error("Sélectionnez un opérateur");const t=await N("POST","/api/sendavapay/create",{amount:Number(i),country:S,operatorId:f.id,operatorName:f.name,payerPhone:ee});if(!t.ok){const T=await t.json();throw new Error(T.message||"Erreur création paiement")}const s=await t.json();R(s.depositId),$(s.paymentToken);const n=await N("POST","/api/sendavapay/initiate",{paymentToken:s.paymentToken,payerCountry:S,operatorId:f.id,depositId:s.depositId,payerPhone:ee});if(!n.ok){const T=await n.json();throw new Error(T.message||"Erreur initiation paiement")}return n.json()},onSuccess:t=>{const s=f?.name?.toLowerCase().includes("wave");t.requiresRedirect&&t.redirectUrl&&s?(Ye(t.redirectUrl),a("sv-redirect")):t.requiresRedirect&&!s?(g(!0),a("sv-waiting")):t.requiresOtp&&t.otpToken?(se(t.otpToken),Ge(t.ussdCode||""),He(t.message||""),a("sv-otp")):t.success?(g(!0),a("sv-waiting")):o({title:"Erreur",description:t.error||t.message||"Erreur paiement",variant:"destructive"})},onError:t=>o({title:"Erreur",description:t.message,variant:"destructive"})}),de=k({mutationFn:async()=>{if(!te)throw new Error("Token de paiement manquant");const t=await N("POST","/api/sendavapay/retry",{paymentToken:te,depositId:U});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur retry")}return t.json()},onSuccess:()=>{ae(""),se(""),M(""),g(!1),a("sv-operator"),o({title:"Prêt à réessayer",description:"Sélectionnez un opérateur et relancez le paiement."})},onError:t=>o({title:"Erreur retry",description:t.message,variant:"destructive"})}),pe=k({mutationFn:async()=>{const t=await N("POST","/api/sendavapay/submit-otp",{otpToken:Ke,otp:re});if(!t.ok){const s=await t.json();throw new Error(s.message||"Erreur OTP")}return t.json()},onSuccess:()=>{g(!0),a("sv-waiting")},onError:t=>o({title:"Erreur OTP",description:t.message,variant:"destructive"})}),ft=()=>{if(!i||Number(i)<K){o({title:"Montant invalide",description:`Le minimum est de ${K.toLocaleString()} ${d}`,variant:"destructive"});return}if(Ae&&(!Number.isInteger(Number(i))||Number(i)%5!==0)){o({title:"Montant InPay invalide",description:"Utilisez un montant entier multiple de 5 : 300, 305, 310…",variant:"destructive"});return}qe()},qe=()=>{if(!v){o({title:"Pays requis",description:"Sélectionnez le pays du paiement.",variant:"destructive"});return}if(Ae){Le.mutate();return}if(st){O.mutate();return}window.location.href=`/robotpay?amount=${encodeURIComponent(Number(i))}&country=${encodeURIComponent(v)}`},gt=t=>{const s=t.toLowerCase();return s.includes("tmoney")||s.includes("t-money")?"/operators/tmoney.png":s.includes("moov")?"/operators/moov.jpg":s.includes("orange")?"/operators/orange.png":s.includes("mtn")?"/operators/mtn.png":s.includes("airtel")?"/operators/airtel.png":s.includes("wave")?"/operators/wave.png":null},yt=()=>{if(!X.trim()){o({title:"Numéro requis",description:"Entrez le numéro depuis lequel vous avez payé",variant:"destructive"});return}if(!C){o({title:"Capture requise",description:"Veuillez joindre la capture d'écran du paiement",variant:"destructive"});return}ce.mutate()};return h?c==="amount"?e.jsxs("main",{className:"recharge-reference min-h-screen bg-[#f7f3f0]",children:[e.jsx("style",{children:`
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
          height: 286px;
          min-height: 0;
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
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 10px;
        }
        .recharge-reference .preset {
          height: 48px;
          border: 2px solid #d1d5db;
          border-radius: 11px;
          background: #fff;
          color: #24252a;
          font-size: 15px;
          font-weight: 800;
        }
        .recharge-reference .preset.active {
          background: ${x};
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
          background: ${x};
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
          margin: 18px 16px 24px;
          padding: 22px 16px 10px;
          border: 2px solid #111827;
          border-top: 5px solid #ff7a14;
          border-radius: 14px;
          background: #fff;
          color: #4b5563;
        }
        .recharge-reference .instructions-title {
          margin: 0 0 20px;
          color: #111827;
          font-size: 19px;
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
          margin: 0 0 16px 20px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.65;
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
          .recharge-reference .recharge-hero { height: 270px; min-height: 0; padding-right: 12px; padding-left: 12px; }
          .recharge-reference .recharge-hero-art { height: 150px; }
          .recharge-reference .history-button { right: 12px; }
          .recharge-reference .recharge-back { left: 12px; }
          .recharge-reference .amount-panel { padding-right: 12px; padding-left: 12px; }
          .recharge-reference .country-panel { margin-right: 12px; margin-left: 12px; }
          .recharge-reference .continue { width: calc(100% - 24px); margin-right: 12px; margin-left: 12px; }
          .recharge-reference .preset-row { gap: 8px; }
          .recharge-reference .preset { height: 44px; font-size: 11px; }
          .recharge-reference .instruction { font-size: 15px; }
        }
      `}),e.jsxs("div",{className:"recharge-screen",children:[e.jsxs("section",{className:"recharge-hero","aria-label":"Dépôt",children:[e.jsx("div",{className:"recharge-hero-art",children:e.jsx("img",{src:wt,alt:""})}),e.jsxs("h1",{className:"recharge-title",children:[e.jsx("img",{className:"recharge-title-logo",src:vt,alt:""}),e.jsx("span",{children:"Dépôt"})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(w,{href:"/account",children:e.jsx("button",{className:"recharge-back","aria-label":"Retour"})})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de recharge",children:[e.jsx("div",{className:"preset-row",children:et.map(t=>e.jsx("button",{className:`preset ${i===t?"active":""}`,onClick:()=>b(t),children:t},t))}),e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de recharge"}),e.jsxs("label",{className:"amount-input",children:[e.jsx("input",{type:"number",inputMode:"numeric",value:i,onChange:t=>b(t.target.value?Number(t.target.value):""),"aria-label":"Montant de recharge"}),e.jsx("span",{className:"currency",children:d})]})]}),e.jsxs("section",{className:"country-panel","aria-label":"Pays du paiement",children:[e.jsx("label",{htmlFor:"deposit-country",children:"Pays du paiement"}),e.jsxs("select",{id:"deposit-country",value:v,onChange:t=>me(t.target.value),children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),Q.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]})]}),e.jsx("button",{className:"continue",onClick:ft,disabled:!v||Le.isPending||O.isPending,children:"Recharger maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de recharge",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Recharge :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de recharge :"})," ",K.toLocaleString("fr-FR")," ",d]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Vérifiez attentivement vos informations de compte"})," lors du virement pour éviter toute erreur de paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Chaque commande possède ses propres informations de paiement"})," ; ne réutilisez pas les informations précédentes pour un second paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Après un virement réussi,"})," veuillez patienter 10 à 30 minutes."]})]})]})]}):c==="select"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>a("amount"),children:[e.jsx(j,{className:"h-5 w-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Choisir le pays"})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 flex items-center justify-between p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," FCFA"]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"mb-2 text-sm font-bold text-gray-900",children:"Pays du paiement"}),e.jsxs("select",{value:v,onChange:t=>me(t.target.value),className:"deposit-step-field w-full appearance-none px-4 py-4 text-sm text-gray-700 outline-none",children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),Q.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Seuls les pays activés par l’administration sont affichés."})]}),e.jsx("button",{onClick:qe,disabled:!v,className:"deposit-step-primary mt-5 w-full py-3 disabled:opacity-50",children:"Continuer vers le paiement"})]})]}):c==="form"&&l?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>a("select"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Confirmer le paiement"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4 flex items-center gap-3",children:[l.logoUrl?e.jsx("img",{src:l.logoUrl,alt:l.operatorName,className:"w-10 h-10 rounded-lg object-contain"}):e.jsx("div",{className:"w-10 h-10 rounded-lg bg-white flex items-center justify-center border-2 border-[#FF7A14]",children:e.jsx(Y,{className:"w-5 h-5 text-[#FF7A14]"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:l.paymentLink?"Lien de paiement":"Numéro destinataire"}),l.paymentLink?e.jsxs("a",{href:l.paymentLink,target:"_blank",rel:"noreferrer",className:"mt-1 flex items-center gap-1 text-sm font-bold text-[#E85D00] underline",children:[e.jsx(E,{className:"h-4 w-4"})," Ouvrir le lien de paiement"]}):e.jsxs("p",{className:"font-bold text-[#E85D00] text-sm",children:[l.operatorName," — ",l.phone]}),e.jsx("p",{className:"text-xs text-gray-500",children:l.ownerName})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant"}),e.jsxs("p",{className:"font-bold text-gray-800",children:[Number(i).toLocaleString()," ",d]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Votre numéro payeur"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(Y,{className:"w-4 h-4 text-gray-400 ml-4"}),e.jsx("input",{type:"tel",value:X,onChange:t=>he(t.target.value),placeholder:"Numéro depuis lequel vous avez payé",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Référence / ID transaction ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("input",{type:"text",value:je,onChange:t=>be(t.target.value),placeholder:"Numéro de référence de la transaction",className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Message reçu après paiement ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("textarea",{value:ge,onChange:t=>ye(t.target.value),placeholder:"Collez ici le SMS ou message de confirmation reçu...",rows:3,className:"deposit-step-field w-full px-4 py-3 text-sm text-gray-700 outline-none resize-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Capture d'écran du paiement ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{ref:xe,type:"file",accept:"image/*",onChange:mt,className:"hidden"}),e.jsx("button",{onClick:()=>xe.current?.click(),className:`w-full border-2 border-dashed rounded-xl py-7 flex flex-col items-center gap-2 transition-colors ${C?"border-[#FF7A14] bg-[#FFF3E8]":"border-gray-300 bg-gray-50 hover:border-[#FF7A14] hover:bg-[#FFF3E8]"}`,children:C?e.jsxs(e.Fragment,{children:[e.jsx(Z,{className:"w-8 h-8 text-[#FF7A14]"}),e.jsx("p",{className:"text-sm font-medium text-[#E85D00]",children:Ve}),e.jsx("p",{className:"text-xs text-gray-400",children:"Appuyez pour changer"})]}):e.jsxs(e.Fragment,{children:[e.jsx(kt,{className:"w-8 h-8 text-gray-400"}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Appuyez pour ajouter la capture"}),e.jsx("p",{className:"text-xs text-gray-400",children:"JPG, PNG — max 5 Mo"})]})}),C&&e.jsx("div",{className:"mt-3 rounded-xl overflow-hidden border border-gray-100",children:e.jsx("img",{src:C,alt:"Capture",className:"w-full max-h-52 object-contain bg-gray-50"})})]}),e.jsx("button",{onClick:yt,disabled:ce.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-50",style:{background:x},children:ce.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(y,{className:"w-5 h-5 animate-spin"})," Envoi en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(St,{className:"w-5 h-5"})," Soumettre ma demande"]})})]})]}):c==="westpay"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>a("select"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:G})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-summary mx-0 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",d]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-card p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ct,{className:"w-5 h-5 text-[#FF7A14]"}),e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:"Comment ça marche ?"})]}),e.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:["1. Cliquez ",e.jsxs("strong",{children:["Payer avec ",G]})," — vous serez redirigé vers la page de paiement sécurisée."]}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"2. Entrez votre numéro Mobile Money et validez le paiement USSD depuis votre téléphone."}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"3. Après paiement, vous serez automatiquement redirigé ici. Votre solde est crédité après confirmation."})]}),e.jsx("button",{onClick:()=>O.mutate(),disabled:O.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40 flex items-center justify-center gap-2",style:{background:x},children:O.isPending?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"w-5 h-5 animate-spin"})," Redirection en cours..."]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-5 h-5"})," Payer avec ",G]})}),e.jsxs("p",{className:"text-xs text-center text-gray-400",children:["Paiement sécurisé via ",G," — USSD Mobile Money"]})]})]}):c==="ashtech-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>a("select"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:ze})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",d]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),xt?e.jsx(y,{className:"w-6 h-6 animate-spin text-[#FF7A14] mx-auto"}):e.jsx("select",{value:ne,onChange:t=>{Be(t.target.value),ke("")},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:Te.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(Y,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:V,onChange:t=>Ze(t.target.value),placeholder:"Votre numéro Mobile Money",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),De.length===0?e.jsx("p",{className:"text-sm text-gray-400 text-center py-5",children:"Aucun opérateur disponible pour ce pays"}):e.jsx("div",{className:"space-y-2",children:De.map((t,s)=>{const n=typeof t=="string"?t:t.name||t.code||`Opérateur ${s+1}`;return e.jsxs("button",{onClick:()=>ke(n),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 ${A===n?"deposit-step-operator-selected":""}`,children:[e.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:n}),A===n&&e.jsx(Z,{className:"w-5 h-5 text-[#FF7A14]"})]},`${n}-${s}`)})})]}),e.jsx("button",{onClick:()=>P.mutate(void 0),disabled:!A||!V.trim()||P.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:P.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(y,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):"Initier le paiement"})]})]}):c==="ashtech-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>a("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"font-bold text-gray-900 text-sm mb-2",children:"Code à composer"}),oe&&e.jsx("p",{className:"deposit-step-otp px-4 py-3 text-center font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:oe}),e.jsx("p",{className:"text-sm text-gray-600 mt-3",children:oe?"Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous.":"Un code OTP vous a été envoyé. Saisissez-le ci-dessous."})]}),e.jsx("input",{type:"text",inputMode:"numeric",value:ie,onChange:t=>Ce(t.target.value),maxLength:8,placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]"}),e.jsx("button",{onClick:()=>P.mutate(ie),disabled:!ie.trim()||P.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:P.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(y,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):c==="ashtech-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>a("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(E,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser avec Wave"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Ouvrez la page Wave pour confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]}),"."]})]}),e.jsxs("a",{href:Je,target:"_blank",rel:"noopener noreferrer",onClick:()=>{I(!0),a("ashtech-waiting")},className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:x},children:[e.jsx(E,{className:"w-5 h-5"})," Ouvrir Wave"]})]})]}):c==="ashtech-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(B,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Validez le paiement sur votre téléphone. Cette page se met à jour automatiquement."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(w,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{a("amount"),b(""),W(null),I(!1),_("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):c==="sv-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>a("amount"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Top up"})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",d]})]}),e.jsx("button",{onClick:()=>a("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),e.jsx("select",{value:S,onChange:t=>{We(t.target.value),F(null)},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:Q.map(t=>e.jsx("option",{value:t.code,children:t.name},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(Y,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:ee,onChange:t=>_e(t.target.value),placeholder:"Numéro sur lequel envoyer la demande",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),dt?e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx(y,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):Oe.length===0?e.jsx("div",{className:"text-center py-8 text-gray-400",children:e.jsx("p",{className:"text-sm",children:"Aucun opérateur disponible pour ce pays"})}):e.jsx("div",{className:"space-y-2",children:Oe.map(t=>{const s=gt(t.name);return e.jsxs("button",{onClick:()=>F(t),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 transition-all ${f?.id===t.id?"deposit-step-operator-selected":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s?e.jsx("img",{src:s,alt:t.name,className:"w-10 h-10 rounded-full object-cover border border-gray-100"}):e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${f?.id===t.id?"bg-[#FF7A14] text-gray-900":"bg-gray-100 text-gray-600"}`,children:t.name.charAt(0)}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:t.name}),t.requiresOtp&&e.jsx("p",{className:"text-xs text-[#E85D00]",children:"Code OTP requis"})]})]}),f?.id===t.id&&e.jsx(Z,{className:"w-5 h-5 text-[#FF7A14]"})]},t.id)})})]}),e.jsx("button",{onClick:()=>le.mutate(),disabled:!f||le.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:le.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(y,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("img",{src:"/topup-icon.png",className:"w-6 h-6 object-contain",alt:"topup"})," Initier le paiement"]})})]})]}):c==="sv-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>a("sv-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-900 font-bold text-xs",children:"1"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Composez ce code sur votre téléphone"})]}),Ne?e.jsxs("div",{className:"deposit-step-otp px-4 py-3 text-center",children:[e.jsx("p",{className:"font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:Ne}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Composez ce code USSD sur votre téléphone"})]}):e.jsxs("p",{className:"text-sm text-gray-600",children:["Composez le code USSD de votre opérateur (ex : ",e.jsx("span",{className:"font-mono font-bold text-[#E85D00]",children:"*144#"}),") sur votre téléphone pour recevoir le code OTP par SMS."]})]}),e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-bold text-xs",children:"2"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Entrez le code OTP reçu par SMS"})]}),e.jsxs("p",{className:"text-xs text-gray-500 mb-3",children:["Après avoir composé le code, vous recevrez un SMS avec un code OTP. Saisissez-le ci-dessous pour confirmer le paiement de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]}),"."]}),e.jsx("input",{type:"text",inputMode:"numeric",value:re,onChange:t=>ae(t.target.value),placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]",maxLength:8})]}),e.jsx("button",{onClick:()=>pe.mutate(),disabled:!re.trim()||pe.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:pe.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(y,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):c==="sv-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>a("sv-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(E,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser sur l'application"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Appuyez sur le bouton ci-dessous pour ouvrir la page de paiement de l'opérateur et confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]}),"."]})]}),e.jsxs("a",{href:Qe,target:"_blank",rel:"noopener noreferrer",className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:x},onClick:()=>{g(!0),a("sv-waiting")},children:[e.jsx(E,{className:"w-5 h-5"})," Ouvrir la page de paiement"]})]})]}):c==="sv-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(m,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:ve==="approved"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(Z,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement confirmé !"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Votre solde a été crédité de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]})]})]})]}):ve==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(B,{className:"w-10 h-10 text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement échoué"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Le paiement a été refusé ou annulé."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[te&&e.jsxs("button",{onClick:()=>de.mutate(),disabled:de.isPending,className:"deposit-step-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50",style:{background:x},children:[de.isPending?e.jsx(y,{className:"w-4 h-4 animate-spin"}):e.jsx(B,{className:"w-4 h-4"}),"Réessayer"]}),e.jsx("button",{onClick:()=>{a("amount"),b(""),F(null),R(null),$(""),g(!1),M("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(B,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Une demande de paiement de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",d]})," a été envoyée sur votre téléphone.",e.jsx("br",{}),"Acceptez-la sur votre téléphone. Cette page se met à jour automatiquement."]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(w,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{a("amount"),b(""),F(null),R(null),$(""),g(!1),M("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})})]}):null:null}export{Qt as default};
