import{c as K,a as te,b as ae,u as re,d as le,r as c,j as e,L as $,e as se,q as N,f as C}from"./index-CnpZeuN1.js";import{u as P}from"./useQuery-BLYcuBAs.js";import{u as z}from"./useMutation-Bpx826Iy.js";import{u as oe,C as F,t as ie,o as ne,s as A}from"./types-BmSsmRhW.js";import{a as ce}from"./countries-DOninoG6.js";import{e as de}from"./illustration-8_1784762965573-C2eE_S1I.js";import{c as pe}from"./auth-chargepoint-combined-BcpHOCAm.js";import{C as q}from"./chevron-left-CFSizw55.js";import{X as R}from"./x-r-C7aVQb.js";import{S as D}from"./search-DBX5mxsq.js";import{C as S}from"./check-C1-vq7_P.js";import{P as T,T as fe}from"./trash-2-htWkY7J_.js";import{C as ue}from"./chevron-right-DjmUtOI9.js";const W=K("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);const xe=K("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]),me=ne({accountNumber:A().min(8,"Numéro requis"),paymentMethod:A().min(2,"Moyen de paiement requis")});function he(r){const l=r.replace(/\s+/g,"");return l.length<=6?r:`${l.slice(0,2)}••••••${l.slice(-4)}`}const I=`
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
    color: #ffffff;
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
  .wallet-card-network span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-card-chip {
    width: 54px;
    height: 38px;
    flex: none;
    border: 1px solid rgba(119, 85, 22, .25);
    border-radius: 10px;
    background:
      linear-gradient(90deg, transparent 49%, rgba(119, 85, 22, .28) 50%, transparent 51%),
      linear-gradient(0deg, transparent 49%, rgba(119, 85, 22, .28) 50%, transparent 51%),
      linear-gradient(135deg, #fff0ae, #d7b85d);
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, .65);
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
      url("${pe}");
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
`;function Pe(){const{user:r}=te(),{toast:l}=ae(),[,Q]=re(),B=le(),s=new URLSearchParams(B).get("from")==="withdrawal",[V,p]=c.useState(!1),[O,f]=c.useState(!1),[H,u]=c.useState(!1),[x,m]=c.useState(""),[o,h]=c.useState(""),[y,w]=c.useState(""),[j,g]=c.useState(""),{data:i,isLoading:U}=P({queryKey:["/api/wallets"]}),{data:k=[]}=P({queryKey:["/api/countries"]}),n=oe({resolver:ie(me),defaultValues:{accountNumber:"",paymentMethod:""}});c.useEffect(()=>{r&&!o&&h(r.country)},[r,o]);const v=z({mutationFn:async t=>{const a=await C("POST","/api/wallets",{...t,accountName:r.fullName,country:o});if(!a.ok){const d=await a.json();throw new Error(d.message||"Erreur")}return a.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]}),l({title:"Portefeuille ajouté !"}),n.reset(),m(""),h(r?.country||""),p(!1)},onError:t=>{l({title:"Erreur",description:t.message,variant:"destructive"})}}),M=z({mutationFn:async t=>{const a=await C("DELETE",`/api/wallets/${t}`,{});if(!a.ok){const d=await a.json();throw new Error(d.message||"Erreur")}return a.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]}),l({title:"Portefeuille supprimé !"})},onError:t=>{l({title:"Erreur",description:t.message,variant:"destructive"})}}),L=z({mutationFn:async t=>{const a=await C("PATCH",`/api/wallets/${t}/default`,{});if(!a.ok){const d=await a.json();throw new Error(d.message||"Erreur")}return a.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]})},onError:t=>{l({title:"Erreur",description:t.message,variant:"destructive"})}}),X=t=>{s&&(localStorage.setItem("selectedWalletId",t.id.toString()),Q("/withdrawal"))},G=t=>{m(t),n.setValue("paymentMethod",t),w(""),f(!1)},J=t=>{h(t),m(""),n.setValue("paymentMethod",""),g(""),u(!1)},Y=()=>{if(!o){l({title:"Pays requis",description:"Sélectionnez un pays.",variant:"destructive"});return}n.handleSubmit(t=>v.mutate(t))()};if(!r)return null;const Z=k.find(t=>t.code===o&&t.isActive)?.name||o||"Sélectionner un pays",E=ce(o,k),b=k.filter(t=>t.isActive).sort((t,a)=>t.name.localeCompare(a.name,"fr")),_=s?"/withdrawal":"/account",ee=s||i===void 0||i.length>0;return V?e.jsxs("div",{className:"wallet-page wallet-form-page",children:[e.jsx("style",{children:I}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar wallet-form-topbar",children:[e.jsx("button",{onClick:()=>{p(!1),n.reset(),m(""),h(r.country)},className:"wallet-back","data-testid":"button-back-form","aria-label":"Retour",children:e.jsx(q,{size:21})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:"Compte de retrait"}),e.jsx("h1",{className:"wallet-title",children:"Ajouter un compte"})]}),e.jsx("div",{className:"w-10","aria-hidden":"true"})]}),e.jsxs("main",{className:"wallet-content wallet-form-content",children:[e.jsxs("section",{className:"wallet-reference-card",children:[e.jsx("h2",{children:"Informations du compte"}),e.jsxs("button",{type:"button",onClick:()=>u(!0),className:"wallet-reference-row","data-testid":"button-select-country",children:[e.jsx("span",{className:"wallet-reference-label",children:"Type"}),e.jsx("span",{className:`wallet-reference-value${o?"":" is-empty"}`,children:Z}),e.jsx(F,{size:19})]}),e.jsx("div",{className:"wallet-reference-divider"}),e.jsxs("button",{type:"button",onClick:()=>f(!0),className:"wallet-reference-row","data-testid":"button-select-network",children:[e.jsx("span",{className:"wallet-reference-label",children:"Network"}),e.jsx("span",{className:`wallet-reference-value${x?"":" is-empty"}`,children:x||"Sélectionner un opérateur"}),e.jsx(F,{size:19})]}),e.jsx("div",{className:"wallet-reference-divider"}),e.jsxs("div",{className:"wallet-reference-address",children:[e.jsx("label",{htmlFor:"wallet-account-number",children:"Adresse"}),e.jsx("input",{id:"wallet-account-number",...n.register("accountNumber"),type:"tel",placeholder:"Saisissez le numéro",className:"wallet-input","data-testid":"input-wallet-number"}),n.formState.errors.accountNumber&&e.jsx("p",{className:"wallet-error",children:n.formState.errors.accountNumber.message})]})]}),e.jsx("p",{className:"wallet-form-note",children:"Le numéro sera utilisé pour recevoir vos retraits."})]}),e.jsx("footer",{className:"wallet-footer",children:e.jsx("div",{className:"wallet-footer-inner",children:e.jsx("button",{onClick:Y,disabled:v.isPending,className:"wallet-primary","data-testid":"button-confirm-wallet",children:v.isPending?e.jsxs(e.Fragment,{children:[e.jsx($,{size:17,className:"animate-spin"}),"Enregistrement..."]}):"Confirmer"})})}),H&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{g(""),u(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un pays",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"country-picker-header",children:[e.jsx("h2",{children:"Choisir un pays"}),e.jsx("button",{className:"country-picker-close",onClick:()=>{g(""),u(!1)},"aria-label":"Fermer",children:e.jsx(R,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(D,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:j,onChange:t=>g(t.target.value),placeholder:"Rechercher un pays","aria-label":"Rechercher un pays"})]}),e.jsxs("div",{className:"country-picker-list",children:[b.filter(t=>t.name.toLowerCase().includes(j.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>J(t.code),className:`country-picker-row${o===t.code?" is-selected":""}`,"data-testid":`button-country-${t.code}`,children:[e.jsx("span",{className:"country-picker-name",children:t.name}),e.jsx("span",{className:"country-picker-prefix",children:t.code}),o===t.code&&e.jsx("span",{className:"country-picker-check",children:e.jsx(S,{"aria-hidden":"true"})})]},t.code)),b.length===0&&e.jsx("p",{className:"country-picker-empty",children:"Chargement des pays..."}),b.length>0&&b.filter(t=>t.name.toLowerCase().includes(j.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun pays trouvé"})]})]})}),O&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{w(""),f(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un opérateur de paiement",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"country-picker-header",children:[e.jsx("h2",{children:"Choisir un opérateur"}),e.jsx("button",{className:"country-picker-close",onClick:()=>{w(""),f(!1)},"aria-label":"Fermer",children:e.jsx(R,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(D,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:y,onChange:t=>w(t.target.value),placeholder:"Rechercher","aria-label":"Rechercher un opérateur"})]}),e.jsxs("div",{className:"country-picker-list",children:[E.filter(t=>t.toLowerCase().includes(y.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>G(t),className:`country-picker-row${x===t?" is-selected":""}`,"data-testid":`button-bank-${t}`,children:[e.jsx("span",{children:t}),x===t&&e.jsx("span",{className:"country-picker-check",children:e.jsx(S,{"aria-hidden":"true"})})]},t)),E.filter(t=>t.toLowerCase().includes(y.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun opérateur trouvé"})]})]})})]})]}):e.jsxs("div",{className:"wallet-page wallet-scene-page",children:[e.jsx("style",{children:I}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar",children:[e.jsx(se,{href:_,children:e.jsx("button",{className:"wallet-back","data-testid":"button-back","aria-label":"Retour",children:e.jsx(q,{size:19})})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:s?"Retrait":"Sécurité du compte"}),e.jsx("h1",{className:"wallet-title",children:s?"Sélectionner un compte":"Mes cartes bancaires"})]}),s?e.jsx("div",{className:"w-10","aria-hidden":"true"}):e.jsx("button",{onClick:()=>p(!0),className:"wallet-top-action","data-testid":"button-add-wallet-icon","aria-label":"Ajouter une carte",children:e.jsx(T,{size:19})})]}),e.jsx("div",{className:"wallet-scene-add",children:e.jsxs("button",{onClick:()=>p(!0),className:"wallet-primary","data-testid":"button-add-wallet",children:[e.jsx(T,{size:18}),"Ajouter un compte"]})}),e.jsx("main",{className:"wallet-content",children:ee&&e.jsx(e.Fragment,{children:e.jsxs("section",{className:"wallet-section wallet-list-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Comptes enregistrés"}),e.jsx("p",{className:"wallet-section-caption",children:i?.length?`${i.length} compte${i.length>1?"s":""} disponible${i.length>1?"s":""}`:"Aucun compte ajouté"})]}),e.jsx("span",{className:"wallet-step",children:e.jsx(W,{size:13})})]}),U?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx($,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):i&&i.length>0?e.jsx("div",{className:"wallet-list",children:i.map(t=>e.jsxs("div",{className:"wallet-card-wrap",children:[e.jsxs("article",{onClick:()=>s&&X(t),className:`wallet-card${s?" is-selectable":""}${t.isDefault?" is-default":""}`,"data-testid":`wallet-card-${t.id}`,children:[e.jsxs("div",{className:"wallet-card-copy",children:[e.jsxs("div",{className:"wallet-card-brand",children:[e.jsx("div",{className:"wallet-card-icon",children:e.jsx(W,{size:18})}),e.jsx("p",{className:"wallet-card-method",children:t.paymentMethod})]}),e.jsx("p",{className:"wallet-card-number",children:he(t.accountNumber)}),e.jsxs("div",{className:"wallet-card-bottomline",children:[e.jsxs("span",{className:"wallet-card-network",children:[e.jsx(xe,{size:15}),e.jsxs("span",{children:[t.country||"Compte de retrait"," · ",t.paymentMethod]})]}),e.jsx("span",{className:"wallet-card-chip","aria-hidden":"true"})]})]}),s&&e.jsx(ue,{size:18,className:"text-white flex-shrink-0"})]}),!s&&e.jsxs("div",{className:"wallet-card-actions",children:[!t.isDefault&&e.jsxs("button",{onClick:()=>L.mutate(t.id),disabled:L.isPending,className:"wallet-icon-action","data-testid":`button-set-default-${t.id}`,"aria-label":"Définir comme compte par défaut",children:[e.jsx(S,{size:16}),"Définir par défaut"]}),e.jsxs("button",{onClick:()=>M.mutate(t.id),disabled:M.isPending,className:"wallet-icon-action","data-testid":`button-delete-wallet-${t.id}`,"aria-label":"Supprimer ce compte",children:[e.jsx(fe,{size:16}),"Supprimer"]})]})]},t.id))}):e.jsxs("div",{className:"wallet-empty",children:[e.jsx("img",{src:de,alt:""}),e.jsx("p",{children:"Aucun compte bancaire enregistré"}),e.jsx("p",{children:"Ajoutez un compte pour effectuer vos retraits."})]})]})})})]})]})}export{Pe as default};
