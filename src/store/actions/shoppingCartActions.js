// Action Types
export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_PRODUCT_COUNT = 'UPDATE_PRODUCT_COUNT';
export const TOGGLE_PRODUCT_CHECK = 'TOGGLE_PRODUCT_CHECK';

// Action Creators
export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart,
});

export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment,
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address,
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const updateProductCount = (productId, count) => ({
    type: UPDATE_PRODUCT_COUNT,
    payload: { productId, count },
});

export const toggleProductCheck = (productId) => ({
    type: TOGGLE_PRODUCT_CHECK,
    payload: productId,
});
