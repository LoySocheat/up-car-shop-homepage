import React from "react"
import{Link} from "react-router-dom"
import{ShoppingCart} from 'phosphor-react'
import "./navbar.css"

export const Navbar = () =>{
    return(
        <div className="navbar">
            <header>
                <div>
                    <Link to="/" style={{ 'fontFamily': 'sans-serif', 'fontWeight': 'bold' }}>Car Shop</Link>
                </div>
                <div>
                    <Link to="/cart">               
                        <ShoppingCart></ShoppingCart>
                    </Link>
                </div>
            </header>
        </div>
    )
}