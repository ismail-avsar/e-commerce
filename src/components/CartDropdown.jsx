import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { removeFromCart, updateProductCount } from '../store/actions/shoppingCartActions';

const CartDropdown = ({ isOpen, onClose }) => {
    const cart = useSelector(state => state.shoppingCart.cart);
    const dispatch = useDispatch();

    // Toplam tutarı hesapla
    const totalAmount = cart.reduce((total, item) => {
        return total + (item.product.price * item.count);
    }, 0);

    // Toplam ürün sayısı
    const totalItems = cart.reduce((total, item) => total + item.count, 0);

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateCount = (productId, newCount) => {
        if (newCount > 0) {
            dispatch(updateProductCount(productId, newCount));
        } else {
            dispatch(removeFromCart(productId));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-xl rounded-lg z-50 border border-gray-200">
            {/* Header*/}
            <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold text-lg">Sepetim ({totalItems} Ürün)</h3>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Cart Items */}
            <div className="max-h-96 overflow-y-auto">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 px-4">
                        <ShoppingBag size={48} className="text-gray-300 mb-3" />
                        <p className="text-gray-500 text-center">Sepetiniz boş</p>
                        <p className="text-gray-400 text-sm text-center mt-1">
                            Ürün eklemek için alışverişe başlayın
                        </p>
                    </div>
                ) : (
                    <div className="p-4 space-y-4">
                        {cart.map((item) => (
                            <div key={item.product.id} className="flex gap-3 pb-4 border-b last:border-b-0">
                                {/* Product Image */}
                                <img
                                    src={item.product.images?.[0]?.url || '/placeholder-product.jpg'}
                                    alt={item.product.name}
                                    className="w-20 h-20 object-cover rounded"
                                />

                                {/* Product Info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm line-clamp-2 mb-1">
                                        {item.product.name}
                                    </h4>
                                    <p className="text-primary-dark font-semibold text-sm mb-2">
                                        {item.product.price.toFixed(2)} TL
                                    </p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleUpdateCount(item.product.id, item.count - 1)}
                                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-medium w-8 text-center">
                                            {item.count}
                                        </span>
                                        <button
                                            onClick={() => handleUpdateCount(item.product.id, item.count + 1)}
                                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => handleRemoveItem(item.product.id)}
                                            className="ml-auto text-red-500 hover:text-red-700 text-xs transition-colors"
                                        >
                                            Kaldır
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
                <div className="p-4 border-t bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">Toplam:</span>
                        <span className="font-bold text-lg text-primary-dark">
                            {totalAmount.toFixed(2)} TL
                        </span>
                    </div>
                    <Link
                        to="/cart"
                        onClick={onClose}
                        className="block w-full bg-primary-dark text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-darker transition-colors"
                    >
                        Sepeti Tamamla
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartDropdown;
