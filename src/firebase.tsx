import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSr_-vVcwJq9repH2Qn7NPqtsd8FPyjrQ",
  authDomain: "nwitter-reloaded-3b372.firebaseapp.com",
  projectId: "nwitter-reloaded-3b372",
  storageBucket: "nwitter-reloaded-3b372.appspot.com",
  messagingSenderId: "585420309336",
  appId: "1:585420309336:web:fa90ef025324d12cb91b2d"
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);