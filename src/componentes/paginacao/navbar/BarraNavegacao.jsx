import { navLinks } from "../../../data/linksNavegacao";

import "../../../styles/nav.css";
import { useNavigate } from "react-router-dom";

import logo from "/logoR.png";

import {
  Navbar,
  Container,
  Nav,
  Button,
  NavLink,
} from "react-bootstrap";

const BarraNavegacao = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img className="logoInit" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto"></Nav>
            <Nav className="md-auto">
              {navLinks.map((item) => {
                return (
                  <div className="navLink" key={item.id}>
                    <NavLink href={item.path}>{item.text}</NavLink>
                  </div>
                );
              })}
              <Button
                variant="outline-success"
                onClick={() => navigate("/buscar")}
              >
                Buscar
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default BarraNavegacao;
