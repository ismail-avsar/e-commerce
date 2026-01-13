import Slider from "react-slick";

const HomeSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {/* SLIDE 1 */}
            <div className="relative min-h-[716px]">
                <img
                    src="/assets/header/header.jpg"
                    alt="Slide 1"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'right top' }}
                />

                <div className="relative z-10 container mx-auto px-6 md:px-4 h-full flex items-center">
                    <div className="text-white flex flex-col gap-8 text-center md:text-left max-w-lg">
                        <h5 className="font-bold tracking-widest uppercase">
                            Summer 2020
                        </h5>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            NEW COLLECTION
                        </h1>
                        <p className="text-xl">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="bg-brand-green px-10 py-4 text-2xl font-bold rounded-sm w-fit mx-auto md:mx-0">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* SLIDE 2 */}
            <div className="relative min-h-[716px]">
                <img
                    src="/assets/hero/slider-2.png"
                    alt="Slide 2"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 container mx-auto px-6 md:px-4 h-full flex items-center">
                    <div className="text-white flex flex-col gap-8 text-center md:text-left max-w-lg">
                        <h5 className="font-bold tracking-widest uppercase">
                            Summer 2020
                        </h5>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            VITA CLASSIC
                        </h1>
                        <p className="text-xl">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="bg-brand-green px-10 py-4 text-2xl font-bold rounded-sm w-fit mx-auto md:mx-0">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default HomeSlider;
