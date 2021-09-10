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
  const [versionPart] = scriptName.split('__');
  let versions = versionPart.split('_');

  switch (versions.length) {
    case 1:
      versions = versions.concat([0, 0]);
      break;
    case 2:
      versions.push(0);
      break;
    default:
      break;
  }
  
  versions[0] = versions[0].replace(/\_/g, '.').replace('V', '');
  return versions.join('.');
}

module.exports = {
  getScriptName,
  extractVersion
}
