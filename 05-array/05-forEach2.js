Array.prototype.myforEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Ruhama']

aprovados.myforEach(function (elemento, indice) {
    console.log(`${indice + 1} - ${elemento}`)
})