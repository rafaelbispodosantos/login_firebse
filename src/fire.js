import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcXQnyvy7juYl-1BbjkFDlW8kaKdyBFB8",
    authDomain: "login-51098.firebaseapp.com",
    projectId: "login-51098",
    storageBucket: "login-51098.appspot.com",
    messagingSenderId: "612550383180",
    appId: "1:612550383180:web:50f69a01bab345e5e446e9"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;