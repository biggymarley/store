import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9u22jRo5-alKEEvmriwfMSXhFtW6CbGs",
  authDomain: "usersdata-83970.firebaseapp.com",
  projectId: "usersdata-83970",
  storageBucket: "usersdata-83970.appspot.com",
  messagingSenderId: "822988033344",
  appId: "1:822988033344:web:25283bb0b86dd02a95bea5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

