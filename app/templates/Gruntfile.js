// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

// Directory reference:
//   css: <%= cssDirectory %>
//   javascript: <%= javascriptDirectory %>
//   coffeescript: <%= javascriptDirectory %>/_coffee
//   images: <%= imageDirectory %>
//   fonts: <%= fontsDirectory %>

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {      
      sass: {
        files: ['<%%= yeoman.app %>/<%= cssDirectory %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server']
      },
      autoprefixer: {
        files: ['<%%= yeoman.app %>/<%= cssDirectory %>/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      coffee: {
        files: ['<%%= yeoman.app %>/<%= javascriptDirectory %>/**/*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
      },
      jekyll: {
        files: [
          '<%%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '_config.yml',
          '!<%%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/<%= cssDirectory %>/**/*.css',
          '{.tmp,<%%= yeoman.app %>}/<%= cssDirectory %>/**/*.css',
          '{.tmp,<%%= yeoman.app %>}/<%%= js %>/**/*.js',
          '<%%= yeoman.app %>/<%= imageDirectory %>/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false,
        loadPath: 'app/_bower_components'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/',
          src: '**/*.{scss,sass}',
          dest: '.tmp/<%= cssDirectory %>',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/',
          src: '**/*.{scss,sass}',
          dest: '.tmp/<%= cssDirectory %>',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.dist %>/<%= cssDirectory %>',
          src: '**/*.css',
          dest: '<%%= yeoman.dist %>/<%= cssDirectory %>'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/<%= cssDirectory %>',
          src: '**/*.css',
          dest: '.tmp/<%= cssDirectory %>'
        }]
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/<%= javascriptDirectory %>/_coffee',
          src: '**/*.coffee',
          dest: '.tmp/<%= javascriptDirectory %>',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%%= yeoman.dist %>'
      },
      html: '<%%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%%= yeoman.dist %>',
      },
      html: ['<%%= yeoman.dist %>/**/*.html'],
      css: ['<%%= yeoman.dist %>/<%= cssDirectory %>/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            '<%= imageDirectory %>/**/*',
            '<%= fontsDirectory %>/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}'
            // Explicitly add any files your site needs for distribution here
            //'_bower_components/jquery/jquery.js',
            // 'favicon.ico',
            // 'apple-touch*.png'
          ],
          dest: '<%%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= yeoman.app %>/<%= cssDirectory %>',
          src: '**/*.css',
          dest: '.tmp/<%= cssDirectory %>'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%%= yeoman.dist %>/<%= javascriptDirectory %>/**/*.js',
            '<%%= yeoman.dist %>/<%= cssDirectory %>/**/*.css',
            '<%%= yeoman.dist %>/<%= imageDirectory %>/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%%= yeoman.dist %>/<%= fontsDirectory %>/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },<% if (deploy) { %>
    buildcontrol: {
      dist: {
        options: {
          remote: '<%= deployRemote %>',
          branch: '<%= deployBranch %>',
          commit: true,
          push: true
        }
      }
    },<% } %>
    coffeelint: {
      options: {
        'max_line_length': {
          'level': 'ignore'
        }
      },
      check: ['<%%= yeoman.app %>/<%= javascriptDirectory %>/_coffee/*.coffee']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%%= yeoman.app %>/<%= javascriptDirectory %>/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csscss: {
      options: {
        bundleExec: true,
        minMatch: 4,
        ignoreProperties: '-moz-appearance,-ms-appearance,-o-appearance,-webkit-appearance',
        ignoreSassMixins: false,
        colorize: true,
        shorthand: false,
        verbose: true
      },
      check: {
        src: ['.tmp/<%= cssDirectory %>/screen.css']
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%%= yeoman.app %>/<%= cssDirectory %>/**/*.css',
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'coffee:dist',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'coffee:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server'
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'coffeelint:check',
    'coffee:dist',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',>
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);<% if (deploy) { %>

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);<% } %>

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
