import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';


export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-gray-950 via-black to-emerald-950/60 overflow-hidden">
        <NavBar />
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/wood-dark-texture.jpg')] bg-cover mix-blend-overlay pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-6"
          >
            À propos de <span className="text-emerald-500">Ndjimolux</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Une histoire familiale, une passion pour le bois, et l’envie de créer des pièces qui traversent le temps.
          </motion.p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                Une passion qui dure depuis 2020
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
                Ndjimolux est née d’une envie simple : redonner ses lettres de noblesse au travail du bois à Douala. Fondée en 2010 par une famille d’artisans passionnés, l’entreprise a grandi autour d’un principe fondamental : chaque projet doit être une œuvre unique, réalisée avec soin et destinée à durer.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
                Aujourd’hui, nous sommes une équipe de 18 artisans qualifiés qui allient savoir-faire traditionnel camerounais et techniques modernes de menuiserie. Nos ateliers produisent des cuisines sur mesure, escaliers design, portes d’entrée majestueuses, meubles intemporels et agencements complets pour maisons, bureaux et hôtels.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Link
                  prefetch
                  href="/devis"
                  className="inline-flex px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-800/40 hover:scale-[1.03]"
                >
                  Démarrer votre projet avec nous →
                </Link>
              </motion.div>
            </motion.div>

            {/* Image + chiffres clés */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/30"
            >
              <img
                src="./4.jpeg"
                alt="Atelier Ndjimolux – artisans au travail"
                className="w-full h-auto object-cover aspect-[4/3] md:aspect-[5/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-5">
              Nos <span className="text-emerald-500">valeurs</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Ce qui guide chaque geste, chaque coupe, chaque finition.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              {
                title: "Qualité sans compromis",
                desc: "Sélection rigoureuse des bois nobles et finitions réalisées à la main.",
              },
              {
                title: "Sur mesure & personnalisation",
                desc: "Chaque projet est unique et pensé selon vos besoins et votre style.",
              },
              {
                title: "Respect de l’environnement",
                desc: "Bois certifiés et pratiques éco-responsables dans nos ateliers.",
              },
              {
                title: "Engagement & proximité",
                desc: "Accompagnement de A à Z et service après-vente attentif.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gray-900/60 border border-emerald-900/30 rounded-3xl p-8 text-center hover:border-emerald-600/50 transition-all duration-400 hover:shadow-xl hover:shadow-emerald-900/20"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* L’équipe */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Nos <span className="text-emerald-500">artisans</span>
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Des hommes et des femmes passionnés qui mettent leur cœur dans chaque projet.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "Joseph M.", role: "Fondateur & Chef d’atelier", photo: "" },
              { name: "Marie-Luce K.", role: "Designer & conceptrice", photo: "" },
              { name: "Paul-Eric T.", role: "Spécialiste finitions", photo: "" },
              { name: "Esther D.", role: "Responsable projets clients", photo: "" },
            ].map((person, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative rounded-3xl overflow-hidden bg-gray-900/50 border border-emerald-900/30 hover:border-emerald-600/50 transition-all duration-400 hover:shadow-2xl"
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-white">{person.name}</h3>
                  <p className="text-emerald-400 text-sm mt-1">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-950 to-black text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-8"
          >
            Prêt à écrire votre histoire avec nous ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-emerald-100/90 mb-10 max-w-3xl mx-auto"
          >
            Contactez-nous pour discuter de votre projet, obtenir un devis gratuit ou visiter nos réalisations.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/devis"
              className="inline-flex px-10 py-5 bg-white text-emerald-950 hover:bg-gray-100 font-bold rounded-full transition-all duration-300 hover:scale-[1.03] shadow-xl"
            >
              Demander un devis
            </Link>

            <Link
              href="/contact"
              className="inline-flex px-10 py-5 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-900/30 hover:text-emerald-300 font-semibold rounded-full transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}