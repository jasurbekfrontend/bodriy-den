import React from "react";
import left from "../assets/svg/arrowLeft.svg";
import right from "../assets/svg/arrowRight.svg";
import cancel from "../assets/svg/cancel.svg";

const Card = ({ title, subtitle, sostav, kaloriya }) => {
  return (
    <div className="card">
      <div className="cancel">
        <img src={cancel} alt="" />
      </div>
      <div className="cardText">
      {/* <b>{title}</b> */}
      <b>Шоколадный айс-латте с сырной пенкой</b>
      {/* <p>{subtitle}</p> */}
      <p>Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.</p>
      <div className="cardArrows">
        <img src={left} alt="" />
        {/* <p>{sostav}</p> */}
        <p>
          Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп "Клубника".
          Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%
        </p>
        <img src={right} alt="" />
      </div>
      <div className="cardButtons">
        <button>300 мл</button>
        <button>400 мл</button>
        <button>500 мл</button>
      </div>
      {/* <p>{kaloriya}</p> */}
      <p>ккал 150.99 белки: 7.43 жиры: 8.18 углеводы: 12.02 </p>
      </div>

    </div>
  );
};

export default Card;
