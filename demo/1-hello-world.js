const { KeyValueCache } = require('../dist/cjs/index');
const cache = new KeyValueCache();

cache.set('key', 'value');
console.log(cache.entries);
console.log(cache.get('key')); // This will print "value"