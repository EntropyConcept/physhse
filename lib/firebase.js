import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {query, collection, where, getDocs} from "firebase/firestore"

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
export const Timestamp = firebase.firestore.Timestamp;
export const setDoc = firestore.setDoc;
export const doc = firestore.doc;
export const storage = firebase.storage()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const getHalfs = async (n) => {
  const q = query(collection(firestore, "courses"), where("year", "==", n), where("deleted", "==", false));
  const querySnapshot = await getDocs(q);
  let half1 = [];
  let half2 = [];
  querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.created = data.created.toDate().toString();
      console.log(data.created)
      if (data.half === 1) {
          half1.push(data);
      } else {
          half2.push(data);
      }
  });
  return {half1, half2}
} 