import{r as c}from"./index.Cd_vQiNd.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function p(){if(x)return s;x=1;var u=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function n(i,r,o){var e=null;if(o!==void 0&&(e=""+o),r.key!==void 0&&(e=""+r.key),"key"in r){o={};for(var l in r)l!=="key"&&(o[l]=r[l])}else o=r;return r=o.ref,{$$typeof:u,type:i,key:e,ref:r!==void 0?r:null,props:o}}return s.Fragment=a,s.jsx=n,s.jsxs=n,s}var m;function f(){return m||(m=1,d.exports=p()),d.exports}var t=f();function R(){const[u,a]=c.useState(!1),[n,i]=c.useState(""),r=["🦇 Modo oscuro próximamente… cuando salga de la cueva 🕳️","💤 Shhh… el modo oscuro está dormido.","😎 No hay modo oscuro, solo estilo claro brillante."],o=()=>{const e=r[Math.floor(Math.random()*r.length)];i(e),a(!0),setTimeout(()=>a(!1),4e3)};return t.jsxs("div",{className:"modo-oscuro-container",children:[t.jsx("span",{id:"modoOscuroBtn",onClick:o,children:t.jsx("i",{className:"fa-solid fa-moon"})}),u&&t.jsx("div",{id:"popupModoOscuro",className:"popup-mostrar",children:t.jsx("p",{children:n})})]})}export{R as default};
