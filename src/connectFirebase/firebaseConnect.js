import firebase from 'firebase';
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
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);

  var data = firebase.database().ref('booking-hotel-5cb23-default-rtdb/' + 'content');
  data.once('value').then(function(snapshot){
    console.log(snapshot);
  })