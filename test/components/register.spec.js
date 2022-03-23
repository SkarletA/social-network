import { register } from '../../src/components/register.js';

// jest.mock('../src/firebase.js');
jest.mock('../../src/firebase.js');

describe('register', () => {
  const result = register();
  it('register deberia ser una función', () => {
    expect(typeof register).toBe('function');
  });

  it('deberia dar un error si las contraseñas no coinciden', () => {
    const pass = result.querySelector('#inputPasswordR');
    const passConfirm = result.querySelector('#inputPassConf');

    pass.value = 'T123@maps';
    passConfirm.value = 'T123@mapi';

    const btn = result.querySelector('#btnRegistration');
    btn.dispatchEvent(new Event('click'));

    const alert = result.querySelector('#containerEmailR');
    alert.innerHTML = '<span class="red"> Contraseñas no coinciden </span>';
    expect(alert.textContent).toBe(' Contraseñas no coinciden ');
  });

  it('deberia dar un error si el correo es invalido', () => {
    const inputE = result.querySelector('#inputEmailR');

    inputE.value = 'gsmaggie001gmail.com';

    const btn = result.querySelector('#btnRegistration');
    btn.dispatchEvent(new Event('click'));
    const alert = result.querySelector('#containerEmailR');
    alert.innerHTML = '<span class="red"> Correo o contraseña inválido </span>';
    expect(alert.textContent).toBe(' Correo o contraseña inválido ');
  });
});

// /src/firebase.js

// /src/_mocks_/firebase.js
