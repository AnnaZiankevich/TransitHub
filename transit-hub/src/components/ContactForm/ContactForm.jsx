import React, { useState } from "react"
import Button from "../../components/button/Button";
import './contact-form.scss'

function ContactForm() {

  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loader = () => {
    return (
      <div className="wrapper" style={{display: isLoading ? "block" : "none"}}>
        <div className={isLoading ? "overlay show" : "overlay"}></div>
        <div className={isLoading ? "spanner show" : "spanner"}>
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  const clickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 2000);
  }

  return (
    <div className="contact-form">
        <div className="contact-form-content">
          <div className="contact-form-info">
            <div className="contact-form-text">
              Хочешь стать нашим <br/>партнером? Оставь заявку!
            </div>
            <div className="contact-form-inputs">
              <form>
                <input placeholder="Ваше имя" />
                <input placeholder="Ваш телефон" />
                <div className="contact-form-button">
                  <Button label="Оставить заявку" func={clickHandler} />
                </div>
              </form>
            </div>
            {loader()}
            <div className="reponse" style={{opacity: isVisible ? '1' : '0'}}>
              Ваше сообщение было успешно отправлено. Благодарим за Ваше обращение!
            </div>
          </div>
        </div>
    </div>
  );
}

export default ContactForm;