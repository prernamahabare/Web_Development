import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({ 
    apiKey: "AIzaSyBJG_M9UYsVHMZcnjiFkrjd4KBtz_-pnTY",
    authDomain: "fir-auth-c2276.firebaseapp.com",
    projectId: "fir-auth-c2276",
    storageBucket: "fir-auth-c2276.appspot.com",
    messagingSenderId: "252135233646",
    appId: "1:252135233646:web:e584448e3608fddd7e6e7f",
    measurementId: "G-GF9VGV53V0"
});
export default firebaseConfig;