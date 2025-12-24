import { Grid2X2, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
    // Kategori resim numaraları (shop-1.jpg ... shop-5.jpg için)
    const categories = [1, 2, 3, 4, 5];

    // Ürün listesi (Mock data)
    const products = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="w-full bg-white">
            {/* 1. BREADCRUMB & TITLE SECTION */}
            <section className="bg-[#FAFAFA] py-6 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="text-2xl font-bold text-[#252B42] tracking-tight">Shop</h2>
                    <div className="flex items-center gap-4 text-sm font-bold">
                        <span className="text-[#252B42]">Home</span>
                        <span className="text-[#BDBDBD] font-bold text-lg">/</span>
                        <span className="text-[#737373]">Shop</span>
                    </div>
                </div>
            </section>

            {/* 2. CATEGORY CARDS (5 Tane Yan Yana) */}
            <section className="bg-[#FAFAFA] pb-12 px-6">
                <div className="container mx-auto">
                    {/* md:grid-cols-5 diyerek 5 sütuna böldük */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {categories.map((cat) => (
                            <div key={cat} className="relative h-[223px] group cursor-pointer overflow-hidden">
                                {/* GÜNCELLENEN KISIM: Senin verdiğin dosya yolu */}
                                <img
                                    src={`/assets/shop/shop-${cat}.jpg`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={`Category ${cat}`}
                                />
                                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white">
                                    <h5 className="font-bold uppercase text-base">CLOTHS</h5>
                                    <p className="text-sm">5 Items</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FILTER BAR */}
            <section className="py-6 px-6 bg-white">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm font-bold text-[#737373]">Showing all 12 results</p>

                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-[#737373]">Views:</span>
                        <button className="p-3 border border-[#ECECEC] rounded text-[#252B42] hover:bg-gray-50">
                            <Grid2X2 size={16} />
                        </button>
                        <button className="p-3 border border-[#ECECEC] rounded text-[#737373] hover:bg-gray-50">
                            <List size={16} />
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <select className="bg-[#F9F9F9] border border-[#DDDDDD] px-4 py-3 pr-8 text-sm text-[#737373] rounded outline-none appearance-none cursor-pointer">
                                <option>Popularity</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373]" size={14} />
                        </div>
                        <button className="bg-[#23A6F0] text-white px-5 py-3 text-sm font-bold rounded hover:bg-blue-600 transition-colors">
                            Filter
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. PRODUCT GRID (4 Tane Yan Yana) */}
            <section className="py-12 px-6 bg-white">
                <div className="container mx-auto">
                    {/* lg:grid-cols-4 ile masaüstünde 4 ürün yan yana */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {products.map((p) => (
                            <ProductCard
                                key={p}
                                image={`/assets/products/product-${(p % 8) + 1}.jpg`}
                                title="Graphic Design"
                                category="English Department"
                                originalPrice="16.48"
                                salePrice="6.48"
                            />
                        ))}
                    </div>

                    {/* 5. PAGINATION */}
                    <div className="flex justify-center mt-12">
                        <div className="flex border border-[#BDBDBD] rounded overflow-hidden shadow-sm">
                            <button className="px-6 py-4 bg-[#F3F3F3] text-[#BDBDBD] text-sm font-bold border-r border-[#BDBDBD] hover:bg-gray-200">First</button>
                            <button className="px-5 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#BDBDBD] hover:bg-gray-50">1</button>
                            <button className="px-5 py-4 bg-[#23A6F0] text-white text-sm font-bold border-r border-[#BDBDBD]">2</button>
                            <button className="px-5 py-4 bg-white text-[#23A6F0] text-sm font-bold border-r border-[#BDBDBD] hover:bg-gray-50">3</button>
                            <button className="px-6 py-4 bg-white text-[#23A6F0] text-sm font-bold hover:bg-gray-50">Next</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BRAND LOGOS */}
            <section className="bg-[#FAFAFA] py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-12 px-8">
                        {/* Logolar (varsa assets/brands/ altında olmalı) */}
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

export default ShopPage;