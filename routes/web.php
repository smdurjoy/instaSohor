<?php

use Illuminate\Support\Facades\Route;

// login register 
Route::get('login-register', 'loginRegController@loginRegPage');
Route::post('/onLogin', 'loginRegController@onLogin');
Route::get('/logout', 'loginRegController@onLogout');
Route::post('/register', 'loginRegController@onRegister');

// reset password
Route::match(['get', 'post'],'resetPassword', 'ResetPasswordController@resetPass');
Route::post('changePassword/{pass_reset_token}', 'ResetPasswordController@changePass');
Route::post('updatePassword/{pass_reset_token}', 'ResetPasswordController@updatePass');
Route::get('password-reset-success', 'ResetPasswordController@success');

Route::group(['middleware' => 'loginCheck'], function() {
    // post routes
    Route::get('/getPosts', 'PostController@getPosts');
    Route::post('/createPost', 'PostController@createPost');
    Route::post('/getUpdatePostData', 'PostController@getUpdatePostData');
    Route::post('/updatePost', 'PostController@updatePost');
    Route::post('/deletePost', 'PostController@deletePost');
    Route::get('/getHomePosts', 'PostController@getHomePosts');
    Route::get('/getRandomUserPost/{randomUser}', 'PostController@getRandomUserPost');

    // user route
    Route::get('/getUserData', 'UserController@getUserData');
    Route::post('/updateUserData', 'UserController@updateUserData');
    Route::post('/updateBio', 'UserController@updateBio');
    Route::post('/updatePass', 'UserController@updatePass');
    Route::get('/getRandomUserData/{userName}', 'UserController@getRandomUserData');
    Route::post('/updateProPic', 'UserController@updateProPic');

    // friend routes
    Route::get('/isFollow/{userName}', 'FriendsController@isFollow');
    Route::post('/countFollowers', 'FriendsController@countFollowers');

    // like count
    Route::get('/isLike', 'LikeCommentController@isLike');
    Route::get('/likeCount', 'LikeCommentController@likeCount');

    // main view
    Route::get('/', function () {
        return view('index');
    });

    // React Frontend Routes
    Route::get('{ReactRoutePath}', function () {
        return view('index');
    })->where('ReactRoutePath', '.*');
});

