import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

interface SocialLinks {
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  telegram?: string;
  twitter?: string;
  linkedin?: string;
}

interface SocialIconsProps {
  links: SocialLinks;
  className?: string;
}

const iconStyle =
  "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20";

export default function Icons({ links, className }: SocialIconsProps) {
  const socials = [
    { name: "whatsapp", url: links.whatsapp, icon: <FaWhatsapp size={22} /> },
    { name: "facebook", url: links.facebook, icon: <FaFacebook size={22} /> },
    { name: "instagram", url: links.instagram, icon: <FaInstagram size={22} /> },
    { name: "telegram", url: links.telegram, icon: <FaTelegram size={22} /> },
    { name: "twitter", url: links.twitter, icon: <FaXTwitter size={22} /> },
    { name: "linkedin", url: links.linkedin, icon: <FaLinkedin size={22} /> },
  ];

  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${className ?? ""}`}
    >
      {socials
        .filter((social) => social.url)
        .map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={iconStyle}
          >
            <span className="text-white">{social.icon}</span>
          </motion.a>
        ))}
    </div>
  );
}

/*
Installation:
npm install react-icons framer-motion

Utilisation:

<SocialIcons
  links={{
    whatsapp: "https://wa.me/237695748384",
    facebook: "https://facebook.com/tonprofil",
    instagram: "https://instagram.com/tonprofil",
    telegram: "https://t.me/tonprofil",
    twitter: "https://x.com/tonprofil",
    linkedin: "https://linkedin.com/in/tonprofil",
  }}
/>
*/
