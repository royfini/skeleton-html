'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0b14bdea.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('skeleton-loader.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-countries_2.cjs",[[1,"rf-countries",{"data":[32],"loading":[32]}],[1,"rf-skeleton"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=skeleton-loader.cjs.js.map