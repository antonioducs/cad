import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './styles.css';

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ require('./images/slide1.png') } 
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ require('./images/slide2.png') }
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item onClick={() => {
         if(window.innerHeight >= 612)
            window.scrollTo(0, 2800);
          else
            window.scrollTo(0, 1800);
      }}>
        <img
          className="d-block w-100"
          src={ require('./images/slide3.png') }
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;