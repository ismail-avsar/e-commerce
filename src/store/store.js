import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import orderReducer from './reducers/orderReducer';
import globalReducer from './reducers/globalReducer';

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    global: globalReducer,
    order: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.subscribe(() => {
    try {
        const { cart } = store.getState().shoppingCart;
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } catch (error) {
        console.error('Sepet localStorage icine kaydedilemedi:', error);
    }
});

export default store;
