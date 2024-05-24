import React from "react";
import logo from "../assets/svg/logo-in-dark.svg";
import arrowRight from "../assets/svg/arrowRight.svg";
import telegram from "../assets/svg/telegram.svg";
import message from "../assets/svg/message.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="topLeft">
          <b>
            Остались вопросы или хотите
            <br /> открыть кофейню по франшизе?
          </b>
          <p>Оставьте свой номер и мы с вами свяжемся</p>
        </div>
        <div className="topRight">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="+7 999 999-99-99" />
        </div>
      </div>
      <div className="footerCard">
        <div className="topCard">
          <div className="leftTop">
            <img src={logo} alt="" />
            <div className="footerLinks">
              <p>Меню + кбжу</p>
              <p>адреса кофеен</p>
              <p>маркеты</p>
            </div>
            <div className="footerLinks">
              <p>франшиза</p>
              <p>вакансии</p>
              <p>контакты</p>
            </div>
          </div>
          <button>
            франшиза
            <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="middleCard">
          <b>Контакты</b>
          <div className="contactContainer">
          <div className="contactLabel">
            <div className="contact">
              <p>Поставщикам</p>
              <p>sales@bodryi-den.ru</p>
            </div>
            <div className="contact">
              <p>Вакансии</p>
              <p>hr@bodryi-den.ru</p>
            </div>
            <div className="contact">
              <p>Предложить локацию</p>
              <p>info@bodryi-den.ru</p>
            </div>
          </div>
          <div className="contactLabel">
            <div className="contact">
              <p>Поддержка партнёров</p>
              <p>support@bodryi-den.ru</p>
            </div>
            <div className="contact">
              <p>Офис</p>
              <p>+7 383 375-00-24</p>
              <p>info@bodryi-den.ru</p>
            </div>
          </div>
          </div>

        </div>
        <div className="bottomCard">
          <div className="footerIcons">
            <img src={telegram} alt="" />
            <img src={message} alt="" />
          </div>
          <div className="contact">
            <p>Адрес</p>
            <p>630049, г. Новосибирск, </p>
            <p>Красный проспект 200, 12 этаж</p>
          </div>
        </div>
      </div>
      <p>© 2024 Бодрый день</p>
    </footer>
  );
};

export default Footer;
