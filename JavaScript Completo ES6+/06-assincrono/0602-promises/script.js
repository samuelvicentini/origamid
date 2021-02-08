const promesa = new Promise((resolve, reject) => {
  let name = true
  if(name) {
    setTimeout(() => {
      resolve('Resolvido')
    }, 1000)
  } else {
    reject(Error('Algo de errado não está certo'))
  }
})

promesa.then(resolve => {
  console.log(resolve)
})