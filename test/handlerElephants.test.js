const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('1 - Ao passar o argumento "averageAge" na função handlerElephants(), retorne a idade média, que seria: 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('2- Ao passar o argumento "count" na função handlerElephants(), retorne a quantidade de elefantes, que seria: 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('3- Ao passar o argumento "names" na função handlerElephants(), retorne a quantidade de elefantes, retorne o array [ "Ilana", "Orval", "Bea", "Jefferson" ]', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
});
