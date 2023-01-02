// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// apiKey: "AIzaSyBvehWn2CZugU9OgRjET5Tm2DGBs4vsU40",
// authDomain: "genious-car-8ab9d.firebaseapp.com",
// projectId: "genious-car-8ab9d",
// storageBucket: "genious-car-8ab9d.appspot.com",
// messagingSenderId: "212862339268",
// appId: "1:212862339268:web:1956f59c5638e1a390a191"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;