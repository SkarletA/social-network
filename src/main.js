// Este es el punto de entrada de tu aplicacion
import { loginGoogle, registerUser, loginUser } from './auth.js';
import { onNavigate } from './components/app.js';
import {
  savePost, onGetPosts, deletePost, getPost, updatePost,
} from './firestore.js';

// import { myFunction } from './lib/index.js';

// Constante de validacion de correo y constraseña
const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
const alertEmailPassword = document.querySelector('#containerPassword');
const alertEmailR = document.querySelector('#containerEmailR');
const alertGoogle = document.getElementById('alertGoogle');

// constantes de popup
const linkRegistration = document.querySelector('#linkRegistration');
const cerrarPopup = document.querySelector('#btnCerrarPopup');
const overlay = document.querySelector('#overlay');
const inputEmail = document.querySelector('#inputEmailR');
const inputPassword = document.querySelector('#inputPasswordR');
const inputPassConfirm = document.querySelector('#inputPassConf');
const btnRegistration = document.querySelector('#btnRegistration');

// Fución que crea los posts
/* function submitPost() {
  formHome.addEventListener('submit', (e) => {
    e.preventDefault();
    const textArea = formHome['description-posts'];
    savePost(textArea.value);
    formHome.reset();
  });
} */

// Sección de Listar post (Delete, Edit)
function listPosts() {
  const formHome = document.getElementById('formHome');
  const postContainer = document.getElementById('postContainer');
  const btnPost = document.getElementById('btnPost');

  let editStatus = false;
  let id = '';

  onGetPosts((querySnapshot) => {
    postContainer.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();

      postContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
      <p>${post.message}</p>
      <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
      </div>
      `;
    });

    const btnsDelete = postContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => btn.addEventListener('click', async ({ target: { dataset } }) => {
      try {
        await deletePost(dataset.id);
      } catch (error) {
        console.log(error);
      }
    }));

    const btnsEdit = postContainer.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => btn.addEventListener('click', async (e) => {
      try {
        const doc = await getPost(e.target.dataset.id);
        const post = doc.data();
        formHome['description-posts'].value = post.message;
        console.log(formHome['btn-post']);

        editStatus = true;
        id = doc.id;
        btnPost.innerHTML = 'Guardar';
        // formHome['btn-post'] = 'update';
      } catch (error) {
        console.log(error);
      }
    }));
  });

  formHome.addEventListener('submit', async (e) => {
    e.preventDefault();
    const textArea = formHome['description-posts'];

    try {
      if (!editStatus) {
        await savePost(textArea.value);
      } else {
        await updatePost(id, {
          message: textArea.value,
        });

        editStatus = false;
        id = '';
        btnPost.innerHTML = 'Publicar';
        // formHome['btn-post'] = 'publicar';
      }

      formHome.reset();
    } catch (error) {
      console.log(error);
    }
  });
}

if (document.querySelector('.login')) {
  const linkHome = document.getElementById('navHome');
  linkHome.addEventListener('click', () => {
    onNavigate('/home');
    listPosts();
  });

  const linkProfile = document.getElementById('navProfile');
  linkProfile.addEventListener('click', () => {
    onNavigate('/profile');
  });

  // Seccion registrarse
  linkRegistration.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });

  cerrarPopup.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  btnRegistration.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      expEmail.test(inputEmail.value)
      && expPassword.test(inputPassword.value)
      && expPassword.test(inputPassConfirm.value)
    ) {
      if (inputPassword.value === inputPassConfirm.value) {
        registerUser(inputEmail.value, inputPassword.value);
        onNavigate('/home');
        // window.location.href = '/home';
      } else {
        alertEmailR.innerHTML = '<span class="red"> Contraseñas no coinciden </span>';
      }
    } else {
      alertEmailR.innerHTML = '<span class="red"> Correo o contraseña inválido </span>';
    }
  });

  // Seccion Iniciar sesion
  document.querySelector('#btnLogin').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;

    if (expEmail.test(email) && expPassword.test(password)) {
      const user = await loginUser(email, password);
      if (!user) {
        alertEmailPassword.innerHTML = '<span class="red"> Usuario no registrado </span>';
      } else {
        alertEmailPassword.innerHTML = '';
        onNavigate('/home');
        // window.location.href = '/home';
      }
    } else {
      alertEmailPassword.innerHTML = '<span class="red"> Correo o constraseña inválido </span>';
    }
  });

  // Seccion Boton de loguearse con google
  const btnLoginGoogle = document.getElementById('btnGoogle');
  btnLoginGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    const userGoogle = await loginGoogle();
    if (!userGoogle) {
      alertGoogle.innerHTML = '<span class="red"> Error al iniciar sesión </span>';
    } else {
      alertGoogle.innerHTML = '';
      onNavigate('/home');
      /* window.location.href = '/home'; */
    }
  });
} else {
  // document.querySelector('.login').innerHTML = '';
}

/* window.submitPost = function submitPost() {
  console.log('crear post');
  const formHome = document.getElementById('formHome');
  const textArea = formHome['description-posts'];
  savePost(textArea.value);
  formHome.reset();
};
 */
