import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  //   signOut,
  /* eslint import/no-unresolved: */
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

import initApp from './initApp.js';

initApp();

const auth = getAuth();
const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export async function loginGoogle() {
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
    });
}

export async function registerUser(email, password) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
    });
}

export async function loginUser(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
    });
}
