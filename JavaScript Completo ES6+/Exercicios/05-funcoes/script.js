// Crie uma função para verificar se um valor é Truthy
function isTruthy(teste) {
  if (!!teste) {
    console.log('É verdadeiro')
  } else {
    console.log('É falso')
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado1, lado2, lado3, lado4) {
  console.log(lado1 +  lado2 + lado3 + lado4)
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeESobrenome(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`)
}

// Crie uma função que verifica se um número é par

function parOuImpar(numero) {
  var teste = numero % 2
  if (teste) {
    console.log(`É Impar ${teste}`)
  } else {
    console.log('É par')
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificaTipoDeDado(dado) {
  console.log(typeof(dado))
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

window.addEventListener('scroll', function() {
  console.log('Samuel Vicentini')
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);