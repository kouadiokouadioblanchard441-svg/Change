import{c as lt,a as Wt,b as Qt,G as Gt,r as a,j as e,e as N,L as f,f as v}from"./index-CkzHRE8k.js";import{u as M}from"./useQuery-j4m9DStk.js";import{u as S}from"./useMutation-CTOo041b.js";import{c as Ht}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as Yt}from"./auth-chargepoint-combined-0mIqx7uW.js";import{C as g}from"./chevron-left-BgSclrhl.js";import{P as _,E as A,I as Bt}from"./phone-Ce3EJxYl.js";import{Z as Jt}from"./zap-BXuO0FwA.js";import{R as K}from"./refresh-cw-C6tTgkWo.js";const W=lt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const Zt=lt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Q="#FF7A14",ct="#E85D00",u=`linear-gradient(112deg, ${Q} 0%, ${ct} 100%)`,Se="soleaspay-pending-deposit",Xt=`
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
    color: ${ct};
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
    border-color: ${Q};
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
    background: ${Q} !important;
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
    color: ${Q};
  }
  .deposit-step-shell .deposit-step-operator {
    border: 2px solid #d1d5db !important;
    border-radius: 12px !important;
    background: #fff !important;
  }
  .deposit-step-shell .deposit-step-operator-selected {
    border-color: ${Q} !important;
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
`;function h(){return e.jsx("style",{children:Xt})}function bs(){const{user:c,refreshUser:G}=Wt(),{toast:i}=Qt(),P=Gt(),ke=a.useRef(null),[l,r]=a.useState("amount"),[d,dt]=a.useState(null),[es,ts]=a.useState(null),[o,y]=a.useState(""),[k,Ce]=a.useState(""),[oe,Pe]=a.useState(c?.phone||""),[I,Ie]=a.useState(""),[pt,Fe]=a.useState(""),[Ee,Me]=a.useState(""),[Ae,Oe]=a.useState(""),[F,mt]=a.useState(c?.country||""),[le,xt]=a.useState(""),[j,O]=a.useState(null),[H,Y]=a.useState(null),[ce,B]=a.useState(""),[ut,de]=a.useState(""),[pe,me]=a.useState(""),[ze,ht]=a.useState(""),[ss,ft]=a.useState(""),[gt,yt]=a.useState(""),[De,z]=a.useState(""),[Le,b]=a.useState(!1),[J,qe]=a.useState(""),[D,Te]=a.useState(c?.phone||""),[L,Z]=a.useState(null),[C,q]=a.useState(""),[jt,Ue]=a.useState(""),[Re,T]=a.useState(!1),[xe,$e]=a.useState(c?.country||""),[X,Ve]=a.useState(""),[U,_e]=a.useState(""),[R,ee]=a.useState(null),[ue,Ke]=a.useState(""),[he,We]=a.useState(""),[as,Qe]=a.useState(""),[bt,Nt]=a.useState(""),[rs,te]=a.useState(""),[Ge,$]=a.useState(!1),p=k,{data:He=[]}=M({queryKey:["/api/countries"]}),x=He.find(t=>t.code===p&&t.isActive)?.currency||"FCFA",{data:m}=M({queryKey:["/api/settings"]}),se=Math.max(3500,parseInt(m?.minDeposit||"3500")),vt=[3500,5e3,1e4,25e3,5e4,1e5,2e5,3e5,4e5,5e5].filter(t=>t>=se);m?.sendavapayEnabled,m?.sendavapayChannelName;const wt=m?.westpayEnabled==="true",ae=m?.westpayChannelName||"WestPay",Ye=m?.westpayCountries||"",St=wt&&(!Ye||Ye.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase())),kt=m?.inpayEnabled==="true",Ct=m?.inpayChannelName||"InPay",Pt=m?.inpayCountries||"",Be=kt&&Pt.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase()),It=m?.soleaspayEnabled==="true",fe=m?.soleaspayChannelName||"SoleaPay",Ft=m?.soleaspayCountries||"",Je=It&&Ft.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase()),Et=m?.ashtechEnabled==="true",Ze=m?.ashtechChannelName||"AshtechPay",re=m?.ashtechCountries||"",Mt=!re||re.split(",").map(t=>t.trim().toUpperCase()).includes(p.toUpperCase()),Xe=Et&&Mt,ne=He.filter(t=>t.isActive),et=re?re.split(",").map(t=>t.trim().toUpperCase()).filter(Boolean):null,{data:is=[],isLoading:os}=M({queryKey:["/api/payment-numbers",p],queryFn:async()=>{const t=await fetch(`/api/payment-numbers?country=${p}`,{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les numéros de paiement");return t.json()},enabled:!!p}),{data:At,isLoading:Ot}=M({queryKey:["/api/sendavapay/operators",F],queryFn:async()=>{const t=await fetch(`/api/sendavapay/operators/${F}`,{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs SendavaPay");return t.json()},enabled:l==="sv-operator"&&!!F}),tt=(At?.data||[]).filter(t=>t.status==="online"),{data:zt,isLoading:Dt}=M({queryKey:["/api/soleaspay/services"],queryFn:async()=>{const t=await fetch("/api/soleaspay/services",{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs SoleaPay");return t.json()},enabled:l==="soleaspay-operator"&&Je}),st=Object.keys(zt?.services?.[p.toUpperCase()]||{}),{data:Lt=[],isLoading:qt}=M({queryKey:["/api/ashtechpay/countries"],queryFn:async()=>{const t=await fetch("/api/ashtechpay/countries",{credentials:"include"});if(!t.ok)throw new Error("Impossible de charger les opérateurs");return t.json()},enabled:l==="ashtech-operator"&&Xe}),at=Lt.filter(t=>ne.some(s=>s.code.toUpperCase()===t.code.toUpperCase())&&(!et||et.includes(t.code.toUpperCase()))),rt=at.find(t=>t.code===xe)?.operators||[];a.useEffect(()=>{if(l!=="sv-waiting"||!H||!Le)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${H}/sendavapay-status`,{credentials:"include"})).json();z(n.status),n.status==="approved"?(clearInterval(t),b(!1),i({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),G(),P.invalidateQueries({queryKey:["/api/deposits/history"]}),r("amount"),y(""),O(null),Y(null),B(""),de(""),me(""),z("")):n.status==="rejected"&&(clearInterval(t),b(!1),i({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),r("sv-operator"))}catch{}},5e3);return()=>clearInterval(t)},[l,H,Le]),a.useEffect(()=>{if(l!=="ashtech-waiting"||!R||!Ge)return;const t=setInterval(async()=>{try{const n=await(await fetch(`/api/deposits/${R}/ashtechpay-status`,{credentials:"include"})).json();te(n.status),n.status==="approved"?(clearInterval(t),$(!1),i({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),G(),P.invalidateQueries({queryKey:["/api/deposits/history"]}),r("amount"),y(""),ee(null),te("")):n.status==="rejected"&&(clearInterval(t),$(!1),i({title:"Paiement échoué",description:"Le paiement a été refusé ou annulé.",variant:"destructive"}),r("ashtech-operator"))}catch{}},5e3);return()=>clearInterval(t)},[l,R,Ge]),a.useEffect(()=>{!D&&c?.phone&&Te(c.phone)},[D,c?.phone]),a.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("soleaspayReturn");if(s!=="success"&&s!=="failure")return;const n=t.get("orderId");let w=!1;try{const ie=sessionStorage.getItem(Se),ve=ie?JSON.parse(ie):null,we=Number(ve?.depositId),Kt=typeof ve?.orderId=="string"?ve.orderId:"";Number.isInteger(we)&&we>0&&(!n||Kt===n)&&(Z(we),q("pending"),Ue(s==="success"?"Retour de SoleaPay reçu. Vérification du paiement en cours...":"Retour de SoleaPay reçu. Vérification de l'état final du paiement..."),T(!0),r("soleaspay-waiting"),w=!0)}catch(ie){console.warn("[soleaspay] Could not resume pending deposit:",ie)}w||i({title:"Retour SoleaPay reçu",description:"Consultez l'historique des dépôts pour vérifier le statut du paiement."}),t.delete("soleaspayReturn"),t.delete("orderId");const ot=t.toString();window.history.replaceState({},"",`${window.location.pathname}${ot?`?${ot}`:""}${window.location.hash}`)},[i]),a.useEffect(()=>{if(l!=="soleaspay-waiting"||!L||!Re)return;const t=setInterval(async()=>{try{const s=await fetch(`/api/deposits/${L}/verify`,{credentials:"include"}),n=await s.json();if(!s.ok)throw new Error(n.message||"Vérification SoleaPay impossible");if(n.status&&q(n.status),n.status==="approved"||n.status==="rejected"){clearInterval(t),T(!1);try{sessionStorage.removeItem(Se)}catch{}n.status==="approved"&&(i({title:"Paiement confirmé !",description:"Votre solde a été crédité."}),G(),P.invalidateQueries({queryKey:["/api/deposits/history"]}))}}catch{}},5e3);return()=>clearInterval(t)},[l,L,Re]);const Tt=t=>{const s=t.target.files?.[0];if(!s)return;if(s.size>5*1024*1024){i({title:"Fichier trop grand",description:"Maximum 5 Mo",variant:"destructive"});return}Fe(s.name);const n=new FileReader;n.onload=w=>Ie(w.target?.result),n.readAsDataURL(s)},ge=S({mutationFn:async()=>{if(!d)throw new Error("Aucun numéro sélectionné");const t=await v("POST","/api/deposits",{amount:Number(o),accountName:c?.fullName||"",accountNumber:oe,paymentMethod:d.operatorName,country:p,paymentNumberId:d.id,channelName:d.paymentLink?`${d.operatorName} - Lien de paiement`:`${d.operatorName} - ${d.phone}`,screenshot:I||null,paymentMessage:Ee||null,reference:Ae||null});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt non enregistré")}return t.json()},onSuccess:()=>{i({title:"Demande envoyée !",description:"Votre dépôt est en attente de validation"}),P.invalidateQueries({queryKey:["/api/deposits/history"]}),G(),r("amount"),dt(null),y(""),Pe(c?.phone||""),Ie(""),Fe(""),Me(""),Oe("")},onError:t=>i({title:"Dépôt non enregistré",description:t.message,variant:"destructive"})}),[cs,Ut]=a.useState(null),[ds,Rt]=a.useState("");a.useEffect(()=>{const t=new URLSearchParams(window.location.search),s=t.get("wp_status"),n=t.get("wp_depositId");s&&(Rt(s),n&&Ut(parseInt(n)),window.history.replaceState({},"","/deposit"),s==="success"&&(i({title:"Paiement en cours de confirmation",description:"Votre dépôt sera crédité dès confirmation WestPay."}),P.invalidateQueries({queryKey:["/api/deposits/history"]})))},[]);const ye=S({mutationFn:async()=>{const t=D.trim()||c?.phone||"";if(!J||!t)throw new Error("Sélectionnez un opérateur et saisissez votre numéro Mobile Money");const s=await v("POST","/api/deposits",{amount:Number(o),accountName:c?.fullName||"",accountNumber:t,paymentMethod:J,country:p,useSoleaspay:!0});if(!s.ok){const n=await s.json();throw new Error(n.message||"Dépôt SoleaPay non enregistré")}return s.json()},onSuccess:t=>{if(!t.deposit?.id){i({title:"Dépôt SoleaPay non enregistré",description:"Le serveur n'a pas retourné de référence de dépôt.",variant:"destructive"});return}try{sessionStorage.setItem(Se,JSON.stringify({depositId:t.deposit.id,orderId:t.deposit.soleaspayOrderId||""}))}catch(s){console.warn("[soleaspay] Could not save pending deposit for return:",s)}Z(t.deposit.id),q("pending"),Ue(t.message||"Validez la demande de paiement sur votre téléphone."),T(!0),r("soleaspay-waiting"),P.invalidateQueries({queryKey:["/api/deposits/history"]})},onError:t=>i({title:`Dépôt ${fe} non enregistré`,description:t.message,variant:"destructive"})}),V=S({mutationFn:async()=>{const t=await v("POST","/api/deposits",{amount:Number(o),accountName:c?.fullName||"",accountNumber:c?.phone||"",paymentMethod:"WestPay",country:p,useWestpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt WestPay non enregistré")}return t.json()},onSuccess:t=>{t.westpayUrl&&(window.location.href=t.westpayUrl)},onError:t=>i({title:"Dépôt WestPay non enregistré",description:t.message,variant:"destructive"})}),nt=S({mutationFn:async()=>{const t=await v("POST","/api/deposits",{amount:Number(o),accountName:c?.fullName||"",accountNumber:c?.phone||"",paymentMethod:"InPay",country:p,useInpay:!0});if(!t.ok){const s=await t.json();throw new Error(s.message||"Dépôt InPay non enregistré")}return t.json()},onSuccess:t=>{t.inpayUrl&&(window.location.href=t.inpayUrl)},onError:t=>i({title:`Dépôt ${Ct} non enregistré`,description:t.message,variant:"destructive"})}),E=S({mutationFn:async t=>{if(!U||!X.trim())throw new Error("Sélectionnez un opérateur et saisissez votre numéro");const s=await v("POST","/api/ashtechpay/collect",{amount:Number(o),country:xe,operator:U,phone:X.trim(),depositId:R||void 0,otp:t||void 0});if(!s.ok){const n=await s.json();throw new Error(n.message||"Dépôt AshtechPay non enregistré")}return s.json()},onSuccess:t=>{ee(t.depositId),Qe(t.message||""),We(t.ussdCode||""),t.waveUrl?(Nt(t.waveUrl),r("ashtech-redirect")):t.requiresOtp?r("ashtech-otp"):($(!0),te(t.status||"pending"),r("ashtech-waiting"))},onError:t=>{if(t.data?.requiresOtp){ee(t.data.depositId||R),We(t.data.ussdCode||""),Qe(t.message||"Composez le code indiqué puis saisissez le code OTP."),Ke(""),r("ashtech-otp");return}i({title:`Dépôt ${Ze} non enregistré`,description:t.message,variant:"destructive"})}}),je=S({mutationFn:async()=>{if(!j)throw new Error("Sélectionnez un opérateur");const t=await v("POST","/api/sendavapay/create",{amount:Number(o),country:F,operatorId:j.id,operatorName:j.name,payerPhone:le});if(!t.ok){const w=await t.json();throw new Error(w.message||"Création du paiement impossible")}const s=await t.json();Y(s.depositId),B(s.paymentToken);const n=await v("POST","/api/sendavapay/initiate",{paymentToken:s.paymentToken,payerCountry:F,operatorId:j.id,depositId:s.depositId,payerPhone:le});if(!n.ok){const w=await n.json();throw new Error(w.message||"Initiation du paiement impossible")}return n.json()},onSuccess:t=>{const s=j?.name?.toLowerCase().includes("wave");t.requiresRedirect&&t.redirectUrl&&s?(yt(t.redirectUrl),r("sv-redirect")):t.requiresRedirect&&!s?(b(!0),r("sv-waiting")):t.requiresOtp&&t.otpToken?(de(t.otpToken),ht(t.ussdCode||""),ft(t.message||""),r("sv-otp")):t.success?(b(!0),r("sv-waiting")):i({title:"Paiement SendavaPay impossible",description:t.error||t.message||"Le paiement n'a pas pu être initié.",variant:"destructive"})},onError:t=>i({title:"Paiement SendavaPay impossible",description:t.message,variant:"destructive"})}),be=S({mutationFn:async()=>{if(!ce)throw new Error("Token de paiement manquant");const t=await v("POST","/api/sendavapay/retry",{paymentToken:ce,depositId:H});if(!t.ok){const s=await t.json();throw new Error(s.message||"Nouvelle tentative impossible")}return t.json()},onSuccess:()=>{me(""),de(""),z(""),b(!1),r("sv-operator"),i({title:"Prêt à réessayer",description:"Sélectionnez un opérateur et relancez le paiement."})},onError:t=>i({title:"Nouvelle tentative impossible",description:t.message,variant:"destructive"})}),Ne=S({mutationFn:async()=>{const t=await v("POST","/api/sendavapay/submit-otp",{otpToken:ut,otp:pe});if(!t.ok){const s=await t.json();throw new Error(s.message||"Validation du code OTP impossible")}return t.json()},onSuccess:()=>{b(!0),r("sv-waiting")},onError:t=>i({title:"Validation du code OTP impossible",description:t.message,variant:"destructive"})}),$t=()=>{if(!o||Number(o)<se){i({title:"Montant invalide",description:`Le minimum est de ${se.toLocaleString()} ${x}`,variant:"destructive"});return}if(Be&&(!Number.isInteger(Number(o))||Number(o)%5!==0)){i({title:"Montant InPay invalide",description:"Utilisez un montant entier multiple de 5 : 300, 305, 310…",variant:"destructive"});return}it()},it=()=>{if(!k){i({title:"Pays requis",description:"Sélectionnez le pays du paiement.",variant:"destructive"});return}if(Je){qe(""),r("soleaspay-operator");return}if(Be){nt.mutate();return}if(St){V.mutate();return}if(Xe){$e(p),Ve(c?.phone||""),r("ashtech-operator");return}window.location.href=`/robotpay?amount=${encodeURIComponent(Number(o))}&country=${encodeURIComponent(k)}`},Vt=t=>{const s=t.toLowerCase();return s.includes("tmoney")||s.includes("t-money")?"/operators/tmoney.png":s.includes("moov")?"/operators/moov.jpg":s.includes("orange")?"/operators/orange.png":s.includes("mtn")?"/operators/mtn.png":s.includes("airtel")?"/operators/airtel.png":s.includes("wave")?"/operators/wave.png":null},_t=()=>{if(!oe.trim()){i({title:"Numéro requis",description:"Entrez le numéro depuis lequel vous avez payé",variant:"destructive"});return}if(!I){i({title:"Capture requise",description:"Veuillez joindre la capture d'écran du paiement",variant:"destructive"});return}ge.mutate()};return c?l==="amount"?e.jsxs("main",{className:"recharge-reference min-h-screen bg-[#f7f3f0]",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"recharge-screen",children:[e.jsxs("section",{className:"recharge-hero","aria-label":"Dépôt",children:[e.jsx("div",{className:"recharge-hero-art",children:e.jsx("img",{src:Yt,alt:""})}),e.jsxs("h1",{className:"recharge-title",children:[e.jsx("img",{className:"recharge-title-logo",src:Ht,alt:""}),e.jsx("span",{children:"Dépôt"})]}),e.jsx(N,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(N,{href:"/account",children:e.jsx("button",{className:"recharge-back","aria-label":"Retour"})})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de recharge",children:[e.jsx("div",{className:"preset-row",children:vt.map(t=>e.jsx("button",{className:`preset ${o===t?"active":""}`,onClick:()=>y(t),children:t},t))}),e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de recharge"}),e.jsxs("label",{className:"amount-input",children:[e.jsx("input",{type:"number",inputMode:"numeric",value:o,onChange:t=>y(t.target.value?Number(t.target.value):""),"aria-label":"Montant de recharge"}),e.jsx("span",{className:"currency",children:x})]})]}),e.jsxs("section",{className:"country-panel","aria-label":"Pays du paiement",children:[e.jsx("label",{htmlFor:"deposit-country",children:"Pays du paiement"}),e.jsxs("select",{id:"deposit-country",value:k,onChange:t=>Ce(t.target.value),children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),ne.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]})]}),e.jsx("button",{className:"continue",onClick:$t,disabled:!k||nt.isPending||V.isPending,children:"Recharger maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de recharge",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Recharge :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de recharge :"})," ",se.toLocaleString("fr-FR")," ",x]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Vérifiez attentivement vos informations de compte"})," lors du virement pour que votre paiement soit traité correctement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Chaque commande possède ses propres informations de paiement"})," ; ne réutilisez pas les informations précédentes pour un second paiement"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Après un virement réussi,"})," veuillez patienter 10 à 30 minutes."]})]})]})]}):l==="select"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("amount"),children:[e.jsx(g,{className:"h-5 w-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Choisir le pays"})]}),e.jsx(N,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 flex items-center justify-between p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," FCFA"]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"mb-2 text-sm font-bold text-gray-900",children:"Pays du paiement"}),e.jsxs("select",{value:k,onChange:t=>Ce(t.target.value),className:"deposit-step-field w-full appearance-none px-4 py-4 text-sm text-gray-700 outline-none",children:[e.jsx("option",{value:"",children:"Sélectionnez un pays"}),ne.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))]}),e.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Seuls les pays activés par l’administration sont affichés."})]}),e.jsx("button",{onClick:it,disabled:!k,className:"deposit-step-primary mt-5 w-full py-3 disabled:opacity-50",children:"Continuer vers le paiement"})]})]}):l==="form"&&d?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("select"),children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Confirmer le paiement"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4 flex items-center gap-3",children:[d.logoUrl?e.jsx("img",{src:d.logoUrl,alt:d.operatorName,className:"w-10 h-10 rounded-lg object-contain"}):e.jsx("div",{className:"w-10 h-10 rounded-lg bg-white flex items-center justify-center border-2 border-[#FF7A14]",children:e.jsx(_,{className:"w-5 h-5 text-[#FF7A14]"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:d.paymentLink?"Lien de paiement":"Numéro destinataire"}),d.paymentLink?e.jsxs("a",{href:d.paymentLink,target:"_blank",rel:"noreferrer",className:"mt-1 flex items-center gap-1 text-sm font-bold text-[#E85D00] underline",children:[e.jsx(A,{className:"h-4 w-4"})," Ouvrir le lien de paiement"]}):e.jsxs("p",{className:"font-bold text-[#E85D00] text-sm",children:[d.operatorName," — ",d.phone]}),e.jsx("p",{className:"text-xs text-gray-500",children:d.ownerName})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant"}),e.jsxs("p",{className:"font-bold text-gray-800",children:[Number(o).toLocaleString()," ",x]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Votre numéro payeur"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(_,{className:"w-4 h-4 text-gray-400 ml-4"}),e.jsx("input",{type:"tel",value:oe,onChange:t=>Pe(t.target.value),placeholder:"Numéro depuis lequel vous avez payé",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Référence / ID transaction ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("input",{type:"text",value:Ae,onChange:t=>Oe(t.target.value),placeholder:"Numéro de référence de la transaction",className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Message reçu après paiement ",e.jsx("span",{className:"text-gray-400 font-normal",children:"(optionnel)"})]}),e.jsx("textarea",{value:Ee,onChange:t=>Me(t.target.value),placeholder:"Collez ici le SMS ou message de confirmation reçu...",rows:3,className:"deposit-step-field w-full px-4 py-3 text-sm text-gray-700 outline-none resize-none"})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:["Capture d'écran du paiement ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{ref:ke,type:"file",accept:"image/*",onChange:Tt,className:"hidden"}),e.jsx("button",{onClick:()=>ke.current?.click(),className:`w-full border-2 border-dashed rounded-xl py-7 flex flex-col items-center gap-2 transition-colors ${I?"border-[#FF7A14] bg-[#FFF3E8]":"border-gray-300 bg-gray-50 hover:border-[#FF7A14] hover:bg-[#FFF3E8]"}`,children:I?e.jsxs(e.Fragment,{children:[e.jsx(W,{className:"w-8 h-8 text-[#FF7A14]"}),e.jsx("p",{className:"text-sm font-medium text-[#E85D00]",children:pt}),e.jsx("p",{className:"text-xs text-gray-400",children:"Appuyez pour changer"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Bt,{className:"w-8 h-8 text-gray-400"}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Appuyez pour ajouter la capture"}),e.jsx("p",{className:"text-xs text-gray-400",children:"JPG, PNG — max 5 Mo"})]})}),I&&e.jsx("div",{className:"mt-3 rounded-xl overflow-hidden border border-gray-100",children:e.jsx("img",{src:I,alt:"Capture",className:"w-full max-h-52 object-contain bg-gray-50"})})]}),e.jsx("button",{onClick:_t,disabled:ge.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-50",style:{background:u},children:ge.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Envoi en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(Zt,{className:"w-5 h-5"})," Soumettre ma demande"]})})]})]}):l==="westpay"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("select"),children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:ae})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-summary mx-0 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",x]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-card p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Jt,{className:"w-5 h-5 text-[#FF7A14]"}),e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:"Comment ça marche ?"})]}),e.jsxs("p",{className:"text-xs text-gray-600 leading-relaxed",children:["1. Cliquez ",e.jsxs("strong",{children:["Payer avec ",ae]})," — vous serez redirigé vers la page de paiement sécurisée."]}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"2. Entrez votre numéro Mobile Money et validez le paiement USSD depuis votre téléphone."}),e.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:"3. Après paiement, vous serez automatiquement redirigé ici. Votre solde est crédité après confirmation."})]}),e.jsx("button",{onClick:()=>V.mutate(),disabled:V.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40 flex items-center justify-center gap-2",style:{background:u},children:V.isPending?e.jsxs(e.Fragment,{children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Redirection en cours..."]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{className:"w-5 h-5"})," Payer avec ",ae]})}),e.jsxs("p",{className:"text-xs text-center text-gray-400",children:["Paiement sécurisé via ",ae," — USSD Mobile Money"]})]})]}):l==="ashtech-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("select"),children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:Ze})]}),e.jsx(N,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",x]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),qt?e.jsx(f,{className:"w-6 h-6 animate-spin text-[#FF7A14] mx-auto"}):e.jsx("select",{value:xe,onChange:t=>{$e(t.target.value),_e("")},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:at.map(t=>e.jsxs("option",{value:t.code,children:[t.name," (",t.currency,")"]},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(_,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:X,onChange:t=>Ve(t.target.value),placeholder:"Votre numéro Mobile Money",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),rt.length===0?e.jsx("p",{className:"text-sm text-gray-400 text-center py-5",children:"Aucun opérateur disponible pour ce pays"}):e.jsx("div",{className:"space-y-2",children:rt.map((t,s)=>{const n=typeof t=="string"?t:t.name||t.code||`Opérateur ${s+1}`;return e.jsxs("button",{onClick:()=>_e(n),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 ${U===n?"deposit-step-operator-selected":""}`,children:[e.jsx("span",{className:"font-semibold text-gray-900 text-sm",children:n}),U===n&&e.jsx(W,{className:"w-5 h-5 text-[#FF7A14]"})]},`${n}-${s}`)})})]}),e.jsx("button",{onClick:()=>E.mutate(void 0),disabled:!U||!X.trim()||E.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:E.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):"Initier le paiement"})]})]}):l==="ashtech-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsx("p",{className:"font-bold text-gray-900 text-sm mb-2",children:"Code à composer"}),he&&e.jsx("p",{className:"deposit-step-otp px-4 py-3 text-center font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:he}),e.jsx("p",{className:"text-sm text-gray-600 mt-3",children:he?"Composez ce code sur votre téléphone pour obtenir le code OTP, puis saisissez-le ci-dessous.":"Un code OTP vous a été envoyé. Saisissez-le ci-dessous."})]}),e.jsx("input",{type:"text",inputMode:"numeric",value:ue,onChange:t=>Ke(t.target.value),maxLength:8,placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]"}),e.jsx("button",{onClick:()=>E.mutate(ue),disabled:!ue.trim()||E.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:E.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):l==="ashtech-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("ashtech-operator"),className:"deposit-step-back",children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(A,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser avec Wave"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Ouvrez la page Wave pour confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",x]}),"."]})]}),e.jsxs("a",{href:bt,target:"_blank",rel:"noopener noreferrer",onClick:()=>{$(!0),r("ashtech-waiting")},className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:u},children:[e.jsx(A,{className:"w-5 h-5"})," Ouvrir Wave"]})]})]}):l==="ashtech-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(K,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Validez le paiement sur votre téléphone. Cette page se met à jour automatiquement."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(N,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{r("amount"),y(""),ee(null),$(!1),te("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):l==="soleaspay-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("amount"),children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Retour"})]}),e.jsx(N,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",x]})]}),e.jsx("span",{className:"text-xs font-semibold text-gray-600",children:p})]}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),Dt?e.jsxs("div",{className:"flex items-center gap-2 py-4 text-sm text-gray-500",children:[e.jsx(f,{className:"w-4 h-4 animate-spin"})," Chargement des opérateurs…"]}):st.length?e.jsx("div",{className:"grid grid-cols-2 gap-3",children:st.map(t=>e.jsx("button",{type:"button",onClick:()=>qe(t),className:`deposit-step-card p-4 text-sm font-semibold ${J===t?"deposit-step-card-orange":""}`,children:t},t))}):e.jsx("p",{className:"rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800",children:"Aucun opérateur SoleaPay n'est disponible pour ce pays."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(_,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"tel",value:D,onChange:t=>Te(t.target.value),placeholder:"Numéro sur lequel recevoir la demande",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsx("button",{type:"button",disabled:!J||!(D.trim()||c?.phone)||ye.isPending,onClick:()=>ye.mutate(),className:"deposit-step-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-50",style:{background:u},children:ye.isPending?e.jsxs(e.Fragment,{children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Préparation du paiement…"]}):e.jsxs(e.Fragment,{children:["Continuer avec ",fe]})})]})]}):l==="soleaspay-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("span",{className:"font-semibold text-base text-gray-800",children:["Paiement ",fe]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:C==="approved"?e.jsx(W,{className:"w-10 h-10 text-[#FF7A14]"}):e.jsx(K,{className:`w-10 h-10 ${C==="rejected"?"text-red-400":"text-[#FF7A14] animate-spin"}`})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:C==="approved"?"Paiement confirmé !":C==="rejected"?"Paiement échoué":"En attente de confirmation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:C==="approved"?`Votre solde a été crédité de ${Number(o).toLocaleString()} ${x}.`:C==="rejected"?"Le paiement a été refusé ou annulé.":jt||"Validez la demande de paiement sur votre téléphone. Cette page se met à jour automatiquement."}),L&&e.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:["Référence dépôt : #",L]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[C==="rejected"?e.jsx("button",{onClick:()=>{Z(null),q(""),T(!1),r("soleaspay-operator")},className:"deposit-step-primary flex-1 py-3 text-sm",style:{background:u},children:"Réessayer"}):e.jsx(N,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{r("amount"),y(""),Z(null),q(""),T(!1)},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})]}):l==="sv-operator"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsxs("header",{className:"deposit-step-header",children:[e.jsxs("button",{className:"deposit-step-back",onClick:()=>r("amount"),children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Top up"})]}),e.jsx(N,{href:"/history",children:e.jsx("button",{className:"deposit-step-history",children:"Historique"})})]}),e.jsxs("div",{className:"deposit-step-summary mx-4 mt-4 p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Montant à déposer"}),e.jsxs("p",{className:"text-xl font-bold text-[#E85D00]",children:[Number(o).toLocaleString()," ",x]})]}),e.jsx("button",{onClick:()=>r("amount"),className:"text-xs text-[#E85D00] underline",children:"Modifier"})]}),e.jsxs("div",{className:"deposit-step-content space-y-4 pb-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Pays"}),e.jsx("select",{value:F,onChange:t=>{mt(t.target.value),O(null)},className:"deposit-step-field w-full px-4 py-4 text-sm text-gray-700 outline-none appearance-none",children:ne.map(t=>e.jsx("option",{value:t.code,children:t.name},t.code))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Numéro Mobile Money"}),e.jsxs("div",{className:"deposit-step-field flex items-center overflow-hidden",children:[e.jsx(_,{className:"w-4 h-4 text-gray-400 ml-4 flex-shrink-0"}),e.jsx("input",{type:"tel",inputMode:"numeric",value:le,onChange:t=>xt(t.target.value),placeholder:"Numéro sur lequel envoyer la demande",className:"flex-1 px-3 py-4 text-sm text-gray-700 outline-none bg-transparent"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-800 mb-2",children:"Opérateur Mobile Money"}),Ot?e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsx(f,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):tt.length===0?e.jsx("div",{className:"text-center py-8 text-gray-400",children:e.jsx("p",{className:"text-sm",children:"Aucun opérateur disponible pour ce pays"})}):e.jsx("div",{className:"space-y-2",children:tt.map(t=>{const s=Vt(t.name);return e.jsxs("button",{onClick:()=>O(t),className:`deposit-step-operator w-full flex items-center justify-between px-4 py-4 transition-all ${j?.id===t.id?"deposit-step-operator-selected":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s?e.jsx("img",{src:s,alt:t.name,className:"w-10 h-10 rounded-full object-cover border border-gray-100"}):e.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${j?.id===t.id?"bg-[#FF7A14] text-gray-900":"bg-gray-100 text-gray-600"}`,children:t.name.charAt(0)}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-semibold text-gray-900 text-sm",children:t.name}),t.requiresOtp&&e.jsx("p",{className:"text-xs text-[#E85D00]",children:"Code OTP requis"})]})]}),j?.id===t.id&&e.jsx(W,{className:"w-5 h-5 text-[#FF7A14]"})]},t.id)})})]}),e.jsx("button",{onClick:()=>je.mutate(),disabled:!j||je.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:je.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Initiation en cours..."]}):e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx("img",{src:"/topup-icon.png",className:"w-6 h-6 object-contain",alt:"topup"})," Initier le paiement"]})})]})]}):l==="sv-otp"?e.jsxs("div",{className:"deposit-step-shell",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("sv-operator"),className:"deposit-step-back",children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Code OTP"})]})}),e.jsxs("div",{className:"deposit-step-content space-y-5 pb-10",children:[e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-900 font-bold text-xs",children:"1"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Composez ce code sur votre téléphone"})]}),ze?e.jsxs("div",{className:"deposit-step-otp px-4 py-3 text-center",children:[e.jsx("p",{className:"font-mono font-black text-2xl text-[#E85D00] tracking-widest",children:ze}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Composez ce code USSD sur votre téléphone"})]}):e.jsxs("p",{className:"text-sm text-gray-600",children:["Composez le code USSD de votre opérateur (ex : ",e.jsx("span",{className:"font-mono font-bold text-[#E85D00]",children:"*144#"}),") sur votre téléphone pour recevoir le code OTP par SMS."]})]}),e.jsxs("div",{className:"deposit-step-card deposit-step-card-orange p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FF7A14] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-white font-bold text-xs",children:"2"})}),e.jsx("p",{className:"font-bold text-gray-900 text-sm",children:"Entrez le code OTP reçu par SMS"})]}),e.jsxs("p",{className:"text-xs text-gray-500 mb-3",children:["Après avoir composé le code, vous recevrez un SMS avec un code OTP. Saisissez-le ci-dessous pour confirmer le paiement de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",x]}),"."]}),e.jsx("input",{type:"text",inputMode:"numeric",value:pe,onChange:t=>me(t.target.value),placeholder:"Code OTP reçu par SMS",className:"deposit-step-otp w-full px-4 py-4 text-center text-2xl tracking-widest font-black text-gray-800 outline-none focus:border-[#FF7A14]",maxLength:8})]}),e.jsx("button",{onClick:()=>Ne.mutate(),disabled:!pe.trim()||Ne.isPending,className:"deposit-step-primary w-full py-5 disabled:opacity-40",style:{background:u},children:Ne.isPending?e.jsxs("span",{className:"flex items-center justify-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 animate-spin"})," Vérification..."]}):"Valider le code OTP"})]})]}):l==="sv-redirect"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsxs("button",{onClick:()=>r("sv-operator"),className:"deposit-step-back",children:[e.jsx(g,{className:"w-5 h-5"}),e.jsx("span",{className:"font-semibold text-base",children:"Finaliser le paiement"})]})}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(A,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl mb-2",children:"Finaliser sur l'application"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Appuyez sur le bouton ci-dessous pour ouvrir la page de paiement de l'opérateur et confirmer votre dépôt de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",x]}),"."]})]}),e.jsxs("a",{href:gt,target:"_blank",rel:"noopener noreferrer",className:"deposit-step-primary w-full py-5 flex items-center justify-center gap-2",style:{background:u},onClick:()=>{b(!0),r("sv-waiting")},children:[e.jsx(A,{className:"w-5 h-5"})," Ouvrir la page de paiement"]})]})]}):l==="sv-waiting"?e.jsxs("div",{className:"deposit-step-shell flex flex-col",children:[e.jsx(h,{}),e.jsx("header",{className:"deposit-step-header",children:e.jsx("span",{className:"font-semibold text-base text-gray-800",children:"Paiement en cours"})}),e.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6",children:De==="approved"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(W,{className:"w-10 h-10 text-[#FF7A14]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement confirmé !"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Votre solde a été crédité de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",x]})]})]})]}):De==="rejected"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(K,{className:"w-10 h-10 text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"Paiement échoué"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Le paiement a été refusé ou annulé."})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[ce&&e.jsxs("button",{onClick:()=>be.mutate(),disabled:be.isPending,className:"deposit-step-primary flex-1 py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50",style:{background:u},children:[be.isPending?e.jsx(f,{className:"w-4 h-4 animate-spin"}):e.jsx(K,{className:"w-4 h-4"}),"Réessayer"]}),e.jsx("button",{onClick:()=>{r("amount"),y(""),O(null),Y(null),B(""),b(!1),z("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"deposit-step-icon",children:e.jsx(K,{className:"w-10 h-10 text-[#FF7A14] animate-spin",style:{animationDuration:"2s"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-900 text-xl",children:"En attente de confirmation"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Une demande de paiement de ",e.jsxs("strong",{children:[Number(o).toLocaleString()," ",x]})," a été envoyée sur votre téléphone.",e.jsx("br",{}),"Acceptez-la sur votre téléphone. Cette page se met à jour automatiquement."]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(N,{href:"/history",className:"flex-1",children:e.jsx("button",{className:"deposit-step-secondary w-full py-3 text-sm",children:"Voir l'historique"})}),e.jsx("button",{onClick:()=>{r("amount"),y(""),O(null),Y(null),B(""),b(!1),z("")},className:"deposit-step-secondary flex-1 py-3 text-sm",children:"Nouvelle recharge"})]})]})})]}):null:null}export{bs as default};
