// import { Link } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const navItems = [
//   { name: 'Accueil', href: '/' },
//   // { name: 'Services', href: '/services' },
//   { name: 'Réalisations', href: '/realisations' },
//   { name: 'À Propos', href: '/about' },
//   { name: 'Blog', href: '/blog' },
//   { name: 'Contact', href: '/contact' },
// ];

// const NavBar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [hideNav, setHideNav] = useState(false);
//   let lastScrollY = 0;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setHideNav(currentScrollY > lastScrollY && currentScrollY > 50);
//       lastScrollY = currentScrollY;
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: hideNav ? -120 : 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-lg border-b border-green-900/20 shadow-lg"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">

//           <Link prefetch href="/" className="flex items-center space-x-3">
//             <motion.div
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               className="w-14 h-12  rounded-[7px] flex items-center justify-center text-white font-bold text-2xl shadow-md"
//             >
//               <img src="./njimoluxe.png" className='rounded-[7px] h-full' alt="Logo" />
//             </motion.div>
//             <span className="text-3xl font-serif font-bold text-green-400 tracking-wide">NJIMOLUXE</span>
//           </Link>



//           <nav className="hidden md:flex items-center space-x-10">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-200 hover:text-green-400 transition-colors duration-300 font-sans font-medium text-lg"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Bouton CTA + Menu mobile */}
//           <div className="flex items-center space-x-4">
//             <Link
//               prefetch
//               href="/contact"
//               className="hidden md:inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-sans font-semibold rounded-[7px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//             >
//               Devis Gratuit
//             </Link>

//             <button
//               className="md:hidden text-white p-2 rounded-[7px] hover:bg-green-900/30 transition-colors"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Menu mobile avec AnimatePresence */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4 }}
//             className="md:hidden bg-black border-t border-green-900/30 overflow-hidden"
//           >
//             <div className="px-4 py-6 space-y-5">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="block text-xl text-gray-200 hover:text-green-400 transition-colors"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 href="/devis"
//                 className="block w-full text-center py-4 bg-green-700 hover:bg-green-600 text-white font-sans font-semibold rounded-[7px] mt-4 shadow-md"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Devis Gratuit
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default NavBar;




// import { Link, usePage, router } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState, useEffect, useRef } from 'react';

