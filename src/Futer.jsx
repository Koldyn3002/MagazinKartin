import React from "react";
import "./App.css";

const Futer = () => {
  return (
    <div>
      <div className="futer-background1"> </div>
      <div className="logo3">
        <img src={process.env.PUBLIC_URL + "/icons/Star.png"} alt="logo" />
      </div>
      <div className="title3">
        <p>Ink.House</p>
      </div>
      <div className="number">
        <p>+7 (999) 543-54-54</p>
      </div>
      <div className="info-number">
        <p>Мастерская</p>
      </div>
      <div className="info1">
        <a href="#reproductions">Репродукции</a>
      </div>
      <div className="info2">
        <a href="#new-collection">Новинки</a>
      </div>
      <div className="info3">
        <a href="#about-us">О нас</a>
      </div>
      <div className="сocial1">
        <img
          src={process.env.PUBLIC_URL + "/icons/фейсбук.svg"}
          alt="фейсбуку"
        />
      </div>
      <div className="сocial2">
        <img
          src={process.env.PUBLIC_URL + "/icons/инста.svg"}
          alt="инстограм"
        />
      </div>
      <div className="сocial3">
        <img src={process.env.PUBLIC_URL + "/icons/ютуб.svg"} alt="ютуб" />
      </div>
      <div className="сocial-info">
        <p>Ink. House ®</p>
      </div>
      <div className="сocial-info2">
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Futer;
