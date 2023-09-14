import Home from "./components/index";
import Create from "./components/create";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:emailid" element={<Create />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
