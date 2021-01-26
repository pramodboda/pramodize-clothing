import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyBqcnZMAagqDBWlXCFdq9GJVfAH2Il0sgQ",
    authDomain: "pramod-clothing.firebaseapp.com",
    projectId: "pramod-clothing",
    storageBucket: "pramod-clothing.appspot.com",
    messagingSenderId: "315835847949",
    appId: "1:315835847949:web:b8934d964618c731328c44"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });


  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;