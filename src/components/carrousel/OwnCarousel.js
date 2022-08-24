import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const OwnCarousel = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item className="item">
        <img
          src="./assets/slider/slider-1.png"
          alt="slider1.png"
          className="img-fluid"
        />
        <Carousel.Caption>
          <h3>Animes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="img-fluid"
          src="./assets/slider/slider-2.jpg"
          alt="slider1.png"
        />
        <Carousel.Caption>
          <h3>Mangas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="img-fluid"
          src="./assets/slider/slider-3.jpg"
          alt="slider1.png"
        />
        <Carousel.Caption>
          <h3>Characters</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="img-fluid"
          src="./assets/slider/slider-4.jpg"
          alt="slider1.png"
        />
        <Carousel.Caption>
          <h3>Persons</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default OwnCarousel;
