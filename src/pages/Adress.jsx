import React from "react";
import s1LeftImg from "../assets/img/section1Left.png";
import s1RightImg from "../assets/img/s1Right.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import arrowLeft from "../assets/svg/arrowLeft.svg";
import { Link } from "react-router-dom";
import mapIcon from "../assets/svg/map.svg";

const Adress = () => {
  return (
    <div className="adress-wrapper">
      <div className="section1">
        <img className="s1LeftImg" src={s1LeftImg} alt="" />
        <img className="s1RightImg" src={s1RightImg} alt="" />
        <Navbar />
        <div className="adress-body">
          <Link>
            <img src={arrowLeft} alt="" />
            назад
          </Link>
          <b>Адреса кофеен</b>
          <span>
            <img src={mapIcon} alt="" />
            Москва
          </span>
          <div className="adressContainer">
            <div className="adressBox">
              <p>ул. Таймырская, 6</p>
              <p>ул Сосенский Стан, 8</p>
              <p>ул. Велозаводская 1/1 стр 15</p>
              <p>ул. Арбат, 1</p>
              <p>1. Бумажный проезд,14 с2</p>
              <p>ул. Арбат, 1</p>
              <p>ул. Бутлерова 17, БЦ Нео Гео</p>
              <p>ул. Спартаковская площадь 14, БЦ Central Street</p>
              <p>ул. Арбат 54/2 стр 1 метро Смоленская</p>
              <p>ул. ​Ямского Поля 3-я, 2 к13</p>
            </div>
            <div className="adressBox">
              <p>3-я Ямского поля 2к13, ДЦ Ямское поле</p>
              <p>ул. Духовской переулок 17 стр.11</p>
              <p>ул. Правды 24стр8</p>
              <p>ул. Адм. Макарова, 41 к.1</p>
              <p>ул. Богданова 52к1</p>
              <p>ул. Бутлерова 17, БЦ Нео Гео</p>
              <p>ул. Мира, 150 гостинница Космос</p>
              <p>Новоданиловская Набережная 10А БЦ Tower</p>
              <p>Нижние мневники, 9 ЖК</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
