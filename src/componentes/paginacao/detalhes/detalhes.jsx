import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import AddReceita from "../receitas/addReceita.jsx";
import "../../../styles/detalhes.css";

const Detalhes = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [novaReceita, setNovaReceita] = useState({
    nome: "",
    imagem: "",
    ingredientes: [""],
    modoDePreparo: "",
    categoria: "",
    descricao: "",
    video: "",
  });

  useEffect(() => {
    const carregarReceita = () => {
      const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
      const receitaEncontrada = receitasSalvas.find((r) => r.id === id);

      if (receitaEncontrada) {
        setReceita(receitaEncontrada);
        setNovaReceita(receitaEncontrada);
      } else {
        fetch("/db.json")
          .then((response) => response.json())
          .then((data) => {
            const receitaNoDb = data.receitas.find((r) => r.id === id);
            setReceita(receitaNoDb);
            setNovaReceita(receitaNoDb);
          });
      }
    };

    carregarReceita();
  }, [id]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const editarReceita = () => {
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
    const novasReceitas = receitasSalvas.map((r) =>
      r.id === id ? novaReceita : r
    );

    localStorage.setItem("receitas", JSON.stringify(novasReceitas));
    setShowModal(false);
    setReceita(novaReceita);
  };

  const removerReceita = () => {
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
    const novasReceitas = receitasSalvas.filter((r) => r.id !== id);

    localStorage.setItem("receitas", JSON.stringify(novasReceitas));
    window.history.back();
  };

  if (!receita) return <p>Cargando...</p>;

  const isUserRecipe = () => {
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
    return receitasSalvas.some((r) => r.id === id);
  };

  return (
    <Container className="receita-details-container">
      <h1 className="text-center">{receita.nome}</h1>
      <Card>
        {receita.imagem ? (
          <Card.Img variant="top" src={receita.imagem} alt={receita.nome} />
        ) : (
          <Card.Img
            variant="top"
            src="/path/to/default-image.jpg"
            alt="Imagem padrão"
          />
        )}
        <Card.Body>
          <Card.Title>Ingredientes</Card.Title>
          <ul>
            {receita.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <Card.Title>Método de preparación</Card.Title>
          {receita.video ? (
            <iframe
              width="100%"
              height="315"
              src={receita.video}
              title="Vídeo da Receita"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Vídeo no disponible.</p>
          )}
          <p className="modo-preparo">{receita.modoDePreparo}</p>
          <Button variant="dark" onClick={() => window.history.back()}>
            Volver
          </Button>
          {isUserRecipe() && (
            <>
              <Button
                variant="warning"
                onClick={handleShowModal}
                className="ml-2"
              >
                Editar Receta
              </Button>
              <Button
                variant="danger"
                onClick={removerReceita}
                className="ml-2"
              >
                Eliminar Receta
              </Button>
            </>
          )}
        </Card.Body>
      </Card>

      <AddReceita
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        novaReceita={novaReceita}
        setNovaReceita={setNovaReceita}
        categorias={["Categoria 1", "Categoria 2"]}
        adicionarReceita={editarReceita}
      />
    </Container>
  );
};

export default Detalhes;
