const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

const suma2 = require('./suma');

test('sumar 3 + 2 es igual a 5', () => {
  expect(suma2(3, 2)).toBe(5);
});