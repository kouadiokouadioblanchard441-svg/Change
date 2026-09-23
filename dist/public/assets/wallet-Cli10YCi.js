import{c as _,a as ee,b as te,u as ae,d as re,r as c,j as e,L as $,e as le,q as N,f as C}from"./index-CnH2SAM1.js";import{u as P}from"./useQuery-D3c0S398.js";import{u as S}from"./useMutation-BK2JxXid.js";import{u as oe,C as F,t as se,o as ne,s as A}from"./types-CAZRVX25.js";import{a as ie}from"./countries-DOninoG6.js";import{e as ce}from"./illustration-8_1784762965573-C2eE_S1I.js";import{c as de}from"./auth-chargepoint-combined-BcpHOCAm.js";import{w as pe}from"./account-wallet-DgIYQb9G.js";import{C as q}from"./chevron-left-NZt5Ykod.js";import{X as R}from"./x-Dqd1-_6W.js";import{S as D}from"./search-Ci_svMiy.js";import{C as z}from"./check-CPeQW8da.js";import{P as T,T as fe}from"./trash-2-3q1TiQL3.js";import{C as ue}from"./chevron-right-BKHXLdSh.js";const me=_("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),xe=ne({accountNumber:A().min(8,"Numéro requis"),paymentMethod:A().min(2,"Moyen de paiement requis")});function he(l){const a=l.replace(/\s+/g,"");return a.length<=6?l:`${a.slice(0,2)}••••••${a.slice(-4)}`}function we(l){const a=l.toLowerCase();return a.includes("orange")?"/operators/orange.png":a.includes("mtn")?"/operators/mtn.png":a.includes("moov")?"/operators/moov.jpg":a.includes("airtel")?"/operators/airtel.png":a.includes("wave")?"/operators/wave.png":a.includes("tmoney")||a.includes("t-money")?"/operators/tmoney.png":"/chargepoint-icon-512.png"}const I=`
  .wallet-page {
    min-height: 100%;
    background: #ffffff;
    color: #171717;
    font-family: Inter, Arial, sans-serif;
  }
  .wallet-shell {
    width: 100%;
    max-width: 540px;
    min-height: 100%;
    margin: 0 auto;
    background: #ffffff;
  }
  .wallet-topbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #f3e6dc;
    background: #ffffff;
  }
  .wallet-back,
  .wallet-top-action {
    display: grid;
    width: 40px;
    height: 40px;
    flex: none;
    place-items: center;
    border: 1px solid #ffd7bc;
    border-radius: 14px;
    background: #fff8f2;
    color: #c65100;
    cursor: pointer;
  }
  .wallet-top-action {
    background: #ff7a14;
    border-color: #ff7a14;
    color: #ffffff;
  }
  .wallet-heading {
    min-width: 0;
    flex: 1;
  }
  .wallet-eyebrow {
    display: block;
    margin-bottom: 2px;
    color: #c65100;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    line-height: 1.2;
    text-transform: uppercase;
  }
  .wallet-title {
    margin: 0;
    color: #171717;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.25;
  }
  .wallet-content {
    padding: 16px 16px 116px;
  }
  .wallet-hero {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #ffe0ca;
    border-radius: 20px;
    background: #fff8f2;
  }
  .wallet-hero-icon {
    display: grid;
    width: 44px;
    height: 44px;
    flex: none;
    place-items: center;
    border-radius: 15px;
    background: #ff7a14;
    color: #ffffff;
  }
  .wallet-hero h2 {
    margin: 0 0 4px;
    color: #171717;
    font-size: 15px;
    font-weight: 800;
  }
  .wallet-hero p {
    margin: 0;
    color: #6b625d;
    font-size: 13px;
    line-height: 1.5;
  }
  .wallet-section {
    margin-bottom: 12px;
    overflow: hidden;
    border: 1px solid #eee4dd;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 4px 14px rgba(42, 25, 14, .04);
  }
  .wallet-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 15px 16px 12px;
    border-bottom: 1px solid #f2ebe5;
  }
  .wallet-section-title {
    margin: 0;
    color: #171717;
    font-size: 14px;
    font-weight: 800;
  }
  .wallet-section-caption {
    margin: 3px 0 0;
    color: #857b74;
    font-size: 12px;
    line-height: 1.35;
  }
  .wallet-step {
    display: grid;
    width: 24px;
    height: 24px;
    flex: none;
    place-items: center;
    border-radius: 9px;
    background: #fff0e5;
    color: #c65100;
    font-size: 12px;
    font-weight: 800;
  }
  .wallet-selector {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px;
    border: 0;
    background: #ffffff;
    color: #171717;
    text-align: left;
    cursor: pointer;
  }
  .wallet-selector:hover,
  .wallet-selector:focus-visible {
    background: #fffaf6;
    outline: none;
  }
  .wallet-selector-copy {
    min-width: 0;
    flex: 1;
  }
  .wallet-label {
    display: block;
    margin-bottom: 5px;
    color: #857b74;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .03em;
    text-transform: uppercase;
  }
  .wallet-value {
    display: block;
    overflow: hidden;
    color: #171717;
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-value.is-empty {
    color: #a69c95;
    font-weight: 500;
  }
  .wallet-selector svg {
    flex: none;
    color: #c65100;
  }
  .wallet-field {
    padding: 15px 16px 16px;
  }
  .wallet-field + .wallet-field {
    border-top: 1px solid #f2ebe5;
  }
  .wallet-input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d9cec5;
    padding: 3px 0 9px;
    outline: none;
    background: transparent;
    color: #171717;
    font-size: 15px;
  }
  .wallet-input:focus {
    border-color: #ff7a14;
    box-shadow: 0 1px 0 #ff7a14;
  }
  .wallet-input::placeholder {
    color: #b8aea7;
  }
  .wallet-error {
    margin: 6px 0 0;
    color: #c03900;
    font-size: 12px;
  }
  .wallet-note {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin: 14px 2px 0;
    color: #756b64;
    font-size: 12px;
    line-height: 1.45;
  }
  .wallet-note svg {
    flex: none;
    margin-top: 1px;
    color: #ff7a14;
  }
  .wallet-list-section {
    margin-bottom: 0;
  }
  .wallet-list {
    display: grid;
    gap: 16px;
    padding: 12px;
  }
  .wallet-card-wrap {
    display: grid;
    gap: 8px;
  }
  .wallet-card {
    position: relative;
    min-height: 190px;
    overflow: hidden;
    border: 0;
    border-radius: 22px;
    padding: 20px;
    background: linear-gradient(125deg, #c94f00 0%, #f26b08 48%, #ff982e 100%);
    box-shadow: 0 10px 20px rgba(184, 78, 0, .22);
    color: #ffffff;
    transition: box-shadow .15s ease, transform .15s ease;
  }
  .wallet-card::before {
    position: absolute;
    inset: -45% -20%;
    background: repeating-linear-gradient(
      68deg,
      rgba(255, 255, 255, .16) 0,
      rgba(255, 255, 255, .16) 24px,
      transparent 24px,
      transparent 72px
    );
    content: "";
    transform: rotate(-4deg);
    pointer-events: none;
  }
  .wallet-card > * {
    position: relative;
    z-index: 1;
  }
  .wallet-card.is-selectable {
    cursor: pointer;
  }
  .wallet-card.is-selectable:active {
    transform: scale(.99);
  }
  .wallet-card.is-default {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .72), 0 10px 20px rgba(184, 78, 0, .22);
  }
  .wallet-card-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .wallet-card-icon {
    display: grid;
    width: 32px;
    height: 32px;
    flex: none;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .62);
    border-radius: 8px;
    background: rgba(255, 255, 255, .13);
    padding: 5px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
  .wallet-card-copy {
    display: flex;
    min-width: 0;
    height: 100%;
    flex-direction: column;
  }
  .wallet-card-method {
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .wallet-card-number {
    margin: auto 0 18px;
    overflow: hidden;
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: .04em;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .wallet-card-bottomline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .wallet-card-network {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    gap: 7px;
    color: rgba(255, 255, 255, .86);
    font-size: 12px;
    font-weight: 600;
  }
  .wallet-card-network-icon {
    width: 20px;
    height: 20px;
    flex: none;
    border: 1px solid rgba(255, 255, 255, .62);
    border-radius: 5px;
    background: #ffffff;
    object-fit: cover;
  }
  .wallet-card-network span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-card-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
  }
  .wallet-icon-action {
    display: inline-flex;
    min-height: 34px;
    align-items: center;
    gap: 6px;
    border: 1px solid #e9e3de;
    border-radius: 18px;
    padding: 0 12px;
    background: #ffffff;
    color: #5e554e;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
  .wallet-icon-action:hover,
  .wallet-icon-action:focus-visible {
    border-color: #ffb77e;
    background: #fff8f2;
    outline: none;
  }
  .wallet-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 16px 24px;
    text-align: center;
  }
  .wallet-empty img {
    width: 136px;
    height: 136px;
    object-fit: contain;
    opacity: .88;
  }
  .wallet-empty p {
    margin: 6px 0 0;
    color: #6b625d;
    font-size: 13px;
  }
  .wallet-empty p + p {
    margin-top: 4px;
    color: #9a8f87;
    font-size: 12px;
  }
  .wallet-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    padding: 12px 16px 20px;
    border-top: 1px solid #f0e5dc;
    background: rgba(255, 255, 255, .96);
    box-shadow: 0 -6px 18px rgba(42, 25, 14, .06);
  }
  .wallet-footer-inner {
    width: 100%;
    max-width: 508px;
    margin: 0 auto;
  }
  .wallet-primary {
    display: flex;
    width: 100%;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 0;
    border-radius: 15px;
    background: #ff7a14;
    box-shadow: 0 7px 14px rgba(255, 122, 20, .22);
    color: #ffffff;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
  }
  .wallet-primary:hover,
  .wallet-primary:focus-visible {
    background: #e96808;
    outline: 3px solid rgba(255, 122, 20, .20);
    outline-offset: 2px;
  }
  .wallet-primary:disabled {
    cursor: not-allowed;
    opacity: .55;
  }
  .wallet-form-page {
    background: #ffffff;
  }
  .wallet-form-topbar {
    border-bottom: 0;
    background: transparent;
  }
  .wallet-form-topbar .wallet-back {
    border-color: rgba(23, 23, 23, .18);
    background: rgba(255, 255, 255, .5);
    color: #171717;
  }
  .wallet-form-topbar .wallet-eyebrow {
    color: #171717;
  }
  .wallet-form-topbar .wallet-title {
    color: #171717;
  }
  .wallet-form-content {
    min-height: calc(100vh - 73px);
    padding-top: 20px;
    background: transparent;
  }
  .wallet-form-page .wallet-shell,
  .wallet-scene-page .wallet-shell {
    min-height: 100vh;
    background-color: #ffffff;
    background-image:
      linear-gradient(rgba(255, 255, 255, .22), rgba(255, 255, 255, .22)),
      url("${de}");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .wallet-scene-page .wallet-shell {
    background-position: center 190px;
  }
  .wallet-reference-card {
    overflow: hidden;
    border: 1px solid #e7e2de;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(23, 23, 23, .06);
  }
  .wallet-reference-card h2 {
    margin: 0;
    border-bottom: 1px solid #ece8e5;
    padding: 18px 20px 15px;
    color: #171717;
    font-size: 19px;
    font-weight: 800;
  }
  .wallet-reference-row {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 14px;
    min-height: 62px;
    padding: 15px 20px;
    border: 0;
    background: #ffffff;
    color: #171717;
    text-align: left;
    cursor: pointer;
  }
  .wallet-reference-row:hover,
  .wallet-reference-row:focus-visible {
    background: #fffaf6;
    outline: none;
  }
  .wallet-reference-label {
    width: 84px;
    flex: none;
    color: #4e4742;
    font-size: 15px;
    font-weight: 700;
  }
  .wallet-reference-value {
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: #171717;
    font-size: 15px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-reference-value.is-empty {
    color: #9b918a;
    font-weight: 500;
  }
  .wallet-reference-row svg {
    flex: none;
    color: #c65100;
  }
  .wallet-reference-divider {
    height: 1px;
    margin: 0 20px;
    background: #e5e1de;
  }
  .wallet-reference-address {
    min-height: 104px;
    padding: 18px 20px 22px;
    background: #ffffff;
  }
  .wallet-reference-address label {
    display: block;
    margin-bottom: 8px;
    color: #4e4742;
    font-size: 15px;
    font-weight: 700;
  }
  .wallet-reference-address .wallet-input {
    border-bottom-color: #d9cec5;
    padding: 4px 0 9px;
    font-size: 15px;
    text-align: left;
  }
  .wallet-form-note {
    margin: 14px 2px 0;
    color: #756b64;
    font-size: 12px;
    line-height: 1.45;
    text-align: center;
  }
  .wallet-form-page .wallet-footer {
    border-top: 0;
    background: transparent;
    box-shadow: none;
  }
  .wallet-scene-page .wallet-topbar {
    border-bottom: 0;
    background: transparent;
  }
  .wallet-scene-page .wallet-content {
    background: transparent;
  }
  .wallet-scene-add {
    position: relative;
    z-index: 1;
    padding: 42px 16px 18px;
    background: #ffffff;
  }
  .wallet-scene-add .wallet-primary {
    min-height: 56px;
    border-radius: 30px;
  }
  .wallet-scene-page .wallet-footer {
    border-top: 0;
    background: transparent;
    box-shadow: none;
  }
  .wallet-scene-page .wallet-primary {
    min-height: 56px;
    border-radius: 30px;
  }
  @media (min-width: 700px) {
    .wallet-footer {
      position: static;
      padding: 0 16px 24px;
      border-top: 0;
      background: #ffffff;
      box-shadow: none;
    }
  }
`;function Ae(){const{user:l}=ee(),{toast:a}=te(),[,W]=ae(),K=re(),o=new URLSearchParams(K).get("from")==="withdrawal",[Q,p]=c.useState(!1),[B,f]=c.useState(!1),[O,u]=c.useState(!1),[m,x]=c.useState(""),[s,h]=c.useState(""),[y,w]=c.useState(""),[j,g]=c.useState(""),{data:n,isLoading:V}=P({queryKey:["/api/wallets"]}),{data:k=[]}=P({queryKey:["/api/countries"]}),i=oe({resolver:se(xe),defaultValues:{accountNumber:"",paymentMethod:""}});c.useEffect(()=>{l&&!s&&h(l.country)},[l,s]);const v=S({mutationFn:async t=>{const r=await C("POST","/api/wallets",{...t,accountName:l.fullName,country:s});if(!r.ok){const d=await r.json();throw new Error(d.message||"Erreur")}return r.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]}),a({title:"Portefeuille ajouté !"}),i.reset(),x(""),h(l?.country||""),p(!1)},onError:t=>{a({title:"Erreur",description:t.message,variant:"destructive"})}}),L=S({mutationFn:async t=>{const r=await C("DELETE",`/api/wallets/${t}`,{});if(!r.ok){const d=await r.json();throw new Error(d.message||"Erreur")}return r.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]}),a({title:"Portefeuille supprimé !"})},onError:t=>{a({title:"Erreur",description:t.message,variant:"destructive"})}}),E=S({mutationFn:async t=>{const r=await C("PATCH",`/api/wallets/${t}/default`,{});if(!r.ok){const d=await r.json();throw new Error(d.message||"Erreur")}return r.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]})},onError:t=>{a({title:"Erreur",description:t.message,variant:"destructive"})}}),H=t=>{o&&(localStorage.setItem("selectedWalletId",t.id.toString()),W("/withdrawal"))},U=t=>{x(t),i.setValue("paymentMethod",t),w(""),f(!1)},X=t=>{h(t),x(""),i.setValue("paymentMethod",""),g(""),u(!1)},G=()=>{if(!s){a({title:"Pays requis",description:"Sélectionnez un pays.",variant:"destructive"});return}i.handleSubmit(t=>v.mutate(t))()};if(!l)return null;const J=k.find(t=>t.code===s&&t.isActive)?.name||s||"Sélectionner un pays",M=ie(s,k),b=k.filter(t=>t.isActive).sort((t,r)=>t.name.localeCompare(r.name,"fr")),Y=o?"/withdrawal":"/account",Z=o||n===void 0||n.length>0;return Q?e.jsxs("div",{className:"wallet-page wallet-form-page",children:[e.jsx("style",{children:I}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar wallet-form-topbar",children:[e.jsx("button",{onClick:()=>{p(!1),i.reset(),x(""),h(l.country)},className:"wallet-back","data-testid":"button-back-form","aria-label":"Retour",children:e.jsx(q,{size:21})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:"Compte de retrait"}),e.jsx("h1",{className:"wallet-title",children:"Ajouter un compte"})]}),e.jsx("div",{className:"w-10","aria-hidden":"true"})]}),e.jsxs("main",{className:"wallet-content wallet-form-content",children:[e.jsxs("section",{className:"wallet-reference-card",children:[e.jsx("h2",{children:"Informations du compte"}),e.jsxs("button",{type:"button",onClick:()=>u(!0),className:"wallet-reference-row","data-testid":"button-select-country",children:[e.jsx("span",{className:"wallet-reference-label",children:"Type"}),e.jsx("span",{className:`wallet-reference-value${s?"":" is-empty"}`,children:J}),e.jsx(F,{size:19})]}),e.jsx("div",{className:"wallet-reference-divider"}),e.jsxs("button",{type:"button",onClick:()=>f(!0),className:"wallet-reference-row","data-testid":"button-select-network",children:[e.jsx("span",{className:"wallet-reference-label",children:"Network"}),e.jsx("span",{className:`wallet-reference-value${m?"":" is-empty"}`,children:m||"Sélectionner un opérateur"}),e.jsx(F,{size:19})]}),e.jsx("div",{className:"wallet-reference-divider"}),e.jsxs("div",{className:"wallet-reference-address",children:[e.jsx("label",{htmlFor:"wallet-account-number",children:"Adresse"}),e.jsx("input",{id:"wallet-account-number",...i.register("accountNumber"),type:"tel",placeholder:"Saisissez le numéro",className:"wallet-input","data-testid":"input-wallet-number"}),i.formState.errors.accountNumber&&e.jsx("p",{className:"wallet-error",children:i.formState.errors.accountNumber.message})]})]}),e.jsx("p",{className:"wallet-form-note",children:"Le numéro sera utilisé pour recevoir vos retraits."})]}),e.jsx("footer",{className:"wallet-footer",children:e.jsx("div",{className:"wallet-footer-inner",children:e.jsx("button",{onClick:G,disabled:v.isPending,className:"wallet-primary","data-testid":"button-confirm-wallet",children:v.isPending?e.jsxs(e.Fragment,{children:[e.jsx($,{size:17,className:"animate-spin"}),"Enregistrement..."]}):"Confirmer"})})}),O&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{g(""),u(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un pays",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"country-picker-header",children:[e.jsx("h2",{children:"Choisir un pays"}),e.jsx("button",{className:"country-picker-close",onClick:()=>{g(""),u(!1)},"aria-label":"Fermer",children:e.jsx(R,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(D,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:j,onChange:t=>g(t.target.value),placeholder:"Rechercher un pays","aria-label":"Rechercher un pays"})]}),e.jsxs("div",{className:"country-picker-list",children:[b.filter(t=>t.name.toLowerCase().includes(j.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>X(t.code),className:`country-picker-row${s===t.code?" is-selected":""}`,"data-testid":`button-country-${t.code}`,children:[e.jsx("span",{className:"country-picker-name",children:t.name}),e.jsx("span",{className:"country-picker-prefix",children:t.code}),s===t.code&&e.jsx("span",{className:"country-picker-check",children:e.jsx(z,{"aria-hidden":"true"})})]},t.code)),b.length===0&&e.jsx("p",{className:"country-picker-empty",children:"Chargement des pays..."}),b.length>0&&b.filter(t=>t.name.toLowerCase().includes(j.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun pays trouvé"})]})]})}),B&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{w(""),f(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un opérateur de paiement",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"country-picker-header",children:[e.jsx("h2",{children:"Choisir un opérateur"}),e.jsx("button",{className:"country-picker-close",onClick:()=>{w(""),f(!1)},"aria-label":"Fermer",children:e.jsx(R,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(D,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:y,onChange:t=>w(t.target.value),placeholder:"Rechercher","aria-label":"Rechercher un opérateur"})]}),e.jsxs("div",{className:"country-picker-list",children:[M.filter(t=>t.toLowerCase().includes(y.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>U(t),className:`country-picker-row${m===t?" is-selected":""}`,"data-testid":`button-bank-${t}`,children:[e.jsx("span",{children:t}),m===t&&e.jsx("span",{className:"country-picker-check",children:e.jsx(z,{"aria-hidden":"true"})})]},t)),M.filter(t=>t.toLowerCase().includes(y.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun opérateur trouvé"})]})]})})]})]}):e.jsxs("div",{className:"wallet-page wallet-scene-page",children:[e.jsx("style",{children:I}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar",children:[e.jsx(le,{href:Y,children:e.jsx("button",{className:"wallet-back","data-testid":"button-back","aria-label":"Retour",children:e.jsx(q,{size:19})})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:o?"Retrait":"Sécurité du compte"}),e.jsx("h1",{className:"wallet-title",children:o?"Sélectionner un compte":"Mes cartes bancaires"})]}),o?e.jsx("div",{className:"w-10","aria-hidden":"true"}):e.jsx("button",{onClick:()=>p(!0),className:"wallet-top-action","data-testid":"button-add-wallet-icon","aria-label":"Ajouter une carte",children:e.jsx(T,{size:19})})]}),e.jsx("div",{className:"wallet-scene-add",children:e.jsxs("button",{onClick:()=>p(!0),className:"wallet-primary","data-testid":"button-add-wallet",children:[e.jsx(T,{size:18}),"Ajouter un compte"]})}),e.jsx("main",{className:"wallet-content",children:Z&&e.jsx(e.Fragment,{children:e.jsxs("section",{className:"wallet-section wallet-list-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Comptes enregistrés"}),e.jsx("p",{className:"wallet-section-caption",children:n?.length?`${n.length} compte${n.length>1?"s":""} disponible${n.length>1?"s":""}`:"Aucun compte ajouté"})]}),e.jsx("span",{className:"wallet-step",children:e.jsx(me,{size:13})})]}),V?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx($,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):n&&n.length>0?e.jsx("div",{className:"wallet-list",children:n.map(t=>e.jsxs("div",{className:"wallet-card-wrap",children:[e.jsxs("article",{onClick:()=>o&&H(t),className:`wallet-card${o?" is-selectable":""}${t.isDefault?" is-default":""}`,"data-testid":`wallet-card-${t.id}`,children:[e.jsxs("div",{className:"wallet-card-copy",children:[e.jsxs("div",{className:"wallet-card-brand",children:[e.jsx("img",{className:"wallet-card-icon",src:pe,alt:"","aria-hidden":"true"}),e.jsx("p",{className:"wallet-card-method",children:t.paymentMethod})]}),e.jsx("p",{className:"wallet-card-number",children:he(t.accountNumber)}),e.jsx("div",{className:"wallet-card-bottomline",children:e.jsxs("span",{className:"wallet-card-network",children:[e.jsx("img",{className:"wallet-card-network-icon",src:we(t.paymentMethod),alt:"","aria-hidden":"true"}),e.jsxs("span",{children:[t.country||"Compte de retrait"," · ",t.paymentMethod]})]})})]}),o&&e.jsx(ue,{size:18,className:"text-white flex-shrink-0"})]}),!o&&e.jsxs("div",{className:"wallet-card-actions",children:[!t.isDefault&&e.jsxs("button",{onClick:()=>E.mutate(t.id),disabled:E.isPending,className:"wallet-icon-action","data-testid":`button-set-default-${t.id}`,"aria-label":"Définir comme compte par défaut",children:[e.jsx(z,{size:16}),"Définir par défaut"]}),e.jsxs("button",{onClick:()=>L.mutate(t.id),disabled:L.isPending,className:"wallet-icon-action","data-testid":`button-delete-wallet-${t.id}`,"aria-label":"Supprimer ce compte",children:[e.jsx(fe,{size:16}),"Supprimer"]})]})]},t.id))}):e.jsxs("div",{className:"wallet-empty",children:[e.jsx("img",{src:ce,alt:""}),e.jsx("p",{children:"Aucun compte bancaire enregistré"}),e.jsx("p",{children:"Ajoutez un compte pour effectuer vos retraits."})]})]})})})]})]})}export{Ae as default};
