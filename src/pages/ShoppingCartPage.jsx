import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    updateProductCount,
    toggleProductCheck,
} from '../store/actions/shoppingCartActions';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.shoppingCart);

    const checkedItems = cart.filter((item) => item.checked);

    const totalAmount = checkedItems.reduce((total, item) => {
        return total + item.product.price * item.count;
    }, 0);

    const handleIncrement = (productId, currentCount) => {
        dispatch(updateProductCount(productId, currentCount + 1));
    };

    const handleDecrement = (productId, currentCount) => {
        if (currentCount > 1) {
            dispatch(updateProductCount(productId, currentCount - 1));
        } else {
        }
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleToggleCheck = (productId) => {
        dispatch(toggleProductCheck(productId));
    };

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <i className="fa-solid fa-basket-shopping text-6xl text-primary"></i>
                <h2 className="text-2xl font-bold text-gray-700">Sepetin şu an boş</h2>
                <p className="text-gray-500">Ürünleri keşfetmek için mağazaya göz atın.</p>
                <Link to="/shop" className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-opacity-90 transition-colors">
                    Alışverişe Başla
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#f9f9f9] min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Sepetim ({cart.length} Ürün)</h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sepet Ürünleri Listesi */}
                    <div className="flex-1 flex flex-col gap-4">
                        {cart.map((item) => (
                            <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-center relative">
                                {/* Seçim Kutusu */}
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleToggleCheck(item.product.id)}
                                    className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary cursor-pointer"
                                />

                                {/* Resim */}
                                <div className="w-24 h-24 flex-shrink-0">
                                    <img
                                        src={item.product.images?.[0]?.url || 'https://via.placeholder.com/150'}
                                        alt={item.product.name}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>

                                {/* Ürün Bilgisi */}
                                <div className="flex-1 w-full text-center sm:text-left">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">{item.product.description}</p>
                                    <div className="mt-2 text-sm text-green-600 font-medium">
                                        <i className="fa-solid fa-truck-fast mr-1"></i>
                                        En geç yarın kargoda!
                                    </div>
                                </div>

                                {/* Adet Kontrolleri */}
                                <div className="flex items-center border border-gray-300 rounded mb-2 sm:mb-0">
                                    <button
                                        onClick={() => handleDecrement(item.product.id, item.count)}
                                        className="px-3 py-1 bg-gray-50 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                        disabled={item.count <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="px-3 py-1 font-medium text-gray-700 min-w-[2rem] text-center">
                                        {item.count}
                                    </span>
                                    <button
                                        onClick={() => handleIncrement(item.product.id, item.count)}
                                        className="px-3 py-1 bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Fiyat */}
                                <div className="text-lg font-bold text-primary w-24 text-center">
                                    {(item.product.price * item.count).toFixed(2)} TL
                                </div>

                                {/* Silme Butonu */}
                                <button
                                    onClick={() => handleRemove(item.product.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors sm:ml-4"
                                >
                                    <i className="fa-regular fa-trash-can text-xl"></i>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Sipariş Özeti (Sağ Taraf) */}
                    <div className="w-full lg:w-80 h-fit">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">Sipariş Özeti</h3>

                            <div className="flex justify-between items-center mb-2 text-sm">
                                <span className="text-gray-600">Ürünün Toplamı</span>
                                <span className="font-semibold text-gray-800">{totalAmount.toFixed(2)} TL</span>
                            </div>

                            <div className="flex justify-between items-center mb-2 text-sm">
                                <span className="text-gray-600">Kargo Toplam</span>
                                <span className="font-semibold text-gray-800">29.99 TL</span>
                            </div>

                            {totalAmount > 150 && (
                                <div className="flex justify-between items-center mb-4 text-sm text-green-600">
                                    <span>150 TL Üzeri Kargo Bedava</span>
                                    <span className="font-semibold text-red-500 line-through">29.99 TL</span>
                                </div>
                            )}

                            <div className="border-t border-gray-200 my-4"></div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-base font-semibold text-gray-800">Toplam</span>
                                <span className="text-xl font-bold text-primary">
                                    {(totalAmount > 150 ? totalAmount : totalAmount + 29.99).toFixed(2)} TL
                                </span>
                            </div>

                            <button className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-opacity-90 transition-colors">
                                Sepeti Onayla <i className="fa-solid fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
