// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

function returnTotalCaracteres(item) {
  let total = 0;
  const getCaracteres = document.querySelectorAll(item);
  const transformArray = Array.from(getCaracteres)
  const tratando = transformArray.map(item => {
    return item.innerHTML.length
  })
  const test = tratando.reduce((acumulador, item) => {
    return total = acumulador + item
  })

  return test
}

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createTag(tag, classe, conteudo) {
  const element = document.createElement(tag)
  element.classList.add(classe)
  element.innerHTML = conteudo
  return element
}

console.log(createTag('p', 'teste', 'olá'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


function createH1(conteudo) {
  const element = document.createElement('h1')
  element.classList.add('titulo')
  element.innerHTML = conteudo
  return element
}

console.log(createH1('olá'))

//Jeito Correto com base na aula

const h1Titulo = createTag.bind(null, 'h1', 'titulo')

console.log(h1Titulo('O conteudo'))