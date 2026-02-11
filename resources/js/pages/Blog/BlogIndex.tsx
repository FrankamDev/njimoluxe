import { Head, Link } from "@inertiajs/react";
import type { Pagination, Post } from "@/types";
import NavBar from "../components/NavBar";

export default function BlogIndex({ posts }: { posts: Pagination<Post> }) {
  return (
    <>
      <Head title="Blog" />
      <NavBar />
      <div className="min-h-screen mt-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="mb-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Blog de Njimoluxe
            </h1>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Découvrez nos derniers articles, conseils et ressources.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.data.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition duration-300 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] h-full flex flex-col">

                  {/* Image */}
                  {post.image_url && (
                    <div className="overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {post.category && (
                      <span className="inline-block mb-3 text-xs font-semibold tracking-wider uppercase text-green-400">
                        {post.category}
                      </span>
                    )}

                    <h2 className="text-xl font-bold mb-3 group-hover:text-green-400 transition">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                      {(post.excerpt ?? post.content ?? "").substring(0, 120) + "..."}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
                      <span>{post.published_at}</span>
                      <span className="text-green-400 font-semibold group-hover:underline">
                        Lire →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {posts?.meta?.links && posts.meta.links.length > 3 && (
            <div className="mt-16 flex justify-center space-x-2">
              {posts.meta.links.map((link, key) => (
                link.url ? (
                  <Link
                    key={key}
                    href={link.url}
                    className={`px-4 py-2 border rounded-full text-sm font-medium transition duration-300 ${link.active
                      ? "bg-green-600 border-green-600 text-white"
                      : "border-gray-700 text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                ) : (
                  <span
                    key={key}
                    className="px-4 py-2 border border-gray-800 rounded-full text-sm font-medium text-gray-600 cursor-not-allowed"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                )
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
