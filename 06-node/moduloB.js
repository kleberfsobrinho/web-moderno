let a = 2; // visivel apenas dentro do modulo

module.exports = { // apenas o exports nã funciona
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}