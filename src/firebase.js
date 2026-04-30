import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; // <--- Yeh add kiya

const firebaseConfig = {
  apiKey: "AIzaSyAuEkwNxpi5jfwIKoCuhS3wbgGGtNStq5I",
  authDomain: "a1webservice.firebaseapp.com",
  projectId: "a1webservice",
  storageBucket: "a1webservice.firebasestorage.app",
  messagingSenderId: "777670732750",
  appId: "1:777670732750:web:9355a9a8bff8af2283d99f",
  measurementId: "G-JBEYNCPYD8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const db = getFirestore(app);
export const storage = getStorage(app); // <--- Yeh export karna zaroori tha