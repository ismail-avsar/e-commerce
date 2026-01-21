import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchOrders } from '../store/actions/orderActions';

const PreviousOrdersPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { orderList, loading, error } = useSelector((state) => state.order);

    // Hangi siparişin detayının açık olduğunu tutmak için state
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            history.push('/login');
            return;
        }
        dispatch(fetchOrders());
    }, [dispatch, token, history]);

    const toggleOrderDetails = (orderId) => {
        if (expandedOrderId === orderId) {
            setExpandedOrderId(null);
        } else {
            setExpandedOrderId(orderId);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-center text-red-500">
                <p>Error loading orders: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-primary-dark">Siparişlerim</h1>

            {orderList.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <p className="text-gray-500 text-lg">Henüz hiç siparişiniz bulunmuyor.</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6">Sipariş No</th>
                                    <th className="py-3 px-6">Tarih</th>
                                    <th className="py-3 px-6">Tutar</th>
                                    <th className="py-3 px-6">Ürün Sayısı</th>
                                    <th className="py-3 px-6 text-center">Detay</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {orderList.map((order) => (
                                    <>
                                        <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="py-3 px-6 whitespace-nowrap font-medium text-primary">
                                                #{order.id}
                                            </td>
                                            <td className="py-3 px-6">
                                                {new Date(order.order_date).toLocaleDateString("tr-TR")}
                                            </td>
                                            <td className="py-3 px-6 font-bold text-gray-800">
                                                {order.price} TL
                                            </td>
                                            <td className="py-3 px-6">
                                                {order.products?.length || 0} Ürün
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <button
                                                    className="bg-primary text-white py-1 px-3 rounded-md text-xs font-bold hover:bg-primary-dark transition-colors focus:outline-none"
                                                    onClick={() => toggleOrderDetails(order.id)}
                                                >
                                                    {expandedOrderId === order.id ? 'Kapat' : 'Görüntüle'}
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Detay Paneli (Collapsible) */}
                                        {expandedOrderId === order.id && (
                                            <tr className="bg-gray-50">
                                                <td colSpan="5" className="p-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn">
                                                        {order.products?.map((item, index) => (
                                                            <div key={index} className="flex gap-4 p-3 bg-white rounded border border-gray-200 shadow-sm">
                                                                <img
                                                                    src={item.images?.[0]?.url || "https://via.placeholder.com/80"} // API'den gelen veriye göre düzenlenmeli
                                                                    alt={item.name}
                                                                    className="w-16 h-16 object-cover rounded-md"
                                                                />
                                                                <div className="flex flex-col justify-center">
                                                                    <p className="font-bold text-gray-800 line-clamp-1">{item.name}</p>
                                                                    <p className="text-gray-500 text-sm">{item.count} Adet x {item.price} TL</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreviousOrdersPage;
