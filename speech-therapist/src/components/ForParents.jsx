import React from "react";
import "../styles/forparents.css";
import photoParents2 from "../assets/forParentsIMG/parents-photo2.jpg";
import photoParents1 from "../assets/forParentsIMG/parents-photo1.jpg";
import photoChild from "../assets/forParentsIMG/child-fun.jpg";
import photoChildren1 from "../assets/forParentsIMG/children-playing1.jpg";
import photoChildren2 from "../assets/forParentsIMG/children-playing2.jpg";
import arrow1 from "../assets/forParentsIMG/down_icon.png"
import docIcon from "../assets/forParentsIMG/document_icon.svg"
import docIcon2 from "../assets/forParentsIMG/file_document_icon.svg"

import docAgreement from "../assets/documents/docAgreement.docx";
import docRules from "../assets/documents/docRules.docx";

import docAgreementpdf from "../assets/documents/documentAgreement.pdf";
import docRulespdf from "../assets/documents/documentRules.pdf";





const ForParents = () => {
    return (
        <div className="forparents_container">
            <div className="forparents_header_text">
                <h3>Родителям</h3>
                <img src={arrow1} alt="" />
                <h4>Договор, правила посещения центра</h4>
            </div>
            <div className="forparents_rules">
                <h4>Узнайте больше информации о правилах и ценах здесь:</h4>
                <div className="forparents_rules_button">
                    <a href={docAgreementpdf} target="_blank">
                        <div className="button_agreement">
                            <img src={docIcon} alt="" />
                            <p>Договор с родителями</p>
                        </div>
                    </a>

                    <a href={docRulespdf} target="_blank">
                        <div className="button_rules">
                            <img src={docIcon2} alt="" />
                            <p>Правила посещения занятий логопеда-дефектолога</p>
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
                        </li>
                        <li>
                            <p>Ребенок должен быть здоров, сыт, выспавшийся, не после изнурительной дороги- одним словом в максимально хорошем настроении, чтобы ничего не помешало ему показать все свои способности!</p>
                        </li>
                        <li>
                            <p>Родителям тоже необходимо подготовиться- вспомните как протекала беременность, проходили роды, развитие ребенка в первый год.</p>
                        </li>
                        <li>
                            <p>Заранее составьте список вопросов для специалиста, чтобы не упустить что-то важное. Важно задать все вопросы, интересующие вас.</p>
                        </li>
                        <li>
                            <p>Приготовьте имеющиеся медицинские документы, например, неврологические обследования.</p>
                        </li>
                        <li>
                            <p>Очень важно, чтобы родитель чувствовал себя спокойно, это даст уверенность ребенку, что положительно повлияет на его взаимодействие с логопедом.</p>
                        </li>
                        <li>
                            <p>И  помните - нет ничего невозможного!</p>
                        </li>
                    </ul>
                </div>
                <div className="forparents_photo">
                    <div className="forparents_photo_section1">
                        <img src={photoChildren1} alt="" />

                        <div className="margin_left">
                            <img src={photoChild} alt="" />
                        </div>

                        <img src={photoChildren2} alt="" />

                        <div className="margin_left">
                            <img src={photoParents1} alt="" />
                        </div>

                        <img src={photoParents2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ForParents;
