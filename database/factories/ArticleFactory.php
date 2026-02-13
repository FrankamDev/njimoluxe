<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
  public function definition(): array
  {
    $title = $this->faker->sentence(6);

    return [
      'user_id'       => User::factory(), // ou User::inRandomOrder()->first()->id si tu as déjà des users
      'title'         => $title,
      'slug'          => Str::slug($title),
      'excerpt'       => $this->faker->paragraph(2),
      'content'       => $this->faker->paragraphs(8, true), // on remplacera plus tard par rich text
      'is_published'  => $this->faker->boolean(80), // 80% publiés
      'published_at'  => $this->faker->dateTimeBetween('-1 year', 'now'),
    ];
  }

  // État pour article publié
  public function published(): static
  {
    return $this->state(fn(array $attributes) => [
      'is_published' => true,
      'published_at' => now()->subDays(rand(1, 90)),
    ]);
  }
}
