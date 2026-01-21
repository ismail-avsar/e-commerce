import {
    SET_CART,
    SET_PAYMENT,
    SET_ADDRESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_PRODUCT_COUNT,
    TOGGLE_PRODUCT_CHECK,
    RESET_CART,
} from '../actions/shoppingCartActions';

const initialState = {
    cart: [], // [{ count: 1, checked: true, product: { ... } }]
    payment: {},
    address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };

        case ADD_TO_CART: {
            const existingItemIndex = state.cart.findIndex(
                item => item.product.id === action.payload.id
            );

            if (existingItemIndex >= 0) {
                // Ürün zaten sepette, count'ı artır
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    count: updatedCart[existingItemIndex].count + 1,
                };
                return { ...state, cart: updatedCart };
            } else {
                // Yeni ürün ekle
                return {
                    ...state,
                    cart: [...state.cart, { count: 1, checked: true, product: action.payload }],
                };
            }
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload),
            };

        case UPDATE_PRODUCT_COUNT: {
            const updatedCart = state.cart.map(item =>
                item.product.id === action.payload.productId
                    ? { ...item, count: action.payload.count }
                    : item
            );
            return { ...state, cart: updatedCart };
        }

        case TOGGLE_PRODUCT_CHECK: {
            const updatedCart = state.cart.map(item =>
                item.product.id === action.payload
                    ? { ...item, checked: !item.checked }
                    : item
            );
            return { ...state, cart: updatedCart };
        }

        case SET_PAYMENT:
            return { ...state, payment: action.payload };

        case SET_ADDRESS:
            return { ...state, address: action.payload };

        case RESET_CART:
            return { ...state, cart: [] };

        default:
            return state;
    }
};

export default shoppingCartReducer;
