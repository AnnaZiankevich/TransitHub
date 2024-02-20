import React from "react"
import './start-page.scss'
import ServiceItem from "../../components/service-item/ServiceItem"
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import sideText from '../../assets/img/side-text.png'
import legk from '../../assets/img/legkovoy.jpg'
import gruz from '../../assets/img/gruzovoy.jpg'

function StartPage() {

  const serviceItems = [
    {
      img: legk,
      title: 'Легковой автомобиль',
      subtitle: 'до 20 кг',
      link: '#',
    }, 
    {
      img: gruz,
      title: 'Грузовой автомобиль',
      subtitle: 'до 1,4т',
      link: '#',
    },
  ];

  const list = [
    'Быстрая доставка во все страны мира',
    'Заказы застрахованы',
    'Цена известна заранее',
    'Проверенные и надежные партнеры',
    'Различные способы оплаты',
  ]

  return (
    <div className="start-page">
      <div className="start-page__content">
          <div className="start-page__main-info">
            <div className="start-page__text">
              <div className="start-page__title">
                TransitHub: ваше удобство, наша доставка
              </div>
              <div className="start-page__sub-title">
                От двери до двери или до пункта выдачи
              </div>
            </div>
            <div className="start-page__images">
              <div className="start-page__img1">
                <img src={img1} alt="img1" />
              </div>
              <div className="start-page__img2">
                <img src={img2} alt="img2"/>
              </div>
              <div className="start-page__button">
                <a type="button" href="#">
                  Узнать больше
                </a>
              </div>
              <div className="start-page__side-text">
                <img src={sideText} alt="side-text" />
              </div>
            </div>
          </div>
      </div>
      <div className="start-page__services">
          <div className="start-page__services-content">
              <div className="start-page__services-main-block">
                <div className="start-block__services-info">
                  <div className="start-block__services-main-text">
                    <div className="start-block__services-header">
                      Выберите вашу услугу
                    </div>
                    <div className="start-block__services-text">
                      Наша компания предоставляет большое количество качественных услуг
                    </div>
                    <div className="start-block__services-list">
                      <ul>
                        { list.map(e => <li key={e}>{e}</li>) }
                      </ul>
                    </div>
                  </div>
                  <div className="start-block__button">
                    <a type="button" href="#">
                      Выбрать услугу
                    </a>
                  </div>
                </div>
              </div>
              <div className="start-page__service-items">
                  {serviceItems.map(item => (
                     <ServiceItem key={item.title}
                                  title={item.title}
                                  subtitle={item.subtitle}
                                  img={item.img}
                                  link={item.link} 
                    />
                  ))}
              </div>
            </div>
          </div>
    </div>
  );
}

export default StartPage;