module.exports = (grunt) => {
    // Actually load this plugin's task(s).
    grunt.loadTasks('../tasks');

    /*
     * Test cases
     */
    grunt.registerTask('test:warning', [
        'warning'
    ]);

    grunt.registerTask('test:force-warning', [
        'force:warning'
    ]);

    grunt.registerTask('test:chain', [
        'warning',
        'test-marker'
    ]);

    grunt.registerTask('test:force-chain', [
        'force:warning',
        'test-marker'
    ]);

    /*
     * Test helpers
     */
    grunt.registerTask('warning', 'Prints a warning.', () => {
        grunt.fail.warn('warning');
    });

    grunt.registerTask('test-marker', 'Prints a test marker', () => {
        grunt.log.writeln('<<<<THIS IS THE TEST MARKER>>>>');
    });
};
