<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RealisationsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/realisations', [RealisationsController::class, 'index'])
  ->name('realisation.index');
Route::get('/about', [AboutController::class, 'index'])
  ->name('about.index');
Route::get('/contact', [ContactController::class, 'index'])
  ->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::post('/api/chat', [ChatController::class, 'handle'])->name('chat.handle');

Route::get('/blog/image/{filename}', function ($filename) {
  return response()->file(storage_path('app/public/blog/' . $filename));
})->name('blog.image');

Route::get('/blog/{slug}', [BlogController::class, 'show'])
  ->name('blog.show');

// Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/devis', [DevisController::class, 'index'])
  ->name('devis.index');


Route::prefix('blog')->name('blog.')->group(function () {
  Route::get('/', [BlogController::class, 'index'])->name('index');
  Route::get('/{slug}', [BlogController::class, 'show'])->name('show');
});

Route::get('dashboard', function () {
  return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
