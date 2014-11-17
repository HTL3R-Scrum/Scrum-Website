/*jshint node:true*/
"use strict";
module.exports = function(grunt) {

    // Project configuration.
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
                    create: ["tmp", "tmp/templates"]
                }
            },
            dist: {
                options: {
                    create: ["dist"]
                }
            }
        },
        scsslint: {
            options: {
                compact: true,
                config: "scss.yml"
            },
            files: {
                src: ["src/scss/*.scss"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mkdir");
    grunt.loadNpmTasks("grunt-scss-lint");
    grunt.loadNpmTasks("grunt-w3c-validation");

    grunt.registerTask("default", ["lint", "test"]);
    grunt.registerTask("lint", ["jshint", "html-validation", "scsslint"]);
    grunt.registerTask("test", ["jasmine"]);
    grunt.registerTask("precompile", ["mkdir:tmp", "handlebars"]);
    grunt.registerTask("cleanup", ["clean:tmp"]);

};