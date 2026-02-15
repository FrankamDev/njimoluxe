
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion'; // Assure-toi d'installer framer-motion: npm install framer-motion
import { useState } from 'react';
export default function HomeServices() {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };
  return (
    <>
      <section className="py-24 md:py-32 bg-gradient-to-br from-green-950 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Nos <span className="text-green-500">Services Premium</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              Des solutions sur mesure adaptées à vos besoins résidentiels ou commerciaux, avec un accent sur la durabilité et l'esthétique.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                title: "Cuisines Sur Mesure",
                desc: "Conception ergonomique, matériaux résistants à l'humidité, intégration d'appareils high-tech. Styles : moderne, rustique, minimaliste.",
                icon: "🍳",
                img: "cuisine.jpeg"
              },
              {
                title: "Portes & Fenêtres",
                desc: "Isolation thermique et phonique, designs sécurisés, finitions anti-UV. Options : bois massif, vitrage double.",
                icon: "🚪",
                img: "portes.jpeg"
              },
              {
                title: "Escaliers & Balustrades",
                desc: "Structures solides, designs personnalisés (hélicoïdal, flottant). Matériaux : bois, métal, verre.",
                icon: "🪜",
                img: "./1.jpeg"
              },
              {
                title: "Meubles Personnalisés",
                desc: "Armoires, lits, tables en bois précieux. Finitions : vernis mat, huilé ou laqué.",
                icon: "🛋️",
                img: "./4.jpeg"
              },
              {
                title: "Agencements Intérieurs",
                desc: "Bibliothèques, dressings, bureaux intégrés. Optimisation d'espace pour petits et grands volumes.",
                icon: "🏠",
                img: "./5.jpeg"
              },
              {
                title: "Rénovation Bois",
                desc: "Restauration de parquets anciens, ponçage, vitrification. Expertise en patrimoine.",
                icon: "🔨",
                img: "./3.jpeg"
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative bg-gray-900/70 border border-green-900/40 rounded-[7px] overflow-hidden shadow-xl hover:shadow-2xl hover:border-green-600/60 transition-all duration-500"
              >
                <img src={service.img} alt={service.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <div className="text-4xl mb-2 text-white">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 font-sans">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-10 py-5 bg-green-700 hover:bg-green-600 text-white font-sans font-bold rounded-[7px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              Explorer Tous les Services →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}