import { Head, useForm } from "@inertiajs/react";
import { motion } from 'framer-motion';
import { useState } from "react";
import Icons from "../components/Icons";
import NavBar from "../components/NavBar";
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

  const submit = (e: FormEvent) => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <Head title="Contactez Ndjimolux – Menuiserie sur mesure à Yaoundé" />
      <NavBar />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-gray-950 via-black to-emerald-950/70 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] bg-cover bg-center mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/images/wood-atelier-bg.jpg')" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-5"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discutons de votre projet. Devis gratuit, conseils personnalisés, prise de rendez-vous atelier.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulaire */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="bg-gray-900/60 border border-emerald-900/40 rounded-3xl p-8 md:p-10 shadow-xl">
                {success ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">🎉</div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                      Merci pour votre message !
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Nous avons bien reçu votre demande.<br />
                      Vous allez recevoir un email de confirmation dans quelques instants.
                    </p>
                    <p className="text-emerald-400">
                      Nous vous recontactons très rapidement (24-48h maximum).
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={data.name}
                          onChange={(e) => setData('name', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                          required
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
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
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                          required
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Ville / Quartier</label>
                        <input
                          type="text"
                          value={data.city}
                          onChange={(e) => setData('city', e.target.value)}
                          placeholder="Ex: Bonanjo, Akwa, Deido..."
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Type de projet <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={data.project_type}
                          onChange={(e) => setData('project_type', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                          required
                        >
                          <option value="">Choisir...</option>
                          <option value="cuisine">Cuisine sur mesure</option>
                          <option value="porte">Portes / Portails</option>
                          <option value="escalier">Escalier / Garde-corps</option>
                          <option value="meuble">Meuble sur mesure</option>
                          <option value="agencement">Agencement intérieur (dressing, bibliothèque...)</option>
                          <option value="renovation">Rénovation / Restauration bois</option>
                          <option value="autre">Autre projet</option>
                        </select>
                        {errors.project_type && (
                          <p className="mt-1 text-sm text-red-400">{errors.project_type}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Budget approximatif</label>
                        <select
                          value={data.budget}
                          onChange={(e) => setData('budget', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                        >
                          <option value="">Je ne sais pas encore</option>
                          <option value="<2m">Moins de 2 000 000 FCFA</option>
                          <option value="2-5m">2 000 000 – 5 000 000 FCFA</option>
                          <option value="5-10m">5 000 000 – 10 000 000 FCFA</option>
                          <option value=">10m">Plus de 10 000 000 FCFA</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                          Quand souhaitez-vous commencer ?
                        </label>
                        <select
                          value={data.start_when}
                          onChange={(e) => setData('start_when', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                        >
                          <option value="">Choisir...</option>
                          <option value="urgent">Dès que possible</option>
                          <option value="1-3m">Dans 1 à 3 mois</option>
                          <option value="3-6m">Dans 3 à 6 mois</option>
                          <option value="later">Dans plus de 6 mois</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Comment avez-vous connu Ndjimolux ?
                      </label>
                      <select
                        value={data.how_know_us}
                        onChange={(e) => setData('how_know_us', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500"
                      >
                        <option value="">Choisir...</option>
                        <option value="bouche">Bouche à oreille / recommandation</option>
                        <option value="google">Recherche Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">TikTok</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Votre message / détails du projet <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        placeholder="Décrivez-nous votre projet, vos idées, vos contraintes..."
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-emerald-500 resize-y"
                        required
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="urgent"
                        checked={data.urgent}
                        onChange={(e) => setData('urgent', e.target.checked)}
                        className="w-5 h-5 text-emerald-600 bg-gray-800 border-gray-700 rounded focus:ring-emerald-500"
                      />
                      <label htmlFor="urgent" className="ml-3 text-gray-300">
                        Je souhaite être rappelé dans les 24h (urgence)
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={processing}
                      className={`w-full py-4 px-8 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-800/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${processing ? 'animate-pulse' : ''
                        }`}
                    >
                      {processing ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Coordonnées + réseaux */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                  Discutons de votre projet
                </h3>

                <div className="space-y-6 text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <p className="font-medium">Téléphone / WhatsApp</p>
                      <a
                        href="https://wa.me/237695748384"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        +237 6 95 74 83 84
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:njimoluxe@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                        njimoluxe@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p>Rue des Artisans, Bonamoussadi – Douala</p>
                      <a
                        href="https://maps.google.com/?q=Rue+des+Artisans+Etoudi+Yaounde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 text-sm"
                      >
                        Voir sur Google Maps →
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">Horaires d’ouverture</p>
                    <p className="text-gray-400">
                      Lundi – Vendredi : 8h – 17h<br />
                      Samedi : 9h – 14h<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-serif text-white mb-4">Suivez-nous</h4>

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
      </section>
    </>
  )
}