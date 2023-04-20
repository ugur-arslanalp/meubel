import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./header.scss";
import { FaBars } from "react-icons/fa";
import accountIcon from "../../assets/images/AccountIcon.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import heartIcon from "../../assets/images/HeartIcon.svg";
import cartIcon from "../../assets/images/CartIcon.svg";
import CartPopup from "../CartPopup/CartPopup";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const navLinks = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "blog",
    display: "Blog",
  },
  {
    path: "contact",
    display: "Contact",
  },
];
const Header = () => {
  const location = useLocation();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showPopup, setShowPopup] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <header
        className="header"
        style={{
          background: location.pathname === "/home" ? "#FBEBB5" : "#FFFFFF",
        }}
      >
        <div className="nav__wrapper">
          <div className="navigation">
            <ul className="links">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__icons">
            <span className="account__icon">
              <NavLink to="/account">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={accountIcon}
                  alt=""
                />
              </NavLink>
            </span>
            <span className="search__icon">
              <motion.img whileTap={{ scale: 1.2 }} src={searchIcon} alt="" />
            </span>
            <span className="heart__icon">
              <motion.img whileTap={{ scale: 1.2 }} src={heartIcon} alt="" />
            </span>
            <span className="cart__icon">
              <motion.img
                whileTap={{ scale: 1.2 }}
                src={cartIcon}
                alt=""
                onClick={() => setShowPopup(true)}
              />
              <span className="badge">{totalQuantity}</span>
            </span>
          </div>
          <FaBars
            className="hamburger"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          />
          {hamburgerOpen && (
            <HamburgerMenu setHamburgerOpen={setHamburgerOpen} />
          )}
        </div>
      </header>
      {showPopup && <CartPopup setShowPopup={setShowPopup} />}
    </>
  );
};

export default Header;
