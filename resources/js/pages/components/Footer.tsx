// resources/js/components/Footer.tsx
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Icons from '../components/Icons';


export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-emerald-900/30 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          {/* Colonne 1 – Logo & courte description */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Link prefetch href="/" className="flex items-center gap-3 mb-6">


              <div className="w-11 h-11 flex items-center justify-center text-white font-bold text-2xl shadow-md">
                <img src="./njimoluxe.png" className='rounded' alt="" />
              </div>

              <span className="text-2xl font-serif font-extrabold text-green-400 tracking-tight">
                NJIMOLUXE
              </span>

            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Menuiserie d’exception à Yqoundé.
              Création sur mesure, finitions soignées, bois nobles et engagement qualité depuis 2020.
            </p>


            <Icons links={{

              whatsapp: "https://wa.me/237695748384",
              facebook: "https://facebook.com/njimoluxe",
              instagram: "https://instagram.com/njimoluxe",
              // telegram: "https://t.me/njimoluxe",
              // twitter: "https://x.com/njimoluxe",
              linkedin: "https://linkedin.com/in/njimoluxe",
            }} />

          </motion.div>

          {/* Colonne 2 – Navigation rapide */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-emerald-400 transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact & devis
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 3 – Services phares */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Nos spécialités</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/services#cuisines" className="hover:text-emerald-400 transition-colors">
                  Cuisines sur mesure
                </Link>
              </li>
              <li>
                <Link href="/services#portes" className="hover:text-emerald-400 transition-colors">
                  Portes & portails
                </Link>
              </li>
              <li>
                <Link prefetch href="/services#escaliers" className="hover:text-emerald-400 transition-colors">
                  Escalier & garde-corps
                </Link>
              </li>
              <li>
                <Link href="/services#meubles" className="hover:text-emerald-400 transition-colors">
                  Meubles personnalisés
                </Link>
              </li>
              <li>
                <Link href="/services#agencements" className="hover:text-emerald-400 transition-colors">
                  Agencements intérieurs
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 4 – Contact rapide */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Contactez-nous</h4>

            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📞</span>
                <div>
                  <a
                    href="tel:+237695748384"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    +237 695 74 83 84
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">Lun–Ven 8h–17h | Sam 9h–14h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">

                <a
                  href="https://wa.me/+237695748384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >

                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✉️</span>
                <a
                  href="mailto:njimoluxe@gmail.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  njimoluxe@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p>Rue des Artisans, Etoudi</p>
                  <p>Yaoundé – Cameroun</p>
                  <a
                    href="https://maps.google.com/?q=Etoudi+Yaounde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors mt-1 inline-block"
                  >
                    → Ouvrir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div >

      {/* Bottom bar */}
      < div className="border-t border-emerald-900/30 bg-black/70 py-6 text-center text-sm text-gray-500" >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} NJIMOLUXE – Tous droits réservés
          </p>
          <div className="mt-2 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-xs md:text-sm">
            <Link
              prefetch
              href="/mentions-legales" className="hover:text-emerald-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-emerald-400 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-emerald-400 transition-colors">
              Conditions générales
            </Link>
          </div>
        </div>


      </ div>
    </footer >
  );
}