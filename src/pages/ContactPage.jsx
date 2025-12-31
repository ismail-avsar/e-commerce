const ContactPage = () => {
    const offices = [
        {
            city: "Paris",
            address: "1901 Thorn ridge Cir.",
            zipCode: "75000 Paris",
            phone: "+451 215 215",
            fax: "+451 215 215",
        },
        {
            city: "New York",
            address: "2715 Ash Dr. San Jose,",
            zipCode: "75000 Paris",
            phone: "+451 215 215",
            fax: "+451 215 215",
        },
        {
            city: "Berlin",
            address: "4140 Parker Rd.",
            zipCode: "75000 Paris",
            phone: "+451 215 215",
            fax: "+451 215 215",
        },
        {
            city: "London",
            address: "3517 W. Gray St. Utica,",
            zipCode: "75000 Paris",
            phone: "+451 215 215",
            fax: "+451 215 215",
        },
    ];

    return (
        <section className="relative w-full min-h-screen lg:h-[800px] overflow-hidden flex items-center">

            {/* Arka Plan */}
            <img
                src="/assets/contact/contact.jpg"
                className="absolute inset-0 w-full h-full object-cover object-right lg:object-[center_right_25%]"
                alt="background"
            />

            {/* Filter */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002B44] via-[#002B44]/60 to-transparent"></div>

            {/* İçerik */}
            <div className="relative z-10 w-full px-6 lg:px-24 flex flex-col lg:flex-row gap-16 items-center">

                {/* Sol Taraf: Yazılar */}
                <div className="flex flex-col gap-8 text-white lg:w-1/2">
                    <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
                        CONTACT US
                    </h1>

                    <p className="text-lg max-w-md opacity-90 leading-relaxed">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>

                    <button className="bg-[#23A6F0] hover:bg-blue-600 text-white px-10 py-4 text-sm font-bold uppercase w-fit rounded-md transition-all shadow-lg">
                        Contact Us
                    </button>
                </div>

                {/* Sağ Taraf: Ofis Bilgileri */}
                <div className="flex flex-col gap-12 lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {offices.map((office) => (
                            <div
                                key={office.city}
                                className="flex flex-col gap-3 text-white"
                            >
                                <h3 className="font-bold text-2xl">
                                    {office.city}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#23A6F0] mb-2"></div>
                                <p className="text-sm font-medium">{office.address}</p>
                                <p className="font-bold text-sm">{office.zipCode}</p>
                                <p className="text-sm">Phone ; {office.phone}</p>
                                <p className="text-sm">Fax : {office.fax}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;