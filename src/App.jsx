import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CabecalhoPadrao } from "./view/components";
import { Cadastro, Home, Login } from "./view/paginas";

function App() {
  return (
    <>
      <Router>
        <CabecalhoPadrao />
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
