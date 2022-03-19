import {
  onGetPosts, deletePost, getPost, savePost, updatePost,
} from '../firestore.js';

export function listPosts(formHomeParam, btnPostParam) {
  const formHome = formHomeParam;
  const btnPost = btnPostParam;

  const postContainer = document.createElement('div');

  let editStatus = false;
  let id = '';

  onGetPosts((querySnapshot) => {
    postContainer.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();

      const postContainerCard = document.createElement('section');
      postContainerCard.classList.add('post-container-card');

      // Contenedor del parrafo del post
      const pPost = document.createElement('p');
      pPost.innerHTML = post.message;

      // -- Contenedor de botones
      const postContainerButtons = document.createElement('div');
      postContainerButtons.classList.add('post-container-btn');

      // Boton de Likes
      const btnLikePost = document.createElement('button');
      btnLikePost.classList.add('btn-likes');
      btnLikePost.setAttribute('data-id', doc.id);
      const imgButton = document.createElement('img');
      imgButton.classList.add('icon-likes');
      imgButton.setAttribute('data-id', doc.id);
      imgButton.title = 'corazon sin rellenar';
      imgButton.src = 'https://svgshare.com/i/fEh.svg';
      btnLikePost.appendChild(imgButton);

      // Boton de Borrar
      const btnDeletePost = document.createElement('button');
      btnDeletePost.classList.add('btn-delete');
      btnDeletePost.setAttribute('data-id', doc.id);
      btnDeletePost.innerHTML = '🗑 Delete';

      const btnEditPost = document.createElement('button');
      btnEditPost.classList.add('btn-edit');
      btnEditPost.setAttribute('data-id', doc.id);
      btnEditPost.innerHTML = '🖉 Edit';

      postContainerButtons.appendChild(btnLikePost);
      postContainerButtons.appendChild(btnDeletePost);
      postContainerButtons.appendChild(btnEditPost);

      // Agregar container p y container button a Container general
      postContainerCard.appendChild(pPost);
      postContainerCard.appendChild(postContainerButtons);

      postContainer.appendChild(postContainerCard);
    });

    // like a post
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

    // Borrar un post
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

        editStatus = true;
        id = doc.id;
        btnPost.innerHTML = 'Guardar';
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
      }

      formHome.reset();
    } catch (error) {
      console.log(error);
    }
  });
  return postContainer;
}
