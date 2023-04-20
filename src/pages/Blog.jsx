import React from "react";
import "../styles/blog.scss";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../components/Title/Title";
import Info from "../components/Info/Info";
import Helmet from "../components/Helmet/Helmet";
import blogBigImg1 from "../assets/images/blogBigImg1.png";
import blogBigImg2 from "../assets/images/blogBigImg2.png";
import blogBigImg3 from "../assets/images/blogBigImg3.png";
import adminIcon from "../assets/images/adminIcon.svg";
import calenderIcon from "../assets/images/calenderIcon.svg";
import categoryIcon from "../assets/images/categoryIcon.svg";
import postsImg1 from "../assets/images/postsImg1.png";
import postsImg2 from "../assets/images/postsImg2.png";
import postsImg3 from "../assets/images/postsImg3.png";
import postsImg4 from "../assets/images/postsImg4.png";
import postsImg5 from "../assets/images/postsImg5.png";
import searchIcon from "../assets/images/SearchIcon.svg";

const Blog = () => {
  const location = useLocation();
  return (
    <Helmet title="Blog">
      <Title location={location} />
      <section className="blog__section">
        <div className="blog__items">
          <div className="item">
            <div className="item__img">
              <img src={blogBigImg1} alt="" />
            </div>
            <div className="item__info">
              <img src={adminIcon} alt="" />
              <span className="item__info__span">Admin</span>
              <img src={calenderIcon} alt="" />
              <span className="item__info__span">14 Oct 2022</span>
              <img src={categoryIcon} alt="" />
              <span className="item__info__span">Wood</span>
            </div>
            <div className="item__description">
              <h4>Going all-in with millennial design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <motion.button whileTap={{ scale: 1.1 }}>Read More</motion.button>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img src={blogBigImg2} alt="" />
            </div>
            <div className="item__info">
              <img src={adminIcon} alt="" />
              <span>Admin</span>
              <img src={calenderIcon} alt="" />
              <span>14 Oct 2022</span>
              <img src={categoryIcon} alt="" />
              <span>Handmade</span>
            </div>
            <div className="item__description">
              <h4>Going all-in with millennial design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <motion.button whileTap={{ scale: 1.1 }}>Read More</motion.button>
            </div>
          </div>
          <div className="item">
            <div className="item__img">
              <img src={blogBigImg3} alt="" />
            </div>
            <div className="item__info">
              <img src={adminIcon} alt="" />
              <span>Admin</span>
              <img src={calenderIcon} alt="" />
              <span>14 Oct 2022</span>
              <img src={categoryIcon} alt="" />
              <span>Wood</span>
            </div>
            <div className="item__description">
              <h4>Going all-in with millennial design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <motion.button whileTap={{ scale: 1.1 }}>Read More</motion.button>
            </div>
          </div>
        </div>
        <div className="categories__posts">
          <div className="searchbar">
            <img className="searchIcon" src={searchIcon} alt="" />
            <input type="text" name="" id="" />
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <div className="categories__item">
              <span>Crafts</span>
              <span>2</span>
            </div>
            <div className="categories__item">
              <span>Design</span>
              <span>8</span>
            </div>
            <div className="categories__item">
              <span>Handmade</span>
              <span>7</span>
            </div>
            <div className="categories__item">
              <span>Interior</span>
              <span>1</span>
            </div>
            <div className="categories__item">
              <span>Wood</span>
              <span>6</span>
            </div>
          </div>
          <div className="posts">
            <h4>Recent Posts</h4>
            <div className="posts__item">
              <img src={postsImg1} alt="" />
              <div className="item__info">
                <p>Going all-in with millennial design</p>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="posts__item">
              <img src={postsImg2} alt="" />
              <div className="item__info">
                <p>Exploring new ways of decorating</p>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="posts__item">
              <img src={postsImg3} alt="" />
              <div className="item__info">
                <p>Handmade pieces that took time to make</p>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="posts__item">
              <img src={postsImg4} alt="" />
              <div className="item__info">
                <p>Modern home in Milan</p>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="posts__item">
              <img src={postsImg5} alt="" />
              <div className="item__info">
                <p>Colorful office redesign</p>
                <span>03 Aug 2022</span>
              </div>
            </div>
          </div>
        </div>
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

export default Blog;
