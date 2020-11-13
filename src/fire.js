import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCgH4ZvJD_KyXKSo-ZcLc5fuP-QVRPR1rI",
    authDomain: "login-a32f8.firebaseapp.com",
    databaseURL: "https://login-a32f8.firebaseio.com",
    projectId: "login-a32f8",
    storageBucket: "login-a32f8.appspot.com",
    messagingSenderId: "71948531319",
    appId: "1:71948531319:web:ee9d2fbdeb6bf5cd487872"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;