// import React from "react";
import { Link } from "react-router-dom";
// import "./Style/Nav.css";

export default function nav() {
  return (
    <header className="header">
      <nav className="nav">
        <h1> Receita teste </h1>
        <ul>
            <li><Link to= "/"> Home </Link></li>
            <li><Link to= "/"> Sobre </Link></li>
            <li><Link to= "/"> Contato </Link></li>
        </ul>
      </nav>
    </header>
  );
}