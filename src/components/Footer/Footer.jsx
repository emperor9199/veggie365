import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_con">
                <div className="footer_float">
                    <JoinUs />
                </div>
                <div className="footer_regular">
                    <div className="footer_categories">
                        <h4>CATEGORIES</h4>
                        <div className="footer_line" />
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
                            <div className="footer_line" />
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
                            <div className="footer_line" />
                            <ul>
                                <li style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur est sunt voluptates quibusdam tempore minus, omnis odit incidunt quia, error accusamus consectetur rem velit ea distinctio aliquid cumque ipsam?</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_contact">
                        <div className="footer_categories">
                            <h4>CONNECT US</h4>
                            <div className="footer_line" />
                            <ul>
                                <li><InstagramIcon style={{marginRight:"3", color:"8a3ab9",fontSize: 35}}/>Instagram</li>
                                <li><FacebookIcon style={{marginRight:"3", color:"3b5998",fontSize: 35}}/>FACEBOOK</li>
                                <li><TwitterIcon style={{marginRight:"3", color:"1DA1F2",fontSize: 35}}/>TWITTER</li>
                                <li><LinkedInIcon style={{marginRight:"3", color:"0077b5",fontSize: 35}}/>LINDIN</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
