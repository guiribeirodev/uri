var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var nome = valores.shift();
var salarioFixo = parseFloat(valores.shift());
var bonus = parseFloat(valores.shift());
var salarioTotal = salarioFixo + bonus * 0.15;

console.log("TOTAL = R$ " + salarioTotal.toFixed(2));