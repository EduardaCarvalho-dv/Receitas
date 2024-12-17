import Header from "../header/Header";

import Card from "react-bootstrap/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { celebracoes, receitasEmAlta } from "../../../data/cardsReceitas";

import "../../../styles/home.css";

const Home = () => {
  
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

  return (
    <>
      <Header />
      <div className="home">
        <div className="conteudoHome">

          <div className="emAlta">
            <h2>Receitas em Alta</h2>

            <Slider {...configura}>
              {receitasEmAlta.map((item) => {
                return (
                  <div key={item.id} className="cardEmAlta">
                    <div className="info">
                      <div className="cont-left">
                        <h3 className="receitaTitulo">{item.title}</h3>
                        <p className="receitaDescricao">{item.descricao}</p>
                        <div className="botaoReceita">
                          <button className="btnReceita">SAIBA MAIS</button>
                        </div>
                      </div>
                      <div className="receitaImagem">
                        <img src={item.img} alt={item.title} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="celebracoes">
            <h2>Celebrações</h2>

            <Slider {...conf}>
              {celebracoes.map((card) => {
                return (
                  <div key={card.id} className="receitaCard">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        className="imgReceita"
                        variant="top"
                        src={card.img}
                      />
                      <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
