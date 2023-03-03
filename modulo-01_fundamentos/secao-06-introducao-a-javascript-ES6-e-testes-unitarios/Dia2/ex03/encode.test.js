const encode = require('./script');

describe('Verifica se encode está funcionando de acordo com o proposto', () => {
  it('Verifica se encode é uma função', () => {
    expect(typeof encode).toBe('function')
  });
  it('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual()
  })
})