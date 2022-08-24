import "./homestyle.css";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container-page-home">
      <div className="container-home mt-4">
        <div className="home-title justify-content-center">
          <h2 className="display-1">Welcome Weeb </h2>
          <img
            src="./assets/home_title.png"
            alt="Welcome"
            className="home-title-img"
          />
        </div>
      </div>

      <div className="row my-4 text-center text-md-start space-bet">
        <div className="col-sm-12 col-lg-5 container-home">
          <h2 className="display-3">Porpuse</h2>
          <p className="lead">
            The construction of this application in its beginnings is thinking
            about the self-practice of skills in React Framework and UX/UI
            design.
          </p>
          <p className="lead">
            This app will be updated over time, so maybe it will be different if
            you visit it in a month.
          </p>
        </div>
        <div className="col-sm-12 col-lg-5 container-home">
          <h2 className="display-3">Idea</h2>
          <p className="lead">
            It's simple, a browser for anime series, manga, characters and voice
            actors. from the anime industry, and you can bookmark it and order
            it for rank in a top
          </p>
        </div>
      </div>
      <div className="col-12 text-center my-4">
        <h2 className="display-1 message">I hope you enjoy the application</h2>
        <img src="./assets/main.png" alt="main" className="main-img" />
      </div>
      <div className="row my-4 text-center text-md-start space-bet">
        <div className="col-xs-12 col-lg-3 text-center container-home">
          <h2 className="display-5">API Link</h2>
          <a
            href="https://jikan.moe"
            target={"_blank"}
            className="lead links"
            rel="noreferrer"
          >
            Jikan API
          </a>
        </div>
        <div className="col-xs-12 col-lg-3 text-center container-home">
          <h2 className="display-5">GitHub</h2>
          <a href="/" target={"_blank"} className="lead links">
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
