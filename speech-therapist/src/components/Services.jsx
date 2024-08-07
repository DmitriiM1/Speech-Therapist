import React from "react";
import "../styles/services.css";

const Services = () => {
    return (
        <div className="services-container">
            <div className="circle circle_logo">

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
            <div className="circle circle_logo">

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
            <div className="circle circle-small">
                <ul>


                    <h3>КОМПЛЕКСНЫЕ ЗАНЯТИЯ ДЛЯ ДЕТЕЙ</h3>
                    <p>(ЛОГОПЕД+ПСИХОЛОГ)</p>
                    <li><p>Курс СУПЕРМОЗГ</p></li>
                    <p>развитие межполушарного взаимодействия с элементами мозжечковой стимуляции на доске Бильгоу</p>
                </ul>
            </div>
        </div>
    )
}

export default Services