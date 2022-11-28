import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {    
    apiKey: "AIzaSyDuUwpNaeHaz4bexfjJmMihYxdNsIaimO0",
  authDomain: "patitasacasaweb.firebaseapp.com",
  projectId: "patitasacasaweb",
  storageBucket: "patitasacasaweb.appspot.com",
  messagingSenderId: "252907964777",
  appId: "1:252907964777:web:cb4f5631ce80dfb07995f8"
    }

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage()
const db = getFirestore(firebaseApp)

export  { firebaseApp, storage, db }
