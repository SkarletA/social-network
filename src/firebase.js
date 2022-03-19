export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
export {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  /* eslint import/no-unresolved: */
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

export {
  deleteDoc,
  getDocs,
  onSnapshot,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
