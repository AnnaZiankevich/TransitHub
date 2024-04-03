import React from "react"
import ServiceItem from "../../components/service-item/ServiceItem";
import img from '../../assets/img/truck3.jpg'
import './freight-car.scss'

function FreightCar() {
  return (
    <div className="freight-car">
      <ServiceItem img={img} 
                   title='Грузовой автомобиль до 1,4 тонн' 
                   subtitle='Наша транспортная компания предоставляет возможность доставки грузов, которые весят до 1,4 тонн, с использованием специального грузового автомобиля. Эта услуга идеально подходит для более крупных грузов, которые требуют большей грузоподъемности и объема.' 
                   link='/contacts' 
      />
    </div>
  );
}

export default FreightCar;