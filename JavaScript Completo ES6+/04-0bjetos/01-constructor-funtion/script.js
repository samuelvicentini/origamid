// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa1(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' Andou')
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const maria = new Pessoa1('Maria', 20)
const joao = new Pessoa1('João', 20)
const bruno = new Pessoa1('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor)
  this.addClass = function(classe) {
    this.elements.forEach(element => {
      return element.classList.add(classe)
    })
  }
  this.removeClass = function(classe) {
    this.elements.forEach(element => {
      return element.classList.remove(classe)
    })
  }
}

// criando a node list
const li = new Dom('li')

//adciconando classe 
li.addClass('ativo')

//removendo classe 
li.removeClass('ativo')