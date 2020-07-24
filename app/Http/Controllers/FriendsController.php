<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Followship;

class FriendsController extends Controller
{
    function isFollow(Request $request, $userName) {
        $user = User::where('user_name', '=', $userName)->first();
        $userId = $user->id;

        $sessionUsername = $request->session()->get('userNameKey');
        $sessionUserData = User::where('user_name', $sessionUsername)->first();
        $sessionUserId = $sessionUserData->id;

        $isFollow = isFollowing($sessionUserId, $userId);
        return $isFollow;
    }

    function countFollowers(Request $request) {
        $id = $request->input('id');
        $is_follow = $request->input('is_follow');

        $sessionUsername = $request->session()->get('userNameKey');
        $sessionUserData = User::where('user_name', $sessionUsername)->first();
        $sessionUserId = $sessionUserData->id;
        $sessionUserFollowing = $sessionUserData->following;

        $randomUserData = User::where('id', $id)->first();
        $randomUserFollowers = $randomUserData->followers;

        if($is_follow  == "Follow") {
            Followship::insert(['user1_id' => $sessionUserId, 'user2_id' => $id]);
            $sessionUserFollowing += 1;
            $randomUserFollowers += 1;
            User::where('id', $sessionUserId)->update(['following' => $sessionUserFollowing]);
            User::where('id', $id)->update(['followers' => $randomUserFollowers]);
        } else {
            Followship::where('user1_id', $sessionUserId)->where('user2_id', $id)->delete();
            $sessionUserFollowing -= 1;
            $randomUserFollowers -= 1;
            User::where('id', $sessionUserId)->update(['following' => $sessionUserFollowing]);
            User::where('id', $id)->update(['followers' => $randomUserFollowers]);
        }
    }
}
