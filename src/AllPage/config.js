import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDk9DD3--Yug8fcaOpa9qcOzYs0juKoWSo",
  authDomain: "pwclone-a342d.firebaseapp.com",
  projectId: "pwclone-a342d",
  storageBucket: "pwclone-a342d.appspot.com",
  messagingSenderId: "418473976284",
  appId: "1:418473976284:web:6c0e4e493a9fd5e1176f19",
  measurementId: "G-V8594W3M4P"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};