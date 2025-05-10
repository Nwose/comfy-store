import React from "react";
import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProduct = () => {
  return (
    <div>
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProduct;
