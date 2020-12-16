const menu = document.querySelector('.menu');

// Adicione a classe ativo a todos os itens do menu

menu.classList.add('ativo')
console.log(menu.classList);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.classList.remove('ativo')
console.log(menu.classList);

// Verifique se as imagens possuem o atributo alt

const img = document.querySelector('img');

console.log(img.hasAttribute('alt'))

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('[href^="ht"]').getAttribute('href');
const modifique = linkExterno.replace('https', 'teste')

console.log(modifique)

