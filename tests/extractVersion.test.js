const {extractVersion} = require('../src/lib');

test('Major filename', () => {
  const result = extractVersion('V5__Script.sql');
  expect(result).toBe('5.0.0');
});

test('MajorMinor filename', () => {
  const result = extractVersion('V8_25__Script2.sql');
  expect(result).toBe('8.25.0');
});

test('MajorMinorPatch filename', () => {
  const result = extractVersion('V7_90_9__Script.sql');
  expect(result).toBe('7.90.9');
});
