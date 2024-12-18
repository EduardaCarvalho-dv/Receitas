import React from "react";
import "../../../styles/sobre.css";
import imagemParallax from "../../../assets/Paraguai-1-1111x740.jpg";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="parallax" style={{ backgroundImage: `url(${imagemParallax})` }}>
        <div className="overlay">
          <h1>Bienvenido a Nuestro Sitio Web</h1>
          <h2>Sobre Nosotros</h2>
        </div>
      </div>
      <div className="content">
        <h2>Nuestra Misión</h2>
        <p>
          Este sitio está dedicado a compartir recetas deliciosas de la cocina paraguaya y de otras partes del mundo. Aquí encontrarás uma ampla variedade de receitas, desde pratos tradicionais até inovações modernas, todas cuidadosamente selecionadas para inspirar suas habilidades culinárias.
        </p>
        <h2>¿Por Qué Cocinar?</h2>
        <p>
          Nuestro objetivo es hacer que la cocina sea accesible y divertida para todos. Creemos que cocinar es una forma de arte y una manera de conectar con amigos y familiares. Esperamos que disfrutes explorando nuestras recetas tanto como nosotros disfrutamos creándolas.
        </p>
        <h2>Visualiza Nuestro Folleto</h2>
        <p>
          Si deseas obtener más información sobre nuestras recetas, puedes visualizar nuestro folleto haciendo clic en el botón a continuación:
        </p>
      </div>
        <div className="button-container">
          <a 
            href="https://www.canva.com/design/DAGZiuARy6M/L5GT-iyFGdRl69erZdcg0g/edit" 
            className="view-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver Folleto
          </a>
        </div>
    </div>
  );
};

export default Sobre;
