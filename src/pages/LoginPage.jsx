import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/clientActions';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        setLoading(true);
        dispatch(loginUser(data, history))
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-light-gray py-12 px-6 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-primary-dark mb-2 text-center">Login</h1>
                <p className="text-text-gray mb-8 text-center">Welcome back! Please login to your account.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                required: 'Password is required'
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="text-danger text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Beni Hatırla */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            {...register('rememberMe')}
                            className="h-4 w-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-text-gray font-medium">
                            Remember Me
                        </label>
                    </div>

                    {/* Gönder Butonu */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-blue text-white py-4 rounded-md font-bold text-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Logging In...
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>

                {/* Kayıt Ol Linki */}
                <p className="text-center text-text-gray mt-6">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-brand-blue font-bold hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
