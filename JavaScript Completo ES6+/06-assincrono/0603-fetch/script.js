// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// const inputCep = document.getElementById("cep");
// const btnCep = document.getElementById("btnCep");
// const resultadoCep = document.querySelector('.resultadoCep');

// btnCep.addEventListener("click", handleClick);

// function handleClick(event) {
//   event.preventDefault();
//   const cep = inputCep.value;
//   buscaCep(cep)
//   console.log(event)
// }

// function buscaCep(cep) {
//   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.text())
//   .then(body => {
//     resultadoCep.innerText = body;
//   })
// }

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// const resultadoBtc = document.querySelector('.precobtc');

// function fetchBtc() {
//   fetch('https://blockchain.info/ticker')
//   .then(response => response.json())
//   .then(body => {
//     const getPriceBtc = body.BRL.buy;
//     resultadoBtc.innerText = getPriceBtc;
//   })
// }

// setInterval(() => {
//   fetchBtc()
// }, 10000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const resultPiada = document.querySelector(".resultPiada");

function getPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((body) => {
      resultPiada.innerText = body.value;
    });
}

getPiada();
