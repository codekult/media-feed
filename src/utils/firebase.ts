import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDSgRI2M5yBUN7iXrVWeTrDWeDblaGV_tU",
  authDomain: "media-feed-f7827.firebaseapp.com",
  projectId: "media-feed-f7827",
  storageBucket: "media-feed-f7827.appspot.com",
  messagingSenderId: "377710976517",
  appId: "1:377710976517:web:d4cf0d9a0adfd019e3c66c",
  measurementId: "G-KCRM71JV42",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };
