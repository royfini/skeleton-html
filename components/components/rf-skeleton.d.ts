import type { Components, JSX } from "../types/components";

interface RfSkeleton extends Components.RfSkeleton, HTMLElement {}
export const RfSkeleton: {
    prototype: RfSkeleton;
    new (): RfSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
