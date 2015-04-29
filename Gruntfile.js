'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'greet*.js', 'test/**/*.js']
      },

      options: {
        jshintrc: true
      }
    },

    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      },

      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '',
        ui: 'bdd',
        reporter: 'tap'
      }
    },

    watch: {
      scripts: {
        files: ['*.js', 'test/**/*.js'],
        tasks: ['jshint']
      }
    }
  });
  grunt.registerTask('test', ['jshint:dev', 'simplemocha:dev']);
  grunt.registerTask('default', ['test']);
};
