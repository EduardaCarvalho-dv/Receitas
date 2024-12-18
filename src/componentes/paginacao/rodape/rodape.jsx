import "../../../styles/rodape.css";

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import { Container, Row, Col } from "react-bootstrap";

import logo from "../../../../public/logo.jpeg";

const Rodape = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="content">
          <div>
            <img className="logoInit" src={logo} alt="logo" />
          </div>
          <div className="contatos">
            <p>
              <span>Contacto: </span> (84) 99999-9999&nbsp; <FaWhatsapp />
            </p>
            <p>
              <span>Email: </span>
              receitas@hotmail.com&nbsp; <CgMail />
            </p>
          </div>
          <div className="midias">
            <a
              href="#"
              aria-label="Enter Facebook"
              target="_blank"
              className="footerLinks"
            >
              <FaFacebook />
              &nbsp;&nbsp;&nbsp;
            </a>
            <a
              href="https://www.instagram.com/receitasmundoafora_oficial?igsh=MXp0a2I5MzV2Nnlm"
              aria-label="Enter instagram"
              target="_blank"
              className="footerLinks"
            >
              <FaInstagram />
              &nbsp;&nbsp;&nbsp;
            </a>
            <a
              href="#"
              aria-label="Enter YouTube"
              target="_blank"
              className="footerLinks"
            >
              <FaYoutube />
              &nbsp;
            </a>
          </div>
        </div>
        <Row className="copyright">
          <Col>
            &copy; {new Date().getFullYear()} Mundo alrededor. Todo
            derechos reservados
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Rodape;
