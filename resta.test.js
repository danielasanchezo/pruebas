const resta = require('./resta');

test('restar 2 - 1 es igual a 1', () => {
  expect(resta(2, 1)).toBe(1);
});

const resta2 = require('./resta');

test('restar 3 - 1 es igual a 2', () => {
  expect(resta(3, 1)).toBe(2);
});