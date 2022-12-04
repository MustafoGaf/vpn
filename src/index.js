import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Want from "./Want/Want";
import Header from "./Header/Header";
import reportWebVitals from "./reportWebVitals";
import User from "./Users/users";
import Provide from "./provide/provide";
import Choose from "./choos/Choose";
import Hoge from "./Hoge/Hoge";
import Trusted from "./trusted/trusted";
import Footer from "./Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Want />
    <User />
    <Provide />
    <Choose />
    <Hoge />
    <Trusted />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
