import React from "react"
import { Link } from 'react-router-dom'
import './footer.scss'
import darkLogo from '../../assets/img/dark-logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <span>
            ИП Делирович Я.Н. <br />
            Все права защищены, 2022
          </span>
        </div>
        <div className="footer__logo">
          <Link to="/TransitHub">
            <img src={darkLogo} alt="dark-logo" />
          </Link>
        </div>
        <div className="footer__contacs">
            <div className="footer__contacs-text">
              Мы на связи с вами!
            </div>
            <div className="footer__contacts-phone">
              <a href="tel:+7 997 443 73 83">+7 997 443 73 83</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;