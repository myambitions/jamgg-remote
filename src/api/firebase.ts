import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// this could be in env
const firebaseConfig = {
  apiKey: "AIzaSyAcs_Npd60z14RrSlEHV5NUAq--nLytaUg",
  authDomain: "jamgg-215fe.firebaseapp.com",
  databaseURL:
    "https://jamgg-215fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jamgg-215fe",
  storageBucket: "jamgg-215fe.appspot.com",
  messagingSenderId: "660924844182",
  appId: "1:660924844182:web:1f749e832a63ad548a5ab7",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
