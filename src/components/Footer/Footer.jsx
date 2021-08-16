import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
import play from "../../img/playstore.svg";
import app from "../../img/appstore.svg";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_con">
        <div className="footer_regular">
          <div className="footer_categories">
            <div className="cata-inner">
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
          </div>
          <div className="footer_buy_with_us">
            <div className="footer_categories_1">
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
            <div className="footer_categories_1">
              <h4>ABOUT</h4>
              <div className="footer_line" />
              <ul>
                <li style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, consequatur est sunt voluptates quibusdam tempore
                  minus, omnis odit incidunt quia, error accusamus consectetur
                  rem velit ea distinctio aliquid cumque ipsam?
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_contact">
            <div className="footer_categories_1">
              <h4>CONNECT US</h4>
              <div className="footer_line" />
              <ul>
                <li>
                  <InstagramIcon
                    style={{ marginRight: "3", color: "fff", fontSize: 30 }}
                  />
                  Instagram
                </li>
                <li>
                  <FacebookIcon
                    style={{ marginRight: "3", color: "fff", fontSize: 30 }}
                  />
                  Facebook
                </li>
                <li>
                  <TwitterIcon
                    style={{ marginRight: "3", color: "fff", fontSize: 30 }}
                  />
                  Twitter
                </li>
                <li>
                  <LinkedInIcon
                    style={{ marginRight: "3", color: "fff", fontSize: 30 }}
                  />
                  Linkdin
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_copy">
          <div className="copyright" style={{ marginLeft: "2rem" }}>
            ©Copyright 2021 VEGGIE 365
          </div>
          <div className="play common_flex" style={{ marginRight: "2rem" }}>
            <a href="ab" target="_blank">
              <img
                src={play}
                alt=""
                style={{ height: "2.5rem", marginRight: "1rem" }}
              />
            </a>
            <a href="ab" target="_blank">
              <img src={app} alt="" style={{ height: "2.5rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
