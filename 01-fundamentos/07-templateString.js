const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const tempate = `
    Olá
    ${nome}`;

console.log(concatenacao, tempate);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);