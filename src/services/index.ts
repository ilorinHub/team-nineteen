// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  orderBy,
  query as q,
} from "firebase/firestore";

import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

//firebase utils
const authenticateUserAnonymously = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error: any) {}
};

const collectionRef = collection(db, "usersCollection");

const query = q(collectionRef, orderBy("createdAt", "desc"));

export { db, auth, collectionRef, query, authenticateUserAnonymously };





