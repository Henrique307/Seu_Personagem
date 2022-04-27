import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

import { ListaFantasma } from "../components";

import { Usuario } from "../../controller/cadastroController";
import { busca, envia, checaBanco } from "../../controller/dadosController";
import { tamanhoMaximo, tamanhoMinimo } from "../../controller/errosController";

const Cadastro = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [contas, setContas] = useState([]);
  const [erros, setErros] = useState({
    usuario: {
      valido: true,
      mensagem: "Seu nome de usuário deve ter no mínimo 5 caracteres",
    },
    senha: {
      valido: true,
      mensagem: "Sua senha deve ter no mínimo 5 caracteres",
    },
    confirmaSenha: { valido: true, mensagem: "As senhas não combinam" },
  });

  function procuraErro(erros){
    for (const erro in erros){
      if(erros[erro].valido){
        continue
      }
      return false
    }
  }

  useEffect(() => {
    busca(setContas);
  }, [setContas]);

  return (
    <form
      className="cadastroQuadro"
      onSubmit={(event) => {
        event.preventDefault();
        if(procuraErro(erros)){

        }
      }}
    >
      <h1 className="cadastre-se">Cadastre-se!</h1>
      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(event) => {
          setUsuario(tamanhoMaximo(event, 25));
        }}
        onBlur={(event) =>
          setErros({
            ...erros,
            usuario: { ...erros.usuario, valido: tamanhoMinimo(event) },
          })
        }
        className="input input_login"
        name="usuario"
        type="text"
        autoFocus
      />
      <input
        placeholder="Senha"
        value={senha}
        onChange={(event) => {
          setSenha(tamanhoMaximo(event, 15));
        }}
        onBlur={(event) =>
          setErros({
            ...erros,
            senha: { ...erros.senha, valido: tamanhoMinimo(event) },
          })
        }
        className="input input_senha"
        name="senha"
        type="password"
      />
      <input
        value={confirmaSenha}
        onChange={(event) => {
          setConfirmaSenha(tamanhoMaximo(event, 15));
        }}
        onBlur={() => {
          if (senha !== confirmaSenha)
            setErros({
              ...erros,
              confirmaSenha: { ...erros.confirmaSenha, valido: false },
            });
        }}
        placeholder="Confirme sua Senha"
        className="input input_confirmaSenha"
        type="password"
        name="confirmaSenha"
      />

      <ul className="listaFantasma">
        <li className={`erro ${erros.usuario.valido ? "condeu" : ""}`}>{erros.usuario.mensagem}</li>
        <li className={`erro ${erros.senha.valido ? "condeu" : ""}`}>{erros.senha.mensagem}</li>
        <li className={`erro ${erros.confirmaSenha.valido ? "condeu" : ""}`}>{erros.confirmaSenha.mensagem}</li>
      </ul>

      {/*
            for (campo in objeto){
              negocio[campo]
            }
          */}

      <Link to="/login">
        <button
          disabled={[
            erros.usuario.valido,
            erros.senha.valido,
            erros.confirmaSenha.valido,
          ].includes(false)}
          className="criarConta"
        >
          Criar conta!
        </button>
      </Link>
    </form>
  );
};

export default Cadastro;
