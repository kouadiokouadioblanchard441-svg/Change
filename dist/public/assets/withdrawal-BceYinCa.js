import{a as K,b as H,G as O,r as w,u as V,j as e,L as j,e as C,f as I}from"./index-Ce3LWOLv.js";import{u as x}from"./useQuery-BawY2P3D.js";import{u as _}from"./useMutation-Cshk7Cvo.js";import{g as Q}from"./countries-DnL2aGky.js";import{c as W}from"./chargepoint_1790147948102-DERXNZnU.js";import{c as U}from"./auth-chargepoint-combined-0mIqx7uW.js";import{C as Y}from"./chevron-right-DUA_lj54.js";const B="Africa/Kinshasa";function G(i=new Date){const n=new Intl.DateTimeFormat("en-GB",{timeZone:B,hour:"2-digit",hourCycle:"h23"}).format(i);return Number(n)}function Z(i,n,r){const h=G(i);return Number.isInteger(n)&&Number.isInteger(r)&&n>=0&&r<=24&&n<r&&h>=n&&h<r}const J="/assets/t%C3%A9l%C3%A9chargement_(80)_1787363581764-DIwCG-l1.png";function se(){const{user:i,refreshUser:n}=K(),{toast:r}=H(),h=O(),[a,N]=w.useState(""),[d,k]=w.useState(null),[z,R]=w.useState(!1),[,m]=V();i&&Q(i.country);const l="CDF",{data:p}=x({queryKey:["/api/settings/withdrawal"],staleTime:0,refetchOnMount:!0}),c=p?.minWithdrawal??3e3,g=p?.withdrawalFees??5,f=p?.withdrawalStartHour??9,u=p?.withdrawalEndHour??18,b=p?.withdrawalPrepaymentEnabled??!1,S=a?Math.floor(Number(a)*(1-g/100)):0,y=Z(new Date,f,u),{data:s=[],isLoading:F}=x({queryKey:["/api/wallets"],refetchOnWindowFocus:!0}),{data:L=[]}=x({queryKey:["/api/user/products"]}),{data:M}=x({queryKey:["/api/withdrawals/available"],enabled:!!i,staleTime:0,refetchOnMount:!0}),E=L.some(t=>t.status==="active");w.useEffect(()=>{const t=localStorage.getItem("selectedWalletId");if(t&&s.length>0){const o=s.find($=>$.id===parseInt(t));o&&k(o),localStorage.removeItem("selectedWalletId")}},[s]),w.useEffect(()=>{if(!d&&s.length>0){const t=s.find(o=>o.isDefault);t&&k(t)}},[s,d]);const v=_({mutationFn:async t=>(await I("POST","/api/withdrawals",t)).json(),onSuccess:()=>{r({title:"Demande envoyée",description:"Votre demande de retrait a été envoyée."}),n(),h.invalidateQueries({queryKey:["/api/withdrawals"]}),h.invalidateQueries({queryKey:["/api/withdrawals/available"]}),N("")},onError:t=>{if(t.data?.code==="WITHDRAWAL_PREPAYMENT_REQUIRED"&&t.data.paymentUrl){m(t.data.paymentUrl);return}r({title:"Retrait impossible",description:t.message,variant:"destructive"})}}),P=b&&a?Math.max(1,Math.round(Number(a)*25/100)):0,A=async()=>{if(b){if(!y){r({title:"Retrait indisponible",description:`Les retraits sont ouverts de ${f}h à ${u}h, heure de Kinshasa (RDC).`,variant:"destructive"});return}if(!a||Number(a)<c){r({title:"Montant invalide",description:`Le montant minimum est de ${c} ${l}`,variant:"destructive"});return}R(!0);try{const o=await(await I("POST","/api/withdrawal-fee/prepare",{amount:Number(a)})).json();m(o.paymentUrl)}catch(t){r({title:"Paiement indisponible",description:t.message,variant:"destructive"})}finally{R(!1)}}},D=()=>{if(!y){r({title:"Retrait indisponible",description:`Horaires de retrait : de ${f}h à ${u}h, heure de Kinshasa (RDC).`,variant:"destructive"});return}if(!E){r({title:"Produit requis",description:"Vous devez avoir un produit actif pour effectuer un retrait",variant:"destructive"});return}if(!a||a<c){r({title:"Montant invalide",description:`Le montant minimum est de ${c} ${l}`,variant:"destructive"});return}if(!d){r({title:"Compte requis",description:"Veuillez sélectionner un compte bancaire",variant:"destructive"});return}v.mutate({amount:Number(a),walletId:d.id})};if(F)return e.jsx("div",{className:"min-h-screen bg-white flex items-center justify-center",children:e.jsx(j,{className:"w-8 h-8 animate-spin text-[#FF7A14]"})});if(!i)return null;const q=parseFloat(M?.availableBalance||"0"),T=s.length>0;return e.jsxs("main",{className:"withdraw-reference min-h-screen bg-[#f7f4f2]",children:[e.jsx("style",{children:`
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
          background-image: url("${U}");
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
          margin: 18px 16px 24px;
          padding: 22px 16px 10px;
          border: 2px solid #111827;
          border-top: 5px solid #ff7a14;
          border-radius: 14px;
          background: #fff;
        }
        .withdraw-reference .instructions-title {
          margin: 0 0 20px;
          color: #111827;
          font-size: 19px;
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
          margin: 0 0 16px 20px;
          color: #4b5563;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.65;
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
          .withdraw-reference .instruction { font-size: 14px; }
        }
      `}),e.jsxs("div",{className:"withdraw-screen",children:[e.jsxs("section",{className:"withdraw-hero","aria-label":"Retrait",children:[e.jsxs("div",{className:"hero-art","aria-hidden":"true",children:[e.jsx("div",{className:"hero-pattern"}),e.jsx("span",{className:"receipt-icon"})]}),e.jsxs("h1",{className:"withdraw-title",children:[e.jsx("img",{className:"withdraw-title-logo",src:W,alt:""}),e.jsx("span",{children:"Retrait"})]}),e.jsx(C,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(C,{href:"/account",children:e.jsx("button",{className:"withdraw-back","data-testid":"button-back","aria-label":"Retour"})}),e.jsxs("div",{className:"balance-card",children:[e.jsx("p",{className:"balance-label",children:"Solde du compte"}),e.jsxs("p",{className:"balance-value","data-testid":"text-balance",children:[Math.round(q).toLocaleString("fr-FR"),e.jsx("span",{children:l})]}),e.jsx("div",{className:"wallet-mark","aria-hidden":"true",children:e.jsx("img",{src:W,alt:""})})]})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de retrait",children:[e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de retrait"}),e.jsxs("label",{className:"amount-field",children:[e.jsx("input",{type:"number",value:a,onChange:t=>N(t.target.value?Number(t.target.value):""),placeholder:"montant","data-testid":"input-withdrawal-amount","aria-label":"Montant de retrait"}),e.jsx("span",{className:"amount-currency",children:l})]}),e.jsxs("div",{className:"amount-details",children:[e.jsxs("span",{children:["Montant reçu: ",S.toLocaleString("fr-FR")]}),e.jsxs("span",{children:["Taxe: ",g.toFixed(2),"%"]})]}),b&&e.jsxs("div",{className:"prepayment-notice",children:[e.jsx("strong",{children:"Paiement obligatoire avant le retrait"}),e.jsxs("span",{children:["Vous devez payer 25 % du montant du retrait",P>0?`, soit ${P.toLocaleString("fr-FR")} ${l}`:""," ","avant que votre demande soit lancée."]}),e.jsx("button",{type:"button",onClick:A,disabled:z||!y||!a||Number(a)<c,className:"pay-prepayment","data-testid":"button-pay-withdrawal-prepayment",children:z?e.jsx(j,{className:"h-4 w-4 animate-spin"}):"Payer"})]})]}),e.jsxs("button",{onClick:()=>m(T?"/wallet?from=withdrawal":"/wallet"),className:"wallet-choice","data-testid":"button-select-wallet",children:[e.jsx("img",{src:J,alt:""}),e.jsx("span",{className:"wallet-copy",children:d?d.accountNumber:"Choisissez votre portefeuille"}),e.jsx(Y,{"aria-hidden":"true"})]}),e.jsx("button",{onClick:D,disabled:v.isPending,className:"submit","data-testid":"button-submit-withdrawal",children:v.isPending?e.jsx(j,{className:"h-5 w-5 animate-spin"}):"Retirez votre argent maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de retrait",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Retrait :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de retrait :"})," ",c.toLocaleString("fr-FR")," ",l]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Heures de retrait :"})," de ",f,"h à ",u,"h, heure de Kinshasa (RDC)"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Frais de retrait :"})," ",g," % par transaction"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Délai de traitement :"})," généralement dans les 2 heures, et exceptionnellement sous 24 heures."]}),e.jsx("p",{className:"instruction",children:"Vérifiez vos informations de portefeuille avant de soumettre votre demande."})]})]})]})}export{se as default};
