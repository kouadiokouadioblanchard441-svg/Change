import{c as _,a as ee,b as te,u as ae,d as re,r as o,j as e,L as P,e as le,q as N,f as C}from"./index-dHfXGhdO.js";import{u as $}from"./useQuery-C1pvjgFq.js";import{u as S}from"./useMutation-DH1LR8tv.js";import{u as se,C as F,t as oe,o as ie,s as R}from"./types-DrvSiydZ.js";import{a as ne}from"./countries-DOninoG6.js";import{e as ce}from"./illustration-8_1784762965573-C2eE_S1I.js";import{C as q}from"./chevron-left-B-4aIW_I.js";import{X as D}from"./x-CAj37Fhy.js";import{S as T}from"./search-CakgfIj8.js";import{C as z}from"./check-DRMlC6lG.js";import{P as I,T as de}from"./trash-2-D2mk6T7c.js";import{S as pe}from"./shield-Bnl49K_w.js";import{C as fe}from"./chevron-right-CmOwJuLf.js";const L=_("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ue=ie({accountNumber:R().min(8,"Numéro requis"),paymentMethod:R().min(2,"Moyen de paiement requis")}),K=`
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
    gap: 10px;
    padding: 12px;
  }
  .wallet-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    border: 1px solid #eee4dd;
    border-radius: 16px;
    background: #ffffff;
    transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  }
  .wallet-card.is-selectable {
    cursor: pointer;
  }
  .wallet-card.is-selectable:active {
    transform: scale(.99);
  }
  .wallet-card.is-default {
    border-color: #ffb77e;
    box-shadow: 0 4px 12px rgba(255, 122, 20, .10);
  }
  .wallet-card-icon {
    display: grid;
    width: 44px;
    height: 44px;
    flex: none;
    place-items: center;
    border-radius: 14px;
    background: #fff0e5;
    color: #c65100;
  }
  .wallet-card-copy {
    min-width: 0;
    flex: 1;
  }
  .wallet-card-method {
    margin: 0;
    color: #171717;
    font-size: 14px;
    font-weight: 800;
  }
  .wallet-card-name,
  .wallet-card-number {
    margin: 3px 0 0;
    overflow: hidden;
    color: #756b64;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wallet-card-number {
    color: #9a8f87;
  }
  .wallet-default {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 7px;
    color: #c65100;
    font-size: 11px;
    font-weight: 800;
  }
  .wallet-card-actions {
    display: flex;
    align-items: center;
    gap: 5px;
    flex: none;
  }
  .wallet-icon-action {
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border: 1px solid #f0e3da;
    border-radius: 11px;
    background: #ffffff;
    color: #c65100;
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
    background: #fff8f2;
  }
  .wallet-form-topbar {
    border-bottom: 0;
    background: #ff7a14;
  }
  .wallet-form-topbar .wallet-back {
    border-color: rgba(255, 255, 255, .38);
    background: rgba(255, 255, 255, .16);
    color: #ffffff;
  }
  .wallet-form-topbar .wallet-eyebrow,
  .wallet-form-topbar .wallet-title {
    color: #ffffff;
  }
  .wallet-form-content {
    padding-top: 20px;
    background: #fff8f2;
  }
  .wallet-reference-card {
    overflow: hidden;
    border: 1px solid #f0e1d5;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(104, 57, 24, .08);
  }
  .wallet-reference-card h2 {
    margin: 0;
    padding: 20px 20px 14px;
    color: #171717;
    font-size: 19px;
    font-weight: 800;
  }
  .wallet-reference-row {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 14px;
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
    width: 72px;
    flex: none;
    color: #4e4742;
    font-size: 15px;
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
    background: #eadfd7;
  }
  .wallet-reference-address {
    padding: 18px 20px 22px;
  }
  .wallet-reference-address label {
    display: block;
    margin-bottom: 8px;
    color: #4e4742;
    font-size: 15px;
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
  @media (min-width: 700px) {
    .wallet-footer {
      position: static;
      padding: 0 16px 24px;
      border-top: 0;
      background: #ffffff;
      box-shadow: none;
    }
  }
`;function Ee(){const{user:i}=ee(),{toast:c}=te(),[,Q]=ae(),B=re(),r=new URLSearchParams(B).get("from")==="withdrawal",[V,p]=o.useState(!1),[W,f]=o.useState(!1),[H,u]=o.useState(!1),[m,x]=o.useState(""),[l,h]=o.useState(""),[j,w]=o.useState(""),[y,b]=o.useState(""),{data:n,isLoading:O}=$({queryKey:["/api/wallets"]}),{data:k=[]}=$({queryKey:["/api/countries"]}),s=se({resolver:oe(ue),defaultValues:{accountNumber:"",paymentMethod:""}});o.useEffect(()=>{i&&!l&&h(i.country)},[i,l]);const v=S({mutationFn:async t=>{const a=await C("POST","/api/wallets",{...t,accountName:i.fullName,country:l});if(!a.ok){const d=await a.json();throw new Error(d.message||"Erreur")}return a.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]}),c({title:"Portefeuille ajouté !"}),s.reset(),x(""),h(i?.country||""),p(!1)},onError:t=>{c({title:"Erreur",description:t.message,variant:"destructive"})}}),E=S({mutationFn:async t=>{const a=await C("DELETE",`/api/wallets/${t}`,{});if(!a.ok){const d=await a.json();throw new Error(d.message||"Erreur")}return a.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]}),c({title:"Portefeuille supprimé !"})},onError:t=>{c({title:"Erreur",description:t.message,variant:"destructive"})}}),M=S({mutationFn:async t=>{const a=await C("PATCH",`/api/wallets/${t}/default`,{});if(!a.ok){const d=await a.json();throw new Error(d.message||"Erreur")}return a.json()},onSuccess:()=>{N.invalidateQueries({queryKey:["/api/wallets"]})},onError:t=>{c({title:"Erreur",description:t.message,variant:"destructive"})}}),U=t=>{r&&(localStorage.setItem("selectedWalletId",t.id.toString()),Q("/withdrawal"))},X=t=>{x(t),s.setValue("paymentMethod",t),w(""),f(!1)},G=t=>{h(t),x(""),s.setValue("paymentMethod",""),b(""),u(!1)},J=()=>{if(!l){c({title:"Pays requis",description:"Sélectionnez un pays.",variant:"destructive"});return}s.handleSubmit(t=>v.mutate(t))()};if(!i)return null;const Y=k.find(t=>t.code===l&&t.isActive)?.name||l||"Sélectionner un pays",A=ne(l,k),g=k.filter(t=>t.isActive).sort((t,a)=>t.name.localeCompare(a.name,"fr")),Z=r?"/withdrawal":"/account";return V?e.jsxs("div",{className:"wallet-page wallet-form-page",children:[e.jsx("style",{children:K}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar wallet-form-topbar",children:[e.jsx("button",{onClick:()=>{p(!1),s.reset(),x(""),h(i.country)},className:"wallet-back","data-testid":"button-back-form","aria-label":"Retour",children:e.jsx(q,{size:21})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:"Compte de retrait"}),e.jsx("h1",{className:"wallet-title",children:"Ajouter un compte"})]}),e.jsx("div",{className:"w-10","aria-hidden":"true"})]}),e.jsxs("main",{className:"wallet-content wallet-form-content",children:[e.jsxs("section",{className:"wallet-reference-card",children:[e.jsx("h2",{children:"Informations du compte"}),e.jsxs("button",{type:"button",onClick:()=>u(!0),className:"wallet-reference-row","data-testid":"button-select-country",children:[e.jsx("span",{className:"wallet-reference-label",children:"Type"}),e.jsx("span",{className:`wallet-reference-value${l?"":" is-empty"}`,children:Y}),e.jsx(F,{size:19})]}),e.jsx("div",{className:"wallet-reference-divider"}),e.jsxs("button",{type:"button",onClick:()=>f(!0),className:"wallet-reference-row","data-testid":"button-select-network",children:[e.jsx("span",{className:"wallet-reference-label",children:"Network"}),e.jsx("span",{className:`wallet-reference-value${m?"":" is-empty"}`,children:m||"Sélectionner un opérateur"}),e.jsx(F,{size:19})]}),e.jsx("div",{className:"wallet-reference-divider"}),e.jsxs("div",{className:"wallet-reference-address",children:[e.jsx("label",{htmlFor:"wallet-account-number",children:"Adresse"}),e.jsx("input",{id:"wallet-account-number",...s.register("accountNumber"),type:"tel",placeholder:"Saisissez le numéro",className:"wallet-input","data-testid":"input-wallet-number"}),s.formState.errors.accountNumber&&e.jsx("p",{className:"wallet-error",children:s.formState.errors.accountNumber.message})]})]}),e.jsx("p",{className:"wallet-form-note",children:"Le numéro sera utilisé pour recevoir vos retraits."})]}),e.jsx("footer",{className:"wallet-footer",children:e.jsx("div",{className:"wallet-footer-inner",children:e.jsx("button",{onClick:J,disabled:v.isPending,className:"wallet-primary","data-testid":"button-confirm-wallet",children:v.isPending?e.jsxs(e.Fragment,{children:[e.jsx(P,{size:17,className:"animate-spin"}),"Enregistrement..."]}):"Confirmer"})})}),H&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{b(""),u(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un pays",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"country-picker-header",children:[e.jsx("h2",{children:"Choisir un pays"}),e.jsx("button",{className:"country-picker-close",onClick:()=>{b(""),u(!1)},"aria-label":"Fermer",children:e.jsx(D,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(T,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:y,onChange:t=>b(t.target.value),placeholder:"Rechercher un pays","aria-label":"Rechercher un pays"})]}),e.jsxs("div",{className:"country-picker-list",children:[g.filter(t=>t.name.toLowerCase().includes(y.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>G(t.code),className:`country-picker-row${l===t.code?" is-selected":""}`,"data-testid":`button-country-${t.code}`,children:[e.jsx("span",{className:"country-picker-name",children:t.name}),e.jsx("span",{className:"country-picker-prefix",children:t.code}),l===t.code&&e.jsx("span",{className:"country-picker-check",children:e.jsx(z,{"aria-hidden":"true"})})]},t.code)),g.length===0&&e.jsx("p",{className:"country-picker-empty",children:"Chargement des pays..."}),g.length>0&&g.filter(t=>t.name.toLowerCase().includes(y.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun pays trouvé"})]})]})}),W&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{w(""),f(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un opérateur de paiement",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"country-picker-header",children:[e.jsx("h2",{children:"Choisir un opérateur"}),e.jsx("button",{className:"country-picker-close",onClick:()=>{w(""),f(!1)},"aria-label":"Fermer",children:e.jsx(D,{"aria-hidden":"true"})})]}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(T,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:j,onChange:t=>w(t.target.value),placeholder:"Rechercher","aria-label":"Rechercher un opérateur"})]}),e.jsxs("div",{className:"country-picker-list",children:[A.filter(t=>t.toLowerCase().includes(j.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>X(t),className:`country-picker-row${m===t?" is-selected":""}`,"data-testid":`button-bank-${t}`,children:[e.jsx("span",{children:t}),m===t&&e.jsx("span",{className:"country-picker-check",children:e.jsx(z,{"aria-hidden":"true"})})]},t)),A.filter(t=>t.toLowerCase().includes(j.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun opérateur trouvé"})]})]})})]})]}):e.jsxs("div",{className:"wallet-page",children:[e.jsx("style",{children:K}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar",children:[e.jsx(le,{href:Z,children:e.jsx("button",{className:"wallet-back","data-testid":"button-back","aria-label":"Retour",children:e.jsx(q,{size:19})})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:r?"Retrait":"Sécurité du compte"}),e.jsx("h1",{className:"wallet-title",children:r?"Sélectionner un compte":"Mes cartes bancaires"})]}),r?e.jsx("div",{className:"w-10","aria-hidden":"true"}):e.jsx("button",{onClick:()=>p(!0),className:"wallet-top-action","data-testid":"button-add-wallet-icon","aria-label":"Ajouter une carte",children:e.jsx(I,{size:19})})]}),e.jsxs("main",{className:"wallet-content",children:[e.jsxs("section",{className:"wallet-hero",children:[e.jsx("div",{className:"wallet-hero-icon",children:e.jsx(L,{size:21})}),e.jsxs("div",{children:[e.jsx("h2",{children:r?"Choisissez le compte à utiliser":"Retraits simples et sécurisés"}),e.jsx("p",{children:r?"Sélectionnez un compte enregistré pour continuer votre retrait.":"Ajoutez et gérez les comptes utilisés pour recevoir vos retraits."})]})]}),e.jsxs("section",{className:"wallet-section wallet-list-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Comptes enregistrés"}),e.jsx("p",{className:"wallet-section-caption",children:n?.length?`${n.length} compte${n.length>1?"s":""} disponible${n.length>1?"s":""}`:"Aucun compte ajouté"})]}),e.jsx("span",{className:"wallet-step",children:e.jsx(L,{size:13})})]}),O?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx(P,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):n&&n.length>0?e.jsx("div",{className:"wallet-list",children:n.map(t=>e.jsxs("article",{onClick:()=>r&&U(t),className:`wallet-card${r?" is-selectable":""}${t.isDefault?" is-default":""}`,"data-testid":`wallet-card-${t.id}`,children:[e.jsx("div",{className:"wallet-card-icon",children:e.jsx(L,{size:20})}),e.jsxs("div",{className:"wallet-card-copy",children:[e.jsx("p",{className:"wallet-card-method",children:t.paymentMethod}),e.jsx("p",{className:"wallet-card-name",children:t.accountName}),e.jsx("p",{className:"wallet-card-number",children:t.accountNumber}),t.isDefault&&e.jsxs("span",{className:"wallet-default",children:[e.jsx(pe,{size:12})," Compte par défaut"]})]}),!r&&e.jsxs("div",{className:"wallet-card-actions",children:[!t.isDefault&&e.jsx("button",{onClick:()=>M.mutate(t.id),disabled:M.isPending,className:"wallet-icon-action","data-testid":`button-set-default-${t.id}`,"aria-label":"Définir comme compte par défaut",children:e.jsx(z,{size:16})}),e.jsx("button",{onClick:()=>E.mutate(t.id),disabled:E.isPending,className:"wallet-icon-action","data-testid":`button-delete-wallet-${t.id}`,"aria-label":"Supprimer ce compte",children:e.jsx(de,{size:16})})]}),r&&e.jsx(fe,{size:18,className:"text-[#c65100] flex-shrink-0"})]},t.id))}):e.jsxs("div",{className:"wallet-empty",children:[e.jsx("img",{src:ce,alt:""}),e.jsx("p",{children:"Aucun compte bancaire enregistré"}),e.jsx("p",{children:"Ajoutez un compte pour effectuer vos retraits."})]})]})]}),e.jsx("footer",{className:"wallet-footer",children:e.jsx("div",{className:"wallet-footer-inner",children:e.jsxs("button",{onClick:()=>p(!0),className:"wallet-primary","data-testid":"button-add-wallet",children:[e.jsx(I,{size:18}),"Ajouter un compte"]})})})]})]})}export{Ee as default};
