import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderAddress from '../components/OrderAddress';
import OrderPayment from '../components/OrderPayment';
import { useState } from 'react';

const CreateOrderPage = () => {
    const history = useHistory();
    const { user } = useSelector((state) => state.client);
    const [activeTab, setActiveTab] = useState('address'); // address (adres), payment (ödeme)

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history]);

    if (!token) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary-dark">Sipariş Oluştur</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                    {/* Sekmeler / Adımlar */}
                    <div className="flex gap-4 mb-6 border-b pb-4">
                        <button
                            className={`text-xl font-bold pb-2 ${activeTab === 'address' ? 'text-primary border-b-4 border-primary' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('address')}
                        >
                            Adres Bilgileri
                        </button>
                        <button
                            className={`text-xl font-bold pb-2 ${activeTab === 'payment' ? 'text-primary border-b-4 border-primary' : 'text-gray-400'}`}
                            onClick={() => setActiveTab('payment')}
                        >
                            Ödeme Seçenekleri
                        </button>
                    </div>

                    {activeTab === 'address' && <OrderAddress />}
                    {activeTab === 'payment' && <OrderPayment />}
                </div>

                <div className="w-full lg:w-1/3">
                    {/* Sipariş Özeti Bileşeni Gelecek */}
                    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                        <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
                        <div className="flex justify-between mb-2">
                            <span>Ürünler Toplamı</span>
                            <span>0 TL</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Kargo Toplam</span>
                            <span>29.99 TL</span>
                        </div>
                        <div className="flex justify-between mb-4 text-primary font-bold">
                            <span>150 TL ve Üzeri Kargo Bedava</span>
                            <span>-29.99 TL</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Toplam</span>
                            <span>0 TL</span>
                        </div>
                        <button
                            onClick={() => {
                                if (activeTab === 'address') setActiveTab('payment');
                                else console.log('Siparişi Tamamla');
                            }}
                            className="w-full bg-primary text-white py-3 rounded-md mt-6 font-bold hover:bg-primary-dark transition-colors"
                        >
                            {activeTab === 'address' ? 'Kaydet ve Devam Et' : 'Ödemeyi Yap'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrderPage;
