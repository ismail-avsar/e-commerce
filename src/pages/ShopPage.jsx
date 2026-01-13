import { Grid2X2, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';


const ShopPage = () => {
    const dispatch = useDispatch();
    const { productList, total, fetchState } = useSelector((state) => state.product);
    const categoryList = useSelector((state) => state.global.categories); // İleride gerekirse kategori kartları mantığı için

    // Üst kısım için test kategorileri (şimdilik sadece görsel)
    const topCategories = [1, 2, 3, 4, 5];

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="w-full bg-white">
            {/* 1. Gezinti ve Başlık Bölümü */}
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

            {/* 2. Kategori Kartları */}
            <section className="bg-[#FAFAFA] pb-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-4">
                        {topCategories.map((cat) => (
                            <div key={cat} className="w-full md:w-[19%]">
                                <div className="relative h-[223px] group cursor-pointer overflow-hidden">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Filtreleme Çubuğu */}
            <section className="py-6 px-6 bg-white">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm font-bold text-[#737373]">Showing all {productList?.length || 0} results</p>

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

            {/* 4. Ürün Listesi */}
            <section className="py-12 px-6 bg-white">
                <div className="container mx-auto">
                    {fetchState === 'FETCHING' && (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-blue"></div>
                        </div>
                    )}

                    {fetchState === 'FETCHED' && (
                        <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[48px]">
                            {productList?.map((p) => (
                                <div
                                    key={p.id}
                                    className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]"
                                >
                                    <ProductCard
                                        productId={p.id}
                                        image={p.images && p.images.length > 0 ? p.images[0].url : ""}
                                        title={p.name}
                                        category={categoryList.find(c => c.id === p.category_id)?.title || "General"}
                                        originalPrice={p.price} // API returns single price, simulating original? Or use same.
                                        salePrice={p.price}
                                        rating={p.rating}
                                        stock={p.stock}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* 5. Sayfalar*/}
            <section className="py-8 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center gap-2">
                        <button className="px-5 py-2.5 border border-[#BDBDBD] text-[#BDBDBD] font-bold rounded hover:bg-gray-50 transition-colors">
                            First
                        </button>
                        <button className="px-5 py-2.5 border border-[#23A6F0] text-[#23A6F0] font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-colors">
                            1
                        </button>
                        <button className="px-5 py-2.5 bg-[#23A6F0] text-white font-bold rounded">
                            2
                        </button>
                        <button className="px-5 py-2.5 border border-[#23A6F0] text-[#23A6F0] font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-colors">
                            3
                        </button>
                        <button className="px-5 py-2.5 border border-[#23A6F0] text-[#23A6F0] font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. Marka Logoları */}
            <section className="bg-[#FAFAFA] py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-12 px-8">
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