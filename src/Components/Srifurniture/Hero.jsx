import React from "react";
import Catagires from "./Catagires" ;


function Hero() {
  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/61zQ3EMFceL.jpg"
        className="w-100"
        alt="Hero Banner" />
      <Catagires />
    </div>
  );
}

export default Hero;