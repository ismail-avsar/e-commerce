import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: 'Yalçın Kaya',
        role: "Product Designer",
        image: "/assets/team/team-1.jpg",
    },
    {
        id: 2,
        name: 'İsmail Avşar',
        role: "Frontend Developer",
        image: "/assets/team/team-2.jpg",
    },
    {
        id: 3,
        name: "Robert Fox",
        role: "UI/UX Designer",
        image: "/assets/team/team-3.jpg",
    },
];

function TeamPage() {
    return (
        <section className="w-full py-28 bg-white">
            <div className="container mx-auto px-4 flex flex-col items-center gap-28">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-2.5 max-w-[607px]">
                    <h2 className="text-4xl md:text-[40px] font-bold text-primary-dark tracking-[0.2px] leading-[50px]">
                        Meet Our Team
                    </h2>
                    <p className="text-sm font-medium text-text-gray tracking-[0.2px] max-w-[469px]">
                        Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* Team Cards */}
                <div className="w-full flex flex-col md:flex-row gap-[30px] justify-center flex-wrap">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center gap-6 pb-6"
                        >
                            <div className="w-full md:w-[316px] h-[360px] md:h-[231px] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center md:object-top"
                                />
                            </div>

                            <div className="flex flex-col items-center gap-2.5 p-[30px] w-full">
                                <h5 className="text-base font-bold text-primary-dark leading-6 tracking-[0.1px]">
                                    {member.name}
                                </h5>
                                <h6 className="text-sm font-bold text-text-gray leading-6 tracking-[0.2px]">
                                    {member.role}
                                </h6>

                                {/* Social Icons */}
                                <div className="flex items-center gap-5 mt-2.5">
                                    <Facebook className="w-6 h-6 text-[#335BF5] hover:opacity-80 transition-opacity cursor-pointer fill-current" />
                                    <Instagram className="w-6 h-6 text-[#E51F5A] hover:opacity-80 transition-opacity cursor-pointer" />
                                    <Twitter className="w-6 h-6 text-[#23A6F0] hover:opacity-80 transition-opacity cursor-pointer fill-current" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamPage;
