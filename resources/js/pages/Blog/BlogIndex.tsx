// import { Head, Link } from '@inertiajs/react';


// export default function BlogIndex({ articles, urls }) {
//   return (
//     <>
//       <Head title="Blog - NJIMOLUXE" />


//       <div className="min-h-screen bg-black mt-22 text-white">

//         {/* Header simple et centré */}
//         <header className="border-b border-green-900/30 py-16 px-5 sm:px-8 text-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
//             Blog NJIMOLUXE
//           </h1>
//           <p className="mt-3 text-base sm:text-lg text-green-300/70 max-w-xl mx-auto">
//             Inspirations, tendances et réalisations haut de gamme
//           </p>
//         </header>

//         {/* Contenu principal */}
//         <main className="w-full">
//           <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
//             {/* Grille cartes */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
//               {articles.data.map((article) => (
//                 <Link
//                   key={article.id}
//                   href={`${urls.blog_show}${article.slug}`}
//                   className="group flex flex-col bg-gradient-to-b from-slate-950 to-black rounded-xl overflow-hidden border border-green-900/30 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
//                 >
//                   {/* Image */}
//                   <div className="aspect-[4/3] overflow-hidden bg-black/60">
//                     {article.image ? (
//                       <img
//                         src={`/storage/${article.image}`}
//                         alt={article.title}
//                         className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center text-green-800/30 text-xl font-light">
//                         NJIMOLUXE
//                       </div>
//                     )}
//                   </div>

//                   {/* Contenu texte */}
//                   <div className="flex flex-col flex-grow p-5 sm:p-6 lg:p-7">
//                     <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-green-400 transition-colors mb-3 leading-tight line-clamp-2">
//                       {article.title}
//                     </h2>

//                     <p className="text-sm text-slate-300/90 leading-relaxed mb-4 flex-grow line-clamp-3">
//                       {article.excerpt || article.content?.substring(0, 140) + '...' || 'Découvrir l’article'}
//                     </p>

//                     <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-green-900/30">
//                       <span>{article.user?.name || 'NJIMOLUXE'}</span>
//                       {article.published_at && (
//                         <time>
//                           {new Date(article.published_at).toLocaleDateString('fr-FR', {
//                             year: 'numeric',
//                             month: 'short',
//                             day: 'numeric',
//                           })}
//                         </time>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Pagination – minimaliste */}
//             {articles.links?.length > 3 && (
//               <div className="mt-12 flex justify-center gap-2 flex-wrap">
//                 {articles.links.map((link, i) => {
//                   if (!link.url) {
//                     return (
//                       <span
//                         key={i}
//                         className="px-4 py-2 bg-slate-900/60 text-slate-600 rounded-lg text-sm cursor-not-allowed border border-green-900/30"
//                         dangerouslySetInnerHTML={{ __html: link.label }}
//                       />
//                     );
//                   }

//                   return (
//                     <Link
//                       key={i}
//                       href={link.url}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${link.active
//                         ? 'bg-green-700 text-white border-green-600'
//                         : 'bg-slate-900/60 text-slate-300 border border-green-900/30 hover:bg-green-950/60 hover:border-green-700/50'
//                         }`}
//                       dangerouslySetInnerHTML={{ __html: link.label }}
//                     />
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }




import { Head, Link } from '@inertiajs/react';
import NavBar from '../components/NavBar';

export default function BlogIndex({ articles, urls }) {
  return (
    <>
      <Head title="Blog - NJIMOLUXE" />

      <div className="min-h-screen bg-black text-white">
        <NavBar />
        {/* Header simple et centré */}
        <header className="border-b border-green-900/30 py-16 px-5 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Blog NJIMOLUXE
          </h1>
          <p className="mt-3 text-base sm:text-lg text-green-300/70 max-w-xl mx-auto">
            Inspirations, tendances et réalisations haut de gamme
          </p>
        </header>

        {/* Contenu principal */}
        <main className="w-full">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">

            {/* Grille cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {articles.data.map((article) => (
                <Link
                  key={article.id}
                  href={`${urls.blog_show}${article.slug}`}
                  className="group flex flex-col bg-gradient-to-b from-slate-950 to-black rounded-xl overflow-hidden border border-green-900/30 hover:border-green-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-black/60">
                    {article.image ? (
                      <img
                        src={`/storage/${article.image}`}
                        alt={`Image de l’article ${article.title}`}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-green-800/30 text-xl font-light">
                        NJIMOLUXE
                      </div>
                    )}
                  </div>

                  {/* Contenu texte */}
                  <div className="flex flex-col flex-grow p-5 sm:p-6 lg:p-7 min-h-[220px]">
                    <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-green-400 transition-colors mb-3 leading-tight line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-sm text-slate-300/90 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {article.excerpt || article.content?.substring(0, 140) + '...' || 'Découvrir l’article'}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-green-900/30">
                      <span>{article.user?.name || 'NJIMOLUXE'}</span>
                      {article.published_at && (
                        <time>
                          {new Date(article.published_at).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination – minimaliste */}
            {articles.links?.length > 3 && (
              <div className="mt-12 flex justify-center gap-2 flex-wrap">
                {articles.links.map((link, i) => {
                  if (!link.url) {
                    return (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-900/60 text-slate-600 rounded-lg text-sm cursor-not-allowed border border-green-900/30"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                      />
                    );
                  }

                  return (
                    <Link
                      key={i}
                      href={link.url}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${link.active
                        ? 'bg-green-700 text-white border-green-600'
                        : 'bg-slate-900/60 text-slate-300 border border-green-900/30 hover:bg-green-950/60 hover:border-green-700/50'
                        }`}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  );
                })}
              </div>
            )}

          </div>
        </main>
      </div>
    </>
  );
}
