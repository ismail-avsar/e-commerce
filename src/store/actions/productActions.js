import api from '../../api/api';

// Aksiyon Tipleri
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';
export const SET_CATEGORY = 'SET_CATEGORY';

// Aksiyon Oluşturucular
export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList,
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category,
});

// Thunk Aksiyonu
export const fetchProducts = () => async (dispatch, getState) => {
    dispatch(setFetchState('FETCHING'));
    try {
        const { limit, offset, filter, category, sort } = getState().product;

        let queryParams = [];
        if (category) queryParams.push(`category=${category}`);
        if (filter) queryParams.push(`filter=${filter}`);
        if (sort) queryParams.push(`sort=${sort}`);
        if (limit) queryParams.push(`limit=${limit}`);
        if (offset) queryParams.push(`offset=${offset}`);

        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

        const response = await api.get(`/products${queryString}`);

        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState('FETCHED'));
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setFetchState('FAILED'));
    }
};
