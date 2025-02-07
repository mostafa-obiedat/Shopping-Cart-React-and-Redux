import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Fetch products using axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://6784b2081ec630ca33a53587.mockapi.io/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md w-1/3">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h4 className="bg-black text-lg font-bold mb-2">{product.name}</h4>
            <p className="text-gray-600 mb-4">Price: {product.price} JD</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
