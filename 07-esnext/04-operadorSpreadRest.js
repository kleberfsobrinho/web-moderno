// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetros de função

// usar spread com objetos
const funcionario = { nome: 'Maria', salario: 12345.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal)