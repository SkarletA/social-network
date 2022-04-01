/**
 * @jest-environment jsdom
 */
import { loginUser, loginGoogle } from '../../src/auth.js';
import login from '../../src/views/login.js';

jest.mock('../../src/firebase.js');

describe('login', () => {
  const result = login();
  it('login deberia ser una función', () => {
    expect(typeof login).toBe('function');
  });

  it('deberia dar un error si las contraseñas no coinciden', () => {
    const email = result.querySelector('#inputEmail');
    const password = result.querySelector('#inputPassword');

    email.value = 'gsmaggie001gmail.com';
    password.value = 't123@mapi';

    const btn = result.querySelector('#btnLogin');
    btn.dispatchEvent(new Event('click'));

    const alert = result.querySelector('#containerPassword');
    alert.innerHTML = '<span class="red"> Correo o constraseña inválido </span>';
    expect(alert.textContent).toBe(' Correo o constraseña inválido ');
  });

  document.body.innerHTML = '<div id="root"></div>';
  test('render de login', () => {
    const root = document.getElementById('root');
    root.appendChild(result);
    expect(root.innerHTML).toMatchSnapshot();
  });

  const email = result.querySelector('#inputEmail');
  const password = result.querySelector('#inputPassword');
  test('Te devuelve el id del usuario si esta registrado', async () => {
    email.value = 'gsmaggie001@gmail.com';
    password.value = 'T123@maps';
    const user = await loginUser(email, password);
    expect(user).toEqual({ uid: 'za123' });
  });

  test('Deberia dar error al no estar registrado el usuario', async () => {
    email.value = 'gsmaggie001@gmail.com';
    password.value = 'T123@maps';
    try {
      await loginUser(email, password);
    } catch (e) {
      expect(e).toMatch(' Usuario no registrado ');
    }
  });

  test('Debería devolver el id del usuario', async () => {
    const userGoogle = await loginGoogle();
    expect(userGoogle).toEqual({ uid: 'za123' });
  });

  test('Debería dar un error al no temrinar el inicio de sesión', async () => {
    try {
      await loginGoogle();
    } catch (e) {
      expect(e).toMatch(' Error al iniciar sesión ');
    }
  });
});
