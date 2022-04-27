import axios from "axios";

const conexao = axios.create({
  baseURL: "http://localhost:5000",
});

const busca = async (setDado) => {
  const resposta = await conexao.get("/usuarios");
  setDado(resposta.data);
};

const envia = (usuario) => {
   conexao.post("/usuarios", {
    nome: usuario.nome,
    senha: usuario.senha,
    id: "usuario-padrao",
    personagens: [],
  }).then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const checaBanco = (usuario, contas) => {
  contas.forEach((conta, index) => {
    if (conta[index].usuario === usuario.nome && conta[index].senha === usuario.senha) {
      return true
    }
    return false
  });
}

export { busca, envia, checaBanco };
