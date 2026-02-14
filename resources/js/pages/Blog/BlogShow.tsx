// import { Head, Link } from '@inertiajs/react';
// import { useEffect, useState, useRef } from 'react';
// import NavBar from '../components/NavBar';
// import './blog.css';

// export default function BlogShow({ article, similar, urls }) {
//   const [toc, setToc] = useState([]);
//   const [activeId, setActiveId] = useState('');
//   const contentRef = useRef<HTMLDivElement>(null);

//   // Générer le sommaire et ajouter les IDs aux h2/h3
//   useEffect(() => {
//     if (!article.content) return;

//     const parser = new DOMParser();
//     const doc = parser.parseFromString(article.content, 'text/html');
//     const headings = doc.querySelectorAll('h2, h3');

//     const tocItems = Array.from(headings).map((heading, index) => {
//       const id = `heading-${index}`;
//       heading.id = id;
//       return {
//         id,
//         text: heading.textContent?.trim() || '',
//         level: heading.tagName === 'H2' ? 2 : 3,
//       };
//     });

//     setToc(tocItems);

//     if (contentRef.current) {
//       contentRef.current.innerHTML = doc.body.innerHTML;
//     }
//   }, [article.content]);

//   // Scroll listener pour titre actif
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 150; // offset navbar
//       let current = '';

//       toc.forEach((item) => {
//         const element = document.getElementById(item.id);
//         if (element && element.offsetTop <= scrollPosition) {
//           current = item.id;
//         }
//       });

//       setActiveId(current);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [toc]);

//   return (
//     <>
//       <Head>
//         <title>{article.title}</title>
//         <meta name="description" content={article.excerpt || "Découvrez cet article sur NJIMOLUXE"} />
//         <meta name="keywords" content={article.tags?.map(t => t.name).join(', ')} />
//       </Head>

//       <div className="">

//         <div className="bg-black text-white sm:mt-34 lg:pt-42 min-h-screen">
//           <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

//             {/* Sommaire desktop */}
//             {toc.length > 0 && (
//               <aside className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0 border-r border-green-900/30 bg-black/80 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto py-8 px-6">
//                 <h3 className="text-lg font-bold text-green-400 mb-6 uppercase tracking-wider">Sommaire</h3>
//                 <nav className="space-y-2 text-sm">
//                   {toc.map((item) => (
//                     <a
//                       key={item.id}
//                       href={`#${item.id}`}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                       }}
//                       className={`block py-1.5 transition-colors ${activeId === item.id
//                         ? 'text-green-400 font-medium pl-4 border-l-2 border-green-500'
//                         : 'text-slate-400 hover:text-green-300 pl-4'
//                         } ${item.level === 3 ? 'pl-8' : ''}`}
//                     >
//                       {item.text}
//                     </a>
//                   ))}
//                 </nav>
//               </aside>
//             )}

//             {/* Contenu principal */}
//             <main className="flex-1">
//               <div className="max-w-4xl mx-auto lg:py-16">
//                 {/* Retour */}
//                 <Link
//                   prefetch
//                   href={urls.blog_index}
//                   className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 text-2xl font-medium"
//                 >
//                   ← Retour au blog
//                 </Link>

//                 {/* Titre */}
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">{article.title}</h1>

//                 {/* Meta */}
//                 <div className="flex flex-wrap items-center gap-4 text-green-300/80 text-sm mb-10">
//                   <span>Par {article.user?.name || 'Équipe NJIMOLUXE'}</span>
//                   <span>•</span>
//                   <time dateTime={article.published_at}>
//                     {new Date(article.published_at).toLocaleDateString('fr-FR', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                       hour: 'numeric',
//                       minute: '2-digit'
//                     })}
//                   </time>
//                 </div>

//                 {/* Catégories & tags */}
//                 <div className="flex flex-wrap gap-2 mb-12">
//                   {article.categories?.map((cat) => (
//                     <span
//                       key={cat.id}
//                       className="px-3 py-1 bg-green-950/60 text-green-300 text-xs font-medium rounded-full border border-green-900/40"
//                     >
//                       {cat.name}
//                     </span>
//                   ))}
//                   {article.tags?.map((tag) => (
//                     <span
//                       key={tag.id}
//                       className="px-3 py-1 bg-slate-900/60 text-slate-300 text-xs font-medium rounded-full border border-slate-800"
//                     >
//                       #{tag.name}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Sommaire mobile */}
//                 {toc.length > 0 && (
//                   <details className="lg:hidden mb-16 bg-slate-950 rounded-[6px] border border-slate-800 shadow-xl group overflow-hidden">

