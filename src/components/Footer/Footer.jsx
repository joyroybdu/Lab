import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";




const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            natus dignissimos? Placeat unde autem quibusdam quas eaque, fuga
            illum sint possimus excepturi voluptates ullam? Facilis vitae
            officia, quam quo quasi voluptates. Quo ut praesentium corporis vero
            architecto quos ipsum beatae facilis amet, quaerat consequatur,
            deserunt, velit maiores non facere dolore!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>0138888</li>
                <li>jrjoy@1001@djk</li>
                <li></li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2021 Food Web. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
