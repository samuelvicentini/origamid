export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');
  
  numeros.forEach(numero => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let i = 0;
    const time = setInterval(() => {
      i = incremento + i;
      numero.innerText = i
      if(i > total) {
        numero.innerText = total
        clearInterval(time)
      }
    }, 0)
  })
}

