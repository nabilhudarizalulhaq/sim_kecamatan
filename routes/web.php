<?php

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DesaController;
use App\Http\Controllers\Admin\StatistikController;
use App\Http\Controllers\Admin\LayananController as AdminLayananController;
use App\Http\Controllers\Admin\PengaduanController;

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\LayananController;
use App\Http\Controllers\Frontend\BeritaController;

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Frontend Website
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/berita', [BeritaController::class, 'index']);



/*
|--------------------------------------------------------------------------
| Admin Panel
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->prefix('admin')->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

    Route::resource('desa', DesaController::class);
    Route::resource('statistik', StatistikController::class);
    Route::resource('layanan', AdminLayananController::class);
    Route::resource('pengaduan', PengaduanController::class);

});



/*
|--------------------------------------------------------------------------
| User Profile
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});


require __DIR__.'/auth.php';