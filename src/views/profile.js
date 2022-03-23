/* eslint-disable import/no-cycle */
import loadNavbar from '../components/navbar.js';
import { listPostsUser } from '../components/postsuser.js';
import { popUpUser } from '../components/popUser.js';
import { getUser } from '../user-firestore.js';

export default function profile() {
  const container = document.createElement('div');
  container.classList.add('container-profile');
  // seccion del contenedor del perfil
  const profileContent = document.createElement('section');
  profileContent.classList.add('container-sections');

  // aside izquierdo
  const asidePrimary = document.createElement('aside');
  asidePrimary.classList.add('hash-second');

  // -----> seccion principal del perfil (post de usuarios)
  const sectionPosts = document.createElement('section');
  sectionPosts.classList.add('post-user');

  // Form de enviar y actualizar post
  const formHome = document.createElement('form');
  formHome.classList.add('form-home');
  formHome.id = 'formHome';

  // TextArea del form
  const textAreaFormHome = document.createElement('textArea');
  textAreaFormHome.classList.add('description-Posts');
  textAreaFormHome.id = 'descriptionPosts';
  textAreaFormHome.name = 'description-posts';
  textAreaFormHome.placeholder = '¿Sobre que quieres hablar?';

  // Boton del form enviar post
  const btnSendPost = document.createElement('button');
  btnSendPost.type = 'submit';
  btnSendPost.classList.add('btn-post');
  btnSendPost.id = 'btnPost';
  btnSendPost.innerText = 'Publicar';
  formHome.appendChild(textAreaFormHome);
  formHome.appendChild(btnSendPost);

  // Agregando el form a la Sección principal
  sectionPosts.appendChild(formHome);
  sectionPosts.appendChild(listPostsUser(formHome, btnSendPost));

  // Seccion del post container (contiene los posts)
  const sectionPostsContainer = document.createElement('section');
  sectionPostsContainer.classList.add('post-container');
  sectionPostsContainer.id = 'postContainer';
  sectionPosts.appendChild(sectionPostsContainer);
  container.appendChild(sectionPosts);

  // Aside Derecho
  const asideSecond = document.createElement('aside');
  asideSecond.classList.add('profile-primary');

  // contenedor de la informacion del perfil del usuario
  const containerProfileUsers = document.createElement('section');
  containerProfileUsers.classList.add('container-profile-users');
  containerProfileUsers.id = 'containerProfileUsers';

  // boton de actualizar datos
  const btnUpdate = document.createElement('button');
  btnUpdate.classList.add('btn-update');
  btnUpdate.classList.add('button');
  btnUpdate.id = 'btnUpdate';
  btnUpdate.innerText = 'Actualizar datos';

  // asideSecond.appendChild(dataUser());

  asideSecond.appendChild(containerProfileUsers);

  profileContent.appendChild(asidePrimary);
  profileContent.appendChild(sectionPosts);
  profileContent.appendChild(asideSecond);

  container.appendChild(loadNavbar());
  container.appendChild(profileContent);

  const uid = localStorage.getItem('userId');

  async function loadProfile(userId) {
    if (userId) {
      const docUser = await getUser(userId);
      const userName = docUser.data().userName;
      const userLastName = docUser.data().userLastName;
      const dateOfBirth = docUser.data().date;
      const profession = docUser.data().profession;
      const hobbie = docUser.data().hobbie;
      const aboutMe = docUser.data().aboutMe;
      const infoUserName = document.createElement('p');
      infoUserName.innerText = `${userName} ${userLastName} `;

      const infoDateOfBirth = document.createElement('p');
      infoDateOfBirth.innerText = `${dateOfBirth}`;

      const infoProfession = document.createElement('p');
      infoProfession.innerText = `${profession}`;

      const infoHobbie = document.createElement('p');
      infoHobbie.innerText = `${hobbie}`;

      const infoAboutMe = document.createElement('p');
      infoAboutMe.innerText = `${aboutMe}`;

      containerProfileUsers.appendChild(infoUserName);
      containerProfileUsers.appendChild(infoDateOfBirth);
      containerProfileUsers.appendChild(infoProfession);
      containerProfileUsers.appendChild(infoHobbie);
      containerProfileUsers.appendChild(infoAboutMe);
    }
  } loadProfile(uid);

  containerProfileUsers.appendChild(btnUpdate);
  btnUpdate.addEventListener('click', () => container.appendChild(popUpUser()));
  return container;
}
