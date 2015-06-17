module.exports = configureGrunt;

function configureGrunt(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    base: 'dist/',
                    port: 8000
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html', '!libs/*'],
                    dest: 'dist/'
                }]
            },
            css: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css', '!libs/*'],
                    dest: 'dist/'
                }]
            },
            libs: {
                files: [{
                    expand: true,
                    cwd: 'src/libs/',
                    src: [
                        'angular/angular.min.js',
                        'angular-ui-router/release/angular-ui-router.min.js',
                        'bootstrap/dist/css/bootstrap.min.css'
                    ],
                    dest: 'dist/libs/'
                }]
            }
        },
        concat: {
            js: {
                src: 'src/js/**/*.js',
                dest: 'dist/js/app.js'
            }
        },
        uglify: {
            options: {
                compress: true,
                sourceMap: true
            },
            js: {
                src: 'dist/js/app.js',
                dest: 'dist/js/app.min.js'
            }
        },
        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['concat:js', 'uglify:js']
            },
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['copy:css']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['copy', 'concat', 'uglify', 'connect', 'watch']);
    grunt.registerTask('build', ['copy', 'concat', 'uglify']);
}
