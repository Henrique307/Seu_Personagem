import React from "react";
import { Link } from "react-router-dom";

const CabecalhoPadrao = () => {
  return (
    <header className="banner">
      <Link to="/login" className="link">
        <img
          src="./assets/logo.jpeg"
          alt="Logo HonorBound"
          title="Honor Bound"
          className="logo"
        />
      </Link>
    </header>
  );
};

export default CabecalhoPadrao;
