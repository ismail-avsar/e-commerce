// Aksiyon Tipleri
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const SET_CREDIT_CARDS = 'SET_CREDIT_CARDS';

// Aksiyon Oluşturucular
export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
});

export const setAddressList = (addressList) => ({
    type: SET_ADDRESS_LIST,
    payload: addressList,
});

export const setCreditCards = (creditCards) => ({
    type: SET_CREDIT_CARDS,
    payload: creditCards,
});

import api from '../../api/api';

// Rolleri almak için Thunk fonksiyonu (lazy load)
export const fetchRoles = () => (dispatch, getState) => {
    const { client } = getState();

    // Sadece roller boşsa veya yüklenmemişse istek at
    if (!client.roles || client.roles.length === 0) {
        dispatch({ type: 'FETCHING_ROLES' });

        api.get('/roles')
            .then(res => {
                dispatch(setRoles(res.data));
            })
            .catch(err => {
                console.error('Roller getirilirken hata oluştu:', err);
            });
    }
};

import { toast } from 'react-toastify';

// Token doğrulama ve otomatik giriş için Thunk
export const verifyToken = () => (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        // Token varsa header'a ekle
        api.defaults.headers.common['Authorization'] = token;

        // Verify isteği at
        api.get('/verify')
            .then(res => {
                const { token: newToken, ...user } = res.data;

                // Token yenilendiyse güncelle, yoksa eskisini kullan
                const activeToken = newToken || token;

                // localStorage'ı güncelle
                localStorage.setItem('token', activeToken);

                // Axios header'ı güncelle
                api.defaults.headers.common['Authorization'] = activeToken;

                // User bilgisini reducer'a gönder
                dispatch(setUser(user));

                console.log('Auto login success');
            })
            .catch(err => {
                console.error('Auto login failed:', err);
                // Token geçersizse temizle
                localStorage.removeItem('token');
                delete api.defaults.headers.common['Authorization'];
            });
    }
};

export const loginUser = (credentials, history) => (dispatch) => {
    return api.post('/login', { email: credentials.email, password: credentials.password })
        .then(res => {
            const { token, ...user } = res.data;

            if (credentials.rememberMe) {
                localStorage.setItem('token', token);
            }

            // Axios header'a token ekle
            api.defaults.headers.common['Authorization'] = token;

            dispatch(setUser(user));
            toast.success('Welcome back!');

            if (history) {
                history.goBack();
            }
            return res.data;
        })
        .catch(err => {
            console.error('Login error:', err);
            const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
            toast.error(errorMessage);
            throw err;
        });
};
export const fetchAddressList = () => (dispatch) => {
    return api.get('/user/address')
        .then(res => {
            dispatch(setAddressList(res.data));
            return res.data;
        })
        .catch(err => {
            console.error('Adres listesi alınamadı:', err);
            // toast.error('Adresler yüklenirken bir sorun oluştu.');
        });
};

export const addAddress = (address) => (dispatch) => {
    return api.post('/user/address', address)
        .then(res => {
            // Başarılı olursa listeyi yeniden çekelim veya response'u listeye ekleyelim
            // Genellikle backend yeni listeyi veya eklenen item'i döner.
            // Burada basitlik adına listeyi yenileme yoluna gidebiliriz veya optimistik update yapabiliriz.
            // Dokümantasyonda ne döndüğü net değil ama genellikle listeyi güncellemek en temizi.
            dispatch(fetchAddressList());
            toast.success('Adres başarıyla eklendi.');
            return res.data;
        })
        .catch(err => {
            console.error('Adres eklenirken hata:', err);
            toast.error('Adres eklenemedi.');
            throw err;
        });
};

export const updateAddress = (address) => (dispatch) => {
    return api.put('/user/address', address)
        .then(res => {
            dispatch(fetchAddressList());
            toast.success('Adres başarıyla güncellendi.');
            return res.data;
        })
        .catch(err => {
            console.error('Adres güncellenirken hata:', err);
            toast.error('Adres güncellenemedi.');
            throw err;
        });
};

export const deleteAddress = (addressId) => (dispatch) => {
    return api.delete(`/user/address/${addressId}`)
        .then(res => {
            dispatch(fetchAddressList());
            toast.success('Adres başarıyla silindi.');
            return res.data;
        })
        .catch(err => {
            console.error('Adres silinirken hata:', err);
            toast.error('Adres silinemedi.');
            throw err;
        });
};
