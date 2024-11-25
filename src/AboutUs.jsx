import React from "react";
import "./App.css";

const AboutUs = () => {
  return (
    <div class="about-us">
      
      <div class="title" id="about-us">
        <p>Реплики картин от <span class="ink-house">Ink. House</span></p>
      </div>
      <div className="description">
        <p>
          Высокое качество отрисовки на плотной бумаге или льняном холсте.
          Редкие произведения, доступные цены.
        </p>
      </div>
      <div class="cartina">
        <img src={process.env.PUBLIC_URL + "/cartina/голубь.png"} alt="logo" />
      </div>
      <div class="buy">
        <button class="buy-button">Продукция</button>
      </div>
    
    </div>
  );
};



export default AboutUs;
