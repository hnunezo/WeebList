import FavAni from "./FavAni";
import FavChar from "./FavChar";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./fav.css";
const FavList = ({ fav, orderedFav, deleteFav, setFav }) => {
  const handleOnDragEnd = (result) => {
    let arrFinded = [];
    let arrayNFinded = [];
    if (!result.destination) return;
    const copy = [...orderedFav];
    const [reorderItems] = copy.splice(result.source.index, 1);
    copy.splice(result.destination.index, 0, reorderItems);
    const orderedCopy = copy.map((el, index) => {
      return { ...el, rank: index + 1 };
    });

    fav.forEach((elemento) => {
      if (orderedCopy.some((element) => element.mal_id === elemento.mal_id)) {
        const indexElement = orderedCopy.findIndex(
          (obj) => obj.mal_id === elemento.mal_id
        );
        arrFinded.push(orderedCopy[indexElement]);
      } else {
        arrayNFinded.push(elemento);
      }
    });
    setFav([...arrFinded, ...arrayNFinded]);
  };

  return (
    <div className="table-container">
      {orderedFav.length > 0 ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <table
                className="w-100 "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <thead>
                  <tr>
                    <th className="col text-center ">Your Rank</th>
                    <th className="col text-center">Title / Name</th>
                    <th className="col text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {orderedFav
                    .sort((a, b) => a.rank - b.rank)
                    .map((favorite, index) => {
                      if (
                        favorite.el_type === "anime" ||
                        favorite.el_type === "manga"
                      ) {
                        return (
                          <FavAni
                            key={favorite.mal_id}
                            fav={favorite}
                            deleteFav={deleteFav}
                            index={index}
                          />
                        );
                      } else {
                        return (
                          <FavChar
                            key={favorite.mal_id}
                            fav={favorite}
                            deleteFav={deleteFav}
                            index={index}
                          />
                        );
                      }
                    })}
                  {provided.placeholder}
                </tbody>
              </table>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <span className="text-color fw-bold">Empty List</span>
      )}
    </div>
  );
};

export default FavList;
