import {
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_ERROR
} from '../actions/orderActions';

const initialState = {
    orderList: [],
    loading: false,
    error: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orderList: action.payload,
                loading: false,
            };
        case FETCH_ORDERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default orderReducer;
