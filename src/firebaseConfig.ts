import * as firebase from 'firebase/app';

import * as dotenv from 'dotenv';
dotenv.config();

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };

export const firebaseConfig = {
    apiKey: "AIzaSyCH2BVUL3xK7VuEL6x4Ro2htq05w5j-LM0",
    authDomain: "food-app-project-mobile.firebaseapp.com",
    projectId: "food-app-project-mobile",
    storageBucket: "food-app-project-mobile.appspot.com",
    messagingSenderId: "184949755733",
    appId: "1:184949755733:web:7da2b1806df33888c729dc",
    measurementId: "G-V6X01J37B0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
