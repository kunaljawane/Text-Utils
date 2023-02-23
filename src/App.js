import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { useState } from "react";

function App() {
  return (
    <>
      <Navbar name="TEXTutils" />

      <div className="container my-3">
        <h3>Enter your text here</h3>
        <TextForm />
      </div>
    </>
  );
}

export default App;
