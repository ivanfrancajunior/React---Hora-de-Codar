// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw32Aa0CZa28oZVxLWgYPCb-fLsh6aQA8",
  authDomain: "miniblogapp-a0376.firebaseapp.com",
  projectId: "miniblogapp-a0376",
  storageBucket: "miniblogapp-a0376.appspot.com",
  messagingSenderId: "446857479623",
  appId: "1:446857479623:web:7c1440b5a2e529e784c5e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
