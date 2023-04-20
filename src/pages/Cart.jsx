import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import Title from "../components/Title/Title";
import Info from "../components/Info/Info";

import "../styles/cart.scss";

import deleteIcon from "../assets/images/deleteIcon2.svg";

import { cartActions } from "../redux/slices/cartSlice";

const Cart = () => {
  const location = useLocation();
  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <Title location={location} />
      <section className="cart__container">
        <div className="cart__items">
          {cartItems.length === 0 ? (
            <h2>No items in the cart.</h2>
          ) : (
            <table className="cart__items__table">
              <thead>
                <tr>
                  <th> </th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <TableRow item={item} key={index} />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="cart__totals">
          <h4>Cart Totals</h4>
          {cartItems.map((item, index) => (
            <div key={index} className="subtotal">
              <p className="bold">Subtotal</p>
              <p>
                Rs.{" "}
                {(item.price * item.quantity).toLocaleString(
                  "en",
                  numberOptions
                )}
              </p>
            </div>
          ))}
          <div className="total">
            <p className="bold">Total</p>
            <p>Rs. {totalAmount.toLocaleString("en", numberOptions)}</p>
          </div>
          <div className="button__container">
            <NavLink to="/checkout">
              <motion.button whileTap={{ scale: 1.1 }}>Check Out</motion.button>
            </NavLink>
          </div>
        </div>
      </section>
      <Info />
    </Helmet>
  );
};

const TableRow = ({ item }) => {
  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img className="table__img" src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>Rs. {item.price.toLocaleString("en", numberOptions)}</td>
      <td>
        <div>{item.quantity}</div>
      </td>
      <td>
        Rs. {(item.price * item.quantity).toLocaleString("en", numberOptions)}
      </td>
      <td>
        <img src={deleteIcon} alt="" onClick={deleteProduct}/>
      </td>
    </tr>
  );
};

export default Cart;
