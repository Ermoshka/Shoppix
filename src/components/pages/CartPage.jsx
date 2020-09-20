import React from 'react'
import { productRemovedFromCart, productAddedToCart, productsRemovedFromCart } from '../../actions'
import { connect } from 'react-redux'
import "./carts.scss"

const CartPage = ({items, orderTotal, onIncrease, onDecrease, onDelete}) => {

    const renderRow = ({id, name, count, total, curr}, idx) => {
        return (
            <tr key={id}>
                <td> {id} </td>
                <td> {name} </td>
                <td> {count} </td>
                <td> {total} {curr} </td>
                <td>
                    <button className="onIncrease" onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button className="onDecrease" onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"></i>
                    </button>
                    <button className="onDelete" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        )
    }
    
    return (
        <div className="orders">
            <h2>Total orders: ${orderTotal} </h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: productAddedToCart,
    onDecrease: productRemovedFromCart,
    onDelete: productsRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)