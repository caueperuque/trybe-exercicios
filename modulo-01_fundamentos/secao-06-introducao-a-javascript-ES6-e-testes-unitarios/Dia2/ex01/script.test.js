const myRemove = require('./script');

describe('Verifica se a função myRemove está funcionando de acordo com o esperado', () => {
  it('Verifica se myRemove é uma função', () => {
    expect(typeof myRemove).toBe('function')
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});