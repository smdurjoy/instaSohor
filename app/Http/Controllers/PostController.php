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
}
