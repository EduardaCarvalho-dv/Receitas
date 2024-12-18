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
          Este sitio está dedicado a compartir recetas deliciosas de la cocina paraguaya y de otras partes del mundo. Aquí encontrarás una amplia variedad de recetas, desde platos tradicionales hasta innovaciones modernas, todas cuidadosamente seleccionadas para inspirar tus habilidades culinarias.
        </p>
        <h2>¿Por Qué Cocinar?</h2>
        <p>
          Nuestro objetivo es hacer que la cocina sea accesible y divertida para todos. Creemos que cocinar es una forma de arte y una manera de conectar con amigos y familiares. Esperamos que disfrutes explorando nuestras recetas tanto como nosotros disfrutamos creándolas.
        </p>
        <h2>Descarga Nuestro Folleto</h2>
        <p>
          Si deseas obtener más información sobre nuestras recetas, puedes descargar nuestro folleto o visualizarlo en línea haciendo clic en los botones a continuación:
        </p>
      </div>
        <div className="button-container">
          <a href="/path/to/your/folder.pdf" className="download-link" target="_blank" rel="noopener noreferrer">
            Descargar Folleto
          </a>
          <a href="/path/to/your/folder.pdf" className="view-link" target="_blank" rel="noopener noreferrer">
            Ver Folleto
          </a>
        </div>
    </div>
  );
};

export default Sobre;
