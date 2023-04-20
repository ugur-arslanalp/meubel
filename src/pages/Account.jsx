import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import Title from "../components/Title/Title";
import Info from "../components/Info/Info";
import "../styles/account.scss";

const Account = () => {
  const location = useLocation();
  return (
    <Helmet title="My Account">
      <Title location={location} />
      <section className="account__section">
        <div className="login">
          <h4>Login</h4>
          <div>
            <p className="bold">Username or email address</p>
            <input type="text" />
            <p className="bold">Password</p>
            <input type="password" />
          </div>
          <div className="checkbox__div">
            <input className="checkbox" type="checkbox" name="" id="" />
            <span>Remember Me</span>
          </div>
          <div>
            <motion.button whileTap={{ scale: 1.1 }}>Login</motion.button>
            <span>Lost your Password?</span>
          </div>
        </div>
        <div className="register">
          <h4>Register</h4>
          <p className="bold">Email Address</p>
          <input type="email" name="" id="" />
          <div className="mail__info">
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy</b>.
            </p>
          </div>
          <motion.button className="register__button" whileTap={{ scale: 1.1 }}>Register</motion.button>
        </div>
      </section>
      <Info />
    </Helmet>
  );
};

export default Account;
