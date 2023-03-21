import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from "firebase/app"
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBpGn49bEBd5nLwve4s3O3ecxl0CfBYi7A",
  authDomain: "cart-407d8.firebaseapp.com",
  projectId: "cart-407d8",
  storageBucket: "cart-407d8.appspot.com",
  messagingSenderId: "527567310169",
  appId: "1:527567310169:web:7ec861f9a4f9584f8e9048"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


