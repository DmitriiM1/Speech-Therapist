import React from "react";
import "../styles/header_footer.css";
import { Link as ScrollLink } from "react-scroll";

import logo2 from "../assets/header_footerIMG/Colorful Pastel Kindergarten Logo (1).png"
import mapMarker from "../assets/header_footerIMG/map_marker_icon2.svg"



import { Link } from 'react-router-dom';
import VideoCarousel from "./PhotoCarousel";



const Header = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="header_wrapper">
                    <VideoCarousel />
                </div>

                <header>
                    <div className="header_center">

                        <div className="header_info">

                            <div className="header_logo">
                                <Link to="/"><img src={logo2} alt="Мир Речи" /></Link>
                            </div>

                            <Link to="https://yandex.ru/maps/org/mir_rechi/104942983328/?ll=37.864169%2C55.677296&utm_source=share&z=16" target="_blank">
                                <div className="header_address">
                                    <div className="header_address_icon">
                                        <img src={mapMarker} alt="mapMarker" />
                                    </div>
                                    <p>Люберцы, ул. Лётчика Ларюшина, 6, корп. 2</p>
                                </div>
                            </Link>

                            <div className="header_contact">
                                <Link to="tel:+79691109029"><p>+7 (969) 110-90-29</p></Link>
                                <Link to="mailto:logoped_morozova@mail.ru"><p>logoped_morozova@mail.ru</p></Link>
                            </div>

                        </div>
                    </div>

                    <nav className="nav_links">
                        <ul className="header_list">
                            <li className="header_links">
                                <ScrollLink to="services" smooth={true} duration={500}><p>Услуги и Цены</p></ScrollLink>
                            </li>
                            <li className="header_links">
                                <ScrollLink to="for-parents" smooth={true} duration={500}><p>Родителям</p></ScrollLink>
                            </li>
                            <li className="header_links">
                                <ScrollLink to="about" smooth={true} duration={500}><p>О Нас</p></ScrollLink>
                            </li>
                            <li className="header_links">
                                <ScrollLink to="specialists" smooth={true} duration={500}><p>Наши Специалисты</p></ScrollLink>
                            </li>
                            <li className="header_links">
                                <ScrollLink to="reviews" smooth={true} duration={500}><p>Отзывы</p></ScrollLink>
                            </li>
                            <li className="header_links">
                                <ScrollLink to="contacts" smooth={true} duration={500}><p>Контакты</p></ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="home_content">
                    <div className="home_text">
                        <p className="home_text_first">Мир Речи</p>
                        <p className="home_text_second">Центр Логопедии и Дефектологии</p>
                    </div>
                    <Link to="/form">
                        <div className="home_button">
                            <p>Записаться</p>
                        </div>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default Header