<?php

use Illuminate\Support\Facades\Route;

// login register 
Route::get('/login-register', 'loginRegController@loginRegPage');
Route::post('/onLogin', 'loginRegController@onLogin');
Route::get('/logout', 'loginRegController@onLogout');
Route::post('/register', 'loginRegController@onRegister');

Route::group(['middleware' => 'loginCheck'], function() {
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

    Route::get('/', function () {
        return view('index');
    });

    // React Frontend Routes
    Route::get('{ReactRoutePath}', function () {
        return view('index');
    })->where('ReactRoutePath', '.*');
});

