<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PhonesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Routes for registration and login (accessible to unauthenticated users)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Routes that require authentication
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user/list', [AuthController::class, 'index']);
    Route::get('/user/phone/{id}', [AuthController::class, 'user_phone']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/logout-all', [AuthController::class, 'logoutAll']);
});


Route::get('/category', [CategoryController::class, 'index'])->name('category');
Route::get('/category/{id}', [CategoryController::class, 'show'])->name('category');
Route::post('/category', [CategoryController::class, 'store'])->name('category'); 
Route::put('/category/{id}', [CategoryController::class, 'update'])->name('category');
Route::delete('/category/{id}', [CategoryController::class, 'destroy'])->name('category');

Route::get('/student', [StudentController::class, 'index'])->name('student');
Route::get('/student/{id}', [StudentController::class, 'show'])->name('student');
Route::post('/student', [StudentController::class, 'store'])->name('student');
Route::put('/student/{id}', [StudentController::class, 'update'])->name('student');
Route::delete('/student/{id}', [StudentController::class, 'destroy'])->name('student');

Route::get('/phone', [PhonesController::class, 'index']);
Route::get('/phone/{id}', [PhonesController::class, 'show']);
Route::post('/phone', [PhonesController::class, 'store']);
Route::put('/phone/{id}', [PhonesController::class, 'update']);
Route::delete('/phone/{id}', [PhonesController::class, 'destroy']);