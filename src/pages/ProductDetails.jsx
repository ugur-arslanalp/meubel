import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/UI/ProductList";
import "../styles/productdetails.scss";
import littleImg1 from "../assets/images/littleImg1.png";
import littleImg2 from "../assets/images/littleImg2.png";
import littleImg3 from "../assets/images/littleImg3.png";
import littleImg4 from "../assets/images/littleImg4.png";
import starImg from "../assets/images/star.svg";
import facebookIcon from "../assets/images/facebookIcon.svg";
import linkedinIcon from "../assets/images/linkedinIcon.svg";
import twitterIcon from "../assets/images/twitterIcon.svg";
import sofaImg1 from "../assets/images/sofaImg1.png";
import sofaImg2 from "../assets/images/sofaImg2.png";
import { cartActions } from "../redux/slices/cartSlice";

const ProductDetails = ({ item }) => {
  const numberOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    shortDesc,
    price,
    category,
    tags,
    sku,
    description,
    reviews,
  } = product;

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [tab, setTab] = useState("description");
  const [productQuantity, setProductQuantity] = useState(1);

  const increment = () => {
    setProductQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setProductQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  useEffect(() => {
    const filteredRelatedProducts = products.filter(
      (item) => item.category === "top-picks"
    );

    setRelatedProducts(filteredRelatedProducts);
  }, []);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
        quantity: productQuantity,
      })
    );
  };

  return (
    <Helmet title="Shop">
      <div className="location__info">
        <div className="location__info__container">
          <p>Home</p>
          <b>&gt;</b>
          <p>Shop</p>
          <b>&gt;</b>
        </div>
        <span>{productName}</span>
      </div>
      <section className="product__details">
        <div className="product__details__content">
          <div className="product__images">
            <div className="little__images">
              <img className="littleImg" src={littleImg1} alt="" />
              <img className="littleImg" src={littleImg2} alt="" />
              <img className="littleImg" src={littleImg3} alt="" />
              <img className="littleImg" src={littleImg4} alt="" />
            </div>
            <div className="image__container">
              <img src={imgUrl} alt="" />
            </div>
          </div>
          <div className="details">
            <h4>{productName}</h4>
            <p className="price">
              Rs. {price.toLocaleString("en", numberOptions)}
            </p>
            <div className="review">
              <span className="review__stars">
                <img src={starImg} alt="" />
                <img src={starImg} alt="" />
                <img src={starImg} alt="" />
                <img src={starImg} alt="" />
                <img src={starImg} alt="" />
              </span>
              <span>{reviews.length} Customer Review</span>
            </div>

              <p className="short__desc">{shortDesc}</p>


            <div className="size__selection">
              <p>Size</p>
              <div className="size__selection__sizes">
                <motion.button whileTap={{ scale: 1.1 }}>L</motion.button>
                <motion.button whileTap={{ scale: 1.1 }}>XL</motion.button>
                <motion.button whileTap={{ scale: 1.1 }}>XS</motion.button>
              </div>
            </div>
            <div className="color__selection">
              <p>Color</p>
              <div className="color__selection__colors">
                <motion.button whileTap={{ scale: 1.1 }} className="blue" />
                <motion.button whileTap={{ scale: 1.1 }} className="black" />
                <motion.button whileTap={{ scale: 1.1 }} className="brown" />
              </div>
            </div>
            <div className="quantitiy__add__cart">
              <div className="quantity">
                <button onClick={decrement}>-</button>
                <span>{productQuantity}</span>
                <button onClick={increment}>+</button>
              </div>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="addToCart__button"
                onClick={addToCart}
              >
                Add To Cart
              </motion.button>
            </div>

            <div className="details__item__info">
              <div className="details__item__info-sku">
                <p>SKU</p>
                <p>:</p>
                <p>{sku}</p>
              </div>
              <div className="details__item__info-category">
                <p>Category</p>
                <p>:</p>
                <p>{category}</p>
              </div>
              <div className="details__item__info-tags">
                <p>Tags</p>
                <p>:</p>
                <p>{tags.toString()}</p>
              </div>
              <div className="details__item__info-share">
                <p>Share</p>
                <p>:</p>
                <div className="share__images">
                  <img src={facebookIcon} alt="" />
                  <img src={linkedinIcon} alt="" />
                  <img src={twitterIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product__additional__info__section">
        <div className="product__additional__info__section__titles">
          <h4
            className={`${tab === "description" ? "active__tab" : ""}`}
            onClick={() => setTab("description")}
          >
            Description
          </h4>
          <h4
            className={`${tab === "additional" ? "active__tab" : ""}`}
            onClick={() => setTab("additional")}
          >
            Additional Information
          </h4>
          <h4
            className={`${tab === "reviews" ? "active__tab" : ""}`}
            onClick={() => setTab("reviews")}
          >
            Reviews[{reviews.length}]
          </h4>
        </div>

        {tab === "description" ? (
          <div className="product__additional__info__section__content">
            <p>{description}</p>
          </div>
        ) : tab === "additional" ? (
          <div className="product__additional__info__section__content">
            <p>{shortDesc}</p>
          </div>
        ) : (
          <div className="product__additional__info__section__review">
            <ul>
              {reviews?.map((item, index) => (
                <li key={index}>
                  <span>{item.rating} (Rating)</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="content__images">
          <img src={sofaImg1} alt="" />
          <img src={sofaImg2} alt="" />
        </div>
      </section>
      <section className="related__products__section">
        <h4 className="related__products__section__title">Related Products</h4>
        <div className="related__products__section__content">
          <ProductList data={relatedProducts} />
        </div>
        <div className="related__products__section__button__container">
          <motion.button whileTap={{ scale: 1.1 }}>View More</motion.button>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
