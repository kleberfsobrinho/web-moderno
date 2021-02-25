const gulp = require('gulp');
const { series, parallel } = require('gulp');

const antes1 = callback => {
    console.log('Tarefa Anntes 1')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa Antes 2')
    return callback()
}

function copiar(callback) {
    // console.log('Tarefa de copiar!')
    gulp.src('pastaA/**/*.txt') // seleciona todos os arquivos .txt
        //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // arquivos de entrada para o workflow
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA())
        .pipe(gulp.dest('pastaB')) // transformação para os arquivos de entrada

    return callback()
}

const fim = callback => {
    console.log('Tarefa fim')
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)