// let e const
{
    var a = 2; // dois escopos - função e global
    let b = 3; // três escopos - função, global e de bloco
    console.log(b);
}
console.log(a);

// Template String
const produto = 'iPad';
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)