module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({

    srcFiles: ["src/**/*.purs", "bower_components/**/src/**/*.purs"],

    execute: {
        target: {
            src: ['dist/Main.js']
        }
    },

    psc: {
      options: {
        main: "Chapter2",
        modules: ["Chapter2"]
      },
      all: {
        src: ["<%=srcFiles%>"],
        dest: "dist/Main.js"
      }
    },

    dotPsci: ["<%=srcFiles%>"]
  });

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks("grunt-purescript");

  grunt.registerTask("default", ["psc:all", "dotPsci"]);
  grunt.registerTask("run", ["default", "execute"])
};
