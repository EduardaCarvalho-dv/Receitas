import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddReceita = ({
  showModal,
  handleCloseModal,
  novaReceita,
  setNovaReceita,
  categorias,
  adicionarReceita,
}) => {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNovaReceita({ ...novaReceita, [name]: value });
  };

  const handleAddIngredient = () => {
    setNovaReceita({
      ...novaReceita,
      ingredientes: [...novaReceita.ingredientes, ""],
    });
  };

  const handleRemoveIngredient = (index) => {
    if (novaReceita.ingredientes.length > 1) {
      const ingredientesAtualizados = novaReceita.ingredientes.filter(
        (_, i) => i !== index
      );
      setNovaReceita({ ...novaReceita, ingredientes: ingredientesAtualizados });
    }
  };

  const handleIngredientChange = (index, value) => {
    const ingredientesAtualizados = [...novaReceita.ingredientes];
    ingredientesAtualizados[index] = value;
    setNovaReceita({ ...novaReceita, ingredientes: ingredientesAtualizados });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Receta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre de la Receta</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={novaReceita.nome}
              onChange={handleFormChange}
              isInvalid={!novaReceita.nome}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="categoria"
              value={novaReceita.categoria}
              onChange={handleFormChange}
              isInvalid={!novaReceita.categoria}
            >
              {categorias.map((cat, index) => (
                <option key={index} value={cat === "Todos" ? "" : cat}>
                  {cat}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Este campo es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="descricao"
              value={novaReceita.descricao}
              onChange={handleFormChange}
              isInvalid={!novaReceita.descricao}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Ingredientes</Form.Label>
            {novaReceita.ingredientes.map((ingrediente, index) => (
              <div key={index} className="d-flex mb-2">
                <Form.Control
                  type="text"
                  value={ingrediente}
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  isInvalid={!ingrediente.trim()}
                />
                {novaReceita.ingredientes.length > 1 && (
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveIngredient(index)}
                    className="ml-2"
                  >
                    -
                  </Button>
                )}
              </div>
            ))}
            <Button variant="success" onClick={handleAddIngredient}>
              + Agregar ingrediente
            </Button>
            <Form.Control.Feedback type="invalid">
              Al menos un ingrediente es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Método de preparación</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="modoDePreparo"
              value={novaReceita.modoDePreparo}
              onChange={handleFormChange}
              isInvalid={!novaReceita.modoDePreparo}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Imagem (URL)</Form.Label>
            <Form.Control
              type="text"
              name="imagem"
              value={novaReceita.imagem}
              onChange={handleFormChange}
              isInvalid={!novaReceita.imagem}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Vídeo (URL - opcional)</Form.Label>
            <Form.Control
              type="text"
              name="video"
              value={novaReceita.video}
              onChange={handleFormChange}
            />
            <Form.Text className="text-muted">
              Haga clic en el enlace del vídeo (por ejemplo, a YouTube). Este
              campo es opcional.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="dark" onClick={adicionarReceita}>
          Guardar receta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReceita;
