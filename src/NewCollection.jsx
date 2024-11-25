import React from "react";
import "./App.css";

const NewCollection = () => {
  return (
    <div>
      <div className="new-collection-container">
        <div className="logo2">
          <img src={process.env.PUBLIC_URL + "/icons/лого2.png"} alt="logo" />
        </div>
        <div className="new-collection-background">
          <img
            src={process.env.PUBLIC_URL + "/cartina/фонМужик.png"}
            alt="background"
          />
        </div>
        <div className="effect">
          <img
            src={process.env.PUBLIC_URL + "/cartina/шум.png"}
            alt="background"
          />
        </div>
       <div className="title2" id="new-collection">
         <h1>
           Новая коллекция
           <br />
           французских авторов
         </h1>
       
        </div>
        <div className="description2">
          <p>
            Сложно сказать, почему акционеры крупнейших компаний <br />{" "}
            призывают нас к новым свершениям, которые, в свою очередь, <br />{" "}
            должны быть заблокированы в рамках своих собственных <br />{" "}
            рациональных ограничений.
            <br /> <br />
            Принимая во внимание показатели успешности, граница <br /> обучения
            кадров предопределяет высокую востребованность <br /> направлений
            прогрессивного развития.
          </p>
        </div>
        <div className="button-getAcquainted">
            <button class="buy-button1">Ознакомиться</button>
          </div>
      </div>
    </div>
  );
};

export default NewCollection;
