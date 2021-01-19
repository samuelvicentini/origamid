// Crie uma função que verifique
// corretamente o tipo de dado

function getData(date) {
  return Object.prototype.toString.call(date)
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: 4,
}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
    writable: false
  }
})

quadrado.lados = 7
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.defineProperties(configuracao, {
  width: {
    writable: false
  },
  height: {
    writable: false,
  },
  background: {
    writable: false
  }
})

configuracao.width = 700;
configuracao.height = 700;
configuracao.background = '#fff'
console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyDescriptors(Array))
console.log(Object.getOwnPropertyDescriptors(String))
