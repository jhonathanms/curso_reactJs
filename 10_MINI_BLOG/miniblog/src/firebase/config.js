import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAd5P481EI-mkPs-iYmHlnBXzLENilrtNo",
  authDomain: "miniblog-f1f10.firebaseapp.com",
  projectId: "miniblog-f1f10",
  storageBucket: "miniblog-f1f10.appspot.com",
  messagingSenderId: "428866022744",
  appId: "1:428866022744:web:4a0a926d131e6c97d4892d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};