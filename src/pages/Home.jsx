import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.scss";
import shopImage from "../assets/images/shopImage.png";
import tableImg1 from "../assets/images/tableImg1.png";
import tableImg2 from "../assets/images/tableImg2.png";
import asgaardImg from "../assets/images/asgaardImg.png";
import clockImg from "../assets/images/clock.svg";
import calenderImg from "../assets/images/calender.svg";
import blogImg1 from "../assets/images/blogsImg1.png";
import blogImg2 from "../assets/images/blogsImg2.png";
import blogImg3 from "../assets/images/blogsImg3.png";
import backgroundImg from "../assets/images/home-backgroundImg.png";

import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Home = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const filteredTopProducts = products.filter(
      (item) => item.category === "top-picks"
    );

    setTopProducts(filteredTopProducts);
  }, []);

  return (
    <Helmet title="Home">
      <div className="home__container">
        <section className="shop__section">
          <div className="info">
            <h1>Rocket Single Seater</h1>
            <motion.button whileTap={{ scale: 1.1 }}>Shop Now</motion.button>
          </div>
          <div className="image">
            <img src={shopImage} alt="" />
          </div>
        </section>
        <section className="table__section">
          <div className="table__item">
            <img src={tableImg1} alt="" />
            <h4>Side Table</h4>
            <motion.button whileTap={{ scale: 1.1 }}>View More</motion.button>
          </div>
          <div className="table__item">
            <img src={tableImg2} alt="" />
            <h4>Side Table</h4>
            <motion.button whileTap={{ scale: 1.1 }}>View More</motion.button>
          </div>
        </section>
        <section className="toppicks__section">
          <div className="title">
            <h1>Top Picks For You</h1>
            <p>
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          </div>
          <div className="toppicks__section__products">
            <ProductList data={topProducts} />
          </div>
          <div className="view__button">
            <motion.button whileTap={{ scale: 1.1 }}>View More</motion.button>
          </div>
        </section>
        <section className="new__arrivals">
          <div className="product__img">
            <img src={asgaardImg} alt="" />
          </div>
          <div className="product__info">
            <p>New Arrivals</p>
            <h1>Asgaard Sofa</h1>
            <motion.button whileTap={{ scale: 1.1 }}>Order Now</motion.button>
          </div>
        </section>

        <section className="blogs__section">
          <div className="blogs__section__title">
            <h1>Our Blogs</h1>
            <p>
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>
          <div className="blogs">
            <div className="blog__item">
              <img className="blogImg" src={blogImg1} alt="" />
              <div className="item__info">
                <p>Going all-in with millennial design</p>
                <motion.button whileTap={{ scale: 1.1 }}>
                  Read More
                </motion.button>
                <div className="date__info">
                  <img src={clockImg} alt="" />
                  <span>5 min</span>
                  <img src={calenderImg} alt="" />
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <img className="blogImg" src={blogImg2} alt="" />
              <div className="item__info">
                <p>Going all-in with millennial design</p>
                <motion.button whileTap={{ scale: 1.1 }}>
                  Read More
                </motion.button>
                <div className="date__info">
                  <img src={clockImg} alt="" />
                  <span>5 min</span>
                  <img src={calenderImg} alt="" />
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
            <div className="blog__item">
              <img className="blogImg" src={blogImg3} alt="" />
              <div className="item__info">
                <p>Going all-in with millennial design</p>
                <motion.button whileTap={{ scale: 1.1 }}>
                  Read More
                </motion.button>
                <div className="date__info">
                  <img src={clockImg} alt="" />
                  <span>5 min</span>
                  <img src={calenderImg} alt="" />
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="view__button">
            <motion.button whileTap={{ scale: 1.1 }}>
              View All Posts
            </motion.button>
          </div>
        </section>
        <section
          className="instagram__section"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <h1>Our Instagram</h1>
          <p>Follow our store on Instagram</p>
          <motion.button whileTap={{ scale: 1.1 }}>Follow Us</motion.button>
        </section>
      </div>
    </Helmet>
  );
};

export default Home;
