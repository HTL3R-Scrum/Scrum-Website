/*jshint node:true*/
"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        clean: {
            tmp: ["tmp"],
            dist: ["dist"]
        },
        handlebars: {
            options: {
                namespace: "JST",
                processContent: function(content) {
                    // shorten templates
                    content = content.replace(/^[\x20\t]+/mg, "").replace(/[\x20\t]+$/mg, "");
                    content = content.replace(/^[\r\n]+/, "").replace(/[\r\n]*$/, "\n");
                    return content;
                }
            },
            files: {
                "tmp/templates.js": ["src/templates/*.hbs"]
            }
        },
        "html-validation": {
            options: {
                charset: "utf-8",
                doctype: "HTML5"
            },
            files: {
                src: ["src/html/*.html"]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [{
                expand: true,
                cwd: "src/html/",
                src: ["*.html"],
                dest: "dist/"
            }]
        },
        jasmine: {
            options: {
                src: ["test/*.js"]
            },
            files: {
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            files: {
                src: ["Gruntfile.js", "src/js/*.js"]
            }
        },
        mkdir: {
            tmp: {
                options: {
                    create: ["tmp"]
                }
            },
            dist: {
                options: {
                    create: ["dist"]
                }
            }
        },
        sass: {
            options: {
                sourcemap: "none",
                style: "compressed"
            },
            files: [{
                expand: true,
                cwd: "src/scss/",
                src: ["*.scss"],
                dest: "dist/css/",
                ext: ".css"
            }]
        },
        scsslint: {
            options: {
                compact: true,
                config: "scss.yml"
            },
            files: {
                src: ["src/scss/*.scss"]
            }
        },
        uglify: {
            options: {
                ASCIIOnly: true
            },
            files: {
                "dist/script.js": ["tmp/templates.js", "src/js/*.js"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-mkdir");
    grunt.loadNpmTasks("grunt-scss-lint");
    grunt.loadNpmTasks("grunt-w3c-validation");

    grunt.registerTask("default", ["lint", "test", "prepare", "precompile", "compile", "cleanup"]);
    grunt.registerTask("lint", ["jshint", "html-validation", "scsslint"]);
    grunt.registerTask("test", ["jasmine"]);
    grunt.registerTask("prepare", ["mkdir:tmp"]);
    grunt.registerTask("precompile", ["handlebars"]);
    grunt.registerTask("compile", ["uglify", "htmlmin", "sass"]);
    grunt.registerTask("cleanup", ["clean:tmp"]);
};