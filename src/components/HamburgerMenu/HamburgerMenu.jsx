import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import CartPopup from "../CartPopup/CartPopup";
import "./hamburger.scss";
import accountIcon from "../../assets/images/AccountIcon.svg";
import searchIcon from "../../assets/images/SearchIcon.svg";
import heartIcon from "../../assets/images/HeartIcon.svg";
import cartIcon from "../../assets/images/CartIcon.svg";

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
const HamburgerMenu = ({ setHamburgerOpen }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showPopup, setShowPopup] = useState(false);

  

  return (
    <>
      <div className="hamburger__navigation">
        <ul className="links">
          {navLinks.map((item, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "nav__active" : ""
                }
                onClick={() => setShowPopup(!showPopup)}
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hamburger__nav__icons">
          <span className="account__icon">
            <NavLink to="/account">
              <motion.img whileTap={{ scale: 1.2 }} src={accountIcon} alt="" />
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
              onClick={() => {
                setShowPopup((prev) => !prev);
              }}
            />
            <span className="badge">{totalQuantity}</span>
          </span>
        </div>
        <span className="close__icon">
          <FaRegWindowClose onClick={() => setHamburgerOpen(false)} />
        </span>
      </div>

      {showPopup && <CartPopup setShowPopup={setShowPopup} />}
    </>
  );
};

export default HamburgerMenu;
