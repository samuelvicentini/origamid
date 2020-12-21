// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const newMenu = menu.cloneNode(true)

copy.appendChild(menu)

// Selecione o primeiro DT da dl de Faq

const firstDt = document.querySelector('.faq dl dt');

// Selecione o DD referente ao primeiro DT

const firstDD = firstDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');


faq.innerHTML = document.querySelector('.animais').innerHTML;