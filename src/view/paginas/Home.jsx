import React from 'react';
import "../css/style.css"

const Home = () => {
  return (
    <main className="caixaCentral">
      <nav className="nav_tabs">
        <ul>
          <li>
            <input type="radio" id="tab1" className="rd_tab" name="tabs"/>
            <label htmlFor="tab1" className="tab_label">Seus Personagens</label>
            <div className="tab-content">
              <section className="seusPersonagens">
                <table>
                  <tr>
                    <th>Nome</th>
                    <th>ClassNamee</th>
                    <th>Raça</th>
                    <th>Nível</th>
                  </tr>
                  <tr>
                    <td>Mecatrom</td>
                    <td>Guerreiro</td>
                    <td>Ciborgue</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Mecatrom</td>
                    <td>Guerreiro</td>
                    <td>Ciborgue</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Mecatrom</td>
                    <td>Guerreiro</td>
                    <td>Ciborgue</td>
                    <td>10</td>
                  </tr>
                </table>
              </section>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" className="rd_tab" id="tab2" checked/>
            <label htmlFor="tab2" className="tab_label">Novo Personagem</label>
            <div className="tab-content">
              <section className="novoPersonagem">
                <input type="text" className="inputsNP nome_do_Personagem" placeholder="Nome"/>
                <input type="text" className="inputsNP nome_do_Personagem" placeholder="ClassNamee"/>
                <input type="text" className="inputsNP nome_do_Personagem" placeholder="Nível"/>
                <input type="text" className="inputsNP raca_do_personagem" placeholder="Raça"/>
              </section>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" className="rd_tab" id="tab3"/>
            <label htmlFor="tab3" className="tab_label">Importar Personagem</label>
            <div className="tab-content">
              <section className="importarPersonagem">

              </section>
            </div>
          </li>
        </ul>
      </nav>
    </main> 

  )
}

export default Home


    {/* <header className='banner_home'>
      <a href="login.html" className="link">
        <img src="./assets/logo.jpeg" alt="Logo HonorBound" title="Honor Bound" className="logo">
      </a>
      <div className="perfil">
        <h1>Nome do usuário</h1>
        <img src="./assets/defaultPicture.jpg" alt="Sua foto" className="foto_de_perfil">
      </div>
    </header> */}