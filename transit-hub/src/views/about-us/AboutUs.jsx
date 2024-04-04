import React from "react"
import Button from "../../components/button/Button";
import ContactForm from "../../components/ContactForm/ContactForm"
import img from "../../assets/img/truck1.png"
import './about-us.scss'
import global from "../../assets/img/benefits/global.png"
import secure from "../../assets/img/benefits/security.png"
import safe from "../../assets/img/benefits/key.png"
import service from "../../assets/img/benefits/customer-service.png"
import high from "../../assets/img/benefits/professionalism.png"
import innov from "../../assets/img/benefits/creativity.png"
import profes from "../../assets/img/benefits/expertise.png"
import quality from "../../assets/img/benefits/support.png"

function AboutUs() {

  const list = [
    {
      title: "Глобальное присутствие",
      img: global,
      desc: "Мы предлагаем свои услуги в более чем 70 странах, что позволяет нам охватить широкую географическую область и обеспечить доставку грузов практически в любую точку мира.",
    },
    {
      title: "Безопасность",
      img: secure,
      desc: "Мы придаем высокое значение безопасности грузов. Наша компания оснащена передовыми системами безопасности и принимает все необходимые меры для гарантированной защиты грузов во время транспортировки.",
    },
    {
      title: "Надежность",
      img: safe,
      desc: "Мы являемся надежным партнером для наших клиентов. Мы строго соблюдаем сроки доставки и предлагаем надежные логистические решения, чтобы грузы всегда приходили вовремя и в идеальном состоянии.",
    },
    {
      title: "Разнообразие услуг",
      img: service,
      desc: "Мы предлагаем широкий спектр услуг, включая международные и национальные перевозки, доставку по суше, морю и воздуху, а также услуги складирования и таможенного оформления. Мы готовы удовлетворить любые потребности наших клиентов в области транспортировки грузов.",
    },
    {
      title: "Высокий уровень профессионализма",
      img: high,
      desc: "Наша команда состоит из опытных и квалифицированных специалистов, которые обладают глубокими знаниями в области логистики и транспортировки. Мы гарантируем высокий уровень сервиса и профессиональное обслуживание нашим клиентам.",
    },
    {
      title: "Технологическая инновационность",
      img: innov,
      desc: "Мы постоянно внедряем передовые технологии и инновационные решения в нашу работу. Это позволяет нам улучшать эффективность и точность наших услуг, а также обеспечивать прозрачность и отслеживаемость доставки грузов.",
    },
    {
      title: "Персонализированный подход",
      img: profes,
      desc: "Мы понимаем, что каждый клиент имеет уникальные требования и потребности. Поэтому мы предлагаем индивидуальные решения и гибкие условия, чтобы удовлетворить особенности каждого клиента.",
    },
    {
      title: "Качество обслуживания",
      img: quality,
      desc: "Мы стремимся предоставить высококачественное обслуживание нашим клиентам. Наша команда всегда готова помочь и ответить на вопросы, а также предложить решения для любых возникающих проблем или сложностей.",
    },
  ]

  return (
    <div className="about-us">
      <section className="about-us__section">
        <div className="about-us__container">
          <div className="about-us__hero-content">
            <div className="about-us__title">Ведущая транспортная компания</div>
            <p className="about-us__text">
              Наша миссия: обеспечить эффективную и высококачественную доставку грузов вовремя
            </p>
            <Button label="Начать свой путь" link="#contact" />
          </div>
          <img src={img} className="about-us__banner" />
        </div>
      </section>
      <section className="about-us__benefits">
        <div className="about-us__benefits-title">
          Мы - ведущая транспортная компания, специализи&shy;рующаяся на безопасной и надежной доставке грузов.
        </div>
        <div className="about-us__benefits-desc">
          Мы предлагаем широкий спектр услуг по транспортировке грузов, включая международные и национальные перевозки. Наша глобальная охватность и специализированные услуги позволяют нам удовлетворить потребности наших клиентов по всему миру.
        </div>
        <div className="about-us__benefits-list">
            <ul className="about-us__benefits-list-body">
                {
                  list.map((item, index) => 
                    <li key={index} className="about-us__benefits-item">
                        <img src={item.img} alt="" width={56} height={56}/>
                        <div className="about-us__benefits-item-title">
                          {item.title}
                        </div>
                        <div className="about-us__benefits-item-desc">
                          {item.desc}
                        </div>
                    </li>
                  )
                }
            </ul>
        </div>
      </section>
      <div id="contact">      
        <ContactForm />
      </div>
    </div>
  );
}

export default AboutUs;