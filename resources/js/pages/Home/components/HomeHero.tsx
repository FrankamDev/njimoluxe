import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion'; // Assure-toi d'installer framer-motion: npm install framer-motion
import { useState } from 'react';

export default function HomeHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-green-950 pt-20 overflow-hidden">
      {/* Texture bois overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/wood-texture.jpg')] bg-cover bg-center mix-blend-multiply pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-green-400 leading-none tracking-tight">
              NJIMOLUXE
              <span className="block text-green-500 mt-4">Artisanat du Bois</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 font-sans max-w-2xl leading-relaxed">
              Au cameroun, nous sculptons l'excellence en menuiserie sur mesure : meubles intemporels, cuisines ergonomiques, portes robustes et escaliers élégants en bois nobles.
            </p>
            <div className="md:mt-4 flex flex-col sm:flex-row gap-6">
              <Link
                prefetch
                href="/devis"
                className="inline-flex items-center justify-center px-10 py-5 bg-green-700 hover:bg-green-600 text-white text-lg font-sans font-bold rounded-[7px] transition-all duration-500 shadow-2xl hover:shadow-green-700/50 transform hover:scale-105"
              >
                Devis Gratuit
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-green-600 text-green-400 hover:bg-green-900/40 hover:text-green-300 text-lg font-sans font-bold rounded-[7px] transition-all duration-500"
              >
                Nos Réalisations
              </Link>
            </div>
          </motion.div>

          {/* Image hero avec scale animation */}
          <motion.div
            variants={fadeIn}
            className="hidden md:block relative rounded-[7px] overflow-hidden shadow-2xl border border-green-800/30"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Menuiserie Njimolux"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}