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

export default store;
