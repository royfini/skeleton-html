import { p as proxyCustomElement, H } from './p-33aadf95.js';
import { d as defineCustomElement$2, t as tailwind, h } from './p-5e504b77.js';

const countriesCss = "";
const RfCountriesStyle0 = countriesCss;

const Countries = /*@__PURE__*/ proxyCustomElement(class Countries extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.data = [];
        this.loading = true;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
        this.getData();
    }
    componentWillLoad() {
        //this.getData();
    }
    getData() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => {
            const array = json;
            this.data = array.map(e => ({
                name: e.name.common,
                img: e.flags.png,
                capital: e.capital,
            }));
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        });
    }
    render() {
        console.log(this.loading);
        return (h("div", { key: 'd607b86faef3c1a3a1245e83c06cfd425c7330ad' }, this.loading ? (h("rf-skeleton", null)) : (h("div", { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5" }, this.data.map(c => {
            return (h("div", { class: "rounded-md border-2 border-gray-700 bg-gray-300 w-60 h-65 mx-auto my-5 p-5" }, h("img", { src: c.img, class: "w-60 h-36" }), h("div", { class: "mt-5 h-30" }, h("p", { class: "font-bold text-xl font-mono" }, c.name), h("p", { class: "font-semibold" }, c.capital))));
        })))));
    }
    get element() { return this; }
    static get style() { return RfCountriesStyle0; }
}, [1, "rf-countries", {
        "data": [32],
        "loading": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-countries", "rf-skeleton"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-countries":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Countries);
            }
            break;
        case "rf-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const RfCountries = Countries;
const defineCustomElement = defineCustomElement$1;

export { RfCountries, defineCustomElement };

//# sourceMappingURL=rf-countries.js.map