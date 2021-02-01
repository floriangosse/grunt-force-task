module.exports = (grunt) => {
    const initialStatus = grunt.option('force') || false;

    grunt.registerTask('force', 'Run a task in force mode.', (...args) => {
        const task = args.join(':');

        grunt.task.run([
            `force-internal:pre:${task}`,
            task,
            `force-internal:post:${task}`
        ]);
    });

    grunt.registerTask('force-internal', 'Internal task. Control the force option.', (step, ...args) => {
        const task = args.join(':');

        if (step === 'pre') {
            grunt.log.ok(`Enable force mode for task ${task}.`);
            grunt.option('force', true);
        } else if (step === 'post') {
            grunt.log.ok(`Reset force mode for task ${task}.`);
            grunt.option('force', initialStatus);
        }
    });
};
