import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Heart, Menu, } from 'lucide-react';

const Header = () => {
  return (
    <header>
      {/* Top Bar - Desktop */}
      <div className="hidden md:flex bg-dark-navy text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Sol: Tel & Email */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(212) 123 45 78</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ismail@abc.com</span>
            </div>
          </div>

          {/* Orta: Follow Us */}
          <div>
            <span className="font-bold">Follow Us and get a chance to win 80% off</span>
          </div>

          {/* Sağ: Sosyal Medya */}
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h3 className="text-2xl font-bold text-primary-dark">Bandage</h3>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-bold">
            <li><a href="/" className="text-text-gray">Home</a></li>
            <li><a href="/shop" className="text-text-gray">Shop</a></li>
            <li><a href="/about" className="text-text-gray">About</a></li>
            <li><a href="/blog" className="text-text-gray">Blog</a></li>
            <li><a href="/contact" className="text-text-gray">Contact</a></li>
            <li><a href="/pages" className="text-text-gray">Pages</a></li>
          </ul>

          {/* Sağ Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop: Login/Register */}
            <div className="hidden md:flex items-center gap-2 text-brand-blue text-sm font-bold">
              <User size={16} />
              <span>Login / Register</span>
            </div>

            {/* Mobil: User Icon (Siyah) */}
            <User size={21} className="md:hidden text-primary-dark" />

            {/* Search Icon */}
            <Search size={20} className="text-brand-blue md:text-brand-blue" />

            {/* Cart Icon */}
            <ShoppingCart size={20} className="text-brand-blue md:text-brand-blue cursor-pointer" />

            {/* Wishlist (Sadece Desktop) */}
            <div className="flex items-center gap-1 hidden md:flex ">
              <Heart size={20} className="text-brand-blue cursor-pointer" />
            </div>

            {/* Mobil: Hamburger Menu */}
            <Menu size={24} className="md:hidden text-primary-dark cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;