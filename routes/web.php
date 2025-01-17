<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', [AuthController::class,'login'])->name('login');
Route::post('check/credentials',[AuthController::class,'checkCredentials'])->name('check.credentials');

Route::resource('/admins',AdminController::class);
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
