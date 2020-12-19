// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img');

console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let cont = 0;
  imgs.forEach(img => {
    cont = cont + img.offsetWidth;
  })
  console.log(cont);
}

window.onload = function() {
  somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach(link => {
  if (link.offsetWidth > 47 && link.offsetHeight > 47) {
    console.log(`${link} está no padrão google`)
  } else {
    console.log(`${link} não esta no padrão goole`)
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const ifMobile = window.matchMedia('(max-width: 720px');

console.log(ifMobile.matches)

if (ifMobile.matches) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}
