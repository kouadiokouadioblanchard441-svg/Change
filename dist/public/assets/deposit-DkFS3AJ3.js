import{c as et,a as qt,b as Rt,G as $t,r as a,j as e,e as w,L as b,f as S}from"./index-CelyCQsD.js";import{u as q}from"./useQuery-BfLhrKLy.js";import{u as k}from"./useMutation-CPq8D_vK.js";import{b as Vt}from"./countries-D2hF7IfY.js";import{c as _t}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as Wt}from"./auth-chargepoint-combined-0mIqx7uW.js";import{C as j}from"./chevron-left-CdzvRtXM.js";import{P as ae,E,I as Kt}from"./phone-KssyJs7w.js";import{Z as Gt}from"./zap-B5HkEjSO.js";import{R}from"./refresh-cw--TMJIEuB.js";const $=et("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const Qt=et("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),V="#FF7A14",tt="#E85D00",x=`linear-gradient(112deg, ${V} 0%, ${tt} 100%)`,Xe="soleaspay-pending-deposit",Yt=`
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
    color: ${tt};
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
    border-color: ${V};
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
    background: ${V} !important;
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
    color: ${V};
  }
  .deposit-step-shell .deposit-step-operator {
    border: 2px solid #d1d5db !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-operator-selected {
    border-color: ${V} !important;
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
`;function u(){return e.jsx("style",{children:Yt})}function fs(){const{user:h,refreshUser:_}=qt(),{toast:o}=Rt(),A=$t(),je=a.useRef(null),[l,r]=a.useState("amount"),[c,st]=a.useState(null),[Ht,Bt]=a.useState(null),[i,f]=a.useState(""),[N,Ne]=a.useState(""),[re,ve]=a.useState(h?.phone||""),[P,we]=a.useState(""),[at,Se]=a.useState(""),[Ce,ke]=a.useState(""),[Pe,Ie]=a.useState(""),[I,rt]=a.useState(h?.country||""),[ne,nt]=a.useState(""),[g,M]=a.useState(null),[W,K]=a.useState(null),[ie,G]=a.useState(""),[it,oe]=a.useState(""),[le,ce]=a.useState(""),[Fe,ot]=a.useState(""),[Jt,lt]=a.useState(""),[ct,dt]=a.useState(""),[Ee,z]=a.useState(""),[Ae,y]=a.useState(!1),[O,de]=a.useState(null),[C,Q]=a.useState(""),[pt,mt]=a.useState(""),[Me,Y]=a.useState(!1),[pe,ze]=a.useState(h?.country||""),[H,Oe]=a.useState(""),[D,De]=a.useState(""),[L,B]=a.useState(null),[me,Le]=a.useState(""),[xe,Ue]=a.useState(""),[Zt,Te]=a.useState(""),[xt,ut]=a.useState(""),[Xt,J]=a.useState(""),[qe,U]=a.useState(!1),p=N,{data:ht,isError:Re}=q({queryKey:["/api/countries"]}),$e=Vt(ht,Re),m=$e.find(t=>t.code===p&&t.isActive)?.currency||"FCFA",{data:d}=q({queryKey:["/api/settings"]}),Z=Math.max(3500,parseInt(d?.minDeposit||"3500")),ft=[3500,5e3,1e4,25e3,5e4,1e5,2e5,3e5,4e5,5e5].filter(t=>t>=Z);d?.sendavapayEnabled,d?.sendavapayChannelName;const gt=d?.westpayEnabled==="true",X=d?.westpayChannelName||"WestPay",Ve=d?.westpayCountries||"",yt=gt&&(!Ve||Ve.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase())),bt=d?.inpayEnabled==="true",jt=d?.inpayChannelName||"InPay",Nt=d?.inpayCountries||"",_e=bt&&Nt.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase()),vt=d?.soleaspayEnabled==="true",wt=d?.soleaspayChannelName||"SoleaPay",St=d?.soleaspayCountries||"",Ct=vt&&St.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase()),kt=d?.ashtechEnabled==="true",We=d?.ashtechChannelName||"AshtechPay",ee=d?.ashtechCountries||"",Pt=!ee||ee.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase()),Ke=kt&&Pt,te=$e.filter(t=>t.isActive),Ge=ee?ee.split(",").map(t=>t.trim().toUpperCase()).filter(Boolean):null,{data:ts=[],isLoading:ss}=q({queryKey:["/api/payment-numbers",p],queryFn:async()=>{const t=await fetch(`/api/payment-numbers?country=${p}`,{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les numéros de paiement");return t.json()},enabled:!!p}),{data:It,isLoading:Ft}=q({queryKey:["/api/sendavapay/operators",I],queryFn:async()=>{const t=await fetch(`/api/sendavapay/operators/${I}`,{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs SendavaPay");return t.json()},enabled:l==="sv-operator"&&!!I}),Qe=(It?.data||[]).filter(t=>t.status==="online"),{data:Et=[],isLoading:At}=q({queryKey:["/api/ashtechpay/countries"],queryFn:async()=>{const t=await fetch("/api/ashtechpay/countries",{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs");return t.json()},enabled:l==="ashtech-operator"&&Ke}),Ye=Et.filter(t=>te.some(s=>s.code.toUpperCase()===t.code.toUpperCase())&&(!Ge||Ge.includes(t.code.toUpperCase()))),He=Ye.find(t=>t.code===pe)?.operators||[];a.useEffect(()=>{if(l!=="sv-waiting"||!W||!Ae)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${W}/sendavapay-status`,{credentials:"include"})).json();z(n.status),n.status==="approved"?(clearInterval(t),y(!1),o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),_(),A.invalidateQueries({queryKey:["/api/deposits/history"]}),r("amount"),f(""),M(null),K(null),G(""),oe(""),ce(""),z("")):n.status==="rejected"&&(clearInterval(t),y(!1),o({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),r("sv-operator"))}catch{}},5e3);return()=>clearInterval(t)},[l,W,Ae]),a.useEffect(()=>{if(l!=="ashtech-waiting"||!L||!qe)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${L}/ashtechpay-status`,{credentials:"include"})).json();J(n.status),n.status==="approved"?(clearInterval(t),U(!1),o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),_(),A.invalidateQueries({queryKey:["/api/deposits/history"]}),r("amount"),f(""),B(null),J("")):n.status==="rejected"&&(clearInterval(t),U(!1),o({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),r("ashtech-operator"))}catch{}},5e3);return()=>clearInterval(t)},[l,L,qe]),a.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("soleaspayReturn");if(s!=="success"&&s!=="failure")return;const n=t.get("orderId");let v=!1;try{const se=sessionStorage.getItem(Xe),ye=se?JSON.parse(se):null,be=Number(ye?.depositId),Tt=typeof ye?.orderId=="string"?ye.orderId:"";Number.isInteger(be)&&be>0&&(!n||Tt===n)&&(de(be),Q("pending"),mt(s==="success"?"Retour de SoleaPay reçu. Vérification du paiement en cours...":"Retour de SoleaPay reçu. Vérification de l'état final du paiement..."),Y(!0),r("soleaspay-waiting"),v=!0)}catch(se){console.warn("[soleaspay] Could not resume pending deposit:",se)}v||o({title:"Retour SoleaPay reçu",description:"Consultez l'historique des dépôts pour vérifier le statut du paiement."}),t.delete("soleaspayReturn"),t.delete("orderId");const Ze=t.toString();window.history.replaceState({},"",`${window.location.pathname}${Ze?`?${Ze}`:""}${window.location.hash}`)},[o]),a.useEffect(()=>{if(l!=="soleaspay-waiting"||!O||!Me)return;const t=setInterval(async()=>{try{const s=await fetch(`/api/deposits/${O}/verify`,{credentials:"include"}),n=await s.json();if(!s.ok)throw new Error(n.message||"Vérification SoleaPay impossible");if(n.status&&Q(n.status),n.status==="approved"||n.status==="rejected"){clearInterval(t),Y(!1);try{sessionStorage.removeItem(Xe)}catch{}n.status==="approved"&&(o({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),_(),A.invalidateQueries({queryKey:["/api/deposits/history"]}))}}catch{}},5e3);return()=>clearInterval(t)},[l,O,Me]);const Mt=t=>{const s=t.target.files?.[0];if(!s)return;if(s.size>5*1024*1024){o({title:"Fichier trop grand",description:"Maximum 5 Mo",variant:"destructive"});return}Se(s.name);const n=new FileReader;n.onload=v=>we(v.target?.result),n.readAsDataURL(s)},ue=k({mutationFn:async()=>{if(!c)throw new Error("Aucun numéro sélectionné");const t=await S("POST","/api/deposits",{amount:Number(i),accountName:h?.fullName||"",accountNumber:re,paymentMethod:c.operatorName,country:p,paymentNumberId:c.id,channelName:c.paymentLink?`${c.operatorName} - Lien de paiement`:`${c.operatorName} - ${c.phone}`,screenshot:P||null,paymentMessage:Ce||null,reference:Pe||null});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt non enregistré")}return t.json()},onSuccess:()=>{o({title:"Demande envoyée !",description:"Votre dépôt est en attente de validation"}),A.invalidateQueries({queryKey:["/api/deposits/history"]}),_(),r("amount"),st(null),f(""),ve(h?.phone||""),we(""),Se(""),ke(""),Ie("")},onError:t=>o({title:"Dépôt non enregistré",description:t.message,variant:"destructive"})}),[rs,zt]=a.useState(null),[ns,Ot]=a.useState("");a.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("wp_status"),n=t.get("wp_depositId");s&&(Ot(s),n&&zt(parseInt(n)),window.history.replaceState({},"","/deposit"),s==="success"&&(o({title:"Paiement en cours de confirmation",description:"Votre dépôt sera crédité dès confirmation WestPay."}),A.invalidateQueries({queryKey:["/api/deposits/history"]})))},[]);const T=k({mutationFn:async()=>{const t=await S("POST","/api/deposits",{amount:Number(i),accountName:h?.fullName||"",accountNumber:h?.phone||"",paymentMethod:"WestPay",country:p,useWestpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt WestPay non enregistré")}return t.json()},onSuccess:t=>{t.westpayUrl&&(window.location.href=t.westpayUrl)},onError:t=>o({title:"Dépôt WestPay non enregistré",description:t.message,variant:"destructive"})}),Be=k({mutationFn:async()=>{const t=await S("POST","/api/deposits",{amount:Number(i),accountName:h?.fullName||"",accountNumber:h?.phone||"",paymentMethod:"InPay",country:p,useInpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt InPay non enregistré")}return t.json()},onSuccess:t=>{t.inpayUrl&&(window.location.href=t.inpayUrl)},onError:t=>o({title:`Dépôt ${jt} non enregistré`,description:t.message,variant:"destructive"})}),F=k({mutationFn:async t=>{if(!D||!H.trim())throw new Error("Sélectionnez un opérateur et saisissez votre numéro");const s=await S("POST","/api/ashtechpay/collect",{amount:Number(i),country:pe,operator:D,phone:H.trim(),depositId:L||void 0,otp:t||void 0});if(!s.ok){const n=await s.json();throw new Error(n.message||"Dépôt AshtechPay non enregistré")}return s.json()},onSuccess:t=>{B(t.depositId),Te(t.message||""),Ue(t.ussdCode||""),t.waveUrl?(ut(t.waveUrl),r("ashtech-redirect")):t.requiresOtp?r("ashtech-otp"):(U(!0),J(t.status||"pending"),r("ashtech-waiting"))},onError:t=>{if(t.data?.requiresOtp){B(t.data.depositId||L),Ue(t.data.ussdCode||""),Te(t.message||"Composez le code indiqué puis saisissez le code OTP."),Le(""),r("ashtech-otp");return}o({title:`Dépôt ${We} non enregistré`,description:t.message,variant:"destructive"})}}),he=k({mutationFn:async()=>{if(!g)throw new Error("Sélectionnez un opérateur");const t=await S("POST","/api/sendavapay/create",{amount:Number(i),country:I,operatorId:g.id,operatorName:g.name,payerPhone:ne});if(!t.ok){const v=await t.json();throw new Error(v.message||"Création du paiement impossible")}const s=await t.json();K(s.depositId),G(s.paymentToken);const n=await S("POST","/api/sendavapay/initiate",{paymentToken:s.paymentToken,payerCountry:I,operatorId:g.id,depositId:s.depositId,payerPhone:ne});if(!n.ok){const v=await n.json();throw new Error(v.message||"Initiation du paiement impossible")}return n.json()},onSuccess:t=>{const s=g?.name?.toLowerCase().includes("wave");t.requiresRedirect&&t.redirectUrl&&s?(dt(t.redirectUrl),r("sv-redirect")):t.requiresRedirect&&!s?(y(!0),r("sv-waiting")):t.requiresOtp&&t.otpToken?(oe(t.otpToken),ot(t.ussdCode||""),lt(t.message||""),r("sv-otp")):t.success?(y(!0),r("sv-waiting")):o({title:"Paiement SendavaPay impossible",description:t.error||t.message||"Le paiement n'a pas pu être initié.",variant:"destructive"})},onError:t=>o({title:"Paiement SendavaPay impossible",description:t.message,variant:"destructive"})}),fe=k({mutationFn:async()=>{if(!ie)throw new Error("Token de paiement manquant");const t=await S("POST","/api/sendavapay/retry",{paymentToken:ie,depositId:W});if(!t.ok){const s=await t.json();throw new Error(s.message||"Nouvelle tentative impossible")}return t.json()},onSuccess:()=>{ce(""),oe(""),z(""),y(!1),r("sv-operator"),o({title:"Prêt à réessayer",description:"Sélectionnez un opérateur et relancez le paiement."})},onError:t=>o({title:"Nouvelle tentative impossible",description:t.message,variant:"destructive"})}),ge=k({mutationFn:async()=>{const t=await S("POST","/api/sendavapay/submit-otp",{otpToken:it,otp:le});if(!t.ok){const s=await t.json();throw new Error(s.message||"Validation du code OTP impossible")}return t.json()},onSuccess:()=>{y(!0),r("sv-waiting")},onError:t=>o({title:"Validation du code OTP impossible",description:t.message,variant:"destructive"})}),Dt=()=>{if(!i||Number(i)<Z){o({title:"Montant invalide",description:`Le minimum est de ${Z.toLocaleString()} ${m}`,variant:"destructive"});return}if(_e&&(!Number.isInteger(Number(i))||Number(i)%5!==0)){o({title:"Montant InPay invalide",description:"Utilisez un montant entier multiple de 5 : 300, 305, 310…",variant:"destructive"});return}Je()},Je=()=>{if(!N){o({title:"Pays requis",description:"Sélectionnez le pays du paiement.",variant:"destructive"});return}if(Ct){window.location.href=`/robotpay?amount=${encodeURIComponent(Number(i))}&country=${encodeURIComponent(N)}&provider=soleaspay`;return}if(_e){Be.mutate();return}if(yt){T.mutate();return}if(Ke){ze(p),Oe(h?.phone||""),r("ashtech-operator");return}window.location.href=`/robotpay?amount=${encodeURIComponent(Number(i))}&country=${encodeURIComponent(N)}`},Lt=t=>{const s=t.toLowerCase();return s.includes("tmoney")||s.includes("t-money")?"/operators/tmoney.png":s.includes("moov")?"/operators/moov.jpg":s.includes("orange")?"/operators/orange.png":s.includes("mtn")?"/operators/mtn.png":s.includes("airtel")?"/operators/airtel.png":s.includes("wave")?"/operators/wave.png":null},Ut=()=>{if(!re.trim()){o({title:"Numéro requis",description:"Entrez le numéro depuis lequel vous avez payé",variant:"destructive"});return}if(!P){o({title:"Capture requise",description:"Veuillez joindre la capture d'écran du paiement",variant:"destructive"});return}ue.mutate()};return h?l==="amount"?e.jsxs("main",{className:"recharge-reference min-h-screen bg-[#f7f3f0]",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"recharge-screen",children:[e.jsxs("section",{className:"recharge-hero","aria-label":"Dépôt",children:[e.jsx("div",{className:"recharge-hero-art",children:e.jsx("img",{src:Wt,alt:""})}),e.jsxs("h1",{className:"recharge-title",children:[e.jsx("img",{className:"recharge-title-logo",src:_t,alt:""}),e.jsx("span",{children:"Dépôt"})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(w,{href:"/account",children:e.jsx("button",{className:"recharge-back","aria-label":"Retour"})})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de recharge",children:[e.jsx("div",{className:"preset-row",children:ft.map(t=>e.jsx("button",{className:`preset ${i===t?"active":""}`,onClick:()=>f(t),children:t},t))}),e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de recharge"}),e.jsxs("label",{className:"amount-input",children:[e.jsx("input",{type:"number",inputMode:"numeric",value:i,onChange:t=>f(t.target.value?Number(t.target.value):""),"aria-label":"Montant de recharge"}),e.jsx("span",{className:"currency",children:m})]})]}),e.jsxs("section",{className:"country-panel","aria-label":"Pays du paiement",children:[e.jsx("label",{htmlFor:"deposit-country",children:"Pays du paiement"}),e.jsxs("select",{id:"deposit-country",value:N,onChange:t=>Ne(t.target.value),children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),te.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]}),Re&&e.jsx("p",{className:"mt-2 text-xs text-amber-700",children:"Liste locale temporaire affichée."})]}),e.jsx("button",{className:"continue",onClick:Dt,disabled:!N||Be.isPending||T.isPending,children:"Recharger maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de recharge",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Recharge :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de recharge :"})," ",Z.toLocaleString("fr-FR")," ",m]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Vérifiez attentivement vos informations de compte"})," lors du virement pour que votre paiement soit traité correctement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Chaque commande possède ses propres informations de paiement"})," ; ne réutilisez pas les informations précédentes pour un second paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Après un virement réussi,"})," veuillez patienter 10 à 30 minutes."]})]})]})]}):l==="select"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("amount"),children:[e.jsx(j,{className:"h-5 w-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Choisir le pays"})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 flex items-center justify-between p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," FCFA"]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"mb-2 text-sm font-bold text-gray-900",children:"Pays du paiement"}),e.jsxs("select",{value:N,onChange:t=>Ne(t.target.value),className:"deposit-step-field w-full appearance-none px-4 py-4 text-sm text-gray-700 outline-none",children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),te.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Seuls les pays activés par l’administration sont affichés."})]}),e.jsx("button",{onClick:Je,disabled:!N,className:"deposit-step-primary mt-5 w-full py-3 disabled:opacity-50",children:"Continuer vers le paiement"})]})]}):l==="form"&&c?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("select"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Confirmer le paiement"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4 flex items-center gap-3",children:[c.logoUrl?e.jsx("img",{src:c.logoUrl,alt:c.operatorName,className:"w-10 h-10 rounded-lg object-contain"}):e.jsx("div",{className:"w-10 h-10 rounded-lg bg-white flex items-center justify-center border-2 border-[#FF7A14]",children:e.jsx(ae,{className:"w-5 h-5 text-[#FF7A14]"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:c.paymentLink?"Lien de paiement":"Numéro destinataire"}),c.paymentLink?e.jsxs("a",{href:c.paymentLink,target:"_blank",rel:"noreferrer",className:"mt-1 flex items-center gap-1 text-sm font-bold text-[#E85D00] underline",children:[e.jsx(E,{className:"h-4 w-4"})," Ouvrir le lien de paiement"]}):e.jsxs("p",{className:"font-bold text-[#E85D00] text-sm",children:[c.operatorName," — ",c.phone]}),e.jsx("p",{className:"text-xs text-gray-500",children:c.ownerName})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant"}),e.jsxs("p",{className:"font-bold text-gray-800",children:[Number(i).toLocaleString()," ",m]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Votre numéro payeur"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(ae,{className:"w-4 h-4 text-gray-400 ml-4"}),e.jsx("input",{type:"tel",value:re,onChange:t=>ve(t.target.value),placeholder:"Numéro depuis lequel vous avez payé",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Référence / ID transaction ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("input",{type:"text",value:Pe,onChange:t=>Ie(t.target.value),placeholder:"Numéro de référence de la transaction",className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Message reçu après paiement ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("textarea",{value:Ce,onChange:t=>ke(t.target.value),placeholder:"Collez ici le SMS ou message de confirmation reçu...",rows:3,className:"deposit-step-field w-full px-4 py-3 text-sm text-gray-700 outline-none resize-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Capture d'écran du paiement ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{ref:je,type:"file",accept:"image/*",onChange:Mt,className:"hidden"}),e.jsx("button",{onClick:()=>je.current?.click(),className:`w-full border-2 border-dashed rounded-xl py-7 flex flex-col items-center gap-2 transition-colors ${P?"border-[#FF7A14] bg-[#FFF3E8]":"border-gray-300 bg-gray-50 hover:border-[#FF7A14] hover:bg-[#FFF3E8]"}`,children:P?e.jsxs(e.Fragment,{children:[e.jsx($,{className:"w-8 h-8 text-[#FF7A14]"}),e.jsx("p",{className:"text-sm font-medium text-[#E85D00]",children:at}),e.jsx("p",{className:"text-xs text-gray-400",children:"Appuyez pour changer"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Kt,{className:"w-8 h-8 text-gray-400"}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Appuyez pour ajouter la capture"}),e.jsx("p",{className:"text-xs text-gray-400",children:"JPG, PNG — max 5 Mo"})]})}),P&&e.jsx("div",{className:"mt-3 rounded-xl overflow-hidden border border-gray-100",children:e.jsx("img",{src:P,alt:"Capture",className:"w-full max-h-52 object-contain bg-gray-50"})})]}),e.jsx("button",{onClick:Ut,disabled:ue.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-50",style:{background:x},children:ue.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Envoi en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(Qt,{className:"w-5 h-5"})," Soumettre ma demande"]})})]})]}):l==="westpay"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("select"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:X})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-summary mx-0 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",m]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-card p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Gt,{className:"w-5 h-5 text-[#FF7A14]"}),e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:"Comment ça marche ?"})]}),e.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:["1. Cliquez ",e.jsxs("strong",{children:["Payer avec ",X]})," — vous serez redirigé vers la page de paiement sécurisée."]}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"2. Entrez votre numéro Mobile Money et validez le paiement USSD depuis votre téléphone."}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"3. Après paiement, vous serez automatiquement redirigé ici. Votre solde est crédité après confirmation."})]}),e.jsx("button",{onClick:()=>T.mutate(),disabled:T.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40 flex items-center justify-center gap-2",style:{background:x},children:T.isPending?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Redirection en cours..."]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-5 h-5"})," Payer avec ",X]})}),e.jsxs("p",{className:"text-xs text-center text-gray-400",children:["Paiement sécurisé via ",X," — USSD Mobile Money"]})]})]}):l==="ashtech-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("select"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:We})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",m]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),At?e.jsx(b,{className:"w-6 h-6 animate-spin text-[#FF7A14] mx-auto"}):e.jsx("select",{value:pe,onChange:t=>{ze(t.target.value),De("")},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:Ye.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(ae,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:H,onChange:t=>Oe(t.target.value),placeholder:"Votre numéro Mobile Money",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),He.length===0?e.jsx("p",{className:"text-sm text-gray-400 text-center py-5",children:"Aucun opérateur disponible pour ce pays"}):e.jsx("div",{className:"space-y-2",children:He.map((t,s)=>{const n=typeof t=="string"?t:t.name||t.code||`Opérateur ${s+1}`;return e.jsxs("button",{onClick:()=>De(n),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 ${D===n?"deposit-step-operator-selected":""}`,children:[e.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:n}),D===n&&e.jsx($,{className:"w-5 h-5 text-[#FF7A14]"})]},`${n}-${s}`)})})]}),e.jsx("button",{onClick:()=>F.mutate(void 0),disabled:!D||!H.trim()||F.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:F.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):"Initier le paiement"})]})]}):l==="ashtech-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"font-bold text-gray-900 text-sm mb-2",children:"Code à composer"}),xe&&e.jsx("p",{className:"deposit-step-otp px-4 py-3 text-center font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:xe}),e.jsx("p",{className:"text-sm text-gray-600 mt-3",children:xe?"Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous.":"Un code OTP vous a été envoyé. Saisissez-le ci-dessous."})]}),e.jsx("input",{type:"text",inputMode:"numeric",value:me,onChange:t=>Le(t.target.value),maxLength:8,placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]"}),e.jsx("button",{onClick:()=>F.mutate(me),disabled:!me.trim()||F.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:F.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):l==="ashtech-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(E,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser avec Wave"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Ouvrez la page Wave pour confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",m]}),"."]})]}),e.jsxs("a",{href:xt,target:"_blank",rel:"noopener noreferrer",onClick:()=>{U(!0),r("ashtech-waiting")},className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:x},children:[e.jsx(E,{className:"w-5 h-5"})," Ouvrir Wave"]})]})]}):l==="ashtech-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(R,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Validez le paiement sur votre téléphone. Cette page se met à jour automatiquement."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(w,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{r("amount"),f(""),B(null),U(!1),J("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):l==="soleaspay-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("span",{className:"font-semibold text-base text-gray-800",children:["Paiement ",wt]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:C==="approved"?e.jsx($,{className:"w-10 h-10 text-[#FF7A14]"}):e.jsx(R,{className:`w-10 h-10 ${C==="rejected"?"text-red-400":"text-[#FF7A14] animate-spin"}`})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:C==="approved"?"Paiement confirmé !":C==="rejected"?"Paiement échoué":"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:C==="approved"?`Votre solde a été crédité de ${Number(i).toLocaleString()} ${m}.`:C==="rejected"?"Le paiement a été refusé ou annulé.":pt||"Validez la demande de paiement sur votre téléphone. Cette page se met à jour automatiquement."}),O&&e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:["Référence dépôt : #",O]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[C==="rejected"?e.jsx("button",{onClick:()=>{de(null),Q(""),Y(!1),window.location.href=`/robotpay?amount=${encodeURIComponent(Number(i))}&country=${encodeURIComponent(p)}&provider=soleaspay`},className:"deposit-step-primary flex-1 py-3 text-sm",style:{background:x},children:"Réessayer"}):e.jsx(w,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{r("amount"),f(""),de(null),Q(""),Y(!1)},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):l==="sv-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("amount"),children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Top up"})]}),e.jsx(w,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(i).toLocaleString()," ",m]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),e.jsx("select",{value:I,onChange:t=>{rt(t.target.value),M(null)},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:te.map(t=>e.jsx("option",{value:t.code,children:t.name},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(ae,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:ne,onChange:t=>nt(t.target.value),placeholder:"Numéro sur lequel envoyer la demande",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),Ft?e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx(b,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):Qe.length===0?e.jsx("div",{className:"text-center py-8 text-gray-400",children:e.jsx("p",{className:"text-sm",children:"Aucun opérateur disponible pour ce pays"})}):e.jsx("div",{className:"space-y-2",children:Qe.map(t=>{const s=Lt(t.name);return e.jsxs("button",{onClick:()=>M(t),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 transition-all ${g?.id===t.id?"deposit-step-operator-selected":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s?e.jsx("img",{src:s,alt:t.name,className:"w-10 h-10 rounded-full object-cover border border-gray-100"}):e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${g?.id===t.id?"bg-[#FF7A14] text-gray-900":"bg-gray-100 text-gray-600"}`,children:t.name.charAt(0)}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:t.name}),t.requiresOtp&&e.jsx("p",{className:"text-xs text-[#E85D00]",children:"Code OTP requis"})]})]}),g?.id===t.id&&e.jsx($,{className:"w-5 h-5 text-[#FF7A14]"})]},t.id)})})]}),e.jsx("button",{onClick:()=>he.mutate(),disabled:!g||he.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:he.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("img",{src:"/topup-icon.png",className:"w-6 h-6 object-contain",alt:"topup"})," Initier le paiement"]})})]})]}):l==="sv-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("sv-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-900 font-bold text-xs",children:"1"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Composez ce code sur votre téléphone"})]}),Fe?e.jsxs("div",{className:"deposit-step-otp px-4 py-3 text-center",children:[e.jsx("p",{className:"font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:Fe}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Composez ce code USSD sur votre téléphone"})]}):e.jsxs("p",{className:"text-sm text-gray-600",children:["Composez le code USSD de votre opérateur (ex : ",e.jsx("span",{className:"font-mono font-bold text-[#E85D00]",children:"*144#"}),") sur votre téléphone pour recevoir le code OTP par SMS."]})]}),e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-bold text-xs",children:"2"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Entrez le code OTP reçu par SMS"})]}),e.jsxs("p",{className:"text-xs text-gray-500 mb-3",children:["Après avoir composé le code, vous recevrez un SMS avec un code OTP. Saisissez-le ci-dessous pour confirmer le paiement de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",m]}),"."]}),e.jsx("input",{type:"text",inputMode:"numeric",value:le,onChange:t=>ce(t.target.value),placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]",maxLength:8})]}),e.jsx("button",{onClick:()=>ge.mutate(),disabled:!le.trim()||ge.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:x},children:ge.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):l==="sv-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("sv-operator"),className:"deposit-step-back",children:[e.jsx(j,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(E,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser sur l'application"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Appuyez sur le bouton ci-dessous pour ouvrir la page de paiement de l'opérateur et confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",m]}),"."]})]}),e.jsxs("a",{href:ct,target:"_blank",rel:"noopener noreferrer",className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:x},onClick:()=>{y(!0),r("sv-waiting")},children:[e.jsx(E,{className:"w-5 h-5"})," Ouvrir la page de paiement"]})]})]}):l==="sv-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(u,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:Ee==="approved"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx($,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement confirmé !"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Votre solde a été crédité de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",m]})]})]})]}):Ee==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(R,{className:"w-10 h-10 text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement échoué"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Le paiement a été refusé ou annulé."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[ie&&e.jsxs("button",{onClick:()=>fe.mutate(),disabled:fe.isPending,className:"deposit-step-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50",style:{background:x},children:[fe.isPending?e.jsx(b,{className:"w-4 h-4 animate-spin"}):e.jsx(R,{className:"w-4 h-4"}),"Réessayer"]}),e.jsx("button",{onClick:()=>{r("amount"),f(""),M(null),K(null),G(""),y(!1),z("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(R,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Une demande de paiement de ",e.jsxs("strong",{children:[Number(i).toLocaleString()," ",m]})," a été envoyée sur votre téléphone.",e.jsx("br",{}),"Acceptez-la sur votre téléphone. Cette page se met à jour automatiquement."]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(w,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{r("amount"),f(""),M(null),K(null),G(""),y(!1),z("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})})]}):null:null}export{fs as default};
