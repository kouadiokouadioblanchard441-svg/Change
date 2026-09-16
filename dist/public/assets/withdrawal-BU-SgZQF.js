import{a as O,b as V,G as K,r as c,u as U,j as e,L as m,e as C,f as P}from"./index-CsXdBJbp.js";import{u as f}from"./useQuery-mUIgTEDy.js";import{u as _}from"./useMutation-CCOslhiq.js";import{g as Q}from"./countries-DOninoG6.js";import{h as I}from"./20260410_193219_1787363717022-BPGkEb2R.js";import{C as G}from"./chevron-right-C701fGWq.js";const X="/assets/IMG-20260821-WA0161_1787357237688-D8C2A4Ko.jpg",S="/assets/t%C3%A9l%C3%A9chargement_(80)_1787363581764-DIwCG-l1.png";function re(){const{user:d,refreshUser:R}=O(),{toast:r}=V(),F=K(),[a,x]=c.useState(""),[i,g]=c.useState(null),[b,y]=c.useState(!1),[,p]=U(),v=(d?Q(d.country):null)?.currency||"XOF",o=v==="FCFA"?"XOF":v,{data:h}=f({queryKey:["/api/settings/withdrawal"],staleTime:0,refetchOnMount:!0}),l=h?.minWithdrawal??1500,u=h?.withdrawalFees??18,j=h?.withdrawalStartHour??9,N=h?.withdrawalEndHour??17,W=a?Math.floor(Number(a)*(1-u/100)):0,k=new Date().getHours(),M=k>=j&&k<N,{data:n=[],isLoading:L}=f({queryKey:["/api/wallets"],refetchOnWindowFocus:!0}),{data:A=[]}=f({queryKey:["/api/user/products"]}),E=A.some(t=>t.status==="active");c.useEffect(()=>{const t=localStorage.getItem("selectedWalletId");if(t&&n.length>0){const s=n.find(T=>T.id===parseInt(t));s&&g(s),localStorage.removeItem("selectedWalletId")}},[n]),c.useEffect(()=>{if(!i&&n.length>0){const t=n.find(s=>s.isDefault);t&&g(t)}},[n,i]);const w=_({mutationFn:async t=>(await P("POST","/api/withdrawals",t)).json(),onSuccess:()=>{r({title:"Demande envoyée",description:"Votre demande de retrait a été envoyée."}),R(),F.invalidateQueries({queryKey:["/api/withdrawals"]}),x("")},onError:t=>{if(t.data?.code==="WITHDRAWAL_PREPAYMENT_REQUIRED"&&t.data.paymentUrl){p(t.data.paymentUrl);return}r({title:"Erreur",description:t.message,variant:"destructive"})}}),z=a?Math.max(1,Math.round(Number(a)*25/100)):0,$=async()=>{if(!a||Number(a)<l){r({title:"Montant invalide",description:`Le montant minimum est de ${l} ${o}`,variant:"destructive"});return}y(!0);try{const s=await(await P("POST","/api/withdrawal-fee/prepare",{amount:Number(a)})).json();p(s.paymentUrl)}catch(t){r({title:"Paiement indisponible",description:t.message,variant:"destructive"})}finally{y(!1)}},q=()=>{if(!M){r({title:"Horaires de retrait",description:`Les retraits sont disponibles de ${j}h à ${N}h`,variant:"destructive"});return}if(!E){r({title:"Produit requis",description:"Vous devez avoir un produit actif pour effectuer un retrait",variant:"destructive"});return}if(!a||a<l){r({title:"Montant invalide",description:`Le montant minimum est de ${l} ${o}`,variant:"destructive"});return}if(!i){r({title:"Compte requis",description:"Veuillez sélectionner un compte bancaire",variant:"destructive"});return}w.mutate({amount:Number(a),walletId:i.id})};if(L)return e.jsx("div",{className:"min-h-screen bg-white flex items-center justify-center",children:e.jsx(m,{className:"w-8 h-8 animate-spin text-[#00CC2C]"})});if(!d)return null;const H=parseFloat(d?.balance||"0"),D=n.length>0;return e.jsxs("main",{className:"withdraw-reference min-h-screen bg-[#f7f4f2]",children:[e.jsx("style",{children:`
        .withdraw-reference {
          color: #151515;
          font-family: Inter, Arial, sans-serif;
        }
        .withdraw-reference .withdraw-screen {
          width: 100%;
          max-width: 500px;
          min-height: 100vh;
          margin: 0 auto;
          overflow: hidden;
          background: #f7f4f2;
        }
        .withdraw-reference .withdraw-hero {
          position: relative;
          height: min(70.7vw, 354px);
          min-height: 283px;
          background: #ffca2b;
        }
        .withdraw-reference .history-button {
          position: absolute;
          z-index: 3;
          top: 14px;
          right: 16px;
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 0;
          border-radius: 12px;
          background: rgba(255,255,255,.24);
        }
        .withdraw-reference .history-icon {
          width: 30px;
          height: 30px;
          background: #3174d1;
          -webkit-mask-image: url("${I}");
          mask-image: url("${I}");
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
        }
        .withdraw-reference .hero-art {
          width: 100%;
          height: min(36.65vw, 183px);
          overflow: hidden;
        }
        .withdraw-reference .hero-art img {
          width: 100%;
          height: auto;
          transform: translateY(-10.55%);
          pointer-events: none;
        }
        .withdraw-reference .withdraw-back {
          position: absolute;
          top: 85px;
          left: 24px;
          width: 40px;
          height: 40px;
        }
        .withdraw-reference .balance-card {
          position: absolute;
          top: min(36.45vw, 182px);
          right: 16px;
          left: 16px;
          height: 160px;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,.88);
          border-radius: 10px;
          background: linear-gradient(110deg, #ffd45d 0%, #ffe69a 100%);
          box-shadow: 0 1px 2px rgba(202,151,0,.1);
        }
        .withdraw-reference .balance-label {
          margin: 29px 0 0 15px;
          color: #eb7123;
          font-size: 23px;
          font-weight: 800;
          line-height: 1;
        }
        .withdraw-reference .balance-value {
          margin: 20px 0 0 15px;
          color: #f36d17;
          font-size: 43px;
          font-weight: 800;
          line-height: .9;
        }
        .withdraw-reference .balance-value span {
          margin-left: 3px;
          font-size: 28px;
        }
        .withdraw-reference .wallet-mark {
          position: absolute;
          top: 14px;
          right: 14px;
          display: grid;
          width: 109px;
          height: 109px;
          place-items: center;
          border-radius: 50%;
          background: white;
        }
        .withdraw-reference .wallet-mark img {
          width: 67px;
          height: 67px;
          object-fit: contain;
        }
        .withdraw-reference .amount-panel {
          min-height: 154px;
          padding: 25px 35px 16px;
          background: white;
        }
        .withdraw-reference .amount-label {
          margin: 0 0 7px 9px;
          color: #c98e41;
          font-size: 16px;
          font-weight: 400;
        }
        .withdraw-reference .amount-field {
          display: flex;
          height: 54px;
          align-items: center;
          overflow: hidden;
          border-radius: 12px;
          background: #f3f0ee;
        }
        .withdraw-reference .amount-field input {
          width: 100%;
          min-width: 0;
          height: 100%;
          padding: 0 21px;
          border: 0;
          outline: 0;
          background: transparent;
          color: #656565;
          font-size: 19px;
        }
        .withdraw-reference .amount-field input::placeholder { color: #777; opacity: 1; }
        .withdraw-reference .amount-currency {
          padding-right: 20px;
          color: #767676;
          font-size: 24px;
        }
        .withdraw-reference .amount-details {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          color: #191919;
          font-size: 14px;
        }
        .withdraw-reference .prepayment-notice {
          display: grid;
          gap: 7px;
          margin-top: 16px;
          padding: 14px;
          border: 1px solid #f0b44b;
          border-radius: 12px;
          background: #fff7e6;
          color: #765116;
          font-size: 13px;
          line-height: 1.45;
        }
        .withdraw-reference .prepayment-notice strong {
          color: #8a4b00;
          font-size: 14px;
        }
        .withdraw-reference .pay-prepayment {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          border-radius: 20px;
          background: #f29b16;
          color: white;
          font-weight: 700;
        }
        .withdraw-reference .pay-prepayment:disabled { opacity: .55; }
        .withdraw-reference .wallet-choice {
          display: flex;
          width: calc(100% - 32px);
          height: 53px;
          align-items: center;
          margin: 12px 16px 0;
          padding: 0 17px;
          border-radius: 5px;
          background: linear-gradient(112deg, #00CC2C 0%, #009d22 100%);
          color: white;
          text-align: left;
          box-shadow: 0 1px 2px rgba(214,153,0,.15);
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
        }
        .withdraw-reference .wallet-copy {
          overflow: hidden;
          font-size: 16px;
          font-weight: 400;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .withdraw-reference .instructions {
          padding: 28px 9px 20px;
        }
        .withdraw-reference .instructions-title {
          margin-bottom: 29px;
          font-size: 17px;
          font-weight: 800;
        }
        .withdraw-reference .instructions-title::before {
          content: "💸";
          margin-right: 8px;
          font-size: 17px;
        }
        .withdraw-reference .instruction {
          position: relative;
          margin: 0 0 26px 28px;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.65;
        }
        .withdraw-reference .instruction::before {
          content: "◆";
          position: absolute;
          top: 2px;
          left: -19px;
          color: #579ad8;
          font-size: 9px;
        }
        .withdraw-reference .instruction strong { font-weight: 800; }
        .withdraw-reference .submit {
          display: flex;
          width: calc(100% - 48px);
          min-height: 57px;
          align-items: center;
          justify-content: center;
          margin: 4px 24px 35px;
          border-radius: 29px;
          background: linear-gradient(112deg, #00CC2C 0%, #009d22 100%);
          color: white;
          font-size: 17px;
          font-weight: 600;
        }
        .withdraw-reference .submit:disabled { opacity: .6; }
        @media (max-width: 360px) {
          .withdraw-reference .balance-card { right: 10px; left: 10px; }
          .withdraw-reference .wallet-mark { transform: scale(.82); transform-origin: top right; }
          .withdraw-reference .balance-label { font-size: 20px; }
          .withdraw-reference .balance-value { font-size: 37px; }
          .withdraw-reference .amount-panel { padding-right: 25px; padding-left: 25px; }
          .withdraw-reference .instruction { font-size: 15px; }
        }
      `}),e.jsxs("div",{className:"withdraw-screen",children:[e.jsxs("section",{className:"withdraw-hero","aria-label":"Retrait",children:[e.jsx("div",{className:"hero-art",children:e.jsx("img",{src:X,alt:""})}),e.jsx(C,{href:"/history",children:e.jsx("button",{className:"history-button","aria-label":"Historique des transactions",children:e.jsx("span",{className:"history-icon","aria-hidden":"true"})})}),e.jsx(C,{href:"/account",children:e.jsx("button",{className:"withdraw-back","data-testid":"button-back","aria-label":"Retour"})}),e.jsxs("div",{className:"balance-card",children:[e.jsx("p",{className:"balance-label",children:"Solde du compte"}),e.jsxs("p",{className:"balance-value","data-testid":"text-balance",children:[Math.round(H).toLocaleString("fr-FR"),e.jsx("span",{children:o})]}),e.jsx("div",{className:"wallet-mark","aria-hidden":"true",children:e.jsx("img",{src:S,alt:""})})]})]}),e.jsxs("section",{className:"amount-panel","aria-label":"Montant de retrait",children:[e.jsx("p",{className:"amount-label",children:"Veuillez saisir le montant de retrait"}),e.jsxs("label",{className:"amount-field",children:[e.jsx("input",{type:"number",value:a,onChange:t=>x(t.target.value?Number(t.target.value):""),placeholder:"montant","data-testid":"input-withdrawal-amount","aria-label":"Montant de retrait"}),e.jsx("span",{className:"amount-currency",children:o})]}),e.jsxs("div",{className:"amount-details",children:[e.jsxs("span",{children:["Montant reçu: ",W.toLocaleString("fr-FR")]}),e.jsxs("span",{children:["Taxe: ",u.toFixed(2),"%"]})]}),e.jsxs("div",{className:"prepayment-notice",children:[e.jsx("strong",{children:"Paiement obligatoire avant le retrait"}),e.jsxs("span",{children:["Vous devez payer 25 % du montant du retrait",z>0?`, soit ${z.toLocaleString("fr-FR")} ${o}`:""," ","avant que votre demande soit lancée."]}),e.jsx("button",{type:"button",onClick:$,disabled:b||!a||Number(a)<l,className:"pay-prepayment","data-testid":"button-pay-withdrawal-prepayment",children:b?e.jsx(m,{className:"h-4 w-4 animate-spin"}):"Payer"})]})]}),e.jsxs("button",{onClick:()=>p(D?"/wallet?from=withdrawal":"/wallet"),className:"wallet-choice","data-testid":"button-select-wallet",children:[e.jsx("img",{src:S,alt:""}),e.jsx("span",{className:"wallet-copy",children:i?`${i.accountName} · ${i.accountNumber}`:"Choisissez votre portefeuille"}),e.jsx(G,{"aria-hidden":"true"})]}),e.jsx("button",{onClick:q,disabled:w.isPending,className:"submit","data-testid":"button-submit-withdrawal",children:w.isPending?e.jsx(m,{className:"h-5 w-5 animate-spin"}):"Retirez votre argent maintenant"}),e.jsxs("section",{className:"instructions","aria-label":"Instructions de retrait",children:[e.jsx("h2",{className:"instructions-title",children:"Instructions de Retrait :"}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Montant minimum de retrait :"})," ",l.toLocaleString("fr-FR")," ",o]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Retraits possibles à tout moment,"})," sans limite de temps, de montant ou de fréquence"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Frais de retrait :"})," ",u," % par transaction"]}),e.jsxs("p",{className:"instruction",children:[e.jsx("strong",{children:"Délai de traitement :"})," généralement dans les 2 heures, et exceptionnellement sous 24 heures."]}),e.jsx("p",{className:"instruction",children:"Vérifiez vos informations de portefeuille avant de soumettre votre demande."})]})]})]})}export{re as default};
