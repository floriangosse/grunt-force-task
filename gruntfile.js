/*
 * grunt-force-task
 *
 *
 * Copyright (c) 2014 Florian Goße
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>',
                'test/tasks/*.js'
            ],
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*.test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // On every run the tasks for testing will be load.
    grunt.registerTask('test', function () {
        // Load the tasks for testing
        grunt.loadTasks('test/tasks');

        // Run tasks
        grunt.task.run([
            'clean',
            'force:warning',
            'create-file',
            'nodeunit'
        ]);
    });

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'jshint',
        'test'
    ]);

};
