var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C, D] = input.split(' ').map(item => Number(item));

var x = 0;

if (B > C && D > A) {
  if (C + D > A + B) {
    if ((C, D > 0 && A % 2 === 0)) {
      x = 1;
    }
  }
}

x == 1 ? console.log('Valores aceitos') : console.log('Valores nao aceitos');
