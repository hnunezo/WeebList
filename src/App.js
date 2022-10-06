import "./index.css";
import MyNavBar from "./components/navBar/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import MyRoutes from "./Routes/Routes";
import Swal from "sweetalert2";
import OwnCarousel from "./components/carrousel/OwnCarousel";
import Footer from "./components/footer/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [searched, setSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fav, setFav] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setSearched([]);
    // CONDICIONAL SI ESTA VACIO SEARCH
    if (search !== "") {
      let url = "";
      url = `https://api.jikan.moe/v4/${type}?q=${search}&limit=12`;

      //CONDICIONAL SEGUN LA URL
      if (type === "people" || type === "character") {
        url = `https://api.jikan.moe/v4/${type}?q=${search}&limit=12`;
        console.log(url);
      }

      //SETTIME PARA EL LOADER
      const delayDebounceFn = setTimeout(() => {
        // Send Axios request here
        axios
          .request(url)
          .then(function (response) {
            setSearched(response.data.data);
            console.log(response, "response");
            setIsLoading(false);
          })
          .catch(function () {
            setIsLoading(false);
          });
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [search, type]);

  const addFav = (anime) => {
    if (fav.filter((el) => el.mal_id === anime.mal_id).length > 0) {
      Swal.fire({
        title: "Wait..",
        imageUrl: "./assets/alert_icons/info.png",
        imageWidth: "15rem",
        text: `${
          anime.el_type === "anime" || anime.el_type === "manga"
            ? anime.title
            : anime.name
        } is alredy in your favs`,
        icon: "info",
        timer: 3000,
        timerProgressBar: true,
        iconColor: "#e95fa0",
        confirmButtonColor: "#e95fa0",
        customClass: {
          timerProgressBar: "swal2-timer-progress-bar2",
          popup: "popup",
          confirmButton: "button-swal2",
        },
      });
    } else {
      const copy = fav.filter((el) => el.el_type === anime.el_type);
      const addRank = { myrank: copy.length + 1, ...anime };
      setFav(fav.concat(addRank));
      Swal.fire({
        title: "Success",
        imageUrl: "./assets/alert_icons/success.png",
        imageWidth: "15rem",
        text: `${
          anime.el_type === "anime" || anime.el_type === "manga"
            ? anime.title
            : anime.name
        } is added to your favs ${anime.el_type}s`,
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        iconColor: "#e95fa0",
        confirmButtonColor: "#e95fa0",
        customClass: {
          timerProgressBar: "swal2-timer-progress-bar2",
          popup: "popup",
          confirmButton: "button-swal2",
        },
      });
    }
  };

  const changeUrl = (url) => {
    navigate(`${url}`);
  };

  const reset = () => {
    setSearch("");
    setSearched([]);
  };

  const styleContainer = {
    height: "94vh",
  };

  const viewContainer = {
    height: "100%",
  };
  return (
    <div
      className="container-general"
      style={
        window.location.hash === "#/" || window.location.hash === ""
          ? { height: "100%" }
          : window.location.hash === "#/anime" ||
            window.location.hash === "#/manga" ||
            window.location.hash === "#/character" ||
            window.location.hash === "#/person" ||
            window.location.hash === "#/favorites"
          ? viewContainer
          : search === "" || isLoading === true
          ? styleContainer
          : { height: "100%" }
      }
    >
      <MyNavBar changeUrl={changeUrl} />
      {window.location.hash === "#/home" ? <OwnCarousel /> : null}
      <Container className="m-auto main-container pb-4 px-0 mt-4 mb-4 border rounded vh-md-100">
        <MyRoutes
          search={search}
          setSearch={setSearch}
          isLoading={isLoading}
          searched={searched}
          addFav={addFav}
          changeUrl={changeUrl}
          setType={setType}
          type={type}
          reset={reset}
          fav={fav}
          setFav={setFav}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
