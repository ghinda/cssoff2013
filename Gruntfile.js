'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// configurable paths
	var yeomanConfig = {
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		yeoman: yeomanConfig,
		watch: {
			sass: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['sass:server']
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
					'{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: '0.0.0.0'
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.tmp'),
							mountFolder(connect, yeomanConfig.app)
						];
					}
				}
			},
			dist: {
				options: {
					middleware: function (connect) {
						return [
						mountFolder(connect, yeomanConfig.dist)
						];
					}
				}
			}
		},
		open: {
			server: {
				url: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js'
			]
		},
		sass: {
			dist: {
				files: {
					'.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
				}
			},
			server: {
				options: {
					includePaths: [
						''
					]
				},
				files: {
					'.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.scss'
				}
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt,php,html}',
						'.htaccess',
						'bower_components/**/*',
						'images/{,*/}*.{gif,webp,svg}',
						'styles/fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: [
						'generated/*'
					]
				}]
			}
		},
    buildcontrol: {
      options: {
        dir: 'public',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      ghpages: {
        options: {
          remote: 'git@github.com:ghinda/cssoff2013.git',
          branch: 'gh-pages'
        }
      }
    },
		concurrent: {
			server: [
				'sass:server'
			],
			dist: [
				'sass:dist',
				'imagemin'
			]
		}
	});

	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('build', [
		'clean:dist',
		'concurrent:dist',
		'copy'
	]);

	grunt.registerTask('default', [
		//'jshint',
		'build',
    'buildcontrol'
	]);
};
