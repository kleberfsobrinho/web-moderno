const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Ruhama'];

aprovados.forEach(function (elemento, indice, array, x) {
    console.log(`${indice + 1} - ${elemento}`);
    console.log(array);
    console.log(x); // undefined
})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);