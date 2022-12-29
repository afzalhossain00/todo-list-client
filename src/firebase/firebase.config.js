// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_mIYqL75Ob74bnbpEo4zDnbltEDszYu8",
    authDomain: "todo-list-1f2d4.firebaseapp.com",
    projectId: "todo-list-1f2d4",
    storageBucket: "todo-list-1f2d4.appspot.com",
    messagingSenderId: "932132358948",
    appId: "1:932132358948:web:a8a1e079380a81032201b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
