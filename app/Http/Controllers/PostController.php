<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function getPosts() {
        $result = Post::with('user')->get();
        $result = json_decode(json_encode($result), true);
//        echo "<pre>"; print_r($result); die();
        return $result;
    }

    function createPost(Request $request) {
        $user = $request->input('user_id');
        $post = $request->input('post_data');
        $result = Post::where('user_id', $user)->insert();
        return $result;
    }
}
