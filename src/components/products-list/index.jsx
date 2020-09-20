import React, { Component, Fragment, useEffect, useState } from 'react'
import { fetchProducts, productAddedToCart } from '../../actions'
import compose from '../../utils/compose'
import withShopifixService from '../hoc'
import { connect } from 'react-redux'
import { ProductItem } from '../products-list-item'
import "./products-list.scss"
// import Glide, {Swipe} from '@glidejs/glide'
import Glide, { Swipe, Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import { ProductsLoader } from '../products-loading'

const ProductsList = ({products, onAdded, cartItems}) => {

    const [slider] = useState(new Glide(".glide", {
        perView: 5
        // length: 4
    }))
    useEffect(() => {
        slider.mount({Controls, Swipe, Breakpoints})
        return () => slider.destroy()
    }, [])
    
    return (
        <Fragment>
            <h2 className="products-title">Star Wars figures</h2>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides products-list">
                        {
                            products.map(prod => {
                                
                                // let cartItem, inCart;
                                // if (cartItems != undefined || cartItems.length != 0) {
                                //     cartItems.find(cart => cart.id === prod.id)
                                //     inCart = cartItem != undefined ? true : false
                                // }
                                
                                return (
                                    <ProductItem 
                                        // inCart={inCart}
                                        onAddedToCart={onAdded}
                                        prodId={prod.id} 
                                        key={prod.id} {...prod} />
                                    )
                                })
                            }
                    </div>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<"> <i className="fa fa-angle-left"></i> </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">"> <i className="fa fa-angle-right"></i>  </button>
                </div>
            </div>
        </Fragment>
    )
}

class ProductsListContainer extends Component {
    
    componentDidMount() {
        //   new Glide('.glide').mount()
          
        this.props.fetchProducts()
    }
    
    render() {
        const {loading, error, products} = this.props

        if(loading) {
            return <ProductsLoader />
        }

        if(error) {
            return <div>Error happened</div>
        }
        
        return (
            <ProductsList onAdded={this.props.onAddedToCart} products={products} />
        )
    }
    
}

const mapStateToProps = ({productList: {loading, error, products}, shoppingCart: {cartItems}}) => {
    return {
        loading,
        error,
        products,
        cartItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {shopifixService} = ownProps
    return {
        fetchProducts: fetchProducts(shopifixService, dispatch),
        onAddedToCart: (id) => dispatch(productAddedToCart(id))
    }
}

export default compose(
    withShopifixService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsListContainer)