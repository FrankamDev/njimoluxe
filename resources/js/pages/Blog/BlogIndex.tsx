
import { Head, Link } from '@inertiajs/react';
import Navbar from '../components/NavBar';
import NavBar from '../components/NavBar';

export default function BlogIndex({ articles, urls }) {
  return (

    <>
      <NavBar />
      <div className="bg-black">
        <Head title="Blog - NJIMOLUXE" />

        <div className=" text-white flex flex-col">
          {/* Header */}
          <div className="py-28">

            <div className="w-full py-10 text-center border-b border-green-900/30 flex-shrink-0">\
              <h1 className="text-4xl font-bold">Blog NJIMOLUXE</h1>
              <p className="mt-2 text-green-300/80">Inspirations et tendances du moment</p>
            </div>

            {/* Grille cartes */}
            <div className="flex-grow w-full flex">
              <div className="w-full grid gap-6 p-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {articles.data.map((article) => (
                  <Link
                    key={article.id}
                    href={`${urls.blog_show}${article.slug}`}
                    className="flex flex-col bg-gray-900 rounded-xl overflow-hidden border border-green-900/30 hover:shadow-lg transition"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] bg-black/60">
                      {article.image ? (
                        <img
                          src={`/storage/${article.image}`}
                          alt={article.title}
                          className="w-full h-62 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-green-800/40">
                          NJIMOLUXE
                        </div>
                      )}
                    </div>

                    {/* Texte */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h2 className="text-lg font-bold text-white mb-1 truncate">
                        {article.title}
                      </h2>
                      <p className="text-slate-300 text-sm line-clamp-3 mb-2">
                        {article.excerpt || article.content?.substring(0, 100) + '...'}
                      </p>
                      <div className="mt-auto flex justify-between text-slate-500 text-xs">
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
            </div>

            {/* Pagination */}
            {articles.links?.length > 3 && (
              <div className="mt-6 flex justify-center gap-2 mb-6 flex-shrink-0">
                {articles.links.map((link, i) =>
                  link.url ? (
                    <Link
                      key={i}
                      href={link.url}
                      className={`px-4 py-2 rounded text-sm ${link.active ? 'bg-emerald-700 text-white' : 'bg-gray-800 text-slate-300'
                        }`}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  ) : (
                    <span
                      key={i}
                      className="px-4 py-2 rounded text-sm text-slate-600 bg-gray-900 cursor-not-allowed"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
