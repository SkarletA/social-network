/* eslint import/no-unresolved: */
import {
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  // setDoc,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

// Iniciar Firestore
const db = getFirestore();

export const savePost = (message) => addDoc(collection(db, 'posts'), { message });

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, updatedPost) => updateDoc(doc(db, 'posts', id), updatedPost);

export const getPosts = () => getDocs(collection(db, 'posts'));
