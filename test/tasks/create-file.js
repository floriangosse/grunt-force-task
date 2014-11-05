'use strict';

module.exports = function (grunt) {

    var file = 'tmp/test-file';

    grunt.registerTask('create-file', 'Test task. Create a file.', function () {
        // Create file for test
        grunt.file.write(file, '');

        grunt.log.ok('File ' + file + ' created.');
    });
};
