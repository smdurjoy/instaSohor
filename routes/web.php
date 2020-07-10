<?php

use Illuminate\Support\Facades\Route;

//post routes
Route::get('/getPosts', 'PostController@getPosts');
Route::post('/createPost', 'PostController@createPost');
Route::post('/getUpdatePostData', 'PostController@getUpdatePostData');
Route::post('/updatePost', 'PostController@updatePost');
Route::post('/deletePost', 'PostController@deletePost');

// user route
Route::get('/getUserData', 'UserController@getUserData');
Route::post('/updateUserData', 'UserController@updateUserData');
Route::post('/updateBio', 'UserController@updateBio');

// like count
Route::get('/isLike', 'LikeCommentController@isLike');
Route::get('/likeCount', 'LikeCommentController@likeCount');

// login register 
Route::get('/login-register', 'loginRegController@loginRegPage');
Route::get('/onLogin/{userName}/{password}', 'loginRegController@onLogin');

Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath', '.*');
