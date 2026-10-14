import{c as Ze,a as Dt,b as At,G as Ot,r,j as e,e as C,L as b,f as N}from"./index-Ce3LWOLv.js";import{u as z}from"./useQuery-BawY2P3D.js";import{u as P}from"./useMutation-Cshk7Cvo.js";import{b as Lt}from"./countries-DnL2aGky.js";import{s as x}from"./deposit-display-DN8AQ7fA.js";import{p as qt,I as Tt,Z as Rt}from"./deposit-amounts-B_YvOLiK.js";import{c as Ut}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as $t}from"./auth-chargepoint-combined-0mIqx7uW.js";import{C as w}from"./chevron-left-CNV6VrZJ.js";import{P as se,E as D}from"./phone-D-CN89V1.js";import{R as V}from"./refresh-cw-C7M2TtLs.js";const _=Ze("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const Vt=Ze("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),K="#FF7A14",Xe="#E85D00",u=`linear-gradient(112deg, ${K} 0%, ${Xe} 100%)`,Je="soleaspay-pending-deposit",_t=`
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
    color: ${Xe};
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
    border-color: ${K};
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
    background: ${K} !important;
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
    color: ${K};
  }
  .deposit-step-shell .deposit-step-operator {
    border: 2px solid #d1d5db !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-operator-selected {
    border-color: ${K} !important;
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
`;function h(){return e.jsx("style",{children:_t})}function ps(){const{user:j,refreshUser:W}=Dt(),{toast:i}=At(),A=Ot(),Ne=r.useRef(null),[c,n]=r.useState("amount"),[l,et]=r.useState(null),[m,we]=r.useState(""),[Kt,Wt]=r.useState(null),[o,f]=r.useState(""),[I,tt]=r.useState("CD"),[re,Se]=r.useState(j?.phone||""),[F,ke]=r.useState(""),[st,Ce]=r.useState(""),[Pe,Ie]=r.useState(""),[Fe,Me]=r.useState(""),[M,rt]=r.useState("CD"),[ae,at]=r.useState(""),[g,O]=r.useState(null),[G,Q]=r.useState(null),[ne,Y]=r.useState(""),[nt,ie]=r.useState(""),[oe,ce]=r.useState(""),[Ee,it]=r.useState(""),[Gt,ot]=r.useState(""),[ct,lt]=r.useState(""),[ze,L]=r.useState(""),[De,y]=r.useState(!1),[q,le]=r.useState(null),[S,H]=r.useState(""),[dt,pt]=r.useState(""),[Ae,B]=r.useState(!1),[de,mt]=r.useState("CD"),[J,ut]=r.useState(""),[T,Oe]=r.useState(""),[R,Z]=r.useState(null),[pe,Le]=r.useState(""),[me,qe]=r.useState(""),[Qt,Te]=r.useState(""),[xt,ht]=r.useState(""),[Yt,X]=r.useState(""),[Re,U]=r.useState(!1),d=I,{data:ft,isError:Ue}=z({queryKey:["/api/countries"]}),$e=Lt(ft,Ue);$e.find(t=>t.code===d&&t.isActive);const p="CDF",{data:Ve}=z({queryKey:["/api/settings"]}),{data:gt,isLoading:ue,isError:_e}=z({queryKey:["/api/deposit/methods",d],queryFn:async()=>{const t=await fetch(`/api/deposit/methods/${encodeURIComponent(d)}`,{credentials:"include"}),s=await t.json();if(!t.ok)throw new Error(s.message||"Impossible de charger les moyens de dépôt");return s},enabled:!!d}),k=gt?.methods||[],Ke=new Set(k.map(t=>t.provider)),yt=k.map(t=>t.provider).join(",");r.useEffect(()=>{k.length===1?we(k[0].provider):we("")},[d,yt]);const xe=Number.parseInt(Ve?.minDeposit||"17000",10),ee=Number.isSafeInteger(xe)&&xe>0?xe:17e3,bt=qt(Ve?.depositAmountOptions).filter(t=>t>=ee),We=Ke.has("ashtech"),he=$e.filter(t=>t.isActive&&t.code.toUpperCase()==="CD"),jt=We?[d.toUpperCase()]:[],{data:Ht=[],isLoading:Bt}=z({queryKey:["/api/payment-numbers",d],queryFn:async()=>{const t=await fetch(`/api/payment-numbers?country=${d}`,{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les numéros de paiement");return t.json()},enabled:!!d}),{data:vt,isLoading:Nt}=z({queryKey:["/api/sendavapay/operators",M],queryFn:async()=>{const t=await fetch(`/api/sendavapay/operators/${M}`,{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs SendavaPay");return t.json()},enabled:c==="sv-operator"&&!!M}),Ge=(vt?.data||[]).filter(t=>t.status==="online"),{data:wt=[],isLoading:St}=z({queryKey:["/api/ashtechpay/countries"],queryFn:async()=>{const t=await fetch("/api/ashtechpay/countries",{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs");return t.json()},enabled:c==="ashtech-operator"&&We}),Qe=wt.filter(t=>he.some(s=>s.code.toUpperCase()===t.code.toUpperCase())&&jt.includes(t.code.toUpperCase())),Ye=Qe.find(t=>t.code===de)?.operators||[];r.useEffect(()=>{if(c!=="sv-waiting"||!G||!De)return;const t=setInterval(async()=>{try{const a=await(await fetch(`/api/deposits/${G}/sendavapay-status`,{credentials:"include"})).json();L(a.status),a.status==="approved"?(clearInterval(t),y(!1),i({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),W(),A.invalidateQueries({queryKey:["/api/deposits/history"]}),n("amount"),f(""),O(null),Q(null),Y(""),ie(""),ce(""),L("")):a.status==="rejected"&&(clearInterval(t),y(!1),i({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),n("sv-operator"))}catch{}},5e3);return()=>clearInterval(t)},[c,G,De]),r.useEffect(()=>{if(c!=="ashtech-waiting"||!R||!Re)return;const t=setInterval(async()=>{try{const a=await(await fetch(`/api/deposits/${R}/ashtechpay-status`,{credentials:"include"})).json();X(a.status),a.status==="approved"?(clearInterval(t),U(!1),i({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),W(),A.invalidateQueries({queryKey:["/api/deposits/history"]}),n("amount"),f(""),Z(null),X("")):a.status==="rejected"&&(clearInterval(t),U(!1),i({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),n("ashtech-operator"))}catch{}},5e3);return()=>clearInterval(t)},[c,R,Re]),r.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("soleaspayReturn");if(s!=="success"&&s!=="failure")return;const a=t.get("orderId");let v=!1;try{const te=sessionStorage.getItem(Je),je=te?JSON.parse(te):null,ve=Number(je?.depositId),zt=typeof je?.orderId=="string"?je.orderId:"";Number.isInteger(ve)&&ve>0&&(!a||zt===a)&&(le(ve),H("pending"),pt(s==="success"?"Retour du paiement reçu. Vérification en cours...":"Retour du paiement reçu. Vérification de l'état final..."),B(!0),n("soleaspay-waiting"),v=!0)}catch(te){console.warn("[soleaspay] Could not resume pending deposit:",te)}v||i({title:"Retour du paiement reçu",description:"Consultez l'historique des dépôts pour vérifier le statut du paiement."}),t.delete("soleaspayReturn"),t.delete("orderId");const Be=t.toString();window.history.replaceState({},"",`${window.location.pathname}${Be?`?${Be}`:""}${window.location.hash}`)},[i]),r.useEffect(()=>{if(c!=="soleaspay-waiting"||!q||!Ae)return;const t=setInterval(async()=>{try{const s=await fetch(`/api/deposits/${q}/verify`,{credentials:"include"}),a=await s.json();if(!s.ok)throw new Error(a.message||"Vérification SoleaPay impossible");if(a.status&&H(a.status),a.status==="approved"||a.status==="rejected"){clearInterval(t),B(!1);try{sessionStorage.removeItem(Je)}catch{}a.status==="approved"&&(i({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),W(),A.invalidateQueries({queryKey:["/api/deposits/history"]}))}}catch{}},5e3);return()=>clearInterval(t)},[c,q,Ae]);const kt=t=>{const s=t.target.files?.[0];if(!s)return;if(s.size>5*1024*1024){i({title:"Fichier trop grand",description:"Maximum 5 Mo",variant:"destructive"});return}Ce(s.name);const a=new FileReader;a.onload=v=>ke(v.target?.result),a.readAsDataURL(s)},fe=P({mutationFn:async()=>{if(!l)throw new Error("Aucun numéro sélectionné");const t=await N("POST","/api/deposits",{amount:Number(o),accountName:j?.fullName||"",accountNumber:re,paymentMethod:l.operatorName,country:d,paymentNumberId:l.id,channelName:l.paymentLink?`${l.operatorName} - Lien de paiement`:`${l.operatorName} - ${l.phone}`,screenshot:F||null,paymentMessage:Pe||null,reference:Fe||null});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt non enregistré")}return t.json()},onSuccess:()=>{i({title:"Demande envoyée !",description:"Votre dépôt est en attente de validation"}),A.invalidateQueries({queryKey:["/api/deposits/history"]}),W(),n("amount"),et(null),f(""),Se(j?.phone||""),ke(""),Ce(""),Ie(""),Me("")},onError:t=>i({title:"Dépôt non enregistré",description:x(t.message,"Impossible d’enregistrer le dépôt."),variant:"destructive"})}),[Zt,Ct]=r.useState(null),[Xt,Pt]=r.useState("");r.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("wp_status"),a=t.get("wp_depositId");s&&(Pt(s),a&&Ct(parseInt(a)),window.history.replaceState({},"","/deposit"),s==="success"&&(i({title:"Paiement en cours de confirmation",description:"Votre dépôt sera crédité dès confirmation."}),A.invalidateQueries({queryKey:["/api/deposits/history"]})))},[]);const $=P({mutationFn:async()=>{const t=await N("POST","/api/deposits",{amount:Number(o),accountName:j?.fullName||"",accountNumber:j?.phone||"",paymentMethod:"WestPay",country:d,useWestpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt non enregistré")}return t.json()},onSuccess:t=>{t.westpayUrl&&(window.location.href=t.westpayUrl)},onError:t=>i({title:"Dépôt non enregistré",description:x(t.message,"Impossible d’enregistrer le dépôt."),variant:"destructive"})}),He=P({mutationFn:async()=>{const t=await N("POST","/api/deposits",{amount:Number(o),accountName:j?.fullName||"",accountNumber:j?.phone||"",paymentMethod:"InPay",country:d,useInpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt non enregistré")}return t.json()},onSuccess:t=>{t.inpayUrl&&(window.location.href=t.inpayUrl)},onError:t=>i({title:"Dépôt non enregistré",description:x(t.message,"Impossible d’enregistrer le dépôt."),variant:"destructive"})}),E=P({mutationFn:async t=>{if(!T||!J.trim())throw new Error("Sélectionnez un opérateur et saisissez votre numéro");const s=await N("POST","/api/ashtechpay/collect",{amount:Number(o),country:de,operator:T,phone:J.trim(),depositId:R||void 0,otp:t||void 0});if(!s.ok){const a=await s.json();throw new Error(a.message||"Dépôt non enregistré")}return s.json()},onSuccess:t=>{Z(t.depositId),Te(x(t.message,"")),qe(t.ussdCode||""),t.waveUrl?(ht(t.waveUrl),n("ashtech-redirect")):t.requiresOtp?n("ashtech-otp"):(U(!0),X(t.status||"pending"),n("ashtech-waiting"))},onError:t=>{if(t.data?.requiresOtp){Z(t.data.depositId||R),qe(t.data.ussdCode||""),Te(x(t.message,"Composez le code indiqué puis saisissez le code OTP.")),Le(""),n("ashtech-otp");return}i({title:"Dépôt non enregistré",description:x(t.message,"Impossible d’enregistrer le dépôt."),variant:"destructive"})}}),ge=P({mutationFn:async()=>{if(!g)throw new Error("Sélectionnez un opérateur");const t=await N("POST","/api/sendavapay/create",{amount:Number(o),country:M,operatorId:g.id,operatorName:g.name,payerPhone:ae});if(!t.ok){const v=await t.json();throw new Error(v.message||"Création du paiement impossible")}const s=await t.json();Q(s.depositId),Y(s.paymentToken);const a=await N("POST","/api/sendavapay/initiate",{paymentToken:s.paymentToken,payerCountry:M,operatorId:g.id,depositId:s.depositId,payerPhone:ae});if(!a.ok){const v=await a.json();throw new Error(v.message||"Initiation du paiement impossible")}return a.json()},onSuccess:t=>{const s=g?.name?.toLowerCase().includes("wave");t.requiresRedirect&&t.redirectUrl&&s?(lt(t.redirectUrl),n("sv-redirect")):t.requiresRedirect&&!s?(y(!0),n("sv-waiting")):t.requiresOtp&&t.otpToken?(ie(t.otpToken),it(t.ussdCode||""),ot(x(t.message,"")),n("sv-otp")):t.success?(y(!0),n("sv-waiting")):i({title:"Paiement impossible",description:x(t.error||t.message,"Le paiement n'a pas pu être initié."),variant:"destructive"})},onError:t=>i({title:"Paiement impossible",description:x(t.message,"Le paiement n'a pas pu être initié."),variant:"destructive"})}),ye=P({mutationFn:async()=>{if(!ne)throw new Error("Token de paiement manquant");const t=await N("POST","/api/sendavapay/retry",{paymentToken:ne,depositId:G});if(!t.ok){const s=await t.json();throw new Error(s.message||"Nouvelle tentative impossible")}return t.json()},onSuccess:()=>{ce(""),ie(""),L(""),y(!1),n("sv-operator"),i({title:"Prêt à réessayer",description:"Sélectionnez un opérateur et relancez le paiement."})},onError:t=>i({title:"Nouvelle tentative impossible",description:x(t.message,"Réessayez dans quelques instants."),variant:"destructive"})}),be=P({mutationFn:async()=>{const t=await N("POST","/api/sendavapay/submit-otp",{otpToken:nt,otp:oe});if(!t.ok){const s=await t.json();throw new Error(s.message||"Validation du code OTP impossible")}return t.json()},onSuccess:()=>{y(!0),n("sv-waiting")},onError:t=>i({title:"Validation du code OTP impossible",description:x(t.message,"Vérifiez le code puis réessayez."),variant:"destructive"})}),It=()=>{if(!o||Number(o)<ee){i({title:"Montant invalide",description:`Le minimum est de ${ee.toLocaleString()} ${p}`,variant:"destructive"});return}if(m==="inpay"&&(!Number.isInteger(Number(o))||Number(o)%5!==0)){i({title:"Montant invalide",description:"Utilisez un montant entier multiple de 5 : 300, 305, 310…",variant:"destructive"});return}Ft()},Ft=()=>{if(!I){i({title:"Pays requis",description:"Sélectionnez le pays du paiement.",variant:"destructive"});return}if(!m||!Ke.has(m)){i({title:"Moyen de dépôt requis",description:ue?"Chargement des moyens disponibles...":"Aucun moyen de dépôt n’est configuré pour ce pays.",variant:"destructive"});return}if(m==="soleaspay"||m==="ashtech"||m==="sendavapay"||m==="manual"||m==="clapay"){window.location.href=`/robotpay?amount=${encodeURIComponent(Number(o))}&country=${encodeURIComponent(I)}&provider=${encodeURIComponent(m)}`;return}if(m==="inpay"){if(!Number.isInteger(Number(o))||Number(o)%5!==0){i({title:"Montant invalide",description:"Utilisez un montant entier multiple de 5 : 300, 305, 310…",variant:"destructive"});return}He.mutate();return}if(m==="westpay"){$.mutate();return}},Mt=t=>{const s=t.toLowerCase();return s.includes("tmoney")||s.includes("t-money")?"/operators/tmoney.png":s.includes("moov")?"/operators/moov.jpg":s.includes("orange")?"/operators/orange.png":s.includes("mtn")?"/operators/mtn.png":s.includes("airtel")?"/operators/airtel.png":s.includes("wave")?"/operators/wave.png":null},Et=()=>{if(!re.trim()){i({title:"Numéro requis",description:"Entrez le numéro depuis lequel vous avez payé",variant:"destructive"});return}if(!F){i({title:"Capture requise",description:"Veuillez joindre la capture d'écran du paiement",variant:"destructive"});return}fe.mutate()};return j?c==="amount"?e.jsxs("main",{className:"recharge-reference min-h-screen bg-[#f7f3f0]",children:[e.jsx("style",{children:`
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
          background: ${u};
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
          background: ${u};
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
      `}),e.jsxs("div",{className:"recharge-screen",children:[e.jsxs("section",{className:"recharge-hero","aria-label":"Dépôt",children:[e.jsx("div",{className:"recharge-hero-art",children:e.jsx("img",{src:$t,alt:""})}),e.jsxs("h1",{className:"recharge-title",children:[e.jsx("img",{className:"recharge-title-logo",src:Ut,alt:""}),e.jsx("span",{children:"Dépôt"})]}),e.jsx(C,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(C,{href:"/account",children:e.jsx("button",{className:"recharge-back","aria-label":"Retour"})})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de recharge",children:[e.jsx("div",{className:"preset-row",children:bt.map(t=>e.jsx("button",{className:`preset ${o===t?"active":""}`,onClick:()=>f(t),children:t},t))}),e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de recharge"}),e.jsxs("label",{className:"amount-input",children:[e.jsx("input",{type:"number",inputMode:"numeric",value:o,onChange:t=>f(t.target.value?Number(t.target.value):""),"aria-label":"Montant de recharge"}),e.jsx("span",{className:"currency",children:p})]})]}),e.jsxs("section",{className:"country-panel","aria-label":"Pays du paiement",children:[e.jsx("label",{htmlFor:"deposit-country",children:"Pays du paiement"}),e.jsxs("select",{id:"deposit-country",value:I,onChange:t=>tt(t.target.value),children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),he.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]}),Ue&&e.jsx("p",{className:"mt-2 text-xs text-amber-700",children:"Liste locale temporaire affichée."}),I&&!ue&&(_e||k.length===0||k.length>1)&&e.jsx("p",{role:"alert",className:"mt-2 text-sm text-red-700",children:_e?"Impossible de vérifier les options de paiement pour ce pays.":k.length>1?"Plusieurs options de paiement sont configurées pour ce pays. Contactez le service client.":"Aucune option de paiement n’est disponible pour ce pays."})]}),e.jsx("button",{className:"continue",onClick:It,disabled:!I||ue||!m||He.isPending||$.isPending,children:"Recharger maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de recharge",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Recharge :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de recharge :"})," ",ee.toLocaleString("fr-FR")," ",p]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Vérifiez attentivement vos informations de compte"})," lors du virement pour que votre paiement soit traité correctement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Chaque commande possède ses propres informations de paiement"})," ; ne réutilisez pas les informations précédentes pour un second paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Après un virement réussi,"})," veuillez patienter 10 à 30 minutes."]})]})]})]}):c==="form"&&l?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>n("amount"),children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Confirmer le paiement"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4 flex items-center gap-3",children:[l.logoUrl?e.jsx("img",{src:l.logoUrl,alt:l.operatorName,className:"w-10 h-10 rounded-lg object-contain"}):e.jsx("div",{className:"w-10 h-10 rounded-lg bg-white flex items-center justify-center border-2 border-[#FF7A14]",children:e.jsx(se,{className:"w-5 h-5 text-[#FF7A14]"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:l.paymentLink?"Lien de paiement":"Numéro destinataire"}),l.paymentLink?e.jsxs("a",{href:l.paymentLink,target:"_blank",rel:"noreferrer",className:"mt-1 flex items-center gap-1 text-sm font-bold text-[#E85D00] underline",children:[e.jsx(D,{className:"h-4 w-4"})," Ouvrir le lien de paiement"]}):e.jsxs("p",{className:"font-bold text-[#E85D00] text-sm",children:[l.operatorName," — ",l.phone]}),e.jsx("p",{className:"text-xs text-gray-500",children:l.ownerName})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant"}),e.jsxs("p",{className:"font-bold text-gray-800",children:[Number(o).toLocaleString()," ",p]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Votre numéro payeur"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(se,{className:"w-4 h-4 text-gray-400 ml-4"}),e.jsx("input",{type:"tel",value:re,onChange:t=>Se(t.target.value),placeholder:"Numéro depuis lequel vous avez payé",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Référence / ID transaction ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("input",{type:"text",value:Fe,onChange:t=>Me(t.target.value),placeholder:"Numéro de référence de la transaction",className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Message reçu après paiement ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("textarea",{value:Pe,onChange:t=>Ie(t.target.value),placeholder:"Collez ici le SMS ou message de confirmation reçu...",rows:3,className:"deposit-step-field w-full px-4 py-3 text-sm text-gray-700 outline-none resize-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Capture d'écran du paiement ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{ref:Ne,type:"file",accept:"image/*",onChange:kt,className:"hidden"}),e.jsx("button",{onClick:()=>Ne.current?.click(),className:`w-full border-2 border-dashed rounded-xl py-7 flex flex-col items-center gap-2 transition-colors ${F?"border-[#FF7A14] bg-[#FFF3E8]":"border-gray-300 bg-gray-50 hover:border-[#FF7A14] hover:bg-[#FFF3E8]"}`,children:F?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"w-8 h-8 text-[#FF7A14]"}),e.jsx("p",{className:"text-sm font-medium text-[#E85D00]",children:st}),e.jsx("p",{className:"text-xs text-gray-400",children:"Appuyez pour changer"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Tt,{className:"w-8 h-8 text-gray-400"}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Appuyez pour ajouter la capture"}),e.jsx("p",{className:"text-xs text-gray-400",children:"JPG, PNG — max 5 Mo"})]})}),F&&e.jsx("div",{className:"mt-3 rounded-xl overflow-hidden border border-gray-100",children:e.jsx("img",{src:F,alt:"Capture",className:"w-full max-h-52 object-contain bg-gray-50"})})]}),e.jsx("button",{onClick:Et,disabled:fe.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-50",style:{background:u},children:fe.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Envoi en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(Vt,{className:"w-5 h-5"})," Soumettre ma demande"]})})]})]}):c==="westpay"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>n("amount"),children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Paiement Mobile Money"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-summary mx-0 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",p]})]}),e.jsx("button",{onClick:()=>n("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-card p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Rt,{className:"w-5 h-5 text-[#FF7A14]"}),e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:"Comment ça marche ?"})]}),e.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:["1. Cliquez sur ",e.jsx("strong",{children:"Continuer le paiement"})," — vous serez redirigé vers la page de paiement sécurisée."]}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"2. Entrez votre numéro Mobile Money et validez le paiement USSD depuis votre téléphone."}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"3. Après paiement, vous serez automatiquement redirigé ici. Votre solde est crédité après confirmation."})]}),e.jsx("button",{onClick:()=>$.mutate(),disabled:$.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40 flex items-center justify-center gap-2",style:{background:u},children:$.isPending?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Redirection en cours..."]}):e.jsxs(e.Fragment,{children:[e.jsx(D,{className:"w-5 h-5"})," Continuer le paiement"]})}),e.jsx("p",{className:"text-xs text-center text-gray-400",children:"Paiement sécurisé — USSD Mobile Money"})]})]}):c==="ashtech-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>n("amount"),children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Paiement Mobile Money"})]}),e.jsx(C,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",p]})]}),e.jsx("button",{onClick:()=>n("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),St?e.jsx(b,{className:"w-6 h-6 animate-spin text-[#FF7A14] mx-auto"}):e.jsx("select",{value:de,onChange:t=>{mt(t.target.value),Oe("")},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:Qe.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (CDF)"]},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(se,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:J,onChange:t=>ut(t.target.value),placeholder:"Votre numéro Mobile Money",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),Ye.length===0?e.jsx("p",{className:"text-sm text-gray-400 text-center py-5",children:"Aucun opérateur disponible pour ce pays"}):e.jsx("div",{className:"space-y-2",children:Ye.map((t,s)=>{const a=typeof t=="string"?t:t.name||t.code||`Opérateur ${s+1}`;return e.jsxs("button",{onClick:()=>Oe(a),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 ${T===a?"deposit-step-operator-selected":""}`,children:[e.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:a}),T===a&&e.jsx(_,{className:"w-5 h-5 text-[#FF7A14]"})]},`${a}-${s}`)})})]}),e.jsx("button",{onClick:()=>E.mutate(void 0),disabled:!T||!J.trim()||E.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:E.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):"Initier le paiement"})]})]}):c==="ashtech-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>n("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"font-bold text-gray-900 text-sm mb-2",children:"Code à composer"}),me&&e.jsx("p",{className:"deposit-step-otp px-4 py-3 text-center font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:me}),e.jsx("p",{className:"text-sm text-gray-600 mt-3",children:me?"Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous.":"Un code OTP vous a été envoyé. Saisissez-le ci-dessous."})]}),e.jsx("input",{type:"text",inputMode:"numeric",value:pe,onChange:t=>Le(t.target.value),maxLength:8,placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]"}),e.jsx("button",{onClick:()=>E.mutate(pe),disabled:!pe.trim()||E.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:E.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):c==="ashtech-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>n("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(D,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser avec Wave"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Ouvrez la page Wave pour confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",p]}),"."]})]}),e.jsxs("a",{href:xt,target:"_blank",rel:"noopener noreferrer",onClick:()=>{U(!0),n("ashtech-waiting")},className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:u},children:[e.jsx(D,{className:"w-5 h-5"})," Ouvrir Wave"]})]})]}):c==="ashtech-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(V,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Validez le paiement sur votre téléphone. Cette page se met à jour automatiquement."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(C,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{n("amount"),f(""),Z(null),U(!1),X("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):c==="soleaspay-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:S==="approved"?e.jsx(_,{className:"w-10 h-10 text-[#FF7A14]"}):e.jsx(V,{className:`w-10 h-10 ${S==="rejected"?"text-red-400":"text-[#FF7A14] animate-spin"}`})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:S==="approved"?"Paiement confirmé !":S==="rejected"?"Paiement échoué":"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:S==="approved"?`Votre solde a été crédité de ${Number(o).toLocaleString()} ${p}.`:S==="rejected"?"Le paiement a été refusé ou annulé.":dt||"Validez la demande de paiement sur votre téléphone. Cette page se met à jour automatiquement."}),q&&e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:["Référence dépôt : #",q]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[S==="rejected"?e.jsx("button",{onClick:()=>{le(null),H(""),B(!1),window.location.href=`/robotpay?amount=${encodeURIComponent(Number(o))}&country=${encodeURIComponent(d)}&provider=soleaspay`},className:"deposit-step-primary flex-1 py-3 text-sm",style:{background:u},children:"Réessayer"}):e.jsx(C,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{n("amount"),f(""),le(null),H(""),B(!1)},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):c==="sv-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>n("amount"),children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Top up"})]}),e.jsx(C,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",p]})]}),e.jsx("button",{onClick:()=>n("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),e.jsx("select",{value:M,onChange:t=>{rt(t.target.value),O(null)},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:he.map(t=>e.jsx("option",{value:t.code,children:t.name},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(se,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:ae,onChange:t=>at(t.target.value),placeholder:"Numéro sur lequel envoyer la demande",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),Nt?e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx(b,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):Ge.length===0?e.jsx("div",{className:"text-center py-8 text-gray-400",children:e.jsx("p",{className:"text-sm",children:"Aucun opérateur disponible pour ce pays"})}):e.jsx("div",{className:"space-y-2",children:Ge.map(t=>{const s=Mt(t.name);return e.jsxs("button",{onClick:()=>O(t),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 transition-all ${g?.id===t.id?"deposit-step-operator-selected":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s?e.jsx("img",{src:s,alt:t.name,className:"w-10 h-10 rounded-full object-cover border border-gray-100"}):e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${g?.id===t.id?"bg-[#FF7A14] text-gray-900":"bg-gray-100 text-gray-600"}`,children:t.name.charAt(0)}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:t.name}),t.requiresOtp&&e.jsx("p",{className:"text-xs text-[#E85D00]",children:"Code OTP requis"})]})]}),g?.id===t.id&&e.jsx(_,{className:"w-5 h-5 text-[#FF7A14]"})]},t.id)})})]}),e.jsx("button",{onClick:()=>ge.mutate(),disabled:!g||ge.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:ge.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("img",{src:"/topup-icon.png",className:"w-6 h-6 object-contain",alt:"topup"})," Initier le paiement"]})})]})]}):c==="sv-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>n("sv-operator"),className:"deposit-step-back",children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-900 font-bold text-xs",children:"1"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Composez ce code sur votre téléphone"})]}),Ee?e.jsxs("div",{className:"deposit-step-otp px-4 py-3 text-center",children:[e.jsx("p",{className:"font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:Ee}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Composez ce code USSD sur votre téléphone"})]}):e.jsxs("p",{className:"text-sm text-gray-600",children:["Composez le code USSD de votre opérateur (ex : ",e.jsx("span",{className:"font-mono font-bold text-[#E85D00]",children:"*144#"}),") sur votre téléphone pour recevoir le code OTP par SMS."]})]}),e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-bold text-xs",children:"2"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Entrez le code OTP reçu par SMS"})]}),e.jsxs("p",{className:"text-xs text-gray-500 mb-3",children:["Après avoir composé le code, vous recevrez un SMS avec un code OTP. Saisissez-le ci-dessous pour confirmer le paiement de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",p]}),"."]}),e.jsx("input",{type:"text",inputMode:"numeric",value:oe,onChange:t=>ce(t.target.value),placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]",maxLength:8})]}),e.jsx("button",{onClick:()=>be.mutate(),disabled:!oe.trim()||be.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:be.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):c==="sv-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>n("sv-operator"),className:"deposit-step-back",children:[e.jsx(w,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(D,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser sur l'application"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Appuyez sur le bouton ci-dessous pour ouvrir la page de paiement de l'opérateur et confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",p]}),"."]})]}),e.jsxs("a",{href:ct,target:"_blank",rel:"noopener noreferrer",className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:u},onClick:()=>{y(!0),n("sv-waiting")},children:[e.jsx(D,{className:"w-5 h-5"})," Ouvrir la page de paiement"]})]})]}):c==="sv-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:ze==="approved"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(_,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement confirmé !"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Votre solde a été crédité de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",p]})]})]})]}):ze==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(V,{className:"w-10 h-10 text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement échoué"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Le paiement a été refusé ou annulé."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[ne&&e.jsxs("button",{onClick:()=>ye.mutate(),disabled:ye.isPending,className:"deposit-step-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50",style:{background:u},children:[ye.isPending?e.jsx(b,{className:"w-4 h-4 animate-spin"}):e.jsx(V,{className:"w-4 h-4"}),"Réessayer"]}),e.jsx("button",{onClick:()=>{n("amount"),f(""),O(null),Q(null),Y(""),y(!1),L("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(V,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Une demande de paiement de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",p]})," a été envoyée sur votre téléphone.",e.jsx("br",{}),"Acceptez-la sur votre téléphone. Cette page se met à jour automatiquement."]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(C,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{n("amount"),f(""),O(null),Q(null),Y(""),y(!1),L("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})})]}):null:null}export{ps as default};
