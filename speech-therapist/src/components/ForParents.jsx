import React from "react";
import "../styles/forparents.css";
import photoParents1 from "../assets/forParentsIMG/parents-photo1.jpg";
import photoParents2 from "../assets/forParentsIMG/parents-photo2.jpg";
import photoChild from "../assets/forParentsIMG/child-fun.jpg";
import photoChildren1 from "../assets/forParentsIMG/children-playing1.jpg";
import photoChildren2 from "../assets/forParentsIMG/children-playing2.jpg";
import photoChildren3 from "../assets/forParentsIMG/children-playing3.jpg";


const ForParents = () => {
    return (
        <div className="forparents_container">
            <div className="forparents_header_text">
                <h3>Родителям<img src="" alt="" /></h3>

                <h4>Договор, правила посещения центра</h4>
            </div>
            <div className="wrapper">
                <div className="forparents_text">
                    <h2>Как подготовиться к первой встрече с логопедом:</h2>
                    <p>В первую очередь важен эмоциональный настрой ребенка, необходимо рассказать к кому пойдет малыш и что вы будете там ИГРАТЬ!</p>
                    <p>Ребенок должен быть здоров, сыт, выспавшийся, не после изнурительной дороги- одним словом в максимально хорошем настроении, чтобы ничего не помешало ему показать все свои способности!</p>
                    <p>Родителям тоже необходимо подготовиться- вспомните как протекала беременность, проходили роды, развитие ребенка в первый год.</p>
                    <p>Заранее составьте список вопросов для специалиста, чтобы не упустить что-то важное. Важно задать все вопросы, интересующие вас.</p>
                    <p>Приготовьте имеющиеся медицинские документы, например, неврологические обследования.</p>
                    <p>Очень важно, чтобы родитель чувствовал себя спокойно, это даст уверенность ребенку, что положительно повлияет на его взаимодействие с логопедом.</p>
                    <p>И  помните - нет ничего невозможного!</p>
                </div>
                <div className="forparents_photo">
                    <div className="forparents_photo_section1">
                        <img src={photoChildren1} alt="" />
                        <img src={photoChildren2} alt="" />
                    </div>
                    <div className="forparents_photo_section2">
                        <img src={photoChild} alt="" />
                    </div>
                    <div className="forparents_photo_section3">

                        <img src={photoParents1} alt="" />
                        <img src={photoParents2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ForParents;
