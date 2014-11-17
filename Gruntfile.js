/*jshint node:true*/
"use strict";
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
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

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-scss-lint");
    grunt.loadNpmTasks("grunt-w3c-validation");

    // Default task(s).
    grunt.registerTask("default", ["lint"]);
    grunt.registerTask("lint", ["jshint", "html-validation", "scsslint"]);

};