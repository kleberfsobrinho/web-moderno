const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'Ruhama', nota: 10, bolsista: true }
]

// Desafio1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
let bolsista = aluno => aluno.bolsista;
const resultado = alunos.map(bolsista).reduce(todosBolsistas);
console.log(resultado);

// Desafio2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
const resultado2 = alunos.map(bolsista).reduce(algumBolsista);
console.log(resultado2);
