import React from 'react'
import "./navbar.scss"
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Shoppix</h1>
            </div>
            <div className="links">
                <NavLink 
                    className="link" 
                    activeClassName="active" 
                    to="/" exact>
                    <i className="fa fa-shopping-basket"></i> All products
                </NavLink>
                <NavLink 
                    className="link" 
                    activeClassName="active" 
                    to="/cart" >
                    <i className="fa fa-cart-plus"></i>  My cart
                </NavLink>
            </div>
        </div>
    )
}
