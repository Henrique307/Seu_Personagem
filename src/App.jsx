import React from 'react';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import { Cadastro, Home, Login } from "./view/paginas";
import { CabecalhoPadrao } from "./view/components";

function App()  {
  return (
      <Router>
        <CabecalhoPadrao />
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
