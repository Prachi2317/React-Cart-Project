import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpGn49bEBd5nLwve4s3O3ecxl0CfBYi7A",
  authDomain: "cart-407d8.firebaseapp.com",
  projectId: "cart-407d8",
  storageBucket: "cart-407d8.appspot.com",
  messagingSenderId: "527567310169",
  appId: "1:527567310169:web:7ec861f9a4f9584f8e9048"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


