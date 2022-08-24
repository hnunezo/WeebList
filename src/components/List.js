import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import CardAni from "./CardAni";
import CardChar from "./CardChar";
import Col from "react-bootstrap/Col";

const List = ({ searched, addFav, type }) => {
  return (
    <CardGroup className="w-75 m-auto">
      <Row>
        {searched.map((el) => {
          return (
            <Col xs={12} md={6} lg={4} className="m-auto mb-4" key={el.mal_id}>
              {type === "anime" || type === "manga" ? (
                <CardAni el={el} addFav={addFav} type={type} />
              ) : (
                <CardChar el={el} addFav={addFav} type={type} />
              )}
            </Col>
          );
        })}
      </Row>
    </CardGroup>
  );
};

export default List;
