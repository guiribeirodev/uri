var input = require('fs').readFileSync('stdin', 'utf8');

var valor = parseInt(input);

const tempos = [3600, 60, 1];
const resultado = [];

for (let tempo of tempos){
    resultado.push(parseInt(valor / tempo));
    valor = valor % tempo;
}

console.log(resultado.join(":"));