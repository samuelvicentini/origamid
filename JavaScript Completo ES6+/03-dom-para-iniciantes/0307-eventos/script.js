// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const link = document.querySelectorAll('a[href^="#"]');

// function addClassAndRemove(event) {
//   event.preventDefault()
//   link.forEach(remove => {
//     remove.classList.remove('ativo')
//   })
//   event.currentTarget.classList.toggle('ativo')
// }

// link.forEach(click => {
//   click.addEventListener('click', addClassAndRemove)
// })

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const get = document.querySelectorAll('body *');

// get.forEach(click => {
//   click.addEventListener('click', function(event) {
//     console.log(event.target)
//   })
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const get = document.querySelectorAll('body *');

// get.forEach(click => {
//   click.addEventListener('click', function(event) {
//     event.target.remove()
//   })
// })


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function getT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', getT);