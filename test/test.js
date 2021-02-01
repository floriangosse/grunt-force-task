const test = require('ava');
const setupTest = require('./setup-test');

test('task \'warning\' fails', async (t) => {
    const { runTask } = setupTest();

    const { failed } = await runTask('test:warning');

    t.true(failed);
});

test('task \'force:warning\' doesn\'t fail', async (t) => {
    const { runTask } = setupTest();

    const { failed } = await runTask('test:force-warning');

    t.false(failed);
});

test('task chain without force fails', async (t) => {
    const { runTask, testMarkerRegex } = setupTest();

    const { failed, stdout } = await runTask('test:chain');

    t.true(failed);
    t.notRegex(stdout, testMarkerRegex);
});

test('task chain with force runs successful', async (t) => {
    const { runTask, testMarkerRegex } = setupTest();

    const { failed, stdout } = await runTask('test:force-chain');

    t.false(failed);
    t.regex(stdout, testMarkerRegex);
});
