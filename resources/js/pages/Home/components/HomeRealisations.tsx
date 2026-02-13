import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const realisations = [
  {
    id: 1,
    img: '/r1.jpeg',
    title: "Projet de Lux",
    description: "Cuisine moderne en teck, Cameroun 2023",
  },
  {
    id: 2,
    img: '/r2.jpeg',
    title: "Projet Prestige",
    description: "Salle de bain design, Douala 2023",
  },
  {
    id: 3,
    img: '/r3.jpeg',
    title: "Projet Élégance",
    description: "Salon moderne avec bois naturel, Yaoundé 2023",
  },
];

export default function HomeRealisations() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            Nos <span className="text-green-500">Réalisations</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
            Découvrez nos projets phares qui allient fonctionnalité et élégance.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {realisations.map((real) => (
            <motion.div
              key={real.id}
              variants={fadeIn}
              className="relative rounded-lg overflow-hidden shadow-2xl group"
            >
              <img
                src={real.img}
                alt={real.title}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">{real.title}</h3>
                  <p className="text-gray-300 font-sans">{real.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-16"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center px-10 py-5 border-2 border-green-600 text-green-400 hover:bg-green-700 hover:text-white font-sans font-bold rounded-lg transition-all duration-300 text-lg"
          >
            Voir la Galerie Complète →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
