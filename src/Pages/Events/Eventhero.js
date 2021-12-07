import React from 'react'
import "../Style.css";
// import headimg from "../../Images/banner.jpg";
// import divider from "../../Images/divider.png";
import Carousel from 'react-bootstrap/Carousel';

export default function Eventhero() {
  window.scrollTo(0, 0)
  return (
    <div>
      <div className="event">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/63/ee/b5/63eeb5dce1135c760f5728e0349d9069.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://sourcingjournal.com/wp-content/uploads/2020/06/shutterstock_410189269-scaled.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.teahub.io/photos/full/313-3137809_fashion.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
