import { FaPen, FaSearch } from "react-icons/fa";
import { PostContainer, Btn } from "./styles";

import postOne from "../../assets/post-01.jpg";

export function Post() {
  return (
    <PostContainer>
      <div className="search">
        <h3>Pesquisar por tarefa</h3>
        <label>
          <FaSearch />
          <input
            placeholder="pesquisar por tarefa"
            type="text"
            className="form-control"
          />
          <Btn>Pesquisar</Btn>
        </label>
      </div>
      <h4 className="counter">Resultados (23)</h4>

      <div className="post-items">
        <figure>
          <img src={postOne} alt="" className="img-fluid" />
          <figcaption>
            <div className="cta">
              <Btn className="primary">privado</Btn>
              <Btn className="primary">visualizações</Btn>
            </div>
            <div className="edit">
              <FaPen />
            </div>
            <div className="title">
              <h2>
                Funcionamento da engenharia de <br /> software!
              </h2>
            </div>
          </figcaption>
        </figure>
        <div className="content">
          <div className="date">
            <h5>09</h5>
            <span>Nov 2021</span>
          </div>
          <div className="desc">
            <p>
              Preparamos para si o melhor dos dois mundos, tecnologia e a
              facilidade de <br /> possuir ferramentas que de certas forma irão
              dinamizar o processo de <br /> aprendizado uma vez que estará
              associado... <a href=""> Carregar tudo</a>
            </p>
          </div>
        </div>
      </div>

      <div className="post-items">
        <figure>
          <img src={postOne} alt="" className="img-fluid" />
          <figcaption>
            <div className="cta">
              <Btn className="primary">privado</Btn>
              <Btn className="primary">visualizações</Btn>
            </div>
            <div className="edit">
              <FaPen />
            </div>
            <div className="title">
              <h2>
                Funcionamento da engenharia de <br /> software!
              </h2>
            </div>
          </figcaption>
        </figure>
        <div className="content">
          <div className="date">
            <h5>09</h5>
            <span>Nov 2021</span>
          </div>
          <div className="desc">
            <p>
              Preparamos para si o melhor dos dois mundos, tecnologia e a
              facilidade de <br /> possuir ferramentas que de certas forma irão
              dinamizar o processo de <br /> aprendizado uma vez que estará
              associado... <a href=""> Carregar tudo</a>
            </p>
          </div>
        </div>
      </div>
    </PostContainer>
  );
}
