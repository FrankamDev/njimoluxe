<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
  public function run(): void
  {
    // Catégories (safe)
    $categoriesData = ['Tech', 'Lifestyle', 'Business', 'Art', 'Science', 'Health', 'Travel', 'Education'];
    $categories = collect($categoriesData)->map(function ($name) {
      return Category::updateOrCreate(
        ['name' => $name],
        ['slug' => \Str::slug($name)]
      );
    });

    // Tags (safe)
    $tagsData = ['laravel', 'php', 'react', 'vue', 'javascript', 'css', 'html', 'web', 'backend', 'frontend', 'design', 'autem'];
    $tags = collect($tagsData)->map(function ($name) {
      return Tag::updateOrCreate(
        ['slug' => \Str::slug($name)],
        ['name' => $name]
      );
    });

    // Articles (avec relations)
    Article::factory()
      ->count(20)
      ->published()
      ->create()
      ->each(function ($article) use ($categories, $tags) {
        // Attacher 1 à 4 catégories aléatoires
        $article->categories()->sync(
          $categories->random(rand(1, 4))->pluck('id')->toArray()
        );

        // Attacher 2 à 6 tags aléatoires
        $article->tags()->sync(
          $tags->random(rand(2, 6))->pluck('id')->toArray()
        );

        // Ajouter 3 à 12 commentaires par article
        Comment::factory()
          ->count(rand(3, 12))
          ->create(['article_id' => $article->id]);
      });

    $this->command->info('Blog seeded safely: 20 articles, catégories, tags et commentaires créés !');
  }
}
