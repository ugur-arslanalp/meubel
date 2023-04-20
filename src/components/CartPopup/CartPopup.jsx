import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./cartPopup.scss";
import closePopupIcon from "../../assets/images/closePopupIcon.svg";
import deleteIcon from "../../assets/images/deleteIcon.svg";
import { cartActions } from "../../redux/slices/cartSlice";

const CartPopup = ({ setShowPopup }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <div className="opac__layer">
        <div className="cart__wrapper">
          <div className="cart__content">
            <div className="cart__content__header">
              <span>Shopping Cart</span>
              <img
                src={closePopupIcon}
                alt=""
                onClick={() => setShowPopup(false)}
              />
            </div>
            <div className="cart__content__container">
              {cartItems.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                cartItems.map((item, index) => (
                  <CartItems item={item} key={index} />
                ))
              )}
            </div>
            <div className="subtotal">
              <span>Subtotal:</span>
              <span>Rs. {totalAmount.toLocaleString("en", numberOptions)}</span>
            </div>
            <div className="popup__buttons">
              <NavLink to="/cart">
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  onClick={() => setShowPopup(false)}
                >
                  View Cart
                </motion.button>
              </NavLink>
              <NavLink to="/checkout">
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  onClick={() => setShowPopup(false)}
                >
                  Checkout
                </motion.button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  );
};

const CartItems = ({ item }) => {
  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="cart__items">
      <div className="image__container">
        <img className="item__image" src={item.imgUrl} alt="" />
      </div>
      <div className="item__name__amount__container">
        <p>{item.productName}</p>
        <span>{item.quantity}</span>
        <span>X</span>
        <span>Rs. {item.price.toLocaleString("en", numberOptions)}</span>
      </div>
      <div className="delete__button__container">
        <img src={deleteIcon} alt="" onClick={deleteProduct} />
      </div>
    </div>
  );
};

export default CartPopup;
