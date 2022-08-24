import Card from "react-bootstrap/Card";
import "./card.css";
import { useState } from "react";

const CardAni = ({ el, addFav, type }) => {
  const [flipped, setFlipped] = useState(false);
  //ADDING TYPE (ANIME,MANGA,CHARAC, PERSON)
  const copy = { el_type: type, ...el };
  return (
    <div className="div-relative">
      <Card text="white" className="flip-card">
        <div
          className="flip-card-inner"
          style={flipped === true ? { transform: "rotateY(180deg)" } : null}
        >
          <div className="flip-card-front">
            <Card.Img
              alt={`${el.title}.png`}
              src={el.image_url}
              className="img-card"
            />
            <div className="text-card">
              <Card.Title tag="h5">{el.title}</Card.Title>
              <div className="d-flex gap-3 justify-content-center ">
                <button
                  variant="info me-1"
                  onClick={() => setFlipped(true)}
                  className="button button-detail"
                >
                  Details
                </button>
                <button
                  onClick={() => addFav(copy)}
                  className="button button-add"
                >
                  Add Fav
                </button>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h2>Sipnosis</h2>
            <Card.Text>{el.synopsis}</Card.Text>
            <button
              onClick={() => setFlipped(false)}
              className="button button-add"
            >
              {" "}
              Back
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardAni;
