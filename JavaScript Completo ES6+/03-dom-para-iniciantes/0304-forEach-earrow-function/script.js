// Mostre no console cada parágrado do site

// const paragrafos = document.querySelectorAll('p')

// console.log(paragrafos.forEach(item => console.log(item)))

// Mostre o texto dos parágrafos no console

// console.log(paragrafos.forEach(item => console.log(item.innerText)))

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

//Errado


imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);

//Correto 

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);