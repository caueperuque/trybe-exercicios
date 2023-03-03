const decode = require('./script');

describe('Verifica se decode está funcionando de acordo com o proposto', () => {
  it('Verifica se decode é uma função', () => {
    expect(typeof decode).toBe('function')
  })
})