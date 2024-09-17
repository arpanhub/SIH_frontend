import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Garden() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-black  text-white py-40 px-4 rounded-lg">
      <Slider {...settings}>
        <div className="flex justify-center items-center h-48">
          <h2 className="text-center text-2xl font-bold">HEADING</h2>
          <p className="text-center text-lg mb-2">
            a small description about the garden
          </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Explore</button>
          
        </div>

        <div className="flex justify-center items-center h-24">
          <h2 className="text-center text-2xl font-bold mb-4">HEADING</h2>
          <p className="text-center text-lg mb-6">
            a small description about the garden
          </p>
        </div>
        <div className="flex justify-center items-center h-48">
          <h2 className="text-center text-2xl font-bold mb-4">HEADING</h2>
          <p className="text-center text-lg mb-6">
            a small description about the garden
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Garden;
