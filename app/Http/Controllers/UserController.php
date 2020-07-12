<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function getUserData(Request $request) {
        $username = $request->session()->get('userNameKey');
        $result = User::where('user_name', $username)->get();
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
}
