import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAddress, updateAddress, deleteAddress } from '../store/actions/clientActions';

const cities = [
    'İstanbul', 'Ankara', 'İzmir', 'Adana', 'Antalya', 'Bursa', 'Samsun', 'Trabzon', 'Eskişehir'
];

const AddressForm = ({ onClose, editAddress }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: editAddress ? {
            title: editAddress.title,
            name: editAddress.name,
            surname: editAddress.surname,
            phone: editAddress.phone,
            city: editAddress.city,
            district: editAddress.district,
            neighborhood: editAddress.neighborhood,
            address: editAddress.address
        } : {
            title: '',
            name: '',
            surname: '',
            phone: '',
            city: 'İstanbul',
            district: '',
            neighborhood: '',
            address: ''
        }
    });

    const onSubmit = (data) => {
        if (editAddress) {
            // Update
            const payload = { ...data, id: editAddress.id };
            dispatch(updateAddress(payload))
                .then(() => {
                    onClose();
                });
        } else {
            // Add
            dispatch(addAddress(data))
                .then(() => {
                    onClose();
                });
        }
    };

    const handleDelete = () => {
        if (editAddress && confirm('Bu adresi silmek istediğinize emin misiniz?')) {
            dispatch(deleteAddress(editAddress.id))
                .then(() => {
                    onClose();
                });
        }
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-4">{editAddress ? 'Adresi Düzenle' : 'Yeni Adres Ekle'}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Adres Başlığı</label>
                        <input
                            {...register('title', { required: 'Adres başlığı zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                            placeholder="Örn: Ev, İş"
                        />
                        {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input
                            {...register('phone', { required: 'Telefon zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                            placeholder="05..."
                        />
                        {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                        <input
                            {...register('name', { required: 'Ad zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                        <input
                            {...register('surname', { required: 'Soyad zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        />
                        {errors.surname && <span className="text-red-500 text-xs">{errors.surname.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">İl</label>
                        <select
                            {...register('city', { required: 'İl seçimi zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        >
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">İlçe</label>
                        <input
                            {...register('district', { required: 'İlçe zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        />
                        {errors.district && <span className="text-red-500 text-xs">{errors.district.message}</span>}
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mahalle</label>
                        <input
                            {...register('neighborhood', { required: 'Mahalle zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        />
                        {errors.neighborhood && <span className="text-red-500 text-xs">{errors.neighborhood.message}</span>}
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Adres Detayı</label>
                        <textarea
                            {...register('address', { required: 'Adres detayı zorunludur' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                            rows="3"
                        ></textarea>
                        {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    {editAddress && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors mr-auto"
                        >
                            Adresi Sil
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                    >
                        Vazgeç
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddressForm;
