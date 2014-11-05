/*
 * grunt-force-task
 *
 *
 * Copyright (c) 2014 Florian Goße
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // get initial force status
    var initialStatus = grunt.option('force') || false;

    grunt.registerTask('force', 'Run a task in force mode.', function () {
        // get the task
        var task = this.args.join(':');

        // run task
        grunt.task.run([
            'force-internal:pre:' + task,
            task,
            'force-internal:post:' + task
        ]);
    });

    grunt.registerTask('force-internal', 'Internal task. Control the force option.', function (step) {
        // get the task
        var task = this.args.slice(1).join(':');

        if (step === 'pre') {
            // enable force option
            grunt.log.ok('Enable force mode for task ' + task + '.');
            grunt.option('force', true);
        } else if (step === 'post') {
            // reset force option
            grunt.log.ok('Reset force mode for task ' + task + '.');
            grunt.option('force', initialStatus);
        }
    });
};