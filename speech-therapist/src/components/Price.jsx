import React from "react";
import "../styles/price.css";
import "../styles/mediaAdaptation.css";
import { Element } from "react-scroll";

const Price = () => {
    return (
        <Element name="services">


            <div className="price_container">
                <h3>Узнайне цены прямо здесь:</h3>

                <div className="price_container_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Индивидуальные Занятия</th>
                            </tr>
                            <tr>
                                <th>Услуга</th>
                                <th className="border-left">Цена</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td><p>Первичная консультация</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>1700р <span className="span_colour_time">Время: </span>45 минут
                                </td>
                            </tr>
                            <tr>
                                <td><p>Повторная консультация (динамика развития)</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>1200р <span className="span_colour_time">Время: </span><span>45 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Экспресс диагностика нарушения звукопроизношения</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>1000р <span className="span_colour_time">Время: </span><span>20 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Индивидуальное логопедическое занятие по «запуску речи»</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>2000р <span className="span_colour_time">Время: </span><span>30 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Индивидуальное логопедическое занятие  по постановке и автоматизации звуков, развитию лексико-грамматической строя  речи</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>2000р <span className="span_colour_time">Время: </span><span>45 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Индивидуальное дефектологическое занятие (Развитие ВПФ, Развитие оптико-пространственных представлений, причинно-следственных связей)</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>2000р <span className="span_colour_time">Время: </span><span>45 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Индивидуальное логопедическое занятие по коррекции письменной речи и чтения</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>2000р <span className="span_colour_time">Время: </span><span>45 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Он-лайн занятие - (развитие лексико-грамматического строя речи, автоматизация звуков, коррекция письменной речи (абонемент))</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>2000р <span className="span_colour_time">Время: </span><span>40 минут</span>
                                </td>
                            </tr>
                            <tr>
                                <td><p>Абонемент (8 индивидуальных занятий, 2 раза в неделю)</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>16000р
                                </td>
                            </tr>
                            <tr>
                                <td><p>Абонемент (12 индивидуальных занятий, 3 раза в неделю)</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>21600р
                                </td>
                            </tr>
                            <tr>
                                <td><p>Логопедический массаж</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>800р <span className="span_colour_time">Время: </span><span>15 минут</span>
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={2}>Групповые Занятия</th>
                            </tr>
                            <tr className="border-zero">
                                <th colSpan={2}>(Абонемент 2 раза в неделю, 8 занятий, 30 минут)</th>
                            </tr>
                            <tr className="border-zero">
                                <th colSpan={2}>(Абонемент 3 раза в неделю, 12 занятий, 30 минут)</th>
                            </tr>


                            <tr>
                                <td><p>Обучение чтению по авторской методике с частичным использованием кубиков Зайцева (мини группа) </p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>4800р
                                </td>
                            </tr>
                            <tr>
                                <td><p>Мозжечковая стимуляция на доске Бильгоу (мини группа 2 человека) </p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>8000р
                                </td>
                            </tr>
                            <tr>
                                <td><p>Курс «Супер Мозг» логопед+психолог (развитие ВПФ: мышление, речь, внимание, память. Межполушарное взаимодействие. Доска Бильгоу)</p></td>
                                <td>
                                    <span className="span_colour_price">Цена: </span>12000р
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ padding: '20px 0 0 20px' }}>&#10001; Стоимость разового занятия с логопедом-дефектологом 3000р. (Время занятий при разовых посещениях не закрепляется). </p>
            </div>
        </Element>
    );
};

export default Price