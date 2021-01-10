// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const curso = document.querySelectorAll('.curso')
const arrayCurso = Array.from(curso)

const objCurso = arrayCurso.map(item => {
  return {
    titulo: item.querySelector('h1').innerHTML,
    descricao: item.querySelector('p').innerHTML,
    aulas: item.querySelector('.aulas').innerHTML,
    horas: item.querySelector('.horas').innerHTML,
  }
})

console.log(objCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
numeros.forEach(element => {
  if(element > 100) {
    console.log(element);
  }
});

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const ifBaixo = instrumentos.some(item => {
  return item === 'Baixo'
})


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const getNumbers = compras.map(item => {
  item = item.preco.toLocaleUpperCase().replace('R$', '').trim().replace(',','.');
  return +item
})

let total = 0
const somaTotal = getNumbers.reduce((acumulador, item) => {
  return total = acumulador + item
})