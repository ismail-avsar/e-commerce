import api from '../../api/api';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

export const fetchOrders = () => (dispatch) => {
    dispatch({ type: FETCH_ORDERS_START });
    api.get('/order')
        .then((res) => {
            dispatch({ type: FETCH_ORDERS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.error('Error fetching orders:', err);
            dispatch({ type: FETCH_ORDERS_ERROR, payload: err.message });
        });
};
