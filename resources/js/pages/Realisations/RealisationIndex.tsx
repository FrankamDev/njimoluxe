
import { motion } from 'framer-motion';
import './gallery.css'

// Tous les imports CSS de LightGallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-share.css';

// Plugins LightGallery
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

import { useState } from "react";
import NavBar from '../components/NavBar';
import Icons from '@/components/Icons';

import { Head } from "@inertiajs/react";


const realisationsData = [
  { id: 1, title: 'Cuisine moderne en bois', slug: 'cuisine-moderne', category: 'cuisine', image_url: '/r1.jpeg', description: 'Cuisine complète avec finitions premium.' },
  { id: 2, title: 'Porte d\'entrée sculptée', slug: 'porte-entree', category: 'porte', image_url: '/r2.jpeg', description: 'Porte robuste et esthétique.' },
  { id: 3, title: 'Escalier en chêne', slug: 'escalier-chene', category: 'escalier', image_url: '/r3.jpeg', description: 'Escalier sur mesure avec rampe.' },
  { id: 4, title: 'Meuble TV design', slug: 'meuble-tv', category: 'meuble', image_url: '/r4.jpeg', description: 'Meuble multimédia intégré.' },
  { id: 5, title: 'Agencement bureau', slug: 'agencement-bureau', category: 'agencement', image_url: '/r5.jpeg', description: 'Optimisation d\'espace professionnel.' },
  { id: 6, title: 'Rénovation salon', slug: 'renovation-salon', category: 'renovation', image_url: '/r6.jpeg', description: 'Rénovation complète avec bois naturel.' },
  { id: 7, title: 'Cuisine intégrée', slug: 'cuisine-integree', category: 'cuisine', image_url: '/r7.jpeg', description: 'Cuisine fonctionnelle et élégante.' },
  { id: 8, title: 'Porte coulissante', slug: 'porte-coulissante', category: 'porte', image_url: '/r8.jpeg', description: 'Porte gain de place.' },
  { id: 9, title: 'Escalier hélicoïdal', slug: 'escalier-helicoidal', category: 'escalier', image_url: '/r9.jpeg', description: 'Design moderne et compact.' },
  { id: 10, title: 'Meuble de rangement', slug: 'meuble-rangement', category: 'meuble', image_url: '/r10.jpeg', description: 'Meuble polyvalent.' },
  { id: 11, title: 'Agencement cuisine', slug: 'agencement-cuisine', category: 'agencement', image_url: '/r11.jpeg', description: 'Aménagement sur mesure.' },
  { id: 12, title: 'Rénovation chambre', slug: 'renovation-chambre', category: 'renovation', image_url: '/r12.jpeg', description: 'Transformation totale.' },
  // Ajoute plus d'images ici si nécessaire, ex:
  // { id: 13, title: '...', slug: '...', category: '...', image_url: '/r13.jpeg', description: '...' },
];

export default function RealisationIndex() {


  const projects = realisationsData;

  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [sort, setSort] = useState<'recent' | 'oldest' | 'alpha'>('recent');

  // Filtrage par catégorie
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  // Tri
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === 'alpha') return a.title.localeCompare(b.title);
    if (sort === 'oldest') return a.id - b.id;
    return b.id - a.id; // recent
  });

  const categories = [
    { value: 'all', label: 'Toutes' },
    { value: 'cuisine', label: 'Cuisines' },
    { value: 'porte', label: 'Portes' },
    { value: 'escalier', label: 'Escaliers' },
    { value: 'meuble', label: 'Meubles' },
    { value: 'agencement', label: 'Agencements' },
    { value: 'renovation', label: 'Rénovations' },
  ];

  return (
    <>
      <NavBar />
      <Head title="Nos Réalisations – Ndjimolux Menuiserie Yaoundé" />

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-950 via-black to-emerald-950/70">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/wood-texture-dark.jpg')] bg-cover mix-blend-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6  text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-4"
          >
            Nos <span className="text-emerald-500">Réalisations</span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
            <p className="text-lg">
              {sortedProjects.length} projet{sortedProjects.length !== 1 ? 's' : ''}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'masonry' ? 'grid' : 'masonry')}
                className="px-4 py-2 bg-gray-800 hover:bg-emerald-900/60 rounded-lg text-sm font-medium transition-colors"
              >
                {viewMode === 'masonry' ? 'Vue grille' : 'Vue masonry'}
              </button>

              <select
                value={sort}
                onChange={e => setSort(e.target.value as 'recent' | 'oldest' | 'alpha')}
                className="px-4 py-2 bg-gray-800 border border-emerald-900/50 rounded-lg text-sm text-white"
              >
                <option value="recent">Plus récent</option>
                <option value="oldest">Plus ancien</option>
                <option value="alpha">Alphabétique</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres sticky – exactement comme avant */}
      <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-lg border-b border-emerald-900/40 py-5">
        <div className="max-w-7xl px-5 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-3 sm:gap-4 justify-center min-w-max">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all whitespace-nowrap ${filter === cat.value
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-gray-900/70 text-gray-300 hover:bg-emerald-900/60 border border-emerald-900/50'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* La galerie : exactement le style et le comportement de ton composant Gallery */}
      <div className="">
        <h2 className='text-white text-center text-2xl font-bold '>Cliquer pour agrandir l'image</h2>
      </div>
      <section className="py-10 md:py-16 bg-black">
        <div className="max-w-[1800px]  px-4 sm:px-6 lg:px-8">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgRotate, lgShare, lgAutoplay, lgFullscreen]}
            thumbnail={true}
            zoom={true}
            rotate={true}
            share={true}
            fullScreen={true}
            autoplay={false}
            download={true}
            counter={true}
          >
            {sortedProjects.map((project) => (
              <a
                key={project.id}
                href={project.image_url}
                className="block"
                // Tu peux ajouter des infos dans la lightbox si tu veux
                data-sub-html={`<h4>${project.title}</h4><p>${project.description}</p>`}
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </section>
    </>
  )
}