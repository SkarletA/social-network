import profile from '../../src/views/profile.js';

jest.mock('../../src/firebase.js');

describe('profile', () => {
  // const result = profile()
  it('deberia devolver un contenedor', () => {
    expect(typeof profile).toBe('function');
  });

  /* document.body.innerHTML = '<div id="root"></div>';
  it('Deberia renderizar profile', () => {
    const root = document.getElementById('root');
    root.appendChild(result);
    expect(root.innerHTML).toMatchSnapshot();
  }); */

  /* it('Deberia retornar el objeto autenticado', () => {
    const id = 'zysf456';
    const profiles = result.loadProfile(id);
    expect(typeof profiles).toBe('function');
  }); */
});
