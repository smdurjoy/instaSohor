<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function getPosts() {
        $result = Post::with('user')->orderBy('id', 'desc')->get();
        $result = json_decode(json_encode($result), true);
//        echo "<pre>"; print_r($result); die();
        return $result;
    }

    function createPost(Request $request) {
        $user = $request->input('user_id');
        $post = $request->input('post_data');
        $result = Post::where('user_id', $user)->insert(['user_id' => $user, 'post_data' => $post]);

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
}
