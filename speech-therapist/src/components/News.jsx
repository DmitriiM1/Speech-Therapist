import React from "react";
import "../styles/news.css"
import newsPhoto4 from "../assets/servicesIMG/news_boy2.gif";
import newsPhoto5 from "../assets/servicesIMG/news_cubs.png";

const News = () => {
    return (
        <div>
            <div className="home_news">
                <div className="home_news_photo">
                    <div className="photo_wrapper photo1">
                        <img src={newsPhoto4} alt="News 2" />
                    </div>
                    <div className="photo_wrapper photo2">
                        <img src={newsPhoto5} alt="News 1" />
                    </div>
                </div>
                <div className="home_news_info">
                    <div className="text_header">
                        <p>Открыт набор на курс "Читаем с удовольствием"</p>
                    </div>
                    <div className="text_body">
                        <ul>
                            <li><p>Обучение чтению с использованием кубиков Зайцева</p></li>
                            <li><p>Игровой подход к изучению букв и слов</p></li>
                            <li><p>Развитие навыков чтения через движение и ритм</p></li>
                            <li><p>Формирование интереса к чтению с раннего возраста</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="home_news_price">
                <div className="content1">

                </div>
                <div className="content2">
                    <p>Мини группы по 4-5 человек</p>
                    <p>Цена: от 4800р.</p>

                </div>  
            </div>
        </div>
    )
};

export default News