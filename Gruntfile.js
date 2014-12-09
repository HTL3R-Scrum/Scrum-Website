/*jshint node:true*/
"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        autoprefixer: {
            options: {
                cascade: false
            },
            files: [{
                expand: true,
                cwd: "tmp/css/",
                src: ["*.css"]
            }]
        },
        clean: {
            tmp: ["tmp/"],
            dist: ["dist/"]
        },
        cssmin: {
            files: [{
                expand: true,
                cwd: "tmp/css/",
                src: ["*.css"],
                dest: "dist/css/"
            }]
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
            all: {
                files: [{
                    expand: true,
                    cwd: "src/html/",
                    src: ["*.html"],
                    dest: "dist/"
                }]
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
                    create: ["tmp", "tmp/css"]
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
                style: "expanded"
            },
            all: {
                files: [{
                    expand: true,
                    cwd: "src/scss/",
                    src: ["*.scss"],
                    dest: "tmp/css/",
                    ext: ".css"
                }]
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
        },
        uglify: {
            options: {
                ASCIIOnly: true
            },
            files: {
                "dist/script.js": ["tmp/templates.js", "src/js/*.js"]
            }
        },
        watch: {
            scripts: {
                files: ["src/template/*.hbs", "src/js/*.js"],
                tasks: ["handlebars", "uglify"]
            },
            scss: {
                files: ["src/scss/*.scss"],
                tasks: ["sass"]
            },
            html: {
                files: ["src/html/*.html"],
                tasks: ["htmlmin"]
            },
            all: {
                files: ["src/**/*"],
                tasks: ["precompile", "compile"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-mkdir");
    grunt.loadNpmTasks("grunt-scss-lint");
    grunt.loadNpmTasks("grunt-w3c-validation");

    grunt.registerTask("default", ["lint", "test", "prepare", "precompile", "compile", "cleanup"]);
    grunt.registerTask("lint", ["jshint", "html-validation", "scsslint"]);
    grunt.registerTask("test", ["jasmine"]);
    grunt.registerTask("prepare", ["mkdir:tmp"]);
    grunt.registerTask("precompile", ["handlebars", "sass", "autoprefixer"]);
    grunt.registerTask("compile", ["uglify", "htmlmin", "cssmin"]);
    grunt.registerTask("cleanup", ["clean:tmp"]);
};