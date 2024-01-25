import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDC3StYWeRRBFKXACj2MtWf4J8UWik6ERA",
  authDomain: "kodigo-music.firebaseapp.com",
  projectId: "kodigo-music",
  storageBucket: "kodigo-music.appspot.com",
  messagingSenderId: "521665017296",
  appId: "1:521665017296:web:f492aa932b4d7da68275d5"
};

export const app = initializeApp(firebaseConfig);