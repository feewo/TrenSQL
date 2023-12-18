<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\LevelAdminController;
use App\Http\Controllers\Admin\BaseAdminController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\Admin\RoleAdminController;
use App\Http\Controllers\Admin\TaskAdminController;
use App\Http\Controllers\Admin\SessionAdminController;
use App\Http\Controllers\Admin\MainAdminController;

Route::group(['middleware' => 'auth_api'], function () {
    // ------------------------
    //          USER
    // ------------------------
    // Топ пользователей нынешнего учебного года
    Route::get('/user-nowtop', [UserController::class, 'NowYearTop'])->name('top-now');
    // Топ пользователей прошлого учебного года
    Route::get('/user-lasttop', [UserController::class, 'LastYearTop'])->name('top-last');
    // Общий топ пользователей
    Route::get('/user-top', [UserController::class, 'Top'])->name('top');
    // Топ 5 пользователей за нынешний учеьный год
    Route::get('/user-top5', [UserController::class, 'Top5'])->name('top-now-5');

    // ------------------------
    //          TASK
    // ------------------------
    // Список заданий по сложности
    Route::get('/listtask/{lvl}', [TaskController::class, 'listtask'])->name('task-lvl');
    Route::get('/levels', [TaskController::class, 'levels'])->name('levels');
    // ------------------------
    //          AUTH
    // ------------------------
    Route::group(['prefix' => 'auth'], function(){
        Route::post('login', [AuthController::class, 'login'])->name('login');
        Route::post('signup', [AuthController::class, 'signup'])->name('registration');
    });

    // !!! для зарегестрированный пользователей!
    Route::group(['middleware' => 'auth:api'], function () {
        // авторизация
        Route::get('logout', [AuthController::class, 'logout'])->name('logout');
        // задания
        Route::post('/taskCheck/{id}', [TaskController::class, 'taskCheck'])->name('taskCheck');
        Route::get('/task/{id}', [TaskController::class, 'task'])->name('task');
        Route::get('/task-user-count', [TaskController::class, 'taskCount'])->name('taskCount');
        Route::post('/user-update', [UserController::class, 'UserUpdate'])->name('UserUpdate');
    });
});
