// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAYqyv6tBtXJ1VqMuy6UZOkRjN-J6sGG8o",
//   authDomain: "swiggy-b8916.firebaseapp.com",
//   projectId: "swiggy-b8916",
//   storageBucket: "swiggy-b8916.appspot.com",
//   messagingSenderId: "448585177393",
//   appId: "1:448585177393:web:0ba82b4f3dd983af347810",
//   measurementId: "G-WCS86ZM3V7"
// };

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
