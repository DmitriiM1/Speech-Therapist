import React from "react";
import "../styles/price.css";

const Price = () => {
    return (
        <div className="price_container">
            <h3>Узнайне цены прямо здесь:</h3>

            <div className="price_container_wrapper">
                <div className="price_container_description">
                    <ul className="individual">
                        <li>Первичная консультация </li>
                        <li>Повторная консультация (динамика развития) </li>
                        <li>Экспресс диагностика нарушения звукопроизношения </li>
                        <li>Индивидуальное логопедическое занятие по «запуску речи» </li>
                        <li>Индивидуальное логопедическое занятие  по постановке и автоматизации звуков, развитию лексико-грамматической строя  речи </li>
                        <li>Индивидуальное дефектологическое занятие </li>
                        <li>Индивидуальное логопедическое занятие по коррекции письменной речи и чтения </li>
                        <li>Он-лайн занятие - развитие лексико-грамматического строя речи, автоматизация звуков, коррекция письменной речи (абонемент) </li>
                        <li>Абонемент (8 индивидуальных занятий, 2 раза в неделю) </li>
                        <li>Абонемент (12 индивидуальных занятий, 3 раза в неделю) </li>
                        <li>Логопедический массаж </li>
                    </ul>
                    <br />
                    <ul className="group">
                        <li>Обучение чтению по авторской методике с частичным использованием кубиков Зайцева - (Абонемент 2 раза в неделю, 8 занятий, 30 минут) </li>
                        <li>Мозжечковая стимуляция на доске Бильгоу (мини группа 2 человека) - (Абонемент 2 раза в неделю, 8 занятий, 30 минут)</li>
                        <li>Курс «Супер Мозг»  Логопед+психолог (развитие ВПФ: мышление, речь, внимание, память. Межполушарное взаимодействие. Доска Бильгоу) - (Абонемент 2 раза в неделю, 8 занятий, 45 минут) </li>
                    </ul>
                </div>
                <div className="price_list">
                    <ul className="individual">
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1200 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1000 Р. <span className="span_colour_time">Время: </span><span>20 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>2000 Р. <span className="span_colour_time">Время: </span><span>30 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>2000 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>2000 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>2000 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>2000 Р. <span className="span_colour_time">Время: </span><span>40 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                    </ul>
                    <br />
                    <ul className="group">
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                        <li><span className="span_colour_price">Цена: </span>1700 Р. <span className="span_colour_time">Время: </span><span>45 минут</span></li>
                    </ul>
                </div>

                <table>
                    <tr></tr>
                </table>
            </div>
        </div>
    );
};

export default Price