import Card from "react-bootstrap/Card";
import "./card.css";
import { useState } from "react";

const CardAni = ({ el, addFav, type }) => {
  const [flipped, setFlipped] = useState(false);
  //ADDING TYPE (ANIME,MANGA,CHARAC, PERSON)
  console.log(el);
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
              src={el.images.jpg.image_url}
              className="img-card"
            />
            <div className="text-card">
              <Card.Title tag="h5">{el.title}</Card.Title>
              <p style={{ fontSize: "0.7rem" }}>{el.title_japanese}</p>
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
            {el.synopsis ? (
              el.synopsis.length > 900 ? (
                <div>
                  <h2>Sipnosis</h2>
                  <Card.Text>{el.synopsis.substring(0, 600)}...</Card.Text>
                </div>
              ) : (
                <div>
                  <h2>Sipnosis</h2>
                  <Card.Text>{el.synopsis}</Card.Text>
                </div>
              )
            ) : (
              <h2>No synopsis allowed</h2>
            )}
            <button
              onClick={() => setFlipped(false)}
              className="button button-add"
              style={{
                marginTop: "0.5rem",
              }}
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
