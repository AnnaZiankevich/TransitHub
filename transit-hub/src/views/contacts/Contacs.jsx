import React from "react"
import ContactForm from "../../components/ContactForm/ContactForm"
import './contacs.scss'

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts_body">
        <div className="contacts__title">
          Контакты
        </div>
        <div className="contacts__info">
          <p>Наш адрес: 220030 Беларусь, г. Минск, ул. Зыбицкая 27</p>
          <p>УНП: 101097179, ОКПО 37600284</p>
          <p>р/с BY32BLBB36420101097179001001, ЦБУ № 538 г. Минск ОАО «Белинвестбанк» <br/>
              Банковский идентификационный код в формате IBAN BLBBBY2X, ул. Коржа 11-А</p>
          <p>Режим работы: круглосуточно</p>
          <p>Электронная почта: <a href="mailto:info@transithub.com">info@transithub.com</a></p>
          <p>Телефон: <a href="tel:80293465822">80293465822</a></p>
        </div>
        <div className="contacts__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.45269638082!2d27.556241399999994!3d53.9059311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeb2e947637%3A0xb78353c4ce2398b3!2z0YPQuy4g0JfRi9Cx0LjRhtC60LDRjyAyNywg0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwgMjIwMDMw!5e0!3m2!1sru!2sby!4v1712143670998!5m2!1sru!2sby" 
                  style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contacts;