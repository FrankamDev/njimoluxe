<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
  public function definition(): array
  {
    return [
      'article_id' => Article::factory(),
      'user_id'    => $this->faker->boolean(70) ? User::factory() : null,
      'name'       => $this->faker->name(),
      'email'      => $this->faker->safeEmail(),
      'content'    => $this->faker->paragraph(3),
      'approved'   => $this->faker->boolean(60), // 60% approuvés
    ];
  }
}
