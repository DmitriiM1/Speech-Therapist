import React from "react";
import "../styles/subform.css";

import logo from "../assets/header_footerIMG/Colorful Pastel Kindergarten Logo.png";
import mapMarker from "../assets/header_footerIMG/map_marker_icon2.svg"
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import InputMask from 'react-input-mask';


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
        {(inputProps) => <input {...inputProps} type="text" />}
    </InputMask>
);



const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    // Email validation
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|ru)$/i.test(values.email)) {
        errors.email = 'Email must end with ".com" or ".ru"';
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
                            <Link to="mailto:test@gmail.com"><p>test@gmail.com</p></Link>
                        </div>
                    </div>
                </div>
            </header>

            <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="form-content">
                        <div className="form-group">
                            <label htmlFor="name">Введите Ваше имя:</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email адрес:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Введите Ваш номер телефона:</label>
                            <Field name="phone" component={PhoneInput} />
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