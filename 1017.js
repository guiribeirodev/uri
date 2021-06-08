var input = require('fs').readFileSync('stdin', 'utf8');

var [horas, velocidade] = input.split('\n').map(item => Number(item));

const gastoKM = 12;
var distancia = horas * velocidade;
var litros = distancia / gastoKM;

console.log(litros.toFixed(3));