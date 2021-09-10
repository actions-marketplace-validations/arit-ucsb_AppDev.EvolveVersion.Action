const {getScriptName} = require('../src/lib');
const path = require('path');

test('gets highest version file from migration scripts directory', () => {
  const scriptDir = path.resolve(__dirname, 'scriptDirFixture');
  getScriptName(scriptDir, (_, scriptFile) => {
    expect(scriptFile).toBe('V1_3__Load_Initial_ManagedAccounts.sql');
  });
});
