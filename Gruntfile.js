/**
 * Fractionless build tasks
 *
 * Use this file to build the project
 * or modify it to suit your own project.
 */

module.exports = function(grunt) {

  // Time your grunt tasks and never need to loadGruntTask again
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      dev: 'src',
      dist: 'dist',
      build: '<%= grunt.template.today("yyyymmdd") %>'
    },

    // local server
    connect: {
      server: {
        options: {
          host: 'localhost',
          port: process.env.PORT || '9000',
          base: '<%= project.dev %>/',
          livereload: true
        }
      }
    },

    // watch for file changes
    watch: {
      styles: {
        files: ['<%= project.dev %>/less/**/*.less'],
        tasks: ['less:dev'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['<%= project.dev %>/js/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint:dev'],
        options: {
          livereload: true,
          reload: true
        }
      }
    },

    // compile less
    less: {
      dev: {
        files: {
          '<%= project.dev %>/css/style.css': ['<%= project.dev %>/less/style.less']
        }
      }
    },

    // lint js
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      dev: ['<%= project.dev %>/js/**/*.js']
    },

    // copy
    copy: {
      dev: {
        expand: true,
        cwd: '<%= project.dev %>/vendor/font-awesome/fonts/',
        src: ['*.{otf,ttf,svg,eot,woff,woff2}'],
        dest: '<%= project.dev %>/fonts/'
      }
    },

    // markdown
    markdown: {
      dev: {
        options: {
          templateContext: {},
          contextBinder: true,
          contextBinderMark: '@@@',
          template: 'templates/docs.html',
          preCompile: function(src, context) {
            var fs    = require('fs'),
                files = fs.readdirSync(__dirname + '/src/docs');

            context.toc = '<ul class="docs-toc">';

            files.forEach(function(file) {
              var fileName = file === 'index.html' ? ['Getting Started'] : file.replace('.html', '').split('-');
              fileName = fileName.map(function(name) {
                return name.charAt(0).toUpperCase() + name.substr(1);
              }).join(' ');
              context.toc += '<li><a href="/docs/' + file + '">' + fileName + '</a></li>';
            });

            context.toc += '</ul>';
          }
        },
        files: [{
          expand: true,
          cwd: 'content',
          src: '*.md',
          dest: '<%= project.dev %>/docs/',
          ext: '.html'
        }]
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['develop']);
  grunt.registerTask('develop', [
    'connect:server',
    'watch'
    ]);

  grunt.registerTask('setup', ['copy:dev']);
};
