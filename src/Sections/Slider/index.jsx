import React from "react";
import "./index.scss"

function Slider() {
  return (
    <div className="slider">
      <div className="sliderText">
        <div className="left"><i class="fa-solid fa-arrow-left"></i></div>
        <div className="text">
          <div className="committed">
            <div className="border"></div>
            <div className="committedText">Committed to Success</div>
          </div>
          <h1 className="help">We help to grow your business</h1>
          <p className="about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio atque non ducimus debitis voluptate. Maxime dolorum dolorem reiciendis quae corporis suscipit ad quod, placeat eligendi! Autem nesciunt quaerat laudantium officiis.</p>
          <button className="btn">Our Services</button>
        </div>
        <div className="right"><i class="fa-solid fa-arrow-right"></i></div>
      </div>
    </div>
  );
}

export default Slider;
