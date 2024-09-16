import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC_1OtJCIkZoid3ytomc8WS9y3TzOp4J6Y",
  authDomain: "linkedn-12c53.firebaseapp.com",
  projectId: "linkedn-12c53",
  storageBucket: "linkedn-12c53.appspot.com",
  messagingSenderId: "915719309537",
  appId: "1:915719309537:web:f54b6a5d3317631fe44fa0",
  measurementId: "G-YTR4Y954W5"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth=getAuth(app)

export {app,db,auth} ;
