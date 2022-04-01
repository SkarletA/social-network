/**
 * @jest-environment jsdom
*/
import loadNavbar from '../../src/components/navbar.js';
import { logOut } from '../../src/auth.js';

jest.mock('../../src/firebase.js');

describe('loadNavbar', () => {
  const result = loadNavbar();
  it('loadNabvar deberia devolver un contenedor', () => {
    expect(result.tagName).toBe('NAVBAR');
  });

  it('Debería cerrar la sesión del usuario', async () => {
    const loginOut = await logOut();
    expect(loginOut).toBe(true);
  });

  it('Debería devolver un false al no cerrar sesión correctamente', async () => {
    try {
      await logOut();
    } catch (error) {
      expect(error).toMatch(false);
    }
  });
});
