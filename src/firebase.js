import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
var firebaseConfig = {
    apiKey: "AIzaSyBNsvgY4VN7RpVUYCbZFNnbvAeZ9Hc6Oeg",
    authDomain: "crud-react-7d351.firebaseapp.com",
    projectId: "crud-react-7d351",
    storageBucket: "crud-react-7d351.appspot.com",
    messagingSenderId: "970291384973",
    appId: "1:970291384973:web:c4f300f18ce5d207fdc8c4",
    measurementId: "G-XG70SG7TFW"
  };


const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
  