import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAssoArIJ8hdskT4t4VmRRvrAQru3WS0RQ",
    authDomain: "pramodize-clothing-db.firebaseapp.com",
    projectId: "pramodize-clothing-db",
    storageBucket: "pramodize-clothing-db.appspot.com",
    messagingSenderId: "567965769618",
    appId: "1:567965769618:web:d6ff6ff7021bfff5b22b4b"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  console.log(firestore.doc(`users/${userAuth.uid}`))

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;