import ProductCard from '../components/ProductCard';
import HomeSlider from "../components/HomeSlider";


const HomePage = () => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="w-full">
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden">
                <HomeSlider />
            </section>

            {/* 2. EDITOR'S PICK */}
            <section className="bg-light-gray py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-2xl font-bold text-primary-dark tracking-tight">EDITOR'S PICK</h2>
                        <p className="text-sm text-text-gray mt-2">Problems trying to resolve the conflict between</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[30px] justify-center">
                        <div className="relative w-full md:w-[510px] h-[500px]">
                            <img src="/assets/categories/men.jpg" className="w-full h-full object-cover" alt="Men" />
                            <button className="absolute bottom-6 left-8 bg-white px-12 py-3 font-bold text-primary-dark">MEN</button>
                        </div>
                        <div className="relative w-full md:w-[240px] h-[500px]">
                            <img src="/assets/categories/women.jpg" className="w-full h-full object-cover" alt="Women" />
                            <button className="absolute bottom-6 left-5 bg-white px-10 py-3 font-bold text-primary-dark">WOMEN</button>
                        </div>
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
                        <h3 className="text-2xl font-bold text-primary-dark mt-2 tracking-tight">
                            BESTSELLER PRODUCTS
                        </h3>
                        <p className="text-sm text-text-gray mt-2">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[48px]">
                        {products.map((p) => (
                            <div
                                key={p}
                                className="w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]"
                            >
                                <ProductCard
                                    productId={p}
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


            {/* 4. VITA CLASSIC SLIDER */}
            <section className="bg-brand-green pt-16 md:pt-28 overflow-hidden">
                <div className="container mx-auto px-6 md:px-4 flex flex-col md:flex-row items-center gap-8 md:gap-20">
                    <div className="text-center md:text-left text-white flex flex-col gap-7 md:w-1/2">
                        <h4 className="text-xl uppercase tracking-wider">Summer 2020</h4>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Vita Classic Product</h1>
                        <p className="text-sm md:text-xl max-w-xs mx-auto md:mx-0">
                            We know how large objects will act, We know how are objects will act, We know
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                            <span className="text-2xl font-bold">$16.48</span>
                            <button className="bg-brand-green border border-white md:bg-white md:text-brand-green px-10 py-4 text-sm font-bold rounded-sm uppercase hover:bg-gray-100 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-end">
                        <img
                            src="/assets/hero/slider-2.png"
                            alt="Vita Classic"
                            className="w-full max-w-[443px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* 5. NEURAL UNIVERSE */}
            <section className="bg-white py-16 md:py-28">
                <div className="container mx-auto px-6 md:px-4 flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <img
                            src="/assets/hero/slider-1.png"
                            alt="Neural Universe"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left flex flex-col gap-7 md:w-1/2">
                        <h5 className="text-base font-bold text-muted uppercase tracking-widest">Summer 2020</h5>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">Part of the Neural Universe</h1>
                        <p className="text-xl text-text-gray leading-relaxed">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-brand-blue text-white px-10 py-4 text-sm font-bold rounded-sm uppercase">Buy Now</button>
                            <button className="border-2 border-brand-blue text-brand-blue px-10 py-4 text-sm font-bold rounded-sm uppercase">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FEATURED POSTS (Blog) */}
            <section className="bg-white py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-20 flex flex-col gap-4">
                        <h6 className="text-sm font-bold text-brand-blue uppercase">Practice Advice</h6>
                        <h2 className="text-4xl font-bold text-primary-dark">Featured Posts</h2>
                        <p className="text-sm text-text-gray max-w-md mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[30px]">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="w-full md:w-[328px] bg-white shadow-md flex flex-col">
                                <div className="relative h-[300px]">
                                    <img src={`/assets/blog/blog-${num}.jpg`} alt={`Blog ${num}`} className="w-full h-full object-cover" />
                                    <span className="absolute top-5 left-5 bg-danger text-white px-2.5 py-1 text-sm font-bold rounded-sm shadow-sm">NEW</span>
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="flex gap-4 text-xs text-text-gray">
                                        <span className="text-[#8EC2F2]">Google</span>
                                        <span>Trending</span>
                                        <span>New</span>
                                    </div>
                                    <h4 className="text-xl text-primary-dark font-normal">Loudest à la Madison #1 (L'integral)</h4>
                                    <p className="text-sm text-text-gray">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                    <div className="flex justify-between items-center text-xs text-text-gray font-bold">
                                        <div className="flex items-center gap-1"><span>📅</span> 22 April 2021</div>
                                        <div className="flex items-center gap-1"><span>📊</span> 10 comments</div>
                                    </div>
                                    <button className="text-sm font-bold text-text-gray flex items-center gap-2 hover:text-brand-blue transition-colors">
                                        Learn More <span className="text-brand-blue text-lg">→</span>
                                    </button>
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