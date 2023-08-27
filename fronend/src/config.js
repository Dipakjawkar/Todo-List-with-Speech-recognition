

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiLnc-N-kHbVjf2V0FW2vgLMn-Lx_S410",
    authDomain: "todo-project-f9183.firebaseapp.com",
    projectId: "todo-project-f9183",
    storageBucket: "todo-project-f9183.appspot.com",
    messagingSenderId: "1052159672975",
    appId: "1:1052159672975:web:45403093bf716886fe66fa",
    measurementId: "G-WRC87976GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
