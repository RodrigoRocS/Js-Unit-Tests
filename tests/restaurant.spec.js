const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/
const menu = {
  food: {'coxinha': 3.90, 'sopa': 9.90},
  drinks: {'agua': 3.90, 'cerveja': 6.90}};
const menuReturn = createMenu(menu);
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {

  
  it('Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    expect(typeof createMenu()).toBe('object')
    expect(typeof createMenu().fetchMenu).toBe('function')
  })
  it('Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`', () => {
    expect(Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu())).toEqual(['food', 'drink'])
  })
  it('Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função "objetoRetornado.fetchMenu()"', () => {
    expect(menu).toEqual(createMenu(menu).fetchMenu())
  })
  it('Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
    expect(menuReturn.consumption).toEqual([])
  })
  it('Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
    expect(menuReturn.consumption).toEqual([])
  })
  describe('Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro', () => {
    it('se a string existir nas chaves "food" ou "drink", deve ser adicionada ao array consumption', () => {
      menuReturn.order('coxinha');
      expect(menuReturn.consumption).toEqual(['coxinha'])
    })
    it('se a string existir nas chaves "food" ou "drink", deve ser adicionada ao array consumption', () => {
      expect(() => {menuReturn.order('bolovo')}).toThrow(new Error
        ('Item indisponível'))
    })
  })
  it('Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    menuReturn.order('sopa');
    menuReturn.order('cerveja');
    expect(menuReturn.consumption).toEqual(['coxinha', 'sopa', 'cerveja'])
  })
  it('Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    menuReturn.order('sopa');
    expect(menuReturn.consumption).toEqual(['coxinha', 'sopa', 'cerveja', 'sopa'])
  })
  it('Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.', () => {
    expect(menuReturn.pay()).toBeCloseTo(33.66)
  })

    // 11: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.

    // 12: Faça a implementação do item 12 do README no arquivo src/restaurant.js.

  
});
