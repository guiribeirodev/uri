var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ');

var A = valores.shift();
var B = valores.shift();
var C = valores.shift();
var areaTrianguloRetangulo = A * C / 2;
var areaCirculo = 3.14159 * C ** 2;
var areaTrapezio = (A * C / 2) + (B * C / 2);
var areaQuadrado = B * B;
var areaRetangulo = A * B;
console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(3)}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(3)}\nRETANGULO: ${areaRetangulo.toFixed(3)}`);