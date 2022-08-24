import Card from "react-bootstrap/Card";

const CardChar = ({ el, addFav, type }) => {
  //ADDING TYPE (ANIME,MANGA,CHARAC, PERSON)
  console.log(el);
  const copy = { el_type: type, ...el };
  return (
    <div className="div-relative">
      <Card text="white" className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img
              alt={`${el.name}.png`}
              src={el.image_url}
              className="img-card"
            />
            <div className="text-card">
              <Card.Title tag="h5">{el.name}</Card.Title>
              {el.alternative_names.length > 0 ? (
                <Card.Subtitle>Alt. Name: {el.alternative_names}</Card.Subtitle>
              ) : null}
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