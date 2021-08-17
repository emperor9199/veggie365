import React, { useState,useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
import play from "../../img/playstore.svg";
import app from "../../img/appstore.svg";
import axios from "axios";
import { Link } from "react-router-dom";

function Footer() {
  const [cata, setCata] = useState();

  useEffect(() => {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    const fetchProducts = async () => {
      const { data } = await authAxios.get("/product/category");
      setCata(data);
    };
    fetchProducts();
  }, []);

  

  return (
    <div className="footer_container">
      <div className="footer_con">
        <div className="footer_regular">
          <div className="footer_categories">
            <div className="cata-inner">
              <h4>CATEGORIES</h4>
              <div className="footer_line" />
              {
                cata?.slice(0,5).map((cat,key) => {
                  return(
                    <ul key={key}>
                      <Link to={`/products/${cat.category_id}/${cat.category_name}`}
                  style={{
                    textDecoration: "none",
                    color: "#929a9a",
                  }}><li>{cat.category_name}</li></Link>
                    </ul>
                  )
                })
              }
            </div>
          </div>
          <div className="footer_buy_with_us">
            <div className="footer_categories_1">
              <h4>BUY WITH US</h4>
              <div className="footer_line" />
              <ul>
              <li><Link to="aboutus" style={{
                    textDecoration: "none",
                    color: "#929a9a",
                  }}>About us</Link></li>
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
        <div className="copyright common_flex" style={{ marginLeft: "2rem" }}>
            ©Copyright 2021 VEGGIE 365
          </div>
          
          <div className="play common_flex" style={{ marginRight: "2rem"}}>
            <a href="ab" target="_blank">
              <img
                src={play}
                alt=""
                style={{ height: "2.5rem"}}
                className="playImage"
              />
            </a>
            <a href="ab" target="_blank">
              <img src={app} alt="" style={{ height: "2.5rem"}} />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
