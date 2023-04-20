import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__adress">
          <p>400 University Drive Suite 200 Coral</p>
          <p>Gables,</p>
          <p>FL 33134 USA</p>
        </div>
        <div className="footer__links">
          <span>Links</span>
          <ul className="links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__help">
          <span>Help</span>
          <ul className="help">
            <li>
              <button>Payment Options</button>
            </li>
            <li>
              <button>Returns</button>
            </li>
            <li>
              <button>Pricacy Policies</button>
            </li>
          </ul>
        </div>
        <div className="footer__newsletter">
          <span className="footer__newsletter-title">Newsletter</span>
          <div className="subscribe">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email Address"
            />
            <motion.button whileTap={{ scale: 1.1 }}>SUBSCRIBE</motion.button>
          </div>  
        </div>
      </div>
      <div className="copyright">2022 Meubel House. All rights reverved</div>
    </footer>
  );

export default Footer;
