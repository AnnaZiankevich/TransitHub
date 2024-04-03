import React from "react"
import ServiceItem from "../../components/service-item/ServiceItem";
import img from '../../assets/img/car1.jpg'
import './car.scss'

function Car() {
  return (
    <div className="car">
      <ServiceItem img={img} 
                   title='Легковой автомобиль до 20 кг' 
                   subtitle='Наша транспортная компания предоставляет возможность доставки грузов до 20 килограмм с использованием легкового автомобиля. Эта услуга идеально подходит для небольших грузов или посылок, которые не требуют большого пространства, но требуют быстрой и надежной доставки.' 
                   link='/contacts' 
      />
    </div>
  );
}

export default Car;