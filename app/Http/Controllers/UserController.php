<?php

namespace App\Http\Controllers;

use App\User;
use App\Friend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function getUserData(Request $request) {
        $username = $request->session()->get('userNameKey');
        $result = User::where('user_name', $username)->select(['id', 'full_name', 'bio', 'address', 'work', 'education', 'user_name', 'email'])->get();
        return $result;
    }

    function updateUserData(Request $request) {
        $id = $request->input('id');
        $fullName = $request->input('full_name');
        $userName = $request->input('user_name');
        $email = $request->input('email');
        $education = $request->input('education');
        $work = $request->input('work');
        $address = $request->input('address');

        $result = User::where('id', $id)->update(['full_name' => $fullName, 'user_name' => $userName, 'email' => $email, 'education' => $education, 'work' => $work, 'address' => $address]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function updateBio(Request $request) {
        $id = $request->input('id');
        $bio = $request->input('bio');
        User::where('id', $id)->update(['bio' => $bio]);
    }

    function updatePass(Request $request) {
        $id = $request->input('id');
        $crntPass =$request->input('crntPass');
        $newPass = Hash::make($request->input('newPass'));

        $user = User::where('id', $id)->first();
        
        if(!Hash::check($crntPass, $user->password)) {
            return 2;
        }
        
        $result = User::where('id', $id)->update(['password' => $newPass]);

        if($result == true) {
            return 1;
        }

        return 0;
    }

    function getRandomUserData(Request $request, $userName) {
        $sessionUserName = $request->session()->get('userNameKey');
        $sessionUser = User::where('user_name', '=', $sessionUserName)->first();
        $sessionUserId = $sessionUser->id;

        $user = User::where('user_name', '=', $userName)->select('id', 'full_name', 'bio', 'address', 'work', 'education', 'followers')->first();
        $friends = $user->friends->where('id', $sessionUserId)->first();
        $is_follow = $user->friends->where('id', $sessionUserId)->first()->pivot->is_follow;
  
        $result = array('user' => $user, 'friend' => $friends);
        return $result;
    }

    function getRandomUserFriend($userName) {
        $user = User::where('user_name', '=', $userName)->first();
        $data = $user->whereDoesHave('users', function ($query) use ($user) {
            $query->where("user_id", "=", $user->id);
        });
    }

    function followers(Request $request) {
        $username = $request->session()->get('userNameKey');
        $sessionUserData = User::where('user_name', $username)->first();
        $sessionUserId = $sessionUserData->id;
        $userData = Follower::where('user_id', '=', $sessionUserId)->first();
        return $userData;
    }

    function countFollowers(Request $request) {

        $id = $request->input('id');
        $isFollow = $request->input('isFollow');
        $randomUser = $request->input('randomUser');

        $sessionUserName = $request->session()->get('userNameKey');
        $sessionUser = User::where('user_name', '=', $sessionUserName)->first();
        $sessionUserId = $sessionUser->id;

        if($isFollow == 0) {
            $user = User::where('user_name', '=', $randomUser)->first();
            $is_follow = $user->friends->where('id', $sessionUserId)->first()->pivot->is_follow;
            $followBtnText = $user->friends->where('id', $sessionUserId)->first()->pivot->follow_btn_text;
            $is_follow += 1;

            $is_follow = $user->friends->where('id', $sessionUserId)->first()->pivot->update(['is_follow' => $is_follow, 'follow_btn_text' => 'Unfollow']);
        }
        else if($isFollow == 1){
            $user = User::where('user_name', '=', $randomUser)->first();
            $is_follow = $user->friends->where('id', $sessionUserId)->first()->pivot->is_follow;
            $followBtnText = $user->friends->where('id', $sessionUserId)->first()->pivot->follow_btn_text;
            $is_follow -= 1;

            $is_follow = $user->friends->where('id', $sessionUserId)->first()->pivot->update(['is_follow' => $is_follow, 'follow_btn_text' => 'Follow']);
        } 
    }
}
