(()=>{"use strict";var e,t={9118:(e,t,s)=>{var a=s(5893),o=s(3935),r=s(7294);class i{constructor(e){e&&this.parse(e)}parse(e){Array.from(e.children).forEach((e=>{this[e.tagName]=e.textContent}))}static basedOn(e){const t=new this;return Object.entries(e).forEach((([e,s])=>{t[e]=s})),t}toString(){return`<author>${Object.entries(this).reduce(((e,[t,s])=>`${e}${void 0!==s?`\n    <${t}>${s}</${t}>`:""}`),"")}\n  </author>`}}class n{constructor(e){this.title="Mail Filter",this.id=`GMF_${Math.floor(Math.random()*Date.now()).toString(36)}`,e&&this.parse(e)}get updated(){return((e=new Date)=>`${e.getUTCFullYear()}-${(e.getUTCMonth()+1).toString().padStart(2,"0")}-${e.getUTCDate().toString().padStart(2,"0")}T${e.getUTCHours().toString().padStart(2,"0")}:${e.getUTCMinutes().toString().padStart(2,"0")}:${e.getUTCSeconds().toString().padStart(2,"0")}Z`)()}parse(e){this.id=e.querySelector("id").textContent,Array.from(e.children).filter((({tagName:e})=>/^apps:property/i.test(e))).forEach((({attributes:e})=>{const t=e.item(0).value,s=e.item(1).value;this[t]=/^should/.test(t)?/true/.test(s):s}))}static basedOn(e){const t=new this;return Object.entries(e).forEach((([e,s])=>{t[e]=s})),t}toString(){return`<entry>\n    <category term='filter'></category>\n    <title>${this.title}</title>\n    <id>${this.id}</id>\n    <updated></updated>\n    <content></content>${Object.entries(this).reduce(((e,[t,s])=>`${e}${void 0!==s?`\n    <apps:property name='${t}' value='${s}' />`:""}`),"")}\n  </entry>`}}class l{constructor(e){this.title="Mail Filters",e&&this.parse(e)}parse(e){this.author=new i(e.querySelector("author"));const t=Array.from(e.querySelectorAll("entry")).map((e=>new n(e)));this.filters=t.reduce(((e,t)=>({...e,[t.id]:t})),{})}static basedOn(e){const t=new this;return Object.entries(e).forEach((([e,s])=>{/author/.test(e)?t.author=i.basedOn(s):/filters/.test(e)?t.filters=Object.entries(s).reduce(((e,[t,s])=>({...e,[t]:n.basedOn(s)})),{}):t[e]=s})),t}toString(){return`<?xml version='1.0' encoding='UTF-8'?>\n<feed xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>\n  <title>${this.title}</title>\n  <id></id>\n  <updated></updated>\n  ${this.author.toString()}\n  ${Object.values(this.filters).map((e=>e.toString())).join("\n  ")}\n</feed>`}}var d=s(7557),c=s.n(d);const h=new DOMParser,p={fromString(e,{xml:t}){var s=h.parseFromString(t,"application/xml");return new l(s)},updateFilters(e,{remove:t,add:s}){let a=c()({...e.filters},t.map((({id:e})=>e)));return s.forEach((e=>{a[e.id]=e})),l.basedOn({...e,filters:a})}},m=(e,t)=>({type:"updateFilters",add:e,remove:t}),g=e=>(t,s)=>{const a=e[s.type];return a?a(t,s):t},u=new l,v=r.createContext({state:u,dispatch:()=>{}}),b=({children:e})=>{const[t,s]=r.useReducer(g(p),u);return(0,a.jsx)(v.Provider,Object.assign({value:{state:t,dispatch:s}},{children:e}),void 0)};b.displayName="FeedProvider";var x=s(5578),y=s.n(x);const f={append:(e,{selected:t})=>y()([...e,...t],"id"),remove:(e,{ids:t})=>e.filter((({id:e})=>!t.includes(e))),reset:(e,t)=>[]},j=e=>({type:"append",selected:e}),w=e=>({type:"remove",ids:e}),k=()=>{const{dispatch:e}=r.useContext(v);return e},N=()=>{const{state:{filters:e={}}={}}=r.useContext(v);return Object.values(e)},O=[],C=r.createContext({state:O,dispatch:()=>{}}),A=({children:e})=>{const t=(()=>{const{state:{filters:e={}}={}}=r.useContext(v);return e})(),[s,o]=r.useReducer(g(f),O),i=r.useCallback((({selected:e,...s})=>{o({...s,selected:e?e.map((e=>t[e])):void 0})}),[o,t]);return(0,a.jsx)(C.Provider,Object.assign({value:{state:s,dispatch:i}},{children:e}),void 0)};A.displayName="SelectedFiltersProvider";var S=s(9163);const I=({condition:e,children:t})=>{const[s,o]=(e=>[e.find((e=>"Otherwise"===e?.props?.__type))||null,e.filter((e=>"Otherwise"!==e?.props?.__type))])(r.Children.toArray(t));return e?(0,a.jsx)(a.Fragment,{children:o},void 0):s};I.displayName="If";const M=({of:e,body:t})=>{const s=[];let o=0;for(let a of e)s.push(t(a,o++));return(0,a.jsx)(a.Fragment,{children:s},void 0)};M.displayName="For";const T=({children:e})=>(0,a.jsx)(a.Fragment,{children:e},void 0);T.displayName="Otherwise",T.defaultProps={__type:"Otherwise"};const F=S.ZP.button.withConfig({displayName:"Button",componentId:"-rs5orp"})`
  font-family: Abel;
  font-weight: bold;
  background: transparent;
  border: none;
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
  color: white;

  &:not([disabled]).primary,
  &:not([disabled]).primary:hover {
    color: var(--btn-fg);
    background: var(--btn-bg);
  }

  &:not([disabled]):not(.primary):not(.danger):hover {
    font-weight: bold;
    background: hsla(0, 50%, 100%, 0.2);
    color: cyan;
  }

  &[disabled] {
    background: #333333;
  }
`,P=S.ZP.ul.withConfig({displayName:"List",componentId:"-14n7zf5"})`
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;

  & & {
    margin-left: 1rem;
  }
`;var Z=s(6264);const $=(e,t)=>e.toLowerCase().localeCompare(t.toLowerCase()),E=e=>(0,Z.decamelize)(e,{separator:" "}),L="\ntext-shadow:\n  calc(var(--stroke-width, 1px) * 1) calc(var(--stroke-width, 1px) * 0) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0.9239) calc(var(--stroke-width, 1px) * 0.3827) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0.7071) calc(var(--stroke-width, 1px) * 0.7071) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0.3827) calc(var(--stroke-width, 1px) * 0.9239) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0) calc(var(--stroke-width, 1px) * 1) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -0.3827) calc(var(--stroke-width, 1px) * 0.9239) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -0.7071) calc(var(--stroke-width, 1px) * 0.7071) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -0.9239) calc(var(--stroke-width, 1px) * 0.3827) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -1) calc(var(--stroke-width, 1px) * 0) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -0.9239) calc(var(--stroke-width, 1px) * -0.3827) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -0.7071) calc(var(--stroke-width, 1px) * -0.7071) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * -0.3827) calc(var(--stroke-width, 1px) * -0.9239) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0) calc(var(--stroke-width, 1px) * -1) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0.3827) calc(var(--stroke-width, 1px) * -0.9239) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0.7071) calc(var(--stroke-width, 1px) * -0.7071) 0 var(--stroke-color, #000000),\n  calc(var(--stroke-width, 1px) * 0.9239) calc(var(--stroke-width, 1px) * -0.3827) 0 var(--stroke-color, #000000);\n",z=S.ZP.li.withConfig({displayName:"Li",componentId:"-1mbvli4"})`
  position: relative;
  margin: 0;
  display: block;
  border: 1px solid;
  padding: 2px;

  &:not(:first-child) {
    margin-top: 3px;
  }
`,B=S.ZP.span.withConfig({displayName:"Flag",componentId:"-1l4gvow"})`
  display: inline-block;
  padding: 2px 3px;
  border: 1px solid black;
  box-shadow: inset 0 0 2px white;
  background: darkcyan;
  color: var(--highlight);
  ${L}
  text-transform: capitalize;

  &:not(:only-child) {
    &:not(:first-child) {
      margin-left: 0.2em;
    }
  }
`,_=({field:e,value:t})=>t?(0,a.jsx)(B,{children:E(e.replace(/^should/,"").replace(/MarkAs/,""))},void 0):null,R={Container:S.ZP.article`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;

    &:not(:first-child) {
      margin-top: 4px;
    }
  `,Field:S.ZP.aside`
    color: var(--highlight);
    ${L}
    text-transform: capitalize;
  `,Value:S.ZP.main`
  `},U=({field:e,value:t})=>t?(0,a.jsxs)(R.Container,{children:[(0,a.jsx)(R.Field,{children:E(e)},void 0),(0,a.jsx)(R.Value,{children:t},void 0)]},void 0):null,D=S.ZP.div.withConfig({displayName:"Close",componentId:"-wy8so3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1rem;
  line-height: 1rem;
  background-color: transparent;
  border-radius: 50%;
  opacity: 0.2;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.8rem;

  &:hover {
    background-color: red;
    opacity: 1;
  }

  &::before {
    content: 'close';
    font-family: 'Material Icons';
    ${L}
  }
`,W=(0,S.ZP)((({className:e,item:t})=>{const s=k(),{state:o,dispatch:i}=r.useContext(C),n=r.useMemo((()=>o.some((({id:e})=>e===t.id))),[o,t]),l=r.useCallback((e=>{e.stopPropagation(),e.preventDefault(),s((e=>({type:"updateFilters",add:[],remove:e}))([t]))}),[s]),d=r.useCallback((()=>{i((n?w:j)([t.id]))}),[i,t,n]),[c,h]=r.useMemo((()=>Object.entries(t).reduce((([e,t],[s,a])=>((/^should/.test(s)?e:t).push([s,a]),[e,t])),[[],[]])),[t]);return(0,a.jsxs)(z,Object.assign({"data-selected":n},{className:e,onClick:d},{children:[h.reduce(((e,[t,s])=>/(id|title|size)/.test(t)?e:e.concat((0,a.jsx)(U,Object.assign({},{field:t.replace(/^smartLabel/,"cagetgory"),value:s}),t))),[]),(0,a.jsxs)(R.Container,{children:[(0,a.jsx)(R.Field,{},void 0),(0,a.jsx)(R.Value,{children:c.reduce(((e,[t,s])=>/(id|title|size)/.test(t)?e:e.concat((0,a.jsx)(_,Object.assign({},{field:t.replace(/^smartLabel/,"cagetgory"),value:s}),t))),[])},void 0)]},void 0),(0,a.jsx)(D,{onClick:l},void 0)]}),void 0)})).withConfig({displayName:"Filter",componentId:"-gqt3w"})`
  border-color: hsla(0, 50%, 100%, 0.15);
  transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out;

  &:not([data-selected="true"]):hover {
    border-color: hsla(0, 50%, 100%, 1);
  }
  &[data-selected="true"] {
    border-color: var(--highlight);
    background: hsla(60, 50%, 50%, 0.2);
  }
`,H=(0,S.ZP)((({className:e})=>(0,a.jsx)("section",Object.assign({},{className:e},{children:"There are no filters loaded"}),void 0))).withConfig({displayName:"Zero",componentId:"-13arxvx"})`
  display: flex;
  justify-content: center;
  align-items: center;
`,q=({className:e,id:t,style:s})=>{const o=N();return o.length?(0,a.jsx)(P,Object.assign({},{className:e,id:t,style:s},{children:(0,a.jsx)(M,{of:o,body:e=>(0,a.jsx)(W,Object.assign({},{item:e}),e.id)},void 0)}),void 0):(0,a.jsx)(H,Object.assign({},{className:e,id:t,style:s}),void 0)};q.displayName="Ungrouped";const G=q,V=(e,t)=>{const s=new Map,a=t.shift();if(e.forEach(((e,t)=>{const o="function"==typeof a?a(e,t):e[a],r=new Set;(Array.isArray(o)?o:[o]).forEach((e=>{r.add(e)})),r.forEach((t=>{let a=[];s.has(t)&&(a=s.get(t)),a.push(e),s.set(t,a)}))})),!t.length)return s;const o=new Map;for(let[e,a]of s)o.set(e,V(a,[...t]));return o},Y=(e,t)=>V(e,t),J=S.ZP.header.withConfig({displayName:"Heading",componentId:"-feygfk"})`
  color: cyan;
  display: inline-block;
`,K=S.ZP.details.withConfig({displayName:"Detail",componentId:"-1uq0uaa"})`
`,Q=S.ZP.summary.withConfig({displayName:"Summary",componentId:"-3ms5vg"})`
`,X=({title:e,children:t,...s})=>(0,a.jsxs)(K,Object.assign({},s,{children:[(0,a.jsx)(Q,{children:e},void 0),(0,a.jsx)("section",Object.assign({style:{display:"contents"}},{children:t}),void 0)]}),void 0),ee=({className:e,id:t,style:s})=>{const o=N(),i=r.useMemo((()=>Y(o,["label"])),[o]),n=r.useMemo((()=>Array.from(i.keys()).filter((e=>e)).sort($)),[i]);return n.length?(0,a.jsx)(P,Object.assign({},{className:e,id:t,style:s},{children:(0,a.jsx)(M,{of:n,body:e=>{const t=i.get(e);return(0,a.jsx)(z,{children:(0,a.jsx)(X,Object.assign({title:(0,a.jsx)(J,{children:e||"N/A"},void 0)},{children:(0,a.jsx)(P,{children:(0,a.jsx)(M,{of:t,body:e=>(0,a.jsx)(W,Object.assign({},{item:e}),e.id)},void 0)},void 0)}),void 0)},e)}},void 0)}),void 0):(0,a.jsx)(H,Object.assign({},{className:e,id:t,style:s}),void 0)};ee.displayName="ByLabel";const te=ee,se=({className:e,id:t,style:s})=>{const o=N(),i=r.useMemo((()=>Y(o,[e=>Object.entries(e).reduce(((e,[t,s])=>(/^should/i.test(t)&&s&&e.push(t),e)),[])])),[o]),n=r.useMemo((()=>Array.from(i.keys()).sort($)),[i]);return n.length?(0,a.jsx)(P,Object.assign({},{className:e,id:t,style:s},{children:(0,a.jsx)(M,{of:n,body:e=>{const t=i.get(e);return(0,a.jsx)(z,{children:(0,a.jsx)(X,Object.assign({title:(0,a.jsx)(J,{children:e||"N/A"},void 0)},{children:(0,a.jsx)(P,{children:(0,a.jsx)(M,{of:t,body:e=>(0,a.jsx)(W,Object.assign({},{item:e}),e.id)},void 0)},void 0)}),void 0)},e||"n-a")}},void 0)}),void 0):(0,a.jsx)(H,Object.assign({},{className:e,id:t,style:s}),void 0)};se.displayName="ByFlag";const ae=se;var oe;!function(e){e[e.Ungrouped=0]="Ungrouped",e[e.ByLabel=1]="ByLabel",e[e.ByFlag=2]="ByFlag",e[e.BySender=3]="BySender",e[e.ByRecipient=4]="ByRecipient"}(oe||(oe={}));const re={color:"var(--highlight)",bgColor:"hsla(0, 50%, 100%, 0.4)"},ie=(0,S.ZP)((({className:e,id:t,style:s})=>{const[o,i]=r.useState(oe.Ungrouped);return(0,a.jsxs)("section",Object.assign({},{className:`${e} as-grid`,id:t,style:s},{children:[(0,a.jsxs)("div",Object.assign({className:"w12 h1 flex align-between"},{children:[(0,a.jsx)(F,Object.assign({style:o===oe.Ungrouped?re:void 0,onClick:()=>i(oe.Ungrouped)},{children:"Ungrouped"}),void 0),(0,a.jsx)(F,Object.assign({style:o===oe.ByLabel?re:void 0,onClick:()=>i(oe.ByLabel)},{children:"By Folder"}),void 0),(0,a.jsx)(F,Object.assign({style:o===oe.ByFlag?re:void 0,onClick:()=>i(oe.ByFlag)},{children:"By Flag"}),void 0)]}),void 0),(0,a.jsxs)(I,Object.assign({condition:o===oe.Ungrouped},{children:[(0,a.jsx)(G,{className:"w12 h11 scrollable-y"},void 0),(0,a.jsx)(T,{children:(0,a.jsxs)(I,Object.assign({condition:o===oe.ByLabel},{children:[(0,a.jsx)(te,{className:"w12 h11 scrollable-y"},void 0),(0,a.jsx)(T,{children:(0,a.jsx)(I,Object.assign({condition:o===oe.ByFlag},{children:(0,a.jsx)(ae,{className:"w12 h11 scrollable-y"},void 0)}),void 0)},void 0)]}),void 0)},void 0)]}),void 0)]}),void 0)})).withConfig({displayName:"FilterList",componentId:"-18smlgx"})`
  min-width: 240px;
`,ne=S.ZP.input.withConfig({displayName:"Input",componentId:"-653khn"})`
  display: inline-block;
  margin: 0;
  margin-right: 1.2rem;
  padding: 0;
  height: 1rem;
  width: 0;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    border: 1px solid transparent;

    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 1em;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }

  &:before {
    content: '';
  }

  &:after {
    content: 'radio_button_unchecked';
    border-color: transparent;
    color: hsla(0, 50%, 100%, 0.15);
  }
  &:checked:after {
    content: 'task_alt';
    color: cyan;
  }
`,le=S.ZP.span.withConfig({displayName:"Field",componentId:"-17dlmrj"})`
  display: inline-block;
  text-transform: capitalize;
  margin: 4px 0;
`,de=S.ZP.label.withConfig({displayName:"Label",componentId:"-1duembo"})`
  --border-color: transparent;
  display: block;
  border: 1px solid var(--border-color);
  text-transform: capitalize;

  &:hover {
    color: var(--highlight);
  }
  &:nth-child(odd) {
    background-color: #131313;
  }
  &:nth-child(even) {
    background-color: #333333;
  }

  & + & {
    // margin-top: 0.5rem;
  }

  &[data-error="true"] {
    --border-color: red;
  }
`,ce=(0,S.ZP)((({className:e,label:t,onChange:s,checked:o,hasError:r})=>(0,a.jsxs)(de,Object.assign({},{className:e,"data-error":r},{children:[(0,a.jsx)(ne,Object.assign({type:"checkbox"},{onChange:s,checked:o}),void 0),(0,a.jsx)(le,{children:t},void 0)]}),void 0))).withConfig({displayName:"Checkbox",componentId:"-iusr5v"})``,he=S.ZP.textarea.withConfig({displayName:"MultiLine",componentId:"-1ztlz7"})`
  resize: vertical;
  background: hsla(0, 50%, 100%, 0.07);
  width: 100%;
  border: 1px solid var(--border-color);
  font-family: 'Fira Code';
  color: #dddddd;

  &:focus-visible {
    outline: none;
  }
`,pe=S.ZP.input.attrs((e=>({type:"text"}))).withConfig({displayName:"SingleLine",componentId:"-1okah9h"})`
  background: hsla(0, 50%, 100%, 0.07);
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
  font-family: 'Fira Code';
  color: #dddddd;
  padding: 3px 0;

  &:focus-visible {
    outline: none;
  }
`,me=S.ZP.span.withConfig({displayName:"Field",componentId:"-1hzynht"})`
  font-family: Abel;
  text-transform: capitalize;
  align-self: center;

  &::after {
    content: ':';
  }
`,ge=S.ZP.label.withConfig({displayName:"Label",componentId:"-1o4p8u7"})`
  --border-color: transparent;
  display: grid;
  grid-template-columns: 96px 1fr;
  min-height: 28px;

  &:nth-child(even) {
    background-color: #131313;
  }

  & + & {
    margin-top: 0.2rem;
  }

  &:hover span {
    color: var(--highlight);
  }

  &[data-invalid="true"] {
    --border-color: red;
  }
`,ue=(0,S.ZP)((({className:e,name:t,onChange:s,value:o,hasError:r=!1,placeholder:i=t,isSingle:n=!1})=>{const l=n?pe:he;return(0,a.jsxs)(ge,Object.assign({},{className:e,"data-invalid":r},{children:[(0,a.jsx)(me,{children:t},void 0),(0,a.jsx)(l,Object.assign({},{type:"text",placeholder:i,value:o,onChange:s}),void 0)]}),void 0)})).withConfig({displayName:"Text",componentId:"-17c9zft"})``,ve=ue,be=(0,S.ZP)((e=>(0,a.jsx)(F,Object.assign({},e),void 0))).withConfig({displayName:"ButtonWithIcon",componentId:"-1ya9lm4"})`
  font-family: 'Material Icons Sharp';
  font-size: 1.2rem;
  font-weight: 400;
`;var xe=s(4908),ye=s.n(xe);const fe={loadState:(e,{filters:t})=>{const[s,...a]=t;return a.reduce(((e,t)=>(Object.entries(t).forEach((([t,s])=>{e[t]?/boolean/i.test(typeof s)?e[t]||(e[t]=s):e[t]=(e[t]||"").length?ye()([...e[t].split(" OR "),s]).join(" OR "):s:e[t]=s})),e)),{...s})},updateState:(e,{changes:t})=>({...e,...t})},je=e=>({type:"loadState",filters:e}),we=e=>e?.length&&/ OR /i.test(e),ke=e=>(t,{[e]:s})=>t&&s,Ne={label:[we],smartLabelToApply:[we],forwardTo:[we],shouldAlwaysMarkAsImportant:[ke("shouldNeverMarkAsImportant")],shouldNeverMarkAsImportant:[ke("shouldAlwaysMarkAsImportant")],shouldArchive:[ke("shouldTrash")],shouldTrash:[ke("shouldArchive")]},Oe={from:"",to:"",subject:"",doesNotHaveTheWord:"",hasTheWord:"",label:"",smartLabelToApply:"",forwardTo:"",shouldArchive:!1,shouldMarkAsRead:!1,shouldTrash:!1,shouldNeverSpam:!1,shouldAlwaysMarkAsImportant:!1,shouldNeverMarkAsImportant:!1,shouldStar:!1},Ce=n.basedOn(Oe),Ae=["from","to","subject","doesNotHaveTheWord","hasTheWord"],Se=["shouldArchive","shouldMarkAsRead","shouldTrash","shouldNeverSpam","shouldAlwaysMarkAsImportant","shouldNeverMarkAsImportant","shouldStar","label","forwardTo"],Ie=S.ZP.fieldset.withConfig({displayName:"Fieldset",componentId:"-1s0vmxx"})`
  border-color: #333333;

  legend {
    color: var(--highlight);
  }
`,Me=S.ZP.section.withConfig({displayName:"MultipleColumns",componentId:"-gc3yat"})`
  column-count: 2;

  @media(max-width: 960px) {
    column-count: 1;
  }
`,Te=(0,S.ZP)((({className:e})=>{const t=k(),s=(()=>{const{dispatch:e}=r.useContext(C);return e})(),o=(()=>{const{state:e}=r.useContext(C);return e})(),[i,l]=r.useReducer(g(fe),Ce),[d,c]=r.useState({}),h=r.useCallback((e=>({target:t})=>{l({type:"updateState",changes:{[e]:/checkbox/i.test(t.type)?t.checked:t.value}})}),[i]),p=r.useMemo((()=>!Object.keys(d).length&&Ae.some((e=>!!i[e]))&&Se.some((e=>!!i[e]))),[i,d]);return r.useEffect((()=>{l(je([Ce,...o.length?o:[]]))}),[o]),r.useEffect((()=>{c(Object.entries(Ne).reduce(((e,[t,s])=>s.some((e=>e(i[t],i)))?{...e,[t]:!0}:e),{}))}),[i,c]),(0,a.jsxs)("div",Object.assign({},{className:e},{children:[(0,a.jsxs)("section",Object.assign({className:"as-table scrollable-y",style:{gridGap:"0.5rem",background:"hsla(60, 50%, 50%, 0.15)"}},{children:[(0,a.jsx)("section",Object.assign({className:"w6 h2"},{children:(0,a.jsxs)(Ie,{children:[(0,a.jsx)("legend",{children:"Matching Criteria"},void 0),(0,a.jsx)(ve,Object.assign({},{value:i.from,onChange:h("from"),name:E("from")}),void 0),(0,a.jsx)(ve,Object.assign({},{value:i.to,onChange:h("to"),name:E("to")}),void 0),(0,a.jsx)(ve,Object.assign({},{value:i.subject,onChange:h("subject"),name:E("subject")}),void 0),(0,a.jsx)(ve,Object.assign({},{value:i.doesNotHaveTheWord,onChange:h("doesNotHaveTheWord"),name:E("doesNotHaveTheWord(s)")}),void 0),(0,a.jsx)(ve,Object.assign({},{value:i.hasTheWord,onChange:h("hasTheWord"),name:E("hasTheWord(s)")}),void 0)]},void 0)}),void 0),(0,a.jsx)("section",Object.assign({className:"w6"},{children:(0,a.jsxs)(Ie,{children:[(0,a.jsx)("legend",{children:"Send the message..."},void 0),(0,a.jsx)(ve,Object.assign({},{value:i.label,hasError:d.label,onChange:h("label"),name:E("applyLabel"),isSingle:!0}),void 0),(0,a.jsx)(ve,Object.assign({},{value:i.smartLabelToApply,hasError:d.smartLabelToApply,onChange:h("smartLabelToApply"),name:E("category"),isSingle:!0}),void 0),(0,a.jsx)(ve,Object.assign({},{value:i.forwardTo,hasError:d.forwardTo,onChange:h("forwardTo"),name:E("forwardTo"),isSingle:!0}),void 0)]},void 0)}),void 0),(0,a.jsx)("section",Object.assign({className:"w6"},{children:(0,a.jsxs)(Ie,{children:[(0,a.jsx)("legend",{children:"Mark the message..."},void 0),(0,a.jsxs)(Me,{children:[(0,a.jsx)(ce,Object.assign({},{label:E("Important"),onChange:h("shouldAlwaysMarkAsImportant"),checked:i.shouldAlwaysMarkAsImportant,hasError:d.shouldAlwaysMarkAsImportant}),void 0),(0,a.jsx)(ce,Object.assign({},{label:E("NeverImportant"),onChange:h("shouldNeverMarkAsImportant"),checked:i.shouldNeverMarkAsImportant,hasError:d.shouldNeverMarkAsImportant}),void 0),(0,a.jsx)(ce,Object.assign({},{label:E("Never Spam"),onChange:h("shouldNeverSpam"),checked:i.shouldNeverSpam}),void 0),(0,a.jsx)(ce,Object.assign({},{label:E("Read"),onChange:h("shouldMarkAsRead"),checked:i.shouldMarkAsRead}),void 0),(0,a.jsx)(ce,Object.assign({},{label:E("Starred"),onChange:h("shouldStar"),checked:i.shouldStar}),void 0),(0,a.jsx)(ce,Object.assign({},{label:E("Archived"),onChange:h("shouldArchive"),checked:i.shouldArchive,hasError:d.shouldArchive}),void 0),(0,a.jsx)(ce,Object.assign({},{label:E("Trash"),onChange:h("shouldTrash"),checked:i.shouldTrash,hasError:d.shouldTrash}),void 0)]},void 0)]},void 0)}),void 0)]}),void 0),(0,a.jsxs)("section",Object.assign({className:"as-grid one-row align-fill-height"},{children:[(0,a.jsx)(be,Object.assign({className:"primary x4 w2",disabled:!p,title:"Save Filter",onClick:()=>{t(m([i],o||[])),s({type:"reset"})}},{children:"save"}),void 0),(0,a.jsx)(be,Object.assign({className:"primary danger x7 w2",disabled:!o?.length,title:"Delete Source Filter(s)",onClick:()=>{t(m([],o||[])),s({type:"reset"})}},{children:"delete_forever"}),void 0),(0,a.jsx)(be,Object.assign({className:"x10 w2",title:"Reset Form",onClick:()=>{o.length?s({type:"reset"}):l(je([n.basedOn(Oe)]))}},{children:"restart_alt"}),void 0)]}),void 0)]}),void 0)})).withConfig({displayName:"Editor",componentId:"-1y4ac7w"})`
  padding: 1rem;
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 32px;

  @media(max-width: 960px) {
    & > .as-table > .h2 { grid-row: span 1; }
    & > .as-table > .w6 { grid-column: 1 / -1; }
    & button.w2 { grid-column: span 6; }
  }
`,Fe=Te,Pe=S.ZP.section.withConfig({displayName:"Row",componentId:"-10zzxw3"})`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  padding: 0.2rem;
`,Ze=S.ZP.div.withConfig({displayName:"Cell",componentId:"-3fujjj"})`
  font-variant-numeric: oldstyle-nums slashed-zero;

  &:last-child {
    justify-self: self-end;
  };
`,$e=(0,S.ZP)((({className:e,label:t,count:s})=>(0,a.jsxs)(Pe,Object.assign({},{className:e},{children:[(0,a.jsx)(Ze,{children:t},void 0),(0,a.jsx)(Ze,{children:s.toLocaleString()},void 0)]}),void 0))).withConfig({displayName:"Dash",componentId:"-151pm54"})`
  ${e=>e.count?"":"display: none;"}
`,Ee=(0,S.ZP)((({className:e})=>{const t=N(),{pulled:s,changed:o}=r.useMemo((()=>({pulled:t.filter((({id:e})=>!/^GMF_/.test(e))).length,changed:t.filter((({id:e})=>/^GMF_/.test(e))).length})),[t]);return(0,a.jsx)("div",Object.assign({},{className:e},{children:t.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)($e,Object.assign({},{label:"pulled",count:s}),void 0),(0,a.jsx)($e,Object.assign({},{label:"edited",count:o}),void 0)]},void 0):null}),void 0)})).withConfig({displayName:"Dashboard",componentId:"-1agm14x"})``,Le=(0,S.ZP)((({className:e})=>{const t=k(),s=(()=>{const{state:{author:e}={}}=r.useContext(v);return e})();return r.useEffect((()=>{document.body.classList.remove("loading")}),[]),(0,a.jsxs)("section",Object.assign({},{className:e},{children:[(0,a.jsx)("input",{type:"file",onChange:e=>{e.preventDefault();const s=e.target.files[0];var a=new FileReader;a.onload=({target:{result:e}})=>{t((e=>({type:"fromString",xml:e}))(e))},a.readAsText(s)}},void 0),(0,a.jsx)("div",Object.assign({style:{padding:"0 3px"}},{children:(0,a.jsxs)("div",Object.assign({className:"truncate"},{children:["Author: ",s?`${s.name} (${s.email})`:"N/A"]}),void 0)}),void 0)]}),void 0)})).withConfig({displayName:"FileLoader",componentId:"-1tkx1zn"})`
  min-width: 240px;
  display: grid;
  grid-template-rows: calc(16px + 12px) 1fr;
  overflow: hidden;

  input {
    display: inline-block;
    height: 100%;
  }

  > div {
    display: flex;
    align-items: center;
  }

  input::-webkit-file-upload-button {
    font-family: "Abel";
    background: transparent;
    border: none;
    min-width: 6rem;
    padding: 6px;
    cursor: pointer;
    color: white;

    &:hover {
      font-weight: bold;
      background: hsla(0, 50%, 100%, 0.2);
      color: cyan;
    }
  }
  input[type="file" i] {
    display: inline-block;
    color: cyan;
  }
`,ze=(0,S.ZP)((({className:e})=>{const t=(()=>{const{state:e}=r.useContext(v);return e})(),s=r.useCallback((()=>{(e=>{const t=document.createElement("a");t.setAttribute("href",`data:text/json;charset=utf-8,${encodeURIComponent(e.toString())}`),t.setAttribute("download","updated filters.xml"),t.style.display="none",document.body.appendChild(t),t.click(),t.remove()})(t)}),[t]);return(0,a.jsx)("div",Object.assign({},{className:e},{children:(0,a.jsx)(be,Object.assign({},{onClick:s},{children:"file_download"}),void 0)}),void 0)})).withConfig({displayName:"Download",componentId:"-x19em1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 40%;
    height: 40%;
    border-radius: 20% 20% 20% 20% / 40% 40% 40% 40%;
    font-size: 2.4rem;
  }
`,Be=()=>(0,a.jsx)(b,{children:(0,a.jsxs)(A,{children:[(0,a.jsx)(Le,{className:"x1 y1 h2 w4"},void 0),(0,a.jsx)(ie,{className:"x1 y3 h10 w4"},void 0),(0,a.jsx)(Fe,{className:"x5 y3 h7 w8"},void 0),(0,a.jsx)(Ee,{className:"x9 y1 h2 w4"},void 0),(0,a.jsx)("div",{className:"x5 y1 h2 w4"},void 0),(0,a.jsx)("div",Object.assign({className:"x9 y10 h3 w4"},{children:(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"smartLabelToApply"},void 0)," ","=>"," Category"]},void 0)}),void 0),(0,a.jsx)(ze,{className:"x5 y10 h3 w4"},void 0)]},void 0)},void 0);(async()=>{document.body.parentElement.setAttribute("data-app",`(1.1.0) ${document.title}`),document.title=document.body.parentElement.getAttribute("data-app");const e=document.createElement("section");e.id="gmail-filter",document.body.appendChild(e);const t=(0,a.jsx)(Be,{},void 0);(0,o.render)(t,e)})()}},s={};function a(e){var o=s[e];if(void 0!==o)return o.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=t,e=[],a.O=(t,s,o,r)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){for(var[s,o,r]=e[c],n=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](s[l])))?s.splice(l--,1):(n=!1,r<i&&(i=r));if(n){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={296:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var o,r,[i,n,l]=s,d=0;if(i.some((t=>0!==e[t]))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(l)var c=l(a)}for(t&&t(s);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[i[d]]=0;return a.O(c)},s=self.webpackChunkgmail_filters=self.webpackChunkgmail_filters||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var o=a.O(void 0,[216],(()=>a(9118)));o=a.O(o)})();