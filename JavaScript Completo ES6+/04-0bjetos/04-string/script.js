// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTotal = 0;
transacoes1.forEach(value => {
  const getNumber = +value.valor.replace('R$ ', '');

  if (value.valor) {
    somaTotal = somaTotal + getNumber;
  }
})

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const transformAs = html.split('span').join('a')
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

frase.slice(frase.length - 1)

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxa = 0;
const getTaxas = transacoes.forEach(item => {
  const clearFrase = item.trim().toLocaleLowerCase();

  if(clearFrase.slice(0,4) === 'taxa') {
    totalTaxa += 1
  }
})