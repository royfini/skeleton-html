import { p as proxyCustomElement, H } from './p-33aadf95.js';

/*
 Stencil Client Platform v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};

const outputCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type='button']),input:where([type='reset']),input:where([type='submit']){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.m-5{margin:1.25rem}.m-auto{margin:auto}.my-auto{margin-top:auto;margin-bottom:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mt-20{margin-top:5rem}.mt-10{margin-top:2.5rem}.mt-auto{margin-top:auto}.mt-5{margin-top:1.25rem}.mb-2{margin-bottom:0.5rem}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.h-32{height:8rem}.h-72{height:18rem}.h-24{height:6rem}.h-0\\.5{height:0.125rem}.h-40{height:10rem}.h-36{height:9rem}.h-60{height:15rem}.h-5{height:1.25rem}.h-4{height:1rem}.h-6{height:1.5rem}.w-24{width:6rem}.w-32{width:8rem}.w-52{width:13rem}.w-60{width:15rem}.w-3\\/4{width:75%}.w-max{width:-moz-max-content;width:max-content}.w-40{width:10rem}.w-10{width:2.5rem}.w-20{width:5rem}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr))}.grid-cols-8{grid-template-columns:repeat(8, minmax(0, 1fr))}.grid-cols-6{grid-template-columns:repeat(6, minmax(0, 1fr))}.grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.gap-5{gap:1.25rem}.rounded-md{border-radius:0.375rem}.border-2{border-width:2px}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity))}.p-5{padding:1.25rem}.p-4{padding:1rem}.font-serif{font-family:ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif}.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (min-width: 768px){.md\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media (min-width: 1024px){.lg\\:grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}}@media (min-width: 1280px){.xl\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.xl\\:grid-cols-5{grid-template-columns:repeat(5, minmax(0, 1fr))}}";
const tailwind = outputCss;

const skeletonCss = ".skeleton{opacity:.7;animation:skeleton-loading 1s linear infinite alternate}@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 70%)}100%{background-color:hsl(200, 20%, 95%)}}";
const RfSkeletonStyle0 = skeletonCss;

const Skeleton = /*@__PURE__*/ proxyCustomElement(class Skeleton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    render() {
        return (h("div", { key: '4698213e8c3b192150e0b1970bdf3836fa722d59', class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5" }, [...Array(15)].map(_ => {
            return (h("div", { class: "rounded-md border-2 border-gray-700 bg-gray-300 w-60 h-65 mx-auto my-5 p-5" }, h("img", { class: "w-60 h-36 skeleton" }), h("div", { class: "mt-5 h-30" }, h("p", { class: "font-bold text-xl font-mono skeleton w-40 h-6 mb-2" }), h("p", { class: "font-semibold skeleton w-24 h-4" }))));
        })));
    }
    get element() { return this; }
    static get style() { return RfSkeletonStyle0; }
}, [1, "rf-skeleton"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-skeleton"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-skeleton":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Skeleton);
            }
            break;
    } });
}
defineCustomElement();

export { Skeleton as S, defineCustomElement as d, h, tailwind as t };

//# sourceMappingURL=p-5e504b77.js.map