import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import Title from "../components/Title/Title";
import "../styles/shop.scss";
import filterImg from "../assets/images/filterImg.svg";
import dotImg from "../assets/images/fourDots.svg";
import listImg from "../assets/images/listImg.svg";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Info from "../components/Info/Info";

const Shop = () => {
  const location = useLocation();
  return (
    <Helmet title="Shop">
      <Title location={location} />

      <section className="filter__section">
        <div className="icons">
          <img src={filterImg} alt="" />
          <span>Filter</span>
          <img src={dotImg} alt="" />
          <img className="border-right" src={listImg} alt="" />
          <span>Showing 1–16 of 32 results</span>
        </div>
        <div className="sort-list">
          <span>Show</span>
          <span className="page__size">16</span>
          <span>Sort By</span>
          <span className="sort__selection">Default</span>
        </div>
      </section>
      <section className="products__section">
        <ProductList data={products} />
      </section>
      <div className="pages">
          <motion.button whileTap={{ scale: 1.1 }} className="active__page">
            1
          </motion.button>
          <motion.button whileTap={{ scale: 1.1 }}>2</motion.button>
          <motion.button whileTap={{ scale: 1.1 }}>3</motion.button>
          <motion.button whileTap={{ scale: 1.1 }}>Next</motion.button>
        </div>
      <Info />
    </Helmet>
  );
};

export default Shop;
