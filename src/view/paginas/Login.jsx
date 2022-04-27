import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"

const Login = () => {
  return (
    <main className="caixaCentral">
      <form className="cadastroQuadro">
        <h1 className="cadastre-se login">Bem-vindo!</h1>
        <div className="login">
          <label className="labels" htmlFor="login">
            Seu login:
          </label>
          <input
            className="input input_login"
            value="rikinm"
            name="login"
            type="text"
          />
        </div>
        <div className="senha">
          <label className="labels" htmlFor="senha">
            Sua senha:
          </label>
          <input
            className="input input_senha"
            value="senha12"
            type="password"
            name="senha"
          />
        </div>
        <span className="labels semConta">
          Não tem conta?{" "}
          <Link className="cliqueAqui" to="/">
            Clique aqui
          </Link>
        </span>
        <ul className="listaFantasma"></ul>
        <input type="submit" className="criarConta botaoSubmit" value="Login" />
      </form>
    </main>
  );
};

export default Login;