//                     <summary className="flex items-center justify-between px-7 py-6 text-green-400 font-semibold text-base tracking-wide cursor-pointer select-none border-b border-slate-800">
//                       <span className="uppercase tracking-wider">Sommaire de l’article</span>
//                       <span className="text-xl transition-transform duration-300 group-open:rotate-180">
//                         ▾
//                       </span>
//                     </summary>

//                     <div className="px-7 py-6 space-y-5">
//                       {toc.map((item) => (
//                         <a
//                           key={item.id}
//                           href={`#${item.id}`}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             document.getElementById(item.id)?.scrollIntoView({
//                               behavior: 'smooth',
//                               block: 'start',
//                             });
//                           }}
//                           className={`block leading-relaxed transition-all duration-200 ${activeId === item.id
//                             ? 'text-green-400 font-medium border-l-2 border-green-500 pl-4'
//                             : 'text-slate-400 hover:text-green-300'
//                             } ${item.level === 3 ? 'ml-6 text-sm' : 'text-base'}`}
//                         >
//                           {item.text}
//                         </a>
//                       ))}
//                     </div>

//                   </details>


//                 )}

//                 {/* Contenu riche */}
//                 <div
//                   ref={contentRef}
//                   className="rich-content prose prose-invert prose-headings:text-white prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-green-600 prose-blockquote:text-slate-300 max-w-none"
//                 />

//                 {/* Articles similaires */}
//                 {similar?.length > 0 && (
//                   <div className="mt-20 pt-12 border-t border-green-900/30">
//                     <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Articles similaires</h2>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {similar.map((sim) => (
//                         <Link
//                           key={sim.id}
//                           href={`${urls.blog_show}${sim.slug}`}
//                           className="group bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
//                         >
//                           {sim.image_url && (
//                             <img
//                               src={sim.image_url}
//                               alt={sim.title}
//                               className="w-full aspect-video object-cover"
//                               loading="lazy"
//                             />
//                           )}
//                           <div className="p-5">
//                             <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors line-clamp-2">
//                               {sim.title}
//                             </h3>
//                             <p className="mt-3 text-sm text-slate-400 line-clamp-2">
//                               {sim.excerpt || 'Lire la suite...'}
//                             </p>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






// import { Head, Link } from '@inertiajs/react';
// import { useEffect, useState, useRef } from 'react';
// import NavBar from '../components/NavBar';
// import './blog.css';

// export default function BlogShow({ article, similar, urls }) {
//   const [toc, setToc] = useState([]);
//   const [activeId, setActiveId] = useState('');
//   const contentRef = useRef<HTMLDivElement>(null);

//   // Générer sommaire + IDs
//   useEffect(() => {
//     if (!article.content) return;

//     const parser = new DOMParser();
//     const doc = parser.parseFromString(article.content, 'text/html');
//     const headings = doc.querySelectorAll('h2, h3');

//     const tocItems = Array.from(headings).map((h, i) => {
//       const id = `h-${i}`;
//       h.id = id;
//       return {
//         id,
//         text: h.textContent?.trim() || '',
//         level: h.tagName === 'H2' ? 2 : 3,
//       };
//     });

//     setToc(tocItems);

//     if (contentRef.current) {
//       contentRef.current.innerHTML = doc.body.innerHTML;
//     }
//   }, [article.content]);

//   // Détection titre actif au scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const pos = window.scrollY + 120; // offset navbar
//       let current = '';

//       toc.forEach((item) => {
//         const el = document.getElementById(item.id);
//         if (el && el.offsetTop <= pos) current = item.id;
//       });

//       setActiveId(current);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [toc]);
//   useEffect(() => {
//     return () => {
//       // reset ou nettoyage des styles globaux si nécessaire
//       document.body.style.background = "";
//     };
//   }, []);
//   return (
//     <>
//       <Head title={article.title} />

