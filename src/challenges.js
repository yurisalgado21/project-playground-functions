// Desafio 1 - Crie a função compareTrue
function compareTrue(parametro1, parametro2) {
  let result;
  if (parametro1 === true && parametro2 === true) {
    result = true;
  } else if (parametro1 === false && parametro2 === true) {
    result = false;
  } else {
    result = false;
  }
  return result;
}
// Desafio 2 - Crie a função splitSentence
function splitSentence(frase) {
  let retornoArray = [];
  let fraseSplitada = frase.split(' ');
  for (let palavra of fraseSplitada) {
    retornoArray.push(palavra);
  }
  return retornoArray;
}
// Desafio 3 - Crie a função concatName
function concatName(array) {
  let fraseFinal = array[array.length - 1];
  fraseFinal += ', ';
  fraseFinal += array[0];
  return fraseFinal;
}
// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  let pontosEmpates = ties * 1;
  let pontosFinais = pontosVitorias + pontosEmpates;
  return pontosFinais;
}
// Desafio 5 - Crie a função highestCount
function highestCount(arrayNumeros) {
  let arrayOrdenado = arrayNumeros.sort();
  let maiorValor = arrayNumeros[0];
  let quantidadeMaiorValor = 0;
  for (let index = 1; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maiorValor) maiorValor = arrayNumeros[index];
  }
  for (let indice = 0; indice < arrayOrdenado.length; indice += 1) {
    if (arrayOrdenado[indice] === maiorValor) quantidadeMaiorValor += 1;
  }
  return quantidadeMaiorValor;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  let areaTotal = (base * height) / 2;
  return areaTotal;
}

function calcRectangleArea(base, height) {
  let areaTotal = (base * height);
  return areaTotal;
}

function calcAllAreas(base, height, form) {
  let result;
  if (form === 'triângulo') {
    result = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    result = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    result = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return result;
}
// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
