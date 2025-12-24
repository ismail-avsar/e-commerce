import ProductCard from '../components/ProductCard';

const HomePage = () => {

    const products = [1, 2, 3, 4, 5, 6, 7, 8]; /* Dinamik import */

    return (
        <div className="w-full">
            {/* 1. HERO SECTION (Mobile First) */}
            <section className="relative bg-brand-blue min-h-[716px] flex flex-col md:flex-row items-center justify-center text-white overflow-hidden">
                <img
                    src="/assets/header/header.jpg"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="relative z-10 container mx-auto px-6 md:px-4 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                    <h5 className="font-bold tracking-widest">SUMMER 2020</h5>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-md">NEW COLLECTION</h1>
                    <p className="text-xl max-w-sm">We know how large objects will act, but things on a small scale.</p>
                    <button className="bg-brand-green px-10 py-4 text-2xl font-bold rounded-sm hover:scale-105 transition-transform">
                        SHOP NOW
                    </button>
                </div>
            </section>

            {/* 2. EDITOR'S PICK (Sadece Flex Layout) */}
            <section className="bg-light-gray py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-2xl font-bold text-primary-dark tracking-tight">EDITOR'S PICK</h2>
                        <p className="text-sm text-text-gray mt-2">Problems trying to resolve the conflict between</p>
                    </div>

                    {/* Flex Container - Mobile: Column, Desktop: Row */}
                    <div className="flex flex-col md:flex-row gap-[30px] justify-center">
                        {/* Men */}
                        <div className="relative w-full md:w-[510px] h-[500px]">
                            <img src="/assets/categories/men.jpg" className="w-full h-full object-cover" alt="Men" />
                            <button className="absolute bottom-6 left-8 bg-white px-12 py-3 font-bold text-primary-dark">MEN</button>
                        </div>

                        {/* Women */}
                        <div className="relative w-full md:w-[240px] h-[500px]">
                            <img src="/assets/categories/women.jpg" className="w-full h-full object-cover" alt="Women" />
                            <button className="absolute bottom-6 left-5 bg-white px-10 py-3 font-bold text-primary-dark">WOMEN</button>
                        </div>

                        {/* Accessories & Kids (Vertical Flex) */}
                        <div className="flex flex-col gap-[30px] w-full md:w-[240px]">
                            <div className="relative h-[242px]">
                                <img src="/assets/categories/accessories.jpg" className="w-full h-full object-cover" alt="Acc" />
                                <button className="absolute bottom-6 left-5 bg-white px-6 py-3 font-bold text-primary-dark text-sm">ACCESSORIES</button>
                            </div>
                            <div className="relative h-[242px]">
                                <img src="/assets/categories/kids.jpg" className="w-full h-full object-cover" alt="Kids" />
                                <button className="absolute bottom-6 left-5 bg-white px-10 py-3 font-bold text-primary-dark text-sm">KIDS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BESTSELLER PRODUCTS */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h4 className="text-xl text-text-gray font-normal">Featured Products</h4>
                        <h3 className="text-2xl font-bold text-primary-dark mt-2 tracking-tight">BESTSELLER PRODUCTS</h3>
                        <p className="text-sm text-text-gray mt-2">Problems trying to resolve the conflict between</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {products.map((p) => (
                            <div key={p} className="w-full md:w-[238px]">
                                <ProductCard /* Dinamik import */
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
        </div>
    );
};

export default HomePage;