import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import Title from "../components/Title/Title";
import Info from "../components/Info/Info";
import "../styles/contact.scss";
import addressIcon from "../assets/images/address.svg";
import phoneIcon from "../assets/images/phone.svg";
import timeIcon from "../assets/images/time.svg";

const Contact = () => {
  const location = useLocation();
  return (
    <Helmet>
      <Title location={location} />
      <div className="section__container">
        <section className="info__section">
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </section>
        <section className="contact__info__submit">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="item adress">
                <img src={addressIcon} alt="" />
                <span>Address</span>
              </div>
              <p>236 5th SE Avenue,</p>
              <p>New York NY10000,</p>
              <p>United States</p>
            </div>
            <div className="contact__info-item">
              <div className="item phone">
                <img src={phoneIcon} alt="" />
                <span>Phone</span>
              </div>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
            <div className="contact__info-item">
              <div className="item time">
                <img src={timeIcon} alt="" />
                <span>Working Time</span>
              </div>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="input__section">
            <p>Your Name</p>
            <input type="text" name="text" id="text" placeholder="Abc" />
            <p>Email Address</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@def.com"
            />
            <p>Subject</p>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="This is optional"
            />
            <p>Message</p>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Hi! I'd like to ask about"
             />
            <motion.button whileTap={{ scale: 1.1 }}>Submit</motion.button>
          </div>
        </section>
      </div>

      <Info />
    </Helmet>
  );
};

export default Contact;
