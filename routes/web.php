<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RealisationsController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


// Route::get('/users', UserController::class)
    // ->names('admin.users');


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/realisations', [RealisationsController::class, 'index'])
  ->name('realisation.index');
Route::get('/about', [AboutController::class, 'index'])
  ->name('about.index');
Route::get('/devis', [ContactController::class, 'index'])
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



// Route::middleware(['auth','verified'])->group(function () {

//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     });

    

//     Route::get('/dashboard/devis', function () {
//         return Inertia::render('Admin/Devis/DevisIndex');
//     });

//     Route::get('/dashboard/devis', [ContactController::class, 'index'])
//         ->name('dashboard.devis');
      
//  Route::get('/dashboard/devis', [DevisController::class, 'devis'])
//         ->name('dashboard.devis');

//         Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

//     // Sous-sections (même composant React, mais contenu différent)
//     Route::get('/dashboard/users', [DashboardController::class, 'users'])->name('dashboard.users');
//     Route::get('/dashboard/devis', [DashboardController::class, 'devis'])->name('dashboard.devis');
// });



Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');


    Route::get('/dashboard/users', [DashboardController::class, 'users'])->name('dashboard.users');

    
    Route::get('/dashboard/devis', [DashboardController::class, 'devis'])->name('dashboard.devis');

    
});


require __DIR__ . '/settings.php';