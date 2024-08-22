import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
export class Skeleton {
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
    static get is() { return "rf-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./skeleton.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["skeleton.css"]
        };
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=skeleton.js.map
