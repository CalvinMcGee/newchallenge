module.exports = function(grunt) {

  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'scss',
          cssDir: 'static/css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'scss',
          cssDir: 'static/css',
          outputStyle: 'expanded'
        }
      }
    },
    concat: {
      js: {
        src: [
          'js/jquery.min.js',
          'js/jquery.validate.min.js',
          'js/jquery.ui.widget.min.js',
          'js/jquery.doubletaptogo.js',
          'js/contact.js',
          'js/app.js'
        ],
        dest: 'static/js/script.js'
      }
    },
    uglify: {
      build: {
        src: 'static/js/script.js',
        dest: 'static/js/script.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['compass:dist', 'concat:js', 'uglify']);
  grunt.registerTask('dev', ['compass:dev', 'concat:js']);

};
