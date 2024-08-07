import React from "react";
import "../styles/news.css"
import newsPhoto1 from "../assets/servicesIMG/news_photo1.jpg";
import newsPhoto2 from "../assets/servicesIMG/news_photo2.jpg";

const News = () => {
    return (
        <div>
            <div className="home_news">
                <div className="home_news_photo">
                    <div className="photo_wrapper photo1">
                        <img src={newsPhoto2} alt="News 2" />
                    </div>
                    <div className="photo_wrapper photo2">
                        <img src={newsPhoto1} alt="News 1" />
                    </div>
                </div>
                <div className="home_news_info">
                    <div className="text_header">
                        <p>Открыт набор в Группу "Супермозг" для детей 5-10 лет</p>
                    </div>
                    <div className="text_body">
                        <ul>
                            <li><p>Фокус и концентрация внимания</p></li>
                            <li><p>Тренировка мощной памяти</p></li>
                            <li><p>Развитие креативного мышления</p></li>
                            <li><p>Речь. Произношение, словарный запас</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="home_news_price">
                <div className="content1">

                </div>
                <div className="content2">
                    <p>Курс: 2 месяца, занятия 2 раза в неделю.</p>
                    <p>Цена: от 12.000 руб</p>

                </div>
            </div>
        </div>
    )
};

export default News