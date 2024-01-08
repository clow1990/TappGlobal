import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { IApiError } from "./common/error";
import Alert from "./common/Alert";
import { IUserProfileParams, INIT_DATA } from "./screen/Auth/UserService";

export const firebaseConfig = {
  apiKey: "AIzaSyCa1pBiWrgKDA7NCgGDycJcKEoUbdMMUPU",
  authDomain: "tappglobalwebapp.firebaseapp.com",
  projectId: "tappglobalwebapp",
  storageBucket: "tappglobalwebapp.appspot.com",
  messagingSenderId: "999648330067",
  appId: "1:999648330067:web:0c3940576e4f6f3949a1a6",
  measurementId: "G-XXNDZ6SWM4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    const { message } = error as IApiError;
    alert(message);
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    if (user) {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);

      const data = doc.docs[0].data();
      const userData: IUserProfileParams = data;
      userData.email = data.email;
      userData.firstName = data.firstName;
      userData.lastName = data.lastName;
      userData.mobileNumber = data.mobileNumber;
      userData.name = data.name;

      return userData;
    }

    return INIT_DATA;
  } catch (error) {
    // const { message } = error as IApiError;
    Alert.error({ message: "Unsuccessful log in attempt" });
    return INIT_DATA;
  }
};

const updateUser = async (
  uid?: string,
  fN?: string,
  lN?: string,
  mN?: string
) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docs = await getDocs(q);

    const data = docs.docs[0];
    const { id } = data;

    await updateDoc(doc(db, "users", id), {
      firstName: fN,
      lastName: lN,
      mobileNumber: mN,
    });
  } catch (error) {
    const { message } = error as IApiError;
    Alert.error({ message });
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  userName: string = "",
  lastName: string = "",
  firstName: string = "",
  mobileNumber: string = ""
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      userName,
      lastName,
      firstName,
      mobileNumber,
      authProvider: "local",
      email,
    });
  } catch (error) {
    const { message } = error as IApiError;
    Alert.error({ message });
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    const { message } = error as IApiError;
    alert(message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  updateUser,
  logout,
};
