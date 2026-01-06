import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../api/api';

const SignUpPage = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onBlur'
    });

    const selectedRole = watch('role_id');
    const password = watch('password');

    // Sayfa yüklendiğinde rolleri getir
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get('/roles');
                setRoles(response.data);

                // Customer rolünü bul ve default seç
                const customerRole = response.data.find(r => r.code === 'customer');
                if (customerRole) {
                    setValue('role_id', customerRole.id); // setValue hook'dan geliyor
                }
            } catch (error) {
                toast.error('Failed to fetch roles');
            }
        };
        fetchRoles();
    }, [])

    // Seçilen rolün "store" olup olmadığını kontrol et
    const isStore = roles.find(role => role.id === selectedRole)?.code === 'store';

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            // Role göre payload hazırla
            let payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id
            };

            // Eğer store rolü seçildiyse, store nesnesini ekle
            if (isStore) {
                payload.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.store_tax_no,
                    bank_account: data.store_bank_account
                };
            }

            await api.post('/signup', payload);

            toast.success('You need to click link in email to activate your account!');

            // Önceki sayfa
            setTimeout(() => {
                history.push('/');
            }, 2000);

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
            toast.error(errorMessage);
            console.error('Signup error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-light-gray py-12 px-6">
            <div className="container mx-auto max-w-2xl">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-primary-dark mb-2">Sign Up</h1>
                    <p className="text-text-gray mb-8">Create your account to get started</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* İsim */}
                        <div>
                            <label className="block text-sm font-bold text-primary-dark mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p className="text-danger text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-primary-dark mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                placeholder="example@email.com"
                            />
                            {errors.email && (
                                <p className="text-danger text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Şifre */}
                        <div>
                            <label className="block text-sm font-bold text-primary-dark mb-2">
                                Password *
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters'
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                        message: 'Password must include uppercase, lowercase, number and special character'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                placeholder="Enter a strong password"
                            />
                            {errors.password && (
                                <p className="text-danger text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Şifre Tekrarı */}
                        <div>
                            <label className="block text-sm font-bold text-primary-dark mb-2">
                                Confirm Password *
                            </label>
                            <input
                                type="password"
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: value =>
                                        value === password || 'Passwords do not match'
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                placeholder="Re-enter your password"
                            />
                            {errors.confirmPassword && (
                                <p className="text-danger text-sm mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        {/* Rol Seçimi */}
                        <div>
                            <label className="block text-sm font-bold text-primary-dark mb-2">
                                Role *
                            </label>
                            <select
                                {...register('role_id', {
                                    required: 'Please select a role',
                                    valueAsNumber: true
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a role</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                            {errors.role_id && (
                                <p className="text-danger text-sm mt-1">{errors.role_id.message}</p>
                            )}
                        </div>

                        {/* Mağaza Alanları - Sadece Store rolü seçiliyse göster */}
                        {isStore && (
                            <div className="border-t pt-6 mt-6">
                                <h3 className="text-xl font-bold text-primary-dark mb-4">Store Information</h3>

                                {/* Mağaza Adı */}
                                <div className="mb-4">
                                    <label className="block text-sm font-bold text-primary-dark mb-2">
                                        Store Name *
                                    </label>
                                    <input
                                        type="text"
                                        {...register('store_name', {
                                            required: isStore ? 'Store name is required' : false,
                                            minLength: {
                                                value: 3,
                                                message: 'Store name must be at least 3 characters'
                                            }
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        placeholder="Enter store name"
                                    />
                                    {errors.store_name && (
                                        <p className="text-danger text-sm mt-1">{errors.store_name.message}</p>
                                    )}
                                </div>

                                {/* Mağaza Telefonu */}
                                <div className="mb-4">
                                    <label className="block text-sm font-bold text-primary-dark mb-2">
                                        Store Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('store_phone', {
                                            required: isStore ? 'Store phone is required' : false,
                                            pattern: {
                                                value: /^(\+90|0)?[0-9]{10}$/,
                                                message: 'Invalid Turkish phone number'
                                            }
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        placeholder="+905xxxxxxxxx"
                                    />
                                    {errors.store_phone && (
                                        <p className="text-danger text-sm mt-1">{errors.store_phone.message}</p>
                                    )}
                                </div>

                                {/* Vergi Numarası */}
                                <div className="mb-4">
                                    <label className="block text-sm font-bold text-primary-dark mb-2">
                                        Tax ID *
                                    </label>
                                    <input
                                        type="text"
                                        {...register('store_tax_no', {
                                            required: isStore ? 'Tax ID is required' : false,
                                            pattern: {
                                                value: /^T\d{4}V\d{6}$/,
                                                message: 'Tax ID must match pattern: TXXXXVXXXXXX'
                                            }
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        placeholder="TXXXXVXXXXXX"
                                    />
                                    {errors.store_tax_no && (
                                        <p className="text-danger text-sm mt-1">{errors.store_tax_no.message}</p>
                                    )}
                                </div>

                                {/* Banka Hesabı */}
                                <div>
                                    <label className="block text-sm font-bold text-primary-dark mb-2">
                                        Bank Account (IBAN) *
                                    </label>
                                    <input
                                        type="text"
                                        {...register('store_bank_account', {
                                            required: isStore ? 'Bank account is required' : false,
                                            pattern: {
                                                value: /^TR\d{24}$/,
                                                message: 'Invalid IBAN (must start with TR followed by 24 digits)'
                                            }
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                    />
                                    {errors.store_bank_account && (
                                        <p className="text-danger text-sm mt-1">{errors.store_bank_account.message}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Gönder Butonu */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-blue text-white py-4 rounded-md font-bold text-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Creating Account...
                                </>
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </form>

                    {/* Giriş Linki */}
                    <p className="text-center text-text-gray mt-6">
                        Already have an account?{' '}
                        <a href="/login" className="text-brand-blue font-bold hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;