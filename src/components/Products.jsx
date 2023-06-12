import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ filters, cat, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch products from backend
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/products?category=${cat}`
            : `/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  // filter products
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // sort products
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat?filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )):products.slice(0,8).map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
