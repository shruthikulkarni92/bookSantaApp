import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
  apiKey: "AIzaSyDr5d-y3ZpKz0qNm5WW_91K0vwcZFi3Hq8",
  authDomain: "booksantasid.firebaseapp.com",
  projectId: "booksantasid",
  storageBucket: "booksantasid.appspot.com",
  messagingSenderId: "207640317549",
  appId: "1:207640317549:web:2bda563e8401960b4f3964"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase.firestore();
  const db = firebaseApp;

  export default db;