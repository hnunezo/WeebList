import LoadingSpinner from "./spinner/Loading";
import SearchInput from "./SearchInput";
import List from "./List";
import { useEffect } from "react";

const View = ({
  search,
  setSearch,
  message,
  isLoading,
  searched,
  addFav,
  setType,
  type,
  reset,
}) => {
  useEffect(() => {
    reset();
    setType(window.location.hash.slice(2));
  }, [window.location.hash]); // eslint-disable-line

  const style = {
    backgroundImage: `url(./assets/slider/slider-${
      type === "anime"
        ? "1.png"
        : type === "manga"
        ? "2.jpg"
        : type === "character"
        ? "3.jpg"
        : type === "person"
        ? "4.jpg"
        : null
    })`,
    height: "25rem",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: "6rem",
  };

  const text = {
    color: "#e95fa0",
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div style={style}>
        <h2 className="display-1 fw-bold text-border" style={text}>
          {type === "anime"
            ? "Anime"
            : type === "manga"
            ? "Manga"
            : type === "character"
            ? "Character"
            : type === "person"
            ? "Person"
            : null}
        </h2>
      </div>
      <SearchInput
        search={search}
        handleChange={(e) => setSearch(e.target.value)}
        type={type}
        searched={searched}
        isLoading={isLoading}
      />
      {search === "" || search.length <= 3 ? null : isLoading ? (
        <LoadingSpinner />
      ) : (
        <List searched={searched} addFav={addFav} type={type} />
      )}
    </div>
  );
};

export default View;
