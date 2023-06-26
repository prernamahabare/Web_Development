import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJG_M9UYsVHMZcnjiFkrjd4KBtz_-pnTY",
    authDomain: "fir-auth-c2276.firebaseapp.com",
    projectId: "fir-auth-c2276",
    storageBucket: "fir-auth-c2276.appspot.com",
    messagingSenderId: "252135233646",
    appId: "1:252135233646:web:0ca8f0d1505f89147e6e7f",
    measurementId: "G-J2RG2QEBNS"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var Githubprovider = new firebase.auth.GithubAuthProvider();
var Googleprovider = new firebase.auth.GoogleAuthProvider();

export{auth,Githubprovider, Googleprovider};
