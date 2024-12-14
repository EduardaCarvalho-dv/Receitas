import Header from "../header/header";

import Card from 'react-bootstrap/Card';

import Comida1 from "../../../assets/asado.jpg";

const home = () => {
  return (
    <div>
      <Header />

      <div className="emAlta">
        <h2>Receitas em Alta</h2>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Comida1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
          </Card.Body>
        </Card>

      </div>

      <div className="celebracoes">
        <h2>Celebrações</h2>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Comida1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default home;
