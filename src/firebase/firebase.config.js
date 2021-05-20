import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Config = {
  apiKey: 'AIzaSyBSGzWAE1oo28btilI6VWiGormC-UvgMC8',
  authDomain: 'authentication-8037d.firebaseapp.com',
  databaseURL: 'https://authentication-8037d-default-rtdb.firebaseio.com',
  projectId: 'authentication-8037d',
  storageBucket: 'authentication-8037d.appspot.com',
  messagingSenderId: '84310856969',
  appId: '1:84310856969:web:020d97932667d849b2efd8',
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
