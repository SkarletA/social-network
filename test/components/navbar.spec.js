import loadNavbar from '../../src/components/navbar.js';
// import { onNavigate } from '../../src/routes/app.js';

jest.mock('../../src/firebase.js');

describe('loadNavbar', () => {
  const result = loadNavbar();
  it('loadNabvar deberia devolver un contenedor', () => {
    // const containerNavbar = result.querySelector('.nav-bar');
    expect(result.tagName).toBe('NAVBAR');
  });

  /* it('Deberia enviar a home', () => {
    const link = result.querySelector('#home');
    link.dispatchEvent(new Event('click'));
    const funcionCall = onNavigate('/home');
    // const pathname = '/home';
    expect(funcionCall).toBeCalled();
  }); */
});
