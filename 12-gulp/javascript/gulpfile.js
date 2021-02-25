const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback) {
    gulp.src('src/**/*.js') // ** - qualquer subpasta
        .pipe(babel({
            comments: false, // retirar os comentários
            presets: ["env"] // versão mais nova do javascript
        }))
        .pipe(uglify()) // converte o código para um mimificado
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // concatena o resultado
        .pipe(gulp.dest('build'))
    return callback()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb();
}

exports.default = series(padrao, fim)