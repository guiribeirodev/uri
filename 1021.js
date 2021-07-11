var input = require('fs').readFileSync('stdin', 'utf8');

var valor = input;

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

function decomporNotas() {
  console.log('NOTAS:');
  for (let nota of notas) {
    qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`);
    valor = (Math.round(valor * 100) / 100) % nota;
  }
}

function decomporMoedas() {
  console.log('MOEDAS:');
  for (let moeda of moedas) {
    qtdMoedas = parseInt(valor / moeda);
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = valor % moeda;
    var arredondar = Math.round(valor * 100);
    var resultado = Math.ceil(arredondar) / 100;
    valor = resultado;
  }
}

decomporNotas();
decomporMoedas();
