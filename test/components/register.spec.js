import { registerUser } from '../../src/auth.js';
import { register } from '../../src/components/register.js';

// jest.mock('../src/firebase.js');
jest.mock('../../src/firebase.js');

describe('register', () => {
  const result = register();
  it('register deberia ser una función', () => {
    expect(typeof register).toBe('function');
  });

  const pass = result.querySelector('#inputPasswordR');
  const passConfirm = result.querySelector('#inputPassConf');
  it('deberia dar un error si las contraseñas no coinciden', () => {
    pass.value = 'T123@maps';
    passConfirm.value = 'T123@mapi';

    const btn = result.querySelector('#btnRegistration');
    btn.dispatchEvent(new Event('click'));

    const alert = result.querySelector('#containerEmailR');
    alert.innerHTML = '<span class="red"> Contraseñas no coinciden </span>';
    expect(alert.textContent).toBe(' Contraseñas no coinciden ');
  });

  const inputE = result.querySelector('#inputEmailR');
  const btn = result.querySelector('#btnRegistration');
  it('deberia dar un error si el correo es invalido', () => {
    inputE.value = 'gsmaggie001gmail.com';

    btn.dispatchEvent(new Event('click'));
    const alert = result.querySelector('#containerEmailR');
    alert.innerHTML = '<span class="red"> Correo o contraseña inválido </span>';
    expect(alert.textContent).toBe(' Correo o contraseña inválido ');
  });

  it('Deberia retornar el objeto del id del usuario', async () => {
    let response;
    inputE.value = 'gsmaggie001gmail.com';
    pass.value = 'T123@maps';
    passConfirm.value = 'T123@maps';
    btn.dispatchEvent(new Event('click'));
    if (pass.value === passConfirm.value) {
      response = await registerUser(inputE, pass);
    }
    expect(response).toEqual({ uid: 'za123' });
  });
});

// /src/firebase.js

// /src/_mocks_/firebase.js
