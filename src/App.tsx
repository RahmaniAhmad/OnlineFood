import "./styles.css";
import React from "react";
import Cart from "./components/Cart/Cart";
import MainTabs from "./components/MainTabs/MainTabs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <h3 style={{ backgroundColor: "red", height: "40px", padding: "10px" }}>
        Demo App
      </h3>
      <MainTabs />
      <Cart />
    </div>
  );
}
