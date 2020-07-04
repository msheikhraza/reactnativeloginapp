import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKvqbiyse7R-IfRYaLjTTwaVjEHQ3sLms",
  authDomain: "expoclifirebase.firebaseapp.com",
  databaseURL: "https://expoclifirebase.firebaseio.com",
  projectId: "expoclifirebase",
  storageBucket: "expoclifirebase.appspot.com",
  messagingSenderId: "879786344324",
  appId: "1:879786344324:web:1551b7e826b60f610727d1",
  measurementId: "G-8H42QFBG5W",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };