import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/layouts/GuestLayout'; // ou ta navbar publique

export default function BlogIndex({ articles, categories, urls }) {
  return (
    <GuestLayout>
      <Head title="Blog - NJIMOLUXE" />

      <div className="py-16 bg-green-550 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Blog NJIMOLUXE
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Tendances, inspirations et réalisations en décoration et ameublement haut de gamme
            </p>
          </div>

          {/* Catégories (cliquables mais sans filtre pour l'instant) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`${urls.category_base}${cat.slug}`} // futur filtre
                className="px-5 py-2  border border-gray-200 rounded-full text-sm font-medium hover:bg-green-50 hover:border-green-200 transition-colors"
              >
                {cat.name} <span className="text-gray-500">({cat.articles_count})</span>
              </Link>
            ))}
          </div>

          {/* Grille des articles */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.data.map((article) => (
              <Link
                key={article.id}
                href={`${urls.blog_show}${article.slug}`}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Placeholder image */}
                <div className="aspect-[5/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-medium">Image à venir</span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat.id}
                        className="text-xs font-medium px-3 py-1  text-green-700 rounded-full"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-gray-600 line-clamp-3 text-sm">
                    {article.excerpt || article.short_excerpt || 'Aucun résumé disponible'}
                  </p>

                  <div className="mt-5 flex items-center text-sm text-gray-500">
                    <span>Par {article.user?.name || 'Équipe NJIMOLUXE'}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.published_at}>
                      {new Date(article.published_at).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination basique */}
          {articles.links && articles.links.length > 3 && (
            <div className="mt-12 flex justify-center gap-3 flex-wrap">
              {articles.links.map((link, index) => {
                if (!link.url) {
                  return (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  );
                }

                return (
                  <Link
                    key={index}
                    href={link.url}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${link.active
                      ? 'bg-green-600 text-white'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </GuestLayout>
  );
}