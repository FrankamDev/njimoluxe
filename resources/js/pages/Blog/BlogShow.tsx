
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import type { Post } from "@/types";
import CommentSection from "../../Comments/CommentSection";
import NavBar from "../components/NavBar";

export default function BlogShow({ post }: { post: Post }) {
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

  // Générer la table des matières automatiquement à partir des titres (h2, h3)
  useEffect(() => {
    const headings = document.querySelectorAll(".rich-content h2, .rich-content h3");
    const tocItems = Array.from(headings).map((heading) => {
      const level = heading.tagName === "H2" ? 2 : 3;
      const text = heading.textContent || "";
      const id = heading.id || `heading-${Math.random().toString(36).substr(2, 9)}`;
      heading.id = id; // On assigne un ID si il n'y en a pas
      return { id, text, level };
    });
    setToc(tocItems);
  }, [post.content]);

  return (
    <>
      <Head title={post.title}>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
      </Head>

      <NavBar />

      <div className="min-h-screen bg-black text-white">
        {/* Conteneur principal full-width */}
        <div className="relative">
          {/* Image hero full-bleed */}
          {post.image_url && (
            <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
              <img
                src={post.image_url}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-10 md:px-12 md:pb-16">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
                  {post.title}
                </h1>
              </div>
            </div>
          )}

          {/* Contenu principal */}
          <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12 -mt-16 md:-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 xl:gap-16">
              {/* Article */}
              <main className="relative pt-10 md:pt-16 pb-20">
                {/* Meta auteur */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-bold text-lg overflow-hidden border-2 border-emerald-500/40">
                    {post.author?.avatar ? (
                      <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{post.author?.initials || "NJ"}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-lg">{post.author?.name || "Njimolux"}</div>
                    <div className="text-sm text-gray-400">
                      {post.published_at} • {post.category}
                    </div>
                  </div>
                </div>

                {/* Contenu riche */}
                <article className="rich-content">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Interaction bar */}
                <div className="mt-16 pt-10 border-t border-gray-800 flex flex-wrap gap-6 text-gray-400">
                  <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                    <span>👍</span> J'aime
                  </button>
                  <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                    <span>💬</span> Commenter
                  </button>
                  <button className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                    <span>↗️</span> Partager
                  </button>
                </div>
              </main>

              {/* Sommaire sticky */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-5 flex items-center gap-2">
                      <span className="text-xl">≡</span> Sommaire
                    </h3>

                    <nav className="text-sm space-y-2.5 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                      {toc.length === 0 ? (
                        <p className="text-gray-500 italic text-sm">Aucun titre détecté</p>
                      ) : (
                        toc.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block transition-all duration-200 hover:text-emerald-400 ${item.level === 3 ? "pl-5 text-gray-400" : "font-medium text-gray-200"
                              } hover:translate-x-1`}
                          >
                            {item.text}
                          </a>
                        ))
                      )}
                    </nav>
                  </div>
                </div>
              </aside>
            </div>

            {/* Commentaires */}
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-800">
              <CommentSection comments={post.comments || []} postId={post.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}