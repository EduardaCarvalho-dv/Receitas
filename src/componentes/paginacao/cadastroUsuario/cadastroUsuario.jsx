import { useState } from "react";
//import {fakeBack} from "../../../data/fakeBack.js";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import {
    //Navbar,
    Container,
    //Nav,
    // NavDropdown,
    Form,
    Button,
    //NavLink,
  } from "react-bootstrap";
import "../../../styles/cadastroUsuario.css";

const CadastroUsuario = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confSenha: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
    
        const response = await axios.post("http://localhost:3000/login", {
          email: formData.email,
          senha: formData.senha,
        });
        if (response.status === 201) {
          alert("Login Exitoso!");
          navigate("/home");
        }
      } else {
      
        if (formData.senha !== formData.confSenha) {
          alert("Las contraseñas no coinciden!");
          return;
        }

        /*const verificaUsuario = await fakeBack.verificaUsuarioDupado(formData.email);
        if(verificaUsuario) {
         aler("Usuário já existente")
         //porque isafo mnão funciona estou enloquecendo mesuddasdad aaaaaaaaa
        }*/

        const response = await axios.post("http://localhost:3000/usuarios", {
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
        });
        if (response.status === 201) {
          alert("Registro Exitoso!");
          setFormData({
            nome: "",
            email: "",
            senha: "",
            confSenha: "",
          });
          //console.log("Redirecionando para a página inicial...");
          navigate("/"); 
        }
      }
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-container p-4 bg-light rounded">
        <h2>{isLogin ? "Área de Login" : "Área de Registro"}</h2>
        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Introduce tu nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Introduce tu e-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Introduce tu contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </Form.Group>
          {!isLogin && (
            <Form.Group className="mb-3" controlId="confSenha">
              <Form.Label>Confirma tu contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                name="confSenha"
                value={formData.confSenha}
                onChange={handleChange}
              />
            </Form.Group>
          )}
          <Button variant="dark" type="submit" className=" w-100">
            {isLogin ? "Login" : "Registro"}
          </Button>
        </Form>
        <div className="mt-3">
          <p>
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
            <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Regístrate aquí" : "Faça tu Login"}
            </Button>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CadastroUsuario;
