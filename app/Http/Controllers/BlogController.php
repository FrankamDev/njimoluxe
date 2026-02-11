<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Resources\PostResource;
use Inertia\Inertia;

class BlogController extends Controller
{
  public function index()
  {
    $posts = Post::query()
      ->latest('id')
      ->paginate(9)
      ->withQueryString(); // garde les paramètres d’URL

    return Inertia::render('Blog/BlogIndex', [
      'posts' => $posts,
    ]);
  }


  public function show($slug)
  {
    $post = Post::where('slug', $slug)->firstOrFail();

    return Inertia::render('Blog/BlogShow', [
      'post' => (new PostResource($post))->resolve(),
    ]);
  }
}