//       <NavBar />

//       <div className="min-h-screen bg-black text-white">
//         <div className="flex flex-col lg:flex-row">
//           {/* Sommaire desktop – sticky gauche */}
//           {toc.length > 0 && (
//             <aside className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0 border-r border-green-900/30 bg-black sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 px-6">
//               <h3 className="text-base font-semibold text-green-400 mb-5 uppercase tracking-wide">
//                 Sommaire
//               </h3>
//               <nav className="space-y-1.5 text-sm">
//                 {toc.map((item) => (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                     }}
//                     className={`block py-1.5 transition-colors duration-200 ${activeId === item.id
//                       ? 'text-green-400 font-medium pl-4 border-l-2 border-green-500'
//                       : 'text-slate-400 hover:text-green-300 pl-4'
//                       } ${item.level === 3 ? 'pl-8' : ''}`}
//                   >
//                     {item.text}
//                   </a>
//                 ))}
//               </nav>
//             </aside>
//           )}

//           {/* Contenu principal */}
//           <main className="flex-1">
//             <div className="w-full px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
//               {/* Retour */}
//               <Link
//                 href={urls.blog_index}
//                 className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium mb-8"
//               >
//                 ← Retour au blog
//               </Link>

//               {/* Titre */}
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
//                 {article.title}
//               </h1>

//               {/* Meta */}
//               <div className="flex flex-wrap items-center gap-4 text-green-300/70 text-sm mb-10">
//                 <span>Par {article.user?.name || 'NJIMOLUXE'}</span>
//                 <span>•</span>
//                 <time>
//                   {new Date(article.published_at).toLocaleDateString('fr-FR', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric',
//                   })}
//                 </time>
//               </div>

//               {/* Catégories & tags */}
//               <div className="flex flex-wrap gap-2 mb-12">
//                 {article.categories?.map((cat) => (
//                   <span
//                     key={cat.id}
//                     className="px-3 py-1 bg-green-950/50 text-green-300 text-xs font-medium rounded-full border border-green-900/40"
//                   >
//                     {cat.name}
//                   </span>
//                 ))}
//                 {article.tags?.map((tag) => (
//                   <span
//                     key={tag.id}
//                     className="px-3 py-1 bg-slate-900/50 text-slate-300 text-xs font-medium rounded-full border border-slate-800"
//                   >
//                     #{tag.name}
//                   </span>
//                 ))}
//               </div>

//               {/* Sommaire mobile */}
//               {toc.length > 0 && (
//                 <details className="lg:hidden mb-12 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
//                   <summary className="flex items-center justify-between px-5 py-4 text-green-400 font-medium cursor-pointer">
//                     Sommaire de l’article
//                     <span className="text-xl transition-transform duration-300 group-open:rotate-180">
//                       ▾
//                     </span>
//                   </summary>
//                   <div className="px-5 pb-5 pt-2 space-y-2 text-sm">
//                     {toc.map((item) => (
//                       <a
//                         key={item.id}
//                         href={`#${item.id}`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                         }}
//                         className={`block py-1.5 transition-colors ${activeId === item.id ? 'text-green-400' : 'text-slate-400 hover:text-green-300'
//                           } ${item.level === 3 ? 'pl-6' : ''}`}
//                       >
//                         {item.text}
//                       </a>
//                     ))}
//                   </div>
//                 </details>
//               )}

//               {/* Contenu riche */}
//               <div
//                 ref={contentRef}
//                 className="rich-content"
//               />

//               {/* Similaires */}
//               {similar?.length > 0 && (
//                 <div className="mt-20 pt-12 border-t border-green-900/30">
//                   <h2 className="text-2xl sm:text-3xl font-bold mb-8">Articles similaires</h2>
//                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {similar.map((sim) => (
//                       <Link
//                         key={sim.id}
//                         href={`${urls.blog_show}${sim.slug}`}
//                         className="group flex flex-col bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
//                       >
//                         {sim.image && (
//                           <img
//                             src={`/storage/${sim.image}`}
//                             alt={sim.title}
//                             className="w-full aspect-video object-cover"
//                             loading="lazy"
//                           />
//                         )}
//                         <div className="p-5">
//                           <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors line-clamp-2">
//                             {sim.title}
//                           </h3>
//                           <p className="mt-3 text-sm text-slate-400 line-clamp-2">
//                             {sim.excerpt || 'Lire la suite...'}
//                           </p>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }





import { Head, Link } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';
import NavBar from '../components/NavBar';
// import './blog.css';

type TocItem = { id: string; text: string; level: number };

function RichContent({ html }: { html: string }) {
  return (
    <div
      className="blog-rich-content rich-content "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function BlogShow({ article, similar, urls }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Générer le sommaire + IDs
  useEffect(() => {
    if (!article.content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(article.content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');

    const tocItems: TocItem[] = Array.from(headings).map((h, i) => {
      const id = `h-${i}`;
      h.id = id;
      return { id, text: h.textContent?.trim() || '', level: h.tagName === 'H2' ? 2 : 3 };
    });

    setToc(tocItems);
    setHtmlContent(doc.body.innerHTML);
  }, [article.content]);

  // Détection titre actif au scroll
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + 120; // offset navbar
      let current = '';
      toc.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= pos) current = item.id;
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  // Cleanup complet au démontage pour éviter les styles persistants
  useEffect(() => {
    return () => {
      setToc([]);
      setActiveId('');
      setHtmlContent('');
      if (contentRef.current) contentRef.current.innerHTML = '';
      document.body.style.background = '';
    };
  }, []);

  return (
    <>
      <Head title={article.title} />
      <NavBar />

      <div className="min-h-screen bg-black text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Sommaire desktop */}
          {toc.length > 0 && (
            <aside className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0 border-r border-green-900/30 bg-black sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 px-6">
              <h3 className="text-base font-semibold text-green-400 mb-5 uppercase tracking-wide">
                Sommaire
              </h3>
              <nav className="space-y-1.5 text-sm">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`block py-1.5 transition-colors duration-200 ${activeId === item.id
                      ? 'text-green-400 font-medium pl-4 border-l-2 border-green-500'
                      : 'text-slate-400 hover:text-green-300 pl-4'
                      } ${item.level === 3 ? 'pl-8' : ''}`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Contenu principal */}
          <main className="flex-1">
            <div className="w-full px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
              {/* Retour */}
              <Link
                href={urls.blog_index}
                className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium mb-8"
              >
                ← Retour au blog
              </Link>

              {/* Titre */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-green-300/70 text-sm mb-10">
                <span>Par {article.user?.name || 'NJIMOLUXE'}</span>
                <span>•</span>
                <time>
                  {new Date(article.published_at).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {/* Catégories & tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {article.categories?.map((cat) => (
                  <span
                    key={cat.id}
                    className="px-3 py-1 bg-green-950/50 text-green-300 text-xs font-medium rounded-full border border-green-900/40"
                  >
                    {cat.name}
                  </span>
                ))}
                {article.tags?.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-slate-900/50 text-slate-300 text-xs font-medium rounded-full border border-slate-800"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Sommaire mobile */}
              {toc.length > 0 && (
                <details className="lg:hidden mb-12 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 text-green-400 font-medium cursor-pointer">
                    Sommaire de l’article
                    <span className="text-xl transition-transform duration-300 group-open:rotate-180">▾</span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 space-y-2 text-sm">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`block py-1.5 transition-colors ${activeId === item.id ? 'text-green-400' : 'text-slate-400 hover:text-green-300'
                          } ${item.level === 3 ? 'pl-6' : ''}`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </details>
              )}

              {/* Contenu riche */}
              <div ref={contentRef}>
                <RichContent html={htmlContent} />
              </div>

              {/* Similaires */}
              {similar?.length > 0 && (
                <div className="mt-20 pt-12 border-t border-green-900/30">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-8">Articles similaires</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {similar.map((sim) => (
                      <Link
                        key={sim.id}
                        href={`${urls.blog_show}${sim.slug}`}
                        className="group flex flex-col bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
                      >
                        {sim.image && (
                          <img
                            src={`/storage/${sim.image}`}
                            alt={sim.title}
                            className="w-full aspect-video object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                            {sim.title}
                          </h3>
                          <p className="mt-3 text-sm text-slate-400 line-clamp-2">{sim.excerpt || 'Lire la suite...'}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
