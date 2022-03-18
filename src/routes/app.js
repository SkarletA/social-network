/* eslint import/no-cycle: [, { maxDepth: 1 }] */
import home from '../components/home.js';
import login from '../components/login.js';
import profile from '../components/profile.js';

const routes = {
  '/': login,
  '/home': home,
  '/profile': profile,
};
const rootDiv = document.getElementById('root');

export function onNavigate(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = null;
  rootDiv.appendChild(routes[pathname]());
}

window.onpopstate = () => {
  rootDiv.innerHTML = null;
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.innerHTML = null;
rootDiv.appendChild(routes[window.location.pathname]());
