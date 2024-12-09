import React from "react";
import Home from "./componentes/Paginação/Home";
import Nav from "./componentes/Paginação/Nav";
import Rodape from "./componentes/Paginação/Rodape";
import Sobre from "./componentes/Paginação/Sobre";
import Contato from "./componentes/Paginação/Contato";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Nav/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/sobre" element = {<Sobre/>}/>
        <Route path = "/contato" element = {<Contato/>}/>
  
      </Routes>

      <Rodape/>
    </div>
  );
}

export default App;
