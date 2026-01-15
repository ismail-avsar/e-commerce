import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { fetchProduct } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { product, fetchState } = useSelector((state) => state.product);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        dispatch(fetchProduct(productId));
        window.scrollTo(0, 0);
    }, [dispatch, productId]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };


    const bestsellers = Array.from({ length: 8 }, (_, i) => i + 1);

    if (fetchState === 'FETCHING') {
        return (
            <div className="flex justify-center items-center py-20 bg-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-blue"></div>
            </div>
        );
    }

    if (!product || !product.id) return null;

    const images = product.images?.map(i => i.url) || [];

    return (
        <div className="w-full bg-white">
            {/* Breadcrumb */}
            <section className="bg-light-gray py-6 px-6">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 text-sm font-bold">
                        <span className="text-primary-dark">Home</span>
                        <ChevronRight size={16} className="text-muted" />
                        <span className="text-muted">Shop</span>
                    </div>
                </div>
            </section>

            {/* Product Detail Section */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sol - Imaga */}
                        <div className="lg:w-1/2">
                            {/* Main Image */}
                            <div className="relative h-[450px] bg-light-gray mb-5">
                                {images.length > 0 && (
                                    <img
                                        src={images[selectedImage]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {/* Navigasyon Oklar */}
                                <button
                                    onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white"
                                >
                                    <ChevronRight size={20} className="rotate-180 text-primary-dark" />
                                </button>
                                <button
                                    onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white"
                                >
                                    <ChevronRight size={20} className="text-primary-dark" />
                                </button>
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex gap-5 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`w-[100px] h-[75px] shrink-0 cursor-pointer border-2 ${selectedImage === idx ? 'border-brand-blue' : 'border-transparent'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sağ - Product Info */}
                        <div className="lg:w-1/2 flex flex-col gap-6">
                            {/* Title */}
                            <h2 className="text-xl text-primary-dark font-normal">{product.name}</h2>

                            {/* Değerlendirme - Yıldız */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className={i < Math.round(product.rating) ? 'fill-[#F3CD03] text-[#F3CD03]' : 'text-[#F3CD03]'}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-text-gray">{product.rating} Rating / {product.sell_count} Sales</span>
                            </div>

                            {/* Fiyat */}
                            <h3 className="text-2xl font-bold text-primary-dark">${product.price}</h3>

                            {/* Availability */}
                            <div className="flex items-center gap-2 text-sm font-bold">
                                <span className="text-text-gray">Availability :</span>
                                <span className="text-brand-blue">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                            </div>

                            {/* Tanım */}
                            <p className="text-sm text-text-gray leading-6 border-t border-b border-gray-200 py-6">
                                {product.description}
                            </p>

                            {/* Renkler - Placeholder as API might not return colors */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full cursor-pointer bg-brand-blue border-2 border-transparent hover:border-gray-300"></div>
                                <div className="w-8 h-8 rounded-full cursor-pointer bg-brand-green border-2 border-transparent hover:border-gray-300"></div>
                                <div className="w-8 h-8 rounded-full cursor-pointer bg-[#E77C40] border-2 border-transparent hover:border-gray-300"></div>
                                <div className="w-8 h-8 rounded-full cursor-pointer bg-[#252B42] border-2 border-transparent hover:border-gray-300"></div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 pt-4">
                                <button className="bg-brand-blue text-white px-5 py-3 text-sm font-bold rounded hover:bg-blue-600 transition-colors">
                                    Select Options
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                                    <Heart size={20} className="text-primary-dark" />
                                </button>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                >
                                    <ShoppingCart size={20} className="text-primary-dark" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                                    <Eye size={20} className="text-primary-dark" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="border-t border-gray-200">
                <div className="container mx-auto px-6">
                    {/* Tab Headers */}
                    <div className="flex justify-center gap-8 pt-12">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`text-sm font-bold pb-6 transition-colors ${activeTab === 'description'
                                ? 'text-text-gray border-b-2 border-text-gray'
                                : 'text-text-gray/50'
                                }`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('additional')}
                            className={`text-sm font-bold pb-6 transition-colors ${activeTab === 'additional'
                                ? 'text-text-gray border-b-2 border-text-gray'
                                : 'text-text-gray/50'
                                }`}
                        >
                            Additional Information
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`text-sm font-bold pb-6 transition-colors ${activeTab === 'reviews'
                                ? 'text-text-gray border-b-2 border-text-gray'
                                : 'text-text-gray/50'
                                }`}
                        >
                            Reviews (0)
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="py-12">
                        {activeTab === 'description' && (
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Sol Image - Placeholder */}
                                <div className="lg:w-1/3">
                                    {images.length > 0 && <img
                                        src={images[0]}
                                        alt="Description"
                                        className="w-full h-[280px] object-cover rounded-lg shadow-md"
                                    />}
                                </div>

                                {/* Orta Sağ Text */}
                                <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
                                    <div className="flex-1 flex flex-col gap-6">
                                        <h3 className="text-2xl font-bold text-primary-dark">{product.name}</h3>
                                        <p className="text-sm text-text-gray leading-6">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-4">
                                        <h3 className="text-2xl font-bold text-primary-dark">Features</h3>
                                        {/* Placeholder features */}
                                        <ul className="flex flex-col gap-3">
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>Premium quality material</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>Modern design</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'additional' && (
                            <div className="text-center py-12 text-text-gray">
                                Additional information content here...
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="text-center py-12 text-text-gray">
                                Reviews content here...
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Bestseller Products */}
            <section className="bg-light-gray py-12 px-6">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-primary-dark mb-8">BESTSELLER PRODUCTS</h2>
                    <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[48px]">
                        {bestsellers.map((p) => (
                            <div
                                key={p}
                                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]"
                            >
                                <ProductCard
                                    image={`/assets/products/product-${p}.jpg`}
                                    title="Graphic Design"
                                    category="English Department"
                                    originalPrice="16.48"
                                    salePrice="6.48"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Logo */}
            <section className="bg-white py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-12">
                        <img src="/assets/brands/fa-brands-1.png" alt="hooli" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-2.png" alt="lyft" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-3.png" alt="brand" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-4.png" alt="stripe" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-5.png" alt="aws" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                        <img src="/assets/brands/fa-brands-6.png" alt="reddit" className="h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;