import React from "react";
import { FeaturedProduct, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";
export const loader = async () => {
  const res = await customFetch(url);
  console.log(res);
  const products = res.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
    </>
  );
};

export default Landing;
