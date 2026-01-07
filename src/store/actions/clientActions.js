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
// NOT: Bir API uç noktası olduğu varsayılıyor. Gereksinimlere göre sadece ihtiyaç duyulduğunda tetiklenmelidir!
export const fetchRoles = () => (dispatch, getState) => {
    const { client } = getState();

    // Sadece roller boşsa veya yüklenmemişse istek at
    if (!client.roles || client.roles.length === 0) {
        dispatch({ type: 'FETCHING_ROLES' }); // İsteğe bağlı: gerekirse loading durumu eklenebilir

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

export const loginUser = (credentials, history) => (dispatch) => {
    // Return the promise to allow chaining if needed, though we handle redirect here or in component
    return api.post('/login', { email: credentials.email, password: credentials.password })
        .then(res => {
            const { token, ...user } = res.data; // Varsayım: API token ve user bilgilerini dönüyor

            // Eğer "Beni Hatırla" seçili ise token'ı localStorage'a kaydet
            if (credentials.rememberMe) {
                localStorage.setItem('token', token);
            }

            dispatch(setUser(user));
            toast.success('Welcome back!');

            // Önceki sayfaya yönlendirme
            if (history) {
                // location.state ile önceki sayfa bilgisi geliyorsa oraya, yoksa '/'
                // Not: History prop'u component'ten gönderilmeli
                history.goBack();
            }
            return res.data;
        })
        .catch(err => {
            console.error('Login error:', err);
            // API'den gelen hata mesajını göster
            const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
            toast.error(errorMessage);
            throw err; // Component içinde catch bloğuna düşmesi için
        });
};
