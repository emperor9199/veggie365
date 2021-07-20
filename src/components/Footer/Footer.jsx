import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer_container" data-aos="fade-up">
            <div className="footer_con">
                <div className="footer_float">
                    <JoinUs />
                </div>
                <div className="footer_regular">
                    <div className="footer_categories">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li>Root Vegetable</li>
                            <li>leafy Green</li>
                            <li>Marrow</li>
                            <li>Mushrooms</li>
                            <li>Gourds</li> 
                        </ul>
                    </div>
                    <div className="footer_buy_with_us">
                        <div className="footer_categories">
                            <h4>BUY WITH US</h4>
                            <ul>
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Services</li>
                                <li>Privacy Policy</li>
                                <li>FAQs</li> 
                            </ul>
                        </div>
                    </div>
                    <div className="footer_about">
                        <div className="footer_categories">
                            <h4>ABOUT</h4>
                            <ul>
                                <li style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur est sunt voluptates quibusdam tempore minus, omnis odit incidunt quia, error accusamus consectetur rem velit ea distinctio aliquid cumque ipsam?</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_contact">
                        <div className="footer_categories">
                            <h4>CONNECT US</h4>
                            <ul>
                                <li>INSTAGRAM</li>
                                <li>FACEBOOK</li>
                                <li>TWITTER</li>
                                <li>LINDIN</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
