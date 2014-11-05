'use strict';

module.exports = function (grunt) {

    grunt.registerTask('warning', 'Test task. Prints a warning.', function () {
        grunt.fail.warn('warning');
    });
};
