import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCSP8ZyJGFhKFPcCZbr4h2ezW8wq8jEhys",
  authDomain: "codebook-a94cf.firebaseapp.com",
  projectId: "codebook-a94cf",
  storageBucket: "codebook-a94cf.appspot.com",
  messagingSenderId: "146589009389",
  appId: "1:146589009389:web:8f0d96e8d065370857d3e4",
  measurementId: "G-95Z5EHE64V",
};

// Initialize Firebases
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
