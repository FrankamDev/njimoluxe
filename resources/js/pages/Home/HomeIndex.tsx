import { Head, usePage } from "@inertiajs/react";
import WhatsApp from "@/components/Whatsapp";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomeCTA from "./components/HomeCTA";
import HomeHero from "./components/HomeHero";
import HomeRealisations from "./components/HomeRealisations";
import HomeServices from "./components/HomeServices";

export default function HomeIndex() {
  return (
    <div>
      <Head title="Njimoluxe - Menuiserie d'Excellence à Yaoundé" />
      <meta
        name="description"
        content="Njimoluxe : Spécialiste en menuiserie sur mesure à Yaoundé. Meubles, cuisines, portes, escaliers en bois noble. Qualité artisanale et finitions impeccables."
      />

      <HomeHero />
      <HomeServices />
      <HomeRealisations />
      <HomeCTA />
      <WhatsApp />
      <Footer />
    </div>
  )
}
