import { toast } from 'react-toastify';

export const setupMockApi = (axiosInstance) => {
    console.warn('⚠️ MOCK API ENABLED - Requests will be intercepted!');
    toast.info('Mock API Enabled for Testing', { autoClose: 3000 });

    axiosInstance.interceptors.request.use(request => {
        // Log request for debugging
        console.log(`[MOCK REQUEST] ${request.method?.toUpperCase()} ${request.url}`, request.data);
        return request;
    });

    axiosInstance.interceptors.response.use(
        response => response,
        async error => {
            const { config } = error;

            // Wait a bit to simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // --- AUTH MOCKS ---
            if (config.url?.endsWith('/login') && config.method === 'post') {
                const reqData = JSON.parse(config.data);
                console.log('[MOCK RESPONSE] Login Success');
                return {
                    data: {
                        token: 'mock-token-xyz-123',
                        name: 'Mock Test User',
                        email: reqData.email,
                        role_id: 3, // Customer
                        gravatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
                    },
                    status: 200,
                    statusText: 'OK',
                    headers: {},
                    config
                };
            }

            if (config.url?.endsWith('/verify') && config.method === 'get') {
                console.log('[MOCK RESPONSE] Verify Success');
                return {
                    data: {
                        token: 'mock-token-xyz-123',
                        name: 'Mock Test User',
                        email: 'mock@test.com',
                        role_id: 3
                    },
                    status: 200,
                    config
                };
            }

            // --- ADDRESS MOCKS ---
            if (config.url?.endsWith('/user/address') && config.method === 'get') {
                console.log('[MOCK RESPONSE] Get Addresses');
                return {
                    data: [
                        {
                            id: 101,
                            title: 'Ev',
                            name: 'Mock',
                            surname: 'User',
                            phone: '5551234567',
                            city: 'Istanbul',
                            district: 'Kadikoy',
                            neighborhood: 'Caferaga',
                            address: 'Moda Cad. No:1'
                        },
                        {
                            id: 102,
                            title: 'İş',
                            name: 'Mock',
                            surname: 'User',
                            phone: '5559876543',
                            city: 'Ankara',
                            district: 'Cankaya',
                            neighborhood: 'Kizilay',
                            address: 'Ataturk Bulvari No:99'
                        }
                    ],
                    status: 200,
                    config
                };
            }

            if (config.url?.endsWith('/user/address') && config.method === 'post') {
                console.log('[MOCK RESPONSE] Add Address');
                const newAddr = JSON.parse(config.data);
                return {
                    data: {
                        id: Math.floor(Math.random() * 10000),
                        ...newAddr
                    },
                    status: 201,
                    config
                };
            }

            if (config.url?.includes('/user/address/') && config.method === 'put') {
                console.log('[MOCK RESPONSE] Update Address');
                const updatedAddr = JSON.parse(config.data);
                return {
                    data: updatedAddr,
                    status: 200,
                    config
                };
            }

            if (config.url?.includes('/user/address/') && config.method === 'delete') {
                console.log('[MOCK RESPONSE] Delete Address');
                return {
                    data: { success: true },
                    status: 200,
                    config
                };
            }

            // --- CARD MOCKS ---
            if (config.url?.endsWith('/user/card') && config.method === 'get') {
                console.log('[MOCK RESPONSE] Get Cards');
                return {
                    data: [
                        {
                            id: 201,
                            card_no: '1234********3456',
                            expire_month: 12,
                            expire_year: 2028,
                            name_on_card: 'Mock Card User'
                        }
                    ],
                    status: 200,
                    config
                };
            }

            if (config.url?.endsWith('/user/card') && config.method === 'post') {
                console.log('[MOCK RESPONSE] Add Card');
                const newCard = JSON.parse(config.data);
                return {
                    data: {
                        id: Math.floor(Math.random() * 10000),
                        ...newCard
                    },
                    status: 201,
                    config
                };
            }

            if (config.url?.includes('/user/card/') && config.method === 'put') {
                console.log('[MOCK RESPONSE] Update Card');
                const updatedCard = JSON.parse(config.data);
                return {
                    data: updatedCard,
                    status: 200,
                    config
                };
            }

            if (config.url?.includes('/user/card/') && config.method === 'delete') {
                console.log('[MOCK RESPONSE] Delete Card');
                return {
                    data: { success: true },
                    status: 200,
                    config
                };
            }

            // --- ORDER MOCKS ---
            if (config.url?.endsWith('/order') && config.method === 'post') {
                console.log('[MOCK RESPONSE] Create Order');
                const orderData = JSON.parse(config.data);
                return {
                    data: {
                        id: 9999,
                        order_date: new Date().toISOString(),
                        price: orderData.price,
                        card_no: orderData.card_no,
                        products: orderData.products
                    },
                    status: 200,
                    config
                };
            }

            if (config.url?.endsWith('/order') && config.method === 'get') {
                console.log('[MOCK RESPONSE] Get Previous Orders');
                // Mock previous orders
                return {
                    data: [
                        {
                            id: 9001,
                            order_date: "2023-10-25T14:30:00.000Z",
                            price: 1500.50,
                            card_no: 1234123412341234,
                            products: [
                                { id: 1, name: "Mock Product A", count: 2, price: 500 },
                                { id: 2, name: "Mock Product B", count: 1, price: 500.50 }
                            ]
                        }
                    ],
                    status: 200,
                    config
                };
            }

            // --- DEFAULT ---
            // Pass through other errors (e.g. Products/Categories might still work if they are public)
            // But if Products fail too, we can mock them here.

            return Promise.reject(error);
        }
    );
};
