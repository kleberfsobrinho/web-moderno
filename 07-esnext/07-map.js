const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react) // não da certo
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b'); // não eh permitido mais de um valor com a mesma chave portanto o valor eh substituido
chavesVariadas.set(456, 'b'); // o mesmo nao ocorre para valores
console.log(chavesVariadas)