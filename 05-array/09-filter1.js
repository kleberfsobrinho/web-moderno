const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false; // Não filtra nenhum elemento retornando um array vazio.
}))

let fragil = produto => produto.fragil;
let acimaDe500 = produto => produto.preco >= 500;

console.log(produtos.filter(fragil).filter(acimaDe500));