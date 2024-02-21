import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img src={img3} alt="Item1" />
          <p className="legend">BEAUTIFUL VIEW</p>
        </div>
        <div>
          <img src={img4} alt="Item2" />
          <p className="legend">A LUXURY STAY</p>
        </div>
        <div>
          <img src={img5} alt="Item3" />
          <p className="legend">SPA</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;