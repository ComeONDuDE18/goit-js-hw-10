import{i}from"./vendor-BZoxUzx5.js";const m=({delay:e,outcome:r})=>new Promise((o,t)=>{setTimeout(()=>{r==="fulfilled"?o(e):t(e)},e)}),s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const r=parseInt(s.elements.delay.value),o=s.elements.state.value;m({delay:r,outcome:o}).then(t=>{i.success({title:"Success",message:`Fulfilled promise in ${t} ms`})}).catch(t=>{i.error({title:"Error",message:`Rejected promise in ${t} ms`})}),s.reset()});
//# sourceMappingURL=2-snackbar-B9VWjJRF.js.map
