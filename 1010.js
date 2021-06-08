var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var item1 = valores.shift().split(" ");
var idItem1 = item1.shift();
var qtdItem1 = parseInt(item1.shift());
var valorItem1 = parseFloat(item1.shift());

var item2 = valores.shift().split(" ");
var idItem2 = item2.shift();
var qtdItem2 = parseInt(item2.shift());
var valorItem2 = parseFloat(item2.shift());

var conta = (qtdItem1 * valorItem1) + (qtdItem2 * valorItem2);

console.log("VALOR A PAGAR: R$ " + conta.toFixed(2));