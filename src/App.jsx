// import CadastroUsuario from "./componentes/paginacao/cadastroUsuario/cadastroUsuario.jsx";
import Home from "./componentes/paginacao/home/home.jsx";
import Nav from "./componentes/paginacao/navbar/BarraNavegacao.jsx";
import Rodape from "./componentes/paginacao/rodape/rodape.jsx";
import Sobre from "./componentes/paginacao/sobre/sobre.jsx";
import Buscar from "./componentes/paginacao/buscar/buscar.jsx";
import Receita from "./componentes/paginacao/receitas/receitas.jsx";
import Detalhes from "./componentes/paginacao/detalhes/detalhes.jsx";

import { Routes, Route, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <>
      <div className="App">
        <HashRouter>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/receitas" element={<Receita />} />
              <Route path="/buscar" element={<Buscar />} />
              <Route path="/receitas/:id" element={<Detalhes />} /> 
            </Routes>
          </main>
          <Rodape />
        </HashRouter>
      </div>
    </>
  );
}
export default App;