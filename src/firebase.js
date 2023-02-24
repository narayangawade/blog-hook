import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3IvxeAeGEFDWs3azzRzqlLypD4APVNhs",
  authDomain: "react-hooks-blog-5ae99.firebaseapp.com",
  projectId: "react-hooks-blog-5ae99",
  storageBucket: "react-hooks-blog-5ae99.appspot.com",
  messagingSenderId: "981588370803",
  appId: "1:981588370803:web:2b4e02687d6a1d15c09106"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
