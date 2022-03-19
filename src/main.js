// Este es el punto de entrada de tu aplicacion
/* import {
  loginGoogle, registerUser, loginUser, loginUserProfile, updateUsers, activeSession, logOut,
} from './auth.js'; */
// import { onNavigate } from './routes/app.js';
/* import {
  savePost, onGetPosts, deletePost, getPost, updatePost,
} from './firestore.js'; */
import { activeSession } from './auth.js';
// import { getUser, updateUser } from './user-firestore.js';
/* import { listPosts } from './components/posts.js'; */

// import { myFunction } from './lib/index.js';

activeSession();

// Sección de Listar post (Delete, Edit)
/* export function listPosts() {
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
      <div class="post-container-card">
        <p>${post.message}</p>
        <div class="post-container-btn">
          <button class="btn btn-primary btn-likes" data-id="${doc.id}">
            <img class="icon-likes" src='https://svgshare.com/i/fEh.svg' title='corazon sin rellenar' />
          </button>
          <button class="btn-primary btn-delete" data-id="${doc.id}">
            🗑 Borrar
          </button>
          <button class="btn-secondary btn-edit" data-id="${doc.id}">
            🖉 Editar
          </button>
        </div>
      </div>
      `;
    });

    // like a post
    //
    const btnsLikes = document.querySelectorAll('.btn-likes');
    btnsLikes.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        const postId = dataset.id;
        const postData = await getPost(postId);
        let likes = postData.data().likes;
        likes += 1;
        updatePost(postId, { likes });
      });
    });

    // Borramos un post
    const btnsDelete = postContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => btn.addEventListener('click', async ({ target: { dataset } }) => {
      try {
        if (window.confirm('Estas seguro de que quieres eliminar este post?')) {
          await deletePost(dataset.id);
        }
      } catch (error) {
        console.log(error);
      }
    }));

    // Editamos el post
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

  // Enviamos el post
  formHome.addEventListener('submit', async (e) => {
    e.preventDefault();
    const textArea = formHome['description-posts'];
    const uid = localStorage.getItem('userId');

    try {
      if (!editStatus) {
        await savePost(textArea.value, uid);
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
 */

// export async function updateProfileUsers() {
//   const containerProfileUsers = document.getElementById('containerProfileUsers');
//   const formProfile = document.getElementById('formProfile');
//   const uid = localStorage.getItem('userId');

//   if (uid) {
//     const docUser = await getUser(uid);
//     const userName = docUser.data().userName;
//     const userLastName = docUser.data().userLastName;
//     const dateOfBirth = docUser.data().date;

//     containerProfileUsers.innerHTML = `
//       <p>${userName} ${userLastName} </p>
//       <p>${dateOfBirth}</p>
//     `;

//     formProfile.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       const infoProfile = document.createElement('div');
//       infoProfile.classList.add('information-profile');

//       const image = formProfile['photo-user'].value;
//       const profession = formProfile['user-profession'].value;
//       const hobbie = formProfile['user-hobbie'].value;
//       const aboutMe = formProfile['user-about-me'].value;
//       await updateUser(uid, {
//         image,
//         profession,
//         hobbie,
//         aboutMe,
//       });
//       infoProfile.innerHTML = `
//       <p>${profession}</p>
//       <p>${hobbie}</p>
//       <p>${aboutMe}</p>
//       `;
//       containerProfileUsers.appendChild(infoProfile);
//       formProfile.reset();
//     });
//   } else {
//     console.log('User no Existe');
//   }
// }
