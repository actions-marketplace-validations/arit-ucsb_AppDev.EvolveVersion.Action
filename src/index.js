const {
  debug,
  getInput,
  setOutput,
  setFailed
} = require('@actions/core');
const github = require('@actions/github');
const {getMaxScriptVersion} = require('./lib');

try {
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  debug(`Event payload: ${payload}`);

  const scriptDir = getInput('scriptDirectory');
  getMaxScriptVersion(scriptDir, (err, version) => {
    if (err) {
      setFailed(err.message);
    } else {
      setOutput('version', version);
    }
  });
} catch (err) {
  setFailed(err.message);
}
