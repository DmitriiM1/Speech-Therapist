import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

import "../styles/contacts.css";
import whatsapp from "../assets/header_footerIMG/whatsapp_icon.png";
import call from "../assets/header_footerIMG/viber_icon.png";
import email from "../assets/header_footerIMG/email_icon.png";

const Contacts = () => {

    return (
        <Element name="contacts">
            <div className="contact_container">
                <div className="contact_container_information">
                    <div className="text_center">
                        <p>Запишитесь на свою первую консультацию прямо сейчас!</p>
                        <Link to="/form">
                            <div className="home_button">
                                <p>Записаться</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className="contact_section">
                            <div>
                                <img src={whatsapp} alt="whatsapp icon" />
                            </div>
                            <div className="contacts_margin_left">
                                <p><span className="emailText">Н</span>аписать WhatsApp:</p>
                                <a href="https://wa.me/79691109029" target="_blank" rel="noopener noreferrer">+7 (969)-110-90-29</a>
                            </div>
                        </div>

                        <div className="contact_section">
                            <div>
                                <img src={email} alt="email icon" />
                            </div>
                            <div className="contacts_margin_left">
                                <p><span className="emailText">Н</span>аписать на почту:</p>
                                <a href="mailto:logoped_morozova@mail.ru">logoped_morozova@mail.ru</a>
                            </div>
                        </div>

                        <div className="contact_section">
                            <div>
                                <img src={call} alt="call icon" />

                            </div>
                            <div className="contacts_margin_left">
                                <p><span className="callText">П</span>озвонить:</p>
                                <a href="tel:+79691109029">+7 (969)-110-90-29</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="contact_container_map">
                    <div id="map" className="map_container">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aacf59434fc10acd97e90c59bffdd1f10c381f503d51355a65f6fe42167f005f7&amp;source=constructor"
                            width="500"
                            height="500"
                            title="Yandex Map"
                            sandbox="allow-scripts allow-same-origin allow-popups"
                        ></iframe>
                    </div>
                </div>

                <div className="contact_container_map_phone">
                    <div id="map" className="map_container">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d37264fee63b677d64135fbbe982ddff4fa012d1a4195a0d62e447109ef5335&amp;source=constructor"
                            width="340"
                            height="380"
                            frameborder="0"
                            title="Yandex Map"
                            sandbox="allow-scripts allow-same-origin allow-popups"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Contacts;