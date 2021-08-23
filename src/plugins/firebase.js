import Vue from 'vue'
import firebase from 'firebase'
import store from "../store"

var firebaseConfig = {
    apiKey: "AIzaSyCPBD97nARH_2FMdHbFovzUTDtWzu6hIoE",
    authDomain: "netflix-vuejs.firebaseapp.com",
    projectId: "netflix-vuejs",
    storageBucket: "netflix-vuejs.appspot.com",
    messagingSenderId: "1097990261594",
    appId: "1:1097990261594:web:2d5c54c792d88f54438163",
    measurementId: "G-3MMMKN7LSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  firebase.auth().onAuthStateChanged(user => {
      store.dispatch("addUser", { name: user.displayName, email: user.email });
  });

  Vue.prototype.$firebase = firebase;

  export default firebase;