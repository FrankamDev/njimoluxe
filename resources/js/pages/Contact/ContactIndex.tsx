import { Head, useForm } from "@inertiajs/react";
import { motion } from 'framer-motion';
import { useState } from "react";
import Icons from "../components/Icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactIndex() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    phone: '',
    email: '',
    city: '',
    project_type: '',
    budget: '',
    start_when: '',
    how_know_us: '',
    message: '',
    urgent: false,
  });

  const [success, setSuccess] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      onSuccess: () => {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 8000);
      },
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      <Head title="Contactez NJIMOLUXE – Menuiserie sur mesure à Yaoundé" />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-gray-950 via-black to-emerald-950/80 overflow-hidden">
        <NavBar />
        <div
          className="absolute inset-0 opacity-[0.08] bg-cover bg-center mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/images/wood-atelier-bg.jpg')" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-5 tracking-tight"
          >
            Nous contacter
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Partagez votre projet. Obtenez un devis gratuit et des conseils experts pour votre menuiserie sur mesure.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24">
            {/* Formulaire */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-900/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/50">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-10 sm:py-12"
                  >
                    <div className="text-5xl sm:text-6xl mb-6 animate-bounce">🎉</div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                      Nous avons reçu votre demande. Un email de confirmation vous a été envoyé.
                    </p>
                    <p className="text-emerald-400 text-sm sm:text-base">
                      Notre équipe vous recontacte sous 24-48h. Merci pour votre confiance !
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-5 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm"
                          required
                          placeholder="Votre nom"
                        />
                        {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={data.phone}
                          onChange={(e) => setData('phone', e.target.value)}
                          placeholder="Ex: 6XX XXX XXX"
                          className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm"
                          required
                        />
                        {errors.phone && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm"
                        required
                      />
                      {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Ville / Quartier</label>
                        <input
                          type="text"
                          value={data.city}
                          onChange={(e) => setData('city', e.target.value)}
                          placeholder="Ex: Yaoundé - Etoudi"
                          className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Type de projet <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={data.project_type}
                          onChange={(e) => setData('project_type', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm appearance-none"
                          required
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="cuisine">Cuisine sur mesure</option>
                          <option value="porte">Portes / Portails</option>
                          <option value="escalier">Escalier / Garde-corps</option>
                          <option value="meuble">Meuble sur mesure</option>
                          <option value="agencement">Agencement intérieur</option>
                          <option value="renovation">Rénovation bois</option>
                          <option value="autre">Autre</option>
                        </select>
                        {errors.project_type && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.project_type}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Budget approximatif</label>
                        <select
                          value={data.budget}
                          onChange={(e) => setData('budget', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm appearance-none"
                        >
                          <option value="">Pas encore défini</option>
                          <option value="<2m">&lt; 2 000 000 FCFA</option>
                          <option value="2-5m">2-5 000 000 FCFA</option>
                          <option value="5-10m">5-10 000 000 FCFA</option>
                          <option value=">10m">&gt; 10 000 000 FCFA</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Début du projet
                        </label>
                        <select
                          value={data.start_when}
                          onChange={(e) => setData('start_when', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm appearance-none"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="urgent">Dès que possible</option>
                          <option value="1-3m">1-3 mois</option>
                          <option value="3-6m">3-6 mois</option>
                          <option value="later">&gt; 6 mois</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Comment nous avez-vous connus ?
                      </label>
                      <select
                        value={data.how_know_us}
                        onChange={(e) => setData('how_know_us', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm appearance-none"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="bouche">Recommandation</option>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">TikTok</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Détails de votre projet <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        placeholder="Décrivez votre idée, vos besoins, vos inspirations..."
                        className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all duration-300 shadow-sm resize-y"
                        required
                      />
                      {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.message}</p>}
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="urgent"
                        checked={data.urgent}
                        onChange={(e) => setData('urgent', e.target.checked)}
                        className="w-5 h-5 text-emerald-600 bg-gray-800 border-gray-700 rounded focus:ring-emerald-500 focus:ring-offset-gray-900"
                      />
                      <label htmlFor="urgent" className="text-sm text-gray-300">
                        Projet urgent (rappel sous 24h)
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={processing}
                      className={`
                        w-full py-4 px-6 sm:py-5 sm:px-8 bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500
                        text-white font-semibold rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-700/40
                        transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
                        ${processing ? 'animate-pulse' : ''}
                      `}
                    >
                      {processing ? 'Envoi...' : 'Envoyer ma demande'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Coordonnées */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2 space-y-8 lg:space-y-10 text-gray-300"
            >
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-5 sm:mb-6">
                Prenez contact avec nos experts
              </h3>

              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg">
                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl mt-1 text-emerald-500">📞</div>
                  <div>
                    <p className="font-medium text-white">Téléphone / WhatsApp</p>
                    <a
                      href="https://wa.me/237695748384"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors block"
                    >
                      +237 6 95 74 83 84
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl mt-1 text-emerald-500">✉️</div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:njimoluxe@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      njimoluxe@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl sm:text-3xl mt-1 text-emerald-500">📍</div>
                  <div>
                    <p className="font-medium text-white">Adresse</p>
                    <p>Rue des Artisans, Etoudi – Yaoundé</p>
                    <a
                      href="https://maps.google.com/?q=Rue+des+Artisans+Etoudi+Yaounde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 text-sm sm:text-base block mt-1"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-white mb-2">Horaires</p>
                  <p>
                    Lundi – Vendredi : 8h – 17h<br />
                    Samedi : 9h – 14h<br />
                    Dimanche : Fermé
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <h4 className="text-xl sm:text-2xl font-serif text-white mb-4">Suivez-nous</h4>
                <Icons
                  links={{
                    whatsapp: "https://wa.me/237695748384",
                    facebook: "https://facebook.com/njimoluxe",
                    instagram: "https://instagram.com/njimoluxe",
                    telegram: "https://t.me/njimoluxe",
                    twitter: "https://x.com/njimoluxe",
                    linkedin: "https://linkedin.com/in/njimoluxe",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  )
}