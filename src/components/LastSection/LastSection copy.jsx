import React from "react";
import "./LastSection.css"; // For styling
import picA from "../../assets/p1.png";
import picB from "../../assets/p2.png";
import picC from "../../assets/p3.png";
import picD from "../../assets/p4.png";
import picE from "../../assets/p5.png";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";

const LastSection = () => {
    return (
        <div className="last-section">
            <div className="column">
                <img src={picA} alt="p1" />
                <p className="bold-text">Fast Service</p>
                <p>Above {COMMON_CONSTANTS.currency} 20</p>
            </div>
            <div className="column">
                <img src={picB} alt="p2" />
                <p className="bold-text">Warrenty</p>
                <p>For all services</p>
            </div>
            <div className="column">
                <img src={picC} alt="p3" />
                <p className="bold-text">Secured Payment</p>
                <p>Online/card</p>
            </div>
            <div className="column">
                <img src={picD} alt="p4" />
                <p className="bold-text">Offers</p>
                <p>On First Service</p>
            </div>
            <div className="column">
                <img src={picE} alt="p5" />
                <p className="bold-text">24*7 Support</p>
                <p>Contact us</p>
            </div>
        </div>
    );
};

export default LastSection;
