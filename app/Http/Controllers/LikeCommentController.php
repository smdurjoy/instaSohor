<?php

namespace App\Http\Controllers;

use App\Like;
use Illuminate\Http\Request;

class LikeCommentController extends Controller
{
    function likePush(Request $request) {
        $id = $request->input('id');
        $userId = $request->input('user_id');
        $postId = $request->input('post_id');
        $result = Like::insert(['']);
        return $result;
    }

    function likeCount() {
        $result = Like::all();
        return $result;
    }
}
