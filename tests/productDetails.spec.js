const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se os dois productIds terminam com 123.
  });
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function')
  })
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true)
  })
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(Object.keys(productDetails('Alcool gel', 'Máscara'))).toHaveLength(2)
  })
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2)
  })
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object')
  })
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const objeto = productDetails('Alcool gel', 'Máscara');
    expect(objeto[0]).not.toEqual(objeto[1])
  })
  it('Teste se os dois productIds terminam com 123.', () => {
    const objeto = productDetails('Alcool gel', 'Máscara');
    expect(objeto[0].details.productId && objeto[1].details.productId).toMatch('123')
  })
});
  