import axios from "axios";

export const fetchAndMergeReceitas = async () => {
  try {

    const response = await axios.get("/db.json");
    const receitasFixas = response.data.receitas;

    const localReceitas = JSON.parse(localStorage.getItem("receitas")) || [];
    const receitasUnificadas = [
      ...receitasFixas,
      ...localReceitas.filter(
        (local) => !receitasFixas.some((fixa) => fixa.id === local.id)
      ),
    ];

    return receitasUnificadas;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    return [];
  }
};
