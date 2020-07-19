<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Friend;

class FriendsController extends Controller
{
    function index() {
        $user = User::where('id', 16)->first();
        $friends = Friend::all();

        $userWithFriend = $user->friends()->syncWithoutDetaching($friends);

        return $userWithFriend;
    }

    function getData() {
        $result = User::with('friends')->first();
        $data = $result->friends;
        $dataa = $data[0]['pivot']->user_id;
        return $dataa;
    }
}
