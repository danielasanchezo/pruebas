const division = require('./division');

test('division 4 / 2 es igual a 2', () => {
  expect(division(4, 2)).toBe(2);
});

const division2 = require('./division');

test('division 6 / 2 es igual a 3', () => {
  expect(division2(6, 2)).toBe(3);
});