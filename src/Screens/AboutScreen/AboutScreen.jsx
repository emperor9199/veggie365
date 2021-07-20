import React from "react";
import { AboutContainer } from "./Styles";
import vegStore from "../../img/about.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const AboutScreen = () => {
  return (
    <AboutContainer>
      <div className="context">
        <div className="about-detail">
          <h1>About Us</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            ipsam distinctio cumque culpa minus consectetur fugit quasi dolorem
            voluptas beatae doloribus earum nam molestiae, reiciendis ipsa
            blanditiis recusandae, modi delectus?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            repudiandae sed veritatis praesentium corrupti, dignissimos voluptas
            molestias blanditiis accusamus ratione, ut, dolor est nulla facere
            dolore eveniet nostrum sit voluptatibus! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Expedita deleniti et non cum debitis
            iure nostrum dolor hic? Tempora dicta quisquam necessitatibus
            corporis ipsa ducimus maxime, aut cumque ipsum magnam!
          </p>
          <button className="about-btn">Explore Veggi</button>
        </div>
        <div className="about-img">
          <img src={vegStore} alt="vegStore" />
          <div className="social-icon">
            <FacebookIcon className="social-sub" />
            <TwitterIcon className="social-sub" />
            <InstagramIcon className="social-sub" />
            <WhatsAppIcon className="social-sub" />
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </AboutContainer>
  );
};

export default AboutScreen;
