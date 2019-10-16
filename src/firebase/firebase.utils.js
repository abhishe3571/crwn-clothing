import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCh4F7I4sHdl5V8D6CGpskPboVR7f_pzhY",
    authDomain: "crwn-db-9819d.firebaseapp.com",
    databaseURL: "https://crwn-db-9819d.firebaseio.com",
    projectId: "crwn-db-9819d",
    storageBucket: "crwn-db-9819d.appspot.com",
    messagingSenderId: "777938036609",
    appId: "1:777938036609:web:53ebeffefc8367fd776a80",
    measurementId: "G-JRFRDVVTXD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;