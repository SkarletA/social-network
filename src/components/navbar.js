/* eslint import/no-cycle: [, { maxDepth: 1 }] */
import { onNavigate } from '../routes/app.js';
import { logOut } from '../auth.js';
// import profile from './profile.js';

export default function loadNavbar() {
  const navbar = document.createElement('navbar');
  navbar.classList.add('nav-bar');
  const navbarContainer = document.createElement('div');
  navbarContainer.classList.add('nav-bar-container');
  const formSearch = document.createElement('form');
  formSearch.classList.add('search-bar');
  const inputSearch = document.createElement('input');
  inputSearch.classList.add('search-in');
  inputSearch.type = 'text';
  inputSearch.placeholder = 'Buscar en Mapask';
  const imgSearch = document.createElement('img');
  imgSearch.classList.add('search');
  imgSearch.src = 'https://svgshare.com/i/fAN.svg';
  imgSearch.title = 'Search';
  const iconMapask = document.createElement('ul');
  iconMapask.classList.add('icon-home');
  const listMapask = document.createElement('li');
  const mapask = document.createElement('a');
  mapask.dataset.path = '/home';
  mapask.id = 'home';
  const imgMapask = document.createElement('img');
  imgMapask.classList.add('mapask');
  imgMapask.src = 'https://svgshare.com/i/f6U.svg';
  imgMapask.title = 'Home';
  const listIcons = document.createElement('ul');
  listIcons.classList.add('icons-bar');
  const listLogOut = document.createElement('li');
  const logOutBtn = document.createElement('a');
  logOutBtn.id = 'logOut';
  logOutBtn.dataset.path = '/';
  const imgLogOut = document.createElement('img');
  imgLogOut.src = 'https://svgshare.com/i/fAy.svg';
  imgLogOut.title = 'LogOut';
  imgLogOut.classList.add('log-out');
  const listHome = document.createElement('li');
  const home = document.createElement('a');
  home.dataset.path = '/home';
  home.id = 'home';
  const homeImg = document.createElement('img');
  homeImg.classList.add('home');
  homeImg.src = 'https://svgshare.com/i/fEX.svg';
  homeImg.title = 'Home';
  const listProfile = document.createElement('li');
  const profile = document.createElement('a');
  profile.dataset.path = '/profile';
  profile.id = 'profileBtn';
  const profileImg = document.createElement('img');
  profileImg.classList.add('img-profile');
  profileImg.src = 'https://svgshare.com/i/f5r.svg';
  profileImg.title = 'Profile';

  profile.appendChild(profileImg);
  listProfile.appendChild(profile);
  home.appendChild(homeImg);
  listHome.appendChild(home);
  logOutBtn.appendChild(imgLogOut);
  listLogOut.appendChild(logOutBtn);
  listIcons.appendChild(listLogOut);
  listIcons.appendChild(listHome);
  listIcons.appendChild(listProfile);

  mapask.appendChild(imgMapask);
  listMapask.appendChild(mapask);
  iconMapask.appendChild(listMapask);

  formSearch.appendChild(inputSearch);
  formSearch.appendChild(imgSearch);

  navbarContainer.appendChild(formSearch);
  navbarContainer.appendChild(iconMapask);
  navbarContainer.appendChild(listIcons);

  navbar.appendChild(navbarContainer);

  logOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    onNavigate('/');
  });

  home.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home');
  });

  profile.addEventListener('click', (e) => {
    e.preventDefault();
    // profile();
    onNavigate('/profile');
  });

  return navbar;
}
