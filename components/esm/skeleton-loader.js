import { p as promiseResolve, b as bootstrapLazy } from './index-a858fb97.js';
export { s as setNonce } from './index-a858fb97.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["rf-countries_2",[[1,"rf-countries",{"data":[32],"loading":[32]}],[1,"rf-skeleton"]]]], options);
});

//# sourceMappingURL=skeleton-loader.js.map