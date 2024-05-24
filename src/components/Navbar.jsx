import React from "react";
import logo from "../assets/svg/logo.svg";
import telegram from "../assets/svg/telegram.svg";
import message from "../assets/svg/message.svg";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate()
  return (
    <nav>
      <div className="logo">
        <img   onClick={()=> navigate('/')} src={logo} alt="" />
      </div>
      <div className="links">
        <Link>меню</Link>
        <Link>адреса кофеен</Link>
        <Link>маркеты</Link>
        <Link>франшиза</Link>
        <Link>вакансии</Link>
        <Link>контакты</Link>
       <div className="contact_t_w">
   <a href="">
   <img src={telegram} alt="" />
   </a>
       <a href="">
       <img src={message} alt="" />
       </a>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
