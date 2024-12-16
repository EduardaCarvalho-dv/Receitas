import { navLinks } from "../../../data/linksNavegacao";

import "../../../styles/nav.css";
import { useNavigate } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  // NavDropdown,
  // Form,
  Button,
  NavLink,
} from "react-bootstrap";

export default function nav() {
  const navigate = useNavigate();
  return (
    
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <h4>RECEITAS</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            </Nav>
            <Nav className="md-auto">
              {navLinks.map((item) => {
                return (
                  <div className="navLink" key={item.id}>
                    <NavLink href={item.path}>{item.text}</NavLink>
                  </div>
                );
              })}
              {/* <NavDropdown
                className="navLink"
                title="Categorias"
                id="collapsible-nav-dropdown"
              >
                {categoriaLinks.map((categoria) => {
                  return (
                    <div key={categoria.id}>
                      <NavDropdown.Item href={categoria.path}>
                        {categoria.text}
                      </NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown> */}
              <Button variant="outline-success" onClick= {() => navigate("/buscar")}>Buscar</Button>
            </Nav>
            {/* <Nav className="md-auto search">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Pesquisar"
                  className="md-3"
                  aria-label="Search"
                />
              </Form>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
