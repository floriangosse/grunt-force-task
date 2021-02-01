const path = require('path');
const execa = require('execa');

const gruntBin = path.resolve(__dirname, '../node_modules/.bin/grunt');
const defaultArguments = [
    `--base=${__dirname}`
];

function setupTest() {
    const testMarker = '<<<<THIS IS THE TEST MARKER>>>>';
    const testMarkerRegex = new RegExp(`^${testMarker}$`, 'gm');

    const runTask = async (taskName) => {
        let result;

        try {
            result = await execa.node(gruntBin, [...defaultArguments, taskName], {
                stdin: 'ignore',
                stdout: 'pipe',
                stderr: 'pipe'
            });
        } catch (error) {
            if (typeof error.exitCode === 'number') {
                result = error;
            } else {
                throw error;
            }
        }

        return {
            failed: result.failed,
            stdout: result.stdout,
            stderr: result.stderr
        };
    };

    return {
        testMarker,
        testMarkerRegex,
        runTask
    };
}

module.exports = setupTest;
