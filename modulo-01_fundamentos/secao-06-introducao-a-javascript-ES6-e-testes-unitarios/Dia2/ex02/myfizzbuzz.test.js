const myFizzBuzz = require('./script');

describe('Verifica se a função myFizzBuzz está funcionando de acordo com o esperado', () => {
  it('Verifica se myFizzBuzz é uma função', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });
  it('Verfica o funcionamento quando "num" é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Verfica o funcionamento quando "num" é divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Verfica o funcionamento quando "num" é divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Verfica o funcionamento quando "num" não é divisível por 3 nem por 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('Verfica o funcionamento quando "num" não for um número', () => {
    expect(myFizzBuzz('teste')).toBe(false);
  });


});