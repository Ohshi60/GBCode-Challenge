// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
  } from 'firebase/auth'

import firebaseConfig from "../config/firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged}