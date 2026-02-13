<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
  /**
   * Affiche la liste des articles publiés
   */
  public function index()
  {
    $articles = Article::with(['user', 'categories', 'tags'])
      ->orderByDesc('published_at')
      ->paginate(10);

    $categories = Category::withCount('articles')
      ->orderBy('name')
      ->get();

    return inertia('Blog/BlogIndex', [
      'articles'   => $articles,
      'categories' => $categories,

      'urls' => [
        'blog_index'   => '/blog',
        'blog_show'    => '/blog/',
        'category_base' => '/blog/category/',
      ],
    ]);
  }

  /**
   * Affiche un article unique
   */
  public function show(string $slug)
  {
    $article = Article::where('slug', $slug)
      ->with([
        'user',
        'categories',
        'tags',
        'comments' => function ($query) {
          $query->where('approved', true)
            ->orderByDesc('created_at');
        }
      ])
      ->firstOrFail();

    // Articles similaires (même catégories, exclure l'article actuel)
    $similarArticles = Article::published()
      ->where('slug', '!=', $article->slug)
      ->whereHas('categories', function ($q) use ($article) {
        $q->whereIn('categories.id', $article->categories->pluck('id'));
      })
      ->take(4)
      ->get();

    return inertia('Blog/BlogShow', [
      'article'       => $article,
      'similar'       => $similarArticles,
      'currentUser'   => Auth::user() ? [
        'id'   => Auth::id(),
        'name' => Auth::user()->name,
      ] : null,
      'urls' => [
        'blog_index' => '/blog',
        'blog_show'  => '/blog/',
      ],
    ]);
  }
}
