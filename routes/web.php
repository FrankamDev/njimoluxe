<?php

use App\Http\Controllers\AboutController;
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

Route::get('/devis', [DevisController::class, 'index'])
  ->name('devis.index');
Route::post('/devis', [DevisController::class, 'store'])->name('devis.store');
Route::get('dashboard', function () {
  return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
