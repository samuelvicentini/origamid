// const animaisSection = document.querySelector('.animais');


// Retorne no console todas as imagens do site

console.log(document.getElementsByTagName('img'));

// Retorne no console apenas as imagens que começaram com a palavra imagem

console.log(document.querySelectorAll('img[src^="img/imagem"]'));

// Selecione todos os links internos (onde o href começa com #)

console.log(document.querySelectorAll('[href^="#"]'));

// Selecione o primeiro h2 dentro de .animais-descricao

console.log(document.querySelector('.animais-descricao h2'));

// Selecione o último p do site

console.log(document.querySelector('p:first-child'));