import Card from "react-bootstrap/Card";

const CardChar = ({ el, addFav, type }) => {
  //ADDING TYPE (ANIME,MANGA,CHARAC, PERSON)
  const copy = { el_type: type, ...el };
  return (
    <div className="div-relative">
      <Card text="white" className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img
              alt={`${el.name}.png`}
              src={el.images.jpg.image_url}
              className="img-card"
            />
            <div className="text-card">
              <Card.Title tag="h5">{el.name}</Card.Title>
              {type === "people" ? (
                el.alternate_names.length > 0 ? (
                  <Card.Subtitle>
                    Alt. Name: {el.alternate_names[0]}
                  </Card.Subtitle>
                ) : null
              ) : (
                <Card.Subtitle>{el.name_kanji}</Card.Subtitle>
              )}
              <div className="d-flex gap-3 justify-content-center ">
                <button
                  className="button button-add"
                  onClick={() => addFav(copy)}
                >
                  Add Fav
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardChar;
