import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './header.scss'
import burgerMenu from '../../assets/img/burger-menu.svg'
import logo from '../../assets/img/logo.svg'

function Header() {
  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible((prev) => !prev);
  }

  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__content">
            <div className="header__burger-menu" onClick={() => clickHandler()}>
                <div className="header__burger-menu-icon">
                  <img src={burgerMenu} alt="burger-menu" />
                </div>
                <div className="header__burger-menu-text">
                  <span>Меню</span>
                </div>
            </div>
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header__phone">
              <a href="tel:+7 997 443 73 83">+7 997 443 73 83</a>
            </div>
        </div>
        <div className={visible ? "header__hidden-menu" : "header__hidden-menu hidden"}>
            <ul className="header__menu-list">
                <Link to="/">
                  <li className="header__menu-item">Главная</li>
                </Link>
                <Link to="/about-us">
                  <li className="header__menu-item">О нас</li>
                </Link>
                <Link to="/car">
                  <li className="header__menu-item">Легковой автомобиль</li>
                </Link>
                <Link to="/freight-car">
                  <li className="header__menu-item">Грузовой автомобиль</li>
                </Link>
                <Link to="/career">
                  <li className="header__menu-item">Карьера</li>
                </Link>
                <Link to="/contacts">
                  <li className="header__menu-item">Контакты</li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;