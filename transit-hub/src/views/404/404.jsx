import React from "react"
import Button from "../../components/button/Button.jsx";
import './404.scss'
import cat from '../../assets/img/geography.png'

function NotFound() {
  return (
    <div className="not-found">
        <div className="not-found__content">
            <div className="not-found__info">
                <div className="not-found__header">
                    404: груз потерян, а страница не найдена
                </div>
                <div className="not-found__main-text">
                    Возможно, мы случайно перепутали адрес или грузовик заблудился по дороге. Вернитесь на 
                    главную страницу и мы поможем вам найти нужный маршрут.
                </div>
                <div className="not-found__button">
                    <Button label='На главную' link='/home' />
                </div>
            </div>
            <div className="not-found__img">
                <img src={cat} alt="not-found" />
            </div>
        </div>
    </div>
  );
}

export default NotFound;