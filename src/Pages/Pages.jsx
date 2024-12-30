// src/components/ProductList.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchProducts } from "../features/ProductsSlice";

const Pages = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productsList
  ); // Access store data here

  useEffect(() => {
    dispatch(fatchProducts({url: 'http://localhost:3000/products', params:{ }})); 
  }, [dispatch]);
  

  console.log("Redux Store Data:", { products, loading, error }); // Logs Redux store data to the console

  return (
    <div>
      {products && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <div key={product.id}>
            <li >{product.title}</li>
            <li >{product.description}</li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No Products Available in this time</p>
      )}
    </div>
  );
};

export default Pages;
