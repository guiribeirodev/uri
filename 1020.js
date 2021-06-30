var input = require('fs').readFileSync('stdin', 'utf8');

var valor = parseInt(input);

var ano = parseInt(valor / 365);
var mes = parseInt((valor % 365) / 30);
var dia = (valor % 365) % 30;


console.log(`${ano} ano(s)\n${mes} mes(es)\n${dia} dia(s)`);
