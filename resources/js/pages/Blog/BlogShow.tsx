import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/layouts/GuestLayout';

export default function BlogShow({ article, similar, urls, currentUser }) {
  return (
    <GuestLayout>
      <Head title={article.title} />

      <div className="py-16 bg-green-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={urls.blog_index}
            className="inline-flex items-center text-green-600 hover:text-green-800 mb-8"
          >
            ← Retour au blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-10">
            <span>Par {article.user?.name || 'Équipe NJIMOLUXE'}</span>
            <span className="hidden sm:block">•</span>
            <time dateTime={article.published_at}>
              {new Date(article.published_at).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          {/* Métadonnées */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.categories.map((cat) => (
              <span
                key={cat.id}
                className="px-4 py-1.5 bg-green-50 text-green-800 rounded-full text-sm font-medium"
              >
                {cat.name}
              </span>
            ))}
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Contenu principal (rich text) */}
          <div
            className="prose prose-lg prose-green max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Articles similaires */}
          {similar && similar.length > 0 && (
            <div className="mt-20 border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Vous aimerez aussi
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {similar.map((sim) => (
                  <Link
                    key={sim.id}
                    href={`${urls.blog_show}${sim.slug}`}
                    className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700">
                      {sim.title}
                    </h3>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {sim.excerpt || sim.short_excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </GuestLayout>
  );
}