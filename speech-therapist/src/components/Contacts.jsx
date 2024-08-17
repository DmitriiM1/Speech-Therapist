import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import "../styles/contacts.css";



const Contacts = () => {

    // useEffect(() => {
    //     // Check if the map script already exists
    //     const existingScript = document.getElementById("yandex-map-script");
    //     if (!existingScript) {
    //         const script = document.createElement("script");
    //         script.type = "text/javascript";
    //         script.charset = "utf-8";
    //         script.async = true;
    //         script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aacf59434fc10acd97e90c59bffdd1f10c381f503d51355a65f6fe42167f005f7&amp;width=500&amp;height=500&amp;lang=ru_RU&amp;scroll=true";
    //         script.id = "yandex-map-script";
    //         document.getElementById("map").appendChild(script);
    //     } else {
    //         console.warn("Yandex map script already loaded.");
    //     }
    // }, []);
    
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
                <div id="map" className="map_container">
                <iframe 
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aacf59434fc10acd97e90c59bffdd1f10c381f503d51355a65f6fe42167f005f7&amp;source=constructor" 
                        width="500" 
                        height="500" 
                        title="Yandex Map"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contacts;