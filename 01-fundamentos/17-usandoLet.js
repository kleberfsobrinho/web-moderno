var numero = 1; // Escopo global e escopo de função
{
    let numero = 2; // Escopo global, escopo de função, escopo de bloco
    console.log('dentro =', numero);
}
console.log('fora =', numero);