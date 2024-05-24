import React from "react";
import Navbar from "../components/Navbar";
import s1Img from "../assets/img/s1Img.png";
import s1LeftImg from "../assets/img/section1Left.png";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="section1">
        <img className="s1LeftImg" src={s1LeftImg} alt="" />
        <Navbar />
        <div className="s1Body">
          <div className="s1Left">
            <b>Мы международная сеть кофеен</b>
            <p>
              Любим наше дело и горды тем, что ежедневно наш кофе выбирают
              десятки тысяч гостей
            </p>
            <div className="s1Container">
              <div className="s1Card">
                <b>35</b>
                <p>домашних кофеен</p>
              </div>
              <div className="s1Card">
                <b>150</b>
                <p>партнёрских кофеен</p>
              </div>
              <div className="s1Card">
                <b>1</b>
                <p>фабрика по производству сладких калорий</p>
              </div>
              <div className="s1Card">
                <b>300 000</b>
                <p>проданных напитков в месяц</p>
              </div>
            </div>
          </div>
          <div className="s1Right">
            <img src={s1Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
