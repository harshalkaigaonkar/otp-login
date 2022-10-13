import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
//   authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
//   projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
//   storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.NEXT_PUBLIC_SENDER_ID}`,
//   appId: `${process.env.NEXT_PUBLIC_APP_ID}`
// };

const firebaseConfig = {
  apiKey: "AIzaSyBbc4H0NW5QxLiniqTjcCpTq6aB9a-7w04",
  authDomain: "tweepsbook-test.firebaseapp.com",
  projectId: "tweepsbook-test",
  storageBucket: "tweepsbook-test.appspot.com",
  messagingSenderId: "1076981098762",
  appId: "1:1076981098762:web:2872e87cd3072279ccf2f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = 'it';