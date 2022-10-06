import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";

const MyNavBar = ({ changeUrl }) => {
  return (
    <div>
      <Navbar className="p-0" expand="lg" variant="dark">
        <Container>
          <div>
            <Navbar.Brand>
              <a
                onClick={() => changeUrl("/home")}
                className="text-decoration-none text-light"
                href="#/home"
              >
                WeebList
              </a>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-auto">
              <Nav.Link
                onClick={() => changeUrl("/anime")}
                className="text-white nav-item p-3"
              >
                Anime
              </Nav.Link>
              <Nav.Link
                onClick={() => changeUrl("/manga")}
                className="text-white nav-item p-3"
              >
                Manga
              </Nav.Link>
              <Nav.Link
                onClick={() => changeUrl("/characters")}
                className="text-white nav-item p-3"
              >
                Character
              </Nav.Link>
              <Nav.Link
                onClick={() => changeUrl("/people")}
                className="text-white nav-item p-3"
              >
                Person
              </Nav.Link>
              <Nav.Link
                onClick={() => changeUrl("/favorites")}
                className="text-white nav-item p-3"
              >
                Favorites
              </Nav.Link>
            </Nav>
            <a
              href="https://github.com/hnunezo/WeebList"
              target={"_blank"}
              rel="noreferrer"
              className="nodecoration"
            >
              <img
                src="./assets/github.png"
                alt="git.png"
                className="git-img"
              />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavBar;
