import React from "react"
import "./career.scss"
import driver from "../../assets/img/careers/driver.png"
import driver1 from "../../assets/img/careers/driver1.png"
import loader from "../../assets/img/careers/loader.png"
import hr from "../../assets/img/careers/hr.png"
import accountant from "../../assets/img/careers/accountant.png"
import manager from "../../assets/img/careers/manager.png"
import dispatcher from "../../assets/img/careers/dispatcher.png"

function Career() {

  const careerList = [
    {
      title: "Водитель автомобиля категории СЕ в отдел логистики",
      img: driver,
    },
    {
      title: "Кладовщик-грузчик",
      img: loader,
    },
    {
      title: "HR-менеджер",
      img: hr,
    },
    {
      title: "Бухгалтер по заработной плате",
      img: accountant,
    },
    {
      title: "Менеджер по логистике",
      img: manager,
    },
    {
      title: "Водитель автомобиля категории В",
      img: driver1,
    },
    {
      title: "Диспетчер-логист",
      img: dispatcher,
    },
  ]


  return (
    <div className="career">
      <div className="career__body">
        <div className="career__title">Карьера</div>
        <div className="career__subtitle">
          Пишите на почту нашей hr-команды: <a href="mailto:hr@transithub.com"><strong>hr@transithub.com</strong></a>. 
          Будем рады видеть Вас в нашем коллективе!
        </div>
        <div className="career__table">
          {
            careerList.map((item, index) => 
              <div className="career__item" key={index}>
                <div className="career__item-title">
                  {item.title}
                </div>
                <div className="career__item-img">
                  <div className="career__item-img-container">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Career;