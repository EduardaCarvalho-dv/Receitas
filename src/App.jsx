// import CadastroUsuario from "./componentes/paginacao/cadastroUsuario/cadastroUsuario.jsx";
import Home from "./componentes/paginacao/home/Home.jsx";
import Nav from "./componentes/paginacao/navbar/BarraNavegacao.jsx";
import Rodape from "./componentes/paginacao/rodape/Rodape.jsx";
import Sobre from "./componentes/paginacao/sobre/Sobre.jsx";
import Contato from "./componentes/paginacao/contato/Contato.jsx";
import Buscar from "./componentes/paginacao/buscar/Buscar.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/receitas" element={<Contato />} />
              <Route path="/buscar" element={<Buscar />} />
            </Routes>
          </main>
          <Rodape />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
