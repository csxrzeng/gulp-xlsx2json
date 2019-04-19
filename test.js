'use strict';
var path = require('path');
var gulp = require('gulp');
var xlsx2json = require('./index');
var through = require('through2');

gulp.src('./test.xlsx')
    .pipe(xlsx2json({
        valueRowStart: 2
    }))
    .pipe(through.obj((file, enc, cb) =>{
        file.path = path.basename(file.path, '.xlsx') + '.json';
        cb(null, file);
    }))
    .pipe(gulp.dest('./'));