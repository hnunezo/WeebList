import Home from "../components/home/Home";
import { Route, Routes } from "react-router-dom";
import View from "../components/View";
import FavView from "../components/fav/FavView";

const MyRoutes = ({
  search,
  setSearch,
  message,
  isLoading,
  searched,
  addFav,
  changeUrl,
  setType,
  type,
  reset,
  fav,
  setFav,
}) => {
  return (
    <>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route
          path="/anime"
          element={
            <View
              search={search}
              setSearch={setSearch}
              message={message}
              isLoading={isLoading}
              searched={searched}
              addFav={addFav}
              changeUrl={changeUrl}
              setType={setType}
              type={type}
              reset={reset}
            />
          }
        />
        <Route
          path="/manga"
          element={
            <View
              search={search}
              setSearch={setSearch}
              message={message}
              isLoading={isLoading}
              searched={searched}
              addFav={addFav}
              changeUrl={changeUrl}
              setType={setType}
              type={type}
              reset={reset}
            />
          }
        />
        <Route
          path="/characters"
          element={
            <View
              search={search}
              setSearch={setSearch}
              message={message}
              isLoading={isLoading}
              searched={searched}
              addFav={addFav}
              changeUrl={changeUrl}
              setType={setType}
              type={type}
              reset={reset}
            />
          }
        />
        <Route
          path="/people"
          element={
            <View
              search={search}
              setSearch={setSearch}
              message={message}
              isLoading={isLoading}
              searched={searched}
              addFav={addFav}
              changeUrl={changeUrl}
              setType={setType}
              type={type}
              reset={reset}
            />
          }
        />
        <Route
          path="/favorites"
          element={<FavView fav={fav} setFav={setFav} />}
        />
      </Routes>
    </>
  );
};

export default MyRoutes;
