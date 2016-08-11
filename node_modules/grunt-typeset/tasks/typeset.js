/*
 * grunt-typeset
 * https://github.com/mobinni/grunt-typeset
 *
 * Copyright (c) 2015 Mo Binni
 * Licensed under the MIT license.
 */

'use strict';
var typeset = require('typeset');
var fs = require('fs');
module.exports = function (grunt) {

    grunt.registerMultiTask('typeset', 'A grunt wrapper fort Typeset.js', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            ignore: '', // string of a CSS selector to skip
            only: '',
            dest: 'dist'
        });
        var src = this.files[0].orig.src;

        grunt.file.expand(src).forEach(function (path) {
            var isDir = grunt.file.isDir(path);
            process(isDir, path, options);
        });
    });

    function process(isDir, path, options) {
        if (isDir) {
            var files = fs.readdirSync(path);
            console.log(files);
        } else {
            processFile(path, options);
        }
    }

    function processFile(path, options) {
        var file = fs.readFileSync(path);
        var output = typeset(file, {
            ignore: options.ignore, // string of a CSS selector to skip
            only: options.only    // string of a CSS selector to only apply typeset
        });
        save(output, options.dest, path);
    }

    function save(output, dest, path) {
        var pathArr = path.split('/');
        pathArr[0] = dest;
        var savePath = pathArr.join('/');
        grunt.file.write(savePath, output);
    }
};
