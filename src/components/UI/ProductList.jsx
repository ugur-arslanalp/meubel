import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );

export default ProductList;
