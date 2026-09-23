import{c as V,a as W,b as O,u as H,d as U,r as m,j as e,L as C,e as X,q as w,f as b}from"./index-BFh__Zpf.js";import{u as S}from"./useQuery-B-aPEd1o.js";import{u as g}from"./useMutation-CoChSUpK.js";import{u as G,t as J,o as Y,s as j}from"./types-B2BuYmYS.js";import{a as Z}from"./countries-DOninoG6.js";import{e as _}from"./illustration-8_1784762965573-C2eE_S1I.js";import{C as E}from"./chevron-left-CO0_fWRv.js";import{S as N}from"./shield-Dj_OR16-.js";import{C as M}from"./chevron-right-qLtTi36N.js";import{X as ee}from"./x-Bk-N84wE.js";import{S as te}from"./search-DOzmadEA.js";import{C as L}from"./check-AhjJFfxt.js";import{P as q,T as ae}from"./trash-2-nfC5jmQz.js";const y=V("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),se=Y({accountName:j().min(2,"Nom du titulaire requis"),accountNumber:j().min(8,"Numéro requis"),paymentMethod:j().min(2,"Moyen de paiement requis")}),F=`
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
  @media (min-width: 700px) {
    .wallet-footer {
      position: static;
      padding: 0 16px 24px;
      border-top: 0;
      background: #ffffff;
      box-shadow: none;
    }
  }
`;function be(){const{user:u}=W(),{toast:i}=O(),[,P]=H(),$=U(),a=new URLSearchParams($).get("from")==="withdrawal",[A,n]=m.useState(!1),[R,c]=m.useState(!1),[d,x]=m.useState(""),[h,p]=m.useState(""),{data:r,isLoading:T}=S({queryKey:["/api/wallets"]}),{data:D=[]}=S({queryKey:["/api/countries"]}),l=G({resolver:J(se),defaultValues:{accountName:"",accountNumber:"",paymentMethod:""}}),f=g({mutationFn:async t=>{const s=await b("POST","/api/wallets",{...t,country:u.country});if(!s.ok){const o=await s.json();throw new Error(o.message||"Erreur")}return s.json()},onSuccess:()=>{w.invalidateQueries({queryKey:["/api/wallets"]}),i({title:"Portefeuille ajouté !"}),l.reset(),x(""),n(!1)},onError:t=>{i({title:"Erreur",description:t.message,variant:"destructive"})}}),v=g({mutationFn:async t=>{const s=await b("DELETE",`/api/wallets/${t}`,{});if(!s.ok){const o=await s.json();throw new Error(o.message||"Erreur")}return s.json()},onSuccess:()=>{w.invalidateQueries({queryKey:["/api/wallets"]}),i({title:"Portefeuille supprimé !"})},onError:t=>{i({title:"Erreur",description:t.message,variant:"destructive"})}}),k=g({mutationFn:async t=>{const s=await b("PATCH",`/api/wallets/${t}/default`,{});if(!s.ok){const o=await s.json();throw new Error(o.message||"Erreur")}return s.json()},onSuccess:()=>{w.invalidateQueries({queryKey:["/api/wallets"]})},onError:t=>{i({title:"Erreur",description:t.message,variant:"destructive"})}}),K=t=>{a&&(localStorage.setItem("selectedWalletId",t.id.toString()),P("/withdrawal"))},I=t=>{x(t),l.setValue("paymentMethod",t),p(""),c(!1)},B=()=>{l.handleSubmit(t=>f.mutate(t))()};if(!u)return null;const z=Z(u.country,D),Q=a?"/withdrawal":"/account";return A?e.jsxs("div",{className:"wallet-page",children:[e.jsx("style",{children:F}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar",children:[e.jsx("button",{onClick:()=>{n(!1),l.reset(),x("")},className:"wallet-back","data-testid":"button-back-form","aria-label":"Retour",children:e.jsx(E,{size:19})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:"Compte de retrait"}),e.jsx("h1",{className:"wallet-title",children:"Lier une carte bancaire"})]}),e.jsx("div",{className:"w-10","aria-hidden":"true"})]}),e.jsxs("main",{className:"wallet-content",children:[e.jsxs("section",{className:"wallet-hero",children:[e.jsx("div",{className:"wallet-hero-icon",children:e.jsx(N,{size:21})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Ajoutez un moyen de retrait"}),e.jsx("p",{children:"Renseignez les informations exactes du compte qui recevra vos retraits."})]})]}),e.jsxs("section",{className:"wallet-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Moyen de paiement"}),e.jsx("p",{className:"wallet-section-caption",children:"Choisissez votre opérateur"})]}),e.jsx("span",{className:"wallet-step",children:"1"})]}),e.jsxs("button",{type:"button",onClick:()=>c(!0),className:"wallet-selector","data-testid":"button-select-bank",children:[e.jsxs("span",{className:"wallet-selector-copy",children:[e.jsx("span",{className:"wallet-label",children:"Opérateur"}),e.jsx("span",{className:`wallet-value${d?"":" is-empty"}`,children:d||"Sélectionner un opérateur"})]}),e.jsx(M,{size:18})]})]}),e.jsxs("section",{className:"wallet-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Titulaire du compte"}),e.jsx("p",{className:"wallet-section-caption",children:"Comme indiqué sur votre compte"})]}),e.jsx("span",{className:"wallet-step",children:"2"})]}),e.jsxs("div",{className:"wallet-field",children:[e.jsx("label",{className:"wallet-label",htmlFor:"wallet-account-name",children:"Nom complet"}),e.jsx("input",{id:"wallet-account-name",...l.register("accountName"),placeholder:"Ex. Kouadio Blanche",className:"wallet-input","data-testid":"input-wallet-name"}),l.formState.errors.accountName&&e.jsx("p",{className:"wallet-error",children:l.formState.errors.accountName.message})]})]}),e.jsxs("section",{className:"wallet-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Numéro du compte"}),e.jsx("p",{className:"wallet-section-caption",children:"Le numéro associé à l’opérateur choisi"})]}),e.jsx("span",{className:"wallet-step",children:"3"})]}),e.jsxs("div",{className:"wallet-field",children:[e.jsx("label",{className:"wallet-label",htmlFor:"wallet-account-number",children:"Numéro de téléphone ou de compte"}),e.jsx("input",{id:"wallet-account-number",...l.register("accountNumber"),type:"tel",placeholder:"Ex. 07 00 00 00 00",className:"wallet-input","data-testid":"input-wallet-number"}),l.formState.errors.accountNumber&&e.jsx("p",{className:"wallet-error",children:l.formState.errors.accountNumber.message})]})]}),e.jsxs("p",{className:"wallet-note",children:[e.jsx(N,{size:15}),"Vérifiez chaque information avant de confirmer. Elle sera utilisée pour traiter vos retraits."]})]}),e.jsx("footer",{className:"wallet-footer",children:e.jsx("div",{className:"wallet-footer-inner",children:e.jsx("button",{onClick:B,disabled:f.isPending,className:"wallet-primary","data-testid":"button-confirm-wallet",children:f.isPending?e.jsxs(e.Fragment,{children:[e.jsx(C,{size:17,className:"animate-spin"}),"Enregistrement..."]}):"Enregistrer ce compte"})})}),R&&e.jsx("div",{className:"country-picker-overlay",onClick:()=>{p(""),c(!1)},children:e.jsxs("section",{className:"country-picker",role:"dialog","aria-modal":"true","aria-label":"Choisir un opérateur de paiement",onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"country-picker-header",children:e.jsx("h2",{children:"Choisir un opérateur"})}),e.jsx("button",{className:"country-picker-close",onClick:()=>{p(""),c(!1)},"aria-label":"Fermer",children:e.jsx(ee,{"aria-hidden":"true"})}),e.jsxs("div",{className:"country-picker-search",children:[e.jsx(te,{"aria-hidden":"true"}),e.jsx("input",{autoFocus:!0,value:h,onChange:t=>p(t.target.value),placeholder:"Rechercher","aria-label":"Rechercher un opérateur"})]}),e.jsxs("div",{className:"country-picker-list",children:[z.filter(t=>t.toLowerCase().includes(h.trim().toLowerCase())).map(t=>e.jsxs("button",{onClick:()=>I(t),className:`country-picker-row${d===t?" is-selected":""}`,"data-testid":`button-bank-${t}`,children:[e.jsx("span",{children:t}),d===t&&e.jsx("span",{className:"country-picker-check",children:e.jsx(L,{"aria-hidden":"true"})})]},t)),z.filter(t=>t.toLowerCase().includes(h.trim().toLowerCase())).length===0&&e.jsx("p",{className:"country-picker-empty",children:"Aucun opérateur trouvé"})]})]})})]})]}):e.jsxs("div",{className:"wallet-page",children:[e.jsx("style",{children:F}),e.jsxs("div",{className:"wallet-shell",children:[e.jsxs("header",{className:"wallet-topbar",children:[e.jsx(X,{href:Q,children:e.jsx("button",{className:"wallet-back","data-testid":"button-back","aria-label":"Retour",children:e.jsx(E,{size:19})})}),e.jsxs("div",{className:"wallet-heading",children:[e.jsx("span",{className:"wallet-eyebrow",children:a?"Retrait":"Sécurité du compte"}),e.jsx("h1",{className:"wallet-title",children:a?"Sélectionner un compte":"Mes cartes bancaires"})]}),a?e.jsx("div",{className:"w-10","aria-hidden":"true"}):e.jsx("button",{onClick:()=>n(!0),className:"wallet-top-action","data-testid":"button-add-wallet-icon","aria-label":"Ajouter une carte",children:e.jsx(q,{size:19})})]}),e.jsxs("main",{className:"wallet-content",children:[e.jsxs("section",{className:"wallet-hero",children:[e.jsx("div",{className:"wallet-hero-icon",children:e.jsx(y,{size:21})}),e.jsxs("div",{children:[e.jsx("h2",{children:a?"Choisissez le compte à utiliser":"Retraits simples et sécurisés"}),e.jsx("p",{children:a?"Sélectionnez un compte enregistré pour continuer votre retrait.":"Ajoutez et gérez les comptes utilisés pour recevoir vos retraits."})]})]}),e.jsxs("section",{className:"wallet-section wallet-list-section",children:[e.jsxs("div",{className:"wallet-section-header",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"wallet-section-title",children:"Comptes enregistrés"}),e.jsx("p",{className:"wallet-section-caption",children:r?.length?`${r.length} compte${r.length>1?"s":""} disponible${r.length>1?"s":""}`:"Aucun compte ajouté"})]}),e.jsx("span",{className:"wallet-step",children:e.jsx(y,{size:13})})]}),T?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx(C,{className:"w-6 h-6 animate-spin text-[#FF7A14]"})}):r&&r.length>0?e.jsx("div",{className:"wallet-list",children:r.map(t=>e.jsxs("article",{onClick:()=>a&&K(t),className:`wallet-card${a?" is-selectable":""}${t.isDefault?" is-default":""}`,"data-testid":`wallet-card-${t.id}`,children:[e.jsx("div",{className:"wallet-card-icon",children:e.jsx(y,{size:20})}),e.jsxs("div",{className:"wallet-card-copy",children:[e.jsx("p",{className:"wallet-card-method",children:t.paymentMethod}),e.jsx("p",{className:"wallet-card-name",children:t.accountName}),e.jsx("p",{className:"wallet-card-number",children:t.accountNumber}),t.isDefault&&e.jsxs("span",{className:"wallet-default",children:[e.jsx(N,{size:12})," Compte par défaut"]})]}),!a&&e.jsxs("div",{className:"wallet-card-actions",children:[!t.isDefault&&e.jsx("button",{onClick:()=>k.mutate(t.id),disabled:k.isPending,className:"wallet-icon-action","data-testid":`button-set-default-${t.id}`,"aria-label":"Définir comme compte par défaut",children:e.jsx(L,{size:16})}),e.jsx("button",{onClick:()=>v.mutate(t.id),disabled:v.isPending,className:"wallet-icon-action","data-testid":`button-delete-wallet-${t.id}`,"aria-label":"Supprimer ce compte",children:e.jsx(ae,{size:16})})]}),a&&e.jsx(M,{size:18,className:"text-[#c65100] flex-shrink-0"})]},t.id))}):e.jsxs("div",{className:"wallet-empty",children:[e.jsx("img",{src:_,alt:""}),e.jsx("p",{children:"Aucun compte bancaire enregistré"}),e.jsx("p",{children:"Ajoutez un compte pour effectuer vos retraits."})]})]})]}),e.jsx("footer",{className:"wallet-footer",children:e.jsx("div",{className:"wallet-footer-inner",children:e.jsxs("button",{onClick:()=>n(!0),className:"wallet-primary","data-testid":"button-add-wallet",children:[e.jsx(q,{size:18}),"Ajouter un compte"]})})})]})]})}export{be as default};
