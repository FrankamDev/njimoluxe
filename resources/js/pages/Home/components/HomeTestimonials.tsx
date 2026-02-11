import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion'; // Assure-toi d'installer framer-motion: npm install framer-motion
import { useState } from 'react';

export default function HomeTestimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            Ce Que Disent Nos <span className="text-green-500">Clients</span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { name: "Marie T.", text: "Travail impeccable sur notre cuisine. Délais respectés et finitions parfaites !", rating: 5 },
            { name: "Jean-Paul K.", text: "Escalier sur mesure qui a transformé notre maison. Équipe professionnelle et à l'écoute.", rating: 5 },
            { name: "Sophie M.", text: "Meubles de qualité supérieure. Je recommande Njimolux sans hésiter.", rating: 5 },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-gray-900/50 border border-green-900/30 rounded-[7px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-yellow-400 mb-4">{Array(testimonial.rating).fill('★').join(' ')}</div>
              <p className="text-gray-300 font-sans mb-6 italic">"{testimonial.text}"</p>
              <p className="text-white font-sans font-bold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}