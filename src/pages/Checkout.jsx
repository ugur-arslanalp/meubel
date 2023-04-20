import React from "react";
import "../styles/checkout.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import Title from "../components/Title/Title";
import Info from "../components/Info/Info";
import blackDot from "../assets/images/blackDot.svg";
import greyDot from "../assets/images/greyDot.svg";

const Checkout = () => {
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <Helmet title="Checkout">
      <Title location={location} />
      <section className="billing__section">
        <div className="billing__section__details">
          <h1>Billing Details</h1>
          <div className="name__info">
            <div className="name__info__item">
              <p>First Name</p>
              <input type="text" name="" id="" />
            </div>
            <div className="name__info__item">
              <p>Last Name</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div>
            <p>Company Name</p>
            <input type="text" name="" id="" />
            <p>Country / Region</p>
            <select name="country" id="country">
              <option value="Netherlands">Netherlands</option>
              <option value="Turkey">Turkey</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
            </select>
            <p>Street Address</p>
            <input type="text" name="" id="" />
            <p>Town / City</p>
            <input type="text" name="" id="" />
            <p>Province</p>
            <select name="province" id="province">
              <option value="western">Western Province</option>
              <option value="eastern">Eastern Province</option>
            </select>
            <p>Zip Code</p>
            <input type="text" name="" id="" />
            <p>Phone</p>
            <input type="text" name="" id="" />
            <p>Email Address</p>
            <input type="email" name="" id="" />
            <p />
            <input
              type="text"
              name=""
              id=""
              placeholder="Additional Information"
            />
          </div>
        </div>
        <div className="billing__section__payment">
          <div className="cart__checkout__details">
            <div className="cart__checkout__details__titles">
              <h4>Product</h4>
              <h4>Subtotal</h4>
            </div>
            <div className="cart__checkout__details__content">
              {cartItems.map((item, index) => (
                <div className="checkout__item" key={index}>
                  <div className="checkout__item__product">
                    <p>
                      {item.productName} X {item.quantity}
                    </p>
                    <p>
                      Rs.{" "}
                      {(item.price * item.quantity).toLocaleString(
                        "en",
                        numberOptions
                      )}
                    </p>
                  </div>
                  <div className="checkout__item__subtotal">
                    <p>Subtotal</p>
                    <p>
                      Rs.{" "}
                      {(item.price * item.quantity).toLocaleString(
                        "en",
                        numberOptions
                      )}
                    </p>
                  </div>
                </div>
              ))}
              <div className="total__price">
                <p>Total</p>
                <p>Rs. {totalAmount.toLocaleString("en", numberOptions)}</p>
              </div>
            </div>
          </div>
          <div className="bank__information">
            <div className="bank__transfer">
              <img src={blackDot} alt="" />
              <p>Direct Bank Transfer</p>
            </div>
            <p className="bank__transfer__info">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="bank__transfer__grey">
              <img src={greyDot} alt="" />
              <p>Direct Bank Transfer</p>
            </div>
            <div className="bank__transfer__grey">
              <img src={greyDot} alt="" />
              <p>Cash on Delivery</p>
            </div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy.</b>
            </p>
          </div>
          <div className="order__button">
            <motion.button>Place Order</motion.button>
          </div>
        </div>
      </section>
      <Info />
    </Helmet>
  );
};

export default Checkout;
