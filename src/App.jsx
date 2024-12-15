import CadastroUsuario from "./componentes/paginacao/cadastroUsuario/cadastroUsuario.jsx";
import Home from "./componentes/paginacao/home/home.jsx";
import Nav from "./componentes/paginacao/nav/nav.jsx";
import Rodape from "./componentes/paginacao/rodape/rodape.jsx";
import Sobre from "./componentes/paginacao/sobre/sobre.jsx";
import Contato from "./componentes/paginacao/contato/contato.jsx";

import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AppPrincipal() {
  const location = useLocation();
  const ocultaNav = location.pathname === "/";

  return (
    <>
      <div className="App">
         {!ocultaNav && <Nav/>}
          <main>
            <Routes>
              <Route path="/" element={<CadastroUsuario/>}/>
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/receitas" element={<Contato />} />
            </Routes>
          </main>
          {!ocultaNav && <Rodape />}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppPrincipal />
    </BrowserRouter>
  );
}

export default App;
