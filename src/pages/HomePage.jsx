import ProductCard from '../components/ProductCard';

const HomePage = () => {
    return (
        <div className="w-full">
            {/* 1. HERO SLIDER */}
            <section className="relative bg-[#23A6F0] h-[753px] flex items-center justify-center">
                <img
                    src="/src/assets/header/header.jpg"
                    alt="New Collection"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center gap-9">
                    <h5 className="text-base font-bold">SUMMER 2020</h5>
                    <h1 className="text-[40px] font-bold leading-[50px]">NEW COLLECTION</h1>
                    <p className="text-xl leading-[30px] max-w-[291px]">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <button className="bg-brand-green text-white px-10 py-4 text-2xl font-bold rounded">
                        SHOP NOW
                    </button>
                </div>
            </section>

            {/* 2. EDITOR'S PICK / CATEGORIES */}
            <section className="bg-light-gray py-20">
                <div className="container mx-auto px-4">
                    {/* Başlık */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-primary-dark mb-2.5">EDITOR'S PICK</h2>
                        <p className="text-sm text-text-gray">Problems trying to resolve the conflict between</p>
                    </div>

                    {/* Kategoriler - Mobile: Alt alta */}
                    <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-[30px]">
                        {/* MEN */}
                        <div className="relative h-[500px] md:w-[calc(50%-15px)]">
                            <img
                                src="/src/assets/categories/men.jpg"
                                alt="Men"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute bottom-6 left-8 bg-white px-12 py-3 font-bold text-primary-dark">
                                MEN
                            </button>
                        </div>

                        {/* WOMEN */}
                        <div className="relative h-[500px] md:w-[calc(50%-15px)]">
                            <img
                                src="/src/assets/categories/women.jpg"
                                alt="Women"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute bottom-6 left-8 bg-white px-12 py-3 font-bold text-primary-dark">
                                WOMEN
                            </button>
                        </div>

                        {/* ACCESSORIES */}
                        <div className="relative h-[242px] md:w-[calc(50%-15px)]">
                            <img
                                src="/src/assets/categories/accessories.jpg"
                                alt="Accessories"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute bottom-6 left-4 bg-white px-7 py-3 font-bold text-primary-dark text-sm">
                                ACCESSORIES
                            </button>
                        </div>

                        {/* KIDS */}
                        <div className="relative h-[242px] md:w-[calc(50%-15px)]">
                            <img
                                src="/src/assets/categories/kids.jpg"
                                alt="Kids"
                                className="w-full h-full object-cover"
                            />
                            <button className="absolute bottom-6 left-4 bg-white px-10 py-3 font-bold text-primary-dark text-sm">
                                KIDS
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BESTSELLER PRODUCTS */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    {/* Başlık */}
                    <div className="text-center mb-12">
                        <h4 className="text-xl text-text-gray mb-2.5">Featured Products</h4>
                        <h2 className="text-2xl font-bold text-primary-dark mb-2.5">BESTSELLER PRODUCTS</h2>
                        <p className="text-sm text-text-gray">Problems trying to resolve the conflict between</p>
                    </div>

                    {/* Ürünler - Mobile: Alt alta, Desktop: 4 sütun */}
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-[30px]">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <ProductCard
                                key={num}
                                image={`/src/assets/products/product-${num}.jpg`}
                                title="Graphic Design"
                                category="English Department"
                                originalPrice="16.48"
                                salePrice="6.48"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VITA CLASSIC SLIDER (Yeşil Arka Plan) */}
            <section className="bg-brand-green py-28">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
                    {/* Sol: Yazı */}
                    <div className="text-center md:text-left text-white flex flex-col gap-9 md:w-1/2">
                        <h4 className="text-xl">SUMMER 2020</h4>
                        <h1 className="text-[40px] font-bold leading-[50px]">Vita Classic Product</h1>
                        <p className="text-sm leading-5 max-w-[291px] mx-auto md:mx-0">
                            We know how large objects will act, We know how are objects will act, We know
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <span className="text-2xl font-bold">$16.48</span>
                            <button className="bg-brand-green text-white px-10 py-4 text-sm font-bold rounded">
                                ADD TO CART
                            </button>
                        </div>
                    </div>

                    {/* Sağ: Model Görseli */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/src/assets/hero/slider-2.png"
                            alt="Vita Classic Product"
                            className="max-w-[443px] h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* 5. NEURAL UNIVERSE */}
            <section className="bg-white py-28">
                <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8">
                    {/* Sağ: Yazı */}
                    <div className="text-center md:text-left flex flex-col gap-8 md:w-1/2">
                        <h5 className="text-base font-bold text-muted">SUMMER 2020</h5>
                        <h1 className="text-[40px] font-bold leading-[50px] text-primary-dark">
                            Part of the Neural Universe
                        </h1>
                        <p className="text-xl text-text-gray leading-[30px]">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex flex-col md:flex-row gap-2.5">
                            <button className="bg-brand-green text-white px-10 py-4 text-sm font-bold rounded">
                                BUY NOW
                            </button>
                            <button className="border-2 border-brand-green text-brand-green px-10 py-4 text-sm font-bold rounded">
                                READ MORE
                            </button>
                        </div>
                    </div>

                    {/* Sol: Görsel */}
                    <div className="md:w-1/2">
                        <img
                            src="/src/assets/hero/slider-1.png"
                            alt="Neural Universe"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* 6. FEATURED POSTS / BLOG */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    {/* Başlık */}
                    <div className="text-center mb-20">
                        <h6 className="text-sm font-bold text-brand-blue mb-2.5">Practice Advice</h6>
                        <h2 className="text-[40px] font-bold text-primary-dark mb-2.5">Featured Posts</h2>
                        <p className="text-sm text-text-gray">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    {/* Blog Kartları - Mobile: Alt alta, Desktop: 3 sütun */}
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-[30px]">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="bg-white shadow-sm">
                                {/* Blog Görseli */}
                                <div className="relative h-[300px]">
                                    <img
                                        src={`/src/assets/blog/blog-${num}.jpg`}
                                        alt={`Blog ${num}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="absolute top-5 left-5 bg-danger text-white px-2.5 text-sm font-bold">
                                        NEW
                                    </span>
                                </div>

                                {/* Blog İçerik */}
                                <div className="p-6 flex flex-col gap-2.5">
                                    <div className="flex gap-4 text-xs text-text-gray">
                                        <span className="text-[#8EC2F2]">Google</span>
                                        <span>Trending</span>
                                        <span>New</span>
                                    </div>
                                    <h4 className="text-xl text-primary-dark">
                                        Loudest à la Madison #1 (L'integral)
                                    </h4>
                                    <p className="text-sm text-text-gray leading-5">
                                        We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                                    </p>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-xs text-text-gray">22 April 2021</span>
                                        <span className="text-xs text-text-gray">10 comments</span>
                                    </div>
                                    <a href="#" className="text-sm font-bold text-text-gray flex items-center gap-2.5">
                                        Learn More
                                        <span className="text-brand-blue">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;