import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJaoHTHlXL8Tl9_DkmTYJEMplBRwiqCqU",
  authDomain: "live-chat-ri.firebaseapp.com",
  databaseURL: "https://live-chat-ri-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "live-chat-ri",
  storageBucket: "live-chat-ri.appspot.com",
  messagingSenderId: "908965445767",
  appId: "1:908965445767:web:6f43ec34d95f04832f7822",
  measurementId: "G-LC82HSL0SF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db}