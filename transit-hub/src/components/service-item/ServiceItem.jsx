import React from "react"
import { Link } from 'react-router-dom'
import './service-item.scss'
import arrow from '../../assets/img/arrow.svg'

function ServiceItem({img, title, subtitle, link}) {
  return (
    <div className="service-item">
        <div className="service-item__image">
            <img src={img} alt="service-item" />
        </div>
        <div className="service-item__description">
            <div className="service-item__title">{title}</div>
            <div className="service-item__subtitle">{subtitle}</div>
            <div className="service-item__link">
                <Link to={link} className="service-item__link-body">
                    <div className="service-item__link-text">
                        Подробнее
                    </div>
                    <div className="service-item__link-arrow">
                        <img src={arrow} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default ServiceItem;