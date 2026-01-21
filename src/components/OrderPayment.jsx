import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreditCards, addCreditCard, updateCreditCard, deleteCreditCard } from '../store/actions/clientActions';
import CardForm from './CardForm';
import { Plus } from 'lucide-react';

const OrderPayment = ({ selectedCardId, setSelectedCardId }) => {
    const dispatch = useDispatch();
    const { creditCards } = useSelector((state) => state.client);
    const [showAddForm, setShowAddForm] = useState(false);
    // const [selectedCardId, setSelectedCardId] = useState(null); // Parent'tan geliyor
    const [editingCard, setEditingCard] = useState(null);

    useEffect(() => {
        dispatch(fetchCreditCards());
    }, [dispatch]);

    const handleEdit = (card) => {
        setEditingCard(card);
        setShowAddForm(true);
    };

    const handleDelete = (cardId) => {
        if (window.confirm('Bu kartı silmek istediğinize emin misiniz?')) {
            dispatch(deleteCreditCard(cardId));
        }
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
        setEditingCard(null);
    };

    const handleSubmitToken = (cardData) => {
        if (editingCard) {
            dispatch(updateCreditCard({ ...cardData, id: editingCard.id }))
                .then(() => handleCloseForm());
        } else {
            dispatch(addCreditCard(cardData))
                .then(() => handleCloseForm());
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Kart Bilgileri</h2>

            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Kayıtlı Kartlar</h3>
                {!showAddForm && (
                    <button onClick={() => setShowAddForm(true)} className="text-primary font-medium hover:underline text-sm">
                        Yeni Kart Ekle
                    </button>
                )}
            </div>

            {showAddForm ? (
                <div className="mb-6">
                    <CardForm initialData={editingCard} onSubmit={handleSubmitToken} onCancel={handleCloseForm} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Yeni Kart Ekle Butonu (Görsel) */}
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors min-h-[150px]"
                    >
                        <Plus size={32} className="mb-2" />
                        <span className="font-medium">Yeni Kart Ekle</span>
                    </button>

                    {creditCards?.map((card) => (
                        <div
                            key={card.id}
                            className={`border rounded-lg p-4 relative cursor-pointer hover:shadow-md transition-shadow ${selectedCardId === card.id ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
                            onClick={() => setSelectedCardId(card.id)}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="card"
                                        checked={selectedCardId === card.id}
                                        onChange={() => setSelectedCardId(card.id)}
                                        className="accent-primary w-4 h-4"
                                    />
                                    <h3 className="font-bold text-gray-800">{card.name_on_card}</h3>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleEdit(card); }}
                                        className="text-sm underline text-gray-500 hover:text-primary"
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleDelete(card.id); }}
                                        className="text-sm underline text-red-500 hover:text-red-700"
                                    >
                                        Sil
                                    </button>
                                </div>
                            </div>

                            <div className="pl-6 text-sm text-gray-600">
                                <p className="font-mono text-lg tracking-widest mb-1">
                                    **** **** **** {card.card_no.slice(-4)}
                                </p>
                                <p className="text-xs text-gray-400">
                                    SKT: {card.expire_month}/{card.expire_year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Taksit Seçenekleri (Mock) */}
            {selectedCardId && !showAddForm && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                    <h3 className="font-bold mb-4">Taksit Seçenekleri</h3>
                    <div className="flex gap-4">
                        <div className="border border-primary bg-white rounded-md p-3 w-full md:w-1/3 flex justify-between items-center cursor-pointer shadow-sm">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="installment" defaultChecked className="accent-primary" />
                                <span className="font-semibold">Tek Çekim</span>
                            </div>
                            <span className="font-bold text-primary">6.604,22 TL</span>
                        </div>
                        <div className="border border-gray-200 bg-white rounded-md p-3 w-full md:w-1/3 flex justify-between items-center cursor-pointer opacity-50">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="installment" disabled className="accent-primary" />
                                <span className="font-semibold">3 Taksit</span>
                            </div>
                            <span className="font-bold">2.201,40 TL / Ay</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center gap-2 mt-4">
                <input type="checkbox" id="3dsecure" className="w-4 h-4 accent-primary" />
                <label htmlFor="3dsecure" className="text-sm text-gray-700 font-medium">3D Secure ile ödemek istiyorum</label>
            </div>
        </div>
    );
};

export default OrderPayment;
