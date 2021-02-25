Array.prototype.myfilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

let fragil = produto => produto.fragil;
let acimaDe500 = produto => produto.preco >= 500;

console.log(produtos.myfilter(fragil).myfilter(acimaDe500));