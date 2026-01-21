import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CardForm = ({ initialData, onSubmit, onCancel }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: initialData || {
            name_on_card: '',
            card_no: '',
            expire_month: '',
            expire_year: '',
            cvv: ''
        }
    });

    useEffect(() => {
        if (initialData) {
            Object.keys(initialData).forEach(key => {
                setValue(key, initialData[key]);
            });
        }
    }, [initialData, setValue]);

    const submitHandler = (data) => {
        // API sadece bu alanları bekliyor, CVV gönderilmemeli
        const formattedData = {
            card_no: data.card_no,
            expire_month: parseInt(data.expire_month),
            expire_year: parseInt(data.expire_year),
            name_on_card: data.name_on_card
        };
        onSubmit(formattedData);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-bold mb-4">{initialData ? 'Kartı Düzenle' : 'Yeni Kart Ekle'}</h3>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Kartın Üzerindeki İsim</label>
                <input
                    {...register("name_on_card", { required: "İsim gereklidir" })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Ad Soyad"
                />
                {errors.name_on_card && <p className="text-red-500 text-xs italic">{errors.name_on_card.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Kart Numarası</label>
                <input
                    {...register("card_no", {
                        required: "Kart numarası gereklidir",
                        minLength: { value: 16, message: "16 haneli olmalıdır" },
                        maxLength: { value: 16, message: "16 haneli olmalıdır" },
                        pattern: { value: /^[0-9]+$/, message: "Sadece rakam giriniz" }
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="1234123412341234"
                    maxLength={16}
                />
                {errors.card_no && <p className="text-red-500 text-xs italic">{errors.card_no.message}</p>}
            </div>

            <div className="flex gap-4 mb-6">
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Son Kullanma Tarihi</label>
                    <div className="flex gap-2">
                        <select
                            {...register("expire_month", { required: true })}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                        >
                            <option value="">Ay</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                            ))}
                        </select>
                        <select
                            {...register("expire_year", { required: true })}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                        >
                            <option value="">Yıl</option>
                            {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i).map(y => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                    {(errors.expire_month || errors.expire_year) && <p className="text-red-500 text-xs italic">Tarih seçiniz</p>}
                </div>

                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                    <input
                        {...register("cvv", {
                            required: "CVV gereklidir",
                            pattern: { value: /^[0-9]{3,4}$/, message: "3 veya 4 haneli olmalı" }
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="123"
                        maxLength={4}
                    />
                    {errors.cvv && <p className="text-red-500 text-xs italic">{errors.cvv.message}</p>}
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    İptal
                </button>
                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Kaydet
                </button>
            </div>
        </form>
    );
};

export default CardForm;
