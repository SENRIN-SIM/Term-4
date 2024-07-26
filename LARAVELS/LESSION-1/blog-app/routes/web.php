<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// // Define your route
// Route::get('/users', function() {
//     global $users;
//     $allUser = '';
//     foreach ($users as $user) {
//         $allUser.= $user['name']. ' ';
//     }
//     return 'The users are:' . $allUser;
// });

// // return no page to user if they are no page
// Route::fallback(function() {
//     return 'Page not found 404t';
// });

// // prefix use for group pages
// Route::prefix('/produce')->group(function() {
//     Route::get('/', function() {
//         return 'all products';
//     });

//     Route::get('/fruits', function() {
//         return 'all fruits';
//     });

//     Route::get('/vegetables', function() {
//         return 'all vegetables';
//     });
// });

// condition route parameters
// Route::get('/testUser/{id}', function($id) {
//     return "user id is " . $id;
// })->where('id', '[0-9]+');

// Route::get('/username/{username}', function($username) {
//     return "user name is " . $username;
// })->where('username', '[A-Za-z]+');

// Route::get('/myview/{user}', function($user) {
//     return view('home', ['username' => $user]);
// });

Route::get('/', [UserController::class, 'index'] );