// const NavBar = () => {
//   const { auth } = usePage().props as any;
//   const user = auth?.user;

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Fermer dropdown si clique extérieur
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const logout = () => {
//     router.post('/logout');
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-green-900/30">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

//         <Link href="/" className="text-2xl font-bold text-green-400">
//           NJIMOLUXE
//         </Link>

//         {/* DESKTOP */}
//         <div className="hidden md:flex items-center space-x-8">

//           {!user ? (
//             <Link
//               href="/login"
//               className="px-5 py-2 bg-green-700 hover:bg-green-600 text-white rounded-lg"
//             >
//               Connexion
//             </Link>
//           ) : (
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center space-x-2 text-green-400 font-semibold"
//               >
//                 <span>{user.name}</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               <AnimatePresence>
//                 {dropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute right-0 mt-3 w-48 bg-gray-900 border border-green-900/30 rounded-lg shadow-xl"
//                   >
//                     <Link
//                       href="/dashboard"
//                       className="block px-4 py-3 hover:bg-green-900/20"
//                     >
//                       Dashboard
//                     </Link>

//                     <Link
//                       href="/profile"
//                       className="block px-4 py-3 hover:bg-green-900/20"
//                     >
//                       Profil
//                     </Link>

//                     <button
//                       onClick={logout}
//                       className="w-full text-left px-4 py-3 hover:bg-red-600/20 text-red-400"
//                     >
//                       Déconnexion
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-black border-t border-green-900/30"
//           >
//             <div className="p-6 space-y-4">

//               {!user ? (
//                 <Link
//                   href="/login"
//                   className="block text-center py-3 bg-green-700 text-white rounded-lg"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Connexion
//                 </Link>
//               ) : (
//                 <>
//                   <div className="text-green-400 font-semibold">
//                     {user.name}
//                   </div>

//                   <Link
//                     href="/dashboard"
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block py-2"
//                   >
//                     Dashboard
//                   </Link>

//                   <Link
//                     href="/profile"
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block py-2"
//                   >
//                     Profil
//                   </Link>

//                   <button
//                     onClick={() => {
//                       logout();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="block w-full text-left py-2 text-red-400"
//                   >
//                     Déconnexion
//                   </button>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default NavBar;












// components/Navbar.tsx
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Settings,
  LogOut,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface AuthUser {
  name: string;
  // avatar?: string;
}

interface NavItem {
  label: string;
  href: string;
}

const publicNavItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  // Sécurité maximale contre auth null / undefined
  const { auth } = usePage().props as { auth?: { user: AuthUser | null } | null };
  const user = auth?.user ?? null;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: scrolledDown ? -140 : 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/85 to-black/80 backdrop-blur-xl border-b border-green-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-green-900/40 transition-transform group-hover:scale-105 duration-300">
              <img
                src="/njimoluxe.png"
                alt="NjimoLuxe"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-3xl font-serif font-extrabold tracking-tight text-green-400 group-hover:text-green-300 transition-colors duration-300">
              NJIMOLUXE
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-200 hover:text-green-400 font-medium text-lg transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-green-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-6">
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    type="button"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-green-950/40 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-bold shadow-md">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-gray-100">{user.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-3 w-64 bg-neutral-900/95 backdrop-blur-lg border border-green-900/30 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="py-2">
                          <Link
                            href="/dashboard"
                            className="flex items-center gap-3 px-5 py-3.5 text-gray-200 hover:bg-green-950/50 hover:text-green-400 transition-colors"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <LayoutDashboard size={18} />
                            Tableau de bord
                          </Link>

                          <Link
                            href="/settings"
                            className="flex items-center gap-3 px-5 py-3.5 text-gray-200 hover:bg-green-950/50 hover:text-green-400 transition-colors"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <Settings size={18} />
                            Paramètres
                          </Link>
                        </div>

                        <div className="border-t border-green-900/30 py-1">
                          <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-5 py-3.5 text-red-400 hover:bg-red-950/40 transition-colors"
                          >
                            <LogOut size={18} />
                            Déconnexion
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-200 hover:text-green-400 font-medium text-lg transition-colors duration-200"
                  >
                    Connexion
                  </Link>

                  <Link
                    href="/contact"
                    className="px-7 py-3.5 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
                  >
                    Devis gratuit
                  </Link>
                </>
              )}
            </div>

            <button
              type="button"
              className="lg:hidden text-white p-2 -mr-2 rounded-xl hover:bg-green-950/40 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-green-900/30 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-7">
              {publicNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-xl font-medium text-gray-200 hover:text-green-400 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-8 border-t border-green-900/40">
                {user ? (
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 px-4 py-4 bg-green-950/30 rounded-2xl">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-white">{user.name}</p>
                        <p className="text-green-400/80 text-sm">Connecté</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-green-950/40 text-gray-200 hover:text-green-400 transition-colors text-lg font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        <LayoutDashboard size={22} />
                        Tableau de bord
                      </Link>

                      <Link
                        href="/settings"
                        className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-green-950/40 text-gray-200 hover:text-green-400 transition-colors text-lg font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Settings size={22} />
                        Paramètres
                      </Link>

                      <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex items-center gap-4 px-5 py-4 rounded-xl bg-red-950/40 hover:bg-red-950/60 text-red-300 transition-colors text-lg font-medium w-full"
                        onClick={() => setMobileOpen(false)}
                      >
                        <LogOut size={22} />
                        Déconnexion
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    <Link
                      href="/login"
                      className="block text-center py-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl font-semibold transition-colors text-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      Se connecter
                    </Link>

                    <Link
                      href="/contact"
                      className="block text-center py-4 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-md text-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      Demander un devis gratuit
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}