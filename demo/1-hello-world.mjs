import { KeyValueCache } from '../dist/mjs/index.js';
const cache = new KeyValueCache();

cache.set('key', 'value');
console.log(cache.get('key')); // This will print "value"