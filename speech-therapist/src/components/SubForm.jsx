import React from "react";
import "../styles/subform.css";

import logo from "../assets/header_footerIMG/Colorful Pastel Kindergarten Logo.png";
import mapMarker from "../assets/header_footerIMG/map_marker_icon2.svg"
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import InputMask from 'react-input-mask';
import axios from 'axios';


const PhoneInput = ({ field, form }) => (
    <InputMask
        mask="(999)-999-99-99"
        {...field}
        maskChar={null} // This ensures that only digits are allowed
        onChange={e => {
            const value = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
            if (value.length <= 10) {
                form.setFieldValue(field.name, e.target.value);
            }
        }}
    >
        {(inputProps) => <input {...inputProps} type="text" id="phone" />}
    </InputMask>
);

const t8123456789AAFmOBu2kLFmVZzxz9dtPwNzUVhofRF8gBI = process.env.REACT_APP_TELEGRAM_TOKEN;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;
const URI_API = `https://api.telegram.org/bot${t8123456789AAFmOBu2kLFmVZzxz9dtPwNzUVhofRF8gBI}/sendMessage`;


const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    // Email validation
    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|ru)$/i.test(values.email)) {
    //     errors.email = 'Email must end with ".com" or ".ru"';
    // }

    if (!values.age) {
        errors.age = 'Required';
    }

    if (!values.specialist) {
        errors.specialist = 'Required';
    }
    // Phone number validation
    if (!values.phone) {
        errors.phone = 'Required';
    } else {
        const cleanedPhone = values.phone.replace(/[-()]/g, '');
        if (!/^9\d{9}$/.test(cleanedPhone)) {
            errors.phone = 'Phone number must start with 9 and be 10 digits long';
        }
    }

    return errors;
};

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
        // Use let instead of const to allow reassignment
        let message = `<b>Новое сообщение от Мир Речи...</b>\n`;
        message += `<b>Отправитель: </b> ${values.name}\n`;
        message += `<b>Телефон: </b> ${values.phone}\n`;
        message += `<b>Возраст ребенка: </b> ${values.age}\n`;
        message += `<b>Специалист: </b> ${values.specialist}\n`;

        // Send message to Telegram
        await axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        });

        alert('Message sent successfully to Telegram');
        resetForm();
    } catch (error) {
        alert('Failed to send message: ' + error);
    }
    setSubmitting(false);
};

const SubForm = () => {
    return (
        <div className="form_component">
            <div className="background_blur"></div>

            <header className="header">
                <div className="header_center">
                    <div className="header_info">
                        <div className="header_logo">
                            <Link to="/"><img src={logo} alt="Мир Речи" /></Link>
                        </div>

                        <Link to="https://yandex.ru/maps/org/mir_rechi/104942983328/?ll=37.864169%2C55.677296&utm_source=share&z=16" target="_blank">
                            <div className="header_address">
                                <div className="header_address_icon">
                                    <img src={mapMarker} alt="mapMarker" />
                                </div>
                                <p>Люберцы, ул. Лётчика Ларюшина, 6, корп. 2</p>
                            </div>
                        </Link>

                        <div className="header_contact">
                            <Link to="tel:(+79691109029)"><p>+7 (969) 110-90-29</p></Link>
                            <Link to="mailto:logoped_morozova@mail.ru"><p>logoped_morozova@mail.ru</p></Link>
                        </div>
                    </div>

                    <nav className="form_link">
                        <ul className="form_list">
                            <li className="form_links">
                                <Link to="/" smooth={true} duration={500}><p>Главная Страница</p></Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>

            <Formik
                initialValues={{ name: '', age: '', specialist: '', phone: '' }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="form-content">
                        <div className="form-group">
                            <label htmlFor="name">Введите Ваше имя:</label>
                            <Field type="text" name="name" id="name" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Возраст ребёнка (1-15):</label>
                            <Field as="select" name="age" id="age">
                                <option value="" label="Выберите возраст" />
                                {[...Array(15)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="age" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label>Выберите специалиста:</label>
                            <div role="group" aria-labelledby="specialist">
                                <label>
                                    <Field type="radio" name="specialist" value="логопед" />
                                    Логопед
                                </label>
                                <label>
                                    <Field type="radio" name="specialist" value="дефектолог" />
                                    Дефектолог
                                </label>
                                <label>
                                    <Field type="radio" name="specialist" value="нейропсихолог" />
                                    Нейропсихолог
                                </label>
                            </div>
                            <ErrorMessage name="specialist" component="div" className="error-message" />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="email">Email адрес:</label>
                            <Field type="email" name="email" id="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="phone">Введите Ваш номер телефона:</label>
                            <Field name="phone" component={PhoneInput} id="phone" />
                            <ErrorMessage name="phone" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}



export default SubForm