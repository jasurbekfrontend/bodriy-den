import React, { useState ,useRef,useEffect} from "react";
import Navbar from "../components/Navbar";
import s1Img from "../assets/img/s1Img.png";
import s1LeftImg from "../assets/img/section1Left.png";
import s1RightImg from "../assets/img/s1Right.png";
import { NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../assets/svg/arrowLeft.svg";
import arrowRight from "../assets/svg/arrowRight.svg";
import s2Img from "../assets/img/s2Middle.png";

import s3Img1 from "../assets/img/s3Img1.png";
import s3Img2 from "../assets/img/s3Img2.png";
import s3Img3 from "../assets/img/s3Img3.png";
import s3Img4 from "../assets/img/s3Img4.png";
import s5Img1 from "../assets/svg/s5Left.svg";
import s5Img2 from "../assets/svg/s5Right.svg";
import s7Img from "../assets/img/s7Img.png";

import s3Img from "../assets/svg/s5Left.svg";
import s4Img from "../assets/img/s4Img.png";

import ozon from "../assets/svg/ozon.svg";
import ozonQr from "../assets/svg/ozonQr.svg";

import wb from "../assets/svg/wb.svg";
import wbQr from "../assets/svg/wbQr.svg";

import market from "../assets/svg/market.svg";
import marketQr from "../assets/svg/marketQr.svg";

import blogImg1 from "../assets/img/blog1.png";
import blogImg2 from "../assets/img/blog2.png";
import Footer from "../components/Footer";
import { PatternFormat } from 'react-number-format';
import { MdKeyboardArrowDown } from 'react-icons/md';


// corusel



const Main = () => {
  const navigate = useNavigate()
  const images = [{ img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }, { img1: s3Img1, img2: s3Img2, img3: s3Img3 }];
  const blog = [{ img1: blogImg1, img2: blogImg2 }, { img1: blogImg1, img2: blogImg2 }, { img1: blogImg1, img2: blogImg2 }, { img1: blogImg1, img2: blogImg2 }]
 /// select function
  const [selectedValue, setSelectedValue] = useState('должность');
  const [isActive, setIsActive] = useState(false);

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setIsActive(true); // Close the dropdown after selecting an item
  };

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const [sliderScore, setSliderScore] = useState(0);
  const [sliderScore_blog, setSliderScore_blog] = useState(0);
  const [sliderScore_coffe, setSliderScore_coffe] = useState(0);
  const slider = () => {
    if (sliderScore < images.length - 1) {
      setSliderScore(sliderScore + 1);
    }
  };
  const antislider = () => {
    if (sliderScore > 0) {
      setSliderScore(sliderScore - 1);
    }
  };
  const card_slider = () => {
    if (sliderScore_blog < blog.length - 1) {
      setSliderScore_blog(sliderScore_blog + 1);
    }
  };
  const card_antislider = () => {
    if (sliderScore_blog > 0) {
      setSliderScore_blog(sliderScore_blog - 1);
    }
  };
  const coffe_slider = () => {
    if (sliderScore_coffe < selectedCofee.length - 1) {
      setSliderScore_coffe(sliderScore_coffe + 1);
    }
  };
  const coffe_antislider = () => {
    if (sliderScore_coffe > 0) {
      setSliderScore_coffe(sliderScore_coffe - 1);
    }
  };
  const classic = [
    {
      id: 1,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 2,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 4,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
  ];
  const seasonal = [
    {
      id: 1,
      title: "Seasonal айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 2,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 4,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
  ];
  const hot = [
    {
      id: 1,
      title: "Hot айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 2,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 4,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
  ];
  const milkshake = [
    {
      id: 1,
      title: "Шоколадный milkshakeс сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 2,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 3,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
    {
      id: 4,
      title: "Шоколадный айс-латте с сырной пенкой",
      subtitle: "ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02",
      desc: "Молочный слоеный кофе. Взбитое молоко, насыщенный вкус эспрессо.",
      sostav:
        "Состав: Какао, Двойной эспрессо, Молоко 3,2% ,Лед, сироп 'Клубника'. Сырная пенка: Сливочный сыр, Взбитые сливки, Соль, Сахар, Молоко 3,2%",
    },
  ];
  const [selectedCofee, setSelectedCofee] = useState(classic);

  const coffeeTypes = [
    { name: 'Классика', type: 'classic' },
    { name: 'Сезонное меню', type: 'seasonal' },
    { name: 'Хиты', type: 'hot' },
    { name: 'Милкшейки', type: 'milkshake' }
  ];
  const [selectedCoffee, setSelectedCoffee] = useState('classic');

 

  return (
    <div className="main-wrapper">
      <div className="section1">
        <img className="s1LeftImg" src={s1LeftImg} alt="" />
        <img className="s1RightImg" src={s1RightImg} alt="" />
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
      <div className="section2">
        <img src={s2Img} className="s2Img" alt="" />
        <b>Меню напитков</b>
        <p>ознакомиться с составами и кбжу</p>
        <div className="menu-container">
          <div className="menu-slider">
            {coffeeTypes.map((coffee) => (
              <button
                key={coffee.type}
                style={selectedCoffee === coffee.type ? { backgroundColor: "#73ff4a" } : { backgroundColor: "" }}
                onClick={() => setSelectedCoffee(coffee.type)}
              >
                {coffee.name}
              </button>
            ))}
                      </div>
          <div className="arrows">
            <button onClick={() => coffe_antislider()}><img src={arrowLeft} alt="" /></button>
            <button onClick={() => coffe_slider()}><img src={arrowRight} alt="" /></button>
          </div>
        </div>
        <div className="slider-body">
          {selectedCofee?.map((item) => (
            <div className="coffe_box" style={{ transform: `translateX(-${sliderScore_coffe * 109.2}%)` }}>
              <div className="cardS2" key={item.id}>
                <b>{item.title}</b>
                <p>{item.subtitle}</p>
                <button>состав</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section3">
        <img src={s3Img} className="s3Img" alt="" />
        <b>В данный момент по России и СНГ открыто более 150 кофеен</b>
        <div className="menu-container">
          <button onClick={() => navigate("/adress")}>адреса кофеен</button>
          <div className="arrows">
            <button onClick={() => antislider()}><img src={arrowLeft} alt="" /></button>
            <button onClick={() => slider()}><img src={arrowRight} alt="" /></button>
          </div>
        </div>


        <div className="slider-body">
          {images.map((item) => (
            <div className="box_Slider" style={{ transform: `translateX(-${sliderScore * 102.2}%)` }}>
              <div className="s3Card">
                <img src={item.img1} alt="" />
              </div>
              <div className="s3Card">
                <img src={item.img2} alt="" />
              </div>
              <div className="s3Card">
                <img src={item.img3} alt="" />
              </div>
              <div className="s3Card">
                <img src={item.img3} alt="" />
              </div>
            </div>

          ))}


        </div>
      </div>

      <div className="section4">
        <div className="leftS4">
          <img src={s4Img} alt="" />
        </div>
        <div className="rightS4">
          <b>Наши маркеты</b>
          <p>заказать кофе или чай</p>
          <div className="marketLogos">
            <img src={ozon} alt="" />
            <img src={wb} alt="" />
            <img src={market} alt="" />
          </div>
          <div className="marketQr">
            <img src={ozonQr} alt="" />
            <img src={wbQr} alt="" />
            <img src={marketQr} alt="" />
          </div>
          <span>вкус кофе</span>
          <span>
            cобственная эспрессо-смесь разработана специально для задач сети
            кофеен «Бодрый день»
          </span>
          <h6>
            В состав смеси входит Бразилия натуральной обработки, получаемая
            напрямую от кооператива Expocasser (победителя национального
            чемпионата Cup of Excellence «18), Колумбия Супремо мытой обработки
            региона Антиокья и угандийская робуста максимально допустимого
            к коммерческому экспорту уровня качества
          </h6>
        </div>
      </div>

      <div className="section5">
        <div className="menu-container">
          <b>
            Блог
            <p>новости о кофейнях</p>
          </b>

          <div className="arrows">
            <button onClick={() => card_antislider()}><img src={arrowLeft} alt="" /></button>
            <button onClick={() => card_slider()}><img src={arrowRight} alt="" /></button>
          </div>
        </div>
        <div className="slider-body">
          {blog.map((item) => (
            <div className="card_dody" style={{ transform: `translateX(-${sliderScore_blog * 102.2}%)` }}>


              <div className="cardS5">
                <img src={item.img1} alt="" />
                <p>
                  Встречайте новую бодрую кофейню в Москве! <br />
                  Это новая точка с двумя этажами и освежающим и стильным
                  интерьером. В меню — вечная бодрящая классика, крутые весенние
                  спешелы и очень вкусные десерты. Приходите в гости
                  на Новоданиловскую набережную 10А и попробуйте сами
                </p>
              </div>
              <div className="cardS5">
                <img src={item.img2} alt="" />
                <p>
                  Если вы впервые открываете кофейню и ищете бариста, то можете
                  чувствовать себя неуверенно: как выбрать сотрудника? Чему
                  его научить? Как описать вакансию? Мы отлично понимаем вас,
                  поэтому поделимся опытом и расскажем, как подбираем бариста
                  для Бодрых кофеен...
                  <span>показать полностью</span>
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="section6">
        <b>в поисках новых партнёров</b>
        <div className="s6Container">
          <p>
            Входим в топ-3 кофеен по количеству кофеен в России по версии
            журнала Foodservice
          </p>
          <p>Одна из самых прибыльных франшиз по мнению Forbes</p>
          <p>Каждую неделю открываем 1 новую кофейню вместе с партнёрами</p>
        </div>
        <button>
          открыть кофейню
          <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="section7">
        <div className="s7Card">
          <img src={s7Img} alt="" />
          <form>
            <b>Работай у нас</b>
            <p>вакансии в кофейне и офисе</p>
            <input type="text" placeholder="город" />
            <label className={`select2 ${isActive ? 'active' : ''}`}>
              <input
                type="text"
                placeholder="Деталь столешницы 1"
                readOnly
                value={selectedValue}
                name="name__product"
                onClick={toggleDropdown}
              />
              <MdKeyboardArrowDown onClick={toggleDropdown} /> {/* Ikona */}
              <ol className="select__list2">
                <li onClick={() => handleItemClick('1')}>1</li>
                <li onClick={() => handleItemClick('2')}>2</li>
                <li onClick={() => handleItemClick('3')}>3</li>
              </ol>
            </label>
            <input type="text" placeholder="ваше имя" />
            <PatternFormat format="+7 (###) #### ###" allowEmptyFormatting mask="_" />;
            <button>отправить</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
