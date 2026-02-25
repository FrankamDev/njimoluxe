
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

export default function NavBar() {

  const { auth } = usePage<{ auth: { user: AuthUser | null } }>().props;

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
    // <motion.header
    //   initial={{ y: -100 }}
    //   animate={{ y: scrolledDown ? -140 : 0 }}
    //   transition={{ duration: 0.5, ease: 'easeOut' }}
    //   className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/85 to-black/80 backdrop-blur-xl border-b border-green-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    // >
    //   <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-20">

    //       {/* Logo */}
    //       <Link href="/" className="flex items-center gap-3.5 group">
    //         <div className=" h-8 rounded overflow-hidden shadow-lg shadow-green-900/40 transition-transform group-hover:scale-105 duration-300">
    //           <img
    //             src="/njimoluxe.png"
    //             alt="NjimoLuxe"
    //             className="w-full h-full object-cover"
    //           />
    //         </div>
    //         <span className="text-3xl font-serif font-extrabold tracking-tight text-green-400 group-hover:text-green-300 transition-colors duration-300">
    //           NJIMOLUXE
    //         </span>
    //       </Link>

    //       {/* Navigation desktop */}
    //       <nav className="hidden lg:flex items-center gap-10">
    //         {publicNavItems.map((item) => (
    //           <Link
    //             key={item.href}
    //             href={item.href}
    //             className="relative text-gray-200 hover:text-green-400 font-medium text-lg transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-green-500 hover:after:w-full after:transition-all after:duration-300"
    //           >
    //             {item.label}
    //           </Link>
    //         ))}
    //       </nav>

    //       {/* Actions */}
    //       <div className="flex items-center gap-5">
    //         <div className="hidden lg:flex items-center gap-6">
    //           {auth?.user ? (
    //             <div className="relative" ref={userMenuRef}>
    //               <button
    //                 type="button"
    //                 onClick={() => setUserMenuOpen(!userMenuOpen)}
    //                 className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-green-950/40 transition-all duration-200"
    //               >
    //                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-bold shadow-md">
    //                   {auth?.user.name.charAt(0).toUpperCase()}
    //                 </div>
    //                 <span className="font-medium text-gray-100">{auth?.user.name}</span>
    //                 <ChevronDown
    //                   size={18}
    //                   className={`transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`}
    //                 />
    //               </button>

    //               <AnimatePresence>
    //                 {userMenuOpen && (
    //                   <motion.div
    //                     initial={{ opacity: 0, y: 12, scale: 0.96 }}
    //                     animate={{ opacity: 1, y: 0, scale: 1 }}
    //                     exit={{ opacity: 0, y: 8, scale: 0.96 }}
    //                     transition={{ duration: 0.15 }}
    //                     className="absolute right-0 mt-3 w-64 bg-neutral-900/95 backdrop-blur-lg border border-green-900/30 rounded-2xl shadow-2xl overflow-hidden"
    //                   >
    //                     <div className="py-2">
    //                       <Link
    //                         href="/dashboard"
    //                         className="flex items-center gap-3 px-5 py-3.5 text-gray-200 hover:bg-green-950/50 hover:text-green-400 transition-colors"
    //                         onClick={() => setUserMenuOpen(false)}
    //                       >
    //                         <LayoutDashboard size={18} />
    //                         Tableau de bord
    //                       </Link>

    //                       <Link
    //                         href="/settings"
    //                         className="flex items-center gap-3 px-5 py-3.5 text-gray-200 hover:bg-green-950/50 hover:text-green-400 transition-colors"
    //                         onClick={() => setUserMenuOpen(false)}
    //                       >
    //                         <Settings size={18} />
    //                         Paramètres
    //                       </Link>
    //                     </div>

    //                     <div className="border-t border-green-900/30 py-1">
    //                       <Link
    //                         href="/logout"
    //                         method="post"
    //                         as="button"
    //                         className="w-full flex items-center gap-3 px-5 py-3.5 text-red-400 hover:bg-red-950/40 transition-colors"
    //                       >
    //                         <LogOut size={18} />
    //                         Déconnexion
    //                       </Link>
    //                     </div>
    //                   </motion.div>
    //                 )}
    //               </AnimatePresence>
    //             </div>
    //           ) : (
    //             <>
    //               <Link
    //                 href="/login"
    //                 className="text-gray-200 hover:text-green-400 font-medium text-lg transition-colors duration-200"
    //               >
    //                 Connexion
    //               </Link>

    //               <Link
    //                 href="/contact"
    //                 className="px-7 py-3.5 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
    //               >
    //                 Devis gratuit
    //               </Link>
    //             </>
    //           )}
    //         </div>

    //         <button
    //           type="button"
    //           className="lg:hidden text-white p-2 -mr-2 rounded-xl hover:bg-green-950/40 transition-colors"
    //           onClick={() => setMobileOpen(!mobileOpen)}
    //           aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
    //         >
    //           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Menu mobile */}
    //   <AnimatePresence>
    //     {mobileOpen && (
    //       <motion.div
    //         initial={{ opacity: 0, y: -10 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -10 }}
    //         transition={{ duration: 0.25 }}
    //         className="fixed inset-0 z-50 lg:hidden bg-neutral-950/98 backdrop-blur-md"
    //       >
    //         <div className="px-4 py-6 space-y-6">

    //           {/* Navigation */}
    //           <div className="space-y-3">
    //             {publicNavItems.map((item) => (
    //               <Link
    //                 key={item.href}
    //                 href={item.href}
    //                 onClick={() => setMobileOpen(false)}
    //                 className="block text-sm font-medium text-gray-300 hover:text-green-400 transition"
    //               >
    //                 {item.label}
    //               </Link>
    //             ))}
    //           </div>

    //           <div className="border-t border-neutral-800 pt-5">

    //             {auth?.user ? (
    //               <div className="space-y-4">

    //                 {/* User Card */}
    //                 <div className="flex items-center gap-3 bg-neutral-900 p-3 rounded-xl">
    //                   <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold text-white">
    //                     {auth.user.name.charAt(0).toUpperCase()}
    //                   </div>
    //                   <div>
    //                     <p className="text-sm font-semibold text-white">
    //                       {auth.user.name}
    //                     </p>
    //                     <p className="text-xs text-green-400">Connecté</p>
    //                   </div>
    //                 </div>

    //                 {/* Links */}
    //                 <div className="space-y-2 text-sm">

    //                   <Link
    //                     href="/dashboard"
    //                     prefetch
    //                     onClick={() => setMobileOpen(false)}
    //                     className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-800 transition text-gray-300"
    //                   >
    //                     <LayoutDashboard size={16} />
    //                     Dashboard
    //                   </Link>

    //                   <Link
    //                     href="/settings"
    //                     prefetch
    //                     onClick={() => setMobileOpen(false)}
    //                     className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-800 transition text-gray-300"
    //                   >
    //                     <Settings size={16} />
    //                     Paramètres
    //                   </Link>

    //                   <Link
    //                     href="/logout"
    //                     method="post"
    //                     as="button"
    //                     onClick={() => setMobileOpen(false)}
    //                     className="flex items-center gap-2 p-2 rounded-lg bg-red-900/30 hover:bg-red-900/50 text-red-400 w-full transition"
    //                   >
    //                     <LogOut size={16} />
    //                     Déconnexion
    //                   </Link>

    //                 </div>
    //               </div>
    //             ) : (
    //               <div className="space-y-3 text-sm">
    //                 <Link
    //                   href="/login"
    //                   onClick={() => setMobileOpen(false)}
    //                   className="block text-center py-2 bg-neutral-800 rounded-lg text-white font-medium hover:bg-neutral-700 transition"
    //                 >
    //                   Connexion
    //                 </Link>

    //                 <Link
    //                   href="/contact"
    //                   onClick={() => setMobileOpen(false)}
    //                   className="block text-center py-2 bg-green-600 rounded-lg text-white font-medium hover:bg-green-500 transition"
    //                 >
    //                   Devis gratuit
    //                 </Link>
    //               </div>
    //             )}

    //           </div>
    //         </div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>

    // </motion.header>

    <motion.header
  initial={{ y: -80 }}
  animate={{ y: scrolledDown ? -100 : 0 }}
  transition={{ duration: 0.35, ease: 'easeOut' }}
  className="fixed top-0 left-0 right-0 z-50"
>
  <div className="backdrop-blur-xl bg-black/70 border-b border-green-900/20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wide text-green-400">
            NJIMOLUXE
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {publicNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-green-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          {auth?.user ? (
            <Link
              href="/dashboard"
              className="text-sm px-4 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white transition"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-300 hover:text-green-400 transition"
              >
                Connexion
              </Link>

              <Link
                href="/contact"
                className="text-sm px-4 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white transition"
              >
                Devis
              </Link>
            </>
          )}

        </div>

      </div>
    </div>
  </div>
</motion.header>
  );
}


