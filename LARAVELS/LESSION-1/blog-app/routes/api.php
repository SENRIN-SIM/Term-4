<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::get('/post', function(){
    return [
        "name" =>"sernin",
        "age" => 20,
        "gender" => "male"
    ];
});







Route::get('/user/{id}/post/{postId}', function($id,$postId){
    global $users;
    if (isset($users[$id])){
        if (isset($users[$id]['posts'][$postId])){
            return $users[$id]['name'].' post a message: '. $users[$id]['posts'][$postId];
        }else{
            return "Can't find post id " . $postId . ' in user id '.$id;
        }
    }else{
        return "Can't find user id ". $id;
    }

})->where('id','[0-9]+', 'postId','[0-9]+');

// prifix
Route::prefix('/users')->group(function(){
    Route::get('/user', function(){
        global $users;
        return $users;
    });

    // Define your route
    Route::get('/user/{index}', function($index) {
        global $users;
        if (isset($users[$index])){
            return response()->json($users[$index]);
        }
        
    })->where('indes','[0-9]+');

    // // Define route by name
    Route::get('/users/{username}', function($username){
        global $users;
        foreach ($users as $user){
            if ($user['name'] == $username){
                return response()->json($user);
            }
        }

    })->where('username','[A-Za-z]+');
});

Route::fallback(function(){
    return 'You cannot get user like this';
});