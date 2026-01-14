import { Grid2X2, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';



import { useParams } from 'react-router-dom';
import { setCategory, setFilter, setSort, setOffset } from '../store/actions/productActions';

const ShopPage = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { productList, total, fetchState, filter, sort, limit, offset } = useSelector((state) => state.product);
    const categoryList = useSelector((state) => state.global.categories); // İleride gerekirse kategori kartları mantığı için

    // Üst kısım için test kategorileri (şimdilik sadece görsel)
    const topCategories = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (categoryId) {
            dispatch(setCategory(Number(categoryId)));
            dispatch(setOffset(0));
        }
    }, [dispatch, categoryId]);

    const { category } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, category, filter, sort, limit, offset]);


    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
        dispatch(setOffset(0));
    };

    const handleSortChange = (e) => {
        dispatch(setSort(e.target.value));
        dispatch(setOffset(0));
    };

    const handlePageChange = (page) => {
        const newOffset = (page - 1) * limit;
        dispatch(setOffset(newOffset));
        window.scrollTo(0, 0);
    };

    const handleFilterButtonClick = () => { };

    // Pagination hesaplamaları
    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    // Sayfa numaralarını oluştur
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Basit bir gösterim: İlk sayfa, son sayfa ve mevcut sayfa çevresi
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };


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
                    <p className="text-sm font-bold text-[#737373]">Showing all {total || 0} results</p>

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
                            {/* SORT SELECT */}
                            <select
                                className="bg-[#F9F9F9] border border-[#DDDDDD] px-4 py-3 pr-8 text-sm text-[#737373] rounded outline-none appearance-none cursor-pointer"
                                onChange={handleSortChange}
                                value={sort}
                            >
                                <option value="">Sort By</option>
                                <option value="price:asc">Price: Low to High</option>
                                <option value="price:desc">Price: High to Low</option>
                                <option value="rating:asc">Rating: Low to High</option>
                                <option value="rating:desc">Rating: High to Low</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373]" size={14} />
                        </div>

                        {/* FILTER INPUT */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Filter products..."
                                className="bg-[#F9F9F9] border border-[#DDDDDD] px-4 py-3 text-sm text-[#737373] rounded outline-none"
                                value={filter}
                                onChange={handleFilterChange}
                            />
                        </div>

                        <button
                            className="bg-[#23A6F0] text-white px-5 py-3 text-sm font-bold rounded hover:bg-blue-600 transition-colors"
                            onClick={handleFilterButtonClick}
                        >
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
                            {productList?.map((p) => {
                                const category = categoryList.find(c => c.id === p.category_id);
                                const gender = category?.code?.startsWith('k:') ? 'kadin' : 'erkek';
                                const categoryTitle = category?.title || 'genel';

                                const slugify = (text) => {
                                    if (!text) return '';
                                    return text.toString().toLowerCase()
                                        .replace(/ğ/g, 'g')
                                        .replace(/ü/g, 'u')
                                        .replace(/ş/g, 's')
                                        .replace(/ı/g, 'i')
                                        .replace(/ö/g, 'o')
                                        .replace(/ç/g, 'c')
                                        .replace(/\s+/g, '-')
                                        .replace(/[^\w\-]+/g, '')
                                        .replace(/\-\-+/g, '-')
                                        .replace(/^-+/, '')
                                        .replace(/-+$/, '');
                                };

                                const productNameSlug = slugify(p.name);
                                const categorySlug = slugify(categoryTitle);
                                const detailUrl = `/shop/${gender}/${categorySlug}/${p.category_id}/${productNameSlug}/${p.id}`;

                                return (
                                    <div
                                        key={p.id}
                                        className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]"
                                    >
                                        <ProductCard
                                            productId={p.id}
                                            image={p.images && p.images.length > 0 ? p.images[0].url : ""}
                                            title={p.name}
                                            category={category?.title || "General"}
                                            originalPrice={p.price}
                                            salePrice={p.price}
                                            rating={p.rating}
                                            stock={p.stock}
                                            detailUrl={detailUrl}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* 5. Sayfalar*/}
            {total > limit && (
                <section className="py-8 px-6 bg-white">
                    <div className="container mx-auto">
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className={`px-5 py-2.5 border font-bold rounded transition-colors ${currentPage === 1
                                    ? 'border-[#E0E0E0] text-[#E0E0E0] cursor-not-allowed'
                                    : 'border-[#BDBDBD] text-[#BDBDBD] hover:bg-gray-50 cursor-pointer'
                                    }`}
                            >
                                First
                            </button>

                            {getPageNumbers().map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                                    disabled={page === '...'}
                                    className={`px-5 py-2.5 font-bold rounded border ${page === currentPage
                                        ? 'bg-[#23A6F0] text-white border-[#23A6F0]'
                                        : page === '...'
                                            ? 'border-transparent text-[#737373] cursor-default'
                                            : 'border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-5 py-2.5 border font-bold rounded transition-colors ${currentPage === totalPages
                                    ? 'border-[#E0E0E0] text-[#E0E0E0] cursor-not-allowed'
                                    : 'border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white cursor-pointer'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </section>
            )}

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