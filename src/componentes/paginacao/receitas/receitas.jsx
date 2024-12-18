import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AddReceita from "./addReceita";
import "../../../styles/receitas.css";
import { fetchAndMergeReceitas } from "../../../utils/syncReceitas";
import axios from "axios";

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
    const carregarDados = async () => {
      try {
        const receitasUnificadas = await fetchAndMergeReceitas();
        setReceitas(receitasUnificadas);

        const response = await axios.get("/db.json");
        setCategorias(["Todas", ...response.data.categorias]);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    carregarDados();
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
      novaReceita.ingredientes.some((ingrediente) => !ingrediente.trim())
    ) {
      alert("Todos os campos são obrigatórios e deve haver pelo menos um ingrediente.");
      return;
    }

    const novaReceitaComID = { id: Date.now().toString(), ...novaReceita };
    const novaListaReceitas = [...receitas, novaReceitaComID];
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
    const todasReceitas = [...receitasSalvas, novaReceitaComID];

    localStorage.setItem("receitas", JSON.stringify(todasReceitas));

    setReceitas(novaListaReceitas);
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

  const removerReceita = (id) => {
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
    const novasReceitas = receitasSalvas.filter((receita) => receita.id !== id);

    localStorage.setItem("receitas", JSON.stringify(novasReceitas));

    const receitasAtualizadas = receitas.filter((receita) => receita.id !== id);
    setReceitas(receitasAtualizadas);
  };

  const receitasFiltradas =
    categoriaSelecionada === "Todas"
      ? receitas
      : receitas.filter((receita) => receita.categoria === categoriaSelecionada);

  return (
    <Container>
      <div className="receita-hero">
        <h1 className="text-white">Receitas</h1>
        <p className="text-white">Descubra as delicias paraguaias!</p>
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
                <Button
                  variant="danger"
                  onClick={() => removerReceita(receita.id)}
                  disabled={receita.id < 1000} 
                >
                  Remover
                </Button>
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
