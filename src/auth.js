/* eslint-disable no-unused-vars */
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  //   signOut,
  /* eslint import/no-unresolved: */
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

import initApp from './initApp.js';

// Iniciar Firebase
initApp();
const auth = getAuth();
const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export async function loginGoogle() {
  let results;
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      results = result;
    })
    .catch((error) => {
      const errorMsg = error.message;
      results = false;
    });
  return results;
}

export async function registerUser(email, password) {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
    });
  return user;
}

export async function updateUsers(name) {
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
}

export async function loginUser(email, password) {
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      user = null;
    });
  return user;
}

export function loginUserProfile() {
  const user = auth.currentUser;
  let userValues;
  if (user !== null) {
    userValues = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      uid: user.uid,
    };
  }
  return userValues;
}
