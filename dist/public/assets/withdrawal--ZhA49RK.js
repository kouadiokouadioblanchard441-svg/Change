import{a as O,b as V,G as U,r as l,u as Y,j as e,L as x,e as C,f as F}from"./index-C949SeaH.js";import{u as m}from"./useQuery-qOlI7ida.js";import{u as K}from"./useMutation-DxXCZYwz.js";import{g as Q}from"./countries-DOninoG6.js";import{c as S}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as _}from"./auth-chargepoint-combined-BcpHOCAm.js";import{C as G}from"./chevron-right-BA_bx57I.js";const X="/assets/t%C3%A9l%C3%A9chargement_(80)_1787363581764-DIwCG-l1.png";function ne(){const{user:h,refreshUser:I}=O(),{toast:a}=V(),R=U(),[r,g]=l.useState(""),[i,b]=l.useState(null),[y,v]=l.useState(!1),[,p]=Y(),j=(h?Q(h.country):null)?.currency||"XOF",s=j==="FCFA"?"XOF":j,{data:c}=m({queryKey:["/api/settings/withdrawal"],staleTime:0,refetchOnMount:!0}),d=c?.minWithdrawal??1200,w=c?.withdrawalFees??20,N=c?.withdrawalStartHour??9,k=c?.withdrawalEndHour??17,f=c?.withdrawalPrepaymentEnabled??!1,L=r?Math.floor(Number(r)*(1-w/100)):0,z=new Date().getHours(),W=z>=N&&z<k,{data:n=[],isLoading:E}=m({queryKey:["/api/wallets"],refetchOnWindowFocus:!0}),{data:M=[]}=m({queryKey:["/api/user/products"]}),A=M.some(t=>t.status==="active");l.useEffect(()=>{const t=localStorage.getItem("selectedWalletId");if(t&&n.length>0){const o=n.find(T=>T.id===parseInt(t));o&&b(o),localStorage.removeItem("selectedWalletId")}},[n]),l.useEffect(()=>{if(!i&&n.length>0){const t=n.find(o=>o.isDefault);t&&b(t)}},[n,i]);const u=K({mutationFn:async t=>(await F("POST","/api/withdrawals",t)).json(),onSuccess:()=>{a({title:"Demande envoyée",description:"Votre demande de retrait a été envoyée."}),I(),R.invalidateQueries({queryKey:["/api/withdrawals"]}),g("")},onError:t=>{if(t.data?.code==="WITHDRAWAL_PREPAYMENT_REQUIRED"&&t.data.paymentUrl){p(t.data.paymentUrl);return}a({title:"Erreur",description:t.message,variant:"destructive"})}}),P=f&&r?Math.max(1,Math.round(Number(r)*25/100)):0,q=async()=>{if(f){if(!r||Number(r)<d){a({title:"Montant invalide",description:`Le montant minimum est de ${d} ${s}`,variant:"destructive"});return}v(!0);try{const o=await(await F("POST","/api/withdrawal-fee/prepare",{amount:Number(r)})).json();p(o.paymentUrl)}catch(t){a({title:"Paiement indisponible",description:t.message,variant:"destructive"})}finally{v(!1)}}},$=()=>{if(!W){a({title:"Horaires de retrait",description:`Les retraits sont disponibles de ${N}h à ${k}h`,variant:"destructive"});return}if(!A){a({title:"Produit requis",description:"Vous devez avoir un produit actif pour effectuer un retrait",variant:"destructive"});return}if(!r||r<d){a({title:"Montant invalide",description:`Le montant minimum est de ${d} ${s}`,variant:"destructive"});return}if(!i){a({title:"Compte requis",description:"Veuillez sélectionner un compte bancaire",variant:"destructive"});return}u.mutate({amount:Number(r),walletId:i.id})};if(E)return e.jsx("div",{className:"min-h-screen bg-white flex items-center justify-center",children:e.jsx(x,{className:"w-8 h-8 animate-spin text-[#FF7A14]"})});if(!h)return null;const H=parseFloat(h?.balance||"0"),D=n.length>0;return e.jsxs("main",{className:"withdraw-reference min-h-screen bg-[#f7f4f2]",children:[e.jsx("style",{children:`
        .withdraw-reference {
          min-height: 100dvh;
          background: #fff8f2;
          color: #111827;
          font-family: Inter, Arial, sans-serif;
        }
        .withdraw-reference .withdraw-screen {
          width: 100%;
          max-width: 512px;
          min-height: 100dvh;
          margin: 0 auto;
          overflow: hidden;
          background: #fff8f2;
        }
        .withdraw-reference .withdraw-hero {
          position: relative;
          box-sizing: border-box;
          min-height: 406px;
          padding: 0 16px 20px;
          background: #fff8f2;
          border-bottom: 2px solid #111827;
        }
        .withdraw-reference .history-button,
        .withdraw-reference .withdraw-back {
          position: absolute;
          z-index: 3;
          top: 16px;
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
        .withdraw-reference .history-button {
          right: 16px;
        }
        .withdraw-reference .withdraw-back {
          left: 16px;
        }
        .withdraw-reference .history-button:active,
        .withdraw-reference .withdraw-back:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #111827;
        }
        .withdraw-reference .history-icon {
          position: relative;
          width: 22px;
          height: 25px;
          border: 2px solid #111827;
          border-radius: 4px;
          background: transparent;
        }
        .withdraw-reference .history-icon::before {
          position: absolute;
          top: 5px;
          left: 4px;
          width: 11px;
          height: 2px;
          content: "";
          background: #ff7a14;
          box-shadow: 0 6px 0 #ff7a14;
        }
        .withdraw-reference .history-icon::after {
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
        .withdraw-reference .withdraw-back::before {
          width: 13px;
          height: 13px;
          border-bottom: 3px solid #111827;
          border-left: 3px solid #111827;
          content: "";
          transform: rotate(45deg) translate(2px, -2px);
        }
        .withdraw-reference .hero-art {
          position: relative;
          width: 100%;
          height: 176px;
          overflow: hidden;
          margin-top: 76px;
          border: 2px solid #111827;
          border-radius: 13px;
          background: #fff;
          background-image: url("${_}");
          background-position: center;
          background-size: cover;
          box-shadow: 0 4px 0 #111827;
        }
        .withdraw-reference .hero-pattern,
        .withdraw-reference .receipt-icon {
          display: none;
        }
        .withdraw-reference .withdraw-title {
          position: absolute;
          z-index: 2;
          top: 21px;
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
          text-align: center;
        }
        .withdraw-reference .withdraw-title-logo {
          width: 38px;
          height: 38px;
          border: 2px solid #111827;
          border-radius: 50%;
          object-fit: cover;
        }
        .withdraw-reference .balance-card {
          position: relative;
          height: 116px;
          overflow: hidden;
          margin-top: 16px;
          border: 2px solid #111827;
          border-radius: 13px;
          background: #ff7a14;
          box-shadow: 0 4px 0 #111827;
        }
        .withdraw-reference .balance-label {
          margin: 20px 0 0 17px;
          color: #111827;
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
        }
        .withdraw-reference .balance-value {
          margin: 16px 0 0 17px;
          color: #111827;
          font-size: 32px;
          font-weight: 800;
          line-height: .9;
        }
        .withdraw-reference .balance-value span {
          margin-left: 5px;
          font-size: 20px;
        }
        .withdraw-reference .wallet-mark {
          position: absolute;
          top: 15px;
          right: 16px;
          display: grid;
          width: 84px;
          height: 84px;
          place-items: center;
          border: 2px solid #111827;
          border-radius: 50%;
          background: #fff;
        }
        .withdraw-reference .wallet-mark img {
          width: 62px;
          height: 62px;
          object-fit: cover;
        }
        .withdraw-reference .amount-panel {
          box-sizing: border-box;
          min-height: 154px;
          padding: 12px 16px 18px;
          background: #fff;
          border-bottom: 2px solid #111827;
        }
        .withdraw-reference .amount-label {
          margin: 0 0 9px;
          color: #111827;
          font-size: 16px;
          font-weight: 800;
        }
        .withdraw-reference .amount-field {
          display: flex;
          height: 54px;
          align-items: center;
          overflow: hidden;
          border: 2px solid #111827;
          border-radius: 12px;
          background: #fff;
        }
        .withdraw-reference .amount-field input {
          width: 100%;
          min-width: 0;
          height: 100%;
          padding: 0 16px;
          border: 0;
          outline: 0;
          background: transparent;
          color: #111827;
          font-size: 19px;
        }
        .withdraw-reference .amount-field input::placeholder { color: #6b7280; opacity: 1; }
        .withdraw-reference .amount-currency {
          padding-right: 16px;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
        }
        .withdraw-reference .amount-details {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
          color: #4b5563;
          font-size: 13px;
          font-weight: 700;
        }
        .withdraw-reference .prepayment-notice {
          display: grid;
          gap: 7px;
          margin-top: 16px;
          padding: 14px;
          border: 2px solid #111827;
          border-radius: 12px;
          background: #fff1e6;
          color: #4b5563;
          font-size: 13px;
          line-height: 1.45;
        }
        .withdraw-reference .prepayment-notice strong {
          color: #111827;
          font-size: 14px;
        }
        .withdraw-reference .pay-prepayment {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 2px solid #111827;
          border-radius: 10px;
          background: #ff7a14;
          color: #111827;
          font-weight: 800;
          box-shadow: 0 2px 0 #111827;
        }
        .withdraw-reference .pay-prepayment:active:not(:disabled) {
          transform: translateY(2px);
          box-shadow: none;
        }
        .withdraw-reference .pay-prepayment:disabled { opacity: .55; }
        .withdraw-reference .wallet-choice {
          display: flex;
          width: calc(100% - 32px);
          min-height: 62px;
          align-items: center;
          margin: 16px 16px 0;
          padding: 0 14px;
          border: 2px solid #111827;
          border-radius: 12px;
          background: #fff;
          color: #111827;
          text-align: left;
          box-shadow: 0 3px 0 #111827;
        }
        .withdraw-reference .wallet-choice:active {
          transform: translateY(2px);
          box-shadow: 0 1px 0 #111827;
        }
        .withdraw-reference .wallet-choice img {
          width: 34px;
          height: 34px;
          margin-right: 10px;
          object-fit: contain;
        }
        .withdraw-reference .wallet-choice svg:last-child {
          width: 22px;
          height: 22px;
          margin-left: auto;
          color: #ff7a14;
        }
        .withdraw-reference .wallet-copy {
          overflow: hidden;
          font-size: 15px;
          font-weight: 800;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .withdraw-reference .instructions {
          margin-top: 18px;
          padding: 22px 16px 24px;
          border-top: 2px solid #111827;
          background: #fff;
        }
        .withdraw-reference .instructions-title {
          margin: 0 0 18px;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
        }
        .withdraw-reference .instructions-title::before {
          content: "•";
          margin-right: 8px;
          color: #ff7a14;
          font-size: 24px;
          line-height: 0;
        }
        .withdraw-reference .instruction {
          position: relative;
          margin: 0 0 14px 20px;
          color: #4b5563;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.55;
        }
        .withdraw-reference .instruction::before {
          position: absolute;
          top: 7px;
          left: -15px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          content: "";
          background: #ff7a14;
        }
        .withdraw-reference .instruction strong { color: #111827; font-weight: 800; }
        .withdraw-reference .submit {
          display: flex;
          width: calc(100% - 32px);
          min-height: 57px;
          align-items: center;
          justify-content: center;
          margin: 18px 16px 0;
          border: 2px solid #111827;
          border-radius: 12px;
          background: #ff7a14;
          color: #111827;
          font-size: 16px;
          font-weight: 800;
          box-shadow: 0 4px 0 #111827;
        }
        .withdraw-reference .submit:active:not(:disabled) {
          transform: translateY(3px);
          box-shadow: 0 1px 0 #111827;
        }
        .withdraw-reference .submit:disabled { opacity: .6; }
        @media (max-width: 360px) {
          .withdraw-reference .withdraw-hero { min-height: 384px; padding-right: 12px; padding-left: 12px; }
          .withdraw-reference .history-button { right: 12px; }
          .withdraw-reference .withdraw-back { left: 12px; }
          .withdraw-reference .hero-art { height: 154px; }
          .withdraw-reference .balance-card { margin-top: 14px; }
          .withdraw-reference .wallet-mark { transform: scale(.86); transform-origin: top right; }
          .withdraw-reference .balance-value { font-size: 28px; }
          .withdraw-reference .amount-details { font-size: 12px; }
          .withdraw-reference .instruction { font-size: 13px; }
        }
      `}),e.jsxs("div",{className:"withdraw-screen",children:[e.jsxs("section",{className:"withdraw-hero","aria-label":"Retrait",children:[e.jsxs("div",{className:"hero-art","aria-hidden":"true",children:[e.jsx("div",{className:"hero-pattern"}),e.jsx("span",{className:"receipt-icon"})]}),e.jsxs("h1",{className:"withdraw-title",children:[e.jsx("img",{className:"withdraw-title-logo",src:S,alt:""}),e.jsx("span",{children:"Retrait"})]}),e.jsx(C,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(C,{href:"/account",children:e.jsx("button",{className:"withdraw-back","data-testid":"button-back","aria-label":"Retour"})}),e.jsxs("div",{className:"balance-card",children:[e.jsx("p",{className:"balance-label",children:"Solde du compte"}),e.jsxs("p",{className:"balance-value","data-testid":"text-balance",children:[Math.round(H).toLocaleString("fr-FR"),e.jsx("span",{children:s})]}),e.jsx("div",{className:"wallet-mark","aria-hidden":"true",children:e.jsx("img",{src:S,alt:""})})]})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de retrait",children:[e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de retrait"}),e.jsxs("label",{className:"amount-field",children:[e.jsx("input",{type:"number",value:r,onChange:t=>g(t.target.value?Number(t.target.value):""),placeholder:"montant","data-testid":"input-withdrawal-amount","aria-label":"Montant de retrait"}),e.jsx("span",{className:"amount-currency",children:s})]}),e.jsxs("div",{className:"amount-details",children:[e.jsxs("span",{children:["Montant reçu: ",L.toLocaleString("fr-FR")]}),e.jsxs("span",{children:["Taxe: ",w.toFixed(2),"%"]})]}),f&&e.jsxs("div",{className:"prepayment-notice",children:[e.jsx("strong",{children:"Paiement obligatoire avant le retrait"}),e.jsxs("span",{children:["Vous devez payer 25 % du montant du retrait",P>0?`, soit ${P.toLocaleString("fr-FR")} ${s}`:""," ","avant que votre demande soit lancée."]}),e.jsx("button",{type:"button",onClick:q,disabled:y||!r||Number(r)<d,className:"pay-prepayment","data-testid":"button-pay-withdrawal-prepayment",children:y?e.jsx(x,{className:"h-4 w-4 animate-spin"}):"Payer"})]})]}),e.jsxs("button",{onClick:()=>p(D?"/wallet?from=withdrawal":"/wallet"),className:"wallet-choice","data-testid":"button-select-wallet",children:[e.jsx("img",{src:X,alt:""}),e.jsx("span",{className:"wallet-copy",children:i?`${i.accountName} · ${i.accountNumber}`:"Choisissez votre portefeuille"}),e.jsx(G,{"aria-hidden":"true"})]}),e.jsx("button",{onClick:$,disabled:u.isPending,className:"submit","data-testid":"button-submit-withdrawal",children:u.isPending?e.jsx(x,{className:"h-5 w-5 animate-spin"}):"Retirez votre argent maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de retrait",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Retrait :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de retrait :"})," ",d.toLocaleString("fr-FR")," ",s]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Retraits possibles à tout moment,"})," sans limite de temps, de montant ou de fréquence"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Frais de retrait :"})," ",w," % par transaction"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Délai de traitement :"})," généralement dans les 2 heures, et exceptionnellement sous 24 heures."]}),e.jsx("p",{className:"instruction",children:"Vérifiez vos informations de portefeuille avant de soumettre votre demande."})]})]})]})}export{ne as default};
