/*import axios from 'axios';

export const fakeBack = {

  verificaUsuarioDupado: async (email) => {
    try {
      const response = await axios.get("http://localhost:3000/usuarios");
      const usuarioExistente = response.data.find(user => user.email === email);
      return usuarioExistente ? true : false;
    } catch (error) {
      console.error("Erro ao verificar e-mail duplicado:", error);
      return false;
    }
  }
};
*/