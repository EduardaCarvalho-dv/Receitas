import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AddReceita from "./addReceita";
import "../../../styles/receitas.css";

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [showModal, setShowModal] = useState(false);

  const [novaReceita, setNovaReceita] = useState({
    nome: "",
    imagem: "",
    ingredientes: [""],
    modoDePreparo: "",
    categoria: "",
    descricao: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        const localReceitas =
          JSON.parse(localStorage.getItem("receitas")) || [];

        const response = await axios.get("/db.json");
        const receitasFixas = response.data.receitas;

        const receitasUnificadas = [
          ...receitasFixas,
          ...localReceitas.filter(
            (local) => !receitasFixas.some((fixa) => fixa.id === local.id)
          ),
        ];

        setReceitas(receitasUnificadas);
        setCategorias(["Todas", ...response.data.categorias]);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const adicionarReceita = () => {
    if (
      !novaReceita.nome ||
      !novaReceita.imagem ||
      !novaReceita.descricao ||
      !novaReceita.modoDePreparo ||
      !novaReceita.categoria ||
      novaReceita.ingredientes.some(ingrediente => !ingrediente.trim())
    ) {
      alert("Todos os campos são obrigatórios e deve haver pelo menos um ingrediente.");
      return;
    }
  
    if (novaReceita.ingredientes.length === 0 || novaReceita.ingredientes.every(ingrediente => !ingrediente.trim())) {
      alert("A receita deve ter pelo menos um ingrediente.");
      return;
    }
  
    const novaReceitaComID = { id: Date.now().toString(), ...novaReceita };
    const novaLista = [...receitas, novaReceitaComID];
    const receitasDinamicas = novaLista.filter(
      (receita) => !receitas.some((fixa) => fixa.id === receita.id)
    );
  
    localStorage.setItem("receitas", JSON.stringify(receitasDinamicas));
    setReceitas(novaLista);
    setShowModal(false);
  
    setNovaReceita({
      nome: "",
      imagem: "",
      ingredientes: [""],
      modoDePreparo: "",
      categoria: "",
      descricao: "",
    });
  };
  

  const receitasFiltradas =
    categoriaSelecionada === "Todas"
      ? receitas
      : receitas.filter(
          (receita) => receita.categoria === categoriaSelecionada
        );

  return (
    <Container>
      <div className="receita-hero">
        <h1 className="text-white">Receitas</h1>
        <p className="text-white">Descubra as delicias paraguais!</p>
        <Button variant="light" onClick={handleShowModal}>
          + Adicionar Receita
        </Button>
      </div>

      <div className="filtro-receita">
        {categorias.map((cat, index) => (
          <Button
            key={index}
            variant={categoriaSelecionada === cat ? "dark" : "outline-dark"}
            className="m-1"
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Row>
        {receitasFiltradas.map((receita) => (
          <Col key={receita.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={receita.imagem} alt={receita.nome} />
              <Card.Body>
                <Card.Title>{receita.nome}</Card.Title>
                <Card.Text>{receita.descricao}</Card.Text>
                <Button variant="dark">Ver Receita</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <AddReceita
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        novaReceita={novaReceita}
        setNovaReceita={setNovaReceita}
        categorias={categorias}
        adicionarReceita={adicionarReceita}
      />
    </Container>
  );
};

export default Receitas;
