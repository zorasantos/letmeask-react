import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDnGiCAg7hm40QQZ6ReFz3LIA-llAlxz08",
  authDomain: "letmeask-39b2e.firebaseapp.com",
  databaseURL: "https://letmeask-39b2e-default-rtdb.firebaseio.com",
  projectId: "letmeask-39b2e",
  storageBucket: "letmeask-39b2e.appspot.com",
  messagingSenderId: "360986422973",
  appId: "1:360986422973:web:260777ebf49d513e2c11d4"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const database = firebase.database();