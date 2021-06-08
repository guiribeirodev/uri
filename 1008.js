var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var numero = parseInt(valores.shift());
var horasTrabalhadas = parseInt(valores.shift());
var valor = parseFloat(valores.shift());
var salario = horasTrabalhadas * valor;

console.log(`NUMBER = ${numero}\nSALARY = U$ ${salario.toFixed(2)}`);
