import { PRODUCTS_LOADED, PRODUCTS_REQUESTED, PRODUCTS_ERROR, PRODUCT_ADDED_TO_CART, PRODUCT_REMOVED_FROM_CART, PRODUCTS_REMOVED_FROM_CART } from "./redux-types"

const productsRequested = () => {
    return {
        type: PRODUCTS_REQUESTED
    }
}

const productsLoaded = (data) => {
    return {
        type: PRODUCTS_LOADED,
        payload: data
    }
}

const productsError = (error) => {
    return {
        type: PRODUCTS_ERROR,
        payload: error
    }
}

const productAddedToCart = (id) => {
    return {
        type: PRODUCT_ADDED_TO_CART,
        payload: id
    }
}

const productRemovedFromCart = (id) => {
    return {
        type: PRODUCT_REMOVED_FROM_CART,
        payload: id
    }
}

const productsRemovedFromCart = (id) => {
    return {
        type: PRODUCTS_REMOVED_FROM_CART,
        payload: id
    }
}

const fetchProducts = (shopifixService, dispatch) => () => {

    dispatch(productsRequested())
    shopifixService.getProducts()
    .then(res => dispatch(productsLoaded(res)))
    .catch(err => dispatch(productsError(err)))
    
}

export {
    fetchProducts,
    productAddedToCart,
    productRemovedFromCart,
    productsRemovedFromCart
}