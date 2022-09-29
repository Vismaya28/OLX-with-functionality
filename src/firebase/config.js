import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2uC5RwO5j9dqSqDzBbc2mX5AvTZE2aOk",
  authDomain: "olx-clone-6091b.firebaseapp.com",
  projectId: "olx-clone-6091b",
  storageBucket: "olx-clone-6091b.appspot.com",
  messagingSenderId: "601225292401",
  appId: "1:601225292401:web:cbd2a47224c4166ad2c9d0",
  measurementId: "G-WD7MW54CHD"
};

 export default firebase.initializeApp(firebaseConfig)