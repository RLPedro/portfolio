import "./styles/Works.css";
import portfolio from "../imgs/print-portffolio.png";
import visimusic from "../imgs/print-visimusic.png";
import cocktail from "../imgs/print-cocktail-app.png";
import todo from "../imgs/print-todo-app.png";

const Works = () => {
  return (
    <div className="works" id="works">
      <p className="works__title">PROJECTS</p>

      <section className="works__gallery">

        <figure className="works__gallery-item works__gallery-item1">
          <a href="https://github.com/rlpedro/rlpedro.github.io/" target="_blank" rel="noreferrer">
            <img src={portfolio} class="gallery__img" alt="Ricardo Leitao Pedro's portfolio" />
          </a>
          <span className="works__gallery-item-title">Portfolio</span>
          <span className="works__gallery-item-desc">front-end for online portfolio</span>
          <span className="works__gallery-item-tech">Tech stack: ReactJS, NodeJS</span>
          <section className="works__gallery-item-buttons">
            <a href="https://github.com/RLPedro/portfolio" target="_blank" rel="noreferrer">
              <button className="gallery-button">CODE</button>
            </a>
          </section>
        </figure>

      <figure className="works__gallery-item works__gallery-item2">
        <a href="https://visimusic.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={visimusic} className="gallery__img" alt="Visimusic app" />
        </a>
        <span className="works__gallery-item-title">VisiMusic</span>
        <span className="works__gallery-item-desc">full-stack e-commerce app for musical instruments and equipment</span>
        <span className="works__gallery-item-tech">Tech stack: ReactJS, NodeJS, MongoDB</span>
        <section className="works__gallery-item-buttons">
          <a href="https://visimusic.herokuapp.com/" target="_blank" rel="noreferrer">
              <button className="gallery-button">APP</button>
          </a>
          <a href="https://github.com/RLPedro/visimusic" target="_blank" rel="noreferrer">
            <button className="gallery-button">CODE</button>
          </a>
        </section>
      </figure>

        <figure className="works__gallery-item works__gallery-item3">
        <a href="https://github.com/RLPedro/cocktailapp" target="_blank" rel="noreferrer">
          <img src={cocktail} className="gallery__img" alt="Cocktail app" />
        </a>
        <span className="works__gallery-item-title">Cocktail app</span>
        <span className="works__gallery-item-desc">App to fetch cocktails from "The Cocktail DB"</span>
        <span className="works__gallery-item-tech">Tech stack: ReactJS, NodeJS</span>
        <section className="works__gallery-item-buttons">
          {/* <a href="https://visimusic.herokuapp.com/" target="_blank" rel="noreferrer">
              <button className="gallery-button">APP</button>
          </a> */}
          <a href="https://github.com/RLPedro/cocktailapp" target="_blank" rel="noreferrer">
            <button className="gallery-button">CODE</button>
          </a>
        </section>
        </figure>

        <figure className="works__gallery-item works__gallery-item4">
        <a href="https://github.com/RLPedro/todoapp" target="_blank" rel="noreferrer">
          <img src={todo} className="gallery__img" alt="To-do app" />
        </a>
        <span className="works__gallery-item-title">Todo app</span>
        <span className="works__gallery-item-desc">Simple client-side to-do app</span>
        <span className="works__gallery-item-tech">Tech stack: ReactJS, Redux, NodeJS</span>
        <section className="works__gallery-item-buttons">
          {/* <a href="https://visimusic.herokuapp.com/" target="_blank" rel="noreferrer">
              <button className="gallery-button">APP</button>
          </a> */}
          <a href="https://github.com/RLPedro/todoapp" target="_blank" rel="noreferrer">
            <button className="gallery-button">CODE</button>
          </a>
        </section>
        </figure>

        {/* <figure className="works__gallery-item works__gallery-item5">
          <span>Project 5</span>
        </figure>

        <figure className="works__gallery-item works__gallery-item6">
          <span>Project 6</span>
        </figure> */}

      </section>
    </div>
  );
};

export default Works;
