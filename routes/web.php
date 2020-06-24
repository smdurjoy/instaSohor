<?php

use Illuminate\Support\Facades\Route;

//post routes
Route::get('/getPosts', 'PostController@getPosts');
Route::post('/createPost', 'PostController@createPost');

// user route
Route::get('/getUserData', 'UserController@getUserData');

Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath', '.*');
