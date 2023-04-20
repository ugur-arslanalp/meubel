import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ item }) => {
  
  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return (
    <div className="product__container">
      <div className="product_item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info">
          <p className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </p>
          <h4 className="price">
            Rs. {item.price.toLocaleString("en", numberOptions)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
