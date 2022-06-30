import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSgRI2M5yBUN7iXrVWeTrDWeDblaGV_tU",
  authDomain: "media-feed-f7827.firebaseapp.com",
  projectId: "media-feed-f7827",
  storageBucket: "media-feed-f7827.appspot.com",
  messagingSenderId: "377710976517",
  appId: "1:377710976517:web:d4cf0d9a0adfd019e3c66c",
  measurementId: "G-KCRM71JV42",
  databaseUrl: "https://media-feed-f7827-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { auth, storage, database };
