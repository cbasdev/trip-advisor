import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAUsis_uMWx3pBPhNCc_5rP9Baf7k0F1bc",
    authDomain: "tenedores-7d70c.firebaseapp.com",
    databaseURL: "https://tenedores-7d70c.firebaseio.com",
    projectId: "tenedores-7d70c",
    storageBucket: "tenedores-7d70c.appspot.com",
    messagingSenderId: "787514047341",
    appId: "1:787514047341:web:6da8b227f17997a9713864"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig)