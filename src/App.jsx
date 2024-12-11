// import React from "react";
import Home from "./componentes/paginacao/home/home.jsx";
import Nav from "./componentes/paginacao/nav/nav.jsx";
import Rodape from "./componentes/paginacao/rodape/rodape.jsx";
import Sobre from "./componentes/paginacao/sobre/sobre.jsx";
import Contato from "./componentes/paginacao/contato/contato.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
