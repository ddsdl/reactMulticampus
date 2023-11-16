console.log('----- index start -----');

console.log(__dirname);
console.log(__filename);

require('./m01')

console.log('----- index end -----');

console.log(require.cache);
