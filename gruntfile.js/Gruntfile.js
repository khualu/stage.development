const sass = require('node-sass');


module.exports = grunt => {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        // contact configuration 
        concat: {
            javascript: {
                src: ['js/home.js', 'js/widget.js'],
                dest: 'build/js/scripts.js',
            },
            css: {
                src: ['style/home.scss', 'style/button.scss'],
                dest: 'build/css/style.scss',
            },
        },

        //watch configuration
        watch: {
            javascript: {
              files: 'js/**/*.js',
              tasks: ['concat:javascript'],
            },
            css: {
                files: 'style/**/*.scss',
                tasks: ['concat:css'],
              },
          },

          //sass compilter configuration
          sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'build/css/style.css': 'build/css/style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','concat', 'watch']);

};