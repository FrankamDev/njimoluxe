import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Accueil', href: '/' },
  // { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À Propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideNav(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hideNav ? -120 : 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-lg border-b border-green-900/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link prefetch href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-12  rounded-[7px] flex items-center justify-center text-white font-bold text-2xl shadow-md"
            >
              <img src="./njimoluxe.png" className='rounded-[7px] h-full' alt="Logo" />
            </motion.div>
            <span className="text-3xl font-serif font-bold text-green-400 tracking-wide">NJIMOLUXE</span>
          </Link>



          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-green-400 transition-colors duration-300 font-sans font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bouton CTA + Menu mobile */}
          <div className="flex items-center space-x-4">
            <Link
              prefetch
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-sans font-semibold rounded-[7px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Devis Gratuit
            </Link>

            <button
              className="md:hidden text-white p-2 rounded-[7px] hover:bg-green-900/30 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black border-t border-green-900/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-xl text-gray-200 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/devis"
                className="block w-full text-center py-4 bg-green-700 hover:bg-green-600 text-white font-sans font-semibold rounded-[7px] mt-4 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;