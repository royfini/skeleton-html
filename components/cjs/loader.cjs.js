'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0b14bdea.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-countries_2.cjs",[[1,"rf-countries",{"data":[32],"loading":[32]}],[1,"rf-skeleton"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map