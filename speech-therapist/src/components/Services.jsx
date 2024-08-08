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
                    <li>Логопедическая диагностика</li>
                    <li>"Запуск речи"</li>
                    <li>Коррекция звукопроизношения</li>
                    <li>Логопедический массаж</li>
                    <li>Коррекция нарушений чтения и письма</li>
                    <li>Развитие высших психических функций</li>
                    <li>(внимание, мышление, память, речь)</li>
                    <li>Обучение чтению с использованием Кубиков Зайцева</li>
                </ul>
            </div>
            <div className="circle circle_logo2">
                <img src={photo} alt="" />
            </div>
            <div className="circle circle-medium">
                <h3>ПСИХОЛОГ</h3>
                <ul>
                    <li>Психологическое консультирование</li>
                    <li>Семейная терапия</li>
                    <li>Групповая терапия</li>
                    <li>Трансформационные игры</li>
                    <li>Ароматерапия</li>
                </ul>
            </div>
            <div className="circle circle_logo3">

            </div>
            <div className="circle circle-small">
                <ul className="circle-small-list">
                    <h5>КОМПЛЕКСНЫЕ ЗАНЯТИЯ ДЛЯ ДЕТЕЙ</h5>
                    <p>(ЛОГОПЕД+ПСИХОЛОГ)</p>
                    <li><span>Курс СУПЕРМОЗГ</span></li>
                    <span>развитие межполушарного взаимодействия с элементами мозжечковой стимуляции на доске Бильгоу</span>
                </ul>
            </div>
        </div>
    )
}

export default Services