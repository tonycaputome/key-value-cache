import { KeyValueCache } from "../dist/index.js";
var kvCache = new KeyValueCache();

const longRunningOperation = (iterations = 500000000) => {
  for (let i = 0; i < iterations; i++) {}
  return true;
};

let perfTime = performance.now();
longRunningOperation();
longRunningOperation();
longRunningOperation();
console.log("Pre-cache: ", performance.now() - perfTime);
perfTime = performance.now();
kvCache.exec(() => {
  return longRunningOperation();
}, ["longRunningOperation"]);
kvCache.exec(() => {
  return longRunningOperation();
}, ["longRunningOperation"]);
kvCache.exec(() => {
  return longRunningOperation();
}, ["longRunningOperation"]);
console.log("Post-cache: ", performance.now() - perfTime);
perfTime = performance.now();
kvCache.invalidateByKey(/long.+/);
kvCache.exec(() => {
  return longRunningOperation();
}, ["longRunningOperation"]);
kvCache.invalidateByKey(/long.+/);
kvCache.exec(() => {
  return longRunningOperation();
}, ["longRunningOperation"]);
kvCache.exec(() => {
  return longRunningOperation();
}, ["longRunningOperation"]);
console.log(
  "Post-cache with double invalidation: ",
  performance.now() - perfTime
);
