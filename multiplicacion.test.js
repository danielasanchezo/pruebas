const multiplicacion = require('./multiplicacion');

test('multiplicar 1 * 2 es igual a 2', () => {
  expect(multiplicacion(1, 2)).toBe(2);
});