// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAvj82LU_r4LUklxctns-sZM1T64LT3YJs",
  authDomain: "prepwise-d8d33.firebaseapp.com",
  projectId: "prepwise-d8d33",
  storageBucket: "prepwise-d8d33.firebasestorage.app",
  messagingSenderId: "901561214830",
  appId: "1:901561214830:web:b24512992c744c1003037f",
  measurementId: "G-C68J35VHW7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);