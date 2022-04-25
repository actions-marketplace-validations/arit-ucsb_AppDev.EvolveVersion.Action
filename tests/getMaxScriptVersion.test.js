const {getMaxScriptVersion} = require('../src/lib');
const path = require('path');

test('gets the maximum version from migration scripts directory', done => {
  const scriptDir = path.resolve(__dirname, 'scriptDirFixture');
  getMaxScriptVersion(scriptDir, (err, scriptFile) => {
    expect(err).toBe(undefined);
    expect(scriptFile).toBe('1.10.0');
    done();
  });
});

test('calls back with error when directory not found', done => {
  const scriptDir = path.resolve(__dirname, 'notFoundFixture');
  getMaxScriptVersion(scriptDir, (err, scriptFile) => {
    expect(err.code).toBe('ENOENT');
    expect(scriptFile).toBe(undefined);
    done();
  });
});
