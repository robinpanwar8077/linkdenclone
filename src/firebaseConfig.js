import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBnxxhV6gmIrugNCfLerMmmOzFRftr5RKY",
  authDomain: "linkedin-clone-2ba8c.firebaseapp.com",
  projectId: "linkedin-clone-2ba8c",
  storageBucket: "linkedin-clone-2ba8c.appspot.com",
  messagingSenderId: "377593160913",
  appId: "1:377593160913:web:9bdf8a339bbce06ac851f0",
  measurementId: "G-XTY3BNCEWK"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth=getAuth(app)

export {app,db,auth} ;
