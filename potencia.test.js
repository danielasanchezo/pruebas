const potencia = require('./potencia');

test('2 elevado a la 3 es igual a 8', () => {
  expect(potencia(2, 2, 2 )).toBe(8);
});

const potencia2 = require('./potencia');

test('3 elevado a la 3 es igual a 27', () => {
  expect(potencia2(3, 3, 3 )).toBe(27);
});