import { register } from '../../src/components/register.js';

// jest.mock('../src/firebase.js');
jest.mock('../../src/firebase.js');

describe('register', () => {
  it('deberia dar un error si las contraseñas no coinciden', () => {
    const result = register();
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
});

// /src/firebase.js

// /src/_mocks_/firebase.js
