<?php
use Illuminate\Http\Request;

function isFollowing($sessionUserId, $id) {

    if(\App\Followship::where('user1_id', $sessionUserId)->where('user2_id', $id)->exists()) {
        return "Unfollow";
    } 
    else {
        return "Follow"; 
    }
}