import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    // Mock product data
    const product = {
        id: productId,
        name: "Floating Phone",
        price: 1139.33,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        images: [
            '/assets/products/product-1.jpg',
            '/assets/products/product-2.jpg'
        ],
        colors: [
            { name: 'blue', code: '#23A6F0' },
            { name: 'green', code: '#2DC071' },
            { name: 'orange', code: '#E77C40' },
            { name: 'navy', code: '#252B42' }
        ]
    };

    const bestsellers = Array.from({ length: 8 }, (_, i) => i + 1);

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
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Navigasyon Oklar */}
                                <button
                                    onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white"
                                >
                                    <ChevronRight size={20} className="rotate-180 text-primary-dark" />
                                </button>
                                <button
                                    onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white"
                                >
                                    <ChevronRight size={20} className="text-primary-dark" />
                                </button>
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex gap-5">
                                {product.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`w-[100px] h-[75px] cursor-pointer border-2 ${selectedImage === idx ? 'border-brand-blue' : 'border-transparent'
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
                                            className={i < Math.floor(product.rating) ? 'fill-[#F3CD03] text-[#F3CD03]' : 'text-[#F3CD03]'}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-text-gray">{product.reviews} Reviews</span>
                            </div>

                            {/* Fiyat */}
                            <h3 className="text-2xl font-bold text-primary-dark">${product.price}</h3>

                            {/* Availability */}
                            <div className="flex items-center gap-2 text-sm font-bold">
                                <span className="text-text-gray">Availability :</span>
                                <span className="text-brand-blue">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                            </div>

                            {/* Tanım */}
                            <p className="text-sm text-text-gray leading-6 border-t border-b border-gray-200 py-6">
                                {product.description}
                            </p>

                            {/* Renkler */}
                            <div className="flex items-center gap-2">
                                {product.colors.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-300"
                                        style={{ backgroundColor: color.code }}
                                        title={color.name}
                                    ></div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3 pt-4">
                                <button className="bg-brand-blue text-white px-5 py-3 text-sm font-bold rounded hover:bg-blue-600 transition-colors">
                                    Select Options
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                                    <Heart size={20} className="text-primary-dark" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
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
                            Reviews ({product.reviews})
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="py-12">
                        {activeTab === 'description' && (
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Sol Image */}
                                <div className="lg:w-1/3">
                                    <img
                                        src="/assets/products/product-3.jpg"
                                        alt="Description"
                                        className="w-full h-[280px] object-cover rounded-lg shadow-md"
                                    />
                                </div>

                                {/* Orta Sağ Text */}
                                <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
                                    <div className="flex-1 flex flex-col gap-6">
                                        <h3 className="text-2xl font-bold text-primary-dark">the quick fox jumps over</h3>
                                        <p className="text-sm text-text-gray leading-6">
                                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                        </p>
                                        <p className="text-sm text-text-gray leading-6">
                                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                        </p>
                                        <p className="text-sm text-text-gray leading-6">
                                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-4">
                                        <h3 className="text-2xl font-bold text-primary-dark">the quick fox jumps over</h3>
                                        <ul className="flex flex-col gap-3">
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
                                            </li>
                                        </ul>
                                        <h3 className="text-2xl font-bold text-primary-dark mt-4">the quick fox jumps over</h3>
                                        <ul className="flex flex-col gap-3">
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-sm text-text-gray">
                                                <ChevronRight size={16} className="mt-1 shrink-0" />
                                                <span>the quick fox jumps over the lazy dog</span>
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