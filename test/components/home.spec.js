import home from '../../src/views/home.js';

jest.mock('../../src/firebase.js');

describe('home', () => {
  const result = home();
  it('home deberia ser una funcion', () => {
    expect(typeof home).toBe('function');
  });

  it('Home deberia devolver un contenedor de tipo section', () => {
    expect(result.tagName).toBe('SECTION');
  });
});
