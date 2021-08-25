import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyDmUlTUcUUdrv8vE3G_AkneZt9wB3q0vII',
  authDomain: 'store-with-stripe.firebaseapp.com',
  projectId: 'store-with-stripe',
  storageBucket: 'store-with-stripe.appspot.com',
  messagingSenderId: '61242001150',
  appId: '1:61242001150:web:a6d356fb7b1d09d20a07af',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export {
  firestore,
  //   createUserProfileDocument,
  auth,
};
