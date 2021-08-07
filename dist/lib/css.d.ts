export declare const root = "/* html */\nhtml {\n    --color-text: black;\n    --color-light: #6a737d;\n    --color-string: darkorange;\n    --color-number: #098658;\n    --color-keyword: #AF00DB;\n    --color-function: #ecad00;\n    --color-variable: deepskyblue;\n    --color-modifier: dodgerblue;\n    --color-class: #267f99;\n    --color-warn: red;\n    --color-comment: limegreen;\n    --color-border: #e1e4e8;\n    --color-bg: white;\n    --color-area: whitesmoke;\n    --color-pre: #f6f8fa;\n    --color-slice: rgba(211, 211, 211, 0.5);\n    --color-selection: rgba(135, 206, 235, 0.5);\n    --color-span: rgba(27, 31, 35, .05);\n    --font: ui-sans-serif, \"Segoe UI\", Helvetica, Arial, \"Microsoft YaHei\", \"PingFang SC\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", sans-serif;\n    --font-mono: ui-monospace, \"SF Mono\", Consolas, monospace, \"Segoe UI\", Helvetica, Arial, \"Microsoft YaHei\", \"PingFang SC\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    --length-width: calc(210mm - .8in);\n    ;\n    --length-width-side: 336px;\n    --length-width-bar: 15px;\n    --length-tab: 2em;\n    --length-padding: 1em;\n    --length-gap: .5em;\n    --length-padding-span: .3em;\n    --length-space: .25em;\n    --length-padding-circle: .2em;\n    --length-font-title: 1.8em;\n    --length-font-heading: 1.3em;\n    --length-font-span: .85em;\n    --length-font-log: .8em;\n    --length-font-circle: .7em;\n    --number-ratio-line: 1.5;\n    line-height: var(--number-ratio-line);\n    font-family: var(--font);\n    color: var(--color-text);\n    background-color: var(--color-bg) !important;\n    font-size: 16px;\n}\n\nhtml[data-font-size=medium] {\n    font-size: 17px\n}\n\nhtml[data-font-size=large] {\n    font-size: 18px\n}\n\nhtml[data-color-scheme=dark] {\n    --color-text: #cccccc;\n    --color-light: #8f8f8f;\n    --color-string: #df9e61;\n    --color-number: #B5CEA8;\n    --color-keyword: #cc80c6;\n    --color-function: #DCDCAA;\n    --color-variable: #6ec0ec;\n    --color-modifier: #3074ac;\n    --color-class: #4EC9B0;\n    --color-warn: #F44747;\n    --color-comment: #6A9955;\n    --color-border: #2e3133;\n    --color-bg: #131313;\n    --color-area: #161616;\n    --color-pre: #191b1d;\n    --color-slice: rgba(88, 88, 88, 0.5);\n    --color-selection: rgba(95, 144, 163, 0.5);\n    --color-span: rgba(58, 61, 65, 0.5);\n}\n\nhtml[data-color-scheme=dark] .dark{\n    filter: brightness(.5);\n}\n\nhtml[data-color-scheme=dark] .invert{\n    filter: invert(.9147982) brightness(.8745098);\n}\n\n@media (prefers-color-scheme: dark) {\n    html:not([data-color-scheme=light]) {\n        --color-text: #cccccc;\n        --color-light: #8f8f8f;\n        --color-string: #df9e61;\n        --color-number: #B5CEA8;\n        --color-keyword: #cc80c6;\n        --color-function: #DCDCAA;\n        --color-variable: #6ec0ec;\n        --color-modifier: #3074ac;\n        --color-class: #4EC9B0;\n        --color-warn: #F44747;\n        --color-comment: #6A9955;\n        --color-border: #2e3133;\n        --color-bg: #131313;\n        --color-area: #161616;\n        --color-pre: #191b1d;\n        --color-slice: rgba(88, 88, 88, 0.5);\n        --color-selection: rgba(95, 144, 163, 0.5);\n        --color-span: rgba(58, 61, 65, 0.5);\n    }\n\n    html:not([data-color-scheme=light]) .dark{\n        filter: brightness(.5);\n    }\n\n    html:not([data-color-scheme=light]) .invert{\n        filter: invert(.9147982) brightness(.8745098);\n    }\n}\n\n@media screen and (max-width:600px) {\n    html {\n        font-size: 15px\n    }\n\n    html[data-font-size=medium] {\n        font-size: 16px\n    }\n\n    html[data-font-size=large] {\n        font-size: 17px\n    }\n}\n\n@media screen and (max-width:500px) {\n    html {\n        font-size: 14px\n    }\n\n    html[data-font-size=medium] {\n        font-size: 15px\n    }\n\n    html[data-font-size=large] {\n        font-size: 16px\n    }\n}\n\n@media screen and (max-width:400px) {\n    html {\n        font-size: 13px\n    }\n\n    html[data-font-size=medium] {\n        font-size: 14px\n    }\n\n    html[data-font-size=large] {\n        font-size: 15px\n    }\n}\n\n/* lrStruct */\nbody>.lr-struct {\n    min-height: 100vh;\n    position: relative;\n    display: flex;\n}\n\nbody>.lr-struct>.main {\n    margin-left: var(--length-width-side);\n    flex-grow: 1;\n    box-sizing: border-box;\n    width: 100%;\n}\n\nbody>.lr-struct>.button {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n}\n\nbody>.lr-struct>.side {\n    box-sizing: border-box;\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: var(--length-width-side);\n    max-width: 90%;\n    height: 100vh;\n    background-color: var(--color-pre);\n    border-right: 1px solid var(--color-border);\n}\n\n@media screen and (max-width:960px) {\n    body>.lr-struct>.side:not(.active) {\n        display: none;\n    }\n\n    body>.lr-struct>.button {\n        display: block;\n    }\n\n    body>.lr-struct>.main {\n        margin-left: 0 !important;\n    }\n}\n\nbody>.lr-struct>.side>.cover {\n    display: none;\n}\n\nbody>.lr-struct.sashing>.side>.cover {\n    display: block;\n    position: fixed;\n    width: 100vw;\n    height: 100%;\n    top: 0;\n    left: 0;\n    cursor: ew-resize;\n}\n\nbody>.lr-struct>.side>.sash {\n    height: 100%;\n    width: 10px;\n    position: absolute;\n    top: 0;\n    right: -5px;\n    cursor: ew-resize;\n}\n\nbody>.lr-struct.sashing>.side>.sash {\n    background-color: var(--color-slice);\n}\n\nbody>.lr-struct>.side>.content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n}\n\nbody>.lr-struct>.side>.content.vanished {\n    display: none;\n}\n\n@media print {\n    body>.lr-struct {\n        min-height: 0;\n    }\n\n    body>.lr-struct>.main {\n        margin-left: 0 !important;\n    }\n\n    body>.lr-struct>.side,\n    body>.lr-struct>.button {\n        display: none;\n    }\n}\n\n/* print */\n@page {\n    color-adjust: exact;\n    -webkit-print-color-adjust: exact;\n    size: A4 portrait;\n}";
export declare const override = "/* scroll */\n::-webkit-scrollbar {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-corner {\n    background-color: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: var(--color-slice);\n}\n\n/* a */\na,\na:hover {\n    color: inherit;\n    text-decoration: none;\n}\n\na[href]:not([href^=\"#\"]) {\n    color: var(--color-modifier);\n}\n\na[href]:hover {\n    text-decoration: underline;\n}\n\n/* blockquote */\nblockquote {\n    padding: 0px;\n    margin: 0px;\n    border: 0px solid var(--color-border);\n    border-left-width: 3px;\n    padding-left: var(--length-padding);\n    color: var(--color-light);\n}\n\n/* button */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"],\n.button {\n    font: inherit;\n    color: var(--color-text);\n    border-radius: var(--length-padding-span);\n    padding: var(--length-space) var(--length-padding);\n    background-color: var(--color-slice);\n    border: none;\n    outline: none;\n    text-align: center;\n    cursor: pointer;\n    display: inline-block;\n}\n\nbutton:hover,\ninput[type=\"button\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"submit\"]:hover,\n.button:hover,\nbutton.pushing,\ninput[type=\"button\"].pushing,\ninput[type=\"reset\"].pushing,\ninput[type=\"submit\"].pushing,\n.button.pushing {\n    background-color: var(--color-selection);\n}\n\n/* code */\ncode,\npre,\nsamp {\n    white-space: pre-wrap;\n    tab-size: 4;\n    font-family: var(--font-mono);\n}\n\ncode {\n    font-size: var(--length-font-span);\n    padding: 0 var(--length-padding-span);\n    border-radius: var(--length-padding-span);\n    background-color: var(--color-span);\n}\n\npre code {\n    font: inherit;\n    padding: 0;\n    border-radius: 0;\n    background-color: transparent;\n}\n\n/* details */\nsummary {\n    outline: none;\n}\n\n/* fieldset */\nfieldset {\n    margin: 0;\n    padding: var(--length-padding);\n    border: 1px solid var(--color-border);\n}\n\nlegend {\n    padding: var(--length-padding-span);\n}\n\n/* figure */\nfigure {\n    text-align: center;\n    margin: var(--length-space) 0;\n}\n\nfigcaption {\n    margin: var(--length-space) 0;\n}\n\n/* h */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    margin: var(--length-gap) 0;\n    font: inherit;\n}\n\nh1,\nh2 {\n    padding-bottom: var(--length-padding-circle);\n    border-bottom: 1px solid var(--color-border);\n}\n\nh1 {\n    font-size: var(--length-font-title);\n}\n\nh2 {\n    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);\n}\n\nh3 {\n    font-size: calc((var(--length-font-title) + var(--length-font-heading)) / 2);\n}\n\nh4 {\n    font-size: var(--length-font-heading);\n}\n\nh5 {\n    font-size: calc((1em + var(--length-font-heading)) / 2);\n}\n\nh6 {\n    font-size: 1em;\n}\n\n/* hr */\nhr {\n    height: 3px;\n    margin: var(--length-gap) 0;\n    background-color: var(--color-border);\n    border: 0;\n}\n\nhr::after {\n    content: \"\";\n    display: flow-root;\n    clear: both;\n}\n\n/* img */\nimg {\n    max-width: 100%;\n}\n\n/* input */\ninput,\nselect,\ntextarea {\n    font: inherit;\n    color: var(--color-text);\n    padding: 0 var(--length-padding-circle);\n    margin: 0;\n    background-color: transparent;\n    border: 1px solid var(--color-border);\n    outline: none;\n    border-radius: var(--length-padding-span);\n    box-sizing: content-box;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    border-color: var(--color-variable);\n}\n\nselect {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=number],\ninput[type=date] {\n    appearance: textfield;\n    -webkit-appearance: textfield;\n    -moz-appearance: textfield;\n}\n\ninput[type=date] {\n    height: auto;\n    width: auto;\n    vertical-align: middle;\n    height: calc(var(--number-ratio-line) * 1em);\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button,\ninput[type=date]::-webkit-calendar-picker-indicator,\ninput[type=date]::-webkit-clear-button { \n    opacity: 0;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n    display: none;\n}\n\noption {\n    background-color: var(--color-bg);\n}\n\ntextarea {\n    resize: none;\n    height: calc(var(--number-ratio-line) * 5em);\n}\n\n/* kbd */\nkbd {\n    display: inline-block;\n    padding: var(--length-padding-circle);\n    font-size: var(--length-font-circle);\n    line-height: 1;\n    border: 1px solid var(--color-border);\n    border-radius: var(--length-padding-span);\n    box-shadow: inset 0 -1px 0 var(--color-border);\n    font-family: var(--font-mono);\n}\n\n/* l */\nol {\n    list-style: decimal\n}\n\nul {\n    list-style: disc\n}\n\nol ol,\nul ol {\n    list-style-type: lower-roman\n}\n\nol ol ol,\nol ul ol,\nul ol ol,\nul ul ol {\n    list-style-type: lower-alpha\n}\n\nol,\nul {\n    margin: var(--length-gap) 0;\n    padding-left: var(--length-tab);\n}\n\nli {\n    margin: var(--length-gap) 0;\n}\n\ndl {\n    margin: var(--length-gap) 0;\n}\n\ndd {\n    margin: var(--length-gap) 0;\n    margin-left: var(--length-tab);\n}\n\ndt {\n    font-weight: bold;\n}\n\n/* p */\np {\n    margin: var(--length-gap) 0;\n}\n\n/* pre */\npre {\n    display: table;\n    width: 100%;\n    box-sizing: border-box;\n    margin: var(--length-gap) 0;\n    font-size: var(--length-font-span);\n    padding: var(--length-padding);\n    border-radius: var(--length-padding);\n    background-color: var(--color-pre);\n}\n\n/* table */\ntable {\n    border-collapse: collapse;\n    table-layout: fixed;\n    color: inherit;\n    font: inherit;\n}\n\ntd,\nth {\n    padding: var(--length-gap);\n    border: 1px solid var(--color-border);\n}\n\nth {\n    font-weight: normal;\n    text-align: center;\n}\n\ntr:nth-child(even) {\n    background-color: var(--color-pre);\n}\n\ntable>caption {\n    margin: var(--length-space) 0;\n}";
export declare const fresh = "/* checkbox */\n.checkbox {\n    display: inline-block;\n    min-width: 1em;\n    color: var(--color-light);\n    cursor: pointer;\n    padding: var(--length-padding-span);\n    border-radius: var(--length-padding-span);\n    line-height: 1;\n    text-align: center;\n}\n\n.checkbox.left {\n    text-align: left;\n}\n\n.checkbox.checked {\n    color: var(--color-variable);\n}\n\n.checkbox:hover,\n.checkbox.checking {\n    background-color: var(--color-slice);\n}\n\n.button.show-icon:not(:empty)::before,\n.checkbox.show-icon:not(:empty)::before,\n.button.show-icon.show-name::before,\n.checkbox.show-icon.show-name::before {\n    padding-right: var(--length-space);\n}\n\n.button[data-name].show-name::after,\n.checkbox[data-name].show-name::after {\n    content: attr(data-name);\n    text-transform: capitalize;\n}\n\n/* form */\n.form>:not(:first-child) {\n    margin-top: var(--length-gap);\n}\n\n.form,\n.form-line {\n    display: flex;\n    flex-direction: column;\n}\n\n.form>*,\n.form-line>* {\n    flex-shrink: 0;\n}\n\n.form-line[data-name]::before {\n    display: block;\n    content: attr(data-name);\n    color: var(--color-light);\n    font-size: var(--length-font-log);\n    text-transform: capitalize;\n}\n\n/* number bar */\n.number-bar {\n    display: flex;\n    align-items: center;\n    gap: var(--length-space);\n}\n\n.number-bar>.track {\n    flex-grow: 1;\n}\n\n.number-bar>.track>.bar {\n    height: 2px;\n    margin: .5em 0;\n    border-radius: 1px;\n}\n\n.number-bar>.value {\n    color: var(--color-light);\n    font-size: var(--length-font-log);\n}\n\n.number-bar[data-name]:before {\n    content: attr(data-name);\n    color: var(--color-light);\n    font-size: var(--length-font-log);\n    text-transform: capitalize;\n}\n\n/* hide */\n.hide {\n    display: none !important;\n}";
export declare const all: string;
