var input = require('fs').readFileSync('stdin', 'utf8');

var [X, Y] = input.split('\n').map(item => Number(item));

var consumo = X / Y;
console.log(consumo.toFixed(3) + " km/l");