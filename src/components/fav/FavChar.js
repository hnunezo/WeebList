import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Draggable } from "react-beautiful-dnd";
import "./fav.css";

const FavChar = ({ fav, deleteFav, index }) => {
  const styles = {
    width: "2rem",
  };

  return (
    <Draggable draggableId={fav.mal_id.toString()} index={index}>
      {(provided) => (
        <tr
          className="table-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <th scope="row" className="text-center">
            {fav.rank}
          </th>
          <td>
            <div className="d-flex align-items-center mt-2">
              <img
                src={fav.image_url}
                alt={`${fav.img_url}.jpg`}
                style={styles}
              />
              <p className="ms-4 ">{fav.name}</p>
            </div>
          </td>
          <td className="text-center">
            <Button className="btn-danger" onClick={() => deleteFav(fav)}>
              <FaTrash />
            </Button>
          </td>
        </tr>
      )}
    </Draggable>
  );
};

export default FavChar;
