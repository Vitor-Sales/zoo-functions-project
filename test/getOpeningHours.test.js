const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const openingHours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('1- Ao passar função getOpeningHours() sem argumento deverá retornar um objeto com todos os dias.', () => {
    expect(getOpeningHours()).toEqual(openingHours);
  });
  it('2- Ao passar os argumentos ("Monday", "09:00-AM"), retornar a string: "The zoo is closed".', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('3- Ao passar os argumentos ("Tuesday", "09:00-AM"), retornar a string: "The zoo is open".', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('4- Ao passar os argumentos ("Wednesday", "09:00-AM"), retornar a string: "The zoo is closed".', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('5- Ao passar uma argumento que não seja um dia em ingles e seja string, como "oi", lançar erro.', () => {
    expect(getOpeningHours('oi', '09:00-PM')).toThrow();
  });
});
