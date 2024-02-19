import React from "react"
import './start-page.scss'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import sideText from '../../assets/img/side-text.png'

function StartPage() {
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

          <div className="start-page__services">
            <div className="start-page__services-content">
              <div className="start-page__services-main-block">
                <div className="start-block__services-info">
                  <div className="start-block__services-header">

                  </div>
                  <div className="start-block__services-text">

                  </div>
                  <div className="stert-block__button">
                    
                  </div>
                </div>
              </div>
              <div className="start-page__service-items">

              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default StartPage;