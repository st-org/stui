var n={d:(A,e)=>{for(var t in e)n.o(e,t)&&!n.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:e[t]})},o:(n,A)=>Object.prototype.hasOwnProperty.call(n,A),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},A={};n.d(A,{oy:()=>g,iv:()=>t,F$:()=>o,ci:()=>e,S1:()=>d});var e={};n.r(e),n.d(e,{all:()=>a,menu:()=>r});var t={};function o(n){let A,e=0;for(const t of n.targetTouches)t.force>e&&(e=t.force,A=t);return A}n.r(t),n.d(t,{all:()=>s,fresh:()=>c,override:()=>l,root:()=>i});const r='@font-face{font-family:"menu";src:url("data:font/woff;base64,d09GRgABAAAAAAR4AAsAAAAABCwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxEMa2NtYXAAAAFoAAAAVAAAAFQAFAEJZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHAAAABwilZXf2hlYWQAAAI0AAAANgAAADYc4smiaGhlYQAAAmwAAAAkAAAAJAdCA8ZobXR4AAACkAAAABQAAAAUCgAAgGxvY2EAAAKkAAAADAAAAAwAKABMbWF4cAAAArAAAAAgAAAAIAAJAA5uYW1lAAAC0AAAAYYAAAGGmUoJ+3Bvc3QAAARYAAAAIAAAACAAAwAAAAMDAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAQAAAAEEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIABB//3//wAAAAAAIABB//3//wAB/+P/wwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwCAAKsDgAKrAAMABwALAAATIRUhFTUhFQU1IRWAAwD9AAMA/QADAAKrVtRUVNZWVgAAAAEAAAABAAB7+aVnXw889QALBAAAAAAA3SJC/QAAAADdIkL9AAAAAAOAAqsAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4AAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAACAAAABAAAgAAAAAAACgAUAB4AOAABAAAABQAMAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")}.show-icon.menu::before{font-family:"menu";content:"A"}',a=r,i='/* font size */\nhtml {\n    font-size: 16px;\n}\n\nhtml[data-font-size=medium] {\n    font-size: 17px;\n}\n\nhtml[data-font-size=large] {\n    font-size: 18px;\n}\n\n@media screen and (max-width:600px) {\n    html {\n        font-size: 15px;\n    }\n\n    html[data-font-size=medium] {\n        font-size: 16px;\n    }\n\n    html[data-font-size=large] {\n        font-size: 17px;\n    }\n}\n\n@media screen and (max-width:500px) {\n    html {\n        font-size: 14px;\n    }\n\n    html[data-font-size=medium] {\n        font-size: 15px;\n    }\n\n    html[data-font-size=large] {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width:400px) {\n    html {\n        font-size: 13px;\n    }\n\n    html[data-font-size=medium] {\n        font-size: 14px;\n    }\n\n    html[data-font-size=large] {\n        font-size: 15px;\n    }\n}\n\n/* variables */\nhtml {\n    --color-text: black;\n    --color-light: #6a737d;\n    --color-string: darkorange;\n    --color-number: #098658;\n    --color-keyword: #AF00DB;\n    --color-function: #ecad00;\n    --color-variable: deepskyblue;\n    --color-modifier: dodgerblue;\n    --color-class: #267f99;\n    --color-warn: red;\n    --color-comment: limegreen;\n    --color-border: #e1e4e8;\n    --color-bg: white;\n    --color-area: whitesmoke;\n    --color-pre: #f6f8fa;\n    --color-slice: rgba(211, 211, 211, .5);\n    --color-selection: rgba(135, 206, 235, .5);\n    --color-span: rgba(27, 31, 35, .05);\n    --length-width: calc(210mm - .8in);\n    --length-width-side: 336px;\n    --length-width-bar: 15px;\n    --length-tab: 2em;\n    --length-padding: 1em;\n    --length-gap: .5em;\n    --length-space: .25em;\n    --length-font-title: 1.8em;\n    --length-font-heading: 1.3em;\n    --length-font-log: .8em;\n    --number-ratio-line: 1.5;\n    --font: ui-sans-serif, "Segoe UI", Helvetica, Arial, "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;\n    --font-mono: ui-monospace, "SF Mono", Consolas, monospace, "Segoe UI", Helvetica, Arial, "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nhtml[data-color-scheme=dark] {\n    --color-text: #cccccc;\n    --color-light: #8f8f8f;\n    --color-string: #df9e61;\n    --color-number: #B5CEA8;\n    --color-keyword: #cc80c6;\n    --color-function: #DCDCAA;\n    --color-variable: #6ec0ec;\n    --color-modifier: #3074ac;\n    --color-class: #4EC9B0;\n    --color-warn: #F44747;\n    --color-comment: #6A9955;\n    --color-border: #2e3133;\n    --color-bg: #131313;\n    --color-area: #161616;\n    --color-pre: #191b1d;\n    --color-slice: rgba(88, 88, 88, .5);\n    --color-selection: rgba(95, 144, 163, .5);\n    --color-span: rgba(58, 61, 65, .5);\n}\n\n@media (prefers-color-scheme: dark) {\n    html:not([data-color-scheme=light]) {\n        --color-text: #cccccc;\n        --color-light: #8f8f8f;\n        --color-string: #df9e61;\n        --color-number: #B5CEA8;\n        --color-keyword: #cc80c6;\n        --color-function: #DCDCAA;\n        --color-variable: #6ec0ec;\n        --color-modifier: #3074ac;\n        --color-class: #4EC9B0;\n        --color-warn: #F44747;\n        --color-comment: #6A9955;\n        --color-border: #2e3133;\n        --color-bg: #131313;\n        --color-area: #161616;\n        --color-pre: #191b1d;\n        --color-slice: rgba(88, 88, 88, .5);\n        --color-selection: rgba(95, 144, 163, .5);\n        --color-span: rgba(58, 61, 65, .5);\n    }\n}\n\n/* html */\nhtml {\n    background-color: var(--color-bg) !important;\n    color: var(--color-text);\n    font-family: var(--font);\n    line-height: var(--number-ratio-line);\n}\n\n/* body */\nbody {\n    margin: 0;\n}\n\n/* lrStruct */\nbody>.lr-struct>main {\n    box-sizing: border-box;\n    display: flow-root;\n    margin-left: var(--length-width-side);\n    min-height: 100vh;\n}\n\nbody>.lr-struct>button {\n    display: none;\n    left: 0;\n    position: fixed;\n    top: 0;\n}\n\nbody>.lr-struct>aside {\n    background-color: var(--color-pre);\n    border-right: 1px solid var(--color-border);\n    box-sizing: border-box;\n    display: flow-root;\n    height: 100vh;\n    left: 0;\n    max-width: 90%;\n    position: fixed;\n    top: 0;\n    width: var(--length-width-side);\n}\n\n@media screen and (max-width:960px) {\n    body>.lr-struct>aside:not(.active) {\n        display: none;\n    }\n\n    body>.lr-struct>button {\n        display: block;\n    }\n\n    body>.lr-struct>main {\n        margin-left: 0 !important;\n    }\n}\n\nbody>.lr-struct>aside>.sash {\n    cursor: ew-resize;\n    height: 100%;\n    position: absolute;\n    right: -5px;\n    top: 0;\n    width: 10px;\n}\n\nbody>.lr-struct.sashing>aside>.sash {\n    background-color: var(--color-slice);\n}\n\nbody>.lr-struct>aside>.content.vanished {\n    display: none;\n}\n\n@media print {\n    body>.lr-struct {\n        min-height: 0;\n    }\n\n    body>.lr-struct>main {\n        margin-left: 0 !important;\n    }\n\n    body>.lr-struct>aside,\n    body>.lr-struct>button {\n        display: none;\n    }\n}\n\n/* print */\n* {\n    color-adjust: exact;\n}\n\n@page {\n    margin: .4in;\n    size: A4 portrait;\n}\n\n/* scroll bar */\nhtml {\n    scrollbar-color: var(--color-slice) transparent;\n}\n\n::-webkit-scrollbar {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-corner {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--color-slice);\n}',l='/* a */\na,\na:hover {\n    color: inherit;\n    text-decoration: none;\n}\n\na[href]:not([href^="#"]) {\n    color: var(--color-modifier);\n}\n\na[href]:hover {\n    text-decoration: underline;\n}\n\n/* blockquote */\nblockquote {\n    border: 0px solid var(--color-border);\n    border-left-width: 3px;\n    color: var(--color-light);\n    margin: 0px;\n    padding-left: var(--length-padding);\n}\n\n/* button */\nbutton,\ninput[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n    background-color: var(--color-slice);\n    border: none;\n    border-radius: var(--length-space);\n    color: inherit;\n    cursor: pointer;\n    font: inherit;\n    padding: var(--length-space) var(--length-padding);\n}\n\nbutton:hover,\ninput[type="button"]:hover,\ninput[type="reset"]:hover,\ninput[type="submit"]:hover,\nbutton.pushing,\ninput[type="button"].pushing,\ninput[type="reset"].pushing,\ninput[type="submit"].pushing {\n    background-color: var(--color-selection);\n}\n\n/* code */\ncode,\npre,\nsamp {\n    font-family: var(--font-mono);\n    tab-size: 4;\n    white-space: pre-wrap;\n}\n\ncode {\n    background-color: var(--color-span);\n    border-radius: var(--length-space);\n    font-size: var(--length-font-log);\n    padding: 0 var(--length-space);\n}\n\npre code {\n    background-color: transparent;\n    border-radius: 0;\n    font: inherit;\n    padding: 0;\n}\n\n/* fieldset */\nfieldset {\n    border: 1px solid var(--color-border);\n    margin: 0;\n    padding: var(--length-padding);\n}\n\nlegend {\n    padding: var(--length-space);\n}\n\n/* figure */\nfigure {\n    margin: var(--length-space) 0;\n    text-align: center;\n}\n\nfigcaption {\n    margin: var(--length-space) 0;\n}\n\n/* h */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: var(--length-gap) 0;\n}\n\nh1 {\n    border-bottom: 1px solid var(--color-border);\n    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);\n    padding-bottom: var(--length-space);\n}\n\nh2 {\n    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);\n}\n\nh3 {\n    font-size: var(--length-font-heading);\n}\n\nh4 {\n    font-size: calc((1em + var(--length-font-heading)) / 2);\n}\n\n/* hr */\nhr {\n    background-color: var(--color-border);\n    border: 0;\n    height: 3px;\n    margin: var(--length-gap) 0;\n}\n\nhr::after {\n    clear: both;\n    content: "";\n    display: flow-root;\n}\n\n/* img */\nimg {\n    max-width: 100%;\n}\n\n/* input */\ninput,\nselect,\ntextarea {\n    background-color: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--length-space);\n    color: inherit;\n    font: inherit;\n    padding: 0 var(--length-space);\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    border-color: var(--color-variable);\n    outline: none;\n}\n\nselect {\n    appearance: none;\n}\n\ninput[type=number] {\n    appearance: textfield;\n}\n\ninput::-webkit-inner-spin-button,\ninput::-webkit-outer-spin-button,\ninput::-webkit-calendar-picker-indicator,\ninput::-webkit-search-cancel-button { \n    opacity: 0;\n}\n\ninput::-webkit-file-upload-button {\n    display: none;\n}\n\ntextarea {\n    min-height: calc(var(--number-ratio-line) * 5em);\n    resize: none;\n}\n\n/* kbd */\nkbd {\n    border: 1px solid var(--color-border);\n    border-radius: var(--length-space);\n    display: inline-block;\n    font-family: var(--font-mono);\n    font-size: var(--length-font-log);\n    line-height: 1;\n    padding: var(--length-space);\n}\n\n/* l */\nol,\nul {\n    margin: 0;\n    padding-left: var(--length-tab);\n}\n\ndl {\n    margin: 0;\n}\n\ndd {\n    margin-left: var(--length-tab);\n}\n\n/* p */\np {\n    margin: var(--length-gap) 0;\n}\n\n/* pre */\npre {\n    background-color: var(--color-pre);\n    border-radius: var(--length-padding);\n    font-size: var(--length-font-log);\n    margin: var(--length-gap) 0;\n    padding: var(--length-padding);\n}\n\n/* table */\ntable {\n    border-collapse: collapse;\n    color: inherit;\n    font: inherit;\n}\n\ntd,\nth {\n    border: 1px solid var(--color-border);\n    padding: var(--length-gap);\n}\n\nth {\n    font-weight: normal;\n    text-align: center;\n}\n\ntr:nth-child(even) {\n    background-color: var(--color-pre);\n}\n\ntable>caption {\n    margin: var(--length-space) 0;\n}\n\n/* iframe */\niframe {\n    border: 0;\n}',c="/* dark */\nhtml[data-color-scheme=dark] .dark{\n    filter: brightness(.5);\n}\n\nhtml[data-color-scheme=dark] .invert{\n    filter: invert(.9147982) brightness(.8745098);\n}\n\n@media (prefers-color-scheme: dark) {\n    html:not([data-color-scheme=light]) .dark{\n        filter: brightness(.5);\n    }\n\n    html:not([data-color-scheme=light]) .invert{\n        filter: invert(.9147982) brightness(.8745098);\n    }\n}\n\n/* hide */\n.collapse {\n    visibility: collapse;\n}\n\n.hide {\n    display: none !important;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n.translucent {\n    opacity: .5;\n}\n\n.transparent {\n    opacity: 0;\n}\n\n/* warn */\n.warn {\n    color: var(--color-warn);\n}",s=a+i+l+c;function d(n={}){const{document:A}=n.window??window;if(null===A.head.querySelector("meta[charset]")){const n=A.createElement("meta");n.setAttribute("charset","utf8"),A.head.append(n)}if(null===A.head.querySelector('meta[name="viewport"]')){const n=A.createElement("meta");n.name="viewport",n.content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0",A.head.append(n)}const e=A.createElement("style");if(e.textContent=s,A.head.append(e),void 0!==n.css){const e=A.createElement("style");e.textContent=n.css,A.head.append(e)}}function g(n={}){const{document:A,addEventListener:e}=n.window??window,t=A.createElement("div"),r=A.createElement("main"),a=A.createElement("button"),i=A.createElement("aside"),l=A.createElement("div"),c=A.createElement("div");t.classList.add("lr-struct"),a.classList.add("show-icon","menu"),l.classList.add("content"),c.classList.add("sash"),t.append(r),t.append(a),t.append(i),i.append(l),i.append(c);let s=!1,d=0,g=i.offsetWidth;const h=[];a.addEventListener("click",(()=>{i.classList.add("active")})),r.addEventListener("click",(()=>{i.classList.remove("active")})),c.addEventListener("mousedown",(n=>{n.preventDefault(),s=!0,d=n.clientX,g=i.offsetWidth,t.classList.add("sashing")})),c.addEventListener("touchstart",(n=>{s=!0;const A=o(n);void 0!==A&&(d=A.clientX,g=i.offsetWidth,t.classList.add("sashing"))})),e("mousemove",(n=>{if(!s)return;n.preventDefault();const A=n.clientX-d,e=Math.min(Math.max(g+A,30),t.offsetWidth);i.style.width=e+"px",r.style.marginLeft=i.offsetWidth+"px",i.offsetWidth<=50?l.classList.add("vanished"):l.classList.remove("vanished")})),c.addEventListener("touchmove",(n=>{if(n.cancelable&&n.preventDefault(),!s)return;const A=o(n);if(void 0===A)return;const e=A.clientX-d,a=Math.min(Math.max(g+e,30),t.offsetWidth);i.style.width=a+"px",r.style.marginLeft=i.offsetWidth+"px",i.offsetWidth<=50?l.classList.add("vanished"):l.classList.remove("vanished")}));const p=async()=>{if(!0===s){s=!1,t.classList.remove("sashing");for(const n of h)await n()}};return e("mouseup",p),e("touchend",p),{element:t,main:r,sideContent:l,sashListeners:h}}var h=A.oy,p=A.iv,m=A.F$,b=A.ci,f=A.S1;export{h as createLRStruct,p as css,m as extractMainTouch,b as icons,f as init};