import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

import { ListaFantasma } from "../components";
import validaCampos from "../../controller/errosController";

/*

++++   NOTAS   ++++

CRIAR UM USECONTEXT
UMA FUNÇÃO TIPO AoEnviar (ver "function-components")

esse função vai chamar um evento la no app assim que o usuario enviar o formuçario

++++ FIM NOTAS ++++

*/

const Cadastro = () => {
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [conta, setConta] = useState({});

  const erros = { usuario: false, senha: false, confirmaSenha: false };

  const tamanhoMaximo = (event, limite) =>
    event.target.value.substring(0, limite);

  return (
    <form
      className="cadastroQuadro"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(conta);
      }}
    >
      <h1 className="cadastre-se">Cadastre-se!</h1>
      <input
        onChange={(event) => {
          setUsuario(tamanhoMaximo(event, 25))
          setConta({ ...conta, usuario:usuario })
        }}
        placeholder="Usuario"
        value={usuario}
        className="input input_login"
        name="usuario"
        type="text"
        autoFocus
      />
      <input
        onChange={(event) => {
          setSenha(tamanhoMaximo(event, 15)) 
          //testa se isso aqui funciona
          setConta({ ...conta, senha})
        }}
        placeholder="Senha"
        value={senha}
        className="input input_senha"
        name="senha"
        type="password"
      />
      <input
        placeholder="Confirme sua Senha"
        onChange={
          (event) => setConfirmaSenha(tamanhoMaximo(event, 15))
        }
        value={confirmaSenha}
        className="input input_confirmaSenha"
        name="confirmaSenha"
        type="password"
      />

      <ul className="listaFantasma">
        {/* <li className={`erro ${erros.usuario ? "" : "condeu"}`} >todos os campos devem ter no mínimo 5 caracteres</li> */}
      </ul>

      <button
        // disabled={[
        //   erros.usuario.valido,
        //   erros.senha.valido,
        //   erros.confirmaSenha.valido,
        // ].includes(false)}
        className="criarConta"
      >
        Criar conta!
      </button>
    </form>
  );
};

export default Cadastro;
