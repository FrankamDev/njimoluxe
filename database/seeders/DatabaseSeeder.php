<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // User::factory(10)->create();

    User::updateOrCreate(
      ['email' => 'frankamdev@gmail.com'], // clé unique
      [
        'name' => 'Frank',
        'password' => bcrypt('password'),
        'email_verified_at' => now(),
      ]
    );
    $this->call([
      // tes autres seeders si tu en as
      \Database\Seeders\BlogSeeder::class,
    ]);
  }
}
