import { PRODUCTS_REQUESTED, PRODUCTS_LOADED, PRODUCTS_ERROR, PRODUCT_ADDED_TO_CART } from "../actions/redux-types"

let initialState = {
    products: [],
    loading: false,
    error: null,
    cartItems: [],
    totalOrder: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case PRODUCTS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case PRODUCTS_LOADED:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case PRODUCT_ADDED_TO_CART:
            let product = state.products.find((product) => product.id == action.payload)
            let itemIndex = state.cartItems.findIndex((cart) => cart.name == product.name)
            let cartItem = state.cartItems[itemIndex]
            let updatedItem;
            if(cartItem != undefined) {
                updatedItem = {
                    ...cartItem,
                    count: cartItem.count + 1,
                    total: cartItem.price * 2
                }
            } else {
                updatedItem = {
                    ...product,
                    count: 1,
                    total: product.price
                }
            }
            let newItems;

            
            return {
                ...state,
                totalOrder: state.totalOrder + product.price,
                cartItems: [
                    ...state.cartItems,
                    updatedItem
                ]
            }
        default:
            return state;
    }
    
}

export default reducer