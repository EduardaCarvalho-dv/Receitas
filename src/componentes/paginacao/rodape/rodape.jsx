import "../../../styles/rodape.css";

const rodape = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="logo">
          <h1>RECEITAS</h1>
        </div>
        <div className="contatos">
          <p>telefono: 0000-0000</p>
          <p>email: receitas@hotmail.com</p>
        </div>
        <div className="midias">
          <a href="#" className="footerLinks" id="instagram">
            Instagram
          </a>
          <a href="#" className="footerLinks" id="facebook">
            Facebook
          </a>
          <a href="#" className="footerLinks" id="youtube">
            YouTube
          </a>
        </div>
      </div>
      <div className="copyiright">
        <p>
          &copy; {new Date().getFullYear()} Site de Receitas. Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  );
};

export default rodape;
