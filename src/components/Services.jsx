import React from "react";
import "../styles/services.css";
import photo from "../assets/header_footerIMG/Colorful Pastel Kindergarten Logo.png"

const Services = () => {
    return (
        <div className="services-container">
            <div className="circle circle_logo1">
                <img src={photo} alt="" />
            </div>
            <div className="circle circle-large">
                <h3>ЛОГОПЕД - ДЕФЕКТОЛОГ</h3>
                <ul>
                    <li><p>Логопедическая диагностика</p></li>
                    <li><p>"Запуск речи"</p></li>
                    <li><p>Коррекция звукопроизношения</p></li>
                    <li><p>Логопедический массаж</p></li>
                    <li><p>Коррекция нарушений чтения и письма</p></li>
                    <li><p>Развитие высших психических функций</p></li>
                    <li><p>(внимание, мышление, память, речь)</p></li>
                    <li><p>Обучение чтению с использованием Кубиков Зайцева</p></li>
                </ul>
            </div>
            <div className="circle circle_logo2">
                <img src={photo} alt="" />
            </div>
            <div className="circle circle-medium">
                <h3>ПСИХОЛОГ</h3>
                <ul>
                    <li><p>Психологическое консультирование</p></li>
                    <li><p>Семейная терапия</p></li>
                    <li><p>Групповая терапия</p></li>
                    <li><p>Трансформационные игры</p></li>
                    <li><p>Ароматерапия</p></li>
                </ul>
            </div>
            <div className="circle circle_logo3">

            </div>
            <div className="circle circle-small">
                <ul className="circle-small-list">
                    <h5>КОМПЛЕКСНЫЕ ЗАНЯТИЯ ДЛЯ ДЕТЕЙ</h5>
                    <p>(ЛОГОПЕД+ПСИХОЛОГ)</p>
                    <li><p>Курс СУПЕРМОЗГ</p></li>
                    <p>развитие межполушарного взаимодействия с элементами мозжечковой стимуляции на доске Бильгоу</p>
                </ul>
            </div>
        </div>
    )
}

export default Services