module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                  {src: ['img/*'], dest: 'public/', filter: 'isFile'}, // includes files in path
                ]
            }
        },
        watch: {
            files: ['public/js/*', 'public/js/**.js','sass/*.scss', 'app.js','lib/*', 'views/*.*', 'views/layouts/*.*'],
            tasks: [ 'jshint', 'compass', 'yuiConfig', 'copy'],
            options: {
                livereload: true,
            }
        },
        jshint: {
            options: {
                expr: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: false,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    console: true,
                    module: true,
                    exports: true,
                    require: true
                },
 
                ignores: ['public/js/lib/*.js']
            },
            lib_test: {
                src: ['public/js/**.js','lib/*.js', 'routes/*.js']
            }
        },
        xrequirejs: {
          compile: {
            options: {
              baseUrl: "js",
              name: "../src/almond.js",
              mainConfigFile: "js/config.js",
              out: "dist/index.js"
            }
          }
        },
        requirejs: {
  compile: {
    options: {
      baseUrl: "js",
      out: "dist/index.js",
      done: function(done, output) {
        var duplicates = require('rjs-build-analysis').duplicates(output);

        if (duplicates.length > 0) {
          grunt.log.subhead('Duplicates found in requirejs build:');
          grunt.log.warn(duplicates);
          done(new Error('r.js built duplicate modules, please check the excludes option.'));
        }

        done();
      }
    }
  }
}

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('build',  ['requirejs']);
    grunt.registerTask('default',  ['jshint']);
};