var input = require('fs').readFileSync('stdin', 'utf8');

var valor = parseInt(input);

console.log(valor);

const notas = [100, 50, 20, 10, 5, 2, 1];

for (let nota of notas) {
    qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}