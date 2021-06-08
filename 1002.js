var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

const n = 3.14159;
var raio = parseFloat(valores.shift());
var area = n * raio ** 2

console.log(`A=${area.toFixed(4)}`)