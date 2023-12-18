<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Auth\AuthController;
use App\Models\Task;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// домашняя страничка
Route::get('/', function () {
    return view('index');
})->name('home');
// документация
Route::get('/documentation', function () {
    return view('documentation');
});


// ------------------------
//          AUTH
// ------------------------
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
// Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
// ------------------------
//          USER
// ------------------------
Route::get('/top', function () {
    return view('top');
});
// для залогинившихся пользователей
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/lk', function () {
        return view('lk');
    });
    Route::get('/task/{id}', [TaskController::class, 'taskId'])->name('task');
});
