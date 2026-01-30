import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderAddress from '../components/OrderAddress';
import OrderPayment from '../components/OrderPayment';
import { createOrder } from '../store/actions/shoppingCartActions';
import { toast } from 'react-toastify';

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, addressList, creditCards } = useSelector((state) => state.client);
    const { cart } = useSelector((state) => state.shoppingCart);
    const [activeTab, setActiveTab] = useState('address'); // address (adres), payment (ödeme)
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history]);

    if (!token) return null;

    // Sepet Toplamı Hesaplama
    const totalAmount = cart.reduce((total, item) => {
        return total + item.product.price * item.count;
    }, 0);

    const shippingCost = totalAmount > 150 ? 0 : 29.99;
    const grandTotal = totalAmount + shippingCost;

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

                    {activeTab === 'address' && (
                        <OrderAddress
                            selectedAddressId={selectedAddressId}
                            setSelectedAddressId={setSelectedAddressId}
                        />
                    )}
                    {activeTab === 'payment' && (
                        <OrderPayment
                            selectedCardId={selectedCardId}
                            setSelectedCardId={setSelectedCardId}
                        />
                    )}
                </div>

                <div className="w-full lg:w-1/3">
                    {/* Sipariş Özeti Bileşeni */}
                    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                        <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
                        <div className="flex justify-between mb-2">
                            <span>Ürünler Toplamı</span>
                            <span>{totalAmount.toFixed(2)} TL</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Kargo Toplam</span>
                            <span>29.99 TL</span>
                        </div>
                        {totalAmount > 150 ? (
                            <div className="flex justify-between mb-4 text-primary font-bold">
                                <span>150 TL ve Üzeri Kargo Bedava</span>
                                <span>-29.99 TL</span>
                            </div>
                        ) : (
                            <div className="flex justify-between mb-4">
                                <span>Kargo İndirimi</span>
                                <span>0.00 TL</span>
                            </div>
                        )}
                        <hr className="my-4" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Toplam</span>
                            <span className="text-primary">{grandTotal.toFixed(2)} TL</span>
                        </div>
                        <button
                            onClick={() => {
                                if (activeTab === 'address') {
                                    if (!selectedAddressId) {
                                        toast.warning("Lütfen bir adres seçiniz.");
                                        return;
                                    }
                                    setActiveTab('payment');
                                }
                                else {
                                    // Complete Order Logic
                                    if (!selectedCardId) {
                                        toast.warning("Lütfen bir kart seçiniz.");
                                        return;
                                    }

                                    const selectedAddress = addressList.find(a => a.id === selectedAddressId);
                                    const selectedCard = creditCards.find(c => c.id === selectedCardId);
                                    const cartProducts = cart.map(item => ({
                                        product_id: item.product.id,
                                        count: item.count,
                                        detail: item.product.name // API detail istiyor, name gönderiyorum
                                    }));

                                    // Toplam fiyat hesaplama
                                    const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.count), 0);

                                    const orderPayload = {
                                        address_id: selectedAddressId,
                                        order_date: new Date().toISOString(),
                                        card_no: selectedCard.card_no, // API string olarak alıyor olabilir ama örnekte int
                                        card_name: selectedCard.name_on_card,
                                        card_expire_month: selectedCard.expire_month,
                                        card_expire_year: selectedCard.expire_year,
                                        card_ccv: 321, // Mock CVV, UI'da store etmediğimiz için
                                        price: totalPrice,
                                        products: cartProducts
                                    };

                                    dispatch(createOrder(orderPayload))
                                        .then(() => {
                                            toast.success("Siparişiniz başarıyla alındı! Özeti sayfasında yönlendiriliyorsunuz...");
                                            setTimeout(() => {
                                                history.push('/'); // Şimdilik ana sayfaya
                                            }, 2000);
                                        })
                                        .catch(err => {
                                            console.error("Order failed", err);
                                        });
                                }
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
