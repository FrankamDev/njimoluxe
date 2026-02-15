<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
  public function run(): void
  {
    User::updateOrCreate(
      ['email' => 'admin@njimoluxe.com'],
      [
        'name' => 'Frank Admin',
        'password' => bcrypt('hacking48734'),
        'is_admin' => true,
      ]
    );
  }
}
