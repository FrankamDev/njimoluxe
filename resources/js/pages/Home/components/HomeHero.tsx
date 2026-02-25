import { Head, Link } from '@inertiajs/react'
import { motion } from 'framer-motion'

export default function HomeHero() {

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 }
    }
  }

  const itemFadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.08, filter: "brightness(0.7)" },
    visible: { opacity: 1, scale: 1, filter: "brightness(1)", transition: { duration: 1.4, ease: "easeOut" } }
  }

  return (
    <>
      <Head title="NJIMOLUXE – Menuiserie d'exception sur mesure" />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-emerald-950">

        {/* Texture bois subtile + grain */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/wood-grain-dark.jpg')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Overlay gradient radial pour focus centre */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60" />

        {/* Contenu principal */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24">

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center"
          >

            {/* Colonne texte */}
            <div className="space-y-8 md:space-y-10 text-center lg:text-left">

              <motion.div variants={itemFadeUp}>
                <span className="inline-block px-4 py-1.5 text-sm font-medium tracking-widest uppercase text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/40 rounded-full">
                  Artisanat d’exception depuis 2015
                </span>
              </motion.div>

              <motion.h1
                variants={itemFadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none"
              >
                <span className="text-white">NJIMO</span>
                <span className="text-emerald-500">LUXE</span>
              </motion.h1>

              <motion.p
                variants={itemFadeUp}
                className="text-xl sm:text-2xl font-medium text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Menuiserie sur mesure d’exception
              </motion.p>

              <motion.p
                variants={itemFadeUp}
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Création de meubles, cuisines équipées, dressings, escaliers, portes et agencements intérieurs en bois massif et nobles essences. Chaque pièce est pensée, dessinée et réalisée avec passion et précision.
              </motion.p>

              <motion.div
                variants={itemFadeUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start pt-4"
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-4 text-base md:text-lg font-semibold
                    bg-gradient-to-r from-emerald-700 to-emerald-600
                    hover:from-emerald-600 hover:to-emerald-500
                    text-white rounded-lg shadow-xl shadow-emerald-900/30
                    transition-all duration-300 hover:shadow-emerald-700/40 hover:scale-[1.02] active:scale-[0.98]
                  "
                >
                  Demander votre devis personnalisé
                </Link>

                <Link
                  href="/realisations"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-4 text-base md:text-lg font-semibold
                    border-2 border-emerald-600/70 text-emerald-400
                    hover:bg-emerald-950/30 hover:border-emerald-500
                    rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20
                  "
                >
                  Découvrir nos réalisations
                </Link>
              </motion.div>

              {/* Petits badges confiance */}
              <motion.div
                variants={itemFadeUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">★</span> Garantie 10 ans
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">●</span> Bois certifié PEFC
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Fabrication française
                </div>
              </motion.div>
            </div>

            {/* Colonne image – visible à partir de lg */}
            <motion.div
              variants={imageVariants}
              className="relative hidden lg:block rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-emerald-900/30"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=90"
                alt="Menuiserie sur mesure NJIMOLUXE – Cuisine bois massif"
                className="w-full h-[620px] xl:h-[680px] object-cover scale-105 transition-transform duration-[20s] hover:scale-110"
              />

              {/* Badge flottant sur l'image */}
              <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-5 py-3 rounded-lg border border-emerald-800/40 text-white text-sm font-medium shadow-lg">
                Projets menuiserie massif – 2026
              </div>
            </motion.div>

            {/* Version mobile de l'image – plus petite et centrée */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:hidden relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-emerald-900/30 mx-auto max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=85"
                alt="Menuiserie NJIMOLUXE"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll down indicator – très discret */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-emerald-400/60 animate-bounce-slow">
          <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </section>
    </>
  )
}