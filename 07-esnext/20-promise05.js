function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor);
            }
        } catch (e) {
            reject(e);
        }
    })
}

funcionarOuNao('Tentando', 0.5)
    .then(v => console.log(v))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(err.message))
    .then(() => console.log('Fim!'))