const {
  debug,
  getInput,
  setOutput,
  setFailed
} = require('@actions/core');
const github = require('@actions/github');
const {getScriptName, extractVersion} = require('./lib');

// TODO: Integration test with github action payload
try {
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  debug(`Event payload: ${payload}`);

  const scriptDir = getInput('scriptDirectory');
  getScriptName(scriptDir, (err, scriptName) => {
    if (err) {
      setFailed(err.message);
    } else {
      const version = extractVersion(scriptName);
      setOutput('version', version);
    }
  });
} catch (err) {
  setFailed(err.message);
}
