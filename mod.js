var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){let t,n=0;for(const a of e.targetTouches)a.force>n&&(n=a.force,t=a);return t}function a(e,t){const n=document.createElement("div"),a=document.createElement("div");return n.style.display="grid",n.style.gridTemplateColumns="1fr",n.style.margin="var(--length-gap) 0",a.style.fontSize="var(--length-font-code)",a.textContent=e,n.append(a),n.append(t),n}function d(){if(null===document.head.querySelector('meta[name="viewport"]')){const e=document.createElement("meta");e.name="viewport",e.content="width=device-width, initial-scale=1",document.head.append(e)}}function s(){const e=document.createElement("div"),t=document.createElement("main"),a=document.createElement("button"),d=document.createElement("aside"),s=document.createElement("div"),o=document.createElement("div");e.classList.add("lr-struct"),a.classList.add("show-icon","menu"),s.classList.add("content"),o.classList.add("sash"),e.append(t),e.append(a),e.append(d),d.append(s),d.append(o);let c=!1,i=0,l=d.offsetWidth;a.addEventListener("click",(()=>{d.classList.add("active")})),t.addEventListener("click",(()=>{d.classList.remove("active")})),o.addEventListener("mousedown",(t=>{t.preventDefault(),c=!0,i=t.clientX,l=d.offsetWidth,e.classList.add("sashing")})),o.addEventListener("touchstart",(t=>{t.cancelable&&t.preventDefault(),c=!0;const a=n(t);void 0!==a&&(i=a.clientX,l=d.offsetWidth,e.classList.add("sashing"))}),{passive:!1}),addEventListener("mousemove",(t=>{c&&e.isConnected&&(t.preventDefault(),e.style.setProperty("--length-width-side",`${Math.min(Math.max(l+t.clientX-i,30),e.offsetWidth)}px`),d.offsetWidth<=50?s.classList.add("vanished"):s.classList.remove("vanished"))})),o.addEventListener("touchmove",(t=>{if(!c)return;t.cancelable&&t.preventDefault();const a=n(t);void 0!==a&&(e.style.setProperty("--length-width-side",`${Math.min(Math.max(l+a.clientX-i,30),e.offsetWidth)}px`),d.offsetWidth<=50?s.classList.add("vanished"):s.classList.remove("vanished"))}),{passive:!1});const r=()=>{!0===c&&e.isConnected&&(c=!1,e.classList.remove("sashing"))};return addEventListener("mouseup",r),addEventListener("touchend",r),{element:e,main:t,sideContent:s}}function o(){const{element:e,main:t,sideContent:n}=s(),d=document.createElement("article"),o=document.createElement("details"),c=document.createElement("summary"),i=document.createElement("select"),l=document.createElement("select");return c.textContent="Settings",i.add(new Option("auto")),i.add(new Option("light")),i.add(new Option("dark")),l.add(new Option("small")),l.add(new Option("medium")),l.add(new Option("large")),t.append(d),n.append(o),o.append(c),o.append(a("Color Scheme",i)),o.append(a("Font Size",l)),document.documentElement.dataset.colorScheme=i.value=localStorage.getItem("st-color-scheme")??document.documentElement.dataset.colorScheme??"auto",document.documentElement.dataset.fontSize=l.value=localStorage.getItem("st-font-size")??document.documentElement.dataset.fontSize??"small",i.addEventListener("change",(()=>{localStorage.setItem("st-color-scheme",document.documentElement.dataset.colorScheme=i.value)})),l.addEventListener("change",(()=>{localStorage.setItem("st-font-size",document.documentElement.dataset.fontSize=l.value)})),{element:e,main:t,sideContent:n,article:d,settings:o}}e.d(t,{O9:()=>o,oy:()=>s,gW:()=>a,F$:()=>n,S1:()=>d});var c=t.O9,i=t.oy,l=t.gW,r=t.F$,m=t.S1;export{c as createASStruct,i as createLRStruct,l as createNamedStretchedElement,r as extractMainTouch,m as init};