import { b as bootstrapLazy } from './index-a858fb97.js';
export { s as setNonce } from './index-a858fb97.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-countries_2",[[1,"rf-countries",{"data":[32],"loading":[32]}],[1,"rf-skeleton"]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map