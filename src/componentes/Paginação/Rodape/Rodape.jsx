import React from "react";
import "./Style/Rodape.css";

function Rodape() {
    return 
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Site de Receitas. Todos os direitos reservados</p>
    </footer>
}