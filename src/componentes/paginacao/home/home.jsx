import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/home.css";
import { celebracoes } from "../../../data/cardsReceitas"; 
import axios from "axios";
import { Link } from "react-router-dom"; 

const Home = () => {
  const [receitasEmAlta, setReceitasEmAlta] = useState([]);
  const [receitasFixas, setReceitasFixas] = useState([]);

  const conf = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const configura = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const carregarReceitasFixas = async () => {
      try {
        const response = await axios.get("/db.json");
        setReceitasFixas(response.data.receitas);
      } catch (error) {
        console.error("Erro ao carregar receitas fixas:", error);
      }
    };

    carregarReceitasFixas();
  }, []);

  useEffect(() => {
    const receitasSalvas = JSON.parse(localStorage.getItem("receitas")) || [];
    if (receitasFixas.length > 0) {
      setReceitasEmAlta([...receitasSalvas, ...receitasFixas].slice(0, 5)); 
    }
  }, [receitasFixas]);

  return (
    <>
      <Header />
      <div className="home">
        <div className="conteudoHome">
          <div className="emAlta">
            <h2>Recetas de Tendencia</h2>

            <Slider {...configura}>
              {receitasEmAlta.map((item) => (
                <div key={item.id} className="cardEmAlta">
                  <div className="info">
                    <div className="cont-left">
                      <h3 className="receitaTitulo">{item.nome}</h3>
                      <p className="receitaDescricao">{item.descricao}</p>
                      <div className="botaoReceita">
                        <Link to={`/receitas/${item.id}`} className="btnReceita" aria-label={`Ver receita ${item.nome}`}>
                          DESCUBRE MÁS
                        </Link>
                      </div>
                    </div>
                    <div className="receitaImagem">
                      <img src={item.imagem} alt={item.nome} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="celebracoes">
            <h2>Celebraciones</h2>

            <Slider {...conf}>
              {celebracoes.map((card) => (
                <div key={card.id} className="receitaCard">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img className="imgReceita" variant="top" src={card.img} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
