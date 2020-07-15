<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function getPosts() {
        $result = Post::with('user')->whereHas('user', function($query) {
            $username = session()->get('userNameKey');
            $query->where('user_name', $username);
        })->orderBy('id', 'desc')->get();

        $result = json_decode(json_encode($result), true);
        return $result;
    }

    function createPost(Request $request) {
        $user = $request->input('user_id');
        $post = $request->input('post_data');
        $postTime = $request->input('postTime');
        $result = Post::where('user_id', $user)->insert(['user_id' => $user, 'post_data' => $post, 'post_time' => $postTime]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function getUpdatePostData(Request $request) {
        $id = $request->input('id');
        $result = Post::where('id', $id)->get();
        return $result;
    }

    function updatePost(Request $request) {
        $id = $request->input('id');
        $postData = $request->input('post_data');
        $result = Post::where('id', $id)->update(['post_data' => $postData]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function deletePost(Request $request) {
        $id = $request->input('id');
        $result = Post::where('id', $id)->delete();
        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function getHomePosts() {
        $username = session()->get('userNameKey');
        $sessionUserData = User::where('user_name', $username)->first();
        $sessionUserId = $sessionUserData->id;

        $result =  Post::where('user_id', '!=', $sessionUserId)->with('user')->inRandomOrder()->get();
        return $result;
    }

    function getRandomUserPost($id) {
        $result = Post::where('user_id', $id)->with('user')->orderBy('id', 'desc')->get();
        return $result;
    }
}
