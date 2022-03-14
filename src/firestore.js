/* eslint import/no-unresolved: */
import {
  getFirestore,
  // doc,
  // deleteDoc,
  // updateDoc,
  // getDocs,
  // setDoc,
  // onSnapshot,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

// Iniciar Firestore
const db = getFirestore();

export function createPost(message) {
  const msgData = { message };
  addDoc(collection(db, 'posts'), msgData);
}
