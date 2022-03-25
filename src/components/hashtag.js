/* eslint-disable import/no-cycle */
import { popUpDelete } from './popDelete.js';

export default function loadHashtag() {
  const hashContainer = document.createElement('div');
  hashContainer.classList.add('hashContainer');
  const banner = document.createElement('div');
  banner.classList.add('bannerHash');
  banner.innerText = 'Lo más hablado esta semana';
  const hashtagJs = document.createElement('a');
  hashtagJs.classList.add('hashText');
  hashtagJs.innerText = '#Javascript';
  const hashtagCss = document.createElement('a');
  hashtagCss.innerText = '#CSS';
  hashtagCss.classList.add('hashText');
  const hashtagFirebase = document.createElement('a');
  hashtagFirebase.innerText = '#Firebase';
  hashtagFirebase.classList.add('hashText');
  const hashtagReact = document.createElement('a');
  hashtagReact.innerText = '#React';
  hashtagReact.classList.add('hashText');
  hashContainer.appendChild(banner);
  hashContainer.appendChild(hashtagJs);
  hashContainer.appendChild(hashtagCss);
  hashContainer.appendChild(hashtagFirebase);
  hashContainer.appendChild(hashtagReact);
  return hashContainer;
}
