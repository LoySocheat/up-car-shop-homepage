import React, { useContext } from "react";
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/car-context";
import { CartItem } from "./cart-item"
import "./cart.css"
import { useNavigate } from "react-router-dom"

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div>
      {totalAmount > 0 &&
        <div className="cart">
          <div>
            <h1> Your Cart Items</h1>
          </div>
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return (
                  <CartItem data={product}></CartItem>
                )
              }
            })}
          </div>
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <div>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      }
      { totalAmount <= 0 &&
        <div className="no-cart">
          <p>Your Cart is Empty</p>
        </div>
      }

    </div>
  )
}