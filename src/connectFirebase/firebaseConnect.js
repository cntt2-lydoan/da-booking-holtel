import firebase from 'firebase';
// import "firebase/auth"
// import firebase from 'firebase/app';
var firebaseConfig = {
    apiKey: "AIzaSyCtTD4xWZXEAFLP9hORAVLvBZhRHPmZwlU",
    authDomain: "booking-hotel-5cb23.firebaseapp.com",
    projectId: "booking-hotel-5cb23",
    storageBucket: "booking-hotel-5cb23.appspot.com",
    messagingSenderId: "555713105963",
    appId: "1:555713105963:web:9bb769289c067adddc1a6e",
    measurementId: "G-2L3ZBJS38F"
  };
  firebase.initializeApp(firebaseConfig);
  export const datas = firebase.database();