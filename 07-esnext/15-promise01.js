let p = new Promise(function (resolve) {
    // resolve(3); // gera apenas um único valor
    // resolve({ x:3, y:4 }); // objetos podem ser passados
    resolve(['Ana', 'Bia', 'Ruhama']) // array pode ser passado
})

//p.then(valorCumprido => console.log(valorCumprido))
p.then(valorCumprido => valorCumprido[0])
    .then(primeiraLetra => primeiraLetra[0]) // agora valor é o resultado da chamada do primeiro then
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

// console.log(typeof Promise) // function
// console.log(typeof p) // objeto