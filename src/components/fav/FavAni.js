import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Draggable } from "react-beautiful-dnd";
import "./fav.css";
const FavAni = ({ fav, deleteFav, index }) => {
  const styles = {
    width: "2rem",
  };

  return (
    <Draggable draggableId={fav.mal_id.toString()} index={index}>
      {(provided) => (
        <tr
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="table-item"
        >
          <th scope="row" className="text-center">
            {fav.myrank}
          </th>
          <th scope="row" className="text-center">
            {fav.rank}
          </th>
          <td>
            <div className="d-flex align-items-center mt-2">
              <img
                src={fav.images.jpg.image_url}
                alt={`${fav.img_url}.jpg`}
                style={styles}
              />
              <p className="ms-4 ">{fav.title}</p>
            </div>
          </td>

          <td className="text-center">
            <Button
              style={{ backgroundColor: "#e95fa0", border: "none" }}
              onClick={() => deleteFav(fav)}
            >
              <FaTrash />
            </Button>
          </td>
        </tr>
      )}
    </Draggable>
  );
};

export default FavAni;
