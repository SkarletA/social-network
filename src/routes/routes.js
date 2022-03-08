/* eslint-disable func-call-spacing */
/* eslint-disable indent */
/* eslint import/no-unresolved: */
import { loginGoogle } from '../auth.js';
import { home } from '../components/home.js';

// const paths = {
//   home: '/',
//   profile: '/profile',
// };

// const divRoot = document.getElementById('home');
// divRoot.innerHTML = paths[window.location.pathname];

// const onNavigate = (e) => {
//   console.log(e);
//   window.history.pushState({}, e, window.location.href + e);
//   divRoot.innerHTML = paths[e];
// };

// window.onpopstate = () => {
//   divRoot.innerHTML = paths[window.location.pathname];
// };

function route() {
  const { hash } = location;
  const divRoot = document.getElementById('root');
  divRoot.innerHTML = null;
  // navBar();
  if (!hash) {
    console.log('hola');
    // login();
  }
  if (hash === '#/home') {
    divRoot.appendChild(home());
  }
  if (hash === '/#profile') {
    // profile();
  }
}

window.addEventListener('hashchange', route);
route();
