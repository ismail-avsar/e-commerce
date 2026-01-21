import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddressList } from '../store/actions/clientActions';
import AddressForm from './AddressForm';
import { Plus } from 'lucide-react';

const OrderAddress = ({ selectedAddressId, setSelectedAddressId }) => {
    const dispatch = useDispatch();
    const { addressList } = useSelector((state) => state.client);
    const [showAddForm, setShowAddForm] = useState(false);
    // const [selectedAddressId, setSelectedAddressId] = useState(null); // Parent'tan geliyor
    const [editingAddress, setEditingAddress] = useState(null);

    useEffect(() => {
        dispatch(fetchAddressList());
    }, [dispatch]);

    const handleEdit = (address) => {
        setEditingAddress(address);
        setShowAddForm(true);
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
        setEditingAddress(null);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Teslimat Adresi</h2>

            {showAddForm ? (
                <div className="mb-6">
                    <AddressForm onClose={handleCloseForm} editAddress={editingAddress} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors min-h-[180px]"
                    >
                        <Plus size={32} className="mb-2" />
                        <span className="font-medium">Yeni Adres Ekle</span>
                    </button>

                    {addressList.map((address) => (
                        <div
                            key={address.id}
                            className={`border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-shadow ${selectedAddressId === address.id ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
                            onClick={() => setSelectedAddressId(address.id)}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="address"
                                        checked={selectedAddressId === address.id}
                                        onChange={() => setSelectedAddressId(address.id)}
                                        className="accent-primary w-4 h-4"
                                    />
                                    <h3 className="font-bold text-gray-800">{address.title}</h3>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleEdit(address); }}
                                    className="text-sm underline text-gray-500 hover:text-primary"
                                >
                                    Düzenle
                                </button>
                            </div>

                            <div className="pl-6 text-sm text-gray-600">
                                <p className="font-medium text-gray-900 mb-1">{address.name} {address.surname}</p>
                                <p className="mb-1">{address.phone}</p>
                                <p>{address.neighborhood} {address.address}</p>
                                <p>{address.district}/{address.city}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderAddress;
