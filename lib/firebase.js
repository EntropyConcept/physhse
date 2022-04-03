import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD_lYBoq_LBjE_h9r_RfApS8UPpWcueNnU",
    authDomain: "apt-theme-304410.firebaseapp.com",
    projectId: "apt-theme-304410",
    storageBucket: "apt-theme-304410.appspot.com",
    messagingSenderId: "74401086038",
    appId: "1:74401086038:web:74f04eadbcb5345e6859f7",
    measurementId: "G-VB6XNE2WH9"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
