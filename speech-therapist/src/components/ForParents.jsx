import React from "react";
import "../styles/forparents.css";
import "../styles/mediaAdaptation.css";
import { Element } from "react-scroll";
import photoParents2 from "../assets/forParentsIMG/parents-photo2.jpg";
import photoParents1 from "../assets/forParentsIMG/parents-photo1.jpg";
import photoChild from "../assets/forParentsIMG/child-fun.jpg";
import photoChild2 from "../assets/forParentsIMG/child-photo.jpg";
import photoChildren1 from "../assets/forParentsIMG/children-playing1.jpg";
import photoChildren2 from "../assets/forParentsIMG/children-playing2.jpg";
import arrow1 from "../assets/forParentsIMG/down_icon.png"
import docIcon from "../assets/forParentsIMG/document_icon.svg"





import docAgreementpdf from "../assets/documents/documentAgreement.pdf";
import docRulespdf from "../assets/documents/documentRules.pdf";
import docNorms from "../assets/documents/normsOfSpeech.pdf";
import docAdvice from "../assets/documents/СоветыДляЗапускаРечиМолчунам.pdf";





const ForParents = () => {
    return (
        <Element name="for-parents">

            <div className="forparents_container">
                <div className="forparents_header_text">
                    <h3>Родителям</h3>
                    <img src={arrow1} alt="arrowIcon" />
                    <h4>Договор, правила посещения центра</h4>
                </div>
                <div className="forparents_rules">
                    <h4>Узнайте больше информации о правилах и ценах здесь:</h4>
                    <div className="forparents_rules_button">
                        <a href={docAgreementpdf} target="_blank" rel="noopener noreferrer">
                            <div className="button_agreement">
                                <img src={docIcon} alt="documentIcon" />
                                <p>Договор с родителями</p>
                            </div>
                        </a>

                        <a href={docRulespdf} target="_blank" rel="noopener noreferrer">
                            <div className="button_rules">
                                <img src={docIcon} alt="documentIcon" />
                                <p>Правила посещения занятий логопеда-дефектолога</p>
                            </div>
                        </a>

                    </div>

                    <div className="forparents_rules_button">
                        <a href={docNorms} target="_blank" rel="noopener noreferrer">
                            <div className="button_agreement">
                                <img src={docIcon} alt="documentIcon" />
                                <p>Нормы речевого развирия</p>
                            </div>
                        </a>

                        <a href={docAdvice} target="_blank" rel="noopener noreferrer">
                            <div className="button_rules">
                                <img src={docIcon} alt="documentIcon" />
                                <p>Советы для запуска речи молчунам</p>
                            </div>
                        </a>

                    </div>
                </div>
                <div className="parentWrapper">
                    <div className="forparents_text">
                        <h2>Как подготовиться к первой встрече с логопедом:</h2>
                        <ul>
                            <li>
                                <p>В первую очередь важен эмоциональный настрой ребенка, необходимо рассказать к кому пойдет малыш и что вы будете там ИГРАТЬ!</p>
                                <img src={photoChildren2} alt="photoChildren" />
                            </li>
                            <li>
                                <p>Ребенок должен быть здоров, сыт, выспавшийся, не после изнурительной дороги- одним словом в максимально хорошем настроении, чтобы ничего не помешало ему показать все свои способности!</p>
                                <img src={photoChild} alt="photoChild" />
                            </li>
                            <li>
                                <p>Родителям тоже необходимо подготовиться- вспомните как протекала беременность, проходили роды, развитие ребенка в первый год.</p>
                                <img src={photoChild2} alt="photoChild" />
                            </li>
                            <li>
                                <p>Заранее составьте список вопросов для специалиста, чтобы не упустить что-то важное. Важно задать все вопросы, интересующие вас.</p>
                                <img src={photoParents2} alt="photoChildWithParent" />
                            </li>
                            <li>
                                <p>Приготовьте имеющиеся медицинские документы, например, неврологические обследования.</p>
                                <img src={photoParents1} alt="photoChildWithParent" />
                            </li>
                            <li>
                                <p>Очень важно, чтобы родитель чувствовал себя спокойно, это даст уверенность ребенку, что положительно повлияет на его взаимодействие с логопедом.</p>
                                <img src={photoChildren1} alt="photoChildren" />
                            </li>
                            <li>
                                <p>И  помните - нет ничего невозможного!</p>
                            </li>
                        </ul>
                    </div>
                    <div className="forparents_photo">
                        <div className="forparents_photo_section1">
                            <img src={photoChildren1} alt="photoChildren" />


                            <div className="margin_left">
                                <img src={photoChild} alt="photoChild" />
                            </div>

                            <img src={photoChildren2} alt="photoChildren" />

                            <div className="margin_left">
                                <img src={photoParents1} alt="photoChildWithParent" />
                            </div>

                            <img src={photoParents2} alt="photoChildWithParent" />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default ForParents;
