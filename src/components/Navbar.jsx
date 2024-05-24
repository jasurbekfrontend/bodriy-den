import React from "react";
import logo from "../assets/svg/logo.svg";
import telegram from "../assets/svg/telegram.svg";
import message from "../assets/svg/message.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <Link>меню</Link>
        <Link>адреса кофеен</Link>
        <Link>маркеты</Link>
        <Link>франшиза</Link>
        <Link>вакансии</Link>
        <Link>контакты</Link>
      </div>
      <div className="icons">
        <img src={telegram} alt="" />
        <img src={message} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
