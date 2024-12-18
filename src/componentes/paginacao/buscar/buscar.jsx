import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "../../../styles/buscaReceitas.css";
import { fetchAndMergeReceitas } from "../../../utils/syncReceitas"; 

const Buscar = () => {
  const [receitas, setReceitas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  useEffect(() => {
    const carregarReceitas = async () => {
      try {

        const receitasUnificadas = await fetchAndMergeReceitas();
        setReceitas(receitasUnificadas);
        
        setSugestoes(receitasUnificadas.slice(0, 3));
      } catch (error) {
        console.error("Erro ao carregar receitas:", error);
      }
    };

    carregarReceitas();
  }, []);

  const filteredReceitas = receitas.filter((receita) =>
    receita.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Encontre suas receitas</h1>
          <Form className="searchbar">
            <Form.Control
              type="text"
              placeholder="O que você está buscando?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="dark" className="ms-2">
              Buscar
            </Button>
          </Form>
        </div>
      </div>

      <div className="my-5">
        <Row>
          {filteredReceitas.map((receita) => (
            <Col key={receita.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={receita.imagem}
                  alt={receita.nome}
                />
                <Card.Body>
                  <Card.Title>{receita.nome}</Card.Title>
                  <Card.Text>{receita.descricao}</Card.Text>
                  <Button variant="dark">Ver Receita</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="my-5">
        <h3>Sugestões para você</h3>
        <Row>
          {sugestoes.map((receita) => (
            <Col key={receita.id} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={receita.imagem}
                  alt={receita.nome}
                />
                <Card.Body>
                  <Card.Title>{receita.nome}</Card.Title>
                  <Button variant="outline-dark">Ver Mais</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Buscar;
