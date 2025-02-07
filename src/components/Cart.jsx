import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border-b border-gray-300 py-4 mb-4">
            <h4 className="text-lg font-bold">{item.name}</h4>
            <p className="text-gray-600 mb-2">Price: {item.price} JD</p>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
                className="border p-2 rounded w-16 text-center"
              />
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
