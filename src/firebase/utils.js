import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const handleUserProfile = async ({ userAuth, aditionalUserData }) => {
  console.log(aditionalUserData);
  if (!userAuth) return;

  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = userAuth;
    const timestamp = new Date();

    try {
      await userRef.set({
        email,
        createdDate: timestamp,
        ...aditionalUserData,
      });
    } catch (error) {
      // console.log(error);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
