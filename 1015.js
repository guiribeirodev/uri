var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var [X1, Y1] = valores[0].split(' ');
var [X2, Y2] = valores[1].split(' ');

var distancia = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);

console.log(distancia.toFixed(4));