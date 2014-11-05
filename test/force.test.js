'use strict';

var grunt = require('grunt');

exports.force = {
    run: function (test) {
        test.expect(1);

        test.ok(grunt.file.exists('tmp/test-file'), 'check if the test file is created.');

        test.done();
    }
};
