const {readdir} = require('fs');

// Have to use callback instead of promises, because github actions
// doesn't support node 14 yet.
function getScriptName(scriptDir, callback) {
  readdir(scriptDir, (err, files) => {
    if (err) {
      callback(err, undefined);
    } else {
      files = files.sort();
      const scriptName = files[files.length - 1];
      callback(undefined, scriptName);
    }
  });
}

function extractVersion(scriptName) {
  let [versions] = scriptName.split('__');
  console.log('VERSIONS: %s', versions);
  return versions.replace(/\_/g, '.').replace('V', '');
}

module.exports = {
  getScriptName,
  extractVersion
}
