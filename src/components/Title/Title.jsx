import React from "react";
import titleImg from "../../assets/images/titleImg.png";
import logo from "../../assets/images/logo.png";
import "./title.scss"

const Title = (props) => {
  const titles = [
    {
      path: "/account",
      display: "My Account",
    },
    {
      path: "/shop",
      display: "Shop",
    },
    {
      path: "/blog",
      display: "Blog",
    },
    {
      path: "/contact",
      display: "Contact",
    },
    {
      path: "/checkout",
      display: "Checkout",
    },
    {
      path: "/cart",
      display: "Cart",
    },
  ];

  const location = props.location.pathname;
  let titleLocation = "";

  // eslint-disable-next-line no-restricted-syntax
  for (const title of titles) {
    if (title.path === location) {
      titleLocation = title.display;
    }
  }
  return (
    <div
      className="title"
      style={{
        backgroundImage: `url(${titleImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>{titleLocation}</h1>
      <p>
        <b>Home &gt;</b> {titleLocation}
      </p>
    </div>
  );
};

export default Title;
