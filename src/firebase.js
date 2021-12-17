import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBT7_TYgr-X6hHUHbePE1nSZF6xCqhJlSs",
    authDomain: "facebook-clone-1a6e9.firebaseapp.com",
    projectId: "facebook-clone-1a6e9",
    storageBucket: "facebook-clone-1a6e9.appspot.com",
    messagingSenderId: "990456776249",
    appId: "1:990456776249:web:edd867f3a763c1d7f02fe8",
    measurementId: "G-Z05KDFBHT5"
  };

 // Initialize Firebase 

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export default firebase;



  // const firebaseApp = firebase.initializedApp(firebaseConfig);
  // const auth =firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();
  // export {auth, provider};
  // export default db;
