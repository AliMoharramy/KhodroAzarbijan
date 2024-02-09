import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import App from "./App";
import AdminPage from "./component/adminPage/AdminPage";
import reportWebVitals from "./reportWebVitals";
import AllNewsap from "./component/JsonFiles/AllNewsap.js";

const myurls = window.location.href;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {myurls.split("").slice(-6).join("") === "advadm" ? (
      <AdminPage />
    ) : (
      <App AllNewsap={AllNewsap} />
    )}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
