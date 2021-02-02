// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// setInterval(() => {
//   console.log(document.querySelector("body").style.background = "blue")
// }, 2000);
// setInterval(() => {
//   console.log(document.querySelector("body").style.background = "red")
// }, 4000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTimer);
pausar.addEventListener('click', pausarTimer);
pausar.addEventListener('dblclick', resetarTimer);

let i = 1;
let timer;

function iniciarTimer() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 1000)
  iniciar.setAttribute('disabled', '')
}

function pausarTimer() {
  clearInterval(timer)
  iniciar.removeAttribute('disabled', '')
}

function resetarTimer() {
  tempo.innerText = 0;
  i = 0;
}