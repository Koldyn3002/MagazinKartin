import React, { useState } from "react";
import "./App.css";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header>
      <div class="container">
        <div className="header-background1"> </div>

        <div className="star-six">
          <img src={process.env.PUBLIC_URL + "/icons/Star.png"} alt="logo" />
        </div>
        <div class="logo">Ink. House</div>
        <nav class="nav">
          <a href="#reproductions">Репродукции</a>
          <a href="#new-collection">Новинки</a>
          <a href="#about-us">О нас</a>
          <div class="cart">
            <img
              src={process.env.PUBLIC_URL + "/icons/карзина.svg"}
              alt="Корзина"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
