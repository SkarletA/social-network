// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

// Constante de validacion de correo y constraseña
const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
const expPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
const alertEmail = document.querySelector('.container-email');
const alertPassword = document.querySelector('.container-password');

// constantes de popup
const btnRegistrarte = document.querySelector('#linkRegistration');
const cerrarPopup = document.querySelector('#btnCerrarPopup');
const overlay = document.querySelector('#overlay');
overlay.style.visibility = 'hidden';

btnRegistrarte.addEventListener('click', () => {
  overlay.style.visibility = 'visible';
});

cerrarPopup.addEventListener('click', () => {
  overlay.style.visibility = 'hidden';
});

document.querySelector('#btnLogin').addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('#inputEmail').value;
  const password = document.querySelector('#inputPassword').value;

  if (expEmail.test(email)) {
    console.log('email válido');
  } else {
    alertEmail.innerHTML = '<span class="red"> Correo inválido </span>';
  }

  if (expPassword.test(password)) {
    console.log('password válido');
  } else {
    alertPassword.innerHTML = '<span class="red"> Constraseña inválido </span>';
  }
});

myFunction();
