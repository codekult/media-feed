import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import App from "src/App";
import reportWebVitals from "src/reportWebVitals";

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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
