(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Fragmentsiya:()=>n});class n{constructor(){}static getInstance(){return n.instance||(n.instance=new n),n.instance}split(e){if(0===e.text.length)return"";const t=document.createElement("span"),n=e.text.split(" ");let r=0;const a=e.randomize?this.createRandomIndices(e.text.length):null;return n.forEach(((o,c)=>{const s=this.createWordSpan(o,r,a,e.processor);t.appendChild(s),r+=o.length,c!==n.length-1&&s.appendChild(this.createSpaceSpan())})),t.innerHTML}createWordSpan(e,t,n,r){const a=document.createElement("span");return a.classList.add("-splitted-wrap"),Array.from(e).forEach(((o,c)=>{const s=this.createCharSpan(o,t+c);n&&s.style.setProperty("--char-random-index",String(n[t+c])),a.appendChild(s),r&&r(s,c,e.length)})),a}createCharSpan(e,t){const n=document.createElement("span");return n.innerText=e,n.classList.add("-splitted-char"),n.style.setProperty("--char-index",String(t)),n}createSpaceSpan(){const e=document.createElement("span");return e.innerHTML=" ",e}createRandomIndices(e){const t=Array.from({length:e},((e,t)=>t));for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}}module.exports=t})();