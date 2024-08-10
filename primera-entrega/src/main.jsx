import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZjNKzYv_MqXuu36ldgOfoySBn_MfalU",
  authDomain: "c4lz473.firebaseapp.com",
  projectId: "c4lz473",
  storageBucket: "c4lz473.appspot.com",
  messagingSenderId: "769324699231",
  appId: "1:769324699231:web:0cd0bf47d82daff5b095ea"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
