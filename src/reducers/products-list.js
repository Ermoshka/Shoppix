import { PRODUCTS_REQUESTED, PRODUCTS_LOADED, PRODUCTS_ERROR } from "../actions/redux-types";

const updateProductList = (state, action) => {

    if (state === undefined) {
      return {
        products: [],
        loading: true,
        error: null
      };
    }
  
    switch (action.type) {
      case PRODUCTS_REQUESTED:
        return {
          products: [],
          loading: true,
          error: null
        };
  
      case PRODUCTS_LOADED:
        return {
          products: action.payload,
          loading: false,
          error: null
        };
  
      case PRODUCTS_ERROR:
        return {
          products: [],
          loading: false,
          error: action.payload
        };
  
      default:
        return state.productList;
    }
  };
  
  export default updateProductList;
  