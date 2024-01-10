<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/users', [UserController::class, 'register']);
Route::get('verify_token', [AuthController::class, 'verifyToken']);
Route::group([
    'middleware' => 'api',
], function($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products', [ProductController::class, 'index']);
});
