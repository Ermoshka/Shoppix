import React, { useState } from 'react'
import "./product-item.scss"

export const ProductItem = ({name, price, description, curr, imgUrl, onAddedToCart, inCart, prodId}) => {
    
    const [cart, setCart] = useState(false)
    
    return (
        <div className="glide__slide product-item">
            <div className="img-container">
                <img src={imgUrl} alt={name}/>
            </div>
            <div className="body-container">
                <h3> {name} <span>{price + " " + curr}</span> </h3>
                <p> {description} </p>
                <div className="btn-container">
                    {
                        inCart === true ? (
                            <button className="addcart added">
                                <div>
                                    <i className="fa fa-check"></i> Added to cart
                                </div>
                            </button>
                        ) : (
                            <button 
                                className={["addcart", cart ? "added" : ""].join(" ")} 
                                onClick={() => {
                                    onAddedToCart(prodId);
                                    setCart(!cart)
                                }}>
                                    {
                                        !cart  ? (
                                            <div>
                                                <i className="fa fa-cart-arrow-down"></i> Add to cart 
                                            </div>
                                        ) : (
                                            <div>
                                                <i className="fa fa-check"></i> Added to cart
                                            </div>
                                        )
                                    } 
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
