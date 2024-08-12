import React from "react";
import { Link } from "react-router-dom";

import "../styles/contacts.css";

const Contacts = () => {
    return(
        <div className="contact_container">
            <div className="contact_container_information">
                <div>
                    <p></p>
                    <Link to="/form">
                        <div className="home_button">
                            <p>Записаться</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>email</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>call</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>social</p>
                </div>
            </div>
            <div className="contact_container_map">
                <div className="map_container">

                </div>
            </div>
        </div>
    );
}

export default Contacts;