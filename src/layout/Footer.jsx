import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            {/* Üst Bar */}
            <div className="bg-light-gray py-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo */}
                    <h3 className="text-2xl font-bold text-primary-dark">Bandage</h3>

                    {/* Sosyal Medya */}
                    <div className="flex items-center gap-5">
                        <Facebook size={24} className="text-brand-blue cursor-pointer" />
                        <Instagram size={24} className="text-brand-blue cursor-pointer" />
                        <Twitter size={24} className="text-brand-blue cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Ana Footer */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between gap-8">
                        {/* Company Info */}
                        <div className="flex flex-col gap-5">
                            <h5 className="text-base font-bold text-primary-dark">Company Info</h5>
                            <div className="flex flex-col gap-2.5">
                                <Link to="/about" className="text-sm font-bold text-text-gray hover:text-brand-blue">About Us</Link>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Carrier</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">We are hiring</a>
                                <Link to="/blog" className="text-sm font-bold text-text-gray hover:text-brand-blue">Blog</Link>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-5">
                            <h5 className="text-base font-bold text-primary-dark">Legal</h5>
                            <div className="flex flex-col gap-2.5">
                                <Link to="/about" className="text-sm font-bold text-text-gray hover:text-brand-blue">About Us</Link>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Carrier</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">We are hiring</a>
                                <Link to="/blog" className="text-sm font-bold text-text-gray hover:text-brand-blue">Blog</Link>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-5">
                            <h5 className="text-base font-bold text-primary-dark">Features</h5>
                            <div className="flex flex-col gap-2.5">
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Business Marketing</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">User Analytic</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Live Chat</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Unlimited Support</a>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-5">
                            <h5 className="text-base font-bold text-primary-dark">Resources</h5>
                            <div className="flex flex-col gap-2.5">
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">IOS & Android</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Watch a Demo</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">Customers</a>
                                <a href="#" className="text-sm font-bold text-text-gray hover:text-brand-blue">API</a>
                            </div>
                        </div>

                        {/* Get In Touch */}
                        <div className="flex flex-col gap-5">
                            <h5 className="text-base font-bold text-primary-dark">Get In Touch</h5>
                            <div className="flex flex-col gap-2">
                                {/* Email Form */}
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="flex-1 bg-light-gray border border-gray-300 rounded-l px-4 py-3 text-sm"
                                    />
                                    <button className="bg-brand-blue text-white px-6 py-3 rounded-r text-sm font-medium">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-xs text-text-gray">Lore imp sum dolor Amit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alt Bar - Copyright */}
            <div className="bg-light-gray py-6">
                <div className="container mx-auto px-4">
                    <p className="text-sm font-bold text-text-gray text-center md:text-left">
                        Made With Love By Turkey All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;