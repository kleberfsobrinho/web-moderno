const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // code associado
console.log(escola.indexOf(3));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola'.concat(escola).concat("!"));
console.log('Escola' + escola + "!");
console.log(escola.replace(/\d/, 'e')); // Substitui digitos pela letra 'e'
console.log(escola.replace(/\w/, 'e')); // Substitui a primeira letra por 'e'
console.log(escola.replace(/\w/g, 'e')) // Substitui todas as letras e números por 'e'

console.log('Ana, Maria, Pedro'.split(','))