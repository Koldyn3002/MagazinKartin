import React, { useState } from "react";
import "./App.css";

const Product = () => {
  const [cards] = useState([
    {
      id: 1,
      country: "Франция",
      images: [
        {
          id: 1,
          image: process.env.PUBLIC_URL + "/cartina/купедон.jpg",
          name: "Охота Амура",
          author: "Марсель Руссо",
          size: "50x80 см",
          paint: "Масляная",
        },
        {
          id: 2,
          image: process.env.PUBLIC_URL + "/cartina/девушкаШляпа.jpg",
          name: "Дама с собачкой ",
          author: "Анри Селин",
          size: "30x40 см",
          paint: "Акриловая",
        },
        {
          id: 3,
          image: process.env.PUBLIC_URL + "/cartina/дваМужика.jpg",
          name: "Процедура ",
          author: "Франсуа Дюпон",
          size: "40x50 см",
          paint: "Водная",
        },
        {
          id: 4,
          image: process.env.PUBLIC_URL + "/cartina/девушкаЦветок.jpg",
          name: "Роза",
          author: "Луи Детуш",
          size: "50x70 см",
          paint: "Масляная",
        },
        {
          id: 5,
          image: process.env.PUBLIC_URL + "/cartina/птицыХавают.jpg",
          name: "Птичья трапеза ",
          author: "Франсуа Дюпон",
          size: "30x40 см",
          paint: "Акриловая",
        },
        {
          id: 6,
          image: process.env.PUBLIC_URL + "/cartina/рыба.jpg",
          name: "Пейзаж с рыбой",
          author: "Пьер Моранж",
          size: "40x50 см",
          paint: "Водная",
        },
      ],
    },
    {
      id: 2,
      country: "Германия",
      images: [
        {
          id: 7,
          image: process.env.PUBLIC_URL + "/cartina/БабаЗима.jpg",
          name: "Над городом",
          author: "Курт Вернер",
          size: "50x70 см",
          paint: "Масляная",
        },
        {
          id: 8,
          image: process.env.PUBLIC_URL + "/cartina/птичкаПтенчики.jpg",
          name: "Птенцы",
          author: "Макс Рихтер",
          size: "30x40 см",
          paint: "Акриловая",
        },
        {
          id: 9,
          image: process.env.PUBLIC_URL + "/cartina/аист.jpg",
          name: "Среди листьев",
          author: "Мартин Майер",
          size: "50x70 см",
          paint: "Масляная",
        },
        {
          id: 10,
          image: process.env.PUBLIC_URL + "/cartina/птичка .jpg",
          name: "Яркая птица",
          author: "Герман Беккер",
          size: "30x40 см",
          paint: "Акриловая",
        },
        {
          id: 11,
          image: process.env.PUBLIC_URL + "/cartina/Дятел.jpg",
          name: "Вульф Бауэр",
          author: "Дятлы",
          size: "50x70 см",
          paint: "Масляная",
        },
        {
          id: 12,
          image: process.env.PUBLIC_URL + "/cartina/окно.jpg",
          name: "Большие воды",
          author: "Вальтер Хартманн",
          size: "30x40 см",
          paint: "Акриловая",
        },
      ],
    },
    {
      id: 3,
      country: "Англия",
      images: [
        {
          id: 13,
          image: process.env.PUBLIC_URL + "/cartina/верблюд.jpg",
          name: "Дикий зверь",
          author: "Пол Смит",
          size: "40x50 см",
          paint: "Водная",
        },
        {
          id: 14,
          image: process.env.PUBLIC_URL + "/cartina/гора.jpg",
          name: "Скалистый берег",
          author: "Джон Уайт",
          size: "40x50 см",
          paint: "Водная",
        },
        {
          id: 15,
          image: process.env.PUBLIC_URL + "/cartina/река.jpg",
          name: "Река и горы",
          author: "Джим Уотсон",
          size: "40x50 см",
          paint: "Водная",
        },
        {
          id: 16,
          image: process.env.PUBLIC_URL + "/cartina/попугай.jpg",
          name: "Белый попугай",
          author: "Юджин Зиллион",
          size: "40x50 см",
          paint: "Водная",
        },
        {
          id: 17,
          image: process.env.PUBLIC_URL + "/cartina/рыбаНоркаман.jpg",
          name: "Ночная рыба",
          author: "Эрик Гиллман",
          size: "40x50 см",
          paint: "Водная",
        },
        {
          id: 18,
          image: process.env.PUBLIC_URL + "/cartina/рысь.jpg",
          name: "Рыжий кот",
          author: "Альфред Барр",
          size: "40x50 см",
          paint: "Водная",
        },
      ],
    },
  ]);
  const [activeButton, setActiveButton] = useState(cards[0].id);
  const [cartCount, setCartCount] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <p id="reproductions" class="product">
        Репродукции
      </p>{" "}
      <button class="frunc-button" onClick={() => handleButtonClick(1)}>
        Франция
      </button>
      <button class="germany-button" onClick={() => handleButtonClick(2)}>
        Германия
      </button>
      <button class="anglia-button" onClick={() => handleButtonClick(3)}>
        Англия
      </button>
      {activeButton && (
        <div class="kartohki">
          {cards
            .filter((card) => card.id === activeButton)
            .map((card) => (
              <div key={card.id}>
                <div class="image-row">
                  {card.images.slice(0, 3).map((image) => (
                    <div key={image.id} class="image-column">
                      <div class="rectangle">
                        <img
                          class="cartinas"
                          src={image.image}
                          alt={image.name}
                        />
                        <div className="image-info">
                          <p>Автор: {image.author}</p>
                          <h2>{image.name}</h2>
                          <p>
                            {image.size} {image.paint}
                          </p>
                        </div>
                        <button
                          className="add-to-cart"
                          onClick={() => setCartCount(cartCount + 1)}
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="image-row">
                  {card.images.slice(3).map((image) => (
                    <div key={image.id} class="image-column">
                      <div class="rectangle">
                        <img
                          class="cartinas"
                          src={image.image}
                          alt={image.name}
                        />
                        <div className="image-info">
                          <p>Автор: {image.author}</p>
                          <h2>{image.name}</h2>
                          <p>
                            {image.size} {image.paint}
                          </p>
                        </div>
                        <button
                          className="add-to-cart"
                          onClick={() => setCartCount(cartCount + 1)}
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
      <div class="cart-counter">{cartCount}</div>
    </div>
  );
};

export default Product;
