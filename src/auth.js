import {
  getAuth,
  //    createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
