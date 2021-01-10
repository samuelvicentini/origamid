const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const getFirst = comidas.shift()
// Remova o último valor de comidas e coloque em uma variável
const getEnd = comidas.pop()
// Adicione 'Arroz' ao final da array
const addEnd = comidas.push('Arroz')
// Adicione 'Peixe' e 'Batata' ao início da array
const addFirst = comidas.unshift('Peixe', 'Batata')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const organize = estudantes.sort()
// Inverta a ordem dos estudantes
const inverter = estudantes.reverse()
// Verifique se Joana faz parte dos estudantes
const getJoana = estudantes.includes('Joana')
// Verifique se Juliana faz parte dos estudantes
const getJuliana = estudantes.includes('Juliana')

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html.split('section').join('ul').split('div').join('li'))

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
const getEndCar = carros.push()
// salve a array original em outra variável
const arrayCars = carros

