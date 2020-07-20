let operacao = document.getElementById('calculo');
//console.log(operacao);
let numero1 = document.getElementById('numero1');
//console.log(+numero1);
let numero2 = document.getElementById('numero2');
//console.log(typeof numero2);
const resultado = document.getElementById('resultado').value;
//console.log(typeof resultado);

function somaValores(numero1, numero2) {
  const resultadoSoma = parseInt(numero1) + parseInt(numero2);
  document.getElementById('resultado').value = resultadoSoma;
}
function subtrairValores(numero1, numero2) {
  const resultadoSubtracao = parseInt(numero1) - parseInt(numero2);
  document.getElementById('resultado').value = resultadoSubtracao;
}
function multiplicarValores(numero1, numero2) {
  const resultadoMultiplicacao = parseInt(numero1) * parseInt(numero2);
  document.getElementById('resultado').value = resultadoMultiplicacao;
}
function divisaoValores(numero1, numero2) {
  const resultadoDivisao = parseInt(numero1) / parseInt(numero2);
  document.getElementById('resultado').value = resultadoDivisao;
}

function atualizarResultadoCalculo(operacao) {
  numero1 = document.getElementById('numero1').value;
  numero2 = document.getElementById('numero2').value;
  //console.log(numero1);
  //console.log(operacao);
  printarResultado(operacao, numero1, numero2);
  //const valoresDigitados = document.querySelectorAll('.form-control');
  //console.log(valoresDigitados);
}
function atualizarNumero1Calculo(numero1) {
  numero1 = document.getElementById('numero1').value;
  numero2 = document.getElementById('numero2').value;
  //console.log(numero1);
  //console.log(operacao);
  printarResultado(operacao, numero1, numero2);
  //const valoresDigitados = document.querySelectorAll('.form-control');
  //console.log(valoresDigitados);
}

function atualizarNumero2Calculo(numero1) {
  numero1 = document.getElementById('numero1').value;
  numero2 = document.getElementById('numero2').value;
  //console.log(numero1);
  //console.log(operacao);
  printarResultado(operacao, numero1, numero2);
  //const valoresDigitados = document.querySelectorAll('.form-control');
  //console.log(valoresDigitados);
}

operacao.addEventListener('change', (e) => {
  operacao = e.target.value;
  //console.log(numero1);
  atualizarResultadoCalculo(operacao);
});

numero1.addEventListener('input', (e) => {
  numero1 = +e.target.value;
  //console.log(numero1);
  atualizarNumero1Calculo(numero1);
});

numero2.addEventListener('input', (e) => {
  numero2 = +e.target.value;
  //console.log(numero2);
  atualizarNumero2Calculo(numero2);
});

function printarResultado(operacao, numero1, numero2) {
  switch (operacao) {
    case 'Soma':
      somaValores(numero1, numero2);
      break;

    case 'Subtração':
      subtrairValores(numero1, numero2);
      break;

    case 'Multiplicação':
      multiplicarValores(numero1, numero2);
      break;

    case 'Divisão':
      divisaoValores(numero1, numero2);
      break;
  }
}

window.onload = function () {
  document.getElementById('calcular').onclick = function () {
    const operacao = document.getElementById('calculo').value;
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    //console.log(numero1);
    //console.log(operacao);
    printarResultado(operacao, numero1, numero2);
    event.preventDefault();
    document.getElementById('reiniciar').onclick = function () {};
  };
};
