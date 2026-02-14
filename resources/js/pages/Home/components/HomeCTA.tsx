import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion'; // Assure-toi d'installer framer-motion: npm install framer-motion
import { useState } from 'react';
export default function HomeCTA() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };



  return (

    <section className="py-24 md:py-32 bg-gradient-to-r from-green-950 to-green-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-6xl font-serif font-bold mb-8"
        >
          Transformez Votre Espace Avec Njimoluxe
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-sans"
        >
          Obtenez un devis personnalisé gratuit et découvrez comment nous pouvons sublimer votre intérieur.
        </motion.p>
        <Link
          prefetch
          href="/contact"
          className="inline-flex items-center px-12 py-6 bg-white text-green-900 hover:bg-gray-100 font-sans font-bold text-xl rounded-[7px] shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/50"
        >
          Demander Mon Devis Gratuit
        </Link>
      </div>
    </section>

  )
}