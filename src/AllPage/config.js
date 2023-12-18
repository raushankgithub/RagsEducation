
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZUhJDXPdMQs0zhQwJsYzqiMdfeA7FJfI",
  authDomain: "pw-2-7ec8b.firebaseapp.com",
  projectId: "pw-2-7ec8b",
  storageBucket: "pw-2-7ec8b.appspot.com",
  messagingSenderId: "1024020282568",
  appId: "1:1024020282568:web:88fe6f1db3b4804dc5f9fd",
  measurementId: "G-RGQN28XSD3"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};