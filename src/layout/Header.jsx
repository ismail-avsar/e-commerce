import { useState } from 'react';
import md5 from 'md5';
import { useSelector } from 'react-redux';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, User, Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(state => state.client.user);
  const cart = useSelector(state => state.shoppingCart.cart);

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar - Sadece Desktop */}
      <div className="hidden md:flex bg-primary-dark text-white text-sm py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="font-bold">(212) 123 45 78</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="font-bold">ismail@abc.com</span>
            </div>
          </div>
          <div className="font-bold">Follow Us and get a chance to win 80% off</div>
          <div className="flex items-center gap-3">
            <span className="font-bold">Follow Us :</span>
            <Instagram size={16} /><Youtube size={16} /><Facebook size={16} /><Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-6">
        <div className="container mx-auto px-6 md:px-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <h3 className="text-2xl font-bold text-primary-dark shrink-0">Bandage</h3>

            {/* Desktop Menü */}
            <ul className="hidden md:flex items-center gap-4 text-sm text-text-gray font-bold tracking-tight">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/pages">Pages</Link></li>
            </ul>

            {/* Sağ İkon Grubu */}
            <div className="flex items-center gap-5 md:gap-6">
              {user.name ? (
                <div className="flex items-center gap-2 cursor-pointer text-primary-dark md:text-brand-blue">
                  <img
                    src={`https://www.gravatar.com/avatar/${md5(user.email)}?d=mp`}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  />
                  <span className="hidden md:inline text-sm font-bold">{user.name}</span>
                </div>
              ) : (
                <Link to="/signup" className="flex items-center gap-1 cursor-pointer text-primary-dark md:text-brand-blue">
                  <User size={24} className="md:w-4 md:h-4" />
                  <span className="hidden md:inline text-sm font-bold">Login / Register</span>
                </Link>
              )}

              <div className="cursor-pointer text-primary-dark md:text-brand-blue">
                <Search size={24} className="md:w-5 md:h-5" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-primary-dark md:text-brand-blue relative">
                <ShoppingCart size={24} className="md:w-5 md:h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-blue text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              <div className="hidden md:flex items-center gap-1 cursor-pointer text-brand-blue">
                <Heart size={20} />
              </div>
              <button
                className="md:hidden text-primary-dark p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobil menü linkleri */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-8 py-20 text-3xl text-text-gray font-normal`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/pages" onClick={() => setIsMenuOpen(false)}>Pages</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;