
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
  { label: 'Devis', href: '/devis' },
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


