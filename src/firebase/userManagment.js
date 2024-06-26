import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (data, setAppLoading) => {
  try {
    setAppLoading(true);
    const user = {
      ...data,
    };
    await setDoc(doc(db, "users", uuidv4()), user);
    setAppLoading(false);
  } catch (error) {
    setAppLoading(false);
    console.log(error);
  }
};
