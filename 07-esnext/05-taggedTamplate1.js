// taggled tamplates - processa o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
}

const aluno = 'Ruhama';
const situacao = 'Aprovada';
console.log(tag`${aluno} está ${situacao}`)