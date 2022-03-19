/* eslint-disable import/no-cycle */
import loadNavbar from '../components/navbar.js';
import { updateUser, getUser } from '../user-firestore.js';

export default function profile() {
  const container = document.createElement('div');
  // seccion del contenedor del perfil
  const profileContent = document.createElement('section');
  profileContent.classList.add('container-profile');
  // aside principal
  const asidePrimary = document.createElement('aside');
  asidePrimary.classList.add('profile-primary');
  // contenedor de la informacion del perfil del usuario
  const containerPorfileUsers = document.createElement('section');
  containerPorfileUsers.classList.add('container-profile-users');
  containerPorfileUsers.id = 'containerProfileUsers';
  // boton de actualizar datos
  const btnUpdate = document.createElement('button');
  btnUpdate.classList.add('btn-update');
  btnUpdate.id = 'btnUpdate';
  btnUpdate.innerText = 'Actualizar datos';
  // overlay para mostrar los datos actualizar
  const overlayProfile = document.createElement('section');
  overlayProfile.classList.add('overlayProfile');
  const divProfile = document.createElement('div');
  divProfile.classList.add('contenedor-profile');
  // formulario de los datos personales del usuario
  const formProfile = document.createElement('form');
  formProfile.id = 'formProfile';
  formProfile.classList.add('form-Profile');
  // input imagen
  const inputImage = document.createElement('input');
  inputImage.type = 'file';
  inputImage.id = 'photo-user';
  inputImage.name = 'photo-user';
  // input profesion
  const inputProfession = document.createElement('input');
  inputProfession.type = 'text';
  inputProfession.id = 'userProfession';
  inputProfession.name = 'user-profession';
  inputProfession.classList.add('input');
  inputProfession.placeholder = 'Profesion: ';
  // input hobbie
  const inputHobbie = document.createElement('input');
  inputHobbie.type = 'text';
  inputHobbie.id = 'userHobbie';
  inputHobbie.name = 'user-hobbie';
  inputHobbie.classList.add('input');
  inputHobbie.placeholder = 'Me gusta: ';
  const inputAboutMe = document.createElement('input'); inputImage.type = 'file';
  inputAboutMe.id = 'userAboutMe';
  inputAboutMe.type = 'text';
  inputAboutMe.name = 'user-about-me';
  inputAboutMe.classList.add('input');
  inputAboutMe.placeholder = 'Sobre mi: ';
  // boton guardar datos de usuario
  const btnSaveInfo = document.createElement('button');
  btnSaveInfo.type = 'submit';
  btnSaveInfo.id = 'btnUpdateDats';
  btnSaveInfo.classList.add('button');
  btnSaveInfo.classList.add('btn-updateDats');
  btnSaveInfo.innerText = 'Guardar datos';
  // seccion de los post de usuarios
  const sectionPosts = document.createElement('section');
  sectionPosts.classList.add('post-user');

  const asideSecond = document.createElement('aside');
  asideSecond.classList.add('hash-secundary');

  asidePrimary.appendChild(containerPorfileUsers);
  containerPorfileUsers.appendChild(btnUpdate);
  containerPorfileUsers.appendChild(overlayProfile);

  overlayProfile.appendChild(divProfile);

  divProfile.appendChild(formProfile);

  formProfile.appendChild(inputImage);
  formProfile.appendChild(inputProfession);
  formProfile.appendChild(inputHobbie);
  formProfile.appendChild(inputAboutMe);
  formProfile.appendChild(btnSaveInfo);

  profileContent.appendChild(asidePrimary);
  profileContent.appendChild(sectionPosts);
  profileContent.appendChild(asideSecond);

  container.appendChild(loadNavbar());
  container.appendChild(profileContent);

  const uid = localStorage.getItem('userId');
  // btnUpdate.addEventListener('click', async () => {
  //   const docUser = await saveDataUser(uid);
  // });
  async function loadProfile(userId) {
    if (userId) {
      const docUser = await getUser(userId);
      const userName = docUser.data().userName;
      const userLastName = docUser.data().userLastName;
      const dateOfBirth = docUser.data().date;
      const infoUserName = document.createElement('p');
      infoUserName.innerText = `${userName} ${userLastName} `;

      const infoDateOfBirth = document.createElement('p');
      infoDateOfBirth.innerText = `${dateOfBirth}`;

      containerPorfileUsers.appendChild(infoUserName);
      containerPorfileUsers.appendChild(infoDateOfBirth);

      formProfile.addEventListener('submit', async (e) => {
        e.preventDefault();
        const infoProfile = document.createElement('div');
        infoProfile.classList.add('information-profile');

        const image = inputImage.value;
        const profession = inputProfession.value;
        const hobbie = inputHobbie.value;
        const aboutMe = inputAboutMe.value;
        await updateUser(userId, {
          image,
          profession,
          hobbie,
          aboutMe,
        });

        const infoProfession = document.createElement('p');
        infoProfession.innerText = `${profession}`;

        const infoHobbie = document.createElement('p');
        infoHobbie.innerText = `${hobbie}`;

        const infoAboutMe = document.createElement('p');
        infoAboutMe.innerText = `${aboutMe}`;

        infoProfile.appendChild(infoProfession);
        infoProfile.appendChild(infoHobbie);
        infoProfile.appendChild(infoAboutMe);

        containerPorfileUsers.appendChild(infoProfile);
        formProfile.reset();
      });
    }// else {

    // }
  } loadProfile(uid);
  return container;
  // loadProfile(uid);
}
