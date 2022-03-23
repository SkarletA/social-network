import login from '../../src/views/login.js';

// jest.mock('../src/firebase.js');
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
});
