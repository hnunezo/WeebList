import { useState } from "react";
import FavList from "./FavList";
import Select from "./Select";
import Swal from "sweetalert2";
import "../home/homestyle.css";
import "./fav.css";

const FavView = ({ fav, setFav }) => {
  const [selected, setSelected] = useState("");

  const deleteFav = (elemento) => {
    Swal.fire({
      title: `Do you want to delete ${
        elemento.el_type === "anime" || elemento.el_type === "manga"
          ? elemento.title
          : elemento.name
      } from your favorites?`,
      imageUrl: "./assets/alert_icons/info.png",
      imageWidth: "15rem",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
      iconColor: "#e95fa0",
      confirmButtonColor: "#e95fa0",
      denyButtonColor: "#8e3563",
      customClass: {
        popup: "popup",
        confirmButton: "button-swal2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const copy = fav.filter((el) => el.mal_id !== elemento.mal_id);
        const switchingRank = copy.filter(
          (el) => el.el_type === elemento.el_type
        );
        const favWithoutType = copy.filter((el) =>
          el.el_type !== elemento.el_type ? el : null
        );
        switchingRank.forEach((el, i) => {
          el.rank = Number(i) + 1;
        });
        switchingRank.forEach((el) => favWithoutType.push(el));
        setFav(favWithoutType);
        Swal.fire({
          title: "Deleted",
          imageUrl: "./assets/alert_icons/success.png",
          imageWidth: "15rem",
          text: `${
            elemento.el_type === "anime" || elemento.el_type === "manga"
              ? elemento.title
              : elemento.name
          } has been deleted from favorites`,
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
      } else if (result.isDenied) {
        Swal.fire({
          title: "Not deleted",
          imageUrl: "./assets/alert_icons/not_deleted.png",
          imageWidth: "15rem",
          text: `${
            elemento.el_type === "anime" || elemento.el_type === "manga"
              ? elemento.title
              : elemento.name
          } was not deleted`,
          icon: "error",
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
    });
  };

  const changeSelected = (option) => {
    setSelected(option);
  };

  const style = {
    backgroundImage: `url(./assets/slider/fav-bg.jpg
    `,
    height: "25rem",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: "6rem",
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div style={style}>
        <h2
          className="display-1 fw-bold text-border"
          style={{ color: " #e95fa0" }}
        >
          My preferences
        </h2>
      </div>
      <div className="container-home p-4 mb-4 negative-margin">
        <Select changeSelected={changeSelected} />
        {selected !== "" ? (
          <div
            className="w-100"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5>CONSIDERS</h5>
            <ul className="w-75 text-start">
              <li className="p-1">
                Sorted by the order in which they were added to your favorites.
              </li>
              <li>
                IT'S A DRAGABLE LIST!! That means you can change the order, by
                clicking on each item and placing it in the range you want.
              </li>
              <li>You can delete items by clicking in the dump icon.</li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="w-75 text-center">
        {selected !== "" ? (
          <FavList
            fav={fav}
            orderedFav={fav
              .filter((el) => el.el_type === selected)
              .sort(function (a, b) {
                return a - b;
              })}
            deleteFav={deleteFav}
            setFav={setFav}
          />
        ) : (
          <span className="text-color ms-2 fw-bolder">Not selected list</span>
        )}
      </div>
    </div>
  );
};

export default FavView